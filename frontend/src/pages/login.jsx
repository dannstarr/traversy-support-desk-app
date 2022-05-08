import { useState } from 'react'
import { toast } from 'react-toastify'
import { FaSignInAlt } from 'react-icons/fa'

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    // de-structure formData
    const { email, password, } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()


    }

    return (
        <>
            <section className="heading">
                <h1>
                    <FaSignInAlt /> Login
                </h1>
                <p>Please log in</p>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="email"
                            className="form-control"
                            id="email"
                            name='email'
                            value={email}
                            onChange={onChange}
                            placeHolder='Enter your email'
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input type="password"
                            className="form-control"
                            id="password"
                            name='password'
                            value={password}
                            onChange={onChange}
                            placeHolder='Enter password'
                            required
                        />
                    </div>
                    <div className="form-group">
                        <button className='btn btn-block'>
                            Submit
                        </button>
                    </div>

                </form>

            </section>
        </>
    )
}

export default Login