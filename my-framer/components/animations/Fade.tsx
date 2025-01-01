import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ReactNode } from "react"

export default function Fade({
  isActive,
  children,
}: {
  isActive: boolean
  children: ReactNode
}) {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
