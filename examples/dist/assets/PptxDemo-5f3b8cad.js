import{d,_ as u,a as i,c as l,b as _,r as m,e as x,f as h,g,u as O}from"./index-7cd18a29.js";import{P as B,u as p}from"./PreviewWrapper-82803f32.js";const P=d({name:"VueOfficePptx",props:{src:[String,ArrayBuffer,Blob],requestOptions:{type:Object,default:()=>({})},options:{type:Object,default:()=>({})}},emits:["rendered","error"],setup(e,{emit:o}){}}),R={class:"vue-office-pptx"},v={class:"vue-office-pptx-main",ref:"rootRef"};function y(e,o,n,s,r,c){return i(),l("div",R,[_("div",v,"pptx",512)])}const t=u(P,[["render",y]]);t.install=function(e){e.component(t.name,t)};const k={__name:"PptxDemo",setup(e){function o(){p.hideLoading()}function n(a){console.log("出差",a),p.hideLoading()}const s=location.origin+(location.pathname+"/").replace("//","/")+"static/test-files/test.pptx",r=m();window.docxRef=r;const c={headers:{"component-name":"VueOfficePptx"}};return(a,V)=>(i(),x(B,{accept:".pptx",placeholder:"请输入pptx文件地址","default-src":s},{default:h(f=>[g(O(t),{ref_key:"docxRef",ref:r,src:f.src,style:{flex:"1",height:"0"},"request-options":c,onRendered:o,onError:n},null,8,["src"])]),_:1}))}};export{k as default};
