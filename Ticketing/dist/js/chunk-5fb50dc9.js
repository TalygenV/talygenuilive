(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fb50dc9"],{"3b29":function(t,e,a){var i=a("ee99");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("499e").default;o("2dad018b",i,!0,{sourceMap:!1,shadowMode:!1})},ee99:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".textstyle{color:#007bff;text-decoration:none;background-color:transparent}",""]),t.exports=e},fe06:function(t,e,a){"use strict";a("3b29")},ffb3:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("section",[e("loader",{attrs:{"is-visible":t.isLoading}}),e("tg-list",{attrs:{IsShowAction:!1,ModuleName:"Ticketing",SubModuleCode:"CANNED_REPLY",RenderRowActionMethod:t.renderActions,IdentityColumn:"ArticleId",HeaderText:t.$t("Header_KB"),ListData:t.SAData,HeaderData:t.Headers,HeaderButtons:t.listheaderbuttons,TotalRecords:t.TotalRecords,SearchFields:t.leftSearchFields,ListDataCallBackFunction:t.FetchData,showCheckBox:!1,SortExp:t.SortExp,SortBy:t.SortBy,NorecordfoundText:t.$t("NoRecordfound")},on:{ActionButtonClick:t.actionButtonClick,LeftsearchButtonClick:t.leftCommonSearch,PagerButtonClick:t.pagerMethod,HeaderButtonClick:t.commonHeaderButtonClick,SortdataButtonClick:t.sortdata},scopedSlots:t._u([{key:"slotdata",fn:function({data:a}){return["View"==a.column.COLUMN_NAME?[e("td",{staticClass:"text-center single-action"},[e("span",[e("em",{staticClass:"fa fa-file-text-o",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"noti-circle noti-green"},[t._v(t._s(a.row.NoOfViews))])])])]:t._e(),"CreatedDate"==a.column.COLUMN_NAME?[e("td",{staticClass:"text-center single-action tourguide_a"},[t._v(" "+t._s(t.$options.filters.formatDate(a.row.CreatedDate))+" ")])]:t._e()]}}])})],1)},o=[],s=(a("14d9"),a("9769"));let n=[{title:"Add",iconClass:"fa fa-plus",callbackfunction:"callAdd",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!0,id:"AddPolicy"}],r=[{fieldName:"Category",fieldType:"radio",fieldIcon:"fa fa-envelope",fieldSearchConditionName:[""],paramName:"categoryId",isSearch:!1,value:"",listOptions:[]},{fieldName:"Search By Keyword",fieldType:"text",fieldIcon:"fa fa-envelope",fieldSearchConditionName:[""],paramName:"search",isSearch:!1,value:"",listOptions:[]}];async function c(t,e,a){var i=this;"Category"==a&&s["a"].GetCategoryDDL().then(t=>{if(t.data.result.length>0){var e=t.data.result;i.leftsearchSchema[0].listOptions=[],e.forEach(t=>{if(null==t.TICKET_ARTICLE_CATEGORY_PARENT){let e={name:t.TICKET_ARTICLE_CATEGORY_NAME,value:t.TICKET_ARTICLE_CATEGORY_ID};i.leftsearchSchema[0].listOptions.push(e)}})}})}var d={buttons:n,leftsearchSchema:r,bindleftCommonSearchdropdown:c},l={data(){return{isLoading:!1,IsAddCannedReply:!1,listheaderbuttons:d.buttons,leftSearchFields:d.leftsearchSchema,Headers:[{COLUMN_NAME:"ArticleName",DATA_TYPE:"string",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Title",DISPLAY_ORDER:1},{COLUMN_NAME:"Author",DATA_TYPE:"string",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Author",DISPLAY_ORDER:2},{COLUMN_NAME:"CategoryName",DATA_TYPE:"string",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Category",DISPLAY_ORDER:2},{COLUMN_NAME:"View",DATA_TYPE:"string",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"View",DISPLAY_ORDER:2,settings:{isInSlot:!0}},{COLUMN_NAME:"CreatedDate",DATA_TYPE:"string",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Date",DISPLAY_ORDER:2,settings:{isInSlot:!0}}],SAData:[],SortBy:"",SortExp:"",TotalRecords:0,PageNumber:1,PageSize:10,searchCondition:"",TemplateId:null}},created:async function(){await d.bindleftCommonSearchdropdown(this,"Ticketing","Category"),this.FetchData()},methods:{FetchData:function(){var t=this;t.isLoading=!0;var e=`sortBy=${t.SortBy}&sortExp=${t.SortExp}&pageSize=${t.PageSize}&pageNumber=${t.PageNumber}&${t.searchCondition}`;s["a"].GetKnowledgeBaseList(e).then(e=>{if("Success"===e.data.status){if(e.data.result.data.length>0){var a=[],i={};for(var o in t.SAData=[],e.data.result.data.forEach((function(t){var e=""+t.TICKET_ARTICLE_CATEGORY_NAME;i[e]||(i[e]={CategoryName:t.TICKET_ARTICLE_CATEGORY_NAME,ArticleCount:0,CategoryId:t.TICKET_ARTICLE_CATEGORY_ID,ArticlesList:[]}),i[e].ArticleCount++,i[e].ArticlesList.push({CategoryId:t.TICKET_ARTICLE_CATEGORY_ID,CategoryName:t.TICKET_ARTICLE_CATEGORY_NAME,ArticleId:t.TICKET_ARTICLE_ID,ArticleName:t.TICKET_ARTICLE_TITLE,ArticleData:t.TICKET_ARTICLE_DESC,NoOfViews:t.NO_OF_VIEWS,KeyWords:t.TICKET_ARTICLE_KEYWORDS,Author:t.Author,CreatedDate:t.CREATED_AT})})),i)a.push(i[o]);a.forEach((function(e){e.ArticlesList.forEach((function(e){t.SAData.push(e)}))}))}t.isLoading=!1,t.TotalRecords=t.SAData.length,t.TotalPages=Math.ceil(t.TotalRecords/t.PageSize),t.CurrentPage=t.PageNumber}})},commonHeaderButtonClick:function(t){switch(t.callbackfunction){case"callAdd":this.CreateArticle();break}},CreateArticle:function(){this.$router.push({name:"CreateArticle",params:{id:0}})},renderActions:function(){},pagerMethod:function(t){this.PageSize=t.PageSize,this.PageNumber=t.PageNumber,this.FetchData()},leftCommonSearch:function(t){this.PageNumber=t.PageNumber,this.isPaged=1,"undefined"!=typeof t.searchConditionJson?this.searchCondition=t.searchConditionJson:this.searchCondition="",this.FetchData()},actionButtonClick:function(){},sortdata:function(t){this.SortBy=t;var e="ASC";"ASC"==this.SortExp&&(e="DESC"),this.SortExp=e,this.SortBy=t,this.SortExp=e,this.PageNumber=1,this.GroupStart=this.PageNumber,this.GroupEnd=this.PageNumber+2,this.FetchData()},openaddCannedReply:function(){this.TemplateId=this.TemplateId,this.IsAddCannedReply=!0},EditCannedReply:function(t){this.TemplateId=t,this.IsAddCannedReply=!0},UpdateStatus:async function(t){var e=this;t="Active"==t?1001:1002;var a="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){a.length>0&&(a+=","),a+=$(this).val()})),a.length>0&&e.confirmR(e.$t("ConfirmUpdateStatusRecord"),!0,e.$t("Active")+"  "+e.$t("Inactive"),(function(){var i=`id=${a}&statusId=${t}&isFor=ReplyTemplate`;s["a"].updatestatus(i).then(t=>{1==t.data&&(e.listheaderbuttons[1].isdisabled=!0,e.listheaderbuttons[2].isdisabled=!0,e.listheaderbuttons[3].isdisabled=!0,e.ShowAlert(e.$t("UpdatedSuccess",[e.$t("Status")]),"success",!0,e.$t("Alert")),e.FetchData())})}))}}},u=l,h=(a("fe06"),a("2877")),A=Object(h["a"])(u,i,o,!1,null,null,null);e["default"]=A.exports}}]);
//# sourceMappingURL=chunk-5fb50dc9.js.map