import React, { useContext, useEffect } from "react";
import UserContext from "./UserContext";

function Card({ product, setCart, cart }) {
    const { setUser } = useContext(UserContext);

    useEffect(() => {
        const name = product.title.length > 21 ? product.title.substring(0, 20) : product.title;
        const itemDetail = product.description.length > 21 ? product.description.substring(0, 50) + "....." : product.description;

        setUser({ name, itemDetail });
    }, [product, setUser]);

    const handleClick = () => {
        const isItemInCart = cart.find((item) => item.id === product.id);

        if (!isItemInCart) {
            setCart([...cart, product]);
        }
    };
    const name = product.title.length > 21 ? product.title.substring(0, 20) : product.title;
    const itemDetail = product.description.length > 21 ? product.description.substring(0, 50) + "....." : product.description;
    return (
        <div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
            <div className="card h-100 d-flex flex-column p-3 rounded-3" style={{ height: "100%" }}>
                <div className="card-body d-flex flex-column">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text flex-grow-1">{itemDetail}</p>
                    <h6 className="card-title">{product.category}</h6>
                    <img src={product.image} className="card-img-top mb-3" alt="product" />
                    <div className="mt-auto">
                        <h6 className="card-title">{product.rating.rate}</h6>
                        <h6 className="card-title">{product.rating.count}</h6>
                        <button className="btn btn-primary w-100" onClick={handleClick}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;




// import React, { useContext, useEffect } from "react";
// import UserContext from "./UserContext";

// function Card({ product, setCart, cart }) {
//     const { setUser } = useContext(UserContext);

//     useEffect(() => {
//         const name = product.title.length > 21 ? product.title.substring(0, 20) : product.title;
//         const itemDetail = product.description.length > 21 ? product.description.substring(0, 30) + "....." : product.description;

//         setUser({ name, itemDetail });
//     }, [product, setUser]);

//     const handleClick = () => {
//         const isItemInCart = cart.find((item) => item.id === product.id);

//         if (!isItemInCart) {
//             setCart([...cart, product]);
//         }
//     };
//     const name = product.title.length > 21 ? product.title.substring(0, 20) : product.title;
//     const itemDetail = product.description.length > 21 ? product.description.substring(0, 30) + "....." : product.description;
//     return (
//         <div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
//             <div className="card p-3 rounded-3" style={{ height: "100%" }}>
//                 <div className="card-body">
//                     <h4 className="card-title">{name}</h4>
//                     <p className="card-text">{itemDetail}</p>
//                     <h6 className="card-title">{product.category}</h6>
//                     <img src={product.image} className="card-img-top" alt="product" />
//                     <h6 className="card-title">{product.rating.rate}</h6>
//                     <h6 className="card-title">{product.rating.count}</h6>
//                     <button className="btn btn-primary" onClick={handleClick}>Add to Cart</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Card;
