/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

type Person = {
	name: string;
};
function Component() {
	const [text, setText] = useState("");
	const [email, setEmail] = useState("");
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// console.log(e.target.value);
		setEmail(e.target.value);
	};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// const formData = new FormData(e.target as HTMLFormElement)
		const formData = new FormData(e.currentTarget);
		const data = Object.fromEntries(formData);
		console.log(data);
		// e.currentTarget.reset();
		const text = formData.get("text") as string;
		const person: Person = { name: text };
		setEmail("");
		setText("");
	};
	return (
		<section>
			<h2>events example</h2>
			<form onSubmit={handleSubmit} className="form">
				<input
					type="text"
					className=" form-input mb-1"
					value={text}
					onChange={(e) => {
						setText(e.target.value);
					}}
					name="text"
				/>
				<input
					type="email"
					className=" form-input mb-1"
					value={email}
					onChange={handleChange}
					name="email"
				/>
				<button type="submit" className="btn btn-block">
					Submit
				</button>
			</form>
			<h2>{text}</h2>
		</section>
	);
}
export default Component;
