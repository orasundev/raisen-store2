import { LATEST_PRODUCT_LIMIT } from "@/lib/constants";
import { PrismaClient } from "@/lib/generated/prisma/client";
import { convertToPlainObject } from "@/lib/utils";

export async function getLatestProducts() {
  const prisma = new PrismaClient();

  const data = await prisma.product.findMany({
    take: LATEST_PRODUCT_LIMIT,
    orderBy: { createdAt: "desc" },
  });
  // convert prisma data into plain object
  return convertToPlainObject(data);
}
