import React, { useState } from 'react';

function Login2(props) {

    const [data, setdata] = useState({
        email: '',
        password: ''
    })
    const [error,seterror] = useState('')


    const OnClickHandle = () => { 
        if(!isValidation()){
            seterror('password is required')
            return;
        }
        
    }
    const HandleChange = (e) => {
       seterror('')
        setdata({
            ...data,
            [e.target.name]: e.target.value
          
        })
        console.log(e.target.value);
    }

    const isValidation = () => {
        return data.email !== '' && data.password !== ''
    }

    const ErrorMessage = () => {
        if(error !== '') {
            return (<div className="alert alert-danger">{error}</div>)
        }
    }
    return (
        <>

            <form className="login">
                 {ErrorMessage()}
                <div>
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        name="email"
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        onChange={HandleChange}
                        value={data.email}

                    />
                </div>
                <div>
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input
                        name="password"
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={HandleChange}
                        value={data.password}

                    />
                </div>
                <button type="button" className="mt-5 btn btn-primary" onClick={() => OnClickHandle()}
                >Submit
                </button>
            </form>
        </>
    );
}

export default Login2;
