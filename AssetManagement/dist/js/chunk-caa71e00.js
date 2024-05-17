(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-caa71e00"],{

/***/ "27e4":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".main-content .listing .table.table-bordered tr td.penalityStatus{overflow:visible!important}.main-content .listing .table.table-bordered tr td.penalityStatus .multiselect__content-wrapper{z-index:99999}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "b8e6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductTypeSample_vue_vue_type_style_index_0_id_7f413f81_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f0b3");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductTypeSample_vue_vue_type_style_index_0_id_7f413f81_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductTypeSample_vue_vue_type_style_index_0_id_7f413f81_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "d4bc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Asset/ImportItemType.vue?vue&type=template&id=64eb090c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "main-content",
    attrs: {
      "id": "main-content"
    }
  }, [_c('loader', {
    attrs: {
      "is-visible": _vm.isLoading
    }
  }), _c('section', {
    staticClass: "page-action"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12 padding-t_8"
  }, [_c('div', {
    staticClass: "theme-primary partition-full"
  }, [_c('span', {
    staticClass: "p-name text-white"
  }, [_vm._v(_vm._s(_vm.$t('Import Product Type')))])])])])]), _c('div', {
    staticClass: "user-guide-custom d-none"
  }, [_vm._v(" " + _vm._s(_vm.$t('User_Guide_ProductTypeSampleImport')) + " ")]), _c('div', {
    staticClass: "border p-3"
  }, [_c('Form', {
    ref: "ItemTypeForm"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Sample File')) + ":")]), _c('div', {
    staticClass: "input-group mb-3"
  }, [_c('div', {
    staticClass: "form-control"
  }, [_c('i', {
    staticClass: "fa fa-file-excel-o pr-1 text-success"
  }), _vm._v(_vm._s(_vm.$t('ProductTypeSample')) + ".xls ")]), _c('div', {
    staticClass: "input-group-append downloadProductSample"
  }, [_c('span', {
    staticClass: "input-group-text",
    attrs: {
      "id": "basic-addon2"
    }
  }, [_c('a', {
    attrs: {
      "href": "https://cogniterblob.blob.core.windows.net/global/SampleFiles/sample-file-asset-producttype-import.xls",
      "download": ""
    }
  }, [_c('i', {
    staticClass: "fa fa-download text-primary"
  })])])])])])]), _c('div', {
    staticClass: "col-lg-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Upload a File')) + ":"), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _c('Field', {
    attrs: {
      "rules": {
        'required': true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        errors
      }) {
        return [_c('div', {
          staticClass: "input-group"
        }, [_c('div', {
          staticClass: "custom-file ProductTypeSampleFile align-items-start"
        }, [_c('input', {
          staticStyle: {
            "position": "absolute",
            "clip": "rect(0px, 0px, 0px, 0px)"
          },
          attrs: {
            "type": "file",
            "name": "FileSrc",
            "id": "flAvatar",
            "tabindex": "-1"
          },
          on: {
            "change": function ($event) {
              return _vm.setFile($event);
            }
          }
        }), _c('div', {
          staticClass: "bootstrap-filestyle input-group"
        }, [_c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.attachmentName,
            expression: "attachmentName"
          }],
          class: {
            'form-control disabled': true,
            'is-invalid': errors[0]
          },
          attrs: {
            "type": "text",
            "disabled": ""
          },
          domProps: {
            "value": _vm.attachmentName
          },
          on: {
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.attachmentName = $event.target.value;
            }
          }
        }), _c('div', {
          staticClass: "input-group-append",
          staticStyle: {
            "cursor": "pointer"
          }
        }, [_c('span', {
          staticClass: "group-span-filestyle input-group-btn input-group-text bg-white",
          attrs: {
            "tabindex": "0"
          }
        }, [_c('label', {
          staticClass: "mb-0 font-weight-normal",
          attrs: {
            "title": "Click here to select a file.",
            "for": "flAvatar"
          }
        }, [_vm._v(_vm._s(_vm.$t('FileControlText')))])]), _c('span', {
          staticClass: "input-group-text border-0 bg-transparent p-0 pl-2"
        }, [_c('a', {
          staticClass: "round-icon-small btn-danger-light",
          attrs: {
            "href": "javascript:;",
            "title": "Clear"
          },
          on: {
            "click": _vm.Clear
          }
        }, [_c('i', {
          staticClass: "fa fa-undo"
        })])])]), errors[0] ? _c('span', {
          staticClass: "invalid-feedback",
          attrs: {
            "name": "FileSrc"
          }
        }, [_vm._v("Upload a File Field is Required.")]) : _vm._e()])])])];
      }
    }])
  })], 1)])]), _c('div', {
    staticClass: "row flex-row-reverse sm_mt-3"
  }, [_c('div', {
    staticClass: "col-lg-6 text-right"
  }, [_c('a', {
    staticClass: "btn btn-info formbtn mr-1",
    attrs: {
      "href": "javascript:void(0);",
      "title": _vm.$t('ImportFromExcelFile')
    },
    on: {
      "click": function ($event) {
        return _vm.UploadProductSampleFile();
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-download pr-2"
  }), _vm._v(_vm._s(_vm.$t('ImportFromExcelFile')))]), _c('a', {
    staticClass: "btn btn-danger formbtn my-2",
    attrs: {
      "title": "",
      "data-toggle-tooltip": "tooltip",
      "data-original-title": "Cancel"
    },
    on: {
      "click": function ($event) {
        return _vm.onCancel();
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-close mr-2"
  }), _vm._v("Cancel")])])])])], 1), _vm.ShowImportProductType ? _c('ProductTypeSample', {
    ref: "myChild",
    attrs: {
      "filepath": _vm.filepath
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/Asset/ImportItemType.vue?vue&type=template&id=64eb090c&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/ProductTypeSample.vue?vue&type=template&id=7f413f81&
var ProductTypeSamplevue_type_template_id_7f413f81_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "main-content",
    attrs: {
      "id": "divMainContent"
    }
  }, [_c('loader', {
    attrs: {
      "is-visible": _vm.isLoading
    }
  }), _c('div', {
    staticClass: "listing mt-2"
  }, [_c('div', {
    staticClass: "table-responsive mb-3 table-fix-header"
  }, [_c('Form', {
    ref: "ProductTypeimport"
  }, [_c('table', {
    staticClass: "table table-bordered dt-responsive nowrap mt-0",
    attrs: {
      "id": "tblExpList"
    }
  }, [_c('thead', {
    staticClass: "thead-bg"
  }, [_c('tr', [_c('th', {
    staticStyle: {
      "width": "156px",
      "min-width": "120px",
      "max-width": "156px"
    },
    attrs: {
      "id": "th-PRODUCTTYPE"
    }
  }, [_c('span', {
    staticClass: "d-inline-block"
  }, [_vm._v("Product Type"), _c('span', {
    staticClass: "d-inline-block"
  }, [_c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])])])]), _c('th', {
    staticStyle: {
      "width": "156px",
      "min-width": "100px",
      "max-width": "156px"
    },
    attrs: {
      "id": "th-STATUS"
    }
  }, [_c('span', {
    staticClass: "d-inline-block"
  }, [_vm._v("Status"), _c('span', {
    staticClass: "d-inline-block"
  }, [_c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])])])]), _c('th', {
    staticStyle: {
      "width": "156px",
      "min-width": "150px",
      "max-width": "156px"
    },
    attrs: {
      "id": "th-PRODUCTTYPECODE"
    }
  }, [_c('span', [_vm._v("Product Type Code")])]), _c('th', {
    staticStyle: {
      "width": "156px",
      "min-width": "100px",
      "max-width": "156px"
    },
    attrs: {
      "id": "th-DESCRIPTION"
    }
  }, [_c('span', [_vm._v("Description")])]), _c('th', {
    staticStyle: {
      "width": "156px",
      "min-width": "100px",
      "max-width": "156px"
    },
    attrs: {
      "id": "th-CONTAINER"
    }
  }, [_c('span', [_vm._v("Container")])]), _c('th', {
    staticStyle: {
      "width": "156px",
      "min-width": "500px",
      "max-width": "156px"
    },
    attrs: {
      "id": "th-COMPARTMENTIFINCONTAINERPLEASEWRITECOMPARTMENTNAMESSEPARATEDBYACOMMA"
    }
  }, [_c('span', [_vm._v("Compartment")]), _c('small', {
    staticClass: "form-text text-muted"
  }, [_vm._v("If in container, please write compartment names separated by a comma")])]), _c('th', {
    staticStyle: {
      "width": "156px",
      "min-width": "100px",
      "max-width": "156px"
    },
    attrs: {
      "id": "th-PRODUCT"
    }
  }, [_c('span', [_vm._v("Product")])]), _c('th', {
    staticStyle: {
      "width": "156px",
      "min-width": "100px",
      "max-width": "156px"
    },
    attrs: {
      "id": "th-CONSUMABLE"
    }
  }, [_c('span', [_vm._v("Consumable ")])]), _c('th', {
    staticStyle: {
      "width": "156px",
      "min-width": "100px",
      "max-width": "156px"
    },
    attrs: {
      "id": "th-LICENSES"
    }
  }, [_c('span', [_vm._v("License(s)")])]), _c('th', {
    staticStyle: {
      "width": "156px",
      "min-width": "100px",
      "max-width": "156px"
    },
    attrs: {
      "id": "th-MATERIALSPAREPARTS"
    }
  }, [_c('span', [_vm._v("Material/Spare Parts")])]), _c('th', {
    staticStyle: {
      "width": "156px",
      "min-width": "100px",
      "max-width": "156px"
    },
    attrs: {
      "id": "th-ISTRANSFERABLE"
    }
  }, [_vm._v("Is Transferable")]), _c('th', {
    staticStyle: {
      "width": "156px",
      "min-width": "100px",
      "max-width": "156px"
    },
    attrs: {
      "id": "th-SELFCHECKOUT"
    }
  }, [_c('span', [_vm._v("Self Checkout")])]), _c('th', {
    staticStyle: {
      "width": "156px",
      "min-width": "100px",
      "max-width": "156px"
    },
    attrs: {
      "id": "th-PENALTYONSTATUS"
    }
  }, [_c('span', [_vm._v("Penalty On Status")])]), _c('th', {
    staticClass: "clsFixSize ui-resizable",
    staticStyle: {
      "width": "156px",
      "min-width": "130px",
      "max-width": "156px"
    },
    attrs: {
      "id": "th-PENALTYSTATUS"
    }
  }, [_c('span', [_vm._v("Penalty Status")])]), _c('th', {
    staticStyle: {
      "width": "156px",
      "min-width": "100px",
      "max-width": "156px"
    },
    attrs: {
      "id": "th-PENALTYONRETURNOVERDUE"
    }
  }, [_c('span', [_vm._v("Penalty On Return Overdue")])]), _c('th', {
    staticStyle: {
      "width": "156px",
      "min-width": "120px",
      "max-width": "156px"
    },
    attrs: {
      "id": "th-GRACEPERIOD"
    }
  }, [_c('span', [_vm._v("Grace Period")])]), _c('th', {
    staticStyle: {
      "width": "156px",
      "min-width": "100px",
      "max-width": "156px"
    },
    attrs: {
      "id": "th-ENABLETERMSANDCONDITIONS"
    }
  }, [_c('span', [_vm._v("Enable Terms and Conditions")])]), _c('th', {
    staticStyle: {
      "width": "156px",
      "min-width": "100px",
      "max-width": "156px"
    },
    attrs: {
      "id": "th-EMPLOYEEACCEPTANCE"
    }
  }, [_c('span', [_vm._v("Employee Acceptance")])]), _c('th', {
    staticStyle: {
      "width": "156px",
      "min-width": "100px",
      "max-width": "156px"
    },
    attrs: {
      "id": "th-INSURANCEPOLICY"
    }
  }, [_c('span', [_vm._v("Insurance Policy")])]), _c('th', {
    staticStyle: {
      "width": "156px",
      "min-width": "100px",
      "max-width": "156px"
    },
    attrs: {
      "id": "th-CALIBRATION"
    }
  }, [_c('span', [_vm._v("Calibration")])]), _c('th', {
    staticStyle: {
      "width": "156px",
      "min-width": "100px",
      "max-width": "156px"
    },
    attrs: {
      "id": "th-PRODUCTCOST"
    }
  }, [_c('span', [_vm._v("Product Cost")])]), _c('th', {
    staticStyle: {
      "width": "156px",
      "min-width": "100px",
      "max-width": "156px"
    },
    attrs: {
      "id": "th-WARRANTY"
    }
  }, [_c('span', [_vm._v("Warranty")])]), _c('th', {
    staticStyle: {
      "width": "156px",
      "min-width": "100px",
      "max-width": "156px"
    },
    attrs: {
      "id": "th-DEPRECIABLE"
    }
  }, [_c('span', [_vm._v("Depreciable")])]), _c('th', {
    staticStyle: {
      "width": "156px",
      "min-width": "100px",
      "max-width": "156px"
    },
    attrs: {
      "id": "th-GPSTRACKING"
    }
  }, [_c('span', [_vm._v("GPS Tracking")])]), _c('th', {
    staticStyle: {
      "width": "156px",
      "min-width": "100px",
      "max-width": "156px"
    },
    attrs: {
      "id": "th-FLEETMANAGEMENT"
    }
  }, [_c('span', [_vm._v("Fleet Management")])])])]), _vm._l(_vm.ProductTypedata, function (item, index) {
    return _c('tbody', {
      key: index
    }, [_vm.ProductTypedata.length != '0' ? _c('tr', [_c('td', [_c('Field', {
      attrs: {
        "name": 'ProductType' + index,
        "rules": {
          'required': true
        }
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
              value: item.ItemTypeName,
              expression: "item.ItemTypeName"
            }],
            class: {
              'form-control': true,
              'is-invalid': errors[0]
            },
            attrs: {
              "type": "text",
              "name": 'ProductType' + index
            },
            domProps: {
              "value": item.ItemTypeName
            },
            on: {
              "input": function ($event) {
                if ($event.target.composing) return;
                _vm.$set(item, "ItemTypeName", $event.target.value);
              }
            }
          })];
        }
      }], null, true)
    })], 1), _c('td', [_c('Field', {
      attrs: {
        "name": 'Status' + index,
        "rules": {
          'required': true
        }
      },
      scopedSlots: _vm._u([{
        key: "default",
        fn: function ({
          errors
        }) {
          return [_c('select', {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: item.StatusID,
              expression: "item.StatusID"
            }],
            class: {
              'form-control': true,
              'is-invalid': errors[0]
            },
            attrs: {
              "name": 'Status' + index
            },
            on: {
              "change": function ($event) {
                var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                  return o.selected;
                }).map(function (o) {
                  var val = "_value" in o ? o._value : o.value;
                  return val;
                });
                _vm.$set(item, "StatusID", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
              }
            }
          }, [_c('option', {
            attrs: {
              "value": ""
            }
          }, [_vm._v("Select")]), _vm._l(_vm.StatusListData, function (item, itemIndex) {
            return _c('option', {
              key: itemIndex,
              domProps: {
                "value": item.value
              }
            }, [_vm._v(_vm._s(item.name))]);
          })], 2)];
        }
      }], null, true)
    })], 1), _c('td', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.ItemTypeCode,
        expression: "item.ItemTypeCode"
      }],
      staticClass: "form-control",
      attrs: {
        "type": "text"
      },
      domProps: {
        "value": item.ItemTypeCode
      },
      on: {
        "input": function ($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "ItemTypeCode", $event.target.value);
        }
      }
    })]), _c('td', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.Description,
        expression: "item.Description"
      }],
      staticClass: "form-control",
      attrs: {
        "type": "text"
      },
      domProps: {
        "value": item.Description
      },
      on: {
        "input": function ($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "Description", $event.target.value);
        }
      }
    })]), _c('td', [_c('div', {
      staticClass: "custom-control custom-radio custom-control-inline"
    }, [_c('div', {
      staticClass: "custom-control custom-radio custom-control-inline"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.IsContainer,
        expression: "item.IsContainer"
      }],
      staticClass: "form-check-input",
      attrs: {
        "type": "radio",
        "id": "isContainerYes",
        "value": "1"
      },
      domProps: {
        "checked": _vm._q(item.IsContainer, "1")
      },
      on: {
        "change": function ($event) {
          return _vm.$set(item, "IsContainer", "1");
        }
      }
    }), _vm._v("Yes "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.IsContainer,
        expression: "item.IsContainer"
      }],
      staticClass: "form-check-input",
      attrs: {
        "type": "radio",
        "id": "isContainerNo",
        "value": "0"
      },
      domProps: {
        "checked": _vm._q(item.IsContainer, "0")
      },
      on: {
        "change": function ($event) {
          return _vm.$set(item, "IsContainer", "0");
        }
      }
    }), _vm._v("No ")])])]), _c('td', [_c('div', {
      staticClass: "form-control pl-0 border-0 bg-transparent"
    }, [_c('Field', {
      attrs: {
        "name": "ContainerName",
        "rules": {
          'required': item.IsContainer == 1
        }
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
              value: item.ContainerNames,
              expression: "item.ContainerNames"
            }],
            class: {
              'form-control': true,
              'disabled': item.IsContainer == 0,
              'is-invalid': errors[0]
            },
            attrs: {
              "type": "text",
              "id": 'txtContainerName_' + index
            },
            domProps: {
              "value": item.ContainerNames
            },
            on: {
              "input": function ($event) {
                if ($event.target.composing) return;
                _vm.$set(item, "ContainerNames", $event.target.value);
              }
            }
          }), errors[0] ? _c('span', {
            staticClass: "invalid-feedback d-block",
            attrs: {
              "name": "ContainerName"
            }
          }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
        }
      }], null, true)
    })], 1)]), _c('td', [_c('div', {
      staticClass: "custom-control custom-radio custom-control-inline"
    }, [_c('div', {
      staticClass: "custom-control custom-radio custom-control-inline"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.IsAsset,
        expression: "item.IsAsset"
      }],
      staticClass: "form-check-input",
      attrs: {
        "type": "radio",
        "id": "IsAssetYes",
        "value": "1"
      },
      domProps: {
        "checked": _vm._q(item.IsAsset, "1")
      },
      on: {
        "change": function ($event) {
          return _vm.$set(item, "IsAsset", "1");
        }
      }
    }), _vm._v("Yes "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.IsAsset,
        expression: "item.IsAsset"
      }],
      staticClass: "form-check-input",
      attrs: {
        "type": "radio",
        "id": "IsAssetNo",
        "value": "0"
      },
      domProps: {
        "checked": _vm._q(item.IsAsset, "0")
      },
      on: {
        "change": function ($event) {
          return _vm.$set(item, "IsAsset", "0");
        }
      }
    }), _vm._v("No ")])])]), _c('td', [_c('div', {
      staticClass: "custom-control custom-radio custom-control-inline"
    }, [_c('div', {
      staticClass: "custom-control custom-radio custom-control-inline"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.IsConsumable,
        expression: "item.IsConsumable"
      }],
      staticClass: "form-check-input",
      attrs: {
        "type": "radio",
        "id": "IsConsumableYes",
        "value": "1"
      },
      domProps: {
        "checked": _vm._q(item.IsConsumable, "1")
      },
      on: {
        "change": function ($event) {
          return _vm.$set(item, "IsConsumable", "1");
        }
      }
    }), _vm._v("Yes "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.IsConsumable,
        expression: "item.IsConsumable"
      }],
      staticClass: "form-check-input",
      attrs: {
        "type": "radio",
        "id": "IsConsumableNo",
        "value": "0"
      },
      domProps: {
        "checked": _vm._q(item.IsConsumable, "0")
      },
      on: {
        "change": function ($event) {
          return _vm.$set(item, "IsConsumable", "0");
        }
      }
    }), _vm._v("No ")])])]), _c('td', [_c('div', {
      staticClass: "custom-control custom-radio custom-control-inline"
    }, [_c('div', {
      staticClass: "custom-control custom-radio custom-control-inline"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.IsLicense,
        expression: "item.IsLicense"
      }],
      staticClass: "form-check-input",
      attrs: {
        "type": "radio",
        "id": "IsLicenseYes",
        "value": "1"
      },
      domProps: {
        "checked": _vm._q(item.IsLicense, "1")
      },
      on: {
        "change": function ($event) {
          return _vm.$set(item, "IsLicense", "1");
        }
      }
    }), _vm._v("Yes "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.IsLicense,
        expression: "item.IsLicense"
      }],
      staticClass: "form-check-input",
      attrs: {
        "type": "radio",
        "id": "IsLicenseNo",
        "value": "0"
      },
      domProps: {
        "checked": _vm._q(item.IsLicense, "0")
      },
      on: {
        "change": function ($event) {
          return _vm.$set(item, "IsLicense", "0");
        }
      }
    }), _vm._v("No ")])])]), _c('td', [_c('div', {
      staticClass: "custom-control custom-radio custom-control-inline"
    }, [_c('div', {
      staticClass: "custom-control custom-radio custom-control-inline"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.IsSpare,
        expression: "item.IsSpare"
      }],
      staticClass: "form-check-input",
      attrs: {
        "type": "radio",
        "id": "IsSpareYes",
        "value": "1"
      },
      domProps: {
        "checked": _vm._q(item.IsSpare, "1")
      },
      on: {
        "change": function ($event) {
          return _vm.$set(item, "IsSpare", "1");
        }
      }
    }), _vm._v("Yes "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.IsSpare,
        expression: "item.IsSpare"
      }],
      staticClass: "form-check-input",
      attrs: {
        "type": "radio",
        "id": "IsSpareNo",
        "value": "0"
      },
      domProps: {
        "checked": _vm._q(item.IsSpare, "0")
      },
      on: {
        "change": function ($event) {
          return _vm.$set(item, "IsSpare", "0");
        }
      }
    }), _vm._v("No ")])])]), _c('td', [_c('div', {
      staticClass: "custom-control custom-radio custom-control-inline"
    }, [_c('div', {
      staticClass: "custom-control custom-radio custom-control-inline"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.IsTransferable,
        expression: "item.IsTransferable"
      }],
      staticClass: "form-check-input",
      attrs: {
        "type": "radio",
        "id": "IsTransferableYes",
        "value": "1"
      },
      domProps: {
        "checked": _vm._q(item.IsTransferable, "1")
      },
      on: {
        "change": function ($event) {
          return _vm.$set(item, "IsTransferable", "1");
        }
      }
    }), _vm._v("Yes "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.IsTransferable,
        expression: "item.IsTransferable"
      }],
      staticClass: "form-check-input",
      attrs: {
        "type": "radio",
        "id": "IsTransferableNo",
        "value": "0"
      },
      domProps: {
        "checked": _vm._q(item.IsTransferable, "0")
      },
      on: {
        "change": function ($event) {
          return _vm.$set(item, "IsTransferable", "0");
        }
      }
    }), _vm._v("No ")])])]), _c('td', [_c('div', {
      staticClass: "custom-control custom-radio custom-control-inline"
    }, [_c('div', {
      staticClass: "custom-control custom-radio custom-control-inline"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.IsSelfCheckOut,
        expression: "item.IsSelfCheckOut"
      }],
      staticClass: "form-check-input",
      attrs: {
        "type": "radio",
        "id": "IsSelfCheckOutYes",
        "value": "1"
      },
      domProps: {
        "checked": _vm._q(item.IsSelfCheckOut, "1")
      },
      on: {
        "change": function ($event) {
          return _vm.$set(item, "IsSelfCheckOut", "1");
        }
      }
    }), _vm._v("Yes "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.IsSelfCheckOut,
        expression: "item.IsSelfCheckOut"
      }],
      staticClass: "form-check-input",
      attrs: {
        "type": "radio",
        "id": "IsSelfCheckOutNo",
        "value": "0"
      },
      domProps: {
        "checked": _vm._q(item.IsSelfCheckOut, "0")
      },
      on: {
        "change": function ($event) {
          return _vm.$set(item, "IsSelfCheckOut", "0");
        }
      }
    }), _vm._v("No ")])])]), _c('td', [_c('div', {
      staticClass: "custom-control custom-radio custom-control-inline"
    }, [_c('div', {
      staticClass: "custom-control custom-radio custom-control-inline"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.IsPenalty,
        expression: "item.IsPenalty"
      }],
      staticClass: "form-check-input",
      attrs: {
        "type": "radio",
        "id": "IsPenaltyYes",
        "value": "1"
      },
      domProps: {
        "checked": _vm._q(item.IsPenalty, "1")
      },
      on: {
        "change": function ($event) {
          return _vm.$set(item, "IsPenalty", "1");
        }
      }
    }), _vm._v("Yes "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.IsPenalty,
        expression: "item.IsPenalty"
      }],
      staticClass: "form-check-input",
      attrs: {
        "type": "radio",
        "id": "IsPenaltyNo",
        "value": "0"
      },
      domProps: {
        "checked": _vm._q(item.IsPenalty, "0")
      },
      on: {
        "change": function ($event) {
          return _vm.$set(item, "IsPenalty", "0");
        }
      }
    }), _vm._v("No ")])])]), _c('td', {
      staticClass: "penalityStatus"
    }, [_c('multiselect', {
      attrs: {
        "options": _vm.OnPenaltyOnStatusList,
        "multiple": true,
        "placeholder": "Select",
        "track-by": "value",
        "label": "name"
      },
      model: {
        value: _vm.selectedPenaltyTypes[index],
        callback: function ($$v) {
          _vm.$set(_vm.selectedPenaltyTypes, index, $$v);
        },
        expression: "selectedPenaltyTypes[index]"
      }
    })], 1), _c('td', [_c('div', {
      staticClass: "custom-control custom-radio custom-control-inline"
    }, [_c('div', {
      staticClass: "custom-control custom-radio custom-control-inline"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.IsPenaltyOnOverdue,
        expression: "item.IsPenaltyOnOverdue"
      }],
      staticClass: "form-check-input",
      attrs: {
        "type": "radio",
        "id": "IsPenaltyOnOverdueYes",
        "value": "1"
      },
      domProps: {
        "checked": _vm._q(item.IsPenaltyOnOverdue, "1")
      },
      on: {
        "change": function ($event) {
          return _vm.$set(item, "IsPenaltyOnOverdue", "1");
        }
      }
    }), _vm._v("Yes "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.IsPenaltyOnOverdue,
        expression: "item.IsPenaltyOnOverdue"
      }],
      staticClass: "form-check-input",
      attrs: {
        "type": "radio",
        "id": "IsPenaltyOnOverdueNo",
        "value": "0"
      },
      domProps: {
        "checked": _vm._q(item.IsPenaltyOnOverdue, "0")
      },
      on: {
        "change": function ($event) {
          return _vm.$set(item, "IsPenaltyOnOverdue", "0");
        }
      }
    }), _vm._v("No ")])])]), _c('td', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.GracePeriod,
        expression: "item.GracePeriod"
      }],
      class: {
        'form-control': true,
        'disabled': item.IsPenaltyOnOverdue == 0
      },
      attrs: {
        "type": "text"
      },
      domProps: {
        "value": item.GracePeriod
      },
      on: {
        "input": function ($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "GracePeriod", $event.target.value);
        }
      }
    })]), _c('td', [_c('div', {
      staticClass: "custom-control custom-radio custom-control-inline"
    }, [_c('div', {
      staticClass: "custom-control custom-radio custom-control-inline"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.IsEnableTerms,
        expression: "item.IsEnableTerms"
      }],
      staticClass: "form-check-input",
      attrs: {
        "type": "radio",
        "id": "IsEnableTermsYes",
        "value": "1"
      },
      domProps: {
        "checked": _vm._q(item.IsEnableTerms, "1")
      },
      on: {
        "change": function ($event) {
          return _vm.$set(item, "IsEnableTerms", "1");
        }
      }
    }), _vm._v("Yes "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.IsEnableTerms,
        expression: "item.IsEnableTerms"
      }],
      staticClass: "form-check-input",
      attrs: {
        "type": "radio",
        "id": "IsEnableTermsNo",
        "value": "0"
      },
      domProps: {
        "checked": _vm._q(item.IsEnableTerms, "0")
      },
      on: {
        "change": function ($event) {
          return _vm.$set(item, "IsEnableTerms", "0");
        }
      }
    }), _vm._v("No ")])])]), _c('td', [_c('div', {
      staticClass: "custom-control custom-radio custom-control-inline"
    }, [_c('div', {
      staticClass: "custom-control custom-radio custom-control-inline"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.IsEmployeeAcceptance,
        expression: "item.IsEmployeeAcceptance"
      }],
      staticClass: "form-check-input",
      attrs: {
        "type": "radio",
        "id": "IsEmployeeAcceptanceYes",
        "value": "1"
      },
      domProps: {
        "checked": _vm._q(item.IsEmployeeAcceptance, "1")
      },
      on: {
        "change": function ($event) {
          return _vm.$set(item, "IsEmployeeAcceptance", "1");
        }
      }
    }), _vm._v("Yes "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.IsEmployeeAcceptance,
        expression: "item.IsEmployeeAcceptance"
      }],
      staticClass: "form-check-input",
      attrs: {
        "type": "radio",
        "id": "IsEmployeeAcceptanceNo",
        "value": "0"
      },
      domProps: {
        "checked": _vm._q(item.IsEmployeeAcceptance, "0")
      },
      on: {
        "change": function ($event) {
          return _vm.$set(item, "IsEmployeeAcceptance", "0");
        }
      }
    }), _vm._v("No ")])])]), _c('td', [_c('div', {
      staticClass: "custom-control custom-radio custom-control-inline"
    }, [_c('div', {
      staticClass: "custom-control custom-radio custom-control-inline"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.InsurancePolicy,
        expression: "item.InsurancePolicy"
      }],
      staticClass: "form-check-input",
      attrs: {
        "type": "radio",
        "id": "InsurancePolicyYes",
        "value": "1"
      },
      domProps: {
        "checked": _vm._q(item.InsurancePolicy, "1")
      },
      on: {
        "change": function ($event) {
          return _vm.$set(item, "InsurancePolicy", "1");
        }
      }
    }), _vm._v("Yes "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.InsurancePolicy,
        expression: "item.InsurancePolicy"
      }],
      staticClass: "form-check-input",
      attrs: {
        "type": "radio",
        "id": "InsurancePolicyNo",
        "value": "0"
      },
      domProps: {
        "checked": _vm._q(item.InsurancePolicy, "0")
      },
      on: {
        "change": function ($event) {
          return _vm.$set(item, "InsurancePolicy", "0");
        }
      }
    }), _vm._v("No ")])])]), _c('td', [_c('div', {
      staticClass: "custom-control custom-radio custom-control-inline"
    }, [_c('div', {
      staticClass: "custom-control custom-radio custom-control-inline"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.IsCalibration,
        expression: "item.IsCalibration"
      }],
      staticClass: "form-check-input",
      attrs: {
        "type": "radio",
        "id": "IsCalibrationYes",
        "value": "1"
      },
      domProps: {
        "checked": _vm._q(item.IsCalibration, "1")
      },
      on: {
        "change": function ($event) {
          return _vm.$set(item, "IsCalibration", "1");
        }
      }
    }), _vm._v("Yes "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.IsCalibration,
        expression: "item.IsCalibration"
      }],
      staticClass: "form-check-input",
      attrs: {
        "type": "radio",
        "id": "IsCalibrationNo",
        "value": "0"
      },
      domProps: {
        "checked": _vm._q(item.IsCalibration, "0")
      },
      on: {
        "change": function ($event) {
          return _vm.$set(item, "IsCalibration", "0");
        }
      }
    }), _vm._v("No ")])])]), _c('td', [_c('div', {
      staticClass: "custom-control custom-radio custom-control-inline"
    }, [_c('div', {
      staticClass: "custom-control custom-radio custom-control-inline"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.IsItemCost,
        expression: "item.IsItemCost"
      }],
      staticClass: "form-check-input",
      attrs: {
        "type": "radio",
        "id": "IsItemCostYes",
        "value": "1"
      },
      domProps: {
        "checked": _vm._q(item.IsItemCost, "1")
      },
      on: {
        "change": function ($event) {
          return _vm.$set(item, "IsItemCost", "1");
        }
      }
    }), _vm._v("Yes "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.IsItemCost,
        expression: "item.IsItemCost"
      }],
      staticClass: "form-check-input",
      attrs: {
        "type": "radio",
        "id": "IsItemCostNo",
        "value": "0"
      },
      domProps: {
        "checked": _vm._q(item.IsItemCost, "0")
      },
      on: {
        "change": function ($event) {
          return _vm.$set(item, "IsItemCost", "0");
        }
      }
    }), _vm._v("No ")])])]), _c('td', [_c('div', {
      staticClass: "custom-control custom-radio custom-control-inline"
    }, [_c('div', {
      staticClass: "custom-control custom-radio custom-control-inline"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.IsWarranty,
        expression: "item.IsWarranty"
      }],
      staticClass: "form-check-input",
      attrs: {
        "type": "radio",
        "id": "IsWarrantyYes",
        "value": "1"
      },
      domProps: {
        "checked": _vm._q(item.IsWarranty, "1")
      },
      on: {
        "change": function ($event) {
          return _vm.$set(item, "IsWarranty", "1");
        }
      }
    }), _vm._v("Yes "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.IsWarranty,
        expression: "item.IsWarranty"
      }],
      staticClass: "form-check-input",
      attrs: {
        "type": "radio",
        "id": "IsWarrantyNo",
        "value": "0"
      },
      domProps: {
        "checked": _vm._q(item.IsWarranty, "0")
      },
      on: {
        "change": function ($event) {
          return _vm.$set(item, "IsWarranty", "0");
        }
      }
    }), _vm._v("No ")])])]), _c('td', [_c('div', {
      staticClass: "custom-control custom-radio custom-control-inline"
    }, [_c('div', {
      staticClass: "custom-control custom-radio custom-control-inline"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.IsDepreciable,
        expression: "item.IsDepreciable"
      }],
      staticClass: "form-check-input",
      attrs: {
        "type": "radio",
        "id": "IsDepreciableYes",
        "value": "1"
      },
      domProps: {
        "checked": _vm._q(item.IsDepreciable, "1")
      },
      on: {
        "change": function ($event) {
          return _vm.$set(item, "IsDepreciable", "1");
        }
      }
    }), _vm._v("Yes "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.IsDepreciable,
        expression: "item.IsDepreciable"
      }],
      staticClass: "form-check-input",
      attrs: {
        "type": "radio",
        "id": "IsDepreciableNo",
        "value": "0"
      },
      domProps: {
        "checked": _vm._q(item.IsDepreciable, "0")
      },
      on: {
        "change": function ($event) {
          return _vm.$set(item, "IsDepreciable", "0");
        }
      }
    }), _vm._v("No ")])])]), _c('td', [_c('div', {
      staticClass: "custom-control custom-radio custom-control-inline"
    }, [_c('div', {
      staticClass: "custom-control custom-radio custom-control-inline"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.IsGPSTracking,
        expression: "item.IsGPSTracking"
      }],
      staticClass: "form-check-input",
      attrs: {
        "type": "radio",
        "id": "IsGPSTrackingYes",
        "value": "true"
      },
      domProps: {
        "checked": _vm._q(item.IsGPSTracking, "true")
      },
      on: {
        "change": function ($event) {
          return _vm.$set(item, "IsGPSTracking", "true");
        }
      }
    }), _vm._v("Yes "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.IsGPSTracking,
        expression: "item.IsGPSTracking"
      }],
      staticClass: "form-check-input",
      attrs: {
        "type": "radio",
        "id": "IsGPSTrackingNo",
        "value": "false"
      },
      domProps: {
        "checked": _vm._q(item.IsGPSTracking, "false")
      },
      on: {
        "change": function ($event) {
          return _vm.$set(item, "IsGPSTracking", "false");
        }
      }
    }), _vm._v("No ")])])]), _c('td', [_c('div', {
      staticClass: "custom-control custom-radio custom-control-inline"
    }, [_c('div', {
      staticClass: "custom-control custom-radio custom-control-inline"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.IsFleetMgmt,
        expression: "item.IsFleetMgmt"
      }],
      staticClass: "form-check-input",
      attrs: {
        "type": "radio",
        "id": "IsFleetMgmtYes",
        "value": "true"
      },
      domProps: {
        "checked": _vm._q(item.IsFleetMgmt, "true")
      },
      on: {
        "change": function ($event) {
          return _vm.$set(item, "IsFleetMgmt", "true");
        }
      }
    }), _vm._v("Yes "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.IsFleetMgmt,
        expression: "item.IsFleetMgmt"
      }],
      staticClass: "form-check-input",
      attrs: {
        "type": "radio",
        "id": "IsFleetMgmtNo",
        "value": "false"
      },
      domProps: {
        "checked": _vm._q(item.IsFleetMgmt, "false")
      },
      on: {
        "change": function ($event) {
          return _vm.$set(item, "IsFleetMgmt", "false");
        }
      }
    }), _vm._v("No ")])])])]) : _vm._e()]);
  })], 2), _vm.ProductTypedata.length == '0' ? _c('div', {
    staticClass: "text-danger text-center no-record",
    attrs: {
      "colspan": "10"
    }
  }, [_vm._v(" " + _vm._s(_vm.$t('NoRecordfound')) + " ")]) : _vm._e()])], 1), _c('div', {
    staticClass: "row flex-row-reverse"
  }, [_c('div', {
    staticClass: "col-lg-6 text-right"
  }, [_c('div', {
    staticClass: "search-btm-btn"
  }, [_c('a', {
    staticClass: "btn btn-success formbtn widthhalf",
    attrs: {
      "id": "aSubmit",
      "href": "javascript:;",
      "tooltip": "Submit",
      "title": "Submit"
    },
    on: {
      "click": function ($event) {
        return _vm.SubmitData();
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-save pr-2"
  }), _vm._v("Submit")]), _vm._v("  "), _c('a', {
    staticClass: "btn btn-danger formbtn my-2",
    attrs: {
      "id": "aCancel",
      "href": "javascript:;",
      "tooltip": "Cancel",
      "title": "Cancel"
    },
    on: {
      "click": _vm.onCancel
    }
  }, [_c('i', {
    staticClass: "fa fa-close pr-2"
  }), _vm._v("Cancel")])])])])])], 1);
};
var ProductTypeSamplevue_type_template_id_7f413f81_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/ProductTypeSample.vue?vue&type=template&id=7f413f81&

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// EXTERNAL MODULE: ./node_modules/vue-multiselect/dist/vue-multiselect.min.js
var vue_multiselect_min = __webpack_require__("8e5f");
var vue_multiselect_min_default = /*#__PURE__*/__webpack_require__.n(vue_multiselect_min);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/ProductTypeSample.vue?vue&type=script&lang=js&



/* harmony default export */ var ProductTypeSamplevue_type_script_lang_js_ = ({
  props: {
    components: {
      Multiselect: vue_multiselect_min_default.a
    },
    filepath: {
      type: String
    }
  },
  data() {
    return {
      isLoading: false,
      StatusListData: [],
      ProductTypedata: [],
      OnPenaltyOnStatusList: [],
      AssetReplacementTypeDDL: [{
        name: 'Damaged',
        value: 12396
      }, {
        name: 'In Stocck',
        value: 12396
      }, {
        name: 'Lost',
        value: 2171
      }, {
        name: 'Stolen',
        value: 12398
      }],
      StatusData: [],
      ExcelListData: [],
      selectedPenaltyTypes: []
    };
  },
  async created() {
    var vm = this;
    await vm.ImportProductType();
    await vm.GetStatusList();
    await vm.OnPenaltyOnStatus(true);
  },
  methods: {
    onCancel: function () {
      this.$router.push({
        name: 'ProductType'
      });
    },
    OnPenaltyOnStatus(ev) {
      var vm = this;
      vm.isLoading = true;
      vm.AssetReplacementTypeDDL.forEach(itm => {
        vm.OnPenaltyOnStatusList.push({
          name: itm.name,
          value: itm.value
        });
      });
      vm.isLoading = false;
    },
    ImportProductType: function () {
      var vm = this;
      vm.isLoading = true;
      var count = 0;
      //vm.ProductTypedata=[];
      var url = `filepath=${vm.filepath}&typeName='ProductType'`;
      DataService["a" /* default */].BulkUploadProducytType(url).then(response => {
        if (response.data != null) {
          vm.ProductTypedata = response.data;
          vm.ProcessPenaltyTypes();
          vm.isLoading = false;
        } else {
          vm.ShowAlert(vm.$t('InValidFileUpload'), "warning", vm.$t('Alert'));
        }
      });
      vm.isLoading = false;
    },
    ProcessPenaltyTypes: function () {
      if (this.ProductTypedata && this.ProductTypedata.length > 0) {
        const updatedSelectedPenaltyTypes = [];
        this.ProductTypedata.forEach(item => {
          if (typeof item.PenaltyType === 'string' && item.PenaltyType.length > 0) {
            const penaltyTypeIds = item.PenaltyType.split(',');
            const filteredOptions = this.OnPenaltyOnStatusList.filter(option => penaltyTypeIds.includes(option.value.toString()));
            // Map filtered options to create an array of objects with parsed integer values
            const selectedTypes = filteredOptions.map(option => ({
              value: parseInt(option.value),
              name: option.name ? option.name : null
            }));
            updatedSelectedPenaltyTypes.push(selectedTypes);
          } else {
            updatedSelectedPenaltyTypes.push([]);
          }
        });
        this.selectedPenaltyTypes = updatedSelectedPenaltyTypes;
      } else {
        this.selectedPenaltyTypes = [];
      }
    },
    GetStatusList() {
      var vm = this;
      vm.isLoading = true;
      var url = `langCode=en&statusType=AssetManagement&hasglobal=true`;
      DataService["a" /* default */].GetStatusList(url).then(response => {
        var StatusLists = JSON.parse(response.data);
        StatusLists.forEach((item, index) => {
          if (item.STATUS == 'Active' || item.STATUS == 'Inactive') {
            var objStatus = {
              value: item.STATUS_ID,
              name: item.STATUS
            };
            vm.StatusListData.push(objStatus);
          }
        });
        vm.isLoading = false;
      });
    },
    SubmitData() {
      var vm = this;
      vm.isLoading = true;
      vm.$refs.ProductTypeimport.validate().then(result => {
        if (result) {
          vm.ProductTypedata.forEach((item, index) => {
            vm.StatusData = vm.StatusListData.find(x => x.value === item.StatusID);
            const selectedNames = vm.selectedPenaltyTypes[index].map(option => option.name).filter(name => name) // Filter out empty or falsy names
            .join(',');
            const obj = {
              ItemTypeName: item.ItemTypeName,
              StatusID: parseInt(vm.StatusData.value),
              ItemTypeCode: item.ItemTypeCode,
              Description: item.Description,
              IsContainer: item.IsContainer,
              ContainerNames: item.ContainerNames,
              IsAsset: item.IsAsset,
              IsConsumable: item.IsConsumable,
              IsLicense: item.IsLicense,
              IsSpare: item.IsSpare,
              IsTransferable: item.IsTransferable,
              IsSelfCheckOut: item.IsSelfCheckOut,
              IsPenalty: item.IsPenalty,
              IsEnableTerms: item.IsEnableTerms,
              IsEmployeeAcceptance: item.IsEmployeeAcceptance,
              InsurancePolicy: item.InsurancePolicy,
              IsCalibration: item.IsCalibration,
              IsItemCost: item.IsItemCost,
              IsWarranty: item.IsWarranty,
              IsDepreciable: item.IsDepreciable,
              CompanyID: item.CompanyID,
              UserID: item.UserID,
              batchid: item.batchid,
              IsPenaltyOnOverdue: item.IsPenaltyOnOverdue,
              PenaltyType: selectedNames,
              // item.PenaltyType ,
              GracePeriod: item.GracePeriod,
              IsGPSTracking: item.IsGPSTracking,
              IsFleetMgmt: item.IsFleetMgmt
            };
            vm.ExcelListData.push(obj);
          });
          var JsonObj = JSON.stringify(vm.ExcelListData);
          DataService["a" /* default */].ProductTypeBulkUploadPost(JsonObj).then(response => {
            if (response.data.status == '0') {
              var valueContain = response.data.msg.split('_')[0];
            }
            if (response.data.status == "1") {
              var RetMeg = response.data.msg;
              vm.ShowAlert(vm.$t(RetMeg), "success", vm.$t('Alert'));
              this.$router.push({
                name: 'ProductType'
              });
            } else if (valueContain == 'ItemsAlreadyExist') {
              vm.ShowAlert(vm.$t('ImportAssetTypeDuplicate_items') + response.data.msg.split('_')[1] + ' ' + vm.$t('ImportAssetTypeDuplicate_status'), "failure", vm.$t('Alert'));
              vm.ExcelListData = [];
              vm.ProductTypedata = [];
              this.$router.push({
                name: 'ProductType'
              });
            } else {
              vm.ShowAlert(vm.$t('UnknownError'), "failure", vm.$t('Alert'));
            }
          });
        } else {
          vm.ShowAlert(vm.$t('ValidationHighlights'), "failure", vm.$t('Alert'));
          vm.isLoading = false;
        }
      });
      vm.isLoading = false;
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/ProductTypeSample.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_ProductTypeSamplevue_type_script_lang_js_ = (ProductTypeSamplevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Modal/ProductTypeSample.vue?vue&type=style&index=0&id=7f413f81&prod&lang=css&
var ProductTypeSamplevue_type_style_index_0_id_7f413f81_prod_lang_css_ = __webpack_require__("b8e6");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Modal/ProductTypeSample.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Modal_ProductTypeSamplevue_type_script_lang_js_,
  ProductTypeSamplevue_type_template_id_7f413f81_render,
  ProductTypeSamplevue_type_template_id_7f413f81_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ProductTypeSample = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Asset/ImportItemType.vue?vue&type=script&lang=js&



/* harmony default export */ var ImportItemTypevue_type_script_lang_js_ = ({
  components: {
    ProductTypeSample: ProductTypeSample
  },
  data: function () {
    return {
      isLoading: false,
      file: null,
      filepath: '',
      excelFileName: null,
      reqfrom: null,
      expListing: null,
      trips: [],
      categories: [],
      projects: [],
      currencies: [],
      tasks: [],
      expLimitJsonBack: [],
      check_EXPENSE_LIMIT: false,
      userDateFormat: null,
      files: new FormData(),
      value: null,
      attachmentName: '',
      ShowImportProductType: false
    };
  },
  methods: {
    onCancel: function () {
      this.$router.push({
        name: 'ProductType'
      });
    },
    setFile: function (e) {
      this.attachmentName = e.target.files[0].name;
      this.file = e.target.files[0];
      this.excelFileName = e.target.files[0].name;
    },
    Clear: function () {
      this.attachmentName = '';
    },
    UploadProductSampleFile() {
      debugger;
      var vm = this;
      vm.$refs.ItemTypeForm.validate().then(result => {
        debugger;
        if (result) {
          if ($("#flAvatar").val() != "") {
            var file = $("#flAvatar").val().split('\\').pop();
            var allowFileTypesExt = '.xls,.xlsx';
            var extension = file.replace(/^.*\./, '');
            if (!allowFileTypesExt.includes(extension)) {
              vm.ShowAlert(vm.$t('InvalidSampleFileUploadMsg', [file, allowFileTypesExt]), "warning", true, vm.$t('Alert'));
            } else {
              vm.confirmR(vm.$t("bulkImportConfirmationMsg"), true, vm.$t("Delete") + "  " + vm.$t("REPORT_ID"), function () {
                const formdata = new FormData();
                formdata.append("file", vm.file);
                vm.isLoading = true;
                DataService["a" /* default */].ImportProductSamplePost(formdata).then(function (response) {
                  vm.isLoading = false;
                  var data = response.data;
                  if (data.Status == 0) {
                    vm.filepath = data.Msg;
                    vm.ShowImportProductType = vm.filepath != '' ? true : false;
                  } else {
                    vm.ShowAlert(data.Msg, "warning", true, vm.$t("Alert"));
                  }
                });
                vm.isLoading = false;
              });
            }
          } else {
            vm.ShowAlert(vm.$t("PleaseUploadExcelFile"), "warning", true, vm.$t("Alert"));
          }
        }
      });
      vm.$emit('ImportProduct');
    }
  }
});
// CONCATENATED MODULE: ./src/views/Asset/ImportItemType.vue?vue&type=script&lang=js&
 /* harmony default export */ var Asset_ImportItemTypevue_type_script_lang_js_ = (ImportItemTypevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/Asset/ImportItemType.vue





/* normalize component */

var ImportItemType_component = Object(componentNormalizer["a" /* default */])(
  Asset_ImportItemTypevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ImportItemType = __webpack_exports__["default"] = (ImportItemType_component.exports);

/***/ }),

/***/ "f0b3":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("27e4");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("314a1493", content, true, {"sourceMap":false,"shadowMode":false});

/***/ })

}]);
//# sourceMappingURL=chunk-caa71e00.js.map