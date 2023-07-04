// import { addToCollection } from "../../managers/samples/Collection"
import { FaPlay, FaStop } from "react-icons/fa"
import { AiOutlinePlus } from "react-icons/ai"
import { MdRemoveCircleOutline } from "react-icons/md"

import { useEffect, useRef, useState } from "react"
import { Sample } from "../../types/SampleTypes"
import {
  addToCollection,
  removeFromCollection,
} from "../../managers/samples/Collection"

interface CollectionSample {
  id: number
  producer: number
  sample: Sample
}

type SampleOrCollectionSample = Sample | CollectionSample

interface Props {
  title: string
  sample: SampleOrCollectionSample
  trueId: number
}

export const Samples = ({ sample, title, trueId }: Props) => {
  const audioRef = useRef()
  const [isPlaying, setIsPlaying] = useState(false)
  const [image, setImage] = useState("")
  const [actualSample, setActualSample] = useState<Sample | null>(null)

  useEffect(() => {
    setActualSample(
      title === "Collection"
        ? (sample as CollectionSample).sample
        : (sample as Sample)
    )
  }, [sample, title])

  const { id, file_url, file_name, producer, instrument, genre, drumkit } =
    actualSample || {}

  useEffect(() => {
    if (drumkit && drumkit.image) {
      setImage(drumkit.image)
    } else if (producer && producer.image) {
      setImage(producer.image)
    }
  }, [drumkit, producer])

  const handleAddToCollection = () => {
    addToCollection({ sample: id })
    window.alert(`${file_name} has been added to your Collection!`)
  }

  const handleLogoClick = () => {
    if (audioRef.current) {
      if (!isPlaying) {
        audioRef.current.currentTime = 0 // reset audio to beginning
        audioRef.current.play()
        setIsPlaying(true)
      } else {
        audioRef.current.pause()
        setIsPlaying(false)
      }
    }
  }
  const handleAudioEnded = () => {
    setIsPlaying(false)
  }

  const file = "https://jellyfish-app-fo654.ondigitalocean.app" + file_url
  const imgFile = "https://jellyfish-app-fo654.ondigitalocean.app" + image

  return (
    <section
      key={`sample--${id}`}
      className="sample font-primary w-[1300px] h-[90px] grid grid-cols-9 gap-4  flex items-center bg-[#1E1B1B] text-white mb-[5px] transition duration-500 ease-in-out hover:bg-[#252525] cursor-pointer "
    >
      <div className="col-start-1">
        {drumkit ? (
          <a href={`drumkits/detail/${drumkit.id}`}>
            <img
              src={imgFile}
              alt="Drumkit Image"
              className="ml-[35px] h-[50px] w-[50px] object-cover"
            ></img>
          </a>
        ) : (
          <img
            src={imgFile}
            alt="Producer Image"
            className="ml-[35px] h-[50px] w-[50px] object-cover"
          ></img>
        )}
      </div>
      <h2 className=" col-start-2 text-green flex justify-center text-[25px] transition duration-500 ease-in-out hover:text-[#65fc9a] cursor-pointer">
        <div>
          {isPlaying ? (
            <FaStop
              className="sample__stop-button"
              onClick={() => {
                if (audioRef.current) audioRef.current.pause()
                setIsPlaying(false)
              }}
            />
          ) : (
            <FaPlay className="sample__play-button" onClick={handleLogoClick} />
          )}
          <audio
            ref={audioRef}
            src={file}
            onEnded={handleAudioEnded}
            onPlay={() => {
              setIsPlaying(true)
            }}
            onPause={() => {
              setIsPlaying(false)
            }}
          />
        </div>
      </h2>
      <div className="sample__url col-start-3 col-span-3">{file_name}</div>

      <div className="sample__instrument">{instrument?.label}</div>
      <div className="sample__genre">
        {genre ? (
          genre.map((g) => <span key={g.id}>{g.label + "/ "}</span>)
        ) : (
          <p>no genres</p>
        )}
      </div>
      {title === "Collection" ? (
        <button
          className="button text-white flex justify-center text-[25px] transition duration-500 ease-in-out hover:text-green cursor-pointer"
          onClick={() =>
            removeFromCollection(trueId).then(() => {
              window.location.reload()
            })
          }
        >
          <MdRemoveCircleOutline />
        </button>
      ) : (
        <button
          className="button text-slate flex justify-center font-extrabold text-[30px] "
          onClick={() => {
            handleAddToCollection()
          }}
        >
          <AiOutlinePlus />
        </button>
      )}
    </section>
  )
}
