<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5(data-aos='fade-right') Le damos la bienvenida a este componente formativo denominado #[em Machine Learning] con Python, para comenzar el recorrido por el mismo, conozca en qué consiste el #[em Machine Learning] y por qué la pertinencia de Python.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/noMy4-zjR9Q?si=XWsS7spG-Y-ZzMRa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. #[em Machine Learning con Python]
    p.mb-5(data-aos='fade-right') El objetivo de este componente es plantear un ejemplo parecido a lo que un analista de datos enfrentaría, partiendo de una colección de datos con cierta preparación. Es importante recordar que la preparación de los datos es uno de los procesos mediante el cual se requiere mayor cantidad de tiempo y es una etapa previa a la utilización de técnicas de #[em Machine Learning.]
    .cajon.color-acento-contenido.p-4.mb-4
      p Con el desarrollo del presente, entonces, se busca crear un modelo para predecir con cierta efectividad el comportamiento que tomarían nuevas entradas, para esto se debe tener claridad frente al problema, explorar los datos, establecer métricas para evaluar los resultados y a partir de allí establecer estrategias para ajustar y mejorar el modelo si es necesario, en este orden de ideas se suministrarán las bases para aplicar dicho modelo en la solución de problemas reales del contexto.
      
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
