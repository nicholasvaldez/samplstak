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
