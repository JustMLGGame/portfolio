"use client"
import { Motion } from "@/app/components/clientSide"
import ScrollTo from "@/app/components/scrollTo"
import { useReducedMotion } from "framer-motion"

function HomeContent({ homeRef, setAnchor }: { homeRef: React.RefObject<HTMLDivElement>, setAnchor: React.Dispatch<React.SetStateAction<string>> }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div ref={homeRef} className='max-w-[1390px] w-full relative'>
      <div style={{ height: 'calc(100dvh - 4rem)' }} className="w-full flex flex-col items-center justify-center gap-5 relative">
        {/* <div className="w-full h-screen flex flex-col items-center justify-center gap-5 relative"> */}
        <Motion.div
          viewport={{ once: true }}
          initial={{
            y: shouldReduceMotion ? 0 : -200,
            scale: shouldReduceMotion ? 1 : 0,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.9,
              ease: [0.17, 0.55, 0.55, 1],
            }
          }}
          className="w-full">
          <h1 className="text-5xl leading-normal text-center">I'm Mikołaj. <br />I'm website <span className="text-red-300">designer</span> <br /> and <span className="text-blue-300">developer</span>.</h1>
        </Motion.div>
        <Motion.div viewport={{ once: true }}
          initial={{
            y: shouldReduceMotion ? 0 : 100,
            scale: shouldReduceMotion ? 1 : 0,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.9,
              ease: [0.17, 0.55, 0.55, 1],
            }
          }} className="flex gap-3">
          <ScrollTo onClick={() => setAnchor("about")} className="bottom-3 p-4 right-0 bg-transparent border-red-500 border-2 transition-all hover:bg-red-500 group peer" iconClassName="transition-transform group-hover:rotate-90" threshold={0.6} variant={"right"} href="#about" >View more</ScrollTo>
          <ScrollTo onClick={() => setAnchor("contact")} className="bottom-3 p-4 right-0 bg-red-500 hover:bg-transparent border-2 border-red-500 hover:border-white transition-all group peer-hover:bg-transparent" threshold={0.6} variant={"contact"} href="#contact" >Contact</ScrollTo>
        </Motion.div>
        {/* <ScrollTo className="bottom-3 absolute p-4 right-0 rounded bg-red-500 transition-opacity" variant={"up"} href="#about" /> */}

      </div>
    </div>
  )
}

export default HomeContent