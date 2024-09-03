import { Children, createContext } from "react";

let userContext = createContext();

export const UserProvider = ({ Children }) => {

    const [bookToEdit, setBookToEdit] = useState(null);
   
    let contextValue = { bookToEdit }

    return <userContext.Provider value={{bookToEdit,setBookToEdit}}>
        {Children}
    </userContext.Provider>
}
export default userContext