(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CRMManageDeal"],{a502:function(a,e,t){"use strict";t.r(e);var n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("loader",{attrs:{"is-visible":a.isLoading}}),t("section",{staticClass:"main-content"},[t("div",{attrs:{id:"divMaindealData"}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12 padding-t_8"},[t("div",{staticClass:"theme-primary partition-full"},[t("span",{staticClass:"p-name text-white"},[a._v(a._s(a.$t("ManageDeal")))])])])]),t("div",{staticClass:"border p-3"},[t("Form",{ref:"DealForm"},[t("dynamic-form",{ref:"ManageDealForm",attrs:{buttons:a.buttons,schema:a.FormSchema},on:{OnSubmit:a.saveForm}})],1),a.showaddindustryModal?t("modaladdindustry",{on:{close:function(e){a.showaddindustryModal=!1},updatedata:a.UpdateSelectJson}}):a._e(),a.showaddroletitleModal?t("modaladdroletitle",{on:{close:function(e){a.showaddroletitleModal=!1},updatedata:a.UpdateSelectJson}}):a._e(),a.showaddleadsourceModal?t("modaladdleadsource",{attrs:{callFrom:"deal"},on:{close:function(e){a.showaddleadsourceModal=!1},updatedata:a.UpdateSelectJson}}):a._e()],1)])])],1)},o=[],d=t("c7eb"),i=t("1da1"),s=(t("d3b7"),t("159b"),t("b0c0"),t("4de4"),t("99af"),t("e9c4"),t("9769")),l=t("4dad"),r=t("3a69"),c=t("e7cc"),u={components:{modaladdindustry:l["a"],modaladdroletitle:r["a"],modaladdleadsource:c["a"]},data:function(){return{isLoading:!1,dealId:this.$route.params.id,showaddindustryModal:!1,showaddroletitleModal:!1,showaddleadsourceModal:!1,userid:null,companyId:null,username:null,dateFormat:null,FormSchema:[],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save",onclick:this.saveForm},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Cancel",onClick:this.onCancel,isVisible:!0}]}},created:function(){var a=this;this.userid=this.GetUserInfo.ID,this.companyId=this.GetUserInfo.CompanyId,this.username=this.GetUserInfo.Name,this.dateFormat=this.GetUserInfo.DateFormat,this.getForm(a.dealId)},methods:{getForm:function(a){var e=this;e.isLoading=!0;var t="recordId=".concat(a,"&moduleName=CRM&subModuleCode=CRM_DEALS&langCode=en");s["a"].GetDynamicForm(t).then((function(a){null!=a&&null!=a.data&&(e.FormSchema=e.$refs.ManageDealForm.ConvertCustomFieldIntoDynamicFormObj(a.data.data),e.FormSchema.forEach((function(a,t){a.Data.forEach(function(){var t=Object(i["a"])(Object(d["a"])().mark((function t(n,o){var i;return Object(d["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("industry_type_id"==n.name&&(n.config.showAddIcon=!0,n.config.onAddButtonClick=e.openaddIndustrypopup),"lead_source_id"==n.name&&(n.config.showAddIcon=!0,n.config.onAddButtonClick=e.openaddLeadSourcepopup),"role_title_id"==n.name&&(n.config.showAddIcon=!0,n.config.onAddButtonClick=e.openaddRoleTitlepopup),"deal_state"==n.name&&""==n.value&&(n.config.options=null),"deal_id"==n.name&&(n.value=e.dealId),"deal_country"!=n.name||""==n.value){t.next=9;break}return i=a.Data.filter((function(a){return"deal_state"==a.name}))[0],t.next=9,e.GetDropDownData("ACCOUNT_STATE",i,n.value,"EDIT");case 9:"closing_date"==n.name&&""==n.value&&(n.value=new Date),n.config.onChange=e.onChangeEventForFields;case 11:case"end":return t.stop()}}),t)})));return function(a,e){return t.apply(this,arguments)}}())})),e.isLoading=!1)}))},onChangeEventForFields:function(a,e,t){var n=this,o=this;"deal_country"==e.name&&n.FormSchema.forEach((function(a,t){a.Data.forEach(function(){var a=Object(i["a"])(Object(d["a"])().mark((function a(t,n){var i;return Object(d["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if("deal_state"!=t.name){a.next=4;break}return i=e.value,a.next=4,o.GetDropDownData("ACCOUNT_STATE",t,i,null);case 4:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}())}))},GetDropDownData:function(){var a=Object(i["a"])(Object(d["a"])().mark((function a(e,t,n,o){var i,l;return Object(d["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=this,l="id=&moduleName=CRM&type=".concat(e,"&refId=").concat(n),a.next=4,s["a"].getDDLData(l+"&search=").then((function(a){if(void 0!=a.data.DATA){var n=a.data.DATA;t.config.options=[],"EDIT"!=o&&(t.value=""),"ACCOUNT_STATE"==e&&n.forEach((function(a){t.config.options.push({value:a.value,name:a.name})})),i.$refs.ManageDealForm.UpdateKeyValue()}}));case 4:case"end":return a.stop()}}),a,this)})));function e(e,t,n,o){return a.apply(this,arguments)}return e}(),openaddIndustrypopup:function(){var a=this;a.showaddindustryModal=!0},openaddRoleTitlepopup:function(a){this.RoleTitleItemObject=a,this.showaddroletitleModal=!0},openaddLeadSourcepopup:function(a){this.LeadSourceItemObject=a,this.showaddleadsourceModal=!0},UpdateSelectJson:function(a,e){var t=this;t.FormSchema.forEach((function(t,n){t.Data.forEach((function(t,n){t.name==a&&null!=e&&(t.config.options=[],e.forEach((function(a){t.config.options.push({name:a.name,value:a.value})})))}))}))},saveForm:function(){var a=this;a.$refs.DealForm.validate().then((function(e){if(e){a.isLoading=!0;var t=a.$refs.ManageDealForm.ConvertDynamicFormObjToCustomFieldObj(a.FormSchema);t.forEach((function(e){"account_id"==e.field_name&&(a.isBlank(e.field_value)||(e.field_value=e.field_value.value)),"deal_owner_id"==e.field_name&&(a.isBlank(e.field_value)||(e.field_value=e.field_value.value))}));var n={data:t,moduleCode:"CRM",subModuleCode:"CRM_DEALS"};s["a"].SaveDynamicForm(JSON.stringify(n)).then((function(e){null!=e&&null!=e.data&&"Success"==e.data[0].Status&&(a.dealId>0?(a.ShowAlert(a.$t("UpdatedSuccess",[a.$t("Deal")]),"success",!0,a.$t("Alert")),a.$router.push({name:"CRMDeal"})):(a.ShowAlert(a.$t("AddedSuccess",[a.$t("Deal")]),"success",!0,a.$t("Alert")),a.$router.push({name:"CRMDeal"})))})),a.isLoading=!1}}))},onCancel:function(){var a=this;a.$router.push({name:"CRMDeal"})}}},m=u,f=t("2877"),h=Object(f["a"])(m,n,o,!1,null,null,null);e["default"]=h.exports}}]);
//# sourceMappingURL=CRMManageDeal.js.map