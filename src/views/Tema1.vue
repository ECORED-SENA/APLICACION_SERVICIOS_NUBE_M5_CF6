<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Contenedores de software

    .cajon.color-acento-botones.p-4.mb-4.mt-3.caja_escalada_hover.row.fade-in-image.caja_flotante_rosada(data-aos="fade-up")
      p El término de contenedores es muy común en el campo laboral asociado a la administración de servicios de infraestructura, pero en esencia hace referencia a un modelo de virtualización repasado en el componente anterior, específicamente la virtualización a nivel de sistema operativo.

    .row.mt-5
      .col-auto.mt-2
        figure
          img.imagen_flotante_animada(src="@/assets/curso/tema1/1.svg")
      .col.mt-4
        p(data-aos="fade-left") En este modelo, los contenedores son máquinas virtuales aisladas entre sí, con un software específico que no tiene un sistema operativo propio, sino que comparte los recursos y el kernel del sistema operativo de la máquina anfitriona o host, logrando un mejor rendimiento ya que solo existe un sistema operativo encargado de la gestión de la infraestructura en la máquina anfitriona o host (López, 2018).

        p.mt-3(data-aos="fade-left") Los contenedores encapsulan únicamente el software específico de la aplicación que se ejecuta dentro de él, junto con las librerías de las cuales depende para su ejecución, abstrayendo el servidor en el que se va a ejecutar logrando entonces una portabilidad real ya que es posible predecir el comportamiento de un software cuando este se mueve desde un servidor a otro.

    p.mt-5 #[strong Según NetApp (2019), los contenedores tienen las siguientes ventajas como se muestra en la figura 1:]

    p.mt-5(style="border-left:4px #4DD0E1 solid;padding-left:8px;") #[strong Figura 1] Ventajas contenedores

    br
    .col-md-7.m-auto.mt-5
      .row
        .col.mb-3
          figure
            img#balanza1.indicador__container(src="@/assets/curso/tema1/2.svg" style="cursor:pointer;" @click="showInfoBalanza(1)" v-bind:class="{balanza__activa: balanza1.active}")
            .indicador--click(v-if="mostrarIndicador")
        .col.mb-3
          figure
            img#balanza2(src="@/assets/curso/tema1/3.svg" style="cursor:pointer;" @click="showInfoBalanza(2)" v-bind:class="{balanza__activa: balanza2.active}")
        .col.mb-3
          figure
            img#balanza3(src="@/assets/curso/tema1/4.svg" style="cursor:pointer;" @click="showInfoBalanza(3)" v-bind:class="{balanza__activa: balanza3.active}")
        .col.mb-3
          figure
            img#balanza4(src="@/assets/curso/tema1/5.svg" style="cursor:pointer;" @click="showInfoBalanza(4)" v-bind:class="{balanza__activa: balanza4.active}")
        .col.mb-3
          figure
            img#balanza5(src="@/assets/curso/tema1/6.svg" style="cursor:pointer;" @click="showInfoBalanza(5)" v-bind:class="{balanza__activa: balanza5.active}")

    .col-md-12.m-auto.mt-4
      .pt-5.pb-5.fondo__barco
        br
        br
        br
        br
        .col-md-8.m-auto
          p.p-2.text-barco.fade-in-image(v-html="texto_barco")

    .col-md-12.m-auto.mt-3
      figure
        img.imagen_flotante_animada(src="@/assets/curso/tema1/8.svg")

    br
    p.mt-5 Para finalizar, a continuación en la figura 2 se listan algunos de los casos más comunes en los que las organizaciones optan por uso de contenedores:

    p.mt-5(style="border-left:4px #4DD0E1 solid;padding-left:8px;") #[strong Figura 2] Uso contenedores

    .col-md-9.m-auto.mt-5
      .row
        .col-md-4.mb-3
          figure
            img.imagen_flotante_animada(src="@/assets/curso/tema1/9.svg")
          p.mt-3.text-center #[strong Migración y/o refactorización de aplicaciones existentes a entornos más modernos.]
        .col-md-4.mb-3
          figure
            img.imagen_flotante_animada(src="@/assets/curso/tema1/10.svg")
          p.mt-3.text-center #[strong Aplicaciones distribuidas y arquitecturas de microservicios.]
        .col-md-4.mb-3
          figure
            img.imagen_flotante_animada(src="@/assets/curso/tema1/11.svg")
          p.mt-3.text-center #[strong Implementación de prácticas de integración y despliegue continuo.]



</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicador: true,
    balanza1: {
      active: true,
      text: `<strong>Disminución de gastos:</strong> requieren menos recursos del sistema comparado con sistema de virtualización tradicionales.`,
    },
    balanza2: {
      active: false,
      text: `<strong>Mayor portabilidad:</strong> se pueden implementar fácilmente en diferentes plataformas y sistemas operativos.`,
    },
    balanza3: {
      active: false,
      text: `<strong>Funcionamiento coherente:</strong> siempre se ejecutan de la misma manera independientemente del lugar donde se implementen.`,
    },
    balanza4: {
      active: false,
      text: `<strong>Mayor eficiencia:</strong> permiten la implementación de modificaciones y/o escalamiento de funcionalidades con mayor rapidez.`,
    },
    balanza5: {
      active: false,
      text: `<strong>Mejor desarrollo de aplicaciones:</strong> este modelo de virtualización se alinea perfectamente con las metodologías ágiles y enfoques de DevOps de la industria actual para acelerar el proceso de construcción de software.`,
    },
    texto_barco: null,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
    this.texto_barco = this.balanza1.text
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {
    showInfoBalanza(value) {
      this.mostrarIndicador = false
      this.balanza1.active = false
      this.balanza2.active = false
      this.balanza3.active = false
      this.balanza4.active = false
      this.balanza5.active = false

      switch (value) {
        case 1:
          this.texto_barco = this.balanza1.text
          this.balanza1.active = true
          break
        case 2:
          this.texto_barco = this.balanza2.text
          this.balanza2.active = true
          break
        case 3:
          this.texto_barco = this.balanza3.text
          this.balanza3.active = true
          break
        case 4:
          this.texto_barco = this.balanza4.text
          this.balanza4.active = true
          break
        case 5:
          this.texto_barco = this.balanza5.text
          this.balanza5.active = true
          break
      }
    },
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
.balanza__activa
  transform: translateY(5pc)
  -webkit-transition: transform 0.4s linear
  -moz-transition: transform 0.4s linear
  -o-transition: transform 0.4s linear
  -ms-transition: transform 0.4s linear
  transition: transform 0.4s linear
.text-barco
  transition: transform 0.4s linear
  -o-transition: transform 0.4s linear
  -ms-transition: transform 0.4s linear
  -moz-transition: transform 0.4s linear
  -webkit-transition: transform 0.4s linear
.fondo__barco
  background: url('../assets/curso/tema1/7.svg')
  background-size: cover
  background-position: center center
</style>
