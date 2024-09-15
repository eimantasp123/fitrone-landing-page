import "../styles/globals.css";
import Footer from "./_components/Footer";
import Header from "./_components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`min-h-screen flex flex-col  bg-backgroundDark text-textLight`}>
        <Header />
        <main className="max-w-[1450px] container mx-auto overflow-y-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
