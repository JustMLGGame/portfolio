"use client"
import Link from 'next/link'
import { FaArrowUp } from 'react-icons/fa'
import { useScroll, useTransform } from "framer-motion";
import { useState } from 'react';
import { Motion } from './clientSide';

type ScrollToTopType = React.SVGAttributes<SVGElement> & {
  href: string,
}

type pointerEvent = React.CSSProperties["pointerEvents"]

function ScrollToTop({ href, ...props }: ScrollToTopType) {
  const { scrollYProgress } = useScroll({})
  const mappedScrollYProgress = useTransform(scrollYProgress, v => v > 0.95 ? 1 : v);
  const [opacity, setOpacity] = useState(0)
  const [pointerEvents, setPointerEvents] = useState<pointerEvent>("auto")

  scrollYProgress.on("change", (progress) => {
    let opacity = 0;
    let pointerEvents: pointerEvent = "none";

    if (progress >= 0.90) {
      opacity = 1;
      pointerEvents = "auto";
    } else if (progress < 0.1) {
      opacity = 0
    } else {
      opacity = 1;
      pointerEvents = "auto";
    }

    setOpacity(opacity);
    setPointerEvents(pointerEvents);
  });

  return (
    <>
      <Link href={href} style={{ opacity: opacity, pointerEvents: pointerEvents }} className='relative transition-opacity'>
        <svg {...props} xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="32" className="fill-red-500" />
          <Motion.circle
            cx="32"
            cy="32"
            r="31"
            className="stroke-2 stroke-white fill-red-500 relative"
            style={{ pathLength: mappedScrollYProgress }}
          />
          <foreignObject x="0" y="0" width="100%" height="100%">
            <div className='flex items-center justify-center w-full h-full rotate-90'>
              <FaArrowUp className='text-3xl' />
            </div>
          </foreignObject>
        </svg>
      </Link>
    </>
  )
}

export default ScrollToTop