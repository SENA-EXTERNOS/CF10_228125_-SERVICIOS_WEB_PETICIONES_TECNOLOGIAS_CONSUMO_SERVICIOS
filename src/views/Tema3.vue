<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Tecnologías para consumir y probar servicios web

    .row.justify-content-center.mt-5.mb-5
      .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img1.png')})`}"
        )                             
        .bloque-texto-g__texto.p-4
          p Existen algunas herramientas para probar y consumir servicios web de todos los tipos; mencionaremos algunas de las más usadas y populares. Se reitera la importancia de conocer todos estos conceptos y herramientas para, posteriormente, tener la oportunidad de construir sus propios servicios web y consumirlos con algunas de las herramientas, incluso con su propio #[em FrontEnd] que también construirá “desde cero”.
    
      .col-md-5.mt-5
        .bloque-texto-b.color-bloque-texto-gris
          .bloque-texto-b__texto
            p Para la construcción de aplicaciones web que cuentan con la arquitectura cliente servidor, donde están las capas separadas (ver esquema siguiente), normalmente se recomienda construir primero la capa del #[em BackEnd], luego se realiza la documentación de los servicios creados con algunas herramientas. Una herramienta muy popular es Swagger, con estándares como Open API. Una vez se tiene esta documentación, se procede a crear el #[em FrontEnd] y consumir los servicios presentados. Una manera de probarlos antes de empezar a crear nuestro #[em FrontEnd], es usar herramientas como las que mencionaremos.
      .col-md-7.mt-5
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema3/img2.png', alt='') 


    p.mt-5.mb-4 En cuanto a los tipos y características de las tecnologías para probar servicios web, tenga presente:

    SlyderA(tipo="b").bg-slider
      .row.mt-5
        .col-md-6.mb-4.mb-md-0.px-5
          .row.justify-content-center.align-items-center.my-lg-6.t-align
            h5 #[i Postman]                    
            p Es una plataforma API para construir y usar API.
            p Se puede descargar en su web oficial: https://www.postman.com/downloads/
            p La instalación es muy sencilla: en Windows, simplemente se ejecuta el instalador y se siguen las indicaciones.
            p Si se abre postman “de manera rápida”, se tendrá una interfaz muy parecida a la siguiente.
        .col-md-5
          figure(data-aos="fade-right")
            img(src="@/assets/curso/temas/tema3/img3.png", alt="alt")
      .row.mt-5
        .col-md-6.mb-4.mb-md-0.px-5 
          .row.justify-content-center.align-items-center.my-lg-6.t-align
            h5 Peticiones con un Body en un postman
            p Se pueden realizar en la sección mostrada, por lo regular con peticiones como POST, PUT, PATCH.
        .col-md-5
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/tema3/img4.png", alt="alt") 
      
      .row.mt-5
        .col-md-6.mb-4.mb-md-0.px-5 
          .row.justify-content-center.align-items-center.my-lg-6.t-align
            //h5 Peticiones con un Gea
            p La respuesta mostrada es en formato JSON. Se puede observar un objeto con los campos o claves: versión, que es un valor de texto y newsSites, newsSites a su vez, es un vector de textos.
        .col-md-5
          figure(data-aos="fade-right")
            img(src="@/assets/curso/temas/tema3/img5.png", alt="alt") 
      .row.mt-5
        .col-md-6.mb-4.mb-md-0.px-5 
          .row.justify-content-center.align-items-center.my-lg-6.t-align
            h5 SOAPUI
            p Según su web oficial, es la herramienta de prueba automatizada más utilizada en el mundo para las API de SOAP y REST. Escriba, ejecute, integre y automatice pruebas de API avanzadas con facilidad.
        .col-md-5
          figure(data-aos="fade-right")
            img(src="@/assets/curso/temas/tema3/img6.png", alt="alt") 

    .row.justify-content-center.mt-5
      .col-md-10
        .cajon.color-cajon-observacion.p-3
          .row.justify-content-center 
            .col-auto.mt-3
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img22.png', alt='').img125                            
            .col-md-8.mt-3
              p.text-white #[span.text-bold Observación:] la URL en la que se hace la petición mostrada, no tiene seguridad, es por eso por lo que con solo colocarla en el recuadro indicado y enviar (#[em send]) la petición, responde.

    p.mt-5.mb-5 También se pueden encontrar otras herramientas como las que se mencionan a continuación:

    .row.justify-content-center   
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img7.png', alt='')
          .tarjeta.he-tarjetas.color-tarjeta-verde-avatar.p-3
            h3.text-center.mt-5 #[i Rest Assured]
            p.text-center https://rest-assured.io/  
      .col-sm-6.col-lg-3.mb-4.mb-lg-0                     
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img7.png' alt='')
          .tarjeta.he-tarjetas.color-tarjeta-verde-avatar.p-3
              h3.text-center.mt-5 #[i Newman]
              p.mb-0 https://www.npmjs.com
              span /package/newman  
      .col-sm-6.col-lg-3.mb-4.mb-lg-0                 
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img7.png' alt='')
          .tarjeta.he-tarjetas.color-tarjeta-verde-avatar.p-3
            h3.text-center.mt-5 #[i Insomnia REST]
            p.text-center https://insomnia.rest/   

    .row.justify-content-start.mb-4
      .bloque-texto-b.color-bloque-texto-verde-inicial
        .bloque-texto-b__texto
          p A continuación, haga seguimiento al ejercicio práctico que se muestra. Con él, se refuerzan y reafirman algunos conceptos y acciones del contenido de este componente formativo. #[b ¡Adelante!]
    
    p De manera rápida, realizaremos un API REST con un #[em Endpoint] donde se aplique el método GET, usando para ello NodeJS, y se codificará el lenguaje de programación JavaScript. Finalmente, probaremos dicho #[em Endpoint], con la herramienta POSTMAN.  

    .row.justify-content-center.mb-4
      .col-lg-12
        .crd.bg-slider-1.brd--rad.p-4
          PasosB.color-secundario
            .row.justify-content-center(titulo="Paso 1").pt-3
              .col-lg-5.mb-4.mb-lg-0
                h5 Instalar NodeJS
                p Ingrese a la web oficial https://nodejs.org/es/, descárguelo e instálelo, la instalación es muy sencilla y rápida.
                p #[b Observación:] debe instalar la versión estable #[em (LTS)].
              .col-lg-5.col-6
                figure
                  img(src='@/assets/curso/temas/tema3/img8.png', alt='')
            .row.justify-content-center(titulo="Paso 2").pt-3
              .col-lg-5.mb-4.mb-lg-0
                h5 Para mayor claridad, puede ver el video: 
                a.mb-4.mb-lg-0(href="https://drive.google.com/file/d/1nYVN0dbszx_w8pxTMKluP6GotJvhNuTL/view?usp=sharing" target="_blank")
                  .anexo__texto
                    p.mb-0 https://drive.google.com/file/d/
                    |1nYVN0dbszx_w8pxTMKluP6GotJvhNuTL/view?usp=sharing
                p.mt-3 Una vez descargado el ejecutable desde la página oficial de Node JS: ", en Windows, puede ejecutar haciendo doble clic sobre dicho ejecutable.
              .col-lg-5.col-6
                figure
                  img(src='@/assets/curso/temas/tema3/img9.png', alt='')  
            .row.justify-content-center(titulo="Paso 3").pt-3
              .col-lg-5.mb-4.mb-lg-0
                p Hacer clic en los botones “Siguiente” de cada pantalla que aparece, primero la pantalla de la licencia para aceptar los términos y condiciones, después hacer clic en #[i Next] (siguiente).
              .col-lg-5.col-6
                figure
                  img(src='@/assets/curso/temas/tema3/img10.png', alt='')   
            .row.justify-content-center(titulo="Paso 4").pt-3
              .col-lg-5.mb-4.mb-lg-0
                p Posteriormente, aparece el destino donde se instalará Node por defecto. Hacer clic nuevamente en el botón #[em Next] (Siguiente) a menos que quiera cambiar por otra ruta de instalación, luego puede dar clic primero en Change (cambiar), seleccionar su ruta de preferencia y luego #[em Next].
                p En la siguiente pantalla de “Custom Setup”, aparecen varias opciones para personalizar su instalación, deje todo como está y haga clic en el botón #[em Next].
              .col-lg-5.col-6
                figure
                  img(src='@/assets/curso/temas/tema3/img11.png', alt='')    
            .row.justify-content-center(titulo="Paso 5").pt-3
              .col-lg-5.mb-4.mb-lg-0
                p Después, aparece la pantalla de “Tool for Natives Modules”, deje todo como está y haga clic en Next (Siguiente).
                p Aparecerá otra pantalla, que indica que ya todo está listo para realizar la instalación “Ready to Install Node.js”. Haga clic en el botón install. Allí aparecerá el progreso de la instalación, por lo que debe esperar a que finalice ese proceso. Esto puede tardar dependiendo de sus recursos de #[em hardware] y características de su máquina, aunque normalmente la instalación es muy sencilla. Si la instalación le pide permisos de instalación simplemente concédalos.
              .col-lg-5.col-6
                figure
                  img(src='@/assets/curso/temas/tema3/img12.png', alt='') 
            .row.justify-content-center(titulo="Paso 6").pt-3
              .col-lg-5.mb-4.mb-lg-0
                p Cuando la instalación finaliza por completo, aparece el botón de #[i “Finish”] (Finalizar), y simplemente debe dar clic en este botón. De esta manera, ya habrá instalado #[i Node JS] en su equipo y ya está listo para crear sus proyectos.                
              .col-lg-5.col-6
                figure
                  img(src='@/assets/curso/temas/tema3/img13.png', alt='')    
            .row.justify-content-center(titulo="Paso 7").pt-3
              .col-lg-5.mb-4.mb-lg-0
                p Seguidamente, proceda a instalar #[i Visual Studio Code,] Debe ir a la web oficial #[i https://code.visualstudio.com/download,] descargarlo e instalarlo. La instalación también es sencilla, fácil y rápida.
              .col-lg-5.col-6
                figure
                  img(src='@/assets/curso/temas/tema3/img14.png', alt='') 

    h2.mt-5  ¿Cómo implementar el #[i API REST]? 
    p.mt-5.mb-5 Veamos a continuación un paso a paso en la implementación de #[i API REST]. 
    .row.justify-content-center.mb-4
      .col-lg-10
        PasosA.color-acento-botones.mb-5(tipo="n")
          .row
            .col-lg
              .row.t-align-left 
                h3 Carpeta
                p Crear una carpeta en el lugar que desee y renombrarla en este caso como (#[i apirest]).
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema3/img15.png', alt='').img125

          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema3/img16.png', alt='').img125
            .col-lg
              .row.t-align-left 
                h3 Visual Studio Code
                p Abra el IDE #[i Visual Studio Code] y diríjase a: #[i File -> Open Folder] (Archivo -> Abrir directorio) y busque la ruta en donde se creó su carpeta (directorio).

          .row
            .col-lg
              .row.t-align-left 
                h3 Cree un archivo 
                p Ahora, cree un archivo llamado #[i server.js] en la raíz del proyecto.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema3/img17.png', alt='').img125

          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema3/img18.png', alt='').img125
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema3/img19.png', alt='').img125                
            .col-lg
              .row.t-align-left.mt-5
                h3 Ir a Consola 
                p Diríjase a la “consola” del #[i IDE] y ejecute el comando: #[i “npm init -y”] y presione #[i enter.]
                p Observación: en la imagen se muestra en la parte inferior izquierda, debe dar clic para que aparezca, en caso que no se esté mostrando, y luego en la pestaña “terminal”, escriba el comando y presione #[i enter.]
          .row
            .col-lg
              .row.t-align-left 
                h3 Nuevo archivo #[i “package.json”]
                p Luego, verá que aparece un nuevo archivo #[i “package.json”].
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema3/img20.png', alt='').img125

          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema3/img21.png', alt='').img125
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema3/img22.png', alt='').img125                
            .col-lg
              .row.t-align-left 
                h3 Instalación #[i express.js]
                p Instale el #[i framework express.js], ejecutando en consola el comando: #[i npm install express]
                p Notará que aparece un nuevo directorio #[i “node_modules”] y que puede transcurrir un tiempo considerable.
          .row
            .col-lg
              .row.t-align-left.top-margin 
                h3 En el archivo #[i server.js], coloque el siguiente código.
                p Observación: antes de solo copiar y pegar, es recomendable que escriba línea por línea para que vaya agilizando tus destrezas de código y lógica.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema3/img23.png', alt='').img125   
          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema3/img24.png', alt='').img125             
            .col-lg
              .row.t-align-left 
                h3 Guarde todos los cambios y ejecute con el comando: #[i “node server” o “node server.js”]
                p Observación: puede omitir la extensión #[i .js] del archivo o no.
                p Si ha seguido el paso a paso, deberá ver el mensaje de ejecución correcta. #[i “Server listening on port 3000”]
          .row
            .col-lg
              .row.t-align-left.mt-5
                h3 Prueba de funcionamiento
                p Como es una petición #[i GET], puede probar el #[i Endpoint] de su #[i API REST] creada desde el navegador.
                p Para realizar la petición debe escribir la #[i URL] con la siguiente estructura:
                p #[i [localhost o 127.0.0.1] + : [dos puntos] + [puerto] + / [barra] + NOMBRE_RUTA_ENPOINT] 
                p Sería entonces: #[i “localhost:3000/clients”]
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema3/img25.png', alt='').img125  
                figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema3/img26.png', alt='').img125 
          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema3/img27.png', alt='').img125             
            .col-lg
              .row.t-align-left 
                h3 Repositorio #[i Git]
                p Ahora, debe subir su proyecto a un repositorio de #[i GIT], usando el gestor de repositorios #[i GitHub]. Lo primero que debe hacer es adquirir una cuenta, es gratis
                p Debe tener instalado en su máquina, #[i GIT.] Si no lo tiene, puede descargarlo desde: https://git-scm.com/
                p Su instalación es sumamente fácil, solo seguir el #[i wizard] y dar siguiente a todo y finalizar, intente no seleccionar nada de lo que aparece en cada ventana que va apareciendo en los pasos siguientes.


      h4.mt-5  Repositorio de #[i GIT] https://github.com/
      .row.justify-content-start.mb-5
        .bloque-texto-b.color-bloque-texto-verde-inicial
          .bloque-texto-b__texto
            p.py-3 Existen varias formas para realizar la subida de un código al repositorio de git GitHub; sin embargo, aquí se muestra una forma simple y particular indicada por el propio gestor de repositorios:


      .row.justify-content-center.mb-4
        .col-lg-12
          .crd.bg-slider.brd--rad.p-4
            PasosB.color-secundario
              .row.justify-content-center(titulo="Paso 1").pt-3
                .col-lg-5.mb-4.mb-lg-0
                  h5 Crear la cuenta
                  p Si aún no tiene cuenta, dar clic en el botón de registro #[i “Sign Up”], ubicado en la parte superior derecha y suministrar los datos que se solicitan, si ya tiene una cuenta, por favor inicie sesión.
                .col-lg-5.col-6
                  figure
                    img(src='@/assets/curso/temas/tema3/img28.png', alt='')
              .row.justify-content-center(titulo="Paso 2").pt-3
                .col-lg-5.mb-4.mb-lg-0
                  h5 Ingrese y ejecute 
                  p.mt-3 Una vez haya creado su cuenta, e ingresado a #[i GitHub] con su usuario y contraseña, deberá seguir los siguientes pasos:
                  p 1.	Dar clic en el botón “Nuevo” (#[i new]).
                .col-lg-5.col-6
                  figure
                    img(src='@/assets/curso/temas/tema3/img29.png', alt='')  
              .row.justify-content-center(titulo="Paso 3").pt-3
                .col-lg-5.mb-4.mb-lg-0
                  h5 Renombrar el repositorio 
                  p.mt-3 Escriba un nombre, puede ser #[i “apirestge”]. Deje las demás opciones como aparecen por defecto, diríjase al final de la página y haga clic en el botón #[i “create repository”] (crear repositorio).                  
                .col-lg-5.col-6
                  figure
                    img(src='@/assets/curso/temas/tema3/img30.png', alt='')    
              .row.justify-content-center(titulo="Paso 4").pt-3
                .col-lg-5.mb-4.mb-lg-0
                  h5 Siga las indicaciones 
                  p.mt-3 Posteriormente, aparecerá la siguiente pantalla y deberá simplemente seguir en una consola de comandos las indicaciones que allí se indican.
                .col-lg-5.col-6
                  figure
                    img(src='@/assets/curso/temas/tema3/img31.png', alt='')   
              .row.justify-content-center(titulo="Paso 5").pt-3
                .col-lg-5.mb-4.mb-lg-0
                  h5 Seleccione 
                  p.mt-3 Copie y pegue comando por comando como se indica en el cuadro de: #[i “… or create a new repository on the command line”]. El comando #[i “git add README.md”] debe reemplazarlo por: #[i “git add”] para que agregue todos (fíjese que después de add va un punto que indica agregar todo). El resto de los comandos van igual.                  
                  p Abra una ventana haciendo clic derecho sobre la carpeta del directorio (en la parte blanca, sin seleccionar ningún elemento dentro de ella) y selecciona la opción “Git bash here”.
                .col-lg-5.col-6
                  figure
                    img(src='@/assets/curso/temas/tema3/img32.png', alt='')   
              .row.justify-content-center(titulo="Paso 6").pt-3
                .col-lg-5.mb-4.mb-lg-0
                  h5 Código subido al repositorio de #[i GitHub.] 
                  p.mt-3 Aparecerá la ventana bash de Git y aquí debe escribir comando por comando. Por ejemplo, el primer comando es: “echo "# apirestget" >> README.md”
                  p Una vez haya ejecutado cada comando, actualice el navegador y verá su código subido al repositorio de GitHub.
                .col-lg-5.col-6
                  figure
                    img(src='@/assets/curso/temas/tema3/img33.png', alt='')

    
    p.mt-5.mb-4 Observe con suma atención el video que se muestra enseguida; allí se expone, en detalle, la diferencia entre API REST y SOAP, en aplicaciones actuales:
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/OQR_3ToYkmU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video: Leyenda del video                                                                                                 
   
    .row.justify-content-center.mt-5
      .col-md-10
        .cajon.color-cajon-observacion.p-3
          .row.justify-content-center 
            .col-auto.mt-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img22.png', alt='').img125                            
            .col-md-8.mt-4
              p.text-white En este orden de ideas, es importante anotar que las peticiones HTTP más usadas cuando se construye un servicio web, son: GET, POST, PUT, DELETE y PATCH, es recomendable usarlas para los siguientes casos.
    
    p.mt-5.mb-0 Es recomendable usar GET cuando se consulta algún recurso y POST cuando se quiere guardar un recurso, por ejemplo, en una base de datos. PUT para actualizar algún recurso, PATH, es recomendable usarlo para actualizar, pero parte de un recurso, y DELETE para borrar algún recurso.

    .row.justify-content-center
      .col-md-8
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema3/img34.svg', alt='').img125 

    .row.justify-content-center.mt-5
      .col-md-10
        .cajon.color-acento-contenido.color-cajon-amarillo.p-3
          .row.justify-content-center.p-3 
            p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.
                
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
