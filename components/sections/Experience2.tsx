import Link from "next/link";

export default function Experience2() {
  return (
    <>
      <section id="experience" className="section-experience pt-5">
        <div className="container">
          <div className="rounded-3 border border-1 position-relative overflow-hidden">
            <div className="box-linear-animation position-relative z-1">
              <div className="p-lg-8 p-md-6 p-3 position-relative z-1">
                <div className="d-flex align-items-center">
                  <svg
                    className="text-primary-2 me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width={5}
                    height={6}
                    viewBox="0 0 5 6"
                    fill="none"
                  >
                    <circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
                  </svg>
                  <span className="text-linear-4 d-flex align-items-center">
                    Experience
                  </span>
                </div>

                <h3>
                  1+
                  <span className="text-300"> year of </span>
                  experience
                  <span className="text-300">
                    <br />
                    in MERN Stack Development
                  </span>
                </h3>

                <div className="row mt-5">
                  {/* LEFT SIDE - COMPANIES */}
                  <div className="col-lg-4">
                    <div className="d-flex flex-column gap-2">
                      <Link
                        href="#"
                        className=" border border-1 rounded-3 p-3"
                      >
                        <div className="d-flex align-items-center gap-2">
                      
                          <div className="d-flex flex-column ms-2">
                            <h5 className="mb-1">Ebani Tech Pvt. Ltd</h5>
                            <span className="text-300">Apr 2025 – Present</span>
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="#"
                        className=" border border-1 rounded-3 p-3"
                      >
                        <div className="d-flex align-items-center gap-2">
                    
                          <div className="d-flex flex-column ms-2">
                            <h5 className="mb-1">BSH Technologies</h5>
                            <span className="text-300">Aug 2024 – Jan 2025</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* RIGHT SIDE - DESCRIPTION */}
                  <div className="col-lg-8 ps-lg-5 mt-5 mt-lg-0">
                    <h6 className="text-linear-4">
                      Full Stack Developer (Next.js / Node.js)
                    </h6>
                    <ul className="mt-4">
                      <li className="text-dark mb-3">
                        Developed scalable{" "}
                        <span className="text-secondary-2">
                          CRM dashboards
                        </span>{" "}
                        and AdTech platforms using Next.js, Node.js, and Prisma.
                      </li>
                      <li className="text-dark mb-3">
                        Built and deployed{" "}
                        <span className="text-secondary-2">
                          full-stack web applications
                        </span>{" "}
                        for clients in AdTech and SaaS industries.
                      </li>
                      <li className="text-dark mb-3">
                        Integrated{" "}
                        <span className="text-secondary-2">
                          AI-based modules
                        </span>{" "}
                        for lead management and content automation.
                      </li>
                      <li className="text-dark mb-3">
                        Managed deployment using{" "}
                        <span className="text-secondary-2">
                          Vercel, Render, and CapRover
                        </span>{" "}
                        ensuring smooth CI/CD workflows.
                      </li>
                      <li className="text-dark mb-3">
                        Collaborated with QA and design teams in{" "}
                        <span className="text-secondary-2">Agile sprints</span>{" "}
                        to deliver and test features efficiently.
                      </li>
                    </ul>

                    <div className="d-flex flex-wrap align-items-center gap-3 mt-7">
                      <Link
                        href="#"
                        className="text-300 border border-1 px-3 py-1"
                      >
                        Next.js
                      </Link>
                      <Link
                        href="#"
                        className="text-300 border border-1 px-3 py-1"
                      >
                        Node.js
                      </Link>
                      <Link
                        href="#"
                        className="text-300 border border-1 px-3 py-1"
                      >
                        Prisma
                      </Link>
                      <Link
                        href="#"
                        className="text-300 border border-1 px-3 py-1"
                      >
                        MySQL
                      </Link>
                      <Link
                        href="#"
                        className="text-300 border border-1 px-3 py-1"
                      >
                        Tailwind CSS
                      </Link>
                      <Link
                        href="#"
                        className="text-300 border border-1 px-3 py-1"
                      >
                        TypeScript
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <img
                className="position-absolute top-0 start-0 z-0"
                src="assets/imgs/home-page-2/services/bg.png"
                alt="experience background"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
