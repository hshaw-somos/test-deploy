(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,n,t){e.exports=t(37)},37:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),r=t(18),c=t.n(r),o=t(15),i=t(19),u=t(20),m=t(6),E=t.n(m);function s(){var e=Object(i.a)(["\n   opacity: ",";\n   transition: opacity 0.5s ease;\n"]);return s=function(){return e},e}var d=document.getElementById("index-html-loading"),v=u.a.div(s(),function(e){return e.visible?1:0});v.propTypes={visible:E.a.bool},v.defaultProps={visible:!1};var p=function(e){var n=e.children,t=Object(a.useState)(!1),r=Object(o.a)(t,2),c=r[0],i=r[1],u=Object(a.useState)(!0),m=Object(o.a)(u,2),E=m[0],s=m[1];Object(a.useEffect)(function(){i(!0)},[]);var p=E?function(){d.classList.add("app-loaded"),s(!1)}:null;return l.a.createElement(v,{visible:c,onTransitionEnd:p},n)},b=t(5),f=t(7),h=function(){return l.a.createElement("div",null,l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(b.b,{to:"/admin/"},"Admin")),l.a.createElement("li",null,l.a.createElement(b.b,{to:"/this-path-doesnt-exist"},"404")))),l.a.createElement("h2",null,"Home"))},w=function(){return l.a.createElement("div",null,l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(b.b,{to:"/"},"Home")))),l.a.createElement("h2",null,"Admin"))},g=function(){return l.a.createElement("div",null,l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(b.b,{to:"/"},"Home")))),l.a.createElement("h2",null,"NotFound"))},j=function(){return l.a.createElement(b.a,null,l.a.createElement(f.c,null,l.a.createElement(f.a,{path:"/",exact:!0,component:h}),l.a.createElement(f.a,{path:"/admin/",component:w}),l.a.createElement(f.a,{component:g})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(function(){return l.a.createElement(p,null,l.a.createElement(j,null))},null),document.getElementById("index-html-root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.7b241e62.chunk.js.map