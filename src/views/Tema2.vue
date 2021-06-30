<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Hipervisor vs contenedores

    .cajon.color-acento-botones.p-4.mb-4.mt-3.caja_escalada_hover.row.fade-in-image.caja_flotante_rosada(data-aos="fade-up")
      p Existen similitudes y diferencias entre la forma cómo estas dos tecnologías facilitan el proceso de virtualización de aplicaciones, razón por la cual es más conveniente una u otra dependiendo del contexto articular y las necesidades establecidas por la organización.

    br
    .row.mt-2
      .col-md-4.mt-2
        figure
          img.imagen_flotante_animada.p-3(src="@/assets/curso/tema2/1.svg")
      .col-md-8
        p(data-aos="fade-left") En ambos casos se requiere de una máquina host que contendrá la infraestructura física con todos los dispositivos y recursos necesarios, sobre los cuales se monta un sistema operativo que puede ser de cualquier tipo y luego sobre este sistema operativo se monta un software que en el caso del esquema de máquinas virtuales tradicionales será un hypervisor y en el esquema de contenedores será un gestor de contenedores.

        p.mt-3(data-aos="fade-left") En las máquinas virtuales para poder ejecutar una aplicación específica se requiere de librerías y códigos binarios de los cuales dependa y adicionalmente requiere el montaje de un sistema operativo invitado. Así, por ejemplo, si la aplicación a ejecutar en la máquina virtual fue construida con Visual Studio .Net es necesario también montar en la máquina virtual el sistema operativo Windows, si la aplicación a ejecutar en la máquina virtual fue construida en Swift requiere entonces la instalación del sistema operativo MacOS y así sucesivamente en todas las máquinas virtuales se debe correr el sistema operativo completo de acuerdo con las App a utilizar.

    p.mt-5 En el caso de las tecnologías de contenedores, los contenedores solo se construyen exclusivamente con las aplicaciones, librerías y archivos binarios a ser utilizados, y compartirá recursos con el sistema operativo anfitrión o máquina host.

    p.mt-3 #[strong En la figura 3 se muestra un resumen de la arquitectura general de las tecnologías comentadas anteriormente.]

    p.mt-5(style="border-left:4px #4DD0E1 solid;padding-left:8px;") #[strong Figura 3] Arquitectura tecnologías de hipervisores y contenedores

    br
    .col-md-8.mt-3.m-auto
      figure
        img.image_floating(src="@/assets/curso/tema2/2.svg" data-aos="fade-up")


</template>

<script>
export default {
  name: 'Tema2',
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
</style>
