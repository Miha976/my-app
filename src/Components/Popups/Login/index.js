import { signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/User";
import auth from "../../Firebase";

export default function Login() {
    const { user } = useContext(UserContext)
    let [submitText, setSubmitText] = useState("Se connecter")
    let [message, setMessage] = useState(null)
    function handleSubmit(e) {
        if(message) {
            setMessage(null)
        }
        setSubmitText(<i className="fas fa-circle-notch fa-spin"></i>)
        e.preventDefault()
        signInWithEmailAndPassword(auth, e.target[0].value, e.target[1].value)
          .then((userCredential) => {
            // Signed in 
            setSubmitText("Se connecter")
            // const user = userCredential.user;
            // console.log(user)
            // ...
          })
          .catch((error) => {
            setSubmitText("Se connecter")
            const errorCode = error.code;
            const errorMessage = error.message;
            if(errorCode === "auth/user-not-found") {
                setMessage("Email introuvable")
            }
            if(errorCode === "auth/wrong-password") {
                setMessage("Mot de passe incorrect")
            }
            console.log("Code: " + errorCode, "Message: " + errorMessage)
          });
    }
    function GoogleSumbit() {
        if(message) {
            setMessage(null)
        }
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential.accessToken
            const user = result.user
            console.log("Credential", credential)
            console.log("Token", token)
            console.log("User", user)
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log("Code", errorCode)
            console.log("Message", errorMessage)
            console.log("Email", email)
            console.log("Credential", credential)
        })
    }
    function FacebookSumbit() {
        if(message) {
            setMessage(null)
        }
        const provider = new FacebookAuthProvider()
        signInWithPopup(auth, provider)
        .then((result) => {
            const credential = FacebookAuthProvider.credentialFromResult(result)
            const token = credential.accessToken
            const user = result.user
            console.log("Credential", credential)
            console.log("Token", token)
            console.log("User", user)
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = FacebookAuthProvider.credentialFromError(error);
            if(errorCode === "auth/account-exists-with-different-credential") {
                setMessage("Compte existant avec autre(s) mode(s) de connexion")
            }
            console.log("Code", errorCode)
            console.log("Message", errorMessage)
            console.log("Email", email)
            console.log("Credential", credential)
        })
    }
    if(user) {
        return(
            <div className="flex flex-col items-start">
                <div className="flex my-2 text-black text-xl hover:text-blue-500">
                    <Link to="/profile" className="py-2 px-4">
                        <i className="fas fa-address-card mr-2"></i>
                        Profil
                    </Link>
                </div>
                <div className="flex my-2 text-black text-xl hover:text-blue-500">
                    <Link to="/join-us" className="py-2 px-4">
                        <i className="fas fa-file-signature mr-2"></i>
                        Nous rejoindre 
                    </Link>
                </div>
                <div className="flex my-2 text-black text-xl hover:text-blue-500">
                    <button onClick={() => {signOut(auth)}} className="py-2 px-4">
                        <i className="fas fa-sign-out-alt mr-2"></i>
                        Se déconnecter
                    </button>
                </div>
            </div>
        )
    }
    return(
        <div className="text-black">
            <form action="" onSubmit={handleSubmit}>
                <div className="my-4">
                    <input type="email" placeholder="Email" className="border border-gray-400 focus:border-gray-800 outline-none py-4 px-6 w-96 rounded-md" required/>
                </div>
                <div className="my-4">
                    <input type="password" placeholder="Mot de passe" className="border border-gray-400 focus:border-gray-800 outline-none py-4 px-6 w-96 rounded-md" required/>
                </div>
                <div>
                    <a href="#" className="text-gray-500 hover:text-gray-800">Mot de passe oublié ?</a>
                </div>
                <div className="text-lg text-blue-700 font-bold">
                    <p>
                        {message}
                    </p>
                </div>
                <div>
                    <button type="submit" className="py-3 px-6 bg-red-600 hover:bg-red-700 text-white my-2 w-80 rounded-md">{submitText}</button>
                </div>
            </form>
            <div className="space-x-1">
                <button className="py-3 px-6 bg-white hover:bg-gray-200 my-2 w-44 rounded-md" onClick={() => GoogleSumbit()}>
                    <i className="fab fa-google mr-1"></i>
                    Google
                </button>
                <button className="py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white my-2 w-44 rounded-md" onClick={() => FacebookSumbit()}>
                    <i className="fab fa-facebook-square mr-1"></i>
                    Facebook
                </button>
            </div>
            <div className="my-2">
                <p>
                    Vous n'avez pas encore de compte ? <a href="/register" className='hover:underline'>Inscrivez-vous</a>
                </p>
            </div>
        </div>
    )
}