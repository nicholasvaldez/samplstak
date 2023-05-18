import { FormEvent, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "../../managers/AuthManager"
import logo from "../../assets/LoginLogo.svg"

export const Login = () => {
  const username = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)
  const invalidDialog = useRef<HTMLDialogElement>(null)
  const navigate = useNavigate()

  const handleLogin = (e: FormEvent) => {
    e.preventDefault()
    const user = {
      username: username.current!.value,
      password: password.current!.value,
    }
    loginUser(user).then((res: any) => {
      if ("valid" in res && res.valid && "token" in res) {
        localStorage.setItem("lu_token", res.token)
        navigate("home")
      } else {
        invalidDialog.current?.showModal()
      }
    })
  }

  return (
    <main className=" fixed container--login bg-darkgrey h-screen w-screen text-white">
      <dialog className="dialog dialog--auth" ref={invalidDialog}>
        <div>Username or password was not valid.</div>
        <button
          className="button--close"
          onClick={(e) => invalidDialog.current?.close()}
        >
          Close
        </button>
      </dialog>
      <section className="flex justify-center flex-col items-center">
        <div className="logo transform scale-[70%] mt-[50px] mb-[100px]">
          <img src={`${logo}`} alt="Logo" />
        </div>
        <form className="form--login " onSubmit={handleLogin}>
          <fieldset className="">
            <input
              ref={username}
              type="username"
              id="username"
              name="username"
              className="form-control pl-[10px] w-[405px] h-[43px] mb-[15px] rounded text-black"
              placeholder="Username"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <input
              ref={password}
              type="password"
              id="password"
              name="password"
              className="form-control pl-[10px] w-[405px] h-[43px] rounded text-black"
              placeholder="Password"
              required
            />
          </fieldset>
          <fieldset
            style={{
              textAlign: "center",
            }}
          >
            <button
              type="submit"
              className="font-primary text-white font-bold bg-green rounded  ml-[0px] mt-[40px] h-[35px] w-[103px]"
            >
              Sign In
            </button>
          </fieldset>
        </form>
        <section className="link--register mt-20 ">
          <Link to="/register" className="text-xs">
            Not a member yet?
          </Link>
        </section>
      </section>
    </main>
  )
}
