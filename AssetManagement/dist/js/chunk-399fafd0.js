(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-399fafd0"],{"0cf3":function(t,e,a){var s=a("24fb");e=s(!1),e.push([t.i,".dynamic-multiselect .multiselect__tags{padding:10px 40px 4px 8px!important}.dynamic-multiselect .multiselect__placeholder{margin-bottom:5px;padding-top:0}",""]),t.exports=e},"405d":function(t,e,a){"use strict";a("64c9")},"64c9":function(t,e,a){var s=a("0cf3");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var i=a("499e").default;i("2847112a",s,!0,{sourceMap:!1,shadowMode:!1})},d7c2:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("section",{staticClass:"main-content"},[e("loader",{attrs:{"is-visible":t.isLoading}}),e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 padding-t_8"},[e("div",{staticClass:"theme-primary partition-full"},[e("span",{staticClass:"p-name text-white"},[t._v(t._s(t.$t("ASSET_ASSIGN_Desc")))]),e("span",{staticClass:"p-actions float-right"},[e("a",{staticClass:"p-action-btn text-white",attrs:{title:"BacktoList"},on:{click:t.BackTolist}},[e("em",{staticClass:"fa fa-angle-double-left pr-2"}),e("br"),e("span",[t._v(t._s(t.$t("BacktoList")))])])])])])])]),e("div",{staticClass:"border p-3"},[e("div",{staticClass:"col-md-12 p-0",attrs:{id:"dynmicForm"}},[e("Form",{ref:"ProductAssignmentForm"},[e("dynamic-form",{ref:"FieldUpdate",attrs:{lang:"en",buttons:t.buttons,schema:t.FormSchema},scopedSlots:t._u([{key:"tgslot-DateofAssignment",fn:function({data:a}){return[e("div",{staticClass:"input-group"},[e("v-date-picker",{staticClass:"timedate input-group",attrs:{popover:t.popover,name:t.DateofAssignment,mode:"dateTime","minute-increment":5},scopedSlots:t._u([{key:"default",fn:function({inputValue:a,togglePopover:s}){return[e("input",t._g({class:{"form-control":!0},attrs:{placeholder:"M/D/YYYY h:mm A"},domProps:{value:a},on:{click:function(t){return s()}}},t.inputEvents)),e("div",{staticClass:"input-group-append",on:{click:function(t){return s()}}},[e("span",{staticClass:"input-group-text"},[e("em",{staticClass:"fa fa-calendar"})])])]}}],null,!0),model:{value:t.DateofAssignment,callback:function(e){t.DateofAssignment=e},expression:"DateofAssignment"}})],1)]}},{key:"tgslot-DateofAssignmentTill",fn:function({data:a}){return[e("div",{staticClass:"input-group"},[e("v-date-picker",{staticClass:"timedate input-group",attrs:{popover:t.popover,name:t.DateofAssignmentTill,"min-date":t.DateofAssignment,mode:"dateTime","minute-increment":5},scopedSlots:t._u([{key:"default",fn:function({inputValue:a,togglePopover:s}){return[e("input",t._g({class:{"form-control":!0},attrs:{placeholder:"M/D/YYYY h:mm A"},domProps:{value:a},on:{click:function(t){return s()}}},t.inputEvents)),e("div",{staticClass:"input-group-append",on:{click:function(t){return s()}}},[e("span",{staticClass:"input-group-text"},[e("em",{staticClass:"fa fa-calendar"})])])]}}],null,!0),model:{value:t.DateofAssignmentTill,callback:function(e){t.DateofAssignmentTill=e},expression:"DateofAssignmentTill"}})],1)]}}])})],1),t.DataLoaded?e("SearchAsset",{attrs:{GetParentDetails:t.GetParentDetails},on:{GetDetailsofParent:t.GetDetails,AssestArrayData:t.AssestArrayData}}):t._e(),e("div",{staticClass:"row flex-row-reverse py-3"},[e("div",{staticClass:"col-lg-6 text-right"},[e("a",{staticClass:"btn btn-success formbtn text-white mr-1",attrs:{href:"javascript:void(0);",title:t.$t("Save")},on:{click:t.SubmitData}},[e("i",{staticClass:"fa fa-save pr-2"}),e("span",[t._v(t._s(t.$t("Save")))])]),e("a",{staticClass:"btn btn-danger formbtn text-white",attrs:{href:"javascript:;",title:t.$t("Cancel")},on:{click:function(e){return t.onCancel()}}},[e("i",{staticClass:"fa fa-close pr-2"}),e("span",[t._v(t._s(t.$t("Cancel")))])])]),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"py-2"},[e("small",{staticClass:"text-danger"},[t._v(t._s(t.$t("MandatoryString")))])])])])],1)])],1)},i=[],n=(a("14d9"),a("1115")),o=a("b25f"),r=a("1315"),l={components:{SearchAsset:o["a"]},data(){return{DataLoaded:0,isLoading:!1,UsersData:[],DateofAssignment:"",Users:"",Remarks:"",DateofAssignmentTill:"",Groupname:"",Users1:"",Users2:"",popover:{visibility:"click"},UserId:null,GetParentDetails:null,SelfCheckout:null,RequestFrom:"",isUsedFor:"",selectedOption:"",checked:!0,unchecked:!1,txtAssignUserType:"User",disabled:!1,dataArray:[],buttons:[],pendingItem:"",checkAvailability:"",dept_ids:"",FormSchema:[{layoutType:"four",Data:[{astype:"MultiSelectField",label:this.$t("Departments"),name:"Departments",mode:"tag",value:"",placeholder:"Departments",disabled:!1,config:{options:[],onChange:this.GetCompanyUsers,onRemove:this.removeRecord},validationRules:{required:!1}},{astype:"RadioField",label:this.$t("AssignTo"),name:"AssignTo",value:"User",placeholder:"",config:{options:[{value:"User",name:"User"},{value:"Client",name:"Client"}],onChange:this.AssignUserType},validationRules:{required:!0}},{astype:"SelectField",label:this.$t("SelectUser"),name:"User",value:"",placeholder:"",visibility:!0,validationRules:{required:!0},config:{options:[],onChange:this.GetDetails}},{astype:"SelectField",label:this.$t("ExistingClient"),name:"Client",value:"",placeholder:"",visibility:!1,validationRules:{required:!0},config:{options:[]}},{astype:"SelectField",label:this.$t("NotificationUser"),name:"NotificationUser",value:"",placeholder:"",validationRules:{required:!1},config:{options:[]}},{astype:"slotField",label:this.$t("DateofAssignmentt"),name:"DateofAssignment",value:"",placeholder:"",validationRules:"required",config:{format:"MM/DD/YYYY HH:MM A",minDate:new Date}},{astype:"slotField",label:this.$t("DateofAssignmentTilll"),name:"DateofAssignmentTill",value:"",placeholder:"",validationRules:"required",config:{format:"MM/DD/YYYY HH:MM A",minDate:new Date}}]},{Data:[{astype:"TextAreaField",label:this.$t("Remarks"),name:"Remarks",value:"",placeholder:"",validationRules:"",config:{rows:5}}]}],Timezone:"",departmentData:[],TagsSelectedArray:[]}},created:async function(){await this.GetDepartment(),await this.GetNotificationUser(),await this.GetCompanyUsers(),await this.GetCompanyClients(),this.UserId=this.GetUserInfo.ID,this.DataLoaded=1;const t=new Date;if(this.DateofAssignment=new Date,t.setDate(t.getDate()+7),this.DateofAssignmentTill=t,this.Timezone=this.GetUserInfo.TimeZone,"myitems"==this.$route.params.reqForm)this.FormSchema[0].Data[2].value=this.UserId;else if("pendingRequest"==this.$route.params.reqForm){if(this.pendingItem=this.$route.params.items,null!=this.pendingItem&&""!=this.pendingItem&&"undefined"!=this.pendingItem){this.FormSchema[0].Data[2].value=this.pendingItem.USER_ID;let t=this.departmentData.find(t=>t.department_id==this.pendingItem.DEPARTMENT_ID);this.TagsSelectedArray.push({label:t.department_name,value:t.department_id}),this.FormSchema[0].Data[0].value=this.TagsSelectedArray,this.DateofAssignment=this.pendingItem.FROM_TIME,this.DateofAssignmentTill=this.pendingItem.TO_TIME}}else"checkAssetAvailability"==this.$route.params.reqForm&&(this.checkAvailability=this.$route.params.items,null!=this.checkAvailability&&""!=this.checkAvailability&&this.checkAvailability)},methods:{AssignUserType:async function(t,e){e.value=t.target.getAttribute("data-value"),"AssignTo_1"==t.target.attributes.id.value?(this.FormSchema[0].Data[2].visibility=!1,this.FormSchema[0].Data[3].visibility=!0,this.FormSchema[0].Data[0].disabled=!0):(this.FormSchema[0].Data[2].visibility=!0,this.FormSchema[0].Data[3].visibility=!1,this.FormSchema[0].Data[0].disabled=!1)},BackTolist:function(){this.$router.push({name:"ProductAssignment"})},onCancel:function(){var t=this;"pendingRequest"==t.$route.params.reqForm?t.$router.push({name:"PendingRequestList"}):t.$router.push({name:"ProductAssignment"})},GetDepartment:async function(){var t=this;let e="includeInactiveStatus=true&isTicketHandler=false";await n["a"].GetDepartment(e).then(e=>{t.departmentData=e.data,t.departmentData.forEach(t=>{this.FormSchema[0].Data[0].config.options.push({name:""+t.department_name,value:""+t.department_id})})})},GetNotificationUser:async function(){let t="moduleName=ASSETASSIGNMENT&department_ids=";await n["a"].GetNotficationUsers(t).then(t=>{t.data.data.forEach(t=>{this.FormSchema[0].Data[4].config.options.push({name:""+t.NAME,value:""+t.USER_ID})})})},GetCompanyUsers:async function(){var t=this;t.FormSchema[0].Data[2].config.options=[],t.isLoading=!0;var e="";t.FormSchema[0].Data[0].value.length>0&&t.FormSchema[0].Data[0].value.forEach(t=>{e+=t.value+","}),this.FormSchema[0].Data[0].config.options.forEach(t=>{event.currentTarget.textContent==t.name&&(e+=t.value)}),t.dept_ids=e;let a="moduleName=ASSETASSIGNMENT&department_ids="+e;await n["a"].GetCompanyUsers(a).then(e=>{this.UsersData=e.data,e.data.forEach(e=>{this.FormSchema[0].Data[2].config.options.push({name:""+e.USERNAME,value:""+e.USER_ID}),t.isLoading=!1,this.$refs.FieldUpdate.UpdateKeyValue()}),e.data.length<=0&&(this.FormSchema[0].Data[2].config.options=[],t.isLoading=!1)})},removeRecord:async function(t,e,a){var s=this;s.isLoading=!0;const i=[];s.FormSchema[0].Data[0].value.forEach(e=>{e.value!=t.value&&i.push(e.value)});let o="moduleName=ASSETASSIGNMENT&department_ids="+i.toString();await n["a"].GetCompanyUsers(o).then(t=>{this.UsersData=t.data,this.FormSchema[0].Data[2].config.options=[],t.data.forEach(t=>{this.FormSchema[0].Data[2].config.options.push({name:""+t.USERNAME,value:""+t.USER_ID}),s.isLoading=!1,this.$refs.FieldUpdate.UpdateKeyValue()}),t.data.length<=0&&(this.FormSchema[0].Data[2].config.options=[],s.isLoading=!1)})},GetCompanyClients:async function(){let t="moduleName=ASSETASSIGNMENT&department_ids=";await n["a"].GetCompanyClients(t).then(t=>{t.data.forEach(t=>{this.FormSchema[0].Data[3].config.options.push({name:""+t.USERNAME,value:""+t.user_id})})})},GetDetails:function(){var t=this,e=this.FormSchema[0].Data[2].value;t.GetParentDetails={DepartmentID:t.txtDepartment,UserID:e,GetNotificationUserID:t.Users1,FromDate:t.DateofAssignment,TillDate:t.DateofAssignmentTill,SelfCheckout:null,RequestFrom:"assetassignment",isUsedFor:"search",pendingItems:t.pendingItem,checkAvailabilities:t.checkAvailability},sessionStorage.setItem("GetParentDetails",JSON.stringify(t.GetParentDetails))},AssestArrayData(t){this.dataArray=t},SubmitData:function(){var t,e=this,a=new Date(Date.parse(e.DateofAssignment)),s=new Date(Date.parse(e.DateofAssignmentTill));if(a>s)return e.ShowAlert(e.$t("DateAssignTillMsg"),"failure",e.$t("Alert")),!1;console.log("DateAssignment is less than or equal to DateTill");var i=null===(t=e.$children[2])||void 0===t||null===(t=t.$children[3])||void 0===t?void 0:t.GetRequstionList;"Client"==e.FormSchema[0].Data[1].value?(e.$refs.ProductAssignmentForm.fields.Departments.failed=!1,e.FormSchema[0].Data[0].validationRules.required=!1):(e.$refs.ProductAssignmentForm.fields.Departments.failed=!0,e.FormSchema[0].Data[0].validationRules.required=!1),e.$refs.ProductAssignmentForm.validate().then(t=>{if(e.$refs.ProductAssignmentForm.errors["Assign To"].length>0&&(t=!0),""==e.FormSchema[0].Data[2].value&&""==e.FormSchema[0].Data[3].value&&(t=!1),t){var a=new FormData,s=[];let t="";var o="";for(let a=0;a<e.dataArray.length;a++)t=e.dataArray.length>1?e.dataArray[0].AssetUniqueName:t+","+e.dataArray[a].AssetUniqueName;e.UsersData.forEach(t=>{t.USER_ID==parseInt(e.FormSchema[0].Data[2].value)&&(o=t.USERNAME)});var r=!1;if(e.dataArray.forEach(t=>{(null===t.RequestQuantity||""===t.RequestQuantity||0===t.RequestQuantity||isNaN(t.RequestQuantity)||"undefined"===t.RequestQuantity)&&(r=!0)}),r)return e.ShowAlert(e.$t("RequestQuantityRequired"),"warning",!0,e.$t("Alert")),!1;void 0!=i&&i.forEach(t=>{var a={AssetCatalogUniqueId:t.ChildUniqueId,RequestFromRequsition:1,IsGroup:null,ParentAssetCatalogUniqueId:t.ChildUniqueId,AssetQuantity:t.RequestQuantity,RequestQuantity:t.RequestQuantity,BatchId:t.RequisitionBatchId,AssetUniqueName:t.ChildUniqueName};e.dataArray.push(a)});var l={UserId:"Client"==e.FormSchema[0].Data[1].value?e.FormSchema[0].Data[3].value:e.FormSchema[0].Data[2].value,DepartmentId:e.FormSchema[0].Data[0].value,AssignedFrom:null,AssignedTill:null,AssignedFromDateTime:e.$options.filters.formatDateTimeYYMMDD(e.DateofAssignment),AssignedTillDateTime:e.$options.filters.formatDateTimeYYMMDD(e.DateofAssignmentTill),StartTime:null,EndTime:null,Comment:e.FormSchema[1].Data[0].value,NotificationUsers:e.FormSchema[0].Data[4].value,RequestFrom:"AssetAssign",IsRequestFromRequisition:!1,IssueToName:o,RFID:0,GroupRequistionAssestInfostring:e.dataArray,itemNames:e.dataArray.map(t=>t.AssetUniqueName).join(",")};s.length,a.append("postString",JSON.stringify(l)),e.dataArray.length>0?n["a"].SaveGroupAssign(a).then(t=>{0==t.data.status?""==t.data.existIds&&(e.ShowAlert(e.$t("Itemassignedsuccessfully"),"success",e.$t("Alert")),"MyItems"==e.$route.query.reqForm||"pendingRequest"==e.$route.query.reqForm||e.onCancel()):e.ShowAlert(e.$t("ErrorWhileProcessingRequest"),"failure",e.$t("Alert"))}):e.ShowAlert(e.$t("AddAtLeastOne"),"failure",e.$t("Alert"))}})},formatTimeToCustomFormat(t){if(null!=t&&""!==t){const e=r["DateTime"].fromJSDate(new Date(t),{zone:"utc"}),a="Etc/GMT"+this.Timezone,s=e.setZone(a),i=s.toFormat("MM/dd/yyyy h:mm");return i}return""}}},m=l,c=(a("405d"),a("2877")),u=Object(c["a"])(m,s,i,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-399fafd0.js.map