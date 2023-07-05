import { AiOutlineDelete, AiOutlineEdit, AiOutlinePlus } from "react-icons/ai"
import { MdRemoveCircleOutline } from "react-icons/md"
import { useEffect, useState } from "react"
import { Sample } from "../../types/SampleTypes"
import {
  addToCollection,
  removeFromCollection,
} from "../../managers/samples/Collection"
import { useNavigate } from "react-router-dom"
import SampleImage from "../util/SampleImage"
import SamplePlayButton from "../util/SamplePlayButton"
import { deleteSample } from "../../managers/my sounds/MySoundsManager"

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
  const [actualSample, setActualSample] = useState<Sample | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    setActualSample(
      title === "Collection"
        ? (sample as CollectionSample).sample
        : (sample as Sample)
    )
  }, [sample, title])

  const { id, file_url, file_name, producer, instrument, genre, drumkit } =
    actualSample || {}

  const handleAddToCollection = () => {
    if (id === undefined) {
      return console.log("Add to collection Failed")
    }
    addToCollection({ sample: id })
    window.alert(`${file_name} has been added to your Collection!`)
  }

  return (
    <section
      key={`sample--${id}`}
      className="sample font-primary py-5 px-5 sm:px-0 flex justify-evenly items-center bg-[#1E1B1B] text-white mb-1 transition duration-500 ease-in-out hover:bg-[#252525] cursor-pointer"
    >
      <div className="sm:block hidden">
        <SampleImage drumkit={drumkit} producer={producer} />
      </div>
      <div>
        <h2 className=" text-green flex justify-center text-[25px] transition duration-500 ease-in-out hover:text-[#65fc9a] cursor-pointer">
          <SamplePlayButton file_url={file_url} />
        </h2>
      </div>
      <div className="w-[300px]">{file_name}</div>

      <div className="md:block hidden">{instrument?.label}</div>
      <div className="md:block hidden w-[152px]">
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
      ) : title === "My Sounds" ? (
        <>
          <button
            className="lg:block hidden button text-white justify-center text-[25px] transition duration-500 ease-in-out hover:text-green cursor-pointer"
            onClick={() => {
              navigate(`/samplstak/mysounds/edit/${id}`)
            }}
          >
            <AiOutlineEdit />
          </button>
          <button
            className="lg:block hidden button text-white justify-center text-[25px] transition duration-500 ease-in-out hover:text-green cursor-pointer"
            onClick={() =>
              deleteSample(id).then(() => {
                window.location.reload()
              })
            }
          >
            <AiOutlineDelete />
          </button>
        </>
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
