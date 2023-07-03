# Entrega3

En esta entrega al ProductManager que habiamos creado anteriormente lr agrego el metodo asincronico y tambien utiliza la sintaxis de import de ES6 para importar el módulo fs y export para exportar la clase ProductManager. Además, se utiliza la función fs.promises para trabajar con promesas en lugar de callbacks. Esto hace que el código sea más legible y fácil de mantener.
Lo subimos al servidor usando Nodemon y Express js.
Utilizamos el puerto 8080 solicitado.
Luego se creo el app.js y en este código, la ruta /products maneja el código asincrónico correctamente utilizando await en la llamada a getProducts. La variable resultado se declara dentro del método get de la ruta para evitar problemas de concurrencia. La ruta /products/:pid también maneja el código asincrónico correctamente y comprueba si el parámetro pid es un número válido.
muchas gracias!!!!
