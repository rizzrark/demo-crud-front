import { FcBusinessContact } from 'react-icons/fc'

const SideBar = ({ gridposition }) => {
  return (
    <div
      className={`flex flex-col items-center p-4 h-screen bg-white border-r-2 border-gray ${gridposition}`}
    >
      <FcBusinessContact size={46} />
    </div>
  )
}

export default SideBar
