"use client"
import { useState } from "react"

export default function Contact2() {
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
	e.preventDefault();

	const form = e.currentTarget;

	// Cast each input properly
	const name = (form.elements.namedItem("name") as HTMLInputElement).value;
	const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
	const email = (form.elements.namedItem("email") as HTMLInputElement).value;
	const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
	const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

	const formData = { name, phone, email, subject, message };

	const res = await fetch("/api/contact", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(formData),
	});

	if (res.ok) {
		alert("Message sent successfully!");
		form.reset();
	} else {
		alert("Failed to send message. Please try again.");
	}
};


	return (
		<>
			<section id="contact" className="section-contact-2 position-relative pb-60 overflow-hidden">
				<div className="container position-relative z-1">
					<div className="row align-items-center">
						<div className="col-lg-7 pb-5 pb-lg-0">
							<div className="position-relative">
								<div className="position-relative z-2">

									<h3 className="text-primary-2 mb-3 mt-2">Let’s connect</h3>

									{/* CONTACT FORM */}
									<form onSubmit={handleSubmit}>
										<div className="row g-3">

											<div className="col-md-6">
												<input type="text" required name="name"
													className="form-control bg-3 border rounded-3"
													placeholder="Your name" />
											</div>

											<div className="col-md-6">
												<input type="text" required name="phone"
													className="form-control bg-3 border rounded-3"
													placeholder="Phone" />
											</div>

											<div className="col-md-6">
												<input type="email" required name="email"
													className="form-control bg-3 border rounded-3"
													placeholder="Email" />
											</div>

											<div className="col-md-6">
												<input type="text" required name="subject"
													className="form-control bg-3 border rounded-3"
													placeholder="Subject" />
											</div>

											<div className="col-12">
												<textarea required name="message"
													className="form-control bg-3 border rounded-3"
													placeholder="Message"></textarea>
											</div>

											<div className="col-12">
												<button type="submit" className="btn btn-primary-2 rounded-2">
													Send Message <i className="ri-arrow-right-up-line" />
												</button>
											</div>

										</div>
									</form>

								</div>

								<div className="z-0 bg-primary-dark rectangle-bg z-1 rounded-3" />
							</div>
						</div>

						{/* RIGHT SIDE CONTACT INFO */}
						<div className="col-lg-5 d-flex flex-column ps-lg-8">

							<div className="d-flex align-items-center mb-3 position-relative">
								<div className="icon-flip icon-shape icon-xxl bg-3 border rounded-3">
									<i className="ri-phone-fill text-primary-2 fs-26" />
								</div>
								<div className="ps-3">
									<span className="text-400 fs-6">Phone Number</span>
									<h6 className="mb-0">+91-9839908578</h6>
								</div>
								<a href="tel:+919839908578" className="position-absolute top-0 start-0 w-100 h-100"></a>
							</div>

							<div className="d-flex align-items-center mb-3 position-relative">
								<div className="icon-flip icon-shape icon-xxl bg-3 border rounded-3">
									<i className="ri-mail-fill text-primary-2 fs-26" />
								</div>
								<div className="ps-3">
									<span className="text-400 fs-6">Email</span>
									<h6 className="mb-0">sameermaurya482@gmail.com</h6>
								</div>
								<a href="mailto:sameermaurya482@gmail.com" className="position-absolute top-0 start-0 w-100 h-100"></a>
							</div>

							<div className="d-flex align-items-center mb-3 position-relative">
								<div className="icon-flip icon-shape icon-xxl bg-3 border rounded-3">
									<i className="ri-skype-fill text-primary-2 fs-26" />
								</div>
								<div className="ps-3">
									<span className="text-400 fs-6">Website</span>
									<h6 className="mb-0">sameerkumarmaurya.vercel.app</h6>
								</div>
								<a href="https://sameerkumarmaurya.vercel.app" className="position-absolute top-0 start-0 w-100 h-100"></a>
							</div>

							<div className="d-flex align-items-center mb-3 position-relative">
								<div className="icon-flip icon-shape icon-xxl bg-3 border rounded-3">
									<i className="ri-map-2-fill text-primary-2 fs-26" />
								</div>
								<div className="ps-3">
									<span className="text-400 fs-6">Address</span>
									<h6 className="mb-0">Hyderabad</h6>
								</div>
								<a href="https://maps.google.com/maps?q=Hyderabad" className="position-absolute top-0 start-0 w-100 h-100"></a>
							</div>

						</div>

					</div>
				</div>
			</section>
		</>
	);
}
