<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Métodos de petición

    h2 Métodos de petición #[i HTTP]
    p.mt-5.mb-5 A continuación, se hablará sobre los métodos de petición #[i HTTP], los usos y características de cada uno. Antes de tocar el tema en cuestión, veamos las siguientes tablas donde se relacionan las peticiones y respuestas con el protocolo #[i HTTP].

    .row.justify-content-center
        .col-md-12
          <div data-aos=“zoom-in”>
            SlyderF(columnas="col-sm-4")
              .tarjeta-avatar
                img(src='@/assets/curso/temas/tema2/img1.png', alt='')
                .tarjeta.he-tarjetas.tarjeta-amarilla.p-5
                  h2.text-center.mt-5 #[i Get]
                  p.text-center Petición de lectura.
              .tarjeta-avatar
                img(src='@/assets/curso/temas/tema2/img2.png' alt='')
                .tarjeta.he-tarjetas.tarjeta-amarilla.p-3
                  h2.text-center.mt-5 #[i Head]
                  p.text-center Petición lectura de encabezado.
              .tarjeta-avatar
                img(src='@/assets/curso/temas/tema2/img3.png' alt='')
                .tarjeta.he-tarjetas.tarjeta-amarilla.p-3
                  h2.text-center.mt-5 #[i Put]
                  p.text-center Petición almacenamiento para edición.   
              .tarjeta-avatar
                img(src='@/assets/curso/temas/tema2/img4.png' alt='')
                .tarjeta.he-tarjetas.tarjeta-amarilla.p-3
                  h2.text-center.mt-5 #[i Patch]
                  p.text-center Igual a #[i put,] pero para parte del recurso a editar.  
              .tarjeta-avatar
                img(src='@/assets/curso/temas/tema2/img5.png' alt='')
                .tarjeta.he-tarjetas.tarjeta-amarilla.p-3
                  h2.text-center.mt-5 #[i Post]
                  p.text-center Petición de guardado de recursos.    
              .tarjeta-avatar
                img(src='@/assets/curso/temas/tema2/img6.png' alt='')
                .tarjeta.he-tarjetas.tarjeta-amarilla.p-3
                  h2.text-center.mt-5 #[i Delete]
                  p.text-center Petición para eliminar recursos.  
              .tarjeta-avatar
                img(src='@/assets/curso/temas/tema2/img7.png' alt='')
                .tarjeta.he-tarjetas.tarjeta-amarilla.p-3
                  h2.text-center.mt-5 #[i Connect]
                  p.text-center Reservado para uso futuro.  
              .tarjeta-avatar
                img(src='@/assets/curso/temas/tema2/img8.png' alt='')
                .tarjeta.he-tarjetas.tarjeta-amarilla.p-3
                  h2.text-center.mt-5 #[i Trace]
                  p.text-center Repite solicitud entrante.                                                            
              .tarjeta-avatar
                img(src='@/assets/curso/temas/tema2/img9.png' alt='')
                .tarjeta.he-tarjetas.tarjeta-amarilla.p-3
                  h2.text-center.mt-5 #[i Options]
                  p.text-center Consulta ciertas opciones.          
          </div>

    p.mt-5.mb-5 Para profundizar, entender con mayor claridad y avanzar en el desarrollo temático, veamos esta tabla de respuestas #[i HTTP.]
    .row.justify-content-center
      .col-md-8
        figure
          img(src="@/assets/curso/temas/tema2/img10.png", alt="alt").mb-5  

    .row.justify-content-center.mt-5
      .col-md-10
        .cajon.color-cajon-observacion.p-3
          .row.justify-content-center 
            .col-md-2
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img22.png', alt='').img125                            
            .col-md-8.mt-4
              p.text-white Para continuar, es importante recordar que #[i HTTP (HyperText Transport Protocol),] es un protocolo que dicta cómo la información incluidos los hipertextos, se transfiere a través de #[i Internet.]
    
    p.mt-5.mb-5 Cuando se habla de “hipertexto”, se refiere a un documento incrustado con hipervínculos que al hacer clic, lo llevará al documento o recurso deseado. Los hipervínculos se utilizaron originalmente para vincular documentos #[i HTML, HTTP.] Fue diseñado para facilitar el uso de hipertexto y soportar la comunicación de documentos y recursos expresados en #[i HTML.]
    p.mb-5 Las #[i URIs] y #[i URLs:] los identificadores de recursos universales (#[i URI]) son direcciones que se utilizan para identificar recursos. Los localizadores universales de recursos (#[i URL]) son un subconjunto de URI que se utilizan para localizar recursos.
    .row.justify-content-center.mt-5
      .col-md-6.mt-5
        .cajon.color-primario-cajon-gris.color-secundario-cajon-gris.p-3
          .row.justify-content-center.p-3
            p.text-bold Vamos a ejemplificar:
            p.mt-3 Tienes la siguiente dirección del SENA: 
            p https://sena.edu.co/es-co/Paginas/default.aspx
            p.text-bold En ella se pueden identificar los siguientes elementos:
            ul.lista-ul
              li
                ul
                  li 
                    i.lista-ul__vineta
                    | Protocolo: #[i  https (http sobre SSL)]
                  li 
                    i.lista-ul__vineta
                    | #[i Hostname: ] sena.edu.co   
                  li 
                    i.lista-ul__vineta
                    | Localización del recurso: /es-co/Paginas/ 
                  li 
                    i.lista-ul__vineta
                    | Recurso: #[i default.aspx]
            p Una petición desde un cliente consta de: una línea de #[i request,] los encabezados, una línea en blanco, si no se necesita un mensaje de #[i body] y algunas veces un #[i body]. Un mensaje de #[i body] puede ser de los distintos formatos como: #[i HTML, JSON o XML.]
      .col-md-6.mt-5
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema2/img11.svg', alt='') 

    h2.mt-5 Tipos de métodos de petición 
    p.mt-5.mb-5 Los métodos existentes son #[i GET] y #[i POST,] el resto de los mencionados en la tabla anterior son casos especiales de estos.            

    .row.justify-content-center.mt-5
      .col-md-5
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema2/img12.png', alt='')          
      .col-md-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-acordeon").mt-5
          .row(titulo="<i>GET</i>").p-2
            .row.justify-content-center
              p Obtiene o recupera el recurso proporcionado por el #[i URI] que se asigna en la línea de solicitud. Los métodos de obtención se utilizan para recuperar páginas #[i web,] imágenes o resultados de programas. Se puede enviar una cadena de consulta junto con la solicitud en el #[i URI.] Las consultas siempre comienzan con un signo de interrogación y deben estar codificadas en #[i URL.] No se envía ningún cuerpo de mensaje junto con una solicitud #[i GET.]
          div(titulo="<i>POST</i>").p-2
            .row.justify-content-center
              p Se utiliza para agregar o modificar un recurso según el cuerpo del mensaje de la solicitud, en el #[i host] especificado en la #[i URI] de la solicitud. El cuerpo del mensaje contiene la información utilizada para crear o actualizar un recurso en el sitio #[i web.] Se usa a menudo para crear.
          div(titulo="<i>PUT</i>").p-2
            .row.justify-content-center
              p Toma la información proporcionada en el cuerpo de la solicitud y crea o actualiza un recurso en la ubicación especificada en el #[i URI] de la solicitud. El #[i URI] especificado en la solicitud dicta al servidor la identidad y la ubicación del recurso incluido, este se usa a menudo para actualizar.
         


</template>

<script>
export default {
  name: 'Tema2',
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
