import Link from 'next/link'
import cn from '../utils/utils';
interface NavLinkElement extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string,
  variant?: string,
  children?: React.ReactNode
}

function NavLink({ href, variant, children, ...props }: NavLinkElement) {
  const { className, ...rest } = props
  const baseStyles = "hover:text-slate-300 text-lg lg:text-base w-full justify-center lg:justify-start transition-colors flex items-center gap-1 select-none";
  let extraStyles = "";

  switch (variant) {
    case "cta":
      extraStyles = "bg-red-500 py-3 max-w-[200px] px-4 hover:bg-red-600";
      break;
    default:
      break;
  }

  return (
    <Link className={cn(baseStyles, extraStyles, className)} href={href} {...rest}>{children}</Link>
  );
}

export default NavLink;
