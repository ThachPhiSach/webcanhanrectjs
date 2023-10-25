import React from "react";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import "./styles/contact.css";

const Contact = () => {
	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-container">
					
							<div class="row">
							<div class="content">
  <h2 class="text_shadows">Contact</h2>
</div>
									<p class="text">  Nếu bạn có thắc mắc vui lòng để lại lời nhắn </p>
							</div>
							<div class="row">
									
							</div>
							<div class="row input-container">
									<div class="col-xs-12">
										<div class="styled-input wide">
											<input type="text" required />
											<label>Name</label> 
										</div>
									</div>
									<div class="col-md-6 col-sm-12">
										<div class="styled-input">
											<input type="text" required />
											<label>Email</label> 
										</div>
									</div>
									<div class="col-md-6 col-sm-12">
										<div class="styled-input">
											<input type="text" required />
											<label>Phone Number</label> 
										</div>
									</div>
									<div class="col-xs-12">
										<div class="styled-input wide">
											<textarea required></textarea>
											<label>Message</label>
										</div>
									</div>
									<div class="col-xs-12">
										<div class="button-78" >Send Message</div>
									</div>
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

export default Contact;
