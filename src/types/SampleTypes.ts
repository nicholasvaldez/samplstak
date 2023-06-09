export interface Sample {
  id: number
  file_url: string
  file_name: string
  instrument: Instrument
  producer: Producer
  drumkit: Drumkit
}

interface Instrument {
  id: number
  label: string
}
interface Drumkit {
  id: number
  image: string
}

interface Producer {
  id: number
  image: string
}
