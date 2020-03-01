import l from '../../common/logger';
import db from './jobbooking.db.service';

class JobBookingService {
  getByStatus(status) {
    l.info(`${this.constructor.name}.getByStatus().${status}`);
    return  db.getByStatus(status)
              .then(rows => {
                  if (rows.length == 0) {
                    l.error(`${this.constructor.name}.Job Booking not found!.`);
                    throw new Error("Job Booking not found!");
                  }
                  return rows
              })
              .catch(er => {throw er});
  }

  updateStatus(jobcard) {
    l.info(`${this.constructor.name}.updateStatus(${jobcard.status},${jobcard.id})`);
    return db.updateStatus(jobcard.status,jobcard.id)
             .then(row => row)
             .catch(er => {throw er});
  }
}

export default new JobBookingService();
