(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-5b019872"],{

/***/ "0de7":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("affb");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("10ff4382", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "affb":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".dynamic-multiselect .multiselect__tags{padding:10px 40px 4px 8px!important}.dynamic-multiselect .multiselect__placeholder{margin-bottom:5px;padding-top:0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "ce49":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Manage_vue_vue_type_style_index_0_id_6eb8e92e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0de7");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Manage_vue_vue_type_style_index_0_id_6eb8e92e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Manage_vue_vue_type_style_index_0_id_6eb8e92e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "d7c2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ProductAssignment/Manage.vue?vue&type=template&id=6eb8e92e&lang=en&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "main-content"
  }, [_c('loader', {
    attrs: {
      "is-visible": _vm.isLoading
    }
  }), _c('div', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12 padding-t_8"
  }, [_c('div', {
    staticClass: "theme-primary partition-full"
  }, [_c('span', {
    staticClass: "p-name text-white"
  }, [_vm._v(_vm._s(_vm.$t('ASSET_ASSIGN_Desc')))]), _c('span', {
    staticClass: "p-actions float-right"
  }, [_c('a', {
    staticClass: "p-action-btn text-white",
    attrs: {
      "title": "Page Tour"
    },
    on: {
      "click": function ($event) {
        return _vm.setTourGuideSteps(0);
      }
    }
  }, [_c('em', {
    staticClass: "fa fa fa-road"
  }), _vm._v(" "), _c('br'), _c('span', [_vm._v("Page Tour")])]), _c('a', {
    staticClass: "p-action-btn text-white",
    attrs: {
      "title": "BacktoList"
    },
    on: {
      "click": _vm.BackTolist
    }
  }, [_c('em', {
    staticClass: "fa fa-angle-double-left pr-2"
  }), _c('br'), _c('span', [_vm._v(_vm._s(_vm.$t('BacktoList')))])])])])])])]), _c('div', {
    staticClass: "border p-3"
  }, [_c('div', {
    staticClass: "col-md-12 p-0",
    attrs: {
      "id": "dynmicForm"
    }
  }, [_c('Form', {
    ref: "ProductAssignmentForm"
  }, [_c('dynamic-form', {
    ref: "FieldUpdate",
    attrs: {
      "lang": "en",
      "buttons": _vm.buttons,
      "schema": _vm.FormSchema
    },
    scopedSlots: _vm._u([{
      key: "tgslot-DateofAssignment",
      fn: function ({
        data
      }) {
        return [_c('div', {
          staticClass: "input-group"
        }, [_c('v-date-picker', {
          staticClass: "timedate input-group",
          attrs: {
            "popover": _vm.popover,
            "name": _vm.DateofAssignment,
            "mode": "dateTime"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              inputValue,
              togglePopover
            }) {
              return [_c('input', _vm._g({
                class: {
                  'form-control': true
                },
                attrs: {
                  "placeholder": "MM/DD/YYYY hh:mm AM/PM"
                },
                domProps: {
                  "value": inputValue
                },
                on: {
                  "click": function ($event) {
                    return togglePopover();
                  }
                }
              }, _vm.inputEvents)), _c('div', {
                staticClass: "input-group-append",
                on: {
                  "click": function ($event) {
                    return togglePopover();
                  }
                }
              }, [_c('span', {
                staticClass: "input-group-text"
              }, [_c('em', {
                staticClass: "fa fa-calendar"
              })])])];
            }
          }], null, true),
          model: {
            value: _vm.DateofAssignment,
            callback: function ($$v) {
              _vm.DateofAssignment = $$v;
            },
            expression: "DateofAssignment"
          }
        })], 1)];
      }
    }, {
      key: "tgslot-DateofAssignmentTill",
      fn: function ({
        data
      }) {
        return [_c('div', {
          staticClass: "input-group"
        }, [_c('v-date-picker', {
          staticClass: "timedate input-group",
          attrs: {
            "popover": _vm.popover,
            "name": _vm.DateofAssignmentTill,
            "min-date": _vm.DateofAssignment,
            "mode": "dateTime"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              inputValue,
              togglePopover
            }) {
              return [_c('input', _vm._g({
                class: {
                  'form-control': true
                },
                attrs: {
                  "placeholder": "MM/DD/YYYY hh:mm AM/PM"
                },
                domProps: {
                  "value": inputValue
                },
                on: {
                  "click": function ($event) {
                    return togglePopover();
                  }
                }
              }, _vm.inputEvents)), _c('div', {
                staticClass: "input-group-append",
                on: {
                  "click": function ($event) {
                    return togglePopover();
                  }
                }
              }, [_c('span', {
                staticClass: "input-group-text"
              }, [_c('em', {
                staticClass: "fa fa-calendar"
              })])])];
            }
          }], null, true),
          model: {
            value: _vm.DateofAssignmentTill,
            callback: function ($$v) {
              _vm.DateofAssignmentTill = $$v;
            },
            expression: "DateofAssignmentTill"
          }
        })], 1)];
      }
    }])
  })], 1), _vm.DataLoaded ? _c('SearchAsset', {
    attrs: {
      "GetParentDetails": _vm.GetParentDetails
    },
    on: {
      "GetDetailsofParent": _vm.GetDetails,
      "AssestArrayData": _vm.AssestArrayData
    }
  }) : _vm._e(), _c('div', {
    staticClass: "row flex-row-reverse py-3"
  }, [_c('div', {
    staticClass: "col-lg-6 text-right"
  }, [_c('a', {
    staticClass: "btn btn-success formbtn text-white mr-1",
    attrs: {
      "href": "javascript:void(0);",
      "id": "AssetassignSaveBtn",
      "title": _vm.$t('Save')
    },
    on: {
      "click": _vm.SubmitData
    }
  }, [_c('i', {
    staticClass: "fa fa-save pr-2"
  }), _c('span', [_vm._v(_vm._s(_vm.$t('Save')))])]), _c('a', {
    staticClass: "btn btn-danger formbtn text-white",
    attrs: {
      "href": "javascript:;",
      "title": _vm.$t('Cancel')
    },
    on: {
      "click": function ($event) {
        return _vm.onCancel();
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-close pr-2"
  }), _c('span', [_vm._v(_vm._s(_vm.$t('Cancel')))])])]), _c('div', {
    staticClass: "col-lg-6"
  }, [_c('div', {
    staticClass: "py-2"
  }, [_c('small', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.$t('MandatoryString')))])])])])], 1)])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/ProductAssignment/Manage.vue?vue&type=template&id=6eb8e92e&lang=en&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// EXTERNAL MODULE: ./src/components/Modal/SearchAsset.vue + 9 modules
var SearchAsset = __webpack_require__("b25f");

// EXTERNAL MODULE: ./node_modules/luxon/build/cjs-browser/luxon.js
var luxon = __webpack_require__("1315");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ProductAssignment/Manage.vue?vue&type=script&lang=js&




/* harmony default export */ var Managevue_type_script_lang_js_ = ({
  components: {
    SearchAsset: SearchAsset["a" /* default */]
  },
  data() {
    return {
      DataLoaded: 0,
      isLoading: false,
      UsersData: [],
      DateofAssignment: '',
      Users: '',
      Remarks: '',
      DateofAssignmentTill: '',
      Groupname: '',
      Users1: '',
      Users2: '',
      popover: {
        visibility: 'click'
      },
      UserId: null,
      GetParentDetails: null,
      SelfCheckout: null,
      RequestFrom: '',
      isUsedFor: '',
      selectedOption: '',
      checked: true,
      unchecked: false,
      txtAssignUserType: 'User',
      disabled: false,
      dataArray: [],
      buttons: [],
      pendingItem: '',
      checkAvailability: '',
      dept_ids: '',
      FormSchema: [{
        layoutType: "four",
        Data: [{
          astype: "MultiSelectField",
          label: this.$t('Departments'),
          name: "Departments",
          mode: "tag",
          value: "",
          placeholder: "Departments",
          disabled: false,
          config: {
            options: [],
            onChange: this.GetCompanyUsers,
            onRemove: this.removeRecord
          },
          validationRules: {
            "required": false
          }
        }, {
          astype: "RadioField",
          label: this.$t('AssignTo'),
          name: "AssignTo",
          value: "User",
          placeholder: "",
          config: {
            options: [{
              value: "User",
              name: "User"
            }, {
              value: "Client",
              name: "Client"
            }],
            onChange: this.AssignUserType
          },
          validationRules: {
            "required": true
          }
        }, {
          astype: "SelectField",
          label: this.$t('SelectUser'),
          name: "User",
          value: "",
          placeholder: "",
          visibility: true,
          validationRules: {
            "required": true
          },
          config: {
            options: [],
            onChange: this.GetDetails
          }
        }, {
          astype: "SelectField",
          label: this.$t('ExistingClient'),
          name: "Client",
          value: "",
          placeholder: "",
          visibility: false,
          validationRules: {
            "required": true
          },
          config: {
            options: []
          }
        }, {
          astype: "SelectField",
          label: this.$t('NotificationUser'),
          name: "NotificationUser",
          value: "",
          placeholder: "",
          validationRules: {
            "required": false
          },
          config: {
            options: []
          }
        }, {
          astype: "slotField",
          label: this.$t('DateofAssignmentt'),
          name: "DateofAssignment",
          value: '',
          placeholder: "",
          validationRules: "required",
          config: {
            format: "MM/DD/YYYY HH:MM A",
            minDate: new Date()
          }
        }, {
          astype: "slotField",
          label: this.$t('DateofAssignmentTilll'),
          name: "DateofAssignmentTill",
          value: '',
          placeholder: "",
          validationRules: "required",
          config: {
            format: "MM/DD/YYYY HH:MM A",
            minDate: new Date()
          }
        }]
      }, {
        Data: [{
          astype: "TextAreaField",
          label: this.$t('Remarks'),
          name: "Remarks",
          value: "",
          placeholder: "",
          validationRules: "",
          config: {
            rows: 5
          }
        }]
      }],
      Timezone: '',
      departmentData: [],
      TagsSelectedArray: []
    };
  },
  created: async function () {
    await this.GetDepartment();
    await this.GetNotificationUser();
    await this.GetCompanyUsers();
    await this.GetCompanyClients();
    this.UserId = this.GetUserInfo.ID;
    this.DataLoaded = 1;
    const currentDate = new Date();
    this.DateofAssignment = new Date();
    currentDate.setDate(currentDate.getDate() + 7);
    this.DateofAssignmentTill = currentDate;
    this.Timezone = this.GetUserInfo.TimeZone;
    if (this.$route.params.reqForm == 'myitems') {
      this.FormSchema[0].Data[2].value = this.UserId;
    } else if (this.$route.params.reqForm == 'pendingRequest') {
      //debugger
      this.pendingItem = this.$route.params.items;
      if (this.pendingItem != null && this.pendingItem != '' && this.pendingItem != 'undefined') {
        this.FormSchema[0].Data[2].value = this.pendingItem.USER_ID;

        //(this.FormSchema)[0].Data[0].value = this.pendingItem.DEPARTMENT_ID;

        let obj = this.departmentData.find(x => x.department_id == this.pendingItem.DEPARTMENT_ID);
        this.TagsSelectedArray.push({
          label: obj.department_name,
          value: obj.department_id
        });
        this.FormSchema[0].Data[0].value = this.TagsSelectedArray;
        this.DateofAssignment = this.pendingItem.FROM_TIME;
        this.DateofAssignmentTill = this.pendingItem.TO_TIME;
      }
    } else if (this.$route.params.reqForm == 'checkAssetAvailability') {
      this.checkAvailability = this.$route.params.items;
      if (this.checkAvailability != null && this.checkAvailability != '' && this.checkAvailability != 'undefined') {
        //debugger;
        // this.DateofAssignment=this.checkAvailability.FROM_TIME;
        // this.DateofAssignmentTill=this.checkAvailability.TO_TIME;
      }
    }
  },
  methods: {
    AssignUserType: async function (event, field) {
      field.value = event.target.getAttribute('data-value');
      if (event.target.attributes.id.value == 'AssignTo_1') {
        this.FormSchema[0].Data[2].visibility = false;
        this.FormSchema[0].Data[3].visibility = true;
        this.FormSchema[0].Data[0].disabled = true;
        // vm.$refs.ProductAssignmentForm.fields.Departments.failed=false;
        //(vm.FormSchema)[0].Data[0].validationRules.required=false;        
      } else {
        this.FormSchema[0].Data[2].visibility = true;
        this.FormSchema[0].Data[3].visibility = false;
        this.FormSchema[0].Data[0].disabled = false;
        //vm.$refs.ProductAssignmentForm.fields.Departments.failed=true;
        //(vm.FormSchema)[0].Data[0].validationRules.required=true;
      }
    },

    BackTolist: function () {
      this.$router.push({
        name: 'ProductAssignment'
      });
    },
    onCancel: function () {
      var vm = this;
      if (vm.$route.params.reqForm == 'pendingRequest') {
        vm.$router.push({
          name: 'PendingRequestList'
        });
      } else {
        vm.$router.push({
          name: 'ProductAssignment'
        });
      }
    },
    GetDepartment: async function () {
      var vm = this;
      let url = `includeInactiveStatus=true&isTicketHandler=false`;
      await DataService["a" /* default */].GetDepartment(url).then(response => {
        vm.departmentData = response.data;
        vm.departmentData.forEach(item => {
          this.FormSchema[0].Data[0].config.options.push({
            name: `${item.department_name}`,
            value: `${item.department_id}`
          });
        });
      });
    },
    GetNotificationUser: async function () {
      let url = `moduleName=ASSETASSIGNMENT&department_ids=`;
      await DataService["a" /* default */].GetNotficationUsers(url).then(response => {
        response.data.data.forEach(item => {
          this.FormSchema[0].Data[4].config.options.push({
            name: `${item.NAME}`,
            value: `${item.USER_ID}`
          });
        });
      });
    },
    GetCompanyUsers: async function () {
      var vm = this;
      vm.FormSchema[0].Data[2].config.options = [];
      vm.isLoading = true;
      var department_ids = ''; // (vm.FormSchema)[0].Data[0].value;

      if (vm.FormSchema[0].Data[0].value.length > 0) {
        vm.FormSchema[0].Data[0].value.forEach(item => {
          department_ids += item.value + ',';
        });
      }
      this.FormSchema[0].Data[0].config.options.forEach(item => {
        if (event.currentTarget.textContent == item.name) {
          department_ids += item.value;
        }
      });
      vm.dept_ids = department_ids;
      let url = `moduleName=ASSETASSIGNMENT&department_ids=${department_ids}`;
      await DataService["a" /* default */].GetCompanyUsers(url).then(response => {
        this.UsersData = response.data;
        response.data.forEach(item => {
          this.FormSchema[0].Data[2].config.options.push({
            name: `${item.USERNAME}`,
            value: `${item.USER_ID}`
          });
          vm.isLoading = false;
          this.$refs.FieldUpdate.UpdateKeyValue();
        });
        if (response.data.length <= 0) {
          this.FormSchema[0].Data[2].config.options = [];
          vm.isLoading = false;
        }
      });
    },
    removeRecord: async function (event, field, meta) {
      var vm = this;
      vm.isLoading = true;
      const department_ids = [];
      vm.FormSchema[0].Data[0].value.forEach(item => {
        //debugger
        if (item.value != event.value) {
          department_ids.push(item.value);
        }
      });
      let url = `moduleName=ASSETASSIGNMENT&department_ids=${department_ids.toString()}`;
      await DataService["a" /* default */].GetCompanyUsers(url).then(response => {
        this.UsersData = response.data;
        this.FormSchema[0].Data[2].config.options = [];
        response.data.forEach(item => {
          this.FormSchema[0].Data[2].config.options.push({
            name: `${item.USERNAME}`,
            value: `${item.USER_ID}`
          });
          vm.isLoading = false;
          this.$refs.FieldUpdate.UpdateKeyValue();
        });
        if (response.data.length <= 0) {
          this.FormSchema[0].Data[2].config.options = [];
          vm.isLoading = false;
        }
      });
    },
    GetCompanyClients: async function () {
      let url = `moduleName=ASSETASSIGNMENT&department_ids=`;
      await DataService["a" /* default */].GetCompanyClients(url).then(response => {
        response.data.forEach(item => {
          this.FormSchema[0].Data[3].config.options.push({
            name: `${item.USERNAME}`,
            value: `${item.user_id}`
          });
        });
      });
    },
    GetDetails: function () {
      var vm = this;
      var userid = this.FormSchema[0].Data[2].value;
      vm.GetParentDetails = {
        DepartmentID: vm.txtDepartment,
        UserID: userid,
        GetNotificationUserID: vm.Users1,
        FromDate: vm.DateofAssignment,
        TillDate: vm.DateofAssignmentTill,
        SelfCheckout: null,
        RequestFrom: 'assetassignment',
        isUsedFor: 'search',
        pendingItems: vm.pendingItem,
        checkAvailabilities: vm.checkAvailability
      };
      sessionStorage.setItem("GetParentDetails", JSON.stringify(vm.GetParentDetails));
    },
    AssestArrayData(AssestArrayData) {
      //debugger;
      this.dataArray = AssestArrayData;
    },
    SubmitData: function () {
      var _vm$$children$;
      var vm = this;
      var DateAssignment = new Date(Date.parse(vm.DateofAssignment));
      var DateTill = new Date(Date.parse(vm.DateofAssignmentTill));

      // Comparing dates
      if (DateAssignment > DateTill) {
        vm.ShowAlert(vm.$t("DateAssignTillMsg"), "failure", vm.$t('Alert'));
        return false;
      } else {
        // console.log("DateAssignment is less than or equal to DateTill");
      }
      // var RequstionList = '';
      // this.$children.forEach(child => {
      //     //debugger;
      //     if (child.$options.name === 'List_Of_Asset') {
      //         RequstionList = child.GetRequstionList();
      //     }
      // });

      var RequstionList = (_vm$$children$ = vm.$children[2]) === null || _vm$$children$ === void 0 || (_vm$$children$ = _vm$$children$.$children[3]) === null || _vm$$children$ === void 0 ? void 0 : _vm$$children$.GetRequstionList;
      if (vm.FormSchema[0].Data[1].value == 'Client') {
        vm.$refs.ProductAssignmentForm.fields.Departments.failed = false;
        vm.FormSchema[0].Data[0].validationRules.required = false;
      } else {
        vm.$refs.ProductAssignmentForm.fields.Departments.failed = true;
        vm.FormSchema[0].Data[0].validationRules.required = false;
      }
      vm.$refs.ProductAssignmentForm.validate().then(result => {
        //debugger;
        if (vm.$refs.ProductAssignmentForm.errors['Assign To'].length > 0) {
          result = true;
        }
        if (vm.FormSchema[0].Data[2].value == "" && vm.FormSchema[0].Data[3].value == "") {
          result = false;
        }
        if (result) {
          //debugger;
          var formData = new FormData();
          var files = [];
          let uniquenames = "";
          var issueToName = "";
          for (let i = 0; i < vm.dataArray.length; i++) {
            if (vm.dataArray.length > 1) {
              uniquenames = vm.dataArray[0].AssetUniqueName;
            } else {
              uniquenames = uniquenames + "," + vm.dataArray[i].AssetUniqueName;
            }
          }
          vm.UsersData.forEach(item => {
            if (item.USER_ID == parseInt(vm.FormSchema[0].Data[2].value)) {
              issueToName = item.USERNAME;
            }
          });
          var hasEmptyRequestQuantity = false;
          vm.dataArray.forEach(item => {
            if (item.RequestQuantity === null || item.RequestQuantity === '' || item.RequestQuantity === 0 || isNaN(item.RequestQuantity) || item.RequestQuantity === 'undefined') {
              hasEmptyRequestQuantity = true;
            }
          });
          if (hasEmptyRequestQuantity) {
            vm.ShowAlert(vm.$t('RequestQuantityRequired'), "warning", true, vm.$t('Alert'));
            return false;
          }
          ////debugger

          if (RequstionList != undefined) {
            RequstionList.forEach(itm => {
              var obj = {
                "AssetCatalogUniqueId": itm.ChildUniqueId,
                "RequestFromRequsition": 1,
                "IsGroup": null,
                "ParentAssetCatalogUniqueId": itm.ChildUniqueId,
                "AssetQuantity": parseInt(itm.RequestQuantity),
                "RequestQuantity": parseInt(itm.RequestQuantity),
                "BatchId": itm.RequisitionBatchId,
                "AssetUniqueName": itm.ChildUniqueName
              };
              vm.dataArray.push(obj);
            });
          }
          var mainObj = {
            UserId: vm.FormSchema[0].Data[1].value == 'Client' ? vm.FormSchema[0].Data[3].value : vm.FormSchema[0].Data[2].value,
            DepartmentId: vm.FormSchema[0].Data[0].value,
            AssignedFrom: null,
            AssignedTill: null,
            AssignedFromDateTime: vm.$options.filters.formatDateTimeYYMMDD(vm.DateofAssignment),
            AssignedTillDateTime: vm.$options.filters.formatDateTimeYYMMDD(vm.DateofAssignmentTill),
            StartTime: null,
            EndTime: null,
            Comment: vm.FormSchema[1].Data[0].value,
            NotificationUsers: vm.FormSchema[0].Data[4].value,
            RequestFrom: 'AssetAssign',
            IsRequestFromRequisition: false,
            IssueToName: issueToName,
            RFID: 0,
            // GroupRequistionAssestInfostring: vm.dataArray,
            // itemNames: uniquenames
            GroupRequistionAssestInfostring: vm.dataArray,
            itemNames: vm.dataArray.map(item => item.AssetUniqueName).join(",")
          };
          if (files.length > 0) {
            formData.append("postString", JSON.stringify(mainObj));
          } else {
            formData.append("postString", JSON.stringify(mainObj));
          }
          if (vm.dataArray.length > 0) {
            DataService["a" /* default */].SaveGroupAssign(formData).then(response => {
              if (response.data.status == 0) {
                if (response.data.existIds == '') {
                  vm.ShowAlert(vm.$t("Itemassignedsuccessfully"), "success", vm.$t('Alert'));
                  if (vm.$route.query.reqForm == 'MyItems') {} else if (vm.$route.query.reqForm == 'pendingRequest') {} else {
                    vm.onCancel();
                  }
                }
              } else {
                vm.ShowAlert(vm.$t("ErrorWhileProcessingRequest"), "failure", vm.$t('Alert'));
              }
            });
          } else {
            vm.ShowAlert(vm.$t("AddAtLeastOne"), "failure", vm.$t('Alert'));
          }
        }
      });
    },
    formatTimeToCustomFormat(inputTime) {
      if (inputTime != null && inputTime !== '') {
        const inputLuxonDateTime = luxon["DateTime"].fromJSDate(new Date(inputTime), {
          zone: 'utc'
        }); // Assume the input time is in UTC               
        const targetTimeZone = `Etc/GMT${this.Timezone}`;
        const outputLuxonDateTime = inputLuxonDateTime.setZone(targetTimeZone);
        const formattedDateTime = outputLuxonDateTime.toFormat("MM/dd/yyyy h:mm");
        return formattedDateTime;
      } else {
        return "";
      }
    }
  }
});
// CONCATENATED MODULE: ./src/views/ProductAssignment/Manage.vue?vue&type=script&lang=js&
 /* harmony default export */ var ProductAssignment_Managevue_type_script_lang_js_ = (Managevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/ProductAssignment/Manage.vue?vue&type=style&index=0&id=6eb8e92e&prod&lang=css&
var Managevue_type_style_index_0_id_6eb8e92e_prod_lang_css_ = __webpack_require__("ce49");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/ProductAssignment/Manage.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ProductAssignment_Managevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Manage = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-5b019872.js.map