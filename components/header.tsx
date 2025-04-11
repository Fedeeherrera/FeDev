'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Code } from 'lucide-react'
import ThemeToggle from './theme-toggle'
import { motion } from "framer-motion"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Detectar qué sección está activa
      const sections = ["about", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)

    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Ajuste para el header fijo
        behavior: "smooth",
      })
    }

    // Actualizar la URL sin recargar la página
    window.history.pushState({}, "", `#${sectionId}`)
    setActiveSection(sectionId)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white dark:bg-palette-darkest shadow-md py-2"
          : "bg-white/80 dark:bg-palette-darkest/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => handleNavClick(e, "about")}
            className="text-2xl font-bold text-palette-medium dark:text-palette-light flex items-center"
          >
            <Code className="mr-2 h-6 w-6" />
            <span>Portfolio</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLinks activeSection={activeSection} handleNavClick={handleNavClick} />
            <ThemeToggle />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-palette-medium hover:bg-palette-dark text-white dark:bg-palette-blue dark:hover:bg-palette-medium rounded-md"
            >
              <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
                Contáctame
              </a>
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="text-palette-medium dark:text-palette-light"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-palette-dark shadow-lg"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLinks
              mobile
              activeSection={activeSection}
              handleNavClick={handleNavClick}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-full px-4 py-2 bg-palette-medium hover:bg-palette-dark text-white dark:bg-palette-blue dark:hover:bg-palette-medium rounded-md"
            >
              <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
                Contáctame
              </a>
            </motion.button>
          </div>
        </motion.div>
      )}
    </header>
  )
}
interface NavLinksProps {
  mobile?: boolean
  activeSection: string
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void
  onClick?: () => void
}

function NavLinks({ mobile = false, activeSection, handleNavClick, onClick = () => {} }: NavLinksProps) {
  const links = [
    { href: "about", label: "Sobre mí" },
    { href: "projects", label: "Proyectos" },
    { href: "skills", label: "Habilidades" },
  ]

  return links.map((link) => (
    <a
      key={link.href}
      href={`#${link.href}`}
      onClick={(e) => {
        handleNavClick(e, link.href)
        onClick()
      }}
      className={`font-medium transition-colors relative ${mobile ? "block py-2" : ""} ${
        activeSection === link.href
          ? "text-palette-blue dark:text-white"
          : "text-palette-medium hover:text-palette-blue dark:text-palette-light dark:hover:text-white"
      }`}
    >
      {link.label}
      {activeSection === link.href && (
        <motion.span
          layoutId="activeSection"
          className="absolute bottom-[-5px] left-0 right-0 h-[3px] bg-palette-blue dark:bg-white rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </a>
  ))
}