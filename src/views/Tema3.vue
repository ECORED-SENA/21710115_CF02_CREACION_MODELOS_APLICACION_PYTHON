<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Preprocesamiento de los datos con Python
    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/1.png', alt='')
      .col-lg-8(data-aos="fade-left") 
        p Con el análisis exploratorio de los datos, se va haciendo una idea de cuáles serán las variables objetivas y de cuáles serán los atributos para el aprendizaje; de igual manera, se podrá determinar las correcciones necesarias que se deben realizar a los datos.
          br
          br
          |Se debe recordar que el objetivo es realizar un modelo que permita la detección de mensajes de correo electrónico y los clasifique como mensajes normales o maliciosos. Con esta premisa y el análisis que se ha realizado previamente se procede con los pasos para el preprocesamiento de los datos, tal y como se exponen a continuación.
    .titulo-circulo.mb-4(data-aos="fade-right")
      h3 Preprocesamiento de los datos
    .row.justify-content-center.mb-5
      .col-lg-10
        div.p-5(style="background-color: #dbefed ")
          .titulo-pasos.mb-3
            h4.mb-0 Paso 1
          p.mb-5(data-aos='fade-right') Definir los atributos que harán parte del análisis: para este caso, aunque se tienen cuatro columnas el análisis se va a centrar en la columna mensaje como análisis para el entrenamiento y como variable objetivo o resultante será la columna salida.
            br
            br
            |Lo que quiere decir que solamente se debe dejar en la colección de datos esas dos columnas, para realizar este proceso se debe ejecutar el siguiente comando.
            br
            br
            | #[code.codigo df=df.drop(['Unnamed: 0', 'fecha', 'ciudad'], axis=1)]
            br
            br
            |Este comando permite eliminar del #[code.codigo dataframe] las columnas que no se quieren analizar solamente dejando nuestra variable objetivo y las de análisis. Si se ejecuta el comando #[code.codigo df.head()], se debe obtener el resultado de las primeras 5 filas, pero ya solamente de las dos columnas seleccionadas:
          .row.justify-content-center.mb-5
            .col-lg-6: img(src='@/assets/curso/temas/tema3/2.png', alt='Captura de pantalla al eliminar columnas.')
          .titulo-pasos.mb-3
            h4.mb-0 Paso 2
          p Eliminar valores nulos: en la exploración de los datos se encontró que en la columna mensaje existen registros nulos, de manera que para este caso se procede con la eliminación de estos registros, aunque esta no es la única decisión.
            br
            br
            |En este caso son pocos registros y tomaremos la decisión de quitarlos de nuestra colección de datos.
            br
            br
            |Para proceder ejecute las siguientes líneas de comando.
            br
            br
            | #[code.codigo df=df.dropna()]
            br
            br
            |Con este comando se eliminarán todas las filas si en cualquiera de sus atributos o columnas encuentra un valor nulo. Recordemos que el total de registros era de 5572, una vez ejecutado el comando el resultado obtenido es el siguiente, con el comando #[em shape] rápidamente se puede ver el total de registros y el total de columnas.
          .row.justify-content-center.mb-5
            .col-lg-6: img(src='@/assets/curso/temas/tema3/3.png', alt='Captura de pantalla al eliminar columnas.')
          .titulo-pasos.mb-3
            h4.mb-0 Paso 3
          p.mb-5 Para el ejemplo, la variable objetivo es un texto de tipo categórico y es necesario que se realice su transformación para que puedan ser procesados por los algoritmos de clasificación que implementaremos.
            br
            br
            |La variable que se utilizará para realizar el aprendizaje corresponde a los mensajes y para realizar la adecuación de estos es la librería #[b nltk]
            br
            br
            |<code class="codigo">import nltk<br>nltk.download("punkt")<br>import warnings warnings.filterwarnings('ignore')<br>from wordcloud import WordCloud</code>
            br
            br
            |Como primer análisis de los mensajes se creará una nube de palabras que permitan identificar cuáles de ellas hacen parte de los mensajes normales y cuáles de los mensajes maliciosos.
            br
            br
            |Primero se deben ver dos variables vacías de la siguiente manera.
            br
            br
            |<code class="codigo">palabrasNormales = '' <br> palabraMaliciosos = ''</code>
          .titulo-pasos.mb-3
            h4.mb-0 Paso 4
          p.mb-5 Posteriormente se debe recorrer el #[em dataframe] en busca de los mensajes que coincidan con las etiquetas Malicioso, de la siguiente manera.
              br
              br

              | <code class="codigo"> for mensaje in df[df['salida'] == 'Malicioso'].mensaje: </code>
              br
              | #[code.codigo.ps-4 texto = mensaje.lower()]
              br
              | #[code.codigo.ps-4 tokens = nltk.word_tokenize(texto)]
              br
              | #[code.codigo.ps-4 for palabras in tokens:]
              br
              | #[code.codigo.ps-4 palabrasMalicioso = palabrasMalicioso + palabras + ' ']
              br
              br 
              | <code class="codigo">for mensaje in df[df['salida'] == 'Malicioso'].mensaje:</code>   recorre cada elemento en los cuales la etiqueta de la columna salida coincide con Malicioso.
              br
              br 
              | #[code.codigo texto = mensaje.lower():]   convierte cada una de las coincidencias en minúscula.
              br
              br 
              | #[code.codigo tokens = nltk.word_tokenize(texto):]   separa el mensaje en una lista de todas las palabras que la conforman.
              br
              br 
              | #[code.codigo for palabras in tokens:]   recorre cada una de las palabras para ser almacenadas en una sola cadena de texto.
          .titulo-pasos.mb-3
            h4.mb-0 Paso 5
          p.mb-5 El objetivo de implementar dicho código es tomar todos los mensajes que coincidan con la etiqueta de salida malicioso, convertirlas a minúsculas para estandarizar todos los textos, luego separar cada palabra en una sola cadena de texto, que servirá para analizar cuál de las palabras tienen mayor representación.
            br
            br
            |Una vez con todas las palabras en una sola cadena de texto se procede a generar la nube de palabras.
            br
            br
            |<code class="codigo">cloudMalicioso = WordCloud(width=500, height=300,<br>background_color='white').generate(palabrasMalicioso)</code>
            br
            br
            |La variable la denominamos cloudMalicioso y con la librería WordCloud, generamos la nube de palabras con la variable que previamente ya hemos usado para tal fin denominada: palabrasMalicioso
            br
            br
            |Se procede con la gráfica implementando los siguientes códigos.
            br
            br
            |<code class="codigo ">plt.figure( figsize=(10,8))<br>plt.imshow(cloudMalicioso)<br>plt.axis("off")<br>plt.tight_layout(pad=0)<br>plt.show()</code>
            br
            br
            |El resultado de ejecutar las siguientes líneas de código será la representación de nube de palabras como se aprecia en la imagen.
          .row.justify-content-center.mb-5
            .col-lg-6: img(src='@/assets/curso/temas/tema3/4.png', alt='Captura de pantalla de una representación visual de nubes de palabras, como resultado del código ejecutado.')
          .titulo-pasos.mb-3
            h4.mb-0 Paso 6
          p Se realiza el mismo procedimiento, pero esta vez detectando los mensajes de los correos que están marcados como Normal, el código quedaría de la siguiente manera.
            br
            br
            <code class='codigo'> for mensaje in df[df['salida'] == 'Normal'].mensaje:
              br
              | #[span.ps-2 texto = mensaje.lower()]
              br
              | #[span.ps-2 tokens = nltk.word_tokenize(texto)]
              br
              | #[span.ps-2 for palabras in tokens:]
              br
              | #[span.ps-4 palabrasNormal = palabrasNormal + palabras + ' ']
              br
              br
              |cloudNormal = WordCloud(width=500, height=300,
              br
              |background_color='white').generate(palabrasNormal)
              br
              br
              |plt.figure( figsize=(10,8))
              br
              |plt.imshow(cloudNormal)
              br
              |plt.axis("off")
              br
              |plt.tight_layout(pad=0)
              br
              |plt.show()</code>  
            br
            br
            | Y la nube de palabras que se obtiene para este caso es la siguiente:
          .row.justify-content-center.mb-5
            .col-lg-6
              img.mb-4(src='@/assets/curso/temas/tema3/5.png', alt='Captura de pantalla de una representación visual de nubes de palabras, como resultado del código ejecutado en este paso.')
              p Se puede observar comparando las dos nubes de palabras que la que más se repite es la palabra free (gratis), en lo mensajes de correos marcados como maliciosos.
          .titulo-pasos.mb-3
            h4.mb-0 Paso 7
          P Ahora se deben convertir las etiquetas de salida: para que la máquina entienda los datos se procede con las transformaciones de las etiquetas normal y malicioso, la estrategia sería asignarle un número a cada una de estas de la siguiente manera:
          .row.justify-content-center.mb-5
            .col-lg-6
              table.text-center
                tr.fw-bold.bg-white
                  td(style='border: 1px solid #8054f8') Etiqueta
                  td(style='border: 1px solid #8054f8') Valor
                tr.bg-white
                  td(style='border: 1px solid #8054f8') Normal
                  td(style='border: 1px solid #8054f8') 0
                tr.bg-white
                  td(style='border: 1px solid #8054f8') Malicioso
                  td(style='border: 1px solid #8054f8') 1
          p Para realizar la transformación de estos datos ejecute la siguiente línea de comandos.
            br      
            br      
            |<code class="codigo">df = df.replace(['Normal','Malicioso'],[0, 1])
            br
            |df.head(10)</code>
            br
            br
            |El resultado se puede observar en la imagen
          .row.justify-content-center.mb-5
            .col-lg-6: img(src='@/assets/curso/temas/tema3/6.png', alt='Captura de pantalla en el que se evidencia la información de acuerdo a la etiqueta')
          p.mb-5 Como se aprecia en la columna salida ya se visualiza la información correspondiente a 0 para la etiqueta Normal y 1 para la etiqueta Malicioso.
          .titulo-pasos.mb-3
            h4.mb-0 Paso 8
          p.mb-4 Ahora se debe eliminar la información que no aporta nada para el modelo, de tal manera que se procede con la eliminación de los signos de puntuación, y de las palabras vacías, para ello se hace uso de la librería NTKL.
            br
            br

            |<code class="codigo">import nltk
            br
            |from nltk.corpus import stopwords
            br
            |import string
            br
            br
            |def eliminarPuntuacion(texto):
            br
            br
            |texto = texto.translate(str.maketrans('', '', string.punctuation))
            br
            |texto = [word for word in texto.split() if word.lower() not in
            br
            |stopwords.words('english')]
            br
            br
            |return " ".join(texto)
            br
            br
            |df['mensaje'] = df['mensaje'].apply(eliminarPuntuacion)
            br
            |df</code>
            br
            br
            |El resultado se puede ver comparando los resultados antes y después de la depuración:
          .row.justify-content-center.mb-5
            .col-lg-6: img(src='@/assets/curso/temas/tema3/7.png', alt='Captura de pantalla al hacer uso de la librería NTKL')



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
