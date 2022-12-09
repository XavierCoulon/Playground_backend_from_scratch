import { ResponseError } from "./../error";
import { RequestHandler } from "express";
import { Book } from ".prisma/client";

type BookBody = {
  title: string;
  content: string;
  picture: string;
  categoryId: string;
  authorId: string;
};

export interface BookHandlers {
  getAll: RequestHandler<null, Book[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, Book | ResponseError, null>;
  create: RequestHandler<null, Book | ResponseError, BookBody>;
  update: RequestHandler<{ id: string }, Book | ResponseError, BookBody>;
  delete: RequestHandler<{ id: string }, Book | ResponseError, null>;
}
