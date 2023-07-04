import SampleList from "./browse/SampleList"
import { NavBar } from "./nav/NavBar"
interface Props {
  title: string
}

export const View = ({ title }: Props) => {
  return (
    <>
      <NavBar />
      <div className="fixed w-screen h-screen bg-[#191414] text-white p-24">
        <div className="mb-[30px]  text-[50px] font-bold font-primary">
          {title}.
        </div>
        <div>
          <SampleList title={title} />
        </div>
      </div>
    </>
  )
}
