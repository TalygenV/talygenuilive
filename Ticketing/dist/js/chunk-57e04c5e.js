(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57e04c5e"],{"1f60":function(t,e,a){"use strict";a("78e3")},"355a":function(t,e,a){var s=a("24fb");e=s(!1),e.push([t.i,".is-invalid[data-v-6f329eff]{border-color:red}",""]),t.exports=e},"78e3":function(t,e,a){var s=a("355a");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var i=a("499e").default;i("1211b2fa",s,!0,{sourceMap:!1,shadowMode:!1})},f59c:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 padding-t_8"},[e("div",{staticClass:"theme-primary partition-full"},[e("span",{staticClass:"p-name text-white"},[t._v(t._s(t.$t("Add")))])])])]),e("div",{staticClass:"border p-3"},[e("Form",{ref:"AddGroup"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("dynamic-form",{ref:"AddGroup1",attrs:{lang:"en",buttons:t.buttons,schema:t.FormSchema},on:{OnSubmit:t.onSubmit}})],1),e("div",{staticClass:"col-lg-6 mb-3 mb-lg-0",attrs:{id:"divtickettupelist"}},[e("div",{staticClass:"listing"},[e("div",{staticClass:"table-responsive table-fix-header",attrs:{id:"divUserList"}},[e("table",{staticClass:"table table-bordered dt-responsive nowrap mt-0 w-100",attrs:{id:"example"}},[e("thead",{staticClass:"thead-bg"},[e("tr",[e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("CAusername")))]),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Department")))]),e("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v(t._s(t.$t("Action")))])])]),e("tbody",{attrs:{id:"UserListDiv"}},[t._l(t.UserList,(function(a){return e("tr",{key:a},[e("td",[t._v(t._s(a.userName))]),e("td",[t._v(t._s(a.departmentName))]),e("td",{staticClass:"text-center single-action"},[e("a",{staticClass:"ancAddUsers round-icon-small btn-success-light d-block float-none m-auto",attrs:{href:"javascript:;","data-id":a.userId,"data-name":a.UserName,"data-department":a.departmentName},on:{click:function(e){return t.AssignedUser(a.userId,a.userName,a.departmentName)}}},[e("i",{staticClass:"fa fa-plus",attrs:{alt:"Click to Add",title:"Add"}})])])])})),0==t.UserList.length?e("tr",{staticClass:"norecords",attrs:{id:"trNoRecordFond"}},[e("td",{staticClass:"text-danger text-center",attrs:{colspan:"5"}},[t._v(t._s(t.$t("NoRecordfound")))])]):t._e()],2)])])]),0==t.UserList.length?e("span",{staticClass:"text-danger",attrs:{id:"error_User"}},[t._v(t._s(t.$t("CheckAtleastOneUser")))]):t._e()]),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"listing"},[e("div",{staticClass:"table-responsive table-fix-header"},[e("table",{staticClass:"table table-bordered",attrs:{id:"DefaultUserTable"}},[e("thead",{staticClass:"thead-bg"},[e("tr",[e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("CAusername")))]),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Department")))]),e("th",{attrs:{scope:"col",width:"200"}},[t._v(t._s(t.$t("MaxTicketAssign")))]),e("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v(t._s(t.$t("MarkAsDefault")))]),e("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v(t._s(t.$t("Action")))])])]),e("tbody",[t._l(t.AssignUserList,(function(a,s){return e("tr",{key:a},[e("td",[t._v(t._s(a.name))]),e("td",[t._v(t._s(a.departmentName))]),e("td",{staticClass:"text-center"},[e("input",{class:{"form-control":!0,"is-invalid":!t.isMaxTicketValid},attrs:{type:"text",name:"maxticketassign",disabled:a.Id!=t.defaultUser,maxlength:"4",tabindex:"6",oninput:"this.value = this.value.replace(/[^0-9]/g, '').slice(0, 4);"},domProps:{value:a.UserId==a.DefaultUser?t.MaxTicketAssign:""}})]),e("td",{staticClass:"text-center"},[e("div",{staticClass:"d-inline-block"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.defaultUser,expression:"defaultUser"}],attrs:{type:"radio",id:a.Id,name:"default",tabindex:"7"},domProps:{value:a.Id,checked:a.UserId!=a.DefaultUser,checked:t._q(t.defaultUser,a.Id)},on:{click:function(e){return t.SetValue(a.Id)},change:function(e){t.defaultUser=a.Id}}})])]),e("td",{staticClass:"text-center"},[e("a",{staticClass:"aRemoveUser round-icon-small btn-danger-light d-block float-none m-auto",attrs:{href:"javascript:;"},on:{click:function(e){return t.DeleteUser(a.Id)}}},[e("i",{staticClass:"fa fa-trash",attrs:{title:"Add"}})])])])})),0==t.AssignUserList.length?e("tr",{staticClass:"norecords"},[e("td",{staticClass:"text-danger text-center",attrs:{colspan:"5"}},[t._v(t._s(t.$t("NoRecordfound")))])]):t._e()],2)])])]),t.CheckAssignedUser&&0==t.AssignUserList.length||t.checkOneUserSelected?e("span",{staticClass:"text-danger",attrs:{id:"error_DefaultUser"}},[t._v("Check Atleast One Defualt User")]):t._e()]),e("div",{staticClass:"col-lg-12 mt-3"},[e("Field",{attrs:{name:"Description",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function({errors:a}){return[e("label",[t._v("Description :"),e("span",{staticClass:"text-danger"},[t._v("*")])]),e("div",{staticClass:"form-group"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.Description,expression:"Description"}],class:{"form-control":!0,"is-invalid":a[0]},attrs:{tabindex:"8",maxlength:"500"},domProps:{value:t.Description},on:{input:function(e){e.target.composing||(t.Description=e.target.value)}}}),a[0]?e("span",{staticClass:"invalid-feedback d-block",attrs:{name:"Description"}},[t._v(t._s(a[0]))]):t._e()])]}}])})],1),e("div",{staticClass:"col-12"},[e("div",{staticClass:"row flex-row-reverse"},[e("div",{staticClass:"col-lg-6 text-right"},[e("a",{staticClass:"btn btn-success",attrs:{href:"javascript:;",id:"aGroupTicketSave",title:"","data-toggle-tooltip":"tooltip","data-original-title":"Save"},on:{click:function(e){return t.SubmitData(t.values)}}},[e("i",{staticClass:"fa fa-save pr-2"}),t._v(t._s(t.$t("Save")))]),t._v("  "),e("RouterLink",{staticClass:"btn btn-danger",attrs:{to:"/Ticketing/Group"}},[e("em",{staticClass:"fa fa-close"}),t._v(" "+t._s(t.$t("Cancel"))+" ")])],1),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"py-2"},[e("span",{staticClass:"text-danger"},[t._v(t._s(t.$t("MandatoryString")))])])])])])])])],1)])},i=[],r=(a("14d9"),a("9769")),n={created:function(){var t=this;t.GetSkill(),t.GetDepartment(),t.GetResolveTicketUserList(),t.isBlank(t.$route.params.id)||"0"==t.$route.params.id?("0"==t.$route.params.id||t.$router.push({name:"AddGroup",params:{id:0}}),t.GetGroupTicketData(0)):t.GetGroupTicketData(t.$route.params.id)},data(){return{UserList:[],AssignUserList:[],Description:"",defaultUser:"",GroupType:"",MaxTicketAssign:"",isMaxTicketValid:!0,CheckAssignedUser:!1,FormSchema:[{layoutType:"four",Data:[{astype:"TextField",label:"Ticket Group Name",name:"TicketGroupName",value:"",placeholder:"",validationRules:{required:!0,max:250}},{astype:"SelectField",label:this.$t("Skill"),name:"SkillId",value:"",placeholder:"",config:{options:[],showAddIcon:!1,onChange:this.GetResolveTicketUserList},validationRules:""},{astype:"SelectField",label:this.$t("Department"),name:"DepartmentId",value:"",placeholder:"",config:{options:[],showAddIcon:!1,onChange:this.GetResolveTicketUserListIs},validationRules:""},{astype:"RadioField",label:this.$t("GroupType"),name:"GroupType",value:"Call",placeholder:"",config:{options:[{name:"Call",value:"Call"},{name:"Routing",value:"Escalate"}],showAddIcon:!1,onChange:this.onChangeRadio},validationRules:{required:!1}}]}],buttons:[{type:"submit",class:"btn btn-warning",text:"<i class='fa fa-save pr-2'></i>Save Of Draft",isVisible:!1}]}},methods:{GetSkill:function(){r["a"].GetSkill().then(t=>{t.data.forEach((t,e)=>{this.FormSchema[0].Data[1].config.options.push({value:t.skill_id,name:t.title})}),this.$refs.AddGroup1.UpdateKeyValue()})},GetDepartment:function(){r["a"].GetDepartment().then(t=>{t.data.forEach((t,e)=>{this.FormSchema[0].Data[2].config.options.push({value:t.department_id,name:t.department_name})}),this.$refs.AddGroup1.UpdateKeyValue()})},GetResolveTicketUserList:function(t,e){var a=this;if(void 0!=e)var s="departmentId=&skillId="+e.value;else s="departmentId=&skillId=";r["a"].GetResolveTicketUserListbydept(s).then(t=>{a.UserList=t.data})},GetResolveTicketUserListIs:function(t,e){var a=this,s=`departmentId=${e.value}&skillId=`;r["a"].GetResolveTicketUserListbydept(s).then(t=>{a.UserList=t.data})},AssignedUser:function(t,e,a){var s=this;s.AssignUserList.some(e=>e.Id===t)?s.ShowAlert(e+" "+s.$t("AlreadyExist"),"warning"):s.AssignUserList.push({Id:t,name:e,departmentName:a,UserId:t})},DeleteUser:function(t){var e=this;e.confirmR(e.$t("ConfirmDelete"),!0,e.$t("Delete")+"  "+e.$t("Group"),(function(){e.AssignUserList=jQuery.grep(e.AssignUserList,(function(e){return e.Id!=t}))}))},GetGroupTicketData:function(t){var e=this,a="ticketGroupId="+t;r["a"].GetGroupTicketData(a).then(t=>{if(t.data){var a=t.data;null!=a&&t.data.Data.length>0&&(e.FormSchema[0].Data[0].value=t.data.Data[0].ticket_group_name,e.Description=t.data.Data[0].description,e.FormSchema[0].Data[2].value=t.data.Data[0].department_id,e.FormSchema[0].Data[3].value=t.data.Data[0].Group_type,e.MaxTicketAssign=t.data.Data[0].max_ticket_assign,e.defaultUser=t.data.Data[0].default_user_id,t.data.Data.forEach((t,a)=>{e.AssignUserList.push({Id:t.user_id,name:t.username,departmentName:t.department_name,UserId:t.user_id,DefaultUser:t.default_user_id})}))}})},SubmitData:function(){var t=this,e="";t.AssignUserList.forEach((t,a)=>{e+=""==e?t.Id:","+t.Id});const a=document.querySelector('input[name="maxticketassign"]');if(a){const e=a.value;if(t.isMaxTicketValid=""!==e,t.MaxTicketAssign=e,!t.isMaxTicketValid)return t.MaxTicketAssign="",!1}t.$refs.AddGroup.validate().then(a=>{if(0==t.AssignUserList.length||t.isBlank(t.defaultUser))return t.CheckAssignedUser=!0,t.ShowAlert(t.$t("CorrectHighlightedErrors"),"warning"),t.checkOneUserSelected=!0,!1;if(a){var s=`groupTicketId=${t.$route.params.id}&groupName=${t.FormSchema[0].Data[0].value}&description=${t.Description}&departmentId=${""==t.FormSchema[0].Data[2].value?0:t.FormSchema[0].Data[2].value}&groupType=${t.FormSchema[0].Data[3].value}&maxTiacketAssign=${t.MaxTicketAssign}&userIds=${e}&defaultUser=${t.defaultUser}`;r["a"].AddTicketGroup(s).then(e=>{1==e.data?(t.ShowAlert(t.$t("GroupHasAdded"),"success"),t.$router.push({name:"GroupListing"})):t.ShowAlert(t.$t("GroupHasAdded"),"success")})}})},isNumber:function(t){t=t||window.event;var e=t.which?t.which:t.keyCode;if(!(e>31&&(e<48||e>57)&&46!==e))return!0;t.preventDefault()},SetValue:function(t,e){var a=this;a.MaxTicketAssign="",a.defaultUser=t},onChangeRadio:function(t,e){var a=this;a.FormSchema[0].Data[3].value=t.target.dataset.value}}},l=n,d=(a("1f60"),a("2877")),o=Object(d["a"])(l,s,i,!1,null,"6f329eff",null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-57e04c5e.js.map