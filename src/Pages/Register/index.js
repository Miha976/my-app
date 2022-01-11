import '../../Components/Firebase/index'
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from 'firebase/auth'
import { useContext, useEffect, useState } from 'react'
import auth from '../../Components/Firebase/index'
import { UserContext } from '../../Components/Context/User'
export default function Register() {
    const { user } = useContext(UserContext)
    let [submitText, setSubmitText] = useState("S'inscrire")
    let [message, setMessage] = useState(null)
    function handleSubmit(e) {
        e.preventDefault()
        if(message) {
            setMessage(null)
        }
        if(e.target[4].value !== e.target[3].value) {
            setMessage("Mots de passe différents")
        } else {
            setSubmitText(<i className="fas fa-circle-notch fa-spin"></i>)
            createUserWithEmailAndPassword(auth, e.target[2].value, e.target[3].value)
            .then(userCredential => {
                setSubmitText("S'inscrire")
                const user = userCredential.user
                if(!user.displayName) {
                    updateProfile(auth.currentUser, {
                        displayName: `${e.target[0].value} ${e.target[1].value}`
                    })
                    .then(() => {
                        window.location.reload()
                    })
                    .catch(error => {
                        console.log("Set displayName: ", error)
                    })
                }
            })
            .catch(error => {
                setSubmitText("S'inscrire")
                const errorCode = error.code
                const errorMessage = error.message
                if(errorCode === "auth/email-already-in-use") {
                    setMessage("Email déjà utilisé")
                }
                if(errorCode === "auth/weak-password") {
                    setMessage("Le mot de passe doit contenir au moins 6 caractères")
                }
                console.log(errorCode, errorMessage)
            })
        }
    }
    useEffect(() => {
        document.title = "Inscription"
        console.log(user)
    }, [])
    if(user) {
        return(
            <div>
                <h1 className="text-black">
                    Connecté en tant que {user.displayName}
                    <br />
                </h1>
            </div>
        )
    }
    return(
        <div className="flex justify-center items-center">
            <div className="text-black bg-white p-6 rounded-md">
                <form action="" onSubmit={handleSubmit}>
                    <div className="my-4">
                        <input type="text" placeholder="Nom" className="border border-gray-400 focus:border-gray-800 outline-none py-4 px-6 w-96 rounded-md" required/>
                    </div>
                    <div className="my-4">
                        <input type="text" placeholder="Prénom" className="border border-gray-400 focus:border-gray-800 outline-none py-4 px-6 w-96 rounded-md" required/>
                    </div>                    
                    <div className="my-4">
                        <input type="email" placeholder="Email" className="border border-gray-400 focus:border-gray-800 outline-none py-4 px-6 w-96 rounded-md" required/>
                    </div>
                    <div className="my-4">
                        <input type="password" placeholder="Mot de passe" className="border border-gray-400 focus:border-gray-800 outline-none py-4 px-6 w-96 rounded-md" required/>
                    </div>
                    <div className="my-4">
                        <input type="password" placeholder="Confirmation du mot de passe" className="border border-gray-400 focus:border-gray-800 outline-none py-4 px-6 w-96 rounded-md" required/>
                    </div>
                    <div className="text-lg text-blue-700 font-bold">
                        <p>
                            {message}
                        </p>
                    </div>
                    <div>
                        <button type="submit" className="py-3 px-6 bg-red-600 hover:bg-red-700 text-white my-2 w-80 rounded-md">{submitText}</button>
                    </div>
                    <div className="space-x-1">
                        <button className="py-3 px-6 bg-white hover:bg-gray-200 my-2 w-44 rounded-md">
                            <i className="fab fa-google mr-1"></i>
                            Google
                        </button>
                        <button className="py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white my-2 w-44 rounded-md">
                            <i className="fab fa-facebook-square mr-1"></i>
                            Facebook
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}