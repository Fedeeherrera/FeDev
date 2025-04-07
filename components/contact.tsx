"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulación de envío de formulario
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-b from-palette-light/10 to-white dark:from-palette-dark/30 dark:to-palette-darkest"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-palette-dark dark:text-white mb-4">Contacto</h2>
          <p className="text-lg text-palette-gray dark:text-white dark:opacity-80 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Hablemos! Completa el formulario y me pondré en contacto contigo lo antes
            posible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border border-palette-light/30 dark:bg-palette-dark dark:border-palette-medium/30">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-palette-gray dark:text-white">
                        Nombre
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        required
                        className="border-palette-light/50 focus-visible:ring-palette-blue dark:border-palette-medium dark:bg-palette-dark/80 dark:text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-palette-gray dark:text-white">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        required
                        className="border-palette-light/50 focus-visible:ring-palette-blue dark:border-palette-medium dark:bg-palette-dark/80 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-palette-gray dark:text-white">
                      Asunto
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Asunto de tu mensaje"
                      required
                      className="border-palette-light/50 focus-visible:ring-palette-blue dark:border-palette-medium dark:bg-palette-dark/80 dark:text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-palette-gray dark:text-white">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Escribe tu mensaje aquí..."
                      rows={6}
                      required
                      className="border-palette-light/50 focus-visible:ring-palette-blue dark:border-palette-medium dark:bg-palette-dark/80 dark:text-white"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-palette-medium hover:bg-palette-dark text-white dark:bg-palette-blue dark:hover:bg-palette-medium"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Enviar mensaje
                      </span>
                    )}
                  </Button>

                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-50 text-green-700 rounded-md dark:bg-green-900/20 dark:text-green-300">
                      ¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-50 text-red-700 rounded-md dark:bg-red-900/20 dark:text-red-300">
                      Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border border-palette-light/30 h-full dark:bg-palette-dark dark:border-palette-medium/30">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-semibold text-palette-medium dark:text-white mb-6">
                    Información de contacto
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-palette-blue dark:text-white mt-1 mr-3" />
                      <div>
                        <h4 className="font-medium text-palette-gray dark:text-white">Email</h4>
                        <a
                          href="mailto:contacto@tudominio.com"
                          className="text-palette-medium hover:underline dark:text-white dark:opacity-80"
                        >
                          contacto@tudominio.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-palette-blue dark:text-white mt-1 mr-3" />
                      <div>
                        <h4 className="font-medium text-palette-gray dark:text-white">Teléfono</h4>
                        <a
                          href="tel:+34600000000"
                          className="text-palette-medium hover:underline dark:text-white dark:opacity-80"
                        >
                          +34 600 000 000
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-palette-blue dark:text-white mt-1 mr-3" />
                      <div>
                        <h4 className="font-medium text-palette-gray dark:text-white">Ubicación</h4>
                        <p className="text-palette-gray dark:text-white dark:opacity-80">Madrid, España</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-medium text-palette-gray dark:text-white mb-3">Sígueme en</h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 flex items-center justify-center rounded-full bg-palette-light/20 text-palette-medium hover:bg-palette-medium hover:text-white transition-colors dark:bg-palette-darkest/50 dark:text-white dark:hover:bg-palette-blue"
                      aria-label="GitHub"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 flex items-center justify-center rounded-full bg-palette-light/20 text-palette-medium hover:bg-palette-medium hover:text-white transition-colors dark:bg-palette-darkest/50 dark:text-white dark:hover:bg-palette-blue"
                      aria-label="LinkedIn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 flex items-center justify-center rounded-full bg-palette-light/20 text-palette-medium hover:bg-palette-medium hover:text-white transition-colors dark:bg-palette-darkest/50 dark:text-white dark:hover:bg-palette-blue"
                      aria-label="Twitter"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

