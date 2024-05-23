//install dependencies

import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

export function connectPrisma(dbUrl: string) {
  const prisma = new PrismaClient({
    datasourceUrl: dbUrl,
  }).$extends(withAccelerate());

  return prisma;
}
