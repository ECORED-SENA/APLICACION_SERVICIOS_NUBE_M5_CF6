<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 7
      h1 DockerFile

    .cajon.color-acento-botones.p-4.mb-4.mt-3.caja_escalada_hover.row.fade-in-image.caja_flotante_rosada(data-aos="fade-up")
      .row
        .col-auto.mb-3
          figure
            img.imagen_flotante_animada(src="@/assets/curso/tema3/primera.png")
        .col.mt-3
          p Es un archivo de texto plano en el que se listan instrucciones que se pasan al motor de Docker para la automatización del proceso de construcción de imágenes y contenedores. Este archivo puede incluir instrucciones como las que se indican en la siguiente tabla.

    p.mt-5(style="border-left:4px #4DD0E1 solid;padding-left:8px;") #[strong Tabla 2] Sentencias comunes en un archivo Dockerfile.

    .tabla-a.color-acento-botones.mt-5(data-aos="fade-right")
      table(style="max-width: 100%;width: 100%;min-width: 100%;")
        thead
          tr
            th Instrucción
            th Significado
        tbody
          tr
            td FROM
            td Le indica la imagen inicial a descargar y a partir de la cual se espera montar el contenedor a construir. Esta sentencia es obligatoria ya que todos los contenedores se construyen de imágenes.
          tr
            td MAINTAINER
            td Nombre de la persona que está creando el archivo
          tr
            td RUN
            td Ejecución de comandos específicos sobre la imagen descargada en el FROM
          tr
            td EXPOSE
            td Apertura de puertos en el contenedor
          tr
            td CMD
            td Fija un comando o proceso que se ejecutará cada vez que se ejecute un contenedor desde la nueva imagen

    p.mt-5 Para información más detallada, en el material complementario se encuentran los enlaces para la documentación de referencia de Docker sobre archivos Dockerfile y la documentación de Dockerfile para Windows.

    .tarjeta.text-white.p-5.mt-5.caja_flotante_azul(data-aos="fade-up" style="background: linear-gradient(#0f3664,rgb(57 131 199));")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema6/2.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-0 Cómo automatizar el proceso de construcción y configuración de una imagen utilizando un archivo Dockerfile
              p.mt-2 Este PDF muestra cómo automatizar el proceso de construcción y configuración de una imagen utilizando un archivo DockerFile en lugar de ejecutar comandos manualmente.
            .col-sm-auto
              a.boton.boton--b.color-acento-secundario(:href="obtenerLink('downloads/dockerFile.pdf')" target="_blank")
                span(style="color: #12263F !important;") Descargar
                i.fas.fa-file-download(style="color: #12263F !important;")

    p.mt-5(data-aos="fade-in") Para este caso se creará una imagen con sistema operativo ubuntu, con un servidor apache funcionando por el puerto 80. En el caso de Windows puede utilizar el editor de texto que considere más conveniente, pero deberá tener en cuenta la ubicación del archivo, este deberá llamarse Dockerfile y adicionalmente este archivo no puede tener ninguna extensión.

  

</template>

<script>
export default {
  name: 'Tema7',
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
