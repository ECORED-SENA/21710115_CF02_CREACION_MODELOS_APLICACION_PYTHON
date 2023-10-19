<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Análisis exploratorio
    .row.justify-content-center.mb-5
      .col-lg-4.col-8(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema2/1.png', alt='')
      .col-lg-8
        p Como se sabe, este es uno de los pasos más importantes en los proyectos de ciencia de datos, pues ayuda a entender los datos y a establecer si existe algún tipo de problema; desde allí, se determinan acciones para corregirlos o adecuarlos dependiendo de las necesidades identificadas.
          br
          br
          |Para entender mejor lo anteriormente dicho se desarrollará un ejemplo centrado en la creación de un modelo que permita la identificación de correos que pueden llegar a ser maliciosos.
          br
          br
          |Se parte del hecho de que ya se ha realizado la búsqueda de la información y se cuenta con los insumos para empezar a trabajar.
          br
          br
          |En primer lugar, cabe suponer que se cuenta con una colección de datos correspondientes a mensajes de correos electrónicos que han sido catalogados como normales y maliciosos, de manera que se debe empezar con la exploración de los datos para ir entendiéndolos. Este proceso se realiza siguiendo unos pasos específicos, los cuales se presentan en el siguiente recurso:
    .titulo-circulo.mb-4(data-aos="fade-right")
      h3 Proceso de exploración de datos
    .row.justify-content-center.mb-5
      .col-lg-10
        div.p-5(style="background-color: #dbefed ")
          .titulo-pasos.mb-5
            h4.mb-0 Paso 1
          p.mb-5(data-aos='fade-right') #[b Entorno configurado:] lo primero que se debe hacer es asegurarse de tener el entorno de trabajo configurado, en caso de no ser así, remítase a la primera parte de este componente y realice el proceso. 
          .titulo-pasos.mb-5
            h4.mb-0 Paso 2
          p.mb-5(data-aos='fade-right') Abrir la aplicación JupiterLab de Anaconda y crear un nuevo Notebook. Observe la imagen
          .row.justify-content-center.mb-5
            .col-lg-8: img(src='@/assets/curso/temas/tema2/2.png', alt='Captura de pantalla para la creación de un notebook')
          .titulo-pasos.mb-5
            h4.mb-0 Paso 3
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-6.mb-lg-0.mb-3
              p Importar las librerías necesarias para la exploración de los datos, para nuestro ejemplo las librerías a utilizar en esta etapa son Pandas, Numpy, Matplolib. La importación se realiza utilizando los siguientes comandos
                br
                br
                | <code class="codigo "> import pandas as pd <br>import numpy as np <br>import matplotlib.pyplot as plt</code>
            .col-lg-6: img(src='@/assets/curso/temas/tema2/3.png', alt='')
          .titulo-pasos.mb-3
            h4.mb-0 Paso 4
          p.mb-5 Se debe realizar la lectura de los archivos para el análisis: para el ejemplo trabajado el archivo en el cual están almacenados los datos es tipo CSV, y el comando necesario para realizar la lectura es la siguiente.
            br
            br
            <code class="codigo"> df=pd.read_csv('correosmaliciosos.csv') </code>
            br
            br
            <code class="codigo ">pd:</code>   es el nombre de la librería que identifica a pandas.
            br
            | #[code.codigo  read_csv:]   función que permite leer datos en formato CSV.
            br
            | #[code.codigo correosmaliciosos.csv:]   archivo con los datos en formato CSV y ubicado en la misma carpeta del Notebook, en caso de estar ubicado en una ruta diferente deberá especificar la ruta completa, por ejemplo: 'C:/proyecto/correosmalicisos.csv', lo que indica que su ubicación esta en la carpeta proyecto de la unidad local C: 
            br
            | #[code.codigo df=] variable que almacena la información leída del archivo y que de denomina dataframe, lo que significa que se tienen los datos en dos dimensiones determinados por filas y columnas, o instancias y atributos.
          .titulo-pasos.mb-3
            h4.mb-0 Paso 5 
          p.mb-5 Una vez importados los datos, se procede con las primeras visualizaciones; para ello, podemos hacer usos de los siguientes comandos.
              br
              |#[code.codigo df] 
              br
              br
              |Solamente usando la variable o dataframe en el cual se guardaron los datos podemos visualizar los cinco primeros y cinco últimos registros de la colección de datos.
              br
              br
              |Utilice el comando #[code.codigo df.head()], para visualizar los primeros 5 registros del conjunto de datos. En caso de requerir visualizar muchos más datos, coloque dentro del comando #[code.codigo df.head()], el número de registros que quiera ver, por ejemplo, si necesita visualizar los 10 primeros use el comando de la siguiente manera #[code.codigo df.head(10)].
          .row.justify-content-center.mb-5
            .col-lg-6: img(src='@/assets/curso/temas/tema2/4.png', alt='Visualización de los datos con df')
          p Utilice el comando  #[code.codigo df.head()],  para visualizar los primeros 5 registros del conjunto de datos.
          .row.justify-content-center.mb-5
            .col-lg-6: img(src='@/assets/curso/temas/tema2/5.png', alt='Comandos para visualizar los primeros cinco registros del total.')
          .titulo-pasos.mb-3
            h4.mb-0 Paso 6
          p Entendiendo cada uno de los datos presentes en la colección de datos, para profundizar más sobre cada uno de los datos el comando que podemos utilizar es el siguiente, #[code.codigo df.info()]. Con este comando podemos determinar el tipo de dato, la totalidad de datos por cada atributo, de igual manera total genera de registros y columnas y totalizado por cada tipo de dato.
          .row.justify-content-center.mb-3
            .col-lg-6: img(src='@/assets/curso/temas/tema2/6.png', alt='Captura de pantalla en la que se detallan los datos.')
          p.mb-5 Con el resultado se puede decir que tenemos una totalidad de 5572 registros y 5 columnas o atributos. Una columna de tipo numérica int64 denominada Unnamed: 0, 4 columnas de tipo object, denominadas fecha, salida, ciudad, y mensaje lo que quiere decir que son datos categóricos.
          .titulo-pasos.mb-3
            h4.mb-0 Paso 7
          p #[b Determinar datos nulos:] para realizar una revisión de todas las columnas determinando en cuales existe presencia de valores nulos o vacíos, utilice el comando,  #[code.codigo df.isnull().sum(), la función isnull()], ayuda a determinar cuántos valores son vacíos y con la función  #[code.codigo sum()], se realiza la suma de todos los valores nulos por cada columna, el resultado aplicado a nuestros datos es el siguiente.
          .row.justify-content-center.mb-3
            .col-lg-6: img(src='@/assets/curso/temas/tema2/7.png', alt='Captura de pantalla para analizar los datos nulos.')
          p.mb-5 El resultado nos muestra que en la columna mensaje hay una presencia de cuatro valores vacíos.
          .titulo-pasos.mb-3
            h4.mb-0 Paso 8 
          p Análisis individual, veamos el contenido de las columnas que hacen parte de la colección de datos, por ejemplo, se realizan agrupaciones para determinar la participación porcentual y se analiza el contenido dentro de la columna salida. Con el siguiente comando se puede establecer los tipos de datos que están presentes en esa columna y cuánto es el total por cada característica. 
            br
            br
            |#[code.codigo df['salida'].value_counts()]
          .row.justify-content-center.mb-5
            .col-lg-6: img(src='@/assets/curso/temas/tema2/8.png', alt='Comando que analiza cada característica de la columna salida.')
          .titulo-pasos.mb-3
            h4.mb-0 Paso 9 
          p Análisis gráfico, ahora veamos con el apoyo de los gráficos la participación porcentual de cada uno de valores, ejecutando el siguiente comando.
          p <code class="codigo "> import matplotlib.pyplot as pl <br><br> etiquetas = 'Normal', 'Malicioso' rebanada = (0, 0.1) <br><br>fig1, ax1 = plt.subplots() ax1.pie(df['salida'].value_counts(), explode=rebanada, labels=etiquetas, autopct='%1.1f%%', shadow=True, startangle=90) ax1.axis('equal') <br><br>plt.show()  </code>
          p El resultado que se debe obtener es el siguiente:
          .row.justify-content-center.mb-5
            .col-lg-6: img(src='@/assets/curso/temas/tema2/9.png', alt='Participación porcentual de cada etiqueta de la columna salida.')
          .titulo-pasos.mb-3
            h4.mb-0 Paso 10
          p Análisis de resultados, se puede decir que con la exploración realizada se encontró la siguiente información:
          .row.justify-content-center.mb-5
            .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
              table.text-center.text-center
                tr
                  td.fw-bold(style='border: 1px solid #8054f8; background-color: #ede7fb ') Total de registros
                  td(style='border: 1px solid #8054f8; background-color: #fcfcfc ') 5572
                tr
                  td.fw-bold(style='border: 1px solid #8054f8; background-color: #ede7fb ') Columnas
                  td(style='border: 1px solid #8054f8; background-color: #fcfcfc ') 5
                tr
                  td.fw-bold(style='border: 1px solid #8054f8; background-color: #ede7fb ') Nombre de columnas
                  td(style='border: 1px solid #8054f8; background-color: #fcfcfc ')  1. unanemed: 0
                    br
                    |2. fecha
                    br
                    |3. salida
                    br
                    |4. ciudad
                    br
                    |5. mensaje
                tr
                  td.fw-bold(style='border: 1px solid #8054f8; background-color: #ede7fb ') Valores nulos
                  td(style='border: 1px solid #8054f8; background-color: #fcfcfc ') Columna mensaje con 4 registros
                tr
                  td.fw-bold(style='border: 1px solid #8054f8; background-color: #ede7fb ') Tipos de columna
                  td(style='border: 1px solid #8054f8; background-color: #fcfcfc ') 1 numérica, 4 categóricas
                tr
                  td.fw-bold(style='border: 1px solid #8054f8; background-color: #ede7fb ') Variable objetivo
                  td(style='border: 1px solid #8054f8; background-color: #fcfcfc ') Salida
                tr
                  td.fw-bold(style='border: 1px solid #8054f8; background-color: #ede7fb ') Variables para el aprendizaje
                  td(style='border: 1px solid #8054f8; background-color: #fcfcfc ') fecha, ciudad, mensaje
                tr
                  td.fw-bold(style='border: 1px solid #8054f8; background-color: #ede7fb ') Participación porcentual de la variable de salida
                  td(style='border: 1px solid #8054f8; background-color: #fcfcfc ') 1. Normal (86.6%)
                    br
                    |2. Malicioso(13.4%)
</template>

<script>
export default {
  name: 'Tema2',
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
