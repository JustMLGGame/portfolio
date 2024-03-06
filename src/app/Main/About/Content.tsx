import Link from "next/link"
import Heading from "@/app/components/heading"
import { Motion } from "@/app/components/clientSide"
import { useReducedMotion } from "framer-motion"
import Image from "next/image"

function AboutContent({ aboutRef, setAnchor }: { aboutRef: React.RefObject<HTMLDivElement>, setAnchor: React.Dispatch<React.SetStateAction<string>> }) {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDay()

  const myYear = 2004
  const myMonth = 8
  const myDay = 16

  let years = year - myYear;

  const shouldReduceMotion = useReducedMotion()
  if ((day - myDay < 0) || (month - myMonth < 0)) years--;

  return (
    <>
      <div ref={aboutRef} className='max-w-[1390px] w-full relative overflow-hidden'>
        <div className="flex flex-row items-center justify-center">
          <Heading>About me</Heading>
        </div>
        <div className="grid grid-cols-1 py-3 lg:py-5 lg:grid-cols-2 gap-3 w-full">
          <Motion.div
            viewport={{ once: true }}
            initial={{
              x: shouldReduceMotion ? 0 : -200,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1.5,
                ease: [0.17, 0.55, 0.55, 1],
                delay: 1.2
              }
            }} className="text-xl lg:text-2xl w-full flex flex-col gap-5">
            <p>
              I'm {years} years old. I am yet to finish secondary school in the field of computer science.
            </p>
            <p>
              I have done some projects in Next.js, PHP, HTML using JavaScript and CSS, so I have knowledge that I can use to create websites that are responsive and have very clean looking user interface and user experience.
            </p>
            <p>
              I believe I can provide you with great service in fields that I specified, in short web design and web development.
            </p>
            <p>
              Feel free to <Link onClick={() => setAnchor("contact")} className="underline text-red-400" href="#contact">contact me</Link> through available form of contacts listed below!
            </p>
          </Motion.div>
          <Motion.div
            viewport={{ once: true }}
            initial={{
              x: shouldReduceMotion ? 0 : 200,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1.5,
                ease: [0.17, 0.55, 0.55, 1],
                delay: 1.5
              }
            }} className="relative w-full m-auto lg:ml-auto max-w-[700px] h-[425px]">
            <div className="h-full absolute">
            <svg
              viewBox="99.762 46.912 133.611 193.587"
              className="h-full rounded"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg">
                <path
                  className="fill-red-500"
                  d="m 99.761271,47.406033 0.0085,193.089057 133.595379,-0.001 z"/>
            </svg>
            </div>
            {/* <div className="w-2/3 bg-[#c8c8c8] h-[98%] absolute left-1/2 -translate-x-1/2 bottom-0 z-[5] rounded-full"></div> */}
            <Image src={"/heroImage.png"} alt={""} className="object-contain z-10" fill />
            <div className="h-full w-1/3 absolute right-0 rotate-180">
              <svg viewBox="99.762 46.912 133.611 193.587" className="h-full rounded" xmlns="http://www.w3.org/2000/svg">
              <path
                  className="fill-red-500"
                  d="m 99.761271,47.406033 0.0085,193.089057 133.595379,-0.001 z"/>
              </svg>
            </div>
          </Motion.div>
        </div>
      </div >
    </>
  )
}


export default AboutContent