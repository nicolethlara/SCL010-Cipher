# MEDUSA 
## cifrando la resistencia

Esta aplicación web fue creada para facilitar una comunicación segura a través de redes sociales e internet en general, para mujeres que necesitan organizar eventos de disidencia política, en caso de que sean no autorizados, no legales o para personas que viven en países donde la libertad de expresión no esta garantizada dentro de la constitución.
Aplicaciones como **Whatsapp** manejan sistemas de cifrado propios que son altamente efectivos en cuanto a resguardar la seguridad de los mensajes, pero ésta aplicación nunca ha sido la ideal para organizar eventos con una alta convocatoria, debido a lo engorroso que resulta ya que requiere primero conocer el número de teléfono de todas las personas que participaran para poder incluirlas en el chat y traspasarles la información. Además la interfaz no es muy amigable para administrar organizademente una tan gran cantidad de mensajes como la habría si estamos planeando un evento más masivo.
Es por esto que gran parte de estos eventos son organizados a través deplataformas como  **Facebook**, debido a que la red social cuenta con plantillas especificas para organizar eventos, que facilitan una óptima distribución y manejo de la información, y al mismo tiempo es más sencillo difundirlo y hacerlo llegar a más gente. 
Aqui entra la funcionalidad del programa MEDUSA, ya que permite que puedan entregar esta infromación delicada de forma abierta y que solo la gente que tenga la clave pueda entenderla. 
Para esto nuestro programa utiliza un sistema de cifrado llamado cifrado César

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

- La letra A se cifra como D.
- La palabra CASA se cifra como FDVD.
- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

___


##Elecciones de diseño

ya que la aplicación web MEDUSA esta directamente dirigida a usuarias mujeres, la intención fue mantener la paleta de colores en tonos que son generalmente asociados con la feminidad, como el rosado de fondo que según la sicología del color plantea, es un tono que induce a la relajación y a un sentimiento de seguridad, algo muy necesaro ya que se esta trabajando con mensajes delicados cuya privacidad la persona quiere resguardar al punto de estaren una aplicación que le permite cifrarlo. 

los botones de todas las interacciones de la página son amarillos, ya que es un color que llama a  la acción además de ser asociado con el intelecto.

Es un color que al igual que el rosado también transmite cálidez, por lo que ayuda a construir una sensación integral de estar entrando a un espacio seguro, confiable, acogedor y alegre que usarían y recomendarían. 

El fondo de la  aplicación web además de ser rosado contiene imágenes de puños alzados, los comienzos de esta iconografía se remontan a las primeras propagandas de organizaciones sindicales y ha sido luego de esto adoptado como simbolismo de varios grupos "radicales" entre estos el feminismo. Es un simbolismo que logra encapsular la idea de resistencia, solidaridad, orgullo y militancia.

Me pareció apropiada ya que se vuelve una imagen que representa directamente los intereses del publico objetivo de esta aplicación web, al ser éste público objetivo mujeres que estan buscando organizar la resistencia. Al mantenerse el mismo fondo a través de todas las interacciones de la aplicación web, construye una sensación de compañerismo y consecuencia con éste compañerismo.

___

##Test de usabilidad

El test de usabilidad que decidí realizar para obtener feedback fue el de entrevistas con usuarios reales. Para esto seleccione a tres mujeres que militan activamente dentro del feminismo, pero que son de distintos rangos etarios, para así tener una mejor representatividad del test.

####Objetivos

-saber si se entiende la temática de la página
-saber si las decisiones de diseño ayudan a transmitir la temática
-saber si con la información proporcionada se entiende en que consiste el sistema de cifrado
-saber si se entiende cómo se cifra o descifra un mensaje
-observar si la aplicación es lo suficientemente intuituva para que la puedan utilizar sin necesitar hacerme preguntas
-saber si queda clara la utilidad de cada botón

####Pasos

-la usuaria debe mirar el primer despliegue de la página, leerlo sin realizar ninguna acción y explicarme cuál entiende que esla finalidad de ésta
-indicar a la usuaria que presione el botón saber más y lea la explicación extendida, luego preguntarle si esto le aporto alguna información nueva que considere relevante
-observar si entiende como volver atrás al punto de partida
-hacer que presione el botón comenzar e intente cifrar un mensaje
-observar si entendió que primero debía ingresar un número de desplazamiento en la casilla y que ésto era un paso necesario para que el cifrado descifrado funcionara
-observar si entiende la funcionalidad de los botones "cifrar" y "descifrar"
-preguntarle si entiende para que sirve la clave de desplazamiento

##Primera iteración de la aplicación web MEDUSA





## Test de usabilidad aplicado

####Usuaria A: Mujer de 18 años 

-la usuaria debe mirar el primer despliegue de la página, leerlo sin realizar ninguna acción y explicarme cuál entiende que es la finalidad de ésta
  *"que es como una plataforma segura para interactuar con las personas, para facilitar el comunicarse"* no le queda claro que es solo para cifrar y no para enviar mensajes.
    
-indicar a la usuaria que presione el botón saber más y lea la explicación extendida luego preguntarle si esto le aporto alguna información nueva que considere relevante
  *"es para guardar los mensajes para que quede más privada, es que la guardes en una caja con un candado"*

-observar si entiende como volver atrás al punto de partida
   logra volver atrás sin ningún problema

-hacer que presione el botón comenzar e intente cifrar un mensaje
   ingresa la clave de desplazamiento y un texto en la casilla que corresponde, pero luego también escribe en la casilla de resultado, no entiende que debe presionar el botón codificar
    
-observar si entendió que primero debía ingresar un número de desplazamiento en la casilla y que ésto era un paso necesario para que el cifrado descifrado funcionara
    no entendió qué hacía la casilla del offset

-observar si entiende la funcionalidad de los botones "cifrar" y "descifrar"
    no entendió al primer intento

-preguntarle si entiende para que sirve la clave de desplazamiento
    *"entiendo que es una clave que debo tener para descifrar el mensaje"*


####Usuaria B: Mujer de 32 años 

-la usuaria debe mirar el primer despliegue de la página, leerlo sin realizar ninguna acción y explicarme cuál entiende que esla finalidad de ésta
    *"es un programa para cifrar mensajes y enviarlos".*   

-indicar a la usuaria que presione el botón saber más y lea la explicación extendida, luego preguntarle si esto le aporto alguna información nueva que considere relevante
  *"entendí que tiene un sistema, que tiene un nombre que se llama César, no me queda claro a que se refiere con desplazamiento del abecedario".*

-observar si entiende como volver atrás al punto de partida
  entiende como volver atrás sin problema.

-hacer que presione el botón comenzar e intente cifrar un mensaje observar si entendió que primero debía ingresar un número de desplazamiento en la casilla y que ésto era un paso necesario para que el cifrado descifrado funcionara
  primero ingresó el texto que quería cifrar y presionó el botón codificar, se dió cuenta que no le estaba devolviendo el mensaje cifrado, luego se dio cuenta de que no había llenado la casilla de offset, luego de hacerlo logró cifrar el mensaje.

-observar si entiende la funcionalidad de los botones "cifrar" y "descifrar"
     entendió sin problema.

-preguntarle si entiende para que sirve la clave de desplazamiento
     *"entiendo que es necesario escribirla, pero no entiendo realmente que hace".*


####Usuaria C: Mujer de 28 años

-la usuaria debe mirar el primer despliegue de la página, leerlo sin realizar ninguna acción y explicarme cuál entiende que esla finalidad de ésta    
     *"que es un programa para organizarse entre mujeres, podría ser una red social incluso."*

-indicar a la usuaria que presione el botón saber más y lea la explicación extendida, luego preguntarle si esto le aporto alguna información nueva que considere relevante
  *"te explica como funciona el cifrado, entiendo que yo debo configurarlo y ahí voy a entender como funciona, entiendo que yo voy a decidir en que letra comenzará el abecedario para mi, y podré descifrar los mensajes en mi idioma pordecirlo de alguna forma."*

-observar si entiende como volver atrás al punto de partida
  logra volver atrás sin problema.

-hacer que presione el botón comenzar e intente cifrar un mensaje, observar si entendió que primero debía ingresar un número de desplazamiento en la casilla y que ésto era un paso necesario para que el cifrado descifrado funcionara
  ingreso primero el offset y luego el mensaje que quería cifrar y logró cifrarlo sin mayor problema, sugirió que en esta parte debería haber un botón para volver atrás.

-observar si entiende la funcionalidad de los botones "cifrar" y "descifrar"
  entendió el propósito de los botones sin problema.

-preguntarle si entiende para que sirve la clave de desplazamiento
  *"si, entiendo que es la cantidad de espacios que se moverá el comienzo de mi abecedario."*


___











## Consideraciones generales

- Este proyecto se debe resolver de manera individual.
- El proyecto será entregado subiendo tu código a GitHub (commit/push) y la interfaz será desplegada usando GitHub pages. Si no sabes lo que es GitHub, no te preocupes, lo aprenderás durante este proyecto.
- Tiempo para completarlo: El proyecto dura 2 semanas, trabaja con sprints y planificando tus tareas.

## Objetivos de aprendizaje

En este proyecto aprenderás a construir una aplicación web que interactúe con el usuario a través del navegador y la lógica basada en esa interacción. Dicho en palabras sencillas, aprenderás a:

- Pintar elementos de formulario en la pantalla usando **HTML** y **CSS**.
- Permitir al usuario interactuar (**eventos del DOM**) y hacer algo cuando ocurran dichos eventos (cifrar/descifrar).
- Manipular _**strings**_ (cadenas de texto).
- Usar **control de flujo** (bucles, condicionales, ...).
- Actualizar la pantalla con los resultados (**manipular el DOM**).
- **Implementar funciones** dada una descripción de su comportamiento.
- Verificar tu implementación con **pruebas unitarias**.
- Entender las **necesidades del usuario** y cómo proponer una solución.
- Organizar tu tiempo y priorizar tareas en un entorno de **alta incertidumbre**.

## Parte Obligatoria

Usa este alfabeto simple (solamente mayúsculas y sin ñ):

- A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

#### Definición del producto

En el README.md, cuéntanos cómo pensaste en los usuarios y cuál fue tu proceso para definir el producto final a nivel de experiencia y de interfaz.

- Quiénes son los principales usuarios de producto.
- Cuáles son los objetivos de estos usuarios en relación con tu producto.
- Cómo crees que el producto que estás creando está resolviendo sus problemas.

#### Interfaz de usuario (UI)

La interfaz debe permitir al usuario:
- Elegir un desplazamiento (_offset_) indicando cuántas posiciones queremos que el cifrado desplace cada caracter.
- Insertar un mensaje (texto) que queremos cifrar.
- Ver el resultado del mensaje cifrado.
- Insertar un mensaje (texto) a descifrar.
- Ver el resultado del mensaje descifrado.

#### Scripts / Archivos

* `README.md`: debe explicar cómo descargar, instalar y ejecutar la aplicación
  así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron.
* `src/index.html`: este es el punto de entrada a tu aplicación. Este archivo
  debe contener tu _markup_ (HTML) e incluir el CSS y JavaScript necesario.
* `src/cipher.js`: acá debes implementar el objeto cipher, el cual debe estar
  _exportado_ en el objeto global (`window`). Este objeto (`cipher`) debe
  contener dos métodos:
  - `cipher.encode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la derecha en el alfabeto y `string` el mensaje (texto)
    que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la izquierda en el alfabeto y `string` el mensaje
    (texto) que queremos descifrar.
* `src/index.js`: acá debes escuchar eventos del DOM, invocar `cipher.encode()`
  o `cipher.decode()` según sea necesario y actualizar el resultado en la UI.
* `test/cipher.spec.js`: este archivo contiene algunos tests de ejemplo y acá
  tendrás que implementar los tests para `cipher.encode()` y `cipher.decode()`.

## Parte opcional o “Hacker edition”

Las secciones llamadas “Hacker Edition” son opcionales. Si **terminaste** con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

La descripción general de este proyecto no menciona qué pasaría con las letras minúsculas y otros caracteres (como espacios, puntuación, ñ, ...). El boilerplate incluye algunos tests (comentados en principio) que puedes usar como punto de partida para implementar el soporte para estos casos.

Tampoco se menciona qué pasaría si el offset fuera negativo. Como parte del hacker edition te invitamos a explorar también esta caso por tu cuenta.

## Vamos a los detalles. Consideraciones Técnicas

La lógica del proyecto debe estar implementada completamente en JavaScript (ES6).
En este proyecto NO está permitido usar librerías o frameworks, sólo
[vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).

No se debe utilizar la _pseudo-variable_ `this`.

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_
y _lines_, y un mínimo del 50% de _branches_. El _boilerplate_ ya contiene el
setup y configuración necesaria para ejecutar los tests (pruebas) así como _code
coverage_ para ver el nivel de cobertura de los tests usando el comando `npm
test`.

El _boilerplate_ incluye tests (pruebas) de ejemplo como punto de partida.

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio que contiene el _boilerplate_.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias y tests de ejemplo:

```text
./
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── cipher.spec.js
    ├── headless.js
    └── index.html
```

El _boilerplate_ incluye tareas que ejecutan [eslint](https://eslint.org/) y
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar el `HTML` y
`JavaScript` con respecto a una guías de estilos. Ambas tareas se ejecutan
automáticamente antes de ejecutar las pruebas (tests) cuando usamos el comando
`npm run test`. En el caso de `JavaScript` estamos usando un archivo de
configuración de `eslint` que se llama `.eslintrc` que contiene un mínimo de
información sobre el parser que usar (qué version de JavaScript/ECMAScript), el
entorno (browser en este caso) y las [reglas recomendadas (`"eslint:recommended"`)](https://eslint.org/docs/rules/).
En cuanto a reglas/guías de estilo en sí,
usaremos las recomendaciones _por defecto_ de tanto `eslint` como `htmlhint`.

## Evaluación

Te aconsejamos revisar [la rúbrica](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vRktPN4ilZtkRN5tUb3DVhgeihwlzk63_-JI3moA-bXpKDbHDioAK2H3qbrwWNb0Ql4wX22Tgv7-PDv/pubhtml)
para ver la descripción detallada de cada _habilidad_ y cada _nivel_. Esta es una lista de todas las habilidades involucradas en este proyecto y que evaluaremos cuando lo  completes:

### General

| Característica/Habilidad |
|--------------------------|
| Completitud |

### Habilidades Blandas

| Habilidad |
|-----------|
| Planificación y organización |
| Autoaprendizaje |
| Solución de problemas |
| Dar y recibir feedback |
| Adaptabilidad |
| Trabajo en equipo |
| Comunicación eficaz |
| Presentaciones |

### Habilidades Técnicas Front-end

| Habilidad |
|-----------|
| **CS** |
| Lógica |
| Arquitectura |
| **SCM** |
| Git |
| GitHub |
| **JavaScript** |
| Estilo |
| Nomenclatura/semántica |
| Funciones/modularidad |
| Tests |
| **HTML** |
| Validación |
| Estilo |
| Semántica |
| **CSS** |
| DRY |
| Responsive |

### Habilidades Técnicas UX

| Habilidad |
|-----------|
| User Centricity |

***

## Pistas sobre cómo comenzar a trabajar en el proyecto

1. Antes que nada, asegúrate de tener un :pencil: editor de texto en
   condiciones, algo como [Atom](https://atom.io/) o
   [Code](https://code.visualstudio.com/).
2. Para ejecutar los comandos a continuación necesitarás una :shell:
   [UNIX Shell](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/shell),
   que es un programita que interpreta líneas de comando (command-line
   interpreter) así como tener [git](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/scm/01-git)
   instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
   ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
   también). Si usas Windows puedes usar [Git bash](https://git-scm.com/download/win),
   aunque recomendaría que consideres probar :penguin: GNU/Linux.
3. Haz tu propio :fork_and_knife: [fork](https://help.github.com/articles/fork-a-repo/)
   del repo de tu cohort, tus _coaches_ te compartirán un _link_ a un repo y te 
   darán acceso de lectura en ese repo.
4. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
5. 📦 Instala las dependencias del proyecto con el comando `npm
   install`. Esto asume que has instalado [Node.js](https://nodejs.org/) (que
   incluye [npm](https://docs.npmjs.com/)).
6. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
7. A codear se ha dicho! :rocket:

## Recursos y temas relacionados

A continuación un video de Michelle que te lleva a través de la fórmula
matemática del Cifrado César y un par de cosas más que debes saber para
resolver este proyecto. ¡Escúchala con detenimiento y sigue sus consejos! :)

[![tips caesar cipher](https://img.youtube.com/vi/zd8eVrXhs7Y/0.jpg)](https://www.youtube.com/watch?v=zd8eVrXhs7Y)

Diseño de experiencia de usuario (User Experience Design):

- Ideación
- Prototipado (sketching)
- Testeo e Iteración

Desarrollo Front-end:

* [Valores](https://lms.laboratoria.la/cohorts/scl-2019-06-bc-core-scl010/courses/javascript/01-basics/01-values-variables-and-types)
* [Tipos](https://lms.laboratoria.la/cohorts/scl-2019-06-bc-core-scl010/courses/javascript/01-basics/01-values-variables-and-types)
* [Variables](https://lms.laboratoria.la/cohorts/scl-2019-06-bc-core-scl010/courses/javascript/01-basics/02-variables)
* [Control de flujo](https://lms.laboratoria.la/cohorts/scl-2019-06-bc-core-scl010/courses/javascript/02-flow-control/00-opening)
* [Tests unitarios](https://lms.laboratoria.la/cohorts/scl-2019-06-bc-core-scl010/courses/javascript/11-testing/00-opening)
* [Aprende más sobre `charCodeAt()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charCodeAt)
* [Aprende más sobre `String.fromCharCode()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/fromCharCode)
* [Aprende más sobre `ASCII`](http://conceptodefinicion.de/ascii/)
* [Documentación de NPM](https://docs.npmjs.com/)

Herramientas:
- [GitHub y GitHub Pages](https://guides.github.com/)
- [Guía de Scrum](https://www.scrumguides.org/docs/scrumguide/v1/scrum-guide-es.pdf): solamente para comenzar a entender cómo organizar tu trabajo.

## Checklist
Esta sección está  para ayudarte a llevar un control de lo que vas completando.

### Parte Obligatoria
* [ ] `README.md` incluye info sobre proceso y decisiones de diseño.
* [ ] `README.md` explica claramente quiénes son los usuarios y su relación con
  el producto.
* [ ] `README.md` explica claramente cómo el producto soluciona los
  problemas/necesidades de los usuarios.
* [ ] Usa VanillaJS.
* [ ] No utiliza `this`.
* [ ] Implementa `cipher.encode`.
* [ ] Implementa `cipher.decode`.
* [ ] Pasa linter con configuración provista.
* [ ] Pasa pruebas unitarias.
* [ ] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [ ] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [ ] Interfaz permite escribir un texto para ser cifrado.
* [ ] Interfaz muestra el resultado del cifrado correctamente.
* [ ] Interfaz permite escribir un texto para ser descifrado.
* [ ] Interfaz muestra el resultado del descifrado correctamente.

### Parte Opcional: "Hacker edition"
* [ ] Cifra/descifra minúsculas
* [ ] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)
* [ ] Permite usar un `offset` negativo.
