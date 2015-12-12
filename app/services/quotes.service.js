/**
 * Created by Mobyte on 12/12/15.
 */
(function () {
	'use strict';

	angular.module('dashboard')
		.factory('QuotesService', QuotesService);

	QuotesService.$inject = ['$http', '$q'];

	function QuotesService($http, $q) {
		var url = 'http://api.icndb.com/jokes/random';

		var services = {
			getQuote: getQuote
		};

		return services;

		function getQuote() {
			var defer = $q.defer();

			$http.get(url).then(function(response) {
				console.log(response);
				defer.resolve(response.data.value.joke);
			}).catch(function(error) {
				console.log(error);
				defer.reject(error);
			});

			return defer.promise;
		}
	}
})();