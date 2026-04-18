import { ChevronDown, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, var(--brown) 0%, #5C3825 40%, var(--terracotta-dark) 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 72,
    }}>
      {/* Decorative circles */}
      <div style={{
        position: 'absolute', top: -80, right: -80,
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(245,197,24,0.15) 0%, transparent 70%)',
      }} />
      <div style={{
        position: 'absolute', bottom: -100, left: -100,
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(74,124,89,0.2) 0%, transparent 70%)',
      }} />

      {/* Floating food emojis */}
      {['🍜', '🥘', '🍚', '🍖', '🌿'].map((emoji, i) => (
        <div key={i} style={{
          position: 'absolute',
          fontSize: [32, 28, 36, 24, 30][i],
          opacity: 0.18,
          animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
          animationDelay: `${i * 0.7}s`,
          top: ['15%', '60%', '25%', '75%', '45%'][i],
          left: ['8%', '88%', '92%', '5%', '85%'][i],
        }}>{emoji}</div>
      ))}

      {/* Star rating */}
      <div style={{
        display: 'flex', gap: 4, marginBottom: 20,
        animation: 'fadeInUp 0.6s ease forwards',
        opacity: 0,
        animationDelay: '0.2s',
      }}>
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={20} fill="var(--yellow)" color="var(--yellow)" />
        ))}
        <span style={{ color: 'var(--yellow-light)', fontSize: 14, marginLeft: 8, fontWeight: 700 }}>Pili's Favorite Kinalas</span>
      </div>

      {/* Badge */}
      <div style={{
        background: 'var(--yellow)',
        color: 'var(--brown)',
        padding: '6px 20px',
        borderRadius: 20,
        fontSize: 12,
        fontWeight: 800,
        letterSpacing: 3,
        textTransform: 'uppercase',
        marginBottom: 24,
        animation: 'fadeInUp 0.6s ease forwards',
        opacity: 0,
        animationDelay: '0.3s',
      }}>
        Authentic Filipino Home Cooking
      </div>

      {/* Title */}
      <h1 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 'clamp(52px, 10vw, 100px)',
        fontWeight: 900,
        color: 'var(--white)',
        lineHeight: 1,
        textAlign: 'center',
        marginBottom: 8,
        animation: 'fadeInUp 0.7s ease forwards',
        opacity: 0,
        animationDelay: '0.4s',
        textShadow: '0 4px 30px rgba(0,0,0,0.4)',
      }}>
        <span style={{ color: 'var(--yellow)' }}>3L's</span>
      </h1>
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 'clamp(22px, 4vw, 38px)',
        fontWeight: 700,
        color: 'var(--terracotta-light)',
        textAlign: 'center',
        fontStyle: 'italic',
        marginBottom: 28,
        animation: 'fadeInUp 0.7s ease forwards',
        opacity: 0,
        animationDelay: '0.5s',
        letterSpacing: 2,
      }}>
        Kinalas & Eatery
      </h2>

      {/* Divider */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28, animation: 'fadeInUp 0.7s ease forwards', opacity: 0, animationDelay: '0.55s' }}>
        <div style={{ width: 60, height: 2, background: 'var(--terracotta-light)' }} />
        <div style={{ fontSize: 20 }}>🌿</div>
        <div style={{ width: 60, height: 2, background: 'var(--terracotta-light)' }} />
      </div>

      {/* Tagline */}
      <p style={{
        fontSize: 'clamp(15px, 2.5vw, 19px)',
        color: 'rgba(253,230,175,0.85)',
        textAlign: 'center',
        maxWidth: 520,
        lineHeight: 1.7,
        marginBottom: 44,
        fontFamily: "'Lora', serif",
        fontStyle: 'italic',
        animation: 'fadeInUp 0.7s ease forwards',
        opacity: 0,
        animationDelay: '0.6s',
        padding: '0 20px',
      }}>
        Warm bowls, rich broths, and the taste of home — crafted with love for every hungry soul in Pili, Camarines Sur.
      </p>

      {/* CTAs */}
      <div style={{
        display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center',
        animation: 'fadeInUp 0.7s ease forwards',
        opacity: 0,
        animationDelay: '0.7s',
        padding: '0 20px',
      }}>
        <a href="#menu" style={{
          background: 'var(--yellow)',
          color: 'var(--brown)',
          textDecoration: 'none',
          padding: '16px 36px',
          borderRadius: 50,
          fontSize: 16,
          fontWeight: 800,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          boxShadow: '0 8px 30px rgba(245,197,24,0.4)',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(245,197,24,0.5)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(245,197,24,0.4)'; }}
        >
          🍜 See Our Menu
        </a>
        <a href="#events" style={{
          border: '2px solid var(--terracotta-light)',
          color: 'var(--terracotta-light)',
          textDecoration: 'none',
          padding: '16px 36px',
          borderRadius: 50,
          fontSize: 16,
          fontWeight: 800,
          transition: 'all 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--terracotta)'; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = 'var(--terracotta)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--terracotta-light)'; e.currentTarget.style.borderColor = 'var(--terracotta-light)'; }}
        >
          📅 Announcements
        </a>
      </div>

      {/* Open status pill */}
      <div style={{
        marginTop: 48,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        background: 'rgba(74,124,89,0.25)',
        border: '1px solid rgba(111,174,130,0.4)',
        borderRadius: 30,
        padding: '10px 24px',
        animation: 'fadeInUp 0.7s ease forwards',
        opacity: 0,
        animationDelay: '0.85s',
      }}>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#4ade80', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#4ade80', animation: 'pulse-ring 1.5s ease infinite' }} />
        </div>
        <span style={{ color: '#a7f3c0', fontSize: 14, fontWeight: 700 }}>Open Monday - Saturday · 8:00 AM – 8:00 PM</span>
      </div>

      {/* Scroll arrow */}
      <a href="#menu" style={{
        position: 'absolute',
        bottom: 32,
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'var(--yellow)',
        animation: 'float 2s ease-in-out infinite',
      }}>
        <ChevronDown size={32} />
      </a>

      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
