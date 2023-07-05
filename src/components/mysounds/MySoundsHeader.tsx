import { AiOutlinePlus } from "react-icons/ai"
import { FaAngleDown } from "react-icons/fa"
import { Link } from "react-router-dom"

type Props = {
  title: string
}

function MySoundsHeader({ title }: Props) {
  return (
    <div className="flex justify-between">
      <div>
        <Link to="mykits" className="flex flex-row items-center ">
          <div className="mb-[30px]  text-[50px] font-bold font-primary transition duration-500 ease-in-out hover:text-green  cursor-pointer">
            {title}
          </div>
          <div className="text-[30px] pl-[20px] pb-[20px]">
            <FaAngleDown />
          </div>
        </Link>
      </div>
      <a href={"/mysounds/new"}>
        <h1 className="plus text-[50px] mt-[15px]">
          <AiOutlinePlus />
        </h1>
      </a>
    </div>
  )
}

export default MySoundsHeader
