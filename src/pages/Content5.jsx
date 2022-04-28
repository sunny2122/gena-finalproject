import React from "react";
import styles from "./Content5.module.scss";
import globalStyles from "../App.module.scss";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
function Content5() {
	let navigate = useNavigate();
	return (
		<div className={styles.container}>
			<div className={styles.text}>
				<h1 className={`${globalStyles.heading} ${styles.heading}`}>Race II & III</h1>
				<p className={`${globalStyles.paragraph} ${styles.paragraph}`}>Criminalization & Lynching as methods of racial violence</p>
				<div className={styles.images}>
					<div className={styles.left}>
						<img className={styles.image} src="assets/bg-content5-1.png" alt="content51" />
						<h3>Lynching</h3>
					</div>
					<div className={styles.right}>
						<img className={styles.image} src="assets/bg-content5-2.jpg" alt="content52" />

						<h3>Criminalization</h3>
					</div>
				</div>
				<p className={`${globalStyles.paragraph} ${styles.paragraph}`}>
					Lynching emerged as terrorism to the black people as the violent acts that tormented victims with them ending up dead and hung on
					a tree were prevalently used to suppress black people’s fight for civil rights. This use of racial terror became apparent as a
					form of racial control, Lynching emerged as terrorism to the black people as the violent acts that tormented victims with them
					ending up dead and hung on a tree were prevalently used to suppress black people’s fight for civil rights. This use of racial
					terror became apparent as a form of racial control,
				</p>
			</div>
			<Navigation onLeftClick={() => navigate("/gena-finalproject/4")} onRightClick={() => navigate("/gena-finalproject/conclusion")} />
		</div>
	);
}

export default Content5;
