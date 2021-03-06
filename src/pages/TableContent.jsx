import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import styles from "./TableContent.module.scss";
import globalstyles from "../App.module.scss";
function TableContent() {
	let navigate = useNavigate();

	const tableOfContent = [
		"Introduction",
		"Background of Lynching",
		"Lynching as a tool to reestablish white supremacy",
		"Lynching as a tool to reestablish white supremacy continue",
		"Themes evident through lynching: Race II & III",
		"Conclusion",
		"Citations",
	];

	const links = [
		"/gena-finalproject/1",
		"/gena-finalproject/2",
		"/gena-finalproject/3",
		"/gena-finalproject/4",
		"/gena-finalproject/5",
		"/gena-finalproject",
		"/gena-finalproject",
	];

	return (
		<div className={styles.container}>
			<div className={styles.text}>
				<h1 className={globalstyles.heading}>Table of Contents</h1>
				<div className={styles.content}>
					{tableOfContent.map((content, index) => {
						return (
							<React.Fragment key={content}>
								<div>
									{index + 1}. {content}
								</div>
							</React.Fragment>
						);
					})}
				</div>
			</div>
			<Navigation onLeftClick={() => navigate("/gena-finalproject/")} onRightClick={() => navigate("/gena-finalproject/1")} />
		</div>
	);
}

export default TableContent;
