import { useEffect, useState } from "react";
import Container from "./components/Container/Container.js";
import Button from "./components/Button/Button.js";
import FormattedTime from "./components/FormattedTime/FormattedTime.js";

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
