(this.webpackJsonpcompressor=this.webpackJsonpcompressor||[]).push([[0],[,,function(e,t,n){e.exports={Card:"Card_Card__1oeUq",CardImg:"Card_CardImg__2avr0",CardText:"Card_CardText__2mQMw",Icon:"Card_Icon__CSCJU"}},,,,function(e,t,n){e.exports={ImageUploader:"ImageUploader_ImageUploader__1-OSa",File:"ImageUploader_File__5FGke"}},function(e,t,n){e.exports={btn:"Button_btn__2T0J7",btnSuccess:"Button_btnSuccess__3rzAB",center:"Button_center__1TEIe"}},,,,,,function(e,t,n){e.exports={Image:"Image_Image__1br15"}},function(e,t,n){e.exports={ldsdualring:"Spinner_ldsdualring__1vn9S"}},,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),c=n.n(s),r=n(8),i=n.n(r),o=(n(23),n(24),n(4)),l=n.n(o),g=n(3),d=n(17),A=n(9),u=n(10),j=n(11),m=n(16),b=n(15),h=n(12),x=n(13),p=n.n(x),f=n(6),C=n.n(f),O=function(e){return Object(a.jsx)("input",{type:e.type,className:e.class,name:e.name,multiple:!0,onChange:e.changed})},I=function(e){return Object(a.jsx)("div",{className:C.a.ImageUploader,children:Object(a.jsx)(O,{type:"file",class:C.a.File,name:"images",changed:e.onchange})})},v=function(e){return Object(a.jsx)("div",{className:p.a.Image,children:Object(a.jsx)(I,{onchange:e.onchange})})},B=n(2),_=n.n(B),w=function(e){var t=e.icon?Object(a.jsxs)("a",{href:e.src,download:e.name,children:[Object(a.jsx)("img",{className:_.a.Icon,src:e.icon,alt:"download",onClick:e.download})," "]}):null;return Object(a.jsxs)("div",{className:_.a.Card,children:[Object(a.jsx)("img",{className:_.a.CardImg,src:e.src,alt:e.text}),Object(a.jsxs)("div",{className:_.a.CardText,children:[Object(a.jsxs)("div",{children:["Name:",e.name]}),Object(a.jsxs)("div",{children:["Size:",e.size]}),Object(a.jsx)("div",{children:t})]})]})},U=function(e){var t=Object.keys(e.images).map((function(t,n){return Object(a.jsx)(w,{src:URL.createObjectURL(e.images[t]),name:e.images[t].name,size:e.images[t].size,icon:e.icon},n)}));return Object(a.jsx)("div",{style:{display:"flex",flexWrap:"nowrap"},children:t})},N=n(7),S=n.n(N),k=function(e){return Object(a.jsx)("button",{className:[S.a.btn,Object(g.a)(e.class.map((function(e){return S.a[e]}))).join(" ")].join(" "),type:"button",onClick:e.onclicked,children:e.text})},F=function(e){return e.children},y=n(14),E=n.n(y),R=function(e){return Object(a.jsx)("div",{className:E.a.ldsdualring})},V=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={images:null,compressImages:[],show:null},e.onChangeHandler=function(t){var n=Array.from(t.target.files);e.setState({images:n})},e.onCompressedHandler=Object(A.a)(l.a.mark((function t(){var n,a,s,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({show:!0}),n=Object(d.a)({},e.state.images),a=[],t.t0=l.a.keys(n);case 4:if((t.t1=t.t0()).done){t.next=11;break}return s=t.t1.value,c=n[s],t.next=9,Object(h.a)(c,{initialQuality:.6,onProgress:function(e){console.log(e)}}).then((function(e){var t=a.concat(e);a=Object(g.a)(t)})).catch((function(e){return console.log(e)}));case 9:t.next=4;break;case 11:e.setState({compressImages:a,show:!1});case 12:case"end":return t.stop()}}),t)}))),e}return Object(j.a)(n,[{key:"render",value:function(){var e="";null!==this.state.images&&(e=Object(a.jsx)(U,{images:this.state.images}));var t=this.state.show?Object(a.jsx)(R,{}):null;return console.log(this.state.show),this.state.compressImages.length>0&&(t=Object(a.jsx)(U,{images:this.state.compressImages,icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIbSURBVHic7Zo9TsNAEIU/ECKIjtwBOAe0gMSdECLUcAE4AgWigRNwDRJExV8PRWwJjL07ux52DJlPGik/np33nhM5sQ2O4xiwDpwBT1WdVa8tDOfAR6POTRUVZsbPAB4thCxZDGVuuI3iepZLDxwaHoC1AGs8AGsB1ngA1gKs8QCsBVjjAVgLsMYDsBZgjQdgLcAaD8BagDUegLUAazwAawHWeACN5//tis0qcApMgQdgUr3WSakrNs0ZdWkzaZkxCTX0vWIzBnaBrch2OQFsV2uPE/RMW2bMtIXVHAIvX3ougZHCnFG1Vr3NczVLQrKf3ADGfDdf1zXtIUjnjKo1mts9AxsCXcUC2A30toUgmdNlvq4dga5iAWwFettCiM2Jmf8ANgW6igUA37+nsRBCcyTmL4SaigawClxFhN8Aa4H3U9aQUDQAkO290PuS3q4ji4qfvgGAbC/mVMqez/ajEQDoh5BjPsuPVgCgF0KueQJr6jVE6BtCH/ME1tVrEJAbQl/zBNbWaxCSGoKGeQLr6zUkIA1ByzyBGXoNicRC0DRPYI5eQwZdIWibp2XGIAKA+a+5E+YnLKbV45RfeFKifpq3pnaZtbqlti9RP35W2FqANR6AtQBrFj6AFeF2v3EoHATNT8C7iYqyvH590gzgvqAQK4IeD0j/2/rXai+W0PEARP5WHcXM1+wDd8DbAET3rTfgFsGed5wF5BOM47WMwPENIgAAAABJRU5ErkJggg=="})),Object(a.jsxs)(F,{children:[Object(a.jsx)(v,{onchange:this.onChangeHandler}),Object(a.jsx)(k,{class:["btnSuccess","center"],onclicked:this.onCompressedHandler,text:"Compress Image"}),e,t]})}}]),n}(s.Component);var D=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(V,{})})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(D,{})}),document.getElementById("root")),Q()}],[[26,1,2]]]);
//# sourceMappingURL=main.9facbbc1.chunk.js.map