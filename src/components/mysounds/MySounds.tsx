import { useEffect, useState } from "react"

import { getMySoundsSamples } from "../../managers/my sounds/MySoundsManager"
import { Samples } from "../browse/Samples"
import { Sample } from "../../types/SampleTypes"

interface Props {
  title: string
}

const MySounds = ({ title }: Props) => {
  const [activeSamples, setActiveSamples] = useState<Sample[]>([])

  useEffect(() => {
    getMySoundsSamples().then((data) => setActiveSamples(data))
  }, [title])

  return (
    <>
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

export default MySounds
