<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Reología 
    .bg2 
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7(data-aos="fade-right")
          p.mb-3 Es una rama de la física en la cual se analiza el comportamiento de los fluidos, aquellas sustancias que no tienen forma definida por sí solas y que no pueden resistir ningún tipo de fuerza cortante, lo que las lleva a una deformación constante. Un fluido no es exclusivamente un líquido, también existen algunos en otros estados de la materia, como gases, plasma y sólidos plásticos. Fueron estudiados inicialmente por el físico estadounidense Eugene Cook, a mediados del siglo XX.  
          .row
            .col-12.p-4.bg3.mb-2
              .row.align-items-center
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/tema1/img4.png', style="width: 120px").m-auto 
                .col
                  p.mb-0 Según la Real Academia de la Lengua Española (RAE),  la palabra reología, en ingles <em>rheology</em>, proviene del griego <em>Réos</em>, arroyo o corriente de agua, y  <em>logy</em>,  de logía,  que significa estudio; de tal forma que se puede definir como  el estudio de los fluidos con el fin de medir, en el caso de los alimentos, la deformación y el flujo de las sustancias.  Para realizar estas mediciones, se utiliza un reómetro, el cual mide la viscosidad a diferentes niveles de esfuerzo. 
       
        .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema1/img3.png")
    p.mb-5 La reología es utilizada en el campo de la ingeniería de alimentos, ya que muchos de ellos están compuestos por mezclas de partículas sólidas y líquidas, las cuales son responsables de la textura, cremosidad, jugosidad, dureza, esponjosidad, fragilidad, suavidad, y existe un gran interés en  el comportamiento de algunos sólidos en suspensión, por ejemplo, en el caso de dulces o chocolates rellenos con trozos de frutas. Esta ciencia clasifica los fluidos según el cumplimiento de algunas leyes físicas de comportamiento, y en la industria de la chocolatería, considera los fluidos newtoniano y no newtoniano, y dentro de estos, está la categoría de fluidos viscoelásticos; las particularidades de estos son las siguientes:
    .row.justify-content-center.align-items-center          
      .col-lg-12.imgs-flotantes1
        img.img-flotante1(src='@/assets/curso/tema1/img2.png', alt='Imagen decorativa')  
    .row.justify-content-center.align-items-center      
      .col-lg-7(data-aos="fade-right")
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta bg6-1")
          .row.justify-content-center.align-items-start(titulo="Fluido newtoniano") 
            .col-lg-12.my-3.mb-4.mb-md-0
              p Son sustancias  que cumplen la Ley de Newton de la viscosidad (relación lineal de esfuerzo constante y velocidad de formación); estas no son homogéneas y presentan deformación ante la aplicación de cualquier fuerza, tienen poca cohesión intermolecular, lo que las lleva a no tener forma como tal y adoptar la forma del recipiente que las contiene. A medida que aumenta la temperatura, disminuye la viscosidad. Por ejemplo, el aire, el agua, los aceites minerales.
          .row.justify-content-center.align-items-start(titulo="Fluido no newtoniano")   
            .col-lg-12.my-3.mb-4.mb-md-0
              p Son sustancias de consistencia homogénea y la viscosidad de los fluidos varía según la temperatura y la tensión cortante que se les aplique,  es decir, el fluido se endurece cuando se le aplica la más mínima presión o hay cambio de temperatura, como las mantecas, la miel, la mantequilla, entre otros. Con relación al chocolate, estos fluidos no newtonianos se evidencian en los procesos de atemperado.
          .row.justify-content-center.align-items-start(titulo="Fluidos viscoelásticos")
            .col-lg-12.my-3.mb-4.mb-md-0
              p Estos hacen parte de una clasificación específica de los fluidos no newtonianos, los cuales cumplen con dos leyes de la física: la de Hooke y la Ley de Newton de la viscosidad. La ley de Hooke, también llamada Ley de elasticidad de Hooke, es directamente proporcional a la fuerza que se le aplique. En este caso, el chocolate cumple estas  dos leyes y por eso se le ubica dentro de esta categoría.  Al realizar una buena emulsión, es decir, mezclar bien las partículas sólidas con las moléculas lipídicas, le dan esas propiedades elásticas y viscosas.
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img6.png")  
    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1 Características  
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4order-lg-1.order-2(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img7.png")  
      .col-lg-7.order-lg-2.order-1(data-aos="fade-right")
        p.mb-3 Teniendo en cuenta lo anterior, se puede decir que la aplicación de la reología es importante sobre todo en el ámbito industrial de la producción de chocolate, ya que, al ser una emulsión (mezcla de sólidos y grasa, manteca de cacao, o grasas lácteas), su apariencia final está determinada por las características reológicas, el tamaño de las partículas sólidas, la viscosidad y la fluidez de esta, proporcionada por la utilización de equipos automáticos de bombeo y dosificación. En cuanto a las propiedades reológicas del chocolate, estas se van formando en todas las etapas del procesamiento del cacao; sin embargo, la etapa que más aporta es el conchado, donde se busca una distribución y tamaño en sus partículas de manera adecuada. 
    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-1.col-2.img01
        img.w-50(src="@/assets/curso/tema1/img8.png")
      .col
        .h4.ms-5.mb-0 <span style="color:#7D5F54">Distribución y tamaño de partículas en el fluido:</span>   
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p Los tamaños de partículas inferiores a los 30 mm, mediante refinadores de 2 y 5 rodillos, pueden generar una textura suave,  la finalidad es que el tamaño de la partícula no sea tan grande y que no se sienta arenosa; durante el refinamiento, o conchado, se genera, por medio del movimiento, la distribución de dichas partículas en una fase continua y donde las partículas sólidas son recubiertas con lípidos, iniciando el proceso de viscosidad, la cual se mejora agregando lectina o manteca de cacao al final del conchado líquido y previo al proceso de templado o atemperado del chocolate. Tener presente que en este proceso se busca la cristalización del chocolate mediante la reproducción de los cristales beta. 
        p Una distribución y tamaño adecuado de las partículas (<30) influye no solo en aspectos sensoriales, sino en la regularización de la consistencia de la mezcla para mejorar el bombeo, el transporte y la atomización,  importante en procesos tecnológicos, mejorando el rendimiento de producción.  
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img9.png")
    .row.justify-content-center.align-items-center.mb-5.py-5           
      .col-lg-12
        .tarjeta.position-relative.rounded-0.bg4.p-4(data-aos="flip-down")
          .row.justify-content-center.align-items-center
            .col-lg-3
              .imagen-absolute1
                img(data-aos="zoom-in")(src='@/assets/curso/tema1/img10.png', alt='')
            .col-lg-9.my-3
              p(data-aos="fade-down") La importancia de la reología está presente en las etapas principales del procesamiento del cacao, como  #[b.bwn el conchado, atemperado, moldeado, en las fases de bombeo] (en los procesos industrializados), e igualmente en el producto final; de esta forma, se considera el conchado, atemperado, moldeado, en las fases de bombeo que, para chocolatería fina, el tamaño de partícula final no debe superar los 17 mm.  
    .row.justify-content-center.align-items-center          
      .col-lg-12.imgs-flotantes2(data-aos="fade-left") 
        img.img-flotante2(data-aos="zoom-in")(src='@/assets/curso/tema1/img11.png', alt='Imagen decorativa') 
    .row.justify-content-center.align-items-center          
      .col-lg-12.imgs-flotantes3(data-aos="fade-left") 
        img.img-flotante3(data-aos="zoom-in")(src='@/assets/curso/tema1/img12.png', alt='Imagen decorativa') 
    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.2 Comportamiento de las materias primas funcionales 
    .bg5     
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-12
          .row.justify-content-center.align-items-center.bg12.p-3.mb-4         
            .col-auto.up
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/tema1/img13.png', alt='')
            .col.up  
              p(data-aos="fade-down").mb-0 El <em>Codex alimentarius</em>  enmienda 2016 menciona que los principales tipos de chocolate son el negro o amargo, el blanco y el chocolate con leche; su diferencia radica en el porcentaje de cacao, porcentaje de material graso (manteca de cacao o grasas lácteas), azúcar y la presencia o no de sólidos de leche. Observe cómo actúa la reología en el comportamiento de estas materias primas y de otros componentes como los edulcorantes, la leche y la lecitina de soja: 
      .row.justify-content-center.mb-3.mb-lg-5
        .col-lg-12(data-aos="zoom-in")
          .bg6.p-4
            SlyderB(:datos="datosSlyder")      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4order-lg-1.order-2(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img20.png")  
      .col-lg-7.order-lg-2.order-1(data-aos="fade-right")
        p.mb-3 Como se ha visto en este componente formativo, la emulsión es un proceso determinante en la elaboración del chocolate y, para lograrla, se requiere de emulgentes o emulsionantes, los cuales son compuestos químicos que, al generar mezclas, permiten la formación de una emulsión estable a lo largo del tiempo. El papel del emulsionante es crear moléculas estables que se forman en la interfaz agua-aceite. En la industria alimentaria, existe diversidad de emulgentes y gelificantes, que también, al igual que las materias primas, tienen un comportamiento  reológico actuando sobre la viscosidad del chocolate.
    .row.justify-content-center.align-items-center          
      .col-lg-12.imgs-flotantes3(data-aos="fade-left") 
        img.img-flotante3(data-aos="zoom-in")(src='@/assets/curso/tema1/img12.png', alt='Imagen decorativa') 
    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-1.col-2.img01
        img.w-50(src="@/assets/curso/tema1/img8.png")
      .col
        .h4.ms-5.mb-0 <span style="color:#7D5F54">Tensioactivadores / emulgentes</span>  
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p.mb-3 Químicamente, se trata de moléculas con dos extremos diferentes, uno hidrofílico (parte polar de la molécula) y el otro hidrofóbico o lipofílico (parte no polar de la molécula), estos permiten reducir la tensión entre la fase acuosa o dispersa y la fase continua, la cual es la fase grasa (manteca de cacao). El comportamiento normal en cualquier emulsión es que una partícula de agua y la otra de aceite mantengan la tensión y estabilidad de la mezcla; así que se puede decir que su uso es necesario para mantener estables los fluidos que contienen ingredientes incompatibles entre sí con relación al agua y el aceite.  
        .row
          .col-12.p-4.bg3.mb-2
            .col
              p.mb-0 <b>Los emulsionantes se miden mediante el valor Balance Lipofílico Hidrofílico (HLB). En un rango de 0 a 20, valores de cero quieren decir que es completamente lipofílico, y 20, lo opuesto, es decir hidrofílico. </b> 
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img21.svg")
    
    .bg7
      .row.justify-content-center.align-items-center          
        .col-lg-12.imgs-flotantes5(data-aos="fade-left") 
          img.img-flotante5(data-aos="zoom-in")(src='@/assets/curso/tema1/img23.png', alt='Imagen decorativa') 
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-6(data-aos="fade-right")
          p.mb-3 En algunos de los emulsificantes autorizados para la industria alimentaria, su uso depende de los valores HLB y del tipo de ingredientes y emulsión a trabajar. En el caso del chocolate, la más usada es la lecitina y no debe superar el 0.5 %, o el 1 % si es lecitina sintética, del total de la formulación, para evitar sabores desagradables en el producto.   Otros emolientes comerciales son:  PGPR (polirricinoleato de poliglicerol ) y YN (fosfolípidos sintéticos). 
          p La siguiente tabla contiene los emulsificantes más utilizados en la industria de la chocolatería, con su respectivos valores de HLB:
          .row.justify-content-center.mb-5
            .col-lg-10
              img.img-t.mx-auto(src="@/assets/curso/tema1/img22.png")
          p En general, todos se comportan reológicamente actuando sobre la viscosidad plástica, los límites de fluidez, generando mayor estabilidad en la emulsión, evitando el afloramiento de grasa, mejorando el punto de fusión en la boca, es decir, que sea estable a temperaturas ambientes, pero a temperatura oral, 37 ºC, se empiece a derretir para proporcionar una experiencia más placentera al consumir el producto.     
        .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-left")
          .titulo-sexto.color-acento-contenido(data-aos="zoom-in-left")
            h5 Tabla 1.
            span Emulsionantes de la industria alimentaria y sus valores de HLB
          .tabla-b.color-secundario(data-aos="zoom-in")
          table
            thead
              tr
                th(style="background-color: #FCC02D; width: 70%;").text-center Emulsificantes
                th(style="background-color: #FCC02D; width: 30%;").text-center Valores de HLB
            tbody
              tr(style="background-color: #FFF;")
                th Lecitina
                td.text-center 3-4
              tr(style="background-color: #FFF6DF;")
                th Lecitina modificada
                td.text-center 10-12
              tr(style="background-color: #FFF;")
                th Mono y diglicéridos
                td.text-center 3-4
              tr(style="background-color: #FFF6DF;")
                th Monoglicérido etoxilado 
                td.text-center 10-12
              tr(style="background-color: #FFF;")
                th Sorbitán monoestearato
                td.text-center 3-6
              tr(style="background-color: #FFF6DF;")
                th Polisorbato 60
                td.text-center 14.4
              tr(style="background-color: #FFF;")
                th Polisorbato 65
                td.text-center 10-12
              tr(style="background-color: #FFF6DF;")
                th Polisorbato 80
                td.text-center 15.4
              tr(style="background-color: #FFF;")
                th Monoglicéridos succinilados
                td.text-center 5-7
              tr(style="background-color: #FFF6DF;")
                th Sucroésteres
                td.text-center 3-16
              tr(style="background-color: #FFF;")
                th Lactilmonoclicéridos
                td.text-center 3-4
              tr(style="background-color: #FFF6DF;")
                th Ésteres de poliglicerol
                td.text-center 5-13
              tr(style="background-color:#FFF;")
                th Ésteres de propilenglicol
                td.text-center 2-3
              tr(style="background-color: #FFF6DF;")
                th Estearoil lactilato sódico
                td.text-center 10-12
              tr(style="background-color:#FFF;")
                th Estearoil lactilato cálcico
                td.text-center 5-6
              tr(style="background-color: #FFF6DF;")
                th Data ésteres
                td.text-center 5-7
              tr(style="background-color: #FFF;")
                th Sales de sodio/potasio de ácidos grasos
                td.text-center 16-18
    .row.justify-content-center.align-items-center          
      .col-lg-12.imgs-flotantes4(data-aos="fade-left") 
        img.img-flotante4(data-aos="zoom-in")(src='@/assets/curso/tema1/img11.png', alt='Imagen decorativa')    
    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-1.col-2.img01
        img.w-50(src="@/assets/curso/tema1/img8.png")
      .col
        .h4.ms-5.mb-0 <span style="color:#7D5F54">Gelificantes</span>  
    p.mb-5 Su principal uso es para los rellenos de los bombones y confites, con el fin de buscar la textura de gel, como su nombre lo indica.  Los más usados son: 
    .row.justify-content-center.align-items-center(data-aos="fade-left")
        .col-lg-12.col-md-8
          SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
            .tarjeta.bg_02.p-4(style="height: 460px")
              figure.mb-4
                img.img-t.m-auto(src='@/assets/curso/tema1/img24.png')
              h4 Agar-agar
              p El agar agar es un gelificante natural que procede de algas rojas, tiene un alto poder gelificante a temperatura de 60 ºC, su uso es especialmente para hacer postres en forma de gelatina. Generalmente, se usa acompañado de pectina o almidones.  
            .tarjeta.bg_03.p-4(style="height: 460px")
              figure.mb-4
                img.img-t.m-auto(src='@/assets/curso/tema1/img25.png')
              h4 Gelatina
              p Se obtiene del colágeno de huesos y pieles de animales; la gelatina trabaja con temperaturas bajas, para disolverla son suficientes 27 ºC y gelifica sobre los 18 ºC o menos, y nunca se puede llevar a ebullición porque se degradaría; su apariencia final  es elástica y termorreversible.
            .tarjeta.bg_02.p-4(style="height: 460px")
              figure.mb-4
                img.img-t.m-auto(src='@/assets/curso/tema1/img26.png')
              h4 Pectina
              p Se obtiene de cítricos y manzanas, se clasifica en pectinas de alto metoxilo, las cuales requieren de la presencia de azúcar y ácidos para gelificar, y pectinas de bajo metoxilo, las cuales no requieren ni ácidos ni azúcar, pero sí sales metálicas como el calcio. 
            .tarjeta.bg_03.p-4(style="height: 460px")
              figure.mb-4
                img.img-t.m-auto(src='@/assets/curso/tema1/img27.png')
              h4 Carragenato
              p Gel de origen vegetal proveniente de unas algas rojas, posee cualidades emulsionantes, estabilizantes y espesantes, además del gelificante.  Existen dos tipos de carragenato usados en la industria alimentaria y cada uno de ellos se diferencia por la textura de gelificación: carragenato iota y carragenato kappa.
            .tarjeta.bg_02.p-4(style="height: 460px")
              figure.mb-4
                img.img-t.m-auto(src='@/assets/curso/tema1/img28.png')
              h4 Almidones modificados
              p Es un aditivo alimentario proveniente del maíz, trigo o arroz; es muy utilizado, sobre todo, como espesante, aglutinante, emulgente y estabilizador; se destaca por su apariencia, consistencia, textura y comportamiento frente a los cambios de temperatura. 
    .row.justify-content-center.align-items-center          
      .col-lg-12.imgs-flotantes6(data-aos="fade-left") 
        img.img-flotante6(data-aos="zoom-in")(src='@/assets/curso/tema1/img29.png', alt='Imagen decorativa') 

        Separador 
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.3 Materiales de empaque, características, tipos y funciones 
       
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12
        .row.justify-content-center.align-items-center.bg12.p-3.mb-4         
          .col-auto.up
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/tema1/img13.png', alt='')
          .col.up  
            p(data-aos="fade-down").mb-0 Según la normatividad colombiana,  Resolución 1511 de 2011,  en el Artículo  14, se  establece  que los  envases para alimentos deben cumplir con lo dispuesto por el Ministerio de Protección Social, además de las siguientes normas:
    .bg8 
      .row.justify-content-center.align-items-center
        .col-lg-12
          .row.justify-content-center.mb-5.m_top
            .col-lg-4.col-md-6.mb-4.mb-lg-0(data-aos="fade-right")
              .tarjeta-avatar
                img.img44.mx-auto(src='@/assets/curso/tema1/img31.png' alt='AvatarTop')
                .tarjeta.color_01
                  .p-4.pt-5
                    p Los materiales con los que se elaboran los envases deben ser inocuos y resistentes, para evitar alteraciones en las características del producto.
            .col-lg-4.col-md-6.mb-4.mb-lg-0(data-aos="fade-up")
              .tarjeta-avatar
                img.img-t.mx-auto.m_top1(src='@/assets/curso/tema1/img32.png' alt='AvatarTop')
                .tarjeta.color_02
                  .p-4.pt-5
                    p.text-white La resistencia debe ser considerada desde el empaque hasta el consumidor final. 
            .col-lg-4.col-md-6.mb-4.mb-lg-0(data-aos="fade-up")
              .tarjeta-avatar
                img.img-t.mx-auto(src='@/assets/curso/tema1/img33.png' alt='AvatarTop')
                .tarjeta.color_03
                  .p-4.pt-5
                    p Deben tener un cierre seguro que evite la entrada de contaminantes o que el producto tenga contacto con el exterior fácilmente antes del consumo. 
                    p El envase debe ser de primer uso y garantizar protección durante el transporte y almacenamiento.             
      .row.justify-content-center.align-items-center          
        .col-lg-12.imgs-flotantes7(data-aos="fade-left") 
          img.img-flotante7(src='@/assets/curso/tema1/img23.png', alt='Imagen decorativa') 
          .col-lg-12.imgs-flotantes8(data-aos="fade-left") 
            img.img-flotante8(src='@/assets/curso/tema1/img11.png', alt='Imagen decorativa')  
          .col-lg-12.imgs-flotantes9(data-aos="fade-left") 
            img.img-flotante9(src='@/assets/curso/tema1/img11.png', alt='Imagen decorativa') 
      .row.justify-content-center.align-items-center.mb-5
        
        .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
          p.mb-3 <b>La Resolución 005109 de 2005</b> del Ministerio de Protección Social establece que un alimento envasado es todo aquel que requiera un envoltorio, empaque o embalaje para ofrecerlo al consumidor final, y define <b>“envase” como el recipiente que contiene los alimentos para ser entregados como producto único</b>, el cual los cubre total o parcialmente, incluyendo la tapa, los embalajes y las envolturas. También establece que un envase puede contener varias unidades o tipos de alimentos preenvasados cuando se ofrece al consumidor. En el tema de empaques, se habla generalmente de cuatro tipos: 
        .col-lg-5.col-10.mb-lg-0.mb-4.order-lg-2.order-1(data-aos="fade-left")
          img(src="@/assets/curso/tema1/img47.png")  
      .row.justify-content-center.align-items-center
        .col-lg-10
          ImagenInfografica.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema1/img34.svg', alt='Texto que describa la imagen')(data-aos="fade-right")
            .tarjeta.color-cuarto.p-3(x="10.5%" y="88.6%" numero="+")
              p <b>Empaque  primario</b> 
              p.mb-0 Como su nombre lo indica, es aquel empaque que está en contacto directo con el alimento. Por ejemplo, la botella de vidrio de un vino. Su función es proporcionar un medio para entregar un  producto final al consumidor, garantizando su inocuidad, facilitando la manipulación y estandarizando la unidad de medida con el fin de facilitar la comercialización. 
            .tarjeta.color-cuarto.p-3(x="36.7%" y="10%" numero="+")
              p <b>Empaque secundario</b> 
              p.mb-3 No está en contacto directo con el alimento, sino con el empaque primario; su objetivo es protegerlo, facilitar la manipulación sin que se deteriore el primario y que el almacenamiento sea más organizado en los puntos de venta; igualmente, un empaque secundario puede ayudar mucho en la presentación final del producto, haciéndolo más atractivo visualmente.  Volviendo al ejemplo de la botella de vino, el empaque secundario podría ser una caja para dicha botella. 
            .tarjeta.color-cuarto.p-3(x="63.2%" y="88.7%" numero="+")
              p <b>Empaque terciario</b> 
              p.mb-0 Es aquel que contiene varios empaques secundarios, su función es facilitar la manipulación y el transporte de mercancías de gran volumen y, de ese modo, proteger los embalajes tanto secundario como primario. Retomando el ejemplo de la botella de vino que se encuentra empacada en una caja, el empaque terciario sería una caja de mayor tamaño que contiene varias cajas de botellas de vino. 
            .tarjeta.color-cuarto.p-3(x="89.4%" y="10.6%" numero="+")
              p <b>Unidad de carga</b> 
              p.mb-0 Hace referencia al embalaje que contiene varios empaques terciarios con el fin de transportar grandes cantidades de producto protegiendo su integridad e inocuidad; el objetivo de la agrupación es reducir el número de movimientos al mínimo que sea posible, porque el manejo de grandes cargas facilita el transporte y el almacenamiento, el cual dependerá de su tamaño y características. 
    .row.justify-content-center.align-items-center          
      .col-lg-12.imgs-flotantes3(data-aos="fade-left") 
        img.img-flotante3(data-aos="zoom-in")(src='@/assets/curso/tema1/img12.png', alt='Imagen decorativa') 
    .bg9
      .row.justify-content-center.align-items-center.mb-5 
        .col-lg-7.order-lg-2.order-1(data-aos="fade-right")
          p.mb-3 Adicional a los tipos de empaques, también estos deben cumplir con las siguientes características:
          ul.lista-ul--color.ms-4
            li
              <i class="fas fa-cookie" style="color:#8D756C"></i>
              p.mb-0 Contener adecuadamente el producto.
            li
              <i class="fas fa-cookie" style="color:#8D756C"></i>
              p.mb-0 Brindar protección y contribuir a la conservación, esto depende de qué tipo de protección requiera el producto. En el caso de una fruta como una manzana o un bombón, se requiere algo que la proteja de magulladuras; en el caso de los chocolates de mesa, por ejemplo, este factor no es tan relevante. 
            li
              <i class="fas fa-cookie" style="color:#8D756C"></i>
              p.mb-0 Ser una fuente de comunicación con el consumidor final.	
            li
              <i class="fas fa-cookie" style="color:#8D756C"></i>
              p.mb-0 Atraer la atención de los consumidores
            li
              <i class="fas fa-cookie" style="color:#8D756C"></i>
              p.mb-0 Permitir y facilitar el almacenamiento y distribución. 
        .col-lg-5.col-10.mb-lg-3.mb-4order-lg-1.order-2(data-aos="fade-left")
          img(src="@/assets/curso/tema1/img35.png") 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4order-lg-1.order-2(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img36.png")  
      .col-lg-7.order-lg-2.order-1(data-aos="fade-right")
        p.mb-3 Después de ver las generalidades de los tipos de empaques, se debe conocer la importancia del material en que son fabricados los envases primarios, ya que, al estar en contacto directo con los alimentos, se buscan materiales que no cambien las características organolépticas originales y que no transfieran sustancias, sabores ni olores desagradables o perjudiciales para la salud. Este campo investigativo ha ido creciendo en conocimiento, tecnología y normatividad apoyado por entes sanitarios a nivel mundial, como la Food and Drug Administration (FDA- Administración de Alimentos y Medicamentos de los Estados Unidos).
        p Dentro de los materiales principales con los que se fabrican los empaques, se encuentran el vidrio, papel, plástico,   cartón y aluminio.  Veamos algunas de sus características: 
    figure(data-aos="zoom-in").mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/zkZEEvcWH3w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.justify-content-center.align-items-center          
      .col-lg-12.imgs-flotantes6(data-aos="fade-left") 
        img.img-flotante6(data-aos="zoom-in")(src='@/assets/curso/tema1/img29.png', alt='Imagen decorativa') 
    .row.justify-content-center.align-items-center       
      .col-lg-12
        .row.justify-content-center.align-items-center.bg12.p-3.mb-4         
          .col-auto.up
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/tema1/img13.png', alt='')
          .col.up  
            p(data-aos="fade-down").mb-0 Teniendo claro todo lo relacionado con los materiales, tipos y características de los empaques, se debe hablar entonces del empacado, pues, como se ha podido observar, este es un proceso tan delicado e importante como todos los de la producción y elaboración. Pero inicialmente hay que conocer que existen dos tipos de empacado, uno artesanal y el otro industrial, comenzando con el empacado primario, para llegar hasta el sellado.
    p.mb-5 A la hora de realizar el empacado primario de los productos de chocolate, se deben tener presentes varias consideraciones:
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-lg-4
        .color_02.p-4
          .row.align-items-center
            .col-lg-3.mb-4.mb-lg-0
              img.img-t.m-auto(src='@/assets/curso/tema1/img37.png')
            .col-lg-9
              p.text-white.m-0 #[span.txt-c1 El tipo de producto:] productos como el chocolate de mesa no representan los mismos desafíos que la bombonería  fina. 
      .col-lg-4
        .color_02.p-4
          .row.align-items-center
            .col-lg-3.mb-4.mb-lg-0
              img.img-t.m-auto(src='@/assets/curso/tema1/img38.png')
            .col-lg-9
              p.text-white.m-0 #[span.txt-c1 El tipo de empaque:] productos como el chocolate de mesa no representan los mismos desafíos que la bombonería  fina. 
      .col-lg-4
        .color_02.p-4
          .row.align-items-center
            .col-lg-3.mb-4.mb-lg-0
              img.img-t.m-auto(src='@/assets/curso/tema1/img39.png')
            .col-lg-9.h-100
              p.text-white.m-0 #[span.txt-c1 El procedimiento  operativo, ya sea manual o automático. ]
              br
              br
    p.mb-5 Artesanalmente, no se tienen grandes inconvenientes en el proceso de producto empacado/ minuto/persona como tal, pero sí en la productividad de nivel industrial, pues este se convierte en retos a la hora de generar un sellado rápido sin que se afecte el empaque o el chocolate como tal. 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        row 
          .col-12.p-4.bg3-1.mb-5
            p.mb-0 Para el chocolate de mesa, se usan diferentes materiales, como los descritos anteriormente para los empaques, ya que es un producto más resistente al trato por su textura y menor contenido de grasa, y es habitual hallarlo en la canasta familiar en empaques de plástico y sellados por medio de calor (termosellado).  Sin embargo, en procesos artesanales, la tendencia son los chocolates en polvo o incluso en pequeñas pelotas  semejantes a las tradicionales chuculas colombianas, los cuales vienen empacados en material que es de fácil sellado y que, al igual,  cumple con las normas sanitarias en cuanto a las tendencias orgánicas.
          .col-lg-12
            p Con las barras de chocolate o chocolates, el proceso es más delicado y se debe cuidar de que no se generen traumas de contacto; artesanalmente, una persona cuidadosa lo puede hacer sin mayor inconveniente; bajo este modelo productivo, este tipo de barras se empacan en papeles de grado alimenticio, con apariencias orgánicas, dando la sensación de un producto  100 % artesanal y 100 % natural. El proceso artesanal de empacado puede ser el siguiente:
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img3.png")
    .bg_06.p-2.p-lg-4.mb-5
      .bg_07.p-4
        SlyderA(tipo="b")(data-aos="fade-right")
          .row.justify-content-around
            .col-11.col-lg-5.mb-4.mb-lg-0.align-self-center
              div 
                p En el empacado, no se enfrentan a los retos de los procesos industriales, ya que, luego de hacer dobleces grandes que envuelven muy bien el producto, lo sellan con un papel adhesivo, en el cual está la marca e información del producto. 
            .col-11.col-lg-5.mt-0.mt-md-4
              figure
                img.img-t.m-auto(src='@/assets/curso/tema1/img41.png', alt='Texto que describa la imagen')
          .row.justify-content-around
            .col-11.col-lg-5.mb-4.mb-lg-0.align-self-center
              div
                p Igualmente, se puede usar el papel aluminio, ya que,  como vimos anteriormente, es un material que protege bastante al chocolate, tanto de luz, temperatura, como de agentes externos. 
            .col-11.col-lg-5.mt-0.mt-md-4
              figure
                img.img-t.m-auto(src='@/assets/curso/tema1/img42.png', alt='Texto que describa la imagen')
          .row.justify-content-around
            .col-11.col-lg-5.mb-4.mb-lg-0.align-self-center
              div
                p En cuanto a los bombones de chocolate, está el empacado primario simple con papel aluminio, pero para bombones más finos, con rellenos y formas delicadas,  se debe buscar más protección a la hora de empacarlos. 
            .col-11.col-lg-5.mt-0.mt-md-4
              figure
                img.img-t.m-auto(src='@/assets/curso/tema1/img43.png', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center          
      .col-lg-12.imgs-flotantes1
        img.img-flotante1(src='@/assets/curso/tema1/img2.png', alt='Imagen decorativa')     
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4order-lg-1.order-2(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img44.png")  
      .col-lg-7.order-lg-2.order-1(data-aos="fade-right")
        p El empacado en los procesos industrializados se da por la adquisición de maquinaria de flujo continuo, que se encarga de distribuir, organizar y controlar los parámetros de calidad, como peso y forma, donde el operario solamente cumple el papel de revisar o cuidar que el proceso fluya correctamente.
        p Continuando con el sellado, es de recordar que es uno de los procesos que más cuidado requiere a nivel industrial, ya que la elaboración de bombonería es muy sensible al calor por la cantidad de materia grasa que contiene,  y esto genera el inconveniente de que, al acercar el producto demasiado a las temperaturas elevadas para cerrar los empaques, no se garantice la inocuidad y pueda generarse la pérdida de sus propiedades;  aunque también existen los sellados en frío, igualmente se pueden perder características del chocolate por ser sometido a este tipo de manipulación. 
    .bg8  
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7(data-aos="fade-right")
          p Algunas empresas de vanguardia, han llegado a desarrollar maquinaria industrial de empaque por succión para estos casos donde el producto pasa ya con el empaque primario a una sección de la línea de empaquetado en la cual se genera una presión negativa, es decir, se succiona el producto con cuidado, dejando solo el margen necesario para realizar el sellado en caliente; luego, es sostenido de la misma forma por la fracción de tiempo suficiente para que el sello que está caliente se enfríe totalmente antes de estar cerca del bombón o producto y, de esta forma, no se alteren sus características.   
        .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema1/img45.png") 
      .row.justify-content-center.align-items-center.mb-5.py-5           
        .col-lg-12
          .tarjeta.position-relative.rounded-0.color_02.p-4(data-aos="flip-down")
            .row.justify-content-center.align-items-center
              .col-lg-3
                .imagen-absolute1
                  img(data-aos="zoom-in")(src='@/assets/curso/tema1/img10.png', alt='')
              .col-lg-9.my-3
                p.text-white(data-aos="fade-down") Una de las justificaciones de las nuevas tecnologías de sellado es la de #[b.bwn evitar doble empaque,] que, en algunos de estos casos, consta primero de un laminado en aluminio y luego otro empaque unitario que el consumidor ve inicialmente; de este modo, se omite la necesidad del pegamento en el empaque exterior, mejorando los costos de producción, utilizando la maquinaria necesaria solo para manipular las láminas de aluminio.
    .row.justify-content-center.align-items-center          
      .col-lg-12.imgs-flotantes2(data-aos="fade-left") 
        img.img-flotante2(data-aos="zoom-in")(src='@/assets/curso/tema1/img11.png', alt='Imagen decorativa') 
    .row.justify-content-center.align-items-center          
      .col-lg-12.imgs-flotantes3(data-aos="fade-left") 
        img.img-flotante3(data-aos="zoom-in")(src='@/assets/curso/tema1/img12.png', alt='Imagen decorativa') 
    
</template>
<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo: '<span style="color:#12263F">Cacao</span>',
        texto:
          'El árbol de cacao produce un fruto con unas vainas grandes llamadas mazorcas, y en su interior están las almendras, en algunos casos, llamadas nueces; al cosechar estas y procesarlas, se llega al chocolate, a la manteca de cacao y al extracto seco de cacao.  La reología en esta fase cobra importancia, ya que de una adecuada cosecha, fermentación, secado y tostado se generan unos índices de humedad que influyen en el comportamiento del chocolate.',
        imagen: require('@/assets/curso/tema1/img14.png'),
      },
      {
        titulo: '<span style="color:#12263F">Manteca de cacao</span>',
        texto:
          'El comportamiento reológico del chocolate tiene presencia gracias a la manteca de cacao, pues, al ser la fracción grasa vegetal polimórfica del cacao, es un fluido no newtoniano viscoelástico, que genera una grasa continua en la emulsión de los principales sólidos del cacao y del azúcar, sobre todo en la fase de atemperado, donde se obtiene un producto con textura crocante, lisa, brillante, con resistencia a la temperatura ambiente, pero que al paladar es suave y cremoso.',
        imagen: require('@/assets/curso/tema1/img15.png'),
      },
      {
        titulo: '<span style="color:#12263F">Azúcar o sacarosa</span>',
        texto:
          'Es un disacárido (fructosa y glucosa) responsable del sabor dulce del chocolate, ya que este por sí solo no contiene azúcares considerables; su textura es cristalina y tiene la propiedad de dispersarse en la fase grasa del chocolate por la manteca de cacao, a esto se le conoce como comportamiento hidrofílico, donde los lípidos de la grasa envuelven los cristales, otorgando una consistencia y densidad apreciable.  ',
        imagen: require('@/assets/curso/tema1/img16.png'),
      },
      {
        titulo: '<span style="color:#12263F">Sirope de glucosa</span>',
        texto:
          'Es un fluido casi transparente que se obtiene por hidrólisis de almidón de papa o de maíz, es bastante utilizado en la confitería por las cualidades reológicas  que aporta, ya que es más soluble que la sacarosa y su uso retarda la cristalización,  además de aportar resistencia a los microorganismos, gracias a su alto contenido de sólidos totales, es decir, posee cualidades conservantes, al tener un bajo contenido de humedad y no ser fermentable por levaduras. ',
        imagen: require('@/assets/curso/tema1/img17.png'),
      },
      {
        titulo: '<span style="color:#12263F">Leche</span>',
        texto:
          'Es utilizada en el chocolate, su comportamiento reológico es similar al de la manteca de cacao en la disminución de la viscosidad, posee un efecto emulsificante, ya que contiene algunos fosfolípidos en su composición molecular que facilitan la formación de la fase grasa continua para la emulsión. La incorporación de la leche no debe superar el 25 % de las formulaciones; la leche en polvo no descremada aporta el componente graso, generando suavidad tanto en  textura como en sabor.',
        imagen: require('@/assets/curso/tema1/img18.png'),
      },
      {
        titulo: '<span style="color:#12263F">Lecitina de soja</span>',
        texto:
          'Las altas viscosidades no son deseables en la chocolatería, ya que a mayor viscosidad se presentan mayores defectos en los productos finales; el control de la humedad es importante para no aumentar la viscosidad. La lecitina de soja es un perfecto emulgente, actúa reológicamente aportando brillo a la emulsión, textura suave, fluidez y estabilidad, sobre todo cuando se trata de rellenos, y su costo es relativamente bajo comparado con la manteca de cacao.',
        imagen: require('@/assets/curso/tema1/img19.png'),
      },
    ],
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
