import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate()

  return (
    <div className="p-6">
      <h3>Contact Page</h3>
      <form onSubmit={(event)=> {
        event.preventDefault();
        navigate("/")
      }}>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default ContactPage