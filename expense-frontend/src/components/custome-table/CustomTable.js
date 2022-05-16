import React from "react";
import { ListGroup } from "react-bootstrap";

export const CustomTable = () => {
	return (
		<div className="mt-5 custom-list fs-3">
			<ListGroup>
				<ListGroup.Item>
					<span className="title">TV shopping</span>
					<span className="cost">$5555</span>
				</ListGroup.Item>
				<ListGroup.Item>
					<span className="title">TV shopping</span>
					<span className="cost">$5555</span>
				</ListGroup.Item>
				<ListGroup.Item>
					<span className="title">TV shopping</span>
					<span className="cost">$5555</span>
				</ListGroup.Item>
				<ListGroup.Item className="fw-bold">
					<span className="title">Total</span>
					<span className="cost">$15555</span>
				</ListGroup.Item>
			</ListGroup>
		</div>
	);
};
