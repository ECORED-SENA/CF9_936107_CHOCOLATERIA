<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Tipos de residuos en chocolatería y  su disposición
    .bg2 
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12(data-aos="fade-right")
          p.mb-3 Los residuos son aquellos que hacen parte de la fabricación de productos finales, pueden ser de origen alimentario y su disposición depende de la cantidad de productos que se fabriquen y el costo que se debe asumir por este proceso, como mano de obra, almacenamiento normal, almacenamiento con condiciones de temperatura como cuartos fríos, procesos con calor en los que se invierte en energía,  y equipos de bombeo si la cantidad lo amerita, etc. En el caso de la chocolatería, los residuos corresponden a restos de chocolate, rellenos o materias primas.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.p-4.bg3.mb-2(data-aos="fade-right")
        p.mb-3 Generalmente, las grandes empresas consideran que el costo para #[b.bwn1 el proceso de reutilización es muy alto y optan por vender estos residuos como recortes o productos de línea económica,] incluso bajo otra marca, todo depende del valor que estos manejos representen para la empresa sin afectar la rentabilidad.   Lo usual es que los procesos de planificación de producción sean muy cuidadosos para no llegar a producir grandes pérdidas.
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema2/img12.png")
    .row.justify-content-center.align-items-center          
      .col-lg-12.imgs-flotantes6(data-aos="fade-left") 
        img.img-flotante6(data-aos="zoom-in")(src='@/assets/curso/tema1/img29.png', alt='Imagen decorativa') 
    p.mb-5 Sea cual sea el caso, todo  residuo alimentario debe disponerse adecuadamente.  En Colombia, se creó la Ley 1990 de 2019, por medio de la cual se crean políticas para prevenir la pérdida y desperdicios de alimentos,  basándose en la reducción de la reutilización y el uso para suministros de alimentación animal. 

    .row.justify-content-center.align-items-center.my-5           
      .col-lg-10(data-aos="flip-down")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/img13.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Ingrese al siguiente <em>link</em> para ampliar información acerca de la <b>Ley 1990 de 2019.</b>
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.andi.com.co/Uploads/Ley-2019-N0001990_20190802.pdf" target="_blank")
                    span Enlace <i>web</i>
                    i.fas.fa-link  
    p.mb-5 Por normatividad sanitaria, se recomienda la sanitización de los residuos para volverlos a incorporar al proceso productivo, aplicando las buenas prácticas de manufactura (BPM); la sanitización consiste en la esterilización por calor, evitando la producción de contaminantes físicos a través de un proceso de filtrado que garantiza que ningún cuerpo extraño siga en el alimento. En el caso de la chocolatería, en su fase de elaboración de productos finales, se obtienen los siguientes residuos: 
    .row.justify-content-center.align-items-center 
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img6.png")      
      .col-lg-7(data-aos="fade-right")
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta bg6-1")
          .row.justify-content-center.align-items-start(titulo="Cobertura de chocolate, de los procesos de moldeado") 
            .col-lg-12.my-3.mb-4.mb-md-0
              p Al realizar mecánicamente el proceso de elaboración, los residuos son mínimos, ya que las máquinas se encuentran calibradas para dosificar exactamente la cantidad necesaria.  En cuanto a los procesos manuales, se usan espátulas con el fin de retirar el exceso de chocolate que es devuelto al recipiente de la cobertura  para su uso inmediato.
          .row.justify-content-center.align-items-start(titulo="Jarabes")   
            .col-lg-12.my-3.mb-4.mb-md-0
              p Los productos que surgen de la pasta de azúcar, chocolates no revestidos y jaleas, si se convierten en punto muerto jarabe, se pueden reutilizar previo proceso de filtrado para eliminar frutas u otros ingredientes, y revirtiendo puede ser reutilizado como materia prima básica en cualquier proceso. 
          .row.justify-content-center.align-items-start(titulo="Rellenos grasos")
            .col-lg-12.my-3.mb-4.mb-md-0
              p Este tipo de insumo genera mayor costo para reutilizar, ya que el manejo de las grasas lo hace un proceso más largo, donde se debe extraer cuidadosamente por medio de calor y eliminar por completo; su disposición final se debe realizar en contenedores adecuados y, en lo posible, buscar mercados de reutilización con alimentación animal o jabonería.
      
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12
        .row.justify-content-center.align-items-center.bg12.p-3.mb-4         
          .col-auto.up
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/tema1/img13.png', alt='')
          .col.up  
            p(data-aos="fade-down").mb-0 Las grandes empresas evitan entrar en procesos de reutilización y buscan el control exacto de productos a preparar para minimizar los residuos, ya que los costos de procesar dichos insumos  son considerablemente altos y los porcentajes de inclusión de los insumos utilizados generalmente no deben sobrepasar el 5 % de las nuevas formulaciones. 
    .row.justify-content-center.align-items-center          
      .col-lg-12.imgs-flotantes3(data-aos="fade-left") 
        img.img-flotante3(data-aos="zoom-in")(src='@/assets/curso/tema1/img12.png', alt='Imagen decorativa') 
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
