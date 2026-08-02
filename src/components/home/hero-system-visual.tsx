const LABELS = [
  { label: 'Interface', top: '19%' },
  { label: 'Orchestration', top: '37%' },
  { label: 'Models', top: '55%' },
  { label: 'Data & Tools', top: '73%' },
];

const LAYER_DELAYS = ['-0.4s', '-1.6s', '-2.8s', '-3.6s'];

export default function HeroSystemVisual() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative mx-auto w-full max-w-[260px] select-none sm:max-w-[340px] lg:max-w-[420px]"
    >
      <div className="relative aspect-[11/12] w-full">
        <svg viewBox="0 0 440 480" className="h-full w-full overflow-visible" fill="none">
          <defs>
            <linearGradient id="layer-interface" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2c3550" />
              <stop offset="100%" stopColor="#0f1420" />
            </linearGradient>
            <linearGradient id="layer-orchestration" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8b7bf0" />
              <stop offset="100%" stopColor="#4c3f91" />
            </linearGradient>
            <linearGradient id="layer-models" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3a3350" />
              <stop offset="100%" stopColor="#181521" />
            </linearGradient>
            <linearGradient id="layer-data-top" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#9d7bff" />
              <stop offset="100%" stopColor="#6a4fd8" />
            </linearGradient>
            <radialGradient id="glow-blue" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="glow-purple" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
            </radialGradient>
            <filter id="soft-blur" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="14" />
            </filter>
          </defs>

          {/* Ground plane + wireframe cage */}
          <g opacity="0.35" stroke="#8b8fb8" strokeWidth="1">
            <path d="M 220 358 L 392 420 L 220 482 L 48 420 Z" />
            <path d="M 48 420 L 48 168" strokeOpacity="0.4" />
            <path d="M 392 420 L 392 168" strokeOpacity="0.4" />
            <path d="M 220 358 L 220 106" strokeOpacity="0.2" />
          </g>

          {/* Interface layer */}
          <g style={{ animationDelay: LAYER_DELAYS[0] }} className="motion-safe:animate-float-slow">
            <ellipse
              cx="220"
              cy="110"
              rx="120"
              ry="60"
              fill="url(#glow-blue)"
              filter="url(#soft-blur)"
            />
            <path
              d="M 220 64 L 336 110 L 220 156 L 104 110 Z"
              fill="url(#layer-interface)"
              stroke="#93c5fd"
              strokeOpacity="0.5"
              strokeWidth="1.25"
            />
          </g>

          {/* Orchestration layer */}
          <g style={{ animationDelay: LAYER_DELAYS[1] }} className="motion-safe:animate-float-slow">
            <ellipse
              cx="220"
              cy="192"
              rx="128"
              ry="58"
              fill="url(#glow-purple)"
              filter="url(#soft-blur)"
            />
            <path
              d="M 220 146 L 348 192 L 220 238 L 92 192 Z"
              fill="url(#layer-orchestration)"
              stroke="#c4b5fd"
              strokeOpacity="0.6"
              strokeWidth="1.25"
            />
          </g>

          {/* Models layer */}
          <g style={{ animationDelay: LAYER_DELAYS[2] }} className="motion-safe:animate-float-slow">
            <ellipse
              cx="220"
              cy="272"
              rx="122"
              ry="56"
              fill="url(#glow-purple)"
              filter="url(#soft-blur)"
              opacity="0.6"
            />
            <path
              d="M 220 228 L 342 272 L 220 316 L 98 272 Z"
              fill="url(#layer-models)"
              stroke="#a78bfa"
              strokeOpacity="0.45"
              strokeWidth="1.25"
            />
          </g>

          {/* Data & Tools layer — extruded for a solid, grounded feel */}
          <g style={{ animationDelay: LAYER_DELAYS[3] }} className="motion-safe:animate-float-slow">
            <ellipse
              cx="220"
              cy="368"
              rx="140"
              ry="66"
              fill="url(#glow-purple)"
              filter="url(#soft-blur)"
            />
            <path d="M 106 358 L 220 402 L 220 438 L 106 394 Z" fill="#3d2f7a" opacity="0.9" />
            <path d="M 334 358 L 220 402 L 220 438 L 334 394 Z" fill="#2a2050" opacity="0.9" />
            <path
              d="M 220 314 L 334 358 L 220 402 L 106 358 Z"
              fill="url(#layer-data-top)"
              stroke="#c4b5fd"
              strokeOpacity="0.7"
              strokeWidth="1.25"
            />
          </g>
        </svg>

        <div className="absolute inset-0 hidden md:block">
          {LABELS.map(({ label, top }) => (
            <span
              key={label}
              style={{ top }}
              className="absolute left-[86%] -translate-y-1/2 whitespace-nowrap text-xs font-medium uppercase tracking-[0.18em] text-heroTextMuted"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
