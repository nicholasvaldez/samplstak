interface SampleId {
  sample: number
}

export const addToCollection = (sample: SampleId) => {
  return fetch(
    `https://jellyfish-app-fo654.ondigitalocean.app/collections?producer`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("ss_token")}`,
      },
      body: JSON.stringify(sample),
    }
  )
}

export const getCollectionSamples = () => {
  return fetch(
    `https://jellyfish-app-fo654.ondigitalocean.app/collections?producer`,
    {
      headers: {
        Authorization: `Token ${localStorage.getItem("ss_token")}`,
      },
    }
  ).then((response) => response.json())
}

export const getGenreCollectionSamples = (id: number) => {
  return fetch(
    `https://jellyfish-app-fo654.ondigitalocean.app/collections?producer&genre=${id}`,
    {
      headers: {
        Authorization: `Token ${localStorage.getItem("ss_token")}`,
      },
    }
  ).then((response) => response.json())
}

export const getInstrumentCollectionSamples = (id: number) => {
  return fetch(
    `https://jellyfish-app-fo654.ondigitalocean.app/collections?producer&instrument=${id}`,
    {
      headers: {
        Authorization: `Token ${localStorage.getItem("ss_token")}`,
      },
    }
  ).then((response) => response.json())
}

export const removeFromCollection = (id: number) => {
  return fetch(
    `https://jellyfish-app-fo654.ondigitalocean.app/collections/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Token ${localStorage.getItem("ss_token")}`,
      },
    }
  )
}
