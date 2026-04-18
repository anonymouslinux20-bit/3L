import { useState, useEffect } from 'react';
import { Menu, X, Utensils } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Home', 'Menu', 'Products', 'Events', 'Contact'];

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: 'all 0.4s ease',
    background: scrolled
      ? 'rgba(61,43,31,0.97)'
      : 'transparent',
    boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
    backdropFilter: scrolled ? 'blur(10px)' : 'none',
  };

  return (
    <nav style={navStyle}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        {/* Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 44, height: 44, borderRadius: '50%',
            background: 'var(--yellow)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 0 3px var(--terracotta)',
          }}>
            <Utensils size={22} color="var(--brown)" strokeWidth={2.5} />
          </div>
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 18, color: 'var(--yellow)', lineHeight: 1 }}>3L's</div>
            <div style={{ fontSize: 10, color: 'var(--terracotta-light)', letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 700 }}>Kinalas & Eatery</div>
          </div>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }} className="desktop-nav">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} style={{
              color: 'var(--yellow-light)',
              textDecoration: 'none',
              padding: '6px 16px',
              borderRadius: 20,
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: 0.5,
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.target.style.background = 'var(--yellow)'; e.target.style.color = 'var(--brown)'; }}
              onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--yellow-light)'; }}
            >{link}</a>
          ))}
          <a href="#order" style={{
            background: 'var(--terracotta)',
            color: 'white',
            textDecoration: 'none',
            padding: '8px 20px',
            borderRadius: 20,
            fontSize: 14,
            fontWeight: 800,
            marginLeft: 8,
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.target.style.background = 'var(--yellow)'; e.target.style.color = 'var(--brown)'; }}
            onMouseLeave={e => { e.target.style.background = 'var(--terracotta)'; e.target.style.color = 'white'; }}
          >Order Now</a>
        </div>

        {/* Burger */}
        <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--yellow)', display: 'none' }} className="burger-btn">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: 'rgba(61,43,31,0.98)',
          padding: '16px 24px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}>
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{ color: 'var(--yellow-light)', textDecoration: 'none', padding: '12px 16px', borderRadius: 10, fontSize: 16, fontWeight: 700, borderBottom: '1px solid rgba(245,197,24,0.1)' }}>
              {link}
            </a>
          ))}
          <a href="#order" onClick={() => setOpen(false)}
            style={{ background: 'var(--terracotta)', color: 'white', textDecoration: 'none', padding: '14px 16px', borderRadius: 10, fontSize: 16, fontWeight: 800, textAlign: 'center', marginTop: 8 }}>
            Order Now
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .burger-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
