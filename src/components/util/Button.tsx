import { Link } from "react-router-dom"

interface Props {
  children: string
  link: string
}

const Button = ({ children, link }: Props) => {
  return (
    <Link className="nav-link" to={link}>
      <button className="main-button font-primary text-white font-bold bg-green rounded duration-500 hover:bg-[#1cd25c] ml-[67px] mt-[10px] h-[35px] w-[103px]">
        {children}
      </button>
    </Link>
  )
}

export default Button
