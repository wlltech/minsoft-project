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



    return(
        <div className="btn">
        <GoogleLogin 
        clientId=""
        buttonText="Login"
        onSuccess={respGoogle}
        onFailure={respGoogle}
        
        cookiePolicy={"single_host_origin"}
        >Login</GoogleLogin>

  
        </div>
    )
}