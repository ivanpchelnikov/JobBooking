import l from '../../common/logger';
import * as mysql from 'mysql';

class JobBookingDatabase {
  constructor() {

      this.connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "hipages",
        database: "hipages",
        port: "3306"
  })
    this.connection.connect(function(err) {
      if (err) throw err;
      l.info(`${this.constructor.name}-Connected DB!`);
    })
  }

  query( sql, args ) {
    return new Promise( ( resolve, reject ) => {
        this.connection.query( sql, args, ( err, rows ) => {
            if ( err )
                return reject( err );
            resolve( rows );
        } );
    } );
}
close() {
    return new Promise( ( resolve, reject ) => {
        this.connection.end( err => {
            if ( err )
                return reject( err );
            resolve();
        } );
    } );
}
   async getByStatus(status) {
    let querys = "SELECT t1.id, t1.category_id, t1.status, t1.contact_name, t1.contact_phone, t1.contact_email, t1.price, t1.description, t1.created_at, t2.name AS location, t2.postcode, t3.name AS category " + 
                  "FROM hipages.jobs t1 " + 
                  "INNER JOIN hipages.suburbs t2 ON t1.suburb_id = t2.id " + 
                  "INNER JOIN hipages.categories t3 ON t1.category_id = t3.id " + 
                  "WHERE t1.status = ? ";
    return this.query(querys, [status])
               .then(rows => rows)
               .catch(er=> er);
  }
  async updateStatus (status,id) {
    let querys =  "UPDATE `jobs` SET `status` = ? WHERE `id` = ? ";
    return this.query(querys, [status, id])
               .then( res => res)
               .catch(er=> er);
  }
}
export default new JobBookingDatabase();
