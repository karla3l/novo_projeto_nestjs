import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskDto } from './dto/tasks.dto';
import { Task } from './entity/create.task';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }

  @Post()
  async create(@Body() Task: Task) {
    this.tasksService.create(Task);
  }

  @Put(':id')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(@Param('id') id: number, @Body() updateTask: TaskDto) {
    // this.tasksService.update(updateTask, id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }
}
