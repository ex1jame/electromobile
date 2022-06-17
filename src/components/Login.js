import '../style/login.css'
import React, {useEffect} from 'react'
import logo from '../images/Logo.svg'


const Login = ({setDisplay}) => {

    useEffect(() => {
        setDisplay(true)
    }, [])


    return (
        <div>
            <section className="login__hero">
                <div className="login__block d-flex align-center justify-center flex-column">
                    <img src={logo} alt="" className="login__img"/>
                    <p className="login__desc">Login to admin panel</p>
                    <form action="" className="login__form d-flex flex-column">
                        <label>Email</label>
                        <input type="email" className="" placeholder="Email"/>
                        <label>Password</label>
                        <input type="password" className="" placeholder="Password"/>
                        <div className="login__d-flex justify-between">
                        <a href="#" className="login__password">Remember me</a>
                        <a href="#" className="login__password">Forgot your password?</a>
                    </div>
                    </form>


                    <button className="orange_btn">Login</button>


                </div>
            </section>
        </div>
    )
}
export default Login

