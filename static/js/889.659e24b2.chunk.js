"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[889],{4889:function(n,r,e){e.r(r),e.d(r,{default:function(){return on}});var t,o,i,c,a,u,l,s,d,m,h,x,f,p,g,b,Z,j=e(2791),v=e(9434),y=e(3634),k=e(6916),P=function(n){return n.contacts.contacts},w=function(n){return n.contacts.isLoading},C=(0,k.P1)([P,function(n){return n.filter.filter}],(function(n,r){return n.filter((function(n){return n.name.toLowerCase().includes(r.toLowerCase())}))})),_=e(4270),q=e(5705),L=e(6727),F=e(9135),I=e(5218),T=e(168),N=e(5867),S=N.ZP.div(t||(t=(0,T.Z)(["\nmargin: 20px auto;\npadding: 40px;\nwidth: 800px;\nbackground-color:",";\n\n"])),(function(n){return n.theme.colors.dark})),A=(0,N.ZP)(q.l0)(o||(o=(0,T.Z)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\ngap: 12px;\n"]))),B=N.ZP.button(i||(i=(0,T.Z)(["\nmargin-top: 30px;\nwidth:200px;\nheight: 40px;\n background-color: ",";\ncolor:",";\n\n\ncursor:pointer;\n\n &:hover{\n  text-decoration: none;\n border-radius: 4px;\nbackground-color: ",";\ncolor:",";\n}\n"])),(function(n){return n.theme.colors.dark}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.dark})),M=(0,N.ZP)(q.gN)(c||(c=(0,T.Z)(["\npadding: 8px;\nmax-width: 100%;\nborder: none;\nborder-bottom: 1px solid ",";\n  outline: 0;\nbackground-color: ",";\ncolor:",";\n\n  &:hover{\n  \n  }\n"])),(function(n){return n.theme.colors.gray}),(function(n){return n.theme.colors.dark}),(function(n){return n.theme.colors.accent})),R=N.ZP.label(a||(a=(0,T.Z)(["\ndisplay: flex;\nflex-direction: column;\n  gap: 4px;\n\n  max-width: 100%;\n  width: 500px;\n  color: ",";\n"])),(function(n){return n.theme.colors.gray})),$=(0,N.ZP)(q.Bc)(u||(u=(0,T.Z)(["\ncolor: ",";\nfont-style: italic;\n"])),(function(n){return n.theme.colors.error})),E=e(184),J=L.Ry().shape({name:L.Z_().min(2,"Too Short!").max(50,"Too Long!").required("This field is required"),number:L.Z_().matches(/^\d{3}-\d{2}-\d{2}$/,"Phone number must be in the format 000-00-00!").required("This field is required")}),V=function(){var n=(0,v.I0)(),r=(0,v.v9)(P);return(0,E.jsx)(S,{children:(0,E.jsx)(q.J9,{initialValues:{name:"",number:""},validationSchema:J,onSubmit:function(e,t){var o={name:e.name,number:e.number},i=r.filter((function(n){return n.name.toLowerCase().trim()===o.name.toLowerCase().trim()})).length,c=r.filter((function(n){return n.number.trim()===o.number.trim()})).length;if(i||c)return I.ZP.success("".concat(o.name,": is already in contacts")),void t.resetForm();n((0,y.el)(o)),t.resetForm()},children:(0,E.jsxs)(A,{children:[(0,E.jsxs)(R,{children:["Name",(0,E.jsx)(M,{name:"name"}),(0,E.jsx)($,{name:"name",component:"div"})]}),(0,E.jsxs)(R,{children:["Number",(0,E.jsx)(M,{type:"tel",name:"number"}),(0,E.jsx)($,{name:"number",component:"div"})]}),(0,E.jsxs)(B,{type:"submit",children:[(0,E.jsx)(F.Bj$,{})," Add contacts"]})]})})})},Y=e(6895),z=N.ZP.div(l||(l=(0,T.Z)(["\nmargin-left: auto;\nmargin-right: auto;\nwidth: 500px;\n"]))),D=N.ZP.label(s||(s=(0,T.Z)(["\ndisplay: flex;\n  flex-direction: column;\n  margin-bottom: 8px;\nmax-width: 100%;\ncolor: ",";\n"])),(function(n){return n.theme.colors.gray})),G=N.ZP.input(d||(d=(0,T.Z)(["\npadding: 8px;\nwidth: 500px;\nborder:none;\nborder-bottom: 1px solid ",";\noutline: 0;\nbackground-color:  ",";\ncolor: ",";\n"])),(function(n){return n.theme.colors.gray}),(function(n){return n.theme.colors.dark}),(function(n){return n.theme.colors.accent})),H=function(){var n=(0,v.I0)();return(0,E.jsxs)(z,{children:[(0,E.jsx)(D,{children:"Find contact by name"}),(0,E.jsx)(G,{type:"text",name:"name",onChange:function(r){return n((0,Y.M)(r.target.value))}})]})},K=N.ZP.div(m||(m=(0,T.Z)(["\npadding-top: 20px;\n \n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 20px;\n\nwidth: 400px;\n"]))),O=N.ZP.ul(h||(h=(0,T.Z)(["\nlist-style: none;\npadding-left:0;\n\n"]))),Q=N.ZP.li(x||(x=(0,T.Z)(["\ndisplay: flex;\ngap: 10px;\nmargin-bottom: 10px;\ncolor: ",";\n"])),(function(n){return n.theme.colors.light})),U=N.ZP.button(f||(f=(0,T.Z)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nborder: transparent;\nbackground-color:  ",";\nwidth: 30px;\nheight: 30px;\ncursor:pointer;\n\n &:hover{\n  background-color:  ",";\nborder-radius: 4px;\n }\n"])),(function(n){return n.theme.colors.dark}),(function(n){return n.theme.colors.light})),W=N.ZP.div(p||(p=(0,T.Z)(["\ndisplay: flex;\nflex-direction: column;\nmargin-left: 20px;\n"]))),X=N.ZP.div(g||(g=(0,T.Z)(["\ndisplay: flex;\nwidth: 400px;\npadding: 4px;\nborder-radius:4px;\nalign-items: center;\n&:hover{\n  border:0;\n  \n  background-color: ",";\n  color:",";\n  }\n"])),(function(n){return n.theme.colors.light}),(function(n){return n.theme.colors.dark})),nn=N.ZP.p(b||(b=(0,T.Z)(["\nmargin-right: 20px;\n\n"]))),rn=N.ZP.p(Z||(Z=(0,T.Z)(["\nfont-style: italic;\nmargin-right: auto;\n"]))),en=function(){var n=(0,v.v9)(C),r=(0,v.I0)();return(0,E.jsx)(K,{children:n.map((function(n){var e=n.id,t=n.name,o=n.number;return(0,E.jsx)(O,{children:(0,E.jsx)(Q,{children:(0,E.jsxs)(X,{children:[(0,E.jsxs)(nn,{children:[t,": "]}),(0,E.jsxs)(rn,{children:[o," "]}),(0,E.jsx)(W,{children:(0,E.jsx)(U,{type:"button",onClick:function(){return r((0,y._f)(e))},children:(0,E.jsx)(F.AMf,{color:"#808080"})})})]})})},e)}))})},tn=e(8442);function on(){var n=(0,v.I0)(),r=(0,v.v9)(w);return(0,j.useEffect)((function(){n((0,y.yF)())}),[n]),(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(_.q,{children:(0,E.jsx)("title",{children:"Your contacts"})}),(0,E.jsx)(V,{}),(0,E.jsx)(H,{}),(0,E.jsx)(tn.x,{children:r&&"Request in progress..."}),(0,E.jsx)(en,{})]})}}}]);
//# sourceMappingURL=889.659e24b2.chunk.js.map