(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7485ce7b"],{"57a2d":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("section",[e("loader",{attrs:{"is-visible":t.isLoading}}),e("tg-list",{attrs:{IsShowAction:"false",ModuleName:"Dynamic_Reporting",SubModuleCode:"Dynamic_Reporting",IdentityColumn:"Report_emailId",HeaderText:"Scheduled Report History",ListData:t.HistoryData,HeaderData:t.Headers,HeaderButtons:t.listheaderbuttons,TotalRecords:t.TotalRecords,SearchFields:t.leftSearchFields,IsShowCheckbox:"false",NorecordfoundText:t.$t("NoRecordfound")},on:{LeftsearchButtonClick:t.leftCommonSearch,PagerButtonClick:t.pagerMethod,HeaderButtonClick:t.commonHeaderButtonClick},scopedSlots:t._u([{key:"slotdata",fn:function({data:a}){return["Status"==a.column.COLUMN_NAME?["PENDING"==a.row.Status||"Pending"==a.row.Status?e("span",{staticClass:"px-2 bg-secondary text-center text-white d-block",attrs:{title:""}},[t._v(t._s(a.row.Status))]):"DONE"==a.row.Status||"Done"==a.row.Status?e("span",{staticClass:"px-2 bg-success text-center text-white d-block",attrs:{title:""}},[t._v(t._s(a.row.Status))]):"IN PROGRESS"==a.row.Status||"In Progress"==a.row.Status?e("span",{staticClass:"px-2 bg-warning text-center text-white d-block",attrs:{title:""}},[t._v(t._s(a.row.Status))]):e("span",{staticClass:"px-2 text-center text-black d-block",attrs:{title:""}},[t._v(" "+t._s(a.row.Status))])]:t._e(),["Download"==a.column.COLUMN_NAME?e("a",{attrs:{href:a.row.Download,download:"",title:a.row.Download}},[e("em",{class:{"fa fa-download action-icon text-success ml-5":!0,disabled:null==a.row.Download||""==a.row.Download}})]):t._e()],"Req_From"==a.column.COLUMN_NAME?[t._v(" "+t._s(t.$data(a.row.Req_From))+" ")]:t._e()]}}])})],1)},s=[],i=(a("14d9"),a("9769"));let n=[{id:"BackToList",title:"Back",iconClass:"fa fa-angle-double-left",callbackfunction:"BackToMainList",isvisible:!0}],r=[{fieldName:"Report Name",fieldType:"text",fieldIcon:"fa-file",paramName:"REPORTNAME",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]}];var c={leftsearchSchema:r,buttons:n},l={data(){return{isLoading:!1,HistoryData:[],listheaderbuttons:c.buttons,leftSearchFields:c.leftsearchSchema,TotalRecords:0,SortBy:"",SortExp:"",PageNumber:1,PageSize:10,searchCondition:"",Headers:[{COLUMN_NAME:"ReportName",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Report Name",DISPLAY_ORDER:1},{COLUMN_NAME:"Req_From",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Request From",DISPLAY_ORDER:2},{COLUMN_NAME:"Send_To",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Send To",DISPLAY_ORDER:3},{COLUMN_NAME:"Created_by",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Created By",DISPLAY_ORDER:4},{COLUMN_NAME:"Created_on",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Created At",DISPLAY_ORDER:5},{COLUMN_NAME:"Status",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Status",DISPLAY_ORDER:6},{COLUMN_NAME:"Download",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Download",DISPLAY_ORDER:7}]}},created:async function(){var t=this;t.Headers.forEach(t=>{t.settings=null,"Status"!=t.COLUMN_NAME&&"Download"!=t.COLUMN_NAME||(t.settings={isInSlot:!0})}),await t.FetchData()},methods:{FetchData:async function(){var t=this;t.isLoading=!0;const e=t.getRequestParams(this.pageNumber,this.pageSize,this.sortBy,this.sortExp,this.isPaged,this.searchCondition);e.pageSize=t.PageSize,e.pageNumber=t.PageNumber,""!=t.searchCondition&&(e.ReportName=$(".search").val()),t.PageNumber?e.pageNumber=t.PageNumber:t.PageNumber=e.pageNumber=1,await i["a"].GetScheduleReportHistoryListing(e).then((function(e){e.data.Data.length>0&&e.data.Data!=[]?(t.HistoryData=e.data.Data,t.TotalRecords=e.data.Data[0].Total_Record):(t.HistoryData=[],t.TotalRecords=0),t.isLoading=!1}),(function(e){console.log("Error during API hitting: ",e.message),t.TotalRecords=0,t.isLoading=!1})),setTimeout((function(){t.ResponsiveDataTable("tablelistingdata")}),500)},leftCommonSearch:async function(t){var e=this;e.PageNumber=t.PageNumber,e.isPaged=1,"undefined"!=typeof t.searchCondition?e.searchCondition=t.searchCondition:e.searchCondition="",await e.FetchData()},pagerMethod:async function(t){var e=this;e.PageSize=t.PageSize,e.PageNumber=t.PageNumber,await e.FetchData()},commonHeaderButtonClick:async function(t){var e=this;switch(t.callbackfunction){case"BackToMainList":e.BackToMainList();break}},BackToMainList:function(){var t=this;t.$router.push({name:"EmailScheduleListing"})},getRequestParams:function(t,e,a,o,s,i){let n={};return t&&(n["pageNumber"]=t),i&&(n["searchcondition"]=i),s&&(n["is_paged"]=s),a&&(n["sortBy"]=a),o&&(n["sortExp"]=o),e&&(n["pageSize"]=e),n}}},d=l,u=a("2877"),S=Object(u["a"])(d,o,s,!1,null,null,null);e["default"]=S.exports}}]);
//# sourceMappingURL=chunk-7485ce7b.js.map