import React from "react";

import { Card, CardBody, Col, Button } from "reactstrap";

const ProjectsCard = ({ data }) => {
	return (
		<Col lg="6" className="d-flex mb-4">
			<Card className="project-card shadow-lg--hover shadow">
				<CardBody className="project-card-body">
					<div>
						<h3 className="h4 text-info">{data.name}</h3>
						<p className="description mt-3 mb-4">{data.desc}</p>
					</div>
					<div className="project-card-actions">
						{data.github && (
							<Button
								className="btn-icon"
								color="github"
								href={data.github}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`View ${data.name} on GitHub`}
							>
								<span className="btn-inner--icon">
									<i className="fa fa-github" aria-hidden="true" />
								</span>
								<span className="ml-2">View code</span>
							</Button>
						)}
						{data.link && (
							<Button
								className="btn-icon"
								color="success"
								href={data.link}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`View ${data.name} demo`}
							>
								<span className="btn-inner--icon">
									<i className="fa fa-arrow-right" aria-hidden="true" />
								</span>
								<span className="ml-2">Live demo</span>
							</Button>
						)}
					</div>
				</CardBody>
			</Card>
		</Col>
	);
};

export default ProjectsCard;
