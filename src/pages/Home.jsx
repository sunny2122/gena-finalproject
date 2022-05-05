import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import styles from "./Home.module.scss";
function Home() {
	let navigate = useNavigate();
	return (
		<div className={styles.container}>
			<h1>Lynching in Americas: </h1>
			<h3>Blood and terror in the 19th century to reestablish white supremacy</h3>
			<Navigation onRightClick={() => navigate("/gena-finalproject/table-of-content")} rightOnly />
		</div>
	);
}

export default Home;
