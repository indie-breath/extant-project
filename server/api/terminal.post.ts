import { defineEventHandler, readBody } from "h3";
import { PrismaClient } from '@prisma/client';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const prisma = new PrismaClient();

  const employees = await prisma.employees.findFirst({
    where: {
      firstName: {
        equals: body.input,
        mode: 'insensitive',
      }
    }
  });

  return {
    data: employees,
  }
})
