(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f4027e14","chunk-2d0b3dad"],{"29c3":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("div",[e("loader",{attrs:{"is-visible":t.isLoading}}),e("div",{staticClass:"my-popups"},[e("div",{staticClass:"modal d-block"},[e("div",{staticClass:"modal-dialog modal-dialog-centered ui-draggable"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header ui-draggable-handle py-0"},[t._m(0),e("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(e){return t.closepopup()}}},[e("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),e("div",{staticClass:"border p-3 scroll"},[e("dynamic-form",{ref:"ManageForm",attrs:{buttons:t.buttons,schema:t.FormSchema},scopedSlots:t._u([{key:"tgslot-comment",fn:function({data:a}){return[e("ckeditor",{class:{"is-invalid":""!=a.error},attrs:{editor:t.editor},on:{ready:t.onReady,input:function(e){return t.updateCkeditorModel(e,a)}},model:{value:a.fieldInfo.value,callback:function(e){t.$set(a.fieldInfo,"value",e)},expression:"data.fieldInfo.value"}}),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(a.error))]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.fieldInfo.value,expression:"data.fieldInfo.value"}],attrs:{type:"hidden"},domProps:{value:a.fieldInfo.value},on:{input:function(e){e.target.composing||t.$set(a.fieldInfo,"value",e.target.value)}}})]}}])})],1)])])])])],1)},o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"theme-primary partition-full"},[e("span",{staticClass:"p-name text-white"},[t._v("Manage Form")])])}],d=a("2b0e"),i=a("9769"),l=a("6930"),n=a.n(l);d["default"].use(n.a);var u={props:{getvalues:{type:Object,required:!0}},data(){return{editor:this.CLASSIC_EDITOR,isLoading:!1,UserName:null,UserId:null,FormSchema:[],modulename:"",submodulecode:"",buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save",onClick:this.Submit},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Cancel",onClick:this.closepopup,isVisible:!0}]}},async created(){var t=this;t.UserId=t.GetUserInfo.ID,t.UserName=t.GetUserInfo.Name,t.getForm(t.getvalues)},methods:{closepopup(){var t=this;t.$parent.IsManageForm=!1},getForm:function(t){var e=this;e.isLoading=!0,e.modulename=t.module_name,e.submodulecode=t.sub_module_code;var a=`id=&moduleName=${t.module_name}&subModuleCode=${t.sub_module_code}&otherData=&langCode=en&CustomLayoutId=${t.custom_layout_id}&usefor=QuickAdd`;i["a"].GetFormCustomLayout(a).then((function(t){null!=t&&null!=t.data&&(e.FormSchema=e.$refs.ManageForm.ConvertCustomFieldIntoDynamicFormObj(t.data.data),e.isLoading=!1)}))},Submit(){var t=this;t.isLoading=!0;var e=t.$refs.ManageForm.ConvertDynamicFormObjToCustomFieldObj(t.FormSchema),a={data:e,moduleCode:t.modulename,subModuleCode:t.submodulecode};i["a"].SaveDynamicForm(JSON.stringify(a)).then((function(e){null!=e&&null!=e.data&&"Success"==e.data[0].Status&&t.ShowAlert("Form save Successfully","success",!0,t.$t("Alert"))})),t.isLoading=!1}}},r=u,c=a("2877"),m=Object(c["a"])(r,s,o,!1,null,null,null);e["default"]=m.exports},9827:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("section",[e("div",[e("div",{staticClass:"my-popups"},[e("div",{staticClass:"modal d-block"},[e("div",{staticClass:"modal-dialog modal-dialog-centered ui-draggable"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header ui-draggable-handle py-0"},[e("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(e){return t.ClosePopup()}}},[e("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]),e("h4",{staticClass:"modal-title py-3",attrs:{name:"header"}},[t._v(" Get Quick Add List ")])]),e("div",{staticClass:"container-fluid padding-t_10"},[e("div",{staticClass:"row new_tab"},[e("form",{staticClass:"w-100 p-4"},t._l(t.Quicklistdata,(function(a,s){return e("div",{key:s,staticClass:"collapse show mt-2 col-md-4"},[e("div",{key:a.sub_module_id,staticClass:"btn-group btn-group-toggle custom-reports-icons my-2 w-100",attrs:{"data-toggle":"buttons"},on:{click:function(e){return t.getForm(a)}}},[e("label",{class:{"btn btn_cstm":!0,active:a.sub_module_id==t.selectedModuleId},attrs:{for:"cls_usertype"+s}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedModuleId,expression:"selectedModuleId"}],attrs:{type:"radio",name:"cls_usertype",id:"cls_usertype"+s},domProps:{value:a.sub_module_id,checked:t._q(t.selectedModuleId,a.sub_module_id)},on:{change:function(e){t.selectedModuleId=a.sub_module_id}}}),t._m(0,!0),t._v(" "+t._s(t.$t(a.sub_module_name))+" ")])])])})),0)])])])])])])]),t.IsManageForm?e("GetQuickAddLayoutForm",{attrs:{getvalues:t.getvalues}}):t._e()],1)},o=[function(){var t=this,e=t._self._c;return e("span",{staticClass:"d-block pb-2"},[e("em",{staticClass:"fa fa-plus bg-transparent",attrs:{"aria-hidden":"true"}})])}],d=a("9769"),i=a("29c3"),l={components:{GetQuickAddLayoutForm:i["default"]},data(){return{isLoading:!1,Quicklistdata:[],getvalues:{},selectedModuleId:null,IsManageForm:!1}},created(){var t=this;t.getQuickAddData()},methods:{getForm(t){var e=this;e.IsManageForm=!0,e.getvalues=t},getQuickAddData(){var t=this;d["a"].GetQuickAddDataListing().then(e=>{t.Quicklistdata=e.data.data})},ClosePopup:function(){this.$parent.IsWizardShow=!1}}},n=l,u=a("2877"),r=Object(u["a"])(n,s,o,!1,null,null,null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-f4027e14.js.map