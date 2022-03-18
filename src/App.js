import { useEffect, useState } from "react";
import Container from "./components/Container/Container";
import Button from "./components/Button/Button";
import FormattedTime from "./components/FormattedTime/FormattedTime";

const App = () => {
	const [time, setTime] = useState(0);
	const [start, setStart] = useState(false);

	useEffect(() => {
		let interval = null;

		if (start) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime + 10);
			}, 10);
		} else {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [start]);
	return (
		<Container>
			<FormattedTime time={time} />
			<Button setTime={setTime} setStart={setStart} />
		</Container>
	);
};

export default App;
