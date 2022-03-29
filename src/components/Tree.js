import PropTypes from "prop-types";
import React from "react";
import getTreeData from "../utils/d3";
import Container from "./Container";

export class Tree extends React.Component {
	static defaultProps = {
		getChildren: (n) => n.children,
		keyProp: "name",
		labelProp: "name",
		margins: {
			bottom: 0,
			left: 20,
			right: 300,
			top: 20,
		},
	};

	render() {
		return (
			<Container
				getChildren={this.props.getChildren}
				height={this.props.height}
				width={this.props.width}
				keyProp={this.props.keyProp}
				labelProp={this.props.labelProp}
				{...getTreeData(this.props)}
			>
				{this.props.children}
			</Container>
		);
	}
}

Tree.propTypes = {
	data: PropTypes.object.isRequired,
	children: PropTypes.node,
	getChildren: PropTypes.func.isRequired,
	height: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired,
	margins: PropTypes.shape({
		bottom: PropTypes.number.isRequired,
		left: PropTypes.number.isRequired,
		right: PropTypes.number.isRequired,
		top: PropTypes.number.isRequired,
	}).isRequired,
	keyProp: PropTypes.string.isRequired,
	labelProp: PropTypes.string.isRequired,
};

export default Tree;
