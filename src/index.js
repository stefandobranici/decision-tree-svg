import { render } from "@testing-library/react";
import React from "react";
import Tree from "./components/Tree";
import { data } from "./data";
import "./index.css";

render(
	<Tree data={data} height={1500} width={1900} />,
	document.getElementById("root")
);
