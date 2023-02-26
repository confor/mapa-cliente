cliente para openstreetmap
--------------------------
esto es un intento de hacer un cliente _liviano_ para openstreetmap. estará
limitado a un área muy pequeña y está acompañado de una api externa para poder
hacer búsquedas y ver detalles sobre lugares de interés (en otro repositorio).


objetivos
---------
únicamente html 5, css y javascript minificado, imágenes optimizadas, ningún
componente innecesario. optimizar para celulares con internet móvil. intentar
de mantener el tamaño del repositorio al mínimo. el resultado debe ser pocos
archivos estáticos que serán servidos por nginx o apache.


como usar
---------
ejecutar ./build.sh y la salida estará en dist/, luego copiar al servidor


navegador web
-------------
esbuild está configurado para mínimo:
- chrome 62: oct/2017
- edge 16: oct/2017
- safari 11: sep/2017
- firefox 56: sep/2017


soporte de javascript
---------------------
esos navegadores web soportan:
- arrow functions
- const, let
