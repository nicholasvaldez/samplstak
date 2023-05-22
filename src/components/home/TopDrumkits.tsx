import axios from "axios"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import DrumkitItem from "./DrumkitItem"

interface Drumkit {
  id: number
  name: string
  producer: number
  image: string
  genre: string[]
}

const TopDrumkits = () => {
  const [drumkits, setDrumkits] = useState<Drumkit[]>([])

  useEffect(() => {
    axios
      .get<Drumkit[]>(
        "https://jellyfish-app-fo654.ondigitalocean.app/drumkits?random",
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("ss_token")}`,
          },
        }
      )
      .then((res) => setDrumkits(res.data))
  }, [])

  return (
    <div className="flex">
      <div className="w-[608px] h-[260px] bg-[#1E1B1B] mt-[15px] mr-[10px]">
        <div className="flex flex-start gap-4 font-primary font-bold">
          <div className="mt-[20px] mb-[30px] ml-[50px]">Popular Drumkits</div>
          <div className="mt-[20px] text-[#0D77D9]">
            <Link className="nav-link" to="/samplstak/drumkits">
              view all
            </Link>
          </div>
        </div>
        <div className="text-white ml-[50px] ">
          <ol className="list-decimal   " style={{ listStyle: "initial" }}>
            {drumkits.slice(0, 3).map((dk) => {
              return <DrumkitItem id={dk.id} image={dk.image} name={dk.name} />
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
              return <DrumkitItem id={dk.id} image={dk.image} name={dk.name} />
            })}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default TopDrumkits
