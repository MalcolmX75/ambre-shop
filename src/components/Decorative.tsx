export function GoldDivider() {
  return (
    <div className="flex items-center justify-center py-2">
      <svg width="200" height="12" viewBox="0 0 200 12" className="text-gold">
        <path
          d="M0 6 Q25 0 50 6 Q75 12 100 6 Q125 0 150 6 Q175 12 200 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.6"
        />
        <circle cx="100" cy="6" r="3" fill="currentColor" opacity="0.4" />
      </svg>
    </div>
  );
}

export function FloralSeparator() {
  return (
    <div className="flex items-center justify-center gap-3 py-6">
      <div className="h-px w-16 bg-gold/30" />
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        className="text-gold/50"
      >
        <path
          d="M14 2 C14 2 18 8 18 14 C18 20 14 26 14 26 C14 26 10 20 10 14 C10 8 14 2 14 2Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M2 14 C2 14 8 10 14 10 C20 10 26 14 26 14 C26 14 20 18 14 18 C8 18 2 14 2 14Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        <circle cx="14" cy="14" r="2" fill="currentColor" />
      </svg>
      <div className="h-px w-16 bg-gold/30" />
    </div>
  );
}

export function ButterflyWatermark({ className = "" }: { className?: string }) {
  return (
    <svg
      width="120"
      height="100"
      viewBox="0 0 120 100"
      className={`text-gold/10 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M60 50 C50 30 20 10 10 30 C0 50 30 60 60 50Z"
        fill="currentColor"
      />
      <path
        d="M60 50 C70 30 100 10 110 30 C120 50 90 60 60 50Z"
        fill="currentColor"
      />
      <path
        d="M60 50 C55 60 40 80 45 90 C50 95 55 70 60 50Z"
        fill="currentColor"
      />
      <path
        d="M60 50 C65 60 80 80 75 90 C70 95 65 70 60 50Z"
        fill="currentColor"
      />
      <line
        x1="60"
        y1="30"
        x2="60"
        y2="95"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}
