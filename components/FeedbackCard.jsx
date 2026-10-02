import React from "react";
import { Card, CardBody } from "reactstrap";

const FeedbackCard = ({ data }) => {
	const initials = data.name
		.split(/\s+/)
		.map((part) => part[0])
		.join("")
		.slice(0, 2)
		.toUpperCase();

	return (
		<Card className="testimonial-card shadow border-0">
			<CardBody className="testimonial-card-body">
				<div className="testimonial-quote-mark" aria-hidden="true">“</div>
				<blockquote className="testimonial-quote">
					<p className="description">{data.feedback}</p>
				</blockquote>
				<footer className="testimonial-author">
					<div className="testimonial-author-heading">
						<div className="testimonial-avatar" aria-hidden="true">
							{initials}
						</div>
						<div className="testimonial-author-name">
							<strong>{data.name}</strong>
							{data.date && <time>{data.date}</time>}
						</div>
					</div>
					<dl className="testimonial-author-details">
						<div>
							<dt>Role</dt>
							<dd>{data.role}</dd>
						</div>
						<div>
							<dt>Company</dt>
							<dd>{data.company}</dd>
						</div>
						{data.context && (
							<div>
								<dt>Context</dt>
								<dd>{data.context}</dd>
							</div>
						)}
						<div>
							<dt>Relationship</dt>
							<dd>{data.relationship}</dd>
						</div>
					</dl>
				</footer>
			</CardBody>
		</Card>
	);
};

export default FeedbackCard;
