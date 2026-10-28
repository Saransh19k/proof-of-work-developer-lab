import React, { useEffect, useRef, useState } from 'react';
import { developerProfile } from '../data/portfolioData';
import { ArrowDown, CheckCircle2, ShieldCheck, Terminal, ExternalLink, FileText, ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenRecruiterView: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRecruiterView, onOpenResume }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeSimulationNode, setActiveSimulationNode] = useState<string>("Node #3: Quorum Confirmed");

  // Interactive Engineering Lattice Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Node particles representing consensus cluster nodes
    const nodeCount = 22;
    const nodes: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      isLeader: boolean;
      term: number;
      pulse: number;
    }[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: i === 0 ? 6.5 : Math.random() * 2.5 + 2.5,
        isLeader: i === 0,
        term: 42 + Math.floor(Math.random() * 3),
        pulse: Math.random() * Math.PI,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const onMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle grid lines
      ctx.strokeStyle = 'rgba(30, 41, 59, 0.4)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and connect nodes
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        n1.x += n1.vx;
        n1.y += n1.vy;
        n1.pulse += 0.03;

        if (n1.x < 10) n1.vx = Math.abs(n1.vx);
        if (n1.x > width - 10) n1.vx = -Math.abs(n1.vx);
        if (n1.y < 10) n1.vy = Math.abs(n1.vy);
        if (n1.y > height - 10) n1.vy = -Math.abs(n1.vy);

        // Interaction with mouse
        const dxMouse = mouseX - n1.x;
        const dyMouse = mouseY - n1.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < 100) {
          n1.x -= (dxMouse / distMouse) * 1.5;
          n1.y -= (dyMouse / distMouse) * 1.5;
        }

        // Draw connections between proximate nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.45;
            ctx.strokeStyle = n1.isLeader || n2.isLeader
              ? `rgba(163, 230, 53, ${alpha})`
              : `rgba(34, 211, 238, ${alpha * 0.7})`;
            ctx.lineWidth = n1.isLeader || n2.isLeader ? 1.5 : 1;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }

        // Draw node
        ctx.beginPath();
        const pulseSize = Math.sin(n1.pulse) * 1.5;
        ctx.arc(n1.x, n1.y, Math.max(2, n1.radius + (n1.isLeader ? pulseSize : 0)), 0, Math.PI * 2);

        if (n1.isLeader) {
          ctx.fillStyle = '#a3e635'; // Neon lime leader node
          ctx.shadowColor = '#a3e635';
          ctx.shadowBlur = 12;
        } else {
          ctx.fillStyle = '#22d3ee'; // Subtle cyan follower node
          ctx.shadowColor = '#22d3ee';
          ctx.shadowBlur = 4;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden border-b border-slate-800/60">
      {/* Background ambient gradient */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 right-1/4 w-[600px] h-[600px] bg-lime-500/5 rounded-full blur-3xl"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-40 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Availability Indicator & Name Label */}
            <div className="flex items-center gap-2.5 text-xs text-slate-400 mb-4">
              <span className="font-mono text-lime-400 font-semibold tracking-wide uppercase">
                {developerProfile.name}
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300 font-medium">{developerProfile.roleTitle}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">{developerProfile.location}</span>
            </div>

            {/* Compelling Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-[1.12] mb-6 text-balance">
              Explore the work. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-lime-300 to-cyan-400">
                Understand the engineering.
              </span> <br />
              Verify the proof.
            </h1>

            {/* Developer Introduction */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              {developerProfile.headline}
            </p>

            {/* Active Interviewing Status Callout */}
            <div className="p-3.5 mb-8 rounded-lg bg-slate-900/80 border border-slate-800/90 flex items-start sm:items-center gap-3">
              <div className="p-1.5 rounded-md bg-lime-400/10 text-lime-400 shrink-0 mt-0.5 sm:mt-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="text-xs sm:text-sm text-slate-300">
                <span className="font-semibold text-white">Status: </span>
                {developerProfile.availability.status} ({developerProfile.availability.timeline})
              </div>
            </div>

            {/* Interactive Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-black bg-lime-400 hover:bg-lime-300 rounded-lg shadow-sm transition-all whitespace-nowrap"
              >
                Explore Projects
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#proof"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-slate-200 hover:text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700/80 rounded-lg transition-all whitespace-nowrap"
              >
                <ShieldCheck className="w-4 h-4 text-lime-400" />
                Audit Proof of Work
              </a>

              <button
                onClick={onOpenRecruiterView}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-cyan-300 hover:text-cyan-200 bg-cyan-950/30 hover:bg-cyan-950/50 border border-cyan-800/60 rounded-lg transition-all whitespace-nowrap"
              >
                <FileText className="w-4 h-4" />
                Recruiter Fast-Track
              </button>
            </div>
          </div>

          {/* Right Column: Distinctive Interactive Engineering Lattice */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative w-full h-[380px] sm:h-[420px] rounded-2xl bg-[#0d121c] border border-slate-800/90 overflow-hidden shadow-2xl flex flex-col">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-xs font-mono text-slate-400 shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <span className="text-slate-300 font-medium ml-1">security_lab.mesh</span>
                </div>
                <div className="flex items-center gap-2 text-lime-400">
                  <Terminal className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-mono">SYSTEM_INTEGRITY_ACTIVE</span>
                </div>
              </div>

              {/* Interactive Canvas */}
              <div className="relative flex-1 w-full h-full cursor-crosshair">
                <canvas ref={canvasRef} className="w-full h-full block" />

                {/* Overlaid Telemetry Invariant Badge */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 bg-slate-950/85 backdrop-blur-md border border-slate-800 rounded-lg text-xs font-mono flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-lime-400" />
                    <span className="text-slate-300">IoT & Cyber Security Track</span>
                  </div>
                  <span className="text-cyan-400 tabular-nums">3rd Sem · 7.48 GPA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Quantitative Proof Bar Below Split */}
        <div className="mt-14 pt-8 border-t border-slate-800/70 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-lime-400 tabular-nums">
              B.Tech CSE
            </div>
            <div className="text-xs sm:text-sm text-slate-400">
              IoT & Cyber Security Specialization
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
              3rd Semester
            </div>
            <div className="text-xs sm:text-sm text-slate-400">
              Baderia Global Institute of Eng. & Mgmt.
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400 tabular-nums">
              7.48 GPA
            </div>
            <div className="text-xs sm:text-sm text-slate-400">
              Cumulative Academic Standing
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
              Zero Fabricated
            </div>
            <div className="text-xs sm:text-sm text-slate-400">
              All claims backed by verified evidence
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
