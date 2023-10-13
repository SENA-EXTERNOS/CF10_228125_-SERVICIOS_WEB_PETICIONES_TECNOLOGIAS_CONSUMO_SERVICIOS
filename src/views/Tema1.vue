<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Concepto y tipos de servicios web
    
    .row.justify-content-center.mt-5
      .col-md-12
        .bloque-texto-g.color-secundario.p-5.p-sm-4.p-md-5
          .bloque-texto-g__img.bloque-img-left(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img1.png')})`}"
          )                             
          .bloque-texto-g__texto.bloque-text-rigth.p-4
            p En la cotidianidad las personas utilizan diferentes servicios como el agua, la energía eléctrica, el #[em Internet], servicios bancarios, transporte público, restaurantes, servicio de #[em TV Streaming], por medio de marcas reconocidas, entre los cuales se pueden encontrar unos gratuitos y otros pagos. Para ampliar la información descrita anteriormente, veamos lo siguiente:

      .col-md-9.mt-5
        .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3
          .row.justify-content-center.text-bold.p-4 
            p.text-bold ¿Cuál es el flujo que normalmente sucede entre un servicio y un cliente?
            .row.justify-content-center
              ol.lista-ol.ml-lista-ol
                li 1. Existe la necesidad de utilizarlo, o de adquirirlo. 
                li 2. Se adquiere el servicio.
                li 3.	Una vez se es usuario, se consume el servicio.
                li 4.	El servicio satisface una necesidad.
                li 5.	Se genera un nivel de satisfacción en el usuario.
                li 6.	El usuario toma decisiones frente al servicio.
            p.mb-0.text-bold  Se pueden mencionar también servicios tecnológicos en particular como: Banca #[i Online, e-commerce] (Compra de vuelos, compra de productos), #[i e-Learning], en los que el flujo es parecido.    
      .col-md-10.mt-5.mb-5
        .bloque-texto-b.color-primario
          .bloque-texto-b__texto
            p En el mundo del #[em software] y las aplicaciones web, también se entregan o usan servicios. Cuando se habla del despliegue de un servicio, se hace alusión a una herramienta o utilidad de la cual otro #[emn software] o aplicación puede hacer uso. Un #[em software] o cliente del servicio puede ser interno o externo al contexto, así como un servicio de #[em software] puede convertirse en cliente a la vez y un cliente en servidor (quien ofrece un servicio). 

    
    .row.justify-content-center.mt-5
      .col-md-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.bloque-img-left(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img2.png')})`}"
          )                             
          .bloque-texto-g__texto.bloque-text-rigth.p-4
            p Tal como su nombre lo dice, un servicio web, es un servicio que se da en un entorno web.<br><br> 
            p Una definición de IBM (2022), nos dice:<br>        
            figure
              img(src="@/assets/curso/temas/tema1/Linea.png", alt="alt")           
            i.fas.fa-quote-left.color-comillas-verdes
            p.text-bloque Los servicios web son aplicaciones modulares autocontenidas que se pueden describir, publicar, localizar e invocar, a través de una red.
            i.fas.fa-quote-right.color-comillas-verdes

    
    .row.justify-content-center.align-items-center.mt-5          
      .col-md-3
        figure
          img(src="@/assets/curso/temas/tema1/img4.png", alt="alt")       
      .col-md-7.mt-5
        p Los servicios web (#[em web services]), son servicios ofrecidos en la Internet. Existe una gran cantidad de servicios web gratuitos, que pueden ser usados para construir una aplicación completa y bien estructurada, no solo aplicaciones web, sino también, aplicaciones móviles o de escritorio. En este orden de ideas, como son servicios que están en Internet, es importante contar con conexión para acceder a ellos.

      .col-md-10
        p.mt-5.mb-5  A su vez, desarrollo web (2022), menciona una definición dada en 2003:

        .bloque-texto-f.color-cajon-comillas.pt-4.px-5.mb-4
          .bloque-texto-f__comillas
            i.fas.fa-quote-left.color-comillas-azules
            i.fas.fa-quote-right.color-comillas-azules
          p.text-center.bloque-texto-f__texto “Componente de #[em software] que se comunica con otras aplicaciones codificando los mensajes en XML y enviando estos mensajes a través de protocolos estándares de Internet tales como, el Hypertext Transfer Protocol (HTTP). Intuitivamente, un Web Service es similar a un sitio web que no cuenta con un interfaz de usuario y que da servicio a las aplicaciones, en lugar darlo a las personas. Un Web Service, en vez de obtener solicitudes desde el navegador y retornar páginas web como respuesta, lo que hace es recibir solicitudes a través de un mensaje formateado en XML desde una aplicación, realiza una tarea y devuelve un mensaje de respuesta también formateado en XML”.

      p.mb-5 La anterior definición, habla sobre el concepto de web service con el protocolo SOAP; para mayor claridad, en la siguiente tabla, se puede visualizar el resumen de los bloques constructivos de un servicio web, necesarios para facilitar las comunicaciones remotas entre aflicciones:

      .titulo-sexto.color-acento-botones
        h5 Tabla 1
        p.mb-0 #[em Bloques constructivos de un servicio web]

      .tabla-a.color-secundario 
        table
          thead
            tr
              th Bloque
              th Descripción
              th Estándares
          tbody
            tr
              td Descubrimiento o #[i Discovery]
              td El cliente que necesita acceder a la funcionalidad de un servicio #[i web] necesita una forma de resolver la ubicación del servicio remoto.
              td UDDI, DISCO
            tr
              td Descripción
              td Una vez que se ha resuelto el extremo de un servicio #[i web] dado, el cliente necesita suficiente información para interactuar adecuadamente con el mismo.
              td WSDL, XML Schema, Docs
            tr
              td Formato de mensaje
              td Para el intercambio de datos, el cliente y el servidor tienen que estar de acuerdo en un mecanismo común de codificación y formato de mensaje.
              td SOAP
            tr                
              td Codificación
              td Los datos que se transmiten entre el cliente y el servidor necesitan codificarse en un cuerpo de mensaje.
              td XML
            tr  
              td Transporte
              td Luego que se ha dado formato al mensaje y se han serializado los datos en el cuerpo del mensaje se debe transferir entre el cliente y el servidor utilizando algún protocolo de transporte.
              td HTTP, SMTP, etc.      

                

    #t_1_1.mt-5
      h3 Evolución de los servicios web

    p.mt-4.mb-5 Para continuar, se describe una breve historia o cronología de la evolución de los #[i web services.]

    .row.justify-content-center.mt-5    
      .col-md-7
      ImagenInfografica.color-adicional-2
        template(v-slot:imagen)
          .row.justify-content-center
            .col-sm-10  
              figure 
                img(src='@/assets/curso/temas/tema1/img5.svg', alt='alt')   
        .tarjeta.color-acento-contenido.p-4(x="18%" y="52%"  style='border-radius: 10px; background-color: #FECB2F')
          p.mb-0.text-center Los primeros entornos basados en la web, fueron sitios con páginas web estáticas, normalmente eran páginas creadas con HTML. En un servidor, los clientes hacen una petición y mediante el protocolo HTTP, viaja el formato que al final es mostrado en el navegador. Las páginas web estáticas son aquellas que su contenido casi nunca cambia con un contenido informativo.

        .tarjeta.color-acento-contenido.p-4(x="40%" y="52%"  style='border-radius: 10px; background-color: #FECB2F')
          p.mb-0.text-center Posteriormente, aparecen las páginas web dinámicas. Estas son páginas que se han desarrollado con algún lenguaje de programación, la información de texto, imágenes y demás, son cambiantes con un contenido informativo. Un ejemplo de estas son las páginas web de los periódicos o aquellas realizadas con gestores de contenido. Las primeras páginas web dinámicas aparecieron por primera vez en el año de 1993.

        .tarjeta.color-acento-contenido.p-4(x="60%" y="52%"  style='border-radius: 10px; background-color: #FECB2F')
          p.mb-0.text-center La evolución de los sitios web, pasa a las aplicaciones web; hoy en día, todavía son tendencia y continúan en crecimiento. Anteriormente, las aplicaciones #[em software] (aplicaciones contables, aplicaciones de comunicación, IDE de desarrollo, etc.) en su mayoría, eran para escritorio; surge entonces la idea de llevarlas al entorno web. Páginas dinámicas, totalmente gestionables que realizan todas las tareas que puede realizar una aplicación de escritorio y llegar a tener más alcances. Ahora, se pueden encontrar aplicaciones web para todo propósito.

        .tarjeta.color-acento-contenido.p-4(x="82%" y="52%"  style='border-radius: 10px; background-color: #FECB2F')
          p.mb-0.text-center En la actualidad se usan también los #[i web services.] Cuando dos sistemas sienten la necesidad de comunicarse entre sí, “conversar un mismo lenguaje”, una forma de realizar una integración entre ellos es utilizar los #[i web services.] Para esa comunicación o conversación se necesitan protocolos en la #[i web] como los ya mencionados y otros lenguajes como, por ejemplo, #[i XML] y #[i JSON.]

    p.mt-5.mb-5 Para ampliar la información descrita anteriormente, veamos lo siguiente:

    h4.mt-5.mb-4 Tecnologías que utilizan los servicios web.
    p Imaginemos que una persona de China y otra de Colombia desean conversar o comunicarse con algunas palabras, pero resulta que la persona de China, no sabe hablar el idioma español en absoluto, aunque sí sabe hablar inglés (lenguaje universal) y obviamente su idioma nativo. La persona de Colombia está en la misma situación, dado que no habla chino en absoluto, pero habla su idioma nativo e inglés. El inglés es el idioma en común que ambos hablan, lo que sugiere que se podrán comunicar a través de este.
    p.mb-5 Algo similar ocurre con los sistemas de información, cuando una aplicación web está construida con #[i PHP] y otra aplicación está creada en Java, para lograr la comunicación entre ambas, la mejor forma es mediante los #[i web services.]

    TabsB.color-primario.mb-5
      .py-4.py-md-5(titulo="HTML (HyperText Markup Language)" :icono="require('@/assets/curso/temas/tema1/img6.png')")
        .row
          .col-md-6.mb-4.mb-md-0
            p Lenguaje de marcado utilizado para estructurar el texto en las páginas web. Es importante tener en cuenta que HTML proporciona estructura a las páginas web, pero no estilo. Por ejemplo, HTML marca qué partes de la página texto son el título, encabezados, párrafos, etc., para que puedan ser representados apropiadamente por un navegador web. ¡Ojo! No es un lenguaje de programación.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img9.png', alt='')
      .py-4.py-md-5(titulo="XML (eXtensible Markup Language)" :icono="require('@/assets/curso/temas/tema1/img7.png')")
        .row
          .col-md-6.mb-4.mb-md-0
            p Al igual que HTML, también es un lenguaje de marcado para almacenar y transportar datos. XML es legible tanto por máquina como por humanos. XML generalmente se usa para enviar datos estructurados dentro de un sistema basado en la web. Luego de recibidos los documentos en el archivo central, el jefe de este deberá constatar que las series y subseries documentales transferidas, concuerden con el inventario que las relaciona, para proceder a incorporarlas en las agrupaciones documentales correspondientes, de acuerdo con el cuadro de clasificación.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img10.png', alt='')
      .py-4.py-md-5(titulo="JSON (JavaScript Object Notation)" :icono="require('@/assets/curso/temas/tema1/img8.png')")
        .row
          .col-md-6.mb-4.mb-md-0
            p Es utilizado para almacenar y transportar datos. Está diseñado para ser legible tanto por máquinas como por humanos. JSON trae muchos beneficios dado que se puede convertir fácilmente en objetos del lenguaje de programación JavaScript, y viceversa. Como se ha mencionado, JavaScript es un lenguaje de programación interpretado y comúnmente admitido en los navegadores web modernos. JSON es más fácil de entender y más versátil que el XML. Teniendo el mismo ejemplo del XML anterior, se puede ver la diferencia significativa. El siguiente es un objeto JSON (cliente). La estructura de un JSON, sigue los pares de Clave – Valor; en este caso, name, age, email son las claves y los valores son respectivamente: maria, 22, mariadoe@email.com. Hay que anotar que en el formato JSON también se habla de arrays; se puede ver en la segunda imagen en la que se muestra un array de dos clientes.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img11.png', alt='')   

    .row.justify-content-center.mb-5
      .col-md-8 
        .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3.px-4
          h4 ¡Recuerda! 
          p.mb-0 Los objetos se encierran entre llaves ({ }) y los arrays se encierran entre corchetes ([ ]).  
    
    
    h3.mt-5.mb-4 Tipos de servicios web
    p.mb-5 Como se comentó anteriormente, para la comunicación entre solicitantes, teniendo en cuenta que un cliente (hace petición al servicio), se puede convertir en un servidor (proveedor del servicio) y un servidor en cliente, los web service utilizan una forma de mensajes XML. El patrón de mensajería de petición (#[em request]) / respuesta (#[em response]), es la base de todas las interacciones entre los servicios web y el #[em software] que utiliza esos servicios.


    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-3
        img.img-a.img-t(src='@/assets/curso/temas/tema1/img12.png', alt='')  
        h4.mt-4.mb-4 SOAP       
        p Los mensajes XML cumplen con el estándar SOAP. Dicho estándar fue desarrollado por Microsoft. SOAP permite que un cliente invoque servicios, además, proporciona estandarización a las interacciones entre clientes y servidores. La manera en que XML define y organiza las solicitudes y respuestas, debe ser estándar para que ambas partes puedan entenderse entre sí.

      .col-lg-3
        img.img-a.img-t(src='@/assets/curso/temas/tema1/img13.jpg', alt='')  
        h4.mt-4.mb-4 XML-RPC      
        p Un ejemplo de #[em middleware] es la llamada procedimiento remoto (RPC). RPC es la base de los sistemas de #[em middleware] utilizados para ciertos servicios web; este permite a los clientes invocar procedimientos que se implementan en un servidor. Pero, ¿qué es un Middleware? Un #[em Middleware] es una capa intermedia entre dos sistemas, que realiza una tarea antes de llegar al destino final.
        p Entonces, cuando nos referimos a XML-RPC se habla más de un protocolo que de RPC que hace uso del formato XML.
        p XML-RPC es el protocolo más simple que se usa para la comunicación de computadoras para el intercambiar información, este estándar evolucionó a SOAP.

      .col-lg-3
        img.img-a.img-t(src='@/assets/curso/temas/tema1/img14.png', alt='')  
        h4.mt-4.mb-4 JSON-RPC     
        p Es un protocolo de comunicación que se encarga de mandar una solicitud al servidor, por lo general el cliente, es un software, lo anterior, con el fin de generar invocaciones remotas entre dos objetos.
     
      .col-lg-3
        img.img-a.img-t(src='@/assets/curso/temas/tema1/img15.png', alt='')  
        h4.mt-4.mb-4 RESTFUL      
        p Cuando se habla de REST (Representational State Transfer), se refiere a una arquitectura de software web, cliente – servidor, basada en un diseño de petición y respuesta. Esta arquitectura (REST) se utiliza en aplicaciones distribuidas que usan HTTP para enviar mensajes y comunicarse entre componentes.
        p El cliente envía una solicitud y el servidor responde, pero en REST, la comunicación se basa en recursos. Esto significa que los mensajes se envían como representaciones de recursos. Los recursos pueden ser cualquier pieza de información que sea independiente. Esto puede incluir documentos, imágenes, representaciones de objetos, etc.
     

    .row.justify-content-center.mb-5
      .col-md-8 
        .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3.px-4
          p.mb-0 Cabe anotar que toda la información necesaria para que el servidor entienda y responda a la solicitud viene con la solicitud, y las solicitudes están contenidas entre sí.


    p.mt-5.mb-5 Además de REST ser cliente – servidor, también consiste en una arquitectura de múltiples capas. Una característica es que las interacciones de esta son sin estado o Stateless, esto quiere decir que el servidor no tiene conocimiento alguno de la existencia del cliente, solo cuando dicho cliente le hace petición, el servidor no guarda información sobre el estado actual del cliente o solicitudes anteriores realizadas por el cliente.

    .row.justify-content-center
      .col-lg-10
        PasosA.color-acento-botones.mb-5(tipo="n")
          .row
            .col-lg
              .row.t-align-left 
                h3 Estructura
                p Utiliza solo sustantivos en plural para un URI. Ejemplo: /clients.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img16.png', alt='').img125

          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img17.png', alt='').img125
            .col-lg
              .row.t-align-left 
                h3 Recursos
                p Los métodos GET no deben alterar el estado del recurso, esto solo es para obtener un recurso.

          .row
            .col-lg
              .row.t-align-left 
                h3 Sub-recursos 
                p Utiliza sub-recursos para relaciones entre recursos. Ejemplo: /clients/10/companies.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img18.png', alt='').img125

          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img19.png', alt='').img125
            .col-lg
              .row.t-align-left 
                h3 Encabezados 
                p Utiliza encabezados HTTP para especificar el formato de entrada y salida. Ejemplo: JSON.

          .row
            .col-lg
              .row.t-align-left 
                h3 Filtrado
                p Proporciona a los usuarios, filtrado y paginación para las colecciones.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img20.png', alt='').img125

          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img21.png', alt='').img125
            .col-lg
              .row.t-align-left 
                h3 Códigos 
                p Proporciona los códigos de estado HTTP adecuados. 

      .row.justify-content-center.mt-5
        .col-md-10
          .cajon.color-cajon-observacion.p-3
            .row.justify-content-center 
              .col-auto.mt-4
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/tema1/img22.png', alt='').img125                            
              .col-md-8.mt-4
                h4.text-white ¡Nota importante! 
                p.text-white  Restful se refiere a la implementación de la arquitectura REST y, cuando se habla de API Restful, se refiere a un API para esta.



                              


      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
