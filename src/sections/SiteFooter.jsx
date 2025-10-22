import "./footer.css";

export default function SiteFooter() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__inner">
        {/* Brand / Logo */}
        <div className="footer__brand">
          <a href="/" aria-label="Neverland Home" className="footer__logoWrap">
            <img src="/logo/neverland.png" alt="Neverland" className="footer__logo" />
          </a>
          <p className="footer__tagline">Shibuya • Open late</p>

        {/* Social */}
          <div className="footer__social">
            <a
              href="https://instagram.com/never_land_tokyo/?hl=en"
              target="_blank"
              rel="noreferrer"
              aria-label="Neverland on Instagram"
              className="footer__ig"
            >
              <img src="/icons/instagram.png" alt="" className="footer__igIcon" />
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="footer__map">
          <div className="footer__mapFrame">
            <iframe
              title="Neverland location"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Neverland%20Shibuya&output=embed"
            />
          </div>
          <a
            className="footer__directions"
            href="https://www.google.com/maps/search/?api=1&query=Neverland%20Shibuya"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps
          </a>
        </div>

        {/* Info */}
        <div className="footer__info">
          <h4>Visit</h4>
          <p>
            Neverland<br />
            2-21-7 Dogenzaka, Shibuya-ku, Tokyo, Japan
          </p>
          <p>Hours: Mon–Sun 20:00–05:00</p>
          
        </div>
      </div>

      <div className="footer__bottom">
        <small>
          © {new Date().getFullYear()} Neverland — Please drink responsibly.
        </small>
      </div>
    </footer>
  );
}
