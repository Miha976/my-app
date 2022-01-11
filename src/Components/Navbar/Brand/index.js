import { Link } from "react-router-dom";

export default function Brand() {
    return(
        <div className="text-white text-xl font-bold font-mono">
            <Link to="/" className="flex items-center">
                <div className="mr-2 text-sm transform scale-[2]">
                    <img src="https://www.pngrepo.com/download/133427/seahorse.png" alt="seahorse" width={20} />
                </div>
                <div className="flex">
                    <p className="text-blue-700">My</p>
                   <p className="text-red-700">Recipes</p>
                </div>
            </Link>
        </div>
    )
}