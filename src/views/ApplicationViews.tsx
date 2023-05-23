import { Route, Routes } from "react-router-dom"
import Main from "../components/auth/Main"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { HomePage } from "./Home"
import { SampleList } from "../components/browse/SampleList"

export const ApplicationViews = () => {
  return (
    <>
      <Routes>
        <Route path="/samplstak" element={<Main />} />
        <Route path="samplstak/login" element={<Login />} />
        <Route path="samplstak/register" element={<Register />} />
        <Route element={<Authorized />}>
          <Route path="samplstak/home" element={<HomePage />} />
          <Route path="samplstak/browse" element={<SampleList />} />
        </Route>
      </Routes>
    </>
  )
}
