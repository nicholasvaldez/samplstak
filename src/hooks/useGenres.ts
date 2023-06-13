import axios from "axios"
import { useEffect, useState } from "react"

interface Genre {
  id: number
  label: string
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([])

  useEffect(() => {
    axios
      .get("https://jellyfish-app-fo654.ondigitalocean.app/genres", {
        headers: {
          Authorization: `Token ${localStorage.getItem("ss_token")}`,
        },
      })
      .then((res) => setGenres(res.data))
  }, [])
  return genres
}

export default useGenres
