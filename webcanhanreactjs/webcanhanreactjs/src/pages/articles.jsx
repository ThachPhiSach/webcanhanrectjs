import React from "react";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import "./styles/articles.css";

const Articles = () => {

	return (
		<React.Fragment>	
     		<div className="page-content">
				<NavBar active="articles" />				
				<div className="content-wrapper">					
					<div className="articles-logo-container">						
					</div>

					<div className="articles-main-container">
						<div class="container1">
						<div class="content">
								<h2>Skill</h2>
								<h2>Skill</h2>
							</div>
							<div class="bar learning" data-skill="	HTML5"></div>
							<div class="bar back basic" data-skill="CSS3"></div>
							<div class="bar back intermediate" data-skill="Javascript"></div>
							<div class="bar front advanced" data-skill="Reactjs"></div>
							<div class="bar front expert" data-skill="Bootstrap"></div>
							<div class="bar front expert1" data-skill="Python"></div>
							<div class="bar front expert2" data-skill="Java"></div>
							<div class="bar front expert3" data-skill="C"></div>
							<div class="bar front expert4" data-skill="MySql"></div>

						</div>					
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Articles;
