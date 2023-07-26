import { ChangeEvent, useState } from "react"
import { NavBar } from "../nav/NavBar"
import { useNavigate, useParams } from "react-router-dom"

interface Props {
  token: string
}

function MySoundsForm({ token }: Props) {
  const [file, setFile] = useState<File | undefined>(undefined)

  const navigate = useNavigate()
  const { sampleId } = useParams()

  const [currentSample, setCurrentSample] = useState({
    id: 0,
    producer: parseInt(token),
    file_url: "",
    file_name: "",
    instrument: 0,
    genre: [],
    drumkit: null,
  })

  const getBase64 = (
    file: File,
    callback: (base64AudioString: string) => void
  ) => {
    const reader = new FileReader()
    reader.addEventListener("load", () => callback(reader.result as string))
    reader.readAsDataURL(file)
  }

  const createAudioString = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) {
      return
    }

    getBase64(files[0], (base64AudioString) => {
      console.log("Base64 of file is", base64AudioString)
      const copy = { ...currentSample }
      copy.file_url = base64AudioString
      setCurrentSample(copy)
    })
  }

  const wrapperFunc = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) {
      return
    }
    createAudioString(e)
    setFile(files[0])
  }

  return (
    <>
      <>
        <NavBar />
        <main className=" fixed container--login bg-[#191414] h-screen w-screen text-white p-24">
          {sampleId ? (
            <div className="mb-[50px]  text-[50px] font-primary font-bold">
              Edit a sample.
            </div>
          ) : (
            <div className="mb-[50px]  text-[50px] font-primary font-bold">
              Add a sample.
            </div>
          )}
          <div className="flex justify-center flex-col items-center">
            <div className="form-group font-primary ">
              <input
                type="file"
                multiple
                id="sample_audio"
                onChange={wrapperFunc}
              />
              <input type="hidden" name="sample_id" value={currentSample.id} />
            </div>
          </div>
        </main>
      </>
    </>
  )
}

export default MySoundsForm
