import { ResponseError } from "./../error";
import { RequestHandler } from "express";
import { User } from ".prisma/client";

type UserBodyCreate = {
  name: string;
  password: string;
};

export interface UserHandlers {
  getAll: RequestHandler<null, User[] | ResponseError, null>;
  create: RequestHandler<null, User | ResponseError, UserBodyCreate>;
}
