import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import "@/styles/ItsBtn.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ItsConfirmProvider } from "@/ItsConfirmPop/ItsConfirmPop";
import SearchButton from "@/components/SearchButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ItsUi",
  description: "A minimalist react component library",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative pt-10 pb-56 flex flex-col items-center w-full h-full min-h-screen`}
      >
        <main className="max-w-[800px] w-full h-full">
          <ItsConfirmProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <SearchButton />
              <Navbar />
              <div className="z-zero fixed top-0 left-0">
                <span className="absolute top-0 left-14 w-[20px] h-[20px] bg-purple-500 rounded-full overflow-hidden]"></span>
                <span className="absolute top-0 left-10 w-[20px] h-[20px] bg-pink-500 rounded-full overflow-hidden]"></span>
                <span className="absolute top-0 left-0 w-[40px] h-[20px] bg-indigo-500 rounded-full overflow-hidden]"></span>
                <span className="absolute top-5 left-0 w-[20px] h-[20px] bg-red-500 rounded-full overflow-hidden]"></span>
                <span className="absolute top-5 left-5 w-[20px] h-[20px] bg-red-500 rounded-full overflow-hidden]"></span>
                <span className="absolute top-5 left-10 w-[20px] h-[20px] bg-pink-500 rounded-full overflow-hidden]"></span>
              </div>
              {children}
            </ThemeProvider>
          </ItsConfirmProvider>
          <Footer />
        </main>
      </body>
    </html>
  );
}
