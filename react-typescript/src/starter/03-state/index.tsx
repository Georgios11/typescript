import { useState } from "react";
type Link = {
	id: number;
	url: string;
	text: string;
};
const navLinks: Link[] = [
	{
		id: 1,
		url: "some url",
		text: "some text",
	},
	{
		id: 2,
		url: "some url",
		text: "some text",
	},
	{
		id: 3,
		url: "some url",
		text: "some text",
	},
];
function Component() {
	const [text, setText] = useState("PAOK");
	const [list, setList] = useState<string[]>([]);
	const [links, setLinks] = useState<Link[]>(navLinks);
	return (
		<div>
			<h2 className="mb-1">React & Typescript</h2>
			<button
				className="btn btn-center"
				onClick={() => {
					// setText("PAOKARA");
					// setText(1);
					// setList(["hello"]);
					setLinks([...links, { id: 4, url: "hello", text: "text" }]);
				}}
			>
				Click me
			</button>
			<h2>{text}</h2>
			<h2>{list.length > 0 && list[0]}</h2>
		</div>
	);
}
export default Component;
