(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e3e5f5fc"],{"692d":function(e,t,a){"use strict";a("9419")},"6daa":function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,".design-container{margin-left:13px;margin-top:8px}.circle,.design-container{display:flex;align-items:center}.circle{width:40px;height:40px;border-radius:50%;background-color:#e2e7ec;color:#000;justify-content:center;margin-right:50px}input[type=checkbox]{margin-right:15px}.larger-checkbox{transform:scale(1.5)}.weekCheck-time{font-size:16px;font-family:inherit}.time-picker{display:inline-block;width:200px;margin-right:5px}.time-container{border:1px solid #ccc;padding:10px;border-radius:10px}.time-container label{display:block;margin-bottom:5px}.time-container input[type=time]{width:100%;padding:5px;border:1px solid #ccc;border-radius:3px}.custom-time-picker{height:40px}.availability .marketing .description{margin-top:20px}.delete-button{background-color:transparent;border:none;cursor:pointer}.delete-button .fa-trash{color:red;margin-left:10px}.input-container{position:relative;margin-bottom:10px}.link-input{border:1px solid #d3c7c7;padding-right:30px;width:45%;margin-bottom:45px;height:35px}.add-icon{cursor:pointer;color:#2abe2a;font-size:xx-large}.delete-icon{background-color:#f80606;border-radius:50%;border:none;font-size:larger;margin-left:10px;border-radius:none;cursor:pointer;justify-content:center;width:30px;height:30px;color:#f6f3f3;padding:5px;text-align:center}",""]),e.exports=t},9419:function(e,t,a){var i=a("6daa");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var s=a("499e").default;s("7f9478b4",i,!0,{sourceMap:!1,shadowMode:!1})},c6c3:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e._self._c;return t("section",[t("div",{},[t("loader",{attrs:{"is-visible":e.isLoading}}),t("div",{staticClass:"row barrw",attrs:{id:"divconclusionheader"}},[t("div",{staticClass:"col-sm-12 col-md-12 col-lg-12"},[t("div",{staticClass:"heading-border theme-primary partition-full"},[t("h5",{staticClass:"h5 text-white mt-2 ml-3"},[t("span",[e._v(e._s(e.$t("Publish Service"))+" ")])])])])]),[t("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12"},[t("div",{staticClass:"row barrw",attrs:{id:"divconclusionheader"}},[t("div",{staticClass:"col-sm-12 col-md-12 col-lg-12"},[t("div",{staticClass:"heading-border"},[t("h5",{staticClass:"h5 mb-3 mt-2"},[t("span",[e._v(" "+e._s(e.$t("Service Details")))])])])])]),t("dynamic-form",{attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema},on:{OnSubmit:e.onSubmit}})],1)],[t("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12"},[t("div",{staticClass:"row barrw availability",attrs:{id:"divconclusionheader"}},[t("div",{staticClass:"col-sm-12 col-md-12 col-lg-12"},[t("div",{staticClass:"heading-border"},[t("h5",{staticClass:"h5 mb-3 mt-2"},[t("span",[e._v(" "+e._s(e.$t("Availability")))])])])])])]),t("div",{staticClass:"container-fluid"},[t("table",{staticClass:"table"},[t("tbody",e._l(e.weekdays,(function(a,i){return t("tr",{key:i},[t("td",[t("div",{staticClass:"circle"},[e._v(e._s(i+1))])]),t("td",[t("input",{directives:[{name:"model",rawName:"v-model",value:a.checked,expression:"day.checked"}],staticClass:"larger-checkbox",attrs:{type:"checkbox",id:"weekday-checkbox-"+i},domProps:{checked:Array.isArray(a.checked)?e._i(a.checked,null)>-1:a.checked},on:{change:function(t){var i=a.checked,s=t.target,r=!!s.checked;if(Array.isArray(i)){var n=null,o=e._i(i,n);s.checked?o<0&&e.$set(a,"checked",i.concat([n])):o>-1&&e.$set(a,"checked",i.slice(0,o).concat(i.slice(o+1)))}else e.$set(a,"checked",r)}}}),t("label",{staticClass:"weekCheck-time",attrs:{for:"weekday-checkbox-"+i}},[e._v(e._s(a.name))])]),t("td",{staticClass:"col-md-3"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.twentyFour,expression:"day.twentyFour"}],staticClass:"larger-checkbox",attrs:{type:"checkbox",id:"twenty-four-checkbox-"+i},domProps:{checked:Array.isArray(a.twentyFour)?e._i(a.twentyFour,null)>-1:a.twentyFour},on:{change:function(t){var i=a.twentyFour,s=t.target,r=!!s.checked;if(Array.isArray(i)){var n=null,o=e._i(i,n);s.checked?o<0&&e.$set(a,"twentyFour",i.concat([n])):o>-1&&e.$set(a,"twentyFour",i.slice(0,o).concat(i.slice(o+1)))}else e.$set(a,"twentyFour",r)}}}),t("label",{staticClass:"weekCheck-time",attrs:{for:"twenty-four-checkbox-"+i}},[e._v("24 Hour")])]),a.timePicker?t("td",[t("div",{staticClass:"row"},[t("div",{staticClass:"time-picker"},[t("div",{staticClass:"time-container"},[t("label",{attrs:{for:"start-time-picker-"+i}},[e._v("Start:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.startTime,expression:"day.startTime"}],staticClass:"custom-time-picker",attrs:{type:"time",id:"start-time-picker-"+i,step:"1800"},domProps:{value:a.startTime},on:{input:[function(t){t.target.composing||e.$set(a,"startTime",t.target.value)},function(t){return e.updateStartTimeLabel(i)}]}})])]),t("div",{staticClass:"time-picker"},[t("div",{staticClass:"time-container"},[t("label",{attrs:{for:"end-time-picker-"+i}},[e._v("End:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.endTime,expression:"day.endTime"}],staticClass:"custom-time-picker",attrs:{type:"time",id:"end-time-picker-"+i,step:"1800"},domProps:{value:a.endTime},on:{input:[function(t){t.target.composing||e.$set(a,"endTime",t.target.value)},function(t){return e.updateEndTimeLabel(i)}]}})])])])]):t("td",[e._v(" Closed ")])])})),0)])])],[t("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12"},[t("div",{staticClass:"row barrw marketing",attrs:{id:"divconclusionheader"}},[t("div",{staticClass:"col-sm-12 col-md-12 col-lg-12"},[t("div",{staticClass:"heading-border"},[t("h5",{staticClass:"h5 mb-3 mt-2"},[t("span",[e._v(" "+e._s(e.$t("Marketing Video")))])])])])]),t("div",{staticClass:"mb-3 mt-2"},[t("h6",[t("span",{staticClass:"marketVideo"},[e._v(e._s(e.$t("Having a marketing video that`ll help get people excited about your brand ? Include it here.Example: (https://www.youtube.com/embed/ly36kn0ug4k)")))])]),t("h6",[e._v(e._s(e.$t("Youtube:(You can upload maximum 5 links.)")))])]),t("div",e._l(e.textboxes,(function(a,i){return t("div",{key:i,staticClass:"input-container mb-2"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.value,expression:"textbox.value"}],staticClass:"link-input",attrs:{type:"text"},domProps:{value:a.value},on:{input:function(t){t.target.composing||e.$set(a,"value",t.target.value)}}}),t("i",0!==i?{staticClass:"fa fa-trash delete-icon",on:{click:function(t){return e.removeTextBox(i)}}}:{staticClass:"fa fa-plus-circle fa-lg add-icon",staticStyle:{"margin-left":"10px"},on:{click:function(t){return e.addNewTextBox()}}})])})),0)])],[t("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12"},[t("div",{staticClass:"row barrw description",attrs:{id:"divconclusionheader"}},[t("div",{staticClass:"col-sm-12 col-md-12 col-lg-12"},[t("div",{staticClass:"heading-border"},[t("h5",{staticClass:"h5 mb-3 mt-2"},[t("span",[e._v(" "+e._s(e.$t("Description")))])])])])]),t("div",{staticClass:"mb-3"},[t("dynamic-form",{attrs:{lang:"en",schema:e.FormCkeditorSchema},scopedSlots:e._u([{key:"tgslot-Description",fn:function({data:a}){return[t("ckeditor",{attrs:{editor:e.editor},on:{ready:e.onReady},model:{value:a.fieldInfo.value,callback:function(t){e.$set(a.fieldInfo,"value",t)},expression:"data.fieldInfo.value"}}),t("span",{staticClass:"invalid-feedback d-block",attrs:{name:"Description"}},[e._v(e._s(a.error))])]}}])})],1)])],t("div",{staticClass:"row flex-row-reverse"},[t("div",{staticClass:"col-lg-6 text-right"},[t("a",{staticClass:"btn btn-success formbtn widthhalf mr-2",attrs:{href:"javascript:;",title:e.$t("Save")},on:{click:function(t){return e.SubmitData()}}},[t("i",{staticClass:"fa fa-save pr-2"}),e._v(" "+e._s(e.$t("Publish"))+" ")]),t("a",{staticClass:"btn btn-danger formbtn widthhalf",attrs:{href:"javascript:;",title:e.$t("Cancel")},on:{click:function(t){return e.Close()}}},[t("i",{staticClass:"fa fa-close pr-2"}),e._v(" "+e._s(e.$t("Cancel"))+" ")])])])],2)])},s=[],r=(a("14d9"),a("b7ef"),a("9769")),n={data(){return{editor:this.CLASSIC_EDITOR,worktype_id:null,textboxes:[{value:""}],servicetype_id:null,id:null,SortBy:"",SortExp:"",PageSize:"10",PageNumber:"1",weekdays:[{name:"Monday",checked:!1,twentyFour:!1,startTime:"",endTime:"",timePicker:!0},{name:"Tuesday",checked:!1,twentyFour:!1,startTime:"",endTime:"",timePicker:!0},{name:"Wednesday",checked:!1,twentyFour:!1,startTime:"",endTime:"",timePicker:!0},{name:"Thursday",checked:!1,twentyFour:!1,startTime:"",endTime:"",timePicker:!0},{name:"Friday",checked:!1,twentyFour:!1,startTime:"",endTime:"",timePicker:!0},{name:"Saturday",checked:!1,twentyFour:!1,startTime:"",endTime:"",timePicker:!0},{name:"Sunday",checked:!1,twentyFour:!1,startTime:"",endTime:"",timePicker:!0}],FormSchema:[{layoutType:"four",Data:[{astype:"TextField",label:this.$t("Work Type"),name:"Work Type",value:"",disabled:!0,validationRules:{required:!1,max:100}},{astype:"TextField",label:this.$t("Service"),name:"Service",value:"",disabled:!0,validationRules:{required:!1,max:100}},{astype:"NumericField",label:this.$t("Service Duration(HH:MM)"),name:"Service Duration",value:"",validationRules:{required:!1,max:100}},{astype:"SelectField",label:this.$t("Numbers of booking allowed per slot"),name:"",value:"",config:{options:[{value:"1",name:"1"},{value:"2",name:"2"},{value:"3",name:"3"}]},validationRules:{required:!1,max:100}}]},{layoutType:"four",Data:[{astype:"FileField",showLabel:!1,name:"ListAttachment",value:"",placeholder:"",validationRules:"",FieldIndex:0,config:{maxSize:5,accept:[{fileType:"png",iconClass:"fa-file-image-o"},{fileType:"jpg",iconClass:"fa-file-image-o"},{fileType:"pdf",iconClass:"fa-file-archive-o"}],onChange:this.GetBase64String,showAddIcon:!1,onAddButtonClick:"",multiple:!1}},{astype:"toggleField",label:this.$t("Advance Payment"),name:"Advance Payment",value:"",placeholder:"",validationRules:""}]}],FormCkeditorSchema:[{layoutType:"single",Data:[{astype:"SlotField",label:"",name:"Description",value:"",placeholder:"",config:{options:[]},settings:{isInSlot:!0},visibility:!0,validationRules:{required:!1,max:5e3}}]}]}},created:async function(){var e=this;e.id=this.$route.params.id,e.FetchRecords(e.id)},methods:{Close:function(){this.$router.push({name:"ServiceListing"})},FetchRecords:async function(e){var t=this,a="",i=`serviceTypeId=${e}&sortBy=${t.SortBy}&sortExp=${t.SortExp}&pagesize=${t.PageSize}&pagenumber=${t.PageNumber}`;this.isBlank(this.searchCondition)||(a+=this.searchCondition),this.isBlank(this.conditionForInstantSearch)||(a+=this.isBlank(this.searchCondition)?this.conditionForInstantSearch:" AND "+this.conditionForInstantSearch),""!=a&&(i=i+"&search="+a),await r["a"].GetServiceListingById(i).then((function(e){""!=e.data&&null!=e.data&&e.data.result.data.length>0?(t.ServiceListing=e.data.result.data,t.worktype_id=t.ServiceListing[0].worktype_id,t.servicetype_id=t.ServiceListing[0].service_type_id,t.FormSchema[0].Data[0].value=t.ServiceListing[0].worktype_name,t.FormSchema[0].Data[1].value=t.ServiceListing[0].service_name,t.FormSchema[0].Data[2].value=t.ServiceListing[0].service_duration,t.TotalRecords=e.data.result.data[0].TOTALRECORDS,t.TotalPages=Math.ceil(t.TotalRecords/t.PageSize),t.CurrentPage=t.PageNumber,t.noRecord=!1):(t.noRecord=!0,t.TotalRecords=0,t.ServiceListing=[]),setTimeout((function(){t.ResponsiveDataTable("tablelistingdata")}),500)}))},addNewTextBox:function(){this.textboxes.length<5?this.textboxes.push({value:""}):console.log("Maximum limit reached for adding textboxes.")},removeTextBox:function(e){this.textboxes.splice(e,1)},SubmitData:async function(){var e=this,t=[];e.weekdays.forEach((function(e,a){var i={name:e.name,checked:e.checked,twentyFour:e.twentyFour,startTime:e.startTime,endTime:e.endTime,timePicker:e.timePicker};t.push(i)}));const a=this.textboxes.map(e=>e.value);var i={worktype_id:e.worktype_id,servicetype_id:e.servicetype_id,Service_duration:e.FormSchema[0].Data[2].value,Bookings:e.FormSchema[0].Data[3].value,description:e.FormCkeditorSchema[0].Data[0].value,advancePayment:1==e.FormSchema[1].Data[1].value?1:0,raiseRequest:0,AvailabilityData:t,type:"PUBLISH",servicetype_name:"",FileData:e.fileData,cost:0,markup:0,unitprice:0,links:a},s=JSON.stringify(i);await r["a"].SavePublishDetail(s).then((function(t){""!=t.data.result&&null!=t.data.result&&("UPDATE"==t.data.result?(e.$router.push({name:"ServiceListing"}),e.ShowAlert(e.$t("UpdatedSuccess",[e.$t("Publish")]),"success",!0,e.$t("Alert"))):"ADD"==t.data.result?(e.$router.push({name:"ServiceListing"}),e.ShowAlert(e.$t("AddedSuccess",[e.$t("Publish")]),"success",!0,e.$t("Alert"))):e.ShowAlert(e.$t("ErrorMessage",[e.$t("Publish")]),"failure",!0,e.$t("Alert")))}))},GetBase64String:function(e){try{var t=this;t.fileData=[];var a=e.target.files[0],i=new FileReader;i.onload=function(e){return function(e){var i=e.target.result,s=window.btoa(i),r=a.name;t.fileName=r;var n=r.lastIndexOf("."),o=r.substring(n+1,r.length);t.fileExt+="."+o;var c='{"ContentType":"'+a.type+'","Size":"'+a.size+'","Extension":"'+o+'"}',l=a.size;t.fileSize=l;var d={attachement_mime:c,fileName:r,id:t.id,moduleName:t.modulename,subModuleCode:t.submodulecode,base64String:s,fileSize:l};t.fileData.push(d)}}(),i.readAsBinaryString(a)}catch(s){}}}},o=n,c=(a("692d"),a("2877")),l=Object(c["a"])(o,i,s,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-e3e5f5fc.js.map