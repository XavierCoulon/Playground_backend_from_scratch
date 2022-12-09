import { BookHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const createBook: BookHandlers["create"] = async (req, res) => {
  try {
    const { title, content, categoryId, authorId } = req.body;
    const newBook = await prisma.book.create({
      data: {
        title: title,
        content: content,
        categoryId: categoryId,
        authorId: authorId,
      },
    });
    res.status(201).json(newBook);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default createBook;
