/**
 * Created by Mobyte on 12/12/15.
 */
(function () {
	'use strict';

	angular.module('dashboard')
		.factory('ImagesService', ImagesService);

	ImagesService.$inject = ['$http', '$q'];

	function ImagesService($http, $q) {
		var url = "http://www.splashbase.co/api/v1/images/random";

		var service = {
			getRandomImage: getRandomImage
		};

		return service;

		function getRandomImage() {
			var defer = $q.defer();

			$http.get(url, {
				params: {
					images_only: true
				}
			}).then(function(response) {
				console.log(response);
				defer.resolve(response.data.url);
			}).catch(function(error) {
				console.log(error);
				defer.reject(error);
			});

			return defer.promise;
		}
	}
})();