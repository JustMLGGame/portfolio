export default function Footer() {
  return (
    <footer className='w-full flex justify-center bg-zinc-800 border-red-500 border-t-2 min-h-[50px] items-center'>
      Copyright &copy; {new Date().getFullYear()} - Mikołaj W.
    </footer>
  )
}
