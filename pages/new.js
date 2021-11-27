import Head from 'next/head'
import NewContact from '../components/NewContact'
import NewTopBar from '../components/NewTopBar'
import SideBar from '../components/SideBar'

export default function New() {
  return (
    <>
      <Head>
        <title>Contacts App</title>
      </Head>
      <div className="flex w-full">
        <SideBar />
        <div className="w-full">
          <NewTopBar />
          <div className="w-full h-full bg-conctact">
            <div className="flex items-center justify-center">
              <NewContact />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
