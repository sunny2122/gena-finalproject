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
					Lynching was prevalent in the United States from the Reconstruction period to the 1950s, particularly in the Southern states. The
					practice involves criminal accusations and many victims did not undergo legal trials. Lynching is typically accompanied by the
					torment and murder of victims. Many of the lynching practices were held in public, with white communities as attendees witnessing
					the act of lynching.{" "}
				</p>
				{/* <h1 className={globalStyles.heading}>How did Lynching Emerge?</h1>
				<p className={globalStyles.paragraph}>
					Lynching emerged as terrorism to the black people as the violent acts that tormented victims with them ending up dead and hung on
					a tree were prevalently used to suppress black people’s fight for civil rights. This use of racial terror became apparent as a
					form of racial control,
				</p> */}
			</div>
			<Navigation onLeftClick={() => navigate("/gena-finalproject/1")} onRightClick={() => navigate("/gena-finalproject/3")} />
		</div>
	);
}

export default Content2;
