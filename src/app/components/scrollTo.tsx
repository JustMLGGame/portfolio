import Link from 'next/link'
import { FaArrowDown, FaArrowRight, FaArrowUp, FaArrowLeft, FaPhone } from 'react-icons/fa'
// import { useScroll } from "framer-motion";
import { useRef, useState } from 'react';

type ScrollToElement = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string,
  variant?: "down" | "up" | "right" | "left" | "contact",
  style?: defaultStylesProperty,
  threshold?: number,
  iconClassName?: React.HTMLAttributes<HTMLAnchorElement>["className"]
}

type defaultStylesProperty = React.CSSProperties & {
  [key: string]: any
}

// type visibilityProperties = {
//   pointerEvents: defaultStylesProperty["pointerEvents"],
//   opacity: defaultStylesProperty["opacity"],
// }

function ScrollTo({ href, variant, style, threshold, iconClassName, children, ...props }: ScrollToElement) {
  const ref = useRef<HTMLAnchorElement>(null)
  // const { scrollYProgress } = useScroll({ target: ref })
  // const [visibility, setVisibility] = useState<visibilityProperties>({ opacity: 1, pointerEvents: "auto" })

  // scrollYProgress.on("change", (progress) => {
  //   if (!threshold) threshold = 0.9
  //   if (progress >= threshold) {
  //     setVisibility({ opacity: 1, pointerEvents: "auto" })
  //   } else if (progress <= threshold - threshold) {
  //     setVisibility({ opacity: 0, pointerEvents: "none" })
  //   } else {
  //     setVisibility({ opacity: progress, pointerEvents: "auto" })
  //   }
  // })

  const defaultStyle: defaultStylesProperty = {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5rem",
    // pointerEvents: visibility.pointerEvents,
    // opacity: visibility.opacity
  }

  if (!style) style = {}

  for (let property in defaultStyle) {
    if (!(property in style)) {
      style[property] = defaultStyle[property]
    }
  }

  const variantIcons = {
    up: FaArrowUp,
    down: FaArrowDown,
    right: FaArrowRight,
    left: FaArrowLeft,
    contact: FaPhone
  };

  if (!variant) variant = "down"

  let Icon = variantIcons[variant] || FaArrowDown;

  return (
    <>
      <Link ref={ref} href={href} style={style} {...props}>
        {children} <Icon className={iconClassName} />
      </Link>
    </>
  );
}

export default ScrollTo