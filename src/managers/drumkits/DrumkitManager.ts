export const getDrumkits = () => {
  return fetch("https://jellyfish-app-fo654.ondigitalocean.app/drumkits", {
    headers: {
      Authorization: `Token ${localStorage.getItem("ss_token")}`,
    },
  }).then((response) => response.json())
}

export const getDrumkitSamples = (id: number) => {
  return fetch(
    `https://jellyfish-app-fo654.ondigitalocean.app/samples?drumkit=${id}`,
    {
      headers: {
        Authorization: `Token ${localStorage.getItem("ss_token")}`,
      },
    }
  ).then((response) => response.json())
}

export const getProducerDrumkits = () => {
  return fetch(
    "https://jellyfish-app-fo654.ondigitalocean.app/drumkits?producer",
    {
      headers: {
        Authorization: `Token ${localStorage.getItem("ss_token")}`,
      },
    }
  ).then((response) => response.json())
}
