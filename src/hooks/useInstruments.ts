import axios from "axios"
import { useEffect, useState } from "react"

interface Instrument {
  id: number
  label: string
}

const useInstruments = () => {
  const [instruments, setInstruments] = useState<Instrument[]>([])

  useEffect(() => {
    axios
      .get("https://jellyfish-app-fo654.ondigitalocean.app/instruments", {
        headers: {
          Authorization: `Token ${localStorage.getItem("ss_token")}`,
        },
      })
      .then((res) => setInstruments(res.data))
  }, [])
  return instruments
}

export default useInstruments
