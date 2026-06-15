const bubblePattern = Array.from({ length: 28 }, (_, i) => ({
  size: 7 + ((i * 13) % 22),
  left: (i * 37) % 100,
  duration: 10 + ((i * 5) % 13),
  delay: -((i * 3) % 11),
}));

export function Bubbles({ count = 18 }: { count?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {bubblePattern.slice(0, count).map((bubble, i) => (
        <span
          key={i}
          className="animate-bubble absolute rounded-full"
          style={{
            left: `${bubble.left}%`,
            bottom: `-${bubble.size}px`,
            width: bubble.size,
            height: bubble.size,
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(94,211,226,0.28) 58%, transparent 72%)",
            border: "1px solid rgba(255,255,255,0.55)",
            animationDuration: `${bubble.duration}s`,
            animationDelay: `${bubble.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

function Fish({
  color = "#5ed3e2",
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
  const gradientId = `fg-${color.replace("#", "")}-${size}`;
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
        filter: `drop-shadow(0 8px 16px ${color}66)`,
      }}
      aria-hidden
    >
      <defs>
        <linearGradient id={gradientId} x1="0" x2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="0.35" stopColor={color} stopOpacity="0.95" />
          <stop offset="1" stopColor={color} stopOpacity="0.52" />
        </linearGradient>
      </defs>
      <path d="M4 16 L20 6 Q40 0 56 14 Q60 16 56 18 Q40 32 20 26 Z" fill={`url(#${gradientId})`} />
      <path d="M0 8 L10 16 L0 24 Z" fill={color} opacity="0.65" />
      <path d="M23 9 Q34 16 23 24" fill="none" stroke="rgba(255,255,255,.45)" strokeWidth="1.2" />
      <circle cx="48" cy="14" r="1.6" fill="#123047" />
    </svg>
  );
}

export function SwimmingFish() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <Fish color="#31bfd6" size={62} top="18%" duration={32} />
      <Fish color="#fb923c" size={38} top="38%" duration={26} delay={-6} opacity={0.72} />
      <Fish color="#67e8f9" size={52} top="62%" duration={38} delay={-14} opacity={0.64} />
      <Fish color="#fcd34d" size={30} top="80%" duration={22} delay={-3} opacity={0.58} />
      <Fish color="#5eead4" size={42} top="50%" duration={34} delay={-18} opacity={0.56} />
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
            "radial-gradient(ellipse at top, rgba(255,255,255,0.55), transparent 56%), linear-gradient(180deg, rgba(122,229,235,.2), transparent 45%)",
        }}
      />
    </>
  );
}
