import express, { Request, Response, Application } from "express";
import cors from "cors";
import { AuthRoutes } from "./app/modules/Auth/auth.routes";
import { ProductsRoutes } from "./app/modules/Products/products.routes";
import { soldRoutes } from "./app/modules/SoldProducts/SoldProducts.routes";
import { globalErrorhandler } from "./app/middlewares/globalErrorhandler";
const app: Application = express();

// const corsOptions = {
//   origin: "https://peppy-lollipop-82fc11.netlify.app/",
//   credentials: true,
// };

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://peppy-lollipop-82fc11.netlify.app",
  ],
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));

app.use("/api/auth", AuthRoutes);
app.use("/api/products", ProductsRoutes);
app.use("/api/product", soldRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Mr. Developer!");
});

app.use(globalErrorhandler);

export default app;
