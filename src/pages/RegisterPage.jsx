import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import useAuth from "../Hooks/useAuth"

const RegisterPage = () => {

const { reset, handleSubmit, register } = useForm()
const { registerUser } = useAuth()

const submit = data => {
  registerUser(data)
}

  return (
    <div className="registerpage">
        <img className="registerpage__img" src="/images/img-register.png" alt="" />
        <article className="registerpage__article">
        <h2>Register</h2>
        <form className="registerpage__form" onSubmit={handleSubmit(submit)}>
          <div className="registerpage__input">
          <div>
            <label className="registerpage__label" htmlFor="email">Email</label>
            <input className="registerpage__input__input"{...register('email')} type="email" id="email" />
            <hr />
          </div>
          <div>
            <label className="registerpage__label" htmlFor="name">Name</label>
            <input className="registerpage__input__input"{...register('name')} type="name" id="name" />
            <hr />
          </div>
          <div>
            <label className="registerpage__label" htmlFor="password">Password</label>
            <input className="registerpage__input__input"{...register('password')} type="password" id="password" />
            <hr />
          </div>

          </div>
          
          <button className="registerpage__btn">Submit</button>
        </form>
        <p>Are you register? <Link to='/auth/login'>Go to login</Link></p>
        </article>
    </div>
  )
}

export default RegisterPage