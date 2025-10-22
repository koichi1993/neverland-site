import "./about-neverland.css";

export default function AboutNeverland() {
  return (
    <section className="aboutX" id="about">
      <div className="aboutX__inner">
        {/* Left: Text */}
        <div className="aboutX__text">
          <h2 className="aboutX__title">Where the Night Actually Happens</h2>
          <p className="aboutX__lead">
            Neverland was built to deliver a pure, high energy experience the kind you feel the second you step in. 
            We focus on the crowd, the flow, and the vibe: busy every day, music you can move to, and deals that keep 
            the night going. If you want a genuine Shibuya night without the velvet rope, this is where it actually happens.
          </p>

          <ul className="aboutX__proof">
            <li><strong>Busy every day</strong>-arrive early</li>
            <li><strong>4.8★ vibe</strong> among regulars who come to dance</li>
            <li><strong>Minutes from the station</strong> (easy late-night access)</li>
            <li><strong>Real prices</strong> that make “one more” an easy yes</li>
          </ul>

        </div>

        {/* Right: Image */}
        <div className="aboutX__media">
          <img
            src="/about/neverland-crowd.png"
            alt="Packed dance floor at Neverland in Tokyo"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
