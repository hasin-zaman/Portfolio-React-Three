import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"

const Hero = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 800px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} inset-0 absolute top-[200px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className={`flex flex-col justify-center items-center ${isMobile ? 'mt-10' : 'mt-5'}`}>
          <div className="w-5 h-5 rounded-full bg-[#7a8cbf]"/>
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#7a8cbf] to-transparent"/>
        </div>
        <div className={`${isMobile ? 'mt-5' : 'mt-0'}`}>
          <h1 className={`${styles.heroHeadText} text-white`}>Hello World! <br />I'm <span className="text-[#7a8cbf]">Hasin.</span></h1>
          <p className={`${styles.heroSubText} text-white mt-2`}>Driven full-stack software engineer with a passion for innovation. ✨✨</p>
          {/* <p className={`${styles.heroSubText} text-white mt-2`}>A passionate full-stack software engineer. {isMobile ? "I believe coding can be an art and coders can be artists. " : ""} ✨✨</p> */}
        </div>
      </div>
      {/* <ComputersCanvas /> */}
      <div className="absolute xs:bottom-10 bottom-32 w-11/12 flex justify-end items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div 
              animate={{y: [0, 24, 0]}}
              transition={{duration: 1.5, repeat: Infinity, repeatType: 'loop'}}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero