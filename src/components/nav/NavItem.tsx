import { Link } from "react-router-dom"

interface Props {
  link: string
  text: string
}

const NavItem = ({ link, text }: Props) => {
  return (
    <li className="navbar__item mx-4 my-6 md:my-0">
      <Link className="navbar__link text-white" to={link}>
        {text}
      </Link>
    </li>
  )
}

export default NavItem
