import { defineEventHandler, readBody } from "h3";
import { PrismaClient } from '@prisma/client';

const help = [
  "findemployee: \n Returns the details of all Extant employees, unless flags are used to filter by first or last name. \n Command structure: \n  findemployee \n  findemployee -fn=\"<firstName>\" -- filters by first name \n  findemployee -ln=\"<lastName>\" -- filters by last name",
  "clear: \n  Clears the terminal to a blank screen.",
  "return: \n  Returns back home."
];

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const prisma = new PrismaClient();
  let output = body.input + "\n";

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

      output = output + "Employee ID: " + employees.id + " | Employee Name: " + employees.firstName + " " + employees.lastName;
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

      output = output + "Employee ID: " + employees.id + " | Employee Name: " + employees.firstName + " " + employees.lastName;
    }
    else if(body.input == "findemployee") {
      output = output + "Extant Employees:\n";
      const employees = await prisma.employees.findMany();
      for(let x = 0; x < employees.length; x++) {
        output = output + " Employee ID: " + employees[x].id + " | Employee Name: " + employees[x].firstName + " " + employees[x].lastName + "\n";
      }
    }
    else {
      output = output + help[0];
    }
  }
  else if(body.input.includes("help")) {
    for(let i = 0; i < help.length; i++) {
      output = output + help[i] + "\n";
    }
  }
  else if(body.input.includes("clear")) {
    output = "clear";
  }
  else if(body.input.includes("return")) {
    output = "return";
  }
  else {
    output = output + "Invalid Command"
  }

  return {
    data: output,
  }
})
