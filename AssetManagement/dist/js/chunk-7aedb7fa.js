(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-7aedb7fa"],{

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

/***/ "6cea":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingRequestList_vue_vue_type_style_index_0_id_49c0f7e8_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c8ff");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingRequestList_vue_vue_type_style_index_0_id_49c0f7e8_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PendingRequestList_vue_vue_type_style_index_0_id_49c0f7e8_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "97e5":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "tr.high-profile-bar td:first-child:after{background:#de0303}.center-icon{display:flex;justify-content:center;align-items:center}.center-icon[title=AcceptReject] .fa,.center-icon[title=Assigne] .fa,.center-icon[title=Reject] .fa,.center-icon[title=Repair] .fa{cursor:pointer}#reportstabsdata .table-fix-header #th-COMMENT_undefined span{word-wrap:normal!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "c8ff":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("97e5");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("6c06ef18", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "dd6f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Asset/PendingRequestList.vue?vue&type=template&id=49c0f7e8&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "main-content"
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
    staticClass: "nav nav-pills flex-column left-tab mt-2 responivecustomtab nav-tabs"
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
      class: {
        'nav-link left-menu': true,
        'active': _vm.activeTab === tab.id
      }
    }, [_vm._v(_vm._s(tab.title))])]);
  }), 0)]), _c('div', {
    staticClass: "right-content"
  }, [_c('div', {
    staticClass: "theme-primary partition p-actions-expand",
    attrs: {
      "id": "ReturnRequestHeading"
    }
  }, [_c('span', {
    staticClass: "p-name text-white"
  }, [_vm._v(_vm._s(_vm.navheading))]), _vm._l(_vm.tabs, function (tab) {
    return tab.id == 3 ? _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.activeTab === tab.id,
        expression: "activeTab === tab.id"
      }],
      key: tab.id,
      staticClass: "p-actions float-right"
    }, [_c('em', {
      staticClass: "p-action-btn text-white",
      attrs: {
        "id": "ancApprove",
        "checkprivilege": "yes",
        "title": "Approve",
        "href": "javascript:;"
      },
      on: {
        "click": function ($event) {
          return _vm.approvedSelected();
        }
      }
    }, [_c('i', {
      staticClass: "fa fa-check"
    }), _vm._m(0, true)]), _c('em', {
      staticClass: "p-action-btn text-white",
      attrs: {
        "id": "ancReject",
        "checkprivilege": "yes",
        "title": "Reject",
        "href": "javascript:;"
      },
      on: {
        "click": function ($event) {
          return _vm.rejectecSelected();
        }
      }
    }, [_c('i', {
      staticClass: "fa fa-close"
    }), _vm._m(1, true)])]) : _vm._e();
  })], 2), _vm._l(_vm.tabs, function (tab) {
    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.activeTab === tab.id,
        expression: "activeTab === tab.id"
      }],
      key: tab.id,
      staticClass: "col-md-12 p-0"
    }, [tab.id == 1 || tab.id == 4 ? _c('div', {
      staticClass: "col-lg-12 border float-left py-3"
    }, [_c('div', {}, [_c('dynamic-form', {
      ref: "pendingrequestform",
      refInFor: true,
      attrs: {
        "lang": "en",
        "buttons": _vm.button,
        "schema": _vm.FormSchemas
      }
    })], 1), _c('div', {
      staticClass: "col-12 mb-2 px-0"
    }, [_c('div', {
      staticClass: "mr-2 d-inline-block"
    }, [_c('span', {
      staticClass: "colorboxsquare legends_profile"
    }), _vm._v(_vm._s(_vm.$t('ExpiredCheckout')) + " ")])])]) : _vm._e(), tab.id == 3 ? _c('div', {
      staticClass: "col-lg-12 border float-left py-3"
    }, [_c('div', {}, [_c('dynamic-form', {
      attrs: {
        "lang": "en",
        "buttons": _vm.buttons,
        "schema": _vm.FormSchema
      }
    })], 1), _c('div', {
      staticClass: "col-12 mb-2 px-0"
    }, [_c('div', {
      staticClass: "mr-2 d-inline-block"
    }, [_c('span', {
      staticClass: "colorboxsquare legends_high"
    }), _vm._v(_vm._s(_vm.$t('Overdue')) + " ")])])]) : _vm._e(), _c('div', {
      staticClass: "tab-content mb-2"
    }, [tab.id == 1 || tab.id == 4 ? _c('div', {
      staticClass: "listing"
    }, [_c('div', {
      staticClass: "table-responsive"
    }, [_c('tg-list', {
      attrs: {
        "showCheckBox": false,
        "IsShowAction": false,
        "listType": ['List'],
        "ModuleName": "Asset",
        "SubModuleCode": "Asset",
        "PageSize": _vm.PageSize,
        "IdentityColumn": "ASSET_CATALOGUE_ID",
        "HeaderText": _vm.$t('AssetManagement'),
        "widgets": _vm.widgets,
        "ListData": _vm.PendingRequestData,
        "HeaderData": _vm.Header,
        "callbackfunction": _vm.FetchData,
        "LegendArray": _vm.LegendArray,
        "SearchFields": _vm.leftSearchFields,
        "SortExp": _vm.SortExp,
        "SortBy": _vm.SortBy,
        "NorecordfoundText": _vm.$t('NorecordfoundText'),
        "TotalRecords": _vm.TotalRecord,
        "RenderRowActionMethod": _vm.renderActions,
        "ListDataCallBackFunction": _vm.FetchData
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
          }, [_vm._v(" " + _vm._s(_vm.$options.filters.formatDateTimeMMDDYY(data.row.FROM_TIME)) + " ")])] : _vm._e(), data.column.COLUMN_NAME == 'TO_TIME' ? [_c('span', {
            staticClass: "text-dark center-icon",
            attrs: {
              "title": data.column.COLUMN_NAME
            }
          }, [_vm._v(" " + _vm._s(_vm.$options.filters.formatDateTimeMMDDYY(data.row.TO_TIME)) + " ")])] : _vm._e(), data.column.COLUMN_NAME == 'CREATED_AT' ? [_c('span', {
            staticClass: "text-dark center-icon",
            attrs: {
              "title": data.column.COLUMN_NAME
            }
          }, [_vm._v(" " + _vm._s(_vm.$options.filters.formatDateTimeMMDDYY(data.row.CREATED_AT)) + " ")])] : _vm._e(), data.column.COLUMN_NAME == 'IS_ASSIGNED' ? [_c('span', {
            staticClass: "text-dark center-icon",
            attrs: {
              "title": "Assigne"
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
    })], 1)]) : _vm._e(), tab.id == 2 ? _c('div', {
      staticClass: "listing mt-2"
    }, [_c('tg-list', {
      attrs: {
        "showCheckBox": false,
        "IsShowAction": false,
        "listType": ['List'],
        "ModuleName": "Asset",
        "SubModuleCode": "Asset",
        "PageSize": _vm.PageSizes,
        "IdentityColumn": "CATALOGUE_ID",
        "HeaderText": _vm.$t('AssetManagement'),
        "widgets": _vm.widgets,
        "ListData": _vm.AssetReplacementData,
        "HeaderData": _vm.Headers,
        "callbackfunction": _vm.GetAssetReplacement,
        "LegendArray": _vm.LegendArray,
        "SearchFields": _vm.leftSearchFields,
        "SortExp": _vm.SortExp,
        "SortBy": _vm.SortBy,
        "NorecordfoundText": _vm.$t('NorecordfoundText'),
        "TotalRecords": _vm.TotalRecords,
        "RenderRowActionMethod": _vm.renderActions,
        "ListDataCallBackFunction": _vm.GetAssetReplacement
      },
      on: {
        "PagerButtonClick": _vm.pagerMethods,
        "HeaderButtonClick": _vm.commonHeaderButtonClick,
        "SortdataButtonClick": _vm.sortdata
      },
      scopedSlots: _vm._u([{
        key: "slotdata",
        fn: function ({
          data
        }) {
          return [data.column.COLUMN_NAME == 'STATUS_NAME' ? [data.row.STATUS_ID == 1001 ? _c('em', {
            staticClass: "active-disabled"
          }, [_c('span', {
            staticClass: "btn d-inline-block w-80 text-center text-truncate btn-success"
          }, [_vm._v(_vm._s(data.row.STATUS_NAME))])]) : data.row.STATUS_NAME == 'Approved' ? _c('em', {
            staticClass: "active-disabled"
          }, [_c('span', {
            staticClass: "btn d-inline-block w-80 text-center text-truncate btn-warning"
          }, [_vm._v(_vm._s(data.row.STATUS_NAME))])]) : data.row.STATUS_ID == 1002 || data.row.STATUS_ID == 1003 ? _c('em', {
            staticClass: "inactive-disabled"
          }, [_c('span', {
            staticClass: "btn d-inline-block w-80 text-center text-truncate btn-danger"
          }, [_vm._v(_vm._s(data.row.STATUS_NAME))])]) : _c('em', {
            staticClass: "inactive-disabled"
          }, [_c('span', {
            staticClass: "btn d-inline-block w-80 text-center text-truncate btn-danger"
          }, [_vm._v(_vm._s(data.row.STATUS_NAME))])])] : _vm._e(), data.column.COLUMN_NAME == 'ReplaceRequestDate' ? [_c('span', {
            staticClass: "text-dark center-icon",
            attrs: {
              "title": data.column.COLUMN_NAME
            }
          }, [_vm._v(" " + _vm._s(_vm.formatTimeToCustomFormat(data.row.ReplaceRequestDate)) + " ")])] : _vm._e(), data.column.COLUMN_NAME == 'AcceptReject' ? [_c('span', {
            staticClass: "text-dark center-icon",
            attrs: {
              "title": "Accept Reject"
            }
          }, [data.row.STATUS_ID == 1001 ? _c('em', {
            staticClass: "fa fa-reply fa-lg action-icon text-success",
            on: {
              "click": function ($event) {
                return _vm.ReplaceRequest(data.row);
              }
            }
          }) : _c('em', {
            staticClass: "fa fa-reply fa-lg action-icon text-dark disabled"
          })])] : _vm._e(), data.column.COLUMN_NAME == 'Repair' ? [_c('span', {
            staticClass: "text-dark center-icon",
            attrs: {
              "title": data.column.COLUMN_NAME
            }
          }, [data.row.REPLACEMENT_TYPE_STATUS == 'Damaged' && data.row.IsRepairMarked == 0 && data.row.STATUS_ID == 1001 ? _c('em', {
            staticClass: "fa fa-wrench fa-lg action-icon text-dark",
            on: {
              "click": function ($event) {
                return _vm.Repair(data.row);
              }
            }
          }) : _c('em', [_c('i', {
            staticClass: "fa fa-wrench fa-lg action-icon text-dark disabled"
          })])])] : _vm._e()];
        }
      }], null, true)
    }), _c('div', {
      staticClass: "table-responsive table-fix-header"
    })], 1) : _vm._e(), tab.id == 3 ? _c('div', {
      staticClass: "listing mb-3"
    }, [_c('tg-list', {
      attrs: {
        "showCheckBox": true,
        "IsShowAction": false,
        "listType": ['List'],
        "ModuleName": "Asset",
        "SubModuleCode": "Asset",
        "PageSize": _vm.PageSizees,
        "IdentityColumn": "REQUEST_ID",
        "HeaderText": _vm.$t('AssetManagement'),
        "widgets": _vm.widgets,
        "ListData": _vm.AssetReturnRequestData,
        "HeaderData": _vm.Headeres,
        "callbackfunction": _vm.GetAssetReturnRequestList,
        "LegendArray": _vm.LegendArray,
        "SearchFields": _vm.leftSearchFields,
        "SortExp": _vm.SortExp,
        "SortBy": _vm.SortBy,
        "NorecordfoundText": _vm.$t('NorecordfoundText'),
        "TotalRecords": _vm.TotalRecordes,
        "RenderRowActionMethod": _vm.renderActions,
        "ListDataCallBackFunction": _vm.GetAssetReturnRequestList
      },
      on: {
        "PagerButtonClick": _vm.pagerMethodes,
        "HeaderButtonClick": _vm.commonHeaderButtonClick,
        "SortdataButtonClick": _vm.sortdata
      },
      scopedSlots: _vm._u([{
        key: "slotdata",
        fn: function ({
          data
        }) {
          return [data.column.COLUMN_NAME == 'STATUS_NAME' ? [data.row.STATUS_ID == 1001 ? _c('em', {
            staticClass: "active-disabled"
          }, [_c('span', {
            staticClass: "btn d-inline-block w-80 text-center text-truncate btn-success"
          }, [_vm._v(_vm._s(data.row.STATUS_NAME))])]) : data.row.STATUS_NAME == 'Approved' ? _c('em', {
            staticClass: "active-disabled"
          }, [_c('span', {
            staticClass: "btn d-inline-block w-80 text-center text-truncate btn-warning"
          }, [_vm._v(_vm._s(data.row.STATUS_NAME))])]) : data.row.STATUS_ID == 1002 || data.row.STATUS_ID == 1003 ? _c('em', {
            staticClass: "inactive-disabled"
          }, [_c('span', {
            staticClass: "btn d-inline-block w-80 text-center text-truncate btn-danger"
          }, [_vm._v(_vm._s(data.row.STATUS_NAME))])]) : _c('em', {
            staticClass: "inactive-disabled"
          }, [_c('span', {
            staticClass: "btn d-inline-block w-80 text-center text-truncate btn-danger"
          }, [_vm._v(_vm._s(data.row.STATUS_NAME))])])] : _vm._e(), data.column.COLUMN_NAME == 'Quantity' ? [_c('span', {
            staticClass: "text-dark center-icon"
          }, [_c('em', {
            staticClass: "fa fa-shopping-basket"
          }, [_c('span', {
            staticClass: "noti-circle noti-blue",
            attrs: {
              "title": "Quantity"
            }
          }, [_vm._v(_vm._s(data.row.QTY))])])])] : _vm._e(), data.column.COLUMN_NAME == 'GRACE_OVERDUE_DAYS' ? [_c('span', {
            staticClass: "text-dark center-icon",
            attrs: {
              "title": data.column.COLUMN_NAME
            }
          }, [data.row.STATUS_ID == 1001 ? _c('em', {
            staticClass: "text-dark"
          }, [_vm._v(_vm._s(data.row.GRACE_OVERDUE_DAYS))]) : _c('em', [_c('i', {
            staticClass: "text-dark disabled"
          }, [_vm._v(_vm._s(data.row.GRACE_OVERDUE_DAYS))])])])] : _vm._e(), data.column.COLUMN_NAME == 'PENALITY_STATUS_TYPE' ? [_c('span', {
            staticClass: "text-dark center-icon",
            attrs: {
              "title": data.column.COLUMN_NAME
            }
          }, [data.row.STATUS_ID == 1001 && data.row.QTY > 0 && data.row.IS_PENALTY == 1 ? _c('em', {
            staticClass: "text-dark"
          }, [_c('select', {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: _vm.statusIDs[data.row.REQUEST_ID],
              expression: "statusIDs[data.row.REQUEST_ID]"
            }],
            class: {
              'form-control w-100': true
            },
            attrs: {
              "name": 'StatusID' + data.row.REQUEST_ID
            },
            on: {
              "click": function ($event) {
                return _vm.GetAssetstatusList();
              },
              "change": function ($event) {
                var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                  return o.selected;
                }).map(function (o) {
                  var val = "_value" in o ? o._value : o.value;
                  return val;
                });
                _vm.$set(_vm.statusIDs, data.row.REQUEST_ID, $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
              }
            }
          }, [_c('option', {
            attrs: {
              "value": ""
            }
          }, [_vm._v("Select")]), _vm._l(_vm.StatusData, function (item, index) {
            return _c('option', {
              key: index,
              domProps: {
                "value": item.value
              }
            }, [_vm._v(_vm._s(item.name))]);
          })], 2)]) : data.row.STATUS_ID == 1001 ? _c('em', [data.row.PENALITY_STATUS_TYPE == 0 ? _c('span', [_vm._v("NA")]) : _c('span', [_vm._v(_vm._s(data.row.PENALITY_STATUS_TYPE))])]) : _c('em', [_vm._v("NA")])])] : _vm._e(), data.column.COLUMN_NAME == 'Penality' ? [_c('span', {
            staticClass: "text-dark center-icon",
            attrs: {
              "title": data.column.COLUMN_NAME
            }
          }, [data.row.STATUS_ID == 1001 && data.row.QTY > 0 && (data.row.IS_PENALTY == 1 || data.row.IS_PENALTY_ON_OVERDUE) ? _c('em', {
            staticClass: "text-dark"
          }, [_c('input', {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: _vm.Penaltyoverdue,
              expression: "Penaltyoverdue"
            }],
            staticClass: "form-control",
            attrs: {
              "type": "text",
              "maxlength": "10"
            },
            domProps: {
              "value": _vm.Penaltyoverdue
            },
            on: {
              "input": [function ($event) {
                if ($event.target.composing) return;
                _vm.Penaltyoverdue = $event.target.value;
              }, _vm.restrictToNumbers]
            }
          })]) : data.row.STATUS_ID != 1001 ? _c('em', [data.row.PENALITY_AMOUNT <= 0 ? _c('span', [_vm._v("NA")]) : _c('span', [_vm._v(_vm._s(data.row.PENALITY_AMOUNT))])]) : _c('em', [_vm._v("Na")])])] : _vm._e(), data.column.COLUMN_NAME == 'CREATED_AT' ? [_c('span', {
            staticClass: "text-dark center-icon",
            attrs: {
              "title": data.column.COLUMN_NAME
            }
          }, [_vm._v(" " + _vm._s(_vm.formatTimeToCustomFormat(data.row.CREATED_AT)) + " ")])] : _vm._e()];
        }
      }], null, true)
    }), _c('div', {
      staticClass: "table-responsive table-fix-header"
    })], 1) : _vm._e()])]);
  })], 2), _c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 text-right px-0 float-left"
  }, [_vm.activeTab != 1 ? _c('em', {
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
  }), _c('span', [_vm._v("Previous")])]) : _vm._e(), _vm.activeTab != 4 ? _c('em', {
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
  })]) : _vm._e()])]), _vm.IscheckReject ? _c('RequsitionRejectModal', {
    attrs: {
      "RejectData": _vm.RejectData
    },
    on: {
      "ClosePOPuP": _vm.ClosePOPuP
    }
  }) : _vm._e(), _vm.IscheckReplace ? _c('ReplaceRequestModal', {
    attrs: {
      "ReplaceData": _vm.ReplaceData
    },
    on: {
      "ClosePOP": _vm.ClosePOP
    }
  }) : _vm._e(), _vm.IscheckRepair ? _c('RepairRequestModal', {
    attrs: {
      "RepairData": _vm.RepairData
    },
    on: {
      "ClosePopUpRepair": _vm.ClosePopUpRepair
    }
  }) : _vm._e(), _vm.IscheckApproveReject ? _c('ApproveRejectModal', {
    attrs: {
      "ApproveData": _vm.ApproveData
    },
    on: {
      "ClosePopUpApproveReject": _vm.ClosePopUpApproveReject
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', [_c('br'), _vm._v("Approve")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', [_c('br'), _vm._v("Reject")]);
}];

// CONCATENATED MODULE: ./src/views/Asset/PendingRequestList.vue?vue&type=template&id=49c0f7e8&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// EXTERNAL MODULE: ./node_modules/vue-multiselect/dist/vue-multiselect.min.js
var vue_multiselect_min = __webpack_require__("8e5f");
var vue_multiselect_min_default = /*#__PURE__*/__webpack_require__.n(vue_multiselect_min);

// EXTERNAL MODULE: ./src/components/Modal/RequsitionReject.vue + 4 modules
var RequsitionReject = __webpack_require__("2d4e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/ReplaceRequest.vue?vue&type=template&id=0e834b20&
var ReplaceRequestvue_type_template_id_0e834b20_render = function render() {
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
  }, [_vm._v(" " + _vm._s(_vm.$t("ReplacyingRequest")) + ": " + _vm._s(_vm.ReplaceData.UNIQUE_NAME) + " ")]), _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-original-title": "Close"
    },
    on: {
      "click": function ($event) {
        return _vm.ClosePOP($event);
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
var ReplaceRequestvue_type_template_id_0e834b20_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/ReplaceRequest.vue?vue&type=template&id=0e834b20&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/ReplaceRequest.vue?vue&type=script&lang=js&

/* harmony default export */ var ReplaceRequestvue_type_script_lang_js_ = ({
  props: {
    ReplaceData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      FormSchema: [{
        layoutType: "single",
        Data: [{
          astype: "SelectField",
          label: this.$t("Status"),
          name: "Status",
          value: "ASSET_REPLACEMENT_APPROVED",
          placeholder: "",
          validationRules: {
            "required": false
          },
          config: {
            options: [{
              value: 'ASSET_REPLACEMENT_APPROVED',
              name: 'Approved'
            }, {
              value: 'ASSET_REPLACEMENT_REJECTED',
              name: 'Rejected'
            }]
          }
        }, {
          astype: "TextAreaField",
          label: this.$t('Remarks'),
          name: "Remarks",
          value: "",
          validationRules: {
            "required": false,
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
      }]
    };
  },
  created: function () {},
  methods: {
    onSubmit: function (formfields) {
      debugger;
      var vm = this;
      vm.isLoading = true;
      const ReplaceData = {
        ReplacementID: vm.ReplaceData.REPLACEMENT_ID,
        ReplaceRequestStatus: formfields.Status,
        AssetCatalogueId: vm.ReplaceData.ASSET_CATALOGUE_ID,
        RelatedInfoId: vm.ReplaceData.RELATED_INFO_ID,
        NumberOfItems: vm.ReplaceData.NUMBER_OF_ITEMS,
        comment: formfields.Remarks,
        Userids: vm.ReplaceData.USER_ID
      };
      //debugger;      
      // vm.$refs.RejectForm.validate().then(result=>{ 
      // if(result){     
      // var url=`ReplacementID=${vm.ReplacesData.REPLACEMENT_ID}&ReplaceRequestStatus=${vm.OptionNames}&AssetCatalogueId=${vm.ReplacesData.ASSET_CATALOGUE_ID}&RelatedInfoId=${vm.ReplacesData.RELATED_INFO_ID}&NumberOfItems=${vm.ReplacesData.NUMBER_OF_ITEMS}&comment=${vm.Remarks}&Userids=${vm.ReplacesData.USER_ID}`;           
      DataService["a" /* default */].SaveReplacementRequestStatus(ReplaceData).then(response => {
        if (response.data != null) {
          //debugger

          vm.ShowAlert(vm.$t(response.data), "success", vm.$t('Alert'));
          vm.$parent.GetAssetReplacement();
          vm.$parent.ClosePOP();
        } else {
          vm.ShowAlert(vm.$t("Failed to Save"), "failure", true, vm.$t('Alert'));
          vm.$parent.ClosePOP();
        }
        setTimeout(function () {
          vm.CheckBoxBootstrap();
        }, 100);
      });
      //}
      //})
    },

    onCancel: function (item) {
      this.ClosePOP(item);
    },
    ClosePOP: function (item) {
      this.$emit('ClosePOP', item);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/ReplaceRequest.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_ReplaceRequestvue_type_script_lang_js_ = (ReplaceRequestvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Modal/ReplaceRequest.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Modal_ReplaceRequestvue_type_script_lang_js_,
  ReplaceRequestvue_type_template_id_0e834b20_render,
  ReplaceRequestvue_type_template_id_0e834b20_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ReplaceRequest = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/RepairRequest.vue?vue&type=template&id=d98b88a8&
var RepairRequestvue_type_template_id_d98b88a8_render = function render() {
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
  }, [_vm._v(" " + _vm._s(_vm.$t("RepairRequest")) + ": " + _vm._s(_vm.RepairData.UNIQUE_NAME) + " ")]), _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-original-title": "Close"
    },
    on: {
      "click": function ($event) {
        return _vm.ClosePopUpRepair($event);
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-times"
  })])]), _c('div', {
    staticClass: "border p-3"
  }, [_vm.DataLoaded ? _c('dynamic-form', {
    attrs: {
      "lang": "en",
      "buttons": _vm.buttons,
      "schema": _vm.FormSchema
    },
    on: {
      "OnSubmit": _vm.onSubmit
    }
  }) : _vm._e()], 1)])])])], 1);
};
var RepairRequestvue_type_template_id_d98b88a8_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/RepairRequest.vue?vue&type=template&id=d98b88a8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/RepairRequest.vue?vue&type=script&lang=js&


/* harmony default export */ var RepairRequestvue_type_script_lang_js_ = ({
  props: {
    RepairData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      DataLoaded: 0,
      FormSchema: [{
        layoutType: "single",
        Data: [{
          astype: "SelectField",
          label: this.$t('Location'),
          name: "Location",
          value: "",
          placeholder: "",
          validationRules: {
            "required": true
          },
          config: {
            options: []
          }
        }, {
          astype: "SelectField",
          label: this.$t("MaintenanceType"),
          name: "MaintenanceType",
          value: "",
          placeholder: "",
          validationRules: {
            "required": true
          },
          config: {
            options: [{
              value: 'Service',
              name: 'Service'
            }, {
              value: 'Repair',
              name: 'Repair'
            }]
          }
        }, {
          astype: "DateField",
          label: this.$t('ExpectedDate'),
          name: "ExpectedDate",
          value: '',
          placeholder: "10/12/2022 12:AM",
          validationRules: {
            "required": true
          },
          config: {
            format: "M/D/YYYY"
          }
        }, {
          astype: "TextAreaField",
          label: this.$t('Remarks'),
          name: "Remarks",
          value: "",
          validationRules: {
            "required": false,
            max: 1000
          },
          placeholder: ""
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
      }]
    };
  },
  created: async function () {
    var vm = this;
    await vm.GetLocationByuserId();
    vm.DataLoaded = 1;
  },
  methods: {
    async GetLocationByuserId() {
      var vm = this;
      var param = `reqForm=`;
      await DataService["a" /* default */].GetLocationByCompanyId(param).then(response => {
        const LocationData = JSON.parse(response.data).data;
        LocationData.forEach((item, index) => {
          vm.FormSchema[0].Data[0].config.options.push({
            name: item.LOCATION_NAME,
            value: `${item.COMPANY_LOCATION_ID}`
          });
        });
      });
    },
    onSubmit: function (formfields) {
      var vm = this;
      vm.isLoading = true;
      debugger;
      const RepareData = {
        Location: formfields.Location,
        MaintenanceType: formfields.MaintenanceType,
        ExpectedDate: formfields.ExpectedDate,
        comment: formfields.Remarks
      };
      let postJSON = {
        "Repair_Data": vm.RepairData,
        "Json_Obj": RepareData
      };
      var Jsondata = JSON.stringify(postJSON);
      DataService["a" /* default */].SaveRepairRequest(Jsondata).then(response => {
        if (response.data != null) {
          if (response.data.length > 0) {
            vm.ShowAlert(vm.$t(response.data + " successfully"), "success", vm.$t('Alert'));
            vm.$parent.GetAssetReplacement();
            vm.$parent.ClosePopUpRepair();
          } else {
            vm.ShowAlert(vm.$t("Unknown Error Occur"), "failure", true, vm.$t('Alert'));
            vm.$parent.ClosePopUpRepare();
          }
        }
        setTimeout(function () {
          vm.CheckBoxBootstrap();
        }, 100);
      });
    },
    onCancel: function (item) {
      this.ClosePopUpRepair(item);
    },
    ClosePopUpRepair: function (item) {
      this.$emit('ClosePopUpRepair', item);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/RepairRequest.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_RepairRequestvue_type_script_lang_js_ = (RepairRequestvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Modal/RepairRequest.vue





/* normalize component */

var RepairRequest_component = Object(componentNormalizer["a" /* default */])(
  Modal_RepairRequestvue_type_script_lang_js_,
  RepairRequestvue_type_template_id_d98b88a8_render,
  RepairRequestvue_type_template_id_d98b88a8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RepairRequest = (RepairRequest_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/ApproveReject.vue?vue&type=template&id=77d77680&
var ApproveRejectvue_type_template_id_77d77680_render = function render() {
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
  }, [_vm._v(" " + _vm._s(_vm.ApproveData[0].STATUS_NAME) + " ")]), _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-original-title": "Close"
    },
    on: {
      "click": function ($event) {
        return _vm.ClosePOP($event);
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
var ApproveRejectvue_type_template_id_77d77680_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/ApproveReject.vue?vue&type=template&id=77d77680&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/ApproveReject.vue?vue&type=script&lang=js&

/* harmony default export */ var ApproveRejectvue_type_script_lang_js_ = ({
  props: {
    ApproveData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      FormSchema: [{
        layoutType: "single",
        Data: [{
          astype: "SelectField",
          label: this.$t("Status"),
          name: "Status",
          value: this.ApproveData[0].STATUS_NAME === 'Approve' ? "ASSET_RETURN_APPROVED" : 'ASSET_RETURN_REJECTED',
          placeholder: "",
          validationRules: {
            "required": false
          },
          disabled: 'Disabled',
          config: {
            options: [{
              value: 'ASSET_RETURN_APPROVED',
              name: 'Approve'
            }, {
              value: 'ASSET_RETURN_REJECTED',
              name: 'Reject'
            }]
          }
        }, {
          astype: "TextAreaField",
          label: this.$t('Remarks'),
          name: "Remarks",
          value: "",
          validationRules: {
            "required": false,
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
      }]
    };
  },
  created: function () {
    debugger;
  },
  methods: {
    onSubmit: function (formfields) {
      debugger;
      var vm = this;
      vm.isLoading = true;
      vm.ApproveData.forEach(item => {
        const ApproveRejectData = {
          requestID: item.REQUEST_ID,
          AssetAssignmentDetailId: item.ASSIGNMENT_DETAIL_ID,
          statusCode: formfields.Status,
          noOfItems: item.QTY,
          Title: item.NAME,
          comment: formfields.Remarks,
          Userids: item.USER_ID,
          PenalityAmount: item.PENALITY_AMOUNT,
          ReturnPenalityStatusID: item.PENALITY_STATUS_ID,
          GraceOverDueDays: item.GRACE_OVERDUE_DAYS
        };
        debugger;
        var Jsondata = JSON.stringify(item);
        DataService["a" /* default */].ApprovedReject(Jsondata).then(response => {
          if (response.data != null) {
            if (response.data.msg) {
              vm.ShowAlert(vm.$t(response.data.msg), "success", vm.$t('Alert'));
              vm.isLoading = false;
              vm.$parent.GetAssetReturnRequestList();
              vm.$parent.ClosePopUpApproveReject();
            } else {
              vm.ShowAlert(vm.$t("Unknown Error Occur"), "failure", true, vm.$t('Alert'));
              vm.isLoading = false;
              vm.$parent.ClosePopUpApproveReject();
            }
          }
          setTimeout(function () {
            vm.CheckBoxBootstrap();
          }, 100);
        });
      });
      //     }
      // });
    },

    onCancel: function (item) {
      this.$parent.changeTab(3);
      this.ClosePOP(item);
    },
    ClosePOP: function (item) {
      this.$emit('ClosePopUpApproveReject', item);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/ApproveReject.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_ApproveRejectvue_type_script_lang_js_ = (ApproveRejectvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Modal/ApproveReject.vue





/* normalize component */

var ApproveReject_component = Object(componentNormalizer["a" /* default */])(
  Modal_ApproveRejectvue_type_script_lang_js_,
  ApproveRejectvue_type_template_id_77d77680_render,
  ApproveRejectvue_type_template_id_77d77680_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ApproveReject = (ApproveReject_component.exports);
// EXTERNAL MODULE: ./node_modules/luxon/build/cjs-browser/luxon.js
var luxon = __webpack_require__("1315");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Asset/PendingRequestList.vue?vue&type=script&lang=js&








/* harmony default export */ var PendingRequestListvue_type_script_lang_js_ = ({
  components: {
    RequsitionRejectModal: RequsitionReject["a" /* default */],
    ReplaceRequestModal: ReplaceRequest,
    RepairRequestModal: RepairRequest,
    ApproveRejectModal: ApproveReject,
    Multiselect: vue_multiselect_min_default.a
  },
  data() {
    return {
      leftSearchFields: '',
      listheaderbuttons: [],
      LegendArray: [],
      PendingRequestData: [],
      AssetReplacementData: [],
      AssetReturnRequestData: [],
      StatusListForListing: [],
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
      }],
      Headers: [{
        "COLUMN_NAME": "USER_NAME",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("UserName"),
        "DISPLAY_ORDER": 1
      }, {
        "COLUMN_NAME": "NAME",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("Product"),
        "DISPLAY_ORDER": 2
      }, {
        "COLUMN_NAME": "UNIQUE_NAME",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("UniqueName"),
        "DISPLAY_ORDER": 3
      }, {
        "COLUMN_NAME": "REPLACEMENT_TYPE_STATUS",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("Reason"),
        "DISPLAY_ORDER": 4
      }, {
        "COLUMN_NAME": "COMMENT",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("Comment"),
        "DISPLAY_ORDER": 5
      }, {
        "COLUMN_NAME": "APPROVAL_COMMENT",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("ApprovedRejectedComment"),
        "DISPLAY_ORDER": 6
      }, {
        "COLUMN_NAME": "ReplaceRequestDate",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("RequestedAt"),
        "DISPLAY_ORDER": 7,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "STATUS_NAME",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("STATUS"),
        "DISPLAY_ORDER": 8,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "AcceptReject",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("AcceptReject"),
        "DISPLAY_ORDER": 9,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "Repair",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("Repair"),
        "DISPLAY_ORDER": 10,
        settings: {
          isInSlot: true
        }
      }],
      Headeres: [{
        "COLUMN_NAME": "USER_NAME",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("UserName"),
        "DISPLAY_ORDER": 1
      }, {
        "COLUMN_NAME": "NAME",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("Product"),
        "DISPLAY_ORDER": 2
      }, {
        "COLUMN_NAME": "UNIQUE_NAME",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("UniqueName"),
        "DISPLAY_ORDER": 3
      }, {
        "COLUMN_NAME": "RETURN_REASON_NAME",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("Reason"),
        "DISPLAY_ORDER": 4
      }, {
        "COLUMN_NAME": "COMMENTS",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("Comment"),
        "DISPLAY_ORDER": 5
      }, {
        "COLUMN_NAME": "APPROVAL_COMMENT",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("ApprovalComment"),
        "DISPLAY_ORDER": 6
      }, {
        "COLUMN_NAME": "STATUS_NAME",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("Status"),
        "DISPLAY_ORDER": 7,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "Quantity",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("Quantity"),
        "DISPLAY_ORDER": 8,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "ITEM_COST",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("ProductCost"),
        "DISPLAY_ORDER": 9
      }, {
        "COLUMN_NAME": "BOOK_VALUE",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("BookValue"),
        "DISPLAY_ORDER": 10
      }, {
        "COLUMN_NAME": "GRACE_OVERDUE_DAYS",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("OverDueDays"),
        "DISPLAY_ORDER": 11
        // settings:{
        //     isInSlot : true
        // }
      }, {
        "COLUMN_NAME": "PENALITY_STATUS_TYPE",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("PenaltyStatus"),
        "DISPLAY_ORDER": 12,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "Penality",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("Penalty"),
        "DISPLAY_ORDER": 13,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "CREATED_AT",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("ReturnDate"),
        "DISPLAY_ORDER": 14,
        settings: {
          isInSlot: true
        }
      }],
      widgets: [],
      ProductData: [],
      StatusData: [],
      ProductsData: [],
      selectedProducts: [],
      isUniqueNamesDisable: true,
      noRecord: true,
      TotalRecord: 0,
      TotalRecords: 0,
      TotalRecordes: 0,
      CurrentPage: 1,
      CurrentPages: 1,
      CurrentPagees: 1,
      TotalPage: 0,
      TotalPages: 0,
      TotalPagees: 0,
      CreatedBy: '',
      catIds: '',
      uIds: '',
      UserType: '',
      batchId: '',
      SortBy: '',
      SortExp: '',
      barcode: '',
      relatedInfoID: '',
      username: '',
      searchStatus: '',
      PenaltyOnStatus: '',
      PenaltyOnOverdue: '',
      PageNumber: 1,
      PageNumbers: 1,
      PageNumberes: 1,
      PageSize: 10,
      PageSizes: 10,
      PageSizees: 10,
      ProductID: '',
      ProductNames: '',
      type: '',
      activeTab: 1,
      tabs: [{
        id: 1,
        title: 'Pending Check Out Request'
      }, {
        id: 2,
        title: 'Replace Request'
      }, {
        id: 3,
        title: 'Return Request'
      }, {
        id: 4,
        title: 'Reservation'
      }],
      privilegeParams: '',
      totalDaysDue: 0,
      navheading: 'Pending Check Out Request',
      IscheckReject: false,
      IscheckReplace: false,
      IscheckRepair: false,
      IscheckApproveReject: false,
      isLoading: false,
      DataLoaded: 0,
      RejectData: [],
      ReplaceData: [],
      RepairData: [],
      ApproveData: [],
      Penaltyoverdue: 0,
      StatusID: '',
      statusIDs: [],
      Headerstext: 'Pending Request',
      FormSchema: [{
        layoutType: "four",
        Data: [{
          astype: "TextField",
          label: this.$t('Search'),
          name: "Search",
          value: "",
          // disabled:true,
          placeholder: "",
          validationRules: {
            "required": false,
            max: 250
          },
          placeholder: ""
        }, {
          astype: "SelectField",
          label: this.$t("Status"),
          name: "Status",
          value: "",
          placeholder: "",
          validationRules: {
            "required": false
          },
          config: {
            options: [{
              value: "active",
              name: "Active"
            }, {
              value: "Approved",
              name: "Approved"
            }, {
              value: "Rejected",
              name: "Rejected"
            }]
          }
        }, {
          astype: "SelectField",
          label: this.$t("PenaltyOnStatus"),
          name: "PenaltyOnStatus",
          value: "",
          placeholder: "",
          validationRules: {
            "required": false
          },
          config: {
            options: [{
              value: "Yes",
              name: "Yes"
            }, {
              value: "No",
              name: "No"
            }]
          }
        }]
      }],
      buttons: [{
        type: "submit",
        class: "btn btn-success",
        text: "<i class='fa fa-search pr-2'></i>" + this.$t('Search'),
        onClick: this.SearchReturn
      }, {
        type: "button",
        class: "btn btn-danger",
        text: "<i class='fa fa-refresh pr-2'></i>" + this.$t('Clear'),
        onClick: this.ClearReturn
      }],
      FormSchemas: [{
        layoutType: "four",
        Data: [{
          astype: "SelectField",
          label: this.$t("ProductName"),
          name: "Status",
          value: "",
          placeholder: "",
          validationRules: {
            "required": false
          },
          config: {
            options: [],
            onChange: this.onChangeDropdown
          }
        }, {
          astype: "SelectField",
          label: this.$t("UniqueName"),
          name: "PenaltyOnStatus",
          value: "",
          placeholder: "",
          validationRules: {
            "required": false
          },
          config: {
            options: []
          }
        }]
      }],
      button: [{
        type: "submit",
        class: "btn btn-success",
        text: "<i class='fa fa-search pr-2'></i>" + this.$t('Search'),
        onClick: this.Search
      }, {
        type: "button",
        class: "btn btn-danger",
        text: "<i class='fa fa-refresh pr-2'></i>" + this.$t('Clear'),
        onClick: this.Clear
      }]
    };
  },
  created: async function () {
    var vm = this;
    vm.type = '';
    await vm.GetPageSize();
    vm.GetAssetType();
    vm.privilegeParams = `controller=Asset&action=`;
    DataService["a" /* default */].CheckPrivilege(vm.privilegeParams + 'PendingRequest').then(response => {
      if (response.data) {
        vm.FetchData();
      } else {
        vm.ShowAlert(vm.$t('NotAuthorizedSection'), "failure", true, "Alert");
        vm.$router.push({
          path: '/unauthorized'
        });
      }
    });
  },
  methods: {
    async GetPageSize() {
      var vm = this;
      var params = 'key=DefaultPageSize';
      await DataService["a" /* default */].GetConfigurationValueForCompanyByKey(params).then(response => {
        if (response.data != null) {
          vm.PageSize = parseInt(response.data);
          vm.PageSizes = parseInt(response.data);
          vm.PageSizees = parseInt(response.data);
        }
      });
    },
    IsAssigned: function (item) {
      var vm = this;
      DataService["a" /* default */].CheckPrivilege('controller=AssetAssignment&action=Add').then(response => {
        if (response.data) {
          debugger;
          //this.$router.push({ name: "AddAssetAssignment",params: { reqForm: 'pendingRequest',Id: vm.REQUISITION_BATCH_ID } });
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
    GetAssetType: function () {
      var vm = this;
      DataService["a" /* default */].GetAssetTypeDropDown().then(function (response) {
        response.data.data.forEach((item, index) => {
          vm.FormSchemas[0].Data[0].config.options.push({
            name: item.NAME,
            value: `${item.ASSETID}`
          });
        });
        vm.$refs.pendingrequestform[0].UpdateKeyValue();
      });
    },
    onChangeDropdown: function (evt) {
      debugger;
      var vm = this;
      var ProductID = evt.target.value;
      // var ProductID=(vm.FormSchemas)[0].Data[0].value;
      if (ProductID == null || ProductID == '') {
        vm.isUniqueNamesDisable = true;
      } else {
        vm.isUniqueNamesDisable = false;
        vm.ProductsData = [];
        vm.FormSchemas[0].Data[1].config.options = [];
        var url = `catId=${ProductID}&UserType=${vm.UserType}`;
        DataService["a" /* default */].GetUniqueNamesByCatalogId(url).then(function (response) {
          debugger;
          response.data.data.forEach((item, index) => {
            vm.FormSchemas[0].Data[1].config.options.push({
              name: item.unique_name,
              value: `${item.related_info_id}`
            });
          });
          vm.$refs.pendingrequestform[0].UpdateKeyValue();
        });
      }
    },
    async GetAssetstatusList() {
      try {
        const response = await DataService["a" /* default */].GetAssetItemStatusList();
        this.StatusData = response.data.map(item => ({
          name: `${item.STATUS_NAME}`,
          value: `${item.STATUS_ID}`
        }));
      } catch (error) {
        console.error("Error fetching asset status list:", error);
        // Handle the error accordingly
      }
    },

    changeTab(tab) {
      var vm = this;
      if (tab == 1) {
        vm.navheading = 'Pending Check Out Request';
        vm.type = '';
        vm.SortBy = '';
        vm.SortExp = '';
        vm.Headerstext = 'Pending Request';
        vm.FetchData();
      } else if (tab == 2) {
        vm.navheading = 'Replace Request';
        vm.type = '';
        vm.SortBy = '';
        vm.SortExp = '';
        vm.Headerstext = 'Replace Request';
        DataService["a" /* default */].CheckPrivilege(vm.privilegeParams + 'GetAssetReplacementList').then(response => {
          if (response.data) {
            vm.GetAssetReplacement();
          } else {
            vm.ShowAlert(vm.$t('NotAuthorizedSection'), "failure", true, "Alert");
            vm.$router.push({
              path: '/unauthorized'
            });
          }
        });
      } else if (tab == 3) {
        vm.navheading = 'Return Request';
        vm.type = '';
        vm.SortBy = '';
        vm.SortExp = '';
        vm.Headerstext = 'Return Request';
        DataService["a" /* default */].CheckPrivilege(vm.privilegeParams + 'GetAssetReturnRequestList').then(response => {
          if (response.data) {
            vm.GetAssetReturnRequestList();
          } else {
            vm.ShowAlert(vm.$t('NotAuthorizedSection'), "failure", true, "Alert");
            vm.$router.push({
              path: '/unauthorized'
            });
          }
        });
      } else {
        vm.navheading = 'Reservation';
        vm.type = 'Reservation';
        vm.SortBy = '';
        vm.SortExp = '';
        vm.Headerstext = 'Reservation';
        vm.FetchData();
      }
    },
    previousTab() {
      if (this.activeTab > 1) {
        this.activeTab--;
        if (this.activeTab == 4) {
          this.type = "Reservation";
          this.FetchData();
        } else if (this.activeTab == 1) {
          this.type = "";
          this.FetchData();
        } else {
          this.changeTab(this.activeTab);
        }
      }
    },
    nextTab() {
      if (this.activeTab <= this.tabs.length - 1) {
        this.activeTab++;
        if (this.activeTab == 4) {
          this.type = "Reservation";
          this.FetchData();
        } else if (this.activeTab == 1) {
          this.type = "";
          this.FetchData();
        } else {
          this.changeTab(this.activeTab);
        }
      }
    },
    FetchData() {
      var vm = this;
      vm.isLoading = true;
      const params = vm.getRequestParams(vm.pageNum, vm.PageSize, vm.sortBy, vm.sortExp, vm.uIds, vm.catIds, vm.batchId, vm.barcode, vm.type);
      params.pageNum = vm.PageNum;
      if (vm.PageNum) {
        params.pageNum = vm.PageNum;
      } else {
        vm.PageNum = params.pageNum = 0;
      }
      params.pageSize = vm.PageSize;
      params.sortBy = vm.SortBy;
      params.sortExp = vm.SortExp;
      var srchCondition = "";
      if (!vm.isBlank(vm.searchCondition)) {
        srchCondition = srchCondition + vm.searchCondition;
      }
      if (!vm.isBlank(vm.conditionForInstantSearch)) {
        srchCondition = srchCondition + (!vm.isBlank(vm.searchCondition) ? " AND " + vm.conditionForInstantSearch : vm.conditionForInstantSearch);
      }
      if (srchCondition != "") {
        params.searchCondition = srchCondition;
      }
      params.uIds = vm.uIds;
      params.catIds = vm.catIds;
      params.batchId = vm.batchId;
      params.barcode = vm.barcode;
      params.type = vm.type;
      //var url=`uIds=${vm.uIds}&catIds=${vm.catIds}&batchId=${vm.batchId}&pageSize=${vm.PageSize}&pageNum=${vm.PageNumber}&sortBy=${vm.SortBy}&sortExp=${vm.SortExp}&barcode=${vm.barcode}&type=${vm.type}`;
      DataService["a" /* default */].PendingRequestList(params).then(response => {
        if (JSON.parse(response.data).length != null) {
          if (JSON.parse(response.data).length > 0) {
            vm.PendingRequestData = JSON.parse(response.data);
            vm.PendingRequestData.forEach(row => {
              row.additionalClass = '';
              if (row.ISEXPIRED) {
                row.additionalClass = 'high-profile-bar';
              }
            });
            vm.TotalRecord = vm.PendingRequestData[0].TOTAL_PAGES;
            vm.TotalPage = vm.TotalRecord;
            vm.CurrentPage = vm.PageNumber;
            vm.noRecord = false;
            vm.isLoading = false;
          } else {
            vm.noRecord = true;
            vm.PendingRequestData = [];
            vm.TotalRecord = 0;
            vm.isLoading = false;
          }
        }
      });
    },
    getRequestParams: function (pageNum, pageSize, sortBy, sortExp, uIds, catId, batchId, type, barcode) {
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
      if (uIds) {
        params["uIds"] = uIds;
      }
      if (catId) {
        params["catId"] = catId;
      }
      if (batchId) {
        params["batchId"] = batchId;
      }
      if (type) {
        params["type"] = type;
      }
      if (barcode) {
        params["barcode"] = barcode;
      }
      return params;
    },
    sortdata: function (s) {
      var SortDir = "sort tb_headerSortDown";
      this.SortBy = s;
      if (s === this.SortBy) {
        if (this.SortExp == "") {
          this.SortExp = "ASC";
          SortDir = "sort tb_headerSortDown";
        } else if (this.SortExp == "ASC") {
          this.SortExp = "DESC";
          SortDir = "sort tb_headerSortUp";
        } else {
          this.SortExp = "ASC";
          SortDir = "sort tb_headerSortDown";
        }
      }
      if (this.activeTab == 1 || this.activeTab == 4) {
        this.FetchData();
      } else if (this.activeTab == 2) {
        this.GetAssetReplacement();
      } else {
        this.GetAssetReturnRequestList();
      }
      $("#" + s + '  span:first-child').attr("class", SortDir);
    },
    Search: function () {
      var vm = this;
      vm.catIds = vm.FormSchemas[0].Data[0].value;
      vm.FetchData();
    },
    Clear: function () {
      var vm = this;
      vm.FormSchemas[0].Data[0].value = "";
      vm.PageSize = 10;
      vm.PageNumber = 1;
      vm.ProductID = '', vm.selectedProducts = '', vm.GetAssetType();
      vm.catIds = '', vm.changeTab(this.activeTab);
    },
    pagerMethod: function (value) {
      this.PageSize = value.PageSize;
      this.PageNum = value.PageNumber;
      this.FetchData();
    },
    GetAssetReplacement() {
      this.isLoading = true;
      var url = `sortBy=${this.SortBy}&sortExp=${this.SortExp}&pageSize=${this.PageSizes}&pageNum=${this.PageNumbers}&createdby=${this.CreatedBy}`;
      DataService["a" /* default */].GetAssetReplacementList(url).then(response => {
        if (response.data != null) {
          if (response.data.data.length > 0) {
            console.log(response.data.data);
            this.AssetReplacementData = response.data.data;
            this.TotalRecords = response.data.data[0].TOTAL_PAGES;
            this.TotalPages = Math.ceil(this.TotalRecords / this.PageSizes);
            this.CurrentPages = this.PageNumbers;
            this.noRecord = false;
            this.isLoading = false;
          } else {
            this.noRecord = true;
            this.AssetReplacementData = [];
            this.TotalRecords = 0;
            this.isLoading = false;
          }
        } else {
          this.noRecord = true;
          this.PendingRequestData = [];
          this.TotalRecord = 0;
          this.isLoading = false;
        }
      });
    },
    pagerMethods: function (value) {
      this.PageSizes = value.PageSize;
      this.PageNumbers = value.PageNumber;
      this.GetAssetReplacement();
    },
    GetAssetReturnRequestList() {
      var vueObj = this;
      vueObj.isLoading = true;
      var url = `sortBy=${vueObj.SortBy}&sortExp=${vueObj.SortExp}&pageSize=${vueObj.PageSizees}&pageNum=${vueObj.PageNumberes}&createdby=${vueObj.CreatedBy}&relatedInfoID=${vueObj.relatedInfoID}&username=${vueObj.username}&searchStatus=${vueObj.searchStatus}&PenaltyOnStatus=${vueObj.PenaltyOnStatus}&PenaltyOnOverdue=${vueObj.PenaltyOnOverdue}`;
      DataService["a" /* default */].GetAssetReturnRequest(url).then(response => {
        if (JSON.parse(response.data) != null) {
          if (JSON.parse(response.data).length > 0) {
            console.log(response.data);
            vueObj.AssetReturnRequestData = JSON.parse(response.data);
            vueObj.AssetReturnRequestData.forEach(row => {
              row.additionalClass = '';
              if (row.ISOVERDUE) {
                row.additionalClass = 'warning-bar';
              }
              row.isCheckBoxDisabled = false;
              if (row.STATUS_NAME == 'Approved') {
                row.isCheckBoxDisabled = true;
              } else if (row.STATUS_NAME == 'Rejected') {
                row.isCheckBoxDisabled = true;
              }
            });
            vueObj.TotalRecordes = vueObj.AssetReturnRequestData[0].TOTAL_RECORDS;
            vueObj.TotalPagees = Math.ceil(vueObj.TotalRecordses / vueObj.PageSizees);
            vueObj.CurrentPagees = vueObj.PageNumberes;
            vueObj.noRecord = false;
            vueObj.isLoading = false;
          } else {
            vueObj.noRecord = true;
            vueObj.AssetReturnRequestData = [];
            vueObj.TotalRecorded = 0;
            vueObj.isLoading = false;
          }
          setTimeout(function () {
            vueObj.CheckBoxBootstrap();
          }, 100);
          setTimeout(function () {
            vueObj.ResponsiveDataTable("tablelistingdata");
          }, 500);
        } else {
          vueObj.noRecord = true;
          vueObj.AssetReturnRequestData = [];
          vueObj.TotalRecorded = 0;
          vueObj.isLoading = false;
        }
      });
    },
    pagerMethodes: function (value) {
      this.selectedItems = [];
      this.PageSizees = value.PageSize;
      this.PageNumberes = value.PageNumber;
      this.GetAssetReturnRequestList();
    },
    RequsitionReject: function (item) {
      var vm = this;
      DataService["a" /* default */].CheckPrivilege('controller=AssetAssignment&action=AssetReturnRequestListPopup').then(response => {
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
    ReplaceRequest: function (item) {
      var vm = this;
      DataService["a" /* default */].CheckPrivilege(vm.privilegeParams + 'AcceptRejectReplacementRequest').then(response => {
        if (response.data) {
          vm.ReplaceData = item;
          vm.IscheckReplace = true;
        } else {
          vm.ShowAlert(vm.$t('NotAuthorizedSection'), "failure", true, "Alert");
        }
      });
    },
    ClosePOP: function () {
      var vm = this;
      vm.IscheckReplace = false;
    },
    Repair: function (item) {
      var vm = this;
      vm.IscheckRepair = true;
      vm.RepairData = item;
    },
    ClosePopUpRepair: function () {
      var vm = this;
      vm.IscheckRepair = false;
    },
    SearchReturn: function () {
      var vm = this;
      vm.username = vm.FormSchema[0].Data[0].value;
      vm.searchStatus = vm.FormSchema[0].Data[1].value;
      vm.PenaltyOnStatus = vm.FormSchema[0].Data[2].value;
      vm.GetAssetReturnRequestList();
    },
    ClearReturn: function () {
      var vm = this;
      vm.FormSchema[0].Data[0].value = '';
      vm.FormSchema[0].Data[1].value = '';
      vm.FormSchema[0].Data[2].value = '';
      vm.PageSizees = 10;
      vm.PageNumberes = 1;
      vm.searchStatus = '', vm.PenaltyOnStatus = '', vm.username = '', vm.GetAssetReturnRequestList();
    },
    toggleSelectAll: function () {
      if (!this.selectAll) {
        this.selectedItems = this.AssetReturnRequestData.filter(item => item.STATUS_ID === 1001 && item.QTY > 0).map(item => item.REQUEST_ID);
      } else {
        this.selectedItems = [];
      }
    },
    toggleSelect: function (items) {
      const data = items.REQUEST_ID;
      if (this.selectedItems.includes(data)) {
        this.selectedItems = this.selectedItems.filter(item => item !== data);
        // let itemIndex = this.selectedItems.indexOf(data);
        // this.selectedItems.splice(itemIndex);
      } else {
        this.selectedItems.push(data);
      }
    },
    approvedSelected() {
      var vm = this;
      DataService["a" /* default */].CheckPrivilege(vm.privilegeParams + 'UpdateReturnRequestStatus').then(response => {
        if (response.data) {
          var checkedValues = "";
          $('.chkItems:checkbox:checked').not("[id^='chkAll']").each(function () {
            if (checkedValues.length > 0) {
              checkedValues += ',';
            }
            checkedValues += $(this).val();
          });
          if (checkedValues != '' && checkedValues != null) {
            var filteredItems = this.AssetReturnRequestData.filter(item => checkedValues.includes(item.REQUEST_ID));
            filteredItems[0].STATUS_NAME = 'Approve';
            vm.ApproveData = filteredItems;
            vm.IscheckApproveReject = true;
          } else {
            vm.ShowAlert(vm.$t('Please select at least one Request'), "success", vm.$t('Alert'));
            vm.IscheckApproveReject = false;
          }
        } else {
          vm.ShowAlert(vm.$t('NotAuthorizedSection'), "failure", true, "Alert");
        }
      });
    },
    rejectecSelected() {
      var vm = this;
      DataService["a" /* default */].CheckPrivilege(vm.privilegeParams + 'UpdateReturnRequestStatus').then(response => {
        if (response.data) {
          var checkedValues = "";
          $('.chkItems:checkbox:checked').not("[id^='chkAll']").each(function () {
            if (checkedValues.length > 0) {
              checkedValues += ',';
            }
            checkedValues += $(this).val();
          });
          if (checkedValues != '' && checkedValues != null) {
            var filteredItems = this.AssetReturnRequestData.filter(item => checkedValues.includes(item.REQUEST_ID));
            filteredItems[0].STATUS_NAME = 'Reject';
            vm.ApproveData = filteredItems;
            vm.IscheckApproveReject = true;
          } else {
            vm.ShowAlert(vm.$t('Please select at least one Request'), "success", vm.$t('Alert'));
            vm.IscheckApproveReject = false;
          }
        } else {
          vm.ShowAlert(vm.$t('NotAuthorizedSection'), "failure", true, "Alert");
        }
      });
    },
    ClosePopUpApproveReject: function () {
      var vm = this;
      vm.IscheckApproveReject = false;
    },
    restrictToNumbers(event) {
      const newValue = event.target.value.replace(/[^0-9]/g, '');
      this.Penaltyoverdue = newValue;
    },
    formatTimeToCustomFormat(inputTime) {
      if (inputTime != null && inputTime != '') {
        const inputLuxonDateTime = luxon["DateTime"].fromISO(inputTime, {
          zone: 'utc'
        }); // Assume the input time is in UTC
        const targetTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const outputLuxonDateTime = inputLuxonDateTime.setZone(targetTimeZone);
        const formattedDateTime = outputLuxonDateTime.toFormat("MM/dd/yyyy h:mm a");
        return formattedDateTime;
      } else {
        return "NA";
      }
    },
    commonHeaderButtonClick: function () {},
    renderActions() {},
    renderRowActionMethod() {}
  }
});
// CONCATENATED MODULE: ./src/views/Asset/PendingRequestList.vue?vue&type=script&lang=js&
 /* harmony default export */ var Asset_PendingRequestListvue_type_script_lang_js_ = (PendingRequestListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/Asset/PendingRequestList.vue?vue&type=style&index=0&id=49c0f7e8&prod&lang=css&
var PendingRequestListvue_type_style_index_0_id_49c0f7e8_prod_lang_css_ = __webpack_require__("6cea");

// CONCATENATED MODULE: ./src/views/Asset/PendingRequestList.vue






/* normalize component */

var PendingRequestList_component = Object(componentNormalizer["a" /* default */])(
  Asset_PendingRequestListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PendingRequestList = __webpack_exports__["default"] = (PendingRequestList_component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-7aedb7fa.js.map