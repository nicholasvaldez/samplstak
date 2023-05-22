interface Props {
  id: number
  image: string
  name: string
}

const DrumkitItem = ({ id, image, name }: Props) => {
  return (
    <li
      className=" text-[15px] mb-[10px] flex items-center justify-start"
      key={id}
    >
      <div>
        <a href={`drumkits/detail/${id}`}>
          <img
            src={`https://jellyfish-app-fo654.ondigitalocean.app${image}`}
            alt="drumkit Image"
            className=" h-[50px] w-[50px] object-cover mr-[10px]"
          ></img>
        </a>
      </div>
      {name}
    </li>
  )
}

export default DrumkitItem
