(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e84edc5"],{"3a96":function(t,e,a){var s=a("24fb");e=s(!1),e.push([t.i,".center-icon{display:flex;justify-content:center;align-items:center}",""]),t.exports=e},"7e62":function(t,e,a){var s=a("3a96");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var i=a("499e").default;i("7d66d60c",s,!0,{sourceMap:!1,shadowMode:!1})},"941c":function(t,e,a){"use strict";a("7e62")},"953c":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("section",{staticClass:"main-content",attrs:{id:"tabs"}},[e("tg-list",{attrs:{showCheckBox:!0,IsShowAction:!1,listType:["List"],ModuleName:"Asset",SubModuleCode:"Asset",PageSize:t.PageSize,IdentityColumn:"ASSET_TYPE_ID",HeaderText:"PRODUCT TYPE",ListData:t.RfidData,HeaderData:t.Headers,widgets:t.widgets,callbackfunction:t.FetchData,HeaderButtons:t.listheaderbuttons,TotalRecords:t.TotalRecord,SearchFields:t.leftSearchFields,RenderRowActionMethod:t.renderActions,ListDataCallBackFunction:t.FetchData,LegendArray:t.LegendArray,SortExp:t.SortExp,SortBy:t.SortBy,NorecordfoundText:t.$t("NorecordfoundText")},on:{LeftsearchButtonClick:t.leftCommonSearch,PagerButtonClick:t.pagerMethod,HeaderButtonClick:t.commonHeaderButtonClick,ActionButtonClick:t.actionButtonClick,SortdataButtonClick:t.sortdata},scopedSlots:t._u([{key:"slotdata",fn:function({data:a}){return["Image"==a.column.COLUMN_NAME?[null!=a.row.ATTACHMENT_PATH?e("div",{staticClass:"form-control p-0 border-0 text-center",attrs:{alt:"",title:""}},[e("img",{staticStyle:{"max-height":"80px"},attrs:{src:a.row.ATTACHMENT_PATH,title:""}})]):t._e(),null==a.row.ATTACHMENT_PATH?e("div",{staticClass:"form-control p-0 border-0 text-center"},[e("img",{staticStyle:{"max-height":"60px"},attrs:{src:"/Content/images/imagenotavailable.jpg",alt:"No Image Available",title:""}})]):t._e()]:t._e(),"ASSET_TYPE"==a.column.COLUMN_NAME?[a.row.ASSET_TYPE?e("span",{staticClass:"text-dark"},[e("a",{staticClass:"relatedproduct",attrs:{href:"javascript:void(0);",id:a.row.ASSET_TYPE,title:"Click here to edit Product type"},on:{click:function(e){return t.AssetTypeEdit(a.row.ASSET_TYPE_ID)}}},[e("em",{staticClass:"text-primary",attrs:{"aria-hidden":"true"}},[t._v(t._s(a.row.ASSET_TYPE))])])]):t._e()]:t._e(),"DESCRIPTION"==a.column.COLUMN_NAME?[e("span",{staticClass:"text-dark center-icon",attrs:{title:a.column.COLUMN_NAME}},[""!=a.row.DESCRIPTION?e("em",{staticClass:"text-dark center-icon"},[t._v(t._s(a.row.DESCRIPTION))]):e("em",{staticClass:"text-dark center-icon"},[t._v("--")])])]:t._e(),"IsContainer"==a.column.COLUMN_NAME?[e("span",{staticClass:"text-dark center-icon",attrs:{title:a.column.COLUMN_NAME}},[1==a.row.IS_CONTAINER?e("em",{staticClass:"text-dark center-icon"},[t._v("Yes")]):e("em",{staticClass:"text-dark center-icon"},[t._v("No")])])]:t._e(),"STATUS_NAME"==a.column.COLUMN_NAME?[e("td",{staticClass:"text-center single-action"},[e("span",{staticClass:"cstm-drop-btn"},[e("select",{directives:[{name:"model",rawName:"v-model",value:a.row.STATUS_ID,expression:"data.row.STATUS_ID"}],class:{"ddlupdatestatus w-80 btn-success":1001==a.row.STATUS_ID,"ddlupdatestatus w-80 btn-danger":1002==a.row.STATUS_ID},attrs:{name:"Reader",disabled:1003===a.row.STATUS_ID},on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(a.row,"STATUS_ID",e.target.multiple?s:s[0])},function(e){return t.changeStatus(a.row.ASSET_TYPE_ID,a.row.STATUS_ID)}]}},t._l(t.StatusListData,(function(a,s){return e("option",{key:s,attrs:{disabled:1003===a.STATUS_ID},domProps:{value:a.STATUS_ID}},[t._v(t._s(a.STATUS))])})),0)])])]:t._e()]}}])}),t.Addtype?e("div",{staticClass:"my-popups"},[e("div",{staticClass:"modal d-block"},[e("div",{staticClass:"modal-dialog modal-dialog-centered"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[t._v(" "+t._s(t.$t("ProductType"))+" ")]),e("button",{staticClass:"close",attrs:{type:"button","data-original-title":"Close"},on:{click:function(e){return t.ClosePopupProductType()}}},[e("em",{staticClass:"fa fa-times"})])]),e("AddProductType",{attrs:{FromPage:t.FromPage,AseetTypeIde:t.AseetTypeId}})],1)])])]):t._e()],1)},i=[],o=(a("14d9"),a("1115"));let n=[{title:"Add",iconClass:"fa fa-plus",callbackfunction:"addProductType",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!0},{title:"Import Product Type",iconClass:"fa fa-download",callbackfunction:"ImportProductType",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!0},{title:"Active",id:"Active",iconClass:"fa fa-check",callbackfunction:"Active",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!0,isEnabledOnSelectedRow:!0},{title:"Inactive",id:"Inactive",iconClass:"fa fa-close",callbackfunction:"Inactive",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!0,isEnabledOnSelectedRow:!0},{title:"Delete",id:"DeleteMultiple",iconClass:"fa fa-trash",callbackfunction:"DeletData",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!0,isEnabledOnSelectedRow:!0}],r=[{fieldName:"Product Type Name",fieldType:"text",fieldIcon:"fab fa-product-hunt",paramName:"search",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]}];async function c(t,e){}var d={buttons:n,leftsearchSchema:r,bindleftCommonSearchdropdown:c},l=a("f6fa"),u={components:{AddProductType:l["a"]},data(){return{listheaderbuttons:d.buttons,leftSearchFields:d.leftsearchSchema,LegendArray:[{class:"legends_medium colorboxsquare",text:"It can't be deleted, Product Type has been used."},{class:"legend-pending colorboxsquare",text:"Sample Data"}],RfidData:[],LeadStatusList:[],StatusListForListing:[],Headers:[{COLUMN_NAME:"Image",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Image",DISPLAY_ORDER:1,settings:{isInSlot:!0}},{COLUMN_NAME:"TYPE_CODE",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Product Type Code",DISPLAY_ORDER:2},{COLUMN_NAME:"ASSET_TYPE",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Product Type Name",DISPLAY_ORDER:3,settings:{isInSlot:!0}},{COLUMN_NAME:"DESCRIPTION",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Description",DISPLAY_ORDER:4,settings:{isInSlot:!0}},{COLUMN_NAME:"IsContainer",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Container",DISPLAY_ORDER:5,settings:{isInSlot:!0}},{COLUMN_NAME:"STATUS_NAME",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Status",DISPLAY_ORDER:6,settings:{isInSlot:!0}}],widgets:[],noRecord:!0,TotalRecord:0,CurrentPage:1,TotalPage:0,txtsearch:"",statusIds:"",LocationId:"",SortBy:"",SortExp:"",PageNumber:1,isPaged:1,PageSize:10,ePC_TAG:"",searchCondition:"",IsProductHistory:!1,legendProgress:[{class:"",backgroundColor:"#17a2b8",name:"Draft"},{class:"legend-Progress",backgroundColor:"",name:"Approved"},{class:"legend-pending",backgroundColor:"",name:"Pending"},{class:"",backgroundColor:"#fe6847",name:"SendForCorrection"},{class:"",backgroundColor:"#ee1313",name:"Rejected"}],privilegeParams:null,StatusListData:[],Addtype:!1,AseetTypeId:0,FromPage:""}},mounted(){document.addEventListener("click",this.handleDocumentClick)},beforeDestroy(){document.removeEventListener("click",this.handleDocumentClick)},async created(){var t=this;await t.GetPageSize(),t.privilegeParams="controller=Asset&action=",t.GetStatusList(),t.userId=t.GetUserInfo.ID,t.companyId=t.GetUserInfo.Name,setTimeout(()=>{t.FetchData()},500)},methods:{async GetPageSize(){var t=this,e="key=DefaultPageSize";await o["a"].GetConfigurationValueForCompanyByKey(e).then(e=>{null!=e.data&&(t.PageSize=parseInt(e.data))})},FetchData(){var t=this;t.isLoading=!0;var e=`pageSize=${t.PageSize}&pageNum=${t.PageNumber}&sortBy=${t.SortBy}&sortExp=${this.SortExp}&${t.searchCondition}`;o["a"].Index(e).then(e=>{null!=e.data?e.data.length>0?(t.RfidData=e.data,t.RfidData.forEach(t=>{t.isCheckBoxDisabled=!1,t.additionalClass="",1==t.IS_SAMPLE_DATA&&(t.additionalClass="sample-bar"),"1"==t.IS_USED?t.additionalClass="medium-bar":t.additionalClass="sample-bar","1"!=t.IS_USED&&1003!=t.STATUS_ID||(t.isCheckBoxDisabled=!0)}),t.TotalRecord=e.data[0].TOTAL,t.TotalPage=Math.ceil(t.TotalRecord/t.PageSize),t.CurrentPage=t.PageNumber,t.noRecord=!1,t.isLoading=!1):(t.noRecord=!0,t.RfidData=[],t.TotalRecord=0,t.isLoading=!1):t.isLoading=!1,setTimeout((function(){t.CheckBoxBootstrap()}),100),setTimeout((function(){t.ResponsiveDataTable("tablelistingdata")}),500),setTimeout((function(){t.listheaderbuttons[2].isdisabled=!0,t.listheaderbuttons[3].isdisabled=!0,t.listheaderbuttons[4].isdisabled=!0}),700)})},GetStatusList(){var t=this;t.isLoading=!0;var e="langCode=en&statusType=AssetManagement&hasglobal=true";o["a"].GetStatusList(e).then(e=>{const a=JSON.parse(e.data);t.StatusListData=a.filter(t=>1001===t.STATUS_ID||1002===t.STATUS_ID),t.isLoading=!1})},changeStatus(t,e){var a=this;a.confirmR(a.$t("Are you sure you want to change the status?"),!0,a.$t("Update")+"  "+a.$t("Group_Item"),(function(){var s="string"===typeof t?t:String(t),i=s.includes(",")?s.split(",").map(t=>t.trim()):[s.trim()];i.forEach(t=>{var s=`TableName=Talygen_asset_type&ColumnName=asset_type_id&Id=${t}&statusId=${e}`;o["a"].UpdateStatus(s).then(t=>{!0===t.data?(a.ShowAlert(a.$t("Product Type has been successfully updated."),"success",!0,a.$t("Alert")),a.listheaderbuttons[2].isdisabled=!0,a.listheaderbuttons[3].isdisabled=!0,a.listheaderbuttons[4].isdisabled=!0,a.RfidData=[],a.FetchData()):a.ShowAlert(a.$t("An error has occurred while updating Product Type. Please retry."),"error",!0,a.$t("Alert")),a.isLoading=!1})})}),(function(){a.cancelAction()}))},cancelAction(){this.FetchData()},leftCommonSearch:function(t){this.PageNumber=t.PageNumber,this.isPaged=1,"undefined"!=typeof t.searchCondition?this.searchCondition=t.searchConditionJson:this.searchCondition="",this.FetchData()},pagerMethod:function(t){this.PageSize=t.PageSize,this.PageNumber=t.PageNumber,$("[id^='chkAll']:checkbox:checked").prop("checked",!1),this.FetchData()},actionButtonClick(){},sortdata:function(t){var e="sort tb_headerSortDown";this.SortBy=t,t===this.SortBy&&(""==this.SortExp?(this.SortExp="ASC",e="sort tb_headerSortDown"):"ASC"==this.SortExp?(this.SortExp="DESC",e="sort tb_headerSortUp"):(this.SortExp="ASC",e="sort tb_headerSortDown")),this.FetchData(),$("#"+t+"  span:first-child").attr("class",e)},renderActions(t){var e=this;let a=[];return e.listActions.forEach(t=>{let e={...t};a.push(e)}),a},commonHeaderButtonClick(t){switch(t.callbackfunction){case"addProductType":this.AddProductType();break;case"ImportProductType":this.ImportProductType();break;case"Active":this.Active();break;case"Inactive":this.Inactive();break;case"DeletData":this.Delete();break}},AddProductType:function(){var t=this;t.FromPage="EditProduct",t.AseetTypeId=0,t.Addtype=!0},ClosePopupProductType:function(){var t=this;t.Addtype=!1,t.FromPage=""},AssetTypeEdit:function(t){var e=this;e.FromPage="EditProduct",e.AseetTypeId=t,e.Addtype=!0},ImportProductType:function(){var t=this;t.$router.push({path:"/Asset/ImportItemType"})},Active:function(){var t=this,e="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){e.length>0&&(e+=","),e+=$(this).val()})),t.changeStatus(e,1001)},Inactive:function(){var t=this,e="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){e.length>0&&(e+=","),e+=$(this).val()})),t.changeStatus(e,1002)},Delete:function(){var t=this,e="";o["a"].CheckPrivilege(t.privilegeParams+"Delete").then(a=>{a.data?($(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){e.length>0&&(e+=","),e+=$(this).val()})),e.length>0&&t.confirmR(t.$t("ConfirmDelete"),!0,t.$t("Delete")+"  "+t.$t("ASSET_CATALOGUE_ID"),(function(){let a=`ids=${e}&TableName=Talygen_asset_type&ColumnName=asset_type_id`;o["a"].DeleteProductType(a).then(e=>{e.data?($("[id^='chkAll']").prop("checked",!1).removeAttr("checked"),$(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),t.listheaderbuttons[4].isdisabled=!0,t.ShowAlert(t.$t("DeletedSuccess",[t.$t("Product Type")]),"Success",!0,t.$t("Alert")),t.FetchData()):t.ShowAlert(t.$t("DeletedError",[t.$t("val")]),"failure",!0,t.$t("Alert"))})}))):t.ShowAlert(t.$t("NotAuthorizedSection"),"failure",!0,"Alert")})},handleDocumentClick(t){if(t.target.classList.contains("chkItems")){var e="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){e.length>0&&(e+=","),e+=$(this).val()})),e.length>0?setTimeout((function(){vm.listheaderbuttons[2].isdisabled=!1,vm.listheaderbuttons[3].isdisabled=!1,vm.listheaderbuttons[4].isdisabled=!1}),500):setTimeout((function(){vm.listheaderbuttons[2].isdisabled=!0,vm.listheaderbuttons[3].isdisabled=!0,vm.listheaderbuttons[4].isdisabled=!0}),500)}}}},h=u,S=(a("941c"),a("2877")),A=Object(S["a"])(h,s,i,!1,null,null,null);e["default"]=A.exports}}]);
//# sourceMappingURL=chunk-0e84edc5.js.map