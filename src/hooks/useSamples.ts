import axios from "axios"
import { useEffect, useState } from "react"
import { Sample } from "../types/SampleTypes"

const useSamples = (filter?: "random" | number, isGenre?: boolean) => {
  const [samples, setSamples] = useState<Sample[]>([])

  useEffect(() => {
    let url = "https://jellyfish-app-fo654.ondigitalocean.app/samples"

    if (filter) {
      if (isGenre) {
        url += `?genre=${filter}`
      } else if (filter === "random") {
        url += "?random"
      } else {
        url += `/${filter}`
      }
    }

    axios
      .get(url, {
        headers: {
          Authorization: `Token ${localStorage.getItem("ss_token")}`,
        },
      })
      .then((res) => {
        setSamples(res.data)
      })
  }, [filter, isGenre])
  console.log(samples)
  return samples
}

export default useSamples
