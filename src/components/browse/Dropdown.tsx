interface Option {
  id: number
  label: string
}

interface DropdownProps {
  options: Option[]
  defaultOption: string
  handleSelect: (value: string) => void
  defaultValue: string
}

const Dropdown = ({
  options,
  defaultOption,
  handleSelect,
  defaultValue,
}: DropdownProps) => {
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    handleSelect(event.target.value)
  }
  return (
    <select
      className=" font-bold rounded text-[20px] p-2  bg-[#1E1B1B] font-primary text-white transition duration-500 ease-in-out hover:text-darkgrey hover:bg-green cursor-pointer"
      onChange={onChange}
    >
      <option value={defaultValue}>{defaultOption}</option>
      {options.map((o) => (
        <option key={o.id} value={o.id}>
          {o.label}
        </option>
      ))}
    </select>
  )
}

export default Dropdown
