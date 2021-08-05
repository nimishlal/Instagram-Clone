import { useContext, useState, useEffect } from "react";
import { useHistory , Link} from "react-router-dom";
import FireBaseContext from "../context/firebase";
import * as ROUTES from "../constants/routes";
import { doesUsernameExist } from "../services/firebaseService";

export default function SignUp() {
    const history = useHistory();
    const { firebase } = useContext(FireBaseContext);
    const [username, setUsername] = useState('');
    const [fullName, setFullName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';
    const handleSignUp = async (event) => {
      event.preventDefault();
      const usernameExist = await doesUsernameExist(username);
      if (!usernameExist.length) {
        try {
          const createdUserResult = await firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password);
          await createdUserResult.user.updateProfile({
            displayName: username
          });
          await firebase.firestore().collection('users').add({
            userId: createdUserResult.user.uid,
            username: username.toLowerCase(),
            fullName,
            emailAddress: emailAddress.toLowerCase(),
            following: ['2'],
            dateCreated: Date.now()
          });
          history.push(ROUTES.DASHBOARD);
        } catch (error) {
          setFullName('');
          setEmailAddress('');
          setPassword('');
          setError(error.message);
        }
      } else {
        setUsername('');
        setError('That username already exists');
      }
    };
    useEffect(() => {
      document.title = 'Sign Up - Instagram';
    }, []);
    return (
      <div className="container flex mx-auto max-w-screen-md items-center h-screen">
        <div className="flex w-3/5">
          <img src="/images/iphone-with-profile.jpg" alt="iPhone with profile" />
        </div>
        <div className="flex flex-col w-2/5">
          <div className="flex flex-col items-center  bg-white p-4 border border-gray-primary mb-4 rounded">
            <h1 className="flex justify-center w-full">
              <img src="/images/logo.png" alt="Instagram" className="mt-2 w-6/12" />
            </h1>
            {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
            <form onSubmit={handleSignUp} method="POST">
              <input
                aria-label="Enter youre Username"
                type="text"
                placeholder="Enter Username"
                className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                onChange={(event) => setUsername(event.target.value)}
                // onChange={({target}) => console.log(target.value)}
                value={username}
              />
              <input
                aria-label="Enter your Full Name"
                type="text"
                placeholder="Enter Full Name"
                className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                onChange={(event) => setFullName(event.target.value)}
                // onChange={({target}) => console.log(target.value)}
                value={fullName}
              />
              <input
                aria-label="Enter you email address"
                type="text"
                placeholder="Enter email address"
                className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                onChange={(event) => setEmailAddress(event.target.value)}
                // onChange={({target}) => console.log(target.value)}
                value={emailAddress}
              />
              <input
                aria-label="Enter you password"
                type="password"
                placeholder="Enter password"
                className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                onChange={(event) => setPassword(event.target.value)}
                // onChange={({target}) => console.log(target.value)}
                value={password}
              />
              <button
                disabled={isInvalid}
                type="submit"
                className={`bg-blue-600 text-white w-full rounded h-8 font-bold
                  ${isInvalid && 'opacity-50'}`}
              >
                Sign Up
              </button>
            </form>
          </div>
          <div className="flex justify-center items-center flex-col w-full bg-white p-4 border border-gray-primary rounded">
            <p className="text-sm">
              have an account?
              <Link to={ROUTES.LOGIN} className="font-bold text-blue-medium">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
  
