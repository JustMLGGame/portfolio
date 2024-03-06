"use client"
import { motion } from "framer-motion"
import { ParallaxBanner, ParallaxBannerProps } from "react-scroll-parallax";

export const Motion = motion

export function ParallaxEffect({ children, ...props }: ParallaxBannerProps) {
  return (
    <ParallaxBanner {...props}>
      {children}
    </ParallaxBanner>
  )
}

