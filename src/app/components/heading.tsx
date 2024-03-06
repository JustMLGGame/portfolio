import { useReducedMotion } from 'framer-motion'
import { Motion } from './clientSide'

export default function Heading({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <>
      <Motion.div
        viewport={{ once: true }}
        initial={{
          scaleX: shouldReduceMotion ? 1 : 0.1,
          transformOrigin: "left",
          opacity: 0,
        }}
        whileInView={{
          scaleX: 1,
          opacity: 1,
          transition: {
            duration: 1.5,
            ease: [0.17, 0.55, 0.55, 1],
            delay: 0.5
          }
        }} className="h-0.5 w-full bg-white"></Motion.div>
      <Motion.h2
        viewport={{ once: true }}
        initial={{
          x: shouldReduceMotion ? 0 : -100,
          scale: shouldReduceMotion ? 1 : 0,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          scale: 1,
          opacity: 1,
          transition: {
            duration: 0.9,
            ease: [0.17, 0.55, 0.55, 1],
          }
        }} className="text-2xl lg:text-3xl lg:my-4 text-center font-semibold mx-4 lg:mx-0 max-w-[200px] whitespace-nowrap w-full">{children}</Motion.h2>
      <Motion.div
        viewport={{ once: true }}
        initial={{
          scaleX: shouldReduceMotion ? 1 : 0.1,
          transformOrigin: "right",
          opacity: 0,
        }}
        whileInView={{
          scaleX: 1,
          opacity: 1,
          transition: {
            duration: 1.5,
            ease: [0.17, 0.55, 0.55, 1],
            delay: 0.5
          }
        }} className="h-0.5 w-full bg-white"></Motion.div>
    </>
  )
}
