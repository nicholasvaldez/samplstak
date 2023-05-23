import { Link, useNavigate } from "react-router-dom"
import { NavBar } from "../components/nav/NavBar"
import myImage from "../assets/thagoat.png"
import TopDrumkits from "../components/home/TopDrumkits"
import Button from "../components/util/Button"

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="fixed w-[100vw] h-[100vh] bg-[#191414] text-white pt-[90px]  flex flex-col items-center">
        <div
          className=" h-[379px] w-[1236px] bg-center bg-cover bg-image flex items-center flex-col justify-evenly "
          style={{ backgroundImage: `url(${myImage})` }}
        >
          <div className="font-primary  text-[70px] text-white ">
            Discover Rare Samples.
          </div>
          <div>
            <Link className="nav-link" to="/samplstak/browse">
              <button className="main-button font-primary text-white font-bold bg-green rounded py-[7px] px-[10px]">
                Browse the catalog
              </button>
            </Link>
          </div>
        </div>
        <TopDrumkits />
      </div>
    </>
  )
}
