import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import SectionWrapper from '../hoc/SectionWrapper'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I'm a software engineer with experience in Javascript, TypeScript, Dart and
        Java, and expertise in frameworks like Node, React, Next, Express, Nest, Spring and Flutter. 
        I have used both SQL and NoSQL databases in my projects along with BaaS (Firebase) and Git 
        for version controlling. I have brief experience with DevOps tools like Docker, Jenkins, Kubernetes as well.
        These are just the tools I have already worked with. To me solving problems is what actually matters 
        and I'm willing to work on any tool as per requirement.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'> 
        {
          services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service}/>
          ))
        }
      </div>
    </>
  )
}

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='w-full xs:w-[250px]'>
    <motion.div 
      variants={fadeIn('right', 'springy', 0.5*index, 0.75)} 
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{ max: 45, scale: 1, speed: 450}}
        className='bg-tertiary rounded-[20px] min-h-[280px] py-5 px-12 flex flex-col justify-evenly items-center' 
      >
        <img src={icon} alt={title} className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

export default SectionWrapper(About, 'about')