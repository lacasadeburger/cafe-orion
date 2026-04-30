// components/CoffeeCard.jsx

const icons = {
  espresso: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="26" r="14" stroke="#BF953F" strokeWidth="1.5" strokeOpacity="0.4"/>
      <ellipse cx="24" cy="26" rx="9" ry="9" fill="none" stroke="#BF953F" strokeWidth="1" strokeOpacity="0.6"/>
      <circle cx="24" cy="26" r="4" fill="#BF953F" fillOpacity="0.3"/>
      <path d="M24 12 C24 8 28 6 28 6" stroke="#BF953F" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
      <path d="M20 11 C20 7 24 5 24 5" stroke="#BF953F" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.3"/>
      <rect x="15" y="38" width="18" height="2" rx="1" fill="#BF953F" fillOpacity="0.3"/>
    </svg>
  ),
  latte: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M12 18 H36 L33 40 H15 Z" stroke="#BF953F" strokeWidth="1.5" strokeOpacity="0.5" fill="none" strokeLinejoin="round"/>
      <path d="M36 22 C40 22 42 25 42 28 C42 31 40 33 36 33" stroke="#BF953F" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" fill="none"/>
      <ellipse cx="24" cy="18" rx="12" ry="3" stroke="#BF953F" strokeWidth="1" strokeOpacity="0.3" fill="none"/>
      <path d="M18 24 Q24 28 30 24" stroke="#BF953F" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.4" fill="none"/>
      <path d="M19 29 Q24 33 29 29" stroke="#BF953F" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.25" fill="none"/>
    </svg>
  ),
  coldbrew: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M16 12 H32 L30 40 H18 Z" stroke="#BF953F" strokeWidth="1.5" strokeOpacity="0.5" fill="none" strokeLinejoin="round"/>
      <rect x="10" y="10" width="28" height="4" rx="2" stroke="#BF953F" strokeWidth="1" strokeOpacity="0.3" fill="none"/>
      <circle cx="22" cy="27" r="2" fill="#BF953F" fillOpacity="0.3"/>
      <circle cx="27" cy="22" r="1.5" fill="#BF953F" fillOpacity="0.2"/>
      <circle cx="24" cy="33" r="1" fill="#BF953F" fillOpacity="0.2"/>
      <path d="M22 6 L22 10" stroke="#BF953F" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
      <path d="M26 7 L26 10" stroke="#BF953F" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.3"/>
    </svg>
  ),
};

export default function CoffeeCard({ name, price, description, icon, featured }) {
  return (
    <div
      className={`
        group relative flex flex-col items-center text-center h-full
        backdrop-blur-xl rounded-[28px]
        transition-all duration-500 ease-out
        hover:-translate-y-3
        ${featured
          ? 'bg-white/[0.07] border border-[#BF953F]/30 p-10 shadow-[0_20px_60px_-15px_rgba(191,149,63,0.2)] hover:shadow-[0_30px_80px_-15px_rgba(191,149,63,0.35)]'
          : 'bg-white/[0.03] border border-white/[0.06] p-9 hover:border-[#BF953F]/20 hover:bg-white/[0.06]'
        }
      `}
    >
      <style>{`
        .icon-ring {
          transition: transform 0.5s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease;
        }
        .group:hover .icon-ring {
          transform: scale(1.15) rotate(5deg);
          box-shadow: 0 0 30px rgba(191,149,63,0.2);
        }
        .price-glow {
          background: linear-gradient(90deg, #BF953F 0%, #FCF6BA 40%, #B38728 70%, #FBF5B7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% auto;
          animation: goldshine 5s linear infinite;
        }
        @keyframes goldshine { to { background-position: 200% center; } }
        .underbar {
          width: 0; transition: width 0.6s cubic-bezier(0.22,1,0.36,1);
        }
        .group:hover .underbar { width: 60px; }
      `}</style>

      {/* Halo doré en background sur la featured */}
      {featured && (
        <div className="absolute inset-0 rounded-[28px] pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-[#BF953F]/10 blur-3xl" />
        </div>
      )}

      {/* Icône SVG avec anneau */}
      <div className="icon-ring relative mb-8 p-5 rounded-full border border-[#BF953F]/20 bg-[#BF953F]/5">
        {icons[icon] || icons.espresso}
      </div>

      {/* Nom */}
      <h4
        className={`font-display font-bold mb-3 uppercase tracking-wide leading-tight
          ${featured ? 'text-2xl text-white' : 'text-xl text-white/90'}`}
      >
        {name}
      </h4>

      {/* Description */}
      <p className="font-body text-white/35 text-sm leading-relaxed mb-8 font-light italic">
        {description}
      </p>

      {/* Prix */}
      <div className="mt-auto flex flex-col items-center gap-3">
        <span className={`price-glow font-display font-black ${featured ? 'text-4xl' : 'text-3xl'}`}>
          {price}€
        </span>

        {/* Trait doré qui s'étire au hover */}
        <div className="underbar h-[1px] bg-gradient-to-r from-[#BF953F] to-[#FCF6BA]" />
      </div>
    </div>
  );
}
