import { useState } from 'react'
import { useRouter } from 'next/router'

const NewContact = () => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [pendingPromise, setPendingPromise] = useState(false)

  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    const contact = { firstname, lastname, email, number }
    setPendingPromise(true)
    fetch('http://localhost:3000/contacts/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact),
    })
      .then(() => {
        setPendingPromise(false)
        router.push('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div className="mt-20 p-10 bg-white rounded-lg shadow-md">
      <form
        className="flex flex-col text-boldblack text-lg space-y-3"
        onSubmit={handleSubmit}
      >
        <label>Firstname:</label>
        <input
          type="text"
          placeholder="John"
          required
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          className="border-darkgray border-2 rounded-md p-1"
        />
        <label>Lastname:</label>
        <input
          type="text"
          placeholder="Doe"
          required
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          className="border-darkgray border-2 rounded-md p-1"
        />
        <label>Email:</label>
        <input
          type="email"
          placeholder="example@email.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-darkgray border-2 rounded-md p-1"
        />
        <label>Number:</label>
        <input
          type="tel"
          required
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
            Adding a new contact ...
          </button>
        ) : (
          <button className="bg-purple rounded-lg mt-6 p-3 py-2 text-white font-bold text-xl">
            Add
          </button>
        )}
      </form>
    </div>
  )
}

export default NewContact
