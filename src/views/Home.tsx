import { Link, useNavigate } from "react-router-dom"
import { NavBar } from "../components/nav/NavBar"
import myImage from "../assets/thagoat.png"
import { useEffect, useState } from "react"
import { getRandomDrumkits } from "../managers/drumkits/DrumkitManager"

export const HomePage = () => {
  const [drumkits, setDrumkits] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getRandomDrumkits().then((data) => setDrumkits(data))
  }, [])

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
            <Link className="nav-link" to="/browse">
              <button className="main-button font-primary text-white font-bold bg-green rounded py-[7px] px-[10px]">
                Browse the catalog
              </button>
            </Link>
          </div>
        </div>
        <div className="flex">
          <div className="w-[608px] h-[260px] bg-[#1E1B1B] mt-[15px] mr-[10px]">
            <div className="flex flex-start gap-4 font-primary font-bold">
              <div className="mt-[20px] mb-[30px] ml-[50px]">
                Popular Drumkits
              </div>
              <div className="mt-[20px] text-[#0D77D9]">
                <Link className="nav-link" to="/drumkits">
                  view all
                </Link>
              </div>
            </div>
            <div className="text-white ml-[50px] ">
              <ol className="list-decimal   " style={{ listStyle: "initial" }}>
                {drumkits.slice(0, 3).map((dk) => {
                  return (
                    <li
                      className=" text-[15px] mb-[10px] flex items-center justify-start"
                      key={dk.id}
                    >
                      <div>
                        <a href={`drumkits/detail/${dk.id}`}>
                          <img
                            src={`http://localhost:8000${dk.image}`}
                            alt="drumkit Image"
                            className=" h-[50px] w-[50px] object-cover mr-[10px]"
                          ></img>
                        </a>
                      </div>
                      {dk.name}
                    </li>
                  )
                })}
              </ol>
            </div>
          </div>
          <div className="w-[608px] h-[260px] bg-[#1E1B1B] mt-[15px] ml-[10px]">
            <div className="text-white ml-[50px] ">
              <ol
                className="list-decimal mt-[15px]  "
                style={{ listStyle: "initial" }}
              >
                {drumkits.slice(3, 7).map((dk) => {
                  return (
                    <li
                      className=" text-[15px] mb-[10px] flex items-center justify-start"
                      key={dk.id}
                    >
                      <div>
                        <a href={`drumkits/detail/${dk.id}`}>
                          <img
                            src={`https://jellyfish-app-fo654.ondigitalocean.app${dk.image}`}
                            alt="drumkit Image"
                            className=" h-[50px] w-[50px] object-cover mr-[10px]"
                          ></img>
                        </a>
                      </div>
                      {dk.name}
                    </li>
                  )
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
