import { RequestHandler } from "express";
import { pick } from "lodash";

export const basicClean: (dto: Record<string, unknown>) => RequestHandler =
  (dto) => (req, __, next) => {
    req.body = pick(req.body, Object.keys(dto));

    next();
  };
