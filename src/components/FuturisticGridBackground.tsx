import { useEffect, useRef, useCallback } from "react";

export const FuturisticGridBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const scrollRef = useRef(0);
  const animFrameRef = useRef<number>(0);

  // Palette matching novaramedia.store
  const GRID = "rgba(20, 38, 72, 1)";
  const GRID_DIM = "rgba(14, 26, 52, 1)";
  const NODE = "rgba(28, 48, 88, 0.8)";

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.max(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);
  }, []);

  const draw = useCallback((timestamp: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = window.innerWidth;
    const H = window.innerHeight;
    const t = timestamp * 0.001;
    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;
    const scrollY = scrollRef.current;

    ctx.clearRect(0, 0, W, H);

    // Subtle dark overlay so grid lines read against the video
    const centerGrad = ctx.createRadialGradient(W * 0.5, H * 0.38, 0, W * 0.5, H * 0.38, Math.max(W, H) * 0.7);
    centerGrad.addColorStop(0, "rgba(5, 8, 15, 0.35)");
    centerGrad.addColorStop(1, "rgba(5, 8, 15, 0.6)");
    ctx.fillStyle = centerGrad;
    ctx.fillRect(0, 0, W, H);

    // Primary grid — large cells
    const CELL = 80;
    const parallaxOffsetY = (scrollY * 0.08) % CELL;

    ctx.save();
    ctx.globalAlpha = 1;

    // Vertical lines
    for (let x = 0; x <= W + CELL; x += CELL) {
      const distToMouse = Math.abs(mx - x);
      const prox = Math.max(0, 1 - distToMouse / 320);
      const breathe = 0.5 + 0.5 * Math.sin(t * 0.4 + x * 0.008);

      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, H);

      if (prox > 0.01) {
        const r = Math.round(20 + prox * (201 - 20));
        const g = Math.round(38 + prox * (168 - 38));
        const b = Math.round(72 + prox * (76 - 72));
        const a = 0.12 + prox * 0.45 + breathe * 0.03;
        ctx.strokeStyle = `rgba(${r},${g},${b},${a})`;
        ctx.lineWidth = 0.5 + prox * 0.8;
      } else {
        const a = 0.08 + breathe * 0.04;
        ctx.strokeStyle = GRID.replace("1)", `${a})`);
        ctx.lineWidth = 0.5;
      }
      ctx.stroke();
    }

    // Horizontal lines
    for (let y = -parallaxOffsetY; y <= H + CELL; y += CELL) {
      const distToMouse = Math.abs(my - y);
      const prox = Math.max(0, 1 - distToMouse / 280);
      const breathe = 0.5 + 0.5 * Math.sin(t * 0.35 + y * 0.008);

      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(W, y);

      if (prox > 0.01) {
        const r = Math.round(20 + prox * (201 - 20));
        const g = Math.round(38 + prox * (168 - 38));
        const b = Math.round(72 + prox * (76 - 72));
        const a = 0.12 + prox * 0.45 + breathe * 0.03;
        ctx.strokeStyle = `rgba(${r},${g},${b},${a})`;
        ctx.lineWidth = 0.5 + prox * 0.8;
      } else {
        const a = 0.08 + breathe * 0.04;
        ctx.strokeStyle = GRID.replace("1)", `${a})`);
        ctx.lineWidth = 0.5;
      }
      ctx.stroke();
    }

    // Sub-grid — fine secondary lines
    const SUB = CELL / 4;
    ctx.globalAlpha = 0.3;
    for (let x = 0; x <= W + SUB; x += SUB) {
      if (x % CELL === 0) continue;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, H);
      ctx.strokeStyle = GRID_DIM.replace("1)", "0.04)");
      ctx.lineWidth = 0.3;
      ctx.stroke();
    }
    for (let y = -parallaxOffsetY; y <= H + SUB; y += SUB) {
      if (Math.round(y) % CELL < 1) continue;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(W, y);
      ctx.strokeStyle = GRID_DIM.replace("1)", "0.04)");
      ctx.lineWidth = 0.3;
      ctx.stroke();
    }
    ctx.globalAlpha = 1;

    // Intersection nodes
    for (let x = 0; x <= W; x += CELL) {
      for (let y = -parallaxOffsetY; y <= H + CELL; y += CELL) {
        const dist = Math.hypot(mx - x, my - y);
        const prox = Math.max(0, 1 - dist / 240);
        const breathe = 0.5 + 0.5 * Math.sin(t * 0.6 + x * 0.02 + y * 0.02);

        if (prox > 0.05) {
          const r2 = 1.5 + prox * 4;
          ctx.beginPath();
          ctx.arc(x, y, r2, 0, Math.PI * 2);
          const ng = ctx.createRadialGradient(x, y, 0, x, y, r2 * 3);
          ng.addColorStop(0, `rgba(201,168,76,${prox * 0.9})`);
          ng.addColorStop(1, "rgba(201,168,76,0)");
          ctx.fillStyle = ng;
          ctx.fill();
        } else {
          const a = 0.15 + breathe * 0.1;
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fillStyle = NODE.replace("0.8)", `${a})`);
          ctx.fill();
        }
      }
    }

    // Mouse gold bloom
    if (mx > 0 && mx < W) {
      const bloomR = 200 + 20 * Math.sin(t * 1.2);
      const bloom = ctx.createRadialGradient(mx, my, 0, mx, my, bloomR);
      bloom.addColorStop(0, "rgba(201,168,76,0.06)");
      bloom.addColorStop(0.5, "rgba(139,111,53,0.025)");
      bloom.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = bloom;
      ctx.beginPath();
      ctx.arc(mx, my, bloomR, 0, Math.PI * 2);
      ctx.fill();
    }

    // Vignette
    const vig = ctx.createRadialGradient(W / 2, H / 2, H * 0.25, W / 2, H / 2, H);
    vig.addColorStop(0, "rgba(0,0,0,0)");
    vig.addColorStop(1, "rgba(0,0,0,0.6)");
    ctx.fillStyle = vig;
    ctx.fillRect(0, 0, W, H);

    animFrameRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    initCanvas();

    const onResize = () => initCanvas();
    const onMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onScroll = () => {
      scrollRef.current = window.scrollY;
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouse);
    window.addEventListener("scroll", onScroll, { passive: true });

    animFrameRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("scroll", onScroll);
    };
  }, [initCanvas, draw]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ display: "block", zIndex: 1 }}
    />
  );
};

export default FuturisticGridBackground;