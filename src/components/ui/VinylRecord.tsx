interface VinylRecordProps {
  isPlaying?: boolean
}

export default function VinylRecord({ isPlaying = false }: VinylRecordProps) {
  return (
    <div
      className={`shrink-0 w-44 h-44 sm:w-52 sm:h-52 md:w-64 md:h-64 transition-all duration-700 ease-in-out ${isPlaying ? 'vinyl-spin' : ''}`}
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 260 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer vinyl disc */}
        <circle cx="130" cy="130" r="130" fill="#111" />
        {/* Grooves */}
        {[110, 96, 82, 68, 54].map(r => (
          <circle
            key={r}
            cx="130"
            cy="130"
            r={r}
            fill="none"
            stroke="#222"
            strokeWidth="1"
          />
        ))}
        {/* Center label */}
        <circle cx="130" cy="130" r="44" fill="#C8591A" />
        {/* Label text ring */}
        <circle cx="130" cy="130" r="36" fill="none" stroke="#F2E8D5" strokeWidth="0.5" />
        {/* Label title */}
        <text
          x="130"
          y="123"
          textAnchor="middle"
          fill="#FAF3E0"
          fontSize="7"
          fontFamily="'Space Mono', monospace"
          fontWeight="bold"
          letterSpacing="1"
        >
          A GRANDE ROTA
        </text>
        <text
          x="130"
          y="133"
          textAnchor="middle"
          fill="#FAF3E0"
          fontSize="5"
          fontFamily="'Space Mono', monospace"
          letterSpacing="0.5"
        >
          Lado B
        </text>
        <text
          x="130"
          y="143"
          textAnchor="middle"
          fill="#FAF3E0"
          fontSize="4.5"
          fontFamily="'Space Mono', monospace"
          letterSpacing="0.5"
        >
          ─── 2025 ───
        </text>
        {/* Center hole */}
        <circle cx="130" cy="130" r="5" fill="#1A0A00" />
        {/* Subtle shine */}
        <ellipse
          cx="100"
          cy="100"
          rx="20"
          ry="12"
          fill="white"
          opacity="0.04"
          transform="rotate(-30 100 100)"
        />
      </svg>
    </div>
  )
}
