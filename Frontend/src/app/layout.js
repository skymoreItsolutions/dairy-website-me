import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Topbar from "./Components/Topbar";
import "./globals.css";
import "./fonts.css"
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from "react-redux";
import store from "./store/store";
import ReduxProvider from "./store/ReduxProvider";
import PhoneFixCall from "./Components/PhoneFixCall";
import BottomFixLinks from "./Components/BottomFixLinks";
export default function RootLayout({ children }) {
    
  return (
    <html lang="en">
      <head>
      <title>Gaualla Milk - Pure A2 Milk, Ghee & Dairy Products</title>
    <meta
        name="description"
        content="Gaualla Milk provides fresh and pure A2 milk, desi ghee, paneer, and other premium dairy products. Experience purity and nutrition in every drop."
    />
      </head>
      <body>
        <ReduxProvider>
        <Topbar />
        <Navbar />
        {children}
        <Footer />
        <PhoneFixCall/>
        <BottomFixLinks/>
        </ReduxProvider>
      </body>
    </html>
  );
}
