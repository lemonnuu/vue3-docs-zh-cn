import{g as a,r as e,o as s,c as t,j as r,e as n,u as l,a0 as o,D as u,E as i,F as p,_ as c}from"./app.f3eebbf7.js";import{P as d,a as m,b as f}from"./chunks/PartnerJoin.69b847d5.js";import"./chunks/PartnerCard.0b844dfe.js";const v={class:"container"},h=c(a({__name:"PartnerAll",setup(a){let c=e("");function h(a){return j(a.name,c.value)||a.region.some((a=>j(a,c.value)))}function j(a,e){return a.toLowerCase().includes(e.toLowerCase())}return(a,e)=>(s(),t(p,null,[r(d,{title:"浏览器所有合作伙伴"}),n("div",v,[r(l(o),{class:"icon"}),u(n("input",{placeholder:"通过名称或地区搜索合作伙伴","onUpdate:modelValue":e[0]||(e[0]=a=>c.value=a)},null,512),[[i,c.value]]),r(m,{filter:h})]),r(f)],64))}}),[["__scopeId","data-v-62bef79e"]]),j=JSON.parse('{"title":"","description":"","frontmatter":{"page":true,"footer":false},"headers":[],"relativePath":"partners/all.md"}'),P=Object.assign({name:"partners/all.md"},{setup:a=>(a,e)=>(s(),t("div",null,[r(h)]))});export{j as __pageData,P as default};
