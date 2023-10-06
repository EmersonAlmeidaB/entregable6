import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import useAuth from "../Hooks/useAuth"

const LoginPage = () => {
  const { register,reset, handleSubmit} = useForm()
  const {loginUser} = useAuth()

  const submit = data => {
    loginUser(data)
    reset({
      email:'',
      password:''
    })
  }



  return (
    <div className="loginPage">
      <img className="loginPage__img" src="/images/img-login.png" alt="img" />
      <article className="loginPage_article">
        <h2>Login</h2>
        <form className="loginPage__form" onSubmit={handleSubmit(submit)}>
          <div className="loginPage__input">
          <div>
            <label className="loginPage__label" htmlFor="email">Email</label>          
            <input className="loginPage__input__input"{...register('email')} type="email" id="email" />
            <hr />
          </div>
          <div>
            <label className="loginPage__label" htmlFor="password">Password</label>
            <input className="loginPage__input__input"{...register('password')} type="password" id="password" />
            <hr />
          </div>
          </div>
          <button className="loginPage__btn">Submit</button>
        </form>
        <p className="loginPage__p">Do you have an account? <Link to='/auth/register'>Go to register</Link></p>
      </article>
    </div>
  )
}

export default LoginPage