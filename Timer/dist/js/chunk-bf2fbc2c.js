(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bf2fbc2c"],{"4b91":function(t,e,a){"use strict";var s=function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"my-popups"},[e("div",{staticClass:"modal d-block"},[e("div",{staticClass:"modal-dialog ui-draggable"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header ui-draggable-handle"},[e("h5",{staticClass:"modal-title",attrs:{id:"ui-id-10"}},[t._v(t._s(t.ScreenshotDetailArray.screenshoT_TITLE))]),e("button",{staticClass:"close",on:{click:t.closePopup}},[e("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),e("div",{staticClass:"modal-body",staticStyle:{height:"auto","min-height":"0px","max-height":"none"},attrs:{id:"divDialogDetails"}},[e("div",{staticClass:"col-md-12 p-0"},[e("div",{staticClass:"col-md-12 p-0"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8 d-flex"},[e("div",{staticClass:"w-100 h-100 bg-light d-flex align-items-center"},["screenShot"==t.ScreenshotDetailArray.screenshoT_TYPE?e("img",{staticClass:"snapshot w-100",attrs:{loading:"lazy",src:"https://cogniterblob.blob.core.windows.net/"+t.ScreenshotDetailArray.containeR_NAME+"/screenshots/"+t.ScreenshotDetailArray.screenshoT_PATH,title:"Screen--NoTask",alt:"Screen--NoTask"}}):t._e(),"video"==t.ScreenshotDetailArray.screenshoT_TYPE?e("video",{staticClass:"border",attrs:{width:"100%",height:"420",controls:""}},[e("source",{attrs:{src:t.ScreenshotDetailArray.screenshoT_PATH,type:"video/mp4"}})]):t._e()])]),e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12",attrs:{id:"divapplicationdatadetails"}},[e("div",{staticClass:"app-time p-0"},[e("div",{staticClass:"heading-border mb-2"},[e("h5",{staticClass:"h5"},[e("span",[t._v(t._s(t.$t("ApplicationTime")))])])]),t._l(t.ScreenshotApplicationTime,(function(a){return e("ul",{staticClass:"app-time-info filterscroll mCustomScrollbar _mCS_10 mCS_no_scrollbar",staticStyle:{"max-height":"240px"}},[e("div",{staticClass:"mCustomScrollBox mCS-dark-thick mCSB_vertical mCSB_inside",staticStyle:{"max-height":"none"},attrs:{id:"mCSB_10",tabindex:"0"}},[e("div",{staticClass:"mCSB_container mCS_y_hidden mCS_no_scrollbar_y",staticStyle:{position:"relative",top:"0",left:"0"},attrs:{id:"mCSB_10_container",dir:"ltr"}},[e("li",{staticClass:"position-relative frm-outer-container"},[e("div",{staticClass:"w-100 float-left d-flex pl-3 hs bg-grey py-1 btn-toggle cursor-pointer"},[e("div",{class:"appicon "+(null==a.icoN_CLASS?"default":a.icoN_CLASS)}),e("p",{staticClass:"text-truncate thickbox",staticStyle:{"min-width":"120px","max-width":"120px",cursor:"pointer"},attrs:{title:a.icoN_CLASS,"data-placement":"left",href:"javascript:;","data-toggle":"modal","data-target":"#updateentry"}},[t._v(" "+t._s(a.applicatioN_NAME)+" ")]),e("div",{staticClass:"progress prog_bx mt-2",attrs:{"data-duration":a.timE_DURATION,"data-totalduration":a.totaL_DURATION}},[e("div",{staticClass:"progress-bar bg-blue",style:"width:"+t.FindPercentageOfTotalHours(a.timE_DURATION,a.totaL_DURATION)+"%",attrs:{role:"progressbar","aria-valuenow":"0","aria-valuemin":"0","aria-valuemax":"100"}})]),e("span",{staticClass:"spantimeDura mt-1",attrs:{"data-duration":"2","data-totalduration":"2.00"}},[t._v(t._s(t.secondsToTime(a.timE_DURATION))),e("b",[t._v("("+t._s(t.FindPercentageOfTotalHours(a.timE_DURATION,a.totaL_DURATION)+"%")+")")])])]),e("span",{staticClass:"d-block clearfix"})])]),t._m(0,!0)])])})),e("div",{staticClass:"table-responsive user-clicksin"},[e("table",{staticClass:"table table-border mb-0"},[t.noRecordApplication?e("tbody",[e("tr",[e("td",{staticClass:"text-center text-danger no-record",attrs:{colspan:"3"}},[t._v(" "+t._s(t.$t("NoRecordfound"))+" ")])])]):t._e()])])],2)]),e("div",{staticClass:"col-md-12",attrs:{id:"diveventsperminutes"}},[e("div",{staticClass:"heading-border mb-2 mt-3"},[e("h5",{staticClass:"h5"},[e("span",[t._v(t._s(t.$t("EventPerMin")))])])])]),e("div",{staticClass:"table-responsive user-clicksin"},[e("table",{staticClass:"table table-border mb-0"},[e("thead",[e("tr",[e("th",[t._v(t._s(t.$t("Time")))]),e("th",[t._v(t._s(t.$t("keyStrokes")))]),e("th",[t._v(t._s(t.$t("Mouse")))])])]),t.noRecord?e("tbody",[e("tr",[e("td",{staticClass:"text-center text-danger no-record",attrs:{colspan:"3"}},[t._v(" "+t._s(t.$t("NoRecordfound"))+" ")])])]):e("tbody",t._l(t.ScreenshotEventsPerMinute,(function(a){return e("tr",[e("td",[t._v(t._s(t.FormatDateToTime(a.time)))]),e("td",[t._v(t._s(a.keyStrokes))]),e("td",[t._v(t._s(a.mouseClicks))])])})),0)])])])]),e("div",{staticClass:"col-md-12 mt-3",attrs:{id:"ssDescription"}},[t._m(1),e("p",[t._v(t._s(t.ScreenshotDetailArray.screenshoT_TITLE))])]),e("div",{staticClass:"col-md-12",attrs:{id:"commentData"}},[e("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 px-2",attrs:{id:"Comments"}},[e("dynamic-form",{ref:"PostCommentForm",attrs:{lang:"en",buttons:t.buttons,schema:t.FormSchema},on:{OnSubmit:t.onSubmit}}),e("div",{staticClass:"listing",staticStyle:{"max-height":"465px","overflow-y":"auto"},attrs:{id:"CommentsData"}},[e("div",{staticClass:"w-100 activity-tab",attrs:{id:"accordion"}},t._l(t.PostedCommentListing,(function(a,s){return e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[e("a",{staticClass:"card-link",attrs:{"data-toggle":"collapse",href:"#CommentAccordion"+s}},[e("div",{staticClass:"conversation-date heading-border"},[e("span",[t._v(t._s(t.$options.filters.formatDate(a.createdDate)))])])])]),e("div",{staticClass:"collapse show",attrs:{id:"CommentAccordion"+t.i,"data-parent":"#accordion"}},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"conversation-main"},[e("div",{staticClass:"conversation-time"},[e("span",[t._v(t._s(t.FormatDateToTime(a.createdDate)))])]),e("div",{staticClass:"conversation-box-con"},[e("div",{staticClass:"conversation-box"},[e("div",{staticClass:"name-circle light-yellow"},[e("img",{staticClass:"img-circle avatar",attrs:{src:"https://cogniterblob.blob.core.windows.net/"+a.containeR_NAME+"/Upload/UserProfileImage/"+a.userImage,width:"51",height:"51",alt:"Image"}})]),e("div",{staticClass:"conversation-header addednote-ticket"},[e("span",[e("span",{staticClass:"sender-name"}),e("span",{staticClass:"sender-department",attrs:{title:a.comments}},[t._v(" "+t._s(a.comments))])])]),e("div",{staticClass:"conversation-content"},[e("div",{staticClass:"col-12 p-0 notesdata"},[e("h6",{staticClass:"text-muted time"},[e("i",[e("b",[t._v(t._s(a.createdBy))]),t._v(", Posted on: "),e("span",{staticClass:"text-danger",attrs:{title:"11/28/2023 05:31:25 PM UTC"}},[t._v(t._s(t.DateDifference(a.createdDate)))])])])])])])])])])])])})),0)])],1)]),e("div",{staticClass:"col-md-8 mb-4 mt-3"},[e("div",{staticClass:"level_info"},[e("div",{staticClass:"progress prog_bx"},[e("div",{staticClass:"progress-bar bg-sky",style:"width:"+t.GetDisplayScreenData.activity+"%",attrs:{role:"progressbar","aria-valuenow":"0","aria-valuemin":"0","aria-valuemax":"100"}})]),e("ul",[e("li",[e("b",[t._v("Level:")]),t._v(t._s(t.GetDisplayScreenData.activity<=20?"Low":t.GetDisplayScreenData.activity>20&&t.GetDisplayScreenData.activity<=60?"Medium":"High"))]),e("li",[e("b",[t._v("KeyStrokes:")]),t._v(t._s(t.GetDisplayScreenData.totaL_KEYSTROKES))]),e("li",[e("b",[t._v("Mouse:")]),t._v(t._s(t.GetDisplayScreenData.totaL_MOUSE_CLICKS))]),e("li",[e("b",[t._v("Duration: ")]),e("span",{staticClass:"durationval"},[t._v(t._s(t.secondsToTime(t.GetDisplayScreenData.timE_DURATION)))])]),e("li",[e("b",[t._v("Activity:")]),t._v(t._s(t.GetDisplayScreenData.activity+"%"))])])])]),e("div",{staticClass:"col-md-4 mb-4 mt-3"},[e("div",{staticClass:"legends_medium date_info text-center"},[e("h2",[t._v(t._s(t.$options.filters.formatDate(t.ScreenShotData.InputDate))),e("br"),t._v(t._s(t.FormatDateToTime(t.ScreenshotDetailArray.createD_AT)))])])])])])])])])])])])])},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"mCSB_scrollTools mCSB_10_scrollbar mCS-dark-thick mCSB_scrollTools_vertical",staticStyle:{display:"none"},attrs:{id:"mCSB_10_scrollbar_vertical"}},[e("div",{staticClass:"mCSB_draggerContainer"},[e("div",{staticClass:"mCSB_dragger",staticStyle:{position:"absolute","min-height":"30px",height:"0px",top:"0px"},attrs:{id:"mCSB_10_dragger_vertical"}},[e("div",{staticClass:"mCSB_dragger_bar",staticStyle:{"line-height":"30px"}})]),e("div",{staticClass:"mCSB_draggerRail"})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"heading-border"},[e("h5",{staticClass:"h5 mb-2"},[e("span",[t._v("Description")])])])}],o=a("9769"),r=a("c1df"),n=a.n(r),c={props:{ScreenshotDetailArray:{type:Object},ScreenShotData:{type:Object}},data(){return{ScreenshotApplicationTime:[],ScreenshotEventsPerMinute:[],GetDisplayScreenData:[],noRecord:!1,noRecordApplication:!1,PostedCommentListing:[],FormSchema:[{layoutType:"single",Data:[{astype:"TextAreaField",label:this.$t("Comment"),name:"Comment",value:"",mode:"tag",placeholder:"",config:{options:[]},validationRules:{required:!0}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-send pr-2'></i>Post New Comment",isVisible:!0}]}},created(){this.GetScreenshotApplicationTime(),this.GetEventsPerMinutes(),this.GetDisplayScreen(),this.FetchCommentsData()},methods:{closePopup(){var t=this;t.$parent.CloseScreenshotDetails()},GetScreenshotApplicationTime(){var t=this,e=null;null!=t.ScreenShotData.InputDate&&(e=t.$options.filters.formatDate(t.ScreenShotData.InputDate));var a=`screenshotId=${t.ScreenshotDetailArray.screenshoT_ID}&${t.ScreenShotData.UserId}&${t.ScreenShotData.ProjectId}&langkey=en&search=${e}&duration=0&totalHours=0`;o["a"].GetApplicationTracking(a).then(e=>{e.data.length>0?(t.ScreenshotApplicationTime=e.data,t.noRecordApplication=!1):t.noRecordApplication=!0}).catch(t=>{console.log(t)})},secondsToTime(t){var e=Math.floor(t/3600),a=t%3600,s=Math.floor(a/60),i=a%60,o=Math.ceil(i),r=e+"H "+s+"M "+o+"S";return r},FindPercentageOfTotalHours(t,e){return(t/e*100).toFixed(2)},FormatDateToTime(t){return n()(t).format("LT")},GetEventsPerMinutes(){var t=this,e="screenshotId="+t.ScreenshotDetailArray.screenshoT_ID;o["a"].GetEventsPerMinutes(e).then(e=>{e.data.length>0?(t.ScreenshotEventsPerMinute=e.data,t.noRecord=!1):t.noRecord=!0}).catch(t=>{console.log(t)})},onSubmit(){var t=this,e=`screenids=${t.ScreenshotDetailArray.screenshoT_ID}&comment=${t.FormSchema[0].Data[0].value}`;o["a"].PostComment(e).then(e=>{e.data&&(t.FormSchema[0].Data[0].value="",t.$refs.PostCommentForm.validateForm.reset(),t.ShowAlert(t.$t("RecordsSavedSuccessfully"),"success",!0,t.$t("Alert")),t.FetchCommentsData())}).catch(t=>{console.log(t)})},FetchCommentsData(){var t=this,e=`id=${t.ScreenshotDetailArray.screenshoT_ID}&${t.ScreenShotData.ProjectId}`;o["a"].GetComments(e).then(e=>{e.data.length>0&&(t.PostedCommentListing=e.data[0].commentList)}).catch(t=>{console.log(t)})},GetDisplayScreen(){var t=this,e=`screenshotId=${t.ScreenshotDetailArray.screenshoT_ID}&${t.ScreenShotData.UserId}&${t.ScreenShotData.ProjectId}`;o["a"].GetDisplayScreen(e).then(e=>{e.data!={}&&(t.GetDisplayScreenData=e.data)})},DateDifference(t){var e=this,a=new Date,s=Math.ceil(Math.floor(a.getTime()-new Date(t).getTime())/1e3);console.log("GetCurrentDate",a,"ActualDate",t);var i=Math.floor(s/3600),o=s%3600,r=Math.floor(o/60),n=Math.floor(s/86400);if(s<60)return e.$t("FewSecondsAgo");if(s<120)return e.$t("minutesago");if(s<2700)return r+" "+e.$t("minutesago");if(s<5400)return e.$t("an")+" "+e.$t("hourago");if(s<86400)return i+" "+e.$t("hourago");if(s<172800)return e.$t("Yesterday");if(s<2592e3)return n+" "+e.$t("daysago");if(s<31104e3){var c=Math.floor(n/30);return c<=1?"1 "+e.$t("monthsago"):c+" "+e.$t("monthsago")}var l=Math.floor(n/365);return l<=1?"1 "+e.$t("yearsago"):l+" "+e.$t("yearsago")}}},l=c,d=a("2877"),m=Object(d["a"])(l,s,i,!1,null,null,null);e["a"]=m.exports},"7d82":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("section",[e("loader",{attrs:{"is-visible":t.isLoading}}),e("div",{staticClass:"container-fluid mt-2 p-0"},[e("div",{staticClass:"left-menu-tab"},[e("leftSearch",{attrs:{fields:t.leftSearchFields,header:"Work Diary"},on:{SetLeftSearch:t.leftCommonSearch}})],1),e("div",{staticClass:"right-content"},[e("div",{staticClass:"col-lg-12 p-0"},[e("div",{staticClass:"heading-border mb-2 cursor-pointer",attrs:{id:"status"},on:{click:t.ToggleDailyTimeLine}},[t._m(0)])]),e("div",{staticClass:"col-lg-12 p-0",style:t.ToggleTimeLine,attrs:{id:"week-stat"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12 col-md-12 col-lg-6 mb-3",attrs:{id:"divclockedhours"}},[t.noRecordOfClockedHours?e("div",{staticClass:"text-center text-danger d-flex align-items-center justify-content-center no-record",staticStyle:{height:"100px",top:"34px"}},[t._v(" No record(s) found ")]):e("div",{staticClass:"border infotrack h-100"},t._l(t.GetDailyClockedHours,(function(a){return e("div",{staticClass:"trackinfo"},[e("h2",{staticClass:"time_info"},[t._v(t._s(t.secondsToTime(a.totalhours))+" ")]),e("h3",[t._v("Total Time Tracked")]),e("div",{staticClass:"mb-3 float-left w-100"},[e("div",{staticClass:"p"},[e("span",{staticClass:"skyblue"},[t._v("Online Time Tracked:")]),t._v(" "+t._s(t.secondsToTime(a.onlinehours))+" ")]),e("div",{staticClass:"p"},[e("span",{staticClass:"skyblue"},[t._v("Manual Time Tracked:")]),t._v(" "+t._s(t.secondsToTime(a.offlinehours))+" ")])]),e("div",{staticClass:"float-left w-100 p"},[e("span",{staticClass:"grey-txt"},[t._v("Week")]),t._v(" "+t._s(t.secondsToTime(a.thiS_WEEK_HOURS))+"   |  "),e("span",{staticClass:"grey-txt"},[t._v("Month")]),t._v(" "+t._s(t.secondsToTime(a.thiS_MONTH_HOURS))+" ")])])})),0)]),e("div",{staticClass:"col-sm-12 col-md-12 col-lg-6 mb-3",attrs:{id:"divapplicationdata"}},[e("div",{staticClass:"border app-time h-100",attrs:{id:"ApplicationTime"}},[e("h3",{staticClass:"text-center border-bottom"},[t._v("Application Time")]),e("ul",{staticClass:"app-time-info",staticStyle:{"max-height":"130px","overflow-y":"auto","min-height":"130px"}},[t.noRecordOfApplicationTime?e("div",{staticClass:"text-center text-danger d-flex align-items-center justify-content-center no-record",staticStyle:{height:"100px"}},[t._v(" No record(s) found ")]):t._l(t.GetDailyApplicationTime,(function(a){return e("li",[e("p",{attrs:{title:"File Explorer"}},[e("strong",[t._v(t._s(a.applicatioN_NAME))])]),e("div",{staticClass:"progress prog_bx",attrs:{"data-duration":a.timE_DURATION,"data-totalduration":a.totaL_DURATION,"data-totalhours":0==a.totalHours?1:a.totalHours}},[e("div",{staticClass:"progress-bar bg-lightgreen",style:"width:"+t.FindPercentageOfTotalHours(a.timE_DURATION,a.totaL_DURATION)+"%",attrs:{role:"progressbar","aria-valuenow":"0","aria-valuemin":"0","aria-valuemax":"100"}})]),e("span",[t._v(t._s(t.secondsToTime(a.timE_DURATION))),e("b",[t._v("("+t._s(t.FindPercentageOfTotalHours(a.timE_DURATION,a.totaL_DURATION)+"%")+")")])]),e("span",{staticClass:"d-block clearfix"})])}))],2)])])])]),e("div",{staticClass:"col-md-12 p-0 mb-2"},[e("div",{staticClass:"theme-primary partition p-actions-expand overflow-visible"},[e("span",{staticClass:"p-name text-white"},[e("a",{staticClass:"btn btn-primary float-left mr-1",attrs:{id:"prevdate",href:"javascript:;"},on:{click:function(e){return t.GetDate("prevdate")}}},[e("i",{staticClass:"fa fa-angle-left"})]),e("v-date-picker",{staticClass:"input-group float-left mr-1",staticStyle:{"max-width":"150px"},attrs:{mode:"date",attributes:t.attrs},on:{input:t.FetchAllData},scopedSlots:t._u([{key:"default",fn:function({inputValue:t,togglePopover:a}){return[e("input",{staticClass:"form-control hasdatetimepicker",attrs:{placeholder:"MM/DD/YYYY",readonly:""},domProps:{value:t},on:{click:function(t){return a()}}}),e("div",{staticClass:"input-group-append",attrs:{"data-target":"#txtdatepicker","data-toggle":"datetimepicker",title:"","data-original-title":"Select Date"},on:{click:function(t){return a()}}},[e("a",{staticClass:"input-group-text"},[e("i",{staticClass:"fa fa-calendar"})])])]}}]),model:{value:t.modelinputdate,callback:function(e){t.modelinputdate=e},expression:"modelinputdate"}}),e("a",{staticClass:"btn btn-primary float-left mr-1",attrs:{id:"todaydate",href:"javascript:;"},on:{click:function(e){return t.GetDate("todaydate")}}},[t._v("Today ")]),e("a",{staticClass:"btn btn-primary float-left",attrs:{id:"nextdate",href:"javascript:;"},on:{click:function(e){return t.GetDate("nextdate")}}},[e("i",{staticClass:"fa fa-angle-right text-white"})])],1),e("span",{staticClass:"p-actions float-right mydbsize"},[e("a",{staticClass:"p-action-btn text-white dash",attrs:{title:t.$t("ACTION_NAME")},on:{click:function(e){t.ShowAction=!0}}},[e("em",{staticClass:"fa fa-plus"}),e("br"),t._v(t._s(t.$t("ACTION_NAME"))+" ")]),e("a",{staticClass:"p-action-btn text-white dash",attrs:{title:t.$t("FlaggedScreenshot")},on:{click:t.GetFlaggedScreenshotListing}},[e("em",{staticClass:"fa fa-flag"}),e("br"),t._v(t._s(t.$t("FlaggedScreenshot"))+" ")])]),t.ShowAction?e("span",{staticClass:"action-list-box expand",staticStyle:{width:"224px",display:"block",top:"-200px",right:"15px","border-bottom":"none !important"}},[e("span",{staticClass:"list-actions w-100 fsm-list",staticStyle:{"font-size":"14px"},attrs:{id:"action-list"}},[e("a",{staticClass:"actions-onclick",attrs:{title:"",href:"javascript:;",id:"chkAll","data-toggle-tooltip":"tooltip"},on:{click:function(e){return t.SelectAllScreenshots("chkAll")}}},[e("i",{staticClass:"fa fa-check-square-o text-info action-icon fa-size pr-2"}),e("span",{staticClass:"text",attrs:{title:"Select All"}},[t._v("Select All")])]),e("a",{staticClass:"actions-onclick",attrs:{title:"",href:"javascript:;",id:"dechkAll","data-toggle-tooltip":"tooltip"},on:{click:function(e){return t.SelectAllScreenshots("dechkAll")}}},[e("i",{staticClass:"fa fa-times-circle-o text-secondary action-icon fa-size pr-2"}),e("span",{staticClass:"text",attrs:{title:"Deselect All"}},[t._v("Deselect All")])]),e("a",{staticClass:"actions-onclick",attrs:{title:"",checkprivilege:"Yes",href:"javascript:;",id:"deleteselected","data-toggle-tooltip":"tooltip"},on:{click:function(e){return t.SelectAllScreenshots("Delete")}}},[e("i",{staticClass:"fa fa-trash text-danger action-icon fa-size pr-2"}),e("span",{staticClass:"text",attrs:{title:"Delete"}},[t._v("Delete")])]),e("a",{staticClass:"actions-onclick",attrs:{title:"",href:"javascript:;",id:"flagselected",type:"flag",checkprivilege:"Yes","data-toggle-tooltip":"tooltip"},on:{click:function(e){return t.SelectAllScreenshots("flag")}}},[e("i",{staticClass:"fa fa-flag text-primary action-icon fa-size pr-2"}),e("span",{staticClass:"text",attrs:{title:"Flag"}},[t._v("Flag")])]),e("a",{staticClass:"actions-onclick",attrs:{title:"",href:"javascript:;",id:"unflagselected",type:"unflag",checkprivilege:"Yes","data-toggle-tooltip":"tooltip"},on:{click:function(e){return t.SelectAllScreenshots("unflag")}}},[e("i",{staticClass:"fa fa-flag-o text-dark action-icon fa-size pr-2"}),e("span",{staticClass:"text",attrs:{title:"UnFlag"}},[t._v("UnFlag")])]),e("i",{staticClass:"fa fa-times close close-action",attrs:{id:"closeaction","aria-hidden":"true"},on:{click:function(e){t.ShowAction=!1}}})])]):t._e()]),t.noRecord?e("div",{staticClass:"listing mt-2"},[e("div",{staticClass:"table-responsive table-fix-header"},[e("table",{staticClass:"table table-bordered mt-0",staticStyle:{width:"100%"},attrs:{id:"Reportpdf","aria-label":"Report Preview Listing"}},[e("tbody",[e("tr",{staticStyle:{cursor:"initial"}},[e("td",{attrs:{colspan:"4"}},[e("div",{staticClass:"text-center text-danger d-flex align-items-center justify-content-center norecs"},[t._v(" "+t._s(t.$t("NoRecordfound")))])])])])])])]):e("div",{staticClass:"border time_infobx",attrs:{id:"divscreenslist"}},[e("div",{staticClass:"col-lg-12 p-0"},[e("div",{staticClass:"heading-border mb-2"},[e("h5",{staticClass:"h5"},[e("span",[t._v(t._s(t.$options.filters.formatDate(t.modelinputdate)))])])])]),e("div",{staticClass:"col-lg-12 p-0 workdiary_sanp_row"},[e("ul",{staticClass:"timeline"},t._l(t.GetWorkDiaryListing,(function(a,s){return e("li",{staticClass:"timeline-inverted"},[e("div",{staticClass:"timeline-badge warning workdiary_timecontainer",staticStyle:{"z-index":"auto"}},[e("div",{staticClass:"timeline-check snap_checkbox custom-checkbox"},[e("input",{staticClass:"masterchk custom-control-input",class:"workdiarylist"+s,attrs:{type:"checkbox","data-change-id":"no",id:"ckmainfram-"+a.timeFrame},domProps:{value:a.timeFrame},on:{change:function(e){return t.CheckAllTimeFrame("workdiarylist"+s)}}}),e("label",{staticClass:"snap_time custom-control-label",attrs:{for:"ckmainfram-"+a.timeFrame}},[t._v(t._s(a.timeFrame))])])]),e("div",{staticClass:"timeline-panel"},[e("ul",t._l(a.ScreenshotListing,(function(a,i){return e("li",[e("div",{staticClass:"card-box screenshot"},[1001==a.statuS_ID||1064==a.statuS_ID?e("div",{staticClass:"card-heading text-truncate pl-2",attrs:{title:a.screenshoT_TITLE}},[e("div",{staticClass:"snap_checkbox custom-control custom-checkbox float-left"},[e("input",{staticClass:"deletable custom-control-input",class:"workdiarylist"+s,attrs:{type:"checkbox",screenshotids:a.screenshoT_ID,flagtype:"unflagged",frame:a.timeFrame,id:a.screenshoT_ID+"|"+a.screenshoT_TYPE,"data-change-id":"no"},domProps:{value:a.screenshoT_ID}}),e("label",{staticClass:"custom-control-label",attrs:{for:a.screenshoT_ID+"|"+a.screenshoT_TYPE}})]),t._v(" "+t._s(a.screenshoT_TITLE)+" ")]):t._e(),1001==a.statuS_ID||1064==a.statuS_ID?e("div",{staticClass:"card-detail-main detail_bx"},[e("div",{staticClass:"text-center pb-3 float-left w-100 viewdetails",attrs:{screenshotid:a.screenshoT_ID}},[e("img",{staticClass:"w-100",attrs:{loading:"lazy",src:"screenShot"==a.screenshoT_TYPE?"https://cogniterblob.blob.core.windows.net/"+a.containeR_NAME+"/thumb/"+a.screenshoT_PATH:"/Content/images/vidoe-thumb.png",alt:""},on:{click:function(e){return t.GetScreenshotDetails(a)}}})]),e("div",{staticClass:"time_clk"},[e("p",[t._v(t._s(t.FormatDateToTime(a.createD_AT)))])]),a.activity>60?e("div",{staticClass:"time_lab"},[e("div",{staticClass:"time-prog bg-success"}),e("div",{staticClass:"time-prog bg-success"}),e("div",{staticClass:"time-prog bg-success"}),e("div",{staticClass:"time-prog bg-success"}),e("div",{staticClass:"time-prog bg-success"})]):a.activity>20&&a.activity<=60?e("div",{staticClass:"time_lab"},[e("div",{staticClass:"time-prog bg-warning"}),e("div",{staticClass:"time-prog bg-warning"}),e("div",{staticClass:"time-prog bg-warning"}),e("div",{staticClass:"time-prog green"}),e("div",{staticClass:"time-prog green"})]):e("div",{staticClass:"time_lab"},[e("div",{staticClass:"time-prog bg-danger"}),e("div",{staticClass:"time-prog green"}),e("div",{staticClass:"time-prog green"}),e("div",{staticClass:"time-prog green"}),e("div",{staticClass:"time-prog green"})]),e("a",{staticClass:"viewdetails",attrs:{flagtype:"unflagged",href:"javascript:void(0);",screenshotid:a.screenshoT_ID},on:{click:function(e){return t.GetScreenshotDetails(a)}}},[t._v("more...")]),1064==a.statuS_ID?e("i",{staticClass:"fa fa-flag text-danger text-right mt-2 font-20"}):t._e()]):t._e(),1058==a.statuS_ID?e("div",{staticClass:"card-heading"},[t._v(" ")]):t._e(),1058==a.statuS_ID?e("div",{staticClass:"card-detail-main detail_bx"},[t._m(1,!0),e("div",{staticClass:"time_clk"},[e("p",[t._v(t._s(t.FormatDateToTime(a.createD_AT)))])]),a.activity>60?e("div",{staticClass:"time_lab"},[e("div",{staticClass:"time-prog bg-success"}),e("div",{staticClass:"time-prog bg-success"}),e("div",{staticClass:"time-prog bg-success"}),e("div",{staticClass:"time-prog bg-success"}),e("div",{staticClass:"time-prog bg-success"})]):a.activity>20&&a.activity<=60?e("div",{staticClass:"time_lab"},[e("div",{staticClass:"time-prog bg-warning"}),e("div",{staticClass:"time-prog bg-warning"}),e("div",{staticClass:"time-prog bg-warning"}),e("div",{staticClass:"time-prog green"}),e("div",{staticClass:"time-prog green"})]):e("div",{staticClass:"time_lab"},[e("div",{staticClass:"time-prog bg-danger"}),e("div",{staticClass:"time-prog green"}),e("div",{staticClass:"time-prog green"}),e("div",{staticClass:"time-prog green"}),e("div",{staticClass:"time-prog green"})])]):t._e()])])})),0)])])})),0)])])])])]),t.ShowPostCommentPopup?e("PostComment",{attrs:{PostCommentID:t.PostCommentID,projectId:t.projectId}}):t._e(),t.ShowScreenshotDetails?e("ScreenshotDetails",{attrs:{ScreenshotDetailArray:t.ScreenshotDetailArray,ScreenShotData:t.ScreenShotData}}):t._e()],1)},i=[function(){var t=this,e=t._self._c;return e("h5",{staticClass:"h5"},[e("span",[t._v("Daily Timeline "),e("i",{staticClass:"fa fa-angle-down"})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center pb-3 float-left w-100"},[e("span",{staticClass:"discarded-img",attrs:{title:"Discarded"}},[t._v("Discarded Screenshot")])])}],o=(a("14d9"),a("9769"));let r=[{fieldName:"User",fieldType:"ddl-radio",fieldIcon:"fa fa-user",paramName:"User",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]},{fieldName:"Project",fieldType:"ddl-radio",fieldIcon:"fa fa-suitcase",paramName:"projectId",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]}];function n(t,e){var a=t;"CA"==e?o["a"].GetUsersByCompanyId().then(t=>{t.data.forEach(t=>{let e={name:t.username,value:t.user_id};a.leftSearchFields[0].listOptions.push(e)})}).catch(t=>{console.log(t)}):"PM"==e&&o["a"].ListTeamUsersByPM().then(t=>{t.data.forEach(t=>{let e={name:t.username,value:t.user_id};a.leftSearchFields[0].listOptions.push(e)})}),o["a"].GetProjectListByUserIdAndUserType().then(t=>{t.data.forEach(t=>{let e={name:t.projectname,value:t.projectid};a.leftSearchFields[1].listOptions.push(e)})})}var c={leftsearchSchema:r,bindleftCommonSearchdropdown:n},l=a("05a5"),d=function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"my-popups"},[e("div",{staticClass:"modal d-block"},[e("div",{staticClass:"modal-dialog modal-dialog-centered ui-draggable"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header ui-draggable-handle py-0"},[e("h4",{staticClass:"modal-title mt-2 pt-1",attrs:{name:"header"}},[t._v(" "+t._s(t.$t("Comment"))+" ")]),e("button",{staticClass:"close",on:{click:t.closePopup}},[e("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),e("div",{staticClass:"listing py-3 px-3"},[e("dynamic-form",{ref:"PostCommentForm",attrs:{lang:"en",buttons:t.buttons,schema:t.FormSchema},on:{OnSubmit:t.onSubmit}}),e("div",{staticClass:"listing",staticStyle:{"max-height":"465px","overflow-y":"auto"},attrs:{id:"CommentsData"}},[e("div",{staticClass:"w-100 activity-tab",attrs:{id:"accordion"}},t._l(t.PostedCommentListing,(function(a,s){return e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[e("a",{staticClass:"card-link",attrs:{"data-toggle":"collapse",href:"PostCommentListing"+s}},[e("div",{staticClass:"conversation-date heading-border"},[e("span",[t._v(t._s(t.$options.filters.formatDate(a.createdDate)))])])])]),e("div",{staticClass:"collapse show",attrs:{id:"PostCommentListing"+s,"data-parent":"#accordion"}},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"conversation-main"},[e("div",{staticClass:"conversation-time"},[e("span",[t._v(t._s(t.FormatDateToTime(a.createdDate)))])]),e("div",{staticClass:"conversation-box-con"},[e("div",{staticClass:"conversation-box"},[e("div",{staticClass:"name-circle light-yellow"},[e("img",{staticClass:"img-circle avatar",attrs:{src:"https://cogniterblob.blob.core.windows.net/"+a.containeR_NAME+"/Upload/UserProfileImage/"+a.userImage,width:"51",height:"51",alt:"Image"}})]),e("div",{staticClass:"conversation-header addednote-ticket"},[e("span",[e("span",{staticClass:"sender-name"}),e("span",{staticClass:"sender-department",attrs:{title:a.comments}},[t._v(" "+t._s(a.comments))])])]),e("div",{staticClass:"conversation-content"},[e("div",{staticClass:"col-12 p-0 notesdata"},[e("h6",{staticClass:"text-muted time"},[e("i",[e("b",[t._v(t._s(a.createdBy))]),t._v(", Posted on: "),e("span",{staticClass:"text-danger",attrs:{title:"11/28/2023 05:31:25 PM UTC"}},[t._v(t._s(t.DateDifference(a.createdDate)))])])])])])])])])])])])})),0)])],1)])])])])])},m=[],h=a("c1df"),p=a.n(h),u={props:{PostCommentID:{type:String},projectId:{type:String}},data(){return{GetCurrentDate:(new Date).toISOString().split("T")[0],PostedCommentListing:[],FormSchema:[{layoutType:"single",Data:[{astype:"TextAreaField",label:this.$t("Comment"),name:"Comment",value:"",mode:"tag",placeholder:"",config:{options:[]},validationRules:{required:!0}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-send pr-2'></i>Post New Comment",isVisible:!0}]}},created(){this.FetchCommentsData()},methods:{onSubmit(){var t=this,e=`screenids=${t.PostCommentID.ScreenshotIDwithoutType}&comment=${t.FormSchema[0].Data[0].value}`;o["a"].PostComment(e).then(e=>{e.data&&(t.FormSchema[0].Data[0].value="",t.$refs.PostCommentForm.validateForm.reset(),t.ShowAlert(t.$t("RecordsSavedSuccessfully"),"success",!0,t.$t("Alert")),t.FetchCommentsData())}).catch(t=>{console.log(t)})},FetchCommentsData(){var t=this,e=`id=${t.PostCommentID.ScreenshotIDwithoutType}&${t.projectId}`;o["a"].GetComments(e).then(e=>{e.data.length>0&&(t.PostedCommentListing=e.data)}).catch(t=>{console.log(t)})},FormatDateToTime(t){return p()(t).format("LT")},closePopup(){var t=this;t.$parent.ClosePostComment()},DateDifference(t){var e=this,a=new Date,s=Math.ceil(Math.floor(a.getTime()-new Date(t).getTime())/1e3),i=Math.floor(s/3600),o=s%3600,r=Math.floor(o/60),n=Math.floor(s/86400);if(s<60)return e.$t("FewSecondsAgo");if(s<120)return e.$t("minutesago");if(s<2700)return r+" "+e.$t("minutesago");if(s<5400)return e.$t("an")+" "+e.$t("hourago");if(s<86400)return i+" "+e.$t("hourago");if(s<172800)return e.$t("Yesterday");if(s<2592e3)return n+" "+e.$t("daysago");if(s<31104e3){var c=Math.floor(n/30);return c<=1?"1 "+e.$t("monthsago"):c+" "+e.$t("monthsago")}var l=Math.floor(n/365);return l<=1?"1 "+e.$t("yearsago"):l+" "+e.$t("yearsago")}}},g=u,v=a("2877"),C=Object(v["a"])(g,d,m,!1,null,null,null),f=C.exports,_=a("4b91"),S=a("be92"),D=a("b0ac");const{GetUserInfo:b}=Object(S["d"])(Object(D["b"])());var y={components:{leftSearch:l["a"],PostComment:f,ScreenshotDetails:_["a"]},data(){return{isLoading:!1,leftSearchFields:c.leftsearchSchema,TotalRecords:0,CurrentPage:1,TotalPages:0,sortBy:"",sortExp:"",pageSize:10,pageNum:1,applicationCode:"",noRecord:!0,noRecordOfClockedHours:!0,noRecordOfApplicationTime:!0,modelinputdate:(new Date).toISOString().split("T")[0],WorkDiaryListing:[],GetWorkDiaryListing:[],Userid:"User=0",projectId:"projectId=0",GetDailyClockedHours:[],GetDailyApplicationTime:[],ShowAction:!1,ShowPostCommentPopup:!1,ShowScreenshotDetails:!1,PostCommentID:{},ScreenshotDetailArray:[],ScreenShotData:{},ToggleTimeLine:"display: block;",attrs:[{highlight:{style:{background:""},contentStyle:{color:""}},dates:null}]}},async created(){this.setTourGuideSteps(0),await this.GetClockedHoursDetails(),await this.GetApplicationTime(),await this.FetchData(),await this.FetchMonthlyScreenshotData(),c.bindleftCommonSearchdropdown(this,b.value.UserType)},mounted(){c.leftsearchSchema.forEach(t=>{t.value="",t.isSearch=!1})},methods:{async FetchAllData(){var t=this;null!=t.modelinputdate&&(await t.GetClockedHoursDetails(),await t.GetApplicationTime(),await t.FetchData(),await t.FetchMonthlyScreenshotData())},async FetchData(){var t=this;t.isLoading=!0;for(var e=document.getElementsByTagName("input"),a=0;a<e.length;a++)"checkbox"==e[a].type&&(e[a].checked=!1);var s=null;null!=t.modelinputdate&&(s=t.$options.filters.formatDate(t.modelinputdate));var i=`${t.projectId}&search=${s}&flagStatus=null&WorkingLanguage=null&${t.Userid}`;await o["a"].GetAllData(i).then(e=>{if(e.data.listing.length>0){t.WorkDiaryListing=e.data.listing;var a="",s=[];t.GetWorkDiaryListing=[];for(let e=0;e<t.WorkDiaryListing.length;e++)if(""==a)a=t.WorkDiaryListing[e].timeFrame,s.push(t.WorkDiaryListing[e]),t.GetWorkDiaryListing.push({timeFrame:a,ScreenshotListing:s});else if(a==t.WorkDiaryListing[e].timeFrame){let i=t.GetWorkDiaryListing.findIndex(t=>t.timeFrame==a);s.push(t.WorkDiaryListing[e]),t.GetWorkDiaryListing[i].ScreenshotListing=s.sort((t,e)=>t.createD_AT.localeCompare(e.createD_AT))}else a="",s=[],a=t.WorkDiaryListing[e].timeFrame,s.push(t.WorkDiaryListing[e]),t.GetWorkDiaryListing.push({timeFrame:a,ScreenshotListing:s});t.isLoading=!1,t.noRecord=!1}else t.GetWorkDiaryListing=[],t.noRecord=!0,t.isLoading=!1}).catch(t=>{console.log(t)})},FormatDateToTime(t){return p()(t).format("LT")},async leftCommonSearch(t){var e=this;if(""!=t.searchConditionJson)if(t.searchConditionJson.includes("User")&&t.searchConditionJson.includes("projectId")){let a=t.searchConditionJson.split("&");e.Userid=a[0],e.projectId=a[1]}else t.searchConditionJson.includes("projectId")?e.projectId=t.searchConditionJson:e.Userid=t.searchConditionJson;else e.Userid="",e.projectId="";await e.GetClockedHoursDetails(),await e.GetApplicationTime(),await e.FetchData(),await e.FetchMonthlyScreenshotData()},async GetClockedHoursDetails(){var t=this;t.isLoading=!0;var e=null;null!=t.modelinputdate&&(e=t.$options.filters.formatDate(t.modelinputdate));var a=`${t.Userid}&${t.projectId}&search=${e}`;await o["a"].GetClockedHours(a).then(e=>{null!=e.data?(t.GetDailyClockedHours=[],t.GetDailyClockedHours.push(e.data),t.noRecordOfClockedHours=!1,t.isLoading=!1):(t.noRecordOfClockedHours=!0,t.isLoading=!1)}).catch(t=>{console.log(t)})},async GetApplicationTime(){var t=this,e=null;t.isLoading=!0,null!=t.modelinputdate&&(e=t.$options.filters.formatDate(t.modelinputdate));var a=`screenshotId=0&${t.Userid}&${t.projectId}&langkey=en&search=${e}&duration=0&totalHours=0`;await o["a"].GetApplicationTracking(a).then(e=>{e.data.length>0?(t.GetDailyApplicationTime=e.data,t.noRecordOfApplicationTime=!1,t.isLoading=!1):(t.noRecordOfApplicationTime=!0,t.isLoading=!1)}).catch(t=>{console.log(t)})},secondsToTime(t){var e=Math.floor(t/3600),a=t%3600,s=Math.floor(a/60),i=a%60,o=Math.ceil(i),r=e+"H "+s+"M "+o+"S";return r},FindPercentageOfTotalHours(t,e){return(t/e*100).toFixed(2)},async GetDate(t){var e=this;"prevdate"==t?e.modelinputdate=p()(p()(e.modelinputdate).subtract(1,"days")).format("MM/DD/YYYY"):"todaydate"==t?e.modelinputdate=(new Date).toISOString().split("T")[0]:"nextdate"==t&&(e.modelinputdate=p()(p()(e.modelinputdate).add(1,"days")).format("MM/DD/YYYY")),await e.FetchAllData()},SelectAllScreenshots(t){for(var e=this,a=[],s=[],i=document.getElementsByClassName("deletable custom-control-input"),r=0;i[r];++r)i[r].checked&&(a.push(i[r].id),s.push(i[r].value));if("chkAll"==t){var n=document.getElementsByTagName("input");for(r=0;r<n.length;r++)"checkbox"==n[r].type&&(n[r].checked=!0)}else if("dechkAll"==t)for(n=document.getElementsByTagName("input"),r=0;r<n.length;r++)"checkbox"==n[r].type&&(n[r].checked=!1);else"Delete"==t?a.length>0?e.confirmR(e.$t("ConfirmDelete"),!0,e.$t("ConfirmDelete"),(function(){var t="screenids="+a.join(",");o["a"].Deletescreenshots(t).then(t=>{t.data?(e.ShowAlert(e.$t("DeleteScreenSuccess"),"success",!0,e.$t("Alert")),e.FetchData()):e.ShowAlert(e.$t("DeleteScreenError"),"failure",!0,e.$t("Alert"))}).catch(t=>{console.log(t)})})):e.ShowAlert(e.$t("SelectScreenshot"),"warning",!0,e.$t("Alert")):"flag"==t?a.length>0?e.confirmR(e.$t("ConfirmFlagRecords"),!0,e.$t("ConfirmFlagRecords"),(function(){var i=`screenids=${a.join(",")}&type=${t}`;o["a"].FlagScreenShots(i).then(t=>{t.data?(e.PostCommentID={ScreenshotIDwithType:a.join(","),ScreenshotIDwithoutType:s.join(",")},e.FetchData(),e.ShowPostCommentPopup=!0):e.ShowAlert(e.$t("FlagScreenError"),"success",!0,e.$t("Alert"))}).catch(t=>{console.log(t)})})):e.ShowAlert(e.$t("SelectFlag"),"warning",!0,e.$t("Alert")):"unflag"==t&&(a.length>0?e.confirmR(e.$t("ConfirmUpdationUserBreak"),!0,e.$t("ConfirmUpdationUserBreak"),(function(){var i=`screenids=${a.join(",")}&type=${t}`;o["a"].FlagScreenShots(i).then(t=>{t.data?(e.PostCommentID={ScreenshotIDwithType:a.join(","),ScreenshotIDwithoutType:s.join(",")},e.FetchData(),e.ShowPostCommentPopup=!0):e.ShowAlert(e.$t("FlagScreenError"),"success",!0,e.$t("Alert"))}).catch(t=>{console.log(t)})})):e.ShowAlert(e.$t("UnflagRecord"),"warning",!0,e.$t("Alert")))},ClosePostComment(){var t=this;t.PostCommentID="",t.ShowPostCommentPopup=!1},GetFlaggedScreenshotListing(){this.$router.push({path:"/TimeTracking/FlaggedScreenshot"})},GetScreenshotDetails(t){var e=this;e.ShowScreenshotDetails=!0,e.ScreenshotDetailArray=t,e.ScreenShotData={UserId:e.Userid,ProjectId:e.projectId,InputDate:e.modelinputdate}},CloseScreenshotDetails(){var t=this;t.ShowScreenshotDetails=!1},CheckAllTimeFrame(t){for(var e=document.getElementsByTagName("input"),a=0;a<e.length;a++)if("checkbox"==e[a].type&&e[a].className=="deletable custom-control-input "+t){var s=document.getElementsByClassName("masterchk custom-control-input "+t);s[0].checked?e[a].checked=!0:e[a].checked=!1}},async FetchMonthlyScreenshotData(){var t=this,e=p()(t.modelinputdate,"YYYY/MM/DD"),a=e.format("M"),s=e.format("YYYY"),i=`${t.Userid}&${t.projectId}&month=${a}&year=${s}`;t.attrs=[],await o["a"].GetScreenshotDates(i).then(a=>{a.data.length>0&&a.data.forEach(a=>{var i=p.a.utc(a.selecteddate);t.attrs.push({highlight:{style:{background:"#ff8080"},contentStyle:{color:"black"}},dates:new Date(parseInt(s),parseInt(e.format("M"))-1,parseInt(i.format("D")))})})}).catch(t=>{console.log(t)})},ToggleDailyTimeLine(){var t=this;"display: none;"==t.ToggleTimeLine?t.ToggleTimeLine="display: block;":t.ToggleTimeLine="display: none;"}}},T=y,k=Object(v["a"])(T,s,i,!1,null,null,null);e["default"]=k.exports}}]);
//# sourceMappingURL=chunk-bf2fbc2c.js.map