System.register(["./index-legacy-BTsVwyBE.js"],(function(e,l){"use strict";var a,n,t,u,o,r,s,c,d,v,i,m,p,b;return{setters:[e=>{a=e.r,n=e.i,t=e.h,u=e.o,o=e.c,r=e.b,s=e.e,c=e.w,d=e.F,v=e.a,i=e.j,m=e.k,p=e.f,b=e.l}],execute:function(){var l=document.createElement("style");l.textContent=".el-select-loading[data-v-e8b279ef]{display:flex;align-items:center;justify-content:center;padding:8px;color:#999;font-size:14px}.el-icon-loading[data-v-e8b279ef]{margin-right:8px}\n/*$vite$:1*/",document.head.appendChild(l);const f={Basic:{__name:"basic",emits:["confirm"],setup(e,{emit:l}){const i=a("");a(null);const m=[{label:"发包",value:"1",tabname:"发包文件",compontId:"Bag"},{label:"集体",value:"2",tabname:"集体文件",compontId:"Bag"}],p=a(null),b=l,f=e=>{b("confirm",p.value)};function g(e){console.log(e,"eee"),p.value=m.find((l=>l.value==e)),console.log(p.value,"----")}return a({}),n((()=>{p.value=m.find((e=>e.value==i.value)),console.log(p.value,"00000"),p.value&&f()})),(e,l)=>{const a=t("el-option"),n=t("el-select"),p=t("el-button");return u(),o("div",null,[r(" 基本信息111 "),s(n,{modelValue:i.value,"onUpdate:modelValue":l[0]||(l[0]=e=>i.value=e),placeholder:"Select",size:"large",style:{width:"240px"},onChange:g},{default:c((()=>[(u(),o(d,null,v(m,(e=>s(a,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),64))])),_:1},8,["modelValue"]),s(p,{onClick:f},{default:c((()=>[r("确定")])),_:1})])}}},Bag:{__name:"bag",setup:e=>(e,l)=>(u(),o("div",null," 发包 "))}},g=i({__name:"index",props:{tabArr:{},useComponentMap:{}},setup(e){const l=a([]),n=a(""),r=e;function s(e){return r.useComponentMap?f[e.compontId]:e.compontId}const i=e=>{l.value.length>=2?l.value[l.value.length-1].value!==e.value&&(l.value.pop(),l.value.push(e)):l.value.push(e)};return m((()=>r.tabArr),(e=>{e.length>0&&(n.value=e[0].value,l.value=[...r.tabArr])}),{immediate:!0,deep:!0}),(e,a)=>{const r=t("el-tab-pane"),m=t("el-tabs");return u(),p(m,{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=e=>n.value=e),type:"card",class:"demo-tabs"},{default:c((()=>[(u(!0),o(d,null,v(l.value,(e=>(u(),p(r,{key:e.value,label:e.label,name:e.value},{default:c((()=>[(u(),p(b(s(e)),{onConfirm:i},null,32))])),_:2},1032,["label","name"])))),128))])),_:1},8,["modelValue"])}}});e("default",{__name:"rult",setup(e){const l=a([{label:"基本信息",value:"0",tabname:"基本信息",compontId:"Basic"}]);return(e,a)=>(u(),o("div",null,[r(" 管理页 "),s(g,{tabArr:l.value,useComponentMap:!0},null,8,["tabArr"])]))}})}}}));
