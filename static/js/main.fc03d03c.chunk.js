(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/dog4.2ce9e417.jpg"},function(e){e.exports={1:{country:1,name:"Ukraine"},2:{country:3,name:"Paris"},3:{country:4,name:"Madrid"},4:{country:6,name:"Houston"},5:{country:7,name:"Montreal"},6:{country:8,name:"\u041a\u0438\u0448\u0438\u043d\u0435\u0432"},7:{country:9,name:"Minsk"},8:{country:10,name:"Warsaw"},100:{country:1,name:"\u041b\u044c\u0432\u043e\u0432"},101:{country:1,name:"\u041d\u0438\u043a\u043e\u043b\u0430\u0435\u0432"},103:{country:1,name:"\u041f\u0435\u0440\u0435\u044f\u0441\u043b\u0430\u0432-\u0425\u043c\u0435\u043b\u044c\u043d\u0438\u0446\u043a\u0438\u0439"},104:{country:1,name:"\u041a\u0430\u043c\u0435\u043d\u0435\u0446-\u041f\u043e\u0434\u043e\u043b\u044c\u0441\u043a\u0438\u0439"},105:{country:1,name:"Donetsk"},106:{country:1,name:"Kharkov"},107:{country:1,name:"\u041b\u0443\u0446\u043a"},108:{country:1,name:"Poltava"},109:{country:1,name:"\u0427\u0435\u0440\u043d\u043e\u0432\u0446\u044b"},299:{country:1,name:"\u0427\u0435\u0440\u043d\u0438\u0433\u043e\u0432"}}},function(e){e.exports={1:"Ukraine",2:"Germany",3:"France",4:"Spain",5:"Sweden",6:"USA",7:"Canada",8:"Moldova",9:"Belarus",10:"Poland"}},function(e,t,a){e.exports=a.p+"static/media/cat1.1bf0ea9a.jpg"},function(e,t,a){e.exports=a.p+"static/media/cat2.ba354008.jpg"},function(e,t,a){e.exports=a.p+"static/media/cat3.dcdd9149.jpg"},,,,function(e,t,a){e.exports=a(25)},,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a.n(c),u=a(7),o=a(14),i=a(6),s=a(1),m=a(2),p=a(4),d=a(3),v=a(5),h=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.prevStep,a=e.nextStep,n=e.currentStep;return r.a.createElement("div",{className:"bottomButtons_container"},4!==n?r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"btn",onClick:t,disabled:0===n},"\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0439"),r.a.createElement("button",{type:"button",className:"btn",onClick:a},3===n?"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c":"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439")):r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"special_btn",onClick:function(){window.location.reload()}},"\u041f\u0440\u043e\u0439\u0442\u0438 \u0437\u0430\u043d\u043e\u0432\u043e")))}}]),t}(r.a.Component),b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).getClassName=function(e){var t="top_button";return e.isActive?t+=" isActive":e.isCompleted&&(t+=" isCompleted"),t},a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.steps,n=t.changeStep;t.currentStep;return r.a.createElement("div",{className:"buttons_container"},a.map(function(t){return r.a.createElement("button",{key:t.id,name:t.id,type:"button",className:e.getClassName(t),onClick:n},t.id+1)}))}}]),t}(r.a.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.onChange,n=e.errors;return r.a.createElement("div",null,r.a.createElement("p",null,"1. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0438 e-mail"),r.a.createElement("input",{type:"text",placeholder:"\u0418\u043c\u044f",name:"name",value:t.name,onChange:a}),n.name?r.a.createElement("div",{className:"error"},n.name):null,r.a.createElement("input",{type:"email",placeholder:"\u041f\u043e\u0447\u0442\u0430",name:"email",value:t.email,onChange:a}),n.email?r.a.createElement("div",{className:"error"},n.email):null)}}]),t}(r.a.Component),C=a(10),E=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).getOptionsCountry=function(e){var t=[];for(var n in e)t.push({id:n,name:e[n]});return a.getOptionsItems(t)},a.getOptionsItems=function(e){return e.map(function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)})},a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.onChange,n=e.errors,c=e.allCities;return r.a.createElement("div",null,r.a.createElement("p",null,"2. \u0412\u044b\u0431\u0435\u0440\u0435\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0443 \u0438 \u0433\u043e\u0440\u043e\u0434"),r.a.createElement("select",{id:"country",name:"country",value:t.country,onChange:a},r.a.createElement("option",null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0443"),this.getOptionsCountry(C)),n.country?r.a.createElement("div",{className:"error"},n.country):null,r.a.createElement("select",{id:"city",name:"city",value:t.city,onChange:a},r.a.createElement("option",null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434"),this.getOptionsItems(c)),n.country?r.a.createElement("div",{className:"error"},n.country):null)}}]),t}(r.a.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onChangeSocial,a=e.values,n=e.onChange,c=e.errors;return r.a.createElement("div",null,r.a.createElement("p",null,"3. \u041e\u0442\u043c\u0435\u0442\u044c\u0442\u0435 \u0441\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0435\u0442\u0438"),r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("input",{type:"checkbox",name:"fbIsChecked",id:"fbValue",value:a.fbIsChecked,checked:a.fbIsChecked,onChange:t})),r.a.createElement("td",null,"Facebook"),a.fbIsChecked?r.a.createElement("td",null,r.a.createElement("input",{type:"text",placeholder:"\u0412\u0430\u0448\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0432 Facebook",value:a.fbValue,onChange:n,name:"fbValue"})):r.a.createElement("div",null)),r.a.createElement("tr",null,c.fbValue?r.a.createElement("div",{className:"error"},c.fbValue):null),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("input",{type:"checkbox",name:"vkIsChecked",id:"vkValue",value:a.vkIsChecked,checked:a.vkIsChecked,onChange:t})),r.a.createElement("td",null,"\u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435"),a.vkIsChecked?r.a.createElement("td",null,r.a.createElement("input",{type:"text",placeholder:"\u0412\u0430\u0448\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0432 Facebook",value:a.vkValue,onChange:n,name:"vkValue"})):r.a.createElement("div",null)),r.a.createElement("tr",null,c.vkValue?r.a.createElement("div",{className:"error"},c.vkValue):null),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("input",{type:"checkbox",name:"twitIsChecked",id:"twitValue",value:a.twitIsChecked,checked:a.twitIsChecked,onChange:t})),r.a.createElement("td",null,"Twitter"),a.twitIsChecked?r.a.createElement("td",null,r.a.createElement("input",{type:"text",placeholder:"\u0412\u0430\u0448\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0432 Facebook",value:a.twitValue,onChange:n,name:"twitValue"})):r.a.createElement("div",null)),r.a.createElement("tr",null,c.twitValue?r.a.createElement("div",{className:"error"},c.twitValue):null),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("input",{type:"checkbox",name:"okIsChecked",id:"okValue",value:a.okIsChecked,checked:a.okIsChecked,onChange:t})),r.a.createElement("td",null,"\u041e\u0434\u043d\u043e\u043a\u043b\u0430\u0441\u0441\u043d\u0438\u043a\u0438"),a.okIsChecked?r.a.createElement("td",null,r.a.createElement("input",{type:"text",placeholder:"\u0412\u0430\u0448\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0432 Facebook",value:a.okValue,onChange:n,name:"okValue"})):r.a.createElement("div",null)),r.a.createElement("tr",null,c.okValue?r.a.createElement("div",{className:"error"},c.okValue):null)))}}]),t}(r.a.Component),y=a(11),g=a.n(y),O=a(12),j=a.n(O),S=a(13),V=a.n(S),I=a(8),w=a.n(I),N=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onChangeAvatar,a=e.errors;return r.a.createElement("div",null,r.a.createElement("p",null,"4. \u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043b\u044e\u0431\u0438\u043c\u043e\u0433\u043e \u043a\u043e\u0442\u0438\u043a\u0430"),r.a.createElement("div",{className:"img_container"},r.a.createElement("img",{className:"img",src:g.a,name:g.a,onClick:t}),r.a.createElement("img",{className:"img",src:j.a,name:j.a,onClick:t}),r.a.createElement("img",{className:"img",src:V.a,name:V.a,onClick:t}),r.a.createElement("img",{className:"img",src:w.a,name:w.a,onClick:t})),a.avatar?r.a.createElement("div",{className:"error"},a.avatar):null)}}]),t}(r.a.Component),x=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.values,t=e.name,a=e.email,n=e.country,c=e.city,l=e.avatar,u=e.fbValue,o=e.vkValue,i=e.twitValue,s=e.okValue;return r.a.createElement("div",{className:"final_container"},r.a.createElement("div",null,r.a.createElement("h1",null,t),r.a.createElement("span",null,a),r.a.createElement("span",null,n),r.a.createElement("span",null,c),r.a.createElement("span",null,u?"Facebook: ".concat(u):""),r.a.createElement("span",null,o?"\u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435: ".concat(o):""),r.a.createElement("span",null,i?"Twitter: ".concat(i):""),r.a.createElement("span",null,s?"\u041e\u0434\u043d\u043e\u043a\u043b\u0430\u0441\u0441\u043d\u0438\u043a\u0438: ".concat(s):"")),r.a.createElement("img",{className:"img",src:l}))}}]),t}(r.a.Component),A=function(e,t){var a={};switch(t){case 0:e.name||(a.name="Required"),e.email?e.email.includes("@")||(a.email="- \u0412 \u0430\u0434\u0440\u0435\u0441\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0441\u0438\u043c\u0432\u043e\u043b @"):a.email="Required";break;case 1:e.country||(a.country="Required"),e.city||(a.city="Required");break;case 2:e.fbIsChecked&&!e.fbValue&&(a.fbValue="Required"),e.vkIsChecked&&!e.vkValue&&(a.vkValue="Required"),e.okIsChecked&&!e.okValue&&(a.okValue="Required"),e.twitIsChecked&&!e.twitValue&&(a.twitValue="Required");break;case 3:e.avatar?e.avatar===w.a&&(a.avatar="\u0412\u044b \u0432\u044b\u0431\u0440\u0430\u043b\u0438 \u0441\u043e\u0431\u0430\u0447\u043a\u0443. \u0410 \u043d\u0430\u0434\u043e \u043a\u043e\u0442\u0438\u043a\u0430."):a.avatar="Required"}return a},q=a(9),R=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(p.a)(this,Object(d.a)(t).call(this))).nextStep=function(){var t=A(e.state.values,e.state.currentStep);if(0===Object.keys(t).length){var a=e.state,n=a.currentStep,r=a.steps,c=n+1;if(3===n)e.setState(function(e){return Object(i.a)({},e,{currentStep:c})});else{var l=Object(o.a)(r);l[n].isCompleted=!0,l[n].isActive=!1,l[c].isActive=!0,e.setState(function(e){return Object(i.a)({},e,{currentStep:c,steps:l})})}}else e.setState(function(e){return Object(i.a)({},e,{errors:t})})},e.prevStep=function(){var t=e.state,a=t.currentStep,n=t.steps,r=Object(o.a)(n),c=a-1;r[a].isActive=!1,r[c].isActive=!0,e.setState(function(e){return Object(i.a)({},e,{currentStep:c,steps:r})})},e.changeStep=function(t){var a=+t.target.name,n=e.state.steps;console.log(a),console.log(e.state.currentStep),console.log(n[a].isCompleted),n[a].isCompleted&&e.setState({currentStep:a})},e.onChange=function(t){var a=t.target.name,n=t.target.value,r=Object(i.a)({},e.state.values,Object(u.a)({},a,n)),c=Object(i.a)({},e.state.errors,Object(u.a)({},a,!1));e.setState(function(e){return Object(i.a)({},e,{values:r,errors:c})}),"country"===a&&e.selectCity(n)},e.onChangeAvatar=function(t){var a=Object(i.a)({},e.state.values,{avatar:t.target.name}),n=Object(i.a)({},e.state.errors,{avatar:!1});e.setState(function(e){return Object(i.a)({},e,{values:a,errors:n})})},e.onChangeSocial=function(t){var a=t.target.name,n=!e.state.values[a],r=t.target.id,c=Object(i.a)({},e.state.values,Object(u.a)({},a,n)),l=Object(i.a)({},e.state.errors,Object(u.a)({},r,!1));e.setState(function(e){return Object(i.a)({},e,{values:c,errors:l})})},e.selectCity=function(t){var a=[];for(var n in q)q[n].country==t&&a.push({id:n,name:q[n].name});e.setState(function(e){return Object(i.a)({},e,{allCities:a})})},e.state={currentStep:0,values:{name:"",email:"",country:"",city:"",avatar:"",fbIsChecked:!1,twitIsChecked:!1,vkIsChecked:!1,okIsChecked:!1,fbValue:"",vkValue:"",twitValue:"",okValue:""},errors:{name:"",email:"",country:"",avatar:"",fbIsChecked:"",tweetIsChecked:"",vkIsChecked:"",okIsChecked:""},steps:[{id:0,isActive:!0,isCompleted:!1},{id:1,isActive:!1,isCompleted:!1},{id:2,isActive:!1,isCompleted:!1},{id:3,isActive:!1,isCompleted:!1}],allCities:[]},e}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.currentStep,a=e.values,n=e.errors,c=e.steps,l=e.allCities;return r.a.createElement("div",{className:"form_container"},r.a.createElement(b,{currentStep:t,steps:c,changeStep:this.changeStep}),0===t&&r.a.createElement(k,{onChange:this.onChange,values:a,errors:n}),1===t&&r.a.createElement(E,{onChange:this.onChange,values:a,errors:n,allCities:l}),2===t&&r.a.createElement(f,{onChangeSocial:this.onChangeSocial,onChange:this.onChange,values:a,errors:n}),3===t&&r.a.createElement(N,{onChangeAvatar:this.onChangeAvatar,errors:n}),4===t&&r.a.createElement(x,{values:a}),r.a.createElement(h,{nextStep:this.nextStep,prevStep:this.prevStep,currentStep:t}))}}]),t}(r.a.Component);a(23);l.a.render(r.a.createElement(R,null),document.getElementById("root"))}],[[17,2,1]]]);
//# sourceMappingURL=main.fc03d03c.chunk.js.map