<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Tecnologías para consumir y probar servicios

    .row.justify-content-center.mt-5
      .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img1.png')})`}"
        )                             
        .bloque-texto-g__texto.p-4
          p Existen algunas herramientas para probar y consumir servicios #[i web] de todos los tipos, mencionaremos algunas de las más usadas y populares. Se reitera la importancia de conocer todos estos conceptos y herramientas, para posteriormente, tener la oportunidad de construir sus propios servicios #[i web] y consumirlos con algunas de las herramientas, incluso con su propio #[i FrontEnd] que también construirá “desde cero”.
    
      .col-md-5.mt-5
        .bloque-texto-b.color-bloque-texto-gris
          .bloque-texto-b__texto
            p Para la construcción de aplicaciones #[i web] que cuentan con la arquitectura cliente servidor, donde están las capas separadas (ver esquema siguiente), normalmente se recomienda construir primero la capa del #[i BackEnd,] luego se realiza la documentación de los servicios creados con algunas herramientas. Una herramienta muy popular es #[i Swagger,] con estándares como #[i Open API.] Una vez se tiene esta documentación, se procede a crear el #[i FrontEnd] y consumir los servicios presentados. Una manera de probarlos antes de empezar a crear nuestro #[i FrontEnd,] es usar herramientas como las que mencionaremos.
      .col-md-7.mt-5
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema3/img2.png', alt='') 

    <Separador></Separador>
    #t_3_1.titulo-segundo.color-acento-contenido.mt-5
      h2 3.1 Tipos y características de tecnologías para probar servicios
    p.mt-5.mb-5 Para ampliar la información descrita anteriormente, veamos lo siguiente:

    SlyderA(tipo="b").bg-slider
      .row.mt-5
        .col-md-6.mb-4.mb-md-0.px-5
          .row.justify-content-center.align-items-center.my-lg-6.t-align
            h5 #[i Postman]                    
            p Es una plataforma #[i API] para construir y usar #[i API.] Puedes descargar #[i Postman] en su #[i web] oficial: https://www.postman.com/downloads/
            p La instalación es muy sencilla, en #[i Windows] es simplemente ejecutar el instalador y seguir las indicaciones.
            p Si abres #[i postman] “de manera rápida”, tendrás una interfaz muy parecida a la siguiente.
        .col-md-5
          figure(data-aos="fade-right")
            img(src="@/assets/curso/temas/tema3/img3.png", alt="alt")
      .row.mt-5
        .col-md-6.mb-4.mb-md-0.px-5 
          .row.justify-content-center.align-items-center.my-lg-6.t-align
            h5 Peticiones con un Body 
            p En postman, se pueden realizar en la siguiente sección mostrada, por lo regular con peticiones como #[i POST, PUT, PATCH.]
        .col-md-5
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/tema3/img4.png", alt="alt") 
      
      .row.mt-5
        .col-md-6.mb-4.mb-md-0.px-5 
          .row.justify-content-center.align-items-center.my-lg-6.t-align
            h5 Peticiones con un #[i Get]
            p A continuación, se muestra el resultado de una petición con #[i GET] a la #[i URL:] https://api.spaceflightnewsapi.net/v3/info
            p La respuesta mostrada es en formato #[i JSON.] Se puede observar un objeto con los campos o claves: versión, que es un valor de texto y #[i newsSites, newsSites] a su vez, es un vector de textos.
        .col-md-5
          figure(data-aos="fade-right")
            img(src="@/assets/curso/temas/tema3/img5.png", alt="alt") 
      .row.mt-5
        .col-md-6.mb-4.mb-md-0.px-5 
          .row.justify-content-center.align-items-center.my-lg-6.t-align
            h5 #[i SOAPUI]
            p Según su web oficial, es la herramienta de prueba automatizada más utilizada en el mundo para las #[i API] de #[i SOAP] y #[i REST.] Escriba, ejecute, integre y automatice pruebas de #[i API] avanzadas con facilidad.           
        .col-md-5
          figure(data-aos="fade-right")
            img(src="@/assets/curso/temas/tema3/img6.png", alt="alt") 

    .row.justify-content-center.mt-5
      .col-md-10
        .cajon.color-cajon-observacion.p-3
          .row.justify-content-center 
            .col-auto.mt-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img22.png', alt='').img125                            
            .col-md-8.mt-4
              p.text-white #[span.text-bold Observación:] la #[i URL] en la que se hace la petición mostrada, no tiene seguridad, es por eso por lo que con solo colocarla en el recuadro indicado y enviar (#[i send]) la petición, responde. En otro componente formativo se verán las estrategias de seguridad para proteger tus #[i API REST.]

    h2.mt-5 Otras herramientas 
    p.mt-5.mb-5 También se pueden encontrar otras herramientas como las que se mencionan a continuación.

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

    p.mt-5.mb-5 Se sugiere el siguiente ejercicio práctico para complementar los temas vistos:
    .row.justify-content-start.mb-5
      .bloque-texto-b.color-bloque-texto-verde-inicial
        .bloque-texto-b__texto
          p Vamos a realizar de manera rápida un #[span.italica-texto API REST] con un #[span.italica-texto Endpoint] donde se aplique el método #[span.italica-texto GET,] usaremos para ello: #[span.italica-texto NodeJS,] y se codificará el lenguaje de programación #[span.italica-texto Javascript.] Finalmente, probaremos dicho #[span.italica-texto Endpoint,] con la herramienta #[span.italica-texto POSTMAN.]

    .row.justify-content-center.mb-4
      .col-lg-12
        .crd.bg-slider-1.brd--rad.p-4
          PasosB.color-secundario
            .row.justify-content-center(titulo="Paso 1").pt-3
              .col-lg-5.mb-4.mb-lg-0
                h5 Instalar #[i NodeJS]
                p Ingrese a la #[i web] oficial #[i https://nodejs.org/es/], descárguelo e instálelo, la instalación es muy sencilla y rápida
                p #[span.text-bold Observación:] debe instalar la versión estable (#[i LTS]).
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
                p.mt-3 Una vez descargado el ejecutable desde la página oficial de #[i Node JS:] ", en #[i Windows,] puede ejecutar haciendo doble clic sobre dicho ejecutable.
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
                p Posteriormente, aparece el destino donde se instalará Node por defecto, hacer clic nuevamente en el botón #[i Next] (Siguiente) a menos que quiera cambiar por otra ruta de instalación, luego puede dar clic primero en #[i Change] (cambiar), seleccionar su ruta de preferencia y luego #[i Next.]
                p En la siguiente pantalla de #[i “Custom Setup”] aparecen varias opciones para personalizar tu instalación, deja todo como está y haz clic en el botón #[i Next.]
              .col-lg-5.col-6
                figure
                  img(src='@/assets/curso/temas/tema3/img11.png', alt='')    
            .row.justify-content-center(titulo="Paso 5").pt-3
              .col-lg-5.mb-4.mb-lg-0
                p Después, aparece la pantalla de #[i “Tool for Natives Modules”], deje todo como está y haga clic en #[i Next] (Siguiente).
                p Aparecerá otra pantalla, que te indica que ya todo está listo para realizar la instalación #[i “Ready to Install Node.js”], por favor hacer clic en el botón #[i install]. Allí aparecerá el progreso de la instalación, por lo que debe esperar a que finalice ese proceso. Esto puede tardar dependiendo de sus recursos de #[i hardware] y características de su máquina, aunque normalmente la instalación es muy sencilla. Si la instalación le pide permisos de instalación simplemente concédalos.
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
                h3 Probemos que funciona.
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

      p.mt-5.mb-5 Para profundizar más los temas mencionados, veamos lo siguiente:
      h2.mt-5  Repositorio de #[i GIT] https://github.com/
      .row.justify-content-start.mb-5
        .bloque-texto-b.color-bloque-texto-verde-inicial
          .bloque-texto-b__texto
            p Existen varias formas para realizar la subida de un código al repositorio de #[span.italica-texto git GitHub]; sin embargo, aquí le enseñamos una forma simple y particular indicada por el propio gestor de repositorios.

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
                  p Abre una ventana haciendo clic derecho sobre la carpeta del directorio (en la parte blanca, sin seleccionar ningún elemento dentro de ella) y selecciona la opción #[i “Git bash here”.]
                .col-lg-5.col-6
                  figure
                    img(src='@/assets/curso/temas/tema3/img32.png', alt='')   
              .row.justify-content-center(titulo="Paso 6").pt-3
                .col-lg-5.mb-4.mb-lg-0
                  h5 Código subido al repositorio de #[i GitHub.] 
                  p.mt-3 Te aparecerá la ventana #[i bash] de #[i Git] y aquí escribirás comando por comando. Por ejemplo, el primer comando es: #[i “echo "# apirestget" >> README.md”]
                  p Una vez haya ejecutado cada comando, actualice el navegador y verá su código subido al repositorio de #[i GitHub.]
                .col-lg-5.col-6
                  figure
                    img(src='@/assets/curso/temas/tema3/img33.png', alt='')

    h2.mt-5.mb-5 Diferencia entre #[i API REST] y #[i SOAP] en aplicaciones actuales. 
      figure.mt-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video: Leyenda del video                                                                                                 
   
    .row.justify-content-center.mt-5
      .col-md-10
        .cajon.color-cajon-observacion.p-3
          .row.justify-content-center 
            .col-auto.mt-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img22.png', alt='').img125                            
            .col-md-8.mt-4
              p.text-white En este orden de ideas, es importante anotar que las peticiones #[i HTTP] más usadas cuando se construye un servicio web, son: #[i GET, POST, PUT, DELETE y PATCH], es recomendable usarlas para los siguientes casos.
    p.mt-5.mb-5 Como veremos a continuación, #[i GET] es recomendable usarla cuando se consulta algún recurso, #[i POST] cuando se quiere guardar un recurso, por ejemplo, en una base de datos. #[i PUT] para actualizar algún recurso, #[i PATH], es recomendable usarlo para actualizar, pero parte de un recurso, y #[i DELETE] para borrar algún recurso.

    .row.justify-content-center.mt-5
      .col-md-10
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema3/img34.png', alt='').img125 

    .row.justify-content-center.mt-5
      .col-md-10
        .cajon.color-acento-contenido.color-cajon-amarillo.p-3
          .row.justify-content-center.p-3 
            p Estimado aprendiz, hasta aquí llega el desarrollo temático del componente servicios #[i web], peticiones y tecnologías de consumo en servicios. Recuerde seguir explorando los conceptos aquí estudiados, estos serán claves al momento de iniciar su propio desarrollo. Tenga en cuenta que el éxito de su proyecto dependerá en gran medida de la pertinencia y lo funcional que este resulte para el usuario en términos de usabilidad, accesibilidad y coherencia.
            p ¡Éxitos en este recorrido por el conocimiento!
                
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
