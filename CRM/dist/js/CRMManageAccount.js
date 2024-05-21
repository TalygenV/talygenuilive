(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CRMManageAccount"],{"9fdb":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"main-content"},[e("loader",{attrs:{"is-visible":t.isLoading}}),e("div",{attrs:{id:"divMainLeadData"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 padding-t_8"},[e("div",{staticClass:"theme-primary partition-full"},[e("span",{staticClass:"p-name text-white"},[t._v(t._s(t.$t("Manage"))+" "+t._s(t.$t("Account")))]),e("span",{staticClass:"p-actions float-right"},[e("RouterLink",{staticClass:"p-action-btn text-white float-right",attrs:{to:"/CRM/Accounts",title:"",id:"backtolist","data-original-title":t.$t("BacktoList")}},[e("em",{staticClass:"fa fa-angle-double-left pr-2"}),e("br"),t._v(t._s(t.$t("BacktoList")))])],1),e("span",{staticClass:"float-right"},[e("a",{staticClass:"p-action-btn text-white",attrs:{href:"javascript:;",title:"Page Tour"},on:{click:function(a){return t.setTourGuideSteps(0)}}},[e("em",{staticClass:"fa fa-road",attrs:{"aria-hidden":"true"}}),e("br"),t._v(t._s(t.$t("PageTour"))+" ")])])])])]),e("div",{staticClass:"border p-3"},[e("Form",{ref:"form",scopedSlots:t._u([{key:"default",fn:function(a){var n=a.valid,i=a.errors;return[e("dynamic-form",{ref:"AccountForm",attrs:{lang:"en",buttons:t.buttons,schema:t.FormSchema},on:{OnSubmit:t.onSubmit}}),t.divchkhide?e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left my-2"},[e("div",{staticClass:"form-group"},[e("div",{staticClass:"float-left"},[e("label",{staticClass:"form-check form-check-inline"},[e("div",{staticClass:"custom-control custom-checkbox custom-control-inline"},[e("input",{staticClass:"chkItems custom-control-input",attrs:{id:"Checkbox_395455_1",type:"checkbox"},on:{change:function(a){return t.ChkContactbox(a)}}}),e("label",{staticClass:"custom-control-label",attrs:{for:"Checkbox_395455_1"}})])])]),e("div",{staticClass:"float-left pt-0"},[e("span",{staticStyle:{"font-weight":"500"}},[t._v("Add Contact")])])])])]):t._e(),t.IscheckContact?e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12 mt-4"},[e("div",{staticClass:"heading-border mb-2"},[e("h5",{staticClass:"h5"},[e("span",[t._v(t._s(t.$t("ContactInformation")))])])])]),e("div",{staticClass:"col-sm-12 col-md-12 float-left col-lg-6 col-xl-6"},[e("div",{staticClass:"form-group"},[e("label",[t._v(t._s(t.$t("FirstName"))+":"),e("span",{staticClass:"text-danger"},[t._v("*")])]),e("Field",{attrs:{name:"FirstName",rules:{required:!0},label:"First Name"},scopedSlots:t._u([{key:"default",fn:function(a){var n=a.errors;a.touched,a.invalid;return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.txtfirstname,expression:"txtfirstname"}],class:{"form-control":!0,"is-invalid":n[0]},attrs:{type:"text",name:"FirstName",maxlength:"100"},domProps:{value:t.txtfirstname},on:{input:function(a){a.target.composing||(t.txtfirstname=a.target.value)}}}),n[0]?e("span",{staticClass:"invalid-feedback",attrs:{name:"FirstName"}},[t._v(t._s(n[0]))]):t._e()]}}],null,!0)})],1)]),e("div",{staticClass:"col-sm-12 col-md-12 float-left col-lg-6 col-xl-6"},[e("div",{staticClass:"form-group"},[e("label",[t._v(t._s(t.$t("LastName"))+":"),e("span",{staticClass:"text-danger"},[t._v("*")])]),e("Field",{attrs:{name:"LastName",rules:{required:!0},label:"Last Name"},scopedSlots:t._u([{key:"default",fn:function(a){var n=a.errors;a.touched,a.invalid;return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.txtlastname,expression:"txtlastname"}],class:{"form-control":!0,"is-invalid":n[0]},attrs:{type:"text",name:"LastName",maxlength:"100"},domProps:{value:t.txtlastname},on:{input:function(a){a.target.composing||(t.txtlastname=a.target.value)}}}),n[0]?e("span",{staticClass:"invalid-feedback",attrs:{name:"LastName"}},[t._v(t._s(n[0]))]):t._e()]}}],null,!0)})],1)]),e("div",{staticClass:"col-sm-12 col-md-12 float-left col-lg-6 col-xl-6"},[e("div",{staticClass:"form-group"},[e("label",[t._v(t._s(t.$t("Email"))+":"),e("span",{staticClass:"text-danger"},[t._v("*")])]),e("Field",{attrs:{name:"Email",rules:{required:!0,email:!0},label:"Email"},scopedSlots:t._u([{key:"default",fn:function(a){var n=a.errors;a.invalid;return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.txtemailid,expression:"txtemailid"}],class:{"form-control":!0,"is-invalid":n[0]},attrs:{type:"text",id:"Emailid",name:"Email"},domProps:{value:t.txtemailid},on:{input:function(a){a.target.composing||(t.txtemailid=a.target.value)}}}),n[0]?e("span",{staticClass:"invalid-feedback",attrs:{name:"Email"}},[t._v(t._s(n[0]))]):t._e()]}}],null,!0)})],1)]),e("div",{staticClass:"col-sm-12 col-md-12 float-left col-lg-6 col-xl-6"},[e("div",{staticClass:"form-group"},[e("label",[t._v(t._s(t.$t("Mobile"))+": ")]),e("vue-tel-input",{attrs:{id:"txtmobile",mode:"international",name:"txtmobile"},on:{input:t.onInputMobilePhone},model:{value:t.txtmobile,callback:function(a){t.txtmobile=a},expression:"txtmobile"}}),e("span",{staticClass:"invalid-feedback d-block",attrs:{name:t.txtmobile}},[t._v(t._s(i[0]))]),t.phoneError?e("span",{staticClass:"invalid-feedback d-block"},[t._v("Enter valid number.")]):t._e()],1)])]):t._e(),e("div",{staticClass:"row flex-row-reverse mt-2"},[e("div",{staticClass:"col-lg-6 text-right"},[e("a",{staticClass:"btn btn-success formbtn",class:{disabled:!1},attrs:{href:"javascript:;",title:"Save"},on:{click:function(a){return t.SubmitData(n,i)}}},[e("em",{staticClass:"fa fa-save pr-2"}),t._v(t._s(t.$t("Save"))+" ")]),t._v("  "),e("a",{staticClass:"btn btn-danger",attrs:{href:"javascript:void(0)",title:"Cancel"},on:{click:t.onCancel}},[e("em",{staticClass:"fa fa-close pr-2"}),t._v(t._s(t.$t("Cancel"))+" ")])]),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"py-2"},[e("small",{staticClass:"text-danger"},[t._v(t._s(t.$t("MandatoryString")))])])])])]}}])})],1)])],1)},i=[],o=e("c7eb"),s=e("1da1"),c=(e("b0c0"),e("d3b7"),e("159b"),e("3ca3"),e("ddb0"),e("9861"),e("ac1f"),e("841c"),e("4de4"),e("99af"),e("498a"),e("c740"),e("e9c4"),e("9769")),l=e("4dad"),r={components:{modaladdindustry:l["a"]},data:function(){return{isLoading:!1,divchkhide:!1,IscheckContact:!1,name:null,Id:null,dateformat:null,phoneError:!1,txtfirstname:"",txtlastname:"",txtemailid:"",txtmobile:"",ApiURL:"moduleName=CRM&subModuleCode=CRM_ACCOUNTS&langCode=en",AccountCode:"",FormSchema:[],buttons:[{type:"submit",class:"btn btn-success save",text:"<i class='fa fa-save pr-2'></i>Submit",isVisible:!1},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Cancel",onClick:this.onCancel,isVisible:!1}]}},created:function(){this.name=this.GetUserInfo.Name,this.Id=this.GetUserInfo.ID,this.dateformat=this.GetUserInfo.DateFormat;var t=this;t.accountID=this.$route.query.id?this.$route.query.id:0,t.AccountCode=this.$route.query.AccountCode?this.$route.query.AccountCode:"";var a=this.$route.query.id?this.$route.query.id:0;a=""==a?0:a,0==a&&(t.divchkhide=!0),t.FetchData()},methods:{onInputMobilePhone:function(t,a,e){t&&(a&&(null===a||void 0===a?void 0:a.formatted.length)>0&&(null===a||void 0===a||!a.valid||void 0==(null===a||void 0===a?void 0:a.valid))?this.phoneError=!0:null!==a&&void 0!==a&&a.formatted&&null!==a&&void 0!==a&&a.valid&&(t=a.formatted,this.fieldInfo.value=a.formatted,this.phoneError=!1))},FetchData:function(){var t=this;t.isLoading=!0;"0"==t.accountID||t.accountID;var a="recordId=".concat(t.accountID,"&moduleName=CRM&subModuleCode=CRM_ACCOUNTS&langCode=en");c["a"].GetDynamicForm(a).then((function(a){if(t.isLoading=!1,""!=a.data){t.FormSchema=t.$refs.AccountForm.ConvertCustomFieldIntoDynamicFormObj(a.data.data),t.FormSchema.forEach((function(a,e){a.Data.forEach(function(){var e=Object(s["a"])(Object(o["a"])().mark((function e(n,i){var s,c,l;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(s=new URLSearchParams(window.location.search),c=s.get("id")||0,s.get("AccountCode")||"","account_type"==n.name&&(0==t.accountID&&(n.value=t.$route.query.AccountId?t.$route.query.AccountId:""),n.disabled=!0),"lead_source"==n.name&&(n.list_field_visibility="No",n.form_field_visibility="No"),"account_owner"==n.name&&""==n.value&&(n.value={name:t.name,value:t.Id},n.config.onSearchChange=t.onSearchh),"status_id"==n.name&&n.value,null==c&&(c=0),"phone"==n.name&&n.value,"account_state"==n.name&&""==n.value&&(n.config.options=null),"account_country"!=n.name||""==n.value){e.next=14;break}return l=a.Data.filter((function(t){return"account_state"==t.name}))[0],e.next=14,t.GetDropDownData("ACCOUNT_STATE",l,n.value,"EDIT");case 14:n.config.onChange=t.onChangeEventForFields;case 15:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())}))}}))},onChangeEventForFields:function(t,a,e){var n=this,i=this;"account_country"==a.name&&n.FormSchema.forEach((function(t,e){t.Data.forEach(function(){var t=Object(s["a"])(Object(o["a"])().mark((function t(e,n){var s;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("account_state"!=e.name){t.next=4;break}return s=a.value,t.next=4,i.GetDropDownData("ACCOUNT_STATE",e,s,null);case 4:case"end":return t.stop()}}),t)})));return function(a,e){return t.apply(this,arguments)}}())}))},GetDropDownData:function(){var t=Object(s["a"])(Object(o["a"])().mark((function t(a,e,n,i){var s,l;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=this,l="id=&moduleName=CRM&type=".concat(a,"&refId=").concat(n),t.next=4,c["a"].getDDLData(l+"&search=").then((function(t){if(void 0!=t.data.DATA){var n=t.data.DATA;e.config.options=[],"EDIT"!=i&&(e.value=""),"ACCOUNT_STATE"==a&&n.forEach((function(t){e.config.options.push({value:t.value,name:t.name})})),s.$refs.AccountForm.UpdateKeyValue()}}));case 4:case"end":return t.stop()}}),t,this)})));function a(a,e,n,i){return t.apply(this,arguments)}return a}(),onSearchh:function(t,a,e){var n=this;n.searchSelectDataa(e,n,a)},searchSelectDataa:function(t,a,e){this.ShowSearchDataa(t,a,e)},ShowSearchDataa:function(){var t=Object(s["a"])(Object(o["a"])().mark((function t(a,e,n){var i,s;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=this,s="id=&&moduleName=CRM&type=CRM_USERS&search=".concat(a,"&refId="),n.config.options=[],"undefined"==typeof n&&(n=0),t.next=6,c["a"].getDDLData(s).then((function(t){t.data&&(i.JsonObj=t.data,null!=i.JsonObj&&(t.data.DATA.forEach((function(t){var a={value:t.value,name:t.name};n.config.options.push(a)})),i.$refs.AccountForm.UpdateKeyValue()))}));case 6:case"end":return t.stop()}}),t,this)})));function a(a,e,n){return t.apply(this,arguments)}return a}(),ChkContactbox:function(t){var a=this;if(a.submitted="",a.IscheckContact=$(t.target).prop("checked"),a.IscheckContact||(a.txtfirstname="",a.txtlastname="",a.txtemailid="",a.txtmobile=""),a.IscheckContact){var e=a.$route.query.id?a.$route.query.id:0;e=""==e?0:e}},onSubmit:function(){},onCancel:function(){this.$router.push({name:"CRMAccounts"})},SubmitData:function(t,a){var e=this,n="",i="",o="",s="",l="",r="";e.$refs.form.validate().then((function(t){if(t){e.isLoading=!0;var a=0,u=e.$refs.AccountForm.ConvertDynamicFormObjToCustomFieldObj(e.FormSchema);u.forEach((function(t){"account_name"==t.field_name&&(r=t.field_value),"account_id"==t.field_name&&(t.field_value=e.$route.query.id?e.$route.query.id:0),"account_owner"==t.field_name&&(e.isBlank(t.field_value)||(t.field_value=t.field_value.value,t.field_value.value)),"company_name"==t.field_name&&(n=t.field_value),"account_address"==t.field_name&&(i=t.field_value),"account_address2"==t.field_name&&(o=t.field_value),"account_city"==t.field_name&&(s=t.field_value),"account_zip_code"==t.field_name&&(l=t.field_value)}));var d=new URLSearchParams(window.location.search),m=d.get("id")||0;d.get("AccountCode");null==m&&(m=0);var f=$('select[name="account_state"] option:selected').text(),v=n+" "+i+" "+o+" "+s+" "+("Select"==f?"--":f)+" "+l,h=e.txtfirstname+" "+e.txtlastname+" "+i+" "+o+" "+s+" "+("Select"==f?"--":f)+" "+l;if(0==m&&""==r){var p=""!=n?$.trim(v):$.trim(h),C=data[data.findIndex((function(t){return"account_name"==t.field_name}))];C.field_value=p}if(a>0)return!1;var _={first_name:e.txtfirstname,last_name:e.txtlastname,email_id:e.txtemailid,mobile_number:e.txtmobile},b=null;b=e.IscheckContact?{data:u,accountcontact:_}:{data:u};var x=JSON.stringify(b);c["a"].SaveAccountInfo(x).then((function(t){e.isLoading=!1,"1"==t.data[0].Code?(e.accountID>0?e.ShowAlert(e.$t("UpdatedSuccess",[e.$t("Account")]),"success",!0,e.$t("Alert")):e.ShowAlert(e.$t("AddedSuccess",[e.$t("Account")]),"success",!0,e.$t("Alert")),e.$router.push({name:"CRMAccounts"})):"2"==t.data[0].Code?e.ShowAlert(e.$t("Account name already exist"),"warning",!0,e.$t("Alert")):e.ShowAlert(e.$t("AddedError",[e.$t("Account")]),"failure",!0,e.$t("Alert"))}))}}))}}},u=r,d=e("2877"),m=Object(d["a"])(u,n,i,!1,null,null,null);a["default"]=m.exports}}]);
//# sourceMappingURL=CRMManageAccount.js.map