import { useState } from "react"
import { NavBar } from "../nav/NavBar"
import { useNavigate, useParams } from "react-router-dom"

function MySoundsForm() {
  const navigate = useNavigate()
  const { sampleId } = useParams()

  return (
    <>
      <>
        <NavBar />
        <main className=" fixed container--login bg-[#191414] h-screen w-screen text-white p-24">
          {sampleId ? (
            <div className="mb-[50px]  text-[50px] font-primary font-bold">
              Edit a sample.
            </div>
          ) : (
            <div className="mb-[50px]  text-[50px] font-primary font-bold">
              Add a sample.
            </div>
          )}
          <section className="flex justify-center flex-col items-center"></section>
        </main>
      </>
    </>
  )
}

export default MySoundsForm
