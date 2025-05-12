This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Prisma Setup.
npm i -D prisma @prisma/client
Now initiliaze prisma.
npx prisma init
Install Prisma Extension.
prisma

create schema.prisma model

Now run create command.
npx prisma generate will create the client.

now migrate db
npx prisma migrate dev --name init

    Successfully Migrated Schema.

    Now insert the sample seed data to database.
        We need to create a sync function.

                    //import { PrismaClient } from '@prisma/client';
                    import { PrismaClient } from "@/lib/generated/prisma/client";
                    import sampleData from "./sample-data";

                    async function main() {
                    const prisma = new PrismaClient();

                    // await prisma.user.deleteMany();
                    // await prisma.user.createMany({ data: sampleData.users })
                    await prisma.product.deleteMany();
                    await prisma.product.createMany({ data: sampleData.products });
                    console.log("Database seeded successfully!");
                    }

                    main();

Now execute it.
npx tsx .\db\seed.ts
Successfully Created.

npx prisma studio

Lecture 8

Using Zod.
Typescript-first schema validation with static type inference.

    so we cnnot use "any" in tsx.
    use zod.
    npm i zod


    Lecture 10
    Serverless Environment Setup.

    npm install @prisma/adapter-neon
    npm install @neondatabase/serverless
    npm install ws
    npm i --save-dev @types/ws

Lecture 11:
npx shadcn@latest add badge --legacy-peer-deps

Lecture 12:
Deployment on Vercel
