import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'view' | 'play' | 'drag' | 'open' | 'contact'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorData = target.closest('[data-cursor]')?.getAttribute('data-cursor');
      if (cursorData) {
        setCursorType(cursorData as any);
      } else if (target.closest('a, button, input, select, textarea')) {
        setCursorType('view');
      } else {
        setCursorType('default');
      }
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  const isExpanded = cursorType !== 'default';

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Primary Dot */}
      <div
        className="fixed w-3 h-3 bg-[#FFB800] rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out shadow-[0_0_10px_#FFB800]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isExpanded ? 0.3 : 1
        }}
      />

      {/* Outer Ring & Label */}
      <div
        className={`fixed flex items-center justify-center rounded-full border border-[#FFB800]/60 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out backdrop-blur-[2px] ${
          isExpanded 
            ? 'w-20 h-20 bg-[#FFB800]/15 scale-100 border-[#FFB800]' 
            : 'w-8 h-8 scale-75 border-[#FFB800]/40'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        {isExpanded && (
          <span className="text-[10px] font-black tracking-widest text-[#FFB800] uppercase animate-pulse">
            {cursorType}
          </span>
        )}
      </div>
    </div>
  );
};
