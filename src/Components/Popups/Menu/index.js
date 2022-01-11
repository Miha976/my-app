import { Link } from "react-router-dom";

export default function Menu() {
    return(
        <div className="text-black">
            <div className="flex my-2 mx-3">
                <Link to="/language" className="py-2 px-4 hover:text-red-500">
                    Langue
                </Link>
            </div>
            <div className="flex my-2 mx-3">
                <Link to="/appearence" className="py-2 px-4 hover:text-red-500">
                    Apparence
                </Link>
            </div>
            <div className="flex my-2 mx-3">
                <Link to="/contact" className="py-2 px-4 hover:text-red-500">
                    Contact
                </Link>
            </div>
            <div className="flex my-2 mx-3">
                <Link to="/help" className="py-2 px-4 hover:text-red-500">
                    Aide
                </Link>
            </div>
            <div className="flex my-2 mx-3">
                <Link to="/about" className="py-2 px-4 hover:text-red-500">
                    A propos
                </Link>
            </div>
        </div>
    )
}