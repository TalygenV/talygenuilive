(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Product~Product Type Detail"],{"45ac":function(e,t,a){var s=a("24fb");t=s(!1),t.push([e.i,"i.fa.fa-question-circle-o.text-popover{position:absolute;top:-18px;left:139px}",""]),e.exports=t},"526d":function(e,t,a){"use strict";a("6318")},6318:function(e,t,a){var s=a("45ac");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var i=a("499e").default;i("6c9b6684",s,!0,{sourceMap:!1,shadowMode:!1})},d6e9:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal d-block my-popups dialog"},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[e._t("header",(function(){return[a("h5",{staticClass:"modal-title"},[e._v(e._s(e.$t("AddProdyctType")))])]})),a("div",{staticClass:"float-right"}),a("button",{staticClass:"close",attrs:{type:"button",title:"","data-original-title":"Close"},on:{click:e.closepopup}},[a("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])],2),a("div",{staticClass:"modal-body"},[a("dynamic-form",{ref:"updateValues",attrs:{buttons:e.buttons,schema:e.FormSchema},on:{OnSubmit:e.onSubmit},scopedSlots:e._u([{key:"tgslot-GracePeriod",fn:function(t){t.data;return[a("div",{staticClass:"form-group"},[a("Field",{staticClass:"w-100",attrs:{rules:{required:!0},name:"Grace Period"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.errors;return[a("div",{staticClass:"d-flex"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.GracePeriod,expression:"GracePeriod"}],class:{"form-control":!0,"is-invalid":s[0]},attrs:{type:"text",name:"GracePeriod"},domProps:{value:e.GracePeriod},on:{keyup:function(t){return e.handleChange(e.GracePeriod)},input:function(t){t.target.composing||(e.GracePeriod=t.target.value)}}}),a("span",{staticClass:"input-group-append"},[a("span",{staticClass:"input-group-text",attrs:{id:"spnOutOF"}},[e._v("Days")])])]),s[0]?a("span",{staticClass:"invalid-feedback d-block",attrs:{name:"GracePeriod"}},[e._v(e._s(s[0]))]):e._e()]}}],null,!0)})],1)]}},{key:"tgslot-ProductTypeCode",fn:function(t){t.data;return[a("div",{staticClass:"form-group"},[a("div",{staticClass:"d-flex"},[a("a",{attrs:{href:"javascript:;","data-toggle":"tooltip","data-trigger":"click",title:"Please enter the product type code. Else four digit product type code will be generated by system."},on:{click:e.toggleTip}},[a("i",{staticClass:"fa fa-question-circle-o text-popover",staticStyle:{"font-size":"14px"}})]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.ProductTypeCode,expression:"ProductTypeCode"}],staticClass:"form-control",attrs:{type:"text",name:"ProductTypeCode",maxlength:4},domProps:{value:e.ProductTypeCode},on:{input:function(t){t.target.composing||(e.ProductTypeCode=t.target.value)}}})])])]}},{key:"tgslot-tblContainer",fn:function(t){t.data;return[e.IsShowCompartments?a("div",{staticClass:"table-responsive"},[a("Form",{ref:"AddProductType"},[a("table",{staticClass:"table table-bordered dt-responsive nowrap mt-0 m-0",attrs:{id:"tblContainerList"}},[a("thead",{staticClass:"thead-bg",attrs:{id:"divgrid"}},[a("th",{staticStyle:{"min-width":"142px"}},[a("span",{staticClass:"float-left"},[e._v("Compartments")]),a("span",{staticClass:"text-danger float-left"},[e._v("*")])]),a("th",{staticClass:"text-center",staticStyle:{"min-width":"100px"}},[a("span",[e._v("Action")])])]),a("tbody",e._l(e.tableRows,(function(t,s){return a("tr",{key:s,attrs:{id:"datarow"}},[a("td",[a("Field",{attrs:{name:e.$t("CompartmentName"),rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(i){var l=i.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.InputContainervalue,expression:"item.InputContainervalue"}],class:{"form-control":!0,"is-invalid":l[0]},attrs:{id:"container_name_"+s,type:"text",maxlength:"200",placeholder:"Fill the compartment name"},domProps:{value:t.InputContainervalue},on:{input:[function(a){a.target.composing||e.$set(t,"InputContainervalue",a.target.value)},function(t){return e.startValidationTimer(s)}]}}),l[0]?a("span",{staticClass:"invalid-feedback d-block",attrs:{name:e.$t("CompartmentName")}},[e._v(e._s(l[0]))]):e._e()]}}],null,!0)})],1),a("td",[a("a",{staticClass:"round-icon-small btn-danger-light float-none d-inline-block",attrs:{href:"javascript:;",title:"Delete"}},[a("em",{staticClass:"recyclebin fa fa-trash",on:{click:function(t){return e.RemoveContainerRow(s)}}})]),a("a",{staticClass:"add round-icon-small btn-success-light float-none d-inline-block",attrs:{href:"javascript:;",title:"Add"},on:{click:function(t){return e.AddContainerRow()}}},[a("em",{staticClass:"fa fa-plus"})])])])})),0)])])],1):e._e()]}}])}),a("div",{staticClass:"left-content row flex-row-reverse mt-3"},[a("div",{staticClass:"col-lg-12 text-left"},[a("div",{staticClass:"py-2 mandatory"},[e._v(" "+e._s(e.$t("MandatoryString"))+" ")])])])],1)])]),e.IsTagNamePopup?a("modalTagName",{attrs:{FromAddProduct:e.FromAddProduct}}):e._e()],1)},i=[],l=a("c7eb"),o=a("1da1"),n=(a("a9e3"),a("ac1f"),a("1276"),a("99af"),a("498a"),a("d3b7"),a("159b"),a("a15b"),a("d81d"),a("e9c4"),a("a434"),a("4de4"),a("9769")),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"modal"}},[a("div",{staticClass:"my-popups"},[a("div",{staticClass:"modal d-block"},[a("div",{staticClass:"modal-dialog modal-dialog-centered",staticStyle:{"max-width":"900px !important"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header theme-primary partition-full"},[a("h4",{staticClass:"modal-title"},[e._v(e._s(e.$t("Tag"))+" "+e._s(e.$t("Name")))]),a("button",{staticClass:"close",attrs:{type:"button",title:"Close"},on:{click:e.ClosePopup}},[a("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"modal-body"},[a("Form",{ref:"tagForm",attrs:{autocomplete:"off"}},[a("div",{staticClass:"col-md-12 float-left px-0"},[a("div",{staticClass:"row",staticStyle:{"max-height":"450px"}},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("label",[a("span",{attrs:{id:""}},[e._v("Title :")])]),a("span",{staticClass:"text-danger"},[e._v("*")]),a("Field",{attrs:{name:"TagName",rules:{required:!0},label:"Title"}},[a("div",{staticClass:"input-group mb-3",staticStyle:{position:"relative"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.tagname,expression:"tagname"}],class:{"form-control":!0},attrs:{name:"TagName",id:"TagName",type:"text"},domProps:{value:e.tagname},on:{keyup:e.searchTag,input:function(t){t.target.composing||(e.tagname=t.target.value)}}}),a("div",{staticClass:"unique_dynamicdatalist"},e._l(e.TagsArray,(function(t){return a("ul",{key:t,staticStyle:{"z-index":"auto"},on:{click:function(a){return e.setTagName(t)}}},[e.showTagDropdown?a("li",{staticStyle:{"text-transform":"capitalize"},attrs:{value:t.value}},[e._v(" "+e._s(t.text))]):e._e()])})),0),e.FromAddProduct?e._e():a("a",{staticClass:"btn float-left",staticStyle:{"background-color":"#fff",color:"#303030","border-color":"#abb5bf","border-left":"none"},attrs:{href:"javascript:;"},on:{click:e.showTagList}},[a("em",{staticClass:"dropdown-toggle float-right"})])])])],1)])])])])],1),a("div",{staticClass:"modal-footer"},[a("div",{staticClass:"col-md-12 p-0"},[a("div",{staticClass:"row flex-row-reverse"},[a("div",{staticClass:"col-lg-6 text-right"},[a("a",{staticClass:"btn btn-success save-btn mr-1",attrs:{href:"javascript:;",title:"Save"},on:{click:function(t){return e.SaveTag()}}},[a("em",{staticClass:"fa fa-save pr-2"}),e._v(e._s(e.$t("Save")))]),a("a",{staticClass:"btn btn-danger",attrs:{href:"javascript:;",title:"Cancel"},on:{click:e.ClosePopup}},[a("em",{staticClass:"fa fa-times  pr-2"}),e._v(e._s(e.$t("Cancel"))+" ")])]),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"py-2"},[a("small",{staticClass:"text-danger"},[e._v(e._s(e.$t("MandatoryString"))+" ")])])])])])])])])])])])},c=[],d=(a("caad"),a("2532"),a("8e5f")),u=a.n(d),p={components:{Multiselect:u.a},props:{FromAddProduct:{type:Boolean}},data:function(){return{tagname:"",tagId:"",TagsArray:[],showTagDropdown:!1,options:[]}},created:function(){var e=this;e.GetTagsByModuleId()},methods:{ClosePopup:function(){var e=this;e.$parent.CloseAddTagPopup()},SaveTag:function(){var e=Object(o["a"])(Object(l["a"])().mark((function e(){var t,a,s;return Object(l["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=this,!(t.tagname.length>0)){e.next=8;break}return a={TagId:""==t.tagId?"":t.tagId,tagStatusId:1001,tagName:t.tagname.toLowerCase(),tagDesc:"",moduleName:"CRM"},s=JSON.stringify(a),e.next=6,n["a"].SaveTagAsset(s).then((function(e){"Success"==e.data[0].Status&&e.data[0].Value>"0"&&(t.ShowAlert(t.$t("Tag has been saved successfully!"),"success",!0,t.$t("Alert")),t.$parent.CloseAddTagPopup(),t.$parent.GetTagsByModuleId(),setTimeout((function(){t.$parent.GetAssetTagsById(t.tagname.toLowerCase())}),1500)),"Success"==e.data[0].Status&&"0"==e.data[0].Value?(t.ShowAlert(t.$t("Tag has been updated successfully!"),"success",!0,t.$t("Alert")),t.$parent.CloseAddTagPopup(),t.$parent.GetTagsByModuleId(),setTimeout((function(){t.$parent.GetAssetTagsById(t.tagname.toLowerCase())}),1500)):"Exist"==e.data[0].Status&&(t.ShowAlert(t.$t("Tag Already Exist"),"failure",!0,t.$t("Alert")),t.$parent.CloseAddTagPopup())}));case 6:e.next=9;break;case 8:t.ShowAlert(t.$t("TagNameIsRequired"),"failure",!0,t.$t("Alert"));case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),setTagName:function(e){var t=this;t.tagname=e.text,t.tagId=e.value,t.showTagDropdown=!1},GetTagsByModuleId:function(){var e=this;e.TagsArray=[],n["a"].GetTagsByModuleId("moduleName=CRM").then((function(t){e.TagsArray=t.data,e.TagsArray.forEach((function(t,a){e.options.push({name:t.text,value:t.value})}))}))},showTagList:function(){var e=this;e.showTagDropdown?e.showTagDropdown=!1:e.showTagDropdown=!0},searchTag:function(){var e=this;e.showTagDropdown=!0,e.TagsArray=e.TagsArray.filter((function(t){return t.TAG_NAME.toLowerCase().includes(e.tagname.toLowerCase())})),""==e.tagname&&(e.GetTagsByModuleId(),e.showTagDropdown=!1)}}},m=p,h=a("2877"),g=Object(h["a"])(m,r,c,!1,null,null,null),v=g.exports,T={props:{popupCondition:{type:Boolean,required:!0},AseetTypeId:{type:Number,required:!1},FromPage:{type:String,required:!1}},components:{modalTagName:v},data:function(){return{isLoading:!1,FormSchema:[{layoutType:"triple",group_name:"Product Type",group_display_name:this.$t("ItemType"),Data:[{astype:"TextField",label:this.$t("ItemNameType"),name:"ItemNameType",value:"",placeholder:"",validationRules:{required:!0}},{astype:"SelectField",label:this.$t("Status"),name:"Status",value:"",placeholder:"",validationRules:{required:!0},config:{options:[]}},{astype:"SlotField",label:this.$t("ProductTypeCode"),name:"ProductTypeCode",value:"",placeholder:"",validationRules:{max:4}},{astype:"ToggleField",label:this.$t("Container"),name:"Container",value:"",placeholder:"",config:{onChange:this.ShowCompartments,options:[{name:"",value:"1"}]},validationRules:{required:!1}},{astype:"SlotField",showLabel:!1,label:this.$t("Container"),name:"tblContainer",value:"",placeholder:"",config:{options:[]},visibility:!0}]},{layoutType:"triple",Data:[{astype:"FileField",showLabel:!0,label:this.$t("AttachItemImage"),name:"AttachItemImage",value:"",placeholder:"",validationRules:"",FieldIndex:0,config:{maxSize:5,accept:[{fileType:"png",iconClass:"fa-file-image-o"},{fileType:"jpg",iconClass:"fa-file-image-o"},{fileType:"jpeg",iconClass:"fa-file-image-o"}],showSelectedFiles:[{attachmentId:"1",attachmentName:"",attachmentPath:""}],onClickSelectedFiles:this.onClickSelectedFile,onDeleteSelectedFiles:this.onDeleteSelectedFiles,onChange:this.setFile1,showAddIcon:!1,onAddButtonClick:this.AddFileMore,multiple:!1}}]},{layoutType:"Single",Data:[{astype:"TextAreaField",label:this.$t("Description"),name:"Description",value:"",placeholder:""}]},{layoutType:"four",group_name:"Product Categories",group_display_name:this.$t("ProductCategories"),Data:[{astype:"ToggleField",label:this.$t("Asset_No"),name:"Asset_No",value:"",placeholder:"",config:{options:[{name:"",value:"1"}]},validationRules:{required:!1}},{astype:"ToggleField",label:this.$t("Consumable"),name:"Consumable",value:"",placeholder:"",config:{options:[{name:"",value:"1"}]},validationRules:{required:!1}},{astype:"ToggleField",label:this.$t("License"),name:"License",value:"",placeholder:"",config:{options:[{name:"",value:"1"}]},validationRules:{required:!1}},{astype:"ToggleField",label:this.$t("MaterialSpareParts"),name:"MaterialSpareParts",value:"",placeholder:"",config:{options:[{name:"",value:"1"}]},validationRules:{required:!1}}]},{layoutType:"single",Data:[{astype:"MultiSelectField",label:this.$t("Tags"),name:"Tags",value:"",mode:"tag",placeholder:"",config:{options:[],showAddIcon:!0,onAddButtonClick:this.OpenAddTagPopup}}]},{layoutType:"four",group_name:"Hardware Integration Type",group_display_name:this.$t("HardwareIntegrationType"),Data:[{astype:"ToggleField",label:this.$t("Time_n_Attendance"),name:"Time_n_Attendance",value:"",placeholder:"",config:{options:[{name:"",value:"1"}]},validationRules:{required:!1}},{astype:"ToggleField",label:this.$t("Camera"),name:"Camera",value:"",placeholder:"",config:{options:[{name:"",value:"1"}]},validationRules:{required:!1}},{astype:"ToggleField",label:this.$t("RFID"),name:"RFID",value:"",placeholder:"",config:{options:[{name:"",value:"1"}]},validationRules:{required:!1}},{astype:"ToggleField",label:this.$t("GPSTracking"),name:"GPSTracking",value:"",placeholder:"",config:{options:[{name:"",value:"1"}]},validationRules:{required:!1}}]},{layoutType:"four",group_name:"Action Based Properties",group_display_name:this.$t("ActionBasedProperties"),Data:[{astype:"ToggleField",label:this.$t("IsTransferable"),name:"IsTransferable",value:"",placeholder:"",config:{options:[{name:"",value:"1"}]},validationRules:{required:!1}},{astype:"ToggleField",label:this.$t("IsSelfCheckOut"),name:"IsSelfCheckOut",value:"",placeholder:"",config:{onChange:this.OnIsSelfCheckOut,options:[{name:"",value:"1"}]},validationRules:{required:!1}},{astype:"ToggleField",label:this.$t("SelfieEnable"),name:"SelfieEnable",value:"",placeholder:"",visibility:!1,config:{options:[{name:"",value:"1"}]},validationRules:{required:!1}},{astype:"ToggleField",label:this.$t("EmployeeAcceptance"),name:"EmployeeAcceptance",value:"",placeholder:"",config:{options:[{name:"",value:"1"}]},validationRules:{required:!1}},{astype:"ToggleField",label:this.$t("EnableTerms"),name:"EnableTerms",value:"",placeholder:"",config:{options:[{name:"",value:"1"}]},validationRules:{required:!1}},{astype:"ToggleField",label:this.$t("GPS_Enable"),name:"GPS_Enable",value:"",placeholder:"",config:{options:[{name:"",value:"1"}]},validationRules:{required:!1}},{astype:"ToggleField",label:this.$t("Fleet_Management"),name:"Fleet_Management",value:"",placeholder:"",config:{options:[{name:"",value:"1"}]},validationRules:{required:!1}},{astype:"ToggleField",label:this.$t("PenaltyOnStatus"),name:"PenaltyOnStatus",value:"",placeholder:"",config:{onChange:this.OnPenaltyOnStatus,options:[{name:"",value:"1"}]},validationRules:{required:!1}},{astype:"SelectField",label:this.$t("Status"),name:"AssetReplacementType",value:"",placeholder:"",visibility:!1,config:{options:[]},validationRules:{required:!0}},{astype:"ToggleField",label:this.$t("PenaltyOnReturnOverdue"),name:"PenaltyOnReturnOverdue",value:"",placeholder:"",config:{onChange:this.OnPenaltyOnReturnOverdue,options:[{name:"",value:"1"}]},validationRules:{required:!1}},{astype:"SlotField",label:this.$t("GracePeriod"),name:"GracePeriod",value:"",placeholder:"",config:{options:[]},visibility:!1,validationRules:{required:!0}}]},{layoutType:"four",group_name:"Deployment Properties",group_display_name:this.$t("DeploymentProperties"),Data:[{astype:"ToggleField",label:this.$t("InsurancePolicy"),name:"InsurancePolicy",value:"",placeholder:"",config:{options:[{name:"",value:"1"}]},validationRules:{required:!1}},{astype:"ToggleField",label:this.$t("Calibration"),name:"Calibration",value:"",placeholder:"",config:{options:[{name:"",value:"1"}]},validationRules:{required:!1}},{astype:"ToggleField",label:this.$t("ItemCost"),name:"ItemCost",value:"",placeholder:"",config:{options:[{name:"",value:"1"}]},validationRules:{required:!1}},{astype:"ToggleField",label:this.$t("IsWarranty"),name:"IsWarranty",value:"",placeholder:"",config:{options:[{name:"",value:"1"}]},validationRules:{required:!1}},{astype:"ToggleField",label:this.$t("Depreciable"),name:"Depreciable",value:"",placeholder:"",config:{options:[{name:"",value:"1"}]},validationRules:{required:!1}}]}],buttons:[{type:"button",class:"btn btn-secondary",text:"Skip",onClick:this.Skip,isVisible:!1},{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save",value:"Save",name:"Save"},{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save & New",name:"SaveAndNew",isVisible:!1},{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save & Next",name:"SaveAndNext",isVisible:!1},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Cancel",onClick:this.closepopup,isVisible:!0}],StatusDDL:[],AssetReplacementTypeDDL:[],IsTagNamePopup:!1,FromAddProduct:!1,IsShowCompartments:!1,lbl:!1,tableRows:[],currentInputIndex:0,AssetTypeCode:"",userId:null,companyId:null,DataLoaded:0,TagsArray:[],file:[],file1:[],ShowAddProduct:!1,CompartmentListData:[],Count:0,checkFieldsvalue:!1,TypeData:[],TagsSelectedArray:[],ProductTypeCode:"",validationTimer:null}},created:function(){var e=Object(o["a"])(Object(l["a"])().mark((function e(){var t;return Object(l["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this,t.userId=t.GetUserInfo.ID,t.companyId=t.GetUserInfo.Name,e.next=5,t.BindStatus();case 5:return e.next=7,t.GetTagsByModuleId();case 7:return e.next=9,t.AdvancedSetupFields();case 9:return e.next=11,t.FetchData();case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{closepopup:function(){var e=this;("EditProduct"==e.FromPage||"AddProduct"==e.FromPage)&&e.$parent.CloseAddProductType()},onDeleteSelectedFiles:function(e){this.$delete(this.FormSchema[1].Data[0].config,"showSelectedFiles")},onClickSelectedFile:function(e){var t=this;t.isLoading=!0;var a=t.TypeData[0].ATTACHMENT_PATH.split("/")[4]+"/"+t.TypeData[0].ATTACHMENT_PATH.split("/")[5]+"/"+t.TypeData[0].ATTACHMENT_PATH.split("/")[6]+"/"+t.TypeData[0].ATTACHMENT_PATH.split("/")[7],s=t.TypeData[0].ATTACHMENT_PATH.split(".")[5],i=t.TypeData[0].ATTACHMENT_NAME,l="filePath=".concat(a);n["a"].DownloadAttachment(l).then((function(e){if(null!=e.data&&200===e.status){var a=e.data,l="data:".concat(s,";base64,").concat(a),o=document.createElement("a");o.href=l,o.setAttribute("download",i),document.body.appendChild(o),o.click(),t.isLoading=!1}else t.isLoading=!1}))},toggleTip:function(){$('[data-toggle="tooltip"]').tooltip({trigger:"click"}).on("shown.bs.tooltip",(function(){var e=$(this);setTimeout((function(){e.tooltip("hide")}),2e3)}))},onChangeContainer:function(e,t,a){var s=this;s.FormSchema[0].Data[4].value=a.target._value},handleChange:function(e){var t=this;if(""!==e.trim()){if(e=parseInt(e,10),isNaN(e))return t.ShowAlert(t.$t("EnterValidNumber"),"warning",t.$t("Alert")),void(t.GracePeriod="");e<1?t.GracePeriod=1:e>365&&(t.GracePeriod=365)}},OnPenaltyOnStatus:function(e){var t=this;return Object(o["a"])(Object(l["a"])().mark((function a(){var s;return Object(l["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(s=t,s.FormSchema[6].Data[8].config.options=[],s.FormSchema[6].Data[8].visibility=!0,1!=e.target.checked){a.next=8;break}return a.next=6,n["a"].GetAssetItemStatusList().then((function(e){s.AssetReplacementTypeDDL=e.data,s.AssetReplacementTypeDDL.forEach((function(e){s.FormSchema[6].Data[8].config.options.push({name:e.STATUS_NAME,value:e.STATUS_ID})})),s.$refs.updateValues.UpdateKeyValue()}));case 6:a.next=9;break;case 8:0==e.target.checked&&(s.FormSchema[6].Data[8].value="",s.FormSchema[6].Data[8].visibility=!1);case 9:case"end":return a.stop()}}),a)})))()},OnIsSelfCheckOut:function(e){var t=this;1==e.target.checked?t.FormSchema[6].Data[2].visibility=!0:0==e.target.checked&&(t.FormSchema[6].Data[2].visibility=!1)},OnPenaltyOnReturnOverdue:function(e){var t=this;1==e.target.checked?t.FormSchema[6].Data[10].visibility=!0:0==e.target.checked&&(t.FormSchema[6].Data[10].visibility=!1)},Skip:function(){var e=this;e.$parent.SkipTab(3)},AdvancedSetupFields:function(){var e=this;"setup"==e.popupCondition&&(e.buttons[0].isVisible=!0,e.buttons[1].isVisible=!1,e.buttons[2].isVisible=!0,e.buttons[3].isVisible=!0,e.buttons[4].isVisible=!1)},divDialogAddTags:function(){var e=this;e.FromAddProduct=!1,e.IsTagNamePopup=!0},CloseAddTagPopup:function(){var e=this;e.IsTagNamePopup=!1},OpenAddTagPopup:function(){var e=this;e.IsTagNamePopup=!0},setFile1:function(e){for(var t=this,a=0;a<e.target.files.length;a++){var s=e.target.files[a];t.file1.push(s)}},BindStatus:function(){var e=this,t="id=&moduleName="+e.modulename+"&type=GLOBAL_STATUS";e.isLoading=!0,n["a"].getDDLData(t).then((function(t){e.isLoading=!1,null!=t.data&&(e.StatusDDL=t.data.DATA,e.StatusDDL.forEach((function(t){e.FormSchema[0].Data[1].config.options.push(t)})),e.$refs.updateValues.UpdateKeyValue())}))},onSubmit:function(){var e=Object(o["a"])(Object(l["a"])().mark((function e(t,a){var s,i,o,r,c,d;return Object(l["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(s=this,s.buttons[1].class+=" disabled",s.isLoading=!0,s.Count=0,0==t.Asset_No&&0==t.Consumable&&0==t.License&&0==t.MaterialSpareParts?(s.ShowAlert(s.$t("At least one Product category must be selected!"),"failure",s.$t("Alert")),s.Count=1,s.buttons[1].class="btn btn-success"):1==s.IsShowCompartments&&s.tableRows.forEach((function(e,t){""==e.InputContainervalue&&(s.checkFieldsvalue,s.Count=1)})),0!=s.Count){e.next=58;break}return i={},s.tableRows.forEach((function(e,t){i={container_Id:0,asset_type_id:s.AseetTypeId>0?s.AseetTypeId:0,container_name:e.InputContainervalue,status_id:1001,modified_by:s.userId},s.CompartmentListData.push(i)})),o={},s.AseetTypeId>0?o.AssetTypeId=s.AseetTypeId:o.AssetTypeId=0,o.AssetType=t.ItemNameType,o.status_id=t.Status,o.Description=t.Description,o.created_at=null,o.modified_at=null,o.modified_by=s.userId,o.company_id=s.companyId,o.AssetTypeCategory="1"==t.Asset_No[0]?1:0,o.IsContainer="1"==t.Container[0]?1:0,o.IsSelfCheckOut="1"==t.IsSelfCheckOut[0]?1:0,o.IsTransferable="1"==t.IsTransferable[0]?1:0,o.IsEnableTerms="1"==t.EnableTerms[0]?1:0,o.InsurancePolicy="1"==t.InsurancePolicy[0]?1:0,o.AssetTypeCode=s.ProductTypeCode,o.IsAsset="1"==t.Asset_No[0]?1:0,o.IsConsumable="1"==t.Consumable[0]?1:0,o.IsLicense="1"==t.License[0]?1:0,o.IsSpare="1"==t.MaterialSpareParts[0]?1:0,o.IsItemCost="1"==t.ItemCost[0]?1:0,o.IsDepreciable="1"==t.Depreciable[0]?1:0,o.IsCalibration="1"==t.Calibration[0]?1:0,o.IsWarranty="1"==t.IsWarranty[0]?1:0,o.IsEmployeeAcceptance="1"==t.EmployeeAcceptance[0]?1:0,o.IsPenalty="1"==t.PenaltyOnStatus[0]?1:0,r="1"==t.PenaltyOnStatus[0]?1:0,o.penalty_type=0==r?null:t.AssetReplacementType,o.IsPenaltyOnReturnOverdue="1"==t.PenaltyOnReturnOverdue[0]?1:0,c="1"==t.PenaltyOnReturnOverdue[0]?1:0,o.GracePeriod=0==c?null:s.GracePeriod,o.IsGPSTracking="1"==t.GPSTracking[0]?1:0,o.IsFleetManagement="1"==t.Fleet_Management[0]?1:0,o.IsTimeAttendance="1"==t.Time_n_Attendance[0]?1:0,o.IsCamera="1"==t.Camera[0]?1:0,o.IsRFID="1"==t.RFID[0]?1:0,o.IsGPS="1"==t.GPS_Enable[0]?1:0,o.IsSelfieEnable="1"==t.SelfieEnable[0]?1:0,o.IsSampleData=0,o.container_name="",o.BatchId="",o.AssetTagIds=Array.prototype.map.call(t.Tags,(function(e){return e.value})).join(","),o.CompartmentList=s.CompartmentListData,d=new FormData,{postString:o},d.append("postString",JSON.stringify(o)),d.append("Files",s.file1[0]),e.next=56,n["a"].AddProductType(d).then((function(e){"SaveAndNew"==a&&("size_exceed"==e.data.msg||"FileSizeExceeded"==e.data.msg||"ExceedAllowedSize"==e.data.msg?s.ShowAlert(s.$t("FileSizeExceedMsg"),"warning",!0,s.$t("Alert")):"1"==e.data.status?(s.ShowAlert(s.$t("AddProductType"),"success",s.$t("Alert")),s.$emit("RefresComp"),s.$parent.FetchData()):"3"==e.data.status?(s.ShowAlert(s.$t("ProductTypeExist"),"success",s.$t("Alert")),s.$parent.CloseAddProductType(),s.$parent.FetchData()):"AlreadyExists"==e.data.status?(s.ShowAlert(s.$t("ProductTypeExist"),"warning",s.$t("Alert")),s.closepopup()):"ValidFileUploadMsg"==e.data.msg?(s.ShowAlert(s.$t("NotAllowedFile"),"failure",s.$t("Alert")),s.closepopup()):(s.ShowAlert(s.$t("UnknownError"),"failure",s.$t("Alert")),s.closepopup()),s.isLoading=!1,s.buttons[1].class="btn btn-success"),"SaveAndNext"==a&&("size_exceed"==e.data.msg||"FileSizeExceeded"==e.data.msg||"ExceedAllowedSize"==e.data.msg?s.ShowAlert(s.$t("FileSizeExceedMsg"),"warning",!0,s.$t("Alert")):"1"==e.data.status?(s.ShowAlert(s.$t("AddProductType"),"success",s.$t("Alert")),s.$parent.SkipTab(3),s.$parent.FetchData()):"3"==e.data.status?(s.ShowAlert(s.$t("ProductTypeExist"),"success",s.$t("Alert")),s.$parent.CloseAddProductType(),s.$parent.FetchData()):"AlreadyExists"==e.data.status?(s.ShowAlert(s.$t("ProductTypeExist"),"warning",s.$t("Alert")),s.closepopup()):"ValidFileUploadMsg"==e.data.msg?(s.ShowAlert(s.$t("NotAllowedFile"),"failure",s.$t("Alert")),s.closepopup()):(s.ShowAlert(s.$t("UnknownError"),"failure",s.$t("Alert")),s.closepopup()),s.buttons[1].class="btn btn-success",s.isLoading=!1),"Save"==a&&("size_exceed"==e.data.msg||"FileSizeExceeded"==e.data.msg||"ExceedAllowedSize"==e.data.msg?s.ShowAlert(s.$t("FileSizeExceedMsg"),"warning",!0,s.$t("Alert")):"1"==e.data.status?(s.ShowAlert(s.$t("AddProductType"),"success",s.$t("Alert")),s.closepopup(),"EditProduct"==s.FromPage&&s.$parent.FetchData()):"2"==e.data.status?(s.ShowAlert(s.$t("UpdatedProductType"),"success",s.$t("Alert")),s.$parent.CloseAddProductType(),s.$parent.FetchData()):"3"==e.data.status?(s.ShowAlert(s.$t("ProductTypeExist"),"success",s.$t("Alert")),s.$parent.CloseAddProductType(),s.$parent.FetchData()):"AlreadyExists"==e.data.status?(s.ShowAlert(s.$t("ProductTypeExist"),"warning",s.$t("Alert")),s.closepopup()):"ValidFileUploadMsg"==e.data.msg?(s.ShowAlert(s.$t("NotAllowedFile"),"failure",s.$t("Alert")),s.closepopup()):(s.ShowAlert(s.$t("UnknownError"),"failure",s.$t("Alert")),s.closepopup()),s.buttons[1].class="btn btn-success",s.isLoading=!1)}));case 56:e.next=60;break;case 58:s.buttons[1].class="btn btn-success",s.isLoading=!1;case 60:case"end":return e.stop()}}),e,this)})));function t(t,a){return e.apply(this,arguments)}return t}(),startValidationTimer:function(e){var t=this;clearTimeout(this.validationTimer),this.validationTimer=setTimeout((function(){t.validateDuplicate(e)}),1e3)},validateDuplicate:function(e){var t=this.tableRows[e].InputContainervalue.trim().toLowerCase(),a=this.tableRows.some((function(a,s){return s!==e&&a.InputContainervalue.trim().toLowerCase()===t}));a&&(this.ShowAlert("Duplicate "+this.$t("CompartmentName")+" is not allowed","failure",this.$t("Alert")),this.tableRows[e].InputContainervalue="")},AddContainerRow:function(){var e=this,t=this;this.tableRows.length>=10?t.ShowAlert("Maximum number of "+this.$t("Compartments")+" reached. You cannot add more "+this.$t("Compartments")+".","failure",this.$t("Alert")):t.$refs.AddProductType.validate().then((function(t){t&&e.tableRows.push({InputContainervalue:""})}))},RemoveContainerRow:function(e){var t=this;t.confirmR(t.$t("Are you sure you want to delete these record(s)?"),!0,!1,(function(a){1==t.tableRows.length?(t.lbl=!0,t.ShowCompartments(),t.FormSchema[0].Data[3].value=!1,t.tableRows=[]):t.tableRows.splice(e,1)}))},ShowCompartments:function(){var e=this;this.tableRows.length>0?e.lbl=!0:e.lbl=!1,0==e.lbl?(e.IsShowCompartments=!0,this.tableRows.push({InputContainervalue:""}),e.lbl=!0):1==e.lbl&&(e.IsShowCompartments=!1,e.tableRows=[],e.lbl=!1)},GetTagsByModuleId:function(){var e=this;return Object(o["a"])(Object(l["a"])().mark((function t(){var a;return Object(l["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,t.next=3,n["a"].GetTagsByModuleId("moduleName=CRM").then((function(e){a.TagsArray=e.data,a.TagsArray.forEach((function(e,t){var s={name:e.text,value:e.value};a.FormSchema[4].Data[0].config.options.push(s)})),a.$refs.updateValues.UpdateKeyValue()}));case 3:case"end":return t.stop()}}),t)})))()},GetAssetTagsById:function(e){var t=this;return Object(o["a"])(Object(l["a"])().mark((function a(){var s,i;return Object(l["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:s=t,"id=".concat(e,"&is_for=CRM_ITEM_TYPES"),[],s.TagsSelectedArray=s.TagsArray.filter((function(t){return t.text==e})),i={label:s.TagsSelectedArray[0].text,value:s.TagsSelectedArray[0].value},s.FormSchema[4].Data[0].value=i;case 6:case"end":return a.stop()}}),a)})))()},FetchData:function(){var e=this;return Object(o["a"])(Object(l["a"])().mark((function t(){var a,s;return Object(l["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,a.isLoading=!0,s="Id=".concat(a.AseetTypeId),t.next=6,n["a"].AssetGetById(s).then((function(e){if(null!=e.data)if(e.data.length>0){a.TypeData=e.data,a.FormSchema[0].Data[0].value=a.TypeData[0].ASSET_TYPE,a.FormSchema[0].Data[1].value=a.TypeData[0].STATUS_ID,a.ProductTypeCode=a.TypeData[0].TYPE_CODE,a.FormSchema[0].Data[3].value=1==a.TypeData[0].IS_CONTAINER,1==a.TypeData[0].IS_CONTAINER&&(a.IsShowCompartments=!0,a.TypeData.forEach((function(e,t){a.tableRows.push({InputContainervalue:e.CONTAINER_NAME})}))),null!=a.TypeData[0].ATTACHMENT_PATH&&""!=a.TypeData[0].ATTACHMENT_PATH?(a.FormSchema[1].Data[0].config.showSelectedFiles[0].attachmentPath=a.TypeData[0].ATTACHMENT_PATH,a.FormSchema[1].Data[0].config.showSelectedFiles[0].attachmentName=a.TypeData[0].ATTACHMENT_PATH.split("/")[7]):delete a.FormSchema[1].Data[0].config.showSelectedFiles,a.FormSchema[2].Data[0].value=a.TypeData[0].DESCRIPTION,a.FormSchema[3].Data[0].value=1==a.TypeData[0].IS_ASSET,a.FormSchema[3].Data[1].value=1==a.TypeData[0].IS_CONSUMABLE,a.FormSchema[3].Data[2].value=1==a.TypeData[0].IS_LICENSE,a.FormSchema[3].Data[3].value=1==a.TypeData[0].IS_SPARE,a.FormSchema[5].Data[0].value=1==a.TypeData[0].IS_TIME_N_ATTENDANCE,a.FormSchema[5].Data[1].value=1==a.TypeData[0].IS_CAMERA,a.FormSchema[5].Data[2].value=1==a.TypeData[0].IS_RFID,a.FormSchema[5].Data[3].value=1==a.TypeData[0].IS_GPS_TRACKING,a.FormSchema[6].Data[0].value=1==a.TypeData[0].IS_TRANSFERABLE,a.FormSchema[6].Data[1].value=1==a.TypeData[0].IS_SELF_CHECKOUT;var t=1==a.TypeData[0].IS_SELF_CHECKOUT;1==t?(a.FormSchema[6].Data[2].visibility=!0,a.FormSchema[6].Data[2].value=a.TypeData[0].is_selfie_enable):a.FormSchema[6].Data[2].visibility=!1,a.FormSchema[6].Data[3].value=1==a.TypeData[0].IS_EMPLOYEE_ACCEPTANCE,a.FormSchema[6].Data[4].value=1==a.TypeData[0].IS_ENABLE_TERMS,a.FormSchema[6].Data[5].value=1==a.TypeData[0].IS_GPS,a.FormSchema[6].Data[6].value=1==a.TypeData[0].IS_FLEET_MANAGEMENT,a.FormSchema[6].Data[7].value=1==a.TypeData[0].IS_PENALTY;var s=1==a.TypeData[0].IS_PENALTY;if(1==s){a.FormSchema[6].Data[8].visibility=!0,a.OnPenaltyOnStatus(!0);var i=""!==a.TypeData[0].PENALTY_TYPE?a.TypeData[0].PENALTY_TYPE.split(","):[],l=i.length>0?i[0]:null;a.FormSchema[6].Data[8].value=l}else a.FormSchema[6].Data[8].visibility=!1;a.FormSchema[6].Data[9].value=1==a.TypeData[0].IS_PENALTY_ON_OVERDUE;var o=1==a.TypeData[0].IS_PENALTY_ON_OVERDUE;1==o?(a.FormSchema[6].Data[10].visibility=!0,a.GracePeriod=a.TypeData[0].GRACE_PERIOD):a.FormSchema[6].Data[10].visibility=!1,a.FormSchema[7].Data[0].value=1==a.TypeData[0].IS_INSURANCE_POLICY,a.FormSchema[7].Data[1].value=1==a.TypeData[0].IS_CALIBRATION,a.FormSchema[7].Data[2].value=1==a.TypeData[0].IS_ITEM_COST,a.FormSchema[7].Data[3].value=1==a.TypeData[0].IS_WARRANTY,a.FormSchema[7].Data[4].value=1==a.TypeData[0].IS_DEPRECIABLE,a.isLoading=!1}else a.TypeData=[],a.isLoading=!1;else a.isLoading=!1}));case 6:case"end":return t.stop()}}),t)})))()}}},y=T,f=(a("526d"),Object(h["a"])(y,s,i,!1,null,null,null));t["a"]=f.exports}}]);
//# sourceMappingURL=Product~Product Type Detail.js.map