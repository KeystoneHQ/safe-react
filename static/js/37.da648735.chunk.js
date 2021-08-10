(this["webpackJsonpsafe-react"]=this["webpackJsonpsafe-react"]||[]).push([[37],{1383:function(e,t,n){"use strict";n.r(t);var a,r=n(13),c=n(71),i=n(1),o=n.n(i),u=n(12),l=n(407),s=n(0),d=n.n(s),p=n(55),m=n(605),f=n(1499),b=n(1455),h=n(1436),g=n(143),v=n(158),x=n(1467),O=n(69),j=n(88),E=n(1428),y=n(341),S=n(1481),k=function(e){var t=e.onClose,n=Object(E.c)("selectedMethod",{subscription:{value:!0}}).input.value,a=Object(E.e)({subscription:{modifiedSinceLastSubmit:!0,submitError:!0,submitting:!0,valid:!0,validating:!0}}),r=a.modifiedSinceLastSubmit,c=a.submitError,i=a.submitting,o=a.valid,u=a.validating;return d.a.createElement(y.b.Footer,null,d.a.createElement(y.b.Footer.Buttons,{cancelButtonProps:{onClick:t},confirmButtonProps:{disabled:i||u||(!o||!!c)&&!r||!n,status:i||u?y.a.LOADING:y.a.READY,testId:"".concat(Object(S.m)(n)?"call":"review","-tx-btn"),text:Object(S.m)(n)?"Call":"Review"}}))},w=n(1603),C=n(541),I=n(123),A=n(110),M=n(22),R=n(31),N=function(e){var t=e.inputs,n=e.name,a=null===t||void 0===t?void 0:t.map((function(e){return e.type})).join(",");return"".concat(n,"(").concat(a,")")},V=function(e){return R.j.utils.keccak256(e).toString()},z=function(e){var t=e.name;return"function"===e.type&&!!t},B=function(e){var t=e.stateMutability;return t&&["view","pure"].includes(t)?"read":"write"},F=function(e){return e.filter(z).map((function(e){return Object(r.a)(Object(r.a)({action:B(e)},function(e){var t=N(e);return{methodSignature:t,signatureHash:V(t)}}(e)),e)})).sort((function(e,t){var n=e.name,a=t.name;return n.toLowerCase()>a.toLowerCase()?1:-1}))},T="no data",W=function(e){try{if(0===F(JSON.parse(e)).length)return T}catch(t){return T}},H=function(){var e=Object(E.c)("contractAddress",{subscription:{value:!0}}).input.value,t=Object(E.d)().mutators,n=d.a.useRef(t.setAbiValue);return d.a.useEffect((function(){e&&function(){var t=Object(u.a)(o.a.mark((function t(){var a,r,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=void 0===Object(C.j)(e),t.next=3,Object(C.k)(e);case 3:if(t.t0=t.sent,t.t1=void 0,r=t.t0===t.t1,!a||!r){t.next=12;break}return t.next=9,Object(M.c)(e);case 9:c=t.sent,void 0===W(c)&&n.current(c);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[e]),d.a.createElement(A.a,{margin:"sm"},d.a.createElement(I.a,null,d.a.createElement(w.a,{name:"abi",placeholder:"ABI*",text:"ABI*",type:"text",validate:W})))},L=n(48),P=n(105),D=n(1462),q=n(1495),J=n(1429),_=n(1434),Q=Object(l.a)(f.a),U=function(e){var t=e.isContract,n=void 0===t||t,a=e.isRequired,r=void 0===a||a,c=e.name,i=e.onScannedValue,o=e.text,u=Q(),l=[r&&C.p,C.j,n&&C.k],p=C.c.apply(void 0,Object(P.a)(l.filter((function(e){return e})))),m=Object(E.e)({subscription:{pristine:!0}}).pristine,f=Object(E.c)("contractAddress",{subscription:{value:!0}}).input.value,b=Object(s.useState)({address:f,name:""}),h=Object(L.a)(b,2),g=h[0],v=h[1];return d.a.createElement(d.a.Fragment,null,d.a.createElement(A.a,{margin:"md"},d.a.createElement(I.a,{xs:11},(null===g||void 0===g?void 0:g.address)?d.a.createElement(J.a,{component:_.a,name:c,placeholder:o,onChange:function(e){var t=e.target.value;v({address:t})},testId:c,text:o,type:"text",validate:p}):d.a.createElement(q.b,{setSelectedEntry:v,setIsValidAddress:function(){},fieldMutator:i,pristine:m,label:"Contract address"})),d.a.createElement(I.a,{center:"xs",className:u,middle:"xs",xs:1},d.a.createElement(D.a,{handleScan:function(e,t){var n=e;n.startsWith("ethereum:")&&(n=n.replace("ethereum:","")),v({address:n}),i(n),t()}}))))},Y=Object(l.a)(f.a),G=function(){var e=Y(),t=Object(E.e)({subscription:{modifiedSinceLastSubmit:!0,submitError:!0}}),n=t.modifiedSinceLastSubmit,a=t.submitError;return!!a&&!n?d.a.createElement(A.a,{align:"center",className:e.fullWidth,margin:"xs"},d.a.createElement(j.a,{color:"error",noMargin:!0,size:"md",style:{letterSpacing:"-0.5px",overflowWrap:"anywhere"}},a)):null},K=n(1674),$=n(25),X=n(783),Z=n(1602),ee=n(1420),te=n(398),ne=n(596),ae=n(1411),re=n(459),ce=n.n(re),ie=n(137),oe=n.n(ie),ue=n(1675),le=n(1676),se=n(583),de=n(23),pe=n(24),me="452px",fe=Object(pe.default)(de.Text)(a||(a=Object($.a)(["\n  padding: 4px 0 0 8px;\n"]))),be=function(e){var t=e.onChange,n=Object(le.a)({buttonWidth:me}),a=Object(E.c)("abi",{subscription:{value:!0,valid:!0}}),r=a.input.value,c=a.meta.valid,i=Object(E.e)({subscription:{initialValues:!0}}).initialValues.selectedMethod,o=Object(s.useState)(i||{}),u=Object(L.a)(o,2),l=u[0],p=u[1],m=Object(s.useState)([]),f=Object(L.a)(m,2),b=f[0],h=f[1],g=Object(s.useState)([]),v=Object(L.a)(g,2),x=v[0],O=v[1],j=Object(s.useState)(null),y=Object(L.a)(j,2),k=y[0],w=y[1],C=Object(s.useState)(""),M=Object(L.a)(C,2),R=M[0],N=M[1];Object(s.useEffect)((function(){if(r)try{h(F(JSON.parse(r)))}catch(e){h([])}}),[r]),Object(s.useEffect)((function(){O(b.filter((function(e){var t=e.name;return null===t||void 0===t?void 0:t.toLowerCase().includes(R.toLowerCase())})))}),[b,R]);var V=function(){w(null)};return c&&r&&r!==S.a?d.a.createElement(A.a,{margin:"sm"},d.a.createElement(I.a,null,d.a.createElement(ae.a,{theme:se.a},d.a.createElement(d.a.Fragment,null,d.a.createElement("button",{className:n.button,onClick:function(e){w(e.currentTarget)},type:"button"},d.a.createElement(fe,{size:"md",color:"placeHolder",className:oe()(n.buttonInner,k&&n.openMenuButton)},l.name||"Method")),d.a.createElement(te.a,{anchorEl:k,anchorOrigin:{horizontal:"center",vertical:"bottom"},elevation:0,getContentAnchorEl:null,id:"customizedMenu",keepMounted:!0,onClose:V,open:!!k,PaperProps:{style:{width:me}},transformOrigin:{horizontal:"center",vertical:"top"}},d.a.createElement(ne.a,{className:n.listItemSearch,key:"0"},d.a.createElement("div",{className:n.search},d.a.createElement("div",{className:n.searchIcon},d.a.createElement(ce.a,null)),d.a.createElement(X.a,{classes:{root:n.inputRoot,input:n.inputInput},inputProps:{"aria-label":"search"},onChange:function(e){return N(e.target.value)},placeholder:"Search\u2026",value:R}))),d.a.createElement("div",{className:n.dropdownItemsScrollWrapper},x.map((function(e){var a=e.action,r=e.name,c=e.signatureHash;return d.a.createElement(ne.a,{className:n.listItem,key:c,onClick:function(){return p(n=e),t(n),void V();var n},value:c},d.a.createElement(ee.a,{primary:r}),d.a.createElement(Z.a,{className:n.iconRight},c===l.signatureHash?d.a.createElement("img",{alt:"checked",src:ue.a}):d.a.createElement("span",null)),d.a.createElement(Z.a,{className:n.iconRight},d.a.createElement("div",null,a)))})))))))):null},he=function(e){try{var t=JSON.parse(e);if(!Array.isArray(t))return"be sure to surround value with []"}catch(n){return"invalid format"}},ge=function(e,t){return Object(S.h)(t)?"".concat(e,' E.g.: ["0xACa94ef8bD5ffEE41947b4585a84BdA5a3d3DA6E","0x1dF62f291b2E969fB0849d99D9Ce41e2F137006e"]'):Object(S.j)(t)?"".concat(e," E.g.: [true, false, false, true]"):Object(S.n)(t)?"".concat(e," E.g.: [1000, 212, 320000022, 23]"):Object(S.l)(t)?"".concat(e," E.g.: [1000, -212, 1232, -1]"):Object(S.k)(t)?"".concat(e,' E.g.: ["0xc00000000000000000000000000000000000", "0xc00000000000000000000000000000000001"]'):"".concat(e,' E.g.: ["first value", "second value", "third value"]')},ve=function(e){var t=e.name,n=e.text,a=e.type;return d.a.createElement(w.a,{name:t,placeholder:ge(n,a),text:n,type:"text",validate:he})},xe=function(e){var t=e.type,n=e.keyValue,a=e.placeholder;if(!t)return null;switch(t){case"bool":var r={"data-testid":n};return d.a.createElement(I.a,null,d.a.createElement(J.a,{component:de.Checkbox,name:n,label:a,type:"checkbox",inputProps:r}));case"address":return d.a.createElement(I.a,null,d.a.createElement(J.a,{component:_.a,name:n,placeholder:a,testId:n,text:a,type:"text",validate:Object(C.c)(C.p,C.i)}));default:return d.a.createElement(I.a,null,Object(S.i)(t)?d.a.createElement(ve,{name:n,text:a,type:t}):d.a.createElement(J.a,{component:_.a,name:n,placeholder:a,testId:n,text:a,type:"text",validate:C.p}))}},Oe=function(){var e,t,n=Object(E.c)("abi",{subscription:{valid:!0,value:!0}}).meta.valid,a=Object(E.c)("selectedMethod",{subscription:{value:!0}}).input.value;return n&&!!a&&(null===(e=a.inputs)||void 0===e?void 0:e.length)?d.a.createElement(d.a.Fragment,null,null===(t=a.inputs)||void 0===t?void 0:t.map((function(e,t){var n=e.name,r=e.type,c=n?"".concat(n," (").concat(r,")"):r,i=Object(S.e)(r,a.signatureHash,t);return d.a.createElement(A.a,{key:i,margin:"sm"},d.a.createElement(xe,{type:r,keyValue:i,placeholder:c}))}))):null},je=Object(l.a)({output:{"& > div > textarea":{letterSpacing:"-0.5px",lineHeight:"20px",height:"40px",overflowY:"auto"}}}),Ee=function(){var e,t=je(),n=Object(E.c)("selectedMethod",{subscription:{value:!0}}).input.value,a=Object(E.c)("callResults",{subscription:{value:!0}}).input.value,r=!!n&&n.outputs.length>1;return null==a||""===a?null:d.a.createElement(d.a.Fragment,null,d.a.createElement(A.a,{align:"left",margin:"xs"},d.a.createElement(j.a,{color:"primary",size:"lg",style:{letterSpacing:"-0.5px"}},"Call result:")),null===(e=n.outputs)||void 0===e?void 0:e.map((function(e,c){var i=e.name,o=e.type,u=i?"".concat(i," (").concat(o,")"):o,l="methodCallResult-".concat(n.name,"_").concat(c,"_").concat(o),s=r?a[c]:a;return d.a.createElement(A.a,{key:l,margin:"sm"},d.a.createElement(I.a,null,d.a.createElement(_.a,{className:t.output,multiline:!0,disabled:!0,rowsMax:3,input:{name:l,value:s.toString(),placeholder:u,type:"text"},meta:{valid:!0},testId:l,text:u})))})))},ye=n(597),Se=n(563),ke=Object(l.a)(f.a),we=Object(M.k)().nativeCoin,Ce=function(e){var t=e.onSetMax,n=ke(),a=Object(p.f)(O.d),r=!function(e){return Boolean(null===e||void 0===e?void 0:e.payable)||"payable"===e.stateMutability}(Object(E.c)("selectedMethod",{subscription:{value:!0}}).input.value);return a?r?null:d.a.createElement(d.a.Fragment,null,d.a.createElement(A.a,{className:n.fullWidth,margin:"xs"},d.a.createElement(j.a,{color:"disabled",noMargin:!0,size:"md",style:{letterSpacing:"-0.5px"}},"Value"),d.a.createElement(Se.a,{color:r?"disabled":"secondary",onClick:function(){return!r&&t(a)},weight:"bold"},"Send max")),d.a.createElement(A.a,{margin:"md"},d.a.createElement(I.a,null,d.a.createElement(J.a,{component:_.a,disabled:r,inputAdornment:{endAdornment:d.a.createElement(ye.a,{position:"end"},we.name),disabled:r},name:"value",placeholder:"Value",text:"Value",type:"text",validate:!r&&Object(C.c)(C.l,Object(C.e)(a))})))):null},Ie=Object(l.a)(f.a);t.default=function(e){var t,n=e.contractAddress,a=e.initialValues,i=e.onClose,l=e.onNext,s=e.switchMethod,f=e.isABI,E=Ie(),y=Object(p.f)(O.l);d.a.useMemo((function(){n&&(a.contractAddress=n)}),[n,a]);var w=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(t,!1);case 2:s();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(u.a)(o.a.mark((function e(n){var a,i,u,s,d,p,m,f,b=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.contractAddress,i=n.selectedMethod,u=n.value,s=Object(c.a)(n,["contractAddress","selectedMethod","value"]),d=!(b.length>1&&void 0!==b[1])||b[1],!(u||a&&i)){e.next=18;break}if(e.prev=3,p=Object(S.b)(i,a,s),m=p.encodeABI(),!Object(S.m)(i)||!d){e.next=12;break}return e.next=9,p.call({from:y});case 9:return f=e.sent,t(f),e.abrupt("return");case 12:l(Object(r.a)(Object(r.a)({},s),{},{contractAddress:a,data:m,selectedMethod:i,value:u}),d),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(3),e.abrupt("return",Object(S.g)(e.t0,s));case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}();return d.a.createElement(d.a.Fragment,null,d.a.createElement(K.a,{onClose:i,subTitle:"1 of 2",title:"Contract interaction"}),d.a.createElement(v.a,null),d.a.createElement(h.a,{decorators:[S.c],formMutators:S.d,initialValues:a,onSubmit:C,subscription:{submitting:!0,pristine:!0,values:!0}},(function(e,n,a,r){return t=r.setCallResults,d.a.createElement(d.a.Fragment,null,d.a.createElement(g.a,{className:E.formContainer},d.a.createElement(x.a,null),d.a.createElement(b.a,{withArrow:!0}),d.a.createElement(U,{name:"contractAddress",onScannedValue:r.setContractAddress,text:"Contract address*"}),d.a.createElement(H,null),d.a.createElement(be,{onChange:r.setSelectedMethod}),d.a.createElement(Ce,{onSetMax:r.setMax}),d.a.createElement(Oe,null),d.a.createElement(Ee,null),d.a.createElement(G,null),d.a.createElement(j.a,{color:"disabled",noMargin:!0,size:"lg",style:{letterSpacing:"-0.5px"}},d.a.createElement(m.a,{checked:!f,onChange:function(){return w(a.values)}}),"Use custom data (hex encoded)")),d.a.createElement(k,{onClose:i}))})))}},1429:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(1428);t.a=function(e){var t=Object.assign({},e);return r.a.createElement(c.a,t)}},1434:function(e,t,n){"use strict";var a=n(13),r=n(71),c=n(606),i=n(514),o=n(407),u=n(0),l=n.n(u),s=n(11),d={overflow:"hidden",width:"100%"},p=Object(o.a)((function(){return Object(i.a)({root:{paddingTop:s.lg,paddingBottom:"12px",lineHeight:0}})}));t.a=function(e){var t=e.input,n=t.name,i=t.onChange,o=t.value,u=Object(r.a)(t,["name","onChange","value"]),s=e.inputAdornment,m=e.meta,f=e.multiline,b=e.rows,h=e.testId,g=e.text,v=Object(r.a)(e,["input","inputAdornment","meta","multiline","rows","testId","text"]),x=p(),O=o?g:void 0,j=(m.touched||!m.pristine)&&!m.valid,E=!!m.error||!m.modifiedSinceLastSubmit&&!!m.submitError,y=m.error||m.submitError,S=!m.active&&(m.pristine||!m.touched),k="undefined"===typeof m.error||!m.touched,w=S&&k,C=O?x.root:"",I=m.valid?"isValid":E&&j?"isInvalid":"",A=Object(a.a)(Object(a.a)({},u),{},{autoComplete:"off","data-testid":h}),M=Object(a.a)(Object(a.a)({},s),{},{className:"".concat(C," ").concat(I),disableUnderline:w});return l.a.createElement(c.a,Object.assign({error:E&&j,helperText:E&&j?y:O||" ",inputProps:A,InputProps:M,multiline:f,name:n,onChange:i,rows:b,style:d,value:o},v))}},1436:function(e,t,n){"use strict";var a=n(71),r=n(0),c=n(1428),i=function(e){return{padding:"0 ".concat(e,"%"),flexDirection:"column",flex:"1 0 auto"}};t.a=function(e){var t=e.children,n=e.decorators,o=e.formMutators,u=e.initialValues,l=e.onSubmit,s=e.padding,d=void 0===s?0:s,p=e.subscription,m=e.testId,f=void 0===m?"":m,b=e.validation;return r.createElement(c.b,{decorators:n,initialValues:u,mutators:o,onSubmit:l,render:function(e){var n=e.handleSubmit,c=Object(a.a)(e,["handleSubmit"]);return r.createElement("form",{"data-testid":f,onSubmit:n,style:i(d)},t(c.submitting,c.validating,c,c.form.mutators))},subscription:p,validate:b})}},1445:function(e,t,n){"use strict";var a=n(71),r=n(6),c=n(7),i=n(8),o=n(9),u=n(0),l=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=Object(a.a)(e,["children"]);return u.createElement("b",n,t)}}]),n}(u.PureComponent);t.a=l},1449:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var a=n(48),r=n(330),c=n(407),i=n(542),o=n.n(i),u=n(0),l=n(1478),s=n.n(l),d=n(11),p=n(514),m=Object(p.a)({heading:{padding:d.lg,justifyContent:"space-between",maxHeight:"75px",boxSizing:"border-box"},loaderContainer:{width:"100%",height:"100%"},close:{height:"25px",width:"25px",color:d.secondaryText},detailsContainer:{backgroundColor:d.background,maxHeight:"450px"},buttonRow:{height:"84px",justifyContent:"center"},button:{"&:last-child":{marginLeft:d.sm}}}),f=n(341),b=n(143),h=n(160),g=n(123),v=n(158),x=n(88),O=n(110),j=Object(c.a)(m),E=function(e){var t=e.isOpen,n=e.onClose,c=e.onScan,i=j(),l=Object(u.useState)(!1),d=Object(a.a)(l,2),p=d[0],m=d[1],E=Object(u.useState)(null),y=Object(a.a)(E,2),S=y[0],k=y[1],w=Object(u.useState)(!1),C=Object(a.a)(w,2),I=C[0],A=C[1],M=u.createRef(),R=u.useCallback((function(){M.current.openImageDialog()}),[M]);Object(u.useEffect)((function(){p||!I||S||(m(!0),R())}),[I,R,p,m,S]);var N=function(e,t){if(e)return console.error("QR code error",e),void("NotAllowedError"===e.name||"PermissionDismissedError"===e.name?(A(!0),m(!1)):k("The QR could not be read"));t?c(t):I&&k("The QR could not be read")};return u.createElement(f.c,{description:"Receive Tokens Form",handleClose:n,open:t,title:"Receive Tokens"},u.createElement(O.a,{align:"center",className:i.heading,grow:!0},u.createElement(x.a,{noMargin:!0,size:"xl"},"Scan QR"),u.createElement(r.a,{disableRipple:!0,onClick:n},u.createElement(o.a,{className:i.close}))),u.createElement(v.a,null),u.createElement(g.a,{className:i.detailsContainer,layout:"column",middle:"xs"},S&&u.createElement(b.a,{padding:"md",margin:"md"},S),u.createElement(s.a,{legacyMode:I,onError:function(e){return N(e,null)},onScan:function(e){return N(null,e)},ref:M,style:{width:"400px",height:"400px"},facingMode:"user"})),u.createElement(v.a,null),u.createElement(O.a,{align:"center",className:i.buttonRow},u.createElement(h.a,{className:i.button,color:"secondary",minWidth:154,onClick:n},"Close"),u.createElement(h.a,{className:i.button,color:"primary",minWidth:154,onClick:function(){A(!0),k(null),m(!1)},variant:"contained"},"Upload an image")))}},1454:function(e,t,n){"use strict";t.a=n.p+"static/media/qrcode.fec1b6d8.svg"},1455:function(e,t,n){"use strict";var a,r,c=n(25),i=n(0),o=n.n(i),u=n(24),l=n(23),s=u.default.div(a||(a=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  margin: 8px 0;\n\n  svg {\n    margin: 0 12px 0 4px;\n  }\n"]))),d=Object(u.default)(l.Divider)(r||(r=Object(c.a)(["\n  width: 100%;\n"])));t.a=function(e){var t=e.withArrow;return o.a.createElement(s,null,t&&o.a.createElement(l.Icon,{type:"arrowDown",size:"md"}),o.a.createElement(d,null))}},1462:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(48),r=n(407),c=n(0),i=n.n(c),o=n(1454),u=n(1449),l=n(131),s=Object(r.a)({qrCodeBtn:{cursor:"pointer"}}),d=function(e){var t=e.handleScan,n=s(),r=Object(c.useState)(!1),d=Object(a.a)(r,2),p=d[0],m=d[1],f=function(){m(!1)};return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{alt:"Scan QR",className:n.qrCodeBtn,height:20,onClick:function(){m(!0)},role:"button",src:o.a,testId:"qr-icon"}),p&&i.a.createElement(u.a,{isOpen:p,onClose:f,onScan:function(e){t(e,f)}}))}},1467:function(e,t,n){"use strict";var a,r=n(25),c=n(0),i=n.n(c),o=n(55),u=n(23),l=n(24),s=n(22),d=n(69),p=n(88),m=n(1445),f=n(11),b=n(143),h=Object(s.k)().nativeCoin,g=Object(l.default)(b.a)(a||(a=Object(r.a)(["\n  font-size: 12px;\n  line-height: 1.08;\n  letter-spacing: -0.5px;\n  background-color: ",";\n  width: fit-content;\n  padding: 5px 10px;\n  margin-top: ",";\n  margin-left: 40px;\n  border-radius: 3px;\n"])),f.border,f.xs);t.a=function(){var e=Object(o.f)(d.i),t=e.address,n=e.ethBalance,a=e.name;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.EthHashInfo,{hash:t,name:a,explorerUrl:Object(s.d)(t),showAvatar:!0,showCopyBtn:!0}),n&&i.a.createElement(g,null,i.a.createElement(p.a,{noMargin:!0},"Balance: ",i.a.createElement(m.a,{"data-testid":"current-eth-balance"},"".concat(n," ").concat(h.symbol)))))}},1481:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return b})),n.d(t,"h",(function(){return h})),n.d(t,"j",(function(){return g})),n.d(t,"n",(function(){return v})),n.d(t,"l",(function(){return x})),n.d(t,"k",(function(){return O})),n.d(t,"i",(function(){return j})),n.d(t,"g",(function(){return E})),n.d(t,"e",(function(){return y})),n.d(t,"b",(function(){return k})),n.d(t,"m",(function(){return w})),n.d(t,"f",(function(){return C}));var a=n(105),r=n(19),c=n(1),i=n.n(c),o=n(12),u=n(1498),l=n(1512),s=n(31),d=n(54),p=n(92),m="no contract",f=Object(l.a)({field:"contractAddress",updates:{contractAddress:function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,e.t0=Object(d.e)(t)||Object(d.d)(t),!e.t0){e.next=6;break}return e.next=5,Object(s.b)(t);case 5:e.t0=e.sent;case 6:if(!(n=e.t0)){e.next=9;break}return e.abrupt("return",n);case 9:return e.abrupt("return",t);case 12:return e.prev=12,e.t1=e.catch(0),console.error(e.t1.message),e.abrupt("return",t);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()}}),b={setMax:function(e,t,n){n.changeValue(t,"value",(function(){return e[0]}))},setContractAddress:function(e,t,n){n.changeValue(t,"contractAddress",(function(){return e[0]}))},setSelectedMethod:function(e,t,n){var a;(null===(a=t.lastFormState)||void 0===a?void 0:a.values.selectedMethod)&&t.lastFormState.values.selectedMethod.name!==e[0].name&&(n.changeValue(t,"callResults",(function(){return""})),n.changeValue(t,"value",(function(){return""}))),n.changeValue(t,"selectedMethod",(function(){return e[0]}))},setCallResults:function(e,t,n){n.changeValue(t,"callResults",(function(){return e[0]}))},setAbiValue:function(e,t,n){n.changeValue(t,"abi",(function(){return e[0]}))}},h=function(e){return 0===e.indexOf("address")},g=function(e){return 0===e.indexOf("bool")},v=function(e){return 0===e.indexOf("uint")},x=function(e){return 0===e.indexOf("int")},O=function(e){return 0===e.indexOf("byte")},j=function(e){return/(\[\d*])+$/.test(e)},E=function(e,t){for(var n in t)if(t.hasOwnProperty(n)&&void 0!==e&&t[n]===e.value)return Object(r.a)({},n,e.reason);return Object(r.a)({},u.a,e?e.message:void 0)},y=function(e,t,n){var a=j(e)?"arrayParam":e;return"methodInput-".concat(t,"_").concat(n,"_").concat(a)},S=function(e,t){return function(n,a){var r=n.type,c=y(r,e,a);return function(e){try{return JSON.parse(e).map((function(e){return Number.isInteger(e)?new p.BigNumber(e).toString():e}))}catch(t){return null}}(t[c])||t[c]}},k=function(e,t,n){var r,c=new(Object(s.f)().eth.Contract)([e],t),i=e.inputs,o=e.name,u=void 0===o?"":o,l=e.signatureHash,d=(null===i||void 0===i?void 0:i.map(S(l,n)))||[];return(r=c.methods)[u].apply(r,Object(a.a)(d))},w=function(e){return e&&"read"===e.action},C=function(e,t,n){j(t)&&(e=e.replace("[]",""));var a=n[e];return"bool"===t&&(a=String(a)),a}},1495:function(e,t,n){"use strict";n.d(t,"a",(function(){return M})),n.d(t,"b",(function(){return R}));var a=n(71),r=n(48),c=n(13),i=n(1),o=n.n(i),u=n(12),l=n(23),s=n(606),d=n(2737),p=n(0),m=n.n(p),f=n(55),b=n(541),h=n(22),g=n(18),v=n(342),x=n(154),O=n(54),j=n(31),E=n(407),y=n(514),S=Object(E.a)(Object(y.a)({root:{overflow:"hidden",borderRadius:4,fontSize:"15px",width:"500px"}})),k=Object(E.a)(Object(y.a)({root:{fontSize:"14px",width:"420px"}})),w=n(124),C=n(30),I=Object(h.j)(),A=function(e){var t=e.addressBookEntries,n=e.fieldMutator,a=e.label,r=void 0===a?"Recipient":a,i=e.setIsValidAddress,p=e.setSelectedEntry,f=e.setValidationText,v=e.validationText,E=function(e){p(e),n(e.address)},y=function(e){var n=Object(b.j)(e);if(i(!n),!n){var a=Object(x.b)(t,{inputValue:e});return 1===a.length?a[0]:e}f(n)},A=function(){var e=Object(u.a)(o.a.mark((function e(t,a,r){var c,i,u,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r,e.next="input"===e.t0?3:31;break;case 3:if(c=Object(w.c)(a)){e.next=6;break}return e.abrupt("break",31);case 6:if(!Object(h.u)(g.b.DOMAIN_LOOKUP)||!Object(O.e)(c)&&!Object(O.d)(c)){e.next=24;break}return i="",e.prev=8,e.next=11,Object(j.b)(c);case 11:i=e.sent,e.next=17;break;case 14:e.prev=14,e.t1=e.catch(8),Object(C.c)(C.b._101,e.t1.message);case 17:if(u=y(i)){e.next=21;break}return n(""),e.abrupt("break",31);case 21:return E("string"===typeof u?{address:i,name:c,chainId:I}:u),e.abrupt("break",31);case 24:if(l=y(c)){e.next=28;break}return n(""),e.abrupt("break",31);case 28:return E("string"===typeof l?{address:l,name:"",chainId:I}:l),e.abrupt("break",31);case 31:case"end":return e.stop()}}),e,null,[[8,14]])})));return function(t,n,a){return e.apply(this,arguments)}}(),M=S(),R=k();return m.a.createElement(d.a,{closeIcon:null,openOnFocus:!1,filterOptions:x.b,freeSolo:!0,onChange:function(e,t,n){switch(n){case"select-option":var a=t,r=a.address,c=a.name,i=a.chainId;E({address:r,name:c,chainId:i})}},onInputChange:A,options:t,id:"address-book-input",renderInput:function(e){return m.a.createElement(s.a,Object.assign({},e,{autoFocus:!0,error:!!v,fullWidth:!0,variant:"filled",label:v||r,InputLabelProps:{shrink:!0,required:!0,classes:M},InputProps:Object(c.a)(Object(c.a)({},e.InputProps),{},{classes:R})}))},getOptionLabel:function(e){return e.address},renderOption:function(e){var t=e.address,n=e.name;return m.a.createElement(l.EthHashInfo,{hash:t,name:n,showAvatar:!0})},role:"listbox",style:{display:"flex",flexGrow:1}})},M=function(e){var t=Object(f.f)(v.f),n=Object(p.useState)(""),a=Object(r.a)(n,2),c=a[0],i=a[1];return Object(p.useEffect)((function(){e.errorMsg&&i(e.errorMsg)}),[e.errorMsg]),m.a.createElement(A,Object.assign({addressBookEntries:t,setValidationText:i,validationText:c},e))},R=function(e){var t=e.setIsValidAddress,n=e.setSelectedEntry,c=Object(a.a)(e,["setIsValidAddress","setSelectedEntry"]),i=Object(f.f)(v.f),l=Object(p.useState)([]),s=Object(r.a)(l,2),d=s[0],h=s[1],g=Object(p.useState)(""),O=Object(r.a)(g,2),j=O[0],E=O[1];Object(p.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.c)(i);case 2:t=e.sent,h(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i]);var y=function(){var e=Object(u.a)(o.a.mark((function e(a){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===a||void 0===a?void 0:a.address)){e.next=7;break}return e.next=3,Object(b.k)(a.address);case 3:r=e.sent,t(!r),E(null!==r&&void 0!==r?r:""),n(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return m.a.createElement(A,Object.assign({addressBookEntries:d,setIsValidAddress:t,setSelectedEntry:y,setValidationText:E,validationText:j},c))}},1499:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(11),r=n(514),c=Object(r.a)({heading:{padding:"".concat(a.md," ").concat(a.lg),justifyContent:"flex-start",boxSizing:"border-box",maxHeight:"74px"},annotation:{letterSpacing:"-1px",color:a.secondaryText,marginRight:"auto",marginLeft:"20px"},headingText:{fontSize:a.lg},closeIcon:{height:"35px",width:"35px"},qrCodeBtn:{cursor:"pointer"},formContainer:{padding:"".concat(a.md," ").concat(a.lg),wordBreak:"break-word"},value:{marginLeft:a.sm},outerData:{borderRadius:"5px",border:"1px solid ".concat(a.border),padding:"11px",minHeight:"21px"},data:{wordBreak:"break-all",overflow:"auto",fontSize:"14px",fontFamily:"Averta",maxHeight:"100px",letterSpacing:"normal",fontStretch:"normal",lineHeight:"1.43"},buttonRow:{height:"84px",justifyContent:"center",gap:"16px"},dataInput:{"& TextField-root-294":{lineHeight:"auto",border:"green"}},selectAddress:{cursor:"pointer"},fullWidth:{justifyContent:"space-between"},gasCostsContainer:{backgroundColor:a.background,padding:"0 ".concat(a.lg)}})},1512:function(e,t,n){"use strict";var a=n(1498),r=function(e){return!!e&&("object"===typeof e||"function"===typeof e)&&"function"===typeof e.then},c=function(e,t){return e===t};t.a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){var n={};return e.subscribe((function(i){var o=i.values;e.batch((function(){var i=function(t,c,i){var u=o&&Object(a.e)(o,t),l=n&&Object(a.e)(n,t);if(!c(u,l))if("function"===typeof i){var s=i(u,t,o,n);r(s)?s.then((function(t){Object.keys(t).forEach((function(n){e.change(n,t[n])}))})):Object.keys(s).forEach((function(t){e.change(t,s[t])}))}else Object.keys(i).forEach((function(t){var a=(0,i[t])(u,o,n);r(a)?a.then((function(n){e.change(t,n)})):e.change(t,a)}))},u=e.getRegisteredFields();t.forEach((function(e){var t=e.field,n=e.isEqual,a=e.updates;if("string"===typeof t)i(t,n||c,a);else{var r=Array.isArray(t)?function(e){return~t.indexOf(e)||-1!==t.findIndex((function(t){return t instanceof RegExp&&t.test(e)}))}:function(e){return t.test(e)};u.forEach((function(e){r(e)&&i(e,n||c,a)}))}})),n=o}))}),{values:!0})}}},1602:function(e,t,n){"use strict";var a=n(3),r=n(14),c=n(0),i=(n(16),n(15)),o=n(17),u=n(194),l=c.forwardRef((function(e,t){var n=e.classes,o=e.className,l=Object(r.a)(e,["classes","className"]),s=c.useContext(u.a);return c.createElement("div",Object(a.a)({className:Object(i.default)(n.root,o,"flex-start"===s.alignItems&&n.alignItemsFlexStart),ref:t},l))}));t.a=Object(o.a)((function(e){return{root:{minWidth:56,color:e.palette.action.active,flexShrink:0,display:"inline-flex"},alignItemsFlexStart:{marginTop:8}}}),{name:"MuiListItemIcon"})(l)},1603:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(514),r=n(407),c=n(0),i=n.n(c),o=n(1429),u=n(1434),l=Object(a.a)({textarea:{"& > div":{height:"140px",paddingTop:"0",paddingBottom:"0",alignItems:"auto","& > textarea":{fontSize:"15px",letterSpacing:"-0.5px",lineHeight:"20px",height:"102px"}}}}),s=Object(r.a)(l),d=function(e){var t=Object.assign({},e),n=s();return i.a.createElement(o.a,Object.assign({},t,{className:n.textarea,component:u.a,multiline:!0,rows:"5"}))}},1674:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(330),r=n(407),c=n(542),i=n.n(c),o=n(0),u=n.n(o),l=n(88),s=n(110),d=n(1499),p=Object(r.a)(d.a),m=function(e){var t=e.onClose,n=e.subTitle,r=e.title,c=p();return u.a.createElement(s.a,{align:"center",className:c.heading,grow:!0},u.a.createElement(l.a,{className:c.headingText,noMargin:!0,weight:"bolder"},r),u.a.createElement(l.a,{className:c.annotation},n),u.a.createElement(a.a,{disableRipple:!0,onClick:t},u.a.createElement(i.a,{className:c.closeIcon})))}},1675:function(e,t,n){"use strict";t.a=n.p+"static/media/check.7da64643.svg"},1676:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(407),r="140px",c=Object(a.a)({listItem:{maxWidth:function(e){return e.buttonWidth?e.buttonWidth:r},boxSizing:"border-box"},listItemSearch:{maxWidth:function(e){return e.buttonWidth?e.buttonWidth:r},padding:"0",boxSizing:"border-box"},localFlag:{backgroundPosition:"50% 50%",backgroundRepeat:"no-repeat",backgroundSize:"contain",height:"20px !important",width:"26px !important"},etherFlag:{backgroundPosition:"50% 50%",backgroundRepeat:"no-repeat",backgroundSize:"contain",width:"26px",height:"26px"},iconLeft:{marginRight:"10px"},iconRight:{marginLeft:"18px"},button:{backgroundColor:"#e8e7e6",border:"none",borderRadius:"3px",boxSizing:"border-box",color:"#5d6d74",cursor:"pointer",fontSize:"12px",fontWeight:"normal",height:"24px",lineHeight:"1.33",marginRight:"20px",minWidth:function(e){return e.buttonWidth?e.buttonWidth:r},outline:"none",padding:"0",textAlign:"left","&:active":{opacity:"0.8"}},buttonInner:{boxSizing:"border-box",display:"block",height:"100%",lineHeight:"24px",padding:"0 22px 0 8px",position:"relative",width:"100%","&::after":{borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:"5px solid #5d6d74",content:'""',height:"0",position:"absolute",right:"8px",top:"9px",width:"0"}},openMenuButton:{"&::after":{borderBottom:"5px solid #5d6d74",borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:"none"}},dropdownItemsScrollWrapper:{maxHeight:"280px",overflow:"auto"},search:{position:"relative",borderRadius:"0",backgroundColor:"#fff","&:hover":{backgroundColor:"#fff"},marginRight:0,width:"100%"},searchIcon:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",left:"12px",margin:"0",pointerEvents:"none",position:"absolute",top:"50%",transform:"translateY(-50%)",width:"18px","& path":{fill:"#b2b5b2"}},inputRoot:{color:"#5d6d74",fontSize:"14px",fontWeight:"normal",lineHeight:"1.43",width:"100%"},inputInput:{boxSizing:"border-box",height:"44px",padding:"12px 12px 12px 40px",width:"100%"}})}}]);
//# sourceMappingURL=37.da648735.chunk.js.map