<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Crear el modelo
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
        p Después de la exploración y el preprocesamiento, se continúa con la construcción del modelo, como se puede ver, la variable con la que aprenderá el modelo se basa en texto que ya se ha dividido en palabras y que se debe empezar a cuantificar para poder pasar la información para que el modelo lo pueda entender.
          br
          br
          |Como se han venido desarrollando todas las unidades se realizará una serie de pasos que permitan en este caso la construcción de un modelo, para conocerlos revise con atención el recurso propuesto:
      .col-lg-4.col-6: img(src='@/assets/curso/temas/tema4/1.png', alt='')
    .mn.p-5(style="background-color: #dbefed ")
      .tarjeta.bg-white.p-5
        SlyderA(tipo='b')
          .row.justify-content-center.mb-5
            .col-lg-6.mb-lg-0.mb-3
              h4(style="color: #8054F8") Paso 1 Separación de datos

              p Se deben separar los datos en los datos entrenamiento y las clases de la siguiente manera, el #[em dataframe] mensaje corresponde a las instancias y atributos, mientras que las etiquetas a las clases.

                br
                br
                |<code class="codigo"> mensaje = pd.DataFrame(df['mensaje'])
                br
                |etiquetas = pd.DataFrame(df['salida'])

                br
                br
                |print(mensaje.head())
                br
                |print(etiquetas.head())</code>

                br
                br
                |El resultado es un #[em dataframe] independiente en el que se dividen los datos de aprendizaje de las clases, como se observa en la imagen.
            .col-lg-6
              img(src='@/assets/curso/temas/tema4/2.png', alt='Captura de pantalla en la que se muestra el resultado de un dataframe independiente.').mb-4
              p Separación de los datos
          .row.justify-content-center.mb-5
            .col-lg-6.mb-lg-0.mb-3
              h4(style="color: #8054F8") Paso 2 Conversión de palabras a vectores

              p Lo que se quiere con este procedimiento es realizar el recuento de los #[em tokens] o palabras que se obtienen de los mensajes de correo electrónico, el objetivo es crear una matriz que realice un recuento por cada una de las palabras y las construya como un atributo. Para obtener este resultado debe ejecutar los siguientes comandos.
                br
                br
                |<code class="codigo">from sklearn.feature_extraction.text import TfidfVectorizer
                br
                |vectorizer = TfidfVectorizer() vector = vectorizer.fit_transform(df['mensaje']) vector.shape</code>
                br
                br
                |El resultado que se obtiene lo puede observa en la imagen.
            .col-lg-6
              img(src='@/assets/curso/temas/tema4/3.png', alt='Captura de pantalla en la que se muestra el resultado de un dataframe independiente.').mb-4
              p Convertir cantidades de palabras.
          .row.justify-content-center.mb-5
            .col-lg-6.mb-lg-0.mb-3
              h4(style="color: #8054F8") Paso 3 Objetivo encontrado
              p Ya se ha logrado cuantificar cada una de las palabras del texto de tal manera que estos serán los datos con los que entrenaremos el modelo. Lo que resta es almacenar esta variable a una que servirá para el siguiente paso del entrenamiento, para el ejemplo la denominaremos #[B instancias.]
            .col-lg-6
              img(src='@/assets/curso/temas/tema4/4.svg', alt='Captura de pantalla en la que se muestra el resultado de un dataframe independiente.').mb-4
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.1 Entrenamiento
    p Se puede decir que se tiene la base para empezar a realizar el entrenamiento de los datos, toda vez que ya se sabe cuáles son los datos de entrada y las clases, y ambas se encuentran en valores numéricos tal como se requiere. En el siguiente recurso se dan a conocer algunas recomendaciones importantes para realizar el entrenamiento:
    .row.justify-content-center.mb-5
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta-icono.p-4.h-100
          .contenido
            .row.justify-content-center.mb-5
              .col-lg-5.col-3: img(src='@/assets/curso/temas/tema4/5.svg', alt='')
            h5 Selección de datos
            p Seleccionar los datos de manera aleatoria. No se deben escoger datos que sean continuos o de manera organizada. 
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta-icono.p-4.h-100
          .contenido
            .row.justify-content-center.mb-5
              .col-lg-5.col-3: img(src='@/assets/curso/temas/tema4/6.svg', alt='')
            h5 Separar los datos
            p Reserve una muestra que por lo general equivale al veinte por ciento de los datos, los cuales debe asegurarse que no se utilizaron en el aprendizaje.
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta-icono.p-4.h-100
          .contenido
            .row.justify-content-center.mb-5
              .col-lg-5.col-3: img(src='@/assets/curso/temas/tema4/7.svg', alt='')
            h5  Entrenar los datos
            p Seleccione el ochenta por ciento de los datos para realizar el entrenamiento de los datos.
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta-icono.p-4.h-100
          .contenido
            .row.justify-content-center.mb-5
              .col-lg-5.col-3: img(src='@/assets/curso/temas/tema4/8.svg', alt='')
            h5 Selección de algoritmo
            p De acuerdo con el requerimiento, seleccione el algoritmo o algoritmos de clasificaciones que mejor le vayan dependiendo del tipo de problema a resolver.
    p.mb-5(data-aos='fade-right') Para realizar el entrenamiento seguir cada uno de los siguientes pasos:
    .row.justify-content-center.mb-5
      .col-lg-10
        div.p-5(style="background-color: #dbefed ")
          .titulo-pasos.mb-5
            h4.mb-0 Paso 1
          p.mb-5(data-aos='fade-right') Como primer paso se procede a seleccionar los datos de entrenamiento y de prueba, para ello haga usos de los siguientes comandos.
            br
            br
            |<code class="codigo">from sklearn.model_selection import GridSearchCV,train_test_split,StratifiedKFold,cross_val_score,learning_curve
            br
            br
            |X_train, X_test, y_train, y_test = train_test_split(instancias, df['salida'], test_size=0.2, random_state=131)</code>
            br
            br
            |· #[b X_train:] corresponde a los datos de entrenamiento.
            br
            |· #[b X_test:] Aquí se guardan los datos que son separados para realizar las pruebas.
            br
            |· #[b y_train:] etiquetas de salida correspondientes a las instancias de entrenamiento.
            br
            |· #[b y_test:] etiquetas de salida que corresponde a las instancias seleccionadas de entrenamiento.
            br
            |· #[b instancias:] datos preparados para el entrenamiento.
            br
            |· #[b df['salida']:] etiquetas o clases de salida de la clasificación de las instancias.
            br
            |· #[b test_size:] valor entre 0 y 1 que indica cuál es el porcentaje de datos de prueba que serán separados, para nuestro ejemplo será del 20 por ciento, es decir 0.2.
            br
            |· #[b random_state:] este parámetro se utiliza para realizar la mezcla de los datos aleatoriamente tal como se recomienda anteriormente, el número corresponde al número brde llamados  
            br           
            br           
            |de la función y la mezcla se realiza antes de la división de los datos.
          .titulo-pasos.mb-5
            h4.mb-0 Paso 2
          p Lo que sigue es la selección del algoritmo de clasificación, en este caso se utilizará el de Naive Bayes, y Regresión Logística.
            br
            br
            |Se importan las librerías necesarias para poder implementarlas.
            br
            |<code class="codigo">from sklearn.naive_bayes import MultinomialNB
            br
            |from sklearn.linear_model import LogisticRegression</code>
            br
            br
            |Para utilizar el algoritmo de Naive Bayes, se le asigna la configuración a la variable NB,
            br
            |#[code.codigo NB = MultinomialNB(alpha=0.5)]
            br
            br
            |Tener en cuenta el siguiente parámetro.
            br
            |#[code.codigo alpha=]   parámetro de suavizado de Laplace si se omite por defecto asignaría 1, para nuestro caso se establecerá en 0.5
            br
            br
            |Para el algoritmo de regresión logística se utilizará esta configuración, que se almacenará en la variable RL.
            br
            |#[code.codigo RL = LogisticRegression(solver='liblinear', penalty='l1')]
            br
            br
            |#[b Solver:] algoritmo para utilizar en el problema de optimización. El valor predeterminado es 'lbfgs'. Para elegir un solucionador, es posible que se desee considerar los siguientes aspectos:
            br
            br
            |· Para conjuntos de datos pequeños, 'liblinear' es una buena opción, mientras que 'sag' y 'saga' son más rápidos para conjuntos grandes;
            br
            |· Para problemas multiclase, solo 'newton-cg', 'sag', 'saga' y 'lbfgs' manejan la pérdida multinomial;
            br
            |· 'liblinear' se limita a esquemas de uno contra el resto.
          .titulo-pasos.mb-5
            h4.mb-0 Paso 3
          p Se utilizan los siguientes comandos para realizar el entrenamiento con el algoritmo de Naive Bayes usar los siguientes comandos.
            br
            |#[code.codigo NB.fit(X_train,y_train)]
            br
            br
            |Para realizar el entrenamiento con el algoritmo de Regresión Logística, de igual manera use el mismo comando, pero con su respectiva configuración almacenada en la variable RL
            br
            |#[code.codigo RL.fit(X_train,y_train)]
    p Todos estos pasos se ven unificados de la siguiente manera:
    .row.justify-content-center.mb-3
      .col-lg-10 
        .tarjeta.color-acento-contenido.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema4/9.svg', alt='')
            .col-lg-10
              p.text-white Importación de las librerías:
                br
                | #[b from sklearn.naive_bayes import MultinomialNB]
                br
                | #[b from sklearn.linear_model import LogisticRegression]
    .row.justify-content-center.mb-3
      .col-lg-10 
        .tarjeta.color-acento-contenido.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema4/10.svg', alt='')
            .col-lg-10
              p.text-white Configuración de los parámetros de los algoritmos de clasificación:
                br
                |#[b NB = MultinomialNB(alpha=0.2)]
                br
                |#[b RL = LogisticRegression(solver='liblinear', penalty='l1')]
    .row.justify-content-center.mb-5
      .col-lg-10 
        .tarjeta.color-acento-contenido.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema4/11.svg', alt='')
            .col-lg-10
              p.text-white Entrenamiento:
                br
                |#[b NB.fit(X_train,y_train)]
                br
                |#[b RL.fit(X_train,y_train)]
    Separacion 
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.2 Evaluación 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema4/12.png', alt='')
      .col-lg-8 
        p En esta etapa del proceso se debe realizar la evaluación de los modelos. Una vez entrenados se debe probar qué tan eficientes han sido dichos modelos, es importante recordar que en principio se separó un conjunto de datos correspondientes al veinte por ciento, y son estos los que ayudarán a probar el modelo y ver qué tan eficiente es.
          br
          br
          |Para el proceso de evaluación se debe seguir algunos pasos para conocerlos, revise con atención el siguiente recurso educativo:
    .row.justify-content-center.mb-5
      .col-lg-10
        div.p-5(style="background-color: #dbefed ")
          .titulo-pasos.mb-5
            h4.mb-0 Paso 1
          p.mb-5(data-aos='fade-right') Se deben importar las librerías necesarias para realizar las métricas.
            br
            |#[code.codigo from sklearn import metrics]          
          .titulo-pasos.mb-5
            h4.mb-0 Paso 2
          p Realizar la predicción de los datos con el modelo entrenado, primero con Naive Bayes y posteriormente con regresión logística, recordemos que los modelos son NB y RL respectivamente; para realizar la predicción, utilice los datos de prueba y ejecute el siguiente comando.
            br
            br
            |#[code.codigo y_pred_NB = NB.predict(X_test)]
            br
            br
            |Los resultados se almacenan en y_pred_NB, y para el modelo de regresión logística realice el mismo procedimiento, pero almacenando en una variable diferente.
            br
            br
            |#[code.codigo y_pred_RL = RL.predict(X_test)]
          .titulo-pasos.mb-5
            h4.mb-0 Paso 3
          p Las salidas de la predicción del modelo entrenado se deben comparar con las salidas correctas para ese conjunto de datos, y de esta manera saber el porcentaje de aciertos para cada uno de los modelos. La comparativa se realiza implementando las siguientes líneas de código.
            br
            br
            |Para el modelo de Naive Bayes, utilice el siguiente comando:
            br
            |#[code.codigo metrics.accuracy_score(y_test, y_pred_NB)]
            br
            br
            |Y el resultado que se obtiene se aprecia en la siguiente imagen.
          .row.justify-content-center.mb-5
            .col-lg-6: img(src='@/assets/curso/temas/tema4/13.png', alt='Porcentaje de aciertos para el modelo utilizando Naive Bayes')
          .titulo-pasos.mb-5
            h4.mb-0 Paso 4
          p De igual manera se debe comparar en el modelo de regresión logística, cuál es resultado obtenido, ejecutando el mismo comando así:
          .row.justify-content-center.mb-5
            .col-lg-6: img(src='@/assets/curso/temas/tema4/14.png', alt='Captura de pantalla en el que muestra el mdelo de regresión logística.')
          p Como se indicó en las recomendaciones, se dejaron los datos para las pruebas y efectivamente sirvieron para validar la efectividad del modelo, el resultado arrojado es del 98 % donde se utilizó el algoritmo de clasificación Naive Bayes, mientras que con el modelo donde se implementó regresión logística se obtuvo un porcentaje de acierto del 95 %.
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.3 Predicciones
    .row.justify-content-center.mb-5
      .col-lg-9.mb-lg-0.mb-3(data-aos="fade-right")
        p Con los modelos evaluados se procede a realizar las predicciones, esta vez con entradas completamente nuevas. Con el aprendizaje realizado el modelo debería estar en la capacidad de clasificar los datos en correos electrónicos normales o maliciosos.
          br
          br
          |Es importante aclarar que los nuevos datos que le pasen al modelo deben estar relacionados con la temática bajo la cual este modelo fue entrenado, o sea con mensajes de correos electrónicos.
          br
          br
          |Para realizar las predicciones se tomará el modelo con mayor efectividad que arrojó la evaluación, que sería el que se entrenó con el algoritmo de clasificación Naive Bayes con un porcentaje del 98 por ciento.
          br
          br
          |Se establecerán múltiples entradas y para este fin se deben seguir los pasos expuestos en el recurso educativo:
      .col-lg-3.col-6: img(src='@/assets/curso/temas/tema4/15.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-10
        div.p-5(style="background-color: #dbefed ")
          .titulo-pasos.mb-5
            h4.mb-0 Paso 1
          p.mb-5(data-aos='fade-right') #[b Definir las entradas.]
            br
            br
            |<code class="codigo">Entrada1=['free mobile now']
            br
            |Entrada2=['Sorry Mr James']
            br
            |Entrada3=['I need your help']
            br
            |Entrada4=['call me text']</code>
          .titulo-pasos.mb-5
            h4.mb-0 Paso 2
          p #[b Crear una función para realizar las predicciones], de la siguiente manera
              br
              br
              |<code class="codigo">def clasificar(resultado):
              br
              |if resultado == 1:
              br
              |print ("Este es un Mensaje Malicioso")
              br
              |else: print ("Es un Mensaje Normal")</code>
              br
              br
              |La función espera por un resultado en caso de ser 1 lo clasifica como mensaje malicioso de lo contrario como mensaje normal.
          .titulo-pasos.mb-5
            h4.mb-0 Paso 3
          p #[b Vectorizar las entradas nuevas, así:]
            br
            br
            |#[code.codigo salida=vectorizer.transform(Entrada1)]
            br
            br
            |Se deben transformar los datos y dejarlos de igual manera de como se entrenaron.
          .titulo-pasos.mb-5
            h4.mb-0 Paso 4
          p #[b Predecir y mostrar el resultado] 
            br
            | Realizar la predicción con la salida de los datos vectorizados y evaluar el resultado con la función de clasificación. resultado = NB.predict(salida) print('Mensaje: ',Entrada1) clasificar(resultado) El resultado para la primera entrada se aprecia en la imagen
          .row.justify-content-center.mb-5
            .col-lg-8: img(src='@/assets/curso/temas/tema4/16.png', alt='Captura de pantalla en la que se evidencia la predicción de entradas.')
          .titulo-pasos.mb-5
            h4.mb-0 Paso 5
          p #[b Predecir más entradas.]
            br
            br
            |Realizar más pruebas para verificar la efectividad del modelo, las demás entradas de nuestro ejemplo dan como resultado la información de la imagen.
          .row.justify-content-center.mb-5
            .col-lg-8: img(src='@/assets/curso/temas/tema4/17.png', alt='Captura de pantalla en la que se evidencia la predicción de entradas.')
          .titulo-pasos.mb-5
            h4.mb-0 Paso 6
          p Finalmente, el código completo del proceso de predicción es el siguiente.
          p <code class="codigo">Entrada1=['free mobile now']
            br
            |Entrada2=['Sorry Mr James']
            br
            |Entrada3=['I need your help']
            br
            |Entrada4=['call me text']
            br
            br
            |def clasificar(resultado):
            br
            |if resultado == 1:
            br
            |print ("Este es un Mensaje Malicioso")
            br
            |else:
            br
            |print ("Es un Mensaje Normal")

            br
            br
            |salida=vectorizer.transform(Entrada1)
            br
            |resultado = NB.predict(salida)
            br
            |print('Mensaje 1: ',Entrada1)
            br
            |clasificar(resultado)
            br
            br
            |salida=vectorizer.transform(Entrada2)
            br
            |resultado = NB.predict(salida)
            br
            |print('Mensaje 2: ',Entrada2)
            br
            |clasificar(resultado)
            br
            br
            |salida=vectorizer.transform(Entrada3)
            br
            |resultado = NB.predict(salida)
            br
            |print('Mensaje 3: ',Entrada3)
            br
            |clasificar(resultado)
            br
            br
            |salida=vectorizer.transform(Entrada4)
            br
            |resultado = NB.predict(salida)
            br
            |print('Mensaje 4: ',Entrada4)</code>
    Separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.4 Evaluar el modelo y análisis de errores
    .row.justify-content-center.mb-5
      .col-lg-2.col-6.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema4/18.svg', alt='')
      .col-lg-8
        p Finalmente, para analizar el modelo en cuanto al número de errores que se pueden presentar, ya sea porque se realiza la clasificación de correos electrónicos maliciosos como normales, o viceversa, se utilizará la técnica denominada matriz de confusión.
          br
          br
          |Para implementar dicha técnica se deben seguir los pasos expuestos en el recurso propuesto:
    .row.justify-content-center.mb-5
      .col-lg-10
        div.p-5(style="background-color: #dbefed ")
          .titulo-pasos.mb-5
            h4.mb-0 Paso 1. Importar las librerías
          p.mb-5(data-aos='fade-right') Para realizar la implementación usaremos la librería que nos ayuda con el proceso, que es la primera, y la segunda librería que nos permitirá las visualizaciones gráficas.
            br
            br
            |<code class="codigo">from sklearn.metrics import confusion_matrix
            br
            |import seaborn as sns</code>
          .titulo-pasos.mb-5
            h4.mb-0 Paso 2. Realizar la predicción con las pruebas
          p Procedemos nuevamente a realizar las predicciones con nuestro conjunto de datos de prueba, ya que son los indicados para generar un análisis que permita determinar qué tantos errores se presentan en nuestro modelo.

            br
            br
            |Para realizar este procedimiento utilice las siguientes líneas de código que le permitirán calcular las predicciones con el modelo y también asignar las predicciones correctas.

            br
            br
            |<code class="codigo">y_pred_NB = NB.predict(X_test)
            br
            |y_correctas_NB = y_test</code>

            br
            br
            |Como se aprecia, la primera línea corresponde a las predicciones con el modelo entrenado usando el algoritmo Naive Bayes, pasándole como entradas los datos de prueba que fueron separados, y la segunda línea simplemente le reasignamos a una nueva variable los valores de salida correcto de los datos de prueba. 
          .titulo-pasos.mb-5
            h4.mb-0 Paso 3. Analizar los errores
          p Con los datos de las salidas de las predicciones y las salidas correctas se aplica el método de matriz de confusión, de la siguiente manera.
            br
            br
            |#[code.codigo MC = confusion_matrix(y_correctas_NB, y_pred_NB)]

          .titulo-pasos.mb-5
            h4.mb-0 Paso 4. Graficar resultados
          p Implemente las salidas de manera gráfica para entender mucho mejor los datos resultantes; para ello, utilice los siguientes comandos.
            br
            br
            | <code class="codigo">f, ax = plt.subplots(figsize =(5,5))
            br
            |sns.heatmap(MC,annot = True,linewidths=0.5,linecolor="blue",fmt = ".0f",ax=ax)
            br
            |plt.xlabel("y_pred_NB")
            br
            |plt.ylabel("y_correctas_NB")
            br
            |plt.show()</code>
          .titulo-pasos.mb-5
            h4.mb-0 Paso 5. Analizar gráfico
          p El resultado que arroja la técnica de matriz de confusión se puede observar en la siguiente gráfica, en la cual existe un equilibrio, ya que las veces en las que predijo correos normales como #[b maliciosos] es de 10, y en las que predijo correos #[b maliciosos] como normales de 8.
          .row.justify-content-center.mb-5
            .col-lg-7
              img(src='@/assets/curso/temas/tema4/19.png', alt='Gráfico para análisis de errores.')
              figcaption Matriz de confusión 
          .titulo-pasos.mb-5
            h4.mb-0 Paso 6. Otros cálculos
          p Para realizar los demás cálculos utilice los siguientes comandos.
          p #[b Para calcular la exhaustividad utilice:]
            br
            | <code class="codigo">from sklearn.metrics import recall_score 
            br
            |recall_score(y_correctas_NB, y_pred_NB, average=None) 
            br
            |Resultado: array([0.99183673, 0.92537313])</code>
          p #[b Para Calcular la precisión utilice:]
            br
            | <code class="codigo">from sklearn.metrics import 
            br
            |precision_score 
            br
            |precision_score(y_correctas_NB, y_pred_NB, average=None)</code>
          p #[b Resultado:]
            br
            | <code class="codigo">array([0.9898167 , 0.93939394])</code>
          p #[b Para el cálculo de la métrica F1]
            br
            | <code class="codigo">from sklearn.metrics import f1_score 
            br
            |f1_score(y_correctas_NB, y_pred_NB, average=None)</code>
          p #[b Resultado:]
            br
            | <code class="codigo">array([0.99082569, 0.93233083])</code>
    p.mb-5(data-aos='fade-right') Se ha llegado al final de este espacio de formación en el que se ha diseñado un modelo de aprendizaje supervisado utilizando dos algoritmos de clasificación, Naive Bayes y el de regresión logística, aunque los dos dieron muy buenos resultados, el que más precisión obtuvo fue el modelo en el cual se utilizó Naive Bayes, con un 98 por ciento de aciertos, lo que lo convierte en un algoritmo ideal para este tipo de problemas donde las variables de salida son de tipo binario.



























</template>

<script>
export default {
  name: 'Tema4',
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
