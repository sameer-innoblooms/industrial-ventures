import { useAnimation, motion } from "framer-motion"
import { useEffect } from "react"
import { useInView  } from "react-intersection-observer"

export default function AnimationLeft({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const controls = useAnimation()
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    })
  
    useEffect(() => {
      if (inView) {
        controls.start({ x: 0, opacity: 1 })
      }
    }, [controls, inView])
  
    return (
      <motion.div
        ref={ref}
        initial={{ x: -500, opacity: 0 }}
        animate={controls}
        transition={{ duration:1, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    )
  }
  