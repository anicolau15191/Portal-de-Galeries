"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[345],{5690:function(e,n,t){t.r(n),t.d(n,{default:function(){return X}});var r,o=t(5671),a=t(3144),i=t(7326),c=t(136),s=t(8505),l=t(2791),u=t(885),d=t(5987),f=t(1413),p=t(1694),b=t.n(p),m=t(3070),h=t(7357),v=t(8376),y=t(6382);function Z(e){if((!r&&0!==r||e)&&h.Z){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),r=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return r}var g=t(8633),x=t(9007),w=t(3201),j=t(1683),N=t(3690),O=t(1835),E=t(4382),k=t(2709),C=t(6543),P=(0,C.Z)("modal-body"),S=t(9820),D=t(162),F=t(184),R=["bsPrefix","className","contentClassName","centered","size","fullscreen","children","scrollable"],T=l.forwardRef((function(e,n){var t=e.bsPrefix,r=e.className,o=e.contentClassName,a=e.centered,i=e.size,c=e.fullscreen,s=e.children,l=e.scrollable,u=(0,d.Z)(e,R);t=(0,D.vE)(t,"modal");var p="".concat(t,"-dialog"),m="string"===typeof c?"".concat(t,"-fullscreen-").concat(c):"".concat(t,"-fullscreen");return(0,F.jsx)("div",(0,f.Z)((0,f.Z)({},u),{},{ref:n,className:b()(p,r,i&&"".concat(t,"-").concat(i),a&&"".concat(p,"-centered"),l&&"".concat(p,"-scrollable"),c&&m),children:(0,F.jsx)("div",{className:b()("".concat(t,"-content"),o),children:s})}))}));T.displayName="ModalDialog";var I=T,M=(0,C.Z)("modal-footer"),A=t(8024),H=["bsPrefix","className"],B=l.forwardRef((function(e,n){var t=e.bsPrefix,r=e.className,o=(0,d.Z)(e,H);return t=(0,D.vE)(t,"modal-header"),(0,F.jsx)(A.Z,(0,f.Z)((0,f.Z)({ref:n},o),{},{className:b()(r,t)}))}));B.displayName="ModalHeader",B.defaultProps={closeLabel:"Close",closeButton:!1};var z=B,K=(0,t(7472).Z)("h4"),U=(0,C.Z)("modal-title",{Component:K}),L=["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"],W={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:I};function _(e){return(0,F.jsx)(k.Z,(0,f.Z)((0,f.Z)({},e),{},{timeout:null}))}function G(e){return(0,F.jsx)(k.Z,(0,f.Z)((0,f.Z)({},e),{},{timeout:null}))}var q=l.forwardRef((function(e,n){var t=e.bsPrefix,r=e.className,o=e.style,a=e.dialogClassName,i=e.contentClassName,c=e.children,s=e.dialogAs,p=e["aria-labelledby"],k=e.show,C=e.animation,P=e.backdrop,R=e.keyboard,T=e.onEscapeKeyDown,I=e.onShow,M=e.onHide,A=e.container,H=e.autoFocus,B=e.enforceFocus,z=e.restoreFocus,K=e.restoreFocusOptions,U=e.onEntered,W=e.onExit,q=e.onExiting,J=e.onEnter,Q=e.onEntering,V=e.onExited,X=e.backdropClassName,Y=e.manager,$=(0,d.Z)(e,L),ee=(0,l.useState)({}),ne=(0,u.Z)(ee,2),te=ne[0],re=ne[1],oe=(0,l.useState)(!1),ae=(0,u.Z)(oe,2),ie=ae[0],ce=ae[1],se=(0,l.useRef)(!1),le=(0,l.useRef)(!1),ue=(0,l.useRef)(null),de=(0,g.Z)(),fe=(0,u.Z)(de,2),pe=fe[0],be=fe[1],me=(0,w.Z)(n,be),he=(0,x.Z)(M),ve=(0,D.SC)();t=(0,D.vE)(t,"modal");var ye=(0,l.useMemo)((function(){return{onHide:he}}),[he]);function Ze(){return Y||(0,E.t)({isRTL:ve})}function ge(e){if(h.Z){var n=Ze().getScrollbarWidth()>0,t=e.scrollHeight>(0,v.Z)(e).documentElement.clientHeight;re({paddingRight:n&&!t?Z():void 0,paddingLeft:!n&&t?Z():void 0})}}var xe=(0,x.Z)((function(){pe&&ge(pe.dialog)}));(0,j.Z)((function(){(0,y.Z)(window,"resize",xe),null==ue.current||ue.current()}));var we=function(){se.current=!0},je=function(e){se.current&&pe&&e.target===pe.dialog&&(le.current=!0),se.current=!1},Ne=function(){ce(!0),ue.current=(0,N.Z)(pe.dialog,(function(){ce(!1)}))},Oe=function(e){"static"!==P?le.current||e.target!==e.currentTarget?le.current=!1:null==M||M():function(e){e.target===e.currentTarget&&Ne()}(e)},Ee=(0,l.useCallback)((function(e){return(0,F.jsx)("div",(0,f.Z)((0,f.Z)({},e),{},{className:b()("".concat(t,"-backdrop"),X,!C&&"show")}))}),[C,X,t]),ke=(0,f.Z)((0,f.Z)({},o),te);C||(ke.display="block");return(0,F.jsx)(S.Z.Provider,{value:ye,children:(0,F.jsx)(O.Z,{show:k,ref:me,backdrop:P,container:A,keyboard:!0,autoFocus:H,enforceFocus:B,restoreFocus:z,restoreFocusOptions:K,onEscapeKeyDown:function(e){R||"static"!==P?R&&T&&T(e):(e.preventDefault(),Ne())},onShow:I,onHide:M,onEnter:function(e,n){e&&(e.style.display="block",ge(e)),null==J||J(e,n)},onEntering:function(e,n){null==Q||Q(e,n),(0,m.ZP)(window,"resize",xe)},onEntered:U,onExit:function(e){null==ue.current||ue.current(),null==W||W(e)},onExiting:q,onExited:function(e){e&&(e.style.display=""),null==V||V(e),(0,y.Z)(window,"resize",xe)},manager:Ze(),transition:C?_:void 0,backdropTransition:C?G:void 0,renderBackdrop:Ee,renderDialog:function(e){return(0,F.jsx)("div",(0,f.Z)((0,f.Z)({role:"dialog"},e),{},{style:ke,className:b()(r,t,ie&&"".concat(t,"-static")),onClick:P?Oe:void 0,onMouseUp:je,"aria-labelledby":p,children:(0,F.jsx)(s,(0,f.Z)((0,f.Z)({},$),{},{onMouseDown:we,className:a,contentClassName:i,children:c}))}))}})})}));q.displayName="Modal",q.defaultProps=W;var J=Object.assign(q,{Body:P,Header:z,Title:U,Footer:M,Dialog:I,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),Q=t(3360),V=t(1523),X=function(e){(0,c.Z)(t,e);var n=(0,s.Z)(t);function t(){var e;return(0,o.Z)(this,t),(e=n.call(this)).showModal=function(){e.setState({show:!0})},e.hideModal=function(){e.setState({show:!1})},e.state={show:!0},e.showModal=e.showModal.bind((0,i.Z)(e)),e.hideModal=e.hideModal.bind((0,i.Z)(e)),e}return(0,a.Z)(t,[{key:"render",value:function(){var e=this.props.match.params.nom,n=this.props.match.params.preu,t=this.props.match.params.pedido;return(0,F.jsx)("div",{children:(0,F.jsxs)(J,{show:this.state.show,animation:!1,children:[(0,F.jsx)(J.Header,{children:(0,F.jsx)(J.Title,{children:"Gr\xe0cies per la teva compra"})}),(0,F.jsxs)(J.Body,{children:[(0,F.jsxs)("p",{children:["Obra : ",e]}),(0,F.jsxs)("p",{children:["Numero de comanda : ",t," "]}),(0,F.jsxs)("p",{children:["Import total : ",n,"\u20ac"]})]}),(0,F.jsx)(J.Footer,{children:(0,F.jsxs)(V.rU,{to:"/home/",className:"text-decoration-none stretched-link",children:[" ",(0,F.jsx)(Q.Z,{variant:"dark",children:"Inici"})]})})]})})}}]),t}(l.Component)},3201:function(e,n,t){var r=t(2791),o=function(e){return e&&"function"!==typeof e?function(n){e.current=n}:e};n.Z=function(e,n){return(0,r.useMemo)((function(){return function(e,n){var t=o(e),r=o(n);return function(e){t&&t(e),r&&r(e)}}(e,n)}),[e,n])}},5341:function(e,n,t){t.d(n,{FT:function(){return c}});var r=t(885),o=t(2791),a=t(184),i=["as","disabled"];function c(e){var n=e.tagName,t=e.disabled,r=e.href,o=e.target,a=e.rel,i=e.onClick,c=e.tabIndex,s=void 0===c?0:c,l=e.type;n||(n=null!=r||null!=o||null!=a?"a":"button");var u={tagName:n};if("button"===n)return[{type:l||"button",disabled:t},u];var d=function(e){(t||"a"===n&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),t?e.stopPropagation():null==i||i(e)};return"a"===n&&(r||(r="#"),t&&(r=void 0)),[{role:"button",disabled:void 0,tabIndex:t?void 0:s,href:r,target:"a"===n?o:void 0,"aria-disabled":t||void 0,rel:"a"===n?a:void 0,onClick:d,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),d(e))}},u]}var s=o.forwardRef((function(e,n){var t=e.as,o=e.disabled,s=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,i),l=c(Object.assign({tagName:t,disabled:o},s)),u=(0,r.Z)(l,2),d=u[0],f=u[1].tagName;return(0,a.jsx)(f,Object.assign({},s,d,{ref:n}))}));s.displayName="Button",n.ZP=s},162:function(e,n,t){t.d(n,{vE:function(){return a},SC:function(){return i}});var r=t(2791),o=(t(184),r.createContext({prefixes:{}}));o.Consumer,o.Provider;function a(e,n){var t=(0,r.useContext)(o).prefixes;return e||t[n]||n}function i(){return"rtl"===(0,r.useContext)(o).dir}},1413:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(4942);function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}},5987:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(3366);function o(e,n){if(null==e)return{};var t,o,a=(0,r.Z)(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}},885:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(181);function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(s){c=!0,o=s}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}}(e,n)||(0,r.Z)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=345.86a2aae3.chunk.js.map