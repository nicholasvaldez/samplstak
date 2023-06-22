export const getinstruments = () => {
  return fetch("https://jellyfish-app-fo654.ondigitalocean.app/instruments", {
    headers: {
      Authorization: `Token ${localStorage.getItem("ss_token")}`,
    },
  }).then((response) => response.json())
}
