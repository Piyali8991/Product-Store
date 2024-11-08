import express from "express";
import cors from "cors";
import { getProducts, createProduct, updateProduct, deleteProduct } from "../controllers/product.controller.js";

const app = express();

// Set up CORS with specified options
const corsOptions = {
  origin: '*',  // Allows requests from any origin, change to specific origin in production
  methods: 'GET,POST,DELETE,PUT',
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions)); // Apply CORS globally

// Create the router
const router = express.Router();

// Define your routes without adding CORS middleware again
router.get("/", getProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
