import { Link } from "react-router-dom"

export default function Links() {
    const links = [
        {
            text: 'Découvrir',
            target: '/discover'
        },
        {
            text: 'Boutique',
            target: '/shop'
        },
        {
            text: 'Les recettes',
            target: '/recipes'
        },
        {
            text: 'Nous rejoindre', 
            target: '/join-us'
        }
    ]
    return(
        <div className="flex items-center text-white">
            {links.map((link, index) => 
            <div key={index} className="mx-4 text-slate-700 hover:text-black">
                <Link to={link.target}>
                    {link.text}
                </Link>
            </div>
            )}
        </div>
    )
}