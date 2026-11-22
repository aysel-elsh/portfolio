"use client";

import { useEffect, useRef } from "react";
import { attachClock } from "@/lib/clock";

export default function Clock() {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => (ref.current ? attachClock(ref.current) : undefined), []);
  return <span ref={ref} data-clock="" className="tnum" suppressHydrationWarning />;
}
