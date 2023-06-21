import { NavBar } from "../nav/NavBar"
import Dropdown from "./Dropdown"
import SampleList from "./SampleList"

export const Browse = () => {
  return (
    <>
      <NavBar />
      <div className="fixed w-screen h-screen bg-[#191414] text-white p-24">
        <div className="mb-[30px]  text-[50px] font-bold font-primary">
          Browse.
        </div>
        <div className="drops flex justify-between w-[200px] mb-[70px]">
          <fieldset className="drops__field">
            {/* <div>
              <Dropdown
                options={instruments}
                defaultOption="Instrument"
                handleSelect={handleInstrumentSelect}
                defaultValue=""
              />
            </div> */}
          </fieldset>
          <fieldset className="drops__field">
            {/* <div className="ml-5">
              <Dropdown
                options={genres}
                defaultOption="Genre"
                handleSelect={handleGenreSelect}
                defaultValue=""
              />
            </div> */}
          </fieldset>
        </div>
        <div>
          <SampleList />
        </div>
      </div>
    </>
  )
}
