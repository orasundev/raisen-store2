import { Noto_Sans_Telugu } from "next/font/google";
import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const currency = z
  .string()
  .refine((value) =>
    /^\d+(\.\d{2}) ?$/.test(formatNumberWithDecimal(Number(value))),
  );

export const insertProductSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  slug: z.string().min(3, "Slug must be at least 3 characters long"),
  category: z.string().min(3, "Category must be at least 3 characters long"),
  brand: z.string().min(3, "Brand must be at least 3 characters long"),
  description: z
    .string()
    .min(3, "Description must be at least 3 characters long"),
  stock: z.number(),
  numReviews: z.number(),
  images: z
    .array(z.string())
    .min(1, "Images must be at least 1 characters long"),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  colors: z
    .array(z.string())
    .min(1, "Colors must be at least 1 characters long"),
  sizes: z.array(z.string()).min(1, "Sizes must be at least 1 characters long"),
  price: currency,

  //  price: z.number().min(3, 'Price must be at least 3 characters long'),
  //  rating: z.number().min(3, 'Rating must be at least 3 characters long'),
  //  numReviews: z.number().min(3, 'NumReviews must be at least 3 characters long'),
});
