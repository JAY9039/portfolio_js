import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { mission } from "../portfolio";

const Mission = () => (
  <section className="section section-lg">
    <Container>
      <div className="text-center mb-5">
        <h2 className="display-3 text-info">{mission.title}</h2>
        <p className="lead">{mission.description}</p>
      </div>
      <Row className="row-grid">
        {mission.principles.map((principle) => (
          <Col lg="4" key={principle.title} className="mb-4">
            <Card className="h-100 shadow border-0">
              <CardBody>
                <h3 className="h4 text-info">{principle.title}</h3>
                <p className="description mb-0">{principle.description}</p>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Mission;
