(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(7),i=n.n(r),s=n(5),u=n(2),o=n(16),j=n(0),l=function(e){var t=e.title,n=e.contacts,a=e.setContacts,r=Object(c.useState)(""),i=Object(u.a)(r,2),l=i[0],b=i[1],d=Object(c.useState)(""),O=Object(u.a)(d,2),h=O[0],m=O[1],f=function(e){var t=e.target,n=t.name,c=t.value;"name"===n?b(c):m(c)};return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:"header",children:t}),Object(j.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),n.find((function(e){return e.name===l})))return alert("".concat(l," is already in contacts"));var t={name:l,id:Object(o.a)(),number:h};a((function(e){return[].concat(Object(s.a)(e),[t])}))},children:[Object(j.jsxs)("label",{children:["Name",Object(j.jsx)("input",{type:"text",name:"name",required:!0,value:l,onChange:f})]}),Object(j.jsxs)("label",{children:["Number",Object(j.jsx)("input",{type:"tel",name:"number",required:!0,value:h,onChange:f})]}),Object(j.jsx)("label",{children:Object(j.jsx)("button",{type:"submit",children:"Add contact"})})]})]})};l.defaultProps={value:""};var b=l,d=function(e){var t=e.name,n=e.number,c=e.id,a=e.onDelete;return Object(j.jsxs)("li",{className:"contact-list-item",children:[Object(j.jsxs)("span",{children:[t,":"]}),Object(j.jsx)("span",{children:n}),Object(j.jsx)("button",{type:"button",onClick:function(){return a(c)},children:"Delete"})]})},O=function(e){var t=e.value,n=e.onChange;return Object(j.jsx)("form",{children:Object(j.jsxs)("label",{children:["Find contacts by name",Object(j.jsx)("input",{type:"text",name:"filter",value:t,onChange:n})]})})},h=function(e){var t=e.title,n=e.contacts,c=e.filter,a=e.onChange,r=e.onDelete;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:"header",children:t}),Object(j.jsx)(O,{value:c,onChange:a}),Object(j.jsx)("ul",{children:n.map((function(e){var t=e.name,n=e.id,c=e.number;return Object(j.jsx)(d,{name:t,number:c,id:n,onDelete:r},n)}))})]})};var m=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),i=Object(u.a)(r,2),o=i[0],l=i[1],d=function(){var e=o.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{title:"Phonebook",contacts:n,setContacts:a}),Object(j.jsx)(h,{title:"Contacts",contacts:d,filter:o,onChange:function(e){l(e.target.value)},onDelete:function(e){a((function(t){return Object(s.a)(t.filter((function(t){return t.id!==e})))}))}})]})};n(13);i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.4aae9b00.chunk.js.map