import { twMerge } from "tailwind-merge"
import clsx from "clsx"
import { ClassValue } from "clsx"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))

}

export default cn