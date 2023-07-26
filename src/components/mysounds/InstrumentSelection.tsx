import { useEffect, useState } from "react"
import { getInstruments } from "../../managers/instruments/Instruments"
import { Instrument } from "../../types/InstrumentTypes"
import { useInstruments } from "../../hooks/useInstruments"

type Props = {}

function InstrumentSelection({}: Props) {
  const { instruments, loading, error } = useInstruments()

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error loading instruments</div>

  return (
    <select className="text-black font-primary rounded" name="instrument">
      <option value={0}>Instrument</option>
      {instruments.map((i) => (
        <option key={i.id} value={i.id}>
          {i.label}
        </option>
      ))}
    </select>
  )
}

export default InstrumentSelection
