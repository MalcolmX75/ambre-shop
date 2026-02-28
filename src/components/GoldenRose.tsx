export default function GoldenRose({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 140"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Stem */}
      <path
        d="M60 75 C58 90 55 110 58 135"
        stroke="url(#stemGold)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Thorns */}
      <path d="M57 95 L50 90 L56 93" fill="url(#petalGold)" opacity="0.6" />
      <path d="M59 110 L66 105 L60 108" fill="url(#petalGold)" opacity="0.6" />
      {/* Leaves */}
      <path
        d="M56 100 C45 95 38 88 42 82 C46 76 55 80 56 100Z"
        fill="url(#leafGold)"
        opacity="0.5"
      />
      <path
        d="M60 115 C72 110 78 102 74 96 C70 90 62 94 60 115Z"
        fill="url(#leafGold)"
        opacity="0.4"
      />
      {/* Petals — outer */}
      <path
        d="M60 30 C45 35 30 50 35 65 C40 75 55 72 60 55 C65 72 80 75 85 65 C90 50 75 35 60 30Z"
        fill="url(#petalGold)"
        opacity="0.7"
      />
      {/* Petals — middle */}
      <path
        d="M60 35 C50 40 40 52 45 62 C48 68 56 66 60 55 C64 66 72 68 75 62 C80 52 70 40 60 35Z"
        fill="url(#petalGold2)"
        opacity="0.8"
      />
      {/* Petals — inner curl */}
      <path
        d="M55 45 C52 50 50 58 55 60 C58 61 60 55 60 50 C60 55 62 61 65 60 C70 58 68 50 65 45 C63 42 57 42 55 45Z"
        fill="url(#petalGold3)"
        opacity="0.9"
      />
      {/* Center spiral */}
      <path
        d="M58 50 C58 48 60 46 62 48 C64 50 62 53 60 52 C58 51 59 49 60 49"
        stroke="url(#petalGold3)"
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />
      {/* Highlight */}
      <ellipse cx="54" cy="48" rx="3" ry="5" fill="white" opacity="0.15" transform="rotate(-20 54 48)" />

      <defs>
        <linearGradient id="petalGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F0D4A8" />
          <stop offset="50%" stopColor="#E1C48E" />
          <stop offset="100%" stopColor="#C9A96E" />
        </linearGradient>
        <linearGradient id="petalGold2" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#E8D4A0" />
          <stop offset="100%" stopColor="#D4A96A" />
        </linearGradient>
        <linearGradient id="petalGold3" x1="0" y1="0" x2="1" y2="0.8">
          <stop offset="0%" stopColor="#F5E6C8" />
          <stop offset="100%" stopColor="#E1C48E" />
        </linearGradient>
        <linearGradient id="stemGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C9A96E" />
          <stop offset="100%" stopColor="#A8864E" />
        </linearGradient>
        <linearGradient id="leafGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D4B87A" />
          <stop offset="100%" stopColor="#A8864E" />
        </linearGradient>
      </defs>
    </svg>
  );
}
