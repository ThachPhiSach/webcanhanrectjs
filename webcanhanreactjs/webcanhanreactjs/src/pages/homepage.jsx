import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faGithub,
	faYoutube,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";


import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";



import INFO from "../data/user";
import SEO from "../data/seo";


import "./styles/homepage.css";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>
			

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
					
						</div>
					</div>
					

					<div className="homepage-container">
						
						<div className="homepage-first-area">
							
							<div className="homepage-first-area-left-side">

								<div className="title homepage-title">
											
								
								<section class="home">
									<div class="home-content">
										<h1 class="name">Hi, I'm Phi Sách</h1>
										<div class="loader">
			<span>F</span>
			<span>R</span>
			<span>O</span>
			<span>N</span>
			<span>T</span>
			<span>E</span>
			<span>N</span>
			<span>D</span> &nbsp;
			<span>D</span>
			<span>E</span>
			<span>V</span>
			<span>E</span>
			<span>L</span>
			<span>O</span>
			<span>P</span>
			<span>E</span>
			<span>R</span>

			

		</div>
										<p>Lớp 231_LTW_07CLC_Sáng Thứ sáu</p>
										<p>Mục tiêu khi hoàn thành môn học môn lập trình web:
											Hiểu biết cơ bản về các ngôn ngữ lập trình web phổ biến như HTML, CSS, JavaScript để xây dựng giao diện và thêm tính năng cho trang web.
											Biết cách tạo trang web tĩnh sử dụng HTML và CSS cho giao diện đơn giản.
											Nắm vững các nguyên tắc thiết kế giao diện người dùng (UX Design) để xây dựng trang web thân thiện, dễ sử dụng.
											Có thể tự xây dựng và quản lý website đơn giản cho doanh nghiệp.
										</p>
										<div class="btn-box">
											<a href="https://www.facebook.com/PhiSach.T.02">Hire Me</a>
											<a href="https://www.facebook.com/PhiSach.T.02">Let's Talk</a>
										</div>
									</div>
								</section>
								
								</div>

							</div>
	
							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="sach.png"
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>
						
						<div className="homepage-socials">
							<a
								href={INFO.socials.twitter}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faFacebook}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.stackoverflow}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faYoutube}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
						</div>


						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
