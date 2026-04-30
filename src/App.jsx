import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import CoffeeCard from './components/CoffeeCard';
import MenuModal from './components/MenuModal';

import fondoColombia from './assets/colombia.webp';
import lateralIzquierdo from './assets/Grano_De_Cafe_Di.webp';
import lateralDerecho from './assets/Mata_De_Cafe.webp';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const productsRef = useRef(null);
  const [productsVisible, setProductsVisible] = useState(false);

  useEffect(() => {
    document.title = "Café Orion | Premium Experience";
    const t = setTimeout(() => setHeroVisible(true), 100);

    // Curseur personnalisé
    const cursor = document.getElementById('custom-cursor');
    if (!cursor) return () => clearTimeout(t);

    const onMove = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top  = e.clientY + 'px';
    };
    const onOver = (e) => {
      if (e.target.closest('a, button, [role="button"]')) {
        cursor.classList.add('big');
      } else {
        cursor.classList.remove('big');
      }
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);

    return () => {
      clearTimeout(t);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setProductsVisible(true); },
      { threshold: 0.15 }
    );
    if (productsRef.current) observer.observe(productsRef.current);
    return () => observer.disconnect();
  }, []);

  const whatsappNumber = "34641899336";
  const whatsappMessage = encodeURIComponent("Hola Café Orion, me gustaría obtener más información.");

  return (
    <div className="min-h-screen bg-[#010F22] font-sans text-white relative overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=Playfair+Display:ital,wght@0,700;0,900;1,700&display=swap');

        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        .font-body  { font-family: 'DM Sans', sans-serif; }
        .font-display { font-family: 'Playfair Display', serif; }

        /* ── CURSEUR GRAIN DE CAFÉ ── */
        body { cursor: none; }
        #custom-cursor {
          width: 10px; height: 10px;
          border-radius: 50%;
          background: #BF953F;
          position: fixed; top: 0; left: 0;
          pointer-events: none; z-index: 9999;
          transition: transform 0.15s ease, width 0.2s, height 0.2s, background 0.2s;
          transform: translate(-50%, -50%);
          mix-blend-mode: screen;
        }
        #custom-cursor.big {
          width: 40px; height: 40px;
          background: rgba(191,149,63,0.25);
          border: 1px solid rgba(191,149,63,0.6);
        }

        /* ── OR ANIMÉ ── */
        .gold {
          background: linear-gradient(90deg, #BF953F 0%, #FCF6BA 30%, #B38728 55%, #FBF5B7 80%, #AA771C 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 250% auto;
          animation: goldshine 5s linear infinite;
        }
        @keyframes goldshine { to { background-position: 250% center; } }

        /* ── BOUTON OR ── */
        .btn-gold {
          background: linear-gradient(135deg, #C9A84C 0%, #F5E27A 45%, #B8892A 100%);
          color: #010F22;
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-size: 11px;
          border: none;
          position: relative;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 8px 30px -8px rgba(191,149,63,0.5);
          cursor: none;
        }
        .btn-gold::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.45) 50%, transparent 70%);
          transform: translateX(-100%);
          transition: transform 0.5s ease;
        }
        .btn-gold:hover { transform: translateY(-2px) scale(1.03); box-shadow: 0 16px 40px -10px rgba(191,149,63,0.6); }
        .btn-gold:hover::before { transform: translateX(100%); }

        /* ── TEXTURE GRAIN ── */
        .grain::after {
          content: '';
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.025;
          pointer-events: none;
          z-index: 1;
        }

        /* ── HERO ANIMATIONS ── */
        .hero-line { overflow: hidden; }
        .hero-word {
          display: inline-block;
          transform: translateY(110%);
          opacity: 0;
          transition: transform 0.9s cubic-bezier(0.16,1,0.3,1), opacity 0.9s ease;
        }
        .hero-visible .hero-word { transform: translateY(0); opacity: 1; }
        .hero-word:nth-child(1) { transition-delay: 0.05s; }
        .hero-word:nth-child(2) { transition-delay: 0.15s; }
        .hero-word:nth-child(3) { transition-delay: 0.25s; }
        .hero-word:nth-child(4) { transition-delay: 0.35s; }

        .hero-sub {
          opacity: 0; transform: translateY(20px);
          transition: opacity 1s ease 0.7s, transform 1s ease 0.7s;
        }
        .hero-visible .hero-sub { opacity: 1; transform: translateY(0); }

        .hero-divider {
          width: 0; transition: width 1.2s cubic-bezier(0.22,1,0.36,1) 0.9s;
        }
        .hero-visible .hero-divider { width: 200px; }

        .hero-btns {
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.9s ease 1.1s, transform 0.9s ease 1.1s;
        }
        .hero-visible .hero-btns { opacity: 1; transform: translateY(0); }

        /* ── SCROLL PARALLAX ── */
        .parallax-slow { will-change: transform; }

        /* ── PRODUCT CARDS REVEAL ── */
        .card-reveal {
          opacity: 0; transform: translateY(40px);
          transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.16,1,0.3,1);
        }
        .card-reveal.visible { opacity: 1; transform: translateY(0); }
        .card-reveal:nth-child(1) { transition-delay: 0s; }
        .card-reveal:nth-child(2) { transition-delay: 0.12s; }
        .card-reveal:nth-child(3) { transition-delay: 0.24s; }

        /* ── CARD FEATURED ── */
        .card-featured {
          position: relative;
          transform: scale(1.04);
          z-index: 2;
        }

        /* ── LIGNE OR DÉCORATIVE ── */
        .ornament {
          display: flex; align-items: center; gap: 16px;
        }
        .ornament::before, .ornament::after {
          content: '';
          flex: 1; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(191,149,63,0.5), transparent);
        }

        /* ── SECTION DIVIDER ── */
        .section-divider {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(191,149,63,0.2) 30%, rgba(191,149,63,0.5) 50%, rgba(191,149,63,0.2) 70%, transparent 100%);
        }

        /* ── MAP DARK ── */
        .map-dark { filter: grayscale(100%) invert(90%) contrast(80%) brightness(0.7); }

        /* ── HOVER LINK ── */
        a, button { cursor: none; }
        .hover-link {
          position: relative; display: inline-block;
        }
        .hover-link::after {
          content: ''; position: absolute;
          left: 0; bottom: -2px;
          width: 0; height: 1px;
          background: #BF953F;
          transition: width 0.35s ease;
        }
        .hover-link:hover::after { width: 100%; }

        /* ── SCROLLBAR ── */
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #010F22; }
        ::-webkit-scrollbar-thumb { background: #BF953F; border-radius: 4px; }

        /* ── BADGE NOUVEAU ── */
        @keyframes badgepulse { 0%,100%{box-shadow:0 0 0 0 rgba(191,149,63,0.4)} 50%{box-shadow:0 0 0 6px rgba(191,149,63,0)} }
        .badge-new { animation: badgepulse 2.5s ease infinite; }

        /* ── FOOTER STARS ── */
        .star { position: absolute; border-radius: 50%; background: #BF953F; animation: twinkle var(--d,3s) ease-in-out infinite var(--delay,0s); }
        @keyframes twinkle { 0%,100%{opacity:0.1} 50%{opacity:0.7} }
      `}</style>

      {/* Curseur personnalisé */}
      <div id="custom-cursor"></div>

      <Navbar onOpenMenu={() => setIsMenuOpen(true)} />
      <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main className="flex flex-col items-center w-full">

        {/* ══════════════════════════════════════
            HERO
        ══════════════════════════════════════ */}
        <section className={`grain relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden ${heroVisible ? 'hero-visible' : ''}`}>

          {/* Background photo avec parallax */}
          <div
            className="absolute inset-0 z-0"
            style={{ transform: `translateY(${scrollY * 0.35}px)` }}
          >
            <img
              src={fondoColombia}
              alt="Café de Colombia"
              className="w-full h-full object-cover scale-110 opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#010F22]/60 via-[#010F22]/20 to-[#010F22]" />
          </div>

          {/* Éléments latéraux */}
          <img
            src={lateralIzquierdo} alt=""
            className="absolute left-0 top-1/2 -translate-y-1/2 w-[20%] max-w-[280px] hidden lg:block z-[3] opacity-90"
            style={{ transform: `translateY(calc(-50% + ${scrollY * 0.15}px))` }}
          />
          <img
            src={lateralDerecho} alt=""
            className="absolute right-0 top-[55%] -translate-y-1/2 w-[22%] max-w-[320px] hidden lg:block z-[3] opacity-90"
            style={{ transform: `translateY(calc(-50% + ${scrollY * 0.1}px))` }}
          />

          {/* Étiquette premium flottante */}
          <div className="relative z-10 mb-8 hero-sub">
            <span className="inline-flex items-center gap-3 border border-[#BF953F]/40 rounded-full px-5 py-2 text-[10px] uppercase tracking-[0.35em] text-[#BF953F] font-body font-medium backdrop-blur-sm bg-white/5">
              <span className="w-1 h-1 rounded-full bg-[#BF953F] inline-block" />
              Benijófar, Alicante · Est. 2024
              <span className="w-1 h-1 rounded-full bg-[#BF953F] inline-block" />
            </span>
          </div>

          {/* Titre principal avec reveal par mots */}
          <div className="relative z-10 max-w-4xl">
            <h1 className="font-display leading-[0.9] mb-4">
              <div className="hero-line mb-2">
                <span className="hero-word font-display text-5xl md:text-8xl font-black text-white tracking-tight mr-4">La</span>
                <span className="hero-word font-display text-5xl md:text-8xl font-black text-white tracking-tight mr-4">excelencia</span>
                <span className="hero-word font-display text-5xl md:text-8xl font-black text-white tracking-tight mr-4">del</span>
                <span className="hero-word font-display text-5xl md:text-8xl font-black text-white tracking-tight">grano</span>
              </div>
              <div className="hero-line mt-2">
                <span className="hero-word font-display italic text-5xl md:text-8xl font-bold gold tracking-tight">en Café Orion</span>
              </div>
            </h1>

            {/* Divider animé */}
            <div className="flex justify-center my-8 hero-sub">
              <div className="hero-divider h-[1px] bg-gradient-to-r from-transparent via-[#BF953F] to-transparent" />
            </div>

            <p className="hero-sub font-body text-white/50 text-sm md:text-base tracking-widest uppercase font-light max-w-md mx-auto mb-12">
              Arábica de altura · Colombia · Tueste artesanal
            </p>

            <div className="hero-btns flex flex-col sm:flex-row gap-5 justify-center items-center">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="btn-gold px-12 py-4 rounded-full"
              >
                Ver Productos
              </button>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-link font-body text-[11px] font-medium uppercase tracking-[0.35em] text-white/60 hover:text-white transition-colors"
              >
                Contactar por WhatsApp
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 hero-sub">
            <span className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-body">Scroll</span>
            <div className="w-[1px] h-10 bg-gradient-to-b from-[#BF953F]/50 to-transparent" style={{ animation: 'goldshine 2s ease-in-out infinite' }} />
          </div>
        </section>

        {/* ══════════════════════════════════════
            SECTION PRODUCTOS
        ══════════════════════════════════════ */}
        <section id="productos" className="w-full max-w-6xl py-32 px-6" ref={productsRef}>

          {/* Header section */}
          <div className="text-center mb-20">
            <p className="font-body text-[10px] uppercase tracking-[0.5em] text-[#BF953F]/70 mb-4">Selección de la casa</p>
            <h2 className="font-display text-4xl md:text-6xl font-black gold mb-6">
              Nuestros Imprescindibles
            </h2>
            <div className="ornament max-w-xs mx-auto">
              <span className="font-body text-white/20 text-[10px] uppercase tracking-widest">Origen Colombia</span>
            </div>
          </div>

          {/* Grille asymétrique : carte centrale mise en valeur */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 items-stretch">

            {/* Carte 1 */}
            <div className={`card-reveal ${productsVisible ? 'visible' : ''}`}>
              <CoffeeCard
                name="Espresso Orion"
                price="3.50"
                description="Intensidad pura de los Andes."
                icon="espresso"
              />
            </div>

            {/* Carte 2 — FEATURED (plus grande) */}
            <div className={`card-reveal card-featured ${productsVisible ? 'visible' : ''}`}>
              <div className="relative">
                <span className="badge-new absolute -top-3 left-1/2 -translate-x-1/2 z-10 bg-gradient-to-r from-[#BF953F] to-[#FCF6BA] text-[#010F22] text-[9px] font-body font-black uppercase tracking-widest px-4 py-1 rounded-full whitespace-nowrap">
                  ★ Best Seller
                </span>
                <CoffeeCard
                  name="Latte de la Sierra"
                  price="5.20"
                  description="Café suave con leche cremosa de la Sierra Nevada."
                  icon="latte"
                  featured
                />
              </div>
            </div>

            {/* Carte 3 */}
            <div className={`card-reveal ${productsVisible ? 'visible' : ''}`}>
              <CoffeeCard
                name="Cold Brew Andino"
                price="6.00"
                description="Infusión lenta de 18 horas."
                icon="coldbrew"
              />
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ══════════════════════════════════════
            SECTION CONTACTO & MAPA
        ══════════════════════════════════════ */}
        <section id="contacto" className="w-full max-w-5xl py-28 px-6">
          <div className="text-center mb-16">
            <p className="font-body text-[10px] uppercase tracking-[0.5em] text-[#BF953F]/70 mb-3">Visítanos</p>
            <h2 className="font-display text-3xl md:text-5xl font-black gold">Encuéntranos</h2>
          </div>

          <div className="bg-white/[0.03] backdrop-blur-2xl border border-[#BF953F]/15 rounded-[32px] overflow-hidden flex flex-col lg:flex-row shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">

            {/* Infos */}
            <div className="p-10 lg:p-14 lg:w-[42%] flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/[0.06]">

              <h3 className="font-display text-xl font-bold gold mb-10 uppercase tracking-wider">Horarios</h3>

              <div className="space-y-5">
                {[
                  { day: 'Lunes – Viernes', hours: '08:00 – 20:00' },
                  { day: 'Sábados',         hours: '09:00 – 22:00' },
                  { day: 'Domingos',        hours: '09:00 – 18:00', gold: true },
                ].map(({ day, hours, gold: isGold }) => (
                  <div key={day} className="flex justify-between items-center py-3 border-b border-white/[0.05]">
                    <span className="font-body text-sm text-white/50">{day}</span>
                    <span className={`font-body text-sm font-semibold ${isGold ? 'gold' : 'text-white'}`}>{hours}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-[#BF953F]/10">
                <p className="font-body text-[10px] uppercase tracking-[0.4em] text-[#BF953F]/60 mb-3">Dirección</p>
                <p className="font-display text-2xl font-bold text-white/90 leading-snug">
                  Calle Córdoba, 12<br />
                  <span className="text-white/40 text-lg font-normal">Benijófar, Alicante</span>
                </p>
              </div>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mt-10 self-start px-8 py-3 rounded-full inline-block text-center"
              >
                WhatsApp
              </a>
            </div>

            {/* Map */}
            <div className="lg:w-[58%] h-[380px] lg:h-auto relative overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3141.5!2d-0.7!3d38.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6395!2sCalle%20C%C3%B3rdoba%2C%2012%2C%2003178%20Benij%C3%B3far%2C%20Alicante!5e0!3m2!1ses!2ses!4v1700000000000"
                className="w-full h-full map-dark"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Localización Café Orion"
              />
              <div className="absolute inset-0 pointer-events-none border border-[#BF953F]/10 rounded-r-[32px]" />
            </div>
          </div>
        </section>
      </main>

      {/* ══════════════════════════════════════
          FOOTER
      ══════════════════════════════════════ */}
      <footer className="grain relative bg-[#000810] py-20 text-center border-t border-[#BF953F]/10 overflow-hidden">
        {/* Étoiles décoratives */}
        {[
          { top:'20%',left:'10%',size:'2px',d:'2s',delay:'0s'},
          { top:'60%',left:'15%',size:'1.5px',d:'3.5s',delay:'0.5s'},
          { top:'30%',left:'80%',size:'2px',d:'2.8s',delay:'1s'},
          { top:'70%',left:'85%',size:'1px',d:'4s',delay:'0.3s'},
          { top:'45%',left:'50%',size:'1.5px',d:'3s',delay:'0.8s'},
        ].map((s, i) => (
          <div key={i} className="star" style={{
            top:s.top, left:s.left,
            width:s.size, height:s.size,
            '--d':s.d, '--delay':s.delay
          }} />
        ))}

        <div className="relative z-10">
          <p className="font-display text-2xl font-bold gold mb-3 tracking-wider">CAFÉ ORION</p>
          <p className="font-body text-white/20 text-[10px] uppercase tracking-[0.4em] mb-8">
            Premium · Benijófar · Est. 2024
          </p>
          <div className="section-divider max-w-xs mx-auto mb-8" />
          <p className="font-body text-white/15 text-[10px] uppercase tracking-[0.2em]">
            © 2026 · Crafted for Coffee Lovers
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
