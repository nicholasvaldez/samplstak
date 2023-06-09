import axios from "axios"

interface Props {
  username: string
  password: string
}

export const loginUser = (user: Props) => {
  return axios
    .post("https://jellyfish-app-fo654.ondigitalocean.app/login", user)
    .then((response) => response.data)
    .catch((error) => {
      console.error("There was an error!", error)
    })
}

export const registerUser = (user: Props) => {
  return axios
    .post("https://jellyfish-app-fo654.ondigitalocean.app/register", user, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("There was an error!", error)
    })
}
