(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ed426ea"],{"14db":function(a,e,t){var o=t("4ac7");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[a.i,o,""]]),o.locals&&(a.exports=o.locals);var r=t("499e").default;r("51fd25d0",o,!0,{sourceMap:!1,shadowMode:!1})},"2e04":function(a,e,t){var o=t("8564");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[a.i,o,""]]),o.locals&&(a.exports=o.locals);var r=t("499e").default;r("86c26e80",o,!0,{sourceMap:!1,shadowMode:!1})},"4ac7":function(a,e,t){var o=t("24fb");e=o(!1),e.push([a.i,".vue-treeselect__control{border:1px solid rgba(16,14,14,.4196078431372549)!important}.input-group .w-100 .d-block{position:absolute;margin-top:37px;margin-left:10px}",""]),a.exports=e},8564:function(a,e,t){var o=t("24fb");e=o(!1),e.push([a.i,"*,:after,:before{box-sizing:border-box;margin:0;position:unset}",""]),a.exports=e},"9bb0":function(a,e,t){"use strict";t("14db")},c904:function(a,e,t){"use strict";t("2e04")},f7a2:function(a,e,t){"use strict";t.r(e);var o=function(){var a=this,e=a._self._c;return e("div",{staticClass:"padding-t_10",attrs:{id:"reportstabsdata"}},[e("div",{staticClass:"left-menu-tab new_tab"},[e("div",{staticClass:"col-md-12 p-0"},[e("div",{staticClass:"theme-primary partition"},[e("span",{staticClass:"p-name text-white"},[a._v(a._s(a.$t("ProductReport")))])])]),e("div",{staticClass:"pt-2 mb-1 w-100 d-none d-lg-block"},[e("div",{staticClass:"input-group customsearchbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.searchQuery,expression:"searchQuery"}],staticClass:"form-control searchcustomfilter border-right-0",attrs:{type:"text",maxlength:"50",placeholder:a.Search,autocomplete:"off"},domProps:{value:a.searchQuery},on:{input:function(e){e.target.composing||(a.searchQuery=e.target.value)}}}),a._m(0)])]),e("div",{staticClass:"mt-2",staticStyle:{"max-height":"700px"},attrs:{id:"divscrollsetuptabs"}},[e("ul",{staticClass:"nav nav-pills flex-column left-tab responivecustomtab lefttabiconfix lefttabflexible",attrs:{id:"upper",role:"tablist"}},a._l(a.filteredTabs,(function(t,o){return e("li",{key:o},[e("a",{staticClass:"nav-link left-menu",class:{active:a.activeKey===t.index},attrs:{"data-toggle":"#"+t.id},on:{click:function(e){return a.activateTab(t.index)}}},[e("i",{class:t.icon,attrs:{"aria-hidden":"true"}}),a._v(a._s(a.$t(t.name))+" ")])])})),0)])]),e("div",{staticClass:"right-content"},[e("loader",{attrs:{isVisible:a.isLoading}}),e("div",{staticClass:"col-md-12 p-0"},[e("div",{staticClass:"theme-primary partition",staticStyle:{overflow:"visible"}},[e("span",{staticClass:"p-name text-white",attrs:{id:"spnreporttext"}},[a._v(a._s(this.$t(a.activeTabName)))])])]),e("div",{staticClass:"col-md-12 p-0"},[e("div",{staticClass:"tab-content",attrs:{id:"myTabContent"}},[a._m(1),0==a.activeKey?e("div",{staticClass:"tab-pane",class:{"active show":0==a.activeKey},attrs:{id:"ProductAssignmentReport"}},[e("ProductAssignmentReports")],1):a._e(),1==a.activeKey?e("div",{staticClass:"tab-pane",class:{"active show":1==a.activeKey},attrs:{id:"AuditLogReport"}},[e("AuditLogReport")],1):a._e(),2==a.activeKey?e("div",{staticClass:"tab-pane",class:{"active show":2==a.activeKey},attrs:{id:"ProductBarcodeReport"}},[e("ProductBarcodeReport")],1):a._e(),3==a.activeKey?e("div",{staticClass:"tab-pane",class:{"active show":3==a.activeKey},attrs:{id:"ItemLogHistoryReport"}},[e("ItemLogHistoryReport")],1):a._e(),4==a.activeKey?e("div",{staticClass:"tab-pane",class:{"active show":4==a.activeKey},attrs:{id:"ProductCountReport"}},[e("ProductCountReport")],1):a._e(),5==a.activeKey?e("div",{staticClass:"tab-pane",class:{"active show":5==a.activeKey},attrs:{id:"ProductReport"}},[e("ProductReport")],1):a._e()])])],1)])},r=[function(){var a=this,e=a._self._c;return e("div",{staticClass:"input-group-append"},[e("span",{staticClass:"input-group-text bg-transparent bg-white border-left-0"},[e("i",{staticClass:"fa fa-search"})])])},function(){var a=this,e=a._self._c;return e("div",{staticClass:"expand-list"},[e("a",{staticClass:"expand-list-btn justify-content-center align-items-center",attrs:{href:"javascript:;"}},[e("i",{staticClass:"icon-solid arrow-solid-left text-white",staticStyle:{"font-size":"9pt"}})])])}],i=function(){var a=this,e=a._self._c;return e("div",[e("loader",{attrs:{isVisible:a.isLoading}}),a.DataLoaded?e("dynamic-form",{attrs:{lang:"en",buttons:a.buttons,schema:a.FormSchema},on:{OnSubmit:a.onSubmit}}):a._e(),e("div",{staticClass:"row placeholder"},[e("div",{staticClass:"col-md-12 p-0"},[a.parameter.length>0?e("ReportViewer",{attrs:{parameter:a.parameter,reportPath:a.reportPath}}):a._e()],1)])],1)},n=[],l=(t("14d9"),t("1115")),s=function(){var a=this;a._self._c;return a._m(0)},c=[function(){var a=this,e=a._self._c;return e("div",{staticStyle:{height:"600px"}},[e("div",{staticStyle:{width:"100%","min-height":"650px","margin-bottom":"0%",height:"auto"},attrs:{id:"viewer"}})])}],u=(t("240d"),{props:{reportPath:null,parameter:null},data:function(){return{Token:null}},created:function(){this.Token=this.GetUserInfo.Token},mounted(){var a=this;setTimeout((function(){$("#viewer").boldReportViewer({reportServiceUrl:"https://apponeapi.talygen.com/api/ReportViewer",reportPath:a.reportPath,processingMode:"Remote",parameters:a.parameter,reportServerUrl:"http://172.22.23.106/ReportServer",ajaxBeforeLoad:a.setReportToken})}),2e3)},methods:{setReportToken:function(a){a.headers.push({Key:"content-type",Value:"application/json;charset=UTF-8"}),a.headers.push({Key:"Authorization",Value:"Bearer "+this.Token})}}}),d=u,m=(t("c904"),t("2877")),p=Object(m["a"])(d,s,c,!1,null,null,null),h=p.exports,v={components:{ReportViewer:h},data(){return{IsuuedArray:[],reportPath:null,parameter:[],FindalLocationArray:[],isLoading:!1,FormSchema:[{layoutType:"triple",Data:[{astype:"TreeSelectField",label:this.$t("Location"),name:"Location",value:null,placeholder:"Select Location",config:{options:[]},validationRules:{required:!0,max:250}},{astype:"MultiSelectField",label:this.$t("ProductType"),name:"ProductType",value:"",mode:"tag",placeholder:"",config:{options:[],onChange:this.onChangeDropdown,onRemove:this.removeRecord}},{astype:"MultiSelectField",label:this.$t("ProductName"),name:"Product Name",value:"",placeholder:"Product Name",mode:"tag",config:{options:[]}},{astype:"SelectField",label:this.$t("Status"),name:"Status",value:"",placeholder:"",config:{options:[{name:"Not Returned",value:"0"},{name:"Returned",value:"1"}],onChange:()=>{}}},{astype:"SelectField",label:this.$t("IssuedTo"),name:"IssuedTo",value:"",placeholder:"",config:{options:[]}},{astype:"TextField",label:this.$t("IssuedBy"),name:"IssuedBy",value:"",placeholder:"",config:{}},{astype:"DateField",label:this.$t("IssueDate"),name:"IssueDate",value:"",placeholder:"10/12/2022 12:AM",config:{format:"M/D/YYYY"}},{astype:"DateField",label:this.$t("IssueDateEnd"),name:"IssueDateEnd",value:"",placeholder:"10/12/2022 12:AM",config:{format:"M/D/YYYY"}},{astype:"DateField",label:this.$t("ReturnDate"),name:"ReturnDate",value:"",placeholder:"10/12/2022 12:AM",config:{format:"M/D/YYYY"}},{astype:"DateField",label:this.$t("ReturnDateEnd"),name:"ReturnDateEnd",value:"",placeholder:"10/12/2022 12:AM",config:{format:"M/D/YYYY"}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-search pr-2'></i>Search"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Clear all",onClick:this.ClearAll}],DataLoaded:0}},created:async function(){var a=this;await a.GetLocationByCompanyId(),await a.BindItemTypeByUserId(),await a.GetIssuedDetails(),a.DataLoaded=1},methods:{removeRecord(a,e,t){this.onChangeDropdown("Remove",t,a)},GetLocationByCompanyId:async function(){var a=this;a.isLoading=!0;var e="reqForm=";await l["a"].GetLocationByuserId(e).then(e=>{a.FindalLocationArray=[],e.data.data.forEach(t=>{var o=a.FindalLocationArray.filter((function(a){return a.COMPANY_LOCATION_ID==t.COMPANY_LOCATION_ID}));if(0==o.length&&null==t.PARENT_LOCATION_ID){let o=t.COMPANY_LOCATION_ID,r=a.getChildLocation(o,t,e.data.data);a.FindalLocationArray.push(r)}}),a.FormSchema[0].Data[0].config.options=a.FindalLocationArray,a.isLoading=!1})},getChildLocation:function(a,e,t){let o=this,r={};r={id:e.COMPANY_LOCATION_ID,label:e.LOCATION_NAME};let i=r;var n=t.filter((function(e){return e.PARENT_LOCATION_ID==a}));let l=[];return n.forEach(a=>{let e=a.COMPANY_LOCATION_ID;var i=l.filter((function(e){return e.COMPANY_LOCATION_ID==a.COMPANY_LOCATION_ID}));if(0==i.length){var n=t.filter((function(a){return a.PARENT_LOCATION_ID==e}));if(null!=n&&n.length>0){let r=o.getChildLocation(e,a,t);l.push(r)}else r={id:""+a.COMPANY_LOCATION_ID,label:""+a.LOCATION_NAME},l.push(r)}}),i.children=l,i},async BindItemTypeByUserId(){let a="type=&issueTo=&locationId=&requestType=ASSIGN&requestFrom=";var e=this;await l["a"].AssignGetAssetType(a).then(a=>{a.data.forEach((a,t)=>{e.FormSchema[0].Data[1].config.options.push({name:a.ASSETTYPE,value:a.ASSETID})})})},async onChangeDropdown(a,e,t){var o=this;o.isLoading=!0;var r="";if(Array.isArray(e.value)&&e.value.length>0){const a=e.value.map(a=>a.value).join(",");r+="assetTypeid="+a}if(null!==t.value&&""!==t.value&&"Remove"!==a&&(r+=`${r?",":""}${r.includes("assetTypeid")?"":"assetTypeid="}${t.value}`),"Remove"===a){const a=r.split("=")[1].split(","),e=a.filter(a=>a!==t.value.toString());r="assetTypeid="+e.join(",")}o.FormSchema[0].Data[2].config.options=[],await l["a"].GetAssetCatalogueType(r).then((function(a){a.data.forEach((a,e)=>{o.FormSchema[0].Data[2].config.options.push({name:a.NAME,value:a.ASSETID})}),o.isLoading=!1}))},async GetIssuedDetails(){var a=this;await l["a"].GetIssuedUser().then(e=>{a.IsuuedArray=e.data.result,a.IsuuedArray.forEach((e,t)=>{a.FormSchema[0].Data[4].config.options.push({name:e.text,value:e.value})})})},async onSubmit(a){var e=this;e.isLoading=!0,e.reportPath="",e.parameter=[];const t=e.FormSchema[0].Data[2].value.length>0?e.FormSchema[0].Data[2].value.map(a=>a.value):e.FormSchema[0].Data[2].value,o=t.length>1?t.join(","):t.length>0?t[0]:"";let r={reportName:"assetmanagementreport",Location:a.Location,AssetTypesIds:a.ProductType.length>0?a.ProductType.map(a=>a.value).join(","):"",CatalogueIds:o,StatusIds:a.Status,IssuedToUserIds:a.IssuedTo,IssuedByUserIds:a.IssuedBy,dateFrom:""===a.IssueDate?"":e.$options.filters.formatDateYear(a.IssueDate),dateto:""===a.IssueDateEnd?"":e.$options.filters.formatDateYear(a.IssueDateEnd),ReturnFromDate:""===a.ReturnDate?"":e.$options.filters.formatDateYear(a.ReturnDate),ReturnToDate:""===a.ReturnDateEnd?"":e.$options.filters.formatDateYear(a.ReturnDateEnd)};await l["a"].ReportMain(r).then((function(a){console.log(a),e.reportPath=a.data.reportpath,e.parameter=a.data.parameters})),e.isLoading=!1},ClearAll:function(){var a=this;a.FormSchema[0].Data[0].value=null,a.FormSchema[0].Data[1].value="",a.FormSchema[0].Data[2].value="",a.FormSchema[0].Data[3].value="",a.FormSchema[0].Data[4].value="",a.FormSchema[0].Data[5].value="",a.FormSchema[0].Data[6].value="",a.FormSchema[0].Data[7].value="",a.FormSchema[0].Data[8].value="",a.FormSchema[0].Data[9].value="",a.parameter=[]}}},f=v,g=(t("9bb0"),Object(m["a"])(f,i,n,!1,null,null,null)),D=g.exports,A=function(){var a=this,e=a._self._c;return e("div",[e("loader",{attrs:{isVisible:a.isLoading}}),a.DataLoaded?e("dynamic-form",{ref:"AuditLog",attrs:{lang:"en",buttons:a.buttons,schema:a.FormSchema},on:{OnSubmit:a.onSubmit}}):a._e(),e("div",{staticClass:"row placeholder"},[e("div",{staticClass:"col-md-12 p-0"},[a.parameter.length>0?e("ReportViewer",{attrs:{parameter:a.parameter,reportPath:a.reportPath}}):a._e()],1)])],1)},y=[],C={components:{ReportViewer:h},data(){return{reportPath:null,parameter:[],FindalLocationArray:[],isLoading:!1,FormSchema:[{layoutType:"triple",Data:[{astype:"TreeSelectField",label:this.$t("Location"),name:"Location",value:null,placeholder:"Select Location",validationRules:{required:!0,max:250},config:{options:[],onChange:()=>{}}},{astype:"MultiSelectField",label:this.$t("ProductName"),name:"Product Name",value:"",placeholder:"Product Name",mode:"tag",config:{options:[],onChange:this.onChangeDropdown,onRemove:this.removeRecord}},{astype:"SelectField",label:this.$t("UniqueName"),name:"Unique Name",value:"",placeholder:"",config:{options:[]}},{astype:"SelectField",label:this.$t("Type"),name:"Type ",value:"",placeholder:"",config:{options:[{name:"Calibration",value:"CALIBRATION"},{name:"Audit",value:"AUDIT"},{name:"Image Capturing",value:"IMAGEHISTORY"}]}},{astype:"DateField",label:this.$t("Date"),name:"Date",value:"",placeholder:"10/12/2022 12:AM",config:{format:"M/D/YYYY"}},{astype:"DateField",label:this.$t("DateEnd"),name:"Date End",value:"",placeholder:"10/12/2022 12:AM",config:{format:"M/D/YYYY"}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-search pr-2'></i>Search"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Clear all",onClick:this.ClearAll}],DataLoaded:0}},created:async function(){var a=this;await a.GetLocationByCompanyId(),await a.getProductName(),a.DataLoaded=1},methods:{removeRecord(a,e,t){this.onChangeDropdown("Remove",t,a)},GetLocationByCompanyId:async function(){var a=this;a.isLoading=!0;var e="reqForm=";await l["a"].GetLocationByuserId(e).then(e=>{a.FindalLocationArray=[],e.data.data.forEach(t=>{var o=a.FindalLocationArray.filter((function(a){return a.COMPANY_LOCATION_ID==t.COMPANY_LOCATION_ID}));if(0==o.length&&null==t.PARENT_LOCATION_ID){let o=t.COMPANY_LOCATION_ID,r=a.getChildLocation(o,t,e.data.data);a.FindalLocationArray.push(r)}}),a.FormSchema[0].Data[0].config.options=a.FindalLocationArray,a.isLoading=!1})},getChildLocation:function(a,e,t){let o=this,r={};r={id:e.COMPANY_LOCATION_ID,label:e.LOCATION_NAME};let i=r;var n=t.filter((function(e){return e.PARENT_LOCATION_ID==a}));let l=[];return n.forEach(a=>{let e=a.COMPANY_LOCATION_ID;var i=l.filter((function(e){return e.COMPANY_LOCATION_ID==a.COMPANY_LOCATION_ID}));if(0==i.length){var n=t.filter((function(a){return a.PARENT_LOCATION_ID==e}));if(null!=n&&n.length>0){let r=o.getChildLocation(e,a,t);l.push(r)}else r={id:""+a.COMPANY_LOCATION_ID,label:""+a.LOCATION_NAME},l.push(r)}}),i.children=l,i},async getProductName(){let a="type=&issueTo=&locationId=&requestType=ASSIGN&requestFrom=";var e=this;await l["a"].GetAssetCatalogueType(a).then(a=>{a.data.forEach((a,t)=>{e.FormSchema[0].Data[1].config.options.push({name:a.NAME,value:a.ASSETID})})})},onChangeDropdown(a,e,t){var o=this;o.isLoading=!0;var r="";if(Array.isArray(e.value)&&e.value.length>0){const a=e.value.map(a=>a.value).join(",");r+="catalogId="+a}if(null!==t.value&&""!==t.value&&"Remove"!==a&&(r+=`${r?",":""}${r.includes("catalogId")?"":"catalogId="}${t.value}`),"Remove"===a){const a=r.split("=")[1].split(","),e=a.filter(a=>a!==t.value.toString());r="catalogId="+e.join(",")}o.FormSchema[0].Data[2].config.options=[],l["a"].GetRelatedCatalogues(r).then((function(a){a.data.forEach(a=>{const e={name:a.text,value:a.value};o.FormSchema[0].Data[2].config.options.push(e)}),o.$refs.AuditLog.UpdateKeyValue(),o.isLoading=!1}))},async onSubmit(){var a=this;a.isLoading=!0,a.reportPath="",a.parameter=[];const e=a.FormSchema[0].Data[1].value.length>0?a.FormSchema[0].Data[1].value.map(a=>a.value):a.FormSchema[0].Data[1].value,t=e.length>1?e.join(","):e.length>0?e[0]:"";let o={reportName:"assetauditlogreport",Location:a.FormSchema[0].Data[0].value,CatalogueIds:t,UniqueNameAuditLog:a.FormSchema[0].Data[2].value,AssetCalibrationAuditImageCapture:a.FormSchema[0].Data[3].value,dateFrom:""===a.FormSchema[0].Data[4].value?"":a.$options.filters.formatDateYear(a.FormSchema[0].Data[4].value),dateTo:""===a.FormSchema[0].Data[5].value?"":a.$options.filters.formatDateYear(a.FormSchema[0].Data[5].value)};await l["a"].ReportMain(o).then((function(e){console.log(e),a.reportPath=e.data.reportpath,a.parameter=e.data.parameters})),a.isLoading=!1},ClearAll:function(){var a=this;a.FormSchema[0].Data[0].value=null,a.FormSchema[0].Data[1].value="",a.FormSchema[0].Data[2].value="",a.FormSchema[0].Data[3].value="",a.FormSchema[0].Data[4].value="",a.FormSchema[0].Data[5].value="",a.parameter=[]}}},I=C,L=Object(m["a"])(I,A,y,!1,null,null,null),S=L.exports,O=function(){var a=this,e=a._self._c;return e("div",[e("loader",{attrs:{isVisible:a.isLoading}}),a.DataLoaded?e("dynamic-form",{ref:"BarcodeReport",attrs:{lang:"en",buttons:a.buttons,schema:a.FormSchema},on:{OnSubmit:a.onSubmit}}):a._e(),e("div",{staticClass:"row placeholder"},[e("div",{staticClass:"col-md-12 p-0"},[a.parameter.length>0?e("ReportViewer",{attrs:{parameter:a.parameter,reportPath:a.reportPath}}):a._e()],1)])],1)},N=[],T={components:{ReportViewer:h},data(){return{reportPath:null,parameter:[],FindalLocationArray:[],isLoading:!1,FormSchema:[{layoutType:"triple",Data:[{astype:"TreeSelectField",label:this.$t("Location"),name:"Location",value:null,placeholder:"Select Location",validationRules:{required:!0,max:250},config:{options:[],onChange:()=>{}}},{astype:"MultiSelectField",label:this.$t("ProductName"),name:"Product Name",value:"",placeholder:"Product Name",mode:"tag",config:{options:[],onChange:this.onChangeDropdown,onRemove:this.removeRecord},validationRules:{required:!0}},{astype:"SelectField",label:this.$t("UniqueName"),name:"Unique Name",value:"",placeholder:"",config:{options:[]}},{astype:"SelectField",label:this.$t("Status"),name:"Status ",value:"",placeholder:"",config:{options:[{name:"Active",value:1001},{name:"In Stock",value:1002},{name:"In Use",value:1003},{name:"Inactive",value:1004},{name:"Retired",value:1005}]}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-search pr-2'></i>Search"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Clear all",onClick:this.ClearAll}],DataLoaded:0}},created:async function(){var a=this;await a.GetLocationByCompanyId(),await a.getProductName(),a.DataLoaded=1},methods:{removeRecord(a,e,t){this.onChangeDropdown("Remove",t,a)},GetLocationByCompanyId:async function(){var a=this;a.isLoading=!0;var e="reqForm=";await l["a"].GetLocationByuserId(e).then(e=>{a.FindalLocationArray=[],e.data.data.forEach(t=>{var o=a.FindalLocationArray.filter((function(a){return a.COMPANY_LOCATION_ID==t.COMPANY_LOCATION_ID}));if(0==o.length&&null==t.PARENT_LOCATION_ID){let o=t.COMPANY_LOCATION_ID,r=a.getChildLocation(o,t,e.data.data);a.FindalLocationArray.push(r)}}),a.FormSchema[0].Data[0].config.options=a.FindalLocationArray,a.isLoading=!1})},getChildLocation:function(a,e,t){let o=this,r={};r={id:e.COMPANY_LOCATION_ID,label:e.LOCATION_NAME};let i=r;var n=t.filter((function(e){return e.PARENT_LOCATION_ID==a}));let l=[];return n.forEach(a=>{let e=a.COMPANY_LOCATION_ID;var i=l.filter((function(e){return e.COMPANY_LOCATION_ID==a.COMPANY_LOCATION_ID}));if(0==i.length){var n=t.filter((function(a){return a.PARENT_LOCATION_ID==e}));if(null!=n&&n.length>0){let r=o.getChildLocation(e,a,t);l.push(r)}else r={id:""+a.COMPANY_LOCATION_ID,label:""+a.LOCATION_NAME},l.push(r)}}),i.children=l,i},async getProductName(){let a="type=&issueTo=&locationId=&requestType=ASSIGN&requestFrom=";var e=this;await l["a"].GetAssetCatalogueType(a).then(a=>{a.data.forEach((a,t)=>{e.FormSchema[0].Data[1].config.options.push({name:a.NAME,value:a.ASSETID})})})},onChangeDropdown(a,e,t){var o=this,r="";if(Array.isArray(e.value)&&e.value.length>0){const a=e.value.map(a=>a.value).join(",");r+="catalogId="+a}if(null!==t.value&&""!==t.value&&"Remove"!==a&&(r+=`${r?",":""}${r.includes("catalogId")?"":"catalogId="}${t.value}`),"Remove"===a){const a=r.split("=")[1].split(","),e=a.filter(a=>a!==t.value.toString());r="catalogId="+e.join(",")}o.FormSchema[0].Data[2].config.options=[],l["a"].GetRelatedCatalogues(r).then((function(a){a.data.forEach(a=>{const e={name:a.text,value:a.value};o.FormSchema[0].Data[2].config.options.push(e)}),o.$refs.BarcodeReport.UpdateKeyValue(),o.isLoading=!1}))},async onSubmit(a){var e=this;e.isLoading=!0,e.reportPath="",e.parameter=[];const t=e.FormSchema[0].Data[1].value.length>0?e.FormSchema[0].Data[1].value.map(a=>a.value):e.FormSchema[0].Data[1].value,o=t.length>1?t.join(","):t.length>0?t[0]:"";let r={reportName:"assetbarcodereport",Location:e.FormSchema[0].Data[0].value,AssetCatalogueAssetBarcodes:o,UniqueNameAssetBarcodes:e.FormSchema[0].Data[2].value,StatusAssetBarcodes:e.FormSchema[0].Data[3].value};await l["a"].ReportMain(r).then((function(a){e.reportPath=a.data.reportpath,e.parameter=a.data.parameters})),e.isLoading=!1},ClearAll:function(){var a=this;a.FormSchema[0].Data[0].value=null,a.FormSchema[0].Data[1].value="",a.FormSchema[0].Data[2].value="",a.FormSchema[0].Data[3].value="",a.parameter=[]}}},_=T,b=Object(m["a"])(_,O,N,!1,null,null,null),F=b.exports,P=function(){var a=this,e=a._self._c;return e("div",[e("loader",{attrs:{isVisible:a.isLoading}}),a.DataLoaded?e("dynamic-form",{ref:"LogHistory",attrs:{lang:"en",buttons:a.buttons,schema:a.FormSchema},on:{OnSubmit:a.onSubmit}}):a._e(),e("div",{staticClass:"row placeholder"},[e("div",{staticClass:"col-md-12 p-0"},[a.parameter.length>0?e("ReportViewer",{attrs:{parameter:a.parameter,reportPath:a.reportPath}}):a._e()],1)])],1)},R=[],M=t("0597"),Y={components:{ReportViewer:h},data(){return{reportPath:null,parameter:[],ItemLogStatusData:[],FindalLocationArray:[],isLoading:!1,FormSchema:[{layoutType:"triple",Data:[{astype:"TreeSelectField",label:this.$t("Location"),name:"Location",value:null,placeholder:"Select Location",validationRules:{required:!0,max:250},config:{options:[],onChange:()=>{}}},{astype:"MultiSelectField",label:this.$t("ProductName"),name:"Product Name",value:"",mode:"tag",placeholder:"Product Name",config:{options:[],onChange:this.onChangeDropdown,onRemove:this.removeRecord}},{astype:"SelectField",label:this.$t("UniqueName"),name:"Unique Name",value:"",placeholder:"",config:{options:[],onChange:()=>{}}},{astype:"SelectField",label:this.$t("Status"),name:"Status",value:"",placeholder:"",config:{options:[]}},{astype:"DateField",label:this.$t("ReportStartDate"),name:"Date Start",value:"",placeholder:"10/12/2022 12:AM",config:{format:"M/D/YYYY"}},{astype:"DateField",label:this.$t("ReportEndDate"),name:"Date End",value:"",placeholder:"10/12/2022 12:AM",config:{format:"M/D/YYYY"}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-search pr-2'></i>Search"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Clear all",onClick:this.ClearAll}],DataLoaded:0}},created:async function(){var a=this;await a.GetLocationByCompanyId(),await a.getProductName(),await a.GetItemLogStatus(),a.DataLoaded=1},methods:{removeRecord(a,e,t){this.onChangeDropdown("Remove",t,a)},GetLocationByCompanyId:async function(){var a=this;a.isLoading=!0;var e="reqForm=";await l["a"].GetLocationByuserId(e).then(e=>{a.FindalLocationArray=[],e.data.data.forEach(t=>{var o=a.FindalLocationArray.filter((function(a){return a.COMPANY_LOCATION_ID==t.COMPANY_LOCATION_ID}));if(0==o.length&&null==t.PARENT_LOCATION_ID){let o=t.COMPANY_LOCATION_ID,r=a.getChildLocation(o,t,e.data.data);a.FindalLocationArray.push(r)}}),a.FormSchema[0].Data[0].config.options=a.FindalLocationArray,a.isLoading=!1})},getChildLocation:function(a,e,t){let o=this,r={};r={id:e.COMPANY_LOCATION_ID,label:e.LOCATION_NAME};let i=r;var n=t.filter((function(e){return e.PARENT_LOCATION_ID==a}));let l=[];return n.forEach(a=>{let e=a.COMPANY_LOCATION_ID;var i=l.filter((function(e){return e.COMPANY_LOCATION_ID==a.COMPANY_LOCATION_ID}));if(0==i.length){var n=t.filter((function(a){return a.PARENT_LOCATION_ID==e}));if(null!=n&&n.length>0){let r=o.getChildLocation(e,a,t);l.push(r)}else r={id:""+a.COMPANY_LOCATION_ID,label:""+a.LOCATION_NAME},l.push(r)}}),i.children=l,i},async getProductName(){let a="type=&issueTo=&locationId=&requestType=ASSIGN&requestFrom=";var e=this;await l["a"].GetAssetCatalogueType(a).then(a=>{a.data.forEach((a,t)=>{e.FormSchema[0].Data[1].config.options.push({name:a.NAME,value:a.ASSETID})})})},onChangeDropdown(a,e,t){var o=this,r="";if(Array.isArray(e.value)&&e.value.length>0){const a=e.value.map(a=>a.value).join(",");r+="catalogId="+a}if(null!==t.value&&""!==t.value&&"Remove"!==a&&(r+=`${r?",":""}${r.includes("catalogId")?"":"catalogId="}${t.value}`),"Remove"===a){const a=r.split("=")[1].split(","),e=a.filter(a=>a!==t.value.toString());r="catalogId="+e.join(",")}o.FormSchema[0].Data[2].config.options=[],l["a"].GetRelatedCatalogues(r).then((function(a){a.data.forEach(a=>{const e={name:a.text,value:a.value};o.FormSchema[0].Data[2].config.options.push(e)}),o.$refs.LogHistory.UpdateKeyValue(),o.isLoading=!1}))},async GetItemLogStatus(){var a=this;await l["a"].GetUserStatusitemlog().then(e=>{a.ItemLogStatusData=e.data,a.ItemLogStatusData.forEach(e=>{const t={value:e.value,name:""};if(e.value&&""!==e.value)for(const[a,o]of Object.entries(M["a"]))if(a==e.value){t.name=o;break}a.FormSchema[0].Data[3].config.options.push(t)})})},async onSubmit(){var a=this;a.isLoading=!0,a.reportPath="",a.parameter=[];const e=a.FormSchema[0].Data[1].value.length>0?a.FormSchema[0].Data[1].value.map(a=>a.value):a.FormSchema[0].Data[1].value,t=e.length>1?e.join(","):e.length>0?e[0]:"";let o={reportName:"itemloghistoryreport",Location:a.FormSchema[0].Data[0].value,AssetCatalogueLogHistory:t,UniqueNameLogHistory:a.FormSchema[0].Data[2].value,AssetOperationCode:a.FormSchema[0].Data[3].value,dateFrom:""===a.FormSchema[0].Data[4].value?"":a.$options.filters.formatDateYear(a.FormSchema[0].Data[4].value),dateTo:""===a.FormSchema[0].Data[5].value?"":a.$options.filters.formatDateYear(a.FormSchema[0].Data[5].value)};JSON.stringify(o);await l["a"].ReportMain(o).then((function(e){console.log(e),a.reportPath=e.data.reportpath,a.parameter=e.data.parameters})),a.isLoading=!1},ClearAll:function(){var a=this;a.FormSchema[0].Data[0].value=null,a.FormSchema[0].Data[1].value="",a.FormSchema[0].Data[2].value="",a.FormSchema[0].Data[3].value="",a.FormSchema[0].Data[4].value="",a.FormSchema[0].Data[5].value="",a.parameter=[]}}},w=Y,E=Object(m["a"])(w,P,R,!1,null,null,null),x=E.exports,B=function(){var a=this,e=a._self._c;return e("div",[e("loader",{attrs:{isVisible:a.isLoading}}),a.DataLoaded?e("dynamic-form",{attrs:{lang:"en",buttons:a.buttons,schema:a.FormSchema},on:{OnSubmit:a.onSubmit}}):a._e(),e("div",{staticClass:"row placeholder"},[e("div",{staticClass:"col-md-12 p-0"},[a.parameter.length>0?e("ReportViewer",{attrs:{parameter:a.parameter,reportPath:a.reportPath}}):a._e()],1)])],1)},G=[],q={components:{ReportViewer:h},data(){return{reportPath:null,parameter:[],FindalLocationArray:[],isLoading:!1,FormSchema:[{layoutType:"triple",Data:[{astype:"TreeSelectField",label:this.$t("Location"),name:"Location",value:null,placeholder:"Select Location",validationRules:{required:!0,max:250},config:{options:[],onChange:()=>{}}},{astype:"SelectField",label:this.$t("ProductType"),name:"Product Type",value:"",placeholder:"",config:{options:[]}},{astype:"SelectField",label:this.$t("Status"),name:"Status",value:"",placeholder:"",config:{options:[{name:"Active",value:1001},{name:"InActive",value:1002},{name:"On Hold  ",value:1003},{name:"Reserved",value:1004},{name:"Retired",value:1005},{name:"Sold",value:1006}],onChange:()=>{}}},{astype:"DateField",label:this.$t("DeployDate"),name:"Deploy Date",value:"",placeholder:"10/12/2022 12:AM",config:{format:"M/D/YYYY"}},{astype:"DateField",label:this.$t("DeployDateEnd"),name:"Date Date End",value:"",placeholder:"10/12/2022 12:AM",config:{format:"M/D/YYYY"}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-search pr-2'></i>Search"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Clear all",onClick:this.ClearAll}],DataLoaded:0}},created:async function(){var a=this;await a.GetLocationByCompanyId(),await a.BindItemTypeByUserId(),a.DataLoaded=1},methods:{GetLocationByCompanyId:async function(){var a=this;a.isLoading=!0;var e="reqForm=";await l["a"].GetLocationByuserId(e).then(e=>{a.FindalLocationArray=[],e.data.data.forEach(t=>{var o=a.FindalLocationArray.filter((function(a){return a.COMPANY_LOCATION_ID==t.COMPANY_LOCATION_ID}));if(0==o.length&&null==t.PARENT_LOCATION_ID){let o=t.COMPANY_LOCATION_ID,r=a.getChildLocation(o,t,e.data.data);a.FindalLocationArray.push(r)}}),a.FormSchema[0].Data[0].config.options=a.FindalLocationArray,a.isLoading=!1})},getChildLocation:function(a,e,t){let o=this,r={};r={id:e.COMPANY_LOCATION_ID,label:e.LOCATION_NAME};let i=r;var n=t.filter((function(e){return e.PARENT_LOCATION_ID==a}));let l=[];return n.forEach(a=>{let e=a.COMPANY_LOCATION_ID;var i=l.filter((function(e){return e.COMPANY_LOCATION_ID==a.COMPANY_LOCATION_ID}));if(0==i.length){var n=t.filter((function(a){return a.PARENT_LOCATION_ID==e}));if(null!=n&&n.length>0){let r=o.getChildLocation(e,a,t);l.push(r)}else r={id:""+a.COMPANY_LOCATION_ID,label:""+a.LOCATION_NAME},l.push(r)}}),i.children=l,i},async BindItemTypeByUserId(){let a="type=&issueTo=&locationId=&requestType=ASSIGN&requestFrom=";var e=this;await l["a"].AssignGetAssetType(a).then(a=>{a.data.forEach((a,t)=>{e.FormSchema[0].Data[1].config.options.push({name:a.ASSETTYPE,value:a.ASSETID})})})},async onSubmit(){var a=this;a.isLoading=!0,a.reportPath="",a.parameter=[];let e={reportName:"assetcountreport",Location:a.FormSchema[0].Data[0].value,AssetTypesIds:a.FormSchema[0].Data[1].value,AssetStatus:a.FormSchema[0].Data[2].value,dateFrom:""===a.FormSchema[0].Data[3].value?"":a.$options.filters.formatDateYear(a.FormSchema[0].Data[3].value),dateTo:""===a.FormSchema[0].Data[4].value?"":a.$options.filters.formatDateYear(a.FormSchema[0].Data[4].value)};await l["a"].ReportMain(e).then((function(e){console.log(e),a.reportPath=e.data.reportpath,a.parameter=e.data.parameters})),a.isLoading=!1},ClearAll:function(){var a=this;a.FormSchema[0].Data[0].value=null,a.FormSchema[0].Data[1].value="",a.FormSchema[0].Data[2].value="",a.FormSchema[0].Data[3].value="",a.FormSchema[0].Data[4].value="",a.parameter=[]}}},U=q,j=Object(m["a"])(U,B,G,!1,null,null,null),V=j.exports,k=function(){var a=this,e=a._self._c;return e("div",[e("loader",{attrs:{isVisible:a.isLoading}}),a.DataLoaded?e("dynamic-form",{attrs:{lang:"en",buttons:a.buttons,schema:a.FormSchema},on:{OnSubmit:a.onSubmit}}):a._e(),e("div",{staticClass:"row placeholder"},[e("div",{staticClass:"col-md-12 p-0"},[a.parameter.length>0?e("ReportViewer",{attrs:{parameter:a.parameter,reportPath:a.reportPath}}):a._e()],1)])],1)},K=[],H={components:{ReportViewer:h},data(){return{reportPath:null,parameter:[],FindalLocationArray:[],isLoading:!1,FormSchema:[{layoutType:"triple",Data:[{astype:"MultiSelectField",label:this.$t("TagType"),name:"Tag Type",value:"",mode:"tag",placeholder:"",validationRules:{required:!0},config:{options:[],onChange:()=>{}}},{astype:"SelectField",label:this.$t("ProductType"),name:"Product Type",value:"",placeholder:"",config:{options:[]}},{astype:"TreeSelectField",label:this.$t("Location"),name:"Location",value:null,placeholder:"Select Location",config:{options:[]}},{astype:"SelectField",label:this.$t("Status"),name:"Status ",value:"",placeholder:"",config:{options:[{name:"Active",value:1001},{name:"InActive",value:1002},{name:"On Hold  ",value:1003},{name:"Reserved",value:1004},{name:"Retired",value:1005},{name:"Sold",value:1006}],onChange:()=>{}}},{astype:"DateField",label:this.$t("DeployDate"),name:"Deploy Date",value:"",placeholder:"10/12/2022 12:AM",config:{format:"M/D/YYYY"}},{astype:"DateField",label:this.$t("DeployDateEnd"),name:"Date Date End",value:"",placeholder:"10/12/2022 12:AM",config:{format:"M/D/YYYY"}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-search pr-2'></i>Search"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Clear all",onClick:this.ClearAll}],DataLoaded:0}},created:async function(){var a=this;await a.GetLocationByCompanyId(),await a.BindItemTypeByUserId(),await a.GetTagsByModuleId(),a.DataLoaded=1},methods:{GetLocationByCompanyId:async function(){var a=this;a.isLoading=!0;var e="reqForm=";await l["a"].GetLocationByuserId(e).then(e=>{a.FindalLocationArray=[],e.data.data.forEach(t=>{var o=a.FindalLocationArray.filter((function(a){return a.COMPANY_LOCATION_ID==t.COMPANY_LOCATION_ID}));if(0==o.length&&null==t.PARENT_LOCATION_ID){let o=t.COMPANY_LOCATION_ID,r=a.getChildLocation(o,t,e.data.data);a.FindalLocationArray.push(r)}}),a.FormSchema[0].Data[2].config.options=a.FindalLocationArray,a.isLoading=!1})},getChildLocation:function(a,e,t){let o=this,r={};r={id:e.COMPANY_LOCATION_ID,label:e.LOCATION_NAME};let i=r;var n=t.filter((function(e){return e.PARENT_LOCATION_ID==a}));let l=[];return n.forEach(a=>{let e=a.COMPANY_LOCATION_ID;var i=l.filter((function(e){return e.COMPANY_LOCATION_ID==a.COMPANY_LOCATION_ID}));if(0==i.length){var n=t.filter((function(a){return a.PARENT_LOCATION_ID==e}));if(null!=n&&n.length>0){let r=o.getChildLocation(e,a,t);l.push(r)}else r={id:""+a.COMPANY_LOCATION_ID,label:""+a.LOCATION_NAME},l.push(r)}}),i.children=l,i},async BindItemTypeByUserId(){let a="type=&issueTo=&locationId=&requestType=ASSIGN&requestFrom=";var e=this;await l["a"].AssignGetAssetType(a).then(a=>{a.data.forEach((a,t)=>{e.FormSchema[0].Data[1].config.options.push({name:a.ASSETTYPE,value:a.ASSETID})})})},async GetTagsByModuleId(){var a=this,e="modulename=Asset";await l["a"].GetTagsByModuleId(e).then((function(e){a.TagData=JSON.parse(e.data),a.TagData.data.forEach((e,t)=>{a.FormSchema[0].Data[0].config.options.push({name:e.TAG_NAME,value:""+e.TAG_ID})})}))},async onSubmit(){var a=this;a.isLoading=!0,a.reportPath="",a.parameter=[];let e={reportName:"productreport",TagTypes:a.FormSchema[0].Data[0].value.length>0?a.FormSchema[0].Data[0].value.map(a=>a.value).join(","):"",AssetTypesIds:a.FormSchema[0].Data[1].value,Location:a.FormSchema[0].Data[2].value,StatusIds:a.FormSchema[0].Data[3].value,dateFrom:""===a.FormSchema[0].Data[4].value?"":a.$options.filters.formatDateYear(a.FormSchema[0].Data[4].value),dateTo:""===a.FormSchema[0].Data[5].value?"":a.$options.filters.formatDateYear(a.FormSchema[0].Data[5].value)};await l["a"].ReportMain(e).then((function(e){a.reportPath=e.data.reportpath,a.parameter=e.data.parameters})),a.isLoading=!1},ClearAll:function(){var a=this;a.FormSchema[0].Data[0].value="",a.FormSchema[0].Data[1].value="",a.FormSchema[0].Data[2].value=null,a.FormSchema[0].Data[3].value="",a.FormSchema[0].Data[4].value="",a.FormSchema[0].Data[5].value="",a.parameter=[]}}},Q=H,J=Object(m["a"])(Q,k,K,!1,null,null,null),z=J.exports,W={components:{ProductAssignmentReports:D,AuditLogReport:S,ProductBarcodeReport:F,ItemLogHistoryReport:x,ProductCountReport:V,ProductReport:z},data(){return{activeKey:0,tabNames:["ProductAssignmentReport","AuditLogReport","ProductBarcodeReport","ItemLogHistoryReport","ProductCountReport","ProductReport"],searchQuery:""}},mounted(){this.activateTab(0)},computed:{filteredTabs(){if(!this.searchQuery)return this.tabNames.map((a,e)=>({name:a,index:e,icon:this.getTabIcon(a)}));const a=this.searchQuery.toLowerCase(),e=this.tabNames.map((a,e)=>({name:a,index:e,icon:this.getTabIcon(a)})).filter(e=>this.$t(e.name).toLowerCase().includes(a));return""!==a.trim()&&0===e.length?[{name:'No tabs found for "'+this.searchQuery+'"',index:-1,icon:"no-icon"}]:e},activeTabName(){return this.tabNames[this.activeKey]}},methods:{getTabIcon(a){switch(a){case"ProductAssignmentReport":return"fa fa-list";case"AuditLogReport":return"fa fa-list-alt";case"ProductBarcodeReport":return"fa fa-money";case"ItemLogHistoryReport":return"fa fa-file-text";case"ProductCountReport":return"fa fa-file-text";case"ProductReport":return"fa fa-file-text";default:return""}},activateTab(a){this.activeKey=a}}},X=W,Z=Object(m["a"])(X,o,r,!1,null,null,null);e["default"]=Z.exports}}]);
//# sourceMappingURL=chunk-0ed426ea.js.map