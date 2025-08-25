"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import "./particles.css";

export default function ParticlesBackground() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function (key, value) {
      const event = new Event("localstorageChange");
      event.key = key;
      event.newValue = value;
      window.dispatchEvent(event);
      originalSetItem.apply(this, arguments);
    };
    const handleThemeChange = (e) => {
      if (e.key === "theme" && e.newValue) {
        setTheme(e.newValue);
      }
    };
    window.addEventListener("storage", handleThemeChange);
    window.addEventListener("localstorageChange", handleThemeChange);
    const mq = window.matchMedia("(pointer: coarse), (max-width: 768px)");
    const handler = () => setIsMobile(mq.matches);
    handler();
    mq.addEventListener("change", handler);
    return () => {
      window.removeEventListener("storage", handleThemeChange);
      window.removeEventListener("localstorageChange", handleThemeChange);
      mq.removeEventListener("change", handler);
    };
  }, []);

  const init = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const options = useMemo(() => {
    const color = theme === "light" ? "#111827" : "#ffffff";
    return {
      fullScreen: { enable: true, zIndex: -1 },
      background: { color: "transparent" },
      detectRetina: true,
      particles: {
        number: { value: isMobile ? 25 : 75 },
        color: { value: color },
        links: {
          enable: true,
          color: color,
          distance: isMobile ? 100 : 170,
          opacity: 0.2,
        },
        move: { enable: true, speed: 1.2 },
        size: { value: { min: 1, max: 4 } },
        opacity: { value: 0.3 },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          onClick: { enable: true, mode: "push" },
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 },
          push: { quantity: 4 },
        },
      },
    };
  }, [theme, isMobile]);

  if (!mounted) return null;

  return (
    <Particles
      className="particles"
      id="tsparticles"
      init={init}
      options={options}
    />
  );
}
