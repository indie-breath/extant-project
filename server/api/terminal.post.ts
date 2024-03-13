import { defineEventHandler, readBody } from "h3";
import { PrismaClient } from '@prisma/client';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const prisma = new PrismaClient();
  let output:string;

  if(body.input.includes("findemployee")) {
    if(body.input.includes("-fn")) {
      let options = body.input.split("=");
      options = options[1];
      options = options.replace("\"", "");
      options = options.replace("\"", "");

      const employees = await prisma.employees.findFirst({
        where: {
          firstName: {
            equals: options,
            mode: "insensitive",
          },
        }
      })

      output = "Employee ID: " + employees.id + " | Employee Name: " + employees.firstName + " " + employees.lastName;
    }
    else if(body.input.includes("-ln")) {
      let options = body.input.split("=");
      options = options[1];
      options = options.replace("\"", "");
      options = options.replace("\"", "");

      const employees = await prisma.employees.findFirst({
        where: {
          lastName: {
            equals: options,
            mode: "insensitive",
          },
        }
      })

      output = "Employee ID: " + employees.id + " | Employee Name: " + employees.firstName + " " + employees.lastName;
    }
    else if(body.input == "findemployee") {
      output = "Extant Employees:\n";
      const employees = await prisma.employees.findMany();
      for(let x = 0; x < employees.length; x++) {
        output = output + "Employee ID: " + employees[x].id + " | Employee Name: " + employees[x].firstName + " " + employees[x].lastName + "\n";
      }
    }
    else {
      output = "findemployee command structure: \n findemployee \n findemployee -fn=\"<firstName>\" \n findemployee -ln=\"<lastName>\"";
    }
  }
  else if(body.input.includes("clear")) {
    output = "clear";
  }
  else {
    output = "Invalid Command"
  }

  return {
    data: output,
  }
})
