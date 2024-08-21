import React from "react";
import Products from "./Products";
import { UserProvider } from "./UserContext";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
    return (
        <UserProvider>
            <Products />
        </UserProvider>
    );
}

export default App;
