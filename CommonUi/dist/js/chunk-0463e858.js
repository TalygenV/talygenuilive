(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0463e858","chunk-2d0b3dad"],{"0850":function(t,e,o){var s=o("1256");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=o("499e").default;a("89ad0d30",s,!0,{sourceMap:!1,shadowMode:!1})},1256:function(t,e,o){var s=o("24fb");e=s(!1),e.push([t.i,"#choosewizards .modal-header button{position:absolute;top:2px;right:2px}#choosewizards .left-icon-m i{font-size:35px}#choosewizards .shortcuts-menu li:nth-child(9n+1) .left-icon-m{border-color:#216bca}#choosewizards .shortcuts-menu li:nth-child(9n+2) .left-icon-m{border-color:#63983e}#choosewizards .shortcuts-menu li:nth-child(9n+3) .left-icon-m{border-color:#575b6f}#choosewizards .shortcuts-menu li:nth-child(9n+4) .left-icon-m{border-color:#43a38a}#choosewizards .shortcuts-menu li:nth-child(9n+5) .left-icon-m{border-color:#cc7d38}#choosewizards .shortcuts-menu li:nth-child(9n+6) .left-icon-m{border-color:#735da5}#choosewizards .shortcuts-menu li:nth-child(9n+7) .left-icon-m{border-color:#7e6c5e}#choosewizards .shortcuts-menu li:nth-child(9n+8) .left-icon-m{border-color:#e3644b}#choosewizards .shortcuts-menu li:nth-child(9n+9) .left-icon-m{border-color:#dcad3a}#choosewizards .shortcuts-menu li:nth-child(9n+1) .left-icon-m i{color:#216bca}#choosewizards .shortcuts-menu li:nth-child(9n+2) .left-icon-m i{color:#63983e}#choosewizards .shortcuts-menu li:nth-child(9n+3) .left-icon-m i{color:#575b6f}#choosewizards .shortcuts-menu li:nth-child(9n+4) .left-icon-m i{color:#43a38a}#choosewizards .shortcuts-menu li:nth-child(9n+5) .left-icon-m i{color:#cc7d38}#choosewizards .shortcuts-menu li:nth-child(9n+6) .left-icon-m i{color:#735da5}#choosewizards .shortcuts-menu li:nth-child(9n+7) .left-icon-m i{color:#7e6c5e}#choosewizards .shortcuts-menu li:nth-child(9n+8) .left-icon-m i{color:#e3644b}#choosewizards .shortcuts-menu li:nth-child(9n+9) .left-icon-m i{color:#dcad3a}",""]),t.exports=e},"29c3":function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t._self._c;return e("div",[e("loader",{attrs:{"is-visible":t.isLoading}}),e("div",{staticClass:"my-popups"},[e("div",{staticClass:"modal d-block"},[e("div",{staticClass:"modal-dialog modal-dialog-centered ui-draggable"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header ui-draggable-handle py-0"},[e("div",{staticClass:"theme-primary partition-full"},[e("span",{staticClass:"p-name text-white"},[t._v(t._s(t.$t(t.submodulecode)))])]),e("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(e){return t.closepopup()}}},[e("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),e("div",{staticClass:"border p-3 scroll"},[e("Form",{ref:"myForm"},[0==t.formdoesnotexsist?e("dynamic-form",{ref:"ManageForm",attrs:{lang:"en",buttons:t.buttons,schema:t.FormSchema},scopedSlots:t._u([{key:"tgslot-comment",fn:function({data:o}){return[e("ckeditor",{class:{"is-invalid":""!=o.error},attrs:{editor:t.editor},on:{ready:t.onReady,input:function(e){return t.updateCkeditorModel(e,o)}},model:{value:o.fieldInfo.value,callback:function(e){t.$set(o.fieldInfo,"value",e)},expression:"data.fieldInfo.value"}}),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(o.error))]),e("input",{directives:[{name:"model",rawName:"v-model",value:o.fieldInfo.value,expression:"data.fieldInfo.value"}],attrs:{type:"hidden"},domProps:{value:o.fieldInfo.value},on:{input:function(e){e.target.composing||t.$set(o.fieldInfo,"value",e.target.value)}}})]}}],null,!1,919269289)}):t._e(),t.formdoesnotexsist?e("div",{staticClass:"alert alert-danger p-2 text-center",attrs:{role:"alert"}},[t._v(" Form does not exsist. ")]):t._e()],1)],1)])])])])],1)},a=[],i=o("9769"),l={props:{getvalues:{type:Object,required:!0},submodulename:{type:String,required:!0}},data(){return{editor:this.CLASSIC_EDITOR,formdoesnotexsist:!1,isLoading:!1,UserName:null,UserId:null,FormSchema:[],modulename:"",submodulecode:"",buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save",onClick:this.Submit},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Cancel",onClick:this.closepopup,isVisible:!0}]}},async created(){var t=this;t.UserId=t.GetUserInfo.ID,t.UserName=t.GetUserInfo.Name,t.getForm(t.getvalues)},methods:{closepopup(){var t=this;t.$parent.closewizardpopup()},getForm:function(t){var e=this;e.isLoading=!0,e.modulename=t.module_name,e.submodulecode=t.sub_module_code;var o=`id=&moduleName=${t.module_name}&subModuleCode=${t.sub_module_code}&otherData=&langCode=en&CustomLayoutId=&usefor=QuickAdd`;i["a"].GetFormCustomLayout(o).then((function(o){if(null!=o&&null!=o.data&&""!=o.data){e.formdoesnotexsist=!1;var s=e.$refs.ManageForm.ConvertCustomFieldIntoDynamicFormObj(o.data.data);"Ticketing"==t.sub_module_code&&s.forEach((t,o)=>{t.Data.forEach((t,o)=>{"is_read"==t.name&&(t.value=0),"status_id"==t.name&&t.config.options.length>0&&(t.value=1111),"ticket_for"==t.name&&"0"==e.$route.params.id&&(t.value="1")})}),e.FormSchema=s,e.isLoading=!1}else e.isLoading=!1,e.formdoesnotexsist=!0}))},Submit(){var t=this;t.$refs.ManageForm.validateForm.validate().then(e=>{if(e){t.isLoading=!0;var o=t.$refs.ManageForm.ConvertDynamicFormObjToCustomFieldObj(t.FormSchema,!0),s={data:o,moduleCode:t.modulename,subModuleCode:t.submodulecode};i["a"].SaveDynamicForm(JSON.stringify(s)).then((function(e){"OK"==e.statusText&&(t.isLoading=!1,t.closepopup(),t.ShowAlert("Form save Successfully","success",!0,t.$t("Alert")))}))}t.isLoading=!1})}}},n=l,d=o("2877"),r=Object(d["a"])(n,s,a,!1,null,null,null);e["default"]=r.exports},7023:function(t,e,o){"use strict";o("0850")},9827:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t._self._c;return e("section",[e("div",[e("div",{staticClass:"my-popups",attrs:{id:"choosewizards"}},[e("div",{staticClass:"modal d-block"},[e("div",{staticClass:"modal-dialog modal-dialog-centered ui-draggable"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header ui-draggable-handle py-0"},[e("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(e){return t.ClosePopup()}}},[e("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]),e("h4",{staticClass:"modal-title py-3",attrs:{name:"header"}},[t._v(" Wizard ")])]),e("div",{staticClass:"container-fluid padding-t_10 d-block"},[e("form",{staticClass:"row new_tab"},[e("div",{staticClass:"col-12 mb-4"},[e("ul",{staticClass:"shortcuts-menu"},t._l(t.Quicklistdata,(function(o,s){return e("li",{key:s},[e("a",{key:o.sub_module_id,staticClass:"short-menu-item",attrs:{"data-toggle":"modal",id:"adduserwizards",href:"javascript:;","data-dismiss":"modal"},on:{click:function(e){return t.getForm(o)}}},[t._m(0,!0),t._v(" "),e("span",{staticClass:"short-item-name"},[t._v(" "+t._s(t.$t(o.sub_module_name)))])])])})),0)])])])])])])])]),t.IsManageForm?e("GetQuickAddLayoutForm",{attrs:{getvalues:t.getvalues,submodulename:t.submodulename}}):t._e()],1)},a=[function(){var t=this,e=t._self._c;return e("span",{staticClass:"left-icon-m"},[e("i",{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"}})])}],i=o("9769"),l=o("29c3"),n={components:{GetQuickAddLayoutForm:l["default"]},data(){return{isLoading:!1,Quicklistdata:[],getvalues:{},selectedModuleId:null,IsManageForm:!1,submodulename:""}},created(){var t=this;t.getQuickAddData()},methods:{getForm(t){var e=this;e.submodulename=t.sub_module_code,e.getvalues=t,e.IsManageForm=!0},getQuickAddData(){var t=this;i["a"].GetQuickAddDataListing().then(e=>{t.Quicklistdata=e.data.data})},ClosePopup:function(){this.$parent.IsWizardShow=!1},closewizardpopup(){this.IsManageForm=!1}}},d=n,r=(o("7023"),o("2877")),c=Object(r["a"])(d,s,a,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-0463e858.js.map