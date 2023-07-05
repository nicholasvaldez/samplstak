import { useRef, useState } from "react"
import { FaPlay, FaStop } from "react-icons/fa"
import { Sample } from "../../types/SampleTypes"

interface Props {
  file_url?: string
}

function SamplePlayButton({ file_url }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

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

  const file = file_url
    ? "https://jellyfish-app-fo654.ondigitalocean.app" + file_url
    : ""

  return (
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
  )
}

export default SamplePlayButton
