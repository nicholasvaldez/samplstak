import { useEffect, useState } from "react"
import { Sample } from "../../types/SampleTypes"
import { Samples } from "./Samples"
import {
  getGenreSamples,
  getRandomSamples,
} from "../../managers/samples/SampleManager"
import { getGenres } from "../../managers/genres/Genre"
import Dropdown from "./Dropdown"

interface Genre {
  id: number
  label: string
}

const SampleList = () => {
  const [activeSamples, setActiveSamples] = useState<Sample[]>([])

  const [genres, setGenres] = useState([])
  const [selectedGenre, setSelectedGenre] = useState("")

  useEffect(() => {
    getRandomSamples().then((data) => setActiveSamples(data))
  }, [])

  useEffect(() => {
    getGenres().then((data) => setGenres(data))
  }, [])

  const handleGenreSelect = (genreId: string) => {
    if (genreId !== "") {
      setSelectedGenre(genreId)
      getGenreSamples(parseInt(genreId)).then((data) => setActiveSamples(data))
    } else {
      getRandomSamples().then((data) => setActiveSamples(data))
    }
  }

  return (
    <>
      <div className="ml-5 mb-10 ">
        <Dropdown
          options={genres}
          defaultOption="Genre"
          handleSelect={handleGenreSelect}
          defaultValue=""
        />
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
