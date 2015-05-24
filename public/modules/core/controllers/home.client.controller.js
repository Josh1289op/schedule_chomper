'use strict';

/*jshint loopfunc: true */
angular.module('core').controller('HomeController', ['$rootScope','$scope', '$http','$location', '$log', '$timeout', 'scheduleService',
	function($rootScope, $scope, $http, $location, $log, $timeout, scheduleService) {
		$scope.$location = $location;


		$scope.filters = [
			'The first choice!',
			'And another choice for you.',
			'but wait! A third!'
		];


		$scope.init = function() {

		};

		$scope.getCourses = function(val) {
			if(val === '') return;

			return $http.get('/courses/sort/' + val, {

			}).then(function(res){
					$scope.courses = [];
					angular.forEach(res.data, function (item) {
						var add = true;
						//FIXXXX THESE
						//TODO: THESE
						angular.forEach($scope.courses, function(item1) {
							if(item1.code === item.code && item1.instructor === item.instructor){
								add = false;
							}
						});
						angular.forEach($scope.selectedCourses, function(item1) {
							if(item._id === item1._id) {
								add = false;
							}

						});
						if(add){
							item.title = item.code + ' - ' + item.name + ' - ' + item.instructor;
							$scope.courses.push(item);
						}
					});
					$timeout(angular.noop);
					return $scope.courses;
			});
		};

		$scope.courses = [];
		$scope.selectedCourses = scheduleService.getSchedule();


		$scope.getSchedules = function() {
			scheduleService.setSchedule($scope.selectedCourses);
			$location.path('/schedules');
		};




		//MASTERLIST = ALL COURSES TO AD
		$scope.masterList = [];
		$scope.generateSchedules = function () {


		};


		function chomp(maxCredits) {
			console.log('Chomping Schedule');
			var masterList = $scope.masterList;
			var n = 10;
			var dpList = makeMatrix(masterList.length);
			for( var numOfOptions = 0; numOfOptions < masterList.length; ++numOfOptions ) {
				for( var tempCred = maxCredits; tempCred >= 0; --tempCred){
					if(0 === 1){
						console.log(0);
					}
				}
			}

		}
		var algSchedule = []; // Array to hold array of schedules;
        $scope.testSchedule = [];
		$scope.test = function() {
            var testWeek = [
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0],//m
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0],//t
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0],//w
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0],//r
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0],//f
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0],//s
                0//Credits in this Schedule
			];
			var testCourse = {'_id':'5557c5067baf370c285bb3fd','credits':3,'instructor':'McMullen,Kyla','time':[{'day':'1','end':10,'start':'8'},{'day':'3','end':10,'start':'9'},{'day':'1','end':6,'start':'4'}],'web':false,'section':'0398','code':'COP3502','name':'PROG FUNDAMENTALS 1','title':'COP3502 - PROG FUNDAMENTALS 1 - McMullen,Kyla'};
            if (canClassFit(testCourse, testWeek, 10)) {
                $scope.testSchedule = addClassToSchedule(testCourse, testWeek);
                console.log('first class added');


            }
            if(canClassFit(testCourse, testWeek, 10)){
                $scope.testSchedule = addClassToSchedule(testCourse, testWeek);
                console.log('Second class added');
            }
            testCourse = {'_id':'5557c5077baf370c285bb408','credits':3,'instructor':'Liu,Chien-Liang','time':[{'day':'0','end':3,'start':'2'},{'day':'2','end':3,'start':'2'},{'day':'4','end':3,'start':'2'},{'day':'3','end':4,'start':'2'}],'web':false,'section':'COP3503_DEPT_Liu,Chien-Liang','code':'COP3503','name':'PROG FUNDAMENTALS 2','title':'COP3503 - PROG FUNDAMENTALS 2 - Liu,Chien-Liang'};
            if(canClassFit(testCourse, testWeek, 10)){
                $scope.testSchedule = addClassToSchedule(testCourse, testWeek);
                console.log('Third class added');
            }
            return $scope.testSchedule;

		};

		function canClassFit(tempCourse, weekSchedule, maxCredits) {
			if(weekSchedule[6] + tempCourse.credits > maxCredits){
                console.log('over credits course');
				return false;
			}

            for(var j = 0; j < 6; ++j){
                for( var k = 0; k < 14; ++k){
                    if(weekSchedule[j][k].code !== 0 && weekSchedule[j][k].code === tempCourse.code && weekSchedule[j][k].instructor === tempCourse.instructor){
                        console.log('repeating course');
                        return false;
                    }
                }
            }

			for(var i = 0; i < tempCourse.time.length; ++i) {

                var start = tempCourse.time[i].start;
                var finish = tempCourse.time[i].end;
                var day = tempCourse.time[i].day;

                for (start; start < finish; ++start) {
                    if (weekSchedule[day][start] !== 0) {
                        console.log('same time course');
                        return false;
                    }
                }
            }
			return true;
		}

        function addClassToSchedule(tempCourse, weekSchedule){
            weekSchedule[6] += tempCourse.credits;
            for(var i = 0; i < tempCourse.time.length; ++i) {

                var start = tempCourse.time[i].start;
                var finish = tempCourse.time[i].end;
                var day = tempCourse.time[i].day;

                for (start; start < finish; ++start) {
                   weekSchedule[day][start] = tempCourse;
                }
            }
            return weekSchedule;
        }

		function makeMatrix(x) {
			console.log('Making Matrix');
			var matrix = [];
			for( var i = 0; i < x; ++i){
				matrix[i] = [];
				matrix[i][0] = {};
			}
			console.log(matrix);
			return matrix;
		}
	}
]);
