import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 1200, suffix: "+", label: "Acres Managed" },
  { value: 200, suffix: "+", label: "Landowners" },
  { value: 85, suffix: "+", label: "Partner Farmers" },
  { value: 42, suffix: "L+", prefix: "₹", label: "Paid Out" },
];

const AnimatedNumber = ({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
};

const StatsBar = () => {
  return (
    <section className="bg-stats-bg py-16 md:py-20">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
        {stats.map((s) => (
          <div key={s.label} className="space-y-2">
            <AnimatedNumber target={s.value} prefix={s.prefix} suffix={s.suffix} />
            <p className="text-sm md:text-base text-primary-foreground/70 font-medium uppercase tracking-wide">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
