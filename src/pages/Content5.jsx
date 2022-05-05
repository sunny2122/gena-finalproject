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
				<h1 className={`${globalStyles.heading} ${styles._}`}>RACE II & III: Jim Crow & Civil Rights Movement </h1>
				{/* <p className={`${globalStyles.paragraph} ${styles. }`}>Criminalization & Lynching as methods of racial violence</p> */}
				<div className={styles.images}>
					<div className={styles.left}>
						<img className={styles.image} src="assets/bg-content5-1.jpeg" alt="content51" />
						<h3>Jim Crow Laws</h3>
					</div>
					<div className={styles.right}>
						<img className={styles.image} src="assets/bg-content5-2.jpg" alt="content52" />

						<h3>Civil Rights Movement</h3>
					</div>
				</div>
				<p className={`${globalStyles._} ${styles.paragraph}`}>
					Following the Civil War, the Reconstruction era became a violent period where countless black individuals were lynched. Lynching
					became a tool that generated intimidation and maintained segregation with limited resistance. Most importantly, lynching
					re-established white supremacy that seemingly diminished given the abolishment of slavery. With <strong>Jim Crow</strong> laws
					promoting racial subordination and segregation, lynching emerged as a tool that enforced the racial control intended to
					re-establish white superiority over the black inferiors. Local governments shaped a system that aims to re-create an environment
					based on white supremacy, as shown through Jim Crow laws that separated the black individuals from enjoying the rights of their
					white counterparts. In fear that the people of color would rise and compete against the whites, the Jim Crow laws were used to
					enforce racial exploitation that ensured that the whites would not be losing any benefits. Lynching, especially, was the tactic to
					maintain the Jim Crow laws so that the African Americans would not severely resist the laws and acts implemented. Moreover, the
					act of lynching also served as a tool to suppress the black individuals and “persecute them back into slavery” (Equal Justice
					Initiative). Lynching reinforced racial inequality from the Jim Crow laws, similar to the days of slavery but worse as it was
					accompanied by blood and terror.
				</p>
				<p className={`${globalStyles._} ${styles.paragraph}`}>
					Lynching created a fearful period with limited resistance for a prolonged period. While the Reconstruction era provided African
					Americans a brief period of political and economic participation, such as participating in the political process, having land, and
					seeking employment (Nast, 1998), African Americans’ quest for freedom and opportunities was still under significant impediments.
					Lynching was used to create a fearful environment where African Americans had to consider being lynched if they resisted the
					forces of subjugation. Given the rise of lynching in re-establishing white superiority, the African Americans began to fight
					against lynching in their ways. Methods like the anti-lynching movement, business boycotting, and civil rights organizations like
					the National Association for the Advancement of Colored People (NAACP) emerged to combat white supremacy and violence amplified
					through lynching. The Jim Crow laws that limited African Americans’ economic, social, and political possibilities and legalized
					racial segregation and disenfranchisement spurred the need for the civil rights movement to restore African Americans’ equality
					and justice. Lynching’s reign of terror eventually drove the necessity of the Civil Rights Movement to protect the people of
					color.
				</p>
			</div>
			<Navigation onLeftClick={() => navigate("/gena-finalproject/4")} onRightClick={() => navigate("/gena-finalproject/conclusion")} />
		</div>
	);
}

export default Content5;
