(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0aa24158"],{"85c7":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("section",[e("loader",{attrs:{"is-visible":t.isLoading}}),e("tg-list",{attrs:{IsShowAction:!1,ModuleName:"Ticketing",SubModuleCode:"CANNED_REPLY",RenderRowActionMethod:t.renderActions,IdentityColumn:"TEMPLATE_ID",HeaderText:t.$t("CannedReplyTemplate"),ListData:t.SAData,HeaderData:t.Headers,HeaderButtons:t.listheaderbuttons,TotalRecords:t.TotalRecords,SearchFields:t.leftSearchFields,ListDataCallBackFunction:t.FetchData,showCheckBox:!0,SortExp:t.SortExp,SortBy:t.SortBy,NorecordfoundText:t.$t("NoRecordfound")},on:{ActionButtonClick:t.actionButtonClick,LeftsearchButtonClick:t.leftCommonSearch,PagerButtonClick:t.pagerMethod,HeaderButtonClick:t.commonHeaderButtonClick,SortdataButtonClick:t.sortdata},scopedSlots:t._u([{key:"slotdata",fn:function({data:a}){return["STATUS_ID"==a.column.COLUMN_NAME?[t.isCRMShowStausDrop(a.row.STATUS_ID,"Ticketing")?e("listing-status",{ref:"updatestatus",attrs:{isfor:"CannedReply",dataid:a.row.TEMPLATE_ID,"data-controller":"Ticketing",statuslist:t.StatusListForListing,item:a.STATUS_ID,"data-action":"index",dataselected:1001==a.row.STATUS_ID?"Active":"Inactive",callbackfunction:t.FetchData,isselectedvaluestring:!0}}):t._e()]:t._e(),"TEMPLATE_NAME"==a.column.COLUMN_NAME?[e("a",{staticClass:"textstyle",attrs:{title:a.row[a.column.COLUMN_NAME],"data-toggle-tooltip":"tooltip"},on:{click:function(e){return t.EditCannedReply(a.row.TEMPLATE_ID)}}},[t._v(" "+t._s(a.row[a.column.COLUMN_NAME])+" ")])]:t._e()]}}])}),t.IsAddCannedReply?e("AddCannedReply",{attrs:{TemplateId:t.TemplateId}}):t._e()],1)},s=[];let l=[{title:"Add",iconClass:"fa fa-plus",callbackfunction:"openaddCannedReply",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!0,id:"AddPolicy"},{id:"Active",title:"Active",iconClass:"fa fa-check",callbackfunction:"updateStatus",isdisabled:!0,isvisible:!0,isEnabledOnSelectedRow:!0},{id:"Inactive",title:"Inactive",iconClass:"fa fa-close",callbackfunction:"updateStatus",isdisabled:!0,isvisible:!0,isEnabledOnSelectedRow:!0},{id:"DeleteMultiple",title:"Delete",iconClass:"fa-trash-o",callbackfunction:"commonDeleteData",isdisabled:!0,isvisible:!0,isEnabledOnSelectedRow:!0}],n=[{fieldName:"Title",fieldType:"text",fieldIcon:"fa fa-envelope",fieldSearchConditionName:[""],paramName:"search",isSearch:!1,value:"",listOptions:[]}];var o={buttons:l,leftsearchSchema:n},d=a("9769"),c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-popups"},[e("loader",{attrs:{"is-visible":t.isLoading}}),e("div",{staticClass:"modal d-block"},[e("div",{staticClass:"modal-dialog modal-dialog-centered"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header theme-primary partition-full d-flex"},[e("h4",{staticClass:"modal-title"},[t._v(t._s(t.$t("ManageReplyTemplate")))]),e("button",{staticClass:"close",attrs:{type:"button"},on:{click:t.Close}},[e("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),e("div",{staticClass:"modal-body"},[e("dynamic-form",{attrs:{lang:"en",buttons:t.buttons,schema:t.FormSchema},on:{OnSubmit:t.onSubmit},scopedSlots:t._u([{key:"tgslot-Description",fn:function({data:a}){return[e("ckeditor",{attrs:{editor:t.editor},on:{ready:t.onReady},model:{value:a.fieldInfo.value,callback:function(e){t.$set(a.fieldInfo,"value",e)},expression:"data.fieldInfo.value"}}),e("span",{staticClass:"invalid-feedback d-block",attrs:{name:"Header"}},[t._v(t._s(a.error))])]}}])})],1)])])])],1)},r=[],u={props:{TemplateId:{required:!0}},data(){return{editor:this.CLASSIC_EDITOR,AddEditTemplateID:0,FormSchema:[{layoutType:"triple",Data:[{astype:"TextField",label:this.$t("Canned Reply Name"),name:"CannedReplyName",value:"",placeholder:this.$t("EnterCannedReplyName"),validationRules:{required:!0,max:100}},{astype:"SelectField",label:this.$t("Status"),name:"Status",value:"",config:{options:[{value:"1001",name:"Active"},{value:"1002",name:"InActive"}]},placeholder:this.$t("SelectStatus"),validationRules:{required:!0,max:100}},{astype:"RadioField",label:this.$t("Accessibility"),name:"Accessibility",value:"0",config:{options:[{value:"1",name:"Public"},{value:"0",name:"Private"}]},placeholder:this.$t("SelectStatus"),validationRules:{required:!0,max:100}}]},{layoutType:"single",Data:[{astype:"SlotField",label:this.$t("Description"),name:"Description",value:"",placeholder:"",config:{options:[]},settings:{isInSlot:!0},visibility:!0,validationRules:{required:!0,max:4e3}}]}],buttons:[{type:"submit",class:"btn btn-success save",text:"<i class='fa fa-save pr-2'></i>Submit",onClick:this.UploadFileWithClaim},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Cancel",onClick:this.Close}]}},created:async function(){this.TemplateId>0&&this.FetchData()},methods:{onReady(t){t.ui.getEditableElement().parentElement.insertBefore(t.ui.view.toolbar.element,t.ui.getEditableElement())},FetchData:async function(){var t=this,e="TemplateID="+t.TemplateId;d["a"].GetTemplateDetails(e).then(e=>{if("Success"==e.data.status&&e.data.result.length>0){var a=e.data.result[0];t.FormSchema[0].Data[0].value=a.TEMPLATE_NAME,t.FormSchema[0].Data[1].value=a.STATUS_ID,t.FormSchema[0].Data[2].value=a.IS_PUBLIC,t.FormSchema[1].Data[0].value=a.TEMPLATE_DESC,t.AddEditTemplateID=a.TEMPLATE_ID}})},Close:function(){this.$parent.IsAddCannedReply=!1},onSubmit(t,e){var a=this,i={TemplateId:a.AddEditTemplateID,CannedReplyName:t.CannedReplyName,StatusId:t.Status,Accessibility:t.Accessibility,Description:t.Description},s=JSON.stringify(i);d["a"].SaveCannedReply(s).then(t=>{"Success"==t.data.status?("INSERT"==t.data.result?(a.ShowAlert(a.$t("AddedSuccess",[a.$t("CannedReply")]),"success",!0,a.$t("Alert")),a.Close()):"UPDATE"==t.data.result?a.ShowAlert(a.$t("UpdatedSuccess",[a.$t("CannedReply")]),"success",!0,a.$t("Alert")):"ALLREADYEXIST"==t.data.result?a.ShowAlert(a.$t("AlreadyExists",[a.$t("CannedReply")]),"failure",!0,a.$t("Alert")):a.ShowAlert(a.$t("AddedError",[a.$t("Resource")]),"failure",!0,a.$t("Alert")),a.Close(),a.$parent.FetchData()):(a.ShowAlert(a.$t("AddedError",[a.$t("Resource")]),"failure",!0,a.$t("Alert")),a.Close())})}}},h=u,S=a("2877"),p=Object(S["a"])(h,c,r,!1,null,null,null),m=p.exports,f={components:{AddCannedReply:m},data(){return{isLoading:!1,IsAddCannedReply:!1,listheaderbuttons:o.buttons,leftSearchFields:o.leftsearchSchema,StatusListForListing:[{STATUS:"Active",STATUS_ID:1001,STATUS_COLOR:"#ffffff",STATUS_BG_COLOR:"#28a745"},{STATUS:"Inactive",STATUS_ID:1002,STATUS_COLOR:"#ffffff",STATUS_BG_COLOR:"#d72435"}],Headers:[{COLUMN_NAME:"TEMPLATE_NAME",DATA_TYPE:"string",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Title",DISPLAY_ORDER:1,settings:{isInSlot:!0}},{COLUMN_NAME:"STATUS_ID",DATA_TYPE:"string",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Status",DISPLAY_ORDER:2,settings:{isInSlot:!0}}],SAData:[],SortBy:"",SortExp:"",TotalRecords:0,PageNumber:1,PageSize:10,searchCondition:"",TemplateId:null}},created:function(){this.FetchData()},methods:{FetchData:function(){var t=this;t.isLoading=!0;var e=`sortBy=${t.SortBy}&sortExp=${t.SortExp}&pageSize=${t.PageSize}&pageNumber=${t.PageNumber}&${t.searchCondition}`;d["a"].GetTemplateList(e).then(e=>{"Success"==e.data.status&&(t.isLoading=!1,e.data.result.length>0?(t.SAData=e.data.result,t.TotalRecords=e.data.result[0].TOTAL_RECORD,t.TotalPages=Math.ceil(t.TotalRecords/t.PageSize),t.CurrentPage=t.PageNumber):t.SAData=[])})},commonHeaderButtonClick:function(t){switch(t.callbackfunction){case"openaddCannedReply":this.openaddCannedReply();break;case"commonDeleteData":this.commonDeleteData();break;case"updateStatus":this.UpdateStatus(t.id);break}},renderActions:function(){},pagerMethod:function(t){this.PageSize=t.PageSize,this.PageNumber=t.PageNumber,this.FetchData()},leftCommonSearch:function(t){this.PageNumber=t.PageNumber,this.isPaged=1,"undefined"!=typeof t.searchConditionJson?this.searchCondition=t.searchConditionJson:this.searchCondition="",this.FetchData()},actionButtonClick:function(){},sortdata:function(t){this.SortBy=t;var e="ASC";"ASC"==this.SortExp&&(e="DESC"),this.SortExp=e,this.SortBy=t,this.SortExp=e,this.PageNumber=1,this.GroupStart=this.PageNumber,this.GroupEnd=this.PageNumber+2,this.FetchData()},openaddCannedReply:function(){this.TemplateId=this.TemplateId,this.IsAddCannedReply=!0},EditCannedReply:function(t){this.TemplateId=t,this.IsAddCannedReply=!0},UpdateStatus:async function(t){var e=this;t="Active"==t?1001:1002;var a="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){a.length>0&&(a+=","),a+=$(this).val()})),a.length>0&&e.confirmR(e.$t("ConfirmUpdateStatusRecord"),!0,e.$t("Active")+"  "+e.$t("Inactive"),(function(){var i=`id=${a}&statusId=${t}&isFor=ReplyTemplate`;d["a"].updatestatus(i).then(t=>{1==t.data&&(e.listheaderbuttons[1].isdisabled=!0,e.listheaderbuttons[2].isdisabled=!0,e.listheaderbuttons[3].isdisabled=!0,e.ShowAlert(e.$t("UpdatedSuccess",[e.$t("Status")]),"success",!0,e.$t("Alert")),e.FetchData())})}))},commonDeleteData:function(t){var e=this,a="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){a.length>0&&(a+=","),a+=$(this).val()})),a.length>0?e.confirmR(e.$t("ConfirmDelete"),!0,e.$t("Delete")+"  "+e.$t("Crew"),(function(){let t=`ids=${a}&tableName=TALYGEN_REPLY_TEMPLATE&primaryKey=REPLY_TEMPLATE_ID`;d["a"].DeleteData(t).then(t=>{var a="";t.data?(e.listheaderbuttons[1].isdisabled=!0,e.listheaderbuttons[2].isdisabled=!0,e.listheaderbuttons[3].isdisabled=!0,e.FetchData(),a=e.ShowAlert(e.$t("DeletedSuccess",[e.$t("Template")]),"Success",!0,e.$t("Alert"))):a=e.ShowAlert(e.$t("DeletedError",[e.$t("Template")]),"failure",!0,e.$t("Alert")),setTimeout((function(){a.modal("hide")}),2e3)})})):alert(e.$t("Selectanyrecordtodelete"))}}},A=f,T=(a("8a7e"),Object(S["a"])(A,i,s,!1,null,null,null));e["default"]=T.exports},"8a7e":function(t,e,a){"use strict";a("bd92")},bd92:function(t,e,a){var i=a("d929");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("499e").default;s("3a36bd03",i,!0,{sourceMap:!1,shadowMode:!1})},d929:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".textstyle{color:#007bff;text-decoration:none;background-color:transparent}",""]),t.exports=e}}]);
//# sourceMappingURL=chunk-0aa24158.js.map