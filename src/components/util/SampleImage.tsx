import { useEffect, useState } from "react"
import { Drumkit, Producer } from "../../types/SampleTypes"

type Props = {
  drumkit?: Drumkit
  producer?: Producer
}

function SampleImage({ drumkit, producer }: Props) {
  const [image, setImage] = useState("")

  useEffect(() => {
    if (drumkit && drumkit.image) {
      setImage(drumkit.image)
    } else if (producer && producer.image) {
      setImage(producer.image)
    }
  }, [drumkit, producer])

  const imgFile = image
    ? "https://jellyfish-app-fo654.ondigitalocean.app" + image
    : ""
  return (
    <div>
      {drumkit ? (
        <a href={`drumkits/detail/${drumkit.id}`}>
          <img
            src={imgFile}
            alt="Drumkit Image"
            className="h-[50px] w-[50px] object-cover"
          ></img>
        </a>
      ) : (
        <img
          src={imgFile}
          alt="Producer Image"
          className="h-[50px] w-[50px] object-cover"
        ></img>
      )}
    </div>
  )
}

export default SampleImage
