"use client";

import { useEffect, useRef } from "react";

export function MotionVisual() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const onMove = (event: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      node.style.setProperty("--mx", `${x.toFixed(3)}`);
      node.style.setProperty("--my", `${y.toFixed(3)}`);
    };
    const reset = () => { node.style.setProperty("--mx", "0"); node.style.setProperty("--my", "0"); };
    node.addEventListener("mousemove", onMove);
    node.addEventListener("mouseleave", reset);
    return () => { node.removeEventListener("mousemove", onMove); node.removeEventListener("mouseleave", reset); };
  }, []);

  return (
    <div ref={ref} className="motion-visual" aria-hidden="true">
      <div className="visual-noise" /><div className="visual-glow glow-a" /><div className="visual-glow glow-b" />
      <div className="tube-cluster">{Array.from({ length: 18 }, (_, index) => <div key={index} className={`tube tube-${index % 6}`} />)}</div>
      <div className="visual-caption"><span>MOVAARA</span><span>JOURNEY / 001</span></div>
    </div>
  );
}
