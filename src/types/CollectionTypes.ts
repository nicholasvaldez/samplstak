import { Sample } from "./SampleTypes"

export interface Collection {
  id: number
  producer: number
  sample: Sample[]
}
