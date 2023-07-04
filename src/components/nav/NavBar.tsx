import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/Logo.svg"
import NavItem from "./NavItem"

export const NavBar: React.FC = () => {
  const navigate = useNavigate()
  const isUserLoggedIn = localStorage.getItem("ss_token") !== null
  return (
    <div className="bg-[#0b0101] fixed w-full z-10 h-[75px] flex justify-between items-center md:flex md:items-center md:justify-between shadow-xl ">
      <div className="logo ">
        <Link className="navbar__link text-white" to="/samplstak/home">
          <img className="w-[280px] static" src={`${logo}`} alt="Logo" />
        </Link>
      </div>
      {isUserLoggedIn ? (
        <>
          <ul className="md:flex md:items-center">
            <NavItem link="/samplstak/browse" text="Browse" />
            <NavItem link="/samplstak/collection" text="Collection" />
            <NavItem link="/samplstak/drumkits" text="Drumkits" />
            <NavItem link="/samplstak/mysounds" text="My Sounds" />
            <li className="logout-item text-white font-bold  mx-10">
              <button
                className="nav-link fakeLink  px-6 py-2 rounded duration-500 hover:bg-[#170d0d]"
                onClick={() => {
                  localStorage.removeItem("ss_token")
                  navigate("/samplstak")
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </>
      ) : (
        <>
          <ul>
            <li className="login-item text-white font-bold">
              <Link className="nav-link mx-10" to="/samplstak/login">
                Login
              </Link>
            </li>
          </ul>
        </>
      )}
    </div>
  )
}
