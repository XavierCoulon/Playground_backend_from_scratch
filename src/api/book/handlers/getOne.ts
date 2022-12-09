import { BookHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const getOneBook: BookHandlers["getOne"] = async (req, res) => {
  try {
    const { id } = req.params;
    // ou bien findUniqueThrow
    const book = await prisma.book.findUnique({
      where: {
        id: id,
      },
    });

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getOneBook;
