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
          p Bienvenido a esta experiencia de conocimiento, este componente formativo desarrollará algunos temas de gran importancia para los procesos relacionados con en el desarrollo #[i web] y también, se abarcarán los distintos métodos de petición y las respuestas #[i HTTP], de este modo se hará referencia de algunas de las tecnologías más usadas para probar y consumir los servicios #[i web].
    .row.justify-content-center.mt-5          
      .col-md-8
          p.mb-5 Este componente formativo busca fortalecer el rol de los desarrolladores #[i web fullstack], especialmente, en lo que se refiere a #[i BackEnd] (acciones necesarias para que una #[i web] funcione correctamente), por eso, como aprendiz, será mucho mejor si se encuentra familiarizado con lo que aquí se expone para posteriormente, adquirir las herramientas de trabajo que permitan realizar dichas acciones adecuadamente. 
          p.mb-5 Recuerde que aquí se proporcionan los fundamentos necesarios para la comprensión de los temas, se podrá leer, ver, aprender y hacer las preguntas que desee a un tutor que siempre estará acompañando el recorrido. Para finalizar, se propone una práctica guiada y una actividad de preguntas y respuestas que permitirán afianzar toda la temática vista. Antes de iniciar, se sugiere revisar el siguiente video para identificar el contexto de aprendizaje.
      .col-md-4
        figure
          img(src="@/assets/curso/temas/introduccion.png", alt="alt")
    <div data-aos=“zoom-out”>
      figure.mt-5
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
