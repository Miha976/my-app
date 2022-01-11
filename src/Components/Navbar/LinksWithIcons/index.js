import { onAuthStateChanged } from "firebase/auth"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../Context/User"
import auth from "../../Firebase"
import PopUp, { OpenPopUp } from "../../Popups"

export default function LinksWithIcons() {
    const { user } = useContext(UserContext)

    return(
        <div className="flex items-center">
            <div className="text-black hover:text-gray-700 text-lg mx-3">
                <Link to="#" onClick={(e) => {e.preventDefault(); OpenPopUp("cart")}}>
                <i className={`fas fa-shopping-cart`}></i>
                </Link>
                <PopUp name={"cart"} />
            </div>
            <div className="text-black hover:text-gray-400 text-lg mx-3">
                <Link to="#" onClick={(e) => {e.preventDefault(); OpenPopUp("login")}}>
                    {user ? user.photoURL ? <img src={user.photoURL} alt="..." className="rounded-full w-6"/> : <i className={`fas fa-user`}></i> : null}
                    {!user && <i className={`fas fa-user`}></i>}
                </Link>
                <PopUp name={"login"} />
            </div>
            <div className="text-black hover:text-gray-400 text-lg mx-3">
                <Link to="#" onClick={(e) => {e.preventDefault(); OpenPopUp("search")}}>
                    <i className={`fas fa-search`}></i>
                </Link>
                <PopUp name={"search"} />
            </div>
            <div className="text-black hover:text-gray-400 text-lg mx-3">
                <Link to="#" onClick={(e) => {e.preventDefault(); OpenPopUp("menu")}}>
                    <i className={`fas fa-bars`}></i>
                </Link>
                <PopUp name={"menu"} />
            </div>
        </div>
    )
}