import Link from "next/link";
import { MapPin, Mail, Phone, Truck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-[#6B7280] pt-16 pb-8 border-t border-gray-100 mt-auto">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="flex flex-wrap lg:flex-nowrap gap-10 mb-12">
          
          {/* 1. Branding & About */}
          <div className="w-full lg:w-1/4">
            <Link href="/" className="inline-block mb-4">
              <h2 className="text-2xl font-extrabold text-[#1F2937] leading-none tracking-tight">
                <span className="text-[#F97316]">Sun</span>Cart
              </h2>
              <p className="text-[10px] text-[#F97316] font-bold mt-1 uppercase tracking-widest">Your Ultimate Summer Store</p>
            </Link>
            <p className="text-sm text-[#6B7280] mb-6 leading-relaxed font-medium">
              SunCart brings you the best of summer essentials. Stay cool, 
              stylish & protected all season long.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-orange-50 text-[#F97316] flex items-center justify-center hover:bg-[#F97316] hover:text-white hover:shadow-lg hover:shadow-orange-500/30 transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-orange-50 text-[#F97316] flex items-center justify-center hover:bg-[#F97316] hover:text-white hover:shadow-lg hover:shadow-orange-500/30 transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-orange-50 text-[#F97316] flex items-center justify-center hover:bg-[#F97316] hover:text-white hover:shadow-lg hover:shadow-orange-500/30 transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-orange-50 text-[#F97316] flex items-center justify-center hover:bg-[#F97316] hover:text-white hover:shadow-lg hover:shadow-orange-500/30 transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.1C2.5 7.1 2.4 5.3 3.2 4.5 4.2 3.4 5.4 3.4 6 3.3 8.7 3.1 12 3.1 12 3.1s3.3 0 6 .2c.6.1 1.8.1 2.8 1.2.8.8.9 2.6.9 2.6s.1 2.1.1 4.3v1.6c0 2.2-.1 4.3-.1 4.3s-.1 1.8-.9 2.6c-1 1.1-2.4 1-3 .1-3 .3-6 .3-6 .3s-3.3 0-6-.2c-.6-.1-1.8-.1-2.8-1.2-.8-.8-.9-2.6-.9-2.6S2 13.9 2 11.7V10.1c0-2.2.1-4.3.1-4.3z"/><path d="M9.7 15.5L15.5 11.3 9.7 7.1z"/></svg>
              </a>
            </div>
          </div>

          {/* 2. Shop Links */}
          <div className="w-1/2 sm:w-1/3 lg:w-1/6">
            <h3 className="text-[#1F2937] font-extrabold mb-5 tracking-widest text-xs uppercase">Shop</h3>
            <ul className="space-y-3 text-sm text-[#6B7280] font-medium">
              <li><Link href="/products" className="hover:text-[#F97316] hover:translate-x-1 inline-block transition-transform">All Products</Link></li>
              <li><Link href="#" className="hover:text-[#F97316] hover:translate-x-1 inline-block transition-transform">Sunglasses</Link></li>
              <li><Link href="#" className="hover:text-[#F97316] hover:translate-x-1 inline-block transition-transform">Clothing</Link></li>
              <li><Link href="#" className="hover:text-[#F97316] hover:translate-x-1 inline-block transition-transform">Skincare</Link></li>
              <li><Link href="#" className="hover:text-[#F97316] hover:translate-x-1 inline-block transition-transform">Accessories</Link></li>
              <li><Link href="#" className="text-[#F97316] font-bold hover:translate-x-1 inline-block transition-transform">Summer Sale</Link></li>
            </ul>
          </div>

          {/* 3. Customer Care */}
          <div className="w-1/2 sm:w-1/3 lg:w-1/6">
            <h3 className="text-[#1F2937] font-extrabold mb-5 tracking-widest text-xs uppercase">Customer Care</h3>
            <ul className="space-y-3 text-sm text-[#6B7280] font-medium">
              <li><Link href="#" className="hover:text-[#F97316] hover:translate-x-1 inline-block transition-transform">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-[#F97316] hover:translate-x-1 inline-block transition-transform">Track Order</Link></li>
              <li><Link href="#" className="hover:text-[#F97316] hover:translate-x-1 inline-block transition-transform">Returns & Refunds</Link></li>
              <li><Link href="#" className="hover:text-[#F97316] hover:translate-x-1 inline-block transition-transform">Shipping Policy</Link></li>
              <li><Link href="#" className="hover:text-[#F97316] hover:translate-x-1 inline-block transition-transform">FAQ</Link></li>
            </ul>
          </div>

          {/* 4. Company */}
          <div className="w-full sm:w-1/3 lg:w-1/6">
            <h3 className="text-[#1F2937] font-extrabold mb-5 tracking-widest text-xs uppercase">Company</h3>
            <ul className="space-y-3 text-sm text-[#6B7280] font-medium">
              <li><Link href="#" className="hover:text-[#F97316] hover:translate-x-1 inline-block transition-transform">About Us</Link></li>
              <li><Link href="#" className="hover:text-[#F97316] hover:translate-x-1 inline-block transition-transform">Our Blog</Link></li>
              <li><Link href="#" className="hover:text-[#F97316] hover:translate-x-1 inline-block transition-transform">Careers</Link></li>
              <li><Link href="#" className="hover:text-[#F97316] hover:translate-x-1 inline-block transition-transform">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:text-[#F97316] hover:translate-x-1 inline-block transition-transform">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* 5. Contact Info */}
          <div className="w-full lg:w-1/4">
            <h3 className="text-[#1F2937] font-extrabold mb-5 tracking-widest text-xs uppercase">Contact Us</h3>
            <ul className="space-y-4 text-sm text-[#6B7280] font-medium mb-6">
              <li className="flex items-center gap-3 group cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-[#F97316] transition-colors"><Phone size={14} className="text-[#F97316] group-hover:text-white" /></div>
                <span className="group-hover:text-[#F97316] transition-colors">+880 1500 000000</span>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-[#F97316] transition-colors"><Mail size={14} className="text-[#F97316] group-hover:text-white" /></div>
                <span className="group-hover:text-[#F97316] transition-colors">support@suncart.com</span>
              </li>
              <li className="flex items-start gap-3 group cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center shrink-0 group-hover:bg-[#F97316] transition-colors mt-1"><MapPin size={14} className="text-[#F97316] group-hover:text-white" /></div>
                <span className="leading-relaxed group-hover:text-[#F97316] transition-colors">Banasree,<br/>Dhaka, Bangladesh</span>
              </li>
            </ul>
            
            {/* Shipping Badge */}
            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 flex items-center gap-4 hover:shadow-md hover:border-[#F97316] transition-all">
              <Truck size={28} className="text-[#F97316]" />
              <div>
                <strong className="block text-[#1F2937] text-xs font-extrabold tracking-wider mb-1">FREE SHIPPING</strong>
                <span className="text-[11px] text-[#6B7280] font-medium">On all orders over $99</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section: Copyright & Payments */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium">
          <p>© 2026 SunCart. All rights reserved.</p>

        <p className="text-slate-500 text-sm flex items-center gap-1.5">
        Designed & Built with{" "}
        <span className="text-red-500 animate-pulse">❤️</span>
        {" "}by{" "}
        <a href="https://www.cavelen.com" target="_blank" rel="noopener noreferrer" className="text-sky-400 font-medium hover:underline"
        >
        Cavelen
        </a>
        </p>

          {/* Payment Methods */}
          <div className="flex gap-2 text-[#6B7280] font-bold text-xs tracking-wider">
            <span className="px-3 py-1.5 bg-white rounded-lg shadow-sm border border-gray-200">VISA</span>
            <span className="px-3 py-1.5 bg-white rounded-lg shadow-sm border border-gray-200">MASTERCARD</span>
            <span className="px-3 py-1.5 bg-white rounded-lg shadow-sm border border-gray-200">AMEX</span>
          </div>
        </div>

      </div>
    </footer>
  );
}