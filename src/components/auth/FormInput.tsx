interface Props {
  ref: React.RefObject<HTMLInputElement>
  type: string
  id: string
  name: string
  placeholder: string
}

const FormInput = ({ ref, type, id, name, placeholder }: Props) => {
  return (
    <fieldset>
      <input
        ref={ref}
        type={type}
        id={id}
        name={name}
        className="form-control pl-[10px] w-[405px] h-[43px] rounded text-black my-4"
        placeholder={placeholder}
        required
      />
    </fieldset>
  )
}

export default FormInput
