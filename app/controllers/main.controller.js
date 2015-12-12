/**
 * Created by Mobyte on 12/12/15.
 */
(function () {
	'use strict';

	angular.module('dashboard')
		.controller('MainController', MainController);

	MainController.$inject = ['$scope', 'ImagesService', '$interval', 'WeatherService', 'QuotesService'];

	function MainController($scope, ImagesService, $interval, WeatherService, QuotesService) {
		$scope.saludo = 'Hola Mundo';
		$scope.background = '';
		$scope.time = null;
		$scope.weather = null;
		$scope.quote = '';

		initialize();

		/**
		 * Asigna la URL que se va a utilizar para el fondo de la pantalla.
		 */
		function setBackgroundImage() {
			// Obtenemos la imagen de fondo de forma aleatoria
			ImagesService.getRandomImage().then(function (image) {
				$scope.background = image;
			}).catch(function (error) {

			});
		}

		/**
		 * Establece la hora actual y la mantiene actualizada
		 */
		function setCurrentTime() {
			$interval(function () {
				$scope.time = new Date();
			}, 1000);
		}

		/**
		 * Establece las condiciones meteorológicas actuales
		 */
		function setCurrentWeather() {
			WeatherService.getCurrentWeather().then(function (info) {
				$scope.weather = info;
			}).catch(function (error) {

			});
		}

		/**
		 * Establece el valor de la frase del día
		 */
		function setQuote() {
			QuotesService.getQuote().then(function (quote) {
				$scope.quote = quote;
			}).catch(function (error) {

			});
		}

		/**
		 * Inicializador
		 */
		function initialize() {

			setBackgroundImage();

			setCurrentTime();

			setCurrentWeather();

			setQuote();
		}
	}
})();