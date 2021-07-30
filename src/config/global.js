export default {
  global: {
    componenteFormativo: 'Contenedores',
    descripcionCurso:
      'En este componente formativo se describe el modelo de virtualización por medio del uso de tecnología de contenedores.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
        titulo: 'Contenedores de software',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Hipervisor vs contenedores',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Docker',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Docker Hub',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Comandos de Docker',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Imágenes y contenedores (containers)',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'DockerFile',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
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
  referencias: [
    {
      referencia:
        'Heim, B. (s.f.). Tecnologías de virtualización. Conceptos de Virtualización.',
      link:
        'https://sites.google.com/site/virutalizacionyha/tecnologias-de-virtualizacion',
    },
    {
      referencia:
        'López, G. (2018). Virtualización basada en contenedores y SD-WAN. Teldat Blog - Conectando el mundo.',
      link:
        'https://www.teldat.com/blog/es/contenedores-contenerizacion-virtualizacion-de-sistema-operativo-sd-wan/',
    },
    {
      referencia: 'NetApp. (2019). ¿Qué son los contenedores? NetApp.',
      link: 'https://www.netapp.com/es/devops-solutions/what-are-containers/',
    },
    {
      referencia:
        'Novato, P. (2019). 03.- ¿Qué son las imágenes y los contenedores en docker?  [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=woTRh_b5zxE&feature=youtu.be',
    },
    {
      referencia: 'VMware, Inc. (s. f.). Virtualización. VMware.',
      link: 'https://www.vmware.com/co/solutions/virtualization.html',
    },
    {
      referencia: 'Windows. (2021). Install WSL on Windows 10. Microsoft Docs.',
      link:
        'https://docs.microsoft.com/en-us/windows/wsl/install-win10#step-4---download-the-linux-kernel-update-package',
    },
  ],
  glosario: [
    {
      termino: 'Binarios',
      significado:
        'Tipo de archivos que contiene información requerida para la ejecución de ciertas aplicaciones.',
    },
    {
      termino: 'DevOps',
      significado:
        'Enfoque que integra prácticas del área de infraestructura con prácticas de desarrollo para optimizar el trabajo en equipo y la aceleración de entrega de productos y servicios.',
    },
    {
      termino: 'Librerías',
      significado:
        'Conjunto de códigos construidos en un lenguaje de programación que sirve para ser reutilizado por otras aplicaciones.',
    },
    {
      termino: 'Migración',
      significado: 'Llevar un sistema hacia otra plataforma.',
    },
    {
      termino: 'VM',
      significado: 'Máquina virtual.',
    },
  ],
  complementario: [
    {
      texto:
        'Programador novato. (2019). 01.- ¿Que es Docker? Y ¿Realmente lo necesito?  [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/CD7wPcCBo8o',
    },
    {
      texto:
        'Fazt Code. (2019). Docker, Instalación en Windows10. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/BK-C2RofmTE',
    },
    {
      texto: 'Docker Inc. (s.f.). Dockerfile reference.',
      tipo: 'Página web',
      link: 'https://docs.docker.com/engine/reference/builder/',
    },
    {
      texto: 'Docs Microsoft. (2019). DockerFile on Windows. Docs Microsoft.',
      tipo: 'Página web',
      link:
        'https://docs.microsoft.com/en-us/virtualization/windowscontainers/manage-docker/manage-windows-dockerfile',
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
      {
        nombre: 'Jonathan Guerrero Astaiza',
        cargo: 'Instructor',
        centro:
          'Centro de teleinformática y producción industrial - Regional Cauca',
      },
      {
        nombre: 'Paula Andrea Taborda Ortiz',
        cargo: 'Diseñadora instruccional',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora Metodológica y Pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
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
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Carlos Julián Ramírez Benítez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Jesús Pérez Madariaga',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Veimar Celis Melendez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
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
