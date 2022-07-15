import React, {useState} from 'react'
import logo from '../images/Logo.svg'
import axios from 'axios'
import { _LINK } from '../data/Data'
import { useDispatch } from 'react-redux'
import { loginAction } from '../redux/actions/login'


const Login = () => {

    const dispatch = useDispatch()
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const auth = JSON.stringify({ login, password })
        var config = {
            method: 'post',
            url: `${_LINK}/v1/api/auth`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: auth
        }
        axios(config).then(({ data }) => {
            dispatch(loginAction(data))
        }).catch(() => {
            setMessage("Invalid data")
        })
    }

    return (
        <div>
            <section className="login__hero">
                <div className="login__block d-flex align-center justify-center flex-column">
                    <img src={logo} alt="" className="login__img"/>
                    <p className="login__desc">Login to admin panel</p>
                    <form action="" className="login__form d-flex flex-column">
                        <label>Email</label>
                        <input type="email" className="" placeholder="Email" onInput={(e) => setLogin(e.target.value)}/>
                        <label>Password</label>
                        <input type="password" className="" placeholder="Password" onInput={(e) => setPassword(e.target.value)} />
                        <div className="login__d-flex justify-between">
                        <a href="#" className="login__password">Remember me</a>
                        <a href="#" className="login__password">Forgot your password?</a>
                    </div>
                    </form>
                    <button className="orange_btn" onClick={handleSubmit}>Login</button>
                </div>
            </section>
        </div>
    )
}
export default Login

