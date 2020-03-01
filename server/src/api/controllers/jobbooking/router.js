import * as express from 'express';
import controller from './controller';

export default express
  .Router()
  .get('/:status', controller.getByStatus)
  .put('/', controller.updateStatus);
