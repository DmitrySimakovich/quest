(this.webpackJsonpquest=this.webpackJsonpquest||[]).push([[0],{12:function(e,c,t){e.exports={label:"input_label__2GcVG",input:"input_input__1q9nW",btnBlock:"input_btnBlock__1ksnZ",answer:"input_answer__2DVoe",error:"input_error__3IEXT"}},18:function(e,c,t){e.exports={image:"answer_image__1AhVG",textWrap:"answer_textWrap__396Q4",text:"answer_text__E1pit"}},2:function(e,c,t){e.exports={header:"App_header__1qOy5",linkBlock:"App_linkBlock__3QSqI",link:"App_link__14Kcu",main:"App_main__Dsluq",content:"App_content__2qbGl",contentWrap:"App_contentWrap__2h2qM"}},31:function(e,c,t){},37:function(e,c,t){"use strict";t.r(c);var n=t(1),a=(t(0),t(15)),r=t.n(a),l=(t(31),t(2)),s=t.n(l),u=t(7),i=t(4),h=t(12),o=t.n(h),j=t(18),d=t.n(j),b=function(e){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:d.a.textWrap,children:Object(n.jsx)("div",{className:d.a.text,children:"\u0423\u0440\u0430!"})}),Object(n.jsx)("img",{className:d.a.image,src:e.urlPhoto})]})},p=function(e){var c=e.state,t=e.changeInput,a=e.checkCurrentValue,r=e.clear,l=Object(n.jsx)("div",{className:o.a.answer,children:c.check?Object(n.jsx)(b,{urlPhoto:c.urlPhoto}):Object(n.jsx)("div",{className:o.a.error,children:Object(n.jsx)("span",{children:"\u0424\u0443\u0443\u0443\u0443\u0441\u043a.. \u041e\u0448\u0438\u0431\u043a\u0430.."})})});return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:o.a.label,children:Object(n.jsxs)("span",{children:["\u0417\u0430\u0433\u0430\u0434\u043a\u0430 \u043e\u0442 ",c.label]})}),Object(n.jsx)("input",{className:o.a.input,type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438 \u043a\u043e\u0434!",value:c.currentValue,onChange:function(e){t(c.id,e.target.value)}}),Object(n.jsxs)("div",{className:o.a.btnBlock,children:[Object(n.jsx)("button",{onClick:function(){return a(c.id)},children:"\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u043a\u043e\u0434!"}),Object(n.jsx)("button",{onClick:function(){return r(c.id)},children:"\u0417\u0430\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043f\u043e\u043b\u0435!"})]}),c.touch?l:null]})},k=t(17),O=t(5),x={inputs:[{id:"sherlock",label:"\u0428\u0435\u0440\u043b\u043e\u043a\u0430 \u0425\u043e\u043b\u043c\u0441\u0430",currentValue:"",checkCode:"042",urlPhoto:"https://i.ibb.co/rw7TpWs/winter.jpg",check:!1,touch:!1},{id:"watson",label:"\u0434-\u0440 \u0414\u0436\u043e\u043d\u0430 \u0412\u0430\u0442\u0441\u043e\u043d\u0430",currentValue:"",checkCode:"102",urlPhoto:"https://i.ibb.co/xD77hhM/beach.jpg",check:!1,touch:!1},{id:"hudson",label:"\u043c\u0438\u0441\u0441\u0438\u0441 \u0425\u0430\u0434\u0441\u043e\u043d",currentValue:"",checkCode:"129",urlPhoto:"https://i.ibb.co/h7Mv5FM/maiik.jpg",check:!1,touch:!1},{id:"hooper",label:"\u041c\u043e\u043b\u043b\u0438 \u0425\u0443\u043f\u0435\u0440",currentValue:"",checkCode:"930",urlPhoto:"https://i.ibb.co/s17MXCS/fest.jpg",check:!1,touch:!1},{id:"lestrade",label:"\u041b\u0435\u0441\u0442\u0440\u0435\u0439\u0434\u0430",currentValue:"",checkCode:"453",urlPhoto:"https://i.ibb.co/1rxvLrW/revera.jpg",check:!1,touch:!1},{id:"moriarty",label:"\u041c\u043e\u0440\u0438\u0430\u0440\u0442\u0438",currentValue:"",checkCode:"571",urlPhoto:"https://i.ibb.co/6J4Fn8B/mail.jpg",check:!1,touch:!1},{id:"adler",label:"\u0418\u0440\u0435\u043d \u0410\u0434\u043b\u0435\u0440",currentValue:"",checkCode:"443",urlPhoto:"https://i.ibb.co/DCnZJxr/home.jpg",check:!1,touch:!1},{id:"mary",label:"\u041c\u044d\u0440\u0438 \u041c\u043e\u0440\u0441\u0442\u0435\u043d",currentValue:"",checkCode:"100",urlPhoto:"https://i.ibb.co/XbBVzyJ/china.jpg",check:!1,touch:!1},{id:"mycroft",label:"\u041c\u0430\u0439\u043a\u0440\u043e\u0444\u0442\u0430 \u0425\u043e\u043b\u043c\u0441\u0430",currentValue:"",checkCode:"150",urlPhoto:"https://i.ibb.co/CQpKcBH/suvlak.jpg",check:!1,touch:!1},{id:"anderson",label:"\u0410\u043d\u0434\u0435\u0440\u0441\u043e\u043d\u0430",currentValue:"",checkCode:"456",urlPhoto:"https://i.ibb.co/BLc5LKn/moscow.jpg",check:!1,touch:!1}]},m={changeInput:function(e,c){return{type:"CHANGE_INPUT",inputId:e,currentValue:c}},checkCurrentValue:function(e){return{type:"CHECK_VERSION",inputId:e}},clear:function(e){return{type:"CLEAR",inputId:e}}};var g={changeInput:m.changeInput,checkCurrentValue:m.checkCurrentValue,clear:m.clear},C=Object(k.b)((function(e){return{sherlock:e.page.inputs[0],watson:e.page.inputs[1],hudson:e.page.inputs[2],hooper:e.page.inputs[3],lestrade:e.page.inputs[4],moriarty:e.page.inputs[5],adler:e.page.inputs[6],mary:e.page.inputs[7],mycroft:e.page.inputs[8],anderson:e.page.inputs[9]}}),g)((function(e){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("header",{children:Object(n.jsxs)("div",{className:s.a.header,children:[Object(n.jsx)("div",{className:s.a.linkBlock,children:Object(n.jsx)(u.b,{className:s.a.link,to:"/sherlock",children:"\u0428\u0435\u0440\u043b\u043e\u043a"})}),Object(n.jsx)("div",{className:s.a.linkBlock,children:Object(n.jsx)(u.b,{className:s.a.link,to:"/watson",children:"\u0412\u0430\u0442\u0441\u043e\u043d"})}),Object(n.jsx)("div",{className:s.a.linkBlock,children:Object(n.jsx)(u.b,{className:s.a.link,to:"/hudson",children:"\u041c\u0438\u0441\u0441\u0438\u0441 \u0425\u0430\u0434\u0441\u043e\u043d"})}),Object(n.jsx)("div",{className:s.a.linkBlock,children:Object(n.jsx)(u.b,{className:s.a.link,to:"/hooper",children:"\u041c\u043e\u043b\u043b\u0438 \u0425\u0443\u043f\u0435\u0440"})}),Object(n.jsx)("div",{className:s.a.linkBlock,children:Object(n.jsx)(u.b,{className:s.a.link,to:"/lestrade",children:"\u041b\u0435\u0441\u0442\u0440\u0435\u0439\u0434"})}),Object(n.jsx)("div",{className:s.a.linkBlock,children:Object(n.jsx)(u.b,{className:s.a.link,to:"/moriarty",children:"\u041c\u043e\u0440\u0438\u0430\u0440\u0442\u0438"})}),Object(n.jsx)("div",{className:s.a.linkBlock,children:Object(n.jsx)(u.b,{className:s.a.link,to:"/adler",children:"\u0418\u0440\u0435\u043d \u0410\u0434\u043b\u0435\u0440"})}),Object(n.jsx)("div",{className:s.a.linkBlock,children:Object(n.jsx)(u.b,{className:s.a.link,to:"/mary",children:"\u041c\u044d\u0440\u0438"})}),Object(n.jsx)("div",{className:s.a.linkBlock,children:Object(n.jsx)(u.b,{className:s.a.link,to:"/mycroft",children:"\u041c\u0430\u0439\u043a\u0440\u043e\u0444\u0442"})}),Object(n.jsx)("div",{className:s.a.linkBlock,children:Object(n.jsx)(u.b,{className:s.a.link,to:"/anderson",children:"\u0410\u043d\u0434\u0435\u0440\u0441\u043e\u043d"})})]})}),Object(n.jsx)("div",{className:s.a.main,children:Object(n.jsxs)("div",{className:s.a.contentWrap,children:[Object(n.jsx)("div",{className:s.a.content,children:Object(n.jsx)(i.a,{path:"/sherlock",render:function(){return Object(n.jsx)(p,{state:e.sherlock,clear:e.clear,changeInput:e.changeInput,checkCurrentValue:e.checkCurrentValue})}})}),Object(n.jsx)("div",{className:s.a.content,children:Object(n.jsx)(i.a,{path:"/watson",render:function(){return Object(n.jsx)(p,{state:e.watson,clear:e.clear,changeInput:e.changeInput,checkCurrentValue:e.checkCurrentValue})}})}),Object(n.jsx)("div",{className:s.a.content,children:Object(n.jsx)(i.a,{path:"/hudson",render:function(){return Object(n.jsx)(p,{state:e.hudson,clear:e.clear,changeInput:e.changeInput,checkCurrentValue:e.checkCurrentValue})}})}),Object(n.jsx)("div",{className:s.a.content,children:Object(n.jsx)(i.a,{path:"/hooper",render:function(){return Object(n.jsx)(p,{state:e.hooper,clear:e.clear,changeInput:e.changeInput,checkCurrentValue:e.checkCurrentValue})}})}),Object(n.jsx)("div",{className:s.a.content,children:Object(n.jsx)(i.a,{path:"/lestrade",render:function(){return Object(n.jsx)(p,{state:e.lestrade,clear:e.clear,changeInput:e.changeInput,checkCurrentValue:e.checkCurrentValue})}})}),Object(n.jsx)("div",{className:s.a.content,children:Object(n.jsx)(i.a,{path:"/moriarty",render:function(){return Object(n.jsx)(p,{state:e.moriarty,clear:e.clear,changeInput:e.changeInput,checkCurrentValue:e.checkCurrentValue})}})}),Object(n.jsx)("div",{className:s.a.content,children:Object(n.jsx)(i.a,{path:"/adler",render:function(){return Object(n.jsx)(p,{state:e.adler,clear:e.clear,changeInput:e.changeInput,checkCurrentValue:e.checkCurrentValue})}})}),Object(n.jsx)("div",{className:s.a.content,children:Object(n.jsx)(i.a,{path:"/mary",render:function(){return Object(n.jsx)(p,{state:e.mary,clear:e.clear,changeInput:e.changeInput,checkCurrentValue:e.checkCurrentValue})}})}),Object(n.jsx)("div",{className:s.a.content,children:Object(n.jsx)(i.a,{path:"/mycroft",render:function(){return Object(n.jsx)(p,{state:e.mycroft,clear:e.clear,changeInput:e.changeInput,checkCurrentValue:e.checkCurrentValue})}})}),Object(n.jsx)("div",{className:s.a.content,children:Object(n.jsx)(i.a,{path:"/anderson",render:function(){return Object(n.jsx)(p,{state:e.anderson,clear:e.clear,changeInput:e.changeInput,checkCurrentValue:e.checkCurrentValue})}})})]})})]})})),N=t(14),V=Object(N.b)({page:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case"CHANGE_INPUT":return Object(O.a)(Object(O.a)({},e),{},{inputs:e.inputs.map((function(e){return e.id===c.inputId?Object(O.a)(Object(O.a)({},e),{},{currentValue:c.currentValue}):e}))});case"CHECK_VERSION":return Object(O.a)(Object(O.a)({},e),{},{inputs:e.inputs.map((function(e){return e.id===c.inputId&&e.currentValue===e.checkCode?Object(O.a)(Object(O.a)({},e),{},{check:!0,touch:!0}):e.id===c.inputId&&e.currentValue!==e.checkCode?Object(O.a)(Object(O.a)({},e),{},{check:!1,touch:!0}):e}))});case"CLEAR":return Object(O.a)(Object(O.a)({},e),{},{inputs:e.inputs.map((function(e){return e.id===c.inputId?Object(O.a)(Object(O.a)({},e),{},{currentValue:"",touch:!1,check:!1}):e}))});default:return e}}}),_=Object(N.c)(V);r.a.render(Object(n.jsx)(u.a,{children:Object(n.jsx)(k.a,{store:_,children:Object(n.jsx)(C,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.c445d7c0.chunk.js.map