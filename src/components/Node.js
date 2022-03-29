import PropTypes from "prop-types";
import React from "react";

export class Node extends React.Component {
	getTransform() {
		return `translate(${this.props.y}, ${this.props.x})`;
	}

	render() {
		const nodeProps = {
			height: 100,
			width: 200,
			x: 0,
			y: -50,
			rx: 15,
		};

		const labelProps = {
			x: 0,
			y: 0,
		};

		return (
			<g className="node" transform={this.getTransform()}>
				<rect {...nodeProps} />
				<text {...labelProps}>{this.props[this.props.labelProp]}</text>
			</g>
		);
	}
}

Node.propTypes = {
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired,
	keyProp: PropTypes.string.isRequired,
	labelProp: PropTypes.string.isRequired,
};

export default Node;
