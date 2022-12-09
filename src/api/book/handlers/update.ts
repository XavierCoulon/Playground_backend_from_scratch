import { BookHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const updateBook: BookHandlers["update"] = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, categoryId, authorId } = req.body;
    const book = await prisma.book.update({
      where: {
        id: id,
      },
      data: {
        title: title,
        content: content,
        categoryId: categoryId,
        authorId: authorId,
      },
    });
    res.status(201).json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default updateBook;
