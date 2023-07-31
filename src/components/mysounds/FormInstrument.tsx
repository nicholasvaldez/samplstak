import { useEffect, useState } from "react"
import { Instrument } from "../../types/InstrumentTypes"
import { getInstruments } from "../../managers/instruments/Instruments"

interface FormInstrumentProps {
  selectedInstrument: number
  onInstrumentChange: (value: number) => void
}

const FormInstrument = ({
  selectedInstrument,
  onInstrumentChange,
}: FormInstrumentProps) => {
  const [instrument, setInstruments] = useState<Instrument[]>([])

  useEffect(() => {
    getInstruments().then((data) => {
      setInstruments(data)
    })
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onInstrumentChange(parseInt(event.target.value))
  }

  return (
    <select
      name="instrument"
      className="form-control text-black w-[190px] h-[43px] my-[15px] font-primary rounded"
      value={selectedInstrument}
      onChange={handleChange}
    >
      <option value={0}>Instrument</option>
      {instrument.map((i) => (
        <option key={`instrument--${i.id}`} value={i.id}>
          {i.label}
        </option>
      ))}
    </select>
  )
}

export default FormInstrument
