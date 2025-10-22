import { useState, useRef } from "react";
import "./gallery-local-expandable.css";

const ITEMS = [
  { src: "/gallery/01.png", alt: "Dance floor" },
  { src: "/gallery/02.png", alt: "DJ set" },
  { src: "/gallery/03.png", alt: "VIP area" },
  { src: "/gallery/04.png", alt: "Crowd" },
  { src: "/gallery/05.png", alt: "Cocktails" },
  { src: "/gallery/06.png", alt: "Light show" },
  { src: "/gallery/07.png", alt: "Booth" },
  { src: "/gallery/08.png", alt: "Stage" },
  { src: "/gallery/09.png", alt: "Dance floor" },
  { src: "/gallery/10.png", alt: "DJ set" },
  { src: "/gallery/11.png", alt: "VIP area" },
  { src: "/gallery/12.png", alt: "Crowd" },
  { src: "/gallery/13.png", alt: "Cocktails" },
  { src: "/gallery/14.png", alt: "Light show" },
  { src: "/gallery/15.png", alt: "Booth" },
  { src: "/gallery/16.png", alt: "Stage" },
  
];

export default function GalleryLocalExpandable() {
  const [open, setOpen] = useState(false);
  const moreRef = useRef(null);

  const firstFour = ITEMS.slice(0, 4);
  const rest = ITEMS.slice(4);

  const toggle = () => {
    const willOpen = !open;
    setOpen(willOpen);
    if (!willOpen && moreRef.current) {
      // scroll back to gallery top when collapsing
      moreRef.current.closest("section")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="galX" id="gallery">
      <h2 className="galX__title">Gallery</h2>

      {/* Always-visible first row (exactly 4 on desktop) */}
      <div className="galX__grid">
        {firstFour.map((it, i) => (
          <div className="galX__card" key={`first-${i}`}>
            <img className="galX__img" src={it.src} alt={it.alt || "Gallery image"} loading="lazy" />
          </div>
        ))}
      </div>

      {/* Show/Hide the remaining images */}
      {rest.length > 0 && (
        <>
          <div
            id="gallery-more"
            className={`galX__more ${open ? "is-open" : ""}`}
            ref={moreRef}
            aria-hidden={!open}
          >
            <div className="galX__grid">
              {rest.map((it, i) => (
                <div className="galX__card" key={`more-${i}`}>
                  <img className="galX__img" src={it.src} alt={it.alt || "Gallery image"} loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          <div className="galX__toggleWrap">
            <button
              className="galX__toggle"
              onClick={toggle}
              aria-expanded={open}
              aria-controls="gallery-more"
              title={open ? "Show less" : "Show more"}
            >
              {open ? "Show less" : "Show more"}
              <span className={`galX__arrow ${open ? "up" : "down"}`} aria-hidden />
            </button>
          </div>
        </>
      )}
    </section>
  );
}
