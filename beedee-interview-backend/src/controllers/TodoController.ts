import fs from "fs";
import { Todo } from "../models/TodoModel";
import { Request, Response } from "express";
import { ErrorMessage } from "../utils/errorMessage";
import { getPaginatedData, getPaginatedCount } from "../utils/pagination";

export default class TodoController {
  private static readonly STORAGE_FILE = "example/todos.json";
  private static readonly MESSAGE_KEY = "Todo";

  static getAllTodos(): Todo[] {
    try {
      const data = fs.readFileSync(this.STORAGE_FILE, "utf8");
      return JSON.parse(data);
    } catch (error) {
      console.error("Error reading todos from file:", error);
      return [];
    }
  }

  static async getTodosList(req: Request, res: Response): Promise<any> {
    try {
      const todos = this.getAllTodos();
      const page = parseInt(req.query.page as string) || 1;
      const pageSize = parseInt(req.query.pageSize as string) || 10;

      const response = {
        data: getPaginatedData(todos, page, pageSize),
        meta: getPaginatedCount(todos,page, pageSize)
    };
      res.json(response);
    } catch (error) {
      res.status(500).json({ message: "" });
    }
  }

  static saveTodos(todos: Todo[]): void {
    try {
      fs.writeFileSync(this.STORAGE_FILE, JSON.stringify(todos));
    } catch (error) {
      console.error("Error writing todos to file:", error);
    }
  }

  static async addTodo(req: Request, res: Response): Promise<any> {
    try {
      const timestampId = Date.now().toString();
      const { title, description } = req.body;
      const todos = this.getAllTodos();
      const data = {
        title,
        description: description || "",
        id: timestampId,
        completed: false,
      };
      todos.push(data);
      this.saveTodos(todos);
      res.json(data);
    } catch (error: any) {
      return res.status(500).json({ message: error?.message || "" });
    }
  }

  static async updateTodo(req: Request, res: Response): Promise<any> {
    try {
      const id = req.params.id;
      const { title, completed, description } = req.body;
      const todos = this.getAllTodos();
      const index = todos.findIndex((todo: Todo) => todo.id === id);
      const existingTodo = todos[index];
      if (!existingTodo) {
        return res.status(404).json({
          message: ErrorMessage[404].replace("{{data}}", this.MESSAGE_KEY),
        });
      }
      todos[index] = {
        id: id,
        title: title || existingTodo.title,
        description: description || existingTodo.description,
        completed: completed !== undefined ? completed : existingTodo.completed,
      } as Todo;

      //   todos[index] = updatedData;
      this.saveTodos(todos);
      res.json(todos[index]);
    } catch (error: any) {
      return res.status(500).json({ message: error?.message || "" });
    }
  }

  static async deleteTodo(req: Request, res: Response): Promise<any> {
    try {
      const id = req.params.id;
      const todos = this.getAllTodos();
      const index = todos.findIndex((todo: Todo) => todo.id === id);
      const existingTodo = todos[index];
      if (!existingTodo) {
        return res.status(404).json({
          message: ErrorMessage[404].replace("{{data}}", this.MESSAGE_KEY),
        });
      }
      const filteredTodos = todos.filter((todo: Todo) => todo.id !== id);
      this.saveTodos(filteredTodos);
      res.json({ message: "success" });
    } catch (error: any) {
      return res.status(500).json({ message: error?.message || "" });
    }
  }
}
