(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(4),s=c.n(n),o=c(3),a=c(5),l=c(6),r=c(8),d=c(7),i=c(1),u=c.n(i),b=(c(13),c(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],p=function(e){Object(r.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(a.a)(this,c);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={selectedGoods:["Jam"]},e.addProduct=function(t){e.setState((function(e){return{selectedGoods:[].concat(Object(o.a)(e.selectedGoods),[t])}}))},e.removeProduct=function(t){e.state.selectedGoods.splice(e.state.selectedGoods.indexOf(t),1),e.setState((function(e){return{selectedGoods:Object(o.a)(e.selectedGoods)}}))},e.clearTheGoods=function(){e.setState({selectedGoods:[]})},e}return Object(l.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGoods;return t.join(" ,"),Object(b.jsxs)("div",{className:"app",children:[Object(b.jsxs)("h1",{children:[0===t.length&&"No goods selected",1===t.length&&"".concat(t," is selected"),t.length>=2&&"".concat(t.join(", ")," are selected")]}),Object(b.jsx)("ul",{className:"app__list",children:j.map((function(t){return e.state.selectedGoods.includes(t)?Object(b.jsxs)("li",{className:"list-group-item selected app__item",children:[t,Object(b.jsx)("button",{type:"button",className:"btn btn-outline-danger",onClick:function(){e.removeProduct(t)},children:"Remove"})]}):Object(b.jsxs)("li",{className:"list-group-item app__item",children:[t,Object(b.jsx)("button",{type:"button",className:"btn btn-outline-success",onClick:function(){e.addProduct(t)},children:"Select"})]})}))}),Object(b.jsx)("button",{className:"btn btn-outline-danger button__clear",type:"button",onClick:function(){return e.clearTheGoods()},children:"Clear"})]})}}]),c}(u.a.Component);s.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.7eeb2977.chunk.js.map