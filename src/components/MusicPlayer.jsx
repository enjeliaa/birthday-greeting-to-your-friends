import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const tryAutoPlay = () => {
      audioRef.current
        ?.play()
        .then(() => setPlaying(true))
        .catch(() => {
          // Browser blocked autoplay — user will manually press button
        });
    };

    // Try autoplay on first user interaction
    const onInteract = () => {
      tryAutoPlay();
      document.removeEventListener("click", onInteract);
      document.removeEventListener("touchstart", onInteract);
      document.removeEventListener("keydown", onInteract);
    };

    document.addEventListener("click", onInteract);
    document.addEventListener("touchstart", onInteract);
    document.addEventListener("keydown", onInteract);

    return () => {
      document.removeEventListener("click", onInteract);
      document.removeEventListener("touchstart", onInteract);
      document.removeEventListener("keydown", onInteract);
    };
  }, []);

  const toggle = (e) => {
    e.stopPropagation();
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/happy-birthday-music.mp3"
        loop
        preload="auto"
      />

      <button
        className={`music-btn ${playing ? "playing" : ""}`}
        onClick={toggle}
        title={playing ? "Pause music" : "Play music"}
        aria-label={playing ? "Pause background music" : "Play background music"}
      >
        {playing ? "♫" : "♩"}
      </button>
    </>
  );
}
