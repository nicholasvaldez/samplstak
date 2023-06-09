import MySounds from "./mysounds/MySounds"
import SampleList from "./browse/SampleList"
import { NavBar } from "./nav/NavBar"
import MySoundsHeader from "./mysounds/MySoundsHeader"
import DrumkitsList from "./drumkits/DrumkitsList"

interface Props {
  title: string
}

export const View = ({ title }: Props) => {
  return (
    <>
      <NavBar />
      <div className="fixed w-screen h-screen bg-[#191414] text-white p-24">
        {title === "My Sounds" ? (
          <MySoundsHeader title={title} />
        ) : (
          <div className="mb-[30px]  text-[50px] font-bold font-primary">
            {title}.
          </div>
        )}
        {title === "My Sounds" ? (
          <div>
            <MySounds title={title} />
          </div>
        ) : title === "Drumkits" ? (
          <div>
            <DrumkitsList />
          </div>
        ) : (
          <div>
            <SampleList title={title} />
          </div>
        )}
      </div>
    </>
  )
}
