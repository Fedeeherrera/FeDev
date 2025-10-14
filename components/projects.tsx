'use client'

import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimationWrapper from './animation-wrapper.tsx'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Plataforma Corporativa de Energía Sustentable',
      description:
        'Sitio web corporativo completamente responsive desarrollado para empresa de energía sustentable. Incluye animaciones fluidas y optimización SEO avanzada para mejorar la visibilidad online.',
      image: 'https://i.postimg.cc/SKTNMY5z/RELP-IMG.png',
      tags: ['Next.js', 'CSS', 'Sanity', 'Framer Motion', 'TypeScript'],
      demoUrl: 'https://www.relp.ngo/',
      repoUrl: 'https://github.com/fedeeherrera',
      codigo: false,
    },
    {
      id: 2,
      title: 'Sistema de Gestión Aeronáutica',
      description: 'Aplicación web para la gestión integral de vuelos y control de combustible del aeroclub. Sistema en desarrollo con dashboard interactivo y base de datos en tiempo real.',
      image: 'https://i.postimg.cc/V5yFP2zC/image.png',
      tags: ['React', 'Tailwind', 'Supabase', 'Framer Motion'],
      demoUrl: 'https://appflo.vercel.app/',
      repoUrl: 'https://github.com/Fedeeherrera/AppFlo',
      codigo: true,
    },
    {
      id: 3,
      title: 'Sitio Web Institucional - Aeroclub Las Flores',
      description: 'Página web institucional completa para el Aeroclub Las Flores con información de servicios, eventos y formularios de contacto integrados.',
      image: 'https://i.postimg.cc/9MX9Dfc4/Screenshot-2025-06-24-234544.png',
      tags: ['WordPress', 'Elementor', 'Gravity Forms', 'CSS'],
      demoUrl: 'https://asociacionaeronauticaazul.com.ar/',
      repoUrl: '#',
      codigo: false,
    },
    {
      id: 4,
      title: 'Guitar LA - E-commerce Musical',
      description:
        'Tienda online especializada en guitarras con carrito de compras funcional, filtros de productos y sistema de gestión de inventario en tiempo real.',
      image: 'https://i.postimg.cc/pXB06zmt/Screenshot-2025-07-13-115153.png',
      tags: ['React', 'CSS', 'Vite', 'Tailwind', 'JavaScript'],
      demoUrl: 'https://guitarlafedev.netlify.app/',
      repoUrl: 'https://github.com/Fedeeherrera/GuitarLA',
      codigo: true,
    },
    {
      id: 5,
      title: 'Portal Ambiental Municipal',
      description:
        'Plataforma web oficial desarrollada para el área de Ambiente de la Municipalidad de Las Flores. Incluye información ambiental, trámites online y recursos educativos.',
      image: 'https://i.postimg.cc/T1X0VC1t/Ambiente-Img.png',
      tags: ['WordPress', 'Elementor', 'Gravity Forms', 'Yoast SEO'],
      demoUrl: 'https://lasflores.gob.ar/ambiente-area/',
      repoUrl: '#',
      codigo: false,
    },
    {
      id: 6,
      title: 'Portal Aeronáutico - Asociación Azul',
      description: 'Sitio web institucional para la Asociación Aeronáutica Azul con galería de imágenes, información de vuelos y sistema de reservas online.',
      image: 'https://i.postimg.cc/v8cXYGXq/Screenshot-2025-06-24-235941.png',
      tags: ['WordPress', 'Elementor', 'Gravity Forms', 'CSS'],
      demoUrl: 'https://asociacionaeronauticaazul.com.ar/',
      repoUrl: '#',
      codigo: false,
    },
    {
      id: 7,
      title: 'Calculadora Inteligente de Propinas',
      description: 'Aplicación web interactiva para el cálculo automático de propinas en restaurantes. Incluye división de cuentas entre comensales y diferentes porcentajes de propina.',
      image: 'https://i.postimg.cc/dtLnG8DH/Calculadora-de-propinas-imagen.png',
      tags: ['React', 'CSS', 'Vite', 'Tailwind', 'JavaScript'],
      demoUrl: 'https://lambent-cendol-74b06f.netlify.app/',
      repoUrl: 'https://github.com/Fedeeherrera/Calculadora-De-Propinas-',
      codigo: true,
    },
  ]

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-white to-palette-light/10 dark:from-palette-darkest dark:to-palette-dark/30"
    >
      <div className="container mx-auto px-4 md:px-6">
        <AnimationWrapper animation="slideUp">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-palette-dark dark:text-white mb-4">
              Mis Proyectos
            </h2>
            <p className="text-lg text-palette-gray dark:text-white dark:opacity-80 max-w-2xl mx-auto">
              Una selección de mis trabajos más recientes y destacados en
              desarrollo frontend.
            </p>
          </div>
        </AnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimationWrapper
              key={project.id}
              animation="slideUp"
              delay={0.2 * (index + 1)}
            >
              <motion.div whileHover={{ scale: 1.05 }}>
                <Card className="overflow-hidden border border-palette-light/30 hover:shadow-lg transition-shadow dark:bg-palette-dark dark:border-palette-medium/30 h-full">
                  <div className="relative w-full h-48 sm:h-56 md:h-48 lg:h-40 xl:h-48">
                    <Image
                      src={project.image || '/placeholder.svg'}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-palette-medium dark:text-white">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="dark:text-white dark:opacity-70">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          className="px-2 py-1 text-xs font-medium rounded-full bg-palette-light/20 text-palette-medium dark:bg-palette-medium dark:text-white"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    {project.codigo && (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-palette-medium text-palette-medium dark:border-white dark:text-white"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Código
                          </a>
                        </Button>
                      </motion.div>
                    )}

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="sm"
                        className="bg-palette-medium hover:bg-palette-dark text-white dark:bg-palette-blue dark:hover:bg-palette-medium"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Demo
                        </a>
                      </Button>
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            </AnimationWrapper>
          ))}
        </div>

        <AnimationWrapper
          animation="fadeIn"
          delay={0.8}
          className="text-center mt-12 pb-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="border-palette-medium text-palette-medium hover:bg-palette-light/10 dark:border-white dark:text-white dark:hover:bg-palette-dark/50"
            >
              <a
                href="https://github.com/fedeeherrera"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver más proyectos en GitHub
              </a>
            </Button>
          </motion.div>
        </AnimationWrapper>
      </div>
    </section>
  )
}
