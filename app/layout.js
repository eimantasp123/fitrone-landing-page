import "../styles/globals.css";
import Footer from "./_components/Footer";
import Header from "./_components/Header";

export const metadata = {
  title: {
    template: "%s | Fitrone",
    default: "Fitrone",
  },
  description: "My website description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`min-h-screen flex flex-col  bg-neutral-900  text-white`}>
        <Header />
        <main className="max-w-7xl container mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
