import Cart from "./Cart";
import Login from "./Login";
import Menu from "./Menu";
import Search from "./Search";

export function OpenPopUp(name) {
    document.getElementById(`popup-${name}`).classList.remove('hidden')
}
export function ClosePopUp(name) {
    document.getElementById(`popup-${name}`).classList.add('hidden')
}
function PopUp({name}) {
    return(
        <div id={`popup-${name}`} className="hidden"> 
            <div className={`bg-black/90 backdrop-blur-sm w-full h-full fixed top-0 left-0`} onClick={() => ClosePopUp(name)}>
            </div>
            <div className="fixed bg-white rounded-md left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex py-6 px-10">
                <div className="absolute top-0 left-2 cursor-pointer text-black text-2xl" onClick={() => ClosePopUp(name)}>
                    <i className="fas fa-times"></i>
                </div>
                {name === "cart" ? (
                    <Cart />
                    ) : name === "login" ? <Login /> : name === "search" ? <Search /> : name === "menu" ? <Menu /> : <p>Aucun contenu !</p>}
            </div>
        </div>
    )
}

export default PopUp