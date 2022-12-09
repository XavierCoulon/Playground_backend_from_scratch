import { ResponseError } from "./../error";
import { RequestHandler } from "express";
import { Category } from ".prisma/client";

type CategoryBodyCreate = {
  name: string;
};

export interface CategoryHandlers {
  getAll: RequestHandler<null, Category[] | ResponseError, null>;
  create: RequestHandler<null, Category | ResponseError, CategoryBodyCreate>;
}
