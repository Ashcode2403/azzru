import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const AzzuDOPLogo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md',
  showSubtitle = true 
}) => {
  const dimensions = {
    sm: { width: 140, height: 42 },
    md: { width: 190, height: 56 },
    lg: { width: 280, height: 84 },
    xl: { width: 380, height: 114 },
  }[size];

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg 
        viewBox="0 0 540 140" 
        style={{ width: `${dimensions.width}px`, height: 'auto' }}
        className="overflow-visible"
      >
        <defs>
          <linearGradient id="goldGradientLogo" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF099" />
            <stop offset="50%" stopColor="#FFB800" />
            <stop offset="100%" stopColor="#D49000" />
          </linearGradient>
        </defs>

        {/* Aperture Blades Icon */}
        <g transform="translate(65, 70)">
          {/* Golden Aperture Circle */}
          <circle cx="0" cy="0" r="48" fill="url(#goldGradientLogo)" />
          
          {/* Black Cut Blades */}
          <path d="M 0 0 L -25 -42 L -44 -12 Z" fill="#050505" />
          <path d="M 0 0 L 16 -44 L 44 -18 Z" fill="#050505" />
          <path d="M 0 0 L 44 -12 L 40 25 Z" fill="#050505" />
          <path d="M 0 0 L 25 42 L -12 44 Z" fill="#050505" />
          <path d="M 0 0 L -42 22 L -44 -16 Z" fill="#050505" />
          <path d="M 0 0 L -18 44 L 18 40 Z" fill="#050505" />

          {/* Center Hole */}
          <polygon points="-10,-16 10,-16 20,0 10,16 -10,16 -20,0" fill="#050505" />
        </g>

        {/* AZZUDOP Stencil Typography */}
        <g transform="translate(130, 80)">
          {/* AZZU Text */}
          <text 
            x="0" 
            y="0" 
            fontFamily="'Inter', 'Arial Black', sans-serif" 
            fontWeight="900" 
            fontSize="52" 
            fill="#FFFFFF" 
            letterSpacing="2"
          >
            AZZU
          </text>

          {/* Camera Icon between AZZU and DOP */}
          <g transform="translate(160, -36) scale(0.75)">
            <path d="M 4 12 L 10 4 L 22 4 L 28 12 L 36 12 C 38 12 40 14 40 16 L 40 34 C 40 36 38 38 36 38 L 4 38 C 2 38 0 36 0 34 L 0 16 C 0 14 2 12 4 12 Z" fill="none" stroke="#FFFFFF" strokeWidth="3" />
            <circle cx="20" cy="24" r="8" fill="none" stroke="url(#goldGradientLogo)" strokeWidth="3" />
            <circle cx="20" cy="24" r="3" fill="url(#goldGradientLogo)" />
          </g>

          {/* DOP Text */}
          <text 
            x="205" 
            y="0" 
            fontFamily="'Inter', 'Arial Black', sans-serif" 
            fontWeight="900" 
            fontSize="52" 
            fill="#FFFFFF" 
            letterSpacing="2"
          >
            DOP
          </text>

          {showSubtitle && (
            <text 
              x="2" 
              y="26" 
              fontFamily="'Inter', sans-serif" 
              fontWeight="600" 
              fontSize="14" 
              fill="url(#goldGradientLogo)" 
              letterSpacing="2.5"
            >
              PHOTOGRAPHY &amp; CINEMATOGRAPHY
            </text>
          )}
        </g>
      </svg>
    </div>
  );
};
