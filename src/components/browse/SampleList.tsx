import { useEffect, useState } from "react"
import { Sample } from "../../types/SampleTypes"
import { Samples } from "./Samples"
import {
  getGenreSamples,
  getInstrumentSamples,
  getRandomSamples,
} from "../../managers/samples/SampleManager"
import { getGenres } from "../../managers/genres/Genre"
import Dropdown from "./Dropdown"
import { Instrument } from "../../types/InstrumentTypes"
import { getInstruments } from "../../managers/instruments/Instruments"

const SampleList = () => {
  const [activeSamples, setActiveSamples] = useState<Sample[]>([])

  const [genres, setGenres] = useState([])
  const [instruments, setInstruments] = useState<Instrument[]>([])

  useEffect(() => {
    getRandomSamples().then((data) => setActiveSamples(data))
    getGenres().then((data) => setGenres(data))
    getInstruments().then((data) => setInstruments(data))
  }, [])

  const handleGenreSelect = (genreId: string) => {
    if (genreId !== "") {
      getGenreSamples(parseInt(genreId)).then((data) => setActiveSamples(data))
    } else {
      getRandomSamples().then((data) => setActiveSamples(data))
    }
  }

  const handleInstrumentSelect = (instrumendId: string) => {
    if (instrumendId !== "") {
      getInstrumentSamples(parseInt(instrumendId)).then((data) =>
        setActiveSamples(data)
      )
    } else {
      getRandomSamples().then((data) => setActiveSamples(data))
    }
  }

  return (
    <>
      <div className="flex ">
        <div className="ml-5 mb-10 ">
          <Dropdown
            options={instruments}
            defaultOption="Instrument"
            handleSelect={handleInstrumentSelect}
            defaultValue=""
          />
        </div>
        <div className="ml-5 mb-10 ">
          <Dropdown
            options={genres}
            defaultOption="Genre"
            handleSelect={handleGenreSelect}
            defaultValue=""
          />
        </div>
      </div>
      <div className="samples max-h-[440px] rounded-xl overflow-y-auto">
        {activeSamples.length === 0 ? (
          <p>Loading...</p> // Render a loading state
        ) : (
          activeSamples.map((s) => <Samples key={s.id} sample={s} />)
        )}
      </div>
    </>
  )
}

export default SampleList
