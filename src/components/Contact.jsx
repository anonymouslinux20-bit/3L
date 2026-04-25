import { MapPin, Phone, Clock, Share2, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <section id="contact" style={{ background: 'var(--terracotta-dark)', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(245,197,24,0.2)', border: '1px solid rgba(245,197,24,0.4)', color: 'var(--yellow)', padding: '6px 18px', borderRadius: 20, fontSize: 12, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>
              📍 Find Us
            </div>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 50px)', color: 'white', marginBottom: 10 }}>Visit Us Today</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16, fontFamily: "'Lora', serif", fontStyle: 'italic' }}>
              We'd love to see you at our table. Come hungry!
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, marginBottom: 48 }}>
            {/* Location */}
            <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 20, padding: '32px', border: '1px solid rgba(255,255,255,0.12)' }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: 'var(--yellow)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <MapPin size={26} color="var(--brown)" />
              </div>
              <h3 style={{ color: 'var(--yellow)', fontSize: 20, marginBottom: 10 }}>Location</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15, lineHeight: 1.7 }}>
                Zone 3 San Agustin, Pili<br />Camarines Sur, Philippines
              </p>
              <a href="https://maps.app.goo.gl/C9d2NS7ThSNUpuBRA" target="_blank" rel="noreferrer" style={{
                display: 'inline-block',
                marginTop: 14,
                color: 'var(--yellow)',
                fontSize: 13,
                fontWeight: 700,
                textDecoration: 'none',
              }}>
                📍 View on Google Maps →
              </a>
            </div>

            {/* Hours */}
            <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 20, padding: '32px', border: '1px solid rgba(255,255,255,0.12)' }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <Clock size={26} color="white" />
              </div>
              <h3 style={{ color: 'var(--yellow)', fontSize: 20, marginBottom: 14 }}>Hours</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  ['Mon – Sat', '8:00 AM – 8:00 PM'],
                  ['Holidays', 'See Announcements'],
                ].map(([day, time]) => (
                  <div key={day} style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                    <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, fontWeight: 600 }}>{day}</span>
                    <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 13, fontWeight: 700 }}>{time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 20, padding: '32px', border: '1px solid rgba(255,255,255,0.12)' }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: 'var(--terracotta)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <Phone size={26} color="white" />
              </div>
              <h3 style={{ color: 'var(--yellow)', fontSize: 20, marginBottom: 14 }}>Get in Touch</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <a href="tel:+639001234567" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: 15 }}>
                  <Phone size={16} color="var(--yellow)" /> +639 3944 44830
                </a>
                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: 15 }}>
                  <Share2 size={16} color="var(--yellow)" /> 3Ls Kinalas & Eatery
                </a>
                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: 15 }}>
                  <MessageCircle size={16} color="var(--yellow)" /> Message on Messenger
                </a>
              </div>
            </div>
          </div>

          {/* Order CTA */}
          <div id="order" style={{
            background: 'linear-gradient(135deg, var(--yellow) 0%, var(--yellow-light) 100%)',
            borderRadius: 24,
            padding: '40px 36px',
            textAlign: 'center',
            boxShadow: '0 8px 40px rgba(0,0,0,0.2)',
          }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>🍜</div>
            <h3 style={{ color: 'var(--brown)', fontSize: 30, marginBottom: 10 }}>Ready to Order?</h3>
            <p style={{ color: 'var(--brown-light)', fontSize: 16, marginBottom: 24, fontFamily: "'Lora', serif" }}>
              Dine in or pre-order for pickup. Message us on Facebook or call ahead!
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:+639394444830" style={{ background: 'var(--brown)', color: 'white', textDecoration: 'none', padding: '14px 30px', borderRadius: 50, fontWeight: 800, fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                📞 Call to Order
              </a>
                          <a href="https://www.facebook.com/profile.php?id=61572345495951" style={{ background: 'var(--terracotta)', color: 'white', textDecoration: 'none', padding: '14px 30px', borderRadius: 50, fontWeight: 800, fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                💬 Message on Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: 'var(--brown)', padding: '28px 24px', textAlign: 'center', borderTop: '3px solid var(--yellow)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 900, color: 'var(--yellow)', marginBottom: 4 }}>3L's Kinalas & Eatery</div>
          <div style={{ fontSize: 12, color: 'rgba(253,230,175,0.5)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>Liza · Liway · Luis</div>
          <p style={{ color: 'rgba(253,230,175,0.4)', fontSize: 13 }}>
            © {new Date().getFullYear()} 3L's Kinalas & Eatery. All rights reserved. · Pili, Camarines Sur, Philippines
          </p>
        </div>
      </footer>
    </>
  );
}
