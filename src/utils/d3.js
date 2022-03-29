import { hierarchy, tree } from "d3-hierarchy";

export default function getTreeData(props) {
	const contentHeight = props.width - props.margins.left - props.margins.right;
	const contentWidth = props.width - props.margins.left - props.margins.right;

	let data = hierarchy(props.data, props.getChildren);
	let root = tree().size([contentHeight, contentWidth])(data);
	let nodes = root.descendants();
	let links = root.links();

	nodes.forEach((node) => {
		node.y += props.margins.top;
	});

	return {
		nodes,
		links,
	};
}
