import { Route, Routes } from "react-router-dom"
import Main from "../components/auth/Main"

export const ApplicationViews = () => {
  return (
    <>
      <Routes>
        <Route path="/samplstak" element={<Main />} />
      </Routes>
    </>
  )
}
