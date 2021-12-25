import { Link, useMatch, useResolvedPath } from "react-router-dom"

export const CustomLink = ({ name, to }) => {

  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link to={to} className={match ? 'underline underline-offset-4 decoration-white' : ''} >{name}</Link>
  )
}
