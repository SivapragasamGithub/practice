import { createContext, useState } from "react";

let UserContext = createContext();

export const UserProvider = ({children})=>{
    const [userName,setUsername] = useState("It's me")
return<UserContext.Provider value={{userName,setUsername}}>
    {children}
</UserContext.Provider>
}

export default UserContext;
