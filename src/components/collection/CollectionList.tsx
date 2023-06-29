import { useEffect, useState } from "react"
import { getCollectionSamples } from "../../managers/samples/Collection"
import { SampleCollection } from "./SampleCollection"
import { NavBar } from "../nav/NavBar"

export const CollectionList = (props) => {
  const [collectionSamples, setCollectionSamples] = useState([])
  const [filteredCollectionSamples, setFilteredCollectionSamples] = useState([])

  useEffect(() => {
    getCollectionSamples().then((data) => setCollectionSamples(data))
  }, [])

  return (
    <>
      <NavBar />
      <div className="fixed w-screen h-screen bg-[#191414] text-white p-24">
        <div className="mb-[30px] text-[50px] font-bold font-primary">
          Collect.
        </div>

        <article className="samples max-h-[440px] rounded-xl overflow-y-auto">
          {collectionSamples.map((s) => (
            <SampleCollection
              trueId={s.id}
              id={s.sample.id}
              fileUrl={s.sample.file_url}
              fileName={s.sample.file_name}
              producer={s.sample.producer.id}
              instrumentId={s.sample.instrument}
              genre={s.sample.genre.map((g) => g.label).join(", ")}
              image={s.sample.drumkit?.image || s.sample.producer.image}
              drumkitId={s.sample.drumkit?.id}
            />
          ))}
        </article>
      </div>
    </>
  )
}
