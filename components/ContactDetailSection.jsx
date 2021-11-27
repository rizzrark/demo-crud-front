import { useState, useEffect } from 'react'
import DetailHeader from './DetailHeader'
import Socials from './Socials'

const ContactDetailSection = ({ id }) => {
  const [contact, setConctact] = useState(null)
  const url = 'http://localhost:3000/contacts/'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}${id}`, {
          mode: 'cors',
        })
        const newData = await response.json()
        setConctact(newData)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [id, url])

  if (contact) {
    return (
      <div className="w-1/2 flex justify-center items-center">
        <div>
          <DetailHeader
            firstname={contact.firstname}
            lastname={contact.lastname}
          />
          <div className="text-lg my-4">
            <p className="text-darkgray">Email </p>
            <p>{contact.email}</p>
          </div>
          <div className="text-lg my-4">
            <p className="text-darkgray">Number </p>
            <p>{contact.number}</p>
          </div>
          <Socials />
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default ContactDetailSection
