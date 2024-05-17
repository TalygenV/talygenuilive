(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0df0a2"],{

/***/ "87e2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AdvancedSetup/AddFeature.vue?vue&type=template&id=7b170b2f&lang=en&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "my-popups"
  }, [_c('div', {
    staticClass: "modal d-block"
  }, [_c('div', {
    staticClass: "modal-dialog modal-dialog-centered"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('div', {
    staticClass: "modal-header"
  }, [_c('h5', {
    staticClass: "modal-title"
  }, [_vm._v(" " + _vm._s(_vm.matchValue.module_id ? "Edit Feature" : "Add Feature") + " ")]), _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-original-title": "Close"
    },
    on: {
      "click": function ($event) {
        return _vm.ClosePopup();
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-times"
  })])]), _c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 px-2"
  }, [_c('div', {
    staticClass: "p-3"
  }, [_c('dynamic-form', {
    attrs: {
      "lang": "en",
      "buttons": _vm.buttons,
      "schema": _vm.FormSchema
    },
    on: {
      "OnSubmit": _vm.onSubmit
    }
  }), _c('span', {
    staticClass: "mandatory"
  }, [_vm._v(_vm._s(_vm.$t('MandatoryString')))])], 1)])])])]), _vm.IsModule ? _c('PrivilegePopUp', {
    attrs: {
      "moduelId": _vm.moduelId,
      "subModuleId": _vm.subModuleId
    },
    on: {
      "Check-Privilege": _vm.CheckPrivilege
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/AdvancedSetup/AddFeature.vue?vue&type=template&id=7b170b2f&lang=en&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/PrivilegePopUp.vue?vue&type=template&id=33e37c6c&lang=en&
var PrivilegePopUpvue_type_template_id_33e37c6c_lang_en_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "my-popups"
  }, [_c('div', {
    staticClass: "modal d-block"
  }, [_c('div', {
    staticClass: "modal-dialog modal-dialog"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('div', {
    staticClass: "modal-header"
  }, [_c('h5', {
    staticClass: "modal-title"
  }, [_vm._v(" " + _vm._s(_vm.$t('Privilege')) + " ")]), _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-original-title": "Close"
    },
    on: {
      "click": function ($event) {
        return _vm.ClosePopup();
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-times"
  })])]), _c('div', {
    staticClass: "modal-body"
  }, [_c('div', {
    staticClass: "listing"
  }, [_c('div', {
    staticClass: "table-responsive table-fix-header"
  }, [_c('table', {
    staticClass: "table table-bordered dt-responsive nowrap mt-0",
    attrs: {
      "id": "tblReturnRequestBulk"
    }
  }, [_c('thead', {
    staticClass: "thead-bg"
  }, [_c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('Privilege')))]), _c('th', {
    staticClass: "text-center"
  }, [_vm._v(_vm._s(_vm.$t('Select All')) + " "), _c('input', {
    attrs: {
      "type": "checkbox"
    },
    on: {
      "click": _vm.SelectAllCheckedvalue
    }
  })])])]), _c('tbody', _vm._l(_vm.ModuleName, function (item, index) {
    return _c('tr', {
      key: index
    }, [_c('td', [_vm._v(" " + _vm._s(item.privilege_desc))]), _c('td', {
      staticClass: "text-center"
    }, [_c('div', {
      staticClass: "custom-control custom-checkbox"
    }, [_c('input', {
      staticClass: "custom-control-input chkItems",
      class: {
        'chkItems': item.sorting_order == 1
      },
      staticStyle: {
        "display": "none"
      },
      attrs: {
        "type": "checkbox",
        "id": "chk_2"
      },
      domProps: {
        "checked": item.is_enable,
        "value": item.privilege_id
      },
      on: {
        "click": function ($event) {
          return _vm.checkedValue(item.privilege_id);
        }
      }
    }), _c('label', {
      staticClass: "custom-control-label universal-custom-control-label pt-1",
      attrs: {
        "for": "chk_2"
      }
    })])])]);
  }), 0)])])])]), _c('div', {
    staticClass: "modal-footer"
  }, [_c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('button', {
    staticClass: "btn btn-info float-right",
    attrs: {
      "type": "submit"
    },
    on: {
      "click": _vm.save
    }
  }, [_c('i', {
    staticClass: "fa fa-save pr-2"
  }), _vm._v("Save")])])])])])])])]);
};
var PrivilegePopUpvue_type_template_id_33e37c6c_lang_en_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/PrivilegePopUp.vue?vue&type=template&id=33e37c6c&lang=en&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/PrivilegePopUp.vue?vue&type=script&lang=js&


/* harmony default export */ var PrivilegePopUpvue_type_script_lang_js_ = ({
  props: {
    moduelId: {},
    subModuleId: {},
    comment: []
  },
  data() {
    return {
      checkCheckBox: false,
      selectAll: false,
      ModuleName: []
    };
  },
  created: function () {
    this.GetPrivilegeListFeature();
  },
  methods: {
    SelectAllCheckedvalue: function () {
      var vm = this;
      if (vm.selectAll == false) {
        vm.ModuleName.forEach(element => {
          vm.selectAll = true;
          element.is_enable = 1;
        });
      } else {
        vm.ModuleName.forEach(element => {
          vm.selectAll = false;
          element.is_enable = 0;
        });
      }
    },
    ClosePopup: function () {
      this.$parent.IsModule = false;
    },
    async GetPrivilegeListFeature() {
      var vm = this;
      vm.isLoading = true;
      var url = `userTypeId=1&moduleId=${vm.moduelId}&subModuleId=${vm.subModuleId}&privilegeGroupCode=&roleId=`;
      await DataService["a" /* default */].GetPrivilegeListForEnableDisable(url).then(response => {
        vm.ModuleName = response.data.PrivilegeVertical;
        vm.isLoading = false;
      });
      setTimeout(function () {
        vm.CheckBoxBootstrap();
      }, 100);
    },
    save() {
      var vm = this;
      var PrivilageArrayval = [];
      $('.chkItems:checkbox:checked').not("[id^='chkAll']").each(function () {
        PrivilageArrayval.push({
          privilege_id: $(this).val(),
          is_enable: 1
        });
      });
      vm.$emit('Check-Privilege', PrivilageArrayval);
      vm.ClosePopup();
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/PrivilegePopUp.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_PrivilegePopUpvue_type_script_lang_js_ = (PrivilegePopUpvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Modal/PrivilegePopUp.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Modal_PrivilegePopUpvue_type_script_lang_js_,
  PrivilegePopUpvue_type_template_id_33e37c6c_lang_en_render,
  PrivilegePopUpvue_type_template_id_33e37c6c_lang_en_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PrivilegePopUp = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AdvancedSetup/AddFeature.vue?vue&type=script&lang=js&



/* harmony default export */ var AddFeaturevue_type_script_lang_js_ = ({
  components: {
    PrivilegePopUp: PrivilegePopUp
  },
  props: {
    matchValue: {
      type: Object,
      required: true
    }
  },
  created() {
    this.GetModuleName();
    if (this.matchValue.module_id != null) {
      this.moduleId = this.matchValue.module_id;
      this.GetSubModule();
    }
    if (this.matchValue.feature_based_on == "Privilege") {
      this.moduelId = this.matchValue.module_id;
      this.subModuleId = this.matchValue.sub_module_id;
      this.IsModule = true;
    }
  },
  watch: {
    watchValue(oldValue, newValue) {
      if (this.matchValue != null) {
        let module_id = this.matchValue.module_id;
        this.GetSubModule(module_id);
      }
    }
  },
  data() {
    return {
      featureid: 0,
      moduleId: null,
      watchValue: false,
      ModuleName: [],
      IsModule: false,
      CheckPrivilegeValue: '',
      FormSchema: [{
        layoutType: "double",
        Data: [{
          astype: "SelectField",
          label: 'Module Name',
          name: "ModuleName",
          value: this.matchValue.module_id ? this.matchValue.module_id : '',
          validationRules: {
            "required": true
          },
          placeholder: "",
          config: {
            options: [],
            onChange: this.GetSubModule
          }
        }, {
          astype: "SelectField",
          label: 'Sub Module',
          name: "SubModule",
          value: this.matchValue.sub_module_id ? this.matchValue.sub_module_id : '',
          placeholder: "",
          validationRules: {
            "required": true
          },
          config: {
            options: []
          }
        }]
      }, {
        layoutType: "double",
        Data: [{
          astype: "SelectField",
          label: this.$t('Based On'),
          name: "BasedOn",
          value: this.matchValue.feature_based_on ? this.matchValue.feature_based_on : '',
          placeholder: "",
          validationRules: {
            "required": true
          },
          config: {
            options: [{
              value: "Module",
              name: "SubModule"
            }, {
              value: "Privilege",
              name: "Privilege"
            }],
            onChange: this.GetPrivilege
          }
        }, {
          astype: 'TextField',
          label: this.$t('GroupName'),
          name: "GroupName",
          value: this.matchValue.group_name ? this.matchValue.group_name : '',
          placeholder: "",
          validationRules: {
            "required": false
          }
        }, {
          astype: 'TextField',
          label: this.$t('GroupCode'),
          name: "GroupCode",
          value: this.matchValue.group_code ? this.matchValue.group_code : '',
          placeholder: "",
          validationRules: {
            "required": false
          }
        }, {
          astype: 'TextField',
          label: this.$t('SectionName'),
          name: "SectionName",
          value: this.matchValue.enable_disable_sections_name ? this.matchValue.enable_disable_sections_name : '',
          placeholder: "",
          validationRules: {
            "required": true
          }
        }, {
          astype: 'TextField',
          label: this.$t('SectionCode'),
          name: "SectionCode",
          value: this.matchValue.section_code ? this.matchValue.section_code : '',
          placeholder: "",
          validationRules: {
            "required": true
          }
        }]
      }, {
        layoutType: "single",
        Data: [{
          astype: "TextAreaField",
          label: this.$t('Description'),
          name: "Description",
          value: this.matchValue.comment ? this.matchValue.comment : '',
          placeholder: "",
          validationRules: {
            "required": true
          }
        }]
      }],
      buttons: [{
        type: "submit",
        class: "btn btn-success",
        text: "<i class='fa fa-save pr-2'></i>" + this.$t('Save')
      }, {
        type: "button",
        class: "btn btn-danger",
        text: "<i class='fa fa-close pr-2'></i>Cancel",
        onClick: this.ClosePopup
      }]
    };
  },
  methods: {
    async CheckPrivilege(value) {
      this.CheckPrivilegeValue = value;
    },
    async GetModuleName() {
      var vm = this;
      vm.isLoading = true;
      var url = `moduleId=&userTypeId=&requestFrom=&isCustomFieldEnable`;
      await DataService["a" /* default */].GetModuleList(url).then(response => {
        vm.AssetType = response.data.Data;
        console.log(vm.AssetType);
        vm.AssetType.forEach(itm => {
          vm.FormSchema[0].Data[0].config.options.push({
            name: itm.module_name,
            value: itm.module_id
          });
        });
        vm.isLoading = false;
      }).catch(err => {
        console.error(err);
      });
    },
    async GetSubModule(evt) {
      var vm = this;
      vm.isLoading = true;
      vm.FormSchema[0].Data[1].config.options = [];
      if (evt == undefined) {
        var url = `moduleId=${this.moduleId}&userTypeId=&requestFrom=&isCustomFieldEnable`;
      } else {
        var url = `moduleId=${evt.target.value}&userTypeId=&requestFrom=&isCustomFieldEnable`;
      }
      await DataService["a" /* default */].GetModuleList(url).then(response => {
        vm.ModuleName = response.data.Data;
        console.log(vm.ModuleName);
        vm.ModuleName.forEach(item => {
          vm.FormSchema[0].Data[1].config.options.push({
            name: item.sub_module_name,
            value: item.sub_module_id
          });
        });
        vm.isLoading = false;
      }).catch(err => {
        console.error(err);
      });
    },
    ClosePopup: function () {
      this.$parent.IsAddFeature = false;
    },
    async GetPrivilege(evt) {
      if (evt.target.value == 'Privilege') {
        this.moduelId = this.FormSchema[0].Data[0].value;
        this.subModuleId = this.FormSchema[0].Data[1].value;
        this.IsModule = true;
      } else {
        this.IsModule = false;
      }
    },
    async onSubmit(formfields, e) {
      var vm = this;
      vm.isLoading = true;
      if (vm.matchValue.enable_disable_sections_id != null) {
        vm.featureid = vm.matchValue.enable_disable_sections_id;
      }
      var obj = {
        feature_id: vm.featureid,
        module_id: formfields.ModuleName,
        sub_module_id: formfields.SubModule,
        feature_based_on: formfields.BasedOn,
        feature_name: formfields.SectionName,
        section_code: formfields.SectionCode == '' ? 'DuplicateValue' : formfields.SectionCode,
        group_name: formfields.GroupName == '' ? 'Default' : formfields.GroupName,
        group_code: formfields.GroupCode == '' ? 'DuplicateValue' : formfields.GroupCode,
        status_id: 1001,
        comment: formfields.Description,
        postString: formfields.BasedOn == 'Module' ? '' : JSON.stringify(vm.CheckPrivilegeValue)
      };
      var url = `feature_id=${obj.feature_id}&module_id=${obj.module_id}&sub_module_id=${obj.sub_module_id}&feature_based_on=${obj.feature_based_on}&feature_name=${obj.feature_name}&section_code=${obj.section_code}&group_name=${obj.group_name}&group_code=${obj.group_code}&status_id=${obj.status_id}&comment=${obj.comment}&postString=${obj.postString}`;
      await DataService["a" /* default */].SaveEnableDisableSections(url).then(response => {
        vm.isLoading = false;
        if (response.data === 0) {
          vm.ShowAlert(vm.$t('AddedError'), "failure", false, vm.$t("Alert"));
        } else if (response.data === 1) {
          vm.ShowAlert(vm.$t('PrivilegeSave'), "success", true, vm.$t('Alert'));
        } else if (response.data === 2) {
          vm.ShowAlert(vm.$t('PrivilegeUpdated'), "success", true, vm.$t('Alert'));
        } else {
          vm.ShowAlert(vm.$t('DuplicateRecords'), "Warning", false, vm.$t("Alert"));
        }
        vm.$parent.FetchData();
        vm.ClosePopup();
        // if (response.data != 3 && response.data!=0) {
        //     vm.ClosePopup();
        //     vm.ShowAlert(vm.$t('PrivilegeSave'), "success", true, vm.$t('Alert'));
        //     vm.$parent.FetchData();
        // } 
        // else if(response.data==3){
        //     vm.ShowAlert(vm.$t('DuplicateRecords'), "failure", false, vm.$t("Alert"));
        // }
        // else {
        //     vm.ShowAlert(vm.$t('AddedError'), "failure", false, vm.$t("Alert"));
        // }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/AdvancedSetup/AddFeature.vue?vue&type=script&lang=js&
 /* harmony default export */ var AdvancedSetup_AddFeaturevue_type_script_lang_js_ = (AddFeaturevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/AdvancedSetup/AddFeature.vue





/* normalize component */

var AddFeature_component = Object(componentNormalizer["a" /* default */])(
  AdvancedSetup_AddFeaturevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AddFeature = __webpack_exports__["default"] = (AddFeature_component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d0df0a2.js.map