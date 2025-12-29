import "/public/assets/css/vendors/bootstrap.min.css"
import "/public/assets/css/vendors/swiper-bundle.min.css"
import "/public/assets/css/vendors/carouselTicker.css"
import "/public/assets/css/vendors/magnific-popup.css"
import "/public/assets/fonts/remixicon/remixicon.css"
import "/public/assets/css/main.css"

import type { Metadata } from "next"
import { Urbanist, Playfair_Display, DM_Mono } from "next/font/google"

const urbanist = Urbanist({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
	variable: "--urbanist",
	display: 'swap',
})
const playfair_display = Playfair_Display({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	variable: "--playpair",
	display: 'swap',
})
const dmMono = DM_Mono({
	weight: ['300', '400', '500'],
	subsets: ['latin'],
	variable: "--dmMono",
	display: 'swap',
})



export const metadata: Metadata = {
  title: {
    default: "Sameer Kumar Maurya | Full Stack Developer Portfolio",
    template: "%s | Sameer Kumar Maurya",
  },

  description:
    "Sameer Kumar Maurya is a Full Stack Developer showcasing projects, skills, experience, and contact information. Explore modern web development work using React, Next.js, and more.",

  keywords: [
    "Sameer Kumar Maurya",
    "Sameer Maurya",
    "Full Stack Developer",
    "Web Developer Portfolio",
    "Next.js Developer",
    "React Developer",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Personal Portfolio Website",
  ],

  authors: [{ name: "Sameer Kumar Maurya" }],
  creator: "Sameer Kumar Maurya",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Sameer Kumar Maurya | Full Stack Developer Portfolio",
    description:
      "Explore projects, skills, and experience of Sameer Kumar Maurya, a Full Stack Developer specializing in modern web technologies.",
    url: "https://sameerkumarmaurya.vercel.app/",
    siteName: "Sameer Kumar Maurya Portfolio",
    images: [
      {
        url: "https://sameerkumarmaurya.vercel.app/assets/imgs/image.png",
        width: 1200,
        height: 630,
        alt: "Sameer Kumar Maurya Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sameer Kumar Maurya | Full Stack Developer",
    description:
      "Personal portfolio of Sameer Kumar Maurya – projects, skills, and contact details.",
    images: ["https://sameerkumarmaurya.vercel.app/assets/imgs/image.png"],
    creator: "@your_twitter_handle",
  },

  alternates: {
    canonical: "https://sameerkumarmaurya.vercel.app",
  },
}


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" data-bs-theme="dark" className="zelio">
			<body className={`${urbanist.variable} ${playfair_display.variable} ${dmMono.variable}`}>{children}</body>
		</html>
	)
}
