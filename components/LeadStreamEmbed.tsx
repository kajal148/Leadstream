"use client";

import { useEffect, useRef } from "react";

export default function LeadStreamEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = "";

    const iframe = document.createElement("iframe");
    iframe.src = "https://www.app.getleadstream.com/KCYKais8/flows";
    iframe.style.width = "100%";
    iframe.style.height = "600px";
    iframe.style.border = "none";
    iframe.style.borderRadius = "8px";
    iframe.title = "LeadStream Quote Form";
    iframe.loading = "lazy";

    containerRef.current.appendChild(iframe);

    const handleMessage = (e: MessageEvent) => {
      if (!e.origin.match("www.app.getleadstream.com")) return;

      const data = e.data;

      if (data?.height && typeof data.height === "number") {
        iframe.style.height = `${data.height}px`;
      }

      if (
        data &&
        (data.type === "leadstream.quote_generated" ||
          data.event === "leadstream.quote_generated" ||
          data.eventType === "quote_generated" ||
          (data.type && data.type.includes("quote_generated")))
      ) {
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          event: "leadstream.quote_generated",
          leadstream_event: data.type || data.event || data.eventType,
          leadstream_data: data,
        });
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="w-full">
      <div ref={containerRef} className="w-full min-h-[600px]" />
    </div>
  );
}