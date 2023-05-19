interface Props {
  image: string
}

const AuthLogo = ({ image }: Props) => {
  return (
    <div className="logo transform scale-[70%] mt-[50px] mb-[100px]">
      <img src={`${image}`} alt="Logo" />
    </div>
  )
}

export default AuthLogo
