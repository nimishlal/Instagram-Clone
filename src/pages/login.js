import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import FireBaseContext from "../context/firebase"

export default function Login() {
    const histroy = useHistory();
    const { firebase } = useContext(FireBaseContext);
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';
    const handleLgoin = () => { };

    useEffect(
        () => {
            document.title = 'Login - IntaClone'
        }, []
    )

    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-3/5">
                <img src="/images/iphone-with-profile.jpg" alt="iPhone with Instagram app" />
            </div>
            <div className="flex flex-col w-2/5">
                <h1 className="flex justify-center w-full">
                    <img src="/images/logo.png" alt="Instagram" className="mt-2 w-6/12 mb-4" />
                </h1>
                {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

                <form onSubmit={handleLgoin} method="Post">
                    <input aria-label="Enter your email address"
                        type="text" placeholder="Email address" 
                        className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                        onChange= { ({target }) => setEmailAddress(target.value)}
                        > 
                    </input>
                    <input aria-label="Enter your password"
                        type="text" placeholder="Password" 
                        className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                        onChange= { ({target }) => setPassword(target.value)}
                        > 
                    </input>
                    <button 
                        disabled ={isInvalid}
                        type="submit"
                        className = {`bg-blue-500 text-white w-full rounded h-8 font-bold${isInvalid && 'opacity-50'}`}
                    >Login</button>
                </form>
            </div>
        </div>
    );
}

// tailwind config items
// text-red-primary
//text-gray-base