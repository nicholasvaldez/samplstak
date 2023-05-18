import { Route, Routes } from "react-router-dom"
import Main from "../components/auth/Main"
import { Login } from "../components/auth/Login"

export const ApplicationViews = () => {
  return (
    <>
      <Routes>
        <Route path="/samplstak" element={<Main />} />
        <Route path="samplstak/login" element={<Login />} />
      </Routes>
    </>
  )
}
