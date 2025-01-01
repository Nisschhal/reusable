import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ReactNode } from "react"

export default function Slide({
  isActive,
  children,
  from,
  distance,
}: {
  isActive: boolean
  children: ReactNode
  from: string
  distance: number
}) {
  // get the value and direction
  const disX = from === "left" ? -1 * distance : distance
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{
            opacity: 0,
            x: disX,
          }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: disX }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
