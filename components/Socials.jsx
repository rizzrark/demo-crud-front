import { TiSocialLinkedin, TiSocialInstagram } from 'react-icons/ti'

const Socials = () => {
  return (
    <>
      <div className="flex text-darkgray space-x-4 items-center">
        <p className="text-darkgray text-lg my-2">Socials</p>
        <div className="p-2 border-2 border-gray rounded-lg">
          <TiSocialLinkedin size={24} />
        </div>
        <div className="p-2 border-2 border-gray rounded-lg">
          <TiSocialInstagram size={24} />
        </div>
      </div>
    </>
  )
}

export default Socials
