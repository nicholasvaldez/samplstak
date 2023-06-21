import { useEffect, useState } from "react"
import { Sample } from "../../types/SampleTypes"
import { Samples } from "./Samples"
import { getRandomSamples } from "../../managers/samples/SampleManager"

const SampleList = () => {
  const [activeSamples, setActiveSamples] = useState<Sample[]>([])

  useEffect(() => {
    getRandomSamples().then((data) => setActiveSamples(data))
  }, [])

  return (
    <div className="samples max-h-[440px] rounded-xl overflow-y-auto">
      {activeSamples.length === 0 ? (
        <p>Loading...</p> // Render a loading state
      ) : (
        activeSamples.map((s) => <Samples key={s.id} sample={s} />)
      )}
    </div>
  )
}

export default SampleList
