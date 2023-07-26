import { useState } from "react"
import { ApplicationViews } from "./views/ApplicationViews"

// Defines the type for the newToken parameter
type TokenType = string

const SamplStak = () => {
  // The useState hook is parameterized with <TokenType>, which means the initial value of token must be of type TokenType, which is string as we defined above.
  const [token, setTokenState] = useState<TokenType>(
    localStorage.getItem("ss_token") || "" // <-- if ss_token is no found, return an empty string
  )
  // newToken must be a string (or TokenType, which we defined above).
  const setToken = (newToken: TokenType) => {
    localStorage.setItem("ss_token", newToken) // <-- Sets ss_token to newToken, ss_token: newToken
    setTokenState(newToken)
  }
  return <ApplicationViews token={token} />
}

export default SamplStak
