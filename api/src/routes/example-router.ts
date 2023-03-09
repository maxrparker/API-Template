import express, { Request, Response } from "express";
import { JobsHub } from "../jobs";
import { ExampleSerivce } from "../services/example-service";

export const exampleRouter = express.Router();
const exampleService = new ExampleSerivce();

exampleRouter.get("/", async (req: Request, res: Response) => {
  const results = await exampleService.getAll();
  res.json(results);
});

//Run an example job
exampleRouter.get("/job", async (req: Request, res: Response) => {
  const results = await JobsHub.notify("Example Job"); // TODO Work on this
  res.json(results);
});

exampleRouter.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const results = await exampleService.get(id);
  res.json(results);
});

exampleRouter.post("/", async (req: Request, res: Response) => {
  const account = req.body;
  const results = await exampleService.create(account);
  res.json(results);
});

exampleRouter.put("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const account = req.body;
  const results = await exampleService.update(id, account);
  res.json(results);
});

exampleRouter.delete("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const results = await exampleService.delete(id);
  res.json(results);
});
