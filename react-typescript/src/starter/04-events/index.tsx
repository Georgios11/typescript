import { useState } from "react";
function Component() {
	const [text, setText] = useState("");
	const [email, setEmail] = useState("");
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
		setEmail(e.target.value);
	};
	return (
		<section>
			<h2>events example</h2>
			<form className="form">
				<input
					type="text"
					className=" form-input mb-1"
					value={text}
					onChange={(e) => {
						setText(e.target.value);
					}}
				/>
				<input
					type="email"
					className=" form-input mb-1"
					value={email}
					onChange={handleChange}
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
