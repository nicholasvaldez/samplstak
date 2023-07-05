export const getDrumkits = () => {
  return fetch("https://jellyfish-app-fo654.ondigitalocean.app/drumkits", {
    headers: {
      Authorization: `Token ${localStorage.getItem("ss_token")}`,
    },
  }).then((response) => response.json())
}
