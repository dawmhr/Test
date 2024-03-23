import express, { Request, Response } from "express";
import TodoController from "../controllers/TodoController";
import {
  validateCreatePayload,
  validateUpdatePayload,
} from "../utils/validationMiddleware";

const router = express.Router();

router.get("/list", async (req: Request, res: Response) => TodoController.getTodosList(req, res));

router.post("/", validateCreatePayload, (req: Request, res: Response) =>
  TodoController.addTodo(req, res)
);

router.put("/:id", validateUpdatePayload, async (req: Request, res: Response) =>
  TodoController.updateTodo(req, res)
);

router.delete(
  "/:id",
  validateUpdatePayload,
  async (req: Request, res: Response) => TodoController.deleteTodo(req, res)
);

export default router;
