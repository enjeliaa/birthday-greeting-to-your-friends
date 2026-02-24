import { useEffect, useState, useRef } from "react";

export default function BirthdayCard() {
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
    <section ref={ref} className={`card-section ${visible ? "visible" : ""}`}>
      <div className="card-envelope">
        <div className="card-inner">
          <span className="card-ornament">✦ ✦ ✦</span>
          <h2 className="card-title">A Message For You</h2>
          <div className="card-divider" />

          <p className="card-message">
            On your special day, I want you to know how much you truly mean to me.
            Thank you for being my partner in crime throughout our college years,
            from working on assignments together, being lab assistants side by side,
            three-way calls until late at night, to all the laughter-filled moments
            we’ll never forget.
          </p>
          <p className="card-message">
            As you step into this new age, I hope every dream you have comes true,
            one by one. May you always be blessed with good health, happiness,
            success, and continue to be the amazing person who brings positive
            energy wherever you go.
          </p>
          <p className="card-message">
            Cheers to our friendship, to all the beautiful memories we’ve shared,
            and of course, to many more exciting stories ahead. Happy Birthday! 🎂
          </p>

          <div className="card-divider" />

          <p className="card-signature">
            With all my love,
            <strong>enjelyaa</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
