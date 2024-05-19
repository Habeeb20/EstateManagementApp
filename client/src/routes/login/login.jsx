import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import apiRequest from "../../lib/apiRequest";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

function Login() {
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const {updateUser} = useContext(AuthContext)
  const navigate = useNavigate()
  const handleSubmit =async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    const formData = new formData(e.target);
    const username =formData.get("username")
 
    const password = formData.get("password");

   try {
    const res = await apiRequest.post("/auth/login", {
      username, email, password
    })

    updateUser(res.data)
    navigate("/login")
   } catch (error) {
      console.log(error)
      setError(err.response.Data.message)
    
   } finally {
    setIsLoading(false)
   }

  }
  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <input name="username" type="text" placeholder="Username" />
         
          <input name="password" type="password" placeholder="Password" />
          <button disabled={isLoading}>Login</button>
          {error && <span>{error}</span>}
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;