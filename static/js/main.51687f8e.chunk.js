(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,o){},16:function(t,e,o){t.exports=o.p+"static/media/logo.5d5d9eef.svg"},17:function(t,e,o){},19:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),i=o(8),s=o.n(i),r=(o(14),o(2)),c=o(3),l=o(6),h=o(4),p=o(5),u=o(1),m=(o(16),o(17),function t(e,o,n,a,i,s,c){Object(r.a)(this,t),this.title=e,this.githubLink=o,this.linkedInLink=n,this.stackOverflowLink=a,this.portfolioImage=i,this.id=s,this.arrayposition=c}),b=[new m("Gif Fisher","http://github.com","blah","blah","../../images/fishygif.png","1"),new m("Desktop Fighter","http://github.com","blah","blah","../../images/week4.png","2"),new m("Tiki Trivia","http://github.com","blah","blah","../../images/tikitrivia.png","3"),new m("Frender","http://github.com","blah","blah","../../images/shaqfu.png","3"),new m("LIRI, the Cable Guy","http://github.com","blah","blah","../../images/liri.png","3"),new m("Hangman","http://github.com","blah","blah","../../images/hangman.png","3"),new m("Karmadillo","http://github.com","blah","blah","../../images/shaqfu.png","4"),new m("MeetPie","http://github.com","blah","blah","../../images/shaqfu.png","5"),new m("Another App","http://github.com","blah","blah","../../images/shaqfu.png","5"),new m("Home Alone II","http://github.com","blah","blah","../../images/shaqfu.png","5"),new m("Harry & the Hendersons","http://github.com","blah","blah","../../images/shaqfu.png","5")];var g=function(t,e,o){var n,a,i,s=t.length,r=2+Math.floor(s/2);if("front-row-item"==(a="front"===o?"front-row-item":"back-row-item")&&(n=60*e-70+"%",i=e),"back-row-item"==a){var c=Math.floor(r/2);n=-33*(i=(e+c+s)%s)+33*c+"%"}var l={display:i===s-1?"none":"block",distance:n,className:a};return console.log("firstBack",r),console.log("position:",e),console.log("adjPos:",i),console.log("distance",n),l},f=function(t){function e(){return Object(r.a)(this,e),Object(l.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.props.row,e=this.props.position,o=this.props.portfolioImage,n=g(b,e,t),i=n.distance,s=n.className,r=n.display;console.log("MOVING"),console.log(i);var c={className:s+" portfolio-card",left:i,color:"limegreen",display:r};return a.a.createElement("div",{className:c.className,style:c},a.a.createElement("a",{href:"https://www.google.com"},a.a.createElement("h4",null,this.props.title),a.a.createElement("img",{src:o,alt:"good picture",title:"good picture",className:"portfolio-pic"})))}}]),e}(n.Component);var d=function(t){return b.map(function(e){return a.a.createElement(f,{title:e.title,githubLink:e.githubLink,linkedInLink:e.linkedInLink,stackOverflowLink:e.stackOverflowLink,portfolioImage:e.portfolioImage,key:e.id,position:e.position,row:t})})},k={initializePositions:function(t){t.forEach(function(t,e){t.position=e})},increasePositions:function(t){t.forEach(function(e,o){e.position==t.length-1?e.position=0:e.position++})},decreasePositions:function(t){t.forEach(function(e,o){0==e.position?e.position=t.length-1:e.position--})}},w=function(t){function e(){var t,o;Object(r.a)(this,e);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(o=Object(l.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(a)))).state={carouselComponentsArray:[]},o.componentWillMount=function(){k.initializePositions(b),o.setState({carouselComponentsArray:b}),console.log(o.state.carouselComponentsArray)},o.scrollLeft=function(){k.increasePositions(b),o.setState({carouselComponentsArray:b}),console.log(o.state.carouselComponentsArray)},o.scrollRight=function(){k.decreasePositions(b),console.log(Object(u.a)(Object(u.a)(o))),o.setState({carouselComponentsArray:b})},o}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return console.log(this),a.a.createElement("div",{className:"carousel-container"},a.a.createElement("h1",{id:"left-arrow",onClick:this.scrollRight},"<"),a.a.createElement("h1",{id:"right-arrow",onClick:this.scrollLeft},">"),a.a.createElement("div",{id:"carousel-back-row"},d("back")),a.a.createElement("div",{id:"carousel-front-row"},d("front")))}}]),e}(n.Component),v=function(t){function e(){var t,o;Object(r.a)(this,e);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(o=Object(l.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(a)))).state={macaroons:"todo"},o.recordState=function(){console.log(Object(u.a)(Object(u.a)(o)))},o}return Object(p.a)(e,t),Object(c.a)(e,[{key:"componentWillReceiveProps",value:function(t){t!==this.props&&this.setState(t.prevState)}},{key:"render",value:function(){var t=a.a.createElement("h2",null,"Yes sir.");return console.log(this.state),a.a.createElement("div",{className:"Overall"},a.a.createElement(w,null),t,a.a.createElement("button",{onClick:this.props.prop06},"Button."),a.a.createElement("button",{onClick:this.recordState},"button 2"))}}]),e}(n.Component),O=function(t){function e(){var t,o;Object(r.a)(this,e);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(o=Object(l.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(a)))).state={stateA:"this is state A, a string",stateB:!0,stateC:["stateB","is","a","boolean",", and state C is an array."],stateD:{string:"State D is its own object.",integer:4,boolean:!0,array:["1","2","3","5"]},n:0,atomSpeed:1,color:"blue"},o.buttonClicker=function(){console.log(Object(u.a)(Object(u.a)(o)))},o.inheritedFunction=function(t){return t[3]},o.speedInc=function(){o.setState({atomSpeed:o.state.atomSpeed-50})},o.speedDec=function(){o.setState({atomSpeed:o.state.atomSpeed+50})},o.makeRed=function(){o.setState({color:"red"})},o}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){d();this.state.color,this.state.atomSpeed,"App-logo-spin infinite ".concat(this.state.atomSpeed,"s linear; color: red"),"".concat(this.state.atomSpeed,"px");return a.a.createElement("div",{className:"App"},a.a.createElement(v,{prop01:"bananas",prop02:this.state.stateC,prop04:this.inheritedFunction,prop05:this.state.stateD,prop06:this.buttonClicker,prevState:this.state}),a.a.createElement("header",{className:"App-header"},a.a.createElement("button",{onClick:this.makeRed},"Make Red"),a.a.createElement("button",{onClick:this.speedInc},"Faster"),a.a.createElement("button",{onClick:this.speedDec},"Slower")))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,o){t.exports=o(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.51687f8e.chunk.js.map