import React from "react";

import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	Col,
} from "reactstrap";

const ExperienceCard = ({ data }) => {
	return (
		<Col lg="6" className="d-flex mb-4">
			<Card
				className="experience-card shadow-lg--hover shadow border-0 text-center rounded"
			>
				<CardBody className="experience-card-body">
					<div className="experience-logo">
						{data.companylogo && (
							<img
								src={data.companylogo}
								className={
									data.companyLogoWide
										? "experience-logo-wide"
										: "experience-logo-round"
								}
								alt={`${data.company} logo`}
							/>
						)}
					</div>
					<CardTitle tag="h4" className="experience-company mb-2">
						{data.company}
					</CardTitle>
					<CardSubtitle tag="h5" className="experience-role mb-2">
						{data.role}
					</CardSubtitle>
					<CardSubtitle className="experience-date">
						{data.date}
					</CardSubtitle>
					<CardText
						tag="div"
						className="experience-description description my-3 text-left"
					>
						{data.desc}
						{data.descBullets?.length > 0 && (
							<ul>
							{data.descBullets
									.map((desc) => (
										<li key={desc}>{desc}</li>
									))}
							</ul>
						)}
					</CardText>
				</CardBody>
			</Card>
		</Col>
	);
};

export default ExperienceCard;
