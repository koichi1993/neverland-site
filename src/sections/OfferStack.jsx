import "./offer.css";

export default function OfferStack() {
  return (
    <section id="offer" className="offer offer--posters">
      <h2 className="offer__title">Every Night at Neverland</h2>
      <p className="offer__subtitle">Two simple reasons Neverland stays packed.</p>

      <div className="offer__grid offer__grid--posters">
        <figure className="offer__poster">
          <img
            className="offer__img"
            src="/offers/women-free.jpg"
            alt="Women: Free Drinks All Night"
            loading="lazy"
          />
        </figure>

        <figure className="offer__poster">
          <img
            className="offer__img"
            src="/offers/men-happy-hour.png"
            alt="Men: Free Drinks 8–12"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}
