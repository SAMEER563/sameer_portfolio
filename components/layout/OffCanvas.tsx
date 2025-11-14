import Link from 'next/link'

export default function OffCanvas({ isOffCanvas, handleOffCanvas }: any) {
	return (
		<>
			{/* offCanvas-menu */}
			<div className={`offCanvas__info ${isOffCanvas ? 'active' : ''}`}>
				<div className="offCanvas__close-icon menu-close" onClick={handleOffCanvas}>
					<button><i className="ri-close-line" /></button>
				</div>

				<div className="offCanvas__logo mb-5">
					<h3 className="mb-0">Get in touch</h3>
				</div>

				<div className="offCanvas__side-info mb-30">
					<div className="contact-list mb-30">
						<p className="fs-6 fw-medium text-200 mb-5">
							I am always excited to collaborate on new projects and build meaningful digital experiences.
						</p>

						<div className="mb-3">
							<span className="text-400 fs-5">Phone Number</span>
							<p className="mb-0">+91 9839908578</p>
						</div>

						<div className="mb-3">
							<span className="text-400 fs-5">Email</span>
							<p className="mb-0">sameermaurya482@gmail.com</p>
						</div>

						<div className="mb-3">
							<span className="text-400 fs-5">Website</span>
							<p className="mb-0">sameerkumarmaurya.vercel.app</p>
						</div>

						<div className="mb-3">
							<span className="text-400 fs-5">Address</span>
							<p className="mb-0">Lucknow, Uttar Pradesh, India</p>
						</div>
					</div>

					<div className="contact-list">
						<p className="text-400 fs-5 mb-2">Social</p>
						<div className="d-md-flex d-none gap-3">

							<Link href="https://medium.com/@shakyasam563">
								<i className="ri-medium-fill fs-18" />
							</Link>

							<Link href="https://www.youtube.com/@JavascriptTrivia">
								<i className="ri-youtube-fill fs-18" />
							</Link>

							<Link href="https://www.linkedin.com/in/sameer-kumar-maurya/">
								<i className="ri-linkedin-fill fs-18" />
							</Link>

							<Link href="https://github.com/SAMEER563">
								<i className="ri-github-fill fs-18" />
							</Link>

						</div>
					</div>
				</div>
			</div>

			<div
				className={`offCanvas__overly ${isOffCanvas ? 'active' : ''}`}
				onClick={handleOffCanvas}
			/>
		</>
	)
}
