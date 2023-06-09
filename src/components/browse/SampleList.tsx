import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
// import { getGenres } from "../../managers/genres/Genres"
// import { getInstruments } from "../../managers/instruments/Instruments"
// import {
//   getGenreSamples,
//   getRandomSamples,
//   getSamples,
// } from "../../managers/samples/SampleManager"
import { NavBar } from "../nav/NavBar"
import axios from "axios"
import { Samples } from "./Samples"

interface Sample {
  id: number
  file_url: string
  file_name: string
  instrument: Instrument
  producer: Producer
  drumkit: Drumkit
}

interface Instrument {
  id: number
  label: string
}
interface Drumkit {
  id: number
  image: string
}

interface Producer {
  id: number
  image: string
}

export const SampleList = () => {
  const [samples, setSamples] = useState<Sample[]>([])
  /*   const [filteredSamples, setFilteredSamples] = useState([])
  const [instruments, setInstruments] = useState([])
  const [instId, setInstId] = useState("")
  const [genreId, setGenreId] = useState("")
  const [genres, setGenres] = useState([]) */
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get<Sample[]>(
        "https://jellyfish-app-fo654.ondigitalocean.app/samples?random",
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("ss_token")}`,
          },
        }
      )
      .then((res) => setSamples(res.data))
  }, [])

  /* useEffect(() => {
    if (genreId !== "") {
      getGenreSamples(genreId).then((data) => setFilteredSamples(data))
    } else {
      getRandomSamples().then((data) => setFilteredSamples(data))
    }
  }, [genreId])

  useEffect(() => {
    if (instId !== "") {
      const filteredCopy = samples.filter((s) => s.instrument.id === instId)
      setFilteredSamples(filteredCopy)
    } else {
      getRandomSamples().then((data) => setFilteredSamples(data))
    }
  }, [instId])

  useEffect(() => {
    getInstruments().then((data) => setInstruments(data))
  }, [])

  useEffect(() => {
    getGenres().then((data) => setGenres(data))
  }, []) */

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
                // onChange={(evt) => {
                //   const value = evt.target.value
                //   if (value === "") {
                //     setInstId("")
                //     setFilteredSamples(samples)
                //   } else {
                //     setInstId(parseInt(value))
                //   }
                // }}
              >
                <option value="">{`instrument`}</option>
                {/* {instruments.map((i) => (
                  <>
                    <option key={`instrument--${i.id}`} value={i.id}>
                      {i.label}
                    </option>
                  </>
                ))} */}
              </select>
            </div>
          </fieldset>
          <fieldset className="drops__field">
            <div>
              <select
                className="text-white font-bold rounded text-[20px] p-2 bg-[#1E1B1B] ml-[15px] font-primary transition duration-500 ease-in-out hover:text-darkgrey hover:bg-green cursor-pointer"
                // onChange={(evt) => {
                //   const value = evt.target.value
                //   if (value.length === 0) {
                //     setGenreId("")
                //     setFilteredSamples(samples)
                //   } else {
                //     setGenreId(value)
                //   }
                // }}
              >
                <option value="">{`genre`}</option>
                {/* {genres.map((g) => (
                  <option key={`genre--${g.id}`} value={g.id}>
                    {g.label}
                  </option>
                ))} */}
              </select>
            </div>
          </fieldset>
        </div>

        <article className="samples max-h-[440px] rounded-xl overflow-y-auto">
          {samples.map((s) => (
            <Samples
              id={s.id}
              fileUrl={s.file_url}
              fileName={s.file_name}
              producer={s.producer.id}
              instrument={s.instrument.label}
              //   genre={s.genre.map((g) => g.label).join(", ")}
              image={s.drumkit?.image || s.producer.image}
              drumkitId={s?.drumkit?.id}
            />
          ))}
        </article>
      </div>
    </>
  )
}
