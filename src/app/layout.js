import Navbar from "@/components/Navbar"; 
import "./globals.css";

export const metadata = {
  title: "SunCart - Summer Essentials Store",
  description: "Your one-stop shop for summer vibes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#050816] text-white">
        <Navbar />
        
        <main className="pt-20 min-h-screen"> 
          {children}
        </main>
        
      </body>
    </html>
  );
}