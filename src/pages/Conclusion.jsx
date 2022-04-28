import React from "react";
import styles from "./Conclusion.module.scss";
import Navigation from "../components/Navigation";
import { useNavigate } from "react-router-dom";
function Conclusion() {
	let navigate = useNavigate();
	return (
		<div className={styles.container}>
			<div className={styles.background}>
				<img className={styles.background} src="assets/bg-conclusion.jpg" alt="bg-conclusion" />
			</div>
			<div className={styles.text}>
				<div className={styles.header}>
					<h1>Conclusion</h1>
					<p>During the period 1877 to 1950, undermine black people’s freedom and rights.</p>
				</div>
				<p>
					Lynching emerged as terrorism to the black people as the violent acts that tormented victims with them ending up dead and hung on
					a tree were prevalently used to suppress black people’s fight for civil rights. This use of racial terror became apparent as a
					form of racial control, along with Jim Crow laws, that simultaneously traumatized the Black individuals to maintain white
					supremacy.
				</p>
			</div>
			<Navigation onLeftClick={() => navigate("/gena-finalproject/5")} onRightClick={() => navigate("/gena-finalproject/citation")} />
		</div>
	);
}

export default Conclusion;
