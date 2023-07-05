import { Genre, Producer } from "./SampleTypes"

export interface DrumkitType {
  id: number
  name: string
  producer: Producer
  image: string
  genre: Genre[]
}
