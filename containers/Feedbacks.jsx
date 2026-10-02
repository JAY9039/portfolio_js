import { feedbacks } from "../portfolio";
import React, { useRef, useState } from "react";
import { Container } from "reactstrap";
import FeedbackCard from "../components/FeedbackCard";

const Feedbacks = () => {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index) => {
    const track = trackRef.current;
    if (!track) return;

    track.scrollTo({
      left: index * track.clientWidth,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    setActiveIndex(Math.round(track.scrollLeft / track.clientWidth));
  };

  return (
    feedbacks.length > 0 && (
      <section className="section section-lg testimonials-section">
        <Container>
          <div className="testimonials-heading">
            <div className="text-center">
              <span className="impact-eyebrow">RECOMMENDATIONS</span>
              <h2 className="display-3 text-info mt-2">
                Words from my mentors
              </h2>
              <p className="lead">
                Feedback shared by colleagues I’ve worked with.
              </p>
            </div>
            <div className="testimonials-controls">
              <button
                className="testimonial-control"
                type="button"
                aria-label="Previous recommendation"
                onClick={() => goTo(Math.max(0, activeIndex - 1))}
                disabled={activeIndex === 0}
              >
                <i className="fa fa-arrow-left" aria-hidden="true" />
              </button>
              <button
                className="testimonial-control"
                type="button"
                aria-label="Next recommendation"
                onClick={() =>
                  goTo(Math.min(feedbacks.length - 1, activeIndex + 1))
                }
                disabled={activeIndex === feedbacks.length - 1}
              >
                <i className="fa fa-arrow-right" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div
            className="testimonials-track"
            ref={trackRef}
            onScroll={handleScroll}
            role="region"
            aria-label="Mentor recommendations"
            tabIndex={0}
          >
            {feedbacks.map((data) => (
              <div className="testimonial-slide" key={data.name}>
                <FeedbackCard data={data} />
              </div>
            ))}
          </div>
          <div
            className="testimonial-pagination"
            aria-label="Choose recommendation"
          >
            {feedbacks.map((data, index) => (
              <button
                key={data.name}
                className={`testimonial-dot${index === activeIndex ? " is-active" : ""}`}
                type="button"
                aria-label={`Show recommendation ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
          <div className="testimonial-profile-action">
            <a
              className="testimonial-profile-link"
              href="https://www.linkedin.com/in/j-shharma/details/recommendations/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Jay Sharma's LinkedIn recommendations in a new tab"
            >
              <i className="fa fa-linkedin" aria-hidden="true" />
              <span>View recommendations on LinkedIn</span>
              <i className="fa fa-external-link" aria-hidden="true" />
            </a>
            <p className="testimonial-profile-hint">
              Opens LinkedIn in a new tab. Sign-in may be required.
            </p>
          </div>
        </Container>
      </section>
    )
  );
};

export default Feedbacks;
