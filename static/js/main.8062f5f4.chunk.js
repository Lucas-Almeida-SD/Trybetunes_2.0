(this.webpackJsonptrybetunes=this.webpackJsonptrybetunes||[]).push([[0],{30:function(e,t,A){},32:function(e,t,A){},34:function(e,t,A){},37:function(e,t,A){},38:function(e,t,A){},39:function(e,t,A){},40:function(e,t,A){},41:function(e,t,A){},42:function(e,t,A){},43:function(e,t,A){},44:function(e,t,A){},45:function(e,t,A){},46:function(e,t,A){},47:function(e,t,A){"use strict";A.r(t);var a=A(0),n=A.n(a),i=A(19),c=A.n(i),r=(A(30),A(10)),s=A(13),o=A(14),u=A(15),l=A(4),j=A(3),d=A.n(j),g=A(6),b=A(5),m=A(11),O="user",h=function(e){return localStorage.setItem(O,JSON.stringify(e))},p=function(e){return function(t){setTimeout((function(){t(e)}),1500)}},C=function(){return new Promise((function(e){var t=JSON.parse(localStorage.getItem(O));null===t&&(t={}),p(t)(e)}))},E=function(e){return new Promise((function(t){h(Object(m.a)(Object(m.a)({},{name:"",email:"",image:"",description:""}),e)),p("OK")(t)}))},B=function(e){return new Promise((function(t){h(Object(m.a)({},e)),p("OK")(t)}))},I=(A(32),A(1));var f=function(){return Object(I.jsx)("div",{id:"loading-container",children:Object(I.jsx)("img",{src:"data:image/gif;base64,R0lGODlhMgAyAPcBAAAAAAD/AAEBAQICAgMDAwQEBAUFBQYGBgcHBwgICAkJCQoKCgsLCwwMDA4ODg8PDxAQEBERERISEhMTExQUFBUVFRYWFhcXFxgYGBkZGRoaGhsbGxwcHB0dHR4eHh8fHyAgICEhISIiIiMjIyQkJCUlJSYmJicnJygoKCkpKSoqKisrKywsLC0tLS4uLi8vLzAwMDExMTIyMjMzMzQ0NDU1NTY2Njc3Nzg4ODk5OTo6Ojs7Ozw8PD09PT4+Pj8/P0BAQEFBQUJCQkREREVFRUdHR0hISElJSUpKSkxMTE9PT1BQUFNTU1RUVFVVVVZWVldXV1hYWFlZWVpaWltbW15eXmJiYmVlZWdnZ2hoaGlpaWpqamtra2xsbG1tbW5ubm9vb3BwcHNzc3R0dHV1dXZ2dnd3d3h4eHp6ent7e3x8fH19fX5+fn9/f4CAgIGBgYKCgoODg4SEhIWFhYaGhoeHh4mJiYqKiouLi4yMjI2NjY6Ojo+Pj5CQkJSUlJaWlpeXl5iYmJmZmZqampubm5ycnJ2dnZ6enp+fn6CgoKGhoaKioqOjo6SkpKWlpaampqenp6ioqKmpqaqqqqurq6ysrK2tra6urq+vr7CwsLKysrOzs7S0tLW1tba2tr29vb6+vr+/v8LCwsPDw8TExMXFxcbGxsfHx8jIyMnJycrKysvLy8zMzM3Nzc7Ozs/Pz9DQ0NHR0dLS0tPT09TU1NXV1dbW1tfX19jY2Nvb29zc3N3d3d7e3t/f3+Dg4OHh4eLi4uPj4+Tk5OXl5ebm5ufn5+jo6Onp6erq6uvr6+zs7O3t7e7u7u/v7/Dw8PHx8fLy8vPz8/T09PX19fb29vf39/j4+Pn5+fr6+vv7+/z8/P39/f7+/v///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAABACwAAAAAMgAyAIcAAAAA/wABAQECAgIDAwMEBAQFBQUGBgYHBwcICAgJCQkKCgoLCwsMDAwODg4PDw8QEBARERESEhITExMUFBQVFRUWFhYXFxcYGBgZGRkaGhobGxscHBwdHR0eHh4fHx8gICAhISEiIiIjIyMkJCQlJSUmJiYnJycoKCgpKSkqKiorKyssLCwtLS0uLi4vLy8wMDAxMTEyMjIzMzM0NDQ1NTU2NjY3Nzc4ODg5OTk6Ojo7Ozs8PDw9PT0+Pj4/Pz9AQEBBQUFCQkJERERFRUVHR0dISEhJSUlKSkpMTExPT09QUFBTU1NUVFRVVVVWVlZXV1dYWFhZWVlaWlpbW1teXl5iYmJlZWVnZ2doaGhpaWlqampra2tsbGxtbW1ubm5vb29wcHBzc3N0dHR1dXV2dnZ3d3d4eHh6enp7e3t8fHx9fX1+fn5/f3+AgICBgYGCgoKDg4OEhISFhYWGhoaHh4eJiYmKioqLi4uMjIyNjY2Ojo6Pj4+QkJCUlJSWlpaXl5eYmJiZmZmampqbm5ucnJydnZ2enp6fn5+goKChoaGioqKjo6OkpKSlpaWmpqanp6eoqKipqamqqqqrq6usrKytra2urq6vr6+wsLCysrKzs7O0tLS1tbW2tra9vb2+vr6/v7/CwsLDw8PExMTFxcXGxsbHx8fIyMjJycnKysrLy8vMzMzNzc3Ozs7Pz8/Q0NDR0dHS0tLT09PU1NTV1dXW1tbX19fY2Njb29vc3Nzd3d3e3t7f39/g4ODh4eHi4uLj4+Pk5OTl5eXm5ubn5+fo6Ojp6enq6urr6+vs7Ozt7e3u7u7v7+/w8PDx8fHy8vLz8/P09PT19fX29vb39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8I/wCzddPWTSBBgwUHJjyoEKHDhhAZMuy2rRs3ihYxXqy4MSNHjSA/ivToUeLCkw8JXpMAgICBEjnEMDJmMuVJkh1zhsw4QQCAnz5/BgkUbaROjjaTRjSW7FmvVY3EzCgAYACEO8siouy28yjOrhiD5QnhU0OlryJralWqliAjEy2ZRGvL1atdsEa7TUtDAEAJXnbZbqWbFBUFAhNoqcWLtvHdbcNWAKjQ6yjhtZgJO1uRxJlWx4wfo20m0Kjg05kHbw3NOq9rtJdjq0ZNEPRr0bg10p6d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",alt:"Icone de carregamento"})})},w=(A(34),{login:"/",search:"/search",album:"/album/:id",favorites:"/favorites",profile:"/profile",profileEdit:"/profile/edit",notFound:"/*"}),x=A.p+"static/media/song_icon.7196a6ee.png";var Q=function(){var e=Object(a.useState)(""),t=Object(b.a)(e,2),A=t[0],n=t[1],i=Object(a.useState)(!1),c=Object(b.a)(i,2),r=c[0],s=c[1],o=Object(l.p)(),u=function(){var e=Object(g.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s(!0),e.next=4,E({name:A});case 4:s(!1),o(w.search);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(I.jsxs)("div",{"data-testid":"page-login",id:"login-page",className:"page",children:[r&&Object(I.jsx)(f,{}),Object(I.jsxs)("section",{id:"login-section",children:[Object(I.jsxs)("header",{id:"login-header",children:[Object(I.jsx)("div",{id:"page-icon-container",children:Object(I.jsx)("img",{id:"page-icon",src:x,alt:"\xcdcone da Aplica\xe7\xe3o"})}),Object(I.jsx)("h2",{id:"login-title",children:"Entrar no Trybetunes"})]}),Object(I.jsxs)("form",{action:"",id:"login-form",children:[Object(I.jsxs)("label",{htmlFor:"input-name",children:[Object(I.jsx)("span",{children:"Nome de usu\xe1rio"}),Object(I.jsx)("input",{"data-testid":"login-name-input",type:"text",name:"name",id:"input-name",value:A,onChange:function(e){var t=e.target;n(t.value)}})]}),Object(I.jsx)("button",{"data-testid":"login-submit-button",disabled:!(A.length>=Number("3")),type:"submit",onClick:u,children:"Entrar"})]})]})]})},M=function(){var e=Object(g.a)(d.a.mark((function e(t){var A,a,n,i,c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A=encodeURI(t).replaceAll("%20","+"),a="https://itunes.apple.com/search?entity=album&term=".concat(A,"&attribute=allArtistTerm"),e.next=4,fetch(a);case 4:return n=e.sent,e.next=7,n.json();case 7:return i=e.sent,c=i.results,r=c.map((function(e){return{artistId:e.artistId,artistName:e.artistName,collectionId:e.collectionId,collectionName:e.collectionName,collectionPrice:e.collectionPrice,artworkUrl100:e.artworkUrl100,releaseDate:e.releaseDate,trackCount:e.trackCount}})),e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=M,D=A(25),S=A.n(D),k=A(9);A(37);function y(e){var t=e.albumData,A=t.artworkUrl100,a=t.collectionName,n=t.artistName,i=t.collectionId;return Object(I.jsxs)(k.b,{"data-testid":"link-to-album-".concat(i),to:"".concat(w.album.replace(":id",i)),className:"album-card",children:[Object(I.jsx)("img",{src:A,alt:a,className:"album-image"}),Object(I.jsx)("p",{"data-testid":"album-name",className:"album-name",children:a}),Object(I.jsx)("span",{"data-testid":"artist-name",className:"artist-name",children:n})]})}var K=y;y.defaultProp={albumData:{collectionPrice:void 0}};A(38);function N(e){var t=e.albumList,A=e.search;return Object(I.jsxs)("div",{id:"album-list-container",children:[Object(I.jsx)("p",{id:"album-list-search",children:"Resultado de \xe1lbuns de: ".concat(A)}),Object(I.jsx)("div",{id:"album-list-content",children:t.map((function(e){return Object(I.jsx)(K,{albumData:e},e.collectionId)}))})]})}var Y=N;N.defaultProp={albumList:S.a.arrayOf(S.a.shape({collectionPrice:void 0}))};A(39);var F=function(){var e=Object(a.useState)(""),t=Object(b.a)(e,2),A=t[0],n=t[1],i=Object(a.useState)(""),c=Object(b.a)(i,2),r=c[0],s=c[1],o=Object(a.useState)(!1),u=Object(b.a)(o,2),l=u[0],j=u[1],m=Object(a.useState)(null),O=Object(b.a)(m,2),h=O[0],p=O[1],C=Object(a.useState)(!1),E=Object(b.a)(C,2),B=E[0],w=E[1],x=function(){var e=Object(g.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),w(!0),e.prev=2,e.next=5,v(A);case 5:a=e.sent,p(a),s(A),n(""),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.error("Oops...Algo deu errado. Tente novamente!");case 14:return e.prev=14,j(!1),w(!1),e.finish(14);case 18:case"end":return e.stop()}}),e,null,[[2,11,14,18]])})));return function(t){return e.apply(this,arguments)}}();return Object(I.jsxs)("div",{"data-testid":"page-search",id:"search-page",className:"page",children:[Object(I.jsxs)("form",{action:"",id:"search-page-form",children:[Object(I.jsx)("input",{"data-testid":"search-artist-input",type:"text",value:A,onChange:function(e){var t=e.target;n(t.value),j(t.value.length>=2)}}),Object(I.jsx)("button",{"data-testid":"search-artist-button",type:"submit",disabled:!l,onClick:x,children:"Pesquisar"})]}),Object(I.jsxs)("section",{id:"album-list-section",children:[B&&Object(I.jsx)(f,{}),h&&(h.length?Object(I.jsx)(Y,{albumList:h,search:r}):Object(I.jsx)("p",{id:"no-album-message",children:"Nenhum \xe1lbum foi encontrado"}))]})]})},J=A(8),R="favorite_songs";JSON.parse(localStorage.getItem(R))||localStorage.setItem(R,JSON.stringify([]));var G=function(){return JSON.parse(localStorage.getItem(R))},U=function(e){return localStorage.setItem(R,JSON.stringify(e))},L=function(e){return function(t){setTimeout((function(){t(e)}),500)}},W=function(){return new Promise((function(e){var t=G();L(t)(e)}))},T=function(e){return new Promise((function(t){if(e){var A=G();U([].concat(Object(J.a)(A),[e]))}L("OK")(t)}))},H=function(e){return new Promise((function(t){var A=G();U(A.filter((function(t){return t.trackId!==e.trackId}))),L("OK")(t)}))};A(40);var Z=function(e){var t=e.musicData,A=e.setIsLoading,n=e.favoriteMusicList,i=e.setFavoriteMusicList,c=Object(a.useState)(!1),r=Object(b.a)(c,2),s=r[0],o=r[1],u=t.trackName,j=t.previewUrl,m=t.trackId,O=t.artworkUrl100,h=Object(l.n)(),p=function(){var e=Object(g.a)(d.a.mark((function e(){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=!s,A(!0),!a){e.next=7;break}return e.next=5,T(t);case 5:e.next=9;break;case 7:return e.next=9,H(t);case 9:if(o(a),h.pathname!==w.favorites){e.next=15;break}return e.next=13,W();case 13:n=e.sent,i(n);case 15:A(!1);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){return function(){return A(!1)}}),[]),Object(a.useEffect)((function(){o(n.some((function(e){return e.trackId===m})))}),[]),Object(I.jsxs)("div",{className:"music-card-container",children:[Object(I.jsx)("img",{src:O,alt:"Imagem do \xe1lbum",className:"album-music-image"}),Object(I.jsxs)("div",{className:"audio-info-container",children:[Object(I.jsx)("audio",{onPlay:function(e){var t=e.target,A=document.querySelector(".selected");A&&!t.classList.contains("selected")&&(A.pause(),A.classList.remove("selected")),t.classList.add("selected")},"data-testid":"audio-component",src:j,controls:!0,className:"music-audio",children:Object(I.jsx)("track",{kind:"captions"})}),Object(I.jsx)("span",{className:"music-name",children:u})]}),Object(I.jsx)("img",{src:s?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACR0lEQVR4nO2ZO2sUURiGH2MUoigq+A+8hKAoKFgpdjaCkiJlSitFRby0iqCtElAINl5A8B+4q40xqCCEoCg2lvECgmwKo7KvHDyBZXJ2Mmd2duZbmBce2GLn2/dhrnsG6tSpU6eO5Qh2Cy4LmoIPgkXBkmBB8FxwVbAvYt5+wTW/7YKftehnNwSXBLuKFDgoeCZQRl4IjqTMOyqYiZjXFBzoRWCdYErQjvjRZdw2dwUjHfNGBNM5ZsnPuy0YjpXY6ne5emTWz9omeFXAvKZgS8yeKEJimZdeqKh5zUx7xh9OMs6tLCd2nnOibNqpF4DIq1PVNLpJjBoop0hW3mcEVwwUUyQXQyINA8UUydOQyCcDxRTJx5BIy0AxRdIKiSwZKKZIfoVEvhsopki+hkTmDRRTJHMhkccGiimSRyGRCwaKKZJzIZE9BoopktEVIl7mnYFyysh8UMKLnDVQUBk5kyay0V3SDJTUKnwTbOoq4mXOGyiqVTidKuFFhgVvDZRVF+YyL0II9vo1Jhmj5a6umSQ6ZMaN/e1tCyaiJDpkbhgQkOd6Lgkvslbw0IDEfcFQbhEvMyS4V6HEdM8SCZk7FUhMCdYUIpEQOiX4U4LAX7fyX7hAQuaY4EcfJX4KjvdVokNmp+BNHyReC3aUIpF4AnAvfn4XIOAO15uC9aVKJIQO9biU9FlwGAsRbHAr5DnvD+lPsVVEcFLwJYOA+84JLEf/31A9SJF4ItjOoEQwmXiCdp8nGcQIxgTvPWMMcgSbHVX3qEPJ+QeyOJ3W5c13TQAAAABJRU5ErkJggg==":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADTElEQVR4nO2ZS2xNURSGv2olaCkDIU0x8ChC0DLwSIzExCNCg4kYCErFSBkQBEmnpJ5BVJuYeM2olmEjRBAJYuCtiXhTVaKtrOQ/yU573J57e3q7m9wvOcm9Z+299lpnr73P2utAhgwZMmTwnCJgJ9AAPAGagVagCagHdgOTk9A3Bdijvk3S1Szddq8CmBSnA7OBm0BHhKsduA7MTKBvltq0R9TZAJT0xIGBQJUz4CfgNLBMs5MLDALGAEuB48Bntf0L7AeyHX32+6Bkgb5jwBLpMF250r0cOKM2wQM6AuQk68QI4JaU/AQOAMMi9BsK7FOYWN/zcsCuWt0z2V617Y5hcr7FmZ3hycxE4MRrhUKyWGi9ko5ax4mXwIwU9JUAbxxnIs1MleNEAakzTjqCWDfHxvZAX4HjzOEoC7td4ZTKTIQ9yVZdxTHoK1aYtXWnL9idbE3ERYWuuDgkG22LDqXI2U2iLOyoBIs9LvKd3XFiWINdEtoW6ztnZeuOMGG9hLaH+84K2XojTPhMwgn4T5FsfRom/CFhHv6TJ1vN5i4Eb09LFXxniJN1dOGdhD15CaaLQtlqL8guPJSwR5lmmpgjWx+ECWsk3Iz/bJWt58KE5RJW4z81snXL/05sJvzi+YIfDHyTrbYNh3JPDUrxlzWy8U6iRtvUyBzKwj+ygPuysay7aWtSw5X4xyrZ9jZK+Jc7e7Rlmr6QLwf+u8g7Y8fIu+pgWaYvVMum28kcC6Y7BYRN9D1lsuUXMDXZzhvU+TewiL5jsWwwW9anqiQoRFgFcB7pZ4ESw0gFh0RYLF5wnEnnzCwEvmvsi3Ecl63OddWJ0bX0Pms1lo15STbEQrZKmEGN6mQq5cuI41Q6Zdqa3hgnS+XQNg1yTaXVuDBdddLdprJqr2YXVrD+qgGfA3Nj0DkfeOEkrVbYTgtWoHjkVN4rU4zjHH1z+SNdT5SFp70AcMpZN43A+CQfRqPz2eCEPiv06QsrOO+36AkPSNDe4n6jU7V5r28uXjASuOzMTp0KBJ0pVFGtw9lara93lAIfZKRtCKsdmVUwPzoL2mbFa0YDV5ynbmnOUee/zdwo+hHrlNYEDtibejv9lGnAY132u1+T79lJMwPp4B+umggDgRN8wAAAAABJRU5ErkJggg==",alt:"Icone de m\xfasica favoritada",onClick:p,role:"presentation",className:"favorite-music-icon"})]})},q=function(){var e=Object(g.a)(d.a.mark((function e(t){var A,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://itunes.apple.com/lookup?id=".concat(t,"&entity=song"));case 2:return A=e.sent,e.next=5,A.json();case 5:return a=e.sent,e.abrupt("return",a.results);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=q;A(41);var z=function(){var e=Object(a.useState)(null),t=Object(b.a)(e,2),A=t[0],n=t[1],i=Object(a.useState)(null),c=Object(b.a)(i,2),r=c[0],s=c[1],o=Object(a.useState)(!1),u=Object(b.a)(o,2),j=u[0],m=u[1],O=Object(l.r)();return Object(a.useEffect)((function(){var e=function(){var e=Object(g.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(O.id);case 2:t=e.sent,n(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(g.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W();case 2:t=e.sent,s(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var A=Object(g.a)(d.a.mark((function A(){return d.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,m(!0),A.next=4,e();case 4:return A.next=6,t();case 6:A.next=11;break;case 8:A.prev=8,A.t0=A.catch(0),console.error("Oops...Algo deu errado. Tente novamente!");case 11:return A.prev=11,m(!1),A.finish(11);case 14:case"end":return A.stop()}}),A,null,[[0,8,11,14]])})));return function(){return A.apply(this,arguments)}}();A()}),[O]),Object(a.useEffect)((function(){}),[]),Object(I.jsxs)("div",{"data-testid":"page-album",className:"page",id:"album-page",children:[j&&Object(I.jsx)(f,{}),A&&r&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("div",{id:"album-container",children:Object(I.jsx)(K,{albumData:A[0]})}),Object(I.jsx)("div",{id:"music-list-container",children:A.slice(1).map((function(e){return Object(I.jsx)(Z,{musicData:e,setIsLoading:m,favoriteMusicList:r,setFavoriteMusicList:s},e.trackId)}))})]})]})};A(42);var V=function(){var e=Object(a.useState)(null),t=Object(b.a)(e,2),A=t[0],n=t[1],i=Object(a.useState)(!1),c=Object(b.a)(i,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(g.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,W();case 3:t=e.sent,n(t),s(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(I.jsxs)("div",{"data-testid":"page-favorites",className:"page",id:"favorites-page",children:[r&&Object(I.jsx)(f,{}),A&&(A.length?A.map((function(e){return Object(I.jsx)(Z,{musicData:e,setIsLoading:s,favoriteMusicList:[e],setFavoriteMusicList:n},e.trackId)})):Object(I.jsx)("p",{id:"no-favorites-message",children:"N\xe3o h\xe1 m\xfasicas favoritas!"}))]})},X="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABtklEQVR4nO2ZPShFYRjHf5dEsriSrAwWGViUkiQMRh8Li7JZZVDko5QySBYGCzIZZRZyDcrHjUSxiluyuK7u0VvnLqeLc895OM/N+dV/fHuf3zmn932f80JISEhQ1ABDwBywAiwBE0ALECEP6ASOAeubHABRFDMPpH+QyOQBWAUaUMaoSwFn3oFhlFAOvHgUMUkB9Shg0IdEJmsoYFNA5BoFxAREPoDioEVuBERMyoIWuRUSKQ1a5EhAwqx6gbMjIHKKAqYFRJZRQI+ASC8KaBQQaUIBewIiuyjgUkDkAgVsCYhsoICOHPqQbDFj21FCtw+RLpRx50HCHG/UsehBxIxRRy2QzLEzrEMps/n+NjJEXO4r90Ahyom5EImTB5y4ELkiD4i7/EGnmiLg0YXIK1CCYqZyWLUWUEgUWPdw5jL/xCpRQBUw6fJz+ipPwAxQHYRAq/0033wIOJMEtoG2375DKbB76zPB4r/KOdBvzylK8x8JWFmEzNwijNgHPCugpOwafDHgs/uTShro83OB86xAwrKTACq8iIwrKN5yZMyLyKGCwi1H9r2IJBQUbmXZPENCQv4rn6Ej5y2yxDtPAAAAAElFTkSuQmCC";A(43);var _=function(){var e=Object(a.useState)(void 0),t=Object(b.a)(e,2),A=t[0],n=t[1],i=Object(a.useState)(!1),c=Object(b.a)(i,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(g.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,C();case 3:t=e.sent,n(t),s(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(I.jsxs)("div",{"data-testid":"page-profile",className:"page",id:"profile-page",children:[r&&Object(I.jsx)(f,{}),A&&Object(I.jsxs)("div",{id:"user-info",children:[Object(I.jsxs)("div",{className:"info-container image-container",children:[Object(I.jsx)("div",{className:"image-background",children:Object(I.jsx)("img",{"data-testid":"profile-image",id:"user-image",src:A.image||X,alt:A.name})}),Object(I.jsx)(k.b,{to:w.profileEdit,className:"profile-edit-btn",children:"Editar perfil"})]}),Object(I.jsxs)("div",{className:"info-container",children:[Object(I.jsx)("span",{className:"info-label",children:"Nome:"}),Object(I.jsx)("span",{className:"info",children:A.name})]}),Object(I.jsxs)("div",{className:"info-container",children:[Object(I.jsx)("span",{className:"info-label",children:"Email:"}),Object(I.jsx)("span",{className:"info",children:A.email})]}),Object(I.jsxs)("div",{className:"info-container",children:[Object(I.jsx)("span",{className:"info-label",children:"Descri\xe7\xe3o:"}),Object(I.jsx)("p",{className:"info",children:A.description})]})]})]})},$=A(7),ee={name:/\S+/,email:/\w+@\w+\.\w+/,description:/\S+/,image:/./};function te(e){return Object.keys(e).every((function(t){return ee[t].test(e[t])}))}A(44);var Ae=function(){var e=Object(a.useState)(void 0),t=Object(b.a)(e,2),A=t[0],n=t[1],i=Object(a.useState)(""),c=Object(b.a)(i,2),r=c[0],s=c[1],o=Object(a.useState)(!1),u=Object(b.a)(o,2),j=u[0],O=u[1],h=Object(a.useState)(!1),p=Object(b.a)(h,2),E=p[0],x=p[1],Q=Object(l.p)();Object(a.useEffect)((function(){var e=function(){var e=Object(g.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,C();case 3:t=e.sent,n(Object(m.a)(Object(m.a)({},t),{},{image:t.image||X})),x(te(t)),O(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(a.useEffect)((function(){return function(){return window.location.reload()}}),[]),Object(a.useEffect)((function(){A&&x(te(A))}),[A]);var M=function(e){var t=e.target,a=t.name,i=t.value;"image"===a?(s(t.value),function(e){var t=e.files[0],a=new FileReader;a.addEventListener("load",(function(){n(Object(m.a)(Object(m.a)({},A),{},{image:a.result}))})),t&&a.readAsDataURL(t)}(t)):n((function(e){return Object(m.a)(Object(m.a)({},e),{},Object($.a)({},a,i))}))},v=function(){var e=Object(g.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,B(A);case 3:Q(w.profile);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(I.jsxs)("div",{"data-testid":"page-profile-edit",className:"page",id:"profile-edit-page",children:[j&&Object(I.jsx)(f,{}),A&&Object(I.jsx)("div",{id:"profile-edit-page",children:Object(I.jsxs)("form",{action:"",id:"profile-edit-form",children:[Object(I.jsxs)("div",{className:"image-container info-container",children:[Object(I.jsx)("div",{className:"image-background",children:Object(I.jsx)("img",{src:A.image,alt:A.name,className:"image-container",onClick:function(){var e=document.querySelector("#edit-image-input");console.log(),e.click()},role:"presentation"})}),Object(I.jsx)("input",{"data-testid":"edit-input-image",type:"file",accept:"image/*",name:"image",id:"edit-image-input",value:r,onChange:M,style:{display:"none"}})]}),Object(I.jsxs)("div",{id:"info-section",children:[Object(I.jsxs)("label",{htmlFor:"user-name",className:"info-container",children:[Object(I.jsx)("span",{className:"info-label",children:"Nome"}),Object(I.jsx)("input",{"data-testid":"edit-input-name",type:"text",id:"user-name",className:"info",name:"name",value:A.name,onChange:M})]}),Object(I.jsxs)("label",{htmlFor:"user-email",className:"info-container",children:[Object(I.jsx)("span",{className:"info-label",children:"Email"}),Object(I.jsx)("input",{"data-testid":"edit-input-email",type:"text",id:"user-email",className:"info",name:"email",value:A.email,onChange:M})]}),Object(I.jsxs)("label",{htmlFor:"user-description",className:"info-container",children:[Object(I.jsx)("span",{className:"info-label",children:"Descri\xe7\xe3o"}),Object(I.jsx)("textarea",{"data-testid":"edit-input-description",type:"text",id:"user-description",className:"info",name:"description",value:A.description,onChange:M})]})]}),Object(I.jsx)("button",{"data-testid":"edit-button-save",type:"button",className:"profile-edit-btn",onClick:v,disabled:!E,children:"Editar perfil"})]})})]})};var ae=function(){return Object(I.jsx)("div",{"data-testid":"page-not-found",children:Object(I.jsx)("h1",{children:"NotFound"})})};A(45);var ne=function(){var e=Object(a.useState)(null),t=Object(b.a)(e,2),A=t[0],n=t[1],i=Object(a.useState)(!1),c=Object(b.a)(i,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(g.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,C();case 3:t=e.sent,n(t),s(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(I.jsxs)("header",{"data-testid":"header-component",id:"page-header",children:[Object(I.jsxs)("div",{id:"page-info",children:[Object(I.jsxs)("div",{id:"page-logo-container",children:[Object(I.jsx)("div",{id:"page-icon-container",children:Object(I.jsx)("img",{src:x,alt:"\xcdcone da Aplica\xe7\xe3o"})}),Object(I.jsx)("h1",{id:"page-title",children:"Trybetunes"})]}),Object(I.jsx)("div",{id:"user-conatiner",children:A&&!r?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("div",{id:"user-image-container",children:Object(I.jsx)("img",{src:A.image||X,alt:"Imagem do usu\xe1rio"})}),Object(I.jsx)("span",{"data-testid":"header-user-name",id:"user-name",children:A.name})]}):Object(I.jsx)(f,{})})]}),Object(I.jsxs)("nav",{id:"page-nav",children:[Object(I.jsx)(k.c,{"data-testid":"link-to-search",to:w.search,children:"Search"}),Object(I.jsx)(k.c,{"data-testid":"link-to-favorites",to:w.favorites,children:"Favorites"}),Object(I.jsx)(k.c,{"data-testid":"link-to-profile",to:w.profile,children:"Profile"})]})]})};var ie=function(){return Object(I.jsxs)("div",{id:"page-background",children:[Object(I.jsx)(ne,{}),Object(I.jsx)(l.a,{})]})},ce=(A(46),function(e){Object(o.a)(A,e);var t=Object(u.a)(A);function A(){return Object(r.a)(this,A),t.apply(this,arguments)}return Object(s.a)(A,[{key:"render",value:function(){return Object(I.jsxs)(l.d,{children:[Object(I.jsx)(l.b,{path:w.login,element:Object(I.jsx)(Q,{})}),Object(I.jsxs)(l.b,{path:"",element:Object(I.jsx)(ie,{}),children:[Object(I.jsx)(l.b,{path:w.search,element:Object(I.jsx)(F,{})}),Object(I.jsx)(l.b,{path:w.album,element:Object(I.jsx)(z,{})}),Object(I.jsx)(l.b,{path:w.favorites,element:Object(I.jsx)(V,{})}),Object(I.jsx)(l.b,{path:w.profile,element:Object(I.jsx)(_,{})}),Object(I.jsx)(l.b,{path:w.profileEdit,element:Object(I.jsx)(Ae,{})})]}),Object(I.jsx)(l.b,{path:w.notFound,element:Object(I.jsx)(ae,{})})]})}}]),A}(n.a.Component)),re=ce;c.a.render(Object(I.jsx)(n.a.StrictMode,{children:Object(I.jsx)(k.a,{children:Object(I.jsx)(re,{})})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.8062f5f4.chunk.js.map