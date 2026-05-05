import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer"; 
import "./globals.css";

export const metadata = {
  title: "SunCart - Summer Essentials Store",
  description: "Your one-stop shop for summer vibes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#FFF7ED] text-[#1F2937]">
        
        <Navbar />
        
        <main className="pt-20 min-h-screen"> 
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}