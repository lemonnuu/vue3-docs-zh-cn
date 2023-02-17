import{r as s,C as l,o as a,c as n,e as o,j as p,t as e,D as t,E as c,Q as r,J as D,R as F,d as y,a as i}from"./app.f3eebbf7.js";const d=o("h1",{id:"form-input-bindings",tabindex:"-1"},[y("表单输入绑定 "),o("a",{class:"header-anchor",href:"#form-input-bindings","aria-hidden":"true"},"#")],-1),C={class:"options-api"},u={class:"composition-api"},b=i("",10),g={class:"demo"},A=i("",6),I={class:"demo"},m=o("span",null,"Multiline message is:",-1),v={style:{"white-space":"pre-line"}},h=i("",7),Z={class:"demo"},G={for:"checkbox-demo"},x=i("",6),X={class:"demo"},V=o("label",{for:"demo-jack"},"Jack",-1),W=o("label",{for:"demo-john"},"John",-1),w=o("label",{for:"demo-mike"},"Mike",-1),B=i("",5),J={class:"demo"},H=o("label",{for:"one"},"One",-1),P=o("label",{for:"two"},"Two",-1),j=i("",5),k={class:"demo"},q=[o("option",{disabled:"",value:""},"Please select one",-1),o("option",null,"A",-1),o("option",null,"B",-1),o("option",null,"C",-1)],f=i("",5),E={class:"demo"},N=[o("option",null,"A",-1),o("option",null,"B",-1),o("option",null,"C",-1)],Y=i("",38),R=JSON.parse('{"title":"表单输入绑定","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"基本用法","slug":"basic-usage","link":"#basic-usage","children":[{"level":3,"title":"文本","slug":"text","link":"#text","children":[]},{"level":3,"title":"多行文本","slug":"multiline-text","link":"#multiline-text","children":[]},{"level":3,"title":"复选框","slug":"checkbox","link":"#checkbox","children":[]},{"level":3,"title":"单选按钮","slug":"radio","link":"#radio","children":[]},{"level":3,"title":"选择器","slug":"select","link":"#select","children":[]}]},{"level":2,"title":"值绑定","slug":"value-bindings","link":"#value-bindings","children":[{"level":3,"title":"复选框","slug":"checkbox-1","link":"#checkbox-1","children":[]},{"level":3,"title":"单选按钮","slug":"radio-1","link":"#radio-1","children":[]},{"level":3,"title":"选择器选项","slug":"select-options-2","link":"#select-options-2","children":[]}]},{"level":2,"title":"修饰符","slug":"modifiers","link":"#modifiers","children":[{"level":3,"title":".lazy","slug":"lazy","link":"#lazy","children":[]},{"level":3,"title":".number","slug":"number","link":"#number","children":[]},{"level":3,"title":".trim","slug":"trim","link":"#trim","children":[]}]},{"level":2,"title":"组件上的 v-model","slug":"v-model-with-components","link":"#v-model-with-components","children":[]}],"relativePath":"guide/essentials/forms.md"}'),z=Object.assign({name:"guide/essentials/forms.md"},{setup(y){const i=s(""),R=s(""),z=s(!1),_=s([]),L=s(""),T=s(""),S=s([]);return(s,y)=>{const U=l("VueSchoolLink");return a(),n("div",null,[d,o("div",C,[p(U,{href:"https://vueschool.io/lessons/user-inputs-vue-devtools-in-vue-3",title:"用户输入 - 免费 Vue.js 课程"})]),o("div",u,[p(U,{href:"https://vueschool.io/lessons/vue-fundamentals-capi-user-inputs-in-vue",title:"用户输入 - 免费 Vue.js 课程"})]),b,o("div",g,[o("p",null,"Message is: "+e(i.value),1),t(o("input",{"onUpdate:modelValue":y[0]||(y[0]=s=>i.value=s),placeholder:"edit me"},null,512),[[c,i.value]])]),A,o("div",I,[m,o("p",v,e(R.value),1),t(o("textarea",{"onUpdate:modelValue":y[1]||(y[1]=s=>R.value=s),placeholder:"add multiple lines"},null,512),[[c,R.value]])]),h,o("div",Z,[t(o("input",{type:"checkbox",id:"checkbox-demo","onUpdate:modelValue":y[2]||(y[2]=s=>z.value=s)},null,512),[[r,z.value]]),o("label",G,e(z.value),1)]),x,o("div",X,[o("div",null,"Checked names: "+e(_.value),1),t(o("input",{type:"checkbox",id:"demo-jack",value:"Jack","onUpdate:modelValue":y[3]||(y[3]=s=>_.value=s)},null,512),[[r,_.value]]),V,t(o("input",{type:"checkbox",id:"demo-john",value:"John","onUpdate:modelValue":y[4]||(y[4]=s=>_.value=s)},null,512),[[r,_.value]]),W,t(o("input",{type:"checkbox",id:"demo-mike",value:"Mike","onUpdate:modelValue":y[5]||(y[5]=s=>_.value=s)},null,512),[[r,_.value]]),w]),B,o("div",J,[o("div",null,"Picked: "+e(L.value),1),t(o("input",{type:"radio",id:"one",value:"One","onUpdate:modelValue":y[6]||(y[6]=s=>L.value=s)},null,512),[[D,L.value]]),H,t(o("input",{type:"radio",id:"two",value:"Two","onUpdate:modelValue":y[7]||(y[7]=s=>L.value=s)},null,512),[[D,L.value]]),P]),j,o("div",k,[o("div",null,"Selected: "+e(T.value),1),t(o("select",{"onUpdate:modelValue":y[8]||(y[8]=s=>T.value=s)},q,512),[[F,T.value]])]),f,o("div",E,[o("div",null,"Selected: "+e(S.value),1),t(o("select",{"onUpdate:modelValue":y[9]||(y[9]=s=>S.value=s),multiple:""},N,512),[[F,S.value]])]),Y])}}});export{R as __pageData,z as default};
