export default {
  global: {
    componenteFormativo:
      'Servicios <i>web</i>, peticiones y tecnologías de consumo en servicios.',
    descripcionCurso:
      'El componente formativo 10 se realiza con el fin de que el estudiante adquiera los conocimientos sobre conceptos ligados a su programa tales como: servicios <i>web</i>, tipos de servicios y tecnologías relacionadas para consumo de dichos servicios.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
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
        titulo: 'Concepto y tipos de servicios <i>web</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Evolución de los servicios <i>web</i>',
            hash: 't_1_1',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Métodos de petición',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Tecnologías para consumir y probar servicios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos y características',
            hash: 't_3_1',
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
      tema: '<i>Newmain</i>',
      referencia: '<i>Statworx, 2022</i>',
      tipo: 'Manual',
      link:
        'https://www.statworx.com/en/content-hub/blog/testing-rest-apis-with-newman/',
    },
    {
      tema: '<i>Postman y Newman</i>',
      referencia: '<i>Velotio Technologies, 2019</i>',
      tipo: 'Manual',
      link:
        'https://medium.com/velotio-perspectives/api-testing-using-postman-and-newman-6c68c33303fc',
    },
    {
      tema: '<i>REST vs GraphQL vs gRPC</i>',
      referencia: '<i>Medium Staff, 2021</i>',
      tipo: 'Lectura',
      link: 'https://blog.bitsrc.io/rest-vs-graphql-vs-grpc-684edfacf810',
    },
    {
      tema: '<i>WebServices</i>',
      referencia: '<i>Medium Staff, 2019</i>',
      tipo: 'Lectura',
      link:
        'https://medium.com/@lokeshsharma596/webservices-introduction-notes-50ce1e52ec1f',
    },
  ],
  glosario: [
    {
      termino: '<i>API</i>',
      significado:
        'una interfaz de programa de aplicación (<i>API</i>) define las reglas que se deben seguir para comunicarse con otros sistemas de <i>software</i>. Los desarrolladores exponen o crean <i>API</i> para que otras aplicaciones puedan comunicarse con sus aplicaciones mediante programación.',
    },
    {
      termino: '<i>API RESTful</i>',
      significado:
        'es una interfaz que dos sistemas de computación utilizan para intercambiar información de manera segura a través de <i>Internet.</i>',
    },
    {
      termino: '<i>Arquitectura Cliente-Servidor</i>',
      significado:
        'arquitectura en la cual el cliente envía una petición y el servidor responde.',
    },
    {
      termino: '<i>Endpoint</i>',
      significado:
        'es la <i>URL</i> de un <i>API</i> que responde a una petición.',
    },
    {
      termino: '<i>HTTP</i>',
      significado:
        'protocolo de comunicación que permite las transferencias de información a través de archivos en la <i>World Wide Web</i>.',
    },
    {
      termino: '<i>Open API</i>',
      significado:
        'especificación para archivos de interfaz legibles por máquina para describir, producir, consumir y visualizar servicios <i>web RESTful</i>. Es una de las especificaciones de documentación de <i>API</i> más populares, permite describir un <i>API</i> usando formato <i>JSON</i> o <i>YAML</i>.',
    },
    {
      termino: '<i>REST</i>',
      significado:
        'es una arquitectura de <i>software</i> que impone condiciones sobre cómo debe funcionar una <i>API</i>.',
    },
    {
      termino: '<i>Swagger</i>',
      significado:
        'es el nombre asociado con algunas de las herramientas más conocidas y ampliamente utilizadas para implementar la especificación <i>OpenAPI</i>.',
    },
    {
      termino: '<i>UUID</i>',
      significado:
        'la especificación <i>UDDI (Universal Description, Discovery, and Integration)</i> define un modo de publicar y encontrar información sobre servicios <i>web</i>.',
    },
    {
      termino: '<i>WSDL</i>',
      significado:
        '<i>(web Services Description Language)</i> es una especificación estándar para describir servicios basados en <i>XML</i> de <i>red</i>. Proporciona a los proveedores de servicios un modo sencillo de describir el formato básico de las peticiones a sus sistemas independientemente de la implementación del motor de ejecución subyacente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Amazon Web Services, Inc. (2022). <i>¿Qué es la API RESTful?</i>',
      link: 'https://aws.amazon.com/es/what-is/restful-api/',
    },
    {
      referencia:
        'Desarrollo web (24 de junio de 2004). <i>XML Web Services.</i>',
      link: 'https://desarrolloweb.com/articulos/1545.php',
    },
    {
      referencia:
        'IBM Corporation. (13 de octubre de 2022). <i>Servicios Web.</i>',
      link: 'https://www.ibm.com/docs/es/was/9.0.5?topic=services-web',
    },
    {
      referencia:
        'OpenJS Foundation. (2022).<i> Descargas Versión actual: 18.12.0 (includes npm 8.19.2).</i>',
      link: 'https://nodejs.org/es/',
    },
    {
      referencia:
        'Swagger supported by SMARTBEAR. (2022). <i>OpenAPI Specification.</i>',
      link: 'https://swagger.io/specification/',
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
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
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
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
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
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
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
