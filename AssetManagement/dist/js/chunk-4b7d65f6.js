(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b7d65f6"],{1329:function(t,e,s){"use strict";s("225a")},"16e7":function(t,e,s){var a=s("24fb");e=a(!1),e.push([t.i,"tr.high-profile-bar td:first-child:after{background:#de0303}",""]),t.exports=e},"225a":function(t,e,s){var a=s("16e7");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=s("499e").default;i("a10b1acc",a,!0,{sourceMap:!1,shadowMode:!1})},"2d4e":function(t,e,s){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-popups"},[e("loader",{attrs:{"is-visible":t.isLoading}}),e("div",{staticClass:"modal d-block"},[e("div",{staticClass:"modal-dialog modal-dialog-centered"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[t._v(" "+t._s(t.$t("Reject"))+" ")]),e("button",{staticClass:"close",attrs:{type:"button","data-original-title":"Close"},on:{click:function(e){return t.ClosePOPuP(e)}}},[e("em",{staticClass:"fa fa-times"})])]),e("div",{staticClass:"border p-3"},[e("dynamic-form",{attrs:{lang:"en",buttons:t.buttons,schema:t.FormSchema},on:{OnSubmit:t.onSubmit}})],1)])])])],1)},i=[],o=s("1115"),n={props:{RejectData:{type:Array,required:!0}},data(){return{FormSchema:[{layoutType:"single",Data:[{astype:"TextAreaField",label:this.$t("Reason"),name:"Reason",value:"",validationRules:{required:!0,max:1e3},placeholder:"",config:{rows:0}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Cancel",onClick:this.onCancel}],assignmentId:"",CancelledBy:"ASSIGNER",RejectsData:[],isLoading:!1}},created:function(){},methods:{onSubmit:function(t){var e=this;e.isLoading=!0;const s={batchId:e.RejectData.REQUISITION_BATCH_ID,assignmentId:e.assignmentId,requisitionCancelledFrom:e.CancelledBy,comment:t.Reason};o["a"].UpdateRequisitionStatus(s).then(t=>{null!=t.data&&(t.data.length>0&&1==t.data?(e.ShowAlert(e.$t("Record Reject Successfully"),"success",e.$t("Alert")),e.isLoading=!1,e.$parent.FetchData(),e.$parent.ClosePOPuP()):(e.ShowAlert(e.$t("Unknown Error Occur"),"failure",!0,e.$t("Alert")),e.isLoading=!1,e.$parent.ClosePOPuP())),setTimeout((function(){e.CheckBoxBootstrap()}),100)})},ClosePOPuP:function(t){this.$emit("ClosePOPuP",t)},onCancel:function(){var t=this;t.FormSchema[0].Data[0].value="",t.ClosePOPuP()}}},r=n,l=s("2877"),c=Object(l["a"])(r,a,i,!1,null,null,null);e["a"]=c.exports},feec:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("section",{staticClass:"main-content",attrs:{id:"tabs"}},[e("loader",{attrs:{"is-visible":t.isLoading}}),e("div",{staticClass:"padding-t_10",attrs:{id:"reportstabsdata"}},[e("div",{staticClass:"left-menu-tab"},[e("div",{staticClass:"col-md-12 p-0"},[e("div",{staticClass:"theme-primary partition"},[e("span",{staticClass:"p-name text-white"},[t._v(t._s(t.Headerstext))])])]),e("ul",{staticClass:"nav nav-pills flex-column left-tab mt-2 responivecustomtab nav-tabs",staticStyle:{cursor:"pointer"}},t._l(t.tabs,(function(s){return e("li",{key:s.id,class:{"nav-item":!0,active:t.activeTab===s.id},on:{click:function(e){t.activeTab=s.id,t.changeTab(s.id)}}},[e("span",{staticClass:"nav-link left-menu",class:{active:t.activeTab===s.id}},[1===s.id?e("i",{staticClass:"fa fa-envelope"}):t._e(),2===s.id?e("i",{staticClass:"fa fa-calendar"}):t._e(),3===s.id?e("i",{staticClass:"fa fa-circle-o-notch"}):t._e(),t._v(" "+t._s(s.title)+" ")])])})),0)]),e("div",{staticClass:"right-content"},[e("div",{staticClass:"theme-primary partition p-actions-expand",attrs:{id:"ReturnRequestHeading"}},[e("span",{staticClass:"p-name text-white"},[t._v(t._s(t.navheading))])]),t._l(t.tabs,(function(s){return e("div",{directives:[{name:"show",rawName:"v-show",value:t.activeTab===s.id,expression:"activeTab === tab.id"}],key:s.id,staticClass:"col-md-12 p-0"},[e("div",{staticClass:"col-lg-12 border float-left py-3"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12 col-md-12 col-lg-6 col-xl-6 float-left ml-4"},[e("div",{staticClass:"row mt-0"},[e("div",{staticClass:"col-7 float-left pr-1 pl-0"},[e("div",{staticClass:"form-group"},[e("Field",{staticClass:"w-100",attrs:{rules:{required:!1},name:"Reader"},scopedSlots:t._u([{key:"default",fn:function({errors:s}){return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.barcodeNumber,expression:"barcodeNumber"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Barcode",autocomplete:"off",name:"search"},domProps:{value:t.barcodeNumber},on:{input:function(e){e.target.composing||(t.barcodeNumber=e.target.value)}}})]}}],null,!0)})],1)]),e("div",{staticClass:"col-5 float-left pl-0"},[e("div",{staticClass:"background-0 text-left form-check-inline"},[e("em",{staticClass:"btn btn-success mr-1 px-4 hlsearch mr-2",attrs:{id:"Go",title:"Search",href:"javascript:;"},on:{click:function(e){return t.Search()}}},[e("i",{staticClass:"fa fa-search pr-2"})]),e("em",{staticClass:"btn btn-danger clearsearchtext px-4",attrs:{title:"clear",href:"javascript:;"},on:{click:function(e){return t.Clear()}}},[e("i",{staticClass:"fa fa-refresh pr-2"})])])])])])]),1!=s.id?e("div",{staticClass:"col-12 mb-2 px-0 ml-2"},[t._m(0,!0)]):t._e()]),e("div",{staticClass:"tab-content mb-2"},[t._m(1,!0),e("div",[1==s.id?e("div",{staticClass:"listing"},[0==t.noRecord?e("div",{staticClass:"table-responsive"},[e("div",{staticClass:"p-2 border-bottom"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"row mx-0"},[e("div",{staticClass:"col-lg-4"},[e("b",{staticClass:"font-weight-medium"},[t._v(t._s(t.$t("ItemName"))+":")])]),e("div",{staticClass:"col-lg-8"},[t._v(t._s(t.ProductInformation.catalogName))])])]),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"row mx-0"},[e("div",{staticClass:"col-lg-4"},[e("b",{staticClass:"font-weight-medium"},[t._v(t._s(t.$t("UniqueName"))+":")])]),e("div",{staticClass:"col-lg-8"},[t._v(t._s(t.ProductInformation.uniqueName))])])])])]),e("div",{staticClass:"p-2 border-bottom"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"row mx-0"},[e("div",{staticClass:"col-lg-4"},[e("b",{staticClass:"font-weight-medium"},[t._v(t._s(t.$t("SerialNumber"))+":")])]),e("div",{staticClass:"col-lg-8"},[t._v(t._s(t.ProductInformation.serialNumber))])])]),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"row mx-0"},[e("div",{staticClass:"col-lg-4"},[e("b",{staticClass:"font-weight-medium"},[t._v(t._s(t.$t("Brand"))+":")])]),e("div",{staticClass:"col-lg-8"},[t._v(t._s(t.ProductInformation.brand))])])])])]),e("div",{staticClass:"p-2 border-bottom"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"row mx-0"},[e("div",{staticClass:"col-lg-4"},[e("b",{staticClass:"font-weight-medium"},[t._v(t._s(t.$t("ModelName"))+":")])]),e("div",{staticClass:"col-lg-8"},[t._v(t._s(t.ProductInformation.modelName))])])]),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"row mx-0"},[e("div",{staticClass:"col-lg-4"},[e("b",{staticClass:"font-weight-medium"},[t._v(t._s(t.$t("ModelNumber"))+":")])]),e("div",{staticClass:"col-lg-8"},[t._v(t._s(t.ProductInformation.modelNumber))])])])])]),e("div",{staticClass:"p-2 border-bottom"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"row mx-0"},[e("div",{staticClass:"col-lg-4"},[e("b",{staticClass:"font-weight-medium"},[t._v(t._s(t.$t("Cost"))+":")])]),null==t.ProductInformation.cost?e("div",{staticClass:"col-lg-8"},[t._v("0.00 ")]):e("div",{staticClass:"col-lg-8"},[t._v(t._s(t.ProductInformation.cost))])])]),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"row mx-0"},[e("div",{staticClass:"col-lg-4"},[e("b",{staticClass:"font-weight-medium"},[t._v(t._s(t.$t("WarrantyDuration"))+":")])]),e("div",{staticClass:"col-lg-8"},[t._v(t._s(t.ProductInformation.warrantyDuration))])])])])]),e("div",{staticClass:"p-2 border-bottom"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"row mx-0"},[e("div",{staticClass:"col-lg-4"},[e("b",{staticClass:"font-weight-medium"},[t._v(t._s(t.$t("WarrantyExpirationDate"))+":")])]),e("div",{staticClass:"col-lg-8"},[t._v(t._s(t.ProductInformation.warrantyExpirationDate)+" ")])])])])])]):e("div",{staticClass:"table-responsive"},[e("p",{staticClass:"text-center text-danger p-2 m-0"},[t._v(t._s(t.$t("NoRecordfound")))])])]):t._e(),2==s.id?e("div",{staticClass:"listing mt-2"},[e("tg-list",{attrs:{showCheckBox:!1,IsShowAction:!1,listType:["List"],ModuleName:"Asset",SubModuleCode:"Asset",IdentityColumn:"ASSET_CATALOGUE_ID",PageSize:t.pageSize,HeaderText:"Asset Management",widgets:t.widgets,ListData:t.PendingRequestData,HeaderData:t.Header,callbackfunction:t.RequsitionPending,LegendArray:t.LegendArray,SearchFields:t.leftSearchFields,SortExp:t.SortExp,SortBy:t.SortBy,NorecordfoundText:t.$t("NorecordfoundText"),TotalRecords:t.TotalRecord,RenderRowActionMethod:t.renderActions,ListDataCallBackFunction:t.RequsitionPending},on:{PagerButtonClick:t.pagerMethod,HeaderButtonClick:t.commonHeaderButtonClick,SortdataButtonClick:t.sortdata},scopedSlots:t._u([{key:"slotdata",fn:function({data:s}){return["FROM_TIME"==s.column.COLUMN_NAME?[e("span",{staticClass:"text-dark center-icon",attrs:{title:s.column.COLUMN_NAME}},[t._v(" "+t._s(t.$options.filters.formatDateTime(s.row.FROM_TIME))+" ")])]:t._e(),"TO_TIME"==s.column.COLUMN_NAME?[e("span",{staticClass:"text-dark center-icon",attrs:{title:s.column.COLUMN_NAME}},[t._v(" "+t._s(t.$options.filters.formatDateTime(s.row.TO_TIME))+" ")])]:t._e(),"CREATED_AT"==s.column.COLUMN_NAME?[e("span",{staticClass:"text-dark center-icon",attrs:{title:s.column.COLUMN_NAME}},[t._v(" "+t._s(t.$options.filters.formatDateTime(s.row.CREATED_AT))+" ")])]:t._e(),"IS_ASSIGNED"==s.column.COLUMN_NAME?[e("span",{staticClass:"text-dark center-icon",attrs:{title:s.column.COLUMN_NAME}},[e("em",{staticClass:"fa fa-reply fa-lg action-icon text-success",on:{click:function(e){return t.IsAssigned(s.row)}}})])]:t._e(),"Reject"==s.column.COLUMN_NAME?[e("span",{staticClass:"text-dark center-icon",attrs:{title:s.column.COLUMN_NAME}},[e("em",{staticClass:"fa fa-times-circle fa-lg action-icon text-danger",on:{click:function(e){return t.RequsitionReject(s.row)}}})])]:t._e()]}}],null,!0)})],1):t._e(),3==s.id?e("div",{staticClass:"listing mb-3"},[e("tg-list",{ref:"tgList",refInFor:!0,attrs:{IsShowAction:!0,showCheckBox:!1,listType:["List"],ModuleName:"Asset",PageSize:t.PageSize,SubModuleCode:"PRODUCT_ASSIGNMENT",ViewList:t.ViewList,IdentityColumn:"assignment_detail_id",HeaderText:"Product Assignment",ListData:t.AssetAssignmentData,IsFilterApplied:!!t.searchCondition,IsSearchFieldsOnTop:!1,HeaderData:t.Headers,widgets:t.widgets,callbackfunction:t.FetchData,TotalRecords:t.TotalRecords,SearchFields:t.leftSearchFields,NorecordfoundText:t.$t("NoRecordfound"),RenderRowActionMethod:t.renderActions,ListDataCallBackFunction:t.FetchData,LegendArray:t.LegendArray,SortExp:t.SortExp,SortBy:t.SortBy},on:{ApplyView:t.OnApplyView,LeftsearchButtonClick:t.leftCommonSearch,PagerButtonClick:t.pagerMethod,HeaderButtonClick:t.commonHeaderButtonClick,ActionButtonClick:t.actionButtonClick,SortdataButtonClick:t.sortdata,RefreshManageView:t.FetchData},scopedSlots:t._u([{key:"slotdata",fn:function({data:s}){return["unique_name"==s.column.COLUMN_NAME?[0==s.row.create_unique_name_list?e("span",{staticClass:"text-dark",attrs:{title:""}}):e("span",{staticClass:"text-dark",attrs:{title:s.row.unique_name}},[t._v(" "+t._s(s.row.unique_name)+" ")])]:t._e(),"number_of_items_assigned"==s.column.COLUMN_NAME?[0==s.row.create_unique_name_list?e("span",{staticClass:"text-dark"},[e("i",{staticClass:"fa fa-list-ul",attrs:{"aria-hidden":"true"}}),s.row.is_return?e("span",{staticClass:"noti-circle noti-blue"},[t._v(t._s(s.row.return_request_qty))]):e("span",{staticClass:"noti-circle noti-blue"},[t._v(t._s(s.row.number_of_items_assigned))])]):e("span",{staticClass:"text-dark"},[e("i",{staticClass:"fa fa-list-ul",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"noti-circle noti-blue"},[t._v(" "+t._s(s.row.number_of_items_assigned)+" ")])])]:t._e(),"assigned_from"==s.column.COLUMN_NAME?[e("span",{staticClass:"text-dark",attrs:{title:t.$options.filters.formatDateTime(s.row.assigned_from)}},[t._v(" "+t._s(t.$options.filters.formatDateTime(s.row.assigned_from))+" ")])]:t._e(),"assigned_till"==s.column.COLUMN_NAME?[e("span",{staticClass:"text-dark",attrs:{title:t.$options.filters.formatDateTime(s.row.assigned_till)}},[t._v(" "+t._s(t.$options.filters.formatDateTime(s.row.assigned_till))+" ")])]:t._e(),"return_date"==s.column.COLUMN_NAME?[e("span",{staticClass:"text-dark",attrs:{title:t.$options.filters.formatDateTime(s.row.return_date)}},[t._v(" "+t._s(t.$options.filters.formatDateTime(s.row.return_date))+" ")])]:t._e()]}}],null,!0)})],1):t._e()])]),e("div")])}))],2),e("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 text-right px-0 float-left"},[t.activeTab>1?e("em",{staticClass:"btn btn-success text-white mr-2",attrs:{value:"Previous",title:"Previous",name:"Previous"},on:{click:t.previousTab}},[e("i",{staticClass:"fa fa-angle-double-left pr-2"}),e("span",[t._v("Previous")])]):t._e(),t.activeTab<3?e("em",{staticClass:"btn btn-primary text-white",attrs:{value:"Next",title:"Next",name:"btnNext"},on:{click:t.nextTab}},[e("span",[t._v("Next")]),e("i",{staticClass:"fa fa-angle-double-right pl-2"})]):t._e(),e("input",{attrs:{type:"hidden",id:"getValue",value:"ViewBag.Getvalue"}})])]),t.IscheckReject?e("RequsitionRejectModal",{attrs:{RejectData:t.RejectData},on:{ClosePOPuP:t.ClosePOPuP}}):t._e()],1)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"mr-2 d-inline-block"},[e("span",{staticClass:"colorboxsquare",staticStyle:{"background-color":"red"}}),t._v(" Overdue ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"expand-list"},[e("em",{staticClass:"expand-list-btn justify-content-center align-items-center",attrs:{href:"javascript:;"}},[e("i",{staticClass:"icon-solid arrow-solid-left",staticStyle:{"font-size":"9pt"}})])])}],o=(s("14d9"),s("1115")),n=s("2d4e"),r={Prop:{},components:{RequsitionRejectModal:n["a"]},data(){return{relatedInfoID:"",barcodeNumber:"",ProductInformation:[],PendingRequestData:[],ProductAssignment:[],activeTab:1,searchcondition:"",noRecord:!0,TotalRecords:0,CurrentPage:1,TotalPages:0,SortBy:"",SortExp:"",pageSize:10,pageNumber:1,pageNum:1,isLoading:!1,IscheckReject:!1,uIds:"",catId:"",batchId:"",tabs:[{id:1,title:"Product Information"},{id:2,title:"Pending Check Out List"},{id:3,title:"Product Assignment"}],navheading:"Product Information",Headerstext:this.$t("HeadingText"),Headers:[],AssetAssignmentData:[],Header:[{COLUMN_NAME:"ITEM_UNIQUE_NAME",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("ProductName"),DISPLAY_ORDER:1},{COLUMN_NAME:"FROM_TIME",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("FromTime"),DISPLAY_ORDER:2,settings:{isInSlot:!0}},{COLUMN_NAME:"TO_TIME",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("ToTime"),DISPLAY_ORDER:3,settings:{isInSlot:!0}},{COLUMN_NAME:"USER_NAME",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("CheckOutRequestBy"),DISPLAY_ORDER:4},{COLUMN_NAME:"CREATED_AT",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("CheckOutRequestDate"),DISPLAY_ORDER:5,settings:{isInSlot:!0}},{COLUMN_NAME:"IS_ASSIGNED",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("Assign"),DISPLAY_ORDER:6,settings:{isInSlot:!0}},{COLUMN_NAME:"Reject",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("Reject"),DISPLAY_ORDER:7,settings:{isInSlot:!0}}]}},created:async function(){var t=this;await t.GetPageSize(),t.relatedInfoID=window.location.href.split("/")[5],t.FetchData()},methods:{Assign:function(t){this.$router.push({name:"AddAssetAssignment",params:{reqForm:"pendingRequest"}})},SortByClick:function(t,e){var s=this;1==e||4==e?(s.SortBy=t,s.SortExp="ASC"==s.SortExp?"DESC":"ASC",s.FetchData()):2==e?(this.SortBy=t,s.SortExp="ASC"==s.SortExp?"DESC":"ASC",s.GetAssetReplacement()):(this.SortBy=t,s.GetAssetReturnRequestList())},changeTab(t){var e=this;1==t?(e.navheading="Product Information",e.FetchData()):2==t?(e.navheading="Pending Check Out List",e.SortBy="",e.SortExp="",e.RequsitionPending()):(e.navheading="Product Assignment",e.SortBy="",e.SortExp="",e.ProductAssignments())},previousTab(){this.activeTab>1&&(this.activeTab--,this.changeTab(this.activeTab))},nextTab(){this.activeTab<=this.tabs.length-1&&(this.activeTab++,this.changeTab(this.activeTab))},FetchData(){var t=this;t.isLoading=!0;var e="",s=0;""!=t.barcodeNumber&&null!=t.barcodeNumber?(e=t.barcodeNumber,s="",t.isLoading=!1):(s=t.relatedInfoID,e="",t.isLoading=!1);var a=`barcodeNumber=${e}&relatedInfoId=${s}`;o["a"].GetCatalogInfoByBarcode(a).then(e=>{null!=e.data?(t.pageSize,t.ProductInformation=e.data,t.noRecord=!1,t.isLoading=!1):(t.noRecord=!0,t.ProductInformation=[],t.isLoading=!1)})},Search:function(){1==this.activeTab?this.FetchData():2==this.activeTab?this.RequsitionPending():this.ProductAssignments()},Clear:function(){this.barcodeNumber="",this.changeTab(this.activeTab)},pagerMethod:function(t){this.pageSize=t.pageSize,this.PageNumber=t.PageNumber,this.FetchData()},RequsitionPending(){var t=this;t.isLoading=!0;const e=this.getRequestParamsPending(this.pageNum,this.pageSize,this.sortBy,this.sortExp,this.uIds,this.catId,this.batchId,this.relatedInfoID,this.barcodeNumber);e.pageNum=t.PageNum,t.PageNum?e.pageNum=t.PageNum:t.PageNum=e.pageNum=1,e.pageSize=t.pageSize,e.sortBy=t.sortBy,e.sortExp=t.sortBy,e.uIds=t.uIds,e.catId=t.catId,e.batchId=t.batchId,""!=t.barcodeNumber&&null!=t.barcodeNumber?(e.barcode=t.barcodeNumber,e.relatedInfoID=""):(e.searchCondition="",e.relatedInfoID=t.relatedInfoID),o["a"].RequsitionPendingList(e).then(e=>{e.data.length>2?(t.PendingRequestData=JSON.parse(e.data),t.PendingRequestData.forEach(t=>{t.additionalClass="",t.ISEXPIRED&&(t.additionalClass="high-profile-bar")}),t.TotalRecord=t.PendingRequestData[0].TOTAL_PAGES,t.TotalPage=Math.ceil(t.TotalRecord/t.PageSize),t.CurrentPage=t.PageNumber,t.noRecord=!1,t.isLoading=!1):(t.noRecord=!0,t.PendingRequestData=[],t.TotalRecord=0,t.isLoading=!1),setTimeout((function(){t.CheckBoxBootstrap()}),100),setTimeout((function(){t.ResponsiveDataTable("tablelistingdata")}),500)})},IsAssigned:function(t){var e=this;o["a"].CheckPrivilege("controller=AssetAssignment&action=BarcodeSearch").then(s=>{s.data?this.$router.push({name:"AddAssetAssignment",params:{reqForm:"pendingRequest",items:t}}):e.ShowAlert(e.$t("NotAuthorizedSection"),"failure",!0,"Alert")})},RequsitionReject:function(t){var e=this;o["a"].CheckPrivilege("controller=AssetAssignment&action=BarcodeSearch").then(s=>{s.data?(e.IscheckReject=!0,e.RejectData=t):e.ShowAlert(e.$t("NotAuthorizedSection"),"failure",!0,"Alert")})},ClosePOPuP:function(){var t=this;t.IscheckReject=!1},getRequestParamsPending:function(t,e,s,a,i,o,n,r,l){let c={};return t&&(c["pageNum"]=t),e&&(c["pageSize"]=e),s&&(c["sortBy"]=s),a&&(c["sortExp"]=a),i&&(c["uIds"]=i),o&&(c["catId"]=o),n&&(c["batchId"]=n),r&&(c["relatedInfoId"]=r),l&&(c["barcode"]=l),c},getRequestParams:function(t,e,s,a,i,o,n,r){let l={};return t&&(l["pageNum"]=t),o&&(l["searchcondition"]=o),i&&(l["isPaged"]=i),s&&(l["sortBy"]=s),a&&(l["sortExp"]=a),e&&(l["pageSize"]=e),n&&(l["relatedInfoID"]=n),r&&(l["barcode"]=r),l},async ProductAssignments(){var t=this;t.isLoading=!0;const e=this.getRequestParams(this.pageNum,this.pageSize,this.sortBy,this.sortExp,this.isPaged,this.searchCondition,this.relatedInfoID,this.barcodeNumber);e.pageSize=t.pageSize,e.pageNum=t.PageNumber,e.searchcondition=t.searchCondition,t.PageNumber?e.pageNum=t.PageNumber:t.PageNumber=e.pageNum=1,"undefined"!=typeof t.isPaged?e.isPaged=t.isPaged:t.isPaged=e.isPaged=1,e.isPaged=t.isPaged,e.sortBy=t.SortBy,e.sortExp=t.SortExp,e.assetCatalogId=t.assDetailIDs;var s="";if(this.isBlank(this.searchCondition)||(s+=this.searchCondition),this.isBlank(this.conditionForInstantSearch)||(s+=this.isBlank(this.searchCondition)?this.conditionForInstantSearch:" AND "+this.conditionForInstantSearch),""!=s&&(e.searchcondition=s,t.appliedFilter.length>0)){const e=t.listheaderbuttons.findIndex(t=>"removeFilter"===t.callbackfunction);t.listheaderbuttons[e].isvisible=!0;const s=t.listheaderbuttons.findIndex(t=>"openFilterPopUp"===t.callbackfunction);t.listheaderbuttons[s].iconClass="fa fa-filter text-success"}""!=t.barcodeNumber&&null!=t.barcodeNumber?(e.pageSize=10,e.pageNum=1,e.sortBy="",e.sortExp="",e.isReturn="",e.issuedTo="",e.issuedBy="",e.assetCatalogId="",e.uniqueNames="",e.showWithoutPaging="",e.barcode=t.barcodeNumber,e.UserStatus="",e.search="",e.searchItemCode="",e.Show=""):(e.searchCondition="",e.uniqueNames=t.relatedInfoID),await o["a"].AssetAssignmentListing(e).then(e=>{if(t.isLoading=!1,null!=e.data&&0!=e.data)if(t.Headers=JSON.parse(e.data).schema,console.log("headers",t.Headers),t.Headers.forEach(t=>{"unique_name"==t.COLUMN_NAME&&(t.settings={isInSlot:!0,isSortable:!0}),"number_of_items_assigned"==t.COLUMN_NAME&&(t.settings={isInSlot:!0,isSortable:!0}),"assigned_from"==t.COLUMN_NAME&&(t.DATA_TYPE="text",t.settings={isInSlot:!0,isSortable:!0}),"assigned_till"==t.COLUMN_NAME&&(t.DATA_TYPE="text",t.settings={isInSlot:!0,isSortable:!0}),"return_date"==t.COLUMN_NAME&&(t.DATA_TYPE="text",t.settings={isInSlot:!0,isSortable:!0})}),JSON.parse(e.data).data.length>0){for(var s in t.AssetAssignmentData=JSON.parse(e.data).data,t.AssetAssignmentData.forEach(e=>{e.additionalClass="";var s=new Date,a=!1;a=t.$options.filters.formatDateTimeYYMMDD(s)>t.$options.filters.formatDateTimeYYMMDD(e.assigned_till)&&0==e.is_return,a&&(e.additionalClass="high-bar")}),t.AssetAssignmentData)t.AssetAssignmentData[s].isCheckBoxDisabled=!1,1==t.AssetAssignmentData[s].is_return&&(t.AssetAssignmentData[s].isCheckBoxDisabled=!0);t.TotalRecords=JSON.parse(e.data).data[0].TOTAL,t.TotalPages=Math.ceil(t.TotalRecords/t.PageSize),t.CurrentPage=t.PageNumber,$(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),t.noRecord=!1}else t.noRecord=!0,t.AssetAssignmentData=[],t.TotalRecords=0,t.isLoading=!1;else t.noRecord=!0,t.AssetAssignmentData=[],t.TotalRecords=0,t.isLoading=!1}),t.isLoading=!1},renderActions:function(t){var e=this;let s=[];var a=this;return e.listActions.forEach(e=>{let i={...e};switch(i.title){case"Share":Boolean(t.create_unique_name_list)&&!t.is_return&&a.$options.filters.formatDateTimeMMDDYY(t.assigned_till)>a.$options.filters.formatDateTimeMMDDYY(a.UserDateTime)?i.isDisabled=!1:i.isDisabled=!0;break;case"Approve/Reject Request":"YES"==t.return_request.toUpperCase()?0==t.is_return?(i.isDisabled=!1,i.isVisible=!0):(i.isDisabled=!0,i.isVisible=!1):"NO"==t.return_request.toUpperCase()&&(i.isDisabled=!0,i.isVisible=!1);break;case"Returned":"YES"==t.return_request.toUpperCase()?0==t.is_return?(i.isDisabled=!0,i.isVisible=!1):(i.isDisabled=!1,i.isVisible=!0,a.isTrueForcheck=!0):"NO"==t.return_request.toUpperCase()&&(1==t.is_return?(i.isDisabled=!0,i.isVisible=!0):(i.isDisabled=!0,i.isVisible=!1));break;case"Not Returned":if("YES"==t.return_request.toUpperCase())if(1==t.is_return){if(1==a.isTrueForcheck){i.isDisabled=!0,i.isVisible=!1;break}i.isDisabled=!1,i.isVisible=!0}else i.isDisabled=!0,i.isVisible=!1;else 1==t.is_return?(i.isDisabled=!0,i.isVisible=!1):(i.isDisabled=!1,i.isVisible=!0);break;case"Request For Return":if(0==t.is_return&&"NO"==t.return_request.toUpperCase()&&t.issued_to_id!=a.Userid){if(0!=t.request_id)return i.isDisabled=!0,i.isVisible=!1;i.isDisabled=!1,i.isVisible=!0}else i.isDisabled=!0,i.isVisible=!0;break;case"Request Already Sent":if(0==t.is_return&&"NO"==t.return_request.toUpperCase()&&t.issued_to_id!=a.Userid){if(0==t.request_id)return i.isDisabled=!0,i.isVisible=!1;i.isDisabled=!1,i.isVisible=!0}else i.isDisabled=!1,i.isVisible=!1;break;case"Comment":1==t.is_return&&""!=t.title&&null!=t.title||""!=t.comment&&null!=t.comment?i.isDisabled=!1:i.isDisabled=!0;break;default:i.isDisabled=!1}s.push(i)}),s},commonHeaderButtonClick(){}}},l=r,c=(s("1329"),s("2877")),d=Object(c["a"])(l,a,i,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-4b7d65f6.js.map