import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Wifi, WifiOff, Bot, User, ChevronDown, Phone } from 'lucide-react';

const ADMIN_OFFLINE_HOURS = () => {
  const now = new Date();
  const hour = now.getHours();
  const day = now.getDay();
  // Mon–Sat 8AM–8PM = online, else offline
  return day === 0 || hour < 8 || hour >= 20;
};

const BOT_RESPONSES = {
  greetings: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'kumusta', 'musta'],
  menu: ['menu', 'food', 'kinalas', 'bulalo', 'paksiw', 'price', 'presyo', 'order', 'what do you serve', 'what do you have'],
  hours: ['open', 'close', 'hours', 'oras', 'bukas', 'schedule', 'when', 'kelan'],
  location: ['where', 'location', 'address', 'saan', 'map', 'directions', 'find you'],
  contact: ['call', 'phone', 'number', 'contact', 'facebook', 'messenger', 'message'],
  delivery: ['deliver', 'delivery', 'take out', 'takeout', 'pickup', 'bring'],
  price: ['how much', 'magkano', 'cost', 'price', 'presyo', 'bayad'],
};

function getBotReply(text) {
  const lower = text.toLowerCase();

  if (BOT_RESPONSES.greetings.some(w => lower.includes(w))) {
    return {
      text: "Kumusta! 👋 Welcome to 3L's Kinalas & Eatery! I'm your virtual assistant. How can I help you today?\n\nYou can ask me about:\n• 🍜 Our menu & prices\n• 🕐 Opening hours\n• 📍 How to find us\n• 📞 How to contact us\n• 🛵 Delivery & pickup",
    };
  }
  if (BOT_RESPONSES.menu.some(w => lower.includes(w))) {
    return {
      text: "Here's a quick look at our menu highlights:\n\n🍜 **Kinalas**\n• Special Kinalas — ₱85\n• Kinalas w/ Egg — ₱75\n• Regular Kinalas — ₱60\n• Log-Log w/ Egg — ₱50\n• Log-Log Plain — ₱35\n\n🥘 **Soups & Merienda**\n• Paksiw Laman — ₱80\n• Paksiw Halo — ₱70\n• Puto & Dinuguan — ₱55\n\n🧋 **Drinks** starting at ₱20\n\nWant to pre-order? Call us or message on Facebook! 😊",
    };
  }
  if (BOT_RESPONSES.hours.some(w => lower.includes(w))) {
    return {
      text: "⏰ Our opening hours:\n\n📅 Monday – Saturday\n🕗 8:00 AM – 8:00 PM\n\n🚫 Closed on Sundays & Public Holidays\n\nWe sometimes have special holiday hours — check our Facebook page for the latest announcements! 📱",
    };
  }
  if (BOT_RESPONSES.location.some(w => lower.includes(w))) {
    return {
      text: "📍 You can find us at:\n\nZone 3 San Agustin, Pili\nCamarines Sur, Philippines\n\n👉 View on Google Maps: https://maps.app.goo.gl/C9d2NS7ThSNUpuBRA\n\nWe're easy to find — just look for the cozy eatery with the amazing kinalas smell! 😄",
    };
  }
  if (BOT_RESPONSES.contact.some(w => lower.includes(w))) {
    return {
      text: "📞 Here's how to reach us:\n\n• **Phone/Viber:** +639 3944 44830\n• **Facebook:** 3Ls Kinalas & Eatery\n• **Messenger:** facebook.com/profile.php?id=61572345495951\n\nOur team responds fastest on Facebook Messenger! 💬",
    };
  }
  if (BOT_RESPONSES.delivery.some(w => lower.includes(w))) {
    return {
      text: "🛵 We currently offer **dine-in and pickup** only.\n\nTo pre-order for pickup:\n📞 Call: +639 3944 44830\n💬 Message us on Facebook\n\nJust let us know your preferred pickup time and we'll have it ready for you! 😊",
    };
  }
  if (BOT_RESPONSES.price.some(w => lower.includes(w))) {
    return {
      text: "💰 Our prices are very affordable!\n\n🍜 Kinalas starts at ₱35\n🥘 Soups & Meals from ₱50–₱80\n🧋 Drinks from ₱20–₱25\n🍱 Merienda from ₱15–₱55\n\nWe believe great Filipino food shouldn't break the bank! 💛",
    };
  }

  return {
    text: "Salamat for your message! 🙏 I'm still learning, but here's what I can help with:\n\n• 🍜 Menu & Prices\n• ⏰ Opening Hours\n• 📍 Location & Directions\n• 📞 Contact Info\n• 🛵 Pickup Orders\n\nFor other questions, please call us at **+639 3944 44830** or message us on **Facebook**! Our team will be happy to help. 😊",
  };
}

function formatTime(date) {
  return date.toLocaleTimeString('en-PH', { hour: '2-digit', minute: '2-digit' });
}

function MessageBubble({ msg }) {
  const isUser = msg.from === 'user';
  const isBot = msg.from === 'bot';
  const isAdmin = msg.from === 'admin';

  const text = msg.text.split('\n').map((line, i) => {
    const parts = line.split(/\*\*(.*?)\*\*/g);
    return (
      <span key={i}>
        {parts.map((p, j) => j % 2 === 1 ? <strong key={j}>{p}</strong> : p)}
        {i < msg.text.split('\n').length - 1 && <br />}
      </span>
    );
  });

  return (
    <div style={{
      display: 'flex',
      flexDirection: isUser ? 'row-reverse' : 'row',
      alignItems: 'flex-end',
      gap: 8,
      marginBottom: 12,
      padding: '0 4px',
    }}>
      {!isUser && (
        <div style={{
          width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
          background: isBot ? 'var(--green)' : 'var(--terracotta)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 14,
        }}>
          {isBot ? '🤖' : '👩‍🍳'}
        </div>
      )}
      <div style={{ maxWidth: '75%' }}>
        {!isUser && (
          <div style={{ fontSize: 11, color: 'var(--brown-light)', marginBottom: 3, paddingLeft: 2, fontWeight: 700 }}>
            {isBot ? 'KinaBot 🤖' : 'Staff 👩‍🍳'} · {formatTime(msg.time)}
          </div>
        )}
        <div style={{
          background: isUser ? 'var(--terracotta)' : isBot ? 'rgba(74,124,89,0.1)' : 'rgba(245,197,24,0.15)',
          color: isUser ? 'white' : 'var(--brown)',
          padding: '10px 14px',
          borderRadius: isUser ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
          fontSize: 13.5,
          lineHeight: 1.6,
          border: isUser ? 'none' : isBot ? '1px solid rgba(74,124,89,0.2)' : '1px solid rgba(245,197,24,0.3)',
          wordBreak: 'break-word',
        }}>
          {text}
        </div>
        {isUser && (
          <div style={{ fontSize: 11, color: 'var(--brown-light)', marginTop: 3, paddingRight: 2, textAlign: 'right', fontWeight: 700 }}>
            {formatTime(msg.time)}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unread, setUnread] = useState(0);
  const [adminOffline] = useState(ADMIN_OFFLINE_HOURS());
  const [sessionStarted, setSessionStarted] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  useEffect(() => {
    if (open) {
      setUnread(0);
      inputRef.current?.focus();
      if (!sessionStarted) {
        setSessionStarted(true);
        setTimeout(() => {
          const greeting = adminOffline
            ? {
                from: 'bot',
                text: "Magandang araw! 🌟 Welcome to **3L's Kinalas & Eatery**!\n\nOur team is currently offline (we're open Mon–Sat, 8AM–8PM). I'm **KinaBot**, your virtual assistant!\n\nHow can I help you today? 😊",
                time: new Date(),
              }
            : {
                from: 'admin',
                text: "Magandang araw! 🌟 Welcome to **3L's Kinalas & Eatery**!\n\nYou're now connected with our staff. How can we help you today? 😊",
                time: new Date(),
              };
          setMessages([greeting]);
        }, 600);
      }
    }
  }, [open]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input.trim(), time: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    if (adminOffline) {
      setIsTyping(true);
      const delay = 800 + Math.random() * 1000;
      setTimeout(() => {
        setIsTyping(false);
        const reply = getBotReply(userMsg.text);
        setMessages(prev => [...prev, { from: 'bot', text: reply.text, time: new Date() }]);
      }, delay);
    } else {
      // Simulate admin typing and replying (in real app, replace with WebSocket/Firebase)
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const adminReplies = [
          "Salamat po! Let me check on that for you. 😊",
          "Of course! We'd be happy to help. For pre-orders, please call us at +639 3944 44830.",
          "Sure! Our kinalas is made fresh every day. You can dine in or pre-order for pickup!",
          "Thank you for reaching out! Is there anything else I can help you with?",
        ];
        const reply = adminReplies[Math.floor(Math.random() * adminReplies.length)];
        setMessages(prev => [...prev, { from: 'admin', text: reply, time: new Date() }]);
      }, 1200 + Math.random() * 800);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickReplies = ['See the menu', 'Opening hours', 'How to find you', 'How to order'];

  return (
    <>
      {/* Chat Window */}
      {open && (
        <div style={{
          position: 'fixed',
          bottom: 96,
          right: 24,
          width: 360,
          maxWidth: 'calc(100vw - 32px)',
          height: 520,
          background: 'var(--cream)',
          borderRadius: 24,
          boxShadow: '0 20px 60px rgba(61,43,31,0.25), 0 4px 20px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          zIndex: 9999,
          border: '2px solid rgba(245,197,24,0.3)',
          fontFamily: "'Nunito', sans-serif",
        }}>
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, var(--brown) 0%, #5C3825 100%)',
            padding: '16px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            flexShrink: 0,
          }}>
            <div style={{ position: 'relative' }}>
              <div style={{
                width: 44, height: 44, borderRadius: '50%',
                background: 'var(--yellow)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 22,
                boxShadow: '0 0 0 3px var(--terracotta)',
              }}>
                🍜
              </div>
              <div style={{
                position: 'absolute', bottom: 1, right: 1,
                width: 12, height: 12, borderRadius: '50%',
                background: adminOffline ? '#f59e0b' : '#4ade80',
                border: '2px solid var(--brown)',
              }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ color: 'var(--yellow)', fontWeight: 900, fontSize: 15, fontFamily: "'Playfair Display', serif" }}>
                3L's Kinalas & Eatery
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 2 }}>
                {adminOffline ? (
                  <>
                    <Bot size={11} color="#f59e0b" />
                    <span style={{ fontSize: 11, color: '#fcd34d', fontWeight: 700 }}>KinaBot active · Staff offline</span>
                  </>
                ) : (
                  <>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80' }} />
                    <span style={{ fontSize: 11, color: '#a7f3c0', fontWeight: 700 }}>Staff online · Typically replies fast</span>
                  </>
                )}
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <a href="tel:+639394444830" style={{
                width: 32, height: 32, borderRadius: '50%',
                background: 'rgba(245,197,24,0.15)',
                border: '1px solid rgba(245,197,24,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                textDecoration: 'none', color: 'var(--yellow)',
              }}>
                <Phone size={14} />
              </a>
              <button onClick={() => setOpen(false)} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'rgba(253,230,175,0.6)', padding: 4,
                display: 'flex', alignItems: 'center',
              }}>
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Mode banner */}
          <div style={{
            background: adminOffline ? 'rgba(245,158,11,0.12)' : 'rgba(74,124,89,0.1)',
            borderBottom: `1px solid ${adminOffline ? 'rgba(245,158,11,0.2)' : 'rgba(74,124,89,0.2)'}`,
            padding: '7px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: 7,
            flexShrink: 0,
          }}>
            {adminOffline ? (
              <>
                <Bot size={13} color="#d97706" />
                <span style={{ fontSize: 11.5, color: '#92400e', fontWeight: 700 }}>
                  You're chatting with KinaBot — our AI assistant. For urgent concerns, call us directly!
                </span>
              </>
            ) : (
              <>
                <Wifi size={13} color="var(--green)" />
                <span style={{ fontSize: 11.5, color: 'var(--green-dark)', fontWeight: 700 }}>
                  Live chat — you're connected with a real team member!
                </span>
              </>
            )}
          </div>

          {/* Messages */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '16px 12px 8px',
            display: 'flex',
            flexDirection: 'column',
          }}>
            {messages.map((msg, i) => (
              <MessageBubble key={i} msg={msg} />
            ))}

            {isTyping && (
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, marginBottom: 12 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: '50%',
                  background: adminOffline ? 'var(--green)' : 'var(--terracotta)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14,
                }}>
                  {adminOffline ? '🤖' : '👩‍🍳'}
                </div>
                <div style={{
                  background: 'rgba(74,124,89,0.1)',
                  border: '1px solid rgba(74,124,89,0.2)',
                  padding: '10px 16px',
                  borderRadius: '18px 18px 18px 4px',
                  display: 'flex', gap: 4, alignItems: 'center',
                }}>
                  {[0, 1, 2].map(i => (
                    <div key={i} style={{
                      width: 7, height: 7, borderRadius: '50%',
                      background: 'var(--brown-light)',
                      animation: 'bounce 1.2s ease infinite',
                      animationDelay: `${i * 0.2}s`,
                    }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies */}
          {messages.length <= 1 && (
            <div style={{
              padding: '8px 12px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: 6,
              flexShrink: 0,
              borderTop: '1px solid rgba(193,105,79,0.1)',
            }}>
              {quickReplies.map((q, i) => (
                <button key={i} onClick={() => {
                  setInput(q);
                  setTimeout(() => {
                    setMessages(prev => [...prev, { from: 'user', text: q, time: new Date() }]);
                    setInput('');
                    setIsTyping(true);
                    setTimeout(() => {
                      setIsTyping(false);
                      const reply = getBotReply(q);
                      setMessages(prev => [...prev, { from: adminOffline ? 'bot' : 'admin', text: reply.text, time: new Date() }]);
                    }, 900);
                  }, 10);
                }} style={{
                  background: 'var(--yellow-pale)',
                  border: '1px solid rgba(245,197,24,0.4)',
                  color: 'var(--brown)',
                  padding: '5px 12px',
                  borderRadius: 30,
                  fontSize: 12,
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { e.target.style.background = 'var(--yellow)'; }}
                  onMouseLeave={e => { e.target.style.background = 'var(--yellow-pale)'; }}
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div style={{
            padding: '10px 12px',
            borderTop: '2px solid rgba(245,197,24,0.2)',
            display: 'flex',
            gap: 8,
            alignItems: 'flex-end',
            background: 'white',
            flexShrink: 0,
          }}>
            <textarea
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message…"
              rows={1}
              style={{
                flex: 1,
                border: '1.5px solid rgba(193,105,79,0.25)',
                borderRadius: 16,
                padding: '9px 14px',
                fontSize: 13.5,
                fontFamily: "'Nunito', sans-serif",
                resize: 'none',
                outline: 'none',
                background: 'var(--cream)',
                color: 'var(--brown)',
                lineHeight: 1.4,
                maxHeight: 80,
                overflowY: 'auto',
                transition: 'border-color 0.2s',
              }}
              onFocus={e => e.target.style.borderColor = 'var(--terracotta)'}
              onBlur={e => e.target.style.borderColor = 'rgba(193,105,79,0.25)'}
            />
            <button onClick={sendMessage} disabled={!input.trim()} style={{
              width: 40, height: 40,
              borderRadius: '50%',
              background: input.trim() ? 'var(--terracotta)' : 'rgba(193,105,79,0.2)',
              border: 'none',
              cursor: input.trim() ? 'pointer' : 'default',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
              transition: 'all 0.2s',
            }}>
              <Send size={16} color={input.trim() ? 'white' : 'rgba(193,105,79,0.5)'} />
            </button>
          </div>
        </div>
      )}

      {/* FAB Button */}
      <button onClick={() => setOpen(!open)} style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        width: 60,
        height: 60,
        borderRadius: '50%',
        background: open
          ? 'var(--brown)'
          : 'linear-gradient(135deg, var(--terracotta) 0%, var(--terracotta-dark) 100%)',
        border: '3px solid var(--yellow)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 30px rgba(193,105,79,0.5)',
        zIndex: 10000,
        transition: 'all 0.3s',
        transform: open ? 'rotate(0deg)' : 'rotate(0deg)',
      }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
      >
        {open ? <X size={24} color="var(--yellow)" /> : <MessageCircle size={26} color="white" />}
        {!open && unread > 0 && (
          <div style={{
            position: 'absolute', top: -4, right: -4,
            width: 20, height: 20,
            background: 'var(--green)',
            borderRadius: '50%',
            fontSize: 11, fontWeight: 900,
            color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: '2px solid white',
          }}>
            {unread}
          </div>
        )}
      </button>

      <style>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-5px); }
        }
      `}</style>
    </>
  );
}
