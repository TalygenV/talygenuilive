(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27b8c737"],{"0cd4":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e._self._c;return t("section",[t("tg-list",{directives:[{name:"show",rawName:"v-show",value:e.IsWorkTypeView,expression:"IsWorkTypeView"}],attrs:{IsShowAction:!0,ModuleName:"Ticketing",SubModuleCode:"FSM_work_type",LegendArray:[],RenderRowActionMethod:e.renderActions,widgets:[],IdentityColumn:"worktype_id",HeaderText:e.$t("WorkType"),listType:["List"],ListData:e.WorkTypeListing,HeaderData:e.Headers,HeaderButtons:e.listheaderbuttons,TotalRecords:e.TotalRecords,SearchFields:e.leftSearchFields,ListDataCallBackFunction:e.FetchRecords,showCheckBox:!0,SortExp:e.SortExp,SortBy:e.SortBy,NorecordfoundText:e.$t("NoRecordfound")},on:{ActionButtonClick:e.actionButtonClick,LeftsearchButtonClick:e.leftCommonSearch,PagerButtonClick:e.pagerMethod,HeaderButtonClick:e.commonHeaderButtonClick,SortdataButtonClick:e.sortdata},scopedSlots:e._u([{key:"slotdata",fn:function({data:a}){return["worktype_name"==a.column.COLUMN_NAME?[t("router-link",{attrs:{title:a.row[a.column.COLUMN_NAME],to:"/Ticketing/WorktypeDetail/"+a.row.worktype_id,"data-toggle-tooltip":"tooltip"}},[e._v(" "+e._s(a.row[a.column.COLUMN_NAME]))])]:e._e(),"duration_type"==a.column.COLUMN_NAME?["HH"==a.row.duration_type?t("td",[e._v(" "+e._s(e.$t("Hours")))]):e._e(),"MM"==a.row.duration_type?t("td",[e._v(" "+e._s(e.$t("Minutes")))]):e._e()]:e._e(),"SkillName"==a.column.COLUMN_NAME?[null==a.row.SkillName?t("td",[e._v(" -- ")]):e._e(),null!=a.row.SkillName?t("td",[e._v(" "+e._s(a.row.SkillName)+" ")]):e._e()]:e._e(),"ProductName"==a.column.COLUMN_NAME?[null==a.row.ProductName?t("td",[e._v(" -- ")]):e._e(),null!=a.row.ProductName?t("td",[e._v(" "+e._s(a.row.ProductName))]):e._e()]:e._e(),"color"==a.column.COLUMN_NAME?[t("td",{staticClass:"text-center single-action tourguide_a"},[t("span",{staticStyle:{display:"inline-block",width:"60px","border-radius":"10px",height:"17px"},style:{"background-color":a.row.color}},[e._v(" ")])])]:e._e()]}}])}),e.AddWorkTypePopup?t("AddWorkTypePopup",{attrs:{WorkTypeId:e.WtId}}):e._e()],1)},o=[];a("14d9");let s=[{title:"Add",iconClass:"fa fa-plus",callbackfunction:"openaddWorkType",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!0,id:"AddWorkType"},{title:"Delete",iconClass:"fa-trash-o",callbackfunction:"commonDeleteData",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!1,id:"DeleteMultiple",isEnabledOnSelectedRow:!0}],r=[{fieldName:"Work Type Name",fieldType:"text",fieldIcon:"fa-info-circle",fieldSearchConditionName:["TFW.worktype_name"],isSearch:!1,value:"",listOptions:[]},{fieldName:"Duration Type",fieldType:"ddl-check",fieldIcon:"fa-clock-o",fieldSearchConditionName:["TFW.duration_type"],isSearch:!1,value:"",listOptions:[{name:"Hours",value:"HH"},{name:"Minutes",value:"MM"}]}],l=[{title:"Edit",href:"javascript:void(0)",icon:"fa fa-pencil action-icon",callbackfunction:"Edit",additionalSpan:""},{title:"View",href:"javascript:void(0)",callbackfunction:"ClickOnView",icon:"fa fa-eye action-icon",additionalSpan:""}];var n={buttons:s,leftsearchSchema:r,listActions:l},c=a("9769"),d=a("b502"),u={components:{AddWorkTypePopup:d["a"]},data(){return{showSetupListingSource:!1,AddWorkTypePopup:!1,WtId:0,showExpanded:"",StatusMappingList:[],noRecords:!1,listheaderbuttons:n.buttons,leftSearchFields:n.leftsearchSchema,listActions:n.listActions,Headers:[{COLUMN_NAME:"worktype_name",DATA_TYPE:"string",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Work Type",DISPLAY_ORDER:1},{COLUMN_NAME:"SkillName",DATA_TYPE:"string",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Skills",DISPLAY_ORDER:2},{COLUMN_NAME:"ProductName",DATA_TYPE:"string",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Product","DISPLAY_ORDER ":3},{COLUMN_NAME:"duration_type",DATA_TYPE:"string",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Duration Type",DISPLAY_ORDER:4},{COLUMN_NAME:"color",DATA_TYPE:"string",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Color",DISPLAY_ORDER:5}],TotalRecords:0,PageNumber:1,PageSize:10,SortBy:"",SortExp:"",CurrentPage:1,TotalPages:0,SearchCondition:"",Color:"",WorkTypeListing:[],GroupStart:1,GroupEnd:3,conditionForInstantSearch:"",user_type:null,user_id:null,companyId:null,IsWorkTypeView:!0}},created:async function(){this.user_id=this.GetUserInfo.ID,this.user_type=this.GetUserInfo.UserType,this.companyId=this.GetUserInfo.CompanyId,await this.FetchRecords()},methods:{pagerMethod:function(e){this.PageSize=e.PageSize,this.PageNumber=e.PageNumber,this.FetchRecords()},leftCommonSearch:function(e){this.PageNumber=e.PageNumber,this.isPaged=1,"undefined"!=typeof e.searchCondition?this.searchCondition=e.searchCondition:this.searchCondition="",this.FetchRecords()},actionButtonClick(e,t,a,i){switch(e){case"Edit":this.OpenManagePopup(t.worktype_id);break;case"ClickOnView":this.WorkTypeDeatail(t.worktype_id);break}},renderActions:function(e){var t=this;let a=[];return t.listActions.forEach(e=>{let t={...e};switch(t.title){case"Edit":t.isVisible=!0;break;case"ClickOnView":t.isVisible=!0;break;default:t.isVisible=!0}a.push(t)}),a},commonHeaderButtonClick:function(e){switch(e.callbackfunction){case"commonDeleteData":this.DeleteWorkType();break;case"openaddWorkType":this.OpenManagePopup(null);break}},isBlank:function(e){return!e||/^\s*$/.test(e)},OpenManagePopup:function(e){var t=this;t.WtId=e,t.AddWorkTypePopup=!t.AddWorkTypePopup},formatDateTime:function(e){if(e)return moment(e).format(String(Globalize.culture().calendar.patterns.d).toUpperCase()+" "+String(Globalize.culture().calendar.patterns.t).replace("t","A").replace("t",""))},sortdata:function(e){this.SortBy=e;var t="ASC";"ASC"==this.SortExp&&(t="DESC"),this.SortExp=t,this.SortBy=e,this.SortExp=t,this.PageNumber=1,this.GroupStart=this.PageNumber,this.GroupEnd=this.PageNumber+2,this.FetchRecords()},onEnter:function(e){var t=this;13==e.charCode&&(e.preventDefault(),t.SearchCondition=t.SearchCondition,t.CurrentPage=1,t.PageSize=10,t.PageNumber=1,t.FetchRecords())},Searchdata:function(){var e=this;e.SearchCondition=e.SearchCondition,e.FetchRecords()},refreshList:function(){this.SearchCondition="",this.FetchRecords()},DeleteWorkType:function(e){var t=this,a="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){a.length>0&&(a+=","),a+=$(this).val()})),a.length>0?t.confirmR(t.$t("ConfirmDelete"),!0,t.$t("Delete")+"  "+t.$t("WorkType"),(function(){var e={ids:a,companyId:t.companyId,userId:t.user_id,moduleName:"FSM",refCode:"TALYGEN_FSM_WORKTYPE"},i=JSON.stringify(e);c["a"].deleteActivityData(i).then(e=>{var a="";"Success"==e.data[0].Status?($("[id^='chkAll']").prop("checked",!1).removeAttr("checked"),$("[id^='DeleteMultiple']").removeClass("enable").addClass("disabled"),$(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),t.FetchRecords(),a=t.ShowAlert(t.$t("DeletedSuccess",[t.$t("WorkType")]),"Success",!0,t.$t("Alert"))):a=t.ShowAlert(t.$t("DeletedError",[t.$t("WorkType")]),"failure",!0,t.$t("Alert")),setTimeout((function(){a.modal("hide")}),2e3)})})):alert(t.$t("Selectanyrecordtodelete"))},FetchRecords:async function(){var e=this,t="",a=`sortBy=${e.SortBy}&sortExp=${e.SortExp}&pagesize=${e.PageSize}&pagenumber=${e.PageNumber}`;t="";this.isBlank(this.searchCondition)||(t+=this.searchCondition),this.isBlank(this.conditionForInstantSearch)||(t+=this.isBlank(this.searchCondition)?this.conditionForInstantSearch:" AND "+this.conditionForInstantSearch),""!=t&&(a=a+"&search="+t),await c["a"].ServiceAppointment(a).then((function(t){""!=t.data&&null!=t.data?t.data.result.data.length>0?(e.Headers.forEach(e=>{e.settings=null,"worktype_name"==e.COLUMN_NAME&&(e.settings={isInSlot:!0}),"View"==e.COLUMN_NAME&&(e.settings={isInSlot:!0}),"Edit"==e.COLUMN_NAME&&(e.settings={isInSlot:!0}),"color"==e.COLUMN_NAME&&(e.settings={isInSlot:!0}),"duration_type"==e.COLUMN_NAME&&(e.settings={isInSlot:!0}),"SkillName"==e.COLUMN_NAME&&(e.settings={isInSlot:!0}),"ProductName"==e.COLUMN_NAME&&(e.settings={isInSlot:!0})}),e.WorkTypeListing=t.data.result.data,e.TotalRecords=t.data.result.data[0].TOTALRECORDS,e.TotalPages=Math.ceil(e.TotalRecords/e.PageSize),e.CurrentPage=e.PageNumber,$("[id^='chkAll']").prop("checked",!1).removeAttr("checked"),$("[id^='DeleteMultiple']").removeClass("enable").addClass("disabled"),$(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),e.noRecord=!1):(e.noRecord=!0,e.WorkTypeListing=[],e.TotalRecords=0):(e.noRecord=!0,e.WorkTypeListing=[],e.Headers=[],e.TotalRecords=0),setTimeout((function(){e.ResponsiveDataTable("tablelistingdata")}),500)}))},WorkTypeDeatail(e){this.$router.push({name:"WorkTypeDetail",params:{id:e}})}}},p=u,h=a("2877"),m=Object(h["a"])(p,i,o,!1,null,null,null);t["default"]=m.exports},b502:function(e,t,a){"use strict";var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"my-popups"},[t("loader",{attrs:{"is-visible":e.isLoading}}),t("div",{staticClass:"modal d-block"},[t("div",{staticClass:"modal-dialog modal-dialog-centered"},[t("div",{staticClass:"modal-content"},[t("div",{staticClass:"modal-header theme-primary partition-full d-flex"},[t("h4",{staticClass:"modal-title"},[e._v(e._s(e.$t("ManageWorkType")))]),t("button",{staticClass:"close",attrs:{type:"button"},on:{click:e.Close}},[t("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]),t("span",{staticClass:"user-guide"},[t("a",{staticClass:"ancuserguide text-white",attrs:{"data-toggle":"collapse",href:"#collapseReplyUG",role:"button","aria-expanded":"false","aria-controls":"collapseExample"}},[t("em",{staticClass:"fa fa-files-o pr-2"}),e._v(e._s(e.$t("GuideForUser")))]),t("div",{staticClass:"divancuserguide collapse overflow-auto",attrs:{id:"collapseReplyUG"}},[t("div",{staticClass:"custom-scrollbar-js",attrs:{id:"scrollbarreplyuserguideMangeView"}},[t("div",{staticClass:"con",domProps:{innerHTML:e._s(e.$t("UgAddEditWorkType"))}})])])])]),t("div",{staticClass:"modal-body"},[t("dynamic-form",{attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema},on:{OnSubmit:e.onSubmit},scopedSlots:e._u([{key:"tgslot-AutoCreateService",fn:function({data:a}){return[t("div",{staticClass:"form-group mb-0"},[t("label",{staticClass:"switch"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.fieldInfo.value,expression:"data.fieldInfo.value"},{name:"disabled",rawName:"v-disabled",value:e.disabled,expression:"disabled"}],staticClass:"form-check-input custom-control-input dynamic",attrs:{type:"checkbox",name:"IsLogin"},domProps:{checked:Array.isArray(a.fieldInfo.value)?e._i(a.fieldInfo.value,null)>-1:a.fieldInfo.value},on:{change:[function(t){var i=a.fieldInfo.value,o=t.target,s=!!o.checked;if(Array.isArray(i)){var r=null,l=e._i(i,r);o.checked?l<0&&e.$set(a.fieldInfo,"value",i.concat([r])):l>-1&&e.$set(a.fieldInfo,"value",i.slice(0,l).concat(i.slice(l+1)))}else e.$set(a.fieldInfo,"value",s)},function(t){return e.checkForAutoCreateEnable(a.fieldInfo.value)}]}}),t("span",{staticClass:"slider round",staticStyle:{cursor:"default"}},[t("span",{staticClass:"slider-yes"},[e._v(e._s(e.$t("Yes")))]),t("span",{staticClass:"slider-no"},[e._v(e._s(e.$t("No")))])])])]),e.AutoServiceDisabled?t("span",{staticClass:"text-danger",staticStyle:{"font-size":"12px"}},[e._v(e._s(e.$t("AutoServiceDisabled")))]):e._e()]}}])})],1)])])])],1)},o=[],s=(a("b7ef"),a("14d9"),a("9769")),r={props:{WorkTypeId:{type:Number,required:!0}},data(){return{isLoading:!1,fileData:[],AutoServiceDisabled:!0,FormSchema:[{layoutType:"triple",Data:[{astype:"TextField",label:this.$t("WorkTypeName"),name:"WorkTypeName",value:"",placeholder:this.$t("EnterWorkTypeName"),validationRules:{required:!0,max:100}},{astype:"TextAreaField",label:this.$t("DESCRIPTION"),name:"DESCRIPTION",value:"",placeholder:this.$t("EnterDescription"),validationRules:""},{astype:"SlotField",label:this.$t("AutoCreateService"),name:"AutoCreateService",value:"",placeholder:"",config:{options:[]},visibility:!0,validationRules:"",settings:{isInSlot:!0}},{astype:"NumericField",label:this.$t("MinimumCrewSize"),name:"MinimumCrewSize",value:"",placeholder:this.$t("EnterMinimumCrewSize"),validationRules:""},{astype:"NumericField",label:this.$t("RecommendedCrewSize"),name:"RecommendedCrewSize",value:"",placeholder:this.$t("EnterRecommendedCrewSize"),validationRules:""},{astype:"SelectField",label:this.$t("DurationType"),name:"DurationType",value:"",placeholder:this.$t("SelectDuration"),validationRules:{required:!0,max:100},config:{options:[{value:"HH",name:"Hours"},{value:"MM",name:"Minutes"}]}},{astype:"NumericField",label:this.$t("EstimateDuration"),name:"EstimateDuration",value:"",placeholder:"",validationRules:{required:!0,max:100}},{astype:"NumericField",label:this.$t("MaxDuration"),name:"MaxDuration",value:"",placeholder:"",validationRules:""},{astype:"ColorField",label:this.$t("ColorField"),name:"ColorField",value:"",placeholder:"",validationRules:{required:!0,max:100}},{astype:"FileField",showLabel:!1,name:"Attachment",label:this.$t("MaxDuration"),placeholder:"",validationRules:"",FieldIndex:0,config:{maxSize:5,accept:[{fileType:"png",iconClass:"fa-file-image-o"},{fileType:"jpg",iconClass:"fa-file-image-o"},{fileType:"pdf",iconClass:"fa-file-archive-o"}],onChange:this.GetBase64String,showAddIcon:!1,onAddButtonClick:"",multiple:!1}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Close",onClick:this.Close}]}},created:async function(){this.FetchData()},methods:{FetchData:function(){var e=this,t="WtId="+e.WorkTypeId;s["a"].FetchDataByWorktypeId(t).then((function(t){null!=t.data&&""!=t.data&&("Success"==t.data.status&&(e.FormSchema[0].Data[0].value=t.data.result.data[0].worktype_name,e.FormSchema[0].Data[1].value=t.data.result.data[0].description,e.FormSchema[0].Data[2].value=t.data.result.data[0].auto_create_sa,e.FormSchema[0].Data[3].value=t.data.result.data[0].min_crew_size,e.FormSchema[0].Data[4].value=t.data.result.data[0].rec_crew_size,e.FormSchema[0].Data[5].value=t.data.result.data[0].duration_type,e.FormSchema[0].Data[6].value=t.data.result.data[0].estimate_duration,e.FormSchema[0].Data[7].value=t.data.result.data[0].maximum_duration,e.FormSchema[0].Data[9].value=t.data.result.data[0].color),1==t.data.result.data[0].auto_create_sa&&(e.AutoServiceDisabled=!1))}))},Close:function(){this.$parent.AddWorkTypePopup=!1},checkForAutoCreateEnable:function(e){var t=this;t.AutoServiceDisabled=1!=e},GetBase64String:function(e){try{var t=this;t.fileData=[];var a=e.target.files[0],i=new FileReader;i.onload=function(e){return function(e){var i=e.target.result,o=window.btoa(i),s=a.name;t.fileName=s;var r=s.lastIndexOf("."),l=s.substring(r+1,s.length);t.fileExt+="."+l;var n='{"ContentType":"'+a.type+'","Size":"'+a.size+'","Extension":"'+l+'"}',c=a.size;t.fileSize=c;var d={attachement_mime:n,fileName:s,fileSize:a.size,contentType:a.type,base64String:o};t.fileData.push(d)}}(),i.readAsBinaryString(a)}catch(o){}},onSubmit(e,t){var a=this,i={WorkTypeID:null==a.WorkTypeId?0:a.WorkTypeId,WorktypeName:e.WorkTypeName,Desc:e.DESCRIPTION,Auto:e.AutoCreateService,MinimumCrew:e.MinimumCrewSize,Crew:e.RecommendedCrewSize,DurationType:e.DurationType,Duration:e.EstimateDuration,MaxDuration:e.MaxDuration,color:e.ColorField,due_date_offset:"",Exect:"",CommissionType:a.CommissionType,CommissionValue:a.CommissionValue,FileData:a.fileData,status_id:1001},o=JSON.stringify(i);s["a"].SaveWorkType(o).then(e=>{if("Success"==e.data.status){var t=JSON.parse(e.data.result);"ALREADY EXISTS"==t.MSG?a.ShowAlert(a.$t("AlreadyExists",[a.$t("WorkType")]),"failure",!0,a.$t("Alert")):(a.WorkTypeId>0?(a.ShowAlert(a.$t("UpdatedSuccess",[a.$t("WorkType")]),"success",!0,a.$t("Alert")),a.Close()):(a.ShowAlert(a.$t("AddedSuccess",[a.$t("WorkType")]),"success",!0,a.$t("Alert")),a.Close()),a.$parent.FetchRecords())}else a.ShowAlert(a.$t("AddedError",[a.$t("Resource")]),"failure",!0,a.$t("Alert")),a.Close()})}}},l=r,n=a("2877"),c=Object(n["a"])(l,i,o,!1,null,null,null);t["a"]=c.exports}}]);
//# sourceMappingURL=chunk-27b8c737.js.map