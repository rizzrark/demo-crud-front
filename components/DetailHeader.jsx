const DetailHeader = ({ firstname, lastname }) => {
  return (
    <div className="text-2xl font-semibold flex space-x-4 mb-4">
      {firstname && (
        <img
          src="/image/avatar2.jpg"
          alt="avatar"
          className="h-32 w-32 rounded-xl"
        />
      )}
      <div className="px-6 flex items-center sm:flex-row flex-wrap">
        {firstname} {lastname}
      </div>
    </div>
  )
}

export default DetailHeader
