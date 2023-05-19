interface Props {
  text: string
}

const SubmitButton = ({ text }: Props) => {
  return (
    <div className="flex justify-center">
      <button
        type="submit"
        className="font-primary text-white font-bold bg-green rounded  ml-[0px] mt-[40px] h-[35px] w-[103px]"
      >
        {text}
      </button>
    </div>
  )
}

export default SubmitButton
