// import Component from "./starter/01-return";
// import Component from "./starter/02-props";
// import Component from "./starter/03-state";
// import Component from "./starter/04-events";
// import Component from "../../typescript-course-main/02-typescript-react-essentials/src/final/05-challenge";
import Challenge from "./Challenge";
function App() {
	return (
		<main>
			<Challenge type="basic" name="Tsitsikaki" />
			<Challenge
				type="advanced"
				name="Tsitsikaki"
				email="tsitsiki@email.com"
			/>
			{
				//challenge example
				/* <Component type="basic" name="geo" />
			<Component type="advanced" name="rania" email="tyrania@email.com" /> */
			}
			{
				//events
				/* <Component /> */
			}
			{
				//state
				/* <Component /> */
			}
			{
				//return
				/* <Component /> */
			}
			{
				//props
				/* <Component name="geo" id={23} />
			<Component name="geo" id={23}>
				<h2>Hello</h2>
			</Component> */
			}
		</main>
	);
}

export default App;
