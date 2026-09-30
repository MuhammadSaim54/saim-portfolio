import React, { useEffect, useRef } from 'react';

export default function RadarCursor() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ targetX: -500, targetY: -500 });
  const posRef = useRef({ x: -500, y: -500 });

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

    const handleMouseMove = (e) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Curtis Exact Field Dimensions
    const GRID_SPACING = 24;  // Dot matrix spacing
    const RING_RADIUS = 30;   // Precise central cursor ring radius
    const FIELD_RADIUS = 84;  // Surrounding glow field radius (~3x ring radius)

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Inertial spring lag
      const lerp = 0.18;
      posRef.current.x += (mouseRef.current.targetX - posRef.current.x) * lerp;
      posRef.current.y += (mouseRef.current.targetY - posRef.current.y) * lerp;

      const cx = posRef.current.x;
      const cy = posRef.current.y;

      if (cx > -100 && cy > -100) {
        // Compute bounding box around the active surrounding zone
        const minCol = Math.floor((cx - FIELD_RADIUS - GRID_SPACING) / GRID_SPACING);
        const maxCol = Math.ceil((cx + FIELD_RADIUS + GRID_SPACING) / GRID_SPACING);
        const minRow = Math.floor((cy - FIELD_RADIUS - GRID_SPACING) / GRID_SPACING);
        const maxRow = Math.ceil((cy + FIELD_RADIUS + GRID_SPACING) / GRID_SPACING);

        for (let c = minCol; c <= maxCol; c++) {
          for (let r = minRow; r <= maxRow; r++) {
            const dotX = c * GRID_SPACING;
            const dotY = r * GRID_SPACING;

            const dist = Math.hypot(dotX - cx, dotY - cy);

            // Sirf surrounding field radius ke andar dots render honge
            if (dist <= FIELD_RADIUS) {
              // Smooth radial falloff curve
              const falloff = 1 - dist / FIELD_RADIUS;
              
              // Ring ke andar higher opacity, surrounding me soft radial fade
              const isInsideRing = dist <= RING_RADIUS;
              const alpha = isInsideRing 
                ? 0.75 + falloff * 0.25 
                : Math.pow(falloff, 1.4) * 0.65;

              // Curtis Electric Violet / Purple Phosphor
              ctx.fillStyle = `rgba(192, 132, 252, ${alpha})`;
              
              // 2px square phosphor sub-pixel
              ctx.fillRect(dotX - 1, dotY - 1, 2, 2);
            }
          }
        }

        // Razor-Thin Circular Ring
        ctx.beginPath();
        ctx.arc(cx, cy, RING_RADIUS, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(216, 180, 254, 0.45)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Center Target Pip
        ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
        ctx.fillRect(cx - 0.75, cy - 0.75, 1.5, 1.5);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[99] h-full w-full"
    />
  );
}