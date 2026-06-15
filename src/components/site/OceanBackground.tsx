export function Bubbles({ count = 18 }: { count?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const size = 6 + Math.random() * 22;
        const left = Math.random() * 100;
        const duration = 9 + Math.random() * 14;
        const delay = -Math.random() * duration;
        return (
          <span
            key={i}
            className="animate-bubble absolute rounded-full"
            style={{
              left: `${left}%`,
              bottom: `-${size}px`,
              width: size,
              height: size,
              background:
                "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.85), rgba(125,211,252,0.25) 60%, transparent 70%)",
              border: "1px solid rgba(255,255,255,0.25)",
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}

function Fish({
  color = "#7dd3fc",
  size = 44,
  top = "20%",
  duration = 28,
  delay = 0,
  opacity = 0.85,
}: {
  color?: string;
  size?: number;
  top?: string;
  duration?: number;
  delay?: number;
  opacity?: number;
}) {
  return (
    <svg
      viewBox="0 0 64 32"
      className="animate-swim absolute"
      style={{
        top,
        width: size,
        height: size * 0.5,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        opacity,
        filter: `drop-shadow(0 4px 10px ${color}55)`,
      }}
      aria-hidden
    >
      <defs>
        <linearGradient id={`fg-${color}`} x1="0" x2="1">
          <stop offset="0" stopColor={color} stopOpacity="0.9" />
          <stop offset="1" stopColor={color} stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <path
        d="M4 16 L20 6 Q40 0 56 14 Q60 16 56 18 Q40 32 20 26 Z"
        fill={`url(#fg-${color})`}
      />
      <path d="M0 8 L10 16 L0 24 Z" fill={color} opacity="0.7" />
      <circle cx="48" cy="14" r="1.6" fill="#0b1220" />
    </svg>
  );
}

export function SwimmingFish() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <Fish color="#7dd3fc" size={56} top="18%" duration={32} />
      <Fish color="#fb923c" size={36} top="38%" duration={26} delay={-6} opacity={0.7} />
      <Fish color="#a5f3fc" size={48} top="62%" duration={38} delay={-14} opacity={0.6} />
      <Fish color="#fcd34d" size={28} top="80%" duration={22} delay={-3} opacity={0.55} />
      <Fish color="#67e8f9" size={40} top="50%" duration={34} delay={-18} opacity={0.5} />
    </div>
  );
}

export function CausticsLayer() {
  return (
    <>
      <div className="caustics pointer-events-none absolute inset-0 animate-ripple-slow" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(125,211,252,0.18), transparent 60%)",
        }}
      />
    </>
  );
}
