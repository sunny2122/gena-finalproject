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
					{/* <p>During the period 1877 to 1950, undermine black people’s freedom and rights.</p> */}
				</div>
				<p>
					Through lynching, the Southern communities managed to create a fearful environment that asserted white supremacy. African
					Americans were threatened and had limited resistance as their rights were restricted through Jim Crow laws and the lynching
					tactics. The white communities eagerly advocated the practice as it helped maintain racial dominance over economic and political
					resources like that of the slavery period. This use of racial terror during the 19th century became a nightmare for the African
					American communities and increased power for the white communities in re-establishing their white supremacy.
				</p>
			</div>
			<Navigation onLeftClick={() => navigate("/gena-finalproject/5")} onRightClick={() => navigate("/gena-finalproject/citation")} />
		</div>
	);
}

export default Conclusion;
