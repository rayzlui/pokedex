(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,n,t){e.exports=t(37)},29:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(10),c=t.n(l),u=(t(29),t(3)),o=t(19),i=(t(34),t(6)),s="FETCH_DATA_START",m="FETCH_POKEDEX_SUCESS",p="FETCH_DATA_SUCCESS",f="FETCH_DATA_ERROR",d="CHANGE_POKEDEX",g=" CHANGE_DISPLAY_TO",v="FETCH_POKEDEX_START",b="FETCH_POKEDEX_ERROR";var E={isFetching:!1,data:null,error:null};var h={isFetching:!1,listData:null,error:null};var y=Object(i.c)({requestPokemon:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case f:return Object.assign({},e,{isFetching:!1,data:null,error:n.error});case p:return Object.assign({},e,{isFetching:!1,data:n.data,error:null});case s:return Object.assign({},e,{isFetching:!0,error:null});default:return e}},requestPokedex:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case b:return Object.assign({},e,{isFetching:!1,listData:null,error:n.error});case m:return Object.assign({},e,{isFetching:!1,listData:n.data,error:null});case v:return Object.assign({},e,{isFetching:!0,error:null});default:return e}},pokedex:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case d:return n.region;default:return e}},displaying:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"pokemon",n=arguments.length>1?arguments[1]:void 0;switch(n.type){case g:return n.display;default:return e}}});var k=t(1),x=t(9),w=t(2);function O(){var e=Object(k.a)(["\n  box-shadow: 1px 1px 2px grey;\n  border-radius: 5px;\n  border: 1px silver solid;\n  background-color: rgb(233, 233, 233);\n  height: 15vw;\n  width: 15vw;\n"]);return O=function(){return e},e}function j(){var e=Object(k.a)(["\n  margin: 0px;\n"]);return j=function(){return e},e}function D(){var e=Object(k.a)(["\n  background-color: white;\n  color: black;\n  border-radius: 2px;\n  size: 20px;\n  border-radius: 3px;\n"]);return D=function(){return e},e}function F(){var e=Object(k.a)(["\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n  padding: 1vw;\n"]);return F=function(){return e},e}var _=w.a.h1(F());_.displayName="LargeHeader";var q=w.a.button(D()),C=w.a.section(j()),P=w.a.img(O());function T(){var e=Object(k.a)(["\n  height: fit-content;\n"]);return T=function(){return e},e}function S(){var e=Object(k.a)(["\n  border-bottom: 1px solid silver;\n"]);return S=function(){return e},e}function A(){var e=Object(k.a)(["\n  background-image: ",";\n  border: 2px solid black;\n  border-radius: 4px;\n  box-shadow: 1px 1px silver;\n  margin-left: auto;\n  margin-right: auto;\n"]);return A=function(){return e},e}function N(){var e=Object(k.a)(["\n  display: block;\n  padding: 2vw 1vw;\n  width 50%;\n  text-align: center;\n"]);return N=function(){return e},e}var U=w.a.section(N()),H={fire:"radial-gradient(white, rgb(255, 94, 0))",grass:"radial-gradient(white, rgb(54, 168, 54))",water:"radial-gradient(white, rgb(67, 142, 255))",flying:"radial-gradient(silver, rgb(248, 255, 188))",poison:"radial-gradient(green, rgb(112, 0, 97))",electric:"radial-gradient(white, rgb(255, 232, 24))",psychic:"radial-gradient(rgb(217, 92, 255), rgb(94, 54, 168))",ice:"radial-gradient(silver, rgb(35, 38, 255))",fighting:"radial-gradient(silver, brown)",ground:"radial-gradient(black, brown)",rock:"radial-gradient(brown, grey)",steel:"radial-gradient(silver, grey)",normal:"radial-gradient(white, tan)"},R=Object(w.a)(U)(A(),function(e){return H[e.type]||"radial-gradient(white, white)"}),K=w.a.section(S()),L=w.a.section(T());function I(e){var n=e.array,t=e.type,a=e.requestData;return r.a.createElement(r.a.Fragment,null,n.map(function(e){var n=e[t]?e[t].name:e.name;return r.a.createElement(q,{key:"".concat(n," button"),onClick:function(){return a(n,t)}},n)}))}function M(e){var n=e.sprites,t=e.name,l=Object.keys(n).filter(function(e){return null!==n[e]}),c=l.length,u=l.indexOf("front_default"),o=Object(a.useState)(u),i=Object(x.a)(o,2),s=i[0],m=i[1];return Object(a.useEffect)(function(){var e=setInterval(function(){m((s+1)%c)},2e3);return function(){return clearInterval(e)}},[c,s]),r.a.createElement(P,{src:n[l[s]],alt:t,onClick:function(){m((s+1)%c)}})}var z=t(7),B=t.n(z),G=t(11);function X(e,n){return function(){var t=Object(G.a)(B.a.mark(function t(a){var r,l,c,u,o;return B.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a(Y()),t.next=3,fetch("https://pokeapi.co/api/v2/".concat(n,"/").concat(e));case 3:if(200!==(r=t.sent).status){t.next=12;break}return t.next=7,r.json();case 7:l=t.sent,a({type:g,display:n}),a(J(l)),t.next=15;break;case 12:c=r.status,u=r.statusText,o=r.url,a(W({status:c,statusText:u,url:o}));case 15:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}function J(e){return{type:p,data:e}}function V(e){return{type:m,data:e}}function W(e){return{type:f,error:e}}function Y(){return{type:s}}var $=Object(u.b)(function(e){return{data:e.requestPokemon.data,displaying:e.displaying,isFetching:e.requestPokemon.isFetching}},function(e){return{requestData:function(n,t){e(X(n,t))}}}),Q=$(function(e){var n=e.data,t=e.displaying,a=e.requestData,l=e.isFetching;if(!n||"ability"!==t||l)return null;var c=n.name,u=n.pokemon,o=n.effect_entries[0].effect;return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null,c.toUpperCase()),r.a.createElement("h3",null,"Effect"),r.a.createElement("p",null,o),r.a.createElement("h3",null,"Pokemon with ",c),r.a.createElement(I,{array:u,type:"pokemon",requestData:a}))});function Z(e){var n=e.error;if(!n)return null;var t="Unknown Rrror";return 404===n.status&&(t="Unable to find search, please try another one"),r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null,"Error: ",n.status),r.a.createElement("p",null,t))}var ee=Object(u.b)(function(e){return{error:e.requestPokemon.error}},null)(Z);function ne(){var e=Object(k.a)(["\n  display: block;\n  text-align: center;\n"]);return ne=function(){return e},e}function te(){var e=Object(k.a)(["\n  height: 200px;\n  width: 200px;\n  border: 0px;\n"]);return te=function(){return e},e}var ae=Object(w.a)(P)(te()),re=Object(w.a)(C)(ne()),le="https://media1.tenor.com/images/c59e7bfa31590e3f9eb4925639ddeb88/tenor.gif?itemid=7283217";function ce(e){return e.isFetching?r.a.createElement(re,null,r.a.createElement(_,null,"Searching"),r.a.createElement(ae,{className:"spinning-pokeball",src:le,alt:"SPINNING POKEBALL"})):null}var ue=Object(u.b)(function(e){return{isFetching:e.requestPokemon.isFetching}},null)(ce);var oe=Object(u.b)(function(e){return{data:e.requestPokemon.data,displaying:e.displaying}},function(e){return{fetchUrl:function(n){return e(function(e){return function(){var n=Object(G.a)(B.a.mark(function n(t){var a,r,l,c,u;return B.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t(Y()),n.next=3,fetch(e);case 3:if(200!==(a=n.sent).status){n.next=11;break}return n.next=7,a.json();case 7:r=n.sent,t(J(r)),n.next=14;break;case 11:l=a.status,c=a.statusText,u=a.url,t(W({status:l,statusText:c,url:u}));case 14:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}(n))},requestData:function(n,t){return e(X(n,t))}}})(function(e){var n=e.data,t=e.requestData,a=e.displaying,l=e.fetchUrl;if(!n||!n.count)return null;var c=n.previous,u=n.next,o=n.results,i=c?r.a.createElement(q,{key:"previous-button",className:"previous-button",onClick:function(){return l(c)}},"Previous"):null,s=u?r.a.createElement(q,{key:"next-button",className:"next-button",onClick:function(){return l(u)}},"Next"):null;return r.a.createElement(r.a.Fragment,null,o.map(function(e){return r.a.createElement("section",{key:"".concat(e.name)},r.a.createElement("p",{key:"".concat(e.name,"-list-par")},e.name),r.a.createElement(q,{key:"".concat(e.name,"-list-button"),className:"view-pokemon-button",onClick:function(){return t(e.name,a)}},"View"))}),i,s)});function ie(){var e=Object(k.a)(["\n  background-color: white;\n  font-family: Arial, Helvetica, sans-serif;\n  margin: 0 auto;\n  padding: 5px 0;\n"]);return ie=function(){return e},e}function se(){var e=Object(k.a)(["\n  border-bottom: 1px black solid;\n  text-align: center;\n  font-size: 4vw;\n"]);return se=function(){return e},e}function me(){var e=Object(k.a)(["\n  margin: 0 auto;\n  width: fit-content;\n  height: 3vw;\n  background-color: grey;\n  color: black;\n  font-size: 2vw;\n  border-radius: 2px;\n"]);return me=function(){return e},e}var pe=w.a.select(me()),fe=Object(w.a)(_)(se()),de=w.a.div(ie());function ge(e){return e.options.map(function(e){return r.a.createElement("option",{key:e,value:e},e.toUpperCase())})}function ve(e){var n=e.pokedex,t=e.changePokedex;if(null===n)return t("kanto"),null;return r.a.createElement(de,null,r.a.createElement(pe,{onChange:function(e){return t(e.target.value)},value:n},r.a.createElement(ge,{options:["kanto","original-johto","hoenn","original-sinnoh","original-unova","kalos-central","kalos-coastal","kalos-mountain"],pokedex:n})))}function be(){var e=Object(k.a)(["\n  margin: 0 auto;\n  width: 235px;\n"]);return be=function(){return e},e}var Ee=13,he=w.a.input(be());function ye(e){var n=e.parameters,t=e.changeParameter,a=n.map(function(e){return r.a.createElement(q,{key:"".concat(e," button"),onClick:function(){return t(e)}},e.toUpperCase())});return r.a.createElement(r.a.Fragment,null,a)}function ke(e){var n=e.requestData,t=Object(a.useState)("pokemon"),l=Object(x.a)(t,2),c=l[0],u=l[1];return r.a.createElement(de,null,r.a.createElement(ye,{parameters:["ability","pokemon","type","move","berry","pokemon-color"],changeParameter:u}),r.a.createElement("h4",null,"SEARCH BY: ",c.toUpperCase()),r.a.createElement(he,{type:"search",onKeyDown:function(e){e.keyCode===Ee&&(n(e.target.value,c),e.target.value="")}}))}function xe(){var e=Object(k.a)(["\n  display: inline-block;\n  text-align: center;\n  width: 100%;\n"]);return xe=function(){return e},e}function we(){var e=Object(k.a)(["\n  ","\n"]);return we=function(){return e},e}function Oe(){var e=Object(k.a)(["\n  background-color: white;\n  text-align: center;\n  display: block;\n"]);return Oe=function(){return e},e}var je=w.a.section(Oe()),De=Object(w.a)(q)(we(),function(e){if(e.active)return"background-color: silver;\n          border-bottom: 1px solid black;"}),Fe=w.a.section(xe());var _e=Object(u.b)(function(e){return{pokedex:e.pokedex,isFetching:e.requestPokedex.isFetching}},function(e){return{changePokedex:function(n){e(function(e){return{type:d,region:e}}(n)),e(function(e){return function(){var n=Object(G.a)(B.a.mark(function n(t){var a,r,l,c,u;return B.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:v}),n.next=3,fetch("https://pokeapi.co/api/v2/pokedex/".concat(e));case 3:if(200!==(a=n.sent).status){n.next=11;break}return n.next=7,a.json();case 7:r=n.sent,t(V(r)),n.next=14;break;case 11:l=a.status,c=a.statusText,u=a.url,t({type:b,error:{status:l,statusText:c,url:u}});case 14:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}(n))},requestData:function(n,t){e(X(n,t))}}})(function(e){var n,t=Object(a.useState)("pokedex"),l=Object(x.a)(t,2),c=l[0],u=l[1];switch(c){case"pokedex":n=r.a.createElement(je,null,r.a.createElement(ve,e));break;default:n=r.a.createElement(je,null,r.a.createElement(ke,e))}return r.a.createElement(Fe,null,r.a.createElement(De,{active:"search"===c,onClick:function(){u("pokedex")}},"Pokedex"),r.a.createElement(De,{active:"pokedex"===c,onClick:function(){u("search")}},"Search Bar"),n)});var qe=$(function(e){var n=e.data,t=e.displaying,a=e.requestData,l=e.isFetching;if(null===n||"move"!==t||l)return null;var c=n.accuracy,u=n.effect_entries,o=n.name,i=n.power,s=n.pp,m=n.type,p=c||"Does not apply",f=0===u.length?"Move has no description":u[0].effect,d=i||"Does not apply";return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null,o.toUpperCase()),r.a.createElement("h6",null,"Type: "),r.a.createElement(q,{onClick:function(){return a(m.name,"type")}},m.name),r.a.createElement("p",null,f),r.a.createElement("p",null,"Accuracy: ",p),r.a.createElement("p",null,"PP: ",s),r.a.createElement("p",null,"Power: ",d))}),Ce=$(function(e){var n=e.data,t=e.displaying,a=e.requestData,l=e.isFetching;if(null===n&&!l)return a("charmander","pokemon"),null;if("pokemon"!==t||null===n||l)return null;var c=n.name,u=n.types,o=n.moves,i=n.abilities,s=n.sprites,m=u[0].type.name;return r.a.createElement("div",{className:"pokemon-card"},r.a.createElement(_,null,c.toUpperCase()),r.a.createElement(R,{type:m},r.a.createElement(M,{sprites:s,name:c})),r.a.createElement(K,null,r.a.createElement("h4",null,"Type"),r.a.createElement(I,{array:u,type:"type",requestData:a})),r.a.createElement(K,null,r.a.createElement("h4",null,"Ability"),r.a.createElement(I,{array:i,type:"ability",requestData:a})),r.a.createElement(L,null,r.a.createElement("h4",null,"Moves"),r.a.createElement(I,{array:o,type:"move",requestData:a})))});var Pe=$(function(e){var n=e.data,t=e.displaying,a=e.requestData,l=e.isFetching;if(null===n||"type"!==t||l)return null;var c=n.name,u=n.pokemon,o=n.damage_relations,i=n.moves,s=o.double_damage_from,m=o.double_damage_to,p=o.half_damage_from,f=o.half_damage_to,d=o.no_damage_from,g=o.no_damage_to;return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null,c.toUpperCase()),r.a.createElement("h4",null,"Double Damage To:"),r.a.createElement(I,{array:m,type:"type",requestData:a}),r.a.createElement("h4",null,"Half Damage From:"),r.a.createElement(I,{array:p,type:"type",requestData:a}),r.a.createElement("h4",null,"No Damage From:"),r.a.createElement(I,{array:d,type:"type",requestData:a}),r.a.createElement("h4",null,"Double Damage From:"),r.a.createElement(I,{array:s,type:"type",requestData:a}),r.a.createElement("h4",null,"Half Damage To:"),r.a.createElement(I,{array:f,type:"type",requestData:a}),r.a.createElement("h4",null,"No Damage To:"),r.a.createElement(I,{array:g,type:"type",requestData:a}),r.a.createElement("h3",null,"Pokemon"),r.a.createElement(I,{array:u,type:"pokemon",requestData:a}),r.a.createElement("h3",null,"Moves"),r.a.createElement(I,{array:i,type:"move",requestData:a}))});var Te=Object(u.b)(function(e){return{pokedex:e.pokedex,data:e.requestPokedex.listData}},function(e){return{requestData:function(n,t){e(X(n,t))}}})(function(e){var n=e.data,t=e.pokedex,a=e.requestData;if(!n)return null;var l=n.pokemon_entries;return r.a.createElement(r.a.Fragment,null,r.a.createElement(fe,null,t.toUpperCase()),l.map(function(e){var n=e.pokemon_species.name;return r.a.createElement(q,{key:"".concat(n," button"),onClick:function(){return a(n,"pokemon")}},n)}))});var Se=$(function(e){var n=e.data,t=e.displaying,a=e.isFetching;if(null===n||"berry"!==t||a)return null;var l=n.name,c=n.growth_time,u=n.firmness,o=n.max_harvest,i=n.size,s=n.smoothness,m=n.soil_dryness,p=n.flavors;return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null,l.toUpperCase()),r.a.createElement("p",null,"Grow Time: ",c),r.a.createElement("p",null,"Firmness: ",u.name),r.a.createElement("p",null,"Max Harvest: ",o),r.a.createElement("p",null,"Size: ",i),r.a.createElement("p",null,"Smoothness: ",s),r.a.createElement("p",null,"Soil Dryness: ",m),r.a.createElement("p",null,"Flavors: ",p.map(function(e){return e.flavor.name}).join("  ")))});var Ae=$(function(e){var n=e.data,t=e.displaying,a=e.requestData,l=e.isFetching;if(null===n||"pokemon-color"!==t||l)return null;var c=n.name,u=n.pokemon_species;return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null,c.toUpperCase()," POKEMON"),u.map(function(e){return r.a.createElement("section",{key:"".concat(e.name)},r.a.createElement("p",{key:"".concat(e.name,"-list-par")},e.name),r.a.createElement(q,{key:"".concat(e.name,"-list-button"),className:"view-pokemon-button",onClick:function(){return a(e.name,"pokemon")}},"View"))}),";")});var Ne=Object(u.b)(function(e){return{isFetching:e.requestPokedex.isFetching}},null)(ce);var Ue=Object(u.b)(function(e){return{error:e.requestPokedex.error}},null)(Z);function He(){var e=Object(k.a)(["\n  text-align: center;\n  background-image: linear-gradient(to bottom right, white, red);\n  height: 100vh;\n  width: 100vw;\n"]);return He=function(){return e},e}function Re(){var e=Object(k.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-item: space-evenly;\n  justify-content: center;\n"]);return Re=function(){return e},e}function Ke(){var e=Object(k.a)(["\n  width: 46vw;\n  height: 80vh;\n  top: 12%;\n  border-radius: 5px;\n  box-shadow: 3px 3px 5px black, 4px 4px 5px grey, 3px 3px 5px grey,\n    4px 4px 5px grey;\n  overflow: scroll;\n  background-color: white;\n  margin: 1vw;\n"]);return Ke=function(){return e},e}var Le=w.a.div(Ke()),Ie=w.a.div(Re()),Me=w.a.div(He());function ze(){return r.a.createElement(Me,null,r.a.createElement(_,null,r.a.createElement("span",{className:"main__header"},"Pokedex")),r.a.createElement(Ie,null,r.a.createElement(Le,null,r.a.createElement(ue,null),r.a.createElement(Ce,null),r.a.createElement(qe,null),r.a.createElement(Pe,null),r.a.createElement(Q,null),r.a.createElement(Se,null),r.a.createElement(Ae,null),r.a.createElement(ee,null)),r.a.createElement(Le,null,r.a.createElement(Ne,null),r.a.createElement(_e,null),r.a.createElement(oe,null),r.a.createElement(Te,null),r.a.createElement(Ue,null))))}var Be=function(){var e=[o.a];return Object(i.d)(y,i.a.apply(void 0,e))}();var Ge=function(){return r.a.createElement(u.a,{store:Be},r.a.createElement(ze,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.89511ec7.chunk.js.map