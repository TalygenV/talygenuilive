(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bf0730d6"],{"4b91":function(t,e,a){"use strict";var s=function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"my-popups"},[e("div",{staticClass:"modal d-block"},[e("div",{staticClass:"modal-dialog ui-draggable"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header ui-draggable-handle"},[e("h5",{staticClass:"modal-title",attrs:{id:"ui-id-10"}},[t._v(t._s(t.ScreenshotDetailArray.screenshoT_TITLE))]),e("button",{staticClass:"close",on:{click:t.closePopup}},[e("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),e("div",{staticClass:"modal-body",staticStyle:{height:"auto","min-height":"0px","max-height":"none"},attrs:{id:"divDialogDetails"}},[e("div",{staticClass:"col-md-12 p-0"},[e("div",{staticClass:"col-md-12 p-0"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8 d-flex workdairy_leftbase"},[e("div",{staticClass:"w-100 h-100 bg-light d-flex align-items-center"},["screenShot"==t.ScreenshotDetailArray.screenshoT_TYPE?e("img",{staticClass:"snapshot w-100",attrs:{loading:"lazy",src:"https://cogniterblob.blob.core.windows.net/"+t.ScreenshotDetailArray.containeR_NAME+"/screenshots/"+t.ScreenshotDetailArray.screenshoT_PATH,title:"Screen--NoTask",alt:"Screen--NoTask"}}):t._e(),"video"==t.ScreenshotDetailArray.screenshoT_TYPE?e("video",{staticClass:"border",attrs:{width:"100%",height:"420",controls:""}},[e("source",{attrs:{src:t.ScreenshotDetailArray.screenshoT_PATH,type:"video/mp4"}})]):t._e()])]),e("div",{staticClass:"col-md-4 workdairy_rightbase"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 p-0",attrs:{id:"divapplicationdatadetails"}},[e("div",{staticClass:"app-time p-0"},[e("div",{staticClass:"heading-border mb-2"},[e("h5",{staticClass:"h5"},[e("span",[t._v(t._s(t.$t("ApplicationTime")))])])]),t._l(t.ScreenshotApplicationTime,(function(a){return e("ul",{staticClass:"app-time-info filterscroll mCustomScrollbar _mCS_10 mCS_no_scrollbar",staticStyle:{"max-height":"240px"}},[e("div",{staticClass:"mCustomScrollBox mCS-dark-thick mCSB_vertical mCSB_inside",staticStyle:{"max-height":"none"},attrs:{id:"mCSB_10",tabindex:"0"}},[e("div",{staticClass:"mCSB_container mCS_y_hidden mCS_no_scrollbar_y",staticStyle:{position:"relative",top:"0",left:"0"},attrs:{id:"mCSB_10_container",dir:"ltr"}},[e("li",{staticClass:"position-relative frm-outer-container"},[e("div",{staticClass:"w-100 float-left d-flex pl-3 hs bg-grey py-1 btn-toggle cursor-pointer"},[e("div",{class:"appicon "+(null==a.icoN_CLASS?"default":a.icoN_CLASS)}),e("p",{staticClass:"text-truncate thickbox",staticStyle:{"min-width":"120px","max-width":"120px",cursor:"pointer"},attrs:{title:a.icoN_CLASS,"data-placement":"left",href:"javascript:;","data-toggle":"modal","data-target":"#updateentry"}},[t._v(" "+t._s(a.applicatioN_NAME)+" ")]),e("div",{staticClass:"progress prog_bx mt-2",attrs:{"data-duration":a.timE_DURATION,"data-totalduration":a.totaL_DURATION}},[e("div",{staticClass:"progress-bar bg-blue",style:"width:"+t.FindPercentageOfTotalHours(a.timE_DURATION,a.totaL_DURATION)+"%",attrs:{role:"progressbar","aria-valuenow":"0","aria-valuemin":"0","aria-valuemax":"100"}})]),e("span",{staticClass:"spantimeDura mt-1",attrs:{"data-duration":"2","data-totalduration":"2.00"}},[t._v(t._s(t.secondsToTime(a.timE_DURATION))),e("b",[t._v("("+t._s(t.FindPercentageOfTotalHours(a.timE_DURATION,a.totaL_DURATION)+"%")+")")])])]),e("span",{staticClass:"d-block clearfix"})])]),t._m(0,!0)])])})),e("div",{staticClass:"table-responsive user-clicksin"},[e("table",{staticClass:"table table-border mb-0"},[t.noRecordApplication?e("tbody",[e("tr",[e("td",{staticClass:"text-center text-danger no-record",attrs:{colspan:"3"}},[t._v(" "+t._s(t.$t("NoRecordfound"))+" ")])])]):t._e()])])],2)]),e("div",{staticClass:"col-md-12 p-0",attrs:{id:"diveventsperminutes"}},[e("div",{staticClass:"heading-border mb-2 mt-3"},[e("h5",{staticClass:"h5"},[e("span",[t._v(t._s(t.$t("EventPerMin")))])])])]),e("div",{staticClass:"table-responsive user-clicksin"},[e("table",{staticClass:"table table-border mb-0"},[e("thead",[e("tr",[e("th",[t._v(t._s(t.$t("Time")))]),e("th",[t._v(t._s(t.$t("keyStrokes")))]),e("th",[t._v(t._s(t.$t("Mouse")))])])]),t.noRecord?e("tbody",[e("tr",[e("td",{staticClass:"text-center text-danger no-record",attrs:{colspan:"3"}},[t._v(" "+t._s(t.$t("NoRecordfound"))+" ")])])]):e("tbody",t._l(t.ScreenshotEventsPerMinute,(function(a){return e("tr",[e("td",[t._v(t._s(t.FormatDateToTime(a.time)))]),e("td",[t._v(t._s(a.keyStrokes))]),e("td",[t._v(t._s(a.mouseClicks))])])})),0)])])])]),e("div",{staticClass:"col-md-12 mt-3",attrs:{id:"ssDescription"}},[t._m(1),e("p",[t._v(t._s(t.ScreenshotDetailArray.screenshoT_TITLE))])]),e("div",{staticClass:"col-md-12",attrs:{id:"commentData"}},[e("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 px-2",attrs:{id:"Comments"}},[e("dynamic-form",{ref:"PostCommentForm",attrs:{lang:"en",buttons:t.buttons,schema:t.FormSchema},on:{OnSubmit:t.onSubmit}}),e("div",{staticClass:"listing",staticStyle:{"max-height":"465px","overflow-y":"auto"},attrs:{id:"CommentsData"}},[e("div",{staticClass:"w-100 activity-tab",attrs:{id:"accordion"}},t._l(t.PostedCommentListing,(function(a,s){return e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[e("a",{staticClass:"card-link",attrs:{"data-toggle":"collapse",href:"#CommentAccordion"+s}},[e("div",{staticClass:"conversation-date heading-border"},[e("span",[t._v(t._s(t.$options.filters.formatDate(a.createdDate)))])])])]),e("div",{staticClass:"collapse show",attrs:{id:"CommentAccordion"+t.i,"data-parent":"#accordion"}},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"conversation-main"},[e("div",{staticClass:"conversation-time"},[e("span",[t._v(t._s(t.FormatDateToTime(a.createdDate)))])]),e("div",{staticClass:"conversation-box-con"},[e("div",{staticClass:"conversation-box"},[e("div",{staticClass:"name-circle light-yellow"},[e("img",{staticClass:"img-circle avatar",attrs:{src:"https://cogniterblob.blob.core.windows.net/"+a.containeR_NAME+"/Upload/UserProfileImage/"+a.userImage,width:"51",height:"51",alt:"Image"}})]),e("div",{staticClass:"conversation-header addednote-ticket"},[e("span",[e("span",{staticClass:"sender-name"}),e("span",{staticClass:"sender-department",attrs:{title:a.comments}},[t._v(" "+t._s(a.comments))])])]),e("div",{staticClass:"conversation-content"},[e("div",{staticClass:"col-12 p-0 notesdata"},[e("h6",{staticClass:"text-muted time"},[e("i",[e("b",[t._v(t._s(a.createdBy))]),t._v(", Posted on: "),e("span",{staticClass:"text-danger",attrs:{title:"11/28/2023 05:31:25 PM UTC"}},[t._v(t._s(t.DateDifference(a.createdDate)))])])])])])])])])])])])})),0)])],1)]),e("div",{staticClass:"col-md-8 mb-4 mt-3"},[e("div",{staticClass:"level_info"},[e("div",{staticClass:"progress prog_bx"},[e("div",{staticClass:"progress-bar bg-sky",style:"width:"+t.GetDisplayScreenData.activity+"%",attrs:{role:"progressbar","aria-valuenow":"0","aria-valuemin":"0","aria-valuemax":"100"}})]),e("ul",[e("li",[e("b",[t._v("Level:")]),t._v(t._s(t.GetDisplayScreenData.activity<=20?"Low":t.GetDisplayScreenData.activity>20&&t.GetDisplayScreenData.activity<=60?"Medium":"High"))]),e("li",[e("b",[t._v("KeyStrokes:")]),t._v(t._s(t.GetDisplayScreenData.totaL_KEYSTROKES))]),e("li",[e("b",[t._v("Mouse:")]),t._v(t._s(t.GetDisplayScreenData.totaL_MOUSE_CLICKS))]),e("li",[e("b",[t._v("Duration: ")]),e("span",{staticClass:"durationval"},[t._v(t._s(t.secondsToTime(t.GetDisplayScreenData.timE_DURATION)))])]),e("li",[e("b",[t._v("Activity:")]),t._v(t._s(t.GetDisplayScreenData.activity+"%"))])])])]),e("div",{staticClass:"col-md-4 mb-4 mt-3"},[e("div",{staticClass:"legends_medium date_info text-center"},[e("h2",[t._v(t._s(t.$options.filters.formatDate(t.ScreenShotData.InputDate))),e("br"),t._v(t._s(t.FormatDateToTime(t.ScreenshotDetailArray.createD_AT)))])])])])])])])])])])])])},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"mCSB_scrollTools mCSB_10_scrollbar mCS-dark-thick mCSB_scrollTools_vertical",staticStyle:{display:"none"},attrs:{id:"mCSB_10_scrollbar_vertical"}},[e("div",{staticClass:"mCSB_draggerContainer"},[e("div",{staticClass:"mCSB_dragger",staticStyle:{position:"absolute","min-height":"30px",height:"0px",top:"0px"},attrs:{id:"mCSB_10_dragger_vertical"}},[e("div",{staticClass:"mCSB_dragger_bar",staticStyle:{"line-height":"30px"}})]),e("div",{staticClass:"mCSB_draggerRail"})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"heading-border"},[e("h5",{staticClass:"h5 mb-2"},[e("span",[t._v("Description")])])])}],o=a("9769"),r=a("c1df"),n=a.n(r),c={props:{ScreenshotDetailArray:{type:Object},ScreenShotData:{type:Object}},data(){return{ScreenshotApplicationTime:[],ScreenshotEventsPerMinute:[],GetDisplayScreenData:[],noRecord:!1,noRecordApplication:!1,PostedCommentListing:[],FormSchema:[{layoutType:"single",Data:[{astype:"TextAreaField",label:this.$t("Comment"),name:"Comment",value:"",mode:"tag",placeholder:"",config:{options:[]},validationRules:{required:!0}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-send pr-2'></i>Post New Comment",isVisible:!0}]}},created(){this.GetScreenshotApplicationTime(),this.GetEventsPerMinutes(),this.GetDisplayScreen(),this.FetchCommentsData()},methods:{closePopup(){var t=this;t.$parent.CloseScreenshotDetails()},GetScreenshotApplicationTime(){var t=this,e=null;null!=t.ScreenShotData.InputDate&&(e=t.$options.filters.formatDate(t.ScreenShotData.InputDate));var a=`screenshotId=${t.ScreenshotDetailArray.screenshoT_ID}&${t.ScreenShotData.UserId}&${t.ScreenShotData.ProjectId}&langkey=en&search=${e}&duration=0&totalHours=0`;o["a"].GetApplicationTracking(a).then(e=>{e.data.length>0?(t.ScreenshotApplicationTime=e.data,t.noRecordApplication=!1):t.noRecordApplication=!0}).catch(t=>{console.log(t)})},secondsToTime(t){var e=Math.floor(t/3600),a=t%3600,s=Math.floor(a/60),i=a%60,o=Math.ceil(i),r=e+"H "+s+"M "+o+"S";return r},FindPercentageOfTotalHours(t,e){return(t/e*100).toFixed(2)},FormatDateToTime(t){return n()(t).format("LT")},GetEventsPerMinutes(){var t=this,e="screenshotId="+t.ScreenshotDetailArray.screenshoT_ID;o["a"].GetEventsPerMinutes(e).then(e=>{e.data.length>0?(t.ScreenshotEventsPerMinute=e.data,t.noRecord=!1):t.noRecord=!0}).catch(t=>{console.log(t)})},onSubmit(){var t=this,e=`screenids=${t.ScreenshotDetailArray.screenshoT_ID}&comment=${t.FormSchema[0].Data[0].value}`;o["a"].PostComment(e).then(e=>{e.data&&(t.FormSchema[0].Data[0].value="",t.$refs.PostCommentForm.validateForm.reset(),t.ShowAlert(t.$t("RecordsSavedSuccessfully"),"success",!0,t.$t("Alert")),t.FetchCommentsData())}).catch(t=>{console.log(t)})},FetchCommentsData(){var t=this,e=`id=${t.ScreenshotDetailArray.screenshoT_ID}&${t.ScreenShotData.ProjectId}`;o["a"].GetComments(e).then(e=>{e.data.length>0&&(t.PostedCommentListing=e.data[0].commentList)}).catch(t=>{console.log(t)})},GetDisplayScreen(){var t=this,e=`screenshotId=${t.ScreenshotDetailArray.screenshoT_ID}&${t.ScreenShotData.UserId}&${t.ScreenShotData.ProjectId}`;o["a"].GetDisplayScreen(e).then(e=>{e.data!={}&&(t.GetDisplayScreenData=e.data)})},DateDifference(t){var e=this,a=new Date,s=Math.ceil(Math.floor(a.getTime()-new Date(t).getTime())/1e3);console.log("GetCurrentDate",a,"ActualDate",t);var i=Math.floor(s/3600),o=s%3600,r=Math.floor(o/60),n=Math.floor(s/86400);if(s<60)return e.$t("FewSecondsAgo");if(s<120)return e.$t("minutesago");if(s<2700)return r+" "+e.$t("minutesago");if(s<5400)return e.$t("an")+" "+e.$t("hourago");if(s<86400)return i+" "+e.$t("hourago");if(s<172800)return e.$t("Yesterday");if(s<2592e3)return n+" "+e.$t("daysago");if(s<31104e3){var c=Math.floor(n/30);return c<=1?"1 "+e.$t("monthsago"):c+" "+e.$t("monthsago")}var l=Math.floor(n/365);return l<=1?"1 "+e.$t("yearsago"):l+" "+e.$t("yearsago")}}},l=c,d=a("2877"),h=Object(d["a"])(l,s,i,!1,null,null,null);e["a"]=h.exports},e7dd:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("section",[e("loader",{attrs:{"is-visible":t.isLoading}}),e("tg-list",{attrs:{IsShowAction:!1,showCheckBox:!1,listType:["List"],ModuleName:"Flagged_Screenshot",SubModuleCode:"Flagged_Screenshot",IdentityColumn:"ScreenShotId",HeaderText:"Flagged Screenshots",ListData:t.FlaggedScreenShotListing,HeaderData:t.Headers,callbackfunction:t.FetchData,HeaderButtons:t.listheaderbuttons,TotalRecords:t.TotalRecords,SearchFields:t.leftSearchFields,RenderRowActionMethod:[],ListDataCallBackFunction:t.FetchData,LegendArray:[],SortExp:t.sortExp,SortBy:t.sortBy,NorecordfoundText:t.$t("NoRecordfound")},on:{LeftsearchButtonClick:t.leftCommonSearch,PagerButtonClick:t.pagerMethod,HeaderButtonClick:t.commonHeaderButtonClick,ActionButtonClick:t.actionButtonClick,SortdataButtonClick:t.sortdata}}),t.ShowScreenshotDetails?e("ScreenshotDetails",{attrs:{ScreenshotDetailArray:t.ScreenshotDetailArray,ScreenShotData:t.ScreenShotData}}):t._e()],1)},i=[],o=(a("14d9"),a("9769"));let r=[{title:"Back",iconClass:"fa fa-angle-double-left",callbackfunction:"BackToWorkDiaryListing",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1}],n=[{fieldName:"User",fieldType:"radio",fieldIcon:"fa fa-user",paramName:"User",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]},{fieldName:"Project",fieldType:"radio",fieldIcon:"fa fa-suitcase",paramName:"projectId",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]},{fieldName:"DATE",fieldType:"date-range",fieldIcon:"fa-calendar",fieldSearchConditionName:[""],isSearch:!1,datePickerConfig:{useCurrent:!1,showClear:!0,showClose:!0,allowInputToggle:!0,minDate:!1,maxDate:!1,widgetPositioning:{horizontal:"right",vertical:"bottom"}},secondDatePickerConfig:{useCurrent:!1,showClear:!0,showClose:!0,allowInputToggle:!0,minDate:!1,maxDate:!1,widgetPositioning:{horizontal:"right",vertical:"bottom"}},value:"",secondValue:"",listOptions:[]}];function c(t,e){var a=t;"CA"==e?o["a"].GetUsersByCompanyId().then(t=>{t.data.forEach(t=>{let e={name:t.username,value:t.user_id};a.leftSearchFields[0].listOptions.push(e)})}).catch(t=>{console.log(t)}):"PM"==e&&o["a"].ListTeamUsersByPM().then(t=>{t.data.forEach(t=>{let e={name:t.username,value:t.user_id};a.leftSearchFields[0].listOptions.push(e)})}),o["a"].GetProjectListByUserIdAndUserType().then(t=>{t.data.forEach(t=>{let e={name:t.projectname,value:t.projectid};a.leftSearchFields[1].listOptions.push(e)})})}var l={leftsearchSchema:n,buttons:r,bindleftCommonSearchdropdown:c},d=a("c1df"),h=a.n(d),m=a("4b91"),S=a("be92"),p=a("b0ac");const{GetUserInfo:u}=Object(S["d"])(Object(p["b"])());var _={components:{ScreenshotDetails:m["a"]},data(){return{isLoading:!1,ShowScreenshotDetails:!1,leftSearchFields:l.leftsearchSchema,listheaderbuttons:l.buttons,FlaggedScreenShotListing:[],noRecord:!0,TotalRecords:0,CurrentPage:1,TotalPages:0,sortBy:"sortdate",sortExp:"asc",pageSize:10,pageNum:1,Userid:"User=0",projectId:"projectId=0",modelinputdate:(new Date).toISOString().split("T")[0],dateFrom:"",GetFromDate:"",GetToDate:"",Headers:[{COLUMN_NAME:"screenshoT_TITLE",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("ScreenshotTitle"),DISPLAY_ORDER:1},{COLUMN_NAME:"trackDescription",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("TrackDescription"),DISPLAY_ORDER:1},{COLUMN_NAME:"createdByName",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("UserName"),DISPLAY_ORDER:1},{COLUMN_NAME:"projectName",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("ProjectTaskFlagged"),DISPLAY_ORDER:1},{COLUMN_NAME:"createD_AT",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("ScreenShotCreatedAt"),DISPLAY_ORDER:1},{COLUMN_NAME:"totalHours",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("TimeTracked"),DISPLAY_ORDER:1},{COLUMN_NAME:"newStartDate",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("Date"),DISPLAY_ORDER:1},{COLUMN_NAME:"trackAgent",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("TrackAgent"),DISPLAY_ORDER:1},{COLUMN_NAME:"activity",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("ActivityFlagged"),DISPLAY_ORDER:1}]}},created(){var t=this;t.FetchData(),l.bindleftCommonSearchdropdown(this,u.value.UserType)},updated(){l.leftsearchSchema.forEach(t=>{t.value="",t.secondValue="",t.isSearch=!1})},methods:{commonHeaderButtonClick(t){switch(t.callbackfunction){case"BackToWorkDiaryListing":this.BackToWorkDiaryListing();break}},FetchData(){var t=this;t.isLoading=!0;var e=`${t.Userid}&${t.projectId}&datefrom=${t.GetFromDate}&dateto=${t.GetToDate}&pageSize=${t.pageSize}&pageNum=${t.pageNum}&sortBy=${t.sortBy}&orderBy=${t.sortExp}`;o["a"].GetFlagScreenshotListing(e).then(e=>{e.data.length>0?(t.Headers.forEach(e=>{e.settings=null,"screenshoT_TITLE"==e.COLUMN_NAME&&(e.settings={clickEvent:t.clickEventOfColumn,formatter:t.columnDataFormatter})}),t.FlaggedScreenShotListing=e.data,t.FlaggedScreenShotListing.forEach(e=>{var a=t.FlaggedScreenShotListing.find(t=>t.screenshoT_ID===e.screenshoT_ID);a.projectName=e.projectName+"-"+e.taskname,a.createD_AT=t.FormatDateToTime(e.createD_AT),a.totalHours=t.secondsToTime(e.totalHours),a.newStartDate=t.$options.filters.formatDate(e.newStartDate),a.activity=e.activity+" %"}),t.TotalRecords=e.data[0].total,t.TotalPages=Math.ceil(t.TotalRecords/t.pageSize),t.CurrentPage=t.pageNum,t.isLoading=!1,t.noRecord=!1):(t.FlaggedScreenShotListing=[],t.TotalRecords=0,t.isLoading=!1,t.noRecord=!0)}).catch(t=>{console.log(t)})},FormatDateToTime(t){return h()(t).format("LT")},secondsToTime(t){var e=Math.floor(t/3600),a=t%3600,s=Math.floor(a/60),i=a%60,o=Math.ceil(i),r=e+"H "+s+"M "+o+"S";return r},pagerMethod(t){this.pageSize=t.PageSize,this.pageNum=t.PageNumber,this.FetchData()},clickEventOfColumn:function(t,e){var a=this;"screenshoT_TITLE"==e.COLUMN_NAME&&(a.ShowScreenshotDetails=!0,a.ScreenshotDetailArray=t,a.ScreenShotData={UserId:a.Userid,ProjectId:a.projectId,InputDate:t.dateStart})},CloseScreenshotDetails(){var t=this;t.ShowScreenshotDetails=!1},leftCommonSearch(t){var e=this;if(e.GetFromDate="",e.GetToDate="",t.searchConditionJson.includes("projectId")?e.projectId=t.searchConditionJson:e.Userid=t.searchConditionJson,t.searchCondition.includes("DATE")){var a=t.searchCondition.split("'");a.forEach(t=>{var a=this.$options.filters.formatDate(t);"Invalid date"!=a&&(""==e.GetFromDate?e.GetFromDate=a:e.GetToDate=a)})}e.FetchData()},sortdata:function(t){var e="sort tb_headerSortDown";this.sortBy=t,t===this.sortBy&&(""==this.sortExp?(this.sortExp="ASC",e="sort tb_headerSortDown"):"ASC"==this.sortExp?(this.sortExp="DESC",e="sort tb_headerSortUp"):(this.sortExp="ASC",e="sort tb_headerSortDown")),this.FetchData(),$("#"+t+"  span:first-child").attr("class",e)},BackToWorkDiaryListing(){this.$router.push({path:"/WorkDiary/Index"})}}},D=_,v=a("2877"),g=Object(v["a"])(D,s,i,!1,null,null,null);e["default"]=g.exports}}]);
//# sourceMappingURL=chunk-bf0730d6.js.map