import styles from "./Button.module.scss";

const Button = ({ setStart, setTime }) => {
	return (
		<div>
			<button className={styles.button} onClick={() => setStart(true)}>Start</button>
			<button className={styles.button} onClick={() => setStart(false)}>Stop</button>
      <button className={styles.button} onClick={() => {setTime(0); setStart(false)}}>Reset</button>
		</div>
	);
};

export default Button;
