(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73456a30"],{"1c4f":function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,".button-container{border:none;border-radius:0;display:inline-block;padding:5px 15px}.button-container a{text-decoration:none;padding:5px 10px;margin:0 5px}.button-container a:hover{background-color:#f0f0f0}.labelalign{float:right}.text-primary{color:#fff}.card-boxes{max-width:300px}.productive-box{max-width:24%}.error-message{color:red}.left-rounded{border-top-left-radius:.25rem!important;border-bottom-left-radius:.25rem!important}.right-rounded{border-top-right-radius:.25rem!important;border-bottom-right-radius:.25rem!important}.red-orange-border{border-color:#f86245!important}.light-blue-border{border-color:#008ff5!important}.dark-blue-border{border-color:#3967d1!important}.vue-treeselect__control{border:1px solid #959595!important}.f12{font-size:12px}.line-height{line-height:12px}.fw-medium{font-weight:500}.dotted-border{border-bottom:2px dotted #dee2e6!important}.dark-blue-clr{color:#3967d1!important}.apexcharts-legend.apx-legend-position-top{top:0!important}.apexcharts-title-text{transform:translate(5px,-21px)}.productive-box h6,h6{font-weight:600}.scroll{width:140px;overflow-y:auto}.scroll:active::-webkit-scrollbar-thumb,.scroll:focus::-webkit-scrollbar-thumb,.scroll:hover::-webkit-scrollbar-thumb{visibility:visible}.scroll::-webkit-scrollbar-thumb{background-color:#a9a9a9;visibility:hidden}.scroll::-webkit-scrollbar{width:4px;height:4px}#chart .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series{pointer-events:none}",""]),t.exports=e},3080:function(t,e,a){"use strict";var r=function(){var t=this,e=t._self._c;return t.isVisible?e("div",{staticStyle:{display:"block"},attrs:{id:"divProgress"}},[t._m(0)]):t._e()},s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"lds-ring"},[e("img",{staticClass:"blob",staticStyle:{"max-width":"50%",position:"absolute",top:"18px",left:"19px"},attrs:{alt:""}}),e("div"),e("div"),e("div"),e("div")])}],o={name:"TimerProductiveLoader",props:{isVisible:{type:Boolean,required:!0},text:{type:String,required:!1,default:""}}},i=o,n=(a("311a"),a("2877")),l=Object(n["a"])(i,r,s,!1,null,null,null);e["a"]=l.exports},"311a":function(t,e,a){"use strict";a("5079")},"38de":function(t,e,a){var r=a("1c4f");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var s=a("499e").default;s("98c43504",r,!0,{sourceMap:!1,shadowMode:!1})},5079:function(t,e,a){var r=a("efcc");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var s=a("499e").default;s("07567d10",r,!0,{sourceMap:!1,shadowMode:!1})},5827:function(t,e,a){"use strict";a("38de")},efcc:function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,'.overlay{background:rgba(0,0,0,.8);height:100%;width:100%;position:fixed;top:0;left:0;z-index:9999999;display:flex;justify-content:center;align-items:center}.lds-ring img{display:none!important}@keyframes load{0%{transform:translateX(40px)}50%{transform:translateX(-30px)}to{transform:translateX(40px)}}.lds-ring{top:50%;left:50%;transform:translate(-50%,-50%);width:50px;background:#3498db}.lds-ring,.lds-ring:after,.lds-ring:before{position:absolute;height:10px;border-radius:5px;animation:load 1.8s ease-in-out infinite}.lds-ring:after,.lds-ring:before{display:block;content:""}.lds-ring:before{top:-20px;left:10px;width:40px;background:#ef4836}.lds-ring:after{bottom:-20px;width:35px;background:#f5ab35}',""]),t.exports=e},f2aa:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t._self._c;return e("section",[e("loader",{attrs:{"is-visible":t.isLoading}}),e("div",{staticClass:"d-flex align-items-start col-control-left float-left"},[e("div",{staticClass:"d-flex flex-column col_1inn"},[e("div",{staticClass:"d-flex flex-row align-items-end"},[e("div",{staticClass:"user-data mr-3"},[e("div",{staticStyle:{"font-weight":"600!important"}},[t._v(t._s(t.username))]),e("div",{staticClass:"text-sucess",staticStyle:{color:"#42c683","font-size":"12px","font-weight":"600!important"}},[t._v("Shift: "+t._s(t.starttime)+" To "+t._s(t.endtime))])]),e("div",{staticClass:"dropdown pl-2 rounded",staticStyle:{background:"#008ff5"}},[e("em",{staticClass:"fa fa-eye text-white",attrs:{"aria-hidden":"true"}}),e("select",{directives:[{name:"model",rawName:"v-model",value:t.User,expression:"User"}],staticClass:"btn pl-0 dropdown-toggle text-white",attrs:{type:"button",id:"dropdownMenu2","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.User=e.target.multiple?a:a[0]},t.handleUserChange]}},t._l(t.ddlUser,(function(a){return e("option",{key:a.id,staticClass:"text-dark",domProps:{value:a.id}},[t._v(" "+t._s(a.Name)+" ")])})),0)])])])]),e("div",{staticClass:"btn-group btn-group-toggle labelalign mt-1"},[e("button",{class:"DD"==t.dateType?"bg-success text-white button-container left-rounded":"text-black button-container left-rounded",on:{click:t.selectToday}},[t._v(" "+t._s(t.$t("Day")))]),e("button",{class:"WK"==t.dateType?"bg-success text-white button-container":"text-black button-container",on:{click:t.selectWeekly}},[t._v(" "+t._s(t.$t("Weekly")))]),e("button",{class:"MM"==t.dateType?"bg-success text-white button-container right-rounded":"text-black button-container right-rounded",on:{click:t.selectMonthly}},[t._v(" "+t._s(t.$t("Monthly"))+" ")])]),e("div",{staticClass:"col-sm-12 col-md-2 col-xl-2 labelalign col-control-right mt-1"},[e("div",{staticClass:"input-group-prepend"},["DD"==t.dateType?e("vc-date-picker",{staticClass:"timedate input-group",attrs:{name:t.fromDate,"minute-increment":5},on:{input:t.onDateChange},scopedSlots:t._u([{key:"default",fn:function({inputValue:a,inputEvents:r,togglePopover:s}){return[e("input",t._g({staticClass:"form-control",attrs:{placeholder:"M/D/YYYY"},domProps:{value:a}},r)),e("div",{staticClass:"input-group-append",on:{click:s}},[e("span",{staticClass:"input-group-text"},[e("em",{staticClass:"fa fa-calendar"})])])]}}],null,!1,3785623736),model:{value:t.fromDate,callback:function(e){t.fromDate=e},expression:"fromDate"}}):t._e(),"WK"==t.dateType?e("vc-date-picker",{staticClass:"timedate input-group",attrs:{"is-range":"","minute-increment":5},on:{input:t.onWeekDateChange},scopedSlots:t._u([{key:"default",fn:function({inputValue:a,inputEvents:r,togglePopover:s}){return[e("input",t._g({staticClass:"form-control",domProps:{value:a.start+" - "+a.end}},r)),e("div",{staticClass:"input-group-append",on:{click:s}},[e("span",{staticClass:"input-group-text"},[e("em",{staticClass:"fa fa-calendar"})])])]}}],null,!1,282243623),model:{value:t.weekDate,callback:function(e){t.weekDate=e},expression:"weekDate"}}):t._e(),"MM"==t.dateType?e("vc-date-picker",{staticClass:"timedate input-group",attrs:{"is-range":""},on:{input:t.onMonthSelected},scopedSlots:t._u([{key:"default",fn:function({inputValue:a,inputEvents:r,togglePopover:s}){return[e("input",t._g({staticClass:"form-control",attrs:{placeholder:"M/D/YYYY"},domProps:{value:a.start+" - "+a.end}},r)),e("div",{staticClass:"input-group-append",on:{click:s}},[e("span",{staticClass:"input-group-text"},[e("em",{staticClass:"fa fa-calendar"})])])]}}],null,!1,3294958983),model:{value:t.monthRange,callback:function(e){t.monthRange=e},expression:"monthRange"}}):t._e()],1)]),e("div",{staticClass:"labelalign col-control-right mt-2"},[e("label",{class:{switch:!0,"switch enabled":1==t.isTrueCheck}},[e("input",{staticClass:"form-check-input rdoticketfor custom-control-input dynamic",attrs:{type:"checkbox",id:"isTrueCheck"},domProps:{checked:t.isTrueCheck},on:{change:function(e){return t.ChangeCheckValue(t.item,e)}}}),t._m(0)])]),e("div",{staticClass:"col-md-12 col-sm-12 p-0 float-left"},[e("ul",{staticClass:"row d-flex justify-content-between mx-0 my-3 cardboxesbasenew w-100"},[e("li",[e("div",{staticClass:"border rounded light-blue-border d-flex justify-content-center align-items-center cardbase"},[t._m(1),e("div",{staticClass:"col-md-8"},[t.CheckDayselected?e("span",{staticClass:"font-14 font-weight-normal"},[t._v(t._s(t.$t("Arrivaltime")))]):t._e(),0==t.CheckDayselected?e("span",{staticClass:"font-14 font-weight-normal"},[t._v(t._s(t.$t("AverageArrivaltime")))]):t._e(),e("h5",{staticClass:"text-primary mb-0 font-24"},[t._v(" "+t._s(t.ArrivalTime)+" ")])])])]),e("li",[e("div",{staticClass:"border rounded border-warning d-flex justify-content-center align-items-center cardbase"},[t._m(2),e("div",{staticClass:"col-md-8"},[t.CheckDayselected?e("span",{staticClass:"font-14 font-weight-normal"},[t._v(t._s(t.$t("Lefttime")))]):t._e(),0==t.CheckDayselected?e("span",{staticClass:"font-14 font-weight-normal"},[t._v(t._s(t.$t("AverageLefttime")))]):t._e(),e("h5",{staticClass:"text-warning mb-0 font-24"},[t._v(" "+t._s(t.AverrageLeftTime))])])])]),e("li",[e("div",{staticClass:"border rounded border-success d-flex justify-content-center align-items-center cardbase"},[t._m(3),e("div",{staticClass:"col-md-8"},[e("span",{staticClass:"font-14 font-weight-normal"},[t._v(t._s(t.$t("ProductTime")))]),e("h5",{staticClass:"text-success mb-0 font-24"},[t._v(t._s(t.ProductiveTime))])])])]),e("li",[e("div",{staticClass:"border rounded dark-blue-border d-flex justify-content-center align-items-center cardbase"},[t._m(4),e("div",{staticClass:"col-md-8"},[e("span",{staticClass:"font-14 font-weight-normal"},[t._v(t._s(t.$t("TimeofWork")))]),e("h5",{staticClass:"dark-blue-clr mb-0 font-24"},[t._v(t._s(t.DurationTime))])])])]),e("li",[e("div",{staticClass:"border rounded border-success d-flex justify-content-center align-items-center cardbase"},[t._m(5),e("div",{staticClass:"col-md-8"},[e("span",{staticClass:"font-14 font-weight-normal"},[t._v(t._s(t.$t("Productivity")))]),e("h5",{staticClass:"text-success mb-0 font-24"},[t._v(" "+t._s(t.ProductivityPercentage))])])])]),e("li",[e("div",{staticClass:"border rounded red-orange-border d-flex justify-content-center align-items-center cardbase"},[t._m(6),e("div",{staticClass:"col-md-8"},[e("span",{staticClass:"font-14 font-weight-normal"},[t._v(t._s(t.$t("IdleTime")))]),e("h5",{staticClass:"font-24 mb-0",staticStyle:{color:"#fc5a03"}},[t._v(t._s(t.IdleTime))])])])])])]),e("div",{staticClass:"col-md-12 col-sm-12 p-0 float-left mainChart"},[e("div",{staticClass:"row-12"},[e("div",{staticClass:"border rounded p-2 my-3"},[t.isShowProductivityBar?e("VueApexCharts",{attrs:{width:"100%",height:"350px",type:"bar",options:t.options,series:t.series}}):t._e()],1)])]),e("div",{staticClass:"col-md-12 col-sm-12 p-0 float-left"},[e("div",{staticClass:"row d-flex justify-content-between mx-0 timetrackdb_pb"},[e("TimerLoader",{attrs:{"is-visible":t.ProductiveAppsLoader}}),e("div",{staticClass:"col-3 border productive-box p-0 mb-4 scroll",staticStyle:{"max-height":"444px","overflow-y":"auto",display:"block"}},[e("h6",{staticClass:"border-bottom p-2 mb-0"},[t._v(t._s(t.$t("ProductiveApps"))),e("span",{staticClass:"float-right"},[t._v(t._s(t.ProductiveTotalTime))])]),0===t.ProductiveApps.length?e("div",{staticClass:"text-center mt-4 error-message"},[e("p",{staticClass:"error-text"},[t._v("No records found.")])]):t._e(),t._l(t.ProductiveApps,(function(a,r){return e("div",{key:r,staticClass:"row mx-3 py-3 dotted-border d-flex align-items-center"},[e("div",{class:a.icon_class?"appicon "+a.icon_class:"appicon default"}),e("div",{staticClass:"col-4",attrs:{title:a.application_display_name}},[e("div",{attrs:{title:a.application_display_name}},[e("span",{staticClass:"font-15"},[t._v(t._s(t.TruncateStr(a.application_display_name,10)))]),t._v(" "),e("br")]),e("small",{attrs:{title:a.category_name}},[t._v(t._s(t.TruncateStr(a.category_name,12)))])]),e("div",{staticClass:"col-4"},[e("small",{staticClass:"text-center",style:{color:a.progress_bar_options.progress.color}},[t._v(t._s(a.percentage_duration)+"%")]),e("br"),e("ProgressBar",{attrs:{options:a.progress_bar_options,value:a.percentage_duration}})],1),e("div",{staticClass:"col-3 text-right"},[e("small",[t._v(t._s(a.duration_time))])])])}))],2),e("TimerLoader",{attrs:{"is-visible":t.UnProductiveAppsLoader}}),e("div",{staticClass:"col-3 border productive-box p-0 mb-4 scroll",staticStyle:{"max-height":"444px","overflow-y":"auto",display:"block"}},[e("h6",{staticClass:"border-bottom p-2 mb-0"},[t._v(t._s(t.$t("UnproductiveApps"))+" "),e("span",{staticClass:"float-right"},[t._v(t._s(t.UnProductiveTotalTime))])]),0===t.UnProductiveApps.length?e("div",{staticClass:"text-center mt-4 error-message"},[e("p",{staticClass:"error-text"},[t._v("No records found.")])]):t._e(),t._l(t.UnProductiveApps,(function(a,r){return e("div",{key:r,staticClass:"row mx-3 py-3 dotted-border d-flex align-items-center"},[e("div",{class:a.icon_class?"appicon "+a.icon_class:"appicon default"}),e("div",{staticClass:"col-4"},[e("div",{attrs:{title:a.application_display_name}},[e("span",{staticClass:"font-15"},[t._v(t._s(t.TruncateStr(a.application_display_name,10)))]),t._v(" "),e("br")]),e("small",{attrs:{title:a.category_name}},[t._v(t._s(t.TruncateStr(a.category_name,12)))])]),e("div",{staticClass:"col-4"},[e("small",{staticClass:"text-center",style:{color:a.progress_bar_options.progress.color}},[t._v(t._s(a.percentage_duration)+"%")]),e("br"),e("ProgressBar",{attrs:{options:a.progress_bar_options,value:a.percentage_duration}})],1),e("div",{staticClass:"col-3 text-right"},[e("small",[t._v(t._s(a.duration_time))])])])}))],2),e("TimerLoader",{attrs:{"is-visible":t.NeutralAppsloader}}),e("div",{staticClass:"col-3 border productive-box p-0 mb-4 scroll",staticStyle:{"max-height":"444px","overflow-y":"auto",display:"block"}},[e("h6",{staticClass:"border-bottom p-2 mb-0"},[t._v(" "+t._s(t.$t("NeutralApps"))),e("span",{staticClass:"float-right"},[t._v(t._s(t.NeutralTotalTime))])]),0===t.NeutralApps.length?e("div",{staticClass:"text-center mt-4 error-message"},[e("p",{staticClass:"error-text"},[t._v("No records found.")])]):t._e(),t._l(t.NeutralApps,(function(a,r){return e("div",{key:r,staticClass:"row mx-3 py-3 dotted-border d-flex align-items-center"},[e("div",{class:a.icon_class?"appicon "+a.icon_class:"appicon default"}),e("div",{staticClass:"col-4"},[e("div",{attrs:{title:a.application_display_name}},[e("span",{staticClass:"font-15"},[t._v(t._s(t.TruncateStr(a.application_display_name,10)))]),t._v(" "),e("br")]),e("small",{attrs:{title:a.category_name}},[t._v(t._s(t.TruncateStr(a.category_name,12)))])]),e("div",{staticClass:"col-4"},[e("small",{staticClass:"text-center",style:{color:a.progress_bar_options.progress.color}},[t._v(t._s(a.percentage_duration)+"%")]),e("br"),e("div",[e("ProgressBar",{attrs:{options:a.progress_bar_options,value:a.percentage_duration}})],1)]),e("div",{staticClass:"col-3 text-right"},[e("small",[t._v(t._s(a.duration_time))])])])}))],2),e("div",{staticClass:"col-3 border productive-box p-0 mb-4"},[e("TimerLoader",{attrs:{"is-visible":t.mostusedAppsDataloader}}),e("h6",{staticClass:"border-bottom p-2"},[t._v(t._s(t.$t("MostUsedApps")))]),0===t.mostusedAppsData.length?e("div",{staticClass:"text-center mt-4 error-message"},[e("p",{staticClass:"error-text"},[t._v("No records found.")])]):t._e(),e("div",{attrs:{id:"chart"}},[t.mostuserappdata?e("VueApexCharts",{attrs:{type:"bar",height:"300",options:t.chartOptions,series:t.series1}}):t._e()],1)],1)],1)]),e("div",{staticClass:"col-md-12 col-sm-12 p-0 float-left"},[e("div",{staticClass:"col-12 border px-0"},[e("h6",{staticClass:"mt-2 pl-2"},[t._v(t._s(t.$t("Categories")))]),0===t.AppDurationByCategories.length?e("div",{staticClass:"text-center mt-4 error-message"},[e("p",{staticClass:"error-text"},[t._v(t._s(t.$t("No_Record_Found")))])]):t._e(),t._l(t.AppDurationByCategories,(function(a,r){return e("span",{key:r},[e("small",{staticClass:"colorboxsquare",style:{background:a.color_code}}),e("small",{staticClass:"mr-3"},[t._v(t._s(a.category_name))])])})),t._m(7),e("div",{staticClass:"progress"},t._l(t.AppDurationByCategories,(function(a){return e("div",{staticClass:"progress-bar",staticStyle:{"margin-right":"3px"},style:{width:a.percentage_duration+"%"}},[e("div",{key:t.index,staticClass:"center h6",staticStyle:{"justify-content":"center","margin-bottom":"0"},style:{background:a.color_code},attrs:{title:a.duration_time,role:"progressbar","aria-valuenow":a.percentage_duration,"aria-valuemin":"0","aria-valuemax":"100"}},[t._v(" "+t._s(a.duration_time)+" ")])])})),0),e("br")],2)])],1)},s=[function(){var t=this,e=t._self._c;return e("span",{staticClass:"slider round"},[e("span",{staticClass:"slider-yes"},[t._v("Shift View")]),e("span",{staticClass:"slider-no"},[t._v("Day View")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-md-4 text-center"},[e("img",{staticClass:"py-4",attrs:{src:"https://talygenv.github.io/Vue-UI-Content/images/Arrival-Time.png"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-md-4 text-center"},[e("img",{staticClass:"py-4",attrs:{src:"https://talygenv.github.io/Vue-UI-Content/images/left-time.png"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-md-4 text-center"},[e("img",{staticClass:"py-4",attrs:{src:"https://talygenv.github.io/Vue-UI-Content/images/productive-time.png"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-md-4 text-center"},[e("img",{staticClass:"py-4",attrs:{src:"https://talygenv.github.io/Vue-UI-Content/images/Time-at-Work.png"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-md-4 text-center"},[e("img",{staticClass:"py-4",attrs:{src:"https://talygenv.github.io/Vue-UI-Content/images/productivity.png"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-md-4 text-center"},[e("img",{staticClass:"py-4",attrs:{src:"https://talygenv.github.io/Vue-UI-Content/images/idle-time.png"}})])},function(){var t=this,e=t._self._c;return e("div",[e("br")])}],o=(a("14d9"),a("1321")),i=a.n(o),n=a("9769"),l=a("87d0"),d=a.n(l),c=a("3080"),p="DD",u=[],m={components:{VueApexCharts:i.a,ProgressBar:d.a,TimerLoader:c["a"]},data(){return{User:"1",ddlUser:[{id:"1",Name:"My View"},{id:"2",Name:"Department View"},{id:"3",Name:"User View"}],isShowProductivityBar:!1,mostuserappdata:!1,options:{colors:["#42c683","#fcae18","#c0c0c0","#ededed"],chart:{type:"bar",height:400,stacked:!0,toolbar:{show:!1},zoom:{enabled:!0}},responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:0}}}],plotOptions:{bar:{horizontal:!1,columnWidth:"100%"}},dataLabels:{enabled:!1},stroke:{width:1,colors:["#fff"]},title:{text:"Productivity Graph",align:"left",margin:0,offsetX:0,offsetY:30},xaxis:{categories:[],labels:{formatter:function(t){return"DD"==p?(t.includes(":00")>0?(t=t.replace(":00",""),"0"==t[0]&&(t=t.substring(1))):t="",t):"WK"==p?(t="Monday 00:00:00"==t||"Tuesday 00:00:00"==t||"Wednesday 00:00:00"==t||"Thursday 00:00:00"==t||"Friday 00:00:00"==t||"Saturday 00:00:00"==t||"Sunday 00:00:00"==t?t.replace(/ 00:00:00/,""):"",t):t}}},yaxis:{min:0,max:100,tickAmount:4},tooltip:{enabled:!0,y:{formatter:function(t,e){let a=e.dataPointIndex;var r=e.w.globals.labels[a];if("DD"==p&&(u[a].ProductivePer===t||u[a].UnProductivePer||u[a].NeutralPer===t||u[a].NoRecord===t))return 0!=u[a].Total&&0==u[a].NoRecord?'<div class="arrow_box"><span>'+t.toFixed(2)+"%, Time : "+r+"</span></div>":", Time : "+e.w.config.xaxis.categories[a];if("WK"==p&&(u[a].ProductivePer===t||u[a].UnProductivePer||u[a].NeutralPer===t||u[a].NoRecord===t))return 0!=u[a].Total&&0==u[a].NoRecord?'<div class="arrow_box"><span>'+t.toFixed(2)+"%, Time : "+r+"</span></div>":", Time : "+e.w.config.xaxis.categories[a];if("MM"==p&&(u[a].NoRecord===t||u[a].ProductivePer===t||u[a].UnProductivePer||u[a].NeutralPer===t)){if(0==u[a].Total)return"No Record, Time : "+e.w.config.xaxis.categories[a];var s="Arrival Time:"+u[a].temp[0].track_start_time+"</br>Left Time:"+u[a].temp[0].track_stop_time+"</br>Idle Time:"+u[a].temp[0].IdleTimestr;if(0==e.seriesIndex)return s=s+"</br>Productivity(%):"+u[a].ProductivePer,s;if(1==e.seriesIndex)return s+"</br>Unproductivity(%):"+u[a].UnProductivePer;if(2==e.seriesIndex)return s+"</br>Neutral(%):"+u[a].NeutralPer}},title:{formatter:function(t){return"DD"==p||"WK"==p?t:"MM"==p?"":void 0}}}},legend:{position:"top",horizontalAlign:"right",offsetX:40}},series:[{name:"Productive App",data:[]},{name:"Neutral App",data:[]},{name:"Unproductive App",data:[]},{name:"No Record",data:[]}],fill:{type:"solid"},xaxis:{type:""},chartOptions:{colors:["#42c683","#c0c0c0","#fcae18"],chart:{type:"bar",height:450,width:250,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!0,endingShape:"rounded",dataLabels:{}}},dataLabels:{enabled:!1},dataLabels:{enabled:!0,formatter:function(t){return t+"%"},style:{fontSize:"12px"}},xaxis:{min:0,max:100,categories:[],labels:{formatter:function(t){return t+"%"}}},fill:{opacity:1},legend:{position:"top",horizontalAlign:"right",offsetX:40}},series1:[{name:"Productive App",data:[]},{name:"Unproductive App",data:[]},{name:"Neutral App",data:[]}],colors:["#3c8028","#84857f","#FFA500"],userId:"",fromDate:"",ToDate:"",ChartXAxis:"",ChartYAxis:"",timedata:[],ArrivalTime:"",AverrageLeftTime:"",DurationTime:"",duration:"",dateType:"DD",weeklyFromDate:"",startDate:new Date,endDate:new Date,monthStartDate:new Date,monthEndDate:new Date,weekDate:{start:this.startDate,end:this.endDate},monthRange:{start:this.monthStartDate,end:this.monthEndDate},updateMonthRange:!1,isLoading:!1,ProductivityPercentage:null,IdleTime:null,ProductiveTime:null,ProductiveApps:[],TempProductiveApps:[],UnProductiveApps:[],TempUnProductiveApps:[],NeutralApps:[],TempNeutralApps:[],categories:[],isShowViewAllProductive:!0,isShowViewAllUnProductive:!0,isShowViewAllNeutral:!0,ProductiveTotalTime:null,UnProductiveTotalTime:null,NeutralTotalTime:null,AppDurationByCategories:[],mostusedAppsData:[],username:"",starttime:"",endtime:"",isMostUnProductiveLoading:!1,UnProductiveAppsLoader:!1,ProductiveAppsLoader:!1,NeutralAppsloader:!1,mostusedAppsDataloader:!1,CheckDayselected:!0,isTrueCheck:!1,isShiftView:"NO"}},async created(){var t=this;t.userId=t.$route.params.id,await t.GetUserNameandShift(),p="DD",t.fromDate=new Date,t.fromDate=t.ConvertDateFormatDate(t.fromDate),t.ToDate=t.fromDate+" 23:59:59",t.formatDuration(),t.getTimeRanges(60);var e=new Date,a=new Date(e.getFullYear(),e.getMonth()+1,0).getDate(),r=new Date;r.setDate(r.getDate()-6);var s=new Date;s.setDate(s.getDate()-a),t.monthEndDate=s,t.endDate=r,t.weekDate={start:t.startDate,end:t.endDate},t.monthRange={start:t.monthStartDate,end:t.monthEndDate}},updated(){var t=this;const e=t.ConvertDateFormat(new Date);if("WK"==t.dateType){var a=new Date;a.setDate(a.getDate()-6);const r=t.ConvertDateFormat(t.startDate),s=t.ConvertDateFormat(t.endDate),o=t.ConvertDateFormat(a);if(r!=e||s!=o){const e=new Date(t.startDate);e.setDate(t.startDate.getDate()+6);const a=Math.abs(t.endDate-t.startDate);Math.ceil(a/864e5)}}else if("MM"==t.dateType&&"undefined"!==typeof t.monthStartDate&&null!==t.monthStartDate){var r=new Date;const a=new Date;var s=new Date(r.getFullYear(),r.getMonth()+1,0).getDate();a.setDate(a.getDate()-s);const o=t.ConvertDateFormatDate(a),i=t.ConvertDateFormatDate(t.monthStartDate),n=t.ConvertDateFormat(t.monthEndDate),l=new Date(t.monthStartDate);if(l.setDate(t.monthStartDate.getDate()+s),i.getTime()!==o.getTime()||n.getTime()!==e.getTime()){const e=Math.abs(t.monthEndDate-t.monthStartDate),a=Math.ceil(e/864e5);(t.monthStartDate>l||a<31)&&(t.monthRange={start:t.monthStartDate,end:l})}else t.updateMonthRange&&(t.monthRange={start:t.monthStartDate,end:l},t.updateMonthRange=!1)}},methods:{ChangeCheckValue:function(t,e){var a=$("#isTrueCheck").is(":checked");this.isShiftView=1==a?"YES":"NO",this.GetAllAPiMethods()},GetAllAPiMethods(){var t=this;t.GetTimerDashboard(),t.GetAllApps(),t.GetArrivalTime(),t.GetMostUsedApps(),t.GetUsedAppTimeDurationByCategories()},GetUserNameandShift(){var t=this;void 0==t.$route.params.id?(t.logginuserID=t.GetUserInfo.ID,t.userId=t.logginuserID):t.userId=t.$route.params.id;var e="userId="+t.userId;n["a"].GetUserNameandshift(e).then(e=>{t.username=e.data.data[0].USERNAME,t.starttime=e.data.data[0].TS[0].STARTTIME,t.endtime=e.data.data[0].TS[0].ENDTIME})},ConvertDateFormat(t){var e=new Date(t),a=("0"+(e.getMonth()+1)).slice(-2),r=("0"+e.getDate()).slice(-2),s=[e.getFullYear(),a,r].join("-");return s+" 23:59:59"},ConvertDateFormatDate(t){var e=new Date(t),a=("0"+(e.getMonth()+1)).slice(-2),r=("0"+e.getDate()).slice(-2),s=[e.getFullYear(),a,r].join("-");return s},selectToday:function(t){var e=this;e.dateType="DD",p="DD",e.CheckDayselected=!0,e.fromDate=new Date,e.fromDate=e.ConvertDateFormatDate(e.fromDate),e.ToDate=e.fromDate+" 23:59:59"},selectWeekly:function(){var t=this;t.dateType="WK",p="WK",t.CheckDayselected=!1;var e=new Date,a=e.getDay(),r=0==a?6:a-1,s=new Date(new Date(e).setDate(e.getDate()-r)),o=new Date(new Date(s).setDate(s.getDate()+6));t.weeklyFromDate=s,t.ToDate=o,t.ToDate=t.ConvertDateFormat(t.ToDate),t.weeklyFromDate=t.ConvertDateFormat(t.weeklyFromDate)},selectMonthly:function(){var t=this;t.CheckDayselected=!1,t.options.xaxis.categories=[],t.series[0].data=[],t.series[1].data=[],t.series[2].data=[],t.dateType="MM",p="MM",t.fromDate="";var e=new Date,a=e.getFullYear(),r=e.getMonth(),s=new Date(a,r,1),o=new Date(a,r+1,0);t.fromDate=s,t.ToDate=o,t.fromDate=t.ConvertDateFormat(t.fromDate),t.ToDate=t.ConvertDateFormat(t.ToDate)},GetTimerDashboard:async function(){var t=this;t.options.xaxis.categories=[],t.series[0].data=[],t.series[1].data=[],t.series[2].data=[],t.series[3].data=[];var e="";e="DD"==t.dateType?`fromDate=${t.fromDate}&toDate=${t.ToDate}&type=${t.dateType}&userIds=${t.userId}&viewType=MyView&IsShiftView=${t.isShiftView}`:"WK"==t.dateType?`fromDate=${t.ConvertDateFormatDate(t.startDate)}&toDate=${t.ConvertDateFormat(t.endDate)}&type=${t.dateType}&userIds=${t.userId}&viewType=MyView&IsShiftView=${t.isShiftView}`:`fromDate=${t.ConvertDateFormatDate(t.monthStartDate)}&toDate=${t.ConvertDateFormat(t.monthEndDate)}&type=${t.dateType}&userIds=${t.userId}&viewType=MyView&IsShiftView=${t.isShiftView}`,t.getgraphdata(e)},getgraphdata(t){var e=this;e.isLoading=!0,e.isShowProductivityBar=!1,n["a"].TimerDashboard(t).then(t=>{e.timedata=t.data.data,e.timedata&&(e.timedata.forEach(t=>{e.options.xaxis.categories.push(t.TimeIntervalAMPM),e.series[0].data.push(t.ProductivePer),e.series[1].data.push(t.NeutralPer),e.series[2].data.push(t.UnProductivePer),e.series[3].data.push(t.NoRecord)}),e.isLoading=!1,e.isShowProductivityBar=!0,setTimeout(()=>{e.setPercentageInYaxis()},200)),u=e.timedata}).catch(t=>console.log(t))},handleUserChange(){"2"===this.User&&this.$router.push({name:"DepartmentViewDasboard",params:{ddlId:"2"}}),"3"==this.User&&(this.$router.push({name:"DepartmentViewDasboard",params:{ddlId:"3"}}),n["a"].GetDepartmentwithUsers().then(t=>{this.multiselectoptions=[]}))},setPercentageInYaxis(){var t=this;$(".mainChart .apexcharts-yaxis-label").each((function(t,e){$(e).find("tspan").html($(e).find("tspan").html()+"%"),$(e).find("title").html($(e).find("title").html()+"%")})),t.setClickEventTitle()},setClickEventTitle(){const t=document.querySelectorAll(".mainChart .apexcharts-legend-series");t.forEach(t=>t.addEventListener("click",this.setPercentageInYaxis))},GetArrivalTime:function(){var t=this,e="";e="DD"==t.dateType?`fromDate=${t.fromDate}&toDate=${t.ToDate}&type=${t.dateType}&userIds=${t.userId}&viewType=MyView&IsShiftView=${t.isShiftView}`:"WK"==t.dateType?`fromDate=${t.ConvertDateFormatDate(t.startDate)}&toDate=${t.ConvertDateFormat(t.endDate)}&type=${t.dateType}&userIds=${t.userId}&viewType=MyView&IsShiftView=${t.isShiftView}`:`fromDate=${t.ConvertDateFormatDate(t.monthStartDate)}&toDate=${t.ConvertDateFormat(t.monthEndDate)}&type=${t.dateType}&userIds=${t.userId}&viewType=MyView&IsShiftView=${t.isShiftView}`,n["a"].getArrivalTimeDashboard(e).then(e=>{t.ArrivalTime=e.data.data[0][0].startTime,t.AverrageLeftTime=e.data.data[0][0].endTime,t.DurationTime=e.data.data[0][0].ScreenCaptureTime,t.ProductivityPercentage=e.data.data[0][0].productivityPercentage,t.IdleTime=e.data.data[0][0].IdleTime,t.ProductiveTime=e.data.data[0][0].ProductiveTime})},formatDuration(t){const e=Math.floor(t),a=Math.round(60*(t-e));return`${e}h ${a}m`},async onDateChange(t){var e=this;"DD"==e.dateType&&(e.fromDate=new Date(t),e.fromDate=e.ConvertDateFormatDate(e.fromDate),e.ToDate=e.fromDate+" 23:59:59",await e.GetAllAPiMethods())},async onWeekDateChange(t){var e=this;e.startDate=t.start,e.endDate=t.end,await e.GetAllAPiMethods()},async onMonthSelected(t){var e=this;e.updateMonthRange=!1,e.monthStartDate=t.start,e.monthEndDate=t.end;var a=new Date,r=new Date(a.getFullYear(),a.getMonth()+1,0).getDate();const s=new Date(e.monthStartDate);s.setDate(e.monthStartDate.getDate()+r);const o=Math.abs(e.monthEndDate-e.monthStartDate),i=Math.ceil(o/864e5);var n=new Date;n.setDate(n.getDate()-r),i<27?(e.updateMonthRange=!0,e.ShowAlert("Please select atleast 30 days.","warning",!1,e.$t("Alert")),e.monthEndDate=new Date,e.monthStartDate=n):e.monthEndDate>s&&(e.updateMonthRange=!0,e.ShowAlert("You can not select more than 30 days.","warning",!1,e.$t("Alert")),e.monthEndDate=new Date,e.monthStartDate=n),await e.GetAllAPiMethods()},getTimeRanges(t){const e=[],a=new Date,r={hour:"numeric",minute:"numeric"};for(let s=0;s<1440;s+=t)a.setHours(0),a.setMinutes(s),e.push(a.toLocaleTimeString("en",r));return e},togglePopover(){},GetAllApps:async function(){var t=this;t.isShowViewAllProductive=!0,t.isShowViewAllUnProductive=!0,t.isShowViewAllNeutral=!0,t.UnProductiveAppsLoader=!0,t.ProductiveAppsLoader=!0,t.NeutralAppsloader=!0;var e="";e="DD"==t.dateType?`fromDate=${t.fromDate}&toDate=${t.ToDate}&userIds=${t.userId}&type=${t.dateType}&viewType=MyView&IsShiftView=${t.isShiftView}`:"WK"==t.dateType?`fromDate=${t.ConvertDateFormatDate(t.startDate)}&toDate=${t.ConvertDateFormat(t.endDate)}&userIds=${t.userId}&type=${t.dateType}&viewType=MyView&IsShiftView=${t.isShiftView}`:`fromDate=${t.ConvertDateFormatDate(t.monthStartDate)}&toDate=${t.ConvertDateFormat(t.monthEndDate)}&userIds=${t.userId}&type=${t.dateType}&viewType=MyView&IsShiftView=${t.isShiftView}`,await n["a"].GetAllApps(e).then(e=>{if(null==e.data||""==e.data)return!1;t.ProductiveApps=e.data.productive,t.UnProductiveApps=e.data.unproductive,t.NeutralApps=e.data.neutral,t.ProductiveApps.length>0&&(t.ProductiveTotalTime=t.ProductiveApps[0].Totalduration),t.UnProductiveApps.length>0&&(t.UnProductiveTotalTime=t.UnProductiveApps[0].Totalduration),t.NeutralApps.length>0&&(t.NeutralTotalTime=t.NeutralApps[0].Totalduration),null!=t.ProductiveApps?(t.ProductiveApps.forEach((e,a)=>{var r={text:{color:"#FFFFFF",shadowEnable:!0,shadowColor:"#000000",fontSize:12,fontFamily:"Helvetica",dynamicPosition:!1,hideText:!0},progress:{color:e.color_code,backgroundColor:"#F2F2F2",inverted:!1},layout:{height:8,width:100,verticalTextAlign:61,horizontalTextAlign:43,zeroOffset:0,strokeWidth:30,progressPadding:0,type:"line"}};t.ProductiveApps[a].progress_bar_options=r}),t.TempProductiveApps=[],t.ProductiveApps.forEach((e,a)=>{a<5&&t.TempProductiveApps.push(e)}),t.ProductiveAppsLoader=!1):t.ProductiveAppsLoader=!1,null!=t.UnProductiveApps?(t.UnProductiveApps.forEach((e,a)=>{var r={text:{color:"#FFFFFF",shadowEnable:!0,shadowColor:"#000000",fontSize:12,fontFamily:"Helvetica",dynamicPosition:!1,hideText:!0},progress:{color:e.color_code,backgroundColor:"#F2F2F2",inverted:!1},layout:{height:8,width:100,verticalTextAlign:61,horizontalTextAlign:43,zeroOffset:0,strokeWidth:30,progressPadding:0,type:"line"}};t.UnProductiveApps[a].progress_bar_options=r}),t.TempUnProductiveApps=[],t.UnProductiveApps.forEach((e,a)=>{a<5&&t.TempUnProductiveApps.push(e)}),t.UnProductiveAppsLoader=!1):t.UnProductiveAppsLoader=!1,null!=t.NeutralApps&&(t.NeutralApps.forEach((e,a)=>{var r={text:{color:"#FFFFFF",shadowEnable:!0,shadowColor:"#000000",fontSize:12,fontFamily:"Helvetica",dynamicPosition:!1,hideText:!0},progress:{color:e.color_code,backgroundColor:"#F2F2F2",inverted:!1},layout:{height:8,width:100,verticalTextAlign:61,horizontalTextAlign:43,zeroOffset:0,strokeWidth:30,progressPadding:0,type:"line"}};t.NeutralApps[a].progress_bar_options=r}),t.TempNeutralApps=[],t.NeutralApps.forEach((e,a)=>{a<5&&t.TempNeutralApps.push(e)})),t.NeutralAppsloader=!1}),t.NeutralAppsloader=!1},GetMostUsedApps:async function(){var t=this,e="";t.mostusedAppsDataloader=!0,t.chartOptions.xaxis.categories=[],t.series1[0].data=[],t.series1[1].data=[],t.series1[2].data=[],t.mostuserappdata=!1,e="DD"==p?`fromDate=${t.fromDate}&toDate=${t.ToDate}&type=${t.dateType}&userIds=${t.userId}&viewType=MyView&IsShiftView=${t.isShiftView}`:"WK"==t.dateType?`fromDate=${t.ConvertDateFormatDate(t.startDate)}&toDate=${t.ConvertDateFormat(t.endDate)}&type=${t.dateType}&userIds=${t.userId}&viewType=MyView&IsShiftView=${t.isShiftView}`:`fromDate=${t.ConvertDateFormatDate(t.monthStartDate)}&toDate=${t.ConvertDateFormat(t.monthEndDate)}&type=${t.dateType}&userIds=${t.userId}&viewType=MyView&IsShiftView=${t.isShiftView}`,await n["a"].GetMostUsedApps(e).then(e=>{t.mostusedAppsData=e.data.data,null!=t.mostusedAppsData?(t.mostusedAppsData.forEach((e,a)=>{t.chartOptions.xaxis.categories.push(e.application_display_name),"Productive"==e.productive_type&&t.series1[0].data.push({x:e.application_display_name,y:e.percentage_duration,fillColor:"#42c683"}),"UnProductive"==e.productive_type&&t.series1[0].data.push({x:e.application_display_name,y:e.percentage_duration,fillColor:"#c0c0c0"}),"Neutral"==e.productive_type&&t.series1[0].data.push({x:e.application_display_name,y:e.percentage_duration,fillColor:"#fcae18"}),t.mostuserappdata=!0}),t.mostusedAppsDataloader=!1):(t.mostusedAppsData=[],t.mostusedAppsDataloader=!1)})},convertSecondstoTime(t){const e=new Date(1e3*t),a=e.getUTCHours(),r=e.getUTCMinutes(),s=e.getSeconds(),o=a.toString().padStart(2,"0")+":"+r.toString().padStart(2,"0")+":"+s.toString().padStart(2,"0");return o},GetUsedAppTimeDurationByCategories:async function(){var t=this,e="";e="DD"==p?`fromDate=${t.fromDate}&toDate=${t.ToDate}&userIds=${t.userId}&type=${t.dateType}&viewType=MyView&IsShiftView=${t.isShiftView}`:"WK"==t.dateType?`fromDate=${t.ConvertDateFormatDate(t.startDate)}&toDate=${t.ConvertDateFormat(t.endDate)}&userIds=${t.userId}&type=${t.dateType}&viewType=MyView&IsShiftView=${t.isShiftView}`:`fromDate=${t.ConvertDateFormatDate(t.monthStartDate)}&toDate=${t.ConvertDateFormat(t.monthEndDate)}&userIds=${t.userId}&type=${t.dateType}&viewType=MyView&IsShiftView=${t.isShiftView}`,await n["a"].GetUsedAppTimeDurationByCategories(e).then(e=>{t.AppDurationByCategories=e.data.data,null!=t.AppDurationByCategories&&(t.AppDurationByCategories.forEach((e,a)=>{var r={text:{color:"#FFFFFF",shadowEnable:!0,shadowColor:"#000000",fontSize:12,fontFamily:"Helvetica",dynamicPosition:!1,hideText:!0},progress:{color:e.color_code,backgroundColor:"#F2F2F2",inverted:!1,width:e.percentage_duration},layout:{height:10,width:e.percentage_duration,verticalTextAlign:61,horizontalTextAlign:43,zeroOffset:0,strokeWidth:30,progressPadding:0,type:"line"}};t.AppDurationByCategories[a].progress_bar_options=r}),t.TempProductiveApps=[],t.ProductiveApps.forEach((e,a)=>{a<5&&t.TempProductiveApps.push(e)}))})}}},h=m,v=(a("5827"),a("2877")),f=Object(v["a"])(h,r,s,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-73456a30.js.map