export const getGenres = () => {
  return fetch("https://jellyfish-app-fo654.ondigitalocean.app/genres", {
    headers: {
      Authorization: `Token ${localStorage.getItem("ss_token")}`,
    },
  }).then((response) => response.json())
}
