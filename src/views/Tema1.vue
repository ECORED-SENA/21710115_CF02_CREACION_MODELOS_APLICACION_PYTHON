<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Implementar entorno de trabajo con Python
    p.mb-5(data-aos='fade-right') Python es un lenguaje de programación altamente utilizado y líder dominante en todo lo relacionado con la estadística, la #[em data mining] y por supuesto el #[em Machine Learning], es un #[em software] de libre uso, lo que permite que un sinnúmero de personas puedan hacer las implementaciones de sus algoritmos, obteniendo de esta manera una gran cantidad de librerías utilizadas en la implementación de casi todas las técnicas de #[em Machine Learning] que existen actualmente.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/1.svg', alt='')
      .col-lg-9(data-aos="fade-left")
        p El entorno de trabajo utilizado es Anaconda, el cual está basado en el lenguaje de programación Python. Este programa se puede descargar gratuitamente desde su página oficial y al descargarlo se visualiza una serie de aplicaciones para el manejo de proyectos de ciencia de datos.
          br
          br
          |Para este caso se usará la aplicación JupiterLab, incorporada en Anaconda, que es ampliamente usada para la creación de los denominados Notebook. Con esta herramienta se realizará toda la programación basada en el lenguaje de programación Python.
          br
          br
          |Para realizar la instalación de Anaconda se debe observar el video propuesto:
    .row.justify-content-center.mb-5
      .col-lg-10
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video: Leyenda del video
    p.mb-5(data-aos='fade-right') Ahora bien, para desplegar un entorno de trabajo con JupiterLab se deben seguir los siguientes pasos dados en el recurso:
    .row.justify-content-center.mb-5
      .col-lg-10
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video: Leyenda del video
    p.mb-5(data-aos='fade-right') Después de realizar las instalaciones de las herramientas para el desarrollo del proyecto de Machine Learning se requiere del uso de ciertas librerías especializadas para el tratamiento de los datos, de las cuales se hablará a continuación.
    .titulo-circulo.mb-4(data-aos="fade-right")
      h3 Librerías para trabajar #[em Machine Learning]
    p.mb-5(data-aos='fade-right') La alta demanda del lenguaje de programación Python ha desbordado toda serie de librerías que ayudan a múltiples tareas, facilitando el trabajo y haciéndolo cada vez más rápido y eficiente. Por tanto y para este caso, se utilizarán librerías propias de proyectos de ciencia de datos. En el siguiente video se expone el proceso de importación:
    .row.justify-content-center.mb-5
      .col-lg-10
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video: Leyenda del video
    p.mb-5(data-aos='fade-right') Entre los tipos de librerías se encuentran:
    .tarjeta.overflow-hidden.mb-5(style="background-color: #dfefee" data-aos="zoom-in")
      .row.justify-content-center.mb-1.p-4
        .col-lg-1.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema1/2.svg', alt='')
        .col-lg-11
          ul.lista-ul.mb-1
            li.d-flex
              i.fas.fa-circle.fa-xs
              p #[b Pandas]: es una librería de Python especializada en el manejo y análisis de estructuras de datos; dentro de sus principales usos se puede encontrar:
          ul.lista-ul--color
            li.mb-0
              i.fas.fa-angle-right
              | Define nuevas estructuras de datos basadas en los arrays de la librería NumPy pero con nuevas funcionalidades.

            li.mb-0
              i.fas.fa-angle-right
              | Permite leer y escribir fácilmente ficheros en formato CSV, Excel y bases de datos SQL.

            li.mb-0
              i.fas.fa-angle-right
              | Permite acceder a los datos mediante índices o nombres para filas y columnas.

            li.mb-0
              i.fas.fa-angle-right
              | Ofrece métodos para reordenar, dividir y combinar conjuntos de datos.

            li.mb-0
              i.fas.fa-angle-right
              | Permite trabajar con series temporales.

            li.mb-0
              i.fas.fa-angle-right
              | Realiza todas estas operaciones de manera muy eficiente.
      div(style="background-color: #d3c3fd").p-4
        p.mb-0 Para realizar la importación de la librería panda y empezar a trabajar con sus funcionalidades, se debe utilizar el siguiente comando: #[b import pandas as pd]
    p.mb-5(data-aos='fade-right') A continuación, se observa la potencia de esta librería mediante la cual con una sola línea de código realiza el cargue de una colección de datos en formato CSV; el comando requerido es el siguiente: #[code.codigo df=pd.read_csv('spam.csv')]
      br
      br
      | Para la visualización de los datos se utiliza el siguiente:   #[code.codigo df.head()]
    p.mb-5(data-aos='fade-right') El resultado obtenido es:
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        .tabla-b.color-acento-contenido.mb-3
          table.text-center.fst-italic
            tr.fw-bold.bg-transparent.text-start
              th(style='border: 1px solid #8054f8') Category
              td(style='border: 1px solid #8054f8') Message
            tr.bg-transparent.text-start
              th(style='border: 1px solid #8054f8') 0 ham
              td(style='border: 1px solid #8054f8') Go until jurong point, crazy.. Available only ...
            tr.bg-transparent.text-start
              th(style='border: 1px solid #8054f8') 1 ham
              td(style='border: 1px solid #8054f8') Ok lar... Joking wif u oni...
            tr.bg-transparent.text-start
              th(style='border: 1px solid #8054f8') 2 spam
              td(style='border: 1px solid #8054f8') Free entry in 2 a wkly comp to win FA Cup fina...
            tr.bg-transparent.text-start
              th(style='border: 1px solid #8054f8') 3 ham
              td(style='border: 1px solid #8054f8') U dun say so early hor... U c already then say...
            tr.bg-transparent.text-start
              th(style='border: 1px solid #8054f8') 4 ham
              td(style='border: 1px solid #8054f8') Nah I don't think he goes to usf, he lives aro...
        .tarjeta.borde-izquierdo.p-4(style="background-color: #d3c3fd ")
          p.ms-3.mb-0 Este comando permitirá visualizar una muestra de los datos, la librería panda es muy útil para todo el manejo y manipulación de datos. ya que con muy pocas líneas de código se puede realizar procedimientos complejos.
      .col-lg-5.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/3.png', alt='')
    .tarjeta.overflow-hidden.mb-5(style="background-color: #dfefee " data-aos="zoom-in")
      .row.justify-content-center.mb-1.p-4
        .col-lg-1.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema1/4.png', alt='')
        .col-lg-11
          ul.lista-ul.mb-1
            li.d-flex
              i.fas.fa-circle.fa-xs
              p #[B Numpy:] es una librería muy importante cuando se trabaja con proyectos de ciencia de datos en Python. Se especializa en los cálculos numéricos y analítica de datos, específicamente cuando se trata de grandes volúmenes de información.
                br
                br
                |Esta librería trae incorporada una nueva clase de objetos que se denominan arrays que se utilizan para representar colecciones de datos que son de un mismo tipo en varias dimensiones y funciones que son bastante eficientes para realizar su manipulación.
      div(style="background-color: #d3c3fd").p-4
        p.mb-0 La librería Numpy es hasta 50 veces más rápida comparada con las listas que vienen ya predeterminadas con el lenguaje Python. Esto hace que sean muy buena opción cuando se trata del procesamiento de vectores y matrices que son de gran dimensión.
    .row.justify-content-center.mb-5
      .col-lg-10
        p.mb-5 Para trabajar con esta librería se debe importarla de la siguiente manera:
          br
          |<code class="codigo">Import numpy as np <br> robustas.</code>
          br
          br
          |Normalmente una lista de Python se define de la siguiente manera:
          br
          |#[code.codigo listaPython=[2,4,6,8,10]]
          br
          br
          |Para realizar la conversión a un array, se debe envolver dentro del método array() de la siguiente manera.
          br
          |#[code.codigo np.array(listaPython)]
          br
          br
          | El resultado que se obtiene es el siguiente.
          br
          |#[code.codigo array([ 2, 4, 6, 8, 10])]
          br
          br
          | Los dos tipos de arreglos que se pueden encontrar en NumPy son vectores y matrices; en el           anterior ejemplo, se veía la conversión de una lista normal de Python a un vector en NumPy y un           ejemplo de matrices se puede ver a continuación:
          br
          | <code class="codigo "> matriz = [[1, 2, 3],[4, 5, 6],[7, 8, 9]] #[br] np.array(matriz)</code>
          br
          br
          |El resultado es una matriz de una dimensión determinada por tres filas y tres columnas y se ve de la siguiente manera.
          br
          | <code class="codigo"> array([[1, 2, 3],<br> [4, 5, 6],<br> [7, 8, 9]]) </code>
          br
          br
          | Por ejemplo, si se quisiera realizar un matriz de dimensión 5 por 5 con números aleatorios          simplemente se ejecuta el siguiente comando:
          br
          | #[code.codigo matriz_aleatoria=np.random.rand(5,5) ]
          br
          br
          | Para visualizar el resultado simplemente se debe utilizar el comando print de la siguiente manera.
          br
          |#[code.codigo print(matriz_aleatoria)]
          br
          br
          | El resultado obtenido sería el siguiente:
          br
          br
          |<code class="codigo"> [[ 0.29851396 0.65165827 0.88150781 0.15657903 0.37648232]<br>[ 0.33269701 0.4549997 0.68407767 0.68343099 0.77983704]<br>[ 0.74589421 0.53109264 0.83403166 0.56529856 0.40442153]<br>[ 0.42269337 0.46910944 0.95015784 0.25355503 0.13611851]<br>[ 0.5528267 0.87792271 0.84945654 0.26660765 0.68067849]] </code>
        .tarjeta.p-3(style="background-color: #d3c3fd")
          p.mb-0 Con esta robusta librería se pueden realizar todo tipo de operaciones basadas en arreglos unidimensionales y multidimensionales.

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
