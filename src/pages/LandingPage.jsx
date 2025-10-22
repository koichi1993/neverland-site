import React, { useEffect, useRef } from "react";
import "./LandingPage.css";

import OfferStack from "../sections/OfferStack";
import "../sections/offer.css";
import SocialProofCarousel from "../sections/SocialProofCarousel";
import EventPostersExpandable from "../sections/EventPostersExpandable";
import GalleryLocalExpandable from "../sections/GalleryLocalExpandable";
import AboutNeverland from "../sections/AboutNeverland";
import SiteFooter from "../sections/SiteFooter";

export default function LandingPage() {
  const v1 = useRef(null);
  const v2 = useRef(null);
  const v3 = useRef(null);

  useEffect(() => {
    const vids = [v1.current, v2.current, v3.current].filter(Boolean);
    let loaded = 0;

    const onLoaded = () => {
      loaded += 1;
      if (loaded === vids.length) {
        // Reset and try to start them together
        vids.forEach(v => { try { v.currentTime = 0; } catch {} });
        Promise.allSettled(vids.map(v => v.play?.())).catch(() => {});
      }
    };

    vids.forEach(v => v?.addEventListener("loadeddata", onLoaded));
    return () => vids.forEach(v => v?.removeEventListener("loadeddata", onLoaded));
  }, []);

  return (
    <>
      <section className="hero">
        {/* ROW OF THREE VIDEOS */}
        <div className="hero__videoRow">
          <video
            ref={v1}
            className="hero__videoPanel"
            autoPlay
            loop
            muted
            playsInline
            poster="/videos/club-poster.jpg"
            preload="auto"
          >
            <source src="/videos/FullSizeRender.mp4" type="video/mp4" />
          </video>

          <video
            ref={v2}
            className="hero__videoPanel"
            autoPlay
            loop
            muted
            playsInline
            poster="/videos/club-poster.jpg"
            preload="auto"
          >
            <source src="/videos/FullSizeRender.mp4" type="video/mp4" />
          </video>

          <video
            ref={v3}
            className="hero__videoPanel"
            autoPlay
            loop
            muted
            playsInline
            poster="/videos/club-poster.jpg"
            preload="auto"
          >
            <source src="/videos/FullSizeRender.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="hero__overlay" />

        {/* (Optional) If you want to keep this jump button, leave it in */}
        <button onClick={() => document.getElementById("offer").scrollIntoView({behavior:"smooth"})}>
          See Tonight’s Offers
        </button>
        <header className="siteHeader">
          <a href="/" aria-label="Neverland Home">
            <img src="/logo/neverland.png" alt="Neverland" className="siteHeader__logo" />
          </a>
        </header>


        <div className="hero__content">
          <h1 className="hero__title">Tokyo’s Wildest Night Awaits</h1>
          
        </div>
      </section>

      <OfferStack />
      <SocialProofCarousel />
      <EventPostersExpandable />
      <GalleryLocalExpandable />
      <AboutNeverland />
      <SiteFooter />
    </>
  );
}
