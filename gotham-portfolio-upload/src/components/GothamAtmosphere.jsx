import React, { useEffect, useRef } from 'react';

export default function GothamAtmosphere({ isRainActive = true, showBats = true }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Offscreen canvas for pre-rendering static skyline & moon
    const offscreenCanvas = document.createElement('canvas');
    let octx = offscreenCanvas.getContext('2d');
    offscreenCanvas.width = width;
    offscreenCanvas.height = height;

    const preRenderStaticBackground = () => {
      offscreenCanvas.width = width;
      offscreenCanvas.height = height;

      // Draw background gradient
      const bgGrad = octx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, '#05070A');
      bgGrad.addColorStop(0.5, '#0B0F17');
      bgGrad.addColorStop(1, '#08080C');
      octx.fillStyle = bgGrad;
      octx.fillRect(0, 0, width, height);

      // Render Moon
      const moonX = width * 0.82;
      const moonY = height * 0.18;
      const moonRadius = Math.min(width, height) * 0.08 + 20;

      // Outer Moon Glow
      const moonGlow = octx.createRadialGradient(moonX, moonY, moonRadius * 0.5, moonX, moonY, moonRadius * 3);
      moonGlow.addColorStop(0, 'rgba(255, 215, 0, 0.2)');
      moonGlow.addColorStop(0.5, 'rgba(0, 207, 255, 0.05)');
      moonGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      octx.fillStyle = moonGlow;
      octx.beginPath();
      octx.arc(moonX, moonY, moonRadius * 3, 0, Math.PI * 2);
      octx.fill();

      // Moon Body
      const moonBody = octx.createRadialGradient(moonX - 10, moonY - 10, 5, moonX, moonY, moonRadius);
      moonBody.addColorStop(0, '#FFFDF0');
      moonBody.addColorStop(0.7, '#E6D595');
      moonBody.addColorStop(1, '#8C7E4B');
      octx.fillStyle = moonBody;
      octx.beginPath();
      octx.arc(moonX, moonY, moonRadius, 0, Math.PI * 2);
      octx.fill();

      // Moon Craters
      octx.fillStyle = 'rgba(100, 90, 60, 0.15)';
      octx.beginPath();
      octx.arc(moonX - moonRadius * 0.3, moonY - moonRadius * 0.2, moonRadius * 0.25, 0, Math.PI * 2);
      octx.arc(moonX + moonRadius * 0.2, moonY + moonRadius * 0.3, moonRadius * 0.2, 0, Math.PI * 2);
      octx.fill();

      // Gotham City Skyline Silhouette
      octx.fillStyle = '#06070A';
      const buildingWidths = [70, 55, 100, 80, 120, 60, 90, 140, 85, 105, 70, 130, 95];
      let currentX = 0;

      buildingWidths.forEach((w, idx) => {
        const bHeight = 150 + Math.sin(idx * 1.7) * 80 + (idx % 3 === 0 ? 120 : 40);
        const bY = height - bHeight;

        // Building shadow outline
        octx.fillRect(currentX, bY, w, bHeight);

        // Tower Spires
        if (idx % 2 === 0) {
          octx.fillRect(currentX + w / 2 - 3, bY - 25, 6, 25);
          // Red beacon light on spire
          octx.fillStyle = 'rgba(255, 50, 50, 0.8)';
          octx.beginPath();
          octx.arc(currentX + w / 2, bY - 26, 2, 0, Math.PI * 2);
          octx.fill();
          octx.fillStyle = '#06070A';
        }

        // Windows glowing (reduced loops for performance)
        for (let wy = bY + 20; wy < height - 40; wy += 25) {
          for (let wx = currentX + 10; wx < currentX + w - 12; wx += 18) {
            if ((wx + wy) % 7 === 0) {
              octx.fillStyle = (wx + wy) % 3 === 0 ? 'rgba(255, 215, 0, 0.25)' : 'rgba(0, 207, 255, 0.18)';
              octx.fillRect(wx, wy, 3, 6);
              octx.fillStyle = '#06070A';
            }
          }
        }

        currentX += w - 2;
      });
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      preRenderStaticBackground();
    };
    window.addEventListener('resize', handleResize);

    // Initial pre-render
    preRenderStaticBackground();

    // Twinkling stars data
    const stars = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * (height * 0.5),
      size: Math.random() * 1.2 + 0.4,
      alpha: Math.random(),
      speed: Math.random() * 0.015 + 0.005,
    }));

    // Flying Bats (reduced count for speed)
    const bats = Array.from({ length: 7 }, () => ({
      x: Math.random() * width,
      y: Math.random() * (height * 0.35),
      speedX: (Math.random() - 0.5) * 1.5 + 1.2,
      speedY: (Math.random() - 0.5) * 0.6,
      size: Math.random() * 8 + 10,
      wingCycle: Math.random() * Math.PI * 2,
    }));

    // Raindrops (reduced count for speed)
    const rainDrops = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      length: Math.random() * 15 + 8,
      speed: Math.random() * 8 + 10,
      alpha: Math.random() * 0.2 + 0.08,
    }));

    // Fog particles (reduced count to 6 to eliminate lag)
    const fogParticles = Array.from({ length: 6 }, () => ({
      x: Math.random() * width,
      y: height - Math.random() * 150,
      radius: Math.random() * 100 + 80,
      speed: Math.random() * 0.2 + 0.05,
      alpha: Math.random() * 0.06 + 0.01,
    }));

    let beamAngle = 0;
    let lightningFlash = 0;

    const render = () => {
      // 1. Draw static pre-rendered background
      ctx.drawImage(offscreenCanvas, 0, 0);

      // Random Lightning Flash (extremely lightweight)
      if (Math.random() < 0.001) {
        lightningFlash = 0.3;
      }
      if (lightningFlash > 0) {
        ctx.fillStyle = `rgba(0, 207, 255, ${lightningFlash})`;
        ctx.fillRect(0, 0, width, height);
        lightningFlash -= 0.05;
      }

      // 2. Stars twinkling
      ctx.fillStyle = '#FFFFFF';
      stars.forEach((star) => {
        star.alpha += star.speed;
        const opacity = (Math.sin(star.alpha) + 1) / 2;
        ctx.globalAlpha = opacity * 0.6;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1.0;

      // 3. Searchlight Beams
      beamAngle += 0.003;
      const b1Angle = Math.sin(beamAngle) * 0.2 - 0.15;
      const b2Angle = Math.cos(beamAngle * 0.7) * 0.25 + 0.08;

      // Beam 1
      ctx.save();
      ctx.translate(width * 0.25, height);
      ctx.rotate(b1Angle);
      const beamGrad1 = ctx.createLinearGradient(0, 0, 0, -height * 0.8);
      beamGrad1.addColorStop(0, 'rgba(255, 215, 0, 0.15)');
      beamGrad1.addColorStop(1, 'rgba(255, 215, 0, 0)');
      ctx.fillStyle = beamGrad1;
      ctx.beginPath();
      ctx.moveTo(-10, 0);
      ctx.lineTo(-50, -height * 0.8);
      ctx.lineTo(50, -height * 0.8);
      ctx.lineTo(10, 0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // Beam 2
      ctx.save();
      ctx.translate(width * 0.65, height);
      ctx.rotate(b2Angle);
      const beamGrad2 = ctx.createLinearGradient(0, 0, 0, -height * 0.75);
      beamGrad2.addColorStop(0, 'rgba(0, 207, 255, 0.12)');
      beamGrad2.addColorStop(1, 'rgba(0, 207, 255, 0)');
      ctx.fillStyle = beamGrad2;
      ctx.beginPath();
      ctx.moveTo(-8, 0);
      ctx.lineTo(-40, -height * 0.75);
      ctx.lineTo(40, -height * 0.75);
      ctx.lineTo(8, 0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // 4. Flying Bats
      if (showBats) {
        ctx.fillStyle = '#0A0E14';
        bats.forEach((bat) => {
          bat.x += bat.speedX;
          bat.y += bat.speedY;
          bat.wingCycle += 0.12;

          if (bat.x > width + 30) bat.x = -30;
          if (bat.x < -30) bat.x = width + 30;
          if (bat.y < 20 || bat.y > height * 0.5) bat.speedY *= -1;

          const wingOffset = Math.sin(bat.wingCycle) * (bat.size * 0.35);

          ctx.save();
          ctx.translate(bat.x, bat.y);
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.quadraticCurveTo(-bat.size * 0.5, -bat.size * 0.25 + wingOffset, -bat.size, wingOffset);
          ctx.quadraticCurveTo(-bat.size * 0.5, bat.size * 0.15, 0, bat.size * 0.25);
          ctx.quadraticCurveTo(bat.size * 0.5, bat.size * 0.15, bat.size, wingOffset);
          ctx.quadraticCurveTo(bat.size * 0.5, -bat.size * 0.25 + wingOffset, 0, 0);
          ctx.fill();
          ctx.restore();
        });
      }

      // 5. Fog Layers
      fogParticles.forEach((fog) => {
        fog.x += fog.speed;
        if (fog.x > width + fog.radius) fog.x = -fog.radius;

        const fogGrad = ctx.createRadialGradient(fog.x, fog.y, 0, fog.x, fog.y, fog.radius);
        fogGrad.addColorStop(0, `rgba(0, 207, 255, ${fog.alpha})`);
        fogGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = fogGrad;
        ctx.beginPath();
        ctx.arc(fog.x, fog.y, fog.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 6. Rain (only executes loop when active)
      if (isRainActive) {
        ctx.strokeStyle = 'rgba(0, 207, 255, 0.16)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        rainDrops.forEach((drop) => {
          drop.y += drop.speed;
          drop.x -= drop.speed * 0.12;

          if (drop.y > height) {
            drop.y = -20;
            drop.x = Math.random() * width;
          }

          ctx.moveTo(drop.x, drop.y);
          ctx.lineTo(drop.x - drop.length * 0.12, drop.y + drop.length);
        });
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isRainActive, showBats]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000"
    />
  );
}
