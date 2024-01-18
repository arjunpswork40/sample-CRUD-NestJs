import { Controller, Get, Param, Post, Body, Put, Delete, ValidationPipe } from '@nestjs/common';

import { TasksService } from './tasks.service';
import { Task } from '@prisma/client';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAllTasks(): Promise<Task[]> {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  getTaskById(@Param('id') id: string): Promise<Task | null> {
    return this.tasksService.getTaskById(+id);
  }

  @Post()
  createTask(@Body(new ValidationPipe({ transform: true })) createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(createTaskDto.title, createTaskDto.description);
  }

  @Put(':id')
  updateTask(@Param('id') id: string, @Body(new ValidationPipe({ transform: true })) updateTaskDto: UpdateTaskDto): Promise<Task> {
    return this.tasksService.updateTask(+id, updateTaskDto.title, updateTaskDto.description);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string): Promise<Task> {
    return this.tasksService.deleteTask(+id);
  }
}
