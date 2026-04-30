import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenMenu }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <style>{`
        .nav-pill {
          transition: background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease, padding 0.3s ease;
        }
        .nav-pill.scrolled {
          background: rgba(1, 15, 34, 0.85) !important;
          border-color: rgba(191, 149, 63, 0.25) !important;
          box-shadow: 0 8px 40px -8px rgba(0,0,0,0.6), 0 0 0 1px rgba(191,149,63,0.08) !important;
        }
        .nav-link {
          position: relative;
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          transition: color 0.25s ease;
          cursor: none;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0; bottom: -3px;
          width: 0; height: 1px;
          background: #BF953F;
          transition: width 0.3s ease;
        }
        .nav-link:hover { color: white; }
        .nav-link:hover::after { width: 100%; }

        .nav-logo-gold {
          background: linear-gradient(90deg, #BF953F, #FCF6BA, #B38728);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% auto;
          animation: goldshine 5s linear infinite;
        }
        @keyframes goldshine { to { background-position: 200% center; } }

        .nav-btn {
          background: linear-gradient(135deg, #C9A84C 0%, #F5E27A 45%, #B8892A 100%);
          color: #010F22;
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          border: none;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          cursor: none;
        }
        .nav-btn:hover { transform: scale(1.05); box-shadow: 0 6px 20px -4px rgba(191,149,63,0.5); }

        /* Mobile menu */
        .mobile-btn {
          display: flex; flex-direction: column; gap: 5px;
          cursor: none; background: none; border: none; padding: 4px;
        }
        .mobile-btn span {
          display: block; width: 20px; height: 1.5px;
          background: rgba(191,149,63,0.7);
          transition: all 0.3s ease;
        }
      `}</style>

      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-[80] w-[94%] max-w-5xl">
        <div className={`nav-pill ${scrolled ? 'scrolled' : ''} bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] rounded-full px-5 md:px-8 py-3.5 flex justify-between items-center`}>

          {/* Logo */}
          <a href="#" className="flex items-center gap-1.5 group" style={{ cursor: 'none' }}>
            {/* Grain de café SVG */}
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="opacity-70 group-hover:opacity-100 transition-opacity">
              <ellipse cx="9" cy="9" rx="7" ry="5" stroke="#BF953F" strokeWidth="1.2" fill="none"/>
              <path d="M9 4 Q9 9 9 14" stroke="#BF953F" strokeWidth="1" strokeLinecap="round"/>
            </svg>
            <span className="font-display font-black tracking-tight text-lg leading-none">
              <span className="nav-logo-gold">CAFÉ</span>
              <span className="text-white ml-1 font-bold">ORION</span>
            </span>
          </a>

          {/* Links desktop */}
          <div className="hidden md:flex items-center gap-10">
            <button onClick={onOpenMenu} className="nav-link">Productos</button>
            <a href="#contacto" className="nav-link">Contacto</a>
          </div>

          {/* CTA */}
          <button
            onClick={onOpenMenu}
            className="nav-btn px-6 py-2.5 rounded-full hidden sm:block"
          >
            Ver Carta
          </button>

          {/* Mobile toggle */}
          <button className="mobile-btn sm:hidden" onClick={onOpenMenu} aria-label="Abrir menú">
            <span /><span /><span />
          </button>
        </div>
      </nav>
    </>
  );
}
