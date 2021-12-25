import { CustomLink } from "./CustomLink";

export const NavBar = () => {
  return (
    <nav className="sticky top-0 border-b py-3 bg-slate-800">
      <ul className="flex items-center justify-center space-x-12 text-2xl font-medium">
        <li><CustomLink to='/' name='Home' /></li>
        <li><CustomLink to='/about' name='About' /></li>
      </ul>
    </nav>
  )
}
