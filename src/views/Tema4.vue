<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Docker Hub

    .cajon.color-acento-botones.p-4.mb-4.mt-3.caja_escalada_hover.row.fade-in-image.caja_flotante_rosada(data-aos="fade-up")
      .row
        .col-auto.mb-3
          figure
            img.imagen_flotante_animada(src="@/assets/curso/tema3/primera.png")
        .col.mt-3
          p Es un servicio proporcionado por la compañía Docker Inc donde se puede almacenar, compartir y extraer imágenes para crear contenedores de Docker. Este servicio requiere la creación de una cuenta de usuario y funciona muy similar a como lo hacen los repositorios de archivos en la nube. A continuación presentamos cómo hacerlo.

    div.mt-5
      b-card(no-body='')
        b-tabs(pills='' card='' vertical='')
          b-tab(disabled="true")
            template(#title).indicador__container(active="true")
              h3.text-center.mb-0.pb-4.pt-4(style="color:#1565C0;") Proceso de montaje del contenedor
              .indicador--click
          b-tab(active="true")
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  Crear una cuenta
            b-card-text
              figure
                img(src="@/assets/curso/tema4/1.png")
              .p-4.mt-2(style="background-color:#F6F6F6;")
                p Para crear una cuenta de usuario debe acceder a la siguiente dirección #[a(href="https://hub.docker.com") https://hub.docker.com] y diligenciar el formulario indicando el ID, email y password.

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  Seleccionar un plan
            b-card-text
              figure
                img(src="@/assets/curso/tema4/2.png")
              .p-4.mt-2(style="background-color:#F6F6F6;")
                p Luego dependiendo de sus necesidades debe seleccionar un plan. Se ofrece la versión libre, la profesional y los equipos para organizaciones. Se recomienda usar la opción gratuita para el proceso de aprendizaje.

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  Confirmación de cuenta
            b-card-text
              figure
                img(src="@/assets/curso/tema4/3.png")
              .p-4.mt-2(style="background-color:#F6F6F6;")
                p Finalizado este proceso se envía al correo electrónico registrado en la creación del usuario de Docker Hub un mensaje de confirmación que se debe verificar para activar la cuenta y tener mecanismos de recuperación en caso de que perdamos las credenciales de acceso.

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  Ingresar a Docker Hub
            b-card-text
              figure
                img(src="@/assets/curso/tema4/4.png")
              .p-4.mt-2(style="background-color:#F6F6F6;")
                p Cuando se tiene una cuenta de usuario en Docker hub es posible realizar el último procedimiento del tutorial de Docker que se menciona en la sesión anterior. Para esto bastará solo con ingresar las credenciales del usuario.

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  Compartir contenedor en Docker Hub
            b-card-text
              figure
                img(src="@/assets/curso/tema4/5.png")
                figcaption Acción de compartir contenedor en Docker Hub2
              .p-4.mt-2(style="background-color:#F6F6F6;")
                p En esta última parte por el usuario las veces que la del tutorial de docker se pretende compartir la imagen creada en el repositorio disponible del usuario de Docker Hub asociado, la cual se puede visualizar directamente desde la página de Docker Hub y podrá ser reutilizada necesite.

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  Visualizar imagen compartida
            b-card-text
              figure
                img(src="@/assets/curso/tema4/6.png")
              figure.mt-2
                img(src="@/assets/curso/tema4/7.png")
              .p-4.mt-2(style="background-color:#F6F6F6;")
                p Visualización de imagen compartida Docker Hub.


</template>

<script>
export default {
  name: 'Tema4',
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
