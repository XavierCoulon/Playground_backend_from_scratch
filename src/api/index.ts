import { Router } from "express";
import auth from "./auth/routes";
import books from "./book/routes";
import categories from "./category/routes";
import users from "./user/routes";

const router = Router();
router.use("/auth", auth);
router.use("/book", books);
router.use("/category", categories);
router.use("/user", users);

export default router;
