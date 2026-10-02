import React, { useRef, useState } from "react";
import { Card, CardBody, Container } from "reactstrap";

const certifications = [
  {
    name: "AWS Certified DevOps Engineer – Professional",
    provider: "Amazon Web Services",
    badge: "AWS · Professional",
    focus:
      "Operating distributed systems and delivering secure, reliable CI/CD on AWS.",
    url: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
  },
  {
    name: "Certified Kubernetes Security Specialist (CKS)",
    provider: "Cloud Native Computing Foundation",
    badge: "Kubernetes · Security",
    focus:
      "Securing Kubernetes clusters and cloud-native workloads across their lifecycle.",
    url: "https://training.linuxfoundation.org/certification/certified-kubernetes-security-specialist/",
  },
  {
    name: "Microsoft Certified: DevOps Engineer Expert",
    provider: "Microsoft",
    badge: "Azure · Expert",
    focus:
      "Source control, secure build and release pipelines, and observability.",
    url: "https://learn.microsoft.com/en-us/credentials/certifications/devops-engineer/",
  },
  {
    name: "Professional Cloud DevOps Engineer",
    provider: "Google Cloud",
    badge: "Google Cloud · Professional",
    focus:
      "Site reliability, delivery pipelines, and production operations on Google Cloud.",
    url: "https://cloud.google.com/learn/certification/cloud-devops-engineer",
  },
  {
    name: "AWS Certified Solutions Architect – Professional",
    provider: "Amazon Web Services",
    badge: "AWS · Architecture",
    focus:
      "Designing complex, resilient, secure, and cost-optimized cloud solutions.",
    url: "https://aws.amazon.com/certification/certified-solutions-architect-professional/",
  },
  {
    name: "AWS Certified Security – Specialty",
    provider: "Amazon Web Services",
    badge: "AWS · Specialty",
    focus:
      "Cloud security architecture, identity, data protection, and incident response.",
    url: "https://aws.amazon.com/certification/certified-security-specialty/",
  },
  {
    name: "Microsoft Certified: Azure Solutions Architect Expert",
    provider: "Microsoft",
    badge: "Azure · Expert",
    focus:
      "Designing secure cloud and hybrid solutions aligned to Azure architecture guidance.",
    url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-solutions-architect/",
  },
  {
    name: "Professional Cloud Developer",
    provider: "Google Cloud",
    badge: "Google Cloud · Professional",
    focus: "Building and operating secure, scalable cloud-native applications.",
    url: "https://cloud.google.com/learn/certification/cloud-developer",
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    provider: "Cloud Native Computing Foundation",
    badge: "Kubernetes · Administrator",
    focus: "Hands-on Kubernetes cluster administration and troubleshooting.",
    url: "https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/",
  },
  {
    name: "Certified Kubernetes Application Developer (CKAD)",
    provider: "Cloud Native Computing Foundation",
    badge: "Kubernetes · Developer",
    focus:
      "Designing, configuring, and deploying cloud-native applications on Kubernetes.",
    url: "https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/",
  },
];

const CertificationRoadmap = () => {
  const trackRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateProgress = () => {
    const track = trackRef.current;
    if (!track) return;
    const scrollableWidth = track.scrollWidth - track.clientWidth;
    setScrollProgress(
      scrollableWidth > 0 ? (track.scrollLeft / scrollableWidth) * 100 : 0,
    );
  };

  const scrollTrack = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: direction * track.clientWidth * 0.85,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  return (
    <section className="section section-lg certification-section">
      <Container>
        <div className="text-center mb-5">
          <span className="impact-eyebrow">
            PRACTICE PORTFOLIO • SAMPLE DATA
          </span>
          <h2 className="display-3 text-white mt-2">Certification showcase</h2>
          <p className="lead text-white">
            Example credentials from cloud, DevOps, architecture, and
            Kubernetes. These are illustrative portfolio entries only—not earned
            or verified certifications.
          </p>
        </div>
        <div className="certification-carousel">
          <div className="certification-carousel-controls">
            <span className="certification-carousel-hint">
              Swipe or scroll to explore
            </span>
            <div className="certification-carousel-buttons">
              <button
                className="certification-carousel-button"
                type="button"
                aria-label="Scroll certifications left"
                onClick={() => scrollTrack(-1)}
                disabled={scrollProgress <= 0}
              >
                <i className="fa fa-arrow-left" aria-hidden="true" />
              </button>
              <button
                className="certification-carousel-button"
                type="button"
                aria-label="Scroll certifications right"
                onClick={() => scrollTrack(1)}
                disabled={scrollProgress >= 99}
              >
                <i className="fa fa-arrow-right" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div
            className="certification-track"
            ref={trackRef}
            onScroll={updateProgress}
            role="region"
            aria-label="Certification examples carousel"
            tabIndex={0}
          >
            {certifications.map((certification) => (
              <article className="certification-slide" key={certification.name}>
                <Card className="certification-card">
                  <CardBody className="d-flex flex-column">
                    <a
                      className="certification-badge"
                      href={certification.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Explore ${certification.name} on the official ${certification.provider} website`}
                    >
                      <i className="fa fa-certificate" aria-hidden="true" />
                      <span>{certification.badge}</span>
                      <i
                        className="fa fa-external-link certification-badge-link"
                        aria-hidden="true"
                      />
                    </a>
                    <h3 className="h4 text-white mt-3">{certification.name}</h3>
                    <p className="certification-provider mb-2">
                      {certification.provider}
                    </p>
                    <p className="text-white">{certification.focus}</p>
                    {/* <a
                      className="certification-link mt-auto"
                      href={certification.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Certificate
                      <span aria-hidden="true"> ↗</span>
                    </a> */}
                  </CardBody>
                </Card>
              </article>
            ))}
          </div>
          <div
            className="certification-progress"
            role="progressbar"
            aria-label="Carousel scroll position"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(scrollProgress)}
          >
            <span style={{ width: `${scrollProgress}%` }} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CertificationRoadmap;
