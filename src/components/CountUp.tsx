import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const NUMBER = /^(\D*)(\d+(?:\.\d+)?)(.*)$/;
const DURATION = 1400;
const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

/**
 * Renders a stat like "500+", "14.8x" or "3.58/4.0" and counts its leading number up
 * from zero the first time it scrolls into view. The final value is always in the DOM
 * (for no-JS, screen readers, and reduced motion); the animation writes textContent via a ref
 * so it never re-renders React.
 */
export const CountUp = ({ value, className }: { value: string; className?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const match = value.match(NUMBER);
    if (!el || !match) return;
    const [, prefix, raw, suffix] = match;
    const target = parseFloat(raw);
    const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;
    // Small counts ("1st", "4x") read better static than flickering through 0..4.
    if (target < 10 && decimals === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const render = (n: number) => {
      el.textContent = `${prefix}${n.toFixed(decimals)}${suffix}`;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / DURATION, 1);
          render(target * easeOutExpo(t));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );

    render(0);
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      el.textContent = value;
    };
  }, [value]);

  return (
    <span className={cn("relative", className)}>
      <span ref={ref} aria-hidden className="tabular-nums">
        {value}
      </span>
      <span className="sr-only">{value}</span>
    </span>
  );
};
