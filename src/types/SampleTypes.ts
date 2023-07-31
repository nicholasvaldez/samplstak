export interface Sample {
  file_url: string
  file_name: string
  instrument: Instrument
  genre: Genre[]
  producer: Producer
  drumkit: Drumkit
}

export interface PostSample {
  file_url: string
  file_name: string
  instrument: Instrument
  genre: Genre[]
  drumkit: Drumkit
}

interface Instrument {
  id: number
  label: string
}
export interface Drumkit {
  id: number
  image: string
  name: string
}

export interface Producer {
  id: number
  full_name: string
  image: string
}

export interface Genre {
  id: number
  label: string
}
