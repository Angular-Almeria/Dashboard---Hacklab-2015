# AngularJS - Jornadas Hacklab

## Requisitos

Inicialmente, no es necesario tener ningún software especial instalado. Basta con acudir a la web [www.angularjs.org](https://angularjs.org/) y
descargar el archivo JS, o utilizar el enlace CDN.

Si se quieren utilizar herramientas de gestión de paquetes (ideal), hace falta tener instalado NodeJS con NPM y Bower.

Para instalar NodeJS, acudimos a la web [www.nodejs.org](https://nodejs.org/en/) y descargamos el instalable para nuestro
sistema operativo. Una vez instalado, necesitamos instalar **bower**. Para ello, en una ventana de consola escribimos:

```
npm install -g bower
```

Una vez instalado, podemos utilizar bower para instalar los paquetes que necesitemos en nuestro proyecto. Así, creamos la carpeta
del proyecto que vayamos a desarrollar y dentro de ésta, escribimos en la consola:

```
bower init
```

Lo siguiente que haremos será instalar Angular haciendo uso de bower. Para esto, escribimos en la consola:
```
bower install --save angular
```

Ya sólo nos queda crear nuestro archivo index.html e incluir la librería de Angular en el HTML.

En el caso de utilizar la implementación de este repositorio, basta con clonarlo y en la linea de comandos ejecutar: 

```
bower install
```
