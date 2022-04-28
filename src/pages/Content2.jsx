import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import styles from "./Content2.module.scss";
import globalStyles from "../App.module.scss";
function Content2() {
	let navigate = useNavigate();
	return (
		<div className={styles.container}>
			<div className={styles.text}>
				<h1 className={globalStyles.heading}>What is Lynching?</h1>
				<p className={globalStyles.paragraph}>
					During the period 1877 to 1950, <span className={styles.highlighted}>4075</span> African American lives were taken through the act
					of lynching (CITATION). Following the Civil War when black individuals began embracing their new rights, the Southern white people
					and the government began looking for methods to undermine black people’s freedom and rights.
				</p>
				<h1 className={globalStyles.heading}>How did Lynching Emerge?</h1>
				<p className={globalStyles.paragraph}>
					Lynching emerged as terrorism to the black people as the violent acts that tormented victims with them ending up dead and hung on
					a tree were prevalently used to suppress black people’s fight for civil rights. This use of racial terror became apparent as a
					form of racial control,
				</p>
			</div>
			<Navigation onLeftClick={() => navigate("/gena-finalproject/1")} onRightClick={() => navigate("/gena-finalproject/3")} />
		</div>
	);
}

export default Content2;
