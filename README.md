# [Backstage](https://backstage.io)

This is your newly scaffolded Backstage App, Good Luck!

To start the app, run:

```sh
yarn install
yarn dev
```
# Entorno de BackStage
Para poder ejecutar el entorno debes exportar antes las siguientes variables de entorno:
```sh
export NODE_OPTIONS="${NODE_OPTIONS:-} --no-node-snapshot"
export POSTGRES_HOST="127.0.0.1"
export POSTGRES_PORT=5432
export POSTGRES_USER="postgres"
export POSTGRES_PASSWORD=<tu_contraseña_postgress>
export GHE_TOKEN=<tu_token_de_github>
export CLIENT_ID=<tu_client_id_de_github>
export CLIENT_SECRET=<tu_client_secret_de_github>
```
# Añadir Template
Podemos añadir una template de dos formas distintas, incluyendo una carpeta en
el propio entorno donde incluyamos lo necesario para crearla(ejemplos en /packages/backend/templates)
o importandola desde un repositorio de github, en el siguiente repositorio se incluye un ejemplo de template:
[click aqui](https://github.com/ManuFernandez03/ProyectoTemplate)

Para poder importar esta template en nuestro proyecto de backstage, debemos iniciar la aplicacion,
acceder al apartado "create" y una vez ahi acceder a "register existing component", una vez ahi
pegaremos la siguiente URL:
```sh
https://github.com/ManuFernandez03/ProyectoTemplate/blob/main/template.yaml
```

Podemos hacer lo mismo para importar otros tipos de componentes, en el siguiente repositorio se 
incluye lo necesario para importar un grupo y dos sistemas:
[click aqui](https://github.com/ManuFernandez03/RecursosPrueba)

En este caso la URL que necesitaremos sera la siguiente:
```sh
https://github.com/ManuFernandez03/RecursosPrueba/blob/main/catalog-info.yaml
```
