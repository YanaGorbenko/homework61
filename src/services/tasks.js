import { Task } from '../db/models/Task.js';

export const getTasksService = () => Task.find();

export const getTaskServiceById = taskId => Task.findById(taskId);

export const addTaskService = body => Task.create(body);

export const deleteTaskService = taskId => Task.findByIdAndDelete(taskId);

export const updateTaskService = async (id, taskData, options) => {
  const result = await Task.findByIdAndUpdate(id, taskData, {
    returnDocument: 'after',
    includeResultMetadata: true,
    ...options,
  });

  if (!result.value) {
    return null;
  }

  return {
    data: result.value,
    isUpdated: result.lastErrorObject.updatedExisting,
  };
};
