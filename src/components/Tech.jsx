import React, { useState, useEffect } from "react"
import { BallCanvas } from "./canvas"
import SectionWrapper from "../hoc/SectionWrapper"
import { technologies } from "../constants"

const Tech = () => {
  const technologiesMobile = ['React JS', 'Node JS', 'Three JS', 'Flutter', 'Git', 'Firebase'];

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
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        isMobile && !technologiesMobile.includes(technology.name) ?
        null :
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon}/>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "");