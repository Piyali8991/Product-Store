import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';

import productRoutes from "./routes/product.route.js";

//const express = require("express");
const app = express();


// Middleware for Cross-Origin Isolation headers
/*app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  next();
});*/

dotenv.config();

//const app = express();
const PORT= process.env.PORT ||3000

app.use(express.json()); // Middleware to allow JSON data in req.body

app.use("/api/products",productRoutes);

// Start the server
app.listen(PORT, async () => {
    try {
        await connectDB(); // Ensure DB connection is awaited and handled
        console.log("Server started at http://localhost:"+PORT);
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1); // Exit process with failure
    }
});
