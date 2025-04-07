import { Card, CardContent } from "@/components/ui/card"
import { Code, Layout, Paintbrush, Database, GitBranch, Terminal } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      id: "frontend",
      title: "Desarrollo Frontend",
      icon: <Layout className="h-8 w-8 text-palette-blue dark:text-white" />,
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Vue.js"],
    },
    {
      id: "styling",
      title: "Estilos y Diseño",
      icon: <Paintbrush className="h-8 w-8 text-palette-blue dark:text-white" />,
      skills: ["Tailwind CSS", "Styled Components", "SASS/SCSS", "CSS Modules", "Framer Motion", "Responsive Design"],
    },
    {
      id: "backend",
      title: "Conocimientos Backend",
      icon: <Database className="h-8 w-8 text-palette-blue dark:text-white" />,
      skills: ["Node.js", "Express", "RESTful APIs", "GraphQL", "Firebase", "MongoDB"],
    },
    {
      id: "tools",
      title: "Herramientas y Flujo de Trabajo",
      icon: <Terminal className="h-8 w-8 text-palette-blue dark:text-white" />,
      skills: ["Git", "GitHub", "VS Code", "Figma", "Webpack", "Vite", "Jest", "React Testing Library"],
    },
    {
      id: "practices",
      title: "Buenas Prácticas",
      icon: <Code className="h-8 w-8 text-palette-blue dark:text-white" />,
      skills: [
        "Clean Code",
        "Responsive Design",
        "Accesibilidad Web",
        "SEO",
        "Performance Optimization",
        "Progressive Web Apps",
      ],
    },
    {
      id: "version-control",
      title: "Control de Versiones",
      icon: <GitBranch className="h-8 w-8 text-palette-blue dark:text-white" />,
      skills: ["Git", "GitHub", "GitLab", "Bitbucket", "CI/CD", "GitHub Actions"],
    },
  ]

  return (
    <section id="skills" className="py-16 bg-white dark:bg-palette-darkest">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-palette-dark dark:text-white mb-4">Mis Habilidades</h2>
          <p className="text-lg text-palette-gray dark:text-white dark:opacity-80 max-w-2xl mx-auto">
            Tecnologías y herramientas con las que trabajo para crear experiencias web excepcionales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card
              key={category.id}
              className="border border-palette-light/30 hover:shadow-md transition-shadow dark:bg-palette-dark dark:border-palette-medium/30"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-palette-medium dark:text-white">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-palette-blue dark:bg-white mr-2"></div>
                      <span className="text-palette-gray dark:text-white dark:opacity-80">{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-r from-palette-dark to-palette-medium rounded-lg p-8 text-white text-center dark:from-palette-medium dark:to-palette-blue">
            <h3 className="text-2xl font-bold mb-4">¿Buscas un desarrollador frontend para tu proyecto?</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Estoy disponible para trabajar en proyectos freelance y oportunidades a tiempo completo. ¡Contáctame y
              hablemos sobre cómo puedo ayudarte!
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-white text-palette-medium font-medium rounded-md hover:bg-palette-light/90 transition-colors dark:bg-palette-darkest dark:text-white dark:hover:bg-palette-dark"
            >
              Hablemos
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

