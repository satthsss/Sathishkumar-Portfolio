import React, { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseEnter = () => {
      setIsHidden(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  // Soft inertia trailing effect
  useEffect(() => {
    let animationFrameId;
    const updateTrail = () => {
      setTrail((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        // Adjust speed factor for trailing lag
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      animationFrameId = requestAnimationFrame(updateTrail);
    };
    updateTrail();

    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  // Check if cursor is hovering over interactive elements
  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' ||
        target.closest('a') || 
        target.closest('button');
      
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  if (isHidden) return null;

  return (
    <>
      {/* Laser point center */}
      <div
        className="fixed pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-75 mix-blend-screen hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovering ? '12px' : '6px',
          height: isHovering ? '12px' : '6px',
          backgroundColor: isHovering ? '#FFD700' : '#00CFFF',
          boxShadow: isHovering 
            ? '0 0 10px #FFD700, 0 0 20px #FFD700' 
            : '0 0 8px #00CFFF, 0 0 16px #00CFFF',
        }}
      />

      {/* Trailing diffuse ring aura */}
      <div
        className="fixed pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-300 ease-out border hidden md:block"
        style={{
          left: `${trail.x}px`,
          top: `${trail.y}px`,
          width: '36px',
          height: '36px',
          borderColor: isHovering ? '#FFD700' : '#00CFFF',
          backgroundColor: isHovering ? 'rgba(255, 215, 0, 0.05)' : 'rgba(0, 207, 255, 0.02)',
          boxShadow: isHovering 
            ? '0 0 15px rgba(255, 215, 0, 0.2)' 
            : '0 0 10px rgba(0, 207, 255, 0.1)',
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.4 : 1})`,
        }}
      />
    </>
  );
}
