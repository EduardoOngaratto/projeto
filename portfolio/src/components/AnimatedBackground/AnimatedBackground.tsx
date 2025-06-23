import { Box } from "@mui/material";

export const AnimatedBackground = () => {
  return (
    <Box>
      <svg
        width="600"
        height="600"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Filtros de halo (glow) */}
        <defs>
          <filter id="halo" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="6"
              floodColor="#7B3FE4"
              floodOpacity="0.8"
            />
          </filter>

          <filter id="haloBlue" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="6"
              floodColor="#4FC3F7"
              floodOpacity="0.8"
            />
          </filter>

          <filter id="haloPurple" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="6"
              floodColor="#A17CFF"
              floodOpacity="0.8"
            />
          </filter>

          {/* Gradientes neon */}
          <linearGradient
            id="neonGradient1"
            x1="100"
            y1="50"
            x2="500"
            y2="150"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#7B3FE4" stopOpacity="1" />
            <stop offset="100%" stopColor="#4FC3F7" stopOpacity="0" />
          </linearGradient>

          <linearGradient
            id="neonGradient2"
            x1="400"
            y1="100"
            x2="550"
            y2="350"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#4FC3F7" stopOpacity="1" />
            <stop offset="100%" stopColor="#7B3FE4" stopOpacity="0" />
          </linearGradient>

          <linearGradient
            id="neonGradient3"
            x1="100"
            y1="400"
            x2="300"
            y2="550"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#A17CFF" stopOpacity="1" />
            <stop offset="100%" stopColor="#4FC3F7" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Paths com gradiente e halo */}
        <path
          id="pathA"
          d="M100 100 C200 50 400 50 500 100"
          stroke="url(#neonGradient1)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0.8"
          filter="url(#halo)"
        />
        <path
          id="pathB"
          d="M500 100 L550 300 L400 400 L150 350"
          stroke="url(#neonGradient2)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0.8"
          filter="url(#haloBlue)"
        />
        <path
          id="pathC"
          d="M150 350 C100 450 200 550 300 500"
          stroke="url(#neonGradient3)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0.8"
          filter="url(#haloPurple)"
        />

        {/* Círculos animados sem flash inicial */}
        <circle cx="0" cy="0" r="6" fill="#7B3FE4" filter="url(#halo)" visibility="hidden">
          <set attributeName="visibility" to="visible" begin="0s" />
          <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#pathA" />
          </animateMotion>
        </circle>

        <circle cx="0" cy="0" r="5" fill="#4FC3F7" opacity="0.9" filter="url(#haloBlue)" visibility="hidden">
          <set attributeName="visibility" to="visible" begin="2s" />
          <animateMotion dur="6s" repeatCount="indefinite" rotate="auto" begin="2s">
            <mpath xlinkHref="#pathB" />
          </animateMotion>
        </circle>

        <circle cx="0" cy="0" r="7" fill="#A17CFF" opacity="0.7" filter="url(#haloPurple)" visibility="hidden">
          <set attributeName="visibility" to="visible" begin="4s" />
          <animateMotion dur="10s" repeatCount="indefinite" rotate="auto" begin="4s">
            <mpath xlinkHref="#pathC" />
          </animateMotion>
        </circle>
      </svg>
    </Box>
  );
};
