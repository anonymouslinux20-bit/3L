import { useState } from 'react';
import { Flame, Star, Leaf } from 'lucide-react';

const categories = ['All', 'Kinalas', 'Rice Meals', 'Soup & Broth', 'Merienda', 'Drinks'];

const products = [
  {
    id: 1, name: 'Signature Kinalas', category: 'Kinalas',
    emoji: '🍜', price: '₱55', tag: 'Best Seller',
    desc: 'Our signature slow-cooked pork broth with noodles, chicharon, and egg. Rich, savory, and soul-warming.',
    isNew: false, isSpicy: false, isVeg: false,
  },
  {
    id: 2, name: 'Spicy Kinalas', category: 'Kinalas',
    emoji: '🌶️', price: '₱60', tag: 'Hot Pick',
    desc: 'All the goodness of our classic kinalas with a fiery kick that will leave you craving more.',
    isNew: false, isSpicy: true, isVeg: false,
  },
  {
    id: 3, name: 'Special Kinalas', category: 'Kinalas',
    emoji: '🍲', price: '₱75', tag: 'New',
    desc: 'Extra toppings: pork bits, boiled egg, kikiam, and extra chicharon. The full experience!',
    isNew: true, isSpicy: false, isVeg: false,
  },
  {
    id: 4, name: 'Bulalo', category: 'Soup & Broth',
    emoji: '🦴', price: '₱120', tag: 'Weekend Special',
    desc: 'Slow-simmered beef shank with bone marrow in a clear, collagen-rich broth. Weekend only!',
    isNew: false, isSpicy: false, isVeg: false,
  },
  {
    id: 5, name: 'Sinigang na Baboy', category: 'Soup & Broth',
    emoji: '🥣', price: '₱90', tag: null,
    desc: 'Tender pork ribs in a sour tamarind broth loaded with fresh vegetables. A Filipino classic.',
    isNew: false, isSpicy: false, isVeg: false,
  },
  {
    id: 6, name: 'Fried Chicken Rice', category: 'Rice Meals',
    emoji: '🍗', price: '₱65', tag: 'All Day',
    desc: 'Crispy golden fried chicken served with steamed white rice and our house dipping sauce.',
    isNew: false, isSpicy: false, isVeg: false,
  },
  {
    id: 7, name: 'Bicol Express Rice', category: 'Rice Meals',
    emoji: '🌶️', price: '₱70', tag: 'Spicy',
    desc: 'Pork cubes cooked in coconut milk and chilies — our Bicol Express over steaming white rice.',
    isNew: true, isSpicy: true, isVeg: false,
  },
  {
    id: 8, name: 'Adobong Manok', category: 'Rice Meals',
    emoji: '🍽️', price: '₱65', tag: null,
    desc: 'Classic chicken adobo — tender, tangy, and savory. Slow-cooked the traditional way.',
    isNew: false, isSpicy: false, isVeg: false,
  },
  {
    id: 9, name: 'Sinangag Breakfast', category: 'Merienda',
    emoji: '🍳', price: '₱45', tag: 'Morning Only',
    desc: 'Garlic fried rice with your choice of egg and a side of sweet tocino or longanisa.',
    isNew: false, isSpicy: false, isVeg: false,
  },
  {
    id: 10, name: 'Pancit Bihon', category: 'Merienda',
    emoji: '🥗', price: '₱40', tag: null,
    desc: 'Stir-fried rice noodles with vegetables, pork, and shrimp. Light and satisfying.',
    isNew: false, isSpicy: false, isVeg: false,
  },
  {
    id: 11, name: 'Puto & Dinuguan', category: 'Merienda',
    emoji: '🫓', price: '₱55', tag: 'Classic Pair',
    desc: 'Fluffy steamed rice cakes paired with our savory pork dinuguan — a timeless Filipino combo.',
    isNew: false, isSpicy: false, isVeg: false,
  },
  {
    id: 12, name: 'Buko Juice', category: 'Drinks',
    emoji: '🥥', price: '₱25', tag: null,
    desc: 'Fresh young coconut juice — naturally sweet, refreshing, and straight from the shell.',
    isNew: false, isSpicy: false, isVeg: true,
  },
  {
    id: 13, name: 'Sago at Gulaman', category: 'Drinks',
    emoji: '🧋', price: '₱20', tag: 'Refreshing',
    desc: 'Cold brown sugar drink with tapioca pearls and jelly. Perfect on a hot day!',
    isNew: false, isSpicy: false, isVeg: true,
  },
  {
    id: 14, name: 'Calamansi Juice', category: 'Drinks',
    emoji: '🍋', price: '₱20', tag: null,
    desc: 'Fresh-squeezed calamansi with a touch of sugar. Bright, citrusy, and perfectly Filipino.',
    isNew: true, isSpicy: false, isVeg: true,
  },
];

function ProductCard({ product }) {
  const tagColors = {
    'Best Seller': { bg: 'var(--yellow)', color: 'var(--brown)' },
    'New': { bg: 'var(--green)', color: 'white' },
    'Hot Pick': { bg: 'var(--terracotta)', color: 'white' },
    'Weekend Special': { bg: 'var(--brown)', color: 'var(--yellow)' },
    'All Day': { bg: 'var(--green-light)', color: 'white' },
    'Spicy': { bg: '#dc2626', color: 'white' },
    'Morning Only': { bg: '#f59e0b', color: 'white' },
    'Classic Pair': { bg: 'var(--terracotta-dark)', color: 'white' },
    'Refreshing': { bg: '#0ea5e9', color: 'white' },
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: 20,
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(61,43,31,0.08)',
      transition: 'transform 0.3s, box-shadow 0.3s',
      border: '1px solid rgba(193,105,79,0.1)',
      position: 'relative',
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(61,43,31,0.15)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(61,43,31,0.08)'; }}
    >
      {/* Emoji banner */}
      <div style={{
        background: 'linear-gradient(135deg, var(--yellow-pale), var(--cream))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 64,
        height: 130,
        position: 'relative',
        borderBottom: '2px solid var(--yellow-light)',
      }}>
        {product.emoji}

        {/* Tag */}
        {product.tag && (
          <div style={{
            position: 'absolute',
            top: 12, right: 12,
            background: (tagColors[product.tag] || { bg: 'var(--terracotta)', color: 'white' }).bg,
            color: (tagColors[product.tag] || { bg: 'var(--terracotta)', color: 'white' }).color,
            padding: '4px 10px',
            borderRadius: 10,
            fontSize: 10,
            fontWeight: 800,
            letterSpacing: 0.5,
            textTransform: 'uppercase',
          }}>
            {product.tag}
          </div>
        )}

        {/* Badges */}
        <div style={{ position: 'absolute', bottom: 10, left: 12, display: 'flex', gap: 4 }}>
          {product.isNew && <span style={{ background: 'var(--green)', color: 'white', fontSize: 10, fontWeight: 800, padding: '2px 7px', borderRadius: 6 }}>NEW</span>}
          {product.isSpicy && <Flame size={16} color="var(--terracotta)" />}
          {product.isVeg && <Leaf size={16} color="var(--green)" />}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '18px 20px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
          <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--brown)', lineHeight: 1.2, flex: 1 }}>{product.name}</h3>
          <span style={{ fontSize: 18, fontWeight: 900, color: 'var(--terracotta)', marginLeft: 12, whiteSpace: 'nowrap', fontFamily: "'Nunito', sans-serif" }}>{product.price}</span>
        </div>
        <p style={{ fontSize: 13, color: 'var(--brown-light)', lineHeight: 1.6 }}>{product.desc}</p>
      </div>
    </div>
  );
}

export default function Menu() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? products : products.filter(p => p.category === active);

  return (
    <section id="menu" style={{ background: 'var(--cream)', padding: '80px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--terracotta)', color: 'white', padding: '6px 18px', borderRadius: 20, fontSize: 12, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>
            🍽️ What We Serve
          </div>
          <h2 style={{ fontSize: 'clamp(36px, 6vw, 58px)', color: 'var(--brown)', marginBottom: 12 }}>Our Menu</h2>
          <p style={{ fontSize: 17, color: 'var(--brown-light)', maxWidth: 500, margin: '0 auto', fontFamily: "'Lora', serif", fontStyle: 'italic' }}>
            Lovingly cooked dishes that taste like home — because every meal should be memorable.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center', marginTop: 16 }}>
            <div style={{ height: 2, width: 40, background: 'var(--terracotta)' }} />
            <div style={{ fontSize: 18 }}>🌿</div>
            <div style={{ height: 2, width: 40, background: 'var(--terracotta)' }} />
          </div>
        </div>

        {/* Category tabs */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 44 }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)} style={{
              padding: '10px 22px',
              borderRadius: 30,
              border: '2px solid',
              borderColor: active === cat ? 'var(--terracotta)' : 'rgba(193,105,79,0.3)',
              background: active === cat ? 'var(--terracotta)' : 'transparent',
              color: active === cat ? 'white' : 'var(--brown-light)',
              fontWeight: 700,
              fontSize: 14,
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: 24,
        }}>
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
