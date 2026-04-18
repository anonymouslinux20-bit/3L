export default function About() {
  return (
    <section style={{ background: 'var(--brown)', padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
      {/* Decorations */}
      <div style={{ position: 'absolute', top: -60, left: -60, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,197,24,0.1) 0%, transparent 70%)' }} />
      <div style={{ position: 'absolute', bottom: -80, right: -80, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(74,124,89,0.15) 0%, transparent 70%)' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, alignItems: 'center' }}>
        {/* Left - Story */}
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(245,197,24,0.15)', border: '1px solid rgba(245,197,24,0.3)', color: 'var(--yellow)', padding: '6px 18px', borderRadius: 20, fontSize: 12, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 24 }}>
            🏠 Our Story
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 50px)', color: 'var(--yellow)', marginBottom: 20, lineHeight: 1.1 }}>
            A Family Recipe,<br />A Community Table
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(253,230,175,0.85)', lineHeight: 1.8, marginBottom: 16, fontFamily: "'Lora', serif" }}>
            3L's Kinalas & Eatery was born from a passion for authentic Filipino home cooking. Nestled in the heart of Indang, Cavite, our small eatery has been serving warm bowls of kinalas and classic Filipino dishes since 2015.
          </p>
          <p style={{ fontSize: 16, color: 'rgba(253,230,175,0.75)', lineHeight: 1.8, marginBottom: 30, fontFamily: "'Lora', serif" }}>
            Every dish is made with fresh, locally-sourced ingredients, slow-cooked recipes passed down through generations, and most importantly — made with love. The "3L's" in our name stands for <em style={{ color: 'var(--yellow)' }}>Luto, Lasa, at Ligaya</em> — Cooking, Flavor, and Joy.
          </p>

          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {[
              { emoji: '🌿', label: 'Fresh Ingredients' },
              { emoji: '👨‍👩‍👧', label: 'Family Owned' },
              { emoji: '❤️', label: 'Made with Love' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(253,230,175,0.8)', fontSize: 14, fontWeight: 700 }}>
                <span style={{ fontSize: 20 }}>{item.emoji}</span> {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* Right - Visual card */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Main visual */}
          <div style={{
            background: 'linear-gradient(135deg, var(--terracotta-dark), var(--brown-light))',
            borderRadius: 24,
            padding: '40px',
            textAlign: 'center',
            border: '2px solid rgba(245,197,24,0.2)',
          }}>
            <div style={{ fontSize: 80, marginBottom: 16, animation: 'float 3s ease-in-out infinite' }}>🍜</div>
            <h3 style={{ color: 'var(--yellow)', fontSize: 26, marginBottom: 8 }}>The Famous Kinalas</h3>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, fontFamily: "'Lora', serif", lineHeight: 1.6 }}>
              Our slow-cooked pork broth noodle soup — a Naga City classic brought to Indang with our own loving touch.
            </p>
          </div>

          {/* Three values */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
            {[
              { emoji: '🧑‍🍳', label: 'Luto', sub: 'Crafted' },
              { emoji: '😋', label: 'Lasa', sub: 'Flavorful' },
              { emoji: '😊', label: 'Ligaya', sub: 'Joyful' },
            ].map((v, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(245,197,24,0.2)',
                borderRadius: 14,
                padding: '18px 12px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: 28, marginBottom: 6 }}>{v.emoji}</div>
                <div style={{ color: 'var(--yellow)', fontWeight: 900, fontFamily: "'Playfair Display', serif", fontSize: 18 }}>{v.label}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>{v.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
