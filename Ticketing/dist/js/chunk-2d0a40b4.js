(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a40b4"],{"0581":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("tg-list",{directives:[{name:"show",rawName:"v-show",value:t.IsChainView,expression:"IsChainView"}],attrs:{IsShowAction:!1,ModuleName:"Ticketing",SubModuleCode:"",IdentityColumn:"ticketChainId",HeaderText:t.$t("TicketServiceBoard"),LegendArray:[],RenderRowActionMethod:()=>{},widgets:[],listType:["List"],ListData:t.ChainListing,HeaderData:t.Headers,HeaderButtons:t.listheaderbuttons,TotalRecords:t.TotalRecords,SearchFields:t.leftSearchFields,ListDataCallBackFunction:t.FetchData,showCheckBox:!0,SortExp:t.SortExp,SortBy:t.SortBy,NorecordfoundText:t.$t("NoRecordfound")},on:{LeftsearchButtonClick:t.leftCommonSearch,PagerButtonClick:t.pagerMethod,HeaderButtonClick:t.commonHeaderButtonClick,SortdataButtonClick:t.sortdata},scopedSlots:t._u([{key:"slotdata",fn:function({data:a}){return["statusId"==a.column.COLUMN_NAME?[t.isCRMShowStausDrop(a.row.statusId,"Ticketing")?e("listing-status",{ref:"updatestatus",attrs:{isfor:"chain",dataid:a.row.ticketChainId,"data-controller":"Crm",statuslist:t.StatusListForListing,item:a.statusId,"data-action":"index",dataselected:1001==a.row.statusId?"Active":"Inactive",callbackfunction:t.FetchData,isselectedvaluestring:!0}}):t._e(),t.isCRMShowStausDrop(a.row.statusId,"Ticketing")?t._e():e("a",{staticClass:"inactive-disabled"},[e("span",{class:t.getStatusClass(a.row.statusId,"status_id")},[t._v(" "+t._s(a.row[a.column.COLUMN_NAME])+" ")])])]:t._e(),"ticketChainName"==a.column.COLUMN_NAME?[e("RouterLink",{attrs:{to:"/Ticketing/AddChain/"+a.row.ticketChainId,title:a.row[a.column.COLUMN_NAME],"data-toggle-tooltip":"tooltip","data-original-title":"Click here to edit Ticketing Group"}},[t._v(" "+t._s(a.row[a.column.COLUMN_NAME])+" ")])]:t._e()]}}])})},s=[];a("14d9");let o=[{title:"Page Tour",iconClass:"fa fa-road",callbackfunction:"setTourGuideSteps",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!0,id:"Addtour"},{title:"Add Ticket Service Board",iconClass:"fa fa-plus",callbackfunction:"openaddTicketGroup",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!0,id:"AddGroup",isEnabledOnSelectedRow:!0},{id:"Active",title:"Active",iconClass:"fa fa-check",callbackfunction:"updateStatus",isdisabled:!0,isvisible:!0,isEnabledOnSelectedRow:!0},{id:"Inactive",title:"Inactive",iconClass:"fa fa-close",callbackfunction:"updateStatus",isdisabled:!0,isvisible:!0,isEnabledOnSelectedRow:!0},{id:"DeleteMultiple",title:"Delete",iconClass:"fa-trash-o",callbackfunction:"commonDeleteData",isdisabled:!0,isvisible:!0,isEnabledOnSelectedRow:!0}],c=[{fieldName:"Search",fieldType:"text",fieldIcon:"fa fa-map-marker",fieldSearchConditionName:[""],paramName:"search",isSearch:!1,value:"",listOptions:[]}];var n={buttons:o,leftsearchSchema:c},r=a("9769"),d={data(){return{ChainListing:[],TotalRecords:0,PageNumber:1,PageSize:10,SortBy:"",SortExp:"",Headers:[{COLUMN_NAME:"ticketChainName",DATA_TYPE:"string",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Ticket Service Board Name",DISPLAY_ORDER:1},{COLUMN_NAME:"groupsAndLevel",DATA_TYPE:"string",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Level",DISPLAY_ORDER:2},{COLUMN_NAME:"groupsAndLevel",DATA_TYPE:"string",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Group Name",DISPLAY_ORDER:3},{COLUMN_NAME:"statusId",DATA_TYPE:"string",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"status",DISPLAY_ORDER:4}],listheaderbuttons:n.buttons,leftSearchFields:n.leftsearchSchema,noRecord:!1,StatusListForListing:[{STATUS:"Active",STATUS_ID:1001,STATUS_COLOR:"#ffffff",STATUS_BG_COLOR:"#28a745"},{STATUS:"Inactive",STATUS_ID:1002,STATUS_COLOR:"#ffffff",STATUS_BG_COLOR:"#d72435"}],search:"",groupType:"",IsChainView:!0,user_id:null,companyId:null}},created:async function(){this.user_id=this.GetUserInfo.ID,this.user_type=this.GetUserInfo.UserType,this.companyId=this.GetUserInfo.CompanyId,await this.FetchData()},methods:{paramsToObject(t){const e={};for(const[a,i]of t)e[a]=i;return e},leftCommonSearch:function(t){this.PageNumber=t.PageNumber,this.isPaged=1,"undefined"!=typeof t.searchCondition?this.searchCondition=t.searchConditionJson:this.searchCondition="",this.FetchData()},pagerMethod:function(t){this.PageSize=t.PageSize,this.PageNumber=t.PageNumber,this.FetchData()},FetchData:async function(){var t=this,e=`pageSize=${t.PageSize}&pageNum=${t.PageNumber}&sortBy=${t.SortBy}&sortExp=${t.SortExp}&${t.searchCondition}`;await r["a"].GetTicketChainList(e).then((function(e){""!=e.data&&null!=e.data?(t.Headers.forEach(t=>{t.settings=null,"statusId"==t.COLUMN_NAME&&(t.settings={isInSlot:!0}),"ticketChainName"==t.COLUMN_NAME&&(t.settings={isInSlot:!0})}),e.data.length>0?(t.ChainListing=e.data,t.TotalRecords=e.data[0].totalRecords,t.listheaderbuttons[1].isdisabled=!0,t.listheaderbuttons[2].isdisabled=!0,t.listheaderbuttons[3].isdisabled=!0,t.TotalPages=Math.ceil(t.TotalRecords/t.PageSize),t.CurrentPage=t.PageNumber,t.noRecord=!1,t.IsLoad=!0):(t.noRecord=!0,t.ChainListing=[],t.TotalRecords=0)):(t.noRecord=!0,t.ChainListing=[],t.TotalRecords=0),setTimeout((function(){t.ResponsiveDataTable("tablelistingdata")}),500)}))},commonHeaderButtonClick:function(t){switch(t.callbackfunction){case"openaddTicketGroup":this.openaddTicketGroup();break;case"setTourGuideSteps":this.setTourGuideSteps(0);break;case"commonDeleteData":this.commonDeleteData();break;case"updateStatus":this.UpdateStatus(t.id);break}},openaddTicketGroup:function(){var t=this;t.$router.push({name:"AddServiceBoard",params:{id:0}})},sortdata:function(t){this.SortBy=t;var e="ASC";"ASC"==this.SortExp&&(e="DESC"),this.SortExp=e,this.SortBy=t,this.SortExp=e,this.PageNumber=1,this.GroupStart=this.PageNumber,this.GroupEnd=this.PageNumber+2,this.FetchData()},getStatusClass:function(t){var e="";switch(t){case"Active":e="px-2 text-center bg-success text-white d-block";break;case"Inactive":e="px-2 text-center bg-danger text-white d-block";break;default:e=""}return e},commonDeleteData:function(t){var e=this,a="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){a.length>0&&(a+=","),a+=$(this).val()})),a.length>0?e.confirmR(e.$t("ConfirmDelete"),!0,e.$t("Delete")+"  "+e.$t("Ticketing Service Board"),(function(){var t={ids:a,companyId:e.companyId,userId:e.user_id,moduleName:"ticketing",refCode:"TALYGEN_ticket_chains"},i=JSON.stringify(t);r["a"].deleteActivityData(i).then(t=>{"Success"==t.data[0].Status?(e.FetchData(),setTimeout((function(){e.ShowAlert(e.$t("DeletedSuccess",[e.$t("TicketingServiceBoard")]),"Success",!0,e.$t("Alert"))}),500)):e.ShowAlert(e.$t("DeletedError",[e.$t("TicketingServiceBoard")]),"failure",!0,e.$t("Alert"))})})):e.ShowAlert(e.$t("Selectanyrecordtodelete"))},UpdateStatus:async function(t){var e=this;t="Active"==t?1001:1002;var a="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){a.length>0&&(a+=","),a+=$(this).val()})),a.length>0&&e.confirmR(e.$t("ConfirmActiveInactiveStatus"),!0,e.$t("Active")+"  "+e.$t("Inactive"),(function(){var i=`id=${a}&statusId=${t}&isFor=chain`;r["a"].updatestatus(i).then(t=>{1==t.data&&($(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),e.ShowAlert(e.$t("UpdatedSuccess",[e.$t("Status")]),"success",!0,e.$t("Alert")),e.FetchData())})}))}}},l=d,u=a("2877"),h=Object(u["a"])(l,i,s,!1,null,null,null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d0a40b4.js.map