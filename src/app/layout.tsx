import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Lato } from "@next/font/google";

import "./globals.scss";
import "./layout.scss";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
  <html lang="en">
    <head />

    <body className={lato.className}>
      <div className="container">
        <Header />
        <div className="main">{children}</div>
        <Footer />
      </div>
    </body>
  </html>
);

export default RootLayout;
