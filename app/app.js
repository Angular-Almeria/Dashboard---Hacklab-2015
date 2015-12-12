/**
 * Created by Mobyte on 12/12/15.
 */
(function () {
	'use strict';

	angular.module('dashboard', ['ui.router'])

		.config(function($urlRouterProvider, $stateProvider) {
			$stateProvider
				.state('home', {
					url: '/',
					templateUrl: 'app/views/home.html',
					controller: 'MainController'
				});

			$urlRouterProvider.otherwise('/');
		})
})();