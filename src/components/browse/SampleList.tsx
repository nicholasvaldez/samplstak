import { useNavigate } from "react-router-dom"
// import { getGenres } from "../../managers/genres/Genres"
// import { getInstruments } from "../../managers/instruments/Instruments"
// import {
//   getGenreSamples,
//   getRandomSamples,
//   getSamples,
// } from "../../managers/samples/SampleManager"
import { NavBar } from "../nav/NavBar"
import { Samples } from "./Samples"
import useSamples from "../../hooks/useSamples"
import useInstruments from "../../hooks/useInstruments"
import { useEffect, useState } from "react"
import { Sample } from "../../types/SampleTypes"
import useGenres from "../../hooks/useGenres"

export const SampleList = () => {
  const [activeSamples, setActiveSamples] = useState<Sample[]>([])
  const [instId, setInstId] = useState("")
  const [genreId, setGenreId] = useState("")
  const allSamples = useSamples()
  const randomSamples = useSamples("random")
  const samplesByGenre = useSamples(parseInt(genreId))
  const instruments = useInstruments()
  const genres = useGenres()
  // const genreFilteredSamples = useSamples(parseInt(genreId))

  useEffect(() => {
    if (genreId !== "") {
      setActiveSamples(samplesByGenre)
    } else {
      setActiveSamples(randomSamples)
    }
  }, [genreId])

  useEffect(() => {
    if (instId !== "") {
      const filteredCopy: Sample[] = allSamples.filter(
        (s) => s.instrument.id === parseInt(instId)
      )
      setActiveSamples(filteredCopy)
    } else {
      setActiveSamples(randomSamples)
    }
  }, [instId, allSamples])

  return (
    <>
      <NavBar />
      <div className="fixed w-screen h-screen bg-[#191414] text-white p-24">
        <div className="mb-[30px]  text-[50px] font-bold font-primary">
          Browse.
        </div>
        <div className="drops flex justify-between w-[200px] mb-[70px]">
          <fieldset className="drops__field">
            <div>
              <select
                className=" font-bold rounded text-[20px] p-2 bg-[#1E1B1B] font-primary text-white transition duration-500 ease-in-out hover:text-darkgrey hover:bg-green cursor-pointer"
                onChange={(evt) => {
                  const value = evt.target.value
                  setInstId(value)
                }}
              >
                <option value="">{`Instrument`}</option>
                {instruments.map((i) => (
                  <option key={i.id} value={i.id}>
                    {i.label}
                  </option>
                ))}
              </select>
            </div>
          </fieldset>
          <fieldset className="drops__field">
            <div>
              <select
                className="text-white font-bold rounded text-[20px] p-2 bg-[#1E1B1B] ml-[15px] font-primary transition duration-500 ease-in-out hover:text-darkgrey hover:bg-green cursor-pointer"
                onChange={(evt) => {
                  const value = evt.target.value
                  setGenreId(value)
                }}
              >
                <option value="">{`Genre`}</option>
                {genres.map((g) => (
                  <option key={`genre--${g.id}`} value={g.id}>
                    {g.label}
                  </option>
                ))}
              </select>
            </div>
          </fieldset>
        </div>

        <article className="samples max-h-[440px] rounded-xl overflow-y-auto">
          {activeSamples.length === 0 ? (
            <p>Loading...</p> // Render a loading state
          ) : (
            activeSamples.map((s) => <Samples key={s.id} sample={s} />)
          )}
        </article>
      </div>
    </>
  )
}
