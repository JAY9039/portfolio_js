import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const impact = [
  {
    value: "50%",
    title: "faster application loads",
    detail: "Delivered through code splitting and lazy loading.",
  },
  {
    value: "80+",
    title: "interdependent fields",
    detail: "Supported in a regulatory-compliance workflow.",
  },
  {
    value: "40%",
    title: "higher user engagement",
    detail: "Alongside 25% organic traffic growth in three months.",
  },
];

const Impact = () => (
  <section className="section section-lg impact-section">
    <Container>
      <div className="text-center mb-5">
        <span className="impact-eyebrow">OUTCOMES, NOT JUST OUTPUT</span>
        <h2 className="display-3 text-white mt-2">Impact at a glance</h2>
        <p className="lead text-white">
          Measurable results from products and teams I’ve helped build.
        </p>
      </div>
      <Row className="justify-content-center">
        {impact.map((item) => (
          <Col md="6" lg="4" key={item.title} className="mb-4">
            <Card className="impact-card h-100 border-0">
              <CardBody className="text-center">
                <div className="impact-value">{item.value}</div>
                <h3 className="h4 text-white">{item.title}</h3>
                <p className="text-white mb-0">{item.detail}</p>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Impact;
