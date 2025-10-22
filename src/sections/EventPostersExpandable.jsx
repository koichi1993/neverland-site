import { useRef, useState } from "react";
import "./event-posters-expandable.css";

const POSTERS = [
  { src: "/events/01.png",  alt: "Friday Latin Night"},
  { src: "/events/02.png",    alt: "Saturday EDM"},
  { src: "/events/03.png", alt: "Sunday Hip-Hop"},
  // add more posters as needed...
];

export default function EventPostersExpandable() {
  const [open, setOpen] = useState(false);
  const moreRef = useRef(null);

  const firstTwo = POSTERS.slice(0, 2);
  const rest = POSTERS.slice(2);

  const toggle = () => {
    const willOpen = !open;
    setOpen(willOpen);
    // optional: when collapsing, scroll back to the section top
    if (!willOpen && moreRef.current) {
      moreRef.current.closest("section")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="epx" id="events">
      <h2 className="epx__title">Upcoming Events</h2>

      {/* Always-visible first row (exactly 2) */}
      <div className="epx__grid epx__grid--first">
        {firstTwo.map((p, i) => (
          <figure className="epx__card" key={`first-${i}`}>
            <img className="epx__img" src={p.src} alt={p.alt} loading="lazy" />
            
          </figure>
        ))}
      </div>

      {/* Show/Hide more (only if there are >2 posters) */}
      {rest.length > 0 && (
        <>
          <div
            className={`epx__more ${open ? "is-open" : ""}`}
            ref={moreRef}
            aria-hidden={!open}
          >
            <div className="epx__grid epx__grid--more">
              {rest.map((p, i) => (
                <figure className="epx__card" key={`more-${i}`}>
                  <img className="epx__img" src={p.src} alt={p.alt} loading="lazy" />
                </figure>
              ))}
            </div>
          </div>

          <div className="epx__toggleWrap">
            <button
              className="epx__toggle"
              onClick={toggle}
              aria-expanded={open}
              aria-controls="events-more"
              title={open ? "Show less" : "Show more"}
            >
              {open ? "Show less" : "Show more"}
              <span className={`epx__arrow ${open ? "up" : "down"}`} aria-hidden />
            </button>
          </div>
        </>
      )}
    </section>
  );
}
