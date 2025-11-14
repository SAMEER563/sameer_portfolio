'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 1,
	slidesPerGroup: 1,
	centeredSlides: false,
	loop: true,
	autoplay: {
		delay: 4000,
	},
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
}


const projects = [
	{
		image: "assets/imgs/projects/trimx.png",
		title: "Trimx - Digital Salon Chain Website",
		description: "Developed a responsive website for a salon chain with booking and service features.",
		technologies: "Node.js, React, MongoDB, Next.js",
		liveDemo: "https://www.trimx.in/",
		github: "#"
	},
	{
		image: "assets/imgs/projects/advertising.png",
		title: "Advertising Agency Website",
		description: " Created a modern website for an advertising agency showcasing services and portfolio.",
		technologies: "Node.js, React, MySQL, Next.js",
		liveDemo: "https://ebaniadvertising.in/",
		github: "#"
	},
	{
		image: "assets/imgs/projects/kpcc.png",
		title: "Kerla Pradesh Congress Committee Website",
		description: " Developed an informational website for a political committee with news and event updates. ",
		technologies: "Node.js, React, MongoDB, Next.js",
		liveDemo: "https://www.kpcc.org.in/",
		github: "#"
	},
	{
		image: "assets/imgs/projects/fireblog.png",
		title: "FireBlog - Blogging Platform",
		description: " Built a blogging platform allowing users to create, edit, and share blog posts with others.",
		technologies: "Node.js, React, MongoDB, Express.js",
		liveDemo: "https://blog.nearestsolution.com/",
		github: "https://github.com/SAMEER563/blogsphere"
	},
	{
		image: "assets/imgs/projects/braces.png",
		title: "Braces and Roots Dental Clinic Website",
		description: " Comprehensive website for a dental clinic showcasing their services, portfolio, and client testimonials.",
		technologies: "WordPress, PHP, MySQL",
		liveDemo: "https://bracesandroots.com/",

	},
	{
		image: "assets/imgs/projects/digitopia.png",
		title: "Digitopia - Digital Signage Agency Website",
		description: " Developed a website for a digital signage agency with service listings and contact features.",
		technologies: "WordPress, PHP, MySQL",
		liveDemo: "http://digitopia.live/",

	},
	{
		image: "assets/imgs/projects/kaara.png",
		title: "Kaara - Indian Food Restaurant Website",
		description: " Built a responsive website for an Indian restaurant with menu and reservation features for USA .",
		technologies: "WordPress, PHP, MySQL",
		liveDemo: "https://kaaradining.com/",

	},
]

export default function Projects2() {
	return (
		<>
			<div id='projects' className="section-projects-2 pt-5">
				<div className="container">
					<div className="rounded-3 border border-1 position-relative overflow-hidden">
						<div className="box-linear-animation position-relative z-1">
							<div className="p-lg-8 p-md-6 p-3 position-relative z-1">

								<div className="d-flex align-items-center">
									<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
										<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
									</svg>
									<span className="text-linear-4 d-flex align-items-center"> Projects </span>
								</div>

								<h3>My Recent Works</h3>

								<div className="position-relative">

									<Swiper {...swiperOptions} className="swiper slider-two pb-3 position-relative">
										<div className="swiper-wrapper">

											{/* ===== LOOP PROJECTS ===== */}
											{projects.map((project, index) => (
												<SwiperSlide key={index}>
													<div className="p-lg-5 p-md-4 p-3 border border-1 mt-5 bg-3">
														<div className="row">
															<div className="col-lg-5">
																<div
																	style={{
																		width: "100%",
																		height: "350px",        // Change height if needed
																		overflow: "hidden",
																		borderRadius: "12px"
																	}}
																>
																	<img
																		src={project.image}
																		alt={project.title}
																		style={{
																			width: "100%",
																			height: "100%",
																			objectFit: "fill"
																		}}
																	/>
																</div>
															</div>


															<div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
																<h4 className="text-linear-4">{project.title}</h4>
																<p>{project.description}</p>

																<ul className="mt-4 list-unstyled">
																	<li className="text-secondary-2 mb-3 border-bottom pb-3">Project Info</li>

																	{/* Only Technologies kept */}
																	<li className="text-dark mb-3 border-bottom pb-3">
																		<div className="d-flex justify-content-between">
																			<p className="text-dark mb-0">Technologies</p>
																			<p className="text-300 mb-0">{project.technologies}</p>
																		</div>
																	</li>
																</ul>

																<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
																	<Link href={project.liveDemo} className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
																		Live Demo
																	</Link>


																</div>
															</div>

														</div>
													</div>
												</SwiperSlide>
											))}

										</div>
									</Swiper>

									<div className="position-absolute bottom-0 end-0 gap-2 pb-7 pe-5 d-none d-md-flex">
										<div className="swiper-button-prev end-0 shadow position-relative">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z" fill="white" />
											</svg>
										</div>

										<div className="swiper-button-next end-0 shadow position-relative">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="#A8FF53" />
											</svg>
										</div>
									</div>

								</div>
							</div>

							<img className="position-absolute top-0 start-0 z-0" src="assets/imgs/home-page-2/projects/bg.png" alt="zelio" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
