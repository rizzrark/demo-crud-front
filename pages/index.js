import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Contacts App</title>
      </Head>
      <div className="text-2xl font-bold"> Testing the font </div>
    </div>
  )
}
