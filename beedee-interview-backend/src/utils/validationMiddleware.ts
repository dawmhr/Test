import { body, param, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export const validateCreatePayload = [
  body("title").notEmpty().withMessage("Title is required").isString(),
  validateRequest,
];

export const validateUpdatePayload = [
    param("id").notEmpty().withMessage("ID is required").isString(),
    validateRequest,
  ];
