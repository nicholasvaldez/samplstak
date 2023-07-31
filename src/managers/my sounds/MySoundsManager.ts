import { PostSample, Sample } from "../../types/SampleTypes"

export const getMySoundsSamples = () => {
  return fetch(
    "https://jellyfish-app-fo654.ondigitalocean.app/samples?producer",
    {
      headers: {
        Authorization: `Token ${localStorage.getItem("ss_token")}`,
      },
    }
  ).then((response) => response.json())
}

export const deleteSample = (id?: number) => {
  return fetch(`https://jellyfish-app-fo654.ondigitalocean.app/samples/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${localStorage.getItem("ss_token")}`,
    },
  })
}

export const updateSample = (id: number, sample: any) => {
  return fetch(`https://jellyfish-app-fo654.ondigitalocean.app/samples/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Token ${localStorage.getItem("ss_token")}`,
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(sample),
  })
}

export const addNewSample = (Sample: PostSample) => {
  return fetch("https://jellyfish-app-fo654.ondigitalocean.app/samples", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("ss_token")}`,
    },
    body: JSON.stringify(Sample),
  })
}
