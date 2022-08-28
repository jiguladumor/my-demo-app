import React, {useEffect, useState} from 'react';
import "./login.css";

const Login = () => {
    const [error, setError] = useState('');
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        console.log('sankdaskdjad');
        return () => {
            // console.log('destroed')
        }
    }, [])

    useEffect(() => {
        console.log('form changed');
    }, [error])

    const onclickLogin = () => {
        if (!isFormValid()) {
            setError('Password is required.')
            return;
        }
        console.log(form);
    }

    const handleChange = (e) => {
        setError('');
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const isFormValid = () => {
        return form.email !== '' && form.password !== ''
    }

    const setErrorMsg = () => {
        if (error !== '') {
            return (<div className="alert alert-danger">{error}</div>)
        }
    }

    return (
        <form className="login">
            {setErrorMsg()}
            <div>
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input value={form.email} name="email" type="email" onChange={handleChange} className="form-control"
                       id="exampleInputEmail1"/>
            </div>
            <div>
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input name="password" type="password" onChange={handleChange} className="form-control"
                       id="exampleInputPassword1"/>
            </div>
            <button type="button" className="mt-5 btn btn-primary"
                    onClick={() => onclickLogin()}>Submit
            </button>
        </form>
    )
}
export default Login;
