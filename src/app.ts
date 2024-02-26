import express, { Request, Response, Application } from "express";
import cors from "cors";
import { AuthRoutes } from "./app/modules/Auth/auth.routes";
import { ProductsRoutes } from "./app/modules/Products/products.routes";
import { soldRoutes } from "./app/modules/SoldProducts/SoldProducts.routes";
const app: Application = express();

const corsOptions = {
  origin: "http://localhost:5173", // Specify your development origin
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

app.use(express.json());
app.use(cors(corsOptions));

app.use("/api/auth", AuthRoutes);
app.use("/api/products", ProductsRoutes);
app.use("/api/product", soldRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Mr. Developer!");
});

export default app;
