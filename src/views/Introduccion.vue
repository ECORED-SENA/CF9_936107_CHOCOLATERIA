<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .bg2 
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
          p.mb-0 En este componente, se abordarán los conceptos y fundamentos de las características de calidad del chocolate de acuerdo con especificaciones técnicas, además de la identificación de defectos encontrados en los productos elaborados, buscando como resultado final su acondicionamiento de acuerdo con parámetros técnicos y normativa. Para ampliar la información, se le invita a observar el siguiente video que presenta las temáticas que se abordarán en este componente formativo:
        
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema1/img1.png")
        
      figure(data-aos="zoom-in")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/551-3cLyfxw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.justify-content-center.align-items-center          
      .col-lg-12.imgs-flotantes3
        img.img-flotante3(src='@/assets/curso/tema1/img2.png', alt='Imagen decorativa')    
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
