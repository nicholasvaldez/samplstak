import { useEffect, useState } from "react"
import { getDrumkits } from "../../managers/drumkits/DrumkitManager"
import Drumkit from "./Drumkit"
import { DrumkitType } from "../../types/DrumkitTypes"

function DrumkitsList() {
  const [drumkits, setDrumkits] = useState<DrumkitType[]>([])

  useEffect(() => {
    getDrumkits().then((data) => setDrumkits(data))
  }, [])

  return (
    <div className="max-h-[555px] max-w-[1440px] flex flex-wrap gap-10 ">
      {drumkits.map((d) => (
        <Drumkit
          key={d.id}
          id={d.id}
          name={d.name}
          genreLabel={d.genre.label}
          image={d.image}
        />
      ))}
    </div>
  )
}

export default DrumkitsList
