import { AlertTriangle, Calendar, Clock, Info } from 'lucide-react';

const events = [
  {
    type: 'closure',
    icon: '🚪',
    title: 'Closed on Holy Week',
    date: 'April 17–20, 2025',
    time: 'All Day',
    desc: 'We will be closed during Holy Thursday, Good Friday, Black Saturday, and Easter Sunday to allow our family time for the observance. We will resume normal operations on Monday, April 21.',
    color: 'var(--terracotta)',
    bg: '#fff5f3',
    border: 'rgba(193,105,79,0.3)',
    badgeBg: 'var(--terracotta)',
    badge: 'CLOSURE NOTICE',
  },
  {
    type: 'special',
    icon: '🎉',
    title: '3L\'s Anniversary Sale!',
    date: 'June 15, 2025',
    time: '6:00 AM – Close',
    desc: 'Join us for our anniversary celebration! All kinalas items will be 20% off the entire day. Dine in only. First 50 customers get a free drink. Thank you for 10 years of support!',
    color: 'var(--green)',
    bg: '#f0faf4',
    border: 'rgba(74,124,89,0.3)',
    badgeBg: 'var(--green)',
    badge: 'SPECIAL EVENT',
  },
  {
    type: 'info',
    icon: '🕐',
    title: 'Holiday Hours – Undas',
    date: 'November 1–2, 2025',
    time: '6:00 AM – 12:00 NN',
    desc: 'On All Saints\' and All Souls\' Day, we will operate on reduced hours (morning only). We recommend coming early! We will close at noon to allow our staff time with their families.',
    color: 'var(--yellow)',
    bg: '#fffbeb',
    border: 'rgba(245,197,24,0.4)',
    badgeBg: '#d97706',
    badge: 'HOLIDAY HOURS',
  },
  {
    type: 'special',
    icon: '🎄',
    title: 'Christmas Noche Buena Special',
    date: 'December 24, 2025',
    time: '6:00 AM – 10:00 PM',
    desc: 'Celebrate Noche Buena with 3L\'s! We\'re offering a special holiday set meal: Bulalo + Rice + Drink for ₱150. Pre-order available. Call or message us to reserve your order.',
    color: 'var(--green)',
    bg: '#f0faf4',
    border: 'rgba(74,124,89,0.3)',
    badgeBg: 'var(--terracotta)',
    badge: 'HOLIDAY SPECIAL',
  },
];

export default function Events() {
  return (
    <section id="events" style={{ background: 'var(--cream)', padding: '80px 24px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--yellow)', color: 'var(--brown)', padding: '6px 18px', borderRadius: 20, fontSize: 12, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>
            📢 Stay Informed
          </div>
          <h2 style={{ fontSize: 'clamp(34px, 5vw, 54px)', color: 'var(--brown)', marginBottom: 12 }}>
            Events & Announcements
          </h2>
          <p style={{ fontSize: 17, color: 'var(--brown-light)', maxWidth: 520, margin: '0 auto', fontFamily: "'Lora', serif", fontStyle: 'italic' }}>
            Stay up-to-date on our schedule — closures, special menus, and events happening at 3L's Kinalas & Eatery.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center', marginTop: 16 }}>
            <div style={{ height: 2, width: 40, background: 'var(--yellow)' }} />
            <div style={{ fontSize: 18 }}>📅</div>
            <div style={{ height: 2, width: 40, background: 'var(--yellow)' }} />
          </div>
        </div>

        {/* Alert banner */}
        <div style={{
          background: 'linear-gradient(135deg, var(--terracotta) 0%, var(--terracotta-dark) 100%)',
          color: 'white',
          borderRadius: 16,
          padding: '18px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          marginBottom: 36,
          boxShadow: '0 4px 20px rgba(193,105,79,0.3)',
        }}>
          <AlertTriangle size={24} color="var(--yellow)" style={{ flexShrink: 0 }} />
          <div>
            <div style={{ fontWeight: 800, fontSize: 15 }}>Important Notice</div>
            <div style={{ fontSize: 13, opacity: 0.85 }}>Always check this page or our Facebook page for the latest closures and schedule changes before visiting.</div>
          </div>
        </div>

        {/* Events list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {events.map((ev, i) => (
            <div key={i} style={{
              background: ev.bg,
              border: `2px solid ${ev.border}`,
              borderLeft: `6px solid ${ev.color}`,
              borderRadius: 16,
              padding: '28px 28px 28px 24px',
              display: 'flex',
              gap: 20,
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(6px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)'; }}
            >
              {/* Icon */}
              <div style={{ fontSize: 40, flexShrink: 0, lineHeight: 1, marginTop: 4 }}>{ev.icon}</div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 10 }}>
                  <h3 style={{ fontSize: 20, color: 'var(--brown)', fontWeight: 700 }}>{ev.title}</h3>
                  <span style={{
                    background: ev.badgeBg,
                    color: 'white',
                    fontSize: 10,
                    fontWeight: 800,
                    padding: '4px 12px',
                    borderRadius: 20,
                    letterSpacing: 1,
                    whiteSpace: 'nowrap',
                  }}>
                    {ev.badge}
                  </span>
                </div>

                <div style={{ display: 'flex', gap: 20, marginBottom: 12, flexWrap: 'wrap' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--brown-light)', fontWeight: 700 }}>
                    <Calendar size={14} color={ev.color} /> {ev.date}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--brown-light)', fontWeight: 700 }}>
                    <Clock size={14} color={ev.color} /> {ev.time}
                  </span>
                </div>

                <p style={{ fontSize: 14, color: 'var(--brown-light)', lineHeight: 1.7, fontFamily: "'Lora', serif" }}>{ev.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe note */}
        <div style={{
          marginTop: 40,
          background: 'var(--green)',
          color: 'white',
          borderRadius: 16,
          padding: '24px',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: 24, marginBottom: 8 }}>📱</div>
          <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4 }}>Stay Connected!</div>
          <p style={{ fontSize: 14, opacity: 0.85 }}>Follow us on Facebook for real-time updates on closures, new dishes, and promos.</p>
                  <a href="https://www.facebook.com/profile.php?id=61572345495951" target="_blank" rel="noreferrer" style={{
            display: 'inline-block',
            marginTop: 14,
            background: 'var(--yellow)',
            color: 'var(--brown)',
            padding: '10px 28px',
            borderRadius: 30,
            fontWeight: 800,
            fontSize: 14,
            textDecoration: 'none',
          }}>
            👍 Follow on Facebook
          </a>
        </div>
      </div>
    </section>
  );
}
