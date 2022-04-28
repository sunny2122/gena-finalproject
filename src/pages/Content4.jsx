import React from "react";
import styles from "./Content4.module.scss";
import globalStyles from "../App.module.scss";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
function Content4() {
	let navigate = useNavigate();
	return (
		<div className={styles.container}>
			<div className={styles.text}>
				<h1 className={`${globalStyles.heading} ${styles.heading}`}>
					Lynching as a tool for racial control to maintain white supremacy: PT2
				</h1>
				{/* <p className={`${globalStyles.paragraph} ${styles.paragraph}`}>
					During the period 1877 to 1950, <span className={styles.highlighted}>4075</span> African American lives were taken through the act
					of lynching (CITATION). Following the Civil War when black individuals began embracing their new rights, the Southern white people
					and the government began looking for methods to undermine black people’s freedom and rights.
				</p> */}
				<div className={styles.analysis}>
					<img className={styles.image} src="assets/bg-content4.png" alt="content3" />
					<div className={styles.analysisContent}>
						<h6>Analysis</h6>
						<p className={`${globalStyles.paragraph} ${styles.paragraph}`}>
							Lynching emerged as terrorism to the black people as the violent acts that tormented victims with them ending up dead and
							hung on a tree were prevalently used to suppress black people’s fight for civil rights. This use of racial terror became
							apparent as a form of racial control, Lynching emerged as terrorism to the black people as the violent acts that tormented
							victims with them ending up dead and hung on a tree were prevalently used to suppress black people’s fight for civil
							rights. This use of racial terror became apparent as a form of racial control,
						</p>
					</div>
				</div>
			</div>
			<Navigation onLeftClick={() => navigate("/gena-finalproject/3")} onRightClick={() => navigate("/gena-finalproject/5")} />
		</div>
	);
}

export default Content4;
