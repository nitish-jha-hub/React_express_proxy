import './assets/style_css/user.css'
import { useState } from 'react'
const User = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')

    const handlechange = (e) => {
        if(e.target.name == 'name'){
            setName(e.target.value)
        }
        else if(e.target.name == 'email'){
            setEmail(e.target.value)
        }
        else if(e.target.name == 'password'){
            setPassword(e.target.value)
        }
        else if(e.target.name == 'rePassword'){
            setRePassword(e.target.value)
        }
    };

    const handleSubmit =async() => {
        console.log(name)
        console.log(email)
        console.log(password)
        console.log(rePassword)

        if(password != rePassword){
            alert('Password and Re-Password not match')
        }
        else{
            let res = await fetch('http://localhost:3000', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password
                })
            })
            let data = await res.text()
            console.log(data)
            alert(data)
        }
    }


    return (
        <section className="vh-100 bg-image"
        style={{"background-image": "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')"}} >
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{"border-radius": "15px"}}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                                    <form>

                                        <div className="form-outline mb-4">
                                            <input onChange={handlechange} name='name' type="text" id="form3Example1cg" className="form-control form-control-lg" />
                                            <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input onChange={handlechange} name='email'  type="email" id="form3Example3cg" className="form-control form-control-lg" />
                                            <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input onChange={handlechange} name='password'  type="password" id="form3Example4cg" className="form-control form-control-lg" />
                                            <label className="form-label" htmlFor="form3Example4cg">Password</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input onChange={handlechange} name='rePassword'  type="password" id="form3Example4cdg" className="form-control form-control-lg" />
                                            <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
                                        </div>

                                        <div className="form-check d-flex justify-content-center mb-5">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                                            <label className="form-check-label" htmlFor="form2Example3g">
                                                I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                                            </label>
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <button type="button" onClick={handleSubmit}
                                                className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                                        </div>

                                        <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                                            className="fw-bold text-body"><u>Login here</u></a></p>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default User