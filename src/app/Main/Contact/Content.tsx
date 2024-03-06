import { Motion } from "@/app/components/clientSide"
import Heading from "@/app/components/heading"
import { useReducedMotion } from "framer-motion"
import { FaPhoneAlt } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"

function ContactContent({ contactRef }: { contactRef: React.RefObject<HTMLDivElement> }) {
  const shouldReduceMotion = useReducedMotion()
  return (
    <>
      <div ref={contactRef} className='max-w-[1390px] w-full relative overflow-hidden'>
        <div className="flex flex-row items-center justify-center">
          <Heading>Contact</Heading>
        </div>
        <div className="grid py-3 lg:py-5 gap-3 w-full mb-4 lg:mb-5">
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
            }} className="text-xl lg:text-2xl w-full flex items-center flex-col gap-5">
            <div className="flex justify-center items-center gap-2"><FaPhoneAlt className="w-4 h-4" />Phone: <span className="text-xl">+48 123 456 789</span></div>
            <div className="flex justify-center items-center gap-2"><IoMdMail /> E-mail: <span className="text-xl hover:underline"><a href="mailto:example@mail.com">example@mail.com</a></span></div>
          </Motion.div>
        </div>
      </div >
    </>
  )
}

export default ContactContent