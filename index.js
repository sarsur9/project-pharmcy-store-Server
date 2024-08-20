import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/user.js";
import authRoute from "./routes/auth.js";
import mongoose from "mongoose"
import { default as productRoute } from "./routes/product.js";
import { default as cartRoute } from "./routes/cart.js";
import { default as orderRoute } from "./routes/order.js";
import { default as stripeRoute } from "./routes/stripe.js";


dotenv.config();
const app = express();
//check
try {
  const mongoURI =
    process.env.MONGO_URI || "mongodb://localhost:27017";
  const connection = await mongoose.connect(mongoURI);
  console.log(" great success");
} catch (error) {
  console.log(error);
}
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/payments", stripeRoute);

app.listen(process.env.PORT || 8080, () => {
  console.log("Backend server running!");
});