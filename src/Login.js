import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from "./firebase";
import { useStateValue } from './stateProvider';
import { actionType } from "./reducer";

function Login() {
    const [{ }, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionType.SET_USER,
                    user: result.user,
                })
            }).catch((error) => alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img className="img1"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png'
                    alt="fb-logo"
                />

                <img className="img2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png" alt="" />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign in
            </Button>
        </div>
    )
}

export default Login
