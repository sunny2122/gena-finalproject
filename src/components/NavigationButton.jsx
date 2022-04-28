import { faArrowLeftLong, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./NavigationButton.module.scss";
function NavigationButton({ direction, onClick }) {
	if (direction !== "left" && direction !== "right") return null;
	return (
		<button className={styles.button} onClick={onClick}>
			{direction === "left" ? <FontAwesomeIcon icon={faArrowLeftLong} /> : <FontAwesomeIcon icon={faArrowRightLong} />}
		</button>
	);
}

export default NavigationButton;
