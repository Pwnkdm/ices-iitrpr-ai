import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/dbConfig.js";
import cors from "cors";
const app = express();
import userRouter from "./routes/user.Route.js";
import totRouter from "./routes/tot.Route.js";
import authRoutes from "./routes/auth.Routes.js";
import dataRoutes from "./routes/data.Routes.js";
import getDashboard from "./routes/dashboard.Routes.js";

dotenv.config({ path: "./config.env" });
app.use(
  cors({
    origin: process.env.BASE_URL,
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

connectDB();

app.use("/user", userRouter);
app.use("/tot", totRouter);

app.use("/api/auth", authRoutes);
app.use("/api/data", dataRoutes);
app.use("/api/dashboard", getDashboard);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
