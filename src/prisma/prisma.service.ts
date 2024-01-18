// src/prisma/prisma.service.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class PrismaService {
  constructor() {}
  task = prisma.task;
}
