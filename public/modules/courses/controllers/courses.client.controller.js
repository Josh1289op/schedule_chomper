'use strict';

// Courses controller
angular.module('courses').controller('CoursesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Courses', '$http',
	function($scope, $stateParams, $location, Authentication, Courses, $http) {
		$scope.authentication = Authentication;



		// Create new Course
		$scope.create = function() {
			// Create new Course object
			var course = new Courses ({
				name: this.name
			});

			// Redirect after save
			course.$save(function(response) {
				$location.path('courses/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Course
		$scope.remove = function(course) {
			if ( course ) {
				course.$remove();

				for (var i in $scope.courses) {
					if ($scope.courses [i] === course) {
						$scope.courses.splice(i, 1);
					}
				}
			} else {
				$scope.course.$remove(function() {
					$location.path('courses');
				});
			}
		};

		// Update existing Course
		$scope.update = function() {
			var course = $scope.course;

			course.$update(function() {
				$location.path('courses/' + course._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Courses
		$scope.find = function() {
			$scope.courses = Courses.query();
			console.log($scope.courses);
		};

		// Find existing Course
		$scope.findOne = function() {
			$scope.course = Courses.get({
				courseId: $stateParams.courseId
			});
		};

		// Find existing Course
		$scope.sortByCode = function(code) {


			$http.get('/courses/sort/' + code).
				success(function(data, status, headers, config) {
					// this callback will be called asynchronously
					// when the response is available
					$scope.courses = data;
				}).
				error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
				});
		};

	}
]);
