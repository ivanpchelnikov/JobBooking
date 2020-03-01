import jobBookingRouter from './api/controllers/jobbooking/router';

export default function routes(app) {
  app.use('/api/v1/jobbooking', jobBookingRouter);
}
