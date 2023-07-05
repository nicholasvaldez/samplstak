import { useNavigate } from "react-router-dom"

type Props = {
  id: number
  image: string
  name: string
  genreLabel: string
}

function Drumkit({ id, image, name, genreLabel }: Props) {
  const img = "https://jellyfish-app-fo654.ondigitalocean.app" + image
  const navigate = useNavigate()

  return (
    <div key={`card--${id}`} className="w-[130px] h-[173px] w-1/6 ">
      <div
        key={`container--${id}`}
        className="w-[130px] h-[130px]  cursor-pointer "
        onClick={() => {
          navigate(`/drumkits/detail/${id}`)
        }}
      >
        <img key={`image--${id}`} src={img}></img>
      </div>
      <div
        key={`title--${id}`}
        className="h-[60px] w-[130px] bg-[#f8fafc] font-primary pl-[3px] pt-[3px] drop-shadow-2xl  transition duration-500 ease-in-out hover:text-darkgrey  cursor-pointer

    "
      >
        <div
          key={`name--${id}`}
          className="text-black text-[10px] font-extrabold h-[28px]"
        >
          {name}
        </div>
        <div
          key={`genre--${id}`}
          className="pt-[5px] text-black  text-[10px] font-thin"
        >
          {genreLabel}
        </div>
      </div>
    </div>
  )
}
export default Drumkit
