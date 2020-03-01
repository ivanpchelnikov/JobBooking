import JobBookingService from '../../services/jobbooking.service';

export class Controller {
  getAll(req, res) {
    JobBookingService.getAll()
                     .then(r => res.status(200).json(r).end())
                     .catch(err => res.status(404)
                                      .json(
                                        {
                                          error: err.code,
                                          description: err.message,
                                        }
                                      )
                                      .end());
  }
  getByStatus(req, res) {
    JobBookingService.getByStatus(req.params.status)
                     .then(r => res.status(200).json(r).end())
                     .catch(err => res.status(404)
                                      .json(
                                        {
                                          error: err.code,
                                          description: err.message,
                                        }
                                      )
                                      .end());
  }

  updateStatus(req, res) {
    const jobcard = req.body;
    JobBookingService.updateStatus(jobcard)
                     .then(r => res.status(200).json(r.message).end())
                     .catch(err => res.status(404)
                                      .json(
                                        {
                                          error: err.code,
                                          description: err.message,
                                        }
                                      )
                                      .end());
  }
}
export default new Controller();
