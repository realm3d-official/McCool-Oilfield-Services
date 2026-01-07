import { McCoolLogo } from './McCoolLogo';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-[#555B63]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <McCoolLogo className="h-16" />
        </Link>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className="text-[#B6281A] hover:text-[#E04E2C] transition-colors font-['Montserrat'] text-xl"
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className="text-[#B6281A] hover:text-[#E04E2C] transition-colors font-['Montserrat'] text-xl"
          >
            Services
          </Link>
          <Link 
            to="/about" 
            className="text-[#B6281A] hover:text-[#E04E2C] transition-colors font-['Montserrat'] text-xl"
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="text-[#B6281A] hover:text-[#E04E2C] transition-colors font-['Montserrat'] text-xl"
          >
            Contact
          </Link>
          <Link 
            to="/gallery" 
            className="text-[#B6281A] hover:text-[#E04E2C] transition-colors font-['Montserrat'] text-xl"
          >
            Gallery
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#B6281A] p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#555B63]">
          <div className="px-6 py-4 space-y-4">
            <Link 
              to="/" 
              className="block text-[#B6281A] hover:text-[#E04E2C] transition-colors font-['Montserrat'] text-lg py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="block text-[#B6281A] hover:text-[#E04E2C] transition-colors font-['Montserrat'] text-lg py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="block text-[#B6281A] hover:text-[#E04E2C] transition-colors font-['Montserrat'] text-lg py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block text-[#B6281A] hover:text-[#E04E2C] transition-colors font-['Montserrat'] text-lg py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/gallery" 
              className="block text-[#B6281A] hover:text-[#E04E2C] transition-colors font-['Montserrat'] text-lg py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}