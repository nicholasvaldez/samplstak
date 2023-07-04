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
import {
  getCollectionSamples,
  getGenreCollectionSamples,
  getInstrumentCollectionSamples,
} from "../../managers/samples/Collection"

interface Props {
  title: string
}

const SampleList = ({ title }: Props) => {
  const [activeSamples, setActiveSamples] = useState<Sample[]>([])

  const [genres, setGenres] = useState([])
  const [instruments, setInstruments] = useState<Instrument[]>([])

  // State on initial render
  useEffect(() => {
    getGenres().then((data) => setGenres(data))
    getInstruments().then((data) => setInstruments(data))
    if (title === "Collection") {
      getCollectionSamples().then((data) => setActiveSamples(data))
    } else {
      getRandomSamples().then((data) => setActiveSamples(data))
    }
  }, [title])

  // Genre filtering logic for both Title and Collection Views
  const handleGenreSelect = (genreId: string) => {
    // Collection View genre filtering logic
    if (title === "Collection") {
      // When genre is selected
      if (genreId !== "") {
        // Set active samples to collection samples filtered by genre
        getGenreCollectionSamples(parseInt(genreId)).then((data) =>
          setActiveSamples(data)
        )
      } else {
        // When no genre is selected, set active samples to unfiltered collection samples
        getCollectionSamples().then((data) => setActiveSamples(data))
      }

      // Browse View filtering logic
    } else {
      // When genre is selected
      if (genreId !== "") {
        // Set active samples to all samples filtered by genre
        getGenreSamples(parseInt(genreId)).then((data) =>
          setActiveSamples(data)
        )
      } else {
        // When no genre is selected, set active samples to a list of all samples in random order
        getRandomSamples().then((data) => setActiveSamples(data))
      }
    }
  }

  // Instrument filtering for both Title and Collection Views
  const handleInstrumentSelect = (instrumendId: string) => {
    // Collection View
    if (title === "Collection") {
      // When instrument is selected
      if (instrumendId !== "") {
        // Get collection samples filtered by selected instrument
        getInstrumentCollectionSamples(parseInt(instrumendId)).then((data) =>
          setActiveSamples(data)
        )
      } else {
        // When unselected, get all collection samples
        getCollectionSamples().then((data) => setActiveSamples(data))
      }
      // Browse View
    } else {
      // When instrument is selected
      if (instrumendId !== "") {
        // Get all samples filteres by selected instrument
        getInstrumentSamples(parseInt(instrumendId)).then((data) =>
          setActiveSamples(data)
        )
      } else {
        // When unselected, get all samples
        getRandomSamples().then((data) => setActiveSamples(data))
      }
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
          <p>Loading...</p>
        ) : (
          activeSamples.map((s) => {
            return <Samples title={title} key={s.id} trueId={s.id} sample={s} />
          })
        )}
      </div>
    </>
  )
}

export default SampleList
