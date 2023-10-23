<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 Es innegable que las empresas deben buscar estrategias para organizar cada uno de sus procesos, y esto implica el implementar modelos que les permitan organizar, clasificar y hacer usos de los datos para tomar decisiones adecuadas que lleven a cumplir los objetivos establecidos por la organización. Este espacio de formación está destinado a conocer, mediante ejemplos específicos, los pasos para realizar el análisis de información utilizando Anaconda, sus diferentes librerías y el modelo #[em Machine Learning] con Python.
      br
      br
      |Una breve revisión de los temas vistos, se encuentran en el siguiente esquema:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
