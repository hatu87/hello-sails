# This is the hello world examples for [Sails](http://sailsjs.org)

## Installation
 - Configure your database connection:
    + Open the file config/connections.js
    + Write down your connection in 'somePostgresqlServer'. By default, this example use postgresql database.
 - Install required packages: run the command npm install

## Run the app
 - Run the command: sails lift
 - The application will ask you to choose migration option. For first run, just choose 3 (drop) to create a new database and models.
 - Access the web with the default url: [http://localhost:1337](http://localhost:1337)

## API
 - User: /api/v1/users
    + Action: /register: register a user
        * Method: POST
        * Params: email, name, password
