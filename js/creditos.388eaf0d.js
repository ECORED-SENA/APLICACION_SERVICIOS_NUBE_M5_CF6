(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["creditos","chunk-515a8379"],{"0095":function(t,a,e){"use strict";e("95c5")},"13aa":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container-fluid banner-interno"},[e("div",{staticClass:"banner-interno__fondo",style:{"background-image":"url("+t.globalData.fondoBannerPrincipal+")"}}),e("div",{staticClass:"container"},[e("div",{staticClass:"banner-interno__titulo py-5"},[t.icono.length?e("div",{staticClass:"banner-interno__titulo__icono me-3"},[e("i",{class:t.icono})]):t._e(),e("h2",{staticClass:"mb-0"},[t._v(t._s(t.titulo))])])])])},r=[],s={name:"BannerInterno",props:{icono:{type:String,default:""},titulo:{type:String,default:""}},data:function(){return{}},computed:{globalData:function(){return this.$config.global}}},o=s,i=(e("0095"),e("2877")),c=Object(i["a"])(o,n,r,!1,null,null,null);a["default"]=c.exports},"159b":function(t,a,e){var n=e("da84"),r=e("fdbc"),s=e("17c2"),o=e("9112");for(var i in r){var c=n[i],l=c&&c.prototype;if(l&&l.forEach!==s)try{o(l,"forEach",s)}catch(d){l.forEach=s}}},"17c2":function(t,a,e){"use strict";var n=e("b727").forEach,r=e("a640"),s=r("forEach");t.exports=s?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"2e81":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"curso-main-container creditos-vista"},[e("BannerInterno",{attrs:{icono:"far fa-registered",titulo:"Créditos"}}),e("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[e("div",{staticClass:"creditos mb-4 mb-md-5"},t._l(Object.keys(t.creditosData),(function(a,n){return e("div",{class:n!=Object.keys(t.creditosData).length-1?"mb-4":""},[e("div",{staticClass:"creditos__titulo"},[t._v(t._s(t.configTitulos[a]))]),e("table",[e("tbody",t._l(t.creditosData[a],(function(n,r){return e("tr",{key:a+r},[e("td",{staticClass:"text-bold",attrs:{colspan:"2"},domProps:{innerHTML:t._s(t.renderText(n.nombre))}}),e("td",{attrs:{colspan:"2"},domProps:{innerHTML:t._s(t.renderText(n.cargo))}}),e("td",{attrs:{colspan:"3"},domProps:{innerHTML:t._s(t.renderText(n.centro))}})])})),0)])])})),0),t._m(0),e("Footer",{attrs:{"all-round":""}})],1)],1)},r=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"row mb-4 mb-md-5"},[n("div",{staticClass:"col-md-6 mb-4 mb-md-0"},[n("div",{staticClass:"tarjeta credito p-3 text-center h-100"},[n("img",{staticClass:"d-inline-block",staticStyle:{width:"70px"},attrs:{src:e("ef52")}}),n("p",[t._v("Fotografias y vectores tomados de "),n("a",{attrs:{href:"https://www.freepik.es/",target:"_blank"}},[t._v("www.freepik.es")]),t._v(", "),n("a",{attrs:{href:"https://www.shutterstock.com/",target:"_blank"}},[t._v("www.shutterstock.com")]),t._v(", "),n("a",{attrs:{href:"https://unsplash.com/",target:"_blank"}},[t._v("unsplash.com ")]),t._v("y "),n("a",{attrs:{href:"https://www.flaticon.com/",target:"_blank"}},[t._v("www.flaticon.com")])])])]),n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"tarjeta credito p-3 text-center h-100"},[n("img",{staticClass:"d-inline-block",staticStyle:{width:"70px"},attrs:{src:e("e1f5")}}),n("p",{staticClass:"mb-0"},[t._v("Licencia creative commons CC BY-NC-SA"),n("br"),n("a",{attrs:{href:"https://creativecommons.org/licenses/by-nc-sa/2.0/",target:"_blank"}},[t._v("ver licencia")])])])])])}],s=(e("159b"),e("13aa")),o=e("e9c6"),i={name:"Creditos",components:{BannerInterno:s["default"],Footer:o["a"]},data:function(){return{configTitulos:{liderEquipo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",contenidoInstruccional:"CONTENIDO INSTRUCCIONAL",desarrolloProducto:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",gestoresRepositorio:"GESTORES DE REPOSITORIO"}}},computed:{creditosData:function(){return this.$config.creditos}},methods:{renderText:function(t){var a="";return Array.isArray(t)?t.forEach((function(t,e){a+=(e?"<br/>":"")+t})):a+=t,a}}},c=i,l=(e("5d8e"),e("2877")),d=Object(l["a"])(c,n,r,!1,null,null,null);a["default"]=d.exports},"5d8e":function(t,a,e){"use strict";e("f728")},"95c5":function(t,a,e){},a640:function(t,a,e){"use strict";var n=e("d039");t.exports=function(t,a){var e=[][t];return!!e&&n((function(){e.call(null,a||function(){throw 1},1)}))}},e1f5:function(t,a,e){t.exports=e.p+"img/creditos-cc.8b385472.svg"},ef52:function(t,a,e){t.exports=e.p+"img/creditos-img.5f8a2d3f.svg"},f728:function(t,a,e){}}]);
//# sourceMappingURL=creditos.388eaf0d.js.map