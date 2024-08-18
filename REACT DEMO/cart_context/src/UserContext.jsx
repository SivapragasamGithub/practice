import { createContext, useState } from "react";

let UserContext = createContext();

export const UserProvider = ({children})=>{
    const [subTotal,setSubTotal] = useState(0)
    const [grandTotal,setGrandTotal] = useState(0)
    
return<UserContext.Provider value={{subTotal,setSubTotal,grandTotal,setGrandTotal}}>
    {children}
</UserContext.Provider>
}

export default UserContext;