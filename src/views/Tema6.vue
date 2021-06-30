<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 6
      h1 Imágenes y contenedores (containers)

    .cajon.color-acento-botones.p-4.mb-4.mt-3.caja_escalada_hover.row.fade-in-image.caja_flotante_rosada(data-aos="fade-up")
      .row
        .col-auto.mb-3
          figure
            img.imagen_flotante_animada(src="@/assets/curso/tema3/primera.png")
        .col.mt-3
          p Una imagen es una especie de plantilla que usa el motor de Docker para la construcción de un contenedor es un archivo del sistema privado solo para contenedores y provee todos los archivos y códigos que el contenedor necesita. A su vez, un contenedor de Docker se puede considerar como la instancia donde se implementa todo lo descrito en una imagen de Docker, es decir, un contenedor se construye a partir de una imagen. Si se tuviera que hacer un paralelo con sistemas de virtualización con hipervisores, una imagen sería el equivalente a lo que representaría un archivo iso y un contenedor sería el equivalente a una máquina virtual.

    p.mt-5(style="border-left:4px #4DD0E1 solid;padding-left:8px;") #[strong Figura 6] Equivalencia de elementos entre modelos con hipervisores y contenedores

    .col-md-8.m-auto.mt-5
      figure(data-aos="fade-up")
        img.caja_escalada_hover(src="@/assets/curso/tema6/1.svg")

    p.mt-5 A continuación se deberá realizar un ejemplo de imágenes y contenedores.

    .tarjeta.text-white.p-5.mt-5.caja_flotante_azul(data-aos="fade-up" style="background: linear-gradient(#0f3664,rgb(57 131 199));")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema6/2.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-0 Ejemplo de imágenes y contenedores.
              p Este PDF nos muestra cómo crear en nuestra máquina local un servidor de ubuntu con mysql usando la tecnología de contenedores.
            .col-sm-auto
              a.boton.boton--b.color-acento-secundario(:href="obtenerLink('downloads/imgycontenedores.pdf')" target="_blank")
                span(style="color: #12263F !important;") Descargar
                i.fas.fa-file-download(style="color: #12263F !important;")

  

</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({}),
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
<style lang="sass">
.image_floating
  filter: drop-shadow(19px 14px 5px #e4e4e4)
.titulo-principal__numero span
  color: #31326F !important
.titulo-principal__numero
  background-color: #FFCA28 !important

@keyframes float
  0%
    filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2))
    transform: translatey(0px)
  50%
    filter: drop-shadow(0 25px 15px rgba(0,0,0,0.1))
    transform: translatey(-20px)
  100%
    filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2))
    transform: translatey(0px)
.imagen_flotante_animada
  filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2))
  transform: translatey(0px)
  animation: float 6s ease-in-out infinite
.caja_flotante
  -webkit-box-shadow: -11px 10px 0px -1px #f3f3f3
  -moz-box-shadow: -11px 10px 0px -1px #f3f3f3
  box-shadow: -11px 10px 0px -1px #f3f3f3
.caja_escalada_hover
  transition: transform 0.5s linear
  -o-transition: transform 0.5s linear
  -ms-transition: transform 0.5s linear
  -moz-transition: transform 0.5s linear
  -webkit-transition: transform 0.5s linear
.caja_escalada_hover:hover
  transition: transform .5s ease
  transform: scale(1.06)
.fade-in-image
  animation: fadeIn 3s
  -webkit-animation: fadeIn 3s
  -moz-animation: fadeIn 3s
  -o-animation: fadeIn 3s
  -ms-animation: fadeIn 3s
@keyframes fadeIn
  0%
    opacity: 0
  100%
    opacity: 1
.tarjeta--azul
  background-color: #DBFBFF !important
.tarjeta-avatar-b > img
  min-width: 16%
  max-width: 16%
  top: -9%
.caja_flotante_azul
  box-shadow: -11px 10px 0px -1px #f1fcfd
.caja_flotante_rosada
  box-shadow: -11px 10px 0px -1px #fff6f6
.cajon.color-acento-botones
  background-color: #FFE7C4
.anexo *
  color: #12263f !important
.card
  border:0 !important
.card-header
  background-color: #F3F9FF !important
.nav-link
  color: #1565C0 !important
  background-color: #f3f9ff !important
  border-top: 1px #B2E6FF solid !important
  border-radius: 0px !important
.nav-pills
  border-top: 9px #B4E2F8 solid !important
.nav-link:first-child
  border-top:0px !important
.nav-link.active
  font-weight:bold !important
.card-body
  padding: 0px
</style>
