(function(e){function n(n){for(var a,t,c=n[0],u=n[1],s=n[2],l=0,d=[];l<c.length;l++)t=c[l],Object.prototype.hasOwnProperty.call(r,t)&&r[t]&&d.push(r[t][0]),r[t]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);f&&f(n);while(d.length)d.shift()();return i.push.apply(i,s||[]),o()}function o(){for(var e,n=0;n<i.length;n++){for(var o=i[n],a=!0,t=1;t<o.length;t++){var c=o[t];0!==r[c]&&(a=!1)}a&&(i.splice(n--,1),e=u(u.s=o[0]))}return e}var a={},t={app:0},r={app:0},i=[];function c(e){return u.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"bad60e7f","chunk-0206bfa0":"5103ef75","chunk-04b93936":"c24e77c4","chunk-13a6037e":"557b03ff","chunk-16015154":"5f91f991","chunk-17977988":"3f5748c7","chunk-2c06842c":"ccd5fb0d","chunk-2d208d90":"17ccaaf2","chunk-2d21d0e2":"9abf0eb3","chunk-2d22c123":"7bc193bb","chunk-2e80bb9a":"74a2e8d3","chunk-3145fe0f":"b79096d1","chunk-328f70dd":"1c78e911","chunk-3807499c":"005a28b0","chunk-3c94cd2f":"f3157a9b","chunk-3dc647fd":"a9c65614","chunk-4cdd78c0":"3de3f540","chunk-515a8379":"3ccb55eb","chunk-53ccb27e":"038169b3","chunk-59974754":"98de1a32","chunk-766a929b":"b7a911f2","chunk-839300a6":"7ca478e4","chunk-c796899c":"ba5c0855",comple:"e25815da",creditos:"1039ff52",glosario:"a16d72d4",intro:"bc10977d",referencias:"d07e2cba",tema1:"cb218f34",tema2:"49401f36",tema3:"29ef2d71"}[e]+".js"}function u(n){if(a[n])return a[n].exports;var o=a[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.e=function(e){var n=[],o={"chunk-04b93936":1,"chunk-16015154":1,"chunk-17977988":1,"chunk-3145fe0f":1,"chunk-328f70dd":1,"chunk-3807499c":1,"chunk-3c94cd2f":1,"chunk-3dc647fd":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-766a929b":1,"chunk-839300a6":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1,tema1:1,tema2:1,tema3:1};t[e]?n.push(t[e]):0!==t[e]&&o[e]&&n.push(t[e]=new Promise((function(n,o){for(var a="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-13a6037e":"31d6cfe0","chunk-16015154":"d035a47c","chunk-17977988":"d035a47c","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3145fe0f":"d035a47c","chunk-328f70dd":"d035a47c","chunk-3807499c":"d035a47c","chunk-3c94cd2f":"1dbe8d4a","chunk-3dc647fd":"d035a47c","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"1ee009d6","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"4867b953","chunk-766a929b":"1b0545d4","chunk-839300a6":"b67dc245","chunk-c796899c":"31d6cfe0",comple:"ea3eb7d4",creditos:"5d543dea",glosario:"9e39a404",intro:"5fb15d43",referencias:"404f751f",tema1:"79f841ee",tema2:"c7616e82",tema3:"9ff1afe6"}[e]+".css",r=u.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===r))return n()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===a||l===r)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var a=n&&n.target&&n.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete t[e],f.parentNode.removeChild(f),o(i)},f.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){t[e]=0})));var a=r[e];if(0!==a)if(a)n.push(a[2]);else{var i=new Promise((function(n,o){a=r[e]=[n,o]}));n.push(a[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var d=new Error;s=function(n){l.onerror=l.onload=null,clearTimeout(f);var o=r[e];if(0!==o){if(o){var a=n&&("load"===n.type?"missing":n.type),t=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+t+")",d.name="ChunkLoadError",d.type=a,d.request=t,o[1](d)}r[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},u.m=e,u.c=a,u.d=function(e,n,o){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)u.d(o,a,function(n){return e[n]}.bind(null,a));return o},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var f=l;i.push([0,"chunk-vendors"]),o()})({0:function(e,n,o){e.exports=o("56d7")},"230f":function(e,n,o){e.exports=o.p+"img/fondo-banner-principal.99616fd5.svg"},"52e5":function(e,n,o){e.exports=o.p+"img/cc.58a75e32.svg"},"56d7":function(e,n,o){"use strict";o.r(n);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("68f3"),t=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"app",attrs:{id:"app"}},[o("Header"),o("div",{staticClass:"contenedor-principal"},[o("AsideMenu"),o("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[o("router-view")],1)],1),o("BarraAvance"),o("Accesibilidad")],1)},r=[],i={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=i,u=(o("cf25"),o("2877")),s=Object(u["a"])(c,t,r,!1,null,null,null),l=s.exports,d=(o("d3b7"),o("3ca3"),o("ddb0"),o("b0c0"),o("2b0e")),f=o("8c4f"),m=o("ae58"),p=o("7e58");d["default"].use(f["a"]);var b=new f["a"]({routes:[{path:"/",name:"inicio",component:m["a"]},{path:"/introduccion",name:"introduccion",component:function(){return o.e("intro").then(o.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return o.e("tema1").then(o.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return o.e("tema2").then(o.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return o.e("tema3").then(o.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return o.e("tema3").then(o.bind(null,"3eb5"))}},{path:"tema5",name:"tema5",component:function(){return o.e("tema3").then(o.bind(null,"5029"))}},{path:"tema6",name:"tema6",component:function(){return o.e("tema3").then(o.bind(null,"92ea"))}},{path:"tema7",name:"tema7",component:function(){return o.e("tema3").then(o.bind(null,"a2b2"))}}]},{path:"/actividad",name:"actividad",component:function(){return o.e("actividad").then(o.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return o.e("glosario").then(o.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return o.e("comple").then(o.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return o.e("referencias").then(o.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return o.e("creditos").then(o.bind(null,"2e81"))}}],scrollBehavior:function(e,n){if(e.hash){var o={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===n.name?o:new Promise((function(e){setTimeout((function(){e(o)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=o("1c2c"),v=o("5f5b"),k=o("b1e0"),w=(o("f9e3"),o("2dd8"),o("a3a0"),{global:{componenteFormativo:"Contenedores",descripcionCurso:"En este componente formativo se describe el modelo de virtualización por medio del uso de tecnología de contenedores.",imagenBannerPrincipal:o("bce2"),fondoBannerPrincipal:o("230f")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Contenedores de software",desarrolloContenidos:!0,subMenu:[]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Hipervisor vs contenedores",desarrolloContenidos:!0,subMenu:[]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Docker",desarrolloContenidos:!0,subMenu:[]},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Docker Hub",desarrolloContenidos:!0,subMenu:[]},{nombreRuta:"tema5",icono:"far fa-file-alt",numero:"5",titulo:"Comandos de Docker",desarrolloContenidos:!0,subMenu:[]},{nombreRuta:"tema6",icono:"far fa-file-alt",numero:"6",titulo:"Imágenes y contenedores (containers)",desarrolloContenidos:!0,subMenu:[]},{nombreRuta:"tema7",icono:"far fa-file-alt",numero:"7",titulo:"DockerFile",desarrolloContenidos:!0,subMenu:[]}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Heim, B. (s.f.). Tecnologías de virtualización. Conceptos de Virtualización.",link:"https://sites.google.com/site/virutalizacionyha/tecnologias-de-virtualizacion"},{referencia:"López, G. (2018). Virtualización basada en contenedores y SD-WAN. Teldat Blog - Conectando el mundo.",link:"https://www.teldat.com/blog/es/contenedores-contenerizacion-virtualizacion-de-sistema-operativo-sd-wan/"},{referencia:"NetApp. (2019). ¿Qué son los contenedores? NetApp.",link:"https://www.netapp.com/es/devops-solutions/what-are-containers/"},{referencia:"Novato, P. (2019). 03.- ¿Qué son las imágenes y los contenedores en docker?  [Video]. YouTube.",link:"https://www.youtube.com/watch?v=woTRh_b5zxE&feature=youtu.be"},{referencia:"VMware, Inc. (s. f.). Virtualización. VMware.",link:"https://www.vmware.com/co/solutions/virtualization.html"},{referencia:"Windows. (2021). Install WSL on Windows 10. Microsoft Docs.",link:"https://docs.microsoft.com/en-us/windows/wsl/install-win10#step-4---download-the-linux-kernel-update-package"}],glosario:[{termino:"Binarios",significado:"Tipo de archivos que contiene información requerida para la ejecución de ciertas aplicaciones."},{termino:"DevOps",significado:"Enfoque que integra prácticas del área de infraestructura con prácticas de desarrollo para optimizar el trabajo en equipo y la aceleración de entrega de productos y servicios."},{termino:"Librerías",significado:"Conjunto de códigos construidos en un lenguaje de programación que sirve para ser reutilizado por otras aplicaciones."},{termino:"Migración",significado:"Llevar un sistema hacia otra plataforma."},{termino:"VM",significado:"Máquina virtual."}],complementario:[{texto:"Programador novato. (2019). 01.- ¿Que es Docker? Y ¿Realmente lo necesito?  [Video]. YouTube.",tipo:"Video",link:"https://youtu.be/CD7wPcCBo8o"},{texto:"Fazt Code. (2019). Docker, Instalación en Windows10. [Video]. YouTube.",tipo:"Video",link:"https://youtu.be/BK-C2RofmTE"},{texto:"Docker Inc. (s.f.). Dockerfile reference.",tipo:"Página web",link:"https://docs.docker.com/engine/reference/builder/"},{texto:"Docs Microsoft. (2019). DockerFile on Windows. Docs Microsoft.",tipo:"Página web",link:"https://docs.microsoft.com/en-us/virtualization/windowscontainers/manage-docker/manage-windows-dockerfile"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Jonathan Guerrero Astaiza",cargo:"Instructor",centro:"Centro de teleinformática y producción industrial - Regional Cauca"},{nombre:"Paula Andrea Taborda Ortiz",cargo:"Diseñadora instruccional",centro:"Regional Distrito Capital - Centro de Diseño y Metrología"},{nombre:"Ana Catalina Córdoba Sus",cargo:"Revisora Metodológica y Pedagógica",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"},{nombre:"Jhon Jairo Rodríguez Pérez",cargo:"Diseñador y evaluador instruccional",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Carlos Julián Ramírez Benítez",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Luis Jesús Pérez Madariaga",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Veimar Celis Melendez",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});a["a"].use(v["a"]),a["a"].use(k["a"]),a["a"].prototype.$config=w;var y=o("9224");a["a"].prototype.$package=y,new a["a"]({router:h,store:g["a"],render:function(e){return e(l)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"4.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"bootstrap":"^5.0.2","bootstrap-vue":"^2.21.2","ecored-base-pkg":"3.0.3","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},"9eb5":function(e,n,o){e.exports=o.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,n,o){},bce2:function(e,n,o){e.exports=o.p+"img/banner-principal.4cdb76de.svg"},cf25:function(e,n,o){"use strict";o("fea6")},fea6:function(e,n,o){}});
//# sourceMappingURL=app.62d70f73.js.map