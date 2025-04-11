'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowDown } from 'lucide-react'
import AnimationWrapper from './animation-wrapper.tsx'
import { motion } from 'framer-motion'

export default function Hero() {
  const handleScrollToProjects = (e : React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 80,
        behavior: 'smooth',
      })
    }
  }
  return (
    <section
      id="about"
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white dark:bg-palette-darkest"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <AnimationWrapper animation="slideIn" delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-palette-dark dark:text-white">
                Desarrollador Web y Editor de Video
              </h1>
            </AnimationWrapper>
            <AnimationWrapper animation="slideIn" delay={0.3}>
              <h2 className="text-2xl md:text-3xl font-semibold text-palette-medium dark:text-white">
                Creando experiencias excepcionales
              </h2>
            </AnimationWrapper>
            <AnimationWrapper animation="slideIn" delay={0.5}>
              <p className="text-lg text-palette-gray dark:text-white dark:opacity-80 max-w-xl">
                Soy Federico Herrera , desarrollador frontend apasionado por
                crear interfaces de usuario atractivas y funcionales. Con
                experiencia en React, Next.js y diseño UI/UX, me especializo en
                construir aplicaciones web modernas y responsivas. Además,
                también me dedico a la edición de video, lo que me permite
                aportar una mirada creativa y audiovisual a mis proyectos.
              </p>
            </AnimationWrapper>
            <AnimationWrapper animation="slideIn" delay={0.5}>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-palette-medium hover:bg-palette-dark text-white dark:bg-palette-blue dark:hover:bg-palette-medium">
                  <a href="#projects">Ver proyectos</a>
                </Button>
                <Button
                  variant="outline"
                  className="border-palette-medium text-palette-medium hover:bg-palette-light/10 dark:border-white dark:text-white dark:hover:bg-palette-dark/50"
                >
                  <a href="#contact">Contactar</a>
                </Button>
              </div>
            </AnimationWrapper>
          </div>
          <AnimationWrapper animation="scale" delay={0.5} className="w-full md:w-1/2 flex justify-center">
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-palette-blue dark:border-palette-medium"
            >
              <Image
                src="https://iili.io/3YcXVN1.jpg"
                alt="Desarrollador Frontend"
                width={320}
                height={320}
                className="object-cover"
              />
            </motion.div>
          </AnimationWrapper>
        </div>
        <AnimationWrapper animation="fadeIn" delay={1.2} className="flex justify-center mt-16">
          <motion.a
            href="#projects"
            onClick={handleScrollToProjects}
            className="animate-bounce p-2 rounded-full bg-palette-light/20 text-palette-medium dark:bg-palette-dark/50 dark:text-white"
            aria-label="Desplazarse hacia abajo"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowDown size={24} />
          </motion.a>
        </AnimationWrapper>
      </div>
    </section>
  )
}
