import { Inter, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "MD. Salauddin | Full-Stack Software Engineer",
  description:
    "Portfolio of MD. Salauddin — Full-Stack Software Engineer specializing in scalable APIs with Django/DRF, modern Next.js frontends, DevOps, and AI integrations.",
  keywords: [
    "MD. Salauddin",
    "Full-Stack Software Engineer",
    "Django Developer",
    "Next.js Developer",
    "Python",
    "React",
    "Dhaka, Bangladesh",
    "AI-HRM",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "MD. Salauddin" }],
  icons: {
    icon: "/images/portfolio.png",
    apple: "/images/portfolio.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${syne.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[var(--bg-deep)] text-[var(--text-primary)] font-sans antialiased selection:bg-indigo-500/20 selection:text-indigo-400 transition-colors duration-200">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
