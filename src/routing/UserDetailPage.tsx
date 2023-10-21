import { useParams, useSearchParams } from "react-router-dom"


const UserDetailPage = () => {
  const params = useParams()
  // const [searchParams, setSearchParams] = useSearchParams()

  return (
    <div>
      <h2>{params.id}</h2>
    </div>
  )
}

export default UserDetailPage