'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users.server.controller');
	var courses = require('../../app/controllers/courses.server.controller');

	// Courses Routes
	app.route('/courses')
		.get(courses.list)
		.post(courses.create);//remove these when we go live

	app.route('/courses/:courseId')
		.get(courses.read)
		.put(courses.update)//remove these when we go live
		.delete(courses.delete);//remove these when we go live

	app.route('/courses/sort/:courseCode')
		.get(courses.courseCode);

	// Finish by binding the Course middleware
	app.param('courseId', courses.courseByID);

	app.param('courseCode', courses.courseCode);
};
