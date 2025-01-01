import "./style.css"
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"
import useWindowScrollPosition from "@rehooks/window-scroll-position"
import { useState } from "react"

export default function App() {
  const { y } = useWindowScrollPosition({
    throttle: 500,
  })

  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="App">
      <motion.header
        layoutId="loadup"
        style={{
          justifyContent: y > 20 ? "center" : "flex-start",
        }}
        animate={
          {
            // backgroundColor:
            //   y > 20 ? "var(--headerBackground)" : "var(--background)",
            // color: y > 20 ? "white" : "#00214d",
          }
        }
        onClick={() => setIsLoading(true)}
      >
        <motion.h1 layout layoutId="logo" className="fake-logo">
          Level 2: Scrollup
        </motion.h1>
      </motion.header>

      <main className="layout">
        {/* Loading spiner: fullscreen */}
        {isLoading && (
          <motion.div
            layoutId="loadup"
            onClick={() => setIsLoading(false)}
            className="loading"
          >
            <motion.h2 layoutId="logo">Level 2: Scrollup</motion.h2>
            <p>Is loading ...</p>
            {/* teal: medium speed */}
            <motion.div
              style={{
                width: 100,
                height: 6,
                background: "var(--primary)",
              }}
              initial={{
                x: -100,
              }}
              animate={{
                x: 100,
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.2,
              }}
            />
            {/* danger: small: faster speed */}
            <motion.div
              style={{
                width: 20,
                height: 8,
                background: "var(--danger)",
              }}
              initial={{
                x: -100,
                y: -5,
              }}
              animate={{
                x: 100,
                y: -5,
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1,
              }}
            />
            {/* yellow: long: slow speed */}
            <motion.div
              style={{
                width: 200,
                height: 4,
                background: "var(--yellow)",
              }}
              initial={{
                x: -180,
                y: -5,
              }}
              animate={{
                x: 180,
                y: -5,
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.5,
              }}
            />
          </motion.div>
        )}

        <h3>Grid Gallery</h3>
        <div className="grid gallery">
          {images.map((image, index) => (
            <img
              key={index}
              style={{
                cursor: "pointer",
              }}
              src={`https://picsum.photos/seed/${image}/500/300`}
              alt="placeholder"
            />
          ))}
        </div>
      </main>
    </div>
  )
}

const images = ["1000", "1001", "1002", "1003", "1004", "1005", "1006", "1008"]
