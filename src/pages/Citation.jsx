import React from "react";
import styles from "./Citation.module.scss";
import Navigation from "../components/Navigation";
import { useNavigate } from "react-router-dom";
import globalstyles from "../App.module.scss";
function Citation() {
	let navigate = useNavigate();

	function citation() {}

	const citations = [
		"Civil Rights Movement. Anti-Defamation League. (n.d.). Retrieved May 1, 2022, from https://www.adl.org/education/resources/backgrounders/civil-rights-movement",
		'Digital Public Library of America. (n.d.). "Lynching". Digital Public Library of America. Retrieved April 29, 2022, from https://dp.la/primary-source-sets/ida-b-wells-and-anti-lynching-activism/sources/1120',
		"Encyclopædia Britannica, inc. (n.d.). Jim Crow law. Encyclopædia Britannica. Retrieved April 27, 2022, from https://www.britannica.com/event/Jim-Crow-law",
		"Equal Justice Initiative. (n.d.). Lynching in America: Confronting the legacy of racial terror. Lynching in America: Confronting the Legacy of Racial Terror. Retrieved April 27, 2022, from https://lynchinginamerica.eji.org/report/",
		"Lynching in America Report. Equal Justice Initiative. (2022, January 24). Retrieved April 29, 2022, from https://eji.org/reports/lynching-in-america/",
		"Nast, T. (1998, February 9). The African American Odyssey: A Quest for Full Citizenship Reconstruction and its aftermath. Library of Congress. Retrieved May 2, 2022, from https://www.loc.gov/exhibits/african-american-odyssey/reconstruction.html ",
		"Race III Lecture, Slide 26 ",
	];
	return (
		<div className={styles.container}>
			<div className={styles.text}>
				<div className={styles.header}>
					<h1 className={globalstyles.heading}>Citations</h1>
					<p>APA Citations</p>
				</div>
				<div className={styles.citations}>
					{citations.map((citation) => {
						return <p className={styles.citation}>{citation}</p>;
					})}
				</div>
			</div>
			<Navigation onLeftClick={() => navigate("/gena-finalproject/conclusion")} leftOnly />
		</div>
	);
}

export default Citation;
