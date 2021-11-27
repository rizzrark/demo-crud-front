import { IoIosContact } from 'react-icons/io'
import { RiContactsBook2Line } from 'react-icons/ri'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { useSWRConfig } from 'swr'

const ContactItem = ({ contacts, getId, getEdit }) => {
  const { mutate } = useSWRConfig()

  const handleDelte = (id) => {
    fetch(`http://localhost:3000/contacts/${id}`, {
      method: 'DELETE',
    }).then(() => {
      getId(' ')
      mutate('contacts')
    })
  }

  const handleDetail = (id) => {
    getId(id)
    getEdit(false)
  }

  const handleEdit = (id) => {
    getId(id)
    getEdit(true)
  }

  return (
    <>
      {contacts.map((contact) => (
        <div
          key={contact._id}
          className="flex justify-between items-center my-4 shadow-lg rounded-lg p-4 bg-white"
        >
          <div className="flex items-center h-4 text-boldblack">
            <IoIosContact size={46} className="text-darkgray" />
            <p className="ml-2 font-semibold tracking-wide text-lg">
              {contact.firstname} {contact.lastname}
            </p>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <button
              onClick={() => handleEdit(contact._id)}
              className="p-1 rounded-xl border-2 border-gray bg-white text-darkgray"
            >
              <AiOutlineEdit size={28} />
            </button>
            <button
              onClick={() => handleDetail(contact._id)}
              className="p-1 rounded-xl border-2 border-gray bg-white text-darkgray"
            >
              <RiContactsBook2Line size={28} />
            </button>
            <button
              onClick={() => handleDelte(contact._id)}
              className="p-1 rounded-xl border-2 border-gray bg-white text-darkgray"
            >
              <AiOutlineDelete size={28} />
            </button>
          </div>
        </div>
      ))}
    </>
  )
}

export default ContactItem
