import Heading from "@/app/components/heading"
import { Motion } from "@/app/components/clientSide";
import { useReducedMotion } from "framer-motion";
import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa6";
import { BiLogoJavascript } from "react-icons/bi";
import { TiCss3, TiHtml5 } from "react-icons/ti";
import { DiMysql, DiPhp } from "react-icons/di";
import { CgFigma } from "react-icons/cg";

const array = [
  <><span className="max-w-fit w-full text-end flex justify-center items-center gap-2"><TbBrandNextjs className="w-8 h-8" />Next.js</span> <span className="flex gap-1"><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar /></span></>,
  <><span className="max-w-fit w-full text-end flex justify-center items-center gap-2"><FaReact className="w-8 h-8" />React</span> <span className="flex gap-1"><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar /></span></>,
  <><span className="max-w-fit w-full text-end flex justify-center items-center gap-2"><BiLogoJavascript className="w-8 h-8" />Javascript</span> <span className="flex gap-1"><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></span></>,
  <><span className="max-w-fit w-full text-end flex justify-center items-center gap-2"><TiCss3 className="w-8 h-8" />CSS</span> <span className="flex gap-1"><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></span></>,
  <><span className="max-w-fit w-full text-end flex justify-center items-center gap-2"><TiHtml5 className="w-8 h-8" />HTML</span> <span className="flex gap-1"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></span></>,
  <><span className="max-w-fit w-full text-end flex justify-center items-center gap-2"><DiPhp className="w-8 h-8" />PHP</span> <span className="flex gap-1"><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></span></>,
  <><span className="max-w-fit w-full text-end flex justify-center items-center gap-2"><CgFigma className="w-7 h-7" />Figma</span> <span className="flex gap-1"><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar /></span></>,
  <><span className="max-w-fit w-full text-end flex justify-center items-center gap-2"><DiMysql className="w-7 h-7" />SQL</span> <span className="flex gap-1"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></span></>
]

function SkillsContent({ skillsRef }: { skillsRef: React.RefObject<HTMLDivElement> }) {
  const shouldReduceMotion = useReducedMotion()
  return (
    <>
      <div ref={skillsRef} className='max-w-[1390px] w-full relative overflow-hidden'>
        <div className="flex flex-row items-center justify-center">
          <Heading>Skills</Heading>
        </div>
        <div className="grid grid-cols-1 py-3 lg:py-5 text-center gap-3 w-full">
          <div
            className="text-xl lg:text-2xl w-full flex flex-col gap-5 items-center">
            <div className="flex flex-wrap justify-center gap-y-4 items-center gap-x-4 min-h-[200px]">
              {array.map((element, index) => {
                return (
                  <Motion.p
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
                        delay: 0.2 * index
                      }
                    }}
                    key={`skill-${index}`}
                    className="flex basis-1/4 h-fit justify-center items-center gap-2">{element}</Motion.p>
                )
              })}
            </div>
          </div>

        </div>
      </div >
    </>
  )
}

export default SkillsContent