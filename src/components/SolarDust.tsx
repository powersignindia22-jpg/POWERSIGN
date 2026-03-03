import { useEffect, useRef } from "react";

const SolarDust = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      rotation: number;
      rotationSpeed: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.2 + 1.2;
        this.speedY = -(Math.random() * 0.4 + 0.1);
        this.speedX = (Math.random() - 0.5) * 0.15;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.rotation += this.rotationSpeed;
        
        if (this.y < -20) {
          this.y = canvas.height + 20;
          this.x = Math.random() * canvas.width;
        }
        if (this.x < -20) this.x = canvas.width + 20;
        if (this.x > canvas.width + 20) this.x = -20;
      }

      draw() {
        if (!ctx) return;
        
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        ctx.beginPath();
        ctx.arc(0, 0, this.size * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 200, 50, ${this.opacity})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(0, 0, this.size * 1.4, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 200, 50, ${this.opacity})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();

        const rayCount = 12;
        const rayStart = this.size * 1.8;
        const rayEnd = this.size * 2.5;
        
        ctx.beginPath();
        ctx.lineWidth = 0.8;
        ctx.lineCap = 'butt';
        for (let i = 0; i < rayCount; i++) {
          const angle = (i / rayCount) * Math.PI * 2;
          ctx.moveTo(Math.cos(angle) * rayStart, Math.sin(angle) * rayStart);
          ctx.lineTo(Math.cos(angle) * rayEnd, Math.sin(angle) * rayEnd);
        }
        ctx.strokeStyle = `rgba(255, 200, 50, ${this.opacity})`;
        ctx.stroke();
        
        ctx.restore();
      }
    }

    const init = () => {
      particles = [];
      const isMobile = window.innerWidth < 768;
      const count = isMobile ? 84 : 420;
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", () => {
      resizeCanvas();
      init();
    });
    
    resizeCanvas();
    init();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[1] pointer-events-none opacity-70"
    />
  );
};

export default SolarDust;