const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors({
    origin:"http://localhost:5173"
}));
app.use(express.json())

// let customers = [
//   {
//     name: prasanth,
//     date: "20-4-24",
//     startTime: "0800am",
//     endTime: "0600pm",
//     roomNumber: 102,
//     bookingid: 1,
//   },
//   {
//     name: vicky,
//     date: "20-3-24",
//     startTime: "0750am",
//     endTime: "0550pm",
//     roomNumber: 104,
//     bookingid: 2,
//   },
// ];
let rooms = [
  {
    roomnumber: 102,
    amenties: "single bedroom",
    priceperhour: "100RS",
    id: 1,
  },
  {
    roomnumber: 104,
    amenties: "double bedroom",
    priceperhour: "200RS",
    id: 2,
  },
];
app.get("/rooms", (req, res) => {
  res.json(rooms);
});
//create room API
app.post("/room", (req, res) => {   
  id = rooms.length + 1;
//   rooms.push({ ...req.body, id });
console.log(req.body);

  res.json({ message: "room created successfully" });
});

app.listen(3000, () => {
  console.log("Webserver Running on port 3000");
});
