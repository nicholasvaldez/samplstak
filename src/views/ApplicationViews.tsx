import { Route, Routes } from "react-router-dom"
import Main from "../components/auth/Main"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { HomePage } from "./Home"
import { View } from "../components/View"
import MySoundsForm from "../components/mysounds/MySoundsForm"

interface Props {
  token: string
}

export const ApplicationViews = ({ token }: Props) => {
  return (
    <>
      <Routes>
        <Route path="/samplstak" element={<Main />} />
        <Route path="samplstak/login" element={<Login />} />
        <Route path="samplstak/register" element={<Register />} />
        <Route element={<Authorized />}>
          <Route path="samplstak/home" element={<HomePage />} />
          <Route path="samplstak/browse" element={<View title="Browse" />} />
          <Route
            path="samplstak/collection"
            element={<View title="Collection" />}
          />
          <Route
            path="samplstak/mysounds"
            element={<View title="My Sounds" />}
          />
          <Route
            path="samplstak/drumkits"
            element={<View title="Drumkits" />}
          />
          <Route
            path="samplstak/mysounds/new"
            element={<MySoundsForm token={token} />}
          />
        </Route>
      </Routes>
    </>
  )
}
