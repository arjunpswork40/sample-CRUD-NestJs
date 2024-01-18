import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Task } from '@prisma/client';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async getAllTasks(): Promise<Task[]> {
    return this.prisma.task.findMany();
  }

  async getTaskById(id: number): Promise<Task | null> {
    return this.prisma.task.findUnique({
      where: { id },
    });
  }

  async createTask(title: string, description?: string): Promise<Task> {
    return this.prisma.task.create({
      data: { title, description },
    });
  }

  async updateTask(id: number, title: string, description?: string): Promise<Task> {
    return this.prisma.task.update({
      where: { id },
      data: { title, description },
    });
  }

  async deleteTask(id: number): Promise<Task> {
    return this.prisma.task.delete({
      where: { id },
    });
  }
}
