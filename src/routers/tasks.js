import { Router } from 'express';

import {
  addTask,
  deleteTask,
  getTaskById,
  getTasks,
  patchTask,
  putTask,
} from '../controllers/tasks.js';

const tasksRouter = Router();

tasksRouter.get('/', getTasks);

tasksRouter.get('/:taskId', getTaskById);

tasksRouter.delete('/:taskId', deleteTask);

tasksRouter.post('/', addTask);

tasksRouter.patch('/:taskId', patchTask);

tasksRouter.put('/:taskId', putTask);

export default tasksRouter;
