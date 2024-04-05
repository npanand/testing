import "./globals.css"
import { Inter } from "next/font/google";
import { ThemeProvider } from "./themeprovider";
import { ThemeSwitcher } from "./component/ThemeSwitcher";
import Header from "./component/Header";


const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Darkmode with Next.js and TailwindCSS",
  description:
    "I simply app to showcase dark mode with Next.js and TailwindCSS",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-50 dark:bg-[#0d1117] ${100}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

          <main>

            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}   