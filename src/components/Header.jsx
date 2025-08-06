import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <img 
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1754516535777_0.jpg"
              alt="Geossintéticos.Blog" 
              className="h-12 w-auto object-contain"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className={`font-medium transition-colors duration-300 hover:text-primary-900 ${
                isScrolled ? 'text-gray-800' : 'text-gray-800'
              }`}
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`font-medium transition-colors duration-300 hover:text-primary-900 ${
                isScrolled ? 'text-gray-800' : 'text-gray-800'
              }`}
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`font-medium transition-colors duration-300 hover:text-primary-900 ${
                isScrolled ? 'text-gray-800' : 'text-gray-800'
              }`}
            >
              Geossintéticos
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`font-medium transition-colors duration-300 hover:text-primary-900 ${
                isScrolled ? 'text-gray-800' : 'text-gray-800'
              }`}
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('services')}
            className="hidden md:block btn-primary"
          >
            Explorar Conteúdo
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-gray-800'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md"
        >
          <div className="py-4 space-y-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left px-4 py-2 text-gray-800 hover:text-primary-900 font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-gray-800 hover:text-primary-900 font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-4 py-2 text-gray-800 hover:text-primary-900 font-medium"
            >
              Geossintéticos
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-gray-800 hover:text-primary-900 font-medium"
            >
              Contato
            </button>
            <div className="px-4 pt-2">
              <button
                onClick={() => scrollToSection('services')}
                className="w-full btn-primary"
              >
                Explorar Conteúdo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}