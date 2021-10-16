import GoogleLogin from "react-google-login"
import { Button } from 'reactstrap';


export default function Auth() {



    return(
        <Button 
        className="btn col-sm-4"
        clientId=""
        buttonText="Login"
        onSuccess="{}"
        onFailure="{}"

        ></Button>
    )
}