<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Docker

    .cajon.color-acento-botones.p-4.mb-4.mt-3.caja_escalada_hover.row.fade-in-image.caja_flotante_rosada(data-aos="fade-up")
      .row
        .col-auto.mb-3
          figure
            img.imagen_flotante_animada(src="@/assets/curso/tema3/primera.png")
        .col.mt-3
          p Es una de las plataformas de software más ampliamente utilizadas en el mundo para la gestión de contenedores. A continuación, se dará a conocer el proceso de instalación:

    .titulo-quinto.color-acento-contenido.mt-5.text-center(data-aos="fade-up")
      h4 Proceso de instalación de docker

    .col-md-9.m-auto.mt-4(data-aos="fade-up")
      a.anexo.caja_flotante_azul(href="https://docs.docker.com/docker-for-windows/install/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p Para realizar el proceso de instalación de docker en el sistema operativo Windows debemos dirigirnos directamente a la página oficial de docker disponible en:  #[strong(style="word-break:break-all;") https://docs.docker.com/docker-for-windows/install/]

    p.mt-5 En el enlace anterior podrá encontrar el enlace de acceso directo al proceso de descarga y también encontrará una descripción de los requerimientos específicos del sistema respecto a versiones de sistema operativo, memoria ram mínima, procesadores compatibles entre otros requerimientos.

    div.mt-5
      b-card(no-body='')
        b-tabs(pills='' card='' vertical='')
          b-tab(disabled="true")
            template(#title).indicador__container(active="true")
              h3.text-center.mb-0.pb-4.pt-4(style="color:#1565C0;") Proceso de instalación #[br] de docker
              .indicador--click
          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  Página oficial de Docker para instalar Windows
            b-card-text
              figure
                img(src="@/assets/curso/tema3/1.png")
                figcaption Nota. https://docs.docker.com/docker-for-windows/install/
              .p-4.mt-2(style="background-color:#F6F6F6;")
                p Página oficial de Docker para instalar Windows.
          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  Configuración Instalación Docker Desktop 3.4.0
            b-card-text
              figure
                img(src="@/assets/curso/tema3/2.png")
                figcaption Configuración Instalación Docker Desktop 3.4.0.
              .p-4.mt-2(style="background-color:#F6F6F6;")
                p Una vez terminada la descarga se debe ejecutar el instalador de docker el cual iniciará con una ventana de configuración donde se podrá seleccionar la instalación de componentes adicionales requeridos y el generar iconos de acceso desde el escritorio de la máquina.
          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  Instalación Docker Desktop 3.4.0
            b-card-text
              figure
                img(src="@/assets/curso/tema3/3.png")
                figcaption Instalación Docker Desktop 3.4.0.
              .p-4.mt-2(style="background-color:#F6F6F6;")
                p Una vez se determina la configuración deseada se inicia el proceso de instalación el cual al finalizar solicitará el reinicio del sistema operativo como se muestra en la figura 4 y realizará unas actualizaciones finales mientras reinicia la máquina.
          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  Advertencia sobre falta de elementos de instalación
            b-card-text
              figure
                img(src="@/assets/curso/tema3/4.png")
                figcaption Advertencia sobre falta de elementos de instalación.
              .p-4.mt-2(style="background-color:#F6F6F6;")
                p Al reiniciar el sistema Docker se ejecuta en background e informará si existe algún problema en caso de que el sistema operativo no cumpla con las dependencias requeridas. Docker le indicará la falta de los componentes que no pueda actualizar para realizar el proceso manual. En el ejemplo mostrado se requiere la instalación manual de WSL 2 Linux Kernel el cual ya no viene integrado en el instalador Docker para Windows 10 (Windows, 2021).Luego de realizar esta instalación manual deberá reiniciar nuevamente la máquina.

          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  Nota. Instalador Docker Desktop 3.4.0
            b-card-text
              figure
                img(src="@/assets/curso/tema3/5.png")
                figcaption Nota. Instalador Docker Desktop 3.4.0.
              .p-4.mt-2(style="background-color:#F6F6F6;")
                p Sobre el mismo mensaje de error se despliega el link de acceso a la documentación oficial para finalizar el proceso de ajuste requerido para instalar Docker completamente en Windows.
          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  Inicio instalación paquete de actualización #[br]  WSL2 Linux Kernel para máquinas 64x
            b-card-text
              figure
                img(src="@/assets/curso/tema3/6.png")
                figcaption Inicio instalación paquete de actualización  WSL2 Linux Kernel para máquinas 64x.
              .p-4.mt-2(style="background-color:#F6F6F6;")
                p Una vez descargado el paquete msi indicado en la documentación oficial se realiza la instalación respectiva.
          b-tab
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  Finalización instalación paquete de actualización #[br]  WSL2 Linux Kernel para máquinas 64x
            b-card-text
              figure
                img(src="@/assets/curso/tema3/7.png")
                figcaption Finalización instalación paquete de actualización #[br]  WSL2 Linux Kernel para máquinas 64x
              .p-4.mt-2(style="background-color:#F6F6F6;")
                p Finalización instalación paquete de actualización  WSL2 Linux Kernel para máquinas 64x.

    br
    .cajon.color-acento-botones.p-4.mb-4.mt-5.caja_escalada_hover.row.fade-in-image.caja_flotante_rosada(data-aos="fade-up")
      .row
        .col-auto.mb-3
          figure
            img.imagen_flotante_animada(src="@/assets/curso/tema3/primera.png")
        .col.mt-3
          p Luego de la instalación del paquete de acuerdo con la documentación oficial debe fijar WSL2 (recién instalado) como la versión por defecto para las distribuciones de Linux. Para realizar este proceso deberá abrir una consola de powershell de windows y ejecutar el comando que se muestra en la figura 4.

    p.mt-5(style="border-left:4px #4DD0E1 solid;padding-left:8px;") #[strong Figura 4]  Arquitectura tecnologías de hipervisores y contenedores

    .col-md-7.m-auto.mt-5
      figure
        img.image_floating(data-aos="fade-up" src="@/assets/curso/tema3/8.png")

    p.mt-5 Una vez finalizados los pasos anteriores, Docker debe poder ejecutarse sin ningún tipo de error o advertencia.

    p.mt-5(style="border-left:4px #4DD0E1 solid;padding-left:8px;") #[strong Figura 5] Información sobre pasos a seguir

    .col-md-9.m-auto.mt-5
      figure
        img.image_floating(data-aos="fade-up" src="@/assets/curso/tema3/9.png")

    br
    .cajon.color-acento-botones.p-4.mb-4.mt-5.caja_escalada_hover.row.fade-in-image.caja_flotante_rosada(data-aos="fade-up")
      .row
        .col-md-2.mb-3
          figure
            img.imagen_flotante_animada(src="@/assets/curso/tema3/primera.png")
        .col-md-10.mt-3
          p Adicionalmente, una vez finaliza exitosamente la instalación, el sistema ofrece un pequeño tutorial para el uso de la herramienta entre las que se encuentran las acciones más comunes a realizar como lo son las actividades de clonación de un repositorio, la construcción de una imagen a partir de esta clonación y su ejecución como contenedor de Docker. #[strong Se recomienda ejecutar el tutorial completo para así determinar que su instalación y configuración está bien definida:]

    br
    div.mt-4
      b-card(no-body='')
        b-tabs(pills='' card='' vertical='')
          b-tab(disabled="true")
            template(#title)
              h3.text-center.mb-0.pb-4.pt-4(style="color:#1565C0;") Clonación de un Respositorio
          b-tab(active="true")
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  Acción de clonar repositorio
            b-card-text
              figure
                img(src="@/assets/curso/tema3/10.png")
                figcaption Fuente. Tutorial Docker Desktop 3.4.0
              .p-4.mt-2(style="background-color:#F6F6F6;")
                p Acción de clonar repositorio.

          b-tab(active="true")
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  Acción de construir imagen desde repositorio
            b-card-text
              figure
                img(src="@/assets/curso/tema3/11.png")
                figcaption Fuente. Tutorial Docker Desktop 3.4.0
              .p-4.mt-2(style="background-color:#F6F6F6;")
                p Acción de construir imagen desde repositorio.

          b-tab(active="true")
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  Acción de construir contenedor desde imagen
            b-card-text
              figure
                img(src="@/assets/curso/tema3/12.png")
                figcaption Fuente. Tutorial Docker Desktop 3.4.0
              .p-4.mt-2(style="background-color:#F6F6F6;")
                p Acción de construir contenedor desde imagen.

          b-tab(active="true")
            template(#title)
              div.pt-3(style="border-top:1px #B2E6FF solid;")
                i.fas.fa-caret-right
                |  Acción de compartir contenedor en Docker Hub
            b-card-text
              figure
                img(src="@/assets/curso/tema3/13.png")
                figcaption Fuente. Tutorial Docker Desktop 3.4.0
              .p-4.mt-2(style="background-color:#F6F6F6;")
                p Acción de compartir contenedor en Docker Hub
        


</template>

<script>
export default {
  name: 'Tema3',
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
  font-size: 13px
.nav-pills
  border-top: 9px #B4E2F8 solid !important
.nav-link:first-child
  border-top:0px !important
.nav-link.active
  font-weight:bold !important
.card-body
  padding: 0px
</style>
