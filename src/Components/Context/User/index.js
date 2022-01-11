import { onAuthStateChanged } from "firebase/auth";
import { initializeApp } from 'firebase-admin/app';
import { createContext, useState } from "react";
import auth from "../../Firebase";

export const UserContext = createContext("")
export default function UserProvider({children}) {
    const [user, setUser] = useState(null)
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })
    return(
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    )
}