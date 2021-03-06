import { defineMessages } from 'react-intl';

/**
 * Internationalized messages for use on project creation.
 */
export default defineMessages({
  createProject: {
    id: 'management.projects.create.title',
    defaultMessage: 'Create project',
  },
  cloneProject: {
    id: 'management.projects.clone.message',
    defaultMessage: 'The new project will be a clone of the project #{id} ({name}).',
  },
  clone: {
    id: 'management.projects.create.clone',
    defaultMessage: 'Clone',
  },
  areaSize: {
    id: 'management.projects.create.area_size',
    defaultMessage: 'Area size: {area} km{sq}',
  },
  taskNumber: {
    id: 'management.projects.create.tasks',
    defaultMessage: 'Number of tasks: {n}',
  },
  step1: {
    id: 'management.projects.create.steps.1',
    defaultMessage: 'Step 1: define area',
  },
  step2: {
    id: 'management.projects.create.steps.2',
    defaultMessage: 'Step 2: set tasks sizes',
  },
  step3: {
    id: 'management.projects.create.steps.3',
    defaultMessage: 'Step 3: trim task grid',
  },
  step4: {
    id: 'management.projects.create.steps.4',
    defaultMessage: 'Step 4: review',
  },
  name: {
    id: 'management.projects.create.review_tasks.name',
    defaultMessage: 'Name',
  },
  creationFailed: {
    id: 'management.projects.create.review_tasks.failure.message',
    defaultMessage: 'It was not possible to save your project due to an error: {error}',
  },
  create: {
    id: 'management.projects.create.review_tasks.button.create',
    defaultMessage: 'Create',
  },
  reviewTaskNumberMessage: {
    id: 'management.projects.create.review_tasks.number',
    defaultMessage: 'Your project will be created with {n} tasks.',
  },
  task: {
    id: 'management.projects.create.review_tasks.task',
    defaultMessage: 'task',
  },
  tasks: {
    id: 'management.projects.create.review_tasks.tasks',
    defaultMessage: 'tasks',
  },
  trimTasksDescriptionLine1: {
    id: 'management.projects.create.trim_tasks.description.1',
    defaultMessage: 'Trim the task grid to the area of interest (optional).',
  },
  trimTasksDescriptionLine2: {
    id: 'management.projects.create.trim_tasks.description.2',
    defaultMessage:
      'You can keep the current tasks or trim the area for your project. This can take some time to execute.',
  },
  trimToAOI: {
    id: 'management.projects.create.trim_tasks.trim_to_aoi',
    defaultMessage: 'Trim the tasks to define the exact Area of Interest for mapping.',
  },
  taskSizes: {
    id: 'management.projects.create.task_sizes.description',
    defaultMessage: 'General task size',
  },
  smaller: {
    id: 'management.projects.create.task_sizes.smaller',
    defaultMessage: 'Smaller',
  },
  larger: {
    id: 'management.projects.create.task_sizes.larger',
    defaultMessage: 'Larger',
  },
  invalidFile: {
    id: 'management.projects.create.errors.invalid',
    defaultMessage: 'Invalid file',
  },
  fileSize: {
    id: 'management.projects.create.errors.fileSize',
    defaultMessage: 'File size is higher than {fileSize} bytes',
  },
  splitTaskDescription: {
    id: 'management.projects.create.split_task.description',
    defaultMessage:
      'Make tasks smaller by clicking on specific tasks or drawing an area on the map.',
  },
  reset: {
    id: 'management.projects.create.reset.button',
    defaultMessage: 'Reset',
  },
  taskNumberMessage: {
    id: 'management.projects.create.split.tasks.number',
    defaultMessage: 'A new project will be created with {n} tasks.',
  },
  taskAreaMessage: {
    id: 'management.projects.create.split.tasks.area',
    defaultMessage: 'The size of each task is approximately {area} km{sq}.',
  },
  splitByDrawing: {
    id: 'management.projects.create.split_task.draw.button',
    defaultMessage: 'Draw area to split',
  },
  splitByClicking: {
    id: 'management.projects.create.split_task.click.button',
    defaultMessage: 'Click to split',
  },
  uploadError: {
    id: 'management.projects.create.upload_file.error',
    defaultMessage: 'Error when importing geometry. Verify if the file you uploaded is correct.',
  },
  backToPrevious: {
    id: 'management.projects.create.button.back',
    defaultMessage: 'Back to previous',
  },
  next: {
    id: 'management.projects.create.button.next',
    defaultMessage: 'Next',
  },
  trim: {
    id: 'management.projects.create.button.trim',
    defaultMessage: 'Trim',
  },
  draw: {
    id: 'management.projects.create.button.draw',
    defaultMessage: 'Draw',
  },
  uploadFile: {
    id: 'management.projects.create.button.upload_file',
    defaultMessage: 'Upload file',
  },
  deleteArea: {
    id: 'management.projects.create.button.delete_area',
    defaultMessage: 'Delete area',
  },
  arbitraryTasks: {
    id: 'management.projects.create.arbitrary_tasks',
    defaultMessage: 'Arbitrary tasks',
  },
  drawDescription: {
    id: 'management.projects.create.draw.description',
    defaultMessage: 'Draw the Area of Interest on the map.',
  },
  importDescription: {
    id: 'management.projects.create.upload.description',
    defaultMessage: 'Import a GeoJSON, KML, OSM or zipped SHP file.',
  },
  option1: {
    id: 'management.projects.create.options.1',
    defaultMessage: 'Option 1',
  },
  option2: {
    id: 'management.projects.create.options.2',
    defaultMessage: 'Option 2',
  },
});
