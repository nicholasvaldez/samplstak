import { useEffect, useState } from "react"
import { getInstruments } from "../managers/instruments/Instruments"
import { Instrument } from "../types/InstrumentTypes"

export const useInstruments = () => {
  const [instruments, setInstruments] = useState<Instrument[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchInstruments = async () => {
      try {
        const data = await getInstruments()
        setInstruments(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err))
      } finally {
        setLoading(false)
      }
    }

    fetchInstruments()
  }, [])

  return { instruments, loading, error }
}
