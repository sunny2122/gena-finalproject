import React from "react";
import styles from "./Content1.module.scss";
import Navigation from "../components/Navigation";
import { useNavigate } from "react-router-dom";
function Content1() {
	let navigate = useNavigate();
	return (
		<div className={styles.container}>
			<div className={styles.background}>
				<img className={styles.background} src="assets/bg-content1.jpg" alt="bg-content1" />
			</div>
			<div className={styles.text}>
				<h1>Introduction</h1>
				<p>
					During the period 1877 to 1950, <span className={styles.highlighted}>4075</span> African American lives were taken through the act
					of lynching (CITATION). Following the Civil War when black individuals began embracing their new rights, the Southern white people
					and the government began looking for methods to undermine black people’s freedom and rights.
				</p>
				<p>
					Lynching emerged as terrorism to the black people as the violent acts that tormented victims with them ending up dead and hung on
					a tree were prevalently used to suppress black people’s fight for civil rights. This use of racial terror became apparent as a
					form of racial control, along with Jim Crow laws, that simultaneously traumatized the Black individuals to maintain white
					supremacy.
				</p>
			</div>
			<Navigation onLeftClick={() => navigate("/gena-finalproject/table-of-content")} onRightClick={() => navigate("/gena-finalproject/2")} />
		</div>
	);
}

export default Content1;
