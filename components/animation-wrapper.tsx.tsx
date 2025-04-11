"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimationWrapperProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  animation?: "fadeIn" | "slideUp" | "slideIn" | "scale" | "none"
}

export default function AnimationWrapper({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
  animation = "fadeIn",
}: AnimationWrapperProps) {
  const animations = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration, delay, ease: "easeOut" },
    },
    slideUp: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration, delay, ease: "easeOut" },
    },
    slideIn: {
      initial: { opacity: 0, x: -30 },
      animate: { opacity: 1, x: 0 },
      transition: { duration, delay, ease: "easeOut" },
    },
    scale: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration, delay, ease: "easeOut" },
    },
    none: {
      initial: {},
      animate: {},
      transition: {},
    },
  }

  const selectedAnimation = animations[animation]

  return (
    <motion.div
      className={className}
      initial={selectedAnimation.initial}
      whileInView={selectedAnimation.animate}
      transition={selectedAnimation.transition}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  )
}
