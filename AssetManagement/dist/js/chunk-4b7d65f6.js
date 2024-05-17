(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-4b7d65f6"],{

/***/ "1329":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarcodeSearch_vue_vue_type_style_index_0_id_0620183e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("225a");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarcodeSearch_vue_vue_type_style_index_0_id_0620183e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarcodeSearch_vue_vue_type_style_index_0_id_0620183e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "16e7":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "tr.high-profile-bar td:first-child:after{background:#de0303}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "225a":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("16e7");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("a10b1acc", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "2d4e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/RequsitionReject.vue?vue&type=template&id=1d82be01&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "my-popups"
  }, [_c('loader', {
    attrs: {
      "is-visible": _vm.isLoading
    }
  }), _c('div', {
    staticClass: "modal d-block"
  }, [_c('div', {
    staticClass: "modal-dialog modal-dialog-centered"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('div', {
    staticClass: "modal-header"
  }, [_c('h5', {
    staticClass: "modal-title"
  }, [_vm._v(" " + _vm._s(_vm.$t("Reject")) + " ")]), _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-original-title": "Close"
    },
    on: {
      "click": function ($event) {
        return _vm.ClosePOPuP($event);
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-times"
  })])]), _c('div', {
    staticClass: "border p-3"
  }, [_c('dynamic-form', {
    attrs: {
      "lang": "en",
      "buttons": _vm.buttons,
      "schema": _vm.FormSchema
    },
    on: {
      "OnSubmit": _vm.onSubmit
    }
  })], 1)])])])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/RequsitionReject.vue?vue&type=template&id=1d82be01&

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/RequsitionReject.vue?vue&type=script&lang=js&

/* harmony default export */ var RequsitionRejectvue_type_script_lang_js_ = ({
  props: {
    RejectData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      FormSchema: [{
        layoutType: "single",
        Data: [{
          astype: "TextAreaField",
          label: this.$t('Reason'),
          name: "Reason",
          value: "",
          validationRules: {
            "required": true,
            max: 1000
          },
          placeholder: "",
          config: {
            rows: 0
          }
        }]
      }],
      buttons: [{
        type: "submit",
        class: "btn btn-success",
        text: "<i class='fa fa-save pr-2'></i>Save"
      }, {
        type: "button",
        class: "btn btn-danger",
        text: "<i class='fa fa-close pr-2'></i>Cancel",
        onClick: this.onCancel
      }],
      assignmentId: '',
      CancelledBy: 'ASSIGNER',
      RejectsData: [],
      isLoading: false
    };
  },
  created: function () {},
  methods: {
    onSubmit: function (formfields) {
      debugger;
      var vm = this;
      vm.isLoading = true;
      debugger;
      const RequestionData = {
        batchId: vm.RejectData.REQUISITION_BATCH_ID,
        assignmentId: vm.assignmentId,
        requisitionCancelledFrom: vm.CancelledBy,
        comment: formfields.Reason
      };
      DataService["a" /* default */].UpdateRequisitionStatus(RequestionData).then(response => {
        if (response.data != null) {
          if (response.data.length > 0) {
            if (response.data == 1) {
              vm.ShowAlert(vm.$t("Record Reject Successfully"), "success", vm.$t('Alert'));
              vm.isLoading = false;
              vm.$parent.FetchData();
              vm.$parent.ClosePOPuP();
            } else {
              vm.ShowAlert(vm.$t("Unknown Error Occur"), "failure", true, vm.$t('Alert'));
              vm.isLoading = false;
              vm.$parent.ClosePOPuP();
            }
          } else {
            vm.ShowAlert(vm.$t("Unknown Error Occur"), "failure", true, vm.$t('Alert'));
            vm.isLoading = false;
            vm.$parent.ClosePOPuP();
          }
        }
        setTimeout(function () {
          vm.CheckBoxBootstrap();
        }, 100);
      });
    },
    ClosePOPuP: function (item) {
      this.$emit('ClosePOPuP', item);
    },
    onCancel: function () {
      debugger;
      var vm = this;
      vm.FormSchema[0].Data[0].value = '';
      vm.ClosePOPuP();
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/RequsitionReject.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_RequsitionRejectvue_type_script_lang_js_ = (RequsitionRejectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Modal/RequsitionReject.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Modal_RequsitionRejectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RequsitionReject = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "feec":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetAssignment/BarcodeSearch.vue?vue&type=template&id=0620183e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "main-content",
    attrs: {
      "id": "tabs"
    }
  }, [_c('loader', {
    attrs: {
      "is-visible": _vm.isLoading
    }
  }), _c('div', {
    staticClass: "padding-t_10",
    attrs: {
      "id": "reportstabsdata"
    }
  }, [_c('div', {
    staticClass: "left-menu-tab"
  }, [_c('div', {
    staticClass: "col-md-12 p-0"
  }, [_c('div', {
    staticClass: "theme-primary partition"
  }, [_c('span', {
    staticClass: "p-name text-white"
  }, [_vm._v(_vm._s(_vm.Headerstext))])])]), _c('ul', {
    staticClass: "nav nav-pills flex-column left-tab mt-2 responivecustomtab nav-tabs",
    staticStyle: {
      "cursor": "pointer"
    }
  }, _vm._l(_vm.tabs, function (tab) {
    return _c('li', {
      key: tab.id,
      class: {
        'nav-item': true,
        'active': _vm.activeTab === tab.id
      },
      on: {
        "click": function ($event) {
          _vm.activeTab = tab.id, _vm.changeTab(tab.id);
        }
      }
    }, [_c('span', {
      staticClass: "nav-link left-menu",
      class: {
        'active': _vm.activeTab === tab.id
      }
    }, [tab.id === 1 ? _c('i', {
      staticClass: "fa fa-envelope"
    }) : _vm._e(), tab.id === 2 ? _c('i', {
      staticClass: "fa fa-calendar"
    }) : _vm._e(), tab.id === 3 ? _c('i', {
      staticClass: "fa fa-circle-o-notch"
    }) : _vm._e(), _vm._v(" " + _vm._s(tab.title) + " ")])]);
  }), 0)]), _c('div', {
    staticClass: "right-content"
  }, [_c('div', {
    staticClass: "theme-primary partition p-actions-expand",
    attrs: {
      "id": "ReturnRequestHeading"
    }
  }, [_c('span', {
    staticClass: "p-name text-white"
  }, [_vm._v(_vm._s(_vm.navheading))])]), _vm._l(_vm.tabs, function (tab) {
    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.activeTab === tab.id,
        expression: "activeTab === tab.id"
      }],
      key: tab.id,
      staticClass: "col-md-12 p-0"
    }, [_c('div', {
      staticClass: "col-lg-12 border float-left py-3"
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-sm-12 col-md-12 col-lg-6 col-xl-6 float-left ml-4"
    }, [_c('div', {
      staticClass: "row mt-0"
    }, [_c('div', {
      staticClass: "col-7 float-left pr-1 pl-0"
    }, [_c('div', {
      staticClass: "form-group"
    }, [_c('Field', {
      staticClass: "w-100",
      attrs: {
        "rules": {
          'required': false
        },
        "name": "Reader"
      },
      scopedSlots: _vm._u([{
        key: "default",
        fn: function ({
          errors
        }) {
          return [_c('input', {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: _vm.barcodeNumber,
              expression: "barcodeNumber"
            }],
            staticClass: "form-control",
            attrs: {
              "type": "text",
              "placeholder": "Barcode",
              "autocomplete": "off",
              "name": "search"
            },
            domProps: {
              "value": _vm.barcodeNumber
            },
            on: {
              "input": function ($event) {
                if ($event.target.composing) return;
                _vm.barcodeNumber = $event.target.value;
              }
            }
          })];
        }
      }], null, true)
    })], 1)]), _c('div', {
      staticClass: "col-5 float-left pl-0"
    }, [_c('div', {
      staticClass: "background-0 text-left form-check-inline"
    }, [_c('em', {
      staticClass: "btn btn-success mr-1 px-4 hlsearch mr-2",
      attrs: {
        "id": "Go",
        "title": "Search",
        "href": "javascript:;"
      },
      on: {
        "click": function ($event) {
          return _vm.Search();
        }
      }
    }, [_c('i', {
      staticClass: "fa fa-search pr-2"
    })]), _c('em', {
      staticClass: "btn btn-danger clearsearchtext px-4",
      attrs: {
        "title": "clear",
        "href": "javascript:;"
      },
      on: {
        "click": function ($event) {
          return _vm.Clear();
        }
      }
    }, [_c('i', {
      staticClass: "fa fa-refresh pr-2"
    })])])])])])]), tab.id != 1 ? _c('div', {
      staticClass: "col-12 mb-2 px-0 ml-2"
    }, [_vm._m(0, true)]) : _vm._e()]), _c('div', {
      staticClass: "tab-content mb-2"
    }, [_vm._m(1, true), _c('div', [tab.id == 1 ? _c('div', {
      staticClass: "listing"
    }, [_vm.noRecord == false ? _c('div', {
      staticClass: "table-responsive"
    }, [_c('div', {
      staticClass: "p-2 border-bottom"
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-lg-6"
    }, [_c('div', {
      staticClass: "row mx-0"
    }, [_c('div', {
      staticClass: "col-lg-4"
    }, [_c('b', {
      staticClass: "font-weight-medium"
    }, [_vm._v(_vm._s(_vm.$t("ItemName")) + ":")])]), _c('div', {
      staticClass: "col-lg-8"
    }, [_vm._v(_vm._s(_vm.ProductInformation.catalogName))])])]), _c('div', {
      staticClass: "col-lg-6"
    }, [_c('div', {
      staticClass: "row mx-0"
    }, [_c('div', {
      staticClass: "col-lg-4"
    }, [_c('b', {
      staticClass: "font-weight-medium"
    }, [_vm._v(_vm._s(_vm.$t("UniqueName")) + ":")])]), _c('div', {
      staticClass: "col-lg-8"
    }, [_vm._v(_vm._s(_vm.ProductInformation.uniqueName))])])])])]), _c('div', {
      staticClass: "p-2 border-bottom"
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-lg-6"
    }, [_c('div', {
      staticClass: "row mx-0"
    }, [_c('div', {
      staticClass: "col-lg-4"
    }, [_c('b', {
      staticClass: "font-weight-medium"
    }, [_vm._v(_vm._s(_vm.$t("SerialNumber")) + ":")])]), _c('div', {
      staticClass: "col-lg-8"
    }, [_vm._v(_vm._s(_vm.ProductInformation.serialNumber))])])]), _c('div', {
      staticClass: "col-lg-6"
    }, [_c('div', {
      staticClass: "row mx-0"
    }, [_c('div', {
      staticClass: "col-lg-4"
    }, [_c('b', {
      staticClass: "font-weight-medium"
    }, [_vm._v(_vm._s(_vm.$t("Brand")) + ":")])]), _c('div', {
      staticClass: "col-lg-8"
    }, [_vm._v(_vm._s(_vm.ProductInformation.brand))])])])])]), _c('div', {
      staticClass: "p-2 border-bottom"
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-lg-6"
    }, [_c('div', {
      staticClass: "row mx-0"
    }, [_c('div', {
      staticClass: "col-lg-4"
    }, [_c('b', {
      staticClass: "font-weight-medium"
    }, [_vm._v(_vm._s(_vm.$t("ModelName")) + ":")])]), _c('div', {
      staticClass: "col-lg-8"
    }, [_vm._v(_vm._s(_vm.ProductInformation.modelName))])])]), _c('div', {
      staticClass: "col-lg-6"
    }, [_c('div', {
      staticClass: "row mx-0"
    }, [_c('div', {
      staticClass: "col-lg-4"
    }, [_c('b', {
      staticClass: "font-weight-medium"
    }, [_vm._v(_vm._s(_vm.$t("ModelNumber")) + ":")])]), _c('div', {
      staticClass: "col-lg-8"
    }, [_vm._v(_vm._s(_vm.ProductInformation.modelNumber))])])])])]), _c('div', {
      staticClass: "p-2 border-bottom"
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-lg-6"
    }, [_c('div', {
      staticClass: "row mx-0"
    }, [_c('div', {
      staticClass: "col-lg-4"
    }, [_c('b', {
      staticClass: "font-weight-medium"
    }, [_vm._v(_vm._s(_vm.$t("Cost")) + ":")])]), _vm.ProductInformation.cost == null ? _c('div', {
      staticClass: "col-lg-8"
    }, [_vm._v("0.00 ")]) : _c('div', {
      staticClass: "col-lg-8"
    }, [_vm._v(_vm._s(_vm.ProductInformation.cost))])])]), _c('div', {
      staticClass: "col-lg-6"
    }, [_c('div', {
      staticClass: "row mx-0"
    }, [_c('div', {
      staticClass: "col-lg-4"
    }, [_c('b', {
      staticClass: "font-weight-medium"
    }, [_vm._v(_vm._s(_vm.$t("WarrantyDuration")) + ":")])]), _c('div', {
      staticClass: "col-lg-8"
    }, [_vm._v(_vm._s(_vm.ProductInformation.warrantyDuration))])])])])]), _c('div', {
      staticClass: "p-2 border-bottom"
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-lg-6"
    }, [_c('div', {
      staticClass: "row mx-0"
    }, [_c('div', {
      staticClass: "col-lg-4"
    }, [_c('b', {
      staticClass: "font-weight-medium"
    }, [_vm._v(_vm._s(_vm.$t("WarrantyExpirationDate")) + ":")])]), _c('div', {
      staticClass: "col-lg-8"
    }, [_vm._v(_vm._s(_vm.ProductInformation.warrantyExpirationDate) + " ")])])])])])]) : _c('div', {
      staticClass: "table-responsive"
    }, [_c('p', {
      staticClass: "text-center text-danger p-2 m-0"
    }, [_vm._v(_vm._s(_vm.$t('NoRecordfound')))])])]) : _vm._e(), tab.id == 2 ? _c('div', {
      staticClass: "listing mt-2"
    }, [_c('tg-list', {
      attrs: {
        "showCheckBox": false,
        "IsShowAction": false,
        "listType": ['List'],
        "ModuleName": "Asset",
        "SubModuleCode": "Asset",
        "IdentityColumn": "ASSET_CATALOGUE_ID",
        "PageSize": _vm.pageSize,
        "HeaderText": "Asset Management",
        "widgets": _vm.widgets,
        "ListData": _vm.PendingRequestData,
        "HeaderData": _vm.Header,
        "callbackfunction": _vm.RequsitionPending,
        "LegendArray": _vm.LegendArray,
        "SearchFields": _vm.leftSearchFields,
        "SortExp": _vm.SortExp,
        "SortBy": _vm.SortBy,
        "NorecordfoundText": _vm.$t('NorecordfoundText'),
        "TotalRecords": _vm.TotalRecord,
        "RenderRowActionMethod": _vm.renderActions,
        "ListDataCallBackFunction": _vm.RequsitionPending
      },
      on: {
        "PagerButtonClick": _vm.pagerMethod,
        "HeaderButtonClick": _vm.commonHeaderButtonClick,
        "SortdataButtonClick": _vm.sortdata
      },
      scopedSlots: _vm._u([{
        key: "slotdata",
        fn: function ({
          data
        }) {
          return [data.column.COLUMN_NAME == 'FROM_TIME' ? [_c('span', {
            staticClass: "text-dark center-icon",
            attrs: {
              "title": data.column.COLUMN_NAME
            }
          }, [_vm._v(" " + _vm._s(_vm.$options.filters.formatDateTime(data.row.FROM_TIME)) + " ")])] : _vm._e(), data.column.COLUMN_NAME == 'TO_TIME' ? [_c('span', {
            staticClass: "text-dark center-icon",
            attrs: {
              "title": data.column.COLUMN_NAME
            }
          }, [_vm._v(" " + _vm._s(_vm.$options.filters.formatDateTime(data.row.TO_TIME)) + " ")])] : _vm._e(), data.column.COLUMN_NAME == 'CREATED_AT' ? [_c('span', {
            staticClass: "text-dark center-icon",
            attrs: {
              "title": data.column.COLUMN_NAME
            }
          }, [_vm._v(" " + _vm._s(_vm.$options.filters.formatDateTime(data.row.CREATED_AT)) + " ")])] : _vm._e(), data.column.COLUMN_NAME == 'IS_ASSIGNED' ? [_c('span', {
            staticClass: "text-dark center-icon",
            attrs: {
              "title": data.column.COLUMN_NAME
            }
          }, [_c('em', {
            staticClass: "fa fa-reply fa-lg action-icon text-success",
            on: {
              "click": function ($event) {
                return _vm.IsAssigned(data.row);
              }
            }
          })])] : _vm._e(), data.column.COLUMN_NAME == 'Reject' ? [_c('span', {
            staticClass: "text-dark center-icon",
            attrs: {
              "title": data.column.COLUMN_NAME
            }
          }, [_c('em', {
            staticClass: "fa fa-times-circle fa-lg action-icon text-danger",
            on: {
              "click": function ($event) {
                return _vm.RequsitionReject(data.row);
              }
            }
          })])] : _vm._e()];
        }
      }], null, true)
    })], 1) : _vm._e(), tab.id == 3 ? _c('div', {
      staticClass: "listing mb-3"
    }, [_c('tg-list', {
      ref: "tgList",
      refInFor: true,
      attrs: {
        "IsShowAction": true,
        "showCheckBox": false,
        "listType": ['List'],
        "ModuleName": "Asset",
        "PageSize": _vm.PageSize,
        "SubModuleCode": "PRODUCT_ASSIGNMENT",
        "ViewList": _vm.ViewList,
        "IdentityColumn": "assignment_detail_id",
        "HeaderText": "Product Assignment",
        "ListData": _vm.AssetAssignmentData,
        "IsFilterApplied": _vm.searchCondition ? true : false,
        "IsSearchFieldsOnTop": false,
        "HeaderData": _vm.Headers,
        "widgets": _vm.widgets,
        "callbackfunction": _vm.FetchData,
        "TotalRecords": _vm.TotalRecords,
        "SearchFields": _vm.leftSearchFields,
        "NorecordfoundText": _vm.$t('NoRecordfound'),
        "RenderRowActionMethod": _vm.renderActions,
        "ListDataCallBackFunction": _vm.FetchData,
        "LegendArray": _vm.LegendArray,
        "SortExp": _vm.SortExp,
        "SortBy": _vm.SortBy
      },
      on: {
        "ApplyView": _vm.OnApplyView,
        "LeftsearchButtonClick": _vm.leftCommonSearch,
        "PagerButtonClick": _vm.pagerMethod,
        "HeaderButtonClick": _vm.commonHeaderButtonClick,
        "ActionButtonClick": _vm.actionButtonClick,
        "SortdataButtonClick": _vm.sortdata,
        "RefreshManageView": _vm.FetchData
      },
      scopedSlots: _vm._u([{
        key: "slotdata",
        fn: function ({
          data
        }) {
          return [data.column.COLUMN_NAME == 'unique_name' ? [data.row.create_unique_name_list == false ? _c('span', {
            staticClass: "text-dark",
            attrs: {
              "title": ""
            }
          }) : _c('span', {
            staticClass: "text-dark",
            attrs: {
              "title": data.row.unique_name
            }
          }, [_vm._v(" " + _vm._s(data.row.unique_name) + " ")])] : _vm._e(), data.column.COLUMN_NAME == 'number_of_items_assigned' ? [data.row.create_unique_name_list == false ? _c('span', {
            staticClass: "text-dark"
          }, [_c('i', {
            staticClass: "fa fa-list-ul",
            attrs: {
              "aria-hidden": "true"
            }
          }), data.row.is_return ? _c('span', {
            staticClass: "noti-circle noti-blue"
          }, [_vm._v(_vm._s(data.row.return_request_qty))]) : _c('span', {
            staticClass: "noti-circle noti-blue"
          }, [_vm._v(_vm._s(data.row.number_of_items_assigned))])]) : _c('span', {
            staticClass: "text-dark"
          }, [_c('i', {
            staticClass: "fa fa-list-ul",
            attrs: {
              "aria-hidden": "true"
            }
          }), _c('span', {
            staticClass: "noti-circle noti-blue"
          }, [_vm._v(" " + _vm._s(data.row.number_of_items_assigned) + " ")])])] : _vm._e(), data.column.COLUMN_NAME == 'assigned_from' ? [_c('span', {
            staticClass: "text-dark",
            attrs: {
              "title": _vm.$options.filters.formatDateTime(data.row.assigned_from)
            }
          }, [_vm._v(" " + _vm._s(_vm.$options.filters.formatDateTime(data.row.assigned_from)) + " ")])] : _vm._e(), data.column.COLUMN_NAME == 'assigned_till' ? [_c('span', {
            staticClass: "text-dark",
            attrs: {
              "title": _vm.$options.filters.formatDateTime(data.row.assigned_till)
            }
          }, [_vm._v(" " + _vm._s(_vm.$options.filters.formatDateTime(data.row.assigned_till)) + " ")])] : _vm._e(), data.column.COLUMN_NAME == 'return_date' ? [_c('span', {
            staticClass: "text-dark",
            attrs: {
              "title": _vm.$options.filters.formatDateTime(data.row.return_date)
            }
          }, [_vm._v(" " + _vm._s(_vm.$options.filters.formatDateTime(data.row.return_date)) + " ")])] : _vm._e()];
        }
      }], null, true)
    })], 1) : _vm._e()])]), _c('div')]);
  })], 2), _c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 text-right px-0 float-left"
  }, [_vm.activeTab > 1 ? _c('em', {
    staticClass: "btn btn-success text-white mr-2",
    attrs: {
      "value": "Previous",
      "title": "Previous",
      "name": "Previous"
    },
    on: {
      "click": _vm.previousTab
    }
  }, [_c('i', {
    staticClass: "fa fa-angle-double-left pr-2"
  }), _c('span', [_vm._v("Previous")])]) : _vm._e(), _vm.activeTab < 3 ? _c('em', {
    staticClass: "btn btn-primary text-white",
    attrs: {
      "value": "Next",
      "title": "Next",
      "name": "btnNext"
    },
    on: {
      "click": _vm.nextTab
    }
  }, [_c('span', [_vm._v("Next")]), _c('i', {
    staticClass: "fa fa-angle-double-right pl-2"
  })]) : _vm._e(), _c('input', {
    attrs: {
      "type": "hidden",
      "id": "getValue",
      "value": "ViewBag.Getvalue"
    }
  })])]), _vm.IscheckReject ? _c('RequsitionRejectModal', {
    attrs: {
      "RejectData": _vm.RejectData
    },
    on: {
      "ClosePOPuP": _vm.ClosePOPuP
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "mr-2 d-inline-block"
  }, [_c('span', {
    staticClass: "colorboxsquare",
    staticStyle: {
      "background-color": "red"
    }
  }), _vm._v(" Overdue ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "expand-list"
  }, [_c('em', {
    staticClass: "expand-list-btn justify-content-center align-items-center",
    attrs: {
      "href": "javascript:;"
    }
  }, [_c('i', {
    staticClass: "icon-solid arrow-solid-left",
    staticStyle: {
      "font-size": "9pt"
    }
  })])]);
}];

// CONCATENATED MODULE: ./src/views/AssetAssignment/BarcodeSearch.vue?vue&type=template&id=0620183e&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// EXTERNAL MODULE: ./src/components/Modal/RequsitionReject.vue + 4 modules
var RequsitionReject = __webpack_require__("2d4e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetAssignment/BarcodeSearch.vue?vue&type=script&lang=js&




//import Schema from "../ProductAssignment/AssignmentSchema";

/* harmony default export */ var BarcodeSearchvue_type_script_lang_js_ = ({
  Prop: {},
  components: {
    RequsitionRejectModal: RequsitionReject["a" /* default */]
  },
  data() {
    return {
      relatedInfoID: '',
      barcodeNumber: '',
      ProductInformation: [],
      PendingRequestData: [],
      ProductAssignment: [],
      activeTab: 1,
      searchcondition: '',
      noRecord: true,
      TotalRecords: 0,
      CurrentPage: 1,
      TotalPages: 0,
      SortBy: "",
      SortExp: "",
      pageSize: 10,
      pageNumber: 1,
      pageNum: 1,
      isLoading: false,
      IscheckReject: false,
      uIds: '',
      catId: '',
      batchId: '',
      tabs: [{
        id: 1,
        title: 'Product Information'
      }, {
        id: 2,
        title: 'Pending Check Out List'
      }, {
        id: 3,
        title: 'Product Assignment'
      }],
      navheading: 'Product Information',
      Headerstext: this.$t('HeadingText'),
      Headers: [],
      AssetAssignmentData: [],
      Header: [{
        "COLUMN_NAME": "ITEM_UNIQUE_NAME",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("ProductName"),
        "DISPLAY_ORDER": 1
      }, {
        "COLUMN_NAME": "FROM_TIME",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("FromTime"),
        "DISPLAY_ORDER": 2,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "TO_TIME",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("ToTime"),
        "DISPLAY_ORDER": 3,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "USER_NAME",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("CheckOutRequestBy"),
        "DISPLAY_ORDER": 4
      }, {
        "COLUMN_NAME": "CREATED_AT",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("CheckOutRequestDate"),
        "DISPLAY_ORDER": 5,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "IS_ASSIGNED",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("Assign"),
        "DISPLAY_ORDER": 6,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "Reject",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("Reject"),
        "DISPLAY_ORDER": 7,
        settings: {
          isInSlot: true
        }
      }]
    };
  },
  created: async function () {
    var vm = this;
    await vm.GetPageSize();
    vm.relatedInfoID = window.location.href.split('/')[5];
    vm.FetchData();
  },
  methods: {
    // async GetPageSize() {
    //     var vm = this;
    //     var params = 'key=DefaultPageSize'
    //     await DataService.GetConfigurationValueForCompanyByKey(params).then((response) => {
    //         if (response.data != null) {
    //             vm.pageSize = parseInt(response.data);
    //         }
    //     });
    // },
    Assign: function (ths) {
      this.$router.push({
        name: "AddAssetAssignment",
        params: {
          reqForm: 'pendingRequest'
        }
      });
    },
    SortByClick: function (val, id) {
      var vm = this;
      if (id == 1 || id == 4) {
        vm.SortBy = val;
        vm.SortExp = vm.SortExp == 'ASC' ? 'DESC' : 'ASC';
        vm.FetchData();
      } else if (id == 2) {
        this.SortBy = val;
        vm.SortExp = vm.SortExp == 'ASC' ? 'DESC' : 'ASC';
        vm.GetAssetReplacement();
      } else {
        this.SortBy = val;
        vm.GetAssetReturnRequestList();
      }
    },
    changeTab(tab) {
      var vm = this;
      if (tab == 1) {
        vm.navheading = 'Product Information';
        vm.FetchData();
      } else if (tab == 2) {
        vm.navheading = 'Pending Check Out List';
        vm.SortBy = '';
        vm.SortExp = '';
        vm.RequsitionPending();
      } else {
        vm.navheading = 'Product Assignment';
        vm.SortBy = '';
        vm.SortExp = '';
        vm.ProductAssignments();
      }
    },
    previousTab() {
      if (this.activeTab > 1) {
        this.activeTab--;
        this.changeTab(this.activeTab);
      }
    },
    nextTab() {
      if (this.activeTab <= this.tabs.length - 1) {
        this.activeTab++;
        this.changeTab(this.activeTab);
      }
    },
    FetchData() {
      var vm = this;
      vm.isLoading = true;
      var Barcode = '';
      var RelatedInfoId = 0;
      if (vm.barcodeNumber != '' && vm.barcodeNumber != null) {
        Barcode = vm.barcodeNumber;
        RelatedInfoId = '';
        vm.isLoading = false;
      } else {
        RelatedInfoId = vm.relatedInfoID;
        Barcode = '';
        vm.isLoading = false;
      }
      var url = `barcodeNumber=${Barcode}&relatedInfoId=${RelatedInfoId}`;
      DataService["a" /* default */].GetCatalogInfoByBarcode(url).then(response => {
        if (response.data != null) {
          vm.pageSize;
          vm.ProductInformation = response.data;
          vm.noRecord = false;
          vm.isLoading = false;
        } else {
          vm.noRecord = true;
          vm.ProductInformation = [];
          vm.isLoading = false;
        }
      });
    },
    Search: function () {
      if (this.activeTab == 1) {
        this.FetchData();
      } else if (this.activeTab == 2) {
        this.RequsitionPending();
      } else {
        this.ProductAssignments();
      }
    },
    Clear: function () {
      this.barcodeNumber = '';
      this.changeTab(this.activeTab);
    },
    pagerMethod: function (value) {
      this.pageSize = value.pageSize;
      this.PageNumber = value.PageNumber;
      this.FetchData();
    },
    RequsitionPending() {
      var vm = this;
      vm.isLoading = true;
      const params = this.getRequestParamsPending(this.pageNum, this.pageSize, this.sortBy, this.sortExp, this.uIds, this.catId, this.batchId, this.relatedInfoID, this.barcodeNumber);
      params.pageNum = vm.PageNum;
      if (vm.PageNum) {
        params.pageNum = vm.PageNum;
      } else {
        vm.PageNum = params.pageNum = 1;
      }
      params.pageSize = vm.pageSize;
      params.sortBy = vm.sortBy;
      params.sortExp = vm.sortBy;
      params.uIds = vm.uIds;
      params.catId = vm.catId;
      params.batchId = vm.batchId;
      if (vm.barcodeNumber != '' && vm.barcodeNumber != null) {
        params.barcode = vm.barcodeNumber;
        params.relatedInfoID = '';
      } else {
        params.searchCondition = '';
        params.relatedInfoID = vm.relatedInfoID;
      }

      //var url=`uIds=${vm.uIds}&catIds=${vm.catIds}&batchId=${vm.batchId}&pageSize=${vm.PageSize}&pageNum=${vm.PageNumber}&sortBy=${vm.SortBy}&sortExp=${vm.SortExp}&barcode=${vm.barcode}&type=${vm.type}`;
      DataService["a" /* default */].RequsitionPendingList(params).then(response => {
        if (response.data.length > 2) {
          vm.PendingRequestData = JSON.parse(response.data);
          vm.PendingRequestData.forEach(row => {
            row.additionalClass = '';
            if (row.ISEXPIRED) {
              row.additionalClass = 'high-profile-bar';
            }
          });
          vm.TotalRecord = vm.PendingRequestData[0].TOTAL_PAGES;
          vm.TotalPage = Math.ceil(vm.TotalRecord / vm.PageSize);
          vm.CurrentPage = vm.PageNumber;
          vm.noRecord = false;
          vm.isLoading = false;
        } else {
          vm.noRecord = true;
          vm.PendingRequestData = [];
          vm.TotalRecord = 0;
          vm.isLoading = false;
        }
        setTimeout(function () {
          vm.CheckBoxBootstrap();
        }, 100);
        setTimeout(function () {
          vm.ResponsiveDataTable("tablelistingdata");
        }, 500);
      });
    },
    IsAssigned: function (item) {
      var vm = this;
      DataService["a" /* default */].CheckPrivilege('controller=AssetAssignment&action=BarcodeSearch').then(response => {
        if (response.data) {
          this.$router.push({
            name: "AddAssetAssignment",
            params: {
              reqForm: 'pendingRequest',
              items: item
            }
          });
        } else {
          vm.ShowAlert(vm.$t('NotAuthorizedSection'), "failure", true, "Alert");
        }
      });
    },
    RequsitionReject: function (item) {
      var vm = this;
      DataService["a" /* default */].CheckPrivilege('controller=AssetAssignment&action=BarcodeSearch').then(response => {
        if (response.data) {
          vm.IscheckReject = true;
          vm.RejectData = item;
        } else {
          vm.ShowAlert(vm.$t('NotAuthorizedSection'), "failure", true, "Alert");
        }
      });
    },
    ClosePOPuP: function () {
      var vm = this;
      vm.IscheckReject = false;
    },
    getRequestParamsPending: function (pageNum, pageSize, sortBy, sortExp, uIds, catId, batchId, relatedInfoID, barcodeNumber) {
      let params = {};
      if (pageNum) {
        params["pageNum"] = pageNum;
      }
      if (pageSize) {
        params["pageSize"] = pageSize;
      }
      if (sortBy) {
        params["sortBy"] = sortBy;
      }
      if (sortExp) {
        params["sortExp"] = sortExp;
      }
      // debugger;
      if (uIds) {
        params["uIds"] = uIds;
      }
      if (catId) {
        params["catId"] = catId;
      }
      if (batchId) {
        params["batchId"] = batchId;
      }
      if (relatedInfoID) {
        params["relatedInfoId"] = relatedInfoID;
      }
      if (barcodeNumber) {
        params["barcode"] = barcodeNumber;
      }
      return params;
    },
    getRequestParams: function (pageNum, pageSize, sortBy, sortExp, isPaged, searchcondition, relatedInfoID, barcodeNumber) {
      let params = {};
      if (pageNum) {
        params["pageNum"] = pageNum;
      }
      if (searchcondition) {
        params["searchcondition"] = searchcondition;
      }
      if (isPaged) {
        params["isPaged"] = isPaged;
      }
      if (sortBy) {
        params["sortBy"] = sortBy;
      }
      if (sortExp) {
        params["sortExp"] = sortExp;
      }
      if (pageSize) {
        params["pageSize"] = pageSize;
      }
      if (relatedInfoID) {
        params["relatedInfoID"] = relatedInfoID;
      }
      if (barcodeNumber) {
        params["barcode"] = barcodeNumber;
      }
      return params;
    },
    async ProductAssignments() {
      var vm = this;
      vm.isLoading = true;

      //  var params = `pageSize=${vm.PageSize}&pageNum=${vm.PageNumber}&sortBy=${vm.SortBy}&sortExp=${vm.SortExp}&isReturn=&issuedTo=&assetCatalogId=${vm.assDetailIDs}&uniqueNames=&showWithoutPaging=&barcode=&UserStatus=&${vm.searchCondition}`
      const params = this.getRequestParams(this.pageNum, this.pageSize, this.sortBy, this.sortExp, this.isPaged, this.searchCondition, this.relatedInfoID, this.barcodeNumber);
      params.pageSize = vm.pageSize;
      params.pageNum = vm.PageNumber;
      params.searchcondition = vm.searchCondition;
      if (vm.PageNumber) {
        params.pageNum = vm.PageNumber;
      } else {
        vm.PageNumber = params.pageNum = 1;
      }
      if (typeof vm.isPaged != 'undefined') {
        params.isPaged = vm.isPaged;
      } else {
        vm.isPaged = params.isPaged = 1;
      }
      params.isPaged = vm.isPaged;
      params.sortBy = vm.SortBy;
      params.sortExp = vm.SortExp;
      params.assetCatalogId = vm.assDetailIDs;
      var srchCondition = "";
      if (!this.isBlank(this.searchCondition)) {
        srchCondition = srchCondition + this.searchCondition;
      }
      if (!this.isBlank(this.conditionForInstantSearch)) {
        srchCondition = srchCondition + (!this.isBlank(this.searchCondition) ? " AND " + this.conditionForInstantSearch : this.conditionForInstantSearch);
      }
      if (srchCondition != "") {
        params.searchcondition = srchCondition;
        if (vm.appliedFilter.length > 0) {
          const removeFilterindex = vm.listheaderbuttons.findIndex(object => {
            return object.callbackfunction === 'removeFilter';
          });
          vm.listheaderbuttons[removeFilterindex].isvisible = true;
          const openFilterPopUpindex = vm.listheaderbuttons.findIndex(object => {
            return object.callbackfunction === 'openFilterPopUp';
          });
          vm.listheaderbuttons[openFilterPopUpindex].iconClass = 'fa fa-filter text-success';
        }
      }
      if (vm.barcodeNumber != "" && vm.barcodeNumber != null) {
        params.pageSize = 10;
        params.pageNum = 1;
        params.sortBy = '';
        params.sortExp = '';
        params.isReturn = '';
        params.issuedTo = '';
        params.issuedBy = '';
        params.assetCatalogId = '';
        params.uniqueNames = '';
        params.showWithoutPaging = '';
        params.barcode = vm.barcodeNumber;
        params.UserStatus = '';
        params.search = '';
        params.searchItemCode = '';
        params.Show = '';
      } else {
        params.searchCondition = '';
        params.uniqueNames = vm.relatedInfoID;
      }
      await DataService["a" /* default */].AssetAssignmentListing(params).then(response => {
        vm.isLoading = false;
        if (response.data != null && response.data != 0) {
          vm.Headers = JSON.parse(response.data).schema;
          console.log("headers", vm.Headers);
          vm.Headers.forEach(column => {
            if (column.COLUMN_NAME == 'unique_name') {
              column.settings = {
                isInSlot: true,
                isSortable: true
              };
            }
            if (column.COLUMN_NAME == 'number_of_items_assigned') {
              column.settings = {
                isInSlot: true,
                isSortable: true
              };
            }
            if (column.COLUMN_NAME == 'assigned_from') {
              column.DATA_TYPE = "text";
              column.settings = {
                isInSlot: true,
                isSortable: true
              };
            }
            if (column.COLUMN_NAME == 'assigned_till') {
              column.DATA_TYPE = "text";
              column.settings = {
                isInSlot: true,
                isSortable: true
              };
            }
            if (column.COLUMN_NAME == 'return_date') {
              column.DATA_TYPE = "text";
              column.settings = {
                isInSlot: true,
                isSortable: true
              };
            }
          });
          if (JSON.parse(response.data).data.length > 0) {
            vm.AssetAssignmentData = JSON.parse(response.data).data;
            vm.AssetAssignmentData.forEach(row => {
              row.additionalClass = '';
              var GetCurrentDate = new Date();
              var IsOverdue = false;
              //row.ASSIGNED_TILL != null ? ((row.IS_RETURN == false && vm.$options.filters.formatDate(row.ASSIGNED_TILL) < vm.$options.filters.formatDate(GetCurrentDate)) ? true : false) : false;
              if (vm.$options.filters.formatDateTimeYYMMDD(GetCurrentDate) > vm.$options.filters.formatDateTimeYYMMDD(row.assigned_till) && row.is_return == false) {
                IsOverdue = true;
              } else {
                IsOverdue = false;
              }
              if (IsOverdue) {
                row.additionalClass = 'high-bar';
              }
            });
            for (var row in vm.AssetAssignmentData) {
              vm.AssetAssignmentData[row].isCheckBoxDisabled = false;
              if (vm.AssetAssignmentData[row].is_return == true) {
                vm.AssetAssignmentData[row].isCheckBoxDisabled = true;
              }
            }
            vm.TotalRecords = JSON.parse(response.data).data[0].TOTAL;
            vm.TotalPages = Math.ceil(vm.TotalRecords / vm.PageSize);
            vm.CurrentPage = vm.PageNumber;
            $('.chkItems:checkbox:checked').prop("checked", false).removeAttr('checked');
            vm.noRecord = false;
          } else {
            vm.noRecord = true;
            vm.AssetAssignmentData = [];
            vm.TotalRecords = 0;
            vm.isLoading = false;
          }
        } else {
          vm.noRecord = true;
          vm.AssetAssignmentData = [];
          vm.TotalRecords = 0;
          vm.isLoading = false;
        }
      });
      vm.isLoading = false;
    },
    renderActions: function (row) {
      var self = this;
      let rtnActionArray = [];
      var vm = this;
      self.listActions.forEach(actionItem => {
        let action = {
          ...actionItem
        };
        switch (action.title) {
          case "Share":
            if (Boolean(row.create_unique_name_list) && !row.is_return && vm.$options.filters.formatDateTimeMMDDYY(row.assigned_till) > vm.$options.filters.formatDateTimeMMDDYY(vm.UserDateTime)) {
              action.isDisabled = false;
            } else {
              action.isDisabled = true;
            }
            break;
          case "Approve/Reject Request":
            if (row.return_request.toUpperCase() == 'YES') {
              if (row.is_return == false) {
                action.isDisabled = false;
                action.isVisible = true;
              } else {
                action.isDisabled = true;
                action.isVisible = false;
              }
            } else if (row.return_request.toUpperCase() == 'NO') {
              action.isDisabled = true;
              action.isVisible = false;
            }
            break;
          case "Returned":
            if (row.return_request.toUpperCase() == 'YES') {
              if (row.is_return == false) {
                action.isDisabled = true;
                action.isVisible = false;
              } else {
                action.isDisabled = false;
                action.isVisible = true;
                vm.isTrueForcheck = true;
              }
            } else if (row.return_request.toUpperCase() == 'NO') {
              if (row.is_return == true) {
                action.isDisabled = true;
                action.isVisible = true;
              } else {
                action.isDisabled = true;
                action.isVisible = false;
              }
            }
            break;
          case "Not Returned":
            if (row.return_request.toUpperCase() == 'YES') {
              if (row.is_return == true) {
                if (vm.isTrueForcheck == true) {
                  action.isDisabled = true;
                  action.isVisible = false;
                  break;
                } else {
                  action.isDisabled = false;
                  action.isVisible = true;
                }
              } else {
                action.isDisabled = true;
                action.isVisible = false;
              }
            } else {
              if (row.is_return == true) {
                action.isDisabled = true;
                action.isVisible = false;
              } else {
                action.isDisabled = false;
                action.isVisible = true;
              }
            }
            break;
          case "Request For Return":
            if (row.is_return == false && row.return_request.toUpperCase() == "NO" && row.issued_to_id != vm.Userid) {
              if (row.request_id == 0) {
                action.isDisabled = false;
                action.isVisible = true;
              } else {
                action.isDisabled = true;
                return action.isVisible = false;
              }
            } else {
              action.isDisabled = true;
              action.isVisible = true;
            }
            break;
          case "Request Already Sent":
            if (row.is_return == false && row.return_request.toUpperCase() == "NO" && row.issued_to_id != vm.Userid) {
              if (row.request_id == 0) {
                action.isDisabled = true;
                return action.isVisible = false;
              } else {
                action.isDisabled = false;
                action.isVisible = true;
              }
            } else {
              action.isDisabled = false;
              action.isVisible = false;
            }
            break;
          case "Comment":
            if (row.is_return == true && row.title != '' && row.title != null || row.comment != '' && row.comment != null) {
              action.isDisabled = false;
            } else {
              action.isDisabled = true;
            }
            break;
          default:
            {
              action.isDisabled = false;
            }
        }
        rtnActionArray.push(action);
      });
      return rtnActionArray;
    },
    commonHeaderButtonClick() {}
  }
});
// CONCATENATED MODULE: ./src/views/AssetAssignment/BarcodeSearch.vue?vue&type=script&lang=js&
 /* harmony default export */ var AssetAssignment_BarcodeSearchvue_type_script_lang_js_ = (BarcodeSearchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/AssetAssignment/BarcodeSearch.vue?vue&type=style&index=0&id=0620183e&prod&lang=css&
var BarcodeSearchvue_type_style_index_0_id_0620183e_prod_lang_css_ = __webpack_require__("1329");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/AssetAssignment/BarcodeSearch.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  AssetAssignment_BarcodeSearchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BarcodeSearch = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-4b7d65f6.js.map