"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[487],{3487:function(e,a,s){s.r(a),s.d(a,{default:function(){return U}});var n=s(5671),t=s(3144),r=s(136),c=s(8505),i=s(2791),o=s(4569),l=s.n(o),d=s(5803),f=s(1413),u=s(5987),m=s(1694),x=s.n(m),v=s(239),h=s(162),p=s(7858);function N(e,a){return Array.isArray(e)?e.includes(a):e===a}var j=i.createContext({});j.displayName="AccordionContext";var y=j,b=s(184),Z=["as","bsPrefix","className","children","eventKey"],w=i.forwardRef((function(e,a){var s=e.as,n=void 0===s?"div":s,t=e.bsPrefix,r=e.className,c=e.children,o=e.eventKey,l=(0,u.Z)(e,Z),d=(0,i.useContext)(y).activeEventKey;return t=(0,h.vE)(t,"accordion-collapse"),(0,b.jsx)(p.Z,(0,f.Z)((0,f.Z)({ref:a,in:N(d,o)},l),{},{className:x()(r,t),children:(0,b.jsx)(n,{children:i.Children.only(c)})}))}));w.displayName="AccordionCollapse";var g=w,C=i.createContext({eventKey:""});C.displayName="AccordionItemContext";var P=C,k=["as","bsPrefix","className"],K=i.forwardRef((function(e,a){var s=e.as,n=void 0===s?"div":s,t=e.bsPrefix,r=e.className,c=(0,u.Z)(e,k);t=(0,h.vE)(t,"accordion-body");var o=(0,i.useContext)(P).eventKey;return(0,b.jsx)(g,{eventKey:o,children:(0,b.jsx)(n,(0,f.Z)((0,f.Z)({ref:a},c),{},{className:x()(r,t)}))})}));K.displayName="AccordionBody";var E=K,A=s(2982),R=["as","bsPrefix","className","onClick"];var S=i.forwardRef((function(e,a){var s=e.as,n=void 0===s?"button":s,t=e.bsPrefix,r=e.className,c=e.onClick,o=(0,u.Z)(e,R);t=(0,h.vE)(t,"accordion-button");var l=(0,i.useContext)(P).eventKey,d=function(e,a){var s=(0,i.useContext)(y),n=s.activeEventKey,t=s.onSelect,r=s.alwaysOpen;return function(s){var c=e===n?null:e;r&&(c=Array.isArray(n)?n.includes(e)?n.filter((function(a){return a!==e})):[].concat((0,A.Z)(n),[e]):[e]),null==t||t(c,s),null==a||a(s)}}(l,c),m=(0,i.useContext)(y).activeEventKey;return"button"===n&&(o.type="button"),(0,b.jsx)(n,(0,f.Z)((0,f.Z)({ref:a,onClick:d},o),{},{"aria-expanded":l===m,className:x()(r,t,!N(m,l)&&"collapsed")}))}));S.displayName="AccordionButton";var B=S,O=["as","bsPrefix","className","children","onClick"],I=i.forwardRef((function(e,a){var s=e.as,n=void 0===s?"h2":s,t=e.bsPrefix,r=e.className,c=e.children,i=e.onClick,o=(0,u.Z)(e,O);return t=(0,h.vE)(t,"accordion-header"),(0,b.jsx)(n,(0,f.Z)((0,f.Z)({ref:a},o),{},{className:x()(r,t),children:(0,b.jsx)(B,{onClick:i,children:c})}))}));I.displayName="AccordionHeader";var H=I,M=["as","bsPrefix","className","eventKey"],_=i.forwardRef((function(e,a){var s=e.as,n=void 0===s?"div":s,t=e.bsPrefix,r=e.className,c=e.eventKey,o=(0,u.Z)(e,M);t=(0,h.vE)(t,"accordion-item");var l=(0,i.useMemo)((function(){return{eventKey:c}}),[c]);return(0,b.jsx)(P.Provider,{value:l,children:(0,b.jsx)(n,(0,f.Z)((0,f.Z)({ref:a},o),{},{className:x()(r,t)}))})}));_.displayName="AccordionItem";var D=_,G=["as","activeKey","bsPrefix","className","onSelect","flush","alwaysOpen"],V=i.forwardRef((function(e,a){var s=(0,v.Ch)(e,{activeKey:"onSelect"}),n=s.as,t=void 0===n?"div":n,r=s.activeKey,c=s.bsPrefix,o=s.className,l=s.onSelect,d=s.flush,m=s.alwaysOpen,p=(0,u.Z)(s,G),N=(0,h.vE)(c,"accordion"),j=(0,i.useMemo)((function(){return{activeEventKey:r,onSelect:l,alwaysOpen:m}}),[r,l,m]);return(0,b.jsx)(y.Provider,{value:j,children:(0,b.jsx)(t,(0,f.Z)((0,f.Z)({ref:a},p),{},{className:x()(o,N,d&&"".concat(N,"-flush"))}))})}));V.displayName="Accordion";var q=Object.assign(V,{Button:B,Collapse:g,Item:D,Header:H,Body:E}),z=s(7022),F=s(3360),J=s(9743),L=s(2677),Q=(0,d.Vo)((function(){return s.e(15).then(s.bind(s,2015))})),T="https://www.api.artgalleryxisca.me",U=function(e){(0,r.Z)(s,e);var a=(0,c.Z)(s);function s(e){var t;return(0,n.Z)(this,s),(t=a.call(this,e)).state={obra:[],autor:[],genere:[],preu:[]},t}return(0,t.Z)(s,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;l().get(T+"/obres/"+a+"/info").then((function(a){var s=a.data;e.setState({obra:s}),e.setState({preu:e.state.obra.preu})})),l().get(T+"/obres/"+a).then((function(a){var s=a.data;e.setState({autor:s})})),l().get(T+"/obres/"+a+"/genere").then((function(a){var s=a.data;e.setState({genere:s})}))}},{key:"retorna",value:function(){window.history.back()}},{key:"render",value:function(){var e=this;return(0,b.jsxs)(z.Z,{className:"mt-3",children:[(0,b.jsx)(F.Z,{variant:"dark",id:"exposicio",onClick:this.retorna,children:(0,b.jsx)(Q,{string:"expo"})}),(0,b.jsxs)(J.Z,{className:"d-flex justify-content-between mt-3",children:[(0,b.jsx)(L.Z,{md:"12",lg:"6",children:(0,b.jsx)("img",{className:"img-fluid rounded-start ",id:"foto",src:"https://www.api.artgalleryxisca.me/fotos/"+this.state.obra.id_obres,alt:this.state.obra.nom})}),(0,b.jsxs)(L.Z,{md:"12",lg:"6",children:[(0,b.jsxs)(J.Z,{className:"d-flex justify-content-between",children:[(0,b.jsx)(L.Z,{className:"col-8",children:(0,b.jsx)("p",{className:"fs-4 fw-bold text-start",children:this.state.obra.nom})}),(0,b.jsx)(L.Z,{className:"col-4 ",children:1===e.state.obra.venut||0===e.state.obra.preu?(0,b.jsx)("p",{className:"fs-4 fw-light text-end",children:"No disponible"}):(0,b.jsxs)("p",{className:"fs-4 fw-light text-end",children:[e.state.obra.preu,"\u20ac"]})})]}),(0,b.jsxs)(J.Z,{className:"mt-2",children:[(0,b.jsx)(L.Z,{className:"col-12",children:this.state.autor.map((function(e){return(0,b.jsx)("p",{className:"fs-5 fw-light",children:e.nom},e.nom)}))}),(0,b.jsx)(L.Z,{children:this.state.genere.map((function(e){return(0,b.jsx)("p",{className:"fs-5 fw-light",children:e.nom},e.nom)}))})]}),(0,b.jsx)(J.Z,{className:"mt-2",children:(0,b.jsx)(L.Z,{className:"col-12 mt-3",children:1===e.state.obra.venut||0===e.state.obra.preu?(0,b.jsx)("p",{className:"fs-4 fw-light text-end"}):(0,b.jsxs)(L.Z,{className:"d-grid gap-2 mt-3",children:[(0,b.jsx)("a",{href:T+"/pago?idObra="+e.state.obra.id_obres,className:"text-decoration-none stretched-link mt-2",id:"link3",children:(0,b.jsx)(F.Z,{className:"px-5",id:"compra",variant:"dark",children:"Comprar"})}),(0,b.jsxs)(q,{defaultActiveKey:"0",flush:!0,className:"mt-5 mb-5",children:[(0,b.jsxs)(q.Item,{eventKey:"0",children:[(0,b.jsx)(q.Header,{children:(0,b.jsx)("p",{children:(0,b.jsx)(Q,{string:"garantia"})})}),(0,b.jsx)(q.Body,{children:(0,b.jsx)("p",{className:"fw-light",children:(0,b.jsx)(Q,{string:"infoEnviament"})})})]}),(0,b.jsxs)(q.Item,{eventKey:"1",children:[(0,b.jsx)(q.Header,{children:(0,b.jsx)("p",{children:(0,b.jsx)(Q,{string:"enviament"})})}),(0,b.jsx)(q.Body,{children:(0,b.jsxs)("p",{className:"fw-light",children:[" ",(0,b.jsx)(Q,{string:"infoGarantia"})]})})]})]})]})})})]})]})]})}}]),s}(i.Component)},2677:function(e,a,s){var n=s(885),t=s(1413),r=s(5987),c=s(1694),i=s.n(c),o=s(2791),l=s(162),d=s(184),f=["as","bsPrefix","className"],u=["className"],m=["xxl","xl","lg","md","sm","xs"];var x=o.forwardRef((function(e,a){var s=function(e){var a=e.as,s=e.bsPrefix,n=e.className,c=(0,r.Z)(e,f);s=(0,l.vE)(s,"col");var o=[],d=[];return m.forEach((function(e){var a,n,t,r=c[e];delete c[e],"object"===typeof r&&null!=r?(a=r.span,n=r.offset,t=r.order):a=r;var i="xs"!==e?"-".concat(e):"";a&&o.push(!0===a?"".concat(s).concat(i):"".concat(s).concat(i,"-").concat(a)),null!=t&&d.push("order".concat(i,"-").concat(t)),null!=n&&d.push("offset".concat(i,"-").concat(n))})),[(0,t.Z)((0,t.Z)({},c),{},{className:i().apply(void 0,[n].concat(o,d))}),{as:a,bsPrefix:s,spans:o}]}(e),c=(0,n.Z)(s,2),o=c[0],x=o.className,v=(0,r.Z)(o,u),h=c[1],p=h.as,N=void 0===p?"div":p,j=h.bsPrefix,y=h.spans;return(0,d.jsx)(N,(0,t.Z)((0,t.Z)({},v),{},{ref:a,className:i()(x,!y.length&&j)}))}));x.displayName="Col",a.Z=x},9743:function(e,a,s){var n=s(1413),t=s(5987),r=s(1694),c=s.n(r),i=s(2791),o=s(162),l=s(184),d=["bsPrefix","className","as"],f=["xxl","xl","lg","md","sm","xs"],u=i.forwardRef((function(e,a){var s=e.bsPrefix,r=e.className,i=e.as,u=void 0===i?"div":i,m=(0,t.Z)(e,d),x=(0,o.vE)(s,"row"),v="".concat(x,"-cols"),h=[];return f.forEach((function(e){var a,s=m[e];delete m[e],a=null!=s&&"object"===typeof s?s.cols:s;var n="xs"!==e?"-".concat(e):"";null!=a&&h.push("".concat(v).concat(n,"-").concat(a))})),(0,l.jsx)(u,(0,n.Z)((0,n.Z)({ref:a},m),{},{className:c().apply(void 0,[r,x].concat(h))}))}));u.displayName="Row",a.Z=u}}]);
//# sourceMappingURL=487.60c2d1cf.chunk.js.map