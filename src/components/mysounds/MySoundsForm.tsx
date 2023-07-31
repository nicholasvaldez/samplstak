import { ChangeEvent, useState } from "react"
import { NavBar } from "../nav/NavBar"
import { PostSample, Sample } from "../../types/SampleTypes"
import { addNewSample } from "../../managers/my sounds/MySoundsManager"
import { useNavigate } from "react-router-dom"
import { Instrument } from "../../types/InstrumentTypes"
import FormInstrument from "./FormInstrument"

interface File {
  name: string
}

interface Props {
  token: string
}

function MySoundsForm({ token }: Props) {
  const navigate = useNavigate()

  const [file, setFile] = useState<File>()
  const [selectedInstrument, setSelectedInstrument] = useState<number>(0)
  const [currentSample, setCurrentSample] = useState<PostSample>({
    file_url: "",
    file_name: "",
    instrument: { id: 0, label: "" },
    genre: [],
    drumkit: { id: 0, image: "", name: "" },
  })

  const handleInstrumentChange = (value: number) => {
    setSelectedInstrument(value)
  }

  const wrapperFunc = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
      /* Still need base64 func */
    }
  }

  return (
    <>
      <NavBar />
      <div className=" fixed container--login bg-[#191414] h-screen w-screen text-white p-24">
        <div className="mb-[50px]  text-[50px] font-primary font-bold">
          Add a sample.
        </div>
        <div className="flex justify-center flex-col items-center">
          <div className="form-group font-primary ">
            <input
              type="file"
              multiple
              id="sample_audio"
              onChange={wrapperFunc}
            />
            <input type="hidden" name="sample_id" />
          </div>
          <FormInstrument
            selectedInstrument={selectedInstrument}
            onInstrumentChange={handleInstrumentChange}
          />
          <button
            type="submit"
            className=" text-white font-bold bg-green p-1 px-5 rounded "
            onClick={(evt) => {
              evt.preventDefault()
              const sample = {
                file_url: currentSample.file_url,
                file_name: file?.name,
                instrument: { id: selectedInstrument, label: "" },
              }
              addNewSample(sample).then(() => navigate("samplstak/mysounds"))
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  )
}

export default MySoundsForm
