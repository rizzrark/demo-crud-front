import Head from 'next/head'
import TopBar from '../components/TopBar'
import SideBar from '../components/SideBar'
import ContactListSection from '../components/ContactListSection'
import ContactDetailSection from '../components/ContactDetailSection'
import ContactItem from '../components/ContactItem'
import { useState } from 'react'
import useSWR from 'swr'
import EditContact from '../components/EditContact'

const fetcher = async () => {
  const respose = await fetch('http://localhost:3000/contacts', {
    mode: 'cors',
  })
  const data = respose.json()
  return data
}

export default function Home() {
  const { data, error } = useSWR('contacts', fetcher)
  const [id, setId] = useState(' ')
  const [edit, setEdit] = useState(false)
  if (error) return 'Error'
  if (!data) return 'Loading'
  return (
    <>
      <Head>
        <title>Contacts App</title>
      </Head>
      {/* <MainContainer> */}
      <div className="flex w-full">
        <SideBar />
        <div className="w-full">
          <TopBar />
          <div className="flex w-full">
            <ContactListSection>
              {data ? (
                <ContactItem
                  contacts={data}
                  getId={(id) => setId(id)}
                  getEdit={(edit) => setEdit(edit)}
                />
              ) : (
                <div>No contacts ...</div>
              )}
            </ContactListSection>
            {id !== ' ' ? (
              edit ? (
                <EditContact id={id} />
              ) : (
                <ContactDetailSection id={id} />
              )
            ) : (
              <div></div>
            )}
            {/* <EditContact id={id} /> */}
          </div>
        </div>
      </div>
    </>
  )
}
