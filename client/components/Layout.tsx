import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import Logo from "/Images/Logo.png";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[min(1236px,calc(100%-2rem))]">
        <nav className="bg-goooey-cream rounded-[38px] shadow-[2px_2px_0_0_#000,-1px_-1px_0_0_#000] border-2 border-black px-3 py-2 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              alt="Goooey Logo"
              className="h-11 w-24"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8 font-bold text-sm">
            <Link to="/" className="hover:opacity-70 transition-opacity">
              Home
            </Link>
            <Link to="/packs" className="hover:opacity-70 transition-opacity">
              Packs
            </Link>
            <Link to="/audition" className="hover:opacity-70 transition-opacity">
              Audition
            </Link>
            <Link to="/contact" className="hover:opacity-70 transition-opacity">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <button className="relative hover:opacity-70 transition-opacity">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center border border-white">
                0
              </span>
            </button>
            <Link
              to="/login"
              className="hidden md:inline-block bg-white px-6 py-2 rounded-full font-bold text-sm shadow-[1px_2px_0_0_#000] hover:translate-y-0.5 hover:shadow-[0px_1px_0_0_#000] transition-all"
            >
              Login
            </Link>
          </div>
        </nav>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div className="fixed top-24 left-4 right-4 bg-goooey-cream rounded-3xl border-2 border-black shadow-[2px_2px_0_0_#000] p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col gap-4 font-bold">
              <Link to="/" className="hover:opacity-70 transition-opacity py-2" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/packs" className="hover:opacity-70 transition-opacity py-2" onClick={() => setMobileMenuOpen(false)}>
                Packs
              </Link>
              <Link to="/audition" className="hover:opacity-70 transition-opacity py-2" onClick={() => setMobileMenuOpen(false)}>
                Audition
              </Link>
              <Link to="/contact" className="hover:opacity-70 transition-opacity py-2" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <Link
                to="/login"
                className="bg-white px-6 py-3 rounded-full font-bold text-center shadow-[1px_2px_0_0_#000] hover:translate-y-0.5 hover:shadow-[0px_1px_0_0_#000] transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Footer() {
  return (
    <footer className="relative bg-goooey-blue  text-white overflow-hidden">
      {/* <div className="absolute inset-0 rounded-t-[800px] border-t-[12px] border-white"></div> */}

      <div className="relative bg-black inset-0 rounded-t-full border-t-[12px] border-white container mx-auto px-6 pt-32 pb-12">
        <div className="text-center mb-16">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/1b89081d89c9fe6a18c7a3ac58e0be1151242671?width=556"
            alt="Goooey"
            className="w-64 h-auto mx-auto"
          />
        </div>

        <button className="absolute right-12 top-24 bg-white text-goooey-blue rounded-full p-5 border-2 border-goooey-blue hover:-translate-y-1 transition-transform">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="rotate-180"
          >
            <path
              d="M12 19V5M12 5L5 12M12 5L19 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 max-w-6xl mx-auto">
          <div className="flex gap-24">
            <div className="space-y-6">
              <Link to="/" className="block hover:opacity-70 transition-opacity">
                Home
              </Link>
              <Link
                to="/about"
                className="block hover:opacity-70 transition-opacity"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block hover:opacity-70 transition-opacity"
              >
                Contact
              </Link>
              <Link
                to="/team"
                className="block hover:opacity-70 transition-opacity"
              >
                Join the team
              </Link>
            </div>
            <div className="space-y-6">
              <Link
                to="/wholesale"
                className="block hover:opacity-70 transition-opacity"
              >
                Wholesale
              </Link>
              <Link
                to="/franchise"
                className="block hover:opacity-70 transition-opacity"
              >
                Franchise
              </Link>
              <Link
                to="/catering"
                className="block hover:opacity-70 transition-opacity"
              >
                Corporate Catering
              </Link>
              <Link
                to="/fundraising"
                className="block hover:opacity-70 transition-opacity"
              >
                Fundraising
              </Link>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <a
              href="#"
              className="bg-white text-black rounded-full w-11 h-11 flex items-center justify-center shadow-[2px_2px_0_0_#0441FE] hover:translate-y-0.5 transition-transform"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
            <a
              href="#"
              className="bg-white text-black rounded-full w-11 h-11 flex items-center justify-center border border-goooey-yellow shadow-[2px_2px_0_0_#0441FE] hover:translate-y-0.5 transition-transform"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="#"
              className="bg-white text-black rounded-full w-11 h-11 flex items-center justify-center border border-goooey-yellow shadow-[2px_2px_0_0_#0441FE] hover:translate-y-0.5 transition-transform"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>

          <div className="space-y-6 md:text-center max-sm:text-left">
            <h3 className="font-display text-2xl ">
              <span className="text-white">Get in </span>
              <span className="text-goooey-yellow">touch</span>
            </h3>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email here..."
                className="w-[439px] max-sm:w-[350px] bg-goooey-blue text-white placeholder:text-white/60 px-6 py-4 rounded-full border-2 border-white shadow-[0_3px_0_0_#000] focus:outline-none focus:ring-2 focus:ring-goooey-yellow"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors">
                Submit
                <span className="inline-block ml-2 bg-black text-white rounded-full w-8 h-8 leading-8 text-center">
                  →
                </span>
              </button>
             
            </div>
             <h2>Designed and Developed by <a href="https://theappforge.co.in" target="_blank" className="text-goooey-yellow unde">AppForge</a>.</h2>
          </div>
        </div>
      </div>
    </footer>
  );
}
