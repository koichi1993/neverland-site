import { useEffect, useRef, useState } from "react";
import "./social-carousel.css";

  const ITEMS = [
    { src: "/social/review1.png", alt: "Google review 5 stars", label: "Google ★★★★★" },
    { src: "/social/review2.png", alt: "Google review 5 stars", label: "Google ★★★★★" },
    { src: "/social/review3.png", alt: "Google review 5 stars", label: "Google ★★★★★" },
    { src: "/social/review4.png", alt: "Google review 5 stars", label: "Google ★★★★★" },
    { src: "/social/review5.png", alt: "Google review 5 stars", label: "Google ★★★★★" },
    { src: "/social/review6.png", alt: "Google review 5 stars", label: "Google ★★★★★" },
    { src: "/social/review7.png", alt: "Google review 5 stars", label: "Google ★★★★★" },
  ];

  export default function SocialProofCarousel() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const viewportRef = useRef(null);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);

  // Auto-play
  useEffect(() => {
    start();
    return stop;
  }, [index]);

  const start = () => {
    stop();
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % ITEMS.length);
    }, 4000);
  };
  const stop = () => timerRef.current && clearInterval(timerRef.current);

  const goTo = (i) => setIndex((i + ITEMS.length) % ITEMS.length);
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  // Touch swipe
  const onTouchStart = (e) => {
    stop();
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const onTouchMove = (e) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    const dx = touchDeltaX.current;
    if (Math.abs(dx) > 50) {
      dx > 0 ? prev() : next();
    } else {
      start();
    }
  };

  return (
    <section className="socialc" id="social" onMouseEnter={stop} onMouseLeave={start}>
      <h2 className="socialc__title">Loved by Thousands Every Month</h2>
      <p className="socialc__subtitle">Real nights. Real people. Real reviews.</p>

      <div
        className="socialc__viewport"
        ref={viewportRef}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="socialc__track"
          style={{ transform: `translateX(-${index * 100}%)` }}
          aria-live="polite"
        >
          {ITEMS.map((it, i) => (
            <figure className="socialc__slide" key={i}>
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="socialc__img"
                width="900"
                height="600"
              />
              <figcaption className="socialc__badge">{it.label}</figcaption>
            </figure>
          ))}
        </div>

        <button className="socialc__nav socialc__nav--prev" onClick={prev} aria-label="Previous">
          ‹
        </button>
        <button className="socialc__nav socialc__nav--next" onClick={next} aria-label="Next">
          ›
        </button>
      </div>

      <div className="socialc__dots" role="tablist">
        {ITEMS.map((_, i) => (
          <button
            key={i}
            className={`socialc__dot ${i === index ? "is-active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-selected={i === index}
            role="tab"
          />
        ))}
      </div>
    </section>
  );
}
