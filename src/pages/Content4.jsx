import React from "react";
import styles from "./Content4.module.scss";
import globalStyles from "../App.module.scss";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
function Content4() {
	let navigate = useNavigate();
	return (
		<div className={styles.container}>
			<div className={styles.text}>
				<h1 className={`${globalStyles.heading} ${styles._}`}>Lynching as a tool to reestablish white supremacy continue</h1>
				{/* <p className={`${globalStyles.paragraph} ${styles.paragraph}`}>
					During the period 1877 to 1950, <span className={styles.highlighted}>4075</span> African American lives were taken through the act
					of lynching (CITATION). Following the Civil War when black individuals began embracing their new rights, the Southern white people
					and the government began looking for methods to undermine black people’s freedom and rights.
				</p> */}
				<div className={styles.analysis}>
					<h6>Primary Source Analysis:</h6>
					<div className={styles.analysisContent}>
						<h5>
							<img className={styles.image} src="assets/bg-content4.png" alt="content3" />
							Photo excerpted from Race III Lecture, Slide 26
						</h5>
						<p className={`${globalStyles._} ${styles.paragraph}`}>
							Another photo of lynching could be seen in Indiana, where the hanging of the victims involves a large group of whites
							assembled under a tree. Like the lynching in Columbus, Georgia, a substantial white crowd also exists under the dead
							bodies of two black males. In addition, the African American corpse is brutally injured as their clothing is tainted with
							blood and ripped into pieces. The bodies are also hanged on a tree. The audiences are primarily white individuals, ranging
							from women and men of both young and old ages. The people within the mob are shown wearing nice outfits. The couple on the
							left shows that they were perhaps on a date. One man in the middle points at the corpse as if the dead bodies are a sight
							worth seeing. Two men on the left are shown happily looking at the camera. Lights are placed on each side to ensure that
							the people can see the scene properly at night. In the photo, lynching is again a public display that garners widespread
							attention from the white communities. The place was swarming with people, most of them looking excited to see the deaths
							of the African American men.
						</p>
						<p className={`${globalStyles._} ${styles.paragraph}`}>
							The photographs focus on the mob, where the crowd is shown in glorification of what they are seeing. The people are
							well-posed and no one is hiding their faces or being fearful of attending the public lynching event. Lynching is, again,
							shown as a flagrant public display where the whites view the lynching of the African Americans as a celebration of white
							supremacy. The overflowing number of people at night watching the corpses evince how the white communities are intensely
							interested in watching the deaths of the African Americans in receiving the justice that the white communities think they
							have enacted on the black individuals. The white viewers enjoyed the act of lynching as they were shown excited and
							satisfied like the two white males on the left of the picture. The man in the middle pointing at the corpses suggests how
							the white communities view the deaths of the black individuals as trophies of their justified actions in a way that
							reassures white supremacy. His gesture is as if warning the black individuals that they
						</p>
						<p className={`${globalStyles._} ${styles.paragraph}`}>
							would end up in a similar situation if they continue to compete for resources and fight for political participation and
							civil rights. The open celebration and focus on the white mob have indicated how the white community has adopted lynching
							to spread fear to reestablish white supremacy. Especially during the Jim Crow era, when fear was used to assert white
							power, lynching managed to heighten the fear of the immediate victims and the African-American community as a whole. The
							photographs further remind and warn the African-American groups that they might be lynched if they continued to resist the
							subjugations like segregation under the Jim Crow laws.
						</p>
					</div>
				</div>
			</div>
			<Navigation onLeftClick={() => navigate("/gena-finalproject/3")} onRightClick={() => navigate("/gena-finalproject/5")} />
		</div>
	);
}

export default Content4;
