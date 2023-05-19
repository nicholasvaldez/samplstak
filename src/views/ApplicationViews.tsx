import { Route, Routes } from "react-router-dom"
import Main from "../components/auth/Main"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"

export const ApplicationViews = () => {
  return (
    <>
      <Routes>
        <Route path="/samplstak" element={<Main />} />
        <Route path="samplstak/login" element={<Login />} />
        <Route path="samplstak/register" element={<Register />} />
      </Routes>
    </>
  )
}
