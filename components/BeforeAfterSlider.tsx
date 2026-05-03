"use client";

import { useRef, useState, useEffect, useCallback } from "react";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Before",
  afterAlt = "After",
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const isDragging = useRef(false);

  const updateSlider = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const onMouseDown = () => { isDragging.current = true; };
  const onMouseUp = () => { isDragging.current = false; };
  const onMouseMove = (e: MouseEvent) => {
    if (isDragging.current) updateSlider(e.clientX);
  };
  const onTouchMove = (e: TouchEvent) => {
    updateSlider(e.touches[0].clientX);
  };

  useEffect(() => {
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
    };
  });

  return (
    <div
      ref={containerRef}
      className="before-after-container w-full"
      style={{ height: "420px", position: "relative", borderRadius: "16px", overflow: "hidden", cursor: "ew-resize", userSelect: "none" }}
      onMouseDown={onMouseDown}
      onTouchMove={(e) => onTouchMove(e.nativeEvent)}
    >
      {/* After image (full width, behind) */}
      <img
        src={afterSrc}
        alt={afterAlt}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        draggable={false}
      />

      {/* Before image (clipped to left side) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: `${sliderPos}%`,
          height: "100%",
          overflow: "hidden",
        }}
      >
        <img
          src={beforeSrc}
          alt={beforeAlt}
          style={{ position: "absolute", top: 0, left: 0, width: `${10000 / sliderPos}%`, maxWidth: "none", height: "100%", objectFit: "cover" }}
          draggable={false}
        />
      </div>

      {/* Divider line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: `${sliderPos}%`,
          transform: "translateX(-50%)",
          width: "3px",
          height: "100%",
          background: "white",
          boxShadow: "0 0 12px rgba(0,0,0,0.3)",
          zIndex: 10,
        }}
      />

      {/* Handle circle */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: `${sliderPos}%`,
          transform: "translate(-50%, -50%)",
          width: "46px",
          height: "46px",
          background: "white",
          borderRadius: "50%",
          boxShadow: "0 2px 16px rgba(0,0,0,0.28)",
          zIndex: 11,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2px",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M6 4L2 9L6 14" stroke="#1a6fb8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 4L16 9L12 14" stroke="#1a6fb8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Labels */}
      <span
        className="slider-label"
        style={{ left: "12px" }}
      >
        Before
      </span>
      <span
        className="slider-label"
        style={{ right: "12px" }}
      >
        After
      </span>
    </div>
  );
}
