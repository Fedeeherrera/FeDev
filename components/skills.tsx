"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  CodeXml,
  Layout,
  Database,
} from "lucide-react"
import AnimationWrapper from "./animation-wrapper.tsx"
import { motion } from "framer-motion"

export default function Skills() {
  const skillCategories = [
    {
      id: "frontend",
      title: "Desarrollo Frontend",
      icon: <Layout className="h-8 w-8 text-palette-blue dark:text-white" />,
      skills: [
        "HTML",
        "CSS3",
        "TypeScript | Javascript",
        "React",
        "Next.js",
        "Astro",
        "Tailwind | Material Ui",
      ],
    },
    {
      id: "backend",
      title: "Conocimientos Backend",
      icon: <Database className="h-8 w-8 text-palette-blue dark:text-white" />,
      skills: ["Node.js", "Express", "API REST", "Nest.js", "MySQL,", "Strapi"],
    },
    {
      id: "conocimientosGenerales",
      title: "Herramientas",
      icon: <CodeXml className="h-8 w-8 text-palette-blue dark:text-white" />,
      skills: [
        "Responsive Design",
        "SEO",
        "Wordpress | Elementor",
        "Figma",
        "Trello",
        "Notion",
        "Adobe Premiere"
      ],
    },
  ]

  return (
    <section id="skills" className="py-16 bg-white dark:bg-palette-darkest">
      <div className="container mx-auto px-4 md:px-6">
        <AnimationWrapper animation="slideUp">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-palette-dark dark:text-white mb-4">
              Mis Habilidades
            </h2>
            <p className="text-lg text-palette-gray dark:text-white dark:opacity-80 max-w-2xl mx-auto">
              Tecnologías y herramientas con las que trabajo para crear
              experiencias web excepcionales.
            </p>
          </div>
        </AnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <AnimationWrapper key={category.id} animation="fadeIn" delay={0.15 * (index + 1)}>
              <motion.div whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}>
                <Card className="border border-palette-light/30 hover:shadow-md transition-shadow dark:bg-palette-dark dark:border-palette-medium/30 h-full">
                  <CardContent className="p-6">
                    <motion.div
                      className="flex items-center gap-4 mb-4"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 * index, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {category.icon}
                      <h3 className="text-xl font-semibold text-palette-medium dark:text-white">
                        {category.title}
                      </h3>
                    </motion.div>
                    <ul className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.li
                          key={skill}
                          className="flex items-center"
                          initial={{ x: -10, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.05 * skillIndex + 0.3, duration: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-2 h-2 rounded-full bg-palette-blue dark:bg-white mr-2"></div>
                          <span className="text-palette-gray dark:text-white dark:opacity-80">
                            {skill}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimationWrapper>
          ))}
        </div>

        <AnimationWrapper animation="scale" delay={0.8} className="mt-16">
          <motion.div
            className="bg-gradient-to-r from-palette-dark to-palette-medium rounded-lg p-8 text-white text-center dark:from-palette-medium dark:to-palette-blue"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              ¿Buscas un desarrollador frontend para tu proyecto?
            </h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Estoy disponible para trabajar en proyectos freelance y
              oportunidades a tiempo completo. ¡Contáctame y hablemos sobre cómo
              puedo ayudarte!
            </p>
            <motion.a
              href="#contact"
              className="inline-block px-6 py-3 bg-white text-palette-medium font-medium rounded-md hover:bg-palette-light/90 transition-colors dark:bg-palette-darkest dark:text-white dark:hover:bg-palette-dark"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault()
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  window.scrollTo({
                    top: contactSection.offsetTop - 80,
                    behavior: "smooth",
                  })
                }
              }}
            >
              Hablemos
            </motion.a>
          </motion.div>
        </AnimationWrapper>
      </div>
    </section>
  )
}