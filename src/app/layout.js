import { Federo, Roboto } from "next/font/google";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import "./globals.css";

const federo = Federo({
  subsets: ["latin"],
  weight: ["400"],
});

const roboto = Roboto({
  subsets: ["latin"],
  // weight: ["400"],
});

export const metadata = {
  title: "Note App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${federo.className} ${roboto.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
