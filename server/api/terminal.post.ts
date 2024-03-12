import { defineEventHandler, readBody } from "h3";
import { PrismaClient } from '@prisma/client';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const prisma = new PrismaClient();
  let output:string;

  if(body.input == "findemployee") {
    if(body.input.includes("-fn")) {
    }
    else {
      const employees = await prisma.employees.findMany();
      for(let x = 0; x < employees.length; x++) {
        if (!output) {
          output = "Employee ID: " + employees[x].id + " | Employee Name: " + employees[x].firstName + " " + employees[x].lastName;
        }
        else {
          output = output + " ||| " + "Employee ID: " + employees[x].id + " | Employee Name: " + employees[x].firstName + " " + employees[x].lastName + " ||| ";
        }
      }
    }
  }

  return {
    data: output,
  }
})
