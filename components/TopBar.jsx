import Link from 'next/link'

import { TiContacts } from 'react-icons/ti'
import { AiOutlineUserAdd } from 'react-icons/ai'

const TopBar = () => {
  return (
    <div className="border-b-2 border-gray h-20 flex items-center justify-start space-x-2 p-4">
      <div className="flex items-center justify-between w-1/3">
        <div className="p-1">
          <TiContacts size={32} />
        </div>
        <p className="text-2xl font-bold text-darkgray">My Contacts</p>
        <div className="p-1 border-2 border-darkgray rounded-lg">
          <Link href="/new">
            <a>
              <AiOutlineUserAdd size={32} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TopBar
