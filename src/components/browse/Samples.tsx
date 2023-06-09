// import { addToCollection } from "../../managers/samples/Collection"
import { FaPlay, FaStop } from "react-icons/fa"
import { AiOutlinePlus } from "react-icons/ai"
import { useRef, useState } from "react"

interface Props {
  id: number
  fileUrl: string
  fileName: string
  producer: number
  instrument: string
  genre?: string[]
  image: string
  drumkitId?: number
}

export const Samples = ({
  id,
  fileUrl,
  fileName,
  producer,
  instrument,
  genre,
  image,
  drumkitId,
}: Props) => {
  const audioRef = useRef()
  const [isPlaying, setIsPlaying] = useState(false)

  const handleAddToCollection = () => {
    window.alert(`${fileName} has been added to your Collection!`)
    addToCollection({ sample: id })
  }

  const handleLogoClick = () => {
    if (!isPlaying) {
      if (audioRef.current) {
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

  const file = "https://jellyfish-app-fo654.ondigitalocean.app" + fileUrl
  const imgFile = "https://jellyfish-app-fo654.ondigitalocean.app" + image

  return (
    <section
      key={`sample--${id}`}
      className="sample font-primary w-[1300px] h-[90px] grid grid-cols-9 gap-4  flex items-center bg-[#1E1B1B] text-white mb-[5px] transition duration-500 ease-in-out hover:bg-[#252525] cursor-pointer "
    >
      <div className="col-start-1">
        <a href={`drumkits/detail/${drumkitId}`}>
          <img
            src={imgFile}
            alt="Producer Image"
            className="ml-[35px] h-[50px] w-[50px] object-cover"
          ></img>
        </a>
      </div>
      <h2 className=" col-start-2 text-green flex justify-center text-[25px] transition duration-500 ease-in-out hover:text-[#65fc9a] cursor-pointer">
        <div>
          {isPlaying ? (
            <FaStop
              className="sample__stop-button"
              onClick={() => {
                audioRef.current.pause()
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
      <div className="sample__url col-start-3 col-span-3">{fileName}</div>

      <div className="sample__instrument">{instrument}</div>
      <div className="sample__genre">{genre}</div>
      <button
        className="button text-slate flex justify-center font-extrabold text-[30px] "
        onClick={() => {
          handleAddToCollection()
        }}
      >
        <AiOutlinePlus />
      </button>
    </section>
  )
}
