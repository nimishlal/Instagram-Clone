import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import FireBaseContext from "../context/firebase"

export default function Login() {
    const histroy = useHistory();
    const { firebase } = useContext(FireBaseContext);
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const isValid = password === '' || emailAddress === '';
    const handleLgoin = () => { };

    useEffect(
        () => {
            document.title = 'Login - IntaClone'
        }, []
    )

    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen"> <p>This is the login portion</p> </div>
    );
}