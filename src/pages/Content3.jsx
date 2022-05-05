import React from "react";
import styles from "./Content3.module.scss";
import globalStyles from "../App.module.scss";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
function Content3() {
	let navigate = useNavigate();
	return (
		<div className={styles.container}>
			<div className={styles.text}>
				<h1 className={`${globalStyles.heading} ${styles.heading}`}>Lynching as a tool for racial control to maintain white supremacy</h1>
				<p className={`${globalStyles.paragraph} ${styles.paragraph}`}>
					After the Civil War, the Reconstruction period provided hope and change to the formerly enslaved groups. African Americans were
					eager to welcome a new step toward independence, equality, and citizenship. The period marked growing political participation of
					Black men’s eligibility to vote and election. Education also became a priority. Yet, despite the brimming hope of a new start and
					embracing their rights, the Reconstruction period soon became the African American’s excruciating nightmare.
				</p>
				<p className={`${globalStyles.paragraph} ${styles.paragraph}`}>
					Though lynching had existed prior to slavery, the practice increased during Reconstruction as the white communities— many of the
					whites were landowners and were not as economically prosperous— felt threatened by the rise of the African Americans. The white
					communities adopted violent measures like mass lynchings to prevent blacks’ political participation in response to the threat. As
					such, the white groups were able to form a regime of white supremacy that suppressed and exploited the black people.
				</p>
				<div className={styles.analysis}>
					<h6>Primary Source Analysis</h6>
					<div className={styles.analysisContent}>
						<img className={styles.image} src="assets/bg-content3.jpg" alt="content3" />
						<p className={`${globalStyles._} ${styles.paragraph}`}>
							Southern lynching was, in a way, intended to reestablish white supremacy as the white communities feared the growing black
							social and economic participation. Though many victims were lynched often due to the accusation of rape, a majority of the
							victims were political activists, those who seemed to show disrespect to the whites, and those accused of petty crimes.
							Lynching was frequently on public display, with a significant number of white individuals and families in attendance. By
							publicly lynching, the white communities aim to spread racial terror by reminding the black groups of their proper status
							in reassuring white superiority.
						</p>
						<p className={`${globalStyles._} ${styles.paragraph}`}>
							As supported by pictures of the aftermath of the Columbus, Georgia, public lynching, the lynching of two African Americans
							was attended by a mass crowd. The audiences involve white men, women, and even children who seem accustomed to the
							practice of lynching, given no particular facial expression. It is worthy to note that there stood two African American
							individuals in the left corner of the crowd, and both of them appeared frightened to witness the lynching. The two African
							Americans represent a stark contrast from the crowd as the white audience viewed lynching merely as a show while the black
							individuals viewed it as a threatening remark to their race. On the tree, there are two black victims. They are brutally
							tortured before death as blood is stained on their clothes. Another white man on the tree is perhaps cutting the rope to
							put the body down or even taking parts of the body as souvenirs. Adding on, as shown through how the white observers
							cooperatively look towards the camera, the photograph is perhaps also taken to be sold as postcards or in newspapers.
							Through the photo, lynching is a flagrant public display that appeared as a show with the white audiences viewing the act
							as a just action towards the black groups.
						</p>
						<p className={`${globalStyles._} ${styles.paragraph}`}>
							Lynching appeared as an action to reassert the diminishing white authority and perpetuated the thinking that the black
							individuals were subhuman, as seen through the large crowds of whites watching the prolonged torture and public lynching
							without any sympathy. The spectators comprise a considerable number of white individuals that view such public festive
							community gatherings as a show; the audience seems used to such an act of lynching as a justified act to punish the
							African Americans for their alleged crimes. The white observer’s expressionless attitude towards the victims further shows
							how the whites view the black people as inferior, and that the blacks “deserved” such treatment. To the white communities,
							the black individuals should be back in their proper place than trying to compete against the white people’s resources. As
							shown through this, it is evident that lynching served to racially control the black people in preventing black prominence
							while assuring white supremacy in the economic and political spheres.
						</p>
					</div>
				</div>
			</div>
			<Navigation onLeftClick={() => navigate("/gena-finalproject/2")} onRightClick={() => navigate("/gena-finalproject/4")} />
		</div>
	);
}

export default Content3;
