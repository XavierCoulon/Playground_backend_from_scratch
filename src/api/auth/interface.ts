import { User } from "@prisma/client";
import { RequestHandler } from "express";
import { ResponseError } from "../../interfaces/interfaces";

type TUserwithoutPassword = Omit<User, "password">;

type TLoginBody = {
  name: string;
  password: string;
};

type TRegisterBody = Omit<User, "id" | "createdAt" | "updatedAt">;

export interface AuthController {
  signIn: RequestHandler<
    null,
    TUserwithoutPassword | ResponseError,
    TLoginBody,
    null
  >;
  signUp: RequestHandler<
    null,
    TUserwithoutPassword | ResponseError,
    TRegisterBody,
    null
  >;
}
