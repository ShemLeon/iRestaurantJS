import "./HeroVideo.css";

function HeroVideo() {
  return (
    <section className="hero-video-section">
      <div className="hero-video-container">
        <video className="hero-video" autoPlay muted playsInline>
          <source
            src="https://www.ipratico.com/wp-content/uploads/2025/09/ipratico_eatup_selforder.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
}

export default HeroVideo;