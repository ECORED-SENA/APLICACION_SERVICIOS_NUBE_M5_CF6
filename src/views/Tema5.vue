<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Comandos de Docker

    p(data-aos="fade-in") En la siguiente tabla 1 se muestran algunos de los comandos más utilizados en el proceso de gestión de imágenes y contenedores usando la plataforma Docker.

    p.mt-5(style="border-left:4px #4DD0E1 solid;padding-left:8px;") #[strong Tabla 1]  Comandos de Docker

    .row.mt-5
      .col-md-8
        .tabla-a.color-acento-botones(data-aos="fade-right")
          table(style="max-width: 100%;width: 100%;min-width: 100%;")
            thead
              tr
                th Comando
                th Significado
            tbody
              tr
                td docker ps
                td Muestra todos los contenedores en ejecución.
              tr
                td docker ps -a
                td Muestra todos los contenedores en ejecución y detenidos.
              tr
                td docker start
                td Inicia un contenedor.
              tr
                td docker stop
                td Detiene un contenedor.
              tr
                td docker attach
                td Se conecta a un contenedor que está en ejecución.
              tr
                td docker run
                td Crea y ejecuta un contenedor.
              tr
                td docker rm
                td Elimina un contenedor.
              tr
                td docker images
                td Muestra todas las imágenes.
              tr
                td docker build
                td Crea una imagen de un tarball.
              tr
                td docker search
                td Busca imágenes disponibles en Docker Hub para reutilización.
              

      .col-md-4
        figure.p-3
          img.imagen_flotante_animada(src="@/assets/curso/tema5/1.svg")



</template>

<script>
export default {
  name: 'Tema5',
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
