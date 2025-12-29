import type { Metadata } from "next"

import Layout from "@/components/layout/Layout"
import Home2 from "@/components/sections/Home2"
import Static2 from "@/components/sections/Static2"
import Service2 from "@/components/sections/Service2"
import Experience2 from "@/components/sections/Experience2"
import Education2 from "@/components/sections/Education2"
import Projects2 from "@/components/sections/Projects2"
import Skills2 from "@/components/sections/Skills2"
import Contact2 from "@/components/sections/Contact2"

export const metadata: Metadata = {
  title: "Sameer Kumar Maurya | Full Stack Developer Portfolio",
  description:
    "Welcome to the portfolio of Sameer Kumar Maurya. Discover my projects, skills, experience, education, and services as a Full Stack Developer in React & Next.js.",

  keywords: [
    "Sameer Kumar Maurya",
    "Sameer Maurya Portfolio",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer India",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "Portfolio Website",
  ],

  openGraph: {
    title: "Sameer Kumar Maurya | Full Stack Developer Portfolio",
    description:
      "Explore projects, skills, and professional experience of Sameer Kumar Maurya, a Full Stack Web Developer.",
    url: "https://sameerkumarmaurya.vercel.app",
    siteName: "Sameer Kumar Maurya Portfolio",
    images: [
      {
        url: "https://sameerkumarmaurya.vercel.app/assets/imgs/image.png",
        width: 1200,
        height: 630,
        alt: "Sameer Kumar Maurya Portfolio Website",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sameer Kumar Maurya | Full Stack Developer",
    description:
      "Personal portfolio website showcasing projects, skills, and experience.",
    images: ["https://sameerkumarmaurya.vercel.app/assets/imgs/image.png"],
  },

  alternates: {
    canonical: "https://sameerkumarmaurya.vercel.app",
  },
}

export default function Home() {
  return (
    <Layout headerStyle={2} footerStyle={2}>
      <Home2 />
      <Static2 />
      <Service2 />
      <Experience2 />
      <Education2 />
      <Projects2 />
      <Skills2 />
      <Contact2 />
    </Layout>
  )
}
