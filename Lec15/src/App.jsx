import './App.css'
import { motion } from 'motion/react'
import { useRef, useState } from 'react'
function App() {
  const [x, setX] = useState(0)
  const borderRef = useRef()
  const { scrollYProgress } = useScroll 
  return (
    <div>
      <h1>hellooo worlddd</h1>
      {/* <motion.div ref ={borderRef} style={{border: '2px solid black', width: '500px', height:'500px'}}>


      <motion.div 
       className="box"
        initial={{opacity: 0}}
        animate={{opacity: 1, x: x}}
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
        onTapStart={() => {console.log('clicked')}}
        drag
        dragConstraints={borderRef}
      />
      </motion.div> */}
      <motion.div
      style={{
        ScaleX: scrollYProgress,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,

      }}
      />
      <motion.div className='box' transition={{duration}} whileInView={{opacity: 1}} initial={{opacity: 0}}/>
      <motion.div className='box' transition={{duration}} whileInView={{opacity: 1}} initial={{opacity: 0}}/>
      <motion.div className='box' transition={{duration: 1}} whileInView={{opacity: 1, x: -300}} initial={{opacity: 0}}/>
      <motion.div className='box' transition={{duration: 1}} whileInView={{opacity: 1, x: -300}} initial={{opacity: 0}}/>
      <motion.div className='box' transition={{duration: 1}} whileInView={{opacity: 1, x: -300}} initial={{opacity: 0}}/>
      <motion.div className='box' transition={{duration: 1}} whileInView={{opacity: 1, x: -300}} initial={{opacity: 0}}/>
      <motion.div className='box' transition={{duration: 1}} whileInView={{opacity: 1, x: -300}} initial={{opacity: 0}}/>
      <motion.div className='box' transition={{duration: 1}} whileInView={{opacity: 1, x: -300}} initial={{opacity: 0}}/>
      <motion.div className='box' transition={{duration: 1}} whileInView={{opacity: 1, x: -300}} initial={{opacity: 0}}/>

    </div>
  )
}

export default App
