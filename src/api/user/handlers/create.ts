import { UserHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const createUser: UserHandlers["create"] = async (req, res) => {
  try {
    const { name, password } = req.body;
    const newUser = await prisma.user.create({
      data: {
        name: name,
        password: password,
      },
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default createUser;
