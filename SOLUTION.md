Your Solution Documentation
===========================
Getting Started

Clone the code files from https://github.com/ivanpchelnikov/JobBooking 

Please use provided boilerplate.

The boilerplate code assumes you have Docker running on your machine. If you do not, they offer easy to install binaries (Mac) (Windows).
From the root of the project, run docker-compose up -d

DB server:
    You should now have a MySQL database running at localhost:3306

Backend server:

1. cd JobBooking/server
2. npm install
3. npm run compile
4. npm start
5. Open http://localhost:8080 and following swagger link http://localhost:8080/api-explorer/#/JobBooking/get_jobbooking. 

I have added swagger to the backend server which helps me develop backend api. It is easy to scale and easy to consume api. In future it will easy to add more functionality using current template.

UI server:

1. cd JobBooking/ui
2. npm install
3. npm start
4. Open http://localhost:3000

Plans:

Since the time was limited, with an extended timeline would be as follow actions:
1. Writing tests for Server and UI.
2. Adding validation of incoming data.
3. Make more nicer UI, icons and etc.
4. Adding state management of dataflow in React: Redux or Hooks API
5. Adding lazy loading or pagination.
6. Adding CI/CD pipeline.
Thanks for reading!

