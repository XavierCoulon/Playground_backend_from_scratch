import { BookHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const getAllBooks: BookHandlers["getAll"] = async (req, res) => {
  try {
    const books = await prisma.book.findMany({
      include: {
        category: true,
        author: true,
      },
    });
    res.status(200).json(books);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getAllBooks;
