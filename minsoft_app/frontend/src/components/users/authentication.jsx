import GoogleLogin from "react-google-login"
// import { Button } from 'reactstrap';
import React, { axios } from 'react';



export default function Auth() {

    const respGoogle = async (resp) => {
        const newUser = {
            name: resp.profileObj.name,
            email: resp.profileObj.email
        }
        const datosUser = await axios.post("http://localhost:8080/api/users", newUser);
        console.log(datosUser)

    }



    return (
        <>
            <div
                id='g_id_onload'
                data-client_id={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                data-auto_prompt='false'></div>
            <GoogleLogin
                clientId=""
                buttonText="Login"
                className='g_id_signin'
                data-size='large'
                data-type='standard'
                data-text='sign_in_with'
                data-shape='rectangular'
                data-theme='outline'
                data-logo_alignment='left'
                onSuccess={respGoogle}
                onFailure={respGoogle}

                cookiePolicy={"single_host_origin"}
            >Login</GoogleLogin>
        </>
    )
}