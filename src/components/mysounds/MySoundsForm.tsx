import { ChangeEvent, useState } from "react"
import { NavBar } from "../nav/NavBar"
import { PostSample, Sample } from "../../types/SampleTypes"
import { addNewSample } from "../../managers/my sounds/MySoundsManager"
import { useNavigate } from "react-router-dom"

interface File {
  name: string
}

interface Props {
  token: string
}

function MySoundsForm({ token }: Props) {
  const navigate = useNavigate()

  const [file, setFile] = useState<File>()
  const [currentSample, setCurrentSample] = useState<PostSample>({
    file_url: "",
    file_name: "",
    instrument: { id: 0, label: "" },
    genre: [],
    drumkit: { id: 0, image: "", name: "" },
  })

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
          <button
            type="submit"
            className="font-primary text-white font-bold bg-green rounded"
            style={{
              marginLeft: "40px",
              marginTop: "40px",
              height: "35px",
              width: "103px",
            }}
            onClick={(evt) => {
              evt.preventDefault()
              const sample = {
                file_url: currentSample.file_url,
                file_name: file?.name,
              }
              addNewSample(sample).then(() => navigate("/mysounds"))
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
