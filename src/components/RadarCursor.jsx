import React, { useEffect, useRef } from 'react';

export default function RadarCursor() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ 
    targetX: typeof window !== 'undefined' ? window.innerWidth / 2 : 500, 
    targetY: typeof window !== 'undefined' ? window.innerHeight / 2 : 500 
  });
  const posRef = useRef({ 
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 500, 
    y: typeof window !== 'undefined' ? window.innerHeight / 2 : 500 
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const handlePointerMove = (e) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    const GRID_SPACING = 24;
    const RING_RADIUS = 30;
    const FIELD_RADIUS = 84;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const lerp = 0.2;
      posRef.current.x += (mouseRef.current.targetX - posRef.current.x) * lerp;
      posRef.current.y += (mouseRef.current.targetY - posRef.current.y) * lerp;

      const cx = posRef.current.x;
      const cy = posRef.current.y;

      if (cx > -100 && cy > -100) {
        const minCol = Math.floor((cx - FIELD_RADIUS - GRID_SPACING) / GRID_SPACING);
        const maxCol = Math.ceil((cx + FIELD_RADIUS + GRID_SPACING) / GRID_SPACING);
        const minRow = Math.floor((cy - FIELD_RADIUS - GRID_SPACING) / GRID_SPACING);
        const maxRow = Math.ceil((cy + FIELD_RADIUS + GRID_SPACING) / GRID_SPACING);

        for (let c = minCol; c <= maxCol; c++) {
          for (let r = minRow; r <= maxRow; r++) {
            const dotX = c * GRID_SPACING;
            const dotY = r * GRID_SPACING;

            const dist = Math.hypot(dotX - cx, dotY - cy);

            if (dist <= FIELD_RADIUS) {
              const falloff = 1 - dist / FIELD_RADIUS;
              const isInsideRing = dist <= RING_RADIUS;
              const alpha = isInsideRing 
                ? 0.8 + falloff * 0.2 
                : Math.pow(falloff, 1.4) * 0.65;

              ctx.fillStyle = `rgba(192, 132, 252, ${alpha})`;
              ctx.fillRect(dotX - 1, dotY - 1, 2, 2);
            }
          }
        }

        // Razor-Thin Circular Ring
        ctx.beginPath();
        ctx.arc(cx, cy, RING_RADIUS, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(216, 180, 254, 0.55)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Center Target Pip
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(cx - 0.75, cy - 0.75, 1.5, 1.5);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('pointermove', handlePointerMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999] h-full w-full block"
      style={{ pointerEvents: 'none' }}
    />
  );
}