import React from "react";
import styles from "./Citation.module.scss";
import Navigation from "../components/Navigation";
import { useNavigate } from "react-router-dom";
function Citation() {
	let navigate = useNavigate();

	const citations = [];
	return (
		<div className={styles.container}>
			<div className={styles.text}>
				<div className={styles.header}>
					<h1>Citations</h1>
					<p>MLA Citations</p>
				</div>
				<div className={styles.citations}>
					{citations.map((citation) => {
						return <p>{citation}</p>;
					})}
				</div>
			</div>
			<Navigation onLeftClick={() => navigate("/gena-finalproject/conclusion")} leftOnly />
		</div>
	);
}

export default Citation;
