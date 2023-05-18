interface Props {
  username: string
  password: string
}

export const loginUser = (user: Props) => {
  return fetch("http://localhost:8000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(user),
  }).then((res) => res.json())
}

export const registerUser = (user: Props) => {
  return fetch("http://localhost:8000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(user),
  }).then((res) => res.json())
}
