import { useEffect, useState } from 'react'
import { useSWRConfig } from 'swr'

const EditContact = ({ id }) => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [pendingPromise, setPendingPromise] = useState(false)
  const { mutate } = useSWRConfig()

  const handleSubmit = (e) => {
    e.preventDefault()
    const contact = { firstname, lastname, email, number }
    setPendingPromise(true)
    fetch(`http://localhost:3000/contacts/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact),
    })
      .then(() => {
        mutate('contacts')
        setPendingPromise(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    fetch(`http://localhost:3000/contacts/${id}`, {
      method: 'GET',
    })
      .then((res) => {
        return res.json()
      })
      .then((contact) => {
        setFirstname(contact.firstname)
        setLastname(contact.lastname)
        setEmail(contact.email)
        setNumber(contact.number)
      })
  }, [id])

  return (
    <div className="mt-20 p-10 bg-white rounded-lg flex justify-center  w-1/2 ">
      <form
        className="flex flex-col text-boldblack text-lg space-y-3"
        onSubmit={handleSubmit}
      >
        <label>Firstname:</label>
        <input
          type="text"
          placeholder="John"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          className="border-darkgray border-2 rounded-md p-1"
        />
        <label>Lastname:</label>
        <input
          type="text"
          placeholder="Doe"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          className="border-darkgray border-2 rounded-md p-1"
        />
        <label>Email:</label>
        <input
          type="email"
          placeholder="example@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-darkgray border-2 rounded-md p-1"
        />
        <label>Number:</label>
        <input
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="743-129-7242"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="border-darkgray border-2 rounded-md p-1"
        />
        <br />
        {pendingPromise ? (
          <button
            disabled
            className="bg-purple rounded-lg mt-6 p-3 py-2 text-darkgray font-bold text-xl"
          >
            Editing a contact ...
          </button>
        ) : (
          <button className="bg-purple rounded-lg mt-6 p-3 py-2 text-white font-bold text-xl">
            Edit
          </button>
        )}
      </form>
    </div>
  )
}

export default EditContact
