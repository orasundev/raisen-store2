"use server";
import prisma from "@/db/prisma";
import { LATEST_PRODUCT_LIMIT } from "@/lib/constants";

import { convertToPlainObject } from "@/lib/utils";

export async function getLatestProducts() {
  //const prisma = new PrismaClient();

  const data = await prisma.product.findMany({
    take: LATEST_PRODUCT_LIMIT,
    orderBy: { createdAt: "desc" },
  });
  // convert prisma data into plain object
  return convertToPlainObject(data);
}

// Get single product by id
export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({ where: { slug: slug } });

  // convert prisma data into plain object
}
