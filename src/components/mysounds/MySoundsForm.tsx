import { ChangeEvent, useEffect, useState } from "react"
import { NavBar } from "../nav/NavBar"
import { useNavigate, useParams } from "react-router-dom"
import { getInstruments } from "../../managers/instruments/Instruments"
import { Genre, Sample } from "../../types/SampleTypes"
import { Instrument } from "../../types/InstrumentTypes"
import { getGenres } from "../../managers/genres/Genre"

interface Props {
  token: string
}

function MySoundsForm({ token }: Props) {
  const [file, setFile] = useState<File | undefined>(undefined)
  const [instrument, setInstruments] = useState<Instrument[]>([])
  const [genres, setGenres] = useState<Genre[]>([])
  const [sampGenres, setSampGenres] = useState(new Set())

  const navigate = useNavigate()
  const { sampleId } = useParams()

  const genArr = (genId: number) => {
    let copy = new Set(sampGenres)
    copy.has(genId) ? copy.delete(genId) : copy.add(genId)
    setSampGenres(copy)
  }

  const [currentSample, setCurrentSample] = useState<Sample>({
    id: 0,
    producer: { id: parseInt(token), full_name: "", image: "" },
    file_url: "",
    file_name: "",
    instrument: { id: 0, label: "" },
    genre: [],
    drumkit: { id: 0, image: "" },
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

  useEffect(() => {
    getInstruments().then((data) => {
      setInstruments(data)
    })
  }, [])

  useEffect(() => {
    getGenres().then((data) => {
      setGenres(data)
    })
  }, [])

  const handleNewPostInfo = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setCurrentSample((prevSample) => ({
      ...prevSample,
      [name]: value,
    }))
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
            <select
              name="instrument"
              className="form-control text-black w-[190px] h-[43px] my-[15px] font-primary rounded"
              value={currentSample.instrument.id}
              onChange={handleNewPostInfo}
            >
              <option value={0}>Instrument</option>
              {instrument.map((i) => (
                <option key={`instrument--${i.id}`} value={i.id}>
                  {i.label}
                </option>
              ))}
            </select>
            <div className="field flex flex-row flex-wrap w-[200px] justify-evenly">
              {genres.map((g) => {
                const foundGenre = currentSample.genre.find(
                  (sampleGenre) => g.id === sampleGenre.id
                )

                return (
                  <div key={`genre--${g.id}`}>
                    <input
                      className="font-primary font mr-[10px] "
                      type="checkbox"
                      name={g.label}
                      defaultChecked={!!foundGenre}
                      onClick={() => genArr(g.id)}
                    />
                    <label htmlFor={g.label}>{g?.label}</label>
                    <br />
                  </div>
                )
              })}
            </div>
          </div>
        </main>
      </>
    </>
  )
}

export default MySoundsForm
