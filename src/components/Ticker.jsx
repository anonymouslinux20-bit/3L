export default function Ticker() {
  const items = [
    '🍜 Try our Famous Kinalas!',
    '🌿 Fresh ingredients daily',
    '🥘 New: Bulalo Special available every weekend',
    '🎉 Birthday packages available — call us to book!',
    '🍚 Sinangag now served for breakfast',
    '🌶️ Try our spicy Bicol Express!',
    '🐔 Fried Chicken now available all day',
    '🧆 Merienda specials: 2pm - 5pm',
  ];

  const repeated = [...items, ...items];

  return (
    <div style={{
      background: 'var(--green)',
      color: 'white',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      padding: '12px 0',
      borderTop: '3px solid var(--yellow)',
      borderBottom: '3px solid var(--yellow)',
    }}>
      <div style={{
        display: 'inline-flex',
        gap: 0,
        animation: 'marquee 30s linear infinite',
      }}>
        {repeated.map((item, i) => (
          <span key={i} style={{
            display: 'inline-block',
            padding: '0 40px',
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: 0.5,
          }}>
            {item} <span style={{ color: 'var(--yellow)', margin: '0 12px' }}>•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
