(this["webpackJsonpreact-form"]=this["webpackJsonpreact-form"]||[]).push([[0],{2:function(e,a,s){e.exports={container:"SignUp_container__3YRF6",formContainer:"SignUp_formContainer__3HSQo",header:"SignUp_header__1lftD",formField:"SignUp_formField__1eOia",formInput:"SignUp_formInput__3UeUL",uncompleted:"SignUp_uncompleted__3P6HO",formButtons:"SignUp_formButtons__FONnB",checkBoxContainer:"SignUp_checkBoxContainer__3KQ4a"}},27:function(e,a,s){},28:function(e,a,s){},35:function(e,a,s){"use strict";s.r(a);var t=s(0),c=s(15),n=s.n(c),r=(s(27),s(28),s(3)),o=s(9),i=s(5),d=s(10),l=s(12),m=(s(20),s(2)),j=s.n(m),p=function(e,a){var s={};return e.email?/\S+@\S+\.\S+/.test(e.email)?delete s.email:s.email="Email Adress is Invalid":s.email="Email Required",e.password?e.password.length<6?s.password="Password needs to be 6 characters or more":delete s.password:s.password="Password is Required","signup"===a&&(e.name.trim()?delete s.name:s.name="UserName Required",e.confirmPassword?e.confirmPassword!==e.password?s.confirmPassword="Passwords Do Not Match!":delete s.confirmPassword:s.confirmPassword="Confirm your Password",e.isAccepted?delete s.isAccepted:s.isAccepted="Please Accept our Regulations"),s},b=function(e,a){"success"===a?l.b.success(e):l.b.error(e)},u=s(11),O=s(1),f=function(){var e=Object(t.useState)({name:"",email:"",password:"",confirmPassword:"",isAccepted:!1}),a=Object(d.a)(e,2),s=a[0],c=a[1],n=Object(t.useState)({}),r=Object(d.a)(n,2),m=r[0],f=r[1],h=Object(t.useState)({}),x=Object(d.a)(h,2),w=x[0],g=x[1];Object(t.useEffect)((function(){f(p(s,"signup"))}),[s,w]);var v=function(e){"isAccepted"===e.target.name?c(Object(i.a)(Object(i.a)({},s),{},Object(o.a)({},e.target.name,e.target.checked))):c(Object(i.a)(Object(i.a)({},s),{},Object(o.a)({},e.target.name,e.target.value)))},N=function(e){g(Object(i.a)(Object(i.a)({},w),{},Object(o.a)({},e.target.name,!0)))};return Object(O.jsxs)("div",{className:j.a.container,children:[Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),0===Object.keys(m).length?b("You Signed Up successfully","success"):(b("invalid data!","error"),g({name:!0,email:!0,password:!0,confirmPassword:!0,isAccepted:!0}))},className:j.a.formContainer,children:[Object(O.jsx)("h2",{className:j.a.header,children:"Sign Up"}),Object(O.jsxs)("div",{className:j.a.formField,children:[Object(O.jsx)("label",{children:"Name"}),Object(O.jsx)("input",{className:m.name&&w.name?j.a.uncompleted:j.a.formInput,type:"text",name:"name",value:s.name,onChange:v,onFocus:N}),m.name&&w.name&&Object(O.jsx)("span",{children:m.name})]}),Object(O.jsxs)("div",{className:j.a.formField,children:[Object(O.jsx)("label",{children:"Email"}),Object(O.jsx)("input",{className:m.email&&w.email?j.a.uncompleted:j.a.formInput,type:"text",name:"email",value:s.email,onChange:v,onFocus:N}),m.email&&w.email&&Object(O.jsx)("span",{children:m.email})]}),Object(O.jsxs)("div",{className:j.a.formField,children:[Object(O.jsx)("label",{children:"Password"}),Object(O.jsx)("input",{className:m.password&&w.password?j.a.uncompleted:j.a.formInput,type:"password",name:"password",value:s.password,onChange:v,onFocus:N}),m.password&&w.password&&Object(O.jsx)("span",{children:m.password})]}),Object(O.jsxs)("div",{className:j.a.formField,children:[Object(O.jsx)("label",{children:"Confirm Password"}),Object(O.jsx)("input",{className:m.confirmPassword&&w.confirmPassword?j.a.uncompleted:j.a.formInput,type:"password",name:"confirmPassword",value:s.confirmPassword,onChange:v,onFocus:N}),m.confirmPassword&&w.confirmPassword&&Object(O.jsx)("span",{children:m.confirmPassword})]}),Object(O.jsxs)("div",{className:j.a.formField,children:[Object(O.jsxs)("div",{className:j.a.checkBoxContainer,children:[Object(O.jsx)("label",{children:"I accet terms of privacy policy"}),Object(O.jsx)("input",{type:"checkbox",name:"isAccepted",value:s.isAccepted,onChange:v,onFocus:N})]}),m.isAccepted&&w.isAccepted&&Object(O.jsx)("span",{children:m.isAccepted})]}),Object(O.jsxs)("div",{className:j.a.formButtons,children:[Object(O.jsx)(u.b,{to:"/login",children:"Login"}),Object(O.jsx)("button",{type:"submit",children:"Sign Up"})]})]}),Object(O.jsx)(l.a,{})]})},h=function(){var e=Object(t.useState)({name:"",email:""}),a=Object(d.a)(e,2),s=a[0],c=a[1],n=Object(t.useState)({}),r=Object(d.a)(n,2),m=r[0],f=r[1],h=Object(t.useState)({}),x=Object(d.a)(h,2),w=x[0],g=x[1];Object(t.useEffect)((function(){f(p(s,"login"))}),[s,w]);var v=function(e){"isAccepted"===e.target.name?c(Object(i.a)(Object(i.a)({},s),{},Object(o.a)({},e.target.name,e.target.checked))):c(Object(i.a)(Object(i.a)({},s),{},Object(o.a)({},e.target.name,e.target.value)))},N=function(e){g(Object(i.a)(Object(i.a)({},w),{},Object(o.a)({},e.target.name,!0)))};return Object(O.jsxs)("div",{className:j.a.container,children:[Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),0===Object.keys(m).length?b("You Logged in successfully","success"):(b("invalid data!","error"),g({email:!0,password:!0}))},className:j.a.formContainer,children:[Object(O.jsx)("h2",{className:j.a.header,children:"Login"}),Object(O.jsxs)("div",{className:j.a.formField,children:[Object(O.jsx)("label",{children:"Email"}),Object(O.jsx)("input",{className:m.email&&w.email?j.a.uncompleted:j.a.formInput,type:"text",name:"email",value:s.email,onChange:v,onFocus:N}),m.email&&w.email&&Object(O.jsx)("span",{children:m.email})]}),Object(O.jsxs)("div",{className:j.a.formField,children:[Object(O.jsx)("label",{children:"Password"}),Object(O.jsx)("input",{className:m.password&&w.password?j.a.uncompleted:j.a.formInput,type:"password",name:"password",value:s.password,onChange:v,onFocus:N}),m.password&&w.password&&Object(O.jsx)("span",{children:m.password})]}),Object(O.jsxs)("div",{className:j.a.formButtons,children:[Object(O.jsx)(u.b,{to:"/signup",children:"Sign Up"}),Object(O.jsx)("button",{type:"submit",children:"Login"})]})]}),Object(O.jsx)(l.a,{})]})};var x=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)("switch",{children:[Object(O.jsx)(r.b,{path:"/login",component:h}),Object(O.jsx)(r.b,{path:"/signup",component:f}),Object(O.jsx)(r.a,{from:"/",to:"/signup"})]})})};n.a.render(Object(O.jsx)(u.a,{children:Object(O.jsx)(x,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.6e1eec17.chunk.js.map