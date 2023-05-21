interface Props {
  username: string
  password: string
}

export const loginUser = (user: Props) => {
  return fetch("https://jellyfish-app-fo654.ondigitalocean.app/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(user),
  }).then((res) => res.json())
}

export const registerUser = (user: Props) => {
  return fetch("https://jellyfish-app-fo654.ondigitalocean.app/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(user),
  }).then((res) => res.json())
}
