import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapClient from "@/lib/BootstrapClient";
import Navbar from "@/component/Navbar/Navbar";
import "./globals.scss";
import Footer from '@/component/Footer/Footer';
import Main from './Main'
import { ThemeProvider } from './context/Theme';



// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={''}>
        <ThemeProvider>
          <Main>
            <Navbar></Navbar>
            {children}
            <BootstrapClient />
            <Footer></Footer>
          </Main>
        </ThemeProvider>
      </body>
    </html>
  );
}