import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet, { crossOriginEmbedderPolicy } from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpi.js";
import KPI from "./Models/KPI.js";
import productRoutes from "./routes/product.js";
import transactionRoutes from "./routes/transaction.js";
import Product from "./Models/Product.js";
import Transaction from "./Models/Transaction.js";
import { kpis, products, transactions } from "./Data/data.js";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
  origin : "http://localhost:5173",
}));


app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);

console.log("hellow");
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
  })
  .then(async () => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONE TIME ONLY OR AS NEEDED */
    // await mongoose.connection.db.dropDatabase();
    // KPI.insertMany(kpis);
    //Product.insertMany(products);
    //Transaction.insertMany(transactions);
  })
  .catch((error) => console.log(`${error} did not connect`));