/* interface Props {}

export const getDrumkits = () => {
  return fetch("https://jellyfish-app-fo654.ondigitalocean.app/drumkits", {
    headers: {
      Authorization: `Token ${localStorage.getItem("ss_token")}`,
    },
  }).then((response) => response.json())
} */

/* export const addNewDrumkit = (Drumkit) => {
  return fetch("https://jellyfish-app-fo654.ondigitalocean.app/drumkits", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("ss_token")}`,
    },
    body: JSON.stringify(Drumkit),
  })
}
export const getDrumkitSamples = (id) => {
  return fetch(`https://jellyfish-app-fo654.ondigitalocean.app/samples?drumkit=${id}`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("ss_token")}`,
    },
  }).then((response) => response.json())
} */

/* export const getRandomDrumkits = () => {
  return fetch(
    "https://jellyfish-app-fo654.ondigitalocean.app/drumkits?random",
    {
      headers: {
        Authorization: `Token ${localStorage.getItem("ss_token")}`,
      },
    }
  ).then((response) => response.json())
}
 */
/* export const getProducerDrumkits = () => {
  return fetch("https://jellyfish-app-fo654.ondigitalocean.app/drumkits?producer", {
    headers: {
      Authorization: `Token ${localStorage.getItem("ss_token")}`,
    },
  }).then((response) => response.json())
}

export const deleteDrumkit = (id) => {
  return fetch(`https://jellyfish-app-fo654.ondigitalocean.app/drumkits/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${localStorage.getItem("ss_token")}`,
    },
  })
}
 */
