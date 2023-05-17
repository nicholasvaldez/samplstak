import { Link } from "react-router-dom"

interface Props {
  children: string
  link: string
}

const Button = ({ children, link }: Props) => {
  return (
    <Link className="nav-link" to={link}>
      <button
        className="main-button font-primary text-white font-bold bg-green rounded duration-500 hover:bg-[#1cd25c]"
        style={{
          marginLeft: "67px",
          marginTop: "10px",
          height: "35px",
          width: "103px",
        }}
      >
        {children}
      </button>
    </Link>
  )
}

export default Button
