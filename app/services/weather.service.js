/**
 * Created by Mobyte on 12/12/15.
 */
(function () {
	'use strict';

	angular.module('dashboard')
		.factory('WeatherService', WeatherService);

	WeatherService.$inject = ['$http', '$q'];

	function WeatherService($http, $q) {
		var location = 'almeria';
		var units = 'c';
		var yql = 'select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + location + '") and u="' + units + '"';
		var url = "https://query.yahooapis.com/v1/public/yql";

		var service = {
			getCurrentWeather: getCurrentWeather
		};

		return service;

		function getCurrentWeather() {
			var defer = $q.defer();

			console.log(yql);
			console.log(encodeURI(yql));

			$http.get(url, {
				params: {
					q:  yql,
					format: 'json'
				}
			}).then(function(response) {
				console.log(response);
				var info= response.data;
				var resp = {
					temp: info.query.results.channel.item.condition.temp,
					units: info.query.results.channel.units.temperature,
					location: info.query.results.channel.location.city,
					code: info.query.results.channel.item.condition.code
				};

				defer.resolve(resp);
			}).catch(function(error) {
				console.log(error);
				defer.reject(error);
			});

			return defer.promise;
		}
	}
})();