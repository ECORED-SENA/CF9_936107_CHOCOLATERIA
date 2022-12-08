export default {
  global: {
    componenteFormativo: 'Monitoreo del proceso de chocolatería',
    descripcionCurso:
      'En el presente componente formativo, revisaremos los comportamientos físicos del chocolate y su influencia en la terminación del producto; igualmente, el comportamiento reológico de las materias primas, los tipos de empaques más adecuados, así como   los procesos operativos y la documentación mediante formatos. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-6.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Reología',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Características',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Comportamiento de las materias primas funcionales',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Materiales de empaque, características, tipos y funciones',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Defectos en los productos de chocolatería',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Tipos de residuos en chocolatería y  su disposición',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Registros de producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Formatos',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Diligenciamiento',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Reología',
      referencia:
        'Ciro, H. (2006). Reología de fluidos y su aplicación en el área de los alimentos. Universidad Nacional de Colombia.',
      tipo: 'Pdf',
      link: 'https://repositorio.unal.edu.co/handle/unal/59571?show=full',
    },
    {
      tema:
        'Comportamiento de las materias primas funcionales: Emulgentes/ emulsionantes',
      referencia: 'Navarro, A. (2011). Emulsiones.',
      tipo: 'Web',
      link: 'https://navarrof.orgfree.com/Docencia/FQaplicada/UT4/UT4_t2.htm',
    },
    {
      tema:
        'Comportamiento de las materias primas funcionales: Emulgentes/ emulsionantes.',
      referencia: 'ChocoFactura. (2021). Emulsificantes en chocolatería',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=JDi6jPXdG8w',
    },
    {
      tema:
        'Materiales de empaque, características, tipos y funciones: Proceso empacado',
      referencia: 'Rikolto Veco. (s. f.). Proceso productivo del chocolate',
      tipo: 'Web',
      link:
        'http://cadenacacaoca.info/CDOC-Deployment/documentos/Proceso_productivo_del_chocolate.pdf',
    },
    {
      tema: 'Defectos en los productos de chocolatería',
      referencia:
        'Callebaut. (s. f.). Prevención de problemas: bombones moldeados.',
      tipo: 'Web',
      link:
        'https://www.callebaut.com/es-LATAM/chocolate-tecnica/prevencion-problemas/bombones-moldeados',
    },
  ],
  glosario: [
    {
      termino: 'Atomización',
      significado: 'proceso de secado de alimentos empleando aire caliente. ',
    },
    {
      termino: 'Celulosa',
      significado:
        'biomolécula que compone las paredes de las células vegetales.',
    },
    {
      termino: 'EEC / CEE',
      significado: ' Comunidad Económica Europea.',
    },
    {
      termino: 'Punto de ignición',
      significado:
        'Punto dado por la temperatura, ya sea medida en grados centígrados o Fahrenheit, en la que una sustancia u objeto sometido al calor inicia el proceso de quemado o incinerado. ',
    },
    {
      termino: 'Punto de humo',
      significado:
        'punto dado por la temperatura, ya sea medida en grados centígrados o Fahrenheit, en la que una sustancia sometida al calor empieza a desprender humo.',
    },
    {
      termino: 'Viscosidad',
      significado:
        'resistencia que presenta el fluido a fluir sobre una superficie / característica no deseable en el proceso de cobertura de chocolate.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ciro, H. (2006). Reología de fluidos y su aplicación en el área de los alimentos. Universidad Nacional de Colombia.',
      link: 'https://repositorio.unal.edu.co/handle/unal/59571',
    },
    {
      referencia:
        'Editora Insumos. (s. f.). Los gelificantes más usados en la industria alimentaria. Aditivos Ingredientes. ',
      link:
        'https://aditivosingredientes.com/artigos/todos/los-gelificantes-mas-utilizados-en-la-industria-alimentaria',
    },
    {
      referencia:
        'Navia, D., Ayala, A. y Villada, H. (2014). Interacciones empaque-alimento: migración. Revista Ingenierías Universidad de Medellín, 13(25), p. 99-113.',
      link: 'https://repository.udem.edu.co/handle/11407/1827',
    },
    {
      referencia:
        'Redacción Interempresas. (2020). Chocolate en un envase suave y respetuoso con el medio ambiente. Canales Sectoriales',
      link:
        'https://www.interempresas.net/Envase/Articulos/320423-Chocolate-en-un-envase-suave-y-respetuoso-con-el-medio-ambiente.html',
    },
    {
      referencia:
        'Redacción <em>The Food Tech</em>. (2022). Ventajas del envase de vidrio. <em>The Food Tech</em>. ',
      link:
        'https://www.interempresas.net/Envase/Articulos/320423-Chocolate-en-un-envase-suave-y-respetuoso-con-el-medio-ambiente.html',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable Equipo Desarrollo Curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diana Carolina Pachón Meneses',
        cargo: 'Experta Temática',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
      },
      {
        nombre: 'Caterine Bedoya Mejía',
        cargo: 'Diseñadora Instruccional',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora Metodológica y Pedagógica',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de Estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuly Rey',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López ',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yicelly Estefania Mesa Silva ',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba ',
        cargo: 'Producción audiovisual ',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual ',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Sandra Milena Triana Pinto',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
