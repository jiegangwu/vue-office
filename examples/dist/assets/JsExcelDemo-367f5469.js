var f=Object.defineProperty;var w=(r,e,t)=>e in r?f(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var s=(r,e,t)=>(w(r,typeof e!="symbol"?e+"":e,t),t);import{S as x,a as l,b as m,t as S,c as p,r as b,g as D}from"./hack-bf966667.js";import{l as k}from"./lodash-1ce1e4ec.js";import{d as v}from"./url-065d6777.js";/* empty css              */import{r as _,o as g,a as E,c as I}from"./index-b9f20394.js";import"./_commonjs-dynamic-modules-302442b1.js";const y={xls:!1,minColLength:20};class O{constructor(e,t={},o={}){s(this,"container",null);s(this,"wrapper",null);s(this,"wrapperMain",null);s(this,"options",{});s(this,"requestOptions",{});s(this,"mediasSource",[]);s(this,"workbookDataSource",{_worksheets:[]});s(this,"sheetIndex",1);s(this,"ctx",null);s(this,"xs",null);s(this,"offset",null);s(this,"observer",null);s(this,"fileData",null);this.container=e,this.options={...y,...t},this.requestOptions=o,this.createWrapper(),this.initSpreadsheet(),this.hack()}createWrapper(){this.wrapper=document.createElement("div"),this.wrapper.className="vue-office-excel",this.wrapperMain=document.createElement("div"),this.wrapperMain.className="vue-office-excel-main",this.wrapper.appendChild(this.wrapperMain),this.container.appendChild(this.wrapper)}initSpreadsheet(){this.xs=new x(this.wrapperMain,{mode:"read",showToolbar:!1,showContextmenu:this.options.showContextmenu||!1,view:{height:()=>this.wrapper&&this.wrapper.clientHeight||300,width:()=>this.wrapper&&this.wrapper.clientWidth||1200},row:{height:24,len:100},col:{len:26,width:80,indexWidth:60,minWidth:60},autoFocus:!1}).loadData({}),this.options.cellSelected&&typeof this.options.cellSelected=="function"&&this.xs.on("cell-selected",(i,h,c)=>{this.options.cellSelected({cell:i,rowIndex:h,columnIndex:c})}),this.options.cellsSelected&&typeof this.options.cellsSelected=="function"&&this.xs.on("cells-selected",(i,{sri:h,sci:c,eri:u,eci:d})=>{this.options.cellsSelected({cell:i,startRowIndex:h,startColumnIndex:c,endRowIndex:u,endColumnIndex:d})});let e=this,t=this.xs.bottombar.swapFunc;this.xs.bottombar.swapFunc=function(i){t.call(e.xs.bottombar,i),e.sheetIndex=i,setTimeout(()=>{e.xs.reRender(),l(e.ctx,e.mediasSource,e.workbookDataSource._worksheets[e.sheetIndex],e.offset)})};let o=this.xs.sheet.editor.clear;this.xs.sheet.editor.clear=function(...i){o.apply(e.xs.sheet.editor,i),setTimeout(()=>{l(e.ctx,e.mediasSource,e.workbookDataSource._worksheets[e.sheetIndex],e.offset)})};let a=this.xs.sheet.editor.setOffset;this.xs.sheet.editor.setOffset=function(...i){a.apply(e.xs.sheet.editor,i),e.offset=i[0],l(e.ctx,e.mediasSource,e.workbookDataSource._worksheets[e.sheetIndex],e.offset)};const n=this.wrapperMain.querySelector("canvas");this.ctx=n.getContext("2d")}renderExcel(e){return this.fileData=e,m(e,this.options.xls).then(t=>{if(!t._worksheets||t._worksheets.length===0)throw new Error("未获取到数据，可能文件格式不正确或文件已损坏");this.options.beforeTransformData&&typeof this.options.beforeTransformData=="function"&&(t=this.options.beforeTransformData(t));let{workbookData:o,medias:a,workbookSource:n}=S(t,this.options);this.options.transformData&&typeof this.options.transformData=="function"&&(o=this.options.transformData(o)),this.mediasSource=a,this.workbookDataSource=n,this.offset=null,this.sheetIndex=0,p(),this.xs.loadData(o),l(this.ctx,this.mediasSource,this.workbookDataSource._worksheets[this.sheetIndex],this.offset)}).catch(t=>(this.mediasSource=[],this.workbookDataSource={_worksheets:[]},p(),this.xs.loadData({}),Promise.reject(t)))}hack(){const e=k.debounce(b,200).bind(this,this.wrapperMain);this.observer=new MutationObserver(e);const t={attributes:!0,childList:!0,subtree:!0};this.observer.observe(this.wrapperMain,t),e(this.wrapperMain)}setOptions(e){this.options=e}setRequestOptions(e){this.requestOptions=e}preview(e){return new Promise((t,o)=>{D(e,this.requestOptions).then(a=>{this.renderExcel(a).then(t).catch(n=>{this.mediasSource=[],this.workbookDataSource={_worksheets:[]},this.xs.loadData({}),o(n)})}).catch(a=>{this.mediasSource=[],this.workbookDataSource={_worksheets:[]},this.xs.loadData({}),o(a)})})}save(e){v(e||`js-preview-excel-${new Date().getTime()}.xlsx`,this.fileData)}destroy(){this.observer.disconnect(),this.container.removeChild(this.wrapper),this.container=null,this.wrapper=null,this.wrapperMain=null,this.ctx=null,this.xs=null,this.observer=null,this.options=null,this.requestOptions=null,this.mediasSource=null,this.workbookDataSource=null}}function C(r,e,t){return new O(r,e,t)}const M={init:C},J={__name:"JsExcelDemo",setup(r){const e=_(null);return g(()=>{window.myExcelPreview=M.init(e.value,{transformData:function(t){return console.log("transformData",t),t},cellSelected(t){console.log(t)}}),window.myExcelPreview.preview("/vue-office/examples/dist/static/test-files/test.xlsx").then(t=>{console.log("excel preview done",window.myExcelPreview)}).catch(t=>{console.log("err",t)})}),(t,o)=>(E(),I("div",{ref_key:"dom",ref:e,style:{height:"calc(100vh - 50px)"}},null,512))}};export{J as default};
