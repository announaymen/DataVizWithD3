(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{69:function(e,t,a){e.exports=a(75)},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(23),r=a.n(l),c=a(24),o=a(9),s=a(1),u=function(e){var t=e.datasets,a=e.keys,l=e.colors,r=Object(n.useState)(t),c=Object(o.a)(r,2),u=c[0],d=c[1],f=Object(n.useRef)(),m=Object(n.useRef)();return Object(n.useEffect)(function(){var e=Object(s.g)(f.current),t=m.current.getBoundingClientRect(),n=t.width,i=t.height,r=Object(s.h)().keys(a)(u),c=[0,Object(s.d)(r,function(e){return Object(s.d)(e,function(e){return e[1]})})],o=Object(s.f)().domain(c).range([i,0]),p=Object(s.e)().domain(u.map(function(e){return e.name})).range([0,n]).padding(.46),y=Object(s.e)().domain(u.map(function(e){return e.type})).rangeRound([0,p.bandwidth()]).padding(.12),b=Object(s.g)(f.current).append("div").style("position","absolute").style("visibility","visible").style("background-color","black").style("border","solid").style("border-width","1px").style("border-radius","5px").style("padding","10px").html("<p>I'm a tooltip written in HTML</p>"),g=Object(s.a)(p),h=Object(s.b)(o);e.select(".x-axis").attr("transform","translate(0, ".concat(i,")")).call(g),e.select(".y-axis").attr("transform","translate(".concat(25,", 0 )")).call(h),e.selectAll(".layer").data(r).join("g").attr("class","layer").attr("fill",function(e){return l[e.key]}).selectAll("rect").data(function(e){return e}).join("rect").attr("class","barreact").attr("x",function(e){return p(e.data.name)+y(e.data.type)}).attr("width",y.bandwidth()).attr("y",function(e){return o(e[1])}).attr("height",function(e){return o(e[0])-o(e[1])}),e.select(".barreact").on("mouseover",function(){return console.log("event.pageY  ",s.c.pageY),b.style("visibility","visible")}).on("mousemove",function(){return b.style("top",s.c.pageY+"px").style("left",s.c.pageX+"px")}).on("mouseout",function(){return b.style("visibility","hidden")}),e.select(".x-axis").selectAll(".tick").on("click",function(e){var t=u.map(function(t){return{name:t.name,Affiliate:t.name===e?null:t.Affiliate,Social:t.name===e?null:t.Social,Media:t.name===e?null:t.Media}});d(t)})},[u,a,l]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{ref:m,style:{width:"100%",height:"400px",marginBottom:"2rem"}},i.a.createElement("svg",{ref:f,style:{width:"100%",height:"110%"}},i.a.createElement("g",{className:"x-axis"}),i.a.createElement("g",{className:"y-axis"}))))},d=[{name:"Etudiant",type:1,Affiliate:10,Social:20,Media:30},{name:"Etudiant",type:2,Affiliate:20,Social:40,Media:60},{name:"Brand 2",type:1,Affiliate:30,Social:45,Media:80},{name:"Brand 2",type:2,Affiliate:40,Social:60,Media:100},{name:"Brand 3",type:1,Affiliate:50,Social:80,Media:120},{name:"Brand 3",type:2,Affiliate:60,Social:90,Media:150}],f=["Affiliate","Social","Media"],m={Affiliate:"rgba(69, 0, 0, 0.8)",Social:"rgba(240, 72, 19, 0.8)",Media:"rgba(255, 199, 128, 0.8)"},p=function(){var e=Object(n.useState)(f),t=Object(o.a)(e,2),a=t[0],l=t[1];return i.a.createElement("div",null,i.a.createElement(u,{datasets:d,colors:m,keys:a}),i.a.createElement("div",{className:"fields",style:{display:"flex"}},f.map(function(e){return i.a.createElement("div",{key:e,className:"field",style:{display:"flex"}},i.a.createElement("input",{id:e,type:"checkbox",checked:a.includes(e),onChange:function(t){t.target.checked?l(Array.from(new Set([].concat(Object(c.a)(a),[e])))):l(a.filter(function(t){return t!==e}))}}),i.a.createElement("label",{htmlFor:e,style:{color:m[e]}},e))})))};a(74);function y(){return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"TP INFOVIZ"),i.a.createElement(p,null))}var b=document.getElementById("root");r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(y,null)),b)}},[[69,1,2]]]);
//# sourceMappingURL=main.48771d08.chunk.js.map