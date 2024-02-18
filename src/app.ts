import express, { Request, Response, Application } from "express";
import cors from "cors";
import { AuthRoutes } from "./app/modules/Auth/auth.routes";
import { ProductsRoutes } from "./app/modules/Products/products.routes";
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", AuthRoutes);
app.use("/api/products", ProductsRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Mr. Developer!");
});

export default app;
