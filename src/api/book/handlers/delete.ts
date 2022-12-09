import { BookHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const deleteOneBook: BookHandlers["delete"] = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await prisma.book.delete({
      where: {
        id: id,
      },
    });

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book deleted ;-)" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default deleteOneBook;
