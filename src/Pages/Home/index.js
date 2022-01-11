import { useEffect } from "react"
import { Link } from "react-router-dom"

export default function Home() {
    useEffect(() => {
        document.title = "Accueil"
    }, [])
    return(
        <div className="flex flex-col items-center">
            <div className="h-auto w-auto relative flex">
                <div className="">
                    <img src="https://afroculture.net/wp-content/uploads/2017/02/cuisine-antillaise-caribean-cooking.jpg" alt="..." width={500}/>
                </div>
                <div className="">
                    <img src="https://i0.wp.com/mayottecuisine.com/wp-content/uploads/2021/04/aile-depoulet-grille-mayottecuisine.jpg?resize=600%2C315&ssl=1" alt="..." width={500}/>
                </div>
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-[2px] p-5 space-y-6">
                    <div>
                        <h1 className="text-white text-xl font-bold">
                            Apprenez à cuisiner avec nos <p className="text-red-200">nouvelles recettes</p>
                        </h1>
                    </div>
                    <div className="text-gray-200">
                        <p>
                            Envie d'apprendre mais vous ne savez pas par où commencer ? Pas de soucis !
                        </p>
                    </div>
                    <div className="">
                        <button className="py-3 px-6 border border-blue-600 text-white rounded-lg bg-blue-600 delay-100 duration-500 hover:bg-transparent">Explorer les plats</button>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className="flex justify-around items-center w-full">
                <div className="relative group">
                    <div>
                        <img src="https://cuisinezavecdjouza.fr/wp-content/uploads/2013/11/Pain-beredre-photo-3.jpg" alt="..." width={300}/>
                    </div>
                    <div className="absolute left-0 top-0 w-full h-full bg-black/80 delay-500 duration-500 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center">
                        <div className="text-white font-bold">
                            <h1>Pain beredre</h1>
                        </div>
                        <div className="mt-6">
                            <Link to="#" role="button" className="bg-white/50 py-2 px-4 rounded-full hover:bg-white/10 hover:text-gray-100">
                                Voir plus
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="relative group">
                    <div>
                        <img src="https://img.genial.ly/60086eee474a920f86da11ce/d3168586-51d7-4f6a-82d5-c77fc72c3ded.png" alt="..." width={400}/>
                    </div>
                    <div className="absolute left-0 top-0 w-full h-full bg-black/80 delay-500 duration-500 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center">
                        <div className="text-white font-bold">
                            <h1>Mtsolola à la viande</h1>
                        </div>
                        <div className="mt-6">
                            <Link to="#" role="button" className="bg-white/50 py-2 px-4 rounded-full hover:bg-white/10 hover:text-gray-100">
                                Voir plus
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="relative group">
                    <div>
                        <img src="https://cuisine.land/upload/recettes/large/744_IETPH1GUEQ7C54QV.jpg" alt="..." width={300}/>
                    </div>
                    <div className="absolute left-0 top-0 w-full h-full bg-black/80 delay-300 duration-500 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center">
                        <div className="text-white font-bold">
                            <h1>Bananes au coco et viande</h1>
                        </div>
                        <div className="mt-6">
                            <Link to="#" role="button" className="bg-white/50 py-2 px-4 rounded-full hover:bg-white/10 hover:text-gray-100">
                                Voir plus
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}