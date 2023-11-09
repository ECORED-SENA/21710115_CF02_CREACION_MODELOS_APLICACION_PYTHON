export default {
  global: {
    componenteFormativo: '<em>Machine Learning</em> con Python',
    descripcionCurso:
      'Este componente formativo está enfocado en reconocer todos los elementos necesarios para aplicar el modelo <em>Machine Learning</em> a través de un ejemplo enfocado en la selección y utilización de los diferentes algoritmos de clasificación que se encuentran dentro de la categoría del aprendizaje supervisado.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/a2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/a3.png'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Implementar entorno de trabajo con Python',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Análisis exploratorio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Preprocesamiento de los datos con Python',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Crear el modelo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Entrenamiento',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Evaluación',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Predicciones',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Evaluar el modelo y análisis de errores',
            hash: 't_4_4',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF02_21710115_DU.pdf',
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
      tema: '4. Crear el modelo',
      referencia:
        'SDC LEARNING. ( 2022). Webinar Gratuito Mi Primer Modelo de Machine Learning en Python. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=9HKfqinJJAo',
    },
    {
      tema: '4. Crear el modelo',
      referencia:
        'Parra, F. (2022). 6 Métodos de clasificación | <em>Estadística y Machine Learning</em> con R. Algoritmo de Clasificación.',
      tipo: 'Página web',
      link: 'https://bookdown.org/content/2274/metodos-de-clasificacion.html',
    },
    {
      tema: '4.4. Evaluar el modelo y análisis de errores',
      referencia:
        'González, L. (2020). <em>Evaluando el error en los modelos de clasificación.</em> Aprende IA.',
      tipo: 'Página web',
      link:
        'https://aprendeia.com/evaluando-el-error-en-los-modelos-de-clasificacion-machine-learning/',
    },
  ],
  glosario: [
    {
      termino: 'Scikit-learn',
      significado:
        'librería especializada para proyectos de <em>Machine Learning</em> y ampliamente utilizada por todo el mundo.',
    },
    {
      termino: 'Algoritmos de clasificación',
      significado:
        'hacen parte del aprendizaje supervisado y se caracterizan porque los modelos se entrenan con las instancias y sus respectivas clasificaciones.',
    },
    {
      termino: 'Naive Bayes',
      significado:
        'algoritmo de clasificación utilizado en problemas donde las salidas son binarias.',
    },
    {
      termino: 'Matriz de confusión',
      significado:
        'es una métrica para establecer el nivel de error, precisión y otras medidas en los modelos de <em>Machine Learning.</em>',
    },
    {
      termino: 'Entrenamiento',
      significado:
        'proceso que se realiza para que los modelos aprendan de los datos.',
    },
    {
      termino: 'Preprocesamiento',
      significado:
        'manipulación que se realiza a los datos con el objetivo de entregarlos al modelo como este lo requiera.',
    },
    {
      termino: 'Evaluación',
      significado:
        'análisis de eficiencia con el que el modelo predice los datos, generalmente se contrasta con una colección de pruebas separada previamente.',
    },
    {
      termino: 'Predicciones',
      significado:
        'capacidad del modelo para clasificar entradas nuevas, de acuerdo con un entrenamiento previo.',
    },
  ],
  referencias: [
    {
      referencia:
        'González, L. (2020). <em>Regresión Logística- Teoría.</em> Aprende IA.',
      link:
        'https://aprendeia.com/algoritmo-regresion-logistica-machine-learning-teoria/#:~:text=La%20Regresi%C3%B3n%20Lineal%20proporciona%20una,el%20precio%20de%20una%20acci%C3%B3n',
    },
    {
      referencia:
        'Miller, V. (2020). <em>Explorando Algoritmos de Aprendizaje Automático Supervisado.</em> Toptal Engineering Blog.',
      link:
        'https://www.toptal.com/machine-learning/explorando-algoritmos-de-aprendizaje-automatico-supervisado',
    },
    {
      referencia:
        'Román, V. (2019). <em>Machine Learning: Cómo Desarrollar un Modelo desde Cero.</em> Medium',
      link:
        'https://medium.com/datos-y-ciencia/machine-learning-c%C3%B3mo-desarrollar-un-modelo-desde-cero-cc17654f0d48',
    },
    {
      referencia:
        'Román, V. (2019). <em>Aprendizaje Supervisado: Introducción a la Clasificación y Principales Algoritmos.</em> Medium.',
      link:
        'https://medium.com/datos-y-ciencia/aprendizaje-supervisado-introducci%C3%B3n-a-la-clasificaci%C3%B3n-y-principales-algoritmos-dadee99c9407',
    },
    {
      referencia: 'SMS <em>Spam Collection Dataset.</em> (s.f.). Kaggle',
      link: 'https://www.kaggle.com/datasets/uciml/sms-spam-collection-dataset',
    },
    {
      referencia:
        'Sotaquirá, M. (2021). <em>¿Se requiere SQL para trabajar en Machine Learning?</em> Codificando Bits',
      link: 'https://www.codificandobits.com/blog/sql-machine-learning/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ronald Alexander Vacca Ascanio',
          cargo: 'Experto Temático',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Jeimy Lorena Romero Perilla',
          cargo: 'Diseñador Instruccional',
          centro:
            'Regional Norte de Santander - Centro de la industria, la empresa y los servicios',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital- Centro de Diseño y Metrología',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Corrector de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Miroslava González Hernández',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Camilo Andres Bolaño Rey',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Camilo Andres Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Emilsen Bautista',
          cargo: 'Actividad Didáctica',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
