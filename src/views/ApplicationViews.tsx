import { Route, Routes } from "react-router-dom"
import Main from "../components/auth/Main"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { HomePage } from "./Home"
import { Browse } from "../components/browse/Browse"
import { CollectionList } from "../components/collection/CollectionList"

export const ApplicationViews = () => {
  return (
    <>
      <Routes>
        <Route path="/samplstak" element={<Main />} />
        <Route path="samplstak/login" element={<Login />} />
        <Route path="samplstak/register" element={<Register />} />
        <Route element={<Authorized />}>
          <Route path="samplstak/home" element={<HomePage />} />
          <Route path="samplstak/browse" element={<Browse />} />
          <Route path="samplstak/collection" element={<CollectionList />} />
        </Route>
      </Routes>
    </>
  )
}
