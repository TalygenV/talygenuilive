(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b93eb"],{"31b9":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("section",[e("loader",{attrs:{"is-visible":t.isLoading}}),e("tg-list",{attrs:{IsShowAction:!1,listType:["List"],ModuleName:"Asset",SubModuleCode:"Asset",IdentityColumn:"ParentRelatedInfoId",PageSize:t.PageSize,HeaderText:t.$t("AssetsGroup"),ListData:t.AssetGroupingList,HeaderData:t.Headers,widgets:t.widgets,showCheckBox:!0,callbackfunction:t.FetchData,HeaderButtons:t.listheaderbuttons,TotalRecords:t.TotalRecords,SearchFields:t.leftSearchFields,RenderRowActionMethod:t.renderActions,ListDataCallBackFunction:t.FetchData,LegendArray:t.LegendArray,SortExp:t.sortExp,SortBy:t.sortBy,NorecordfoundText:t.$t("NoRecordfound")},on:{LeftsearchButtonClick:t.leftCommonSearch,PagerButtonClick:t.pagerMethod,HeaderButtonClick:t.commonHeaderButtonClick,ActionButtonClick:t.actionButtonClick,SortdataButtonClick:t.sortdata},scopedSlots:t._u([{key:"slotdata",fn:function({data:a}){return["Status"==a.column.COLUMN_NAME?[e("td",{staticClass:"text-center single-action"},[e("div",{staticClass:"cstm-drop-btn"},[e("select",{directives:[{name:"model",rawName:"v-model",value:a.row.StatusId,expression:"data.row.StatusId"}],class:1001==a.row.StatusId?"ddlupdatestatus w-80 btn-success":"ddlupdatestatus w-80 btn-danger",on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(a.row,"StatusId",e.target.multiple?i:i[0])},function(e){return t.DrpdownUpdataStatus(a.row.StatusId,a.row.ParentRelatedInfoId)}]}},[e("option",{attrs:{value:"1001",selected:"selected"}},[t._v("Active")]),e("option",{attrs:{value:"1002"}},[t._v("Inactive")])])])])]:t._e(),"CreatedAt"==a.column.COLUMN_NAME?[e("span",{staticClass:"text-dark",attrs:{title:a.row.Action}},[e("label",[t._v(t._s(t.$options.filters.formatDateTimeMMDDYYY(a.row.CreatedAt)))])])]:t._e()]}}])})],1)},o=[],s=(a("14d9"),a("1115"));let n=[{title:"Add",iconClass:"fa fa-plus",callbackfunction:"AddGroup",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1},{title:"Active",iconClass:"fa fa-check",callbackfunction:"UpdateActiveAddGroup",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!1,isEnabledOnSelectedRow:!0},{title:"Inactive",iconClass:"fa fa-close",callbackfunction:"UpdateInActiveAddGroup",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!1,isEnabledOnSelectedRow:!0},{title:"Delete",id:"DeleteMultiple",iconClass:"fa fa-trash",callbackfunction:"DeleteContainer",additionalClass:"",isdisabled:!0,isvisible:!0,id:"DeleteMultiple",checkPrivilege:!1,isEnabledOnSelectedRow:!0}],r=[{fieldName:"Products Container List",fieldType:"text",fieldIcon:"fa fa-list",paramName:"search",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]}];async function c(t,e,a){var i=t,o=[];if("Location"==a||"Locationto"==a){var n="reqForm=";await s["a"].GetLocationByCompanyId(n).then((function(t){var e=i.MakeNormalArray(t.data);e=e.data,$.each(e,$.proxy((function(t,a){var i=a.PARENT_LOCATION_ID,s=$.grep(o,(function(t,e){return t.id==i}));if(0==s.length){var n=$.grep(e,(function(t,e){return t.PARENT_LOCATION_ID==i}));if(n.length>0&&n[0].LOCATION_NAME){var r={id:i,label:n[0].LOCATION_NAME,icon:"fa fa-map-marker",children:n.map(t=>({id:t.COMPANY_LOCATION_ID,label:t.LOCATION_NAME,icon:"fa fa-map-marker"}))};o.push(r)}}}))),console.log(o),i.leftSearchFields[0].listOptions=o}))}}var d={buttons:n,leftsearchSchema:r,bindleftCommonSearchdropdown:c},l={data(){return{listheaderbuttons:d.buttons,leftSearchFields:d.leftsearchSchema,listActions:d.listActions,LegendArray:[],widgets:[],AssetGroupingList:[],pageNum:1,search:"",PageSize:10,PageNumber:1,isPaged:1,PageSizeOption:null,StatusListForListing:[],DetalisData:[],Headers:[{COLUMN_NAME:"UniqueName",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("Container"),DISPLAY_ORDER:1},{COLUMN_NAME:"ItemCode",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("ItemCode"),DISPLAY_ORDER:2},{COLUMN_NAME:"GroupAssets",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("Items"),DISPLAY_ORDER:3},{COLUMN_NAME:"LocationName",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("Location"),DISPLAY_ORDER:4},{COLUMN_NAME:"CreatedBy",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("CreatedBy"),DISPLAY_ORDER:4},{COLUMN_NAME:"CreatedAt",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("CreatedAt"),DISPLAY_ORDER:4,settings:{isInSlot:!0}},{COLUMN_NAME:"Status",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("Status"),DISPLAY_ORDER:4,settings:{isInSlot:!0}}],noRecord:!0,TotalRecords:0,CurrentPage:1,TotalPages:0,sortBy:"",sortExp:"",pageNum:1,locationId:"",locationfrom:"",searchcondition:"",CreateAt:"",isLoading:!1}},async created(){var t=this;await t.GetPageSize(),d.bindleftCommonSearchdropdown(t,"Asset","Location"),d.bindleftCommonSearchdropdown(t,"Asset","Locationto"),await t.FetchData()},methods:{async GetPageSize(){var t=this,e="key=DefaultPageSize";await s["a"].GetConfigurationValueForCompanyByKey(e).then(e=>{null!=e.data&&(t.PageSize=parseInt(e.data))})},columnDataFormatter:function(t,e){return t[e.COLUMN_NAME]},async FetchData(){var t=this,e=`&pageSize=${t.PageSize}&pageNum=${t.PageNumber}&sortBy=${t.sortBy}&sortExp=${t.sortExp}&${t.searchCondition}`;await s["a"].GetAssetGrouping(e).then(e=>{null!=e.data&&(console.log("resp",e.data),e.data.length>0?(t.AssetGroupingList=e.data,t.TotalRecords=e.data[0].TotalRecord,t.TotalPages=Math.ceil(t.TotalRecords/t.PageSize),t.CurrentPage=t.PageNumber,t.noRecord=!1,t.listheaderbuttons[1].isdisabled=!0,t.listheaderbuttons[2].isdisabled=!0,t.listheaderbuttons[3].isdisabled=!0):(t.noRecord=!0,t.isLoading=!1,t.AssetGroupingList=[],t.TotalRecords=0))})},leftCommonSearch:function(t){this.PageNumber=t.PageNumber,this.isPaged=1,"undefined"!=typeof t.searchCondition?this.searchCondition=t.searchConditionJson:this.searchCondition="",this.FetchData()},currentPageMethod:function(t){this.PageSize=t.PageSize,this.PageNumber=t.PageNumber,this.FetchData()},GetPageSizeOption:function(){for(var t=[],e=10,a=e;a<e+95;a+=5)t.push(a);this.PageSizeOption=t},pagerMethod:function(t){this.PageSize=t.PageSize,this.PageNumber=t.PageNumber,this.FetchData()},commonHeaderButtonClick(t){switch(t.callbackfunction){case"AddGroup":this.AddAssetGroup();break;case"UpdateActiveAddGroup":this.UpdateActiveAddGroup();break;case"UpdateInActiveAddGroup":this.UpdateInActiveAddGroup();break;case"DeleteContainer":this.DeleteContainer();break}},sortdata:function(t){var e="sort tb_headerSortDown";this.sortBy=t,t===this.sortBy&&(""==this.sortBy?(this.sortBy="ASC",e="sort tb_headerSortDown"):"ASC"==this.sortExp?(this.sortExp="DESC",e="sort tb_headerSortUp"):(this.sortExp="ASC",e="sort tb_headerSortDown")),this.FetchData(),$("#"+t+"  span:first-child").attr("class",e)},DrpdownUpdataStatus(t,e){var a=this,i=t,o=e;a.confirmR(a.$t("Are you sure to update this record?"),!0,!1,(function(t){var e=`id=${o}&statusId=${i}`;s["a"].UpdateContainerStatus(e).then(t=>{"success"==t.data.status&&(a.ShowAlert(a.$t("StatusUpdated","Success",!0,a.$t("Alert"))),a.FetchData())})})),a.FetchData()},AddAssetGroup:function(){this.$router.push({name:"AddProductContainer"})},UpdateActiveAddGroup:function(){var t=this,e="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){e.length>0&&(e+=","),e+=$(this).val()})),e.length>0&&t.confirmR(t.$t("Are you sure, you want to mark the selected status from Inactive to Active?"),!0,!1,(function(a){var i=`id=${e}&statusId=1001`;s["a"].UpdateActiveInactiveAddGroup(i).then(e=>{e.data?(t.ShowAlert(t.$t("StatusUpdated","Success",!0,t.$t("Alert"))),t.FetchData()):t.ShowAlert(t.$t("DeletedError",[t.$t("Group_Container")]),"failure",!0,t.$t("Alert"))})}))},UpdateInActiveAddGroup:function(){var t=this,e="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){e.length>0&&(e+=","),e+=$(this).val()})),e.length>0&&t.confirmR(t.$t("Are you sure, you want to mark the selected status from Inactive to Active?"),!0,!1,(function(a){var i=`id=${e}&statusId=1002`;s["a"].UpdateActiveInactiveAddGroup(i).then(e=>{e.data?(t.ShowAlert(t.$t("StatusUpdated","Success",!0,t.$t("Alert"))),t.FetchData()):t.ShowAlert(t.$t("DeletedError",[t.$t("Group_Container")]),"failure",!0,t.$t("Alert"))})}))},actionButtonClick(){},DeleteContainer:function(){var t=this,e="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){e.length>0&&(e+=","),e+=$(this).val()})),e.length>0&&t.confirmR(t.$t("ConfirmDelete"),!0,t.$t("Delete")+"  "+t.$t("Group_Container"),(function(){var a={ids:e,tblname:"TALYGEN_ASSET_GROUP",primarycolname:"parent_asset_related_info_id"};t.isLoading=!0;var i=JSON.stringify(a);s["a"].DeleteItemsGroup(i).then(e=>{t.isLoading=!1,e.data?(t.AssetGroupingList=[],t.FetchData(),t.ShowAlert(t.$t("DeletedSuccess",[t.$t("Group_Container")]),"Success",!0,t.$t("Alert"))):t.ShowAlert(t.$t("DeletedError",[t.$t("Group_Container")]),"failure",!0,t.$t("Alert"))})}))}}},u=l,h=a("2877"),A=Object(h["a"])(u,i,o,!1,null,null,null);e["default"]=A.exports}}]);
//# sourceMappingURL=chunk-2d0b93eb.js.map