import { useParams, useSearchParams } from "react-router-dom"


const UserDetailPage = () => {
  const params = useParams()
  console.log(params.id)
  const [searchParams, setSearchParams] = useSearchParams()
  console.log(searchParams.toString())

  return (
    <div>
      <h2>{params.id}</h2>
    </div>
  )
}

export default UserDetailPage