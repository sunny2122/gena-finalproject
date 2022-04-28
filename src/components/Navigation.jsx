import React from "react";
import styles from "./Navigation.module.scss";
import NavigationButton from "./NavigationButton";
function Navigation({ onLeftClick, onRightClick, rightOnly, leftOnly }) {
	if (rightOnly) {
		return (
			<div className={styles.navigationRightOnly}>
				<NavigationButton direction="right" onClick={onRightClick} />
			</div>
		);
	} else if (leftOnly) {
		return (
			<div className={styles.navigationLeftOnly}>
				<NavigationButton direction="left" onClick={onLeftClick} />
			</div>
		);
	} else {
		return (
			<div className={styles.navigation}>
				<NavigationButton direction="left" onClick={onLeftClick} />
				<NavigationButton direction="right" onClick={onRightClick} />
			</div>
		);
	}
}

export default Navigation;
