import React, { forwardRef, Ref } from "react"

interface Props {
  type?: string
  id?: string
  name: string
  placeholder: string
  width: string
}

const FormInput = forwardRef<HTMLInputElement, Props>(
  (
    { type = "text", id, name, placeholder, width }: Props,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <fieldset>
        <input
          ref={ref}
          type={type}
          id={id}
          name={name}
          className={`form-control pl-[10px] ${width} h-[43px] rounded text-black my-2`}
          placeholder={placeholder}
        />
      </fieldset>
    )
  }
)

export default FormInput
