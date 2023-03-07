<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mt-5
      .cajon.color-cajon.p-3
        .row.justify-content-center               
          p.mb-0 Apreciado aprendiz, bienvenido a este componente formativo, donde se desarrollarán temas de gran importancia para los procesos relacionados con en el desarrollo web y, también, se abordarán los distintos métodos de petición y las respuestas HTTP, por lo que se hará referencia a algunas de las tecnologías más usadas para probar y consumir los servicios web.
    .row.justify-content-center.mt-5          
      .col-md-9
          p Fortalezca y cualifique su rol como desarrollador web full stack, especialmente, en lo que se refiere a <em>BackEnd</em> (acciones necesarias para que una web funcione correctamente). Familiarícese con lo que aquí se expone para, posteriormente, aplicar adecuadamente las herramientas de trabajo en la realización de tales procesos.

          p.mb-5 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

      .col-md-3
        figure
          img(src="@/assets/curso/temas/introduccion.png", alt="alt")
    <div data-aos=“fade”>
      figure(data-aos="fade").mt-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video: Leyenda del video              
    </div>          



    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
