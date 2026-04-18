export default function FeaturedPromo() {
  const promos = [
    {
      emoji: '🦴',
      title: 'Weekend Bulalo Blowout',
      subtitle: 'Every Saturday & Sunday',
      desc: 'Our slow-simmered beef shank Bulalo is back! Rich bone marrow, tender beef, and a clear broth that warms the soul. Only available on weekends — don\'t miss it!',
      badge: '🆕 Weekend Special',
      cta: 'Available Sat–Sun',
      bg: 'linear-gradient(135deg, var(--brown) 0%, #5C3825 100%)',
      accent: 'var(--yellow)',
    },
    {
      emoji: '🌶️',
      title: 'Bicol Express Rice Meal',
      subtitle: 'New on the Menu!',
      desc: 'Spicy pork in coconut milk — straight from the Bicol region to your plate. Pair it with steaming white rice for the ultimate comfort meal.',
      badge: '🔥 Just Launched',
      cta: 'Try it today!',
      bg: 'linear-gradient(135deg, var(--terracotta-dark) 0%, #7B3A28 100%)',
      accent: 'var(--yellow-light)',
    },
    {
      emoji: '🧋',
      title: 'Refreshing Pinoy Drinks',
      subtitle: 'Cold & Refreshing',
      desc: 'Beat the heat with our fresh Buko Juice, Sago at Gulaman, and new Calamansi Juice. Made fresh every morning — naturally sweet and authentically Filipino.',
      badge: '✨ Refreshing Picks',
      cta: 'Only ₱20–₱25',
      bg: 'linear-gradient(135deg, var(--green-dark) 0%, #3A6145 100%)',
      accent: 'var(--yellow)',
    },
  ];

  return (
    <section id="products" style={{ background: 'white', padding: '80px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--green)', color: 'white', padding: '6px 18px', borderRadius: 20, fontSize: 12, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>
            ✨ Fresh & New
          </div>
          <h2 style={{ fontSize: 'clamp(34px, 5vw, 54px)', color: 'var(--brown)', marginBottom: 12 }}>
            Featured & New Products
          </h2>
          <p style={{ fontSize: 17, color: 'var(--brown-light)', maxWidth: 500, margin: '0 auto', fontFamily: "'Lora', serif", fontStyle: 'italic' }}>
            Discover what's new at 3L's — special offers and seasonal delights you won't want to miss!
          </p>
        </div>

        {/* Promo cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 28 }}>
          {promos.map((promo, i) => (
            <div key={i} style={{
              background: promo.bg,
              borderRadius: 24,
              padding: '36px 32px',
              color: 'white',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 8px 40px rgba(0,0,0,0.15)',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.25)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,0,0,0.15)'; }}
            >
              {/* BG decoration */}
              <div style={{
                position: 'absolute', top: -20, right: -20, fontSize: 120, opacity: 0.1, lineHeight: 1,
                animation: 'float 4s ease-in-out infinite',
                animationDelay: `${i * 0.8}s`,
              }}>
                {promo.emoji}
              </div>

              <div style={{
                display: 'inline-block',
                background: 'rgba(255,255,255,0.15)',
                padding: '5px 14px',
                borderRadius: 20,
                fontSize: 12,
                fontWeight: 700,
                marginBottom: 20,
              }}>
                {promo.badge}
              </div>

              <div style={{ fontSize: 52, marginBottom: 16 }}>{promo.emoji}</div>

              <h3 style={{ fontSize: 26, fontWeight: 900, marginBottom: 6, color: promo.accent }}>{promo.title}</h3>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 16 }}>{promo.subtitle}</p>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: 28, fontFamily: "'Lora', serif" }}>{promo.desc}</p>

              <div style={{
                display: 'inline-block',
                background: promo.accent,
                color: 'var(--brown)',
                padding: '10px 24px',
                borderRadius: 30,
                fontSize: 14,
                fontWeight: 800,
              }}>
                {promo.cta}
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div style={{
          marginTop: 60,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 2,
          background: 'var(--terracotta)',
          borderRadius: 20,
          overflow: 'hidden',
        }}>
          {[
            { num: '14+', label: 'Menu Items', emoji: '🍽️' },
            { num: '5★', label: 'Avg. Rating', emoji: '⭐' },
            { num: '2015', label: 'Est. Year', emoji: '📅' },
            { num: '100%', label: 'Fresh Daily', emoji: '🌿' },
          ].map((stat, i) => (
            <div key={i} style={{
              background: i % 2 === 0 ? 'var(--terracotta-dark)' : 'var(--terracotta)',
              padding: '28px 20px',
              textAlign: 'center',
              color: 'white',
            }}>
              <div style={{ fontSize: 28 }}>{stat.emoji}</div>
              <div style={{ fontSize: 36, fontWeight: 900, color: 'var(--yellow)', fontFamily: "'Playfair Display', serif" }}>{stat.num}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
