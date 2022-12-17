<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Registros de producción
    .bg2
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema4/img1.png")
        .col-lg-7(data-aos="fade-right")
          p.mb-3 Un registro de producción es un procedimiento que contiene las instrucciones paso a paso para realizar un proceso de la producción, donde se describen las actividades relevantes dentro del mismo, estandarizándolo  y documentando  los debidos registros; dicha información, #[b.bwn el procde ser posible, debe estar al alcance, en todo momento, de todos los involucrados en el procedimiento,] de esa forma se minimiza el margen de error al presentarse una duda en cualquier paso del proceso. 
          p Administrativamente, el procedimiento operativo estándar permite organizar el personal necesario para realizar dicha actividad, insumos, equipos, tiempos, e incluso planes de contingencia frente a eventualidades. Su objetivo principal es mejorar la productividad, eficiencia y esperar tener siempre los mismos resultados deseados de un proceso, de ahí la importancia de la estandarización. 
          .row
            .col-12.p-4.bg3-1.mb-2
              p <b>POE: procedimiento operativo estándar <em>(SOP_standard operating procedure)</em></b>
              p <b>OP: procedimiento operativo <em>(OP_operating procedure)</em> </b>
              figure
                img.img-a1(src='@/assets/curso/tema4/img2.png', alt='Texto que describa la imagen')
    .bg5-1
      .row.justify-content-center.align-items-center.mb-5 
        .col-lg-7.order-lg-2.order-1(data-aos="fade-right")
          p.mb-3 #[b.bwn2 El POE es una herramienta en el control de la calidad:] al estandarizar los procesos se pueden prever los resultados y generar tácticas administrativas acordes; al documentar dichos procesos, no se presenta fuga de conocimiento en caso de que uno o varios empleados decidan retirarse.
          p Para establecer el POE, se debe: 
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span 1
              | Identificar y definir el conjunto de actividades que componen haciendo un listado.
            li 
              .lista-ol--cuadro__vineta
                span 2
              | Identificar las personas necesarias o que están involucradas y el conocimiento que tengan. 
            li 
              .lista-ol--cuadro__vineta
                span 3
              | Definir los objetivos.
            li 
              .lista-ol--cuadro__vineta
                span 4
              | Escoger un formato.
            li 
              .lista-ol--cuadro__vineta
                span 5
              | Proceder a diseñar el POE.
        .col-lg-5.col-10.mb-lg-3.mb-4order-lg-1.order-2(data-aos="fade-left")
          img(src="@/assets/curso/tema4/img3.png") 
    .row.justify-content-center.align-items-center          
      .col-lg-12.imgs-flotantes3-1(data-aos="fade-left") 
        img.img-flotante3-1(data-aos="zoom-in")(src='@/assets/curso/tema1/img12.png', alt='Imagen decorativa') 
    p.mb-5 Básicamente, existen tres tipos de POE y su uso depende de las necesidades del que lo adopte, los cuales son:
    .row.justify-content-center.mb-5
      .col-10.col-lg.m-2.m-lg-2
        img.img-a11.d-none.d-lg-block(src='@/assets/curso/tema4/img5.svg')
        .row
          .col-12.px-5.pt-5.pb-5.pb-lg-0.color_02-1
            h4 #[b.bwn3 El paso a paso]
            p.mb-0.text-white Como su nombre lo indica, es un listado con las actividades por realizar descritas en orden y de forma detallada. Es más común para procesos sencillos. 
      .col-10.col-lg.m-2.m-lg-2
        img.img-a11.d-none.d-lg-block(src='@/assets/curso/tema4/img6.svg')
        .row.h-100
          .col-12.px-5.pt-5.pb-5.pb-lg-0.color_02-1
            h4 #[b.bwn3 Pasos jerárquicos]
            p.mb-0.text-white Es ideal cuando se trata de procesos complejos, con varios pasos, en él se describe la política o alcance como si fuera el porqué del proceso, los qué y quién de dicho proceso, estableciendo las funciones. 
      .col-10.col-lg.m-2.m-lg-2
        img.img-a11.d-none.d-lg-block(src='@/assets/curso/tema4/img7.svg')
        .row.mb-5
          .col-12.px-5.pt-5.pb-5.pb-lg-0.color_02-1
            h4 #[b.bwn3 Diagramas de flujo]
            p.mb-0.text-white Se presenta la información resumida del proceso mediante un gráfico muy visual que, por medio de flechas, indica el paso a paso, recalca las actividades más relevantes, e incluso grafica un reproceso en caso de presentarse una contingencia.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p.mb-3 En el caso de la chocolatería, el procedimiento de elaboración de bombones comenzaría desde la selección del tipo de cobertura que se va a realizar (no se tendría en cuenta lo anterior a la recepción del cacao), acá se define si se elaborará a nivel artesanal o industrial, si serán barras de chocolate o bombones, pues de esta decisión se define si pasa a la etapa de relleno o sellado y la cantidad de cobertura necesaria para el molde y el tipo de envasado requerido. El siguiente gráfico muestra cómo sería el procedimiento:
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema4/img8.png")

    .row.justify-content-center.align-items-center.mb-0         
      .col-lg-12.d-none.d-lg-block.bgw.p-5       
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-left")
          h5 Figura 1. 
          span POE procedimiento elaboración bombón relleno
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/tema4/img9.svg', alt='') 
      .col-lg-10.d-block.d-lg-none.bgw.p-5 

    .row.justify-content-center.align-items-center          
      .col-lg-12.imgs-flotantes6(data-aos="fade-left") 
        img.img-flotante6(data-aos="zoom-in")(src='@/assets/curso/tema1/img29.png', alt='Imagen decorativa')    
    .bg_01.p-4.mb-5
      p.mb-5(data-aos="fade-right") Existen varios tipos de Una vez establecidos y estandarizados  todos los procedimientos, es más sencillo organizar tanto la producción como los registros, de la siguiente manera:

      .row.justify-content-center.align-items-center(data-aos="fade-left")
        .col-lg-12.col-md-8
          SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
            .tarjeta.bg_02-1.p-4
              figure.mb-4
                img.img-t.m-auto(src='@/assets/curso/tema4/img11.svg')
              h4 Inventario de materia prima
              p Lleva el registro de todos los insumos y bienes necesarios para llegar al producto final objeto de la actividad. 
            .tarjeta.bg_02-1.p-4
              figure.mb-4
                img.img-t.m-auto(src='@/assets/curso/tema4/img12.svg')
              h4 Inventario de producto en proceso
              p Lleva el control de los activos que se encuentran en la línea de producción; es importante ya que los costos de estos activos van aumentando a medida que factores como personal, maquinaria y preparación ingresan en su línea. 
            .tarjeta.bg_02-1.p-4
              figure.mb-4
                img.img-t.m-auto(src='@/assets/curso/tema4/img13.svg')
              h4 Inventario de mercancías
              p En este, se lleva el control de todos los activos que la empresa tiene en su poder y que intervienen en el proceso productivo, ya sea para ser transformados o no, pero sí para ser vendidos.  En este caso, se pueden establecer, por ejemplo, los empaques, embalajes, etc. 
            .tarjeta.bg_02-1.p-4
              figure.mb-4
                img.img-t.m-auto(src='@/assets/curso/tema4/img14.svg')
              h4 Registro de producción
              p Mediante este registro, se puede llevar la documentación de las fechas de elaboración o producción, cantidad de materias primas usadas, las cantidades de producto que salen de ese proceso y con qué observaciones, así como controlar aspectos claves, tener trazabilidad y responsabilidades asignadas claramente.  
            .tarjeta.bg_02-1.p-4
              figure.mb-4
                img.img-t.m-auto(src='@/assets/curso/tema4/img15.svg')
              h4 Formato producto terminado
              p Permite conocer la cantidad de productos en almacenamiento ya listos para comercializar, con el fin de facilitar los procesos de venta, distribución e incluso capacidad de almacenamiento de la misma empresa. 
            .tarjeta.bg_02-1.p-4
              figure.mb-4
                img.img-t.m-auto(src='@/assets/curso/tema4/img16.svg')
              h4 Formato devoluciones de producto terminado
              p Se puede aplicar tanto para el proceso posterior a la comercialización para controlar las causas del porqué de la devolución como para aplicarlo de forma interna como proceso de calidad antes de llevar el producto al almacenamiento. 
    .row.justify-content-center.align-items-center          
      .col-lg-12.imgs-flotantes10(data-aos="fade-left") 
        img.img-flotante10(data-aos="zoom-in")(src='@/assets/curso/tema4/img10.svg', alt='Imagen decorativa')   
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema4/img17.png") 
      .col-lg-7(data-aos="fade-right")
        p.mb-3 Es importante recalcar que estos formatos deben realizarse según las necesidades específicas de cada actividad y cada empresa, pues allí queda la información que genera la trazabilidad de cambios y de los datos registrados; se pueden establecer tantos formatos como sea necesario  (por ejemplo, de personal, de seguridad, de limpieza, y de mantenimiento de equipos)  siempre y cuando siga siendo una herramienta que aporte control y agilidad en los procesos, sin caer en el error de generar tantos que se ocasione desgano del personal encargado de los registros, pudiendo consignar mal u omitiendo la información y convirtiéndolos en material desaprovechado y obsoleto. 
    Separador
    #t_4_1
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Formatos  
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12
        .row.justify-content-center.align-items-center.bg12.p-3.mb-4         
          .col-auto.up
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/tema1/img13.png', alt='')
          .col.up  
            p(data-aos="fade-down").mb-0 Los formatos se pueden realizar en cualquier <em>software</em> de hojas de cálculo, <em>software</em> especializado, e incluso registros manuales, pues lo más importante es que estos estén diseñados para llevar el control de la producción de cualquier empresa, con fines organizacionales, de presupuesto, controlar inventarios y hacer balances económicos, entre otros.  
    .row.justify-content-center.align-items-center.my-5           
      .col-lg-10(data-aos="flip-down")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/img13.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Descargue el siguiente pdf, que contiene ejemplos de formatos para el registro de producción, producto terminado, inventario de producto terminado y de devolución de producto terminado.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://cdn-icons-png.flaticon.com/512/5136/5136976.png" target="_blank")
                    span Enlace <i>web</i>
                    i.fas.fa-link  
    Separador
    #t_4_2
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Diligenciamiento
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .row.justify-content-center.align-items-center
          p La mejor manera de diligenciar los registros es estandarizar el tipo de información a analizar posteriormente, sin perder tiempo; por ejemplo, en fecha, puede ser bajo la forma dd/mm/aaaa, en este caso, la fecha se pondría 11/10/2022;  en hora, puede ser 07:35:17 a.m. (00:00:00)  o formato de 24 horas.  Se debe dejar por escrito para que todos los que deban llenarlo lo hagan de la misma manera
        .col-lg-12.p-4.bg3.mb-2(data-aos="fade-right")
          p.mb-3 Una manera de agilizar y facilitar el registro de información por tiempo y espacio es el uso de las siglas; defina cuáles siglas usarán y que estas sean consistentes en todos los formatos, se debe dejar un recuadro con esa información para que no se presenten dudas al momento en que un empleador lo deba diligenciar. Por ejemplo:  
          p #[b.bwn1 En el formato, debe existir una casilla para el tipo de cobertura:] chocolate negro, chocolate blanco, chocolate con leche. 
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema4/img4.png")
    .row.justify-content-center.align-items-center.mb-5          
      .col-lg-12.imgs-flotantes6(data-aos="fade-left") 
        img.img-flotante6(data-aos="zoom-in")(src='@/assets/curso/tema1/img29.png', alt='Imagen decorativa')  
    .bg7
      .row.justify-content-center.align-items-center          
        .col-lg-12.imgs-flotantes5(data-aos="fade-left") 
          img.img-flotante5(data-aos="zoom-in")(src='@/assets/curso/tema1/img23.png', alt='Imagen decorativa') 
      .row.justify-content-center.align-items-center.mb-5 
        p Esta información es muy larga y se podría abreviar de la siguiente manera:
        .col-lg-5.col-10.mb-lg-3.mb-4order-lg-1.order-2(data-aos="fade-left")
          img(src="@/assets/curso/tema4/img18.png") 
        .col-lg-7.order-lg-2.order-1(data-aos="fade-right")
          p.mb-3 Recuerde que estos son ejemplos y que todos los formatos de toma de información y abreviaturas las decide el área encargada en la empresa, según las necesidades de cada proceso.  
          p La chocolatería, además de ser un arte, también corresponde a técnicas precisas, de ahí la importancia de tener claros los procesos a realizar, de estandarizarlos y registrarlos adecuadamente. Llevar a cabo estos pasos permitirá eliminar tantas variables como sea posible, para evitar que se generen errores o defectos en la elaboración, más cuando se habla de un producto alimenticio, delicado y con costos elevados, como el chocolate. 
          p Todos los procesos descritos anteriormente se pueden realizar de forma manual, semi industrial e industrial, eso depende de la capacidad económica, de comercialización y del nivel de producción al que se quiera llegar. Sin embargo, es muy importante capacitarse de manera permanente en todo lo relacionado con la industria de la chocolatería, pues cada día se presentan cambios e innovaciones a nivel de tecnología, maquinaria y procesos.
      .row.justify-content-center.align-items-center          
        .col-lg-12.imgs-flotantes4-1(data-aos="fade-left") 
          img.img-flotante4-1(data-aos="zoom-in")(src='@/assets/curso/tema1/img11.png', alt='Imagen decorativa')  
    
    
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
