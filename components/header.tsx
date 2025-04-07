"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Code } from "lucide-react"
import ThemeToggle from "./theme-toggle"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
          <Link href="/" className="text-2xl font-bold text-palette-medium dark:text-palette-light flex items-center">
            <Code className="mr-2 h-6 w-6" />
            <span>Portfolio</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLinks />
            <ThemeToggle />
            <button className="px-4 py-2 bg-palette-medium hover:bg-palette-dark text-white dark:bg-palette-blue dark:hover:bg-palette-medium rounded-md">
              <Link href="#contact">Contáctame</Link>
            </button>
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
        <div className="md:hidden bg-white dark:bg-palette-dark shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLinks mobile onClick={() => setIsMobileMenuOpen(false)} />
            <button className="w-full px-4 py-2 bg-palette-medium hover:bg-palette-dark text-white dark:bg-palette-blue dark:hover:bg-palette-medium rounded-md">
              <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contáctame
              </Link>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

function NavLinks({ mobile = false, onClick = () => {} }) {
  const links = [
    { href: "#about", label: "Sobre mí" },
    { href: "#projects", label: "Proyectos" },
    { href: "#skills", label: "Habilidades" },
  ]

  return links.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className={`font-medium text-palette-medium hover:text-palette-blue dark:text-palette-light dark:hover:text-white transition-colors ${mobile ? "block py-2" : ""}`}
      onClick={onClick}
    >
      {link.label}
    </Link>
  ))
}

