'use strict';


angular.module('core').controller('HomeController', ['$rootScope','$scope', '$http','$location', '$log',
	function($rootScope, $scope, $http, $location, $log) {
		$scope.$location = $location;

		$scope.items = [
			'The first choice!',
			'And another choice for you.',
			'but wait! A third!'
		];

		$scope.status = {
			isopen: false
		};

		$scope.toggled = function(open) {
			$log.log('Dropdown is now: ', open);
		};

		$scope.toggleDropdown = function($event) {
			$event.preventDefault();
			$event.stopPropagation();
			$scope.status.isopen = !$scope.status.isopen;
		};



		$scope.users = [
			{
				name: 'Joshua Kegley',
				avatar: 'josh',
				content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
			},
			{
				name: 'John Harrison',
				avatar: 'john',
				content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit??, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.'
			},
			{
				name: 'Sahir',
				avatar: 'sahir',
				content: 'Raw denim pour-over readymade -up Thundercats chillwave vinyl jean shica. Schlitz bicycle rights chillwave irony lumberhungry Kickstarter next level sriracha typewriter Intelligentsia, migas kogi heirloom tousled. Disrupt 3 wolf moon lomo four loko. Pug mlkshk fanny pack literally hoodie bespoke, put a bird on it Marfa messenger bag kogi VHS.'
			},
			{
				name: 'Danny Sepler',
				avatar: 'danny',
				content: 'Scratch the furniture spit up on light gray carpet instead of adjacent linoleum so eat a plant, kill a hand pelt around the house and up and down stairs chasing phantoms run in circles, or claw drapes. Always hungry pelt around the house and up and down stairs chasing phantoms.'
			},
			{
				name: 'Alex Lewitt',
				avatar: 'alex',
				content: 'Webtwo ipsum dolor sit amet, eskobo chumby doostang bebo. Bubbli greplin stypi prezi mzinga heroku wakoopa, shopify airbnb dogster dopplr gooru jumo, reddit plickers edmodo stypi zillow etsy.'
			}
		];
	}
]);
