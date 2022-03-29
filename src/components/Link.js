import PropTypes from "prop-types";
import React from "react";

export const diagonal = (x1, y1, x2, y2) =>
	`M${y1},${x1}C${(y1 + y2) / 2},${x1} ${(y1 + y2) / 2},${x2} ${y2},${x2}`;

export class Link extends React.Component {
	render() {
		const { source, target } = this.props.link;
		const d = diagonal(source.x, source.y, target.x, target.y);

		return (
			<path
				className="link"
				d={d}
				{...target.data.pathProps}
				{...source.data[this.props.keyProp]}
				{...target.data[this.props.keyProp]}
			/>
		);
	}
}

Link.propTypes = {
	link: PropTypes.object.isRequired,
	keyProp: PropTypes.string.isRequired,
	pathProps: PropTypes.object.isRequired,
};

export default Link;
