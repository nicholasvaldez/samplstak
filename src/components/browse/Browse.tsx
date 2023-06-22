import { NavBar } from "../nav/NavBar"
import SampleList from "./SampleList"

export const Browse = () => {
  return (
    <>
      <NavBar />
      <div className="fixed w-screen h-screen bg-[#191414] text-white p-24">
        <div className="mb-[30px]  text-[50px] font-bold font-primary">
          Browse.
        </div>
        <div>
          <SampleList />
        </div>
      </div>
    </>
  )
}
