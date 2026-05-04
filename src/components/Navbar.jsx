"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Home, 
  ShoppingBag, 
  User, 
  LogIn, 
  UserPlus, 
  LogOut, 
  Menu, 
  X, 
  ChevronDown 
} from "lucide-react";

export default function Navbar({ user }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper function to close mobile menu on link click
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="w-full bg-white shadow-sm rounded-xl overflow-hidden relative border border-gray-100">
      
      <div className="container mx-auto px-4 lg:px-8 py-3">
        <div className="flex justify-between items-center relative z-10">
          
          {/* 1. LOGO SECTION */}
          <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 leading-none">
                <span className="text-orange-500">Sun</span>Cart
              </h1>
              <p className="text-[10px] text-gray-500 tracking-wider font-medium mt-1">Summer Essentials Store</p>
            </div>
          </Link>

          {/* 2. DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 text-orange-500 font-semibold border-b-2 border-orange-500 pb-1">
              <Home size={18} />
              Home
            </Link>
            <Link href="/products" className="flex items-center gap-2 text-gray-700 font-medium hover:text-orange-500 transition-colors pb-1 border-b-2 border-transparent">
              <ShoppingBag size={18} />
              Products
            </Link>
            <Link href="/profile" className="flex items-center gap-2 text-gray-700 font-medium hover:text-orange-500 transition-colors pb-1 border-b-2 border-transparent">
              <User size={18} />
              My Profile
            </Link>
          </div>

          {/* 3. DESKTOP AUTH SECTION */}
          <div className="hidden lg:flex items-center gap-4">
            {user ? (
              // LOGGED IN
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 cursor-pointer group">
                  <div className="w-10 h-10 rounded-full border-2 border-orange-200 overflow-hidden">
                    <Image 
                      src={user.photoUrl || "https://ui-avatars.com/api/?name=Alpha&background=F97316&color=fff"} 
                      alt="User" 
                      width={40} 
                      height={40} 
                      className="object-cover"
                    />
                  </div>
                  <span className="text-gray-800 font-medium group-hover:text-orange-500 transition-colors">
                    Hello, Alpha <ChevronDown size={16} className="inline" />
                  </span>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 text-orange-500 bg-white border border-orange-200 rounded-lg hover:bg-orange-50 transition-colors font-medium">
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            ) : (
              // LOGGED OUT
              <div className="flex items-center gap-3">
                <Link href="/login" className="flex items-center gap-2 px-5 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors font-medium shadow-md shadow-orange-500/20">
                  <LogIn size={18} />
                  Login
                </Link>
                <Link href="/register" className="flex items-center gap-2 px-5 py-2 text-gray-700 bg-white border border-gray-200 rounded-lg hover:border-orange-500 hover:text-orange-500 transition-colors font-medium">
                  <UserPlus size={18} />
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* 4. MOBILE HAMBURGER BUTTON */}
          <button 
            className="lg:hidden p-2 text-gray-800 hover:text-orange-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* 5. MOBILE MENU DROPDOWN */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 pt-2 pb-6 space-y-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 text-orange-500 font-semibold p-2 rounded-lg bg-orange-50" onClick={closeMenu}>
              <Home size={20} /> Home
            </Link>
            <Link href="/products" className="flex items-center gap-3 text-gray-700 font-medium p-2 hover:bg-gray-50 rounded-lg" onClick={closeMenu}>
              <ShoppingBag size={20} /> Products
            </Link>
            <Link href="/profile" className="flex items-center gap-3 text-gray-700 font-medium p-2 hover:bg-gray-50 rounded-lg" onClick={closeMenu}>
              <User size={20} /> My Profile
            </Link>
          </div>
          
          <div className="border-t border-gray-100 pt-4 mt-2">
            {user ? (
              <button className="flex items-center gap-3 w-full p-2 text-gray-700 font-medium hover:bg-gray-50 rounded-lg" onClick={closeMenu}>
                <LogOut size={20} /> Logout
              </button>
            ) : (
              <div className="flex flex-col gap-3">
                <Link href="/login" className="flex items-center gap-3 w-full p-2 text-gray-700 font-medium hover:bg-gray-50 rounded-lg" onClick={closeMenu}>
                  <LogIn size={20} /> Login
                </Link>
                <Link href="/register" className="flex items-center gap-3 w-full p-2 text-gray-700 font-medium hover:bg-gray-50 rounded-lg" onClick={closeMenu}>
                  <UserPlus size={20} /> Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}