import axios from "axios"
import { useEffect, useState } from "react"
import { Sample } from "../types/SampleTypes"

const useSamples = () => {
  const [samples, setSamples] = useState<Sample[]>([])
  const [error, setError] = useState("")

  useEffect(() => {
    axios
      .get<Sample[]>(
        "https://jellyfish-app-fo654.ondigitalocean.app/samples?random",
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("ss_token")}`,
          },
        }
      )
      .then((res) => setSamples(res.data))
      .catch((err) => setError(err.message))
  }, [])

  return { samples, error }
}

export default useSamples
