import { useState } from "react"
import Card from "./Card"
import Header from "./Header"


function App() {

  const Products = [
    {
      "name": "Wireless Earbuds",
      "price": 50,
      "description": "High-quality wireless earbuds with noise-cancellation and long battery life."
    },
    {
      "name": "Phone Case",
      "price": 15,
      "description": "Durable and stylish phone case available in various colors and designs."
    },
    {
      "name": "Screen Protector",
      "price": 10,
      "description": "Tempered glass screen protector to safeguard your phone's display from scratches."
    },
    {
      "name": "Portable Charger",
      "price": 25,
      "description": "Compact portable charger with 10,000mAh capacity for on-the-go power."
    },
    {
      "name": "Car Mount",
      "price": 20,
      "description": "Adjustable car mount for safe and convenient phone usage while driving."
    },
    {
      "name": "Bluetooth Speaker",
      "price": 35,
      "description": "Portable Bluetooth speaker with excellent sound quality and waterproof design."
    },
    {
      "name": "Wireless Charger",
      "price": 30,
      "description": "Fast wireless charger compatible with Qi-enabled devices."
    },
    {
      "name": "Pop Socket",
      "price": 8,
      "description": "Collapsible grip and stand for your phone, providing a secure hold and hands-free use."
    },
    {
      "name": "Selfie Stick",
      "price": 12,
      "description": "Extendable selfie stick with Bluetooth remote for capturing perfect selfies."
    },
    {
      "name": "Phone Stand",
      "price": 10,
      "description": "Adjustable phone stand for hands-free viewing and video calls."
    },
    {
      "name": "Headphone Adapter",
      "price": 7,
      "description": "3.5mm headphone jack adapter for connecting wired headphones to your phone."
    },
    {
      "name": "Memory Card",
      "price": 18,
      "description": "64GB microSD memory card for expanding your phone's storage capacity."
    },
    {
      "name": "Phone Ring Holder",
      "price": 6,
      "description": "Ring holder for a secure grip and stand functionality for your phone."
    },
    {
      "name": "USB-C Cable",
      "price": 12,
      "description": "Durable USB-C charging cable with fast charging support."
    },
    {
      "name": "Phone Cleaner",
      "price": 5,
      "description": "Portable phone cleaner with microfiber cloth for keeping your screen smudge-free."
    },
    {
      "name": "Wireless Keyboard",
      "price": 40,
      "description": "Compact wireless keyboard for easy typing on your phone or tablet."
    },
    {
      "name": "Stylus Pen",
      "price": 15,
      "description": "Precision stylus pen for accurate touch screen input on your phone or tablet."
    },
    {
      "name": "Armband",
      "price": 13,
      "description": "Adjustable armband for secure phone storage during workouts."
    },
    {
      "name": "Gaming Controller",
      "price": 35,
      "description": "Wireless gaming controller compatible with mobile devices for enhanced gaming experience."
    },
    {
      "name": "Phone Wallet",
      "price": 18,
      "description": "Slim phone wallet with card slots and RFID protection."
    }
  ]
const[quantity,setQuantity] = useState(0)
const[btn,setBtn]= useState("Add to cart")



  return (
    <>
      <Header quantity={quantity} />
      <div className="container" >
        <div className="row" >
          <div className="col-lg-8" >

            <div className="d-flex flex-wrap" >
              {
                Products.map((product) => {
                  // return (<Card name={product.name} price={product.price} description={product.description} />)// add props instead of product in card components if want to use this method
                  return ( <Card product={product} btn={btn} inc={inc} />)
                })
              }
            </div>
          </div>
          <div className="col-lg-4 text-center"><h1>Cart</h1></div>
        </div>
      </div>
    </>
  )
}

export default App
