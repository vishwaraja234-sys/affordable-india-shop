import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoutes";
import productRoutes from "./routes/productRoutes";
import cartRoutes from "./routes/cartRoutes";
import orderRoutes from "./routes/orderRoutes";
import webhookRoutes from "./routes/webhookRoutes";

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));

// raw body for Stripe webhook signature verification
app.use(
  "/webhook",
  bodyParser.raw({ type: "application/json" })
);

// JSON parser for regular routes
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/webhook", webhookRoutes);

app.get("/api/health", (_, res) => res.json({ ok: true }));

export default app;
