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
    .tarjeta.overflow-hidden.mb-5(style="background-color: #dfefee " data-aos="zoom-in")
      .row.justify-content-center.mb-1.p-4
        .col-lg-1.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema1/5.svg', alt='')
        .col-lg-11
          p #[b ● Matplotlib:] es una biblioteca muy útil para realizar gráficos estáticos, animados e interactivos. Los gráficos son muy útiles para realizar análisis de información permitiendo agrupar grandes volúmenes de datos en representaciones visuales que permiten una mejor comprensión.
            br
            br
            |Para usar esta librería se debe realizar la importación de la siguiente forma:
            br
            br

            | #[code.codigo import matplotlib.pyplot as plt]
    .row.justify-content-center.mb-5
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema1/6.png', alt='')
      .col-lg-6(data-aos="fade-left")
        p A continuación, se ve un ejemplo de un gráfico que realiza la simulación de ventas de diferentes productos, mostrando la participación porcentual de cada uno de ellos, y para este caso se usará un gráfico muy útil para visualizar la participación porcentual de cada uno de ellos con respecto al total; estos son los conocidos como gráficos de torta.
          br
          br
          |Para realizar este ejemplo es necesario realizar algunos pasos que se podrán conocer revisando el recurso propuesto:
        LineaTiempoD.color-primario
          p(numero="A" titulo="Primero") Realice la importación de las librerías en Python de la siguiente manera.
            br
            |#[code.codigo import matplotlib.pyplot as plt.]
          p(numero="B" titulo="Segundo") Defina las etiquetas que representan las salidas de los datos, para este ejemplo serán productos que representan frutas. 
            br
            |#[code.codigo etiquetas = 'Manzanas', 'Peras', 'Mangos', 'Fresas']
          p(numero="C" titulo="Tercero") Establezca los valores que representan cada uno de los productos definidos. valores =  #[code.codigo  [25, 15, 45, 5]]
          p(numero="D" titulo="Cuarto") Si quiere resaltar una rebana de la torta, por ejemplo las peras, se debe establecer una variable de la siguiente manera.
            br
            |#[code.codigo rebanada=(0,0.1,0,0)]
          p(numero="E" titulo="Quinto") Como se observa en el paso anterior, el 0.1 establece una separación del producto número dos correspondiente a las peras, de acuerdo con el número al aumentar el valor la separación de la torta será mayor.
          p(numero="F" titulo="Sexto") Para visualizar el gráfico use las siguientes líneas de código. Ubicando cada una de las variables definidas anteriormente como se muestra a continuación.
            |#[code.codigo fig1, ax1 = plt.subplots() ax1.pie(valores, explode=rebanada, labels=etiquetas, autopct='%1.1f%%', shadow=True, startangle=90) ax1.axis('equal')]
          div(numero="G" titulo="Séptimo")
            p Finalmente, el resultado que se obtiene es el siguiente:
            .row.justify-content-center.mb-5
              .col-lg-10
                img(src='@/assets/curso/temas/tema1/7.png', alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.overflow-hidden(style="background-color: #D3C3FD")
          .row.justify-content-center.align-items-center.g-0.p-lg-0.p-4
            .col-lg-1.col-8.mb-lg-0.mb-3
              img(src='@/assets/curso/temas/tema1/8.svg', alt='')
            .col-lg-11
                p.mb-0.ms-lg-4 Vemos que la visualización de los datos se puede realizar muy fácilmente, de igual manera se pueden realizar múltiples gráficos como histogramas de frecuencia, barras, diagrama de caja y bigotes, dispersión y, en general, muchos tipos de gráficos, que de acuerdo con el problema, se pueden implementar.
    .tarjeta.p-5.mb-5(style="background-color: #DBEFED")
      .row.justify-content-center
        .col-lg-1.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema1/9.svg', alt='')
        .col-lg-11
          p #[b Scikit-learn:] esta es una librería muy importante para todo lo que tiene que ver con aprendizaje automático. Esta biblioteca ofrece una estructura muy fácil y a la vez muy robusta que permite la creación de modelos de Machine Learning. Se utiliza en el aprendizaje, transformación y predicción desde una colección de datos específica y se pueden utilizar igualmente en el diseño de modelos de agrupación,regresión y clasificación; por otro lado, también es utilizada para el procesamiento y análisis de tipo estadístico, evaluando los modelos entre muchas más funcionalidades.
            br
            br
            |Se realizará a continuación un pequeño ejemplo donde se implemente esta librería, dependiendo la siguiente colección de datos, se requiere realizar el aprendizaje de los datos, crear el modelo y finalmente realizar una predicción de nuevas entradas.
            br
            br
            |La colección de datos con la que se realizará el ejemplo es la siguiente:
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 1
            span Colección de datos de ejemplo
          .tabla-a.color-acento-contenido.mb-3
            table.text-center
              tr.fw-bold.bg-white
                td(style='border: 1px solid #8054f8') Items
                td(style='border: 1px solid #8054f8') Salario (millones)
                td(style='border: 1px solid #8054f8') Hijos (unidades)
                td(style='border: 1px solid #8054f8') Estado
                td(style='border: 1px solid #8054f8') Clase
              tr.bg-white
                td(style='border: 1px solid #8054f8') 1
                td(style='border: 1px solid #8054f8') 5
                td(style='border: 1px solid #8054f8') 2
                td(style='border: 1px solid #8054f8') Casado(1)
                td(style='border: 1px solid #8054f8') Aprobado(1)
              tr.bg-white
                td(style='border: 1px solid #8054f8') 2
                td(style='border: 1px solid #8054f8') 4
                td(style='border: 1px solid #8054f8') 1
                td(style='border: 1px solid #8054f8') Casado(1)
                td(style='border: 1px solid #8054f8') Aprobado(1)
              tr.bg-white
                td(style='border: 1px solid #8054f8') 3
                td(style='border: 1px solid #8054f8') 3.5
                td(style='border: 1px solid #8054f8') 0
                td(style='border: 1px solid #8054f8') Soltero(2)
                td(style='border: 1px solid #8054f8') Aprobado(1)
              tr.bg-white
                td(style='border: 1px solid #8054f8') 4
                td(style='border: 1px solid #8054f8') 1.5
                td(style='border: 1px solid #8054f8') 4
                td(style='border: 1px solid #8054f8') Casado(1)
                td(style='border: 1px solid #8054f8') Reprobado(0)
              tr.bg-white
                td(style='border: 1px solid #8054f8') 5 
                td(style='border: 1px solid #8054f8') 1
                td(style='border: 1px solid #8054f8') 3
                td(style='border: 1px solid #8054f8') Soltero(2)
                td(style='border: 1px solid #8054f8') Reprobado(0)
              tr.bg-white
                td(style='border: 1px solid #8054f8') 6
                td(style='border: 1px solid #8054f8') 0.8
                td(style='border: 1px solid #8054f8') 2
                td(style='border: 1px solid #8054f8') Casado(1)
                td(style='border: 1px solid #8054f8') Reprobado(0)
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
        p Esta es una pequeña muestra que simula si se aprueba o reprueba un crédito de una entidad bancaria, en la cual se tienen 6 ejemplos o instancias con tres características o atributos, denominados salario, hijos y estado, y estos se clasifican en dos clases aprobado y reprobado.
          br
          br
          |Se quiere realizar un modelo para realizar la predicción dependiendo a nuevas entradas, si se aprueban o reprueban créditos. Para realizar este ejemplo es necesario realizar algunos pasos que se podrán conocer revisando el recurso propuesto:
      .col-lg-4.col-4: img(src='@/assets/curso/temas/tema1/10.png', alt='')



























































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
