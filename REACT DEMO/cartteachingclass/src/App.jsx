import "bootstrap/dist/css/bootstrap.min.css"
import Product from "./Product"
import Cart from "./Cart"
import { useState } from "react"
function App() {

const products =[
  {
    "name": "Wireless Earbuds",
    "price": 30,
    "description": "Compact and lightweight earbuds with excellent sound quality and long battery life."
  },
  {
    "name": "Portable Charger",
    "price": 20,
    "description": "High-capacity power bank with fast charging capabilities and dual USB ports."
  },
  {
    "name": "Phone Case",
    "price": 13,
    "description": "Durable and stylish phone case with shock-absorbing protection."
  },
  {
    "name": "Screen Protector",
    "price": 9,
    "description": "Tempered glass screen protector with high transparency and scratch resistance."
  },
  {
    "name": "Car Mount",
    "price": 16,
    "description": "Universal car mount with strong suction and adjustable viewing angles."
  },
  {
    "name": "Bluetooth Speaker",
    "price": 25,
    "description": "Portable Bluetooth speaker with powerful sound and waterproof design."
  },
  {
    "name": "Wireless Charger",
    "price": 23,
    "description": "Fast wireless charger with sleek design and wide compatibility."
  },
  {
    "name": "Selfie Stick",
    "price": 10,
    "description": "Extendable selfie stick with Bluetooth remote and adjustable holder."
  },
  {
    "name": "Phone Stand",
    "price": 8,
    "description": "Adjustable phone stand with anti-slip base and foldable design."
  },
  {
    "name": "Memory Card",
    "price": 18,
    "description": "High-speed memory card with large storage capacity for photos and videos."
  },
  {
    "name": "Earphones",
    "price": 15,
    "description": "Comfortable in-ear earphones with excellent sound quality and built-in microphone."
  },
  {
    "name": "USB Cable",
    "price": 7,
    "description": "Durable and fast-charging USB cable with reinforced connectors."
  },
  {
    "name": "Pop Socket",
    "price": 6,
    "description": "Collapsible grip and stand for phones and tablets."
  },
  {
    "name": "Phone Cleaner",
    "price": 5,
    "description": "Portable screen cleaner with microfiber cloth and cleaning solution."
  },
  {
    "name": "Power Adapter",
    "price": 12,
    "description": "Compact power adapter with dual USB ports and fast charging technology."
  },
  {
    "name": "Bike Mount",
    "price": 14,
    "description": "Sturdy and adjustable bike mount for secure phone attachment."
  },
  {
    "name": "Stylus Pen",
    "price": 11,
    "description": "High-precision stylus pen with smooth touch and wide compatibility."
  },
  {
    "name": "Camera Lens Kit",
    "price": 19,
    "description": "Universal clip-on camera lens kit with wide-angle, macro, and fisheye lenses."
  },
  {
    "name": "Phone Wallet",
    "price": 10,
    "description": "Slim and stylish phone wallet with card slots and RFID protection."
  },
  {
    "name": "Phone Armband",
    "price": 17,
    "description": "Comfortable and sweatproof phone armband for workouts and running."
  }
]
const [total,setTotal] = useState(0)
const [items,setItems] = useState([])

let addItem = (product)=>{ 
setItems([...items,product])
setTotal(total+product.price)
}

let removeItem =(product)=>{
  let index = items.findIndex(item=>item.name === product.name)
  if(index != -1){
    items.splice(index,1)
    setItems([...items])
    setTotal(total-product.price)
  }
}
  return (
    <>
      <div className="container">
      <div className="row" >
        <div className="col-lg-8" >
          <h1>Product</h1>
          <div className="d-flex flex-wrap" >
         {
          products.map((product)=>{
            return <Product product={product} addItem={addItem} />
          })
         }
         </div>

        </div>
        <div className="col-lg-4" >
          <h1>Cart</h1>
          <Cart items={items} total={total} removeItem={removeItem}/>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
