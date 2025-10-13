import { Geist, Geist_Mono, Orbitron, Poppins } from "next/font/google";
import "./globals.css";
import { UserProvider } from "./Context/UserContext";
import Footer from "./component/Footer";

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-orbitron',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'], 
  variable: '--font-poppins',
});

export const metadata = {
  title: "Steps Robotics",
  description: "Powered By Redant Labs Pvt Ltd",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${orbitron.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <UserProvider>{children}</UserProvider>
        <Footer />
      </body>
    </html>
  );
}
