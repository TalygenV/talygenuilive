(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c7ac7"],{"522f":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("section",[t("loader",{attrs:{"is-visible":e.isLoading}}),t("tg-list",{attrs:{IsShowAction:!1,listType:["List"],ModuleName:"Asset",SubModuleCode:"Asset",PageSize:e.PageSize,IdentityColumn:"ASSET_CATALOGUE_ID",HeaderText:"Check-Out List",ListData:e.ProductData,HeaderData:e.Headers,widgets:e.widgets,callbackfunction:e.FetchData,HeaderButtons:e.listheaderbuttons,TotalRecords:e.TotalRecords,SearchFields:e.leftSearchFields,RenderRowActionMethod:e.renderActions,ListDataCallBackFunction:e.FetchData,LegendArray:e.LegendArray,SortExp:e.SortExp,SortBy:e.SortBy,NorecordfoundText:e.$t("NoRecordfound")},on:{LeftsearchButtonClick:e.leftCommonSearch,PagerButtonClick:e.pagerMethod,HeaderButtonClick:e.commonHeaderButtonClick,SortdataButtonClick:e.sortdata},scopedSlots:e._u([{key:"slotdata",fn:function({data:a}){return["Status"==a.column.COLUMN_NAME?["Active"==a.row.StatusName?t("span",{staticClass:"px-2 bg-info text-center text-white d-block"},[e._v(" Active ")]):"Inactive"==a.row.StatusName?t("span",{staticClass:"px-2 bg-danger text-center text-white d-block"},[e._v(" Inactive ")]):"RequisitionCompleted"==a.row.StatusName?t("span",{staticClass:"px-2 bg-success text-center text-white d-block"},[e._v(" Assigned ")]):(a.row.StatusName,t("span",{staticClass:"px-2 bg-danger text-center text-white d-block"},[e._v(" Rejected ")]))]:e._e(),"Reject"==a.column.COLUMN_NAME?["Asset Requisition Cancelled By Assigner"==a.row.StatusName?t("span"):t("span",{staticClass:"text-center single-action"},[t("a",{staticClass:"Cancel",attrs:{href:"javascript:;",title:"","data-toggle-tooltip":"tooltip","data-original-title":"Cancel"},on:{click:function(t){return e.rejectReason(a.row)}}},[t("em",{staticClass:"fa fa-times-circle action-icon text-danger",attrs:{title:"Cancel"}})])])]:e._e(),"CreatedAt"==a.column.COLUMN_NAME?[t("span",{attrs:{title:e.$options.filters.utcTimezoneToUserTimeZone(a.row.CreatedAt,e.Timezone)}},[e._v(e._s(e.$options.filters.utcTimezoneToUserTimeZone(a.row.CreatedAt,e.Timezone)))])]:e._e(),"FromTime"==a.column.COLUMN_NAME?[t("span",{attrs:{title:e.$options.filters.formatDateTimeMMDDYY(a.row.FromTime)}},[e._v(e._s(e.$options.filters.formatDateTimeMMDDYY(a.row.FromTime)))])]:e._e(),"ToTime"==a.column.COLUMN_NAME?[t("span",{attrs:{title:e.$options.filters.formatDateTimeMMDDYY(a.row.ToTime)}},[e._v(e._s(e.$options.filters.formatDateTimeMMDDYY(a.row.ToTime)))])]:e._e(),"ModifiedAt"==a.column.COLUMN_NAME?[t("span",{attrs:{":title":e.$options.filters.utcTimezoneToUserTimeZone(a.row.ModifiedAt,e.Timezone)}},[e._v(e._s(e.$options.filters.utcTimezoneToUserTimeZone(a.row.ModifiedAt,e.Timezone)))])]:e._e(),"Assigned"==a.column.COLUMN_NAME?[a.row.IsAssigned?t("span",[e._v("Yes")]):"Asset Requisition Cancelled By Assigner"==a.row.StatusName?t("span",[e._v("Unassigned ")]):t("span",[e._v("Pending")])]:e._e()]}}])}),e.isRejectPopup?t("Reject",{attrs:{specificDetails:e.specificDetails},on:{closeRejectPopUp:e.closeRejectPopUp}}):e._e()],1)},i=[],o=(a("14d9"),a("1115"));let n=[{title:"Add Check Out Request",iconClass:"fa fa-plus",callbackfunction:"AddCheckOut",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1}],r=[{fieldName:"Product Name",fieldType:"radio",fieldIcon:"fa-user",paramName:"catalogId",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]},{fieldName:"Unique Name",fieldType:"ddl-check",fieldIcon:"fa-server",paramName:"UniqueNames",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]}],c=[{title:"Reject",href:"",icon:"fa fa-times-circle action-icon text-danger",additionalSpan:""}];function l(e,t,a,s){var i=e;if("Product Name"==a&&o["a"].GetAssetData().then(e=>{i.json=e.data.data,null==i.json||i.json.forEach(e=>{let t={name:e.NAME,value:e.ASSETID};i.leftSearchFields[0].listOptions.push(t)})}),"Unique Name"==a){i.leftSearchFields[1].listOptions=[];var n=`assetCatalogId=${s}&name=&issueTo=&locationId=&requestFrom=ALL_BY_ASSET_CATALOGUE_ID&assetType=`;o["a"].GetUniqueAssetItems(n).then(e=>{e.data.forEach(e=>{let t={name:e.Name,value:e.Value};i.leftSearchFields[1].listOptions.push(t)})})}}var d={buttons:n,leftsearchSchema:r,listActions:c,bindleftCommonSearchdropdown:l},u=function(){var e=this,t=e._self._c;return t("div",{staticClass:"my-popups"},[t("loader",{attrs:{"is-visible":e.isLoading}}),t("div",{staticClass:"modal d-block"},[t("div",{staticClass:"modal-dialog modal-dialog-centered"},[t("div",{staticClass:"modal-content"},[t("div",{staticClass:"modal-header"},[t("h5",{staticClass:"modal-title"},[e._v(" "+e._s(e.$t("Reject"))+" ")]),t("button",{staticClass:"close",on:{click:e.closeRejectPopUp}},[t("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),t("div",{staticClass:"border p-3"},[t("dynamic-form",{attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema},on:{OnSubmit:e.onSubmit}})],1)])])])],1)},A=[],h={props:{specificDetails:{type:Object}},data(){return{details:{},FormSchema:[{layoutType:"single",Data:[{astype:"TextAreaField",label:this.$t("Reject"),name:"Reject",value:"",placeholder:"",validationRules:{required:!0,max:250}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>"+this.$t("Save")},{type:"button",class:"btn btn-danger text-white",text:"&nbsp;<i class='fa fa-close pr-2'></i>"+this.$t("Cancel"),onClick:this.closeRejectPopUp}]}},created:function(){var e=this;e.details=e.specificDetails,console.log("details",e.details)},methods:{closeRejectPopUp:function(){this.$emit("closeRejectPopUp")},onSubmit:function(e){var t=this,a=`batchId=${t.details.RequisitionBatchId}&requisitionCancelledBy=assigner&comment=${e.Reject}`;o["a"].UpdateRequisitionStatusCheckout(a).then(e=>{1==e.data?(t.closeRejectPopUp(),t.ShowAlert(this.$t(" Status Update Successfully "),"success",this.$t("Alert"))):t.ShowAlert(this.$t(" Something Went Wrong "),"failure",this.$t("Alert"))})}}},m=h,S=a("2877"),p=Object(S["a"])(m,u,A,!1,null,null,null),f=p.exports,C={components:{Reject:f},data(){return{isRejectPopup:!1,isLoading:!1,listheaderbuttons:d.buttons,leftSearchFields:d.leftsearchSchema,LegendArray:[],ProductData:[],widgets:[],Headers:[{COLUMN_NAME:"AssetGroup",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Products",DISPLAY_ORDER:1},{COLUMN_NAME:"Assigned",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Assigned",DISPLAY_ORDER:2,settings:{isInSlot:!0}},{COLUMN_NAME:"UserName",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Created By",DISPLAY_ORDER:3},{COLUMN_NAME:"CreatedAt",DATA_TYPE:"Date",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Created At",DISPLAY_ORDER:4,settings:{isInSlot:!0}},{COLUMN_NAME:"FromTime",DATA_TYPE:"Date",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"From",DISPLAY_ORDER:5,settings:{isInSlot:!0}},{COLUMN_NAME:"ToTime",DATA_TYPE:"Date",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"To",DISPLAY_ORDER:6,settings:{isInSlot:!0}},{COLUMN_NAME:"ModifyUserName",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Approve/Rejected By",DISPLAY_ORDER:7},{COLUMN_NAME:"ModifiedAt",DATA_TYPE:"Date",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Approve/Rejected at",DISPLAY_ORDER:8,settings:{isInSlot:!0}},{COLUMN_NAME:"Comment",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Reason",DISPLAY_ORDER:9},{COLUMN_NAME:"Status",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Status",DISPLAY_ORDER:10,settings:{isInSlot:!0}},{COLUMN_NAME:"Reject",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Reject",DISPLAY_ORDER:10,settings:{isInSlot:!0}}],specificDetails:{},noRecord:!0,TotalRecords:0,CurrentPage:1,TotalPages:0,SortBy:"",SortExp:"",PageSize:10,PageNumber:1,searchCondition:"",catalogId:null,uniqueNames:null,IsAddCheckOutRequestList:!1}},async created(){var e=this;e.Timezone=e.GetUserInfo.TimeZone,console.log("user",e.Timezone),e.leftSearchFields[0].onChange=e.getClickEvent,await e.GetPageSize(),d.bindleftCommonSearchdropdown(e,"AssetRequisition","Product Name"),e.FetchData(),e.LegendArray=[{class:"legends_profile colorboxsquare",text:"Expired Check-Out"}]},methods:{async GetPageSize(){var e=this,t="key=DefaultPageSize";await o["a"].GetConfigurationValueForCompanyByKey(t).then(t=>{null!=t.data&&(e.PageSize=parseInt(t.data))})},getClickEvent:function(){var e=this.leftSearchFields[0].value;d.bindleftCommonSearchdropdown(this,"AssetRequisition","Unique Name",e)},FetchData:function(){var e=this;e.isLoading=!0;var t=`LocationId=&pageSize=${e.PageSize}&pageNumber=${e.PageNumber}&sortBy=${e.SortBy}&sortExp=${e.SortExp}&${e.searchCondition}`;o["a"].GetMyRequisitions(t).then(t=>{e.isLoading=!1,e.leftSearchFields[1].listOptions=[],null!=t.data&&t.data.length>0?(e.ProductData=t.data,e.ProductData.forEach(e=>{e.additionalClass="",1==e.IsExpired&&(e.additionalClass="danger-bar")}),e.TotalRecords=t.data[0].TotalRecord,e.TotalPages=Math.ceil(e.TotalRecords/e.PageSize),e.CurrentPage=e.PageNumber,e.noRecord=!1):(e.noRecord=!0,e.ProductData=[],e.TotalRecords=0,e.isLoading=!1)})},rejectReason:function(e){var t=this;t.confirmR(t.$t("Are you sure you want to reject the requisition?"),!0,!1,(function(a){t.specificDetails=e,t.isRejectPopup=!0}))},closeRejectPopUp:function(){var e=this;e.specificDetails={},e.isRejectPopup=!1,e.FetchData()},commonHeaderButtonClick(e){switch(e.callbackfunction){case"AddCheckOut":this.AddCheckOutRequest();break}},AddCheckOutRequest:function(){this.$router.push({name:"AssetAssignmentCheckOut"})},pagerMethod:function(e){this.PageSize=e.PageSize,this.PageNumber=e.PageNumber,this.FetchData()},leftCommonSearch:function(e){this.PageNumber=e.PageNumber,this.isPaged=1,"undefined"!=typeof e.searchCondition?this.searchCondition=e.searchConditionJson:this.searchCondition="",this.FetchData()},sortdata:function(e){var t="sort tb_headerSortDown";this.SortBy=e,e===this.SortBy&&(""==this.SortExp?(this.SortExp="ASC",t="sort tb_headerSortDown"):"ASC"==this.SortExp?(this.SortExp="DESC",t="sort tb_headerSortUp"):(this.SortExp="ASC",t="sort tb_headerSortDown")),this.FetchData(),$("#"+e+"  span:first-child").attr("class",t)},renderActions(){},GetUniqueNamesWithId(e){var t=this;t.Schema.leftSearchFields[0].listOptions=[];var a=`assetCatalogId=${e}&name=&issueTo=&locationId=&requestFrom=ALL&assetType=`;o["a"].GetUniqueAssetItems(a).then(e=>{e.data.forEach(e=>{let a={name:e.Name,value:e.Value};t.Schema.leftSearchFields[0].listOptions.push(a)})})}}},E=C,T=Object(S["a"])(E,s,i,!1,null,null,null);t["default"]=T.exports}}]);
//# sourceMappingURL=chunk-2d0c7ac7.js.map