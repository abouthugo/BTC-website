(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(n,e,t){n.exports=t(28)},22:function(n,e,t){},28:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(8),o=t.n(i),l=(t(22),t(3)),c=t(4),u=t(6),s=t(5),p=t(7),d=t(1),h=t(2);function m(){var n=Object(d.a)(["\n  width: 100vw;\n  height: 100%;\n  padding-top: 23px;\n  background-image: linear-gradient(to bottom right, #0FB786, #B0DF77);\n"]);return m=function(){return n},n}var f=h.a.section(m());function g(){var n=Object(d.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  flex-grow: 1;\n  flex-shrink: 1;\n  flex-basis: auto;\n  height: ",";\n  width: 80%;\n  margin: 0 auto;\n  padding: 0;\n  & * {\n    color: white;\n  }\n"]);return g=function(){return n},n}var b=h.a.div(g(),function(n){return n.full?"100%":null});function x(){var n=Object(d.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  min-height: 100%;\n  width: 100%;\n  align-content: center;\n"]);return x=function(){return n},n}var v=h.a.div(x());function w(){var n=Object(d.a)(["\n  padding: 10px 13px;\n  background-color: ",";\n  box-shadow: 0px 2px 4px rgba(100, 100, 100, 0.5);\n  border: none;\n  border-radius: 4px;\n  font-size: 16px;\n  line-height: 20px;\n  letter-spacing: 0.8px;\n  color: ",";\n  font-weight: bold;\n  width: ",";\n  cursor: pointer;\n  &:focus {\n    outline: none;\n  }\n"]);return w=function(){return n},n}var E=h.a.button(w(),function(n){return n.theme.bg},function(n){return n.theme.main},function(n){return n.width});E.defaultProps={theme:{main:"#3DC281",bg:"white"}};var y=E;function C(){var n=Object(d.a)(['\n  display: inline-block;\n  position: relative; \n  top: 0px;\n  right: 0 px;\n  width: 90px;\n  height: 10px;\n  margin: 0 -40px;\n  background: white;\n  transform: scale(0.1);\n  \n  &::before, &::after {\n    content: "";\n    position: absolute;\n    width: 50px;\n    height: 8px;\n    background: white;\n    left: 50%;\n  }\n  &::before{\n    transform: rotate(45deg);\n    top: -140%;\n  }\n  &::after{\n    transform: rotate(135deg);\n    bottom: -140%;\n  }\n']);return C=function(){return n},n}var k=h.a.div(C());function j(){var n=Object(d.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  a {\n    text-decoration: none;\n  }\n"]);return j=function(){return n},n}var O=h.a.nav(j()),B=function(){return a.a.createElement(O,null,a.a.createElement("a",{href:"#"},"Changelly"),a.a.createElement("a",{href:"#"},"Sign in ",a.a.createElement(k,null)," "))};function F(){var n=Object(d.a)(['\n  background: rgba(255,255,255, 0.35);\n  border-radius: 100px;\n  font-size: 14px;\n  line-height: 18px;\n  letter-spacing: 0.55px;\n  color: #FFFFFF;\n  padding: 5px 22px 5px 5px;\n  width: fit-content;\n\n  &::before{\n    position: relative;\n    content: "NEW";\n    background: #28BD84;\n    width: fit-content;\n    border-radius: 20px;\n    margin-right: 10px;\n    padding: 0px 7px;\n    font-weight: bold;\n  }\n']);return F=function(){return n},n}var S=h.a.div(F());function A(){var n=Object(d.a)(["\n  -webkit-appearance: none;\n  border-radius: 6.5px;\n  height: 13px;\n  width: 100%;\n  margin: 0 auto;\n  background-color: #E1E1E1;\n  outline: none;\n\n  &::-webkit-slider-thumb {\n     -webkit-appearance: none;\n     background: #71D07D;\n     width: 23px;\n     height: 23px;\n     border-radius: 50%;\n     box-shadow: 0px 0px 10px rgba(113, 208, 125, 0.453493);\n     cursor: pointer;\n  }\n\n  &::-webkit-range-thumb {\n    -webkit-appearance: none;\n    background: #71D07D;\n    box-shadow: 0px 0px 10px rgba(113, 208, 125, 0.453493);\n    cursor: pointer;\n  }\n"]);return A=function(){return n},n}var D=h.a.input(A()),L=function(n){function e(n){var t;return Object(l.a)(this,e),(t=Object(u.a)(this,Object(s.a)(e).call(this,n))).handleChange=function(n){var e=n.target.value;t.setState({value:e})},t.state={value:2,min:0,max:10},t}return Object(p.a)(e,n),Object(c.a)(e,[{key:"render",value:function(){return a.a.createElement(D,Object.assign({type:"range"},this.state,{onChange:this.handleChange}))}}]),e}(r.Component);function H(){var n=Object(d.a)(["\n  margin: 12px auto;\n  margin-bottom: 40px;\n  display: flex;\n  justify-content: space-between;\n"]);return H=function(){return n},n}function U(){var n=Object(d.a)(['\n  position: relative;\n  color: #9A9A9A;\n  font-size: 9px;\n  font-weight: bold;\n  line-height: 11px;\n  letter-spacing: 0.222353px;\n  text-align: center;\n  &&::before{\n    position: absolute;\n    content: "";\n    width: 1px;\n    height: 6px;\n    background-color: #9A9A9A;\n    top: -6px;\n    left: 50%;\n  }\n']);return U=function(){return n},n}var z=h.a.div(U()),T=h.a.div(H()),V=function(n){var e=n.marks;return a.a.createElement(T,null,e.map(function(n){return a.a.createElement(z,null,n.toFixed(2))}))};function R(){var n=Object(d.a)(["\n  width: 24px;\n  height: 24px;\n  margin: 0 5px;\n  background: url(",");\n  background-repeat: no-repeat;\n  background-position: center bottom;\n  background-size: cover;\n"]);return R=function(){return n},n}function I(){var n=Object(d.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  width: fit-content;\n  background-color: #E8F7FE;\n  border-radius: 4px;\n  padding: 12px 5px;\n  cursor: pointer;\n"]);return I=function(){return n},n}function M(){var n=Object(d.a)(["\n  display: inline-block;\n  background-color: #E8F7FE;\n  color: black;\n"]);return M=function(){return n},n}function N(){var n=Object(d.a)(["\n  width: fit-content;\n  height: fit-content;\n"]);return N=function(){return n},n}function Z(){var n=Object(d.a)(["\n  background-color: white;\n  width: 100%;\n  color: black;\n  font-weight: 500;\n  font-size: 18px;\n  cursor: pointer;\n  width: 100%;\n  text-align: center;\n  &:hover{\n    background-color: #E8F7FE;\n  }\n"]);return Z=function(){return n},n}function P(){var n=Object(d.a)(["\n  display: block;\n  transform: ",";\n  position: absolute;\n  width: 6.4em;\n  transition: transform 0.2s;\n"]);return P=function(){return n},n}function W(){var n=Object(d.a)(['\n  width: 30px;\n  height: 30px;\n  margin: 0;\n  padding: 0;\n  display: inline-block;\n  position: relative;\n  background: #E8F7FE;\n  cursor: pointer;\n  &::before {\n    content: "";\n    position: absolute;\n    top: ',";\n    left: 10px;\n\n    width: 0;\n    height: 0;\n\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-bottom: 5px solid transparent;\n    border-top: 5px solid black;\n    transition: all 0.3s;\n    transform: ",";\n    cursor: pointer;\n  }\n"]);return W=function(){return n},n}var q=h.a.div(W(),function(n){return n.show?"8px":"12px"},function(n){return n.show?"rotate(180deg)":null}),G=h.a.div(P(),function(n){return n.show?"scaleY(1)":"scaleY(0)"}),J=h.a.div(Z()),Y=h.a.div(N()),$=h.a.div(M()),_=h.a.div(I()),K=h.a.div(R(),function(n){return n.img}),Q=function(n){function e(n){var t;return Object(l.a)(this,e),(t=Object(u.a)(this,Object(s.a)(e).call(this,n))).handleDrop=function(){t.setState(function(n){return{showItems:!n.showItems}})},t.handleSelect=function(n){t.setState({selected:n,showItems:!1})},t.state={items:[],showItems:!1,selected:null},t}return Object(p.a)(e,n),Object(c.a)(e,[{key:"componentDidMount",value:function(){var n=this;if(this.props.items&&this.props.selected){var e=this.props.items.filter(function(e){return e.id===n.props.selected})[0];console.log(e),this.setState({items:this.props.items,selected:e})}}},{key:"render",value:function(){var n=this,e=this.state,t=e.items,r=e.showItems,i=e.selected;return a.a.createElement(Y,null,a.a.createElement(_,{onClick:this.handleDrop},i&&a.a.createElement(K,{img:i.imgURL}),a.a.createElement($,null,i?i.value:"Loading..."),a.a.createElement(q,{show:r})),a.a.createElement(G,{show:r},t.map(function(e){return a.a.createElement(J,{key:e.id,onClick:function(){return n.handleSelect(e)}},e.value)})))}}]),e}(r.Component);function X(){var n=Object(d.a)(['\n  font-size: 16px;\n  line-height: 20px;\n  letter-spacing: 0.5px;\n  color: #010101;\n  font-weight: 600;\n  margin-left: 11px;\n  &::before{\n    content: "$";\n  }\n']);return X=function(){return n},n}function nn(){var n=Object(d.a)(["\n  background: #FFFFFF;\n  box-shadow: 0px 0px 10px rgba(71, 71, 71, 0.1);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: black;\n  margin: 10px 0;\n  padding: 13px 11px;\n"]);return nn=function(){return n},n}var en=h.a.div(nn()),tn=h.a.p(X()),rn=function(n){var e=n.amount,t=n.items,r=n.selected;return a.a.createElement(en,null,a.a.createElement(tn,null,e),a.a.createElement(Q,{items:t,selected:r}))};function an(){var n=Object(d.a)(["\n  display: flex;\n  align-items: center;\n"]);return an=function(){return n},n}function on(){var n=Object(d.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  margin-right: 18px;\n"]);return on=function(){return n},n}function ln(){var n=Object(d.a)(["\n    width: ",";\n    height: ",";\n    background: ",";\n    margin: ",";\n    border-radius: 50%;\n"]);return ln=function(){return n},n}function cn(){var n=Object(d.a)(["\n  width: 80%;\n  margin: 0 auto;\n  padding-top: 50px;\n  color: #9B9B9B;\n"]);return cn=function(){return n},n}function un(){var n=Object(d.a)(["\n  width: 80%;\n  background: white;\n  justify-self: flex-end;\n  border-radius: 4px;\n  padding: 44px 0;\n"]);return un=function(){return n},n}var sn=[.01,.15,.25,.35,.45,.6,.8,.93,1,1.15,1.15],pn=h.a.div(un()),dn=h.a.div(cn()),hn=h.a.div(ln(),function(n){return n.active?"7px":"5px"},function(n){return n.active?"7px":"5px"},function(n){return n.active?"#73D07D":"#D1D1D1"},function(n){return n.active?"5px 4px":"0 5px"}),mn=h.a.div(on()),fn=h.a.div(an()),gn=function(n){function e(n){var t;return Object(l.a)(this,e),(t=Object(u.a)(this,Object(s.a)(e).call(this,n))).handleCurrencyChange=function(n){var e=n.target;t.setState({current:e.value})},t.state={value:0,current:"US",amount:200,options:["USD","EUR"],countries:[{value:"USD",id:"US",imgURL:"https://www.countryflags.io/us/flat/64.png"},{value:"EUR",id:"EU",imgURL:"https://www.countryflags.io/eu/flat/64.png"},{value:"GBP",id:"GB",imgURL:"https://www.countryflags.io/gb/flat/64.png"}],crypto:[{value:"BTC",id:"BTC",imgURL:"https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png"}]},t}return Object(p.a)(e,n),Object(c.a)(e,[{key:"render",value:function(){var n=this.state,e=n.amount,t=n.current,r=n.countries,i=n.crypto;return a.a.createElement(pn,null,a.a.createElement(dn,null,a.a.createElement(L,null),a.a.createElement(V,{marks:sn}),a.a.createElement(rn,{amount:e,items:r,selected:t}),a.a.createElement(fn,null,a.a.createElement(mn,null,a.a.createElement(hn,null),a.a.createElement(hn,{active:!0}),a.a.createElement(hn,null)),a.a.createElement("p",{style:{color:"#9B9B9B",fontWeight:"600"}},"For ",a.a.createElement("span",{style:{color:"black"}},"200 USD")," you will get ",a.a.createElement("span",{style:{color:"black"}},"0.75454 Bitcoin"))),a.a.createElement(rn,{amount:.75454,items:i,selected:i[0].id}),a.a.createElement(y,{theme:{bg:"#99D979",main:"white"},width:"100%",style:{marginTop:"23px"}},"Continue")))}}]),e}(r.Component),bn=[{name:"REASONABLE FEES",content:"Stripe is an always-improving toolchain that gains new features every month. Our world-class engineering team constantly iterates upon every facet of the Stripe stack. And from Apple Pay to Bitcoin, building on Stripe means you get early access to the latest technologies.",link:"#",icon:"dollar"},{name:"EASY VERIFICATION",content:"We help power 100,000+ businesses in 100+ countries and across nearly every industry. Headquartered in San Francisco, Stripe has 9 global offices and hundreds of people working to help transform how modern businesses are built and run.",link:"#",icon:"question"},{name:"QUICK TRANSACTIONS",content:"Stripe is an always-improving toolchain that gains new features every month. Our world-class engineering team constantly iterates upon every facet of the Stripe stack. And from Apple Pay to Bitcoin, building on Stripe means you get early access to the latest technologies.",link:"#",icon:"cycle"},{name:"INSTANT SUPPORT",content:"We help power 100,000+ businesses in 100+ countries and across nearly every industry. Headquartered in San Francisco, Stripe has 9 global offices and hundreds of people working to help transform how modern businesses are built and run.",link:"#",icon:"clock"}];function xn(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 65px;\n  height: 65px;\n  background: #B9F4BC;\n  border-radius: 50%;\n"]);return xn=function(){return n},n}var vn=h.a.div(xn()),wn={dollar:function(){return a.a.createElement(vn,null,a.a.createElement("svg",{width:"15",height:"27",viewBox:"0 0 15 27",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M8.07466 11.85C4.72986 10.965 3.65422 10.05 3.65422 8.625C3.65422 6.99 5.14244 5.85 7.63261 5.85C10.2554 5.85 11.2279 7.125 11.3163 9H14.5727C14.4695 6.42 12.9224 4.05 9.84283 3.285V0H5.4224V3.24C2.56385 3.87 0.265226 5.76 0.265226 8.655C0.265226 12.12 3.07957 13.845 7.19057 14.85C10.8743 15.75 11.611 17.07 11.611 18.465C11.611 19.5 10.889 21.15 7.63261 21.15C4.59725 21.15 3.40373 19.77 3.24165 18H0C0.176817 21.285 2.59332 23.13 5.4224 23.745V27H9.84283V23.775C12.7161 23.22 15 21.525 15 18.45C15 14.19 11.4195 12.735 8.07466 11.85Z",fill:"#1BB978"})))},question:function(){return a.a.createElement(vn,null,a.a.createElement("svg",{width:"17",height:"27",viewBox:"0 0 17 27",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.1372 12.2902C8.377 13.6306 6.375 15.1551 6.375 19H10.625C10.625 16.6875 12.1359 15.3758 13.6866 14.0295C15.3212 12.6103 17 11.1528 17 8.44444C17 3.77889 13.1962 0 8.5 0C3.80375 0 0 3.77889 0 8.44444H4.25C4.25 6.12222 6.1625 4.22222 8.5 4.22222C10.8375 4.22222 12.75 6.12222 12.75 8.44444C12.75 10.3006 11.518 11.2387 10.1372 12.2902ZM6 27H10V23H6V27Z",fill:"#13B675"})))},cycle:function(){return a.a.createElement(vn,null,a.a.createElement("svg",{width:"41",height:"30",viewBox:"0 0 41 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M20.5 3.75C14.3314 3.75 9.31818 8.79375 9.31818 15H14.9091L7.45455 22.5L0 15H5.59091C5.59091 6.7125 12.2627 0 20.5 0C23.4259 0 26.1468 0.8625 28.4391 2.325L25.7182 5.0625C24.1714 4.21875 22.3823 3.75 20.5 3.75ZM26.0909 15L33.5455 7.5L41 15H35.4091C35.4091 23.2875 28.7373 30 20.5 30C17.5741 30 14.8532 29.1375 12.5609 27.675L15.2818 24.9375C16.8286 25.7812 18.6177 26.25 20.5 26.25C26.6686 26.25 31.6818 21.2062 31.6818 15H26.0909Z",fill:"#1BB978"})))},clock:function(){return a.a.createElement(vn,null,a.a.createElement("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0 14C0 6.272 6.258 0 13.986 0C21.728 0 28 6.272 28 14C28 21.728 21.728 28 13.986 28C6.258 28 0 21.728 0 14ZM2.8 14C2.8 20.188 7.812 25.2 14 25.2C20.188 25.2 25.2 20.188 25.2 14C25.2 7.812 20.188 2.8 14 2.8C7.812 2.8 2.8 7.812 2.8 14Z",fill:"#13B675"}),a.a.createElement("path",{d:"M15.25 7H13V15.5246L20.875 20L22 18.2525L15.25 14.459V7Z",fill:"#13B675"})))},lock:function(){return a.a.createElement(vn,null,a.a.createElement("svg",{width:"25",height:"32",viewBox:"0 0 25 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M21.875 10.6667H20.3125V7.61905C20.3125 3.41333 16.8125 0 12.5 0C8.1875 0 4.6875 3.41333 4.6875 7.61905V10.6667H3.125C1.40625 10.6667 0 12.0381 0 13.7143V28.9524C0 30.6286 1.40625 32 3.125 32H21.875C23.5938 32 25 30.6286 25 28.9524V13.7143C25 12.0381 23.5938 10.6667 21.875 10.6667ZM12.5 24.381C10.7812 24.381 9.375 23.0095 9.375 21.3333C9.375 19.6571 10.7812 18.2857 12.5 18.2857C14.2188 18.2857 15.625 19.6571 15.625 21.3333C15.625 23.0095 14.2188 24.381 12.5 24.381ZM7.65625 10.6667H17.3438V7.61905C17.3438 5.01333 15.1719 2.89524 12.5 2.89524C9.82812 2.89524 7.65625 5.01333 7.65625 7.61905V10.6667Z",fill:"#13B675"})))}};function En(){var n=Object(d.a)(['\n  margin-left: 10px;\n  display: inline-block;\n  position: relative;\n  top: -5px;\n  left: 0;\n  \n  width: 8px;\n  height: 2px;\n  background: #24B47E;\n  border-radius: 10px;\n  transform: scale(1);\n  &::before, &::after {\n    content: "";\n    position: absolute;\n    width: 85%;\n    height: 100%;\n    background: #24B47E;\n    left: 39.5%;\n    border-radius: 9px;\n  }\n  &::before {\n     top: -90%;\n     transform: rotate(45deg);\n  }\n  \n  &::after {\n    bottom: -90%;\n    transform: rotate(135deg);\n  }\n\n']);return En=function(){return n},n}var yn=h.a.div(En());function Cn(){var n=Object(d.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  width: 50%;\n  margin: 70px auto;\n  h1 {\n    font-size: 17px;\n    line-height: 22px;\n    letter-spacing: 1.55px;\n    font-weight: 600;\n    color: #24B47E;\n  }\n\n  p {\n    font-weight: normal;\n    font-size: 17px;\n    line-height: 26px;\n    letter-spacing: 0.4px;\n    color: #6B7C93;\n  }\n\n  a {\n    font-weight: normal;\n    font-size: 17px;\n    line-height: 22px;\n    letter-spacing: 0.5px;\n    color: #24B47E;\n    text-decoration: none;\n  }\n"]);return Cn=function(){return n},n}function kn(){var n=Object(d.a)(["\n  border-bottom: 2px solid #F6F9FC;\n"]);return kn=function(){return n},n}function jn(){var n=Object(d.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  width: 100%;\n  div {\n    &:nth-child(even) {\n      border-left: 2px solid #F6F9FC;\n    }\n  }\n"]);return jn=function(){return n},n}var On=h.a.div(jn()),Bn=h.a.div(kn()),Fn=h.a.div(Cn()),Sn=function(){return a.a.createElement(On,null,bn.map(function(n){var e=wn[n.icon];return a.a.createElement(Bn,null,a.a.createElement(Fn,null,a.a.createElement(e,null),a.a.createElement("h1",null,n.name),a.a.createElement("p",null,n.content),a.a.createElement("a",{href:n.link},"Learn More ",a.a.createElement(yn,null))))}))};function An(){var n=Object(d.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  h1{\n    color: #24B47E;\n    font-weight: bold;\n    font-size: 17px;\n    line-height: 22px;\n    letter-spacing: 1.1px;\n  }\n  p {\n    font-weight: normal;\n    font-size: 17px;\n    line-height: 26px;\n    letter-spacing: 0.4px;\n    color: #6B7C93;\n  }\n"]);return An=function(){return n},n}function Dn(){var n=Object(d.a)(["\n  display: flex;\n  align-items:center;\n  background: #FFFFFF;\n  box-shadow: 0px 6px 8px rgba(164, 164, 164, 0.213825);\n  border-radius: 3px;\n  overflow: hidden;\n  margin-bottom: 40px;\n  img {\n    width: 107px;\n    height: 107px;\n    border-radius: 50%;\n    margin-left: -4.28em;\n  }\n"]);return Dn=function(){return n},n}var Ln=h.a.div(Dn()),Hn=h.a.div(An()),Un=function(n){var e=n.person;return a.a.createElement(Ln,null,a.a.createElement("figure",null,a.a.createElement("img",{src:e.img,alt:e.name})),a.a.createElement(Hn,null,a.a.createElement("h1",null,e.name),a.a.createElement("p",null,e.content)))},zn=[{name:"Charlie Shrem",content:"Catch mouse and gave it as a present chew the plant but scratch me there, elevator butt. Always ensure to lay down in  such.",img:"https://randomuser.me/api/portraits/med/men/86.jpg"},{name:"Bentley Bellinger",content:"Catch mouse and gave it as a present chew the plant but scratch me there, elevator butt. Always ensure to lay down in  such.",img:"https://randomuser.me/api/portraits/med/women/12.jpg"},{name:"Paul Dishkant",content:"Catch mouse and gave it as a present chew the plant but scratch me there, elevator butt. Always ensure to lay down in  such.",img:"https://randomuser.me/api/portraits/med/men/85.jpg"},{name:"Jesse Lazenby",content:"Catch mouse and gave it as a present chew the plant but scratch me there, elevator butt. Always ensure to lay down in  such.",img:"https://randomuser.me/api/portraits/med/men/81.jpg"}];function Tn(){var n=Object(d.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  justify-content: space-between;\n  padding-top: 40px;\n  grid-column-gap: 60px;\n  grid-row-gap: 70px;\n"]);return Tn=function(){return n},n}function Vn(){var n=Object(d.a)(["\n  width: 50%;\n  margin: 0 auto;\n  margin-top: 60px;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n"]);return Vn=function(){return n},n}function Rn(){var n=Object(d.a)(["\n  text-align: center;\n  font-weight: normal;\n  font-size: 17px;\n  line-height: 26px;\n  text-align: center;\n  letter-spacing: 0.5px;\n  color: #6B7C93;\n"]);return Rn=function(){return n},n}function In(){var n=Object(d.a)(["\n  text-align: center;\n  font-size: 22px;\n  font-weight: 600;\n  line-height: 33px;\n  letter-spacing: 2px;\n  color: #24B47E;\n"]);return In=function(){return n},n}var Mn=h.a.h1(In()),Nn=h.a.p(Rn()),Zn=h.a.section(Vn()),Pn=h.a.div(Tn()),Wn=wn.lock,qn=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(Zn,null,a.a.createElement(Wn,null),a.a.createElement(Mn,null,"Trusted by 2 million users"),a.a.createElement(Nn,null,"We believe that payments is a problem rooted in code, not finance. We obsessively seek out elegant, composable abstractions that enable robust, scalable, flexible integrations. ")),a.a.createElement(b,null,a.a.createElement(Pn,null,zn.map(function(n){return a.a.createElement(Un,{person:n})}))))};function Gn(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return Gn=function(){return n},n}function Jn(){var n=Object(d.a)(["\n  background: #F6F9FC;\n  width: 100%;\n  padding: 70px 0;\n  h1 {\n    font-style: normal;\n    font-weight: normal;\n    font-size: 30px;\n    line-height: 38px;\n    letter-spacing: 0.91px;\n    color: #24B47E;\n    margin: 6px 0;\n  }\n  h2 {\n    font-weight: normal;\n    font-size: 30px;\n    line-height: 38px;\n    letter-spacing: 0.91px;\n    color: #32325D;\n    margin: 0;\n  }\n"]);return Jn=function(){return n},n}var Yn=h.a.section(Jn()),$n=h.a.div(Gn()),_n=function(){return a.a.createElement(Yn,null,a.a.createElement(b,null,a.a.createElement($n,null,a.a.createElement("div",null,a.a.createElement("h1",null,"Buy Bitcoin with credit card"),a.a.createElement("h2",null,"In just a few easy steps")),a.a.createElement("div",null,a.a.createElement(y,{theme:{bg:"#24B47E"},style:{marginRight:"30px"}},"CREATE LOGO ACCOUNT"),a.a.createElement(y,null,"Buy Now")))))};function Kn(){var n=Object(d.a)(["\ndisplay: flex;\njustify-content: space-between;\n  color: #6B7C93;\n  padding: 39px 0;\n  a {\n    color: #6B7C93;\n    text-decoration: none;\n    margin-left: 34px;\n  }\n"]);return Kn=function(){return n},n}var Qn=h.a.footer(Kn()),Xn=function(){return a.a.createElement(b,null,a.a.createElement(Qn,null,"\xa9 2018 - All rights reserved",a.a.createElement("span",null,a.a.createElement("a",{href:"#"},"Terms of use"),a.a.createElement("a",{href:"#"},"Privacy Policy"))))},ne=function(n){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(p.a)(e,n),Object(c.a)(e,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(f,null,a.a.createElement(b,{full:!0},a.a.createElement(B,null),a.a.createElement(v,null,a.a.createElement("div",{className:"col-1"},a.a.createElement(S,null,"Catch mouse and gave it as a present chew the plant but scratch"),a.a.createElement("div",null,a.a.createElement("h1",{class:"title"},"Buy Bitcoin with Credit Card"),a.a.createElement("p",{class:"content"},"Catch mouse and gave it as a present chew the plant but scratch me there, elevator butt. Always ensure to lay down in ",a.a.createElement("br",null),"such a manner that tail can lightly brush.")),a.a.createElement(y,null,"CREATE ACCOUNT")),a.a.createElement(gn,null)))),a.a.createElement(Sn,null),a.a.createElement(qn,null),a.a.createElement(_n,null),a.a.createElement(Xn,null))}}]),e}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.68b7cda5.chunk.js.map