Flight Request Application
==========================

Overview
--------

This application provides a web-based interface for processing flight requests based on polygon boundaries. It uses Express.js as the server framework and Leaflet.js for rendering and interacting with the map.

How to Run
-----------

1. Install Node.js from the official website if you haven't already.

2. Clone the repository and navigate to the project directory.

3. Run the command `npm install` to install the required dependencies.

4. Run the command `node app.js` to start the server.

5. Open a web browser and navigate to `http://localhost:3000` to access the application.

Technical Details
----------------

* The application is structured into several directories:
	+ `app.js`: The main entry point for the application, setting up the Express server and defining routes.
	+ `controllers`: Contains route handlers for API and map interactions.
	+ `services`: Contains business logic for processing flight requests and handling map interactions.
	+ `models`: Defines the data model for polygon boundaries.
	+ `public`: Serves as the document root for the application, containing static HTML, JavaScript, and CSS files.

Dependencies
------------

* Express.js: Server framework for building web applications.
* Leaflet.js: Library for rendering and interacting with maps.

Note
----

For any issues or feedback, please create an issue in the repository.