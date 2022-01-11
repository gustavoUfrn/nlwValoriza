import "reflect-metadata";
import express, { Request, Response, NextFunction } from 'express';
import "express-async-errors";
import { router } from "./routes";

const app = express();

app.use(express.json());

import "./database"

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return response.status(400).json({
      error: "Internal Server Error"
    })
  }
})

app.listen(3333, () => console.log("Servidor rodando!!"));