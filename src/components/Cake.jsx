import { useState, useEffect, useRef } from "react";

export default function Cake() {
  const [blown, setBlown] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={`cake-section ${visible ? "visible" : ""}`}>
      <p className="cake-label">✦ Make a Wish ✦</p>

      <div className="cake-wrapper">
        {/* Candles */}
        <div className="candles">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="candle">
              <div className="candle-body" />
              {!blown && (
                <div className="flame">
                  <div className="flame-inner" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Cake layers */}
        <div className="cake-body">
          <div className="cake-top" />
          <div className="cake-middle">
            <span className="cake-decoration">♡ ★ ♡</span>
          </div>
          <div className="cake-bottom" />
          <div className="cake-plate" />
        </div>
      </div>

      {!blown ? (
        <button className="blow-btn" onClick={() => setBlown(true)}>
          Click to Blow the Candles 🌬️
        </button>
      ) : (
        <p className="wish-text">✨ May all your wishes come true ✨</p>
      )}
    </section>
  );
}
