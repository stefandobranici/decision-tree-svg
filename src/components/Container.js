import PropTypes from "prop-types";
import React from "react";
import Link from "./Link";
import Node from "./Node";

export class Container extends React.Component {
	render() {
		return (
			<svg height={this.props.height} width={this.props.width}>
				{this.props.children}
				<g>
					{this.props.links.map((link) => (
						<Link key={link.target.data[this.props.keyProp]} link={link} />
					))}
					{this.props.nodes.map((node) => (
						<Node
							key={node.data[this.props.keyProp]}
							keyProp={this.props.keyProp}
							labelProp={this.props.labelProp}
							x={node.x}
							y={node.y}
							{...node.data}
						/>
					))}
				</g>
			</svg>
		);
	}
}

Container.propTypes = {
	children: PropTypes.node,
	height: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired,
	links: PropTypes.array.isRequired,
	nodes: PropTypes.array.isRequired,
	keyProp: PropTypes.string.isRequired,
	labelProp: PropTypes.string.isRequired,
};

export default Container;
