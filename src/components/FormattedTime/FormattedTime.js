import styles from "./FormattedTime.module.scss";

const FormattedTime = ({ time }) => {
	return (
		<div className={styles.FormattedTime}>
			<span>{("0" + (Math.floor(time / 3600000) % 24)).slice(-2)}:</span>
			<span>{("0" + (Math.floor(time / 60000) % 60)).slice(-2)}:</span>
			<span>{("0" + (Math.floor(time / 1000) % 60)).slice(-2)}.</span>
			<span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
		</div>
	);
};
export default FormattedTime;
