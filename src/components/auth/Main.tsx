import { Link } from "react-router-dom"
import myImage from "../../assets/main.png"
import Button from "../util/Button"
// import { NavBar } from "../nav/NavBar"
// import "./main.css"

const Main = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <main>
        <div
          className="fixed h-screen w-screen bg-center bg-cover bg-image "
          style={{ backgroundImage: `url(${myImage})` }}
        >
          <div
            className="font-main font-weight-400 text-xl text-white "
            style={{ paddingTop: "180px", marginLeft: "67px" }}
          >
            STEP INTO THE <br /> DRUM ROOM
          </div>
          <div
            className="font-primary font-weight-400 text-white text-abc"
            style={{ marginLeft: "67px", marginTop: "10px" }}
          >
            explore the worlds best drumkit sample <br /> library and unmatched
            marketplace.
          </div>
          <Button link="register">Get Started</Button>
        </div>
      </main>
    </div>
  )
}

export default Main
