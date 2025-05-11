//import { PrismaClient } from '@prisma/client';
import { PrismaClient } from "@/lib/generated/prisma/client";
import sampleData from "./sample-data";
import prisma from "./prisma";

async function main() {
  //const prisma = new PrismaClient();

  // await prisma.user.deleteMany();
  // await prisma.user.createMany({ data: sampleData.users })
  await prisma.product.deleteMany();
  await prisma.product.createMany({ data: sampleData.products });
  console.log("Database seeded successfully!");
}

main();
