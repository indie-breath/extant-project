import { defineEventHandler, readBody } from "h3";
import { PrismaClient } from '@prisma/client';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const prisma = new PrismaClient();

  /*const createCommand = await prisma.commands.create({
    data: {
      commandId: "help",
      output: "You have asked for help.",
    }
  })*/

  const command = await prisma.commands.findUnique({
    where: {
      commandId: body.input,
    }
  })

  const output = command.output;

  return {
    data: output,
  }
})
