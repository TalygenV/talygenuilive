(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CRMPurchaseOrder"],{"36d3":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("loader",{attrs:{"is-visible":e.isLoading}}),a("tg-list",{ref:"tgList",attrs:{IsShowAction:!0,showCheckBox:!0,ModuleName:"CRM",SubModuleCode:"CRM_PURCHASE_ORDERS",IdentityColumn:"Order_id",HeaderText:e.$t("PurchaseOrderBulk"),ListData:e.PurchaseOrderData,HeaderData:e.Headers,HeaderButtons:e.listheaderbuttons,TotalRecords:e.TotalRecords,SearchFields:e.leftSearchFields,RenderRowActionMethod:e.renderActions,ListDataCallBackFunction:e.FetchData,LegendArray:e.LegendArray,ViewList:e.ViewList,IsFilterApplied:!!e.searchCondition,SortExp:e.SortExp,SortBy:e.SortBy,NorecordfoundText:e.$t("NoRecordfound"),CurrentPageNumber:e.PageNumber},on:{ApplyView:e.OnApplyView,LeftsearchButtonClick:e.leftCommonSearch,PagerButtonClick:e.pagerMethod,HeaderButtonClick:e.commonHeaderButtonClick,ActionButtonClick:e.actionButtonClick,SortdataButtonClick:e.sortdata},scopedSlots:e._u([{key:"slotdata",fn:function(t){var i=t.data;return["status_id"==i.column.COLUMN_NAME?[e.isCRMShowStausDrop(i.row.status_id,"CRM_PURCHASE_ORDERS")?a("listing-status",{ref:"updatestatus",attrs:{isfor:"CRM_PURCHASE_ORDERS",dataid:i.row.Order_id,"data-controller":"Crm",statuslist:e.StatusListForListing,item:i,"data-action":"index",dataselected:i.row.status_id,callbackfunction:e.FetchData,isselectedvaluestring:!0}}):e._e(),e.isCRMShowStausDrop(i.row.status_id,"CRM_PURCHASE_ORDERS")?e._e():a("a",{staticClass:"inactive-disabled"},[a("span",{class:e.getStatusClass(i.row.status_id,"status_id")},[e._v(" "+e._s(i.row[i.column.COLUMN_NAME])+" ")])])]:e._e()]}}])}),e.showAddEventModal?a("modalfollowupslist",{attrs:{srcId:e.souceID,modulename:"CRM",submodulecode:"CRM_PURCHASE_ORDERS",userid:e.userid},on:{close:e.closeEventViewModal}}):e._e(),e.showFilter?a("searchfilter",{attrs:{submodulecode:"CRM_PURCHASE_ORDERS",modulename:"CRM",callbackfunction:e.FetchData},on:{close:function(t){e.showFilter=!1},FilterData:e.FilterData}},[a("h5",{attrs:{slot:"header"},slot:"header"},[e._v(e._s(e.$t("Search")))])]):e._e(),e.ShowManageView?a("viewlayout",{directives:[{name:"show",rawName:"v-show",value:e.ShowManageView,expression:"ShowManageView"}],attrs:{submodulecode:"CRM_PURCHASE_ORDERS",modulename:"CRM",callbackfunction:e.FetchData,usertype:e.usertype},on:{close:function(t){e.ShowManageView=!1}}},[a("h5",{attrs:{slot:"header"},slot:"header"},[e._v(e._s(e.$t("Search")))])]):e._e()],1)},s=[],r=a("53ca"),o=a("5530"),n=a("c7eb"),l=a("1da1"),c=(a("d3b7"),a("159b"),a("a434"),a("e9c4"),a("c740"),[{fieldName:"PURCHASE ORDER NUMBER",fieldType:"text",fieldIcon:"fa-file",fieldSearchConditionName:["order_number"],isSearch:!1,value:"",listOptions:[]},{fieldName:"PURCHASE ORDER TITLE",fieldType:"text",fieldIcon:"fa-file-text-o",fieldSearchConditionName:["order_title"],isSearch:!1,value:"",listOptions:[]},{fieldName:"PURCHASE ORDERS DATE",fieldType:"date-range",fieldIcon:"fa-calendar",fieldSearchConditionName:["orders.order_date|orders.order_date"],isSearch:!1,datePickerConfig:{useCurrent:!1,showClear:!0,showClose:!0,allowInputToggle:!0,minDate:!1,maxDate:!1,widgetPositioning:{horizontal:"right",vertical:"bottom"}},secondDatePickerConfig:{useCurrent:!1,showClear:!0,showClose:!0,allowInputToggle:!0,minDate:!1,maxDate:!1,widgetPositioning:{horizontal:"right",vertical:"bottom"}},value:"",secondValue:"",listOptions:[]}]),d=[{title:"Page Tour",iconClass:"fa fa-road",callbackfunction:"setTourGuideSteps",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1},{title:"Reset",iconClass:"fa-filter text-danger",callbackfunction:"removeFilter",href:"",additionalClass:"",isdisabled:!1,isvisible:!1,checkPrivilege:!1},{title:"Filters",iconClass:"fa-filter",callbackfunction:"openFilterPopUp",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1},{title:"Export To Excel",iconClass:"fa-file-excel-o",callbackfunction:"downloadExceldata",href:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1},{title:"Add Purchase Order",iconClass:"fa-plus",href:"/CRM/ManagePurchaseOrder/0/CRM/CRM_PURCHASE_ORDERS",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!0,id:"addPurchaseOrder_a"},{id:"DeleteMultiple",title:"Delete",iconClass:"fa-trash-o",callbackfunction:"commonDeleteData",isdisabled:!0,isvisible:!0,isEnabledOnSelectedRow:!0}],u=[{title:"View",href:"/CRM/ViewPurchaseOrderDetails/{Order_id}/CRM/CRM_PURCHASE_ORDERS",icon:"fa fa-eye action-icon",additionalSpan:""},{title:"Edit",href:"/CRM/ManagePurchaseOrder/{Order_id}/CRM/CRM_PURCHASE_ORDERS",icon:"fa fa-pencil text-success action-icon",additionalSpan:""},{title:"Follow-Ups",callbackfunction:"openAddNewEvent",href:"javascript:void(0)",icon:"fa fa-flag text-muted action-icon",additionalSpan:""}],h={buttons:d,leftSearchFields:c,listActions:u},f=a("9769"),S=a("cdd5"),p=a("e29d"),C=a("fc0b"),E={components:{viewlayout:S["a"],modalfollowupslist:p["a"],searchfilter:C["a"]},data:function(){return{ViewList:[],LegendArray:[],showAddEventModal:!1,ShowManageView:!1,showFilter:!1,isLoading:!1,leftSearchFields:h.leftSearchFields,userid:null,usertype:null,LoggedinUserId:null,conditionForInstantSearch:"",searchCondition:"",PageNumber:1,PageSize:10,SortBy:"",SortExp:"",listheaderbuttons:h.buttons,headers:null,Headers:null,noRecord:!1,PurchaseOrderData:null,listActions:h.listActions,TotalRecords:0,StatusListForListing:[],txtpurchaseordernumber:"",txtpurchaseordertitle:"",StartDateForSearch:"",ExpiryDateForSearch:"",IsAnySearch:!1,leadOwner:"",souceID:0,OrderSubject:"",appliedFilter:[],privilegeParams:null,ViewListId:""}},created:function(){var e=this;e.userid=e.GetUserInfo.ID,e.usertype=e.GetUserInfo.UserType,e.LoggedinUserId=e.GetUserInfo.ID,e.privilegeParams="controller=CRM&action=",e.GetPageSizeOption(),e.getStatuslistForListing("CRM","en"),e.FetchData(),e.GetDdlRecords_ViewList(),e.LegendArray=[{class:"legend-pending colorboxsquare",text:e.$t("ListingLegend",["Purchase Orders"])}]},methods:{GetDdlRecords_ViewList:function(){var e=Object(l["a"])(Object(n["a"])().mark((function e(){var t,a;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this,t.ViewList=[],a="moduleName=CRM&subModuleCode=CRM_PURCHASE_ORDERS&viewId=0&pageSize=100&pageNum=1&sortBy=&sortExp=",e.next=5,f["a"].GetViewList(a).then((function(e){e.data&&"undefined"!=typeof e.data.DATA&&(t.ViewList=e.data.DATA);var a=0;t.ViewListId="0",null==t.ViewList||""==t.ViewList||t.ViewList.forEach((function(e){e.IS_SLECTED_USER_ID>0&&(a+=1,t.ViewListId=e.VIEW_ID)}));var i=0;a>0?t.ViewList.splice(i,0,{SUB_MODULE_NAME:"",SUB_MODULE_CODE:"",VIEW_NAME:"Default View",VIEW_ID:0,IS_APPLICABLE_TO_ALL:1,MODULE_NAME:"",CREATED_AT:"",IS_SLECTED_USER_ID:0,CAN_EDIT:0,ROWNUMBER:0,VIEW_TYPE:"",USER_LIST:""}):null==t.ViewList||""==t.ViewList?t.ViewList.push({SUB_MODULE_NAME:"",SUB_MODULE_CODE:"",VIEW_NAME:"Default View",VIEW_ID:0,IS_APPLICABLE_TO_ALL:1,MODULE_NAME:"",CREATED_AT:"",IS_SLECTED_USER_ID:1,CAN_EDIT:0,ROWNUMBER:0,VIEW_TYPE:"",USER_LIST:""}):t.ViewList.splice(i,0,{SUB_MODULE_NAME:"",SUB_MODULE_CODE:"",VIEW_NAME:"Default View",VIEW_ID:0,IS_APPLICABLE_TO_ALL:1,MODULE_NAME:"",CREATED_AT:"",IS_SLECTED_USER_ID:1,CAN_EDIT:0,ROWNUMBER:0,VIEW_TYPE:"",USER_LIST:""}),setTimeout((function(){t.ViewListId>0?t.$refs.tgList.$refs.tgListHeaderButtons.ViewListId=t.ViewListId:t.$refs.tgList.$refs.tgListHeaderButtons.ViewListId="0"}),1e3)}));case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),DefaultView:function(){var e=this,t={ModuleName:"CRM",SubmoduleCode:"CRM_PURCHASE_ORDERS"},a=JSON.stringify(t);f["a"].ClearView(a).then((function(t){null!=t.data&&("1"==t.data.code||"1"==t.data.Code)?(e.ShowAlert(e.$t("ClearSuccess",[e.$t("DefaultView")]),"success",!0,e.$t("Alert")),e.FetchData()):e.ShowAlert(e.$t("ErrorWhileProcessingRequest"),"failure",!0,e.$t("Alert"))}))},OnApplyView:function(e){var t=this;if("0"==e)t.DefaultView();else{var a={ViewId:e,ModuleName:"CRM",SubmoduleCode:"CRM_PURCHASE_ORDERS"},i=JSON.stringify(a);f["a"].ApplyView(i).then((function(e){null!=e.data&&("1"==e.data.code||"1"==e.data.Code)?(t.ShowAlert(t.$t("ApplySuccess",[t.$t("View")]),"success",!0,t.$t("Alert")),t.$emit("RefreshManageView"),t.FetchData()):t.ShowAlert(t.$t("AddedError",[t.$t("View")]),"failure",!0,t.$t("Alert"))}))}},renderActions:function(e){var t=this,a=[];return t.listActions.forEach((function(t){var i=Object(o["a"])({},t);switch(t.title){case"View":i.isVisible="Draft"!=e.status_id;break;case"Edit":i.isVisible="Cancelled"!=e.status_id&&"Closed"!=e.status_id;break;case"FollowUps":i.isVisible="Closed"!=e.status_id;break}a.push(i)})),a},getStatuslistForListing:function(e,t){var a=this,i="langCode="+t+"&statusType="+e+"&hasglobal=true";f["a"].statusdropdown(i).then((function(e){if("Success"==e.data.status){var t=e.data.result;a.StatusListForListing=t.data}}))},commonHeaderButtonClick:function(e){switch(e.callbackfunction){case"downloadExceldata":this.FetchData(!0);break;case"ManageView":this.ManageView();break;case"openFilterPopUp":this.openFilterPopUp();break;case"commonDeleteData":this.commonDeleteData();break;case"removeFilter":var t=this;this.searchCondition="";var a=t.listheaderbuttons.findIndex((function(e){return"removeFilter"===e.callbackfunction}));t.listheaderbuttons[a].isvisible=!1;var i=t.listheaderbuttons.findIndex((function(e){return"openFilterPopUp"===e.callbackfunction}));t.listheaderbuttons[i].iconClass="fa fa-filter";try{t.appliedFilter=[]}catch(s){}t.FetchData();break;case"setTourGuideSteps":this.setTourGuideSteps(0);break}},ManageView:function(){this.ShowManageView=!0,setTimeout((function(){$("#modalManageView").modal("show"),setTimeout((function(){SetBootstraptoolTip()}),200)}),1e3)},sortdata:function(e){var t="sort tb_headerSortDown";this.SortBy=e,e===this.SortBy&&(""==this.SortExp?(this.SortExp="ASC",t="sort tb_headerSortDown"):"ASC"==this.SortExp?(this.SortExp="DESC",t="sort tb_headerSortUp"):(this.SortExp="ASC",t="sort tb_headerSortDown")),this.FetchData(),$("#"+e+"  span:first-child").attr("class",t)},pagerMethod:function(e){this.PageSize=e.PageSize,this.PageNumber=e.PageNumber,this.FetchData()},openFilterPopUp:function(e){this.cancelOrRefresh(),this.showFilter=!0},FilterData:function(e,t,a,i,s,o){this.pageNum=e,this.pageSize=t,this.sortBy=a,this.sortExp=i,this.searchCondition=s,null!=Object(r["a"])(o)&&this.appliedFilter.push(o),this.FetchData()},SetPageSize:function(e){this.PageSize=e.target.value,this.PageNumber=1,this.GroupStart=this.PageNumber,this.GroupEnd=this.PageNumber+2,this.FetchData()},SetCurrentPage:function(e){this.PageNumber=e,e>this.GroupEnd||1==e?(this.GroupStart=e,this.GroupEnd=e+2):e<this.GroupStart&&e>1&&(this.GroupEnd=this.GroupStart-1,this.GroupStart=e-2),this.FetchData()},cancelOrRefresh:function(){this.SetPageSize=10,this.txtpurchaseordernumber="",this.txtpurchaseordertitle="",this.searchCondition="",this.IsAnySearch=!1,this.StartDateForSearch="",this.ExpiryDateForSearch="",this.leadOwner="",this.DealName="",this.OrderSubject="",this.ProductName="",this.FetchData()},commonDeleteData:function(e){var t=this;f["a"].CheckPrivilege(t.privilegeParams+"DeletePurchaseOrder").then((function(e){if(e.data){var a="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){a.length>0&&(a+=","),a+=$(this).val()})),a.length>0?t.confirmR(t.$t("ConfirmDelete"),!0,t.$t("Delete")+"  "+t.$t("PurchaseOrderBulk"),(function(){var e={ids:a,moduleName:"CRM",subModuleCode:"CRM_PURCHASE_ORDERS"},i=JSON.stringify(e);f["a"].CommonDeleteData(i).then((function(e){200==e.status?($("[id^='chkAll']").prop("checked",!1).removeAttr("checked"),$(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),t.ShowAlert(t.$t("DeletedSuccess",[t.$t("PurchaseOrderBulk")]),"success",!0,t.$t("Alert")),t.PageNumber=parseInt(t.PageNumber)-1,t.PageNumber<=0&&(t.PageNumber=1),t.FetchData()):t.ShowAlert(t.$t("DeletedError",[t.$t("PurchaseOrderBulk")]),"failure",!0,t.$t("Alert"))}))})):alert(t.$t("Selectanyrecordtodelete"))}else t.ShowAlert("You are not authorized","failure",!0,"Alert")}))},getRequestParams:function(e,t,a,i,s,r){var o={};return e&&(o["pageNum"]=e),r&&(o["searchcondition"]=r),s&&(o["isPaged"]=s),a&&(o["sortBy"]=a),i&&(o["sortExp"]=i),t&&(o["pageSize"]=t),o},clickEventOfColumn:function(e,t){"order_number"==t.COLUMN_NAME&&this.$router.push({path:"/CRM/ViewPurchaseOrderDetails/"+e.Order_id+"/CRM/CRM_PURCHASE_ORDERS"})},FetchData:function(e){var t=this.getRequestParams(this.pageNumber,this.pageSize,this.sortBy,this.sortExp,this.isPaged,this.searchCondition),a=this;a.isLoading=!0,t.pageSize=e?a.TotalRecords:a.PageSize,t.pageSize=a.PageSize,t.pageNumber=a.PageNumber,t.searchCondition=a.searchCondition,a.PageNumber?t.pageNum=a.PageNumber:a.PageNumber=t.pageNum=1,"undefined"!=typeof a.isPaged?t.isPaged=a.isPaged:a.isPaged=t.isPaged=1,t.isPaged=a.isPaged,t.sortBy=a.SortBy,t.sortExp=a.SortExp;var i="";if(a.isBlank(this.searchCondition)||(i+=a.searchCondition),a.isBlank(this.conditionForInstantSearch)||(i+=this.isBlank(this.searchCondition)?this.conditionForInstantSearch:" AND "+this.conditionForInstantSearch),""!=i){if(t.searchCondition=i,a.appliedFilter.length>0){var s=a.listheaderbuttons.findIndex((function(e){return"removeFilter"===e.callbackfunction}));a.listheaderbuttons[s].isvisible=!0;var r=a.listheaderbuttons.findIndex((function(e){return"openFilterPopUp"===e.callbackfunction}));a.listheaderbuttons[r].iconClass="fa fa-filter text-success"}}else if(0==a.appliedFilter.length){var o=a.listheaderbuttons.findIndex((function(e){return"removeFilter"===e.callbackfunction}));a.listheaderbuttons[o].isvisible=!1;var n=a.listheaderbuttons.findIndex((function(e){return"openFilterPopUp"===e.callbackfunction}));a.listheaderbuttons[n].iconClass="fa fa-filter"}e?f["a"].PurchaseOrderListing(t).then((function(e){""!=e.data&&null!=e.data?a.JSONToCSVConvertor(e.data,"PurchaseOrder-Detail",!0):a.ModelnoRecord=!0,a.isLoading=!1})):f["a"].PurchaseOrderListing(t).then((function(e){""!=e.data&&null!=e.data?(a.Headers=e.data.schema,a.Headers.forEach((function(e){e.settings=null,e.DISPLAY_NAME=a.$t(e.DISPLAY_NAME?e.DISPLAY_NAME:e.COLUMN_NAME),"order_number"==e.COLUMN_NAME&&(e.settings={clickEvent:a.clickEventOfColumn,formatter:a.columnDataFormatter}),"status_id"==e.COLUMN_NAME&&(e.settings={isInSlot:!0})})),e.data.data.length>0?($.each(a.Headers,(function(e,t){$.each(a.PurchaseOrderData,(function(e,t){null==t.gin_status&&(t.gin_status="$t('NoGin')")}))})),a.PurchaseOrderData=e.data.data,a.PurchaseOrderData.forEach((function(e){e.isCheckBoxDisabled=!1,e.additionalClass="","Closed"==e.status_id&&(e.isCheckBoxDisabled=!0,e.additionalClass="warning-bar"),e.rowDetailsUrl="",""==e.rowDetailsUrl&&(e.rowDetailsUrl="/CRM/ViewPurchaseOrderDetails/"+e.Order_id+"/CRM/CRM_PURCHASE_ORDERS")})),a.TotalRecords=e.data.data[0].total_records,a.TotalPages=Math.ceil(a.TotalRecords/a.PageSize),a.CurrentPage=a.PageNumber,a.GetDdlRecords_ViewList(),$("[id^='chkAll']").prop("checked",!1).removeAttr("checked"),$(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),a.noRecord=!1):(a.noRecord=!0,a.PurchaseOrderData=[],a.TotalRecords=0)):(a.noRecord=!0,a.PurchaseOrderData=[],a.Headers=[],a.TotalRecords=0),a.isLoading=!1}))},currentPageMethod:function(e){this.PageSize=e.PageSize,this.PageNumber=e.PageNumber,this.FetchData()},GetPageSizeOption:function(){for(var e=[],t=10,a=t;a<t+95;a+=5)e.push(a);this.PageSizeOption=e},leftCommonSearch:function(e){this.PageNumber=e.PageNumber,"undefined"!=typeof e.searchCondition?this.searchCondition=e.searchCondition:this.searchCondition="",this.FetchData()},openAddNewEvent:function(e,t){var a=this;a.souceID=t.Order_id,a.selectedItem=e,a.showAddEventModal=!a.showAddEventModal},closeEventViewModal:function(){this.showAddEventModal=!1},actionButtonClick:function(e,t,a,i){var s=this;switch(e){case"checkPrivilegeView":break;case"checkPrivilegeDetails":break;case"openAddNewEvent":s.openAddNewEvent(t.Order_id,t);break}}}},g=E,_=a("2877"),D=Object(_["a"])(g,i,s,!1,null,null,null);t["default"]=D.exports}}]);
//# sourceMappingURL=CRMPurchaseOrder.js.map