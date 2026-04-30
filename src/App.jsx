import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CoffeeCard from './components/CoffeeCard';
import MenuModal from './components/MenuModal';

// Imports des assets
import fondoColombia from './assets/colombia.webp';
import lateralIzquierdo from './assets/Grano_De_Cafe_Di.webp';
import lateralDerecho from './assets/Mata_De_Cafe.webp';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Café Orion | Premium Experience";
  }, []);

  const whatsappNumber = "34641899336";
  const whatsappMessage = encodeURIComponent("Hola Café Orion, me gustaría obtener más información.");

  return (
    <div className="min-h-screen bg-[#001A3D] font-sans text-white relative overflow-x-hidden scroll-smooth">

      {/* Styles Globaux & Effets Or */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Cormorant+Garamond:wght@700&display=swap');

        html { scroll-behavior: smooth; }
        .font-minimal { font-family: 'Inter', sans-serif; }
        .font-noble { font-family: 'Cormorant Garamond', serif; }

        /* EFFET OR PREMIUM RESTAURÉ (5 TONS + ANIMATION) */
        .gold-text-complete {
          background: linear-gradient(
            to right,
            #BF953F 0%,
            #FCF6BA 25%,
            #B38728 50%,
            #FBF5B7 75%,
            #AA771C 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% auto;
          animation: shine 4s linear infinite;

          /* Épaisseur des lettres sans bordure via ombres portées */
          text-shadow:
            0.8px 0px 0px rgba(191, 149, 63, 0.4),
            -0.8px 0px 0px rgba(191, 149, 63, 0.4),
            0px 0.5px 0px rgba(0, 0, 0, 0.2);
        }

        @keyframes shine {
          to { background-position: 200% center; }
        }

        /* Bouton avec reflet dynamique */
        .gold-button-shiny {
          background: linear-gradient(135deg, #BF953F 0%, #FCF6BA 50%, #B38728 100%);
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 15px 35px -10px rgba(191, 149, 63, 0.4);
        }

        .gold-button-shiny::after {
          content: "";
          position: absolute;
          top: -50%;
          left: -60%;
          width: 25%;
          height: 200%;
          background: rgba(255, 255, 255, 0.4);
          transform: rotate(30deg);
          animation: reflection 3s infinite;
        }

        @keyframes reflection {
          0% { left: -60%; }
          30% { left: 120%; }
          100% { left: 120%; }
        }

        /* Filtre Dark pour la Map */
        .google-map-dark {
          filter: grayscale(100%) invert(92%) contrast(83%);
          border: 1px solid rgba(191, 149, 63, 0.3);
        }

        /* Bordure dégradée pour les cartes */
        .gold-card-container {
          padding: 1px;
          background: linear-gradient(to bottom, rgba(191, 149, 63, 0.5), transparent);
          border-radius: 30px;
        }
      `}</style>

      {/* Navigation */}
      <Navbar onOpenMenu={() => setIsMenuOpen(true)} />

      {/* Fenêtre modale du menu */}
      <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main className="flex flex-col items-center w-full">

        {/* HERO SECTION - AVEC TAILLES RÉVISÉES */}
        <section className="relative w-full h-screen flex flex-col items-center justify-start pt-32 md:pt-44 text-center px-6">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src={fondoColombia}
              alt="Café de Colombia"
              className="w-full h-full object-cover scale-105 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#001A3D]/40 via-transparent to-[#001A3D] z-[2]"></div>

            {/* Éléments décoratifs latéraux */}
            <img src={lateralIzquierdo} alt="" className="absolute left-[-2%] top-1/2 -translate-y-1/2 w-[22%] max-w-[320px] hidden lg:block z-[3] opacity-100" />
            <img src={lateralDerecho} alt="" className="absolute right-[-2%] top-[60%] -translate-y-1/2 w-[24%] max-w-[350px] hidden lg:block z-[3] opacity-100" />
          </div>

          <div className="relative z-10 max-w-[95vw]">
            <h1 className="mb-8 flex flex-col items-center leading-tight">
              <span className="font-minimal font-black text-4xl md:text-6xl uppercase tracking-[0.2em] text-white block mb-6 drop-shadow-2xl">
                La excelencia del grano
              </span>

              {/* TITRE PHARE : 9XL + ÉTIRÉ 150% */}
              <span className="gold-text-complete uppercase text-4xl md:text-5xl font-noble inline-block transform scale-x-150 origin-center drop-shadow-2xl py-4">
                en Café Orion
              </span>
            </h1>

            <div className="w-60 h-[2px] bg-gradient-to-r from-transparent via-[#BF953F] to-transparent mx-auto mb-12"></div>

            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="gold-button-shiny text-[#001A3D] px-14 py-5 rounded-full font-black hover:scale-110 transition-all text-sm uppercase tracking-widest cursor-pointer"
              >
                Ver Productos
              </button>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-b border-white/20 pb-1 hover:border-[#BF953F] transition-all"
              >
                <span className="font-minimal text-xs font-semibold uppercase tracking-[0.4em] text-white group-hover:gold-text-complete transition-colors">
                  Contactar
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* SECTION PRODUCTOS (Nuestros Imprescindibles) */}
        <section id="productos" className="w-full max-w-6xl py-32 px-6">
          <h2 className="text-3xl md:text-5xl font-noble text-center mb-20 uppercase tracking-[0.3em] gold-text-complete">
            Nuestros Imprescindibles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="gold-card-container transition-all hover:scale-[1.03]">
              <CoffeeCard name="Espresso Orion" price="3.50" description="Intensidad pura de los Andes." icon="☕" />
            </div>
            <div className="gold-card-container transition-all hover:scale-[1.03]">
              <CoffeeCard name="Latte de la Sierra" price="5.20" description="Café suave con leche cremosa." icon="🥛" />
            </div>
            <div className="gold-card-container transition-all hover:scale-[1.03]">
              <CoffeeCard name="Cold Brew Andino" price="6.00" description="Infusión lenta de 18 h." icon="🧊" />
            </div>
          </div>
        </section>

        {/* SECTION CONTACTO & MAPA */}
        <section id="contacto" className="w-full max-w-5xl py-24 px-6">
          <div className="bg-white/5 backdrop-blur-2xl border border-[#BF953F]/20 rounded-[40px] overflow-hidden flex flex-col lg:flex-row shadow-3xl">
            <div className="p-12 lg:w-1/2 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
              <h3 className="text-2xl font-noble mb-8 gold-text-complete uppercase tracking-[0.2em]">Horarios</h3>
              <ul className="space-y-4 text-sm font-minimal">
                <li className="flex justify-between border-b border-white/5 pb-2 opacity-80">
                  <span>Lunes - Viernes</span> <span className="font-bold">08:00 - 20:00</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2 opacity-80">
                  <span>Sábados</span> <span className="font-bold">09:00 - 22:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingos</span> <span className="font-bold gold-text-complete">09:00 - 18:00</span>
                </li>
              </ul>

              <div className="mt-12 pt-8 border-t border-[#BF953F]/20">
                <h4 className="text-[10px] uppercase tracking-[0.4em] gold-text-complete mb-2 font-black">Ubicación</h4>
                <p className="text-xl font-noble text-white/90 leading-tight">
                  Calle Córdoba, 12<br />
                  03178 Benijófar, Alicante
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 h-[450px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3141.5!2d-0.7!3d38.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6395!2sCalle%20C%C3%B3rdoba%2C%2012%2C%2003178%20Benij%C3%B3far%2C%20Alicante!5e0!3m2!1ses!2ses!4v1700000000000"
                className="w-full h-full google-map-dark"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Localización Café Orion"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Premium */}
      <footer className="bg-[#000D1F] py-16 text-center border-t border-[#BF953F]/10">
        <p className="mb-4 uppercase tracking-[0.6em] gold-text-complete text-sm font-bold">Café Orion Premium</p>
        <p className="text-white/20 text-[10px] uppercase tracking-[0.2em] font-minimal">
          © 2026 • Crafted for Coffee Lovers • Benijófar
        </p>
      </footer>
    </div>
  );
}

export default App;
