export default function Footer2() {
    return (
        <>
            <footer>
                <div className="section-footer-2 position-relative">
                    <div className="container position-relative z-1 border-top border-1 pb-2 pt-4">
                        <div className="text-center">
                            <a className="d-flex main-logo align-items-center justify-content-center mb-3">
                                <img src="assets/imgs/home-page-2/template/favicon.svg" alt="zelio" />
                                <span className="fs-4 ms-2">Sameer Kumar Maurya</span>
                            </a>

                            {/* Updated Social Icons */}
                            <div className="d-flex justify-content-center gap-3">
                                {/* YouTube replacing Facebook */}
                                <a href="https://www.youtube.com/@JavascriptTrivia" target="_blank">
                                    <i className="ri-youtube-fill fs-18" />
                                </a>

                                {/* Medium replacing Twitter */}
                                <a href="https://medium.com/@shakyasam563" target="_blank">
                                    <i className="ri-medium-fill fs-18" />
                                </a>

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/sameer-kumar-maurya/" target="_blank">
                                    <i className="ri-linkedin-fill fs-18" />
                                </a>

                                {/* GitHub */}
                                <a href="https://github.com/SAMEER563" target="_blank">
                                    <i className="ri-github-fill fs-18" />
                                </a>
                            </div>

                            <div className="navigation d-flex align-items-center justify-content-center flex-wrap gap-4 my-4">
                                <a href="#about" className="fs-6"> About me </a>
                                <a href="#experience" className="fs-6"> Experiences </a>
                                <a href="#services" className="fs-6"> Services </a>
                                <a href="#skills" className="fs-6"> Skills </a>
                                <a href="#projects" className="fs-6"> Projects </a>
                                <a href="#contact" className="fs-6"> Contact </a>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
