import { ChangeEvent, FormEvent, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { registerUser } from "../../managers/AuthManager"
import logo from "../../assets/RegisterLogo.svg"
import FormInput from "../util/FormInput"
import SubmitButton from "../util/SubmitButton"
import AuthLogo from "../util/AuthLogo"

interface Props {
  username: string
  first_name: string
  last_name: string
  bio: string
  password: string
  image: string
}

export const Register = () => {
  const firstName = useRef<HTMLInputElement>(null)
  const lastName = useRef<HTMLInputElement>(null)
  const username = useRef<HTMLInputElement>(null)
  const bio = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)
  const verifyPassword = useRef<HTMLInputElement>(null)
  const passwordDialog = useRef<HTMLDialogElement>(null)
  const navigate = useNavigate()

  const [newUser, setNewUser] = useState<Props>({
    username: "",
    first_name: "",
    last_name: "",
    bio: "",
    password: "",
    image: "",
  })

  const handleRegister = (e: FormEvent) => {
    e.preventDefault()

    if (password.current?.value === verifyPassword.current?.value) {
      registerUser(newUser).then((res) => {
        if ("token" in res) {
          localStorage.setItem("lu_token", res.token)
          navigate("/samplstak/home")
        }
      })
    } else {
      passwordDialog.current?.showModal()
    }
  }

  const getBase64 = (
    file: File,
    callback: (base64imagestring: string) => void
  ) => {
    const reader = new FileReader()
    reader.onload = (event) => {
      if (event.target && typeof event.target.result === "string") {
        const result = event.target.result
        callback(result)
      }
    }
    reader.readAsDataURL(file)
  }

  const createImgString = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      getBase64(file, (base64imagestring) => {
        console.log("Base64 of file is", base64imagestring)

        if (
          username.current &&
          firstName.current &&
          lastName.current &&
          bio.current &&
          password.current !== null
        ) {
          setNewUser({
            username: username.current.value,
            first_name: firstName.current.value,
            last_name: lastName.current.value,
            bio: bio.current.value,
            password: password.current.value,
            image: base64imagestring,
          })
        }
      })
    }
  }

  return (
    <div className=" fixed bg-darkgrey h-screen w-screen text-white   ">
      <dialog ref={passwordDialog}>
        <div>Passwords do not match</div>
        <button onClick={(e) => passwordDialog.current?.close()}>Close</button>
      </dialog>
      <section className="flex justify-center flex-col items-center">
        <AuthLogo image={logo} />
        <form onSubmit={handleRegister}>
          <div className="flex justify-between">
            <FormInput
              ref={firstName}
              type="text"
              name="firstName"
              width="w-[190px]"
              placeholder="First Name"
            />
            <FormInput
              ref={lastName}
              type="text"
              name="lastName"
              width="w-[190px]"
              placeholder="Last Name"
            />
          </div>
          <FormInput
            ref={username}
            type="text"
            name="username"
            width="w-[405px]"
            placeholder=" Username"
          />
          <FormInput
            ref={password}
            type="text"
            name="password"
            width="w-[405px]"
            placeholder="Password"
          />
          <FormInput
            ref={verifyPassword}
            type="text"
            name="verifyPassword"
            width="w-[405px]"
            placeholder="Verify Password"
          />
          <FormInput
            ref={bio}
            type="text"
            name="bio"
            width="w-[405px]"
            placeholder="Tell us a little bit about yourself!"
          />
          <fieldset>
            <div className=" font-primary ">
              <input
                type="file"
                id="producer_image"
                onChange={createImgString}
              />
              <input type="hidden" name="producer_image" />
            </div>
          </fieldset>
          <SubmitButton text="Register" />
        </form>
        <section className="link--register mt-10">
          Already registered? <Link to="/login">Login</Link>
        </section>
      </section>
    </div>
  )
}
