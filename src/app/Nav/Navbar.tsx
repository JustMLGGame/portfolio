"use client"
import { useState, useRef, useEffect, useContext } from 'react'
import NavLink from './NavLink'
import Link from 'next/link'
import { useMotionValue, useReducedMotion } from "framer-motion"
import { Motion } from '../components/clientSide'
import cn from '../utils/utils'

function Navbar({ variant, anchor, setAnchor }: { variant?: string, anchor: string, setAnchor: React.Dispatch<React.SetStateAction<string>> }) {
  const shouldReduceMotion = useReducedMotion()
  const [isOpen, setIsOpen] = useState(false)

  if (variant == "experimental") {
    const moveRef = useRef<HTMLDivElement>(null)
    const currentRef = useRef<HTMLDivElement>(null)
    const moveX = useMotionValue(0)
    const moveWidth = useMotionValue(0)
    const moveHeight = useMotionValue(0)
    const currentX = useMotionValue(0)
    const currentWidth = useMotionValue(0)
    const currentHeight = useMotionValue(0)

    const handleHover = (event: React.MouseEvent<HTMLLIElement>) => {
      if (!moveRef.current) return;
      const element = event.currentTarget;
      const allElements = element.parentElement?.children
      const parentWidth = element.parentElement?.getBoundingClientRect().width
      const elementsWidth: number[] = []

      if (!allElements || !parentWidth) return
      for (let i = 0; i < allElements.length; i++) {
        elementsWidth.push(allElements[i].getBoundingClientRect().width)
      }

      const allElementsWidth = elementsWidth.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      const elementsGap = (parentWidth - allElementsWidth) / allElements.length

      const currentElementIndex = Array.prototype.indexOf.call(allElements, event.currentTarget);

      let neededWidth = 0

      for (let i = 0; i < currentElementIndex; i++) {
        neededWidth += elementsWidth[i] + elementsGap + elementsGap / 3
      }

      moveX.set(neededWidth)
      moveWidth.set(element.getBoundingClientRect().width)
      moveHeight.set(element.getBoundingClientRect().height)
    };

    useEffect(() => {
      const handleResize = () => {
        handleClick(anchor);
        handleUnhover()
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [anchor]);


    useEffect(() => {
      handleClick(anchor)
      setTimeout(() => {
        handleUnhover()
      }, 75);
    }, [anchor])

    const handleClick = (anchor?: string) => {
      if (!anchor || anchor == "top") anchor = "home"
      if (!anchor.endsWith("Nav")) anchor = anchor.concat("Nav")
      const targetElement = document.getElementById(anchor);
      if (anchor.endsWith("Nav")) anchor = anchor.replace("Nav", "")
      if (targetElement) {
        const parentWidth = targetElement.parentElement?.getBoundingClientRect().width;
        const elementsWidth: number[] = [];
        const allElements = targetElement.parentElement?.children;

        if (!allElements || !parentWidth) return;
        for (let i = 0; i < allElements.length; i++) {
          elementsWidth.push(allElements[i].getBoundingClientRect().width);
        }

        const allElementsWidth = elementsWidth.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const elementsGap = (parentWidth - allElementsWidth) / allElements.length;

        const currentElementIndex = Array.prototype.indexOf.call(allElements, targetElement);

        let neededWidth = 0;

        for (let i = 0; i < currentElementIndex; i++) {
          neededWidth += elementsWidth[i] + elementsGap + elementsGap / 3;
        }

        currentX.set(neededWidth);
        currentWidth.set(targetElement.getBoundingClientRect().width);
        currentHeight.set(targetElement.getBoundingClientRect().height);
      }
    }

    const handleUnhover = () => {
      moveX.set(parseInt(currentRef.current!.style.left));
      moveWidth.set(parseInt(currentRef.current!.style.width));
      moveHeight.set(parseInt(currentRef.current!.style.height));
    };


    return (
      <nav className='sticky top-0 z-50 w-full flex justify-center bg-zinc-800 border-red-500 border-b-2'>
        <div className='flex flex-col justify-between max-w-fit w-full md:pl-2'>
          <div className='relative m-2'>
            <Motion.div
              ref={moveRef}
              style={{ left: moveX, transition: 'left 0.2s ease-out', height: moveHeight, width: moveWidth }}
              className='bg-red-500 absolute rounded opacity-30' />
            <Motion.div
              ref={currentRef}
              style={{ transition: 'left 0.2s ease-out', width: currentWidth, height: currentHeight, left: currentX }}
              className='bg-red-500 absolute rounded' />
            <ul className='flex gap-1'>
              <li onMouseOver={handleHover} onMouseLeave={handleUnhover} id='homeNav' className='py-3 px-2 md:px-4 bg-transparent z-20'>
                <Link onClick={() => setAnchor("home")} href={"#home"}>Home</Link>
              </li>
              <li onMouseOver={handleHover} onMouseLeave={handleUnhover} id='aboutNav' className='py-3 px-2 md:px-4 bg-transparent z-20'>
                <Link onClick={() => setAnchor("about")} href={"#about"}>About</Link>
              </li>
              <li onMouseOver={handleHover} onMouseLeave={handleUnhover} id='skillsNav' className='py-3 px-2 md:px-4 bg-transparent z-20'>
                <Link onClick={() => setAnchor("skills")} href={"#skills"}>Skills</Link>
              </li>
              <li onMouseOver={handleHover} onMouseLeave={handleUnhover} id='contactNav' className='py-3 px-2 md:px-4 bg-transparent z-20'>
                <Link onClick={() => setAnchor("contact")} href={"#contact"}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  } else {
    return (
      <nav className='flex flex-col lg:flex-row sticky w-full top-0 z-50 justify-center px-3 bg-zinc-800 border-b-2 border-red-500'>
        <div className='relative'>
          <div className='h-16 flex justify-center lg:justify-start items-center text-xl lg:text-2xl'>
            <Link className='lg:first-letter:capitalize lg:w-[110px] select-none' href='/'>Mikołaj W</Link>
          </div>
          <div className='lg:hidden absolute right-0 top-1/2 flex items-center justify-center h-full w-16 -translate-y-1/2 select-none cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
            <div className={cn(`w-8 h-1 bg-white before:-top-2 after:top-2 relative before:absolute before:block before:content-[""] before:w-8 before:h-1 before:bg-white after:absolute after:block after:content-[""] after:w-8 after:h-1 after:bg-white`, { "bg-transparent before:top-0 before:-rotate-45 after:top-0 after:rotate-45": isOpen, "before:transition-transform after:transition-transform": !shouldReduceMotion })}></div>
          </div>
        </div>
        <ul className={cn(`flex lg:max-h-fit max-h-0 py-0 h-full lg:h-16 overflow-hidden flex-col lg:flex-row gap-3 max-w-screen-xl w-full justify-center lg:justify-end items-center`, {"max-h-[12rem] py-3": isOpen, "transition-all": !shouldReduceMotion})}>
          <li className='flex w-full lg:block lg:w-fit'>
            <NavLink href="/#home">Home</NavLink>
          </li>
          <li className='flex w-full lg:block lg:w-fit'>
            <NavLink href="/#about">About</NavLink>
          </li>
          <li className='flex w-full lg:block lg:w-fit'>
            <NavLink href="/#skills">Skills</NavLink>
          </li>
          <li className='flex w-full lg:block lg:w-fit justify-center'>
            <NavLink variant="cta" href="/#contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar