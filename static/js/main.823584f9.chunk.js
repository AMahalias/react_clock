(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),i=n(3),r=n(5),s=n(4),l=n(1),u=n.n(l),d=(n(12),n(0)),m=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={today:new Date},t.timer=0,t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timer=window.setInterval((function(){t.setState({today:new Date})}),1e3)}},{key:"componentDidUpdate",value:function(t,e){var n=this.props.name,c=t.name,a=this.state.today,o=e.today;n!==c&&console.debug("Renamed from ".concat(n," to ").concat(c)),a!==o&&console.info(o.toUTCString().slice(-12,-4))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timer)}},{key:"render",value:function(){var t=this.props.name,e=this.state.today.toUTCString().slice(-12,-4);return Object(d.jsxs)("div",{className:"Clock",children:[Object(d.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(d.jsx)("span",{className:"Clock__time",children:e})]})}}]),n}(l.Component);function h(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}var v=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={hasClock:!0,clockName:"Clock-0"},t.timerId=0,t.handleClick=function(){t.setState({hasClock:!0})},t.handleContextMenuClick=function(e){e.preventDefault(),t.setState({hasClock:!1})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){t.setState({clockName:h()})}),3300),document.addEventListener("contextmenu",this.handleContextMenuClick),document.addEventListener("click",this.handleClick)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId),document.removeEventListener("contextmenu",this.handleContextMenuClick),document.removeEventListener("click",this.handleClick)}},{key:"render",value:function(){var t=this.state,e=t.hasClock,n=t.clockName;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),e&&Object(d.jsx)(m,{name:n})]})}}]),n}(u.a.Component);a.a.render(Object(d.jsx)(v,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.823584f9.chunk.js.map