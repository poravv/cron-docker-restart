# Levantar app 
Funciona para realizar reinicio de contenedores docker en ciertos horarios requeridos
## Instalar dependencias 
```
npm i
```
## Iniciar la aplicación con PM2:
```
pm2 start app.js
```
Para mantener ejecutandose 
```
pm2 save
```
```
pm2 startup
```
Para verificar si esta corriendo la app
```
pm2 status
```
