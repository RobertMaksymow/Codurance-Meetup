import express from "express";
import {
  getProducts,
} from "./getProducts.js";
const app = express();

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello from /')
})

//Middleware
app.use(express.json()); // allows us to accept JSON data in the req.body

//Create express router
const router = express.Router();

app.use("/api/products", getProducts);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
