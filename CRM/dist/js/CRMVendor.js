(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CRMVendor"],{9477:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("loader",{attrs:{"is-visible":e.isLoading}}),i("tg-list",{ref:"tgList",attrs:{IsShowAction:!0,showCheckBox:!0,ModuleName:"CRM",SubModuleCode:"CRM_VENDORS",IdentityColumn:"vendor_id",HeaderText:e.$t("Vendor"),ListData:e.VendorData,HeaderData:e.Headers,HeaderButtons:e.listheaderbuttons,TotalRecords:e.TotalRecords,SearchFields:e.leftSearchFields,RenderRowActionMethod:e.renderActions,ListDataCallBackFunction:e.FetchData,LegendArray:e.LegendArray,IsFilterApplied:!!e.searchCondition,SortExp:e.SortExp,SortBy:e.SortBy,CurrentPageNumber:e.PageNumber,ViewList:e.ViewList,NorecordfoundText:e.$t("NoRecordfound")},on:{LeftsearchButtonClick:e.leftCommonSearch,ApplyView:e.OnApplyView,PagerButtonClick:e.pagerMethod,HeaderButtonClick:e.commonHeaderButtonClick,ActionButtonClick:e.actionButtonClick,SortdataButtonClick:e.sortdata},scopedSlots:e._u([{key:"slotdata",fn:function(t){var a=t.data;return["status_id"==a.column.COLUMN_NAME?[e.isCRMShowStausDrop(a.row.status_id,"CRM_VENDORS")?i("listing-status",{ref:"updatestatus",attrs:{isfor:"CRM_VENDORS",dataid:a.row.vendor_id,"data-controller":"Crm",statuslist:e.StatusListForListing,item:a,"data-action":"index",dataselected:a.row.status_id,callbackfunction:e.FetchData,isselectedvaluestring:!0}}):e._e(),e.isCRMShowStausDrop(a.row.status_id,"CRM_VENDORS")?e._e():i("a",{staticClass:"inactive-disabled"},[i("span",{class:e.getStatusClass(a.row.status_id,"status_id")},[e._v(" "+e._s(a.row[a.column.COLUMN_NAME])+" ")])])]:e._e()]}}])}),e.showFilter?i("searchfilter",{attrs:{submodulecode:"CRM_VENDORS",modulename:"CRM",callbackfunction:e.FetchData},on:{close:function(t){e.showFilter=!1},FilterData:e.FilterData}},[i("h5",{attrs:{slot:"header"},slot:"header"},[e._v(e._s(e.$t("Search")))])]):e._e(),e.ShowManageView?i("viewlayout",{directives:[{name:"show",rawName:"v-show",value:e.ShowManageView,expression:"ShowManageView"}],attrs:{submodulecode:"CRM_VENDORS",modulename:"CRM",callbackfunction:e.FetchData,commonapiurl:e.commonAPIUrl,usertype:e.usertype},on:{close:function(t){e.ShowManageView=!1}}},[i("h5",{attrs:{slot:"header"},slot:"header"},[e._v(e._s(e.$t("Search")))])]):e._e(),e.showAddEventModal?i("modalfollowupslist",{attrs:{srcId:e.souceID,modulename:"CRM",submodulecode:"CRM_VENDORS",userid:e.userid},on:{close:e.closeEventViewModal}}):e._e()],1)},o=[],s=i("53ca"),n=i("5530"),r=i("c7eb"),l=i("1da1"),d=(i("d3b7"),i("159b"),i("a434"),i("e9c4"),i("c740"),i("9769")),c=[{fieldName:"Vendor Name",fieldType:"text",fieldIcon:"fa-file",fieldSearchConditionName:["VENDR.vendor_name"],isSearch:!1,value:"",listOptions:[]},{fieldName:"Email",fieldType:"text",fieldIcon:"fa-envelope",fieldSearchConditionName:["VENDR.email_id"],isSearch:!1,value:"",listOptions:[]},{fieldName:"Vendor OWNER",fieldType:"ddl-check",fieldIcon:"fa-user",fieldSearchConditionName:["VENDR.vendor_owner"],isSearch:!1,value:"",listOptions:[]}],u=[{title:"Reset",iconClass:"fa-filter text-danger",callbackfunction:"removeFilter",href:"",additionalClass:"",isdisabled:!1,isvisible:!1,checkPrivilege:!1},{title:"Filters",iconClass:"fa-filter",callbackfunction:"openFilterPopUp",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1},{title:"Add Vendor",iconClass:"fa-plus",href:"/CRM/ManageVendor/0/NO/CRM/CRM_VENDORS",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!0},{title:"Export To Excel",iconClass:"fa-file-excel-o",callbackfunction:"downloadExceldata",href:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1},{id:"DeleteMultiple",title:"Delete",iconClass:"fa-trash-o",callbackfunction:"commonDeleteData",isdisabled:!0,isvisible:!0,isEnabledOnSelectedRow:!0}],h=[{title:"View",href:"/CRM/ViewVendorDetails/{vendor_id}/CRM/CRM_VENDORS",icon:"fa fa-eye action-icon",additionalSpan:""},{title:"Edit",href:"/CRM/ManageVendor/{vendor_id}/YES/CRM/CRM_VENDORS",icon:"fa fa-pencil text-success action-icon",additionalSpan:""},{title:"Follow-Ups",callbackfunction:"openAddNewEvent",href:"javascript:void(0)",icon:"fa fa-flag text-muted action-icon",additionalSpan:""}];function f(e,t,i){return p.apply(this,arguments)}function p(){return p=Object(l["a"])(Object(r["a"])().mark((function e(t,i,a){var o,s;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=t,s={},s["moduleName"]=i,s["type"]=a,e.next=6,d["a"].GetLeftSearchStatus(s).then((function(e){var t=e.data;if(null!=t)return o.leftSearchFields[2].listOptions=t.DATA,o.VendorOwnerList=t.DATA,o.VendorOwnerList}));case 6:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}var S={buttons:u,leftSearchFields:c,listActions:h,GetVendorOwnerlist:f},E=i("fc0b"),w=i("e29d"),C=i("cdd5"),D={components:{viewlayout:C["a"],searchfilter:E["a"],modalfollowupslist:w["a"]},data:function(){return{isLoading:!1,leftSearchFields:S.leftSearchFields,userid:null,usertype:null,ViewList:[],listheaderbuttons:S.buttons,VendorData:null,Headers:null,listActions:S.listActions,searchCondition:"",PageNumber:1,PageSize:10,SortBy:"",SortExp:"",noRecord:!1,TotalRecords:0,StatusListForListing:[],souceID:0,showFilter:!1,showAddEventModal:!1,ShowManageView:!1,LegendArray:[],appliedFilter:[],privilegeParams:null,ViewListId:""}},created:function(){var e=Object(l["a"])(Object(r["a"])().mark((function e(){var t;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.userid=this.GetUserInfo.ID,this.usertype=this.GetUserInfo.UserType,this.privilegeParams="controller=CRM&action=",t=this,t.getStatuslistForListing("CRM","en"),e.next=7,S.GetVendorOwnerlist(t,"CRM","VENDOR_OWNER_SEARCH");case 7:return t.FetchData(),e.next=10,t.GetDdlRecords_ViewList();case 10:t.LegendArray=[{class:"bg-primary colorboxsquare",text:t.$t("ListingLegend",["Vendor"])}];case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{GetDdlRecords_ViewList:function(){var e=Object(l["a"])(Object(r["a"])().mark((function e(){var t,i;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this,t.ViewList=[],i="moduleName=CRM&subModuleCode=CRM_VENDORS&viewId=0&pageSize=100&pageNum=1&sortBy=&sortExp=",e.next=5,d["a"].GetViewList(i).then((function(e){e.data&&"undefined"!=typeof e.data.DATA&&(t.ViewList=e.data.DATA);var i=0;t.ViewListId="0",null==t.ViewList||""==t.ViewList||t.ViewList.forEach((function(e){e.IS_SLECTED_USER_ID>0&&(i+=1,t.ViewListId=e.VIEW_ID)}));var a=0;i>0?t.ViewList.splice(a,0,{SUB_MODULE_NAME:"",SUB_MODULE_CODE:"",VIEW_NAME:"Default View",VIEW_ID:0,IS_APPLICABLE_TO_ALL:1,MODULE_NAME:"",CREATED_AT:"",IS_SLECTED_USER_ID:0,CAN_EDIT:0,ROWNUMBER:0,VIEW_TYPE:"",USER_LIST:""}):null==t.ViewList||""==t.ViewList?t.ViewList.push({SUB_MODULE_NAME:"",SUB_MODULE_CODE:"",VIEW_NAME:"Default View",VIEW_ID:0,IS_APPLICABLE_TO_ALL:1,MODULE_NAME:"",CREATED_AT:"",IS_SLECTED_USER_ID:1,CAN_EDIT:0,ROWNUMBER:0,VIEW_TYPE:"",USER_LIST:""}):t.ViewList.splice(a,0,{SUB_MODULE_NAME:"",SUB_MODULE_CODE:"",VIEW_NAME:"Default View",VIEW_ID:0,IS_APPLICABLE_TO_ALL:1,MODULE_NAME:"",CREATED_AT:"",IS_SLECTED_USER_ID:1,CAN_EDIT:0,ROWNUMBER:0,VIEW_TYPE:"",USER_LIST:""}),setTimeout((function(){t.ViewListId>0?t.$refs.tgList.$refs.tgListHeaderButtons.ViewListId=t.ViewListId:t.$refs.tgList.$refs.tgListHeaderButtons.ViewListId="0"}),1e3)}));case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),DefaultView:function(){var e=this,t={ModuleName:"CRM",SubmoduleCode:"CRM_VENDORS"},i=JSON.stringify(t);d["a"].ClearView(i).then((function(t){null!=t.data&&("1"==t.data.code||"1"==t.data.Code)?(e.ShowAlert(e.$t("ClearSuccess",[e.$t("DefaultView")]),"success",!0,e.$t("Alert")),e.FetchData()):e.ShowAlert(e.$t("ErrorWhileProcessingRequest"),"failure",!0,e.$t("Alert"))}))},OnApplyView:function(e){var t=this;if("0"==e)t.DefaultView();else{var i={ViewId:e,ModuleName:"CRM",SubmoduleCode:"CRM_VENDORS"},a=JSON.stringify(i);d["a"].ApplyView(a).then((function(e){null!=e.data&&("1"==e.data.code||"1"==e.data.Code)?(t.ShowAlert(t.$t("ApplySuccess",[t.$t("View")]),"success",!0,t.$t("Alert")),t.$emit("RefreshManageView"),t.FetchData()):t.ShowAlert(t.$t("AddedError",[t.$t("View")]),"failure",!0,t.$t("Alert"))}))}},leftCommonSearch:function(e){this.PageNumber=e.PageNumber,this.isPaged=1,"undefined"!=typeof e.searchCondition?this.searchCondition=e.searchCondition:this.searchCondition="",this.FetchData()},renderActions:function(e){var t=this,i=[];return t.listActions.forEach((function(t){var a=Object(n["a"])({},t);switch(t.title){case"View":a.isVisible="Draft"!=e.status_id;break;case"Edit":a.isVisible="Cancelled"!=e.status_id&&"Closed"!=e.status_id;break;case"FollowUps":a.isVisible="Closed"!=e.status_id;break}i.push(a)})),i},sortdata:function(e){var t="sort tb_headerSortDown";this.SortBy=e,e===this.SortBy&&(""==this.SortExp?(this.SortExp="ASC",t="sort tb_headerSortDown"):"ASC"==this.SortExp?(this.SortExp="DESC",t="sort tb_headerSortUp"):(this.SortExp="ASC",t="sort tb_headerSortDown")),this.FetchData(),$("#"+e+"  span:first-child").attr("class",t)},pagerMethod:function(e){this.PageSize=e.PageSize,this.PageNumber=e.PageNumber,this.FetchData()},actionButtonClick:function(e,t,i,a){var o=this;switch(e){case"checkPrivilegeView":break;case"checkPrivilegeDetails":break;case"openAddNewEvent":o.openAddNewEvent(t.Order_id,t);break}},openAddNewEvent:function(e,t){var i=this;i.souceID=t.vendor_id,i.selectedItem=e,i.showAddEventModal=!i.showAddEventModal},closeEventViewModal:function(){this.showAddEventModal=!1},commonDeleteData:function(e){var t=this;d["a"].CheckPrivilege(t.privilegeParams+"DeleteVendor").then((function(e){if(e.data){var i="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){i.length>0&&(i+=","),i+=$(this).val()})),i.length>0?t.confirmR(t.$t("ConfirmDelete"),!0,t.$t("Delete")+"  "+t.$t("Vendor"),(function(){var e={ids:i,moduleName:"CRM",subModuleCode:"CRM_VENDORS"},a=JSON.stringify(e);d["a"].CommonDeleteData(a).then((function(e){var i="";200==e.status?($(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),$("#DeleteMultiple").addClass("disabled"),i=t.ShowAlert(t.$t("DeletedSuccess",[t.$t("Vendor")]),"success",!0,t.$t("Alert")),t.PageNumber=parseInt(t.PageNumber)-1,t.PageNumber<=0&&(t.PageNumber=1),t.FetchData()):i=t.ShowAlert(t.$t("DeletedError",[t.$t("Vendor")]),"failure",!0,t.$t("Alert")),setTimeout((function(){i.modal("hide")}),2e3)}))})):t.ShowAlert(t.$t("Selectanyrecordtodelete"))}else t.ShowAlert("You are not authorized","failure",!0,"Alert")}))},ManageView:function(){this.ShowManageView=!0;var e=this;setTimeout((function(){$("#modalManageView").modal("show"),setTimeout((function(){e.SetBootstraptoolTip()}),200)}),1e3)},FilterData:function(e,t,i,a,o,n){this.pageNum=e,this.pageSize=t,this.sortBy=i,this.sortExp=a,this.searchCondition=o,null!=Object(s["a"])(n)&&this.appliedFilter.push(n),this.FetchData()},openFilterPopUp:function(e){this.showFilter=!0},getStatuslistForListing:function(e,t){var i=this,a="langCode="+t+"&statusType="+e+"&hasglobal=true";d["a"].statusdropdown(a).then((function(e){if("Success"==e.data.status){var t=e.data.result;i.StatusListForListing=t.data}}))},commonHeaderButtonClick:function(e){switch(e.callbackfunction){case"downloadExceldata":this.FetchData(!0);break;case"ManageView":this.ManageView();break;case"openFilterPopUp":this.openFilterPopUp();break;case"downloadExceldata":this.FetchData(!0);break;case"commonDeleteData":this.commonDeleteData();break;case"removeFilter":var t=this;this.searchCondition="";var i=t.listheaderbuttons.findIndex((function(e){return"removeFilter"===e.callbackfunction}));t.listheaderbuttons[i].isvisible=!1;var a=t.listheaderbuttons.findIndex((function(e){return"openFilterPopUp"===e.callbackfunction}));t.listheaderbuttons[a].iconClass="fa fa-filter";try{t.appliedFilter=[]}catch(o){}t.FetchData();break}},clickEventOfColumn:function(e,t){"vendor_name"==t.COLUMN_NAME&&this.$router.push({path:"/CRM/ViewVendorDetails/"+e.vendor_id+"/CRM/CRM_VENDORS"})},getRequestParams:function(e,t,i,a,o,s){var n={};return e&&(n["pageNum"]=e),s&&(n["searchcondition"]=s),o&&(n["isPaged"]=o),i&&(n["sortBy"]=i),a&&(n["sortExp"]=a),t&&(n["pageSize"]=t),n},FetchData:function(e){var t=this.getRequestParams(this.pageNumber,this.pageSize,this.sortBy,this.sortExp,this.isPaged,this.searchcondition),i=this;i.isLoading=!0,t.pageSize=e?i.TotalRecords:i.PageSize,t.pageNumber=i.PageNumber,t.searchCondition=i.searchCondition,i.PageNumber?t.pageNum=i.PageNumber:i.PageNumber=t.pageNum=1,"undefined"!=typeof i.isPaged?t.isPaged=i.isPaged:i.isPaged=t.isPaged=1,t.isPaged=i.isPaged,t.sortBy=i.SortBy,t.sortExp=i.SortExp;var a="";if(i.isBlank(this.searchCondition)||(a+=i.searchCondition),i.isBlank(this.conditionForInstantSearch)||(a+=i.isBlank(i.searchCondition)?i.conditionForInstantSearch:" AND "+i.conditionForInstantSearch),""!=a){if(t.searchCondition=a,i.appliedFilter.length>0){var o=i.listheaderbuttons.findIndex((function(e){return"removeFilter"===e.callbackfunction}));i.listheaderbuttons[o].isvisible=!0;var s=i.listheaderbuttons.findIndex((function(e){return"openFilterPopUp"===e.callbackfunction}));i.listheaderbuttons[s].iconClass="fa fa-filter text-success"}}else if(0==i.appliedFilter.length){var n=i.listheaderbuttons.findIndex((function(e){return"removeFilter"===e.callbackfunction}));i.listheaderbuttons[n].isvisible=!1;var r=i.listheaderbuttons.findIndex((function(e){return"openFilterPopUp"===e.callbackfunction}));i.listheaderbuttons[r].iconClass="fa fa-filter"}e?(t.isPaged=0,d["a"].VendorListing(t).then((function(e){i.isLoading=!1,null!=e.data?i.JSONToCSVConvertor(e.data,"Vendor-Detail",!0):i.ModelnoRecord=!0}))):d["a"].VendorListing(t).then((function(e){null!=e.data?(i.isLoading=!1,i.Headers=e.data.schema,i.Headers.forEach((function(e){e.DISPLAY_NAME=i.$t(e.DISPLAY_NAME?e.DISPLAY_NAME:e.COLUMN_NAME),e.settings=null,"vendor_name"==e.COLUMN_NAME&&(e.settings={clickEvent:i.clickEventOfColumn,formatter:i.columnDataFormatter}),"status_id"==e.COLUMN_NAME&&(e.settings={isInSlot:!0})})),e.data.data.length>0?(i.VendorData=e.data.data,i.VendorData.forEach((function(e){e.isCheckBoxDisabled=!1,e.additionalClass="","Closed"==e.status_id&&(e.additionalClass="medium-bar",e.isCheckBoxDisabled=!0),e.rowDetailsUrl="",""==e.rowDetailsUrl&&(e.rowDetailsUrl="/CRM/ViewVendorDetails/"+e.vendor_id+"/CRM/CRM_VENDORS")})),i.TotalRecords=e.data.data[0].total_records,i.TotalPages=Math.ceil(i.TotalRecords/i.PageSize),i.CurrentPage=i.PageNumber,i.GetDdlRecords_ViewList(),$("[id^='chkAll']").prop("checked",!1).removeAttr("checked"),$(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),i.noRecord=!1):(i.noRecord=!0,i.VendorData=[],i.TotalRecords=0)):(i.noRecord=!0,i.VendorData=[],i.Headers=[],i.TotalRecords=0),"true"==$(".bottom_filter_button").children().attr("aria-expanded")&&$(".bottom_filter_button").children().click()}))}}},_=D,m=i("2877"),b=Object(m["a"])(_,a,o,!1,null,null,null);t["default"]=b.exports}}]);
//# sourceMappingURL=CRMVendor.js.map