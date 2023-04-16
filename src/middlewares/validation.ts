import type { RequestHandler } from "express";
import { validationResult } from "express-validator";

export const validation: RequestHandler = (req, res, next) => {
  const result = validationResult(req);
  if (result.isEmpty()) return next();

  res.status(400).json({
    errors: result.array(),
    success: false,
  });
};
