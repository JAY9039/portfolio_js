import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const strengths = [
  {
    title: "Offline-first experiences",
    description:
      "Build progressive web apps that keep critical workflows available when connectivity is unreliable.",
    icon: "ni ni-mobile-button",
  },
  {
    title: "Performance at scale",
    description:
      "Improve demanding interfaces with efficient rendering, code splitting, lazy loading, and thoughtful data handling.",
    icon: "ni ni-chart-bar-32",
  },
  {
    title: "Secure, accessible UI",
    description:
      "Deliver inclusive interfaces with secure authentication, role-based access, and accessibility built in.",
    icon: "ni ni-lock-circle-open",
  },
  {
    title: "End-to-end delivery",
    description:
      "Partner across product, backend, and QA to take features through testing, CI/CD, and production support.",
    icon: "ni ni-settings",
  },
];

const EngineeringStrengths = () => (
  <section className="section section-lg bg-secondary">
    <Container>
      <div className="text-center mb-5">
        <h2 className="display-3 text-info">Engineering Strengths</h2>
        <p className="lead">
          Practical strengths I bring to complex product teams.
        </p>
      </div>
      <Row className="row-grid">
        {strengths.map((strength) => (
          <Col md="6" lg="3" key={strength.title} className="mb-4">
            <Card className="h-100 shadow border-0">
              <CardBody>
                <div className="icon icon-lg icon-shape bg-gradient-info text-white rounded-circle shadow mb-4">
                  <i className={strength.icon} aria-hidden="true" />
                </div>
                <h3 className="h4 text-info">{strength.title}</h3>
                <p className="description mb-0">{strength.description}</p>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default EngineeringStrengths;
