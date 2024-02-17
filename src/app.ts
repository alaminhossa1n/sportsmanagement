import express, { Request, Response, Application } from "express";
import cors from "cors";
import { UserRoutes } from "./app/modules/User/user.route";
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", UserRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Mr. Developer!");
});

export default app;
