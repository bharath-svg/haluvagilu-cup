"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SiteLoader() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => {
      setExiting(true);
    }, 1100);

    const removeTimer = window.setTimeout(() => {
      setVisible(false);
    }, 1500);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`hvl-loader-screen ${
        exiting ? "hvl-loader-hide" : ""
      }`}
      role="status"
      aria-label="Loading Haluvagilu Cup"
    >
      <div className="hvl-loader-circle">
        <Image
          src="/images/hero/BOSS.webp"
          alt="Haluvagilu Cup"
          width={110}
          height={110}
          priority
          className="hvl-loader-image"
        />
      </div>

      <h2 className="hvl-loader-title">
        HALUVAGILU <span>CUP</span>
      </h2>

      <p className="hvl-loader-subtitle">
        LOADING THE LEGACY...
      </p>
    </div>
  );
}