(function(e){function a(a){for(var o,i,c=a[0],s=a[1],l=a[2],d=0,u=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&u.push(t[i][0]),t[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);f&&f(a);while(u.length)u.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,a=0;a<r.length;a++){for(var n=r[a],o=!0,i=1;i<n.length;i++){var c=n[i];0!==t[c]&&(o=!1)}o&&(r.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},t={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"a68b70b9","chunk-0206bfa0":"5dfc809a","chunk-0c047e41":"538cb440","chunk-13a6037e":"1f01f277","chunk-18f95272":"d47fc2cc","chunk-25b302c8":"e41bb7ff","chunk-26fc7596":"15a4480d","chunk-2c06842c":"d61bb24f","chunk-2d0e96ec":"340a63eb","chunk-2d208d90":"a5dd51a8","chunk-2d21d0e2":"1dae4da4","chunk-2d22c123":"cceb9a08","chunk-2d2747e2":"f248d2e0","chunk-2e80bb9a":"d7326f2b","chunk-319206de":"1b83b0e3","chunk-32334cb6":"2d180721","chunk-3c57cd7b":"c1f3c3b0","chunk-3d6834f6":"29c5b5a7","chunk-4cdd78c0":"932d776c","chunk-4f2d402a":"842b965f","chunk-4fde0a08":"89501fcb","chunk-515a8379":"9312cfe0","chunk-53ccb27e":"33fb67d0","chunk-55d286b8":"b226669f","chunk-59974754":"5dc1ad3b","chunk-6e1e538a":"ea1352c9","chunk-766a929b":"625255f1","chunk-c796899c":"94256e6b","chunk-e8a7823a":"89507e10","chunk-f2df7d2c":"dc697a78","chunk-fde47172":"5a2829ed",comple:"48db6a9f",creditos:"d4c131f7",glosario:"7dbd5cdd",intro:"5dfef865",referencias:"13e75959",sintesis:"6b3d4d33",tema1:"cded198e",tema2:"16c426c5",tema3:"e97ee5a9",tema4:"f5f24d12"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-3c57cd7b":"3babef71","chunk-3d6834f6":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-4fde0a08":"fef54ca8","chunk-515a8379":"8b66f838","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"daffa119","chunk-6e1e538a":"3ba0a060","chunk-766a929b":"0489e2dc","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"0c8bcd9d",creditos:"d5d79d17",glosario:"1a6847a0",intro:"31d6cfe0",referencias:"657d9316",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0"}[e]+".css",t=s.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=r[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===o||d===t))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){l=u[c],d=l.getAttribute("data-href");if(d===o||d===t)return a()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=a,f.onerror=function(a){var o=a&&a.target&&a.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete i[e],f.parentNode.removeChild(f),n(r)},f.href=t;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){i[e]=0})));var o=t[e];if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(a,n){o=t[e]=[a,n]}));a.push(o[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e);var u=new Error;l=function(a){d.onerror=d.onload=null,clearTimeout(f);var n=t[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}t[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var f=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"046d":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-6.d2b472ed.svg"},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,s=n("2877"),l=Object(s["a"])(c,i,t,!1,null,null,null),d=l.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),f=n("8c4f"),m=n("ae58"),p=n("7e58");u["a"].use(f["a"]);var b=new f["a"]({routes:[{path:"/",name:"inicio",component:m["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema4").then(n.bind(null,"3eb5"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Monitoreo del proceso de chocolatería",descripcionCurso:"En el presente componente formativo, revisaremos los comportamientos físicos del chocolate y su influencia en la terminación del producto; igualmente, el comportamiento reológico de las materias primas, los tipos de empaques más adecuados, así como   los procesos operativos y la documentación mediante formatos. ",imagenBannerPrincipal:n("65fa"),fondoBannerPrincipal:n("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:n("71f8")},{clases:["banner-principal-decorativo-2"],imagen:n("8f04")},{clases:["banner-principal-decorativo-3"],imagen:n("7d72")},{clases:["banner-principal-decorativo-4"],imagen:n("f53d")},{clases:["banner-principal-decorativo-5"],imagen:n("b400")},{clases:["banner-principal-decorativo-6"],imagen:n("046d")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Reología",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Características",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Comportamiento de las materias primas funcionales",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Materiales de empaque, características, tipos y funciones",hash:"t_1_3"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Defectos en los productos de chocolatería",desarrolloContenidos:!0},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Tipos de residuos en chocolatería y  su disposición",desarrolloContenidos:!0},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Registros de producción",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"4.1",titulo:"Formatos",hash:"t_4_1"},{icono:"far fa-file-alt",numero:"4.2",titulo:"Diligenciamiento",hash:"t_4_2"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Reología",referencia:"Ciro, H. (2006). Reología de fluidos y su aplicación en el área de los alimentos. Universidad Nacional de Colombia.",tipo:"Pdf",link:"https://repositorio.unal.edu.co/handle/unal/59571?show=full"},{tema:"Comportamiento de las materias primas funcionales: Emulgentes/ emulsionantes",referencia:"Navarro, A. (2011). Emulsiones.",tipo:"Web",link:"https://navarrof.orgfree.com/Docencia/FQaplicada/UT4/UT4_t2.htm"},{tema:"Comportamiento de las materias primas funcionales: Emulgentes/ emulsionantes.",referencia:"ChocoFactura. (2021). Emulsificantes en chocolatería",tipo:"Video",link:"https://www.youtube.com/watch?v=JDi6jPXdG8w"},{tema:"Materiales de empaque, características, tipos y funciones: Proceso empacado",referencia:"Rikolto Veco. (s. f.). Proceso productivo del chocolate",tipo:"Web",link:"http://cadenacacaoca.info/CDOC-Deployment/documentos/Proceso_productivo_del_chocolate.pdf"},{tema:"Defectos en los productos de chocolatería",referencia:"Callebaut. (s. f.). Prevención de problemas: bombones moldeados.",tipo:"Web",link:"https://www.callebaut.com/es-LATAM/chocolate-tecnica/prevencion-problemas/bombones-moldeados"}],glosario:[{termino:"Atomización",significado:"proceso de secado de alimentos empleando aire caliente. "},{termino:"Celulosa",significado:"biomolécula que compone las paredes de las células vegetales."},{termino:"EEC / CEE",significado:" Comunidad Económica Europea."},{termino:"Punto de ignición",significado:"Punto dado por la temperatura, ya sea medida en grados centígrados o Fahrenheit, en la que una sustancia u objeto sometido al calor inicia el proceso de quemado o incinerado. "},{termino:"Punto de humo",significado:"punto dado por la temperatura, ya sea medida en grados centígrados o Fahrenheit, en la que una sustancia sometida al calor empieza a desprender humo."},{termino:"Viscosidad",significado:"resistencia que presenta el fluido a fluir sobre una superficie / característica no deseable en el proceso de cobertura de chocolate."}],referencias:[{referencia:"Ciro, H. (2006). Reología de fluidos y su aplicación en el área de los alimentos. Universidad Nacional de Colombia.",link:"https://repositorio.unal.edu.co/handle/unal/59571"},{referencia:"Editora Insumos. (s. f.). Los gelificantes más usados en la industria alimentaria. Aditivos Ingredientes. ",link:"https://aditivosingredientes.com/artigos/todos/los-gelificantes-mas-utilizados-en-la-industria-alimentaria"},{referencia:"Navia, D., Ayala, A. y Villada, H. (2014). Interacciones empaque-alimento: migración. Revista Ingenierías Universidad de Medellín, 13(25), p. 99-113.",link:"https://repository.udem.edu.co/handle/11407/1827"},{referencia:"Redacción Interempresas. (2020). Chocolate en un envase suave y respetuoso con el medio ambiente. Canales Sectoriales",link:"https://www.interempresas.net/Envase/Articulos/320423-Chocolate-en-un-envase-suave-y-respetuoso-con-el-medio-ambiente.html"},{referencia:"Redacción <em>The Food Tech</em>. (2022). Ventajas del envase de vidrio. <em>The Food Tech</em>. ",link:"https://www.interempresas.net/Envase/Articulos/320423-Chocolate-en-un-envase-suave-y-respetuoso-con-el-medio-ambiente.html"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Responsable equipo desarrollo curricular",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Diana Carolina Pachón Meneses",cargo:"Experta temática",centro:"Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios"},{nombre:"Caterine Bedoya Mejía",cargo:"Diseñadora instruccional",centro:"Regional Distrito Capital - Centro de Gestión Industrial"},{nombre:"Carolina Coca Salazar",cargo:"Revisora metodológica y pedagógica",centro:"Regional Distrito Capital - Centro de Diseño y Metrología"},{nombre:"Darío González",cargo:"Corrector de estilo",centro:"Regional Distrito Capital - Centro de Diseño y Metrología"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Yuly Rey",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Zuleidy María Ruíz Torres",cargo:"Revisión de guion audiovisual",centro:"Centro de Comercio y Servicios Regional Tolima"},{nombre:"María Carolina Tamayo López ",cargo:"Locución",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Yicelly Estefania Mesa Silva ",cargo:"Ilustración",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Wilson Andrés Arenales Cáceres",cargo:"Validación Ilustración",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Laura Ximena Hurtado Villalba ",cargo:"Producción audiovisual ",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Ludwyng Corzo García",cargo:"Producción audiovisual ",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Gilberto Junior Rodríguez Rodríguez",cargo:"Validación audiovisual",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Sandra Milena Triana Pinto",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Yuli Marcela Gómez Tarazona",cargo:"Validación de contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Responsable del equipo de gestión de repositorio",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});o["a"].prototype.$config=v;var k=n("9224");o["a"].prototype.$package=k,new o["a"]({router:h,store:g["a"],render:function(e){return e(d)}}).$mount("#app")},"65fa":function(e,a,n){e.exports=n.p+"img/banner-principal.9be111d2.png"},"71f8":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-1.14fc77c5.svg"},"7d72":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-3.4792600d.svg"},"8f04":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-2.9defb8f9.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"6.3.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"5.3.0","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,n){},b400:function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-5.9feea0a3.svg"},ce7c:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.6429e004.png"},f53d:function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-4.d3d4f8b7.svg"}});
//# sourceMappingURL=app.0f75cb40.js.map