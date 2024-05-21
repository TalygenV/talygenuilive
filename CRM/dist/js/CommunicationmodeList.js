(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CommunicationmodeList"],{"02c6":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-12 p-0 listing"},[a("loader",{attrs:{"is-visible":t.isLoading}}),a("tg-list",{attrs:{IsShowAction:!1,showCheckBox:!0,ModuleName:"CRM",SubModuleCode:"CRM_COMMUNICATION_MODES",IdentityColumn:"modeTypeId",HeaderText:t.$t("CommunicationModes"),ListData:t.CommunicationModesData,HeaderData:t.Headers,HeaderButtons:t.listHeaderButtons,TotalRecords:t.TotalRecords,ListDataCallBackFunction:t.FetchData,SearchFields:t.leftSearchFields,IsFilterApplied:!!t.searchCondition,SortExp:t.SortExp,SortBy:t.SortBy,NorecordfoundText:t.$t("NoRecordfound"),RenderRowActionMethod:t.renderActions},on:{LeftsearchButtonClick:t.SearchMode,PagerButtonClick:t.pagerMethod,HeaderButtonClick:t.commonHeaderButtonClick,SortdataButtonClick:t.sortdata},scopedSlots:t._u([{key:"slotdata",fn:function(e){var s=e.data;return["status"==s.column.COLUMN_NAME?[t.isCRMShowStausDrop(s.row.status_id,"CRM_COMMUNICATION_MODES")?a("listing-status",{ref:"updatestatus",attrs:{isfor:"CRM_COMMUNICATION_MODES",dataid:s.row.modeTypeId,"data-controller":"Crm",statuslist:t.StatusListForListing,item:s.row,"data-action":"index",dataselected:s.row.status,callbackfunction:t.FetchData,isselectedvaluestring:!0}}):t._e(),t.isCRMShowStausDrop(s.row.status_id,"CRM_COMMUNICATION_MODES")?t._e():a("a",{staticClass:"inactive-disabled"},[a("span",{class:t.getStatusClass(s.row.status_id,"STATUS_ID")},[t._v(" "+t._s(s.row[s.column.COLUMN_NAME])+" ")])])]:t._e()]}}])})],1)},i=[],o=(a("ac1f"),a("841c"),a("d3b7"),a("159b"),a("c740"),a("1276"),a("9769")),n=[{title:"Add",iconClass:"fa-plus",href:"/CRM/ManageCommunicationModes/0/No",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!0},{id:"Active",title:"Active",iconClass:"fa fa-check",callbackfunction:"BulkStatusUpdate(1001)",isdisabled:!0,isvisible:!0,isEnabledOnSelectedRow:!0},{id:"Inactive",title:"Inactive",iconClass:"fa fa-close",callbackfunction:"BulkStatusUpdate(1002)",isdisabled:!0,isvisible:!0,isEnabledOnSelectedRow:!0},{id:"DeleteMultiple",title:"Delete",iconClass:"fa-trash-o",callbackfunction:"commonDeleteData",isdisabled:!0,isvisible:!0,isEnabledOnSelectedRow:!0}],r=[{id:"Search",iconClass:"fa fa-search",callbackfunction:"Search",isdisabled:!0,isvisible:!0},{id:"Refresh",iconClass:"fa fa-refresh",callbackfunction:"RefreshSearch",isdisabled:!0,isvisible:!0}],c=[{fieldName:"Name",fieldIcon:"fa fa-search",fieldType:"text",isSearch:!1,isvisible:!0,isdisabled:!1,value:"",callbackfunction:"SearchMode",fieldSearchConditionName:["Name"]}],l={buttons:n,Searchfieldbuttons:r,leftSearchSchema:c},d={data:function(){return{CommunicationModesData:"",isLoading:!1,listHeaderButtons:l.buttons,listActions:l.listActions,userid:null,TotalRecords:null,usertype:null,PageNumber:1,PageSize:10,SortBy:"",searchCondition:"",SortExp:"",PageSizeOption:null,CurrentPage:1,TotalPages:0,noRecord:!1,leftSearchFields:l.leftSearchSchema,StatusListForListing:[{STATUS:"Active",STATUS_ID:1001,STATUS_BG_COLOR:"#28a745",STATUS_COLOR:"#FFFFFF"},{STATUS:"Inactive",STATUS_ID:1002,STATUS_BG_COLOR:"#bf4b4b",STATUS_COLOR:"#FFFFFF"}],Headers:[{COLUMN_NAME:"communicationTypeName",DATA_TYPE:"string",DT_CODE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_ORDER:1,DISPLAY_NAME:"Name",settings:{clickEvent:this.clickEventOfColumn}},{COLUMN_NAME:"communicationTypeDescription",DATA_TYPE:"string",DT_CODE:"textarea",SORTABLE:!0,VISIBLE:!0,DISPLAY_ORDER:2,DISPLAY_NAME:"Description"},{COLUMN_NAME:"status",DATA_TYPE:"select",DT_CODE:"select",SORTABLE:!0,VISIBLE:!0,DISPLAY_ORDER:3,DISPLAY_NAME:"Status",settings:{isInSlot:!0}}]}},created:function(){this.userid=this.GetUserInfo.ID,this.usertype=this.GetUserInfo.UserType;var t=this;t.FetchData()},methods:{renderActions:function(){},leftCommonSearch:function(t){this.PageNumber=t.PageNumber,this.isPaged=1,"undefined"!=typeof t.searchCondition?this.searchCondition=t.searchCondition:this.searchCondition="",this.FetchData()},getRequestParams:function(t,e,a,s,i){var o={};return t&&(o["search"]=t),e&&(o["pageSize"]=e),a&&(o["pageNum"]=a),s&&(o["sortBy"]=s),s&&(o["sortBy"]=s),o},clickEventOfColumn:function(t,e){"communicationTypeName"==e.COLUMN_NAME&&this.$router.push({path:"/CRM/ManageCommunicationModes/"+t.modeTypeId+"/yes"})},FetchData:function(){var t=this.getRequestParams(this.search,this.pageSize,this.pageNum,this.sortBy,this.sortExp),e=this;this.isLoading=!0,t.pageSize=e.PageSize,t.pageNum=e.PageNumber,t.search="",e.PageNumber?t.pageNum=e.PageNumber:e.PageNumber=t.pageNum=1,t.sortBy=e.SortBy,t.sortExp=e.SortExp,o["a"].GetCommunicationModesList(t).then((function(t){e.isLoading=!1,""!=t.data&&null!=t.data?t.data.result.length>0?(e.CommunicationModesData=t.data.result,e.CommunicationModesData.forEach((function(t){t.rowDetailsUrl="",""==t.rowDetailsUrl&&(t.rowDetailsUrl="/CRM/ManageCommunicationModes/"+t.modeTypeId+"/yes")})),e.TotalRecords=t.data.result[0].total,e.TotalPages=Math.ceil(t.data.result[0].total/e.PageSize),e.CurrentPage=e.PageNumber,e.listHeaderButtons[1].isdisabled=!0,e.listHeaderButtons[2].isdisabled=!0,e.listHeaderButtons[3].isdisabled=!0,e.noRecord=!1):(e.noRecord=!0,e.CommunicationModesData=[],e.TotalRecords=0):(e.noRecord=!0,e.CommunicationModesData=[],e.Headers=[],e.TotalRecords=0),e.isLoading=!1}))},pagerMethod:function(t){this.PageSize=t.PageSize,this.PageNumber=t.PageNumber,this.FetchData()},sortdata:function(t){var e="sort tb_headerSortDown";this.SortBy=t,t===this.SortBy&&(""==this.SortExp?(this.SortExp="ASC",e="sort tb_headerSortDown"):"ASC"==this.SortExp?(this.SortExp="DESC",e="sort tb_headerSortUp"):(this.SortExp="ASC",e="sort tb_headerSortDown")),this.FetchData(),$("#"+t+"  span:first-child").attr("class",e)},commonHeaderButtonClick:function(t){switch(t.callbackfunction){case"commonDeleteData":this.commonDeleteData();break;case"BulkStatusUpdate(1001)":this.BulkStatusUpdate(1001);break;case"BulkStatusUpdate(1002)":this.BulkStatusUpdate(1002);break}},commonDeleteData:function(t){var e=this,a="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){a.length>0&&(a+=","),a+=$(this).val()}));var s="";a.length>0?e.confirmR(e.$t("ConfirmDelete"),!0,e.$t("Delete")+"  "+e.$t("CommunicationModes"),(function(){s+=a+",",o["a"].CommunicationModesDelete("?ids="+s).then((function(t){"success"==t.data?(e.ShowAlert(e.$t("DeletedSuccessfully",[e.$t("CommunicationModes")]),"success",!0,e.$t("Alert")),e.PageNumber=parseInt(e.PageNumber)-1,e.PageNumber<=0&&(e.PageNumber=1),e.FetchData()):e.ShowAlert(e.$t("DeletedError",[e.$t("CommunicationModes")]),"failure",!0,e.$t("Alert"))}))})):e.ShowAlert(e.$t("Selectanyrecordtodelete"),"warning",!0,e.$t("Alert"))},DrpdownUpdataStatus:function(t,e){var a=this,s="?id="+t+"&statusId="+e;o["a"].CommunicationModesUpdateStatus(s).then((function(t){"success"==t.data.status?(a.FetchData(),alert(a.$t("DeletedSuccess"),a.$t("CommunicationModes"))):alert(a.$t("DeletedError"),a.$t("CommunicationModes"))}))},BulkStatusUpdate:function(t){var e=this,a="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){a.length>0&&(a+=","),a+=$(this).val()}));var s="";a.length>0?e.confirmR(e.$t("StatusChange"),!0,e.$t("CommunicationModes"),(function(){s+=a+",";var i="?id="+s+"&statusId="+t;o["a"].CommunicationModesUpdateStatus(i).then((function(t){var a="";"success"==t.data.status?(e.FetchData(),a=e.ShowAlert(e.$t("StatusChangeSuccess"))):a=e.ShowAlert(e.$t("StatusChangeError")),setTimeout((function(){a.modal("hide")}),2e3)}))})):e.ShowAlert(e.$t("Selectanyrecordtodelete"),"warning",!0,e.$t("Alert"))},SearchMode:function(t){var e=""!=t.searchCondition?t.searchCondition.split("%")[1].split("%")[0]:t.searchCondition="",a=this.getRequestParams(this.search,this.pageSize,this.pageNum,this.sortBy,this.sortExp),s=this;this.isLoading=!0,a.pageSize=s.PageSize,a.pageNum=s.PageNumber,a.search=e,s.PageNumber?a.pageNum=s.PageNumber:s.PageNumber=a.pageNum=1,a.sortBy=s.SortBy,a.sortExp=s.SortExp,o["a"].GetCommunicationModesList(a).then((function(t){s.isLoading=!1,200==t.status?(s.CommunicationModesData=t.data.result,s.TotalRecords=t.data.result.length,s.TotalPages=Math.ceil(s.TotalRecords/s.PageSize),s.CurrentPage=s.PageNumber,s.noRecord=!1):(s.noRecord=!0,s.CommunicationModesData=[],s.TotalRecords=0)}))},RefreshSearch:function(t){this.FetchData()}}},u=d,h=a("2877"),m=Object(h["a"])(u,s,i,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=CommunicationmodeList.js.map