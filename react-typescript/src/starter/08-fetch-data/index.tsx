/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import { Tour, tourSchema } from "./types";
function Component() {
	const url: string = "https://www.course-api.com/react-tours-project";

	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState<string | null>(null);
	const [tours, setTours] = useState<Tour[]>([]);
	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error(`Failed to fetch data...`);
				}
				const rawData: Tour[] = await response.json();
				const result = tourSchema.array().safeParse(rawData);

				if (!result.success) {
					console.log(result.error.message);
					throw new Error(`Failed to parse tours`);
				}
				setTours(result.data);
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

			<div>
				<h2 className="mb-1">Tours</h2>
				{tours.map((tour: Tour) => {
					return (
						<p key={tour.id} className="mb-1">
							{tour.name}
						</p>
					);
				})}
			</div>
		</div>
	);
}
export default Component;
