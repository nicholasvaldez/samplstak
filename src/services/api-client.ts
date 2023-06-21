import axios from "axios"

const apiClient = axios.create({
  baseURL: "https://jellyfish-app-fo654.ondigitalocean.app",
})

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("ss_token")
  config.headers.Authorization = token ? `Token ${token}` : ""
  return config
})

export default apiClient
