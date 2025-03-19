/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
function Component() {
	const url: string = "https://www.course-api.com/react-tours-project";

	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState<string | null>(null);
	const [tours, setTours] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error(`Failed to fetch data...`);
				}
				const rawData = await response.json();
				setTours(rawData);
				console.log(rawData);
			} catch (error) {
				const message =
					error instanceof Error
						? error.message
						: "Something went wrong";
				setIsError(message);
				console.log(message);
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, []);
	if (isLoading) {
		return <h2>Loading...</h2>;
	}
	if (isError) {
		return <h2>Error {isError}</h2>;
	}

	return (
		<div>
			<h2>React & Typescript</h2>
			{tours.map((tour) => {
				return <h2>{tour.name}</h2>;
			})}
		</div>
	);
}
export default Component;
