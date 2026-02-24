import { useEffect, useState } from "react";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`hero-section ${visible ? "visible" : ""}`}>
      <div className="hero-photo-wrapper">
        <div className="hero-photo-ring" />
        <img
          src="/arahbd.jpeg"
          alt="Birthday Person"
          className="hero-photo"
        />
      </div>

      <div className="hero-text">
        <p className="hero-label">✦ A Special Day ✦</p>
        <h1 className="hero-name">Clara Aulia Septiani</h1>
        <p className="hero-subtitle">Happy Birthday</p>
        <div className="hero-divider" />
        <p className="hero-quote">
          "May this day bring you as much joy as you bring to everyone around you."
        </p>
      </div>
    </section>
  );
}
