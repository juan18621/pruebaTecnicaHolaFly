# Prueba Tecnica Holafly Juan Andrés Rojas López

## Indicaciones sobre el proyecto

- Clonar este repositorio
- Instalar las librerias externas mediante `npm install` y ejecutar el servidor mediante `npm run dev`
- Se desarrolló el backend junto con frontend y se desplegó a la nube por medio de un pipeline, para acceder ingresar a https://swapi-fullstack.onrender.com/
- Puede demorar un poco en entrar mientras prende el servidor de la nube. En caso de que definitivamente no funcione, correrlo localmente e ingresar a http://localhost:4567/ una vez este corriendo el proyecto
- En caso de que sólo se quiera probar los end points de backend acceder como se habia dicho en las instrucciones de la prueba complementando la ruta con /hfswapi/ y el end point correspondiente
- Para obtener una persona o planeta en formato wookiee debe apuntar a las urls que obtienen por id de la siguiente manera /hfswapi/getPeople/:id?format=wookiee o /hfswapi/getPlanet/:id?format=wookiee
- se insatalaron librerías adicionales:
- Se instaló cors para poder realizar peticiones dezsde el frontend
- Se instaló Joi para realizar validaciones de campos en los end points necesarios
- Se instaló Jest y supertest en como dependencias de desarrollo para testear los end points
- se utilizaron patrones de diseño SOLID por lo tanto la estructura del proyecto cambió a una arquitectura modular
- para correr el testing del proyecto correr el comando `npm run test`

## Instrucciones

_Todas las instrucciones parten de la premisa de que el aspirante tiene una versión de node.js instalada en su sistema._

- Clonar este repositorio y realizar sobre el clon todos los cambios pedidos en el enunciado.
- Instalar las librerias externas mediante `npm install` y ejecutar el servidor mediante `npm run dev`
- Realizar los commits respetando la siguiente estructura:
  - `Acción (contexto): mensaje`, siendo:
    - Accion: `feat` para nuevas funcionalidades, `fix` para la corrección de errores, `refactor` para las tareas de refactorización de código o `chore` para cambios no relacionados con el código.
    - Contexto: una cadena descriptiva sobre la tarea que se está realiazndo
    - mensaje: un mensaje conciso sobre el cambio a realizar
  - Ejemplo: `feat (getPeople): Creada funcion de consulta a la BD`
- Una vez se considere que la prueba está concluida, notificarnos la dirección del repositorio clonado para proceder a su revisión

### Notas

- Se recomienda realizar commits frecuentes para llevar una traza adecuada del trabajo realizado.
- No existe un máximo de tiempo para realizar la prueba.
- No existe limitación alguna a la hora de consultar cualquier fuente de documentación.
- La ayuda por parte de terceros queda prohibida. Esto incluye la peticion de ayuda en foros o chats especializados.
- El código ya posee las librerias externas necesarias para realizar todas las funciones requeridas. No obstante, si se desea utilizar alguna libreria externa adicional, esta debe poderse instalar a través de `npm` y su inclusión deberá estar justificada en un comentario en el fichero `README.md`.

## Enunciado de la Prueba

El presente código despliega un servidor node.js/express sobre el que se busca implementar los siguientes endpoints:

#### /hfswapi/getPeople/:id

> Dado el ID válido de un personaje de la franquicia Star Wars, consultar en la Base de datos (BD) facilitada y retornar un objeto con los siguientes datos:
>
> - name: Nombre completo del personaje correspondiente al ID dado.
> - mass: Masa del personaje correspondiente al ID dado.
> - height: Altura del personaje correspondiente al ID dado.
> - homeworldName: nombre del planeta natal del personaje correspondiente al ID dado.
> - homeworldId: Identificador del planeta natal del personaje correspondiente al ID dado.
>
> En caso de que dichos datos no se encuentren disponibles en la BD, se habrá de consultar en la SWAPI (https://swapi.dev/) sobre el endpoint adecuado

#### /hfswapi/getPlanet/:id

> Dado el ID válido de un planeta de la franquicia Star Wars, consultar en la Base de datos (BD) facilitada y retornar un objeto con los siguientes datos:
>
> - name: Nombre del planeta correspondiente al ID dado
> - gravity: factor de la gravedad del planeta correspondiente al ID dado en comparación con la considerada standard
>
> En caso de que dichos datos no se encuentren disponibles en la BD, se habrá de consultar en la SWAPI (https://swapi.dev/) sobre el endpoint adecuado

#### /hfswapi/getWeightOnPlanetRandom

> Tomados al azar dos identificadores cualesquiera, uno para personajes y otro para planetas, obtener de la Base de Datos (BD) el peso del personaje correspondiente a uno de los identificadores en el planeta correspondiente al otro identificador, considerando la siguiente relacion:
>
> $Peso_{Personaje} = Gravedad_{Planeta} · Masa_{Personaje}$
>
> En caso de que los datos requeridos no se encuentren disponibles en la BD, se habrá de consultar en la SWAPI (https://swapi.dev/) sobre el endpoint adecuado.
>
> > _Funcionalidad extra:_ > > _Se debe detectar si se está tratando de calcular el peso de un personaje en su planeta natal y arrojar un error._

#### /hfswapi/getLogs

> Se deben retornar todas las llamadas realizadas a los endpoints anteriores, de las que se habrán almacenado previamente en la Base de Datos (BD) los siguientes datos:
>
> - action: Endpoint al que se accede
> - header: Headers de la llamada almacenados como una cadena de texto plana
> - ip: Dirección IP desde donde se realiza la llamada

Adicionalmente a estos endpoints, se requiere ampliar el paquete `People` con las clases y funciones que sean necesarias para cubrir el caso de que el formato del objeto retornado por la SWAPI sea en idioma Wookiee.
