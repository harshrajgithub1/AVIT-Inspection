"use Client";
import { Inter } from "next/font/google";
import "./globals.css";
import "../public/assets/css/bootstrap.min.css";
import "../public/assets/css/fontawesome.min.css";
import "../public/assets/css/magnific-popup.min.css";
import "../public/assets/css/swiper-bundle.min.css";
import "../public/assets/css/style.css";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "American Inspection",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
      {/* <Home/> */}
      {children}
      <Footer/>
      </body>
    </html>
  );
}
