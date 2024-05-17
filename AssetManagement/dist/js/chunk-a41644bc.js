(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-a41644bc"],{

/***/ "1786":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetCatalog/ImportAssetItem.vue?vue&type=template&id=7fbac769&
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
  }, [_vm._v(_vm._s(_vm.$t('Import Product')))]), _c('span', {
    staticClass: "p-actions float-right"
  }, [_c('a', {
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
    staticClass: "user-guide-custom d-none"
  }, [_vm._v(" " + _vm._s(_vm.$t('User_Guide_ProductSampleImport')) + " ")]), _c('div', {
    staticClass: "border p-3"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Download Product Sample File')) + ":")]), _c('div', {
    staticClass: "input-group mb-3"
  }, [_c('div', {
    staticClass: "form-control"
  }, [_c('i', {
    staticClass: "fa fa-file-excel-o pr-1 text-success"
  }), _vm._v(_vm._s(_vm.$t('ProductSample')) + ".xls ")]), _vm._m(0)])])]), _c('div', {
    staticClass: "col-lg-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Upload a File')) + ":"), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _c('div', {
    staticClass: "input-group"
  }, [_c('div', {
    staticClass: "custom-file ProductSampleFile"
  }, [_c('input', {
    staticStyle: {
      "position": "absolute",
      "clip": "rect(0px, 0px, 0px, 0px)"
    },
    attrs: {
      "type": "file",
      "name": "FileSrc",
      "id": "flAvatar",
      "multiple": "true",
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
    staticClass: "form-control disabled",
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
  })])])])])])])])])]), _c('div', {
    staticClass: "row flex-row-reverse"
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
  }), _vm._v(_vm._s(_vm.$t('Import Product Sample File')))]), _c('a', {
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
  }), _vm._v("Cancel")])])])]), _vm.ShowImportProduct ? _c('ImportProduct', {
    ref: "myChild",
    attrs: {
      "filepath": _vm.filepath
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "input-group-append downloadProductSample"
  }, [_c('span', {
    staticClass: "input-group-text",
    attrs: {
      "id": "basic-addon2"
    }
  }, [_c('a', {
    attrs: {
      "href": "https://cogniterblob.blob.core.windows.net/global/SampleFiles/sample-file-asset-product-import.xls",
      "download": ""
    }
  }, [_c('i', {
    staticClass: "fa fa-download text-primary"
  })])])]);
}];

// CONCATENATED MODULE: ./src/views/AssetCatalog/ImportAssetItem.vue?vue&type=template&id=7fbac769&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/ImportProduct.vue?vue&type=template&id=741fe449&scoped=true&
var ImportProductvue_type_template_id_741fe449_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_c('loader', {
    attrs: {
      "is-visible": _vm.isLoading
    }
  }), _c('div', {
    staticClass: "listing mt-2"
  }, [_c('div', {
    staticClass: "col-lg-12 float-left px-0"
  }, [_c('div', {
    staticClass: "table-responsive"
  }, [_c('Form', {
    ref: "Productimport"
  }, [_c('table', {
    staticClass: "table table-bordered dt-responsive nowrap mt-0",
    attrs: {
      "id": "tblExpList"
    }
  }, [_c('thead', {
    staticClass: "thead-bg"
  }, [_c('tr', [_c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "156px",
      "min-width": "156px",
      "max-width": "156px"
    },
    attrs: {
      "id": "th-PRODUCTTYPE"
    }
  }, [_c('span', {
    staticClass: "d-inline-block",
    staticStyle: {
      "min-width": "138px"
    }
  }, [_vm._v("Product Type"), _c('span', {
    staticClass: "d-inline-block"
  }, [_c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])])]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-PRODUCTTYPE-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "156px",
      "min-width": "156px",
      "max-width": "156px"
    },
    attrs: {
      "id": "th-STATUS"
    }
  }, [_c('span', {
    staticClass: "d-inline-block",
    staticStyle: {
      "min-width": "67px"
    }
  }, [_vm._v("Status"), _c('span', {
    staticClass: "d-inline-block"
  }, [_c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])])]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-STATUS-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "156px",
      "min-width": "156px",
      "max-width": "156px"
    },
    attrs: {
      "id": "th-PRODUCTNAME"
    }
  }, [_c('span', {
    staticClass: "d-inline-block",
    staticStyle: {
      "min-width": "138px"
    }
  }, [_vm._v("Product Name"), _c('span', {
    staticClass: "d-inline-block"
  }, [_c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])])]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-PRODUCTNAME-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "144px",
      "min-width": "144px",
      "max-width": "144px"
    },
    attrs: {
      "id": "th-PRODUCTCODE"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "126px"
    }
  }, [_vm._v("Product Code")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-PRODUCTCODE-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "156px",
      "min-width": "156px",
      "max-width": "156px"
    },
    attrs: {
      "id": "th-BARCODETYPE"
    }
  }, [_c('span', {
    staticClass: "d-inline-block",
    staticStyle: {
      "min-width": "138px"
    }
  }, [_vm._v("Barcode Type"), _c('span', {
    staticClass: "d-inline-block"
  }, [_c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])])]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-BARCODETYPE-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "320px",
      "min-width": "320px",
      "max-width": "320px"
    },
    attrs: {
      "id": "th-DESCRIPTION"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "114px"
    }
  }, [_vm._v("Description")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-DESCRIPTION-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "132px",
      "min-width": "132px",
      "max-width": "132px"
    },
    attrs: {
      "id": "th-CALIBRATION"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "114px"
    }
  }, [_vm._v("Calibration")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-CALIBRATION-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "156px",
      "min-width": "156px",
      "max-width": "156px"
    },
    attrs: {
      "id": "th-AUDIT"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "67px"
    }
  }, [_vm._v("Audit")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-AUDIT-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "156px",
      "min-width": "156px",
      "max-width": "156px"
    },
    attrs: {
      "id": "th-IMAGECAPTURE"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "138px"
    }
  }, [_vm._v("Image Capture")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-IMAGECAPTURE-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "108px",
      "min-width": "108px",
      "max-width": "108px"
    },
    attrs: {
      "id": "th-ISUNIQUE"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "90px"
    }
  }, [_vm._v("Is Unique")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-ISUNIQUE-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "156px",
      "min-width": "200px",
      "max-width": "200px"
    },
    attrs: {
      "id": "th-LOCATION"
    }
  }, [_c('span', {
    staticClass: "d-inline-block",
    staticStyle: {
      "min-width": "90px"
    }
  }, [_vm._v("Location"), _c('span', {
    staticClass: "d-inline-block"
  }, [_c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])])]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-LOCATION-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "108px",
      "min-width": "108px",
      "max-width": "108px"
    },
    attrs: {
      "id": "th-QUANTITY"
    }
  }, [_c('span', {
    staticClass: "d-inline-block",
    staticStyle: {
      "min-width": "90px"
    }
  }, [_vm._v("Quantity"), _c('span', {
    staticClass: "d-inline-block"
  }, [_c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])])]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-QUANTITY-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "85px",
      "min-width": "85px",
      "max-width": "85px"
    },
    attrs: {
      "id": "th-MODEL"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "67px"
    }
  }, [_vm._v("Model")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-MODEL-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "144px",
      "min-width": "144px",
      "max-width": "144px"
    },
    attrs: {
      "id": "th-MANUFACTURER"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "126px"
    }
  }, [_vm._v("Manufacturer")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-MANUFACTURER-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "85px",
      "min-width": "85px",
      "max-width": "85px"
    },
    attrs: {
      "id": "th-VENDOR"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "67px"
    }
  }, [_vm._v("Vendor")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-VENDOR-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "192px",
      "min-width": "192px",
      "max-width": "192px"
    },
    attrs: {
      "id": "th-PRODUCTCOSTQTY"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "174px"
    }
  }, [_vm._v("Product Cost/Qty")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-PRODUCTCOSTQTY-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "168px",
      "min-width": "168px",
      "max-width": "168px"
    },
    attrs: {
      "id": "th-PURCHASEORDER"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("Purchase Order")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-PURCHASEORDER-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "156px",
      "min-width": "156px",
      "max-width": "156px"
    },
    attrs: {
      "id": "th-PURCHASEDATE"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "138px"
    }
  }, [_vm._v("Purchase Date")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-PURCHASEDATE-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "168px",
      "min-width": "168px",
      "max-width": "168px"
    },
    attrs: {
      "id": "th-INVOICENUMBER"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("Invoice Number")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-INVOICENUMBER-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "144px",
      "min-width": "144px",
      "max-width": "144px"
    },
    attrs: {
      "id": "th-INVOICEDATE"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "126px"
    }
  }, [_vm._v("Invoice Date")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-INVOICEDATE-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "180px",
      "min-width": "180px",
      "max-width": "180px"
    },
    attrs: {
      "id": "th-NAMEOFINSURER"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "162px"
    }
  }, [_vm._v("Name of Insurer")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-NAMEOFINSURER-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "240px",
      "min-width": "240px",
      "max-width": "240px"
    },
    attrs: {
      "id": "th-INSURANCEVALIDUPTO"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "222px"
    }
  }, [_vm._v("Insurance Valid Upto")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-INSURANCEVALIDUPTO-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "204px",
      "min-width": "204px",
      "max-width": "204px"
    },
    attrs: {
      "id": "th-WARRANTYDURATION"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "186px"
    }
  }, [_vm._v("Warranty Duration")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-WARRANTYDURATION-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "204px",
      "min-width": "204px",
      "max-width": "204px"
    },
    attrs: {
      "id": "th-DEPRECIATIONRULE"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "186px"
    }
  }, [_vm._v("Depreciation Rule")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-DEPRECIATIONRULE-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "144px",
      "min-width": "144px",
      "max-width": "144px"
    },
    attrs: {
      "id": "th-SALVAGECOST"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "126px"
    }
  }, [_vm._v("Salvage Cost")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-SALVAGECOST-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "156px",
      "min-width": "156px",
      "max-width": "156px"
    },
    attrs: {
      "id": "th-SERIALNUMBER"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "138px"
    }
  }, [_vm._v("Serial Number")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-SERIALNUMBER-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "85px",
      "min-width": "85px",
      "max-width": "85px"
    },
    attrs: {
      "id": "th-BARCODE"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "67px"
    }
  }, [_vm._v("Barcode")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-BARCODE-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })])])]), _c('tbody', _vm._l(_vm.Xdata, function (item, index) {
    return _c('tr', {
      key: index
    }, [_c('td', [_c('Field', {
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
          return [_c('select', {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: item.ItemTypeID,
              expression: "item.ItemTypeID"
            }],
            class: {
              'form-control': true,
              'is-invalid': errors[0]
            },
            attrs: {
              "name": 'ProductType' + index
            },
            on: {
              "change": function ($event) {
                var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                  return o.selected;
                }).map(function (o) {
                  var val = "_value" in o ? o._value : o.value;
                  return val;
                });
                _vm.$set(item, "ItemTypeID", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
              }
            }
          }, [_c('option', {
            attrs: {
              "value": ""
            }
          }, [_vm._v("Select")]), _vm._l(_vm.AssetType, function (pitem, pIndex) {
            return _c('option', {
              key: pIndex,
              domProps: {
                "value": pitem.ASSETID
              }
            }, [_vm._v(_vm._s(pitem.ASSETTYPE))]);
          })], 2)];
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
    })], 1), _c('td', [_c('Field', {
      attrs: {
        "name": 'ProductName' + index,
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
              value: item.Item_Name,
              expression: "item.Item_Name"
            }],
            class: {
              'form-control': true,
              'is-invalid': errors[0]
            },
            attrs: {
              "type": "text",
              "name": 'ProductName' + index
            },
            domProps: {
              "value": item.Item_Name
            },
            on: {
              "input": function ($event) {
                if ($event.target.composing) return;
                _vm.$set(item, "Item_Name", $event.target.value);
              }
            }
          })];
        }
      }], null, true)
    })], 1), _c('td', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.ItemCode,
        expression: "item.ItemCode"
      }],
      staticClass: "form-control",
      attrs: {
        "type": "text"
      },
      domProps: {
        "value": item.ItemCode
      },
      on: {
        "input": function ($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "ItemCode", $event.target.value);
        }
      }
    })]), _c('td', [_c('Field', {
      attrs: {
        "name": 'BarcodeType' + index,
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
              value: item.Barcode_Type,
              expression: "item.Barcode_Type"
            }],
            class: {
              'form-control': true,
              'is-invalid': errors[0]
            },
            attrs: {
              "name": 'BarcodeType' + index
            },
            on: {
              "change": function ($event) {
                var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                  return o.selected;
                }).map(function (o) {
                  var val = "_value" in o ? o._value : o.value;
                  return val;
                });
                _vm.$set(item, "Barcode_Type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
              }
            }
          }, [_c('option', {
            attrs: {
              "value": ""
            }
          }, [_vm._v("Select")]), _vm._l(_vm.BarcodeType, function (itm, index) {
            return _c('option', {
              key: index,
              domProps: {
                "value": itm.BARCODE_TYPE_ID == 1 ? 'Barcode' : 'QR'
              }
            }, [_vm._v(" " + _vm._s(itm.BARCODE_TYPE))]);
          })], 2)];
        }
      }], null, true)
    })], 1), _c('td', [_c('input', {
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
    })]), _c('td', [_c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.CalibrationValue,
        expression: "item.CalibrationValue"
      }],
      staticClass: "form-control",
      on: {
        "change": function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(item, "CalibrationValue", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c('option', {
      attrs: {
        "value": ""
      }
    }, [_vm._v("Select")]), _vm._l(_vm.CalibrationData, function (Citem, CalibrationIndex) {
      return _c('option', {
        key: CalibrationIndex,
        domProps: {
          "value": Citem.value
        }
      }, [_vm._v(_vm._s(Citem.name))]);
    })], 2)]), _c('td', [_c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.AuditValue,
        expression: "item.AuditValue"
      }],
      staticClass: "form-control",
      on: {
        "change": function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(item, "AuditValue", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c('option', {
      attrs: {
        "value": ""
      }
    }, [_vm._v("Select")]), _vm._l(_vm.AuditData, function (Aitem, AuditIndex) {
      return _c('option', {
        key: AuditIndex,
        domProps: {
          "value": Aitem.value
        }
      }, [_vm._v(_vm._s(Aitem.name))]);
    })], 2)]), _c('td', [_c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.ImageCaptureValue,
        expression: "item.ImageCaptureValue"
      }],
      staticClass: "form-control",
      on: {
        "change": function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(item, "ImageCaptureValue", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c('option', {
      attrs: {
        "value": ""
      }
    }, [_vm._v("Select")]), _vm._l(_vm.ImageCaptureData, function (Iitem, ImageCaptureIndex) {
      return _c('option', {
        key: ImageCaptureIndex,
        domProps: {
          "value": Iitem.value
        }
      }, [_vm._v(_vm._s(Iitem.name))]);
    })], 2)]), _c('td', [_c('div', {
      staticClass: "custom-control custom-checkbox"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.IsUnique,
        expression: "item.IsUnique"
      }],
      ref: "theCheckbox",
      refInFor: true,
      staticClass: "custom-control-input",
      attrs: {
        "for": "chk_" + index,
        "data-catalogid": item.IsUnique,
        "type": "checkbox",
        "id": "chk_" + index
      },
      domProps: {
        "checked": Array.isArray(item.IsUnique) ? _vm._i(item.IsUnique, null) > -1 : item.IsUnique
      },
      on: {
        "click": _vm.handleClick,
        "change": function ($event) {
          var $$a = item.IsUnique,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(item, "IsUnique", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(item, "IsUnique", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(item, "IsUnique", $$c);
          }
        }
      }
    }), _c('label', {
      staticClass: "custom-control-label universal-custom-control-label pt-1",
      attrs: {
        "for": "chk_" + index
      }
    })])]), _c('Field', {
      attrs: {
        "name": 'Location' + index,
        "rules": {
          'required': true
        }
      },
      scopedSlots: _vm._u([{
        key: "default",
        fn: function ({
          errors
        }) {
          return [_c('tree-view', {
            class: {
              'form-control': true,
              'is-invalid': errors[0]
            },
            attrs: {
              "options": _vm.options,
              "show-count": true,
              "placeholder": "Select Location",
              "name": 'Location' + index
            },
            model: {
              value: item.LocationID,
              callback: function ($$v) {
                _vm.$set(item, "LocationID", $$v);
              },
              expression: "item.LocationID"
            }
          })];
        }
      }], null, true)
    }), _c('td', [_c('Field', {
      attrs: {
        "name": 'Quantity' + index,
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
              value: item.Quantity,
              expression: "item.Quantity"
            }],
            class: {
              'form-control': true,
              'is-invalid': errors[0]
            },
            attrs: {
              "type": "text",
              "name": 'Quantity' + index
            },
            domProps: {
              "value": item.Quantity
            },
            on: {
              "input": function ($event) {
                if ($event.target.composing) return;
                _vm.$set(item, "Quantity", $event.target.value);
              }
            }
          })];
        }
      }], null, true)
    })], 1), _c('td', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.Model,
        expression: "item.Model"
      }],
      staticClass: "form-control",
      attrs: {
        "type": "text"
      },
      domProps: {
        "value": item.Model
      },
      on: {
        "input": function ($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "Model", $event.target.value);
        }
      }
    })]), _c('td', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.Manufacturer,
        expression: "item.Manufacturer"
      }],
      staticClass: "form-control",
      attrs: {
        "type": "text"
      },
      domProps: {
        "value": item.Manufacturer
      },
      on: {
        "input": function ($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "Manufacturer", $event.target.value);
        }
      }
    })]), _c('td', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.Vendor,
        expression: "item.Vendor"
      }],
      staticClass: "form-control",
      attrs: {
        "type": "text"
      },
      domProps: {
        "value": item.Vendor
      },
      on: {
        "input": function ($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "Vendor", $event.target.value);
        }
      }
    })]), _c('td', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.AssetCost,
        expression: "item.AssetCost"
      }],
      staticClass: "form-control",
      attrs: {
        "type": "text"
      },
      domProps: {
        "value": item.AssetCost
      },
      on: {
        "input": function ($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "AssetCost", $event.target.value);
        }
      }
    })]), _c('td', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.PurchaseOrder,
        expression: "item.PurchaseOrder"
      }],
      staticClass: "form-control",
      attrs: {
        "type": "text"
      },
      domProps: {
        "value": item.PurchaseOrder
      },
      on: {
        "input": function ($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "PurchaseOrder", $event.target.value);
        }
      }
    })]), _c('td', [_c('v-date-picker', {
      staticClass: "timedate input-group",
      attrs: {
        "popover": _vm.popover,
        "name": item.PurchaseDate,
        "minute-increment": 5
      },
      scopedSlots: _vm._u([{
        key: "default",
        fn: function ({
          inputValue,
          togglePopover
        }) {
          return [_c('input', {
            class: {
              'form-control': true
            },
            attrs: {
              "placeholder": "M/D/YYYY h:mm A"
            },
            domProps: {
              "value": item.PurchaseDate
            },
            on: {
              "click": function ($event) {
                return togglePopover();
              }
            }
          }), _c('div', {
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
        value: item.PurchaseDate,
        callback: function ($$v) {
          _vm.$set(item, "PurchaseDate", $$v);
        },
        expression: "item.PurchaseDate"
      }
    })], 1), _c('td', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.InvoiceNumber,
        expression: "item.InvoiceNumber"
      }],
      staticClass: "form-control",
      attrs: {
        "type": "text"
      },
      domProps: {
        "value": item.InvoiceNumber
      },
      on: {
        "input": function ($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "InvoiceNumber", $event.target.value);
        }
      }
    })]), _c('td', [_c('v-date-picker', {
      staticClass: "timedate input-group",
      attrs: {
        "popover": _vm.popover,
        "name": item.InvoiceDate,
        "minute-increment": 5
      },
      scopedSlots: _vm._u([{
        key: "default",
        fn: function ({
          inputValue,
          togglePopover
        }) {
          return [_c('input', {
            class: {
              'form-control': true
            },
            attrs: {
              "placeholder": "M/D/YYYY h:mm A"
            },
            domProps: {
              "value": item.InvoiceDate
            },
            on: {
              "click": function ($event) {
                return togglePopover();
              }
            }
          }), _c('div', {
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
        value: item.InvoiceDate,
        callback: function ($$v) {
          _vm.$set(item, "InvoiceDate", $$v);
        },
        expression: "item.InvoiceDate"
      }
    })], 1), _c('td', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.InsurerName,
        expression: "item.InsurerName"
      }],
      staticClass: "form-control",
      attrs: {
        "type": "text"
      },
      domProps: {
        "value": item.InsurerName
      },
      on: {
        "input": function ($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "InsurerName", $event.target.value);
        }
      }
    })]), _c('td', [_c('v-date-picker', {
      staticClass: "timedate input-group",
      attrs: {
        "popover": _vm.popover,
        "name": item.InsuranceTo,
        "minute-increment": 5
      },
      scopedSlots: _vm._u([{
        key: "default",
        fn: function ({
          inputValue,
          togglePopover
        }) {
          return [_c('input', {
            class: {
              'form-control': true
            },
            attrs: {
              "placeholder": "M/D/YYYY h:mm A"
            },
            domProps: {
              "value": item.InsuranceTo
            },
            on: {
              "click": function ($event) {
                return togglePopover();
              }
            }
          }), _c('div', {
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
        value: item.InsuranceTo,
        callback: function ($$v) {
          _vm.$set(item, "InsuranceTo", $$v);
        },
        expression: "item.InsuranceTo"
      }
    })], 1), _c('td', [_c('v-date-picker', {
      staticClass: "timedate input-group",
      attrs: {
        "popover": _vm.popover,
        "name": item.WarrantyDuration,
        "minute-increment": 5
      },
      scopedSlots: _vm._u([{
        key: "default",
        fn: function ({
          inputValue,
          togglePopover
        }) {
          return [_c('input', {
            class: {
              'form-control': true
            },
            attrs: {
              "placeholder": "M/D/YYYY h:mm A"
            },
            domProps: {
              "value": item.WarrantyDuration
            },
            on: {
              "click": function ($event) {
                return togglePopover();
              }
            }
          }), _c('div', {
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
        value: item.WarrantyDuration,
        callback: function ($$v) {
          _vm.$set(item, "WarrantyDuration", $$v);
        },
        expression: "item.WarrantyDuration"
      }
    })], 1), _c('td', [_c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.DepreciationRule,
        expression: "item.DepreciationRule"
      }],
      staticClass: "form-control",
      on: {
        "change": function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(item, "DepreciationRule", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c('option', {
      attrs: {
        "value": ""
      }
    }, [_vm._v("Select")]), _vm._l(_vm.dData, function (ditem, dIndex) {
      return _c('option', {
        key: dIndex,
        domProps: {
          "value": ditem.value
        }
      }, [_vm._v(" " + _vm._s(ditem.name))]);
    })], 2)]), _c('td', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.SalvageCost,
        expression: "item.SalvageCost"
      }],
      staticClass: "form-control",
      attrs: {
        "type": "text"
      },
      domProps: {
        "value": item.SalvageCost
      },
      on: {
        "input": function ($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "SalvageCost", $event.target.value);
        }
      }
    })]), _c('td', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.SerialNumber,
        expression: "item.SerialNumber"
      }],
      staticClass: "form-control",
      attrs: {
        "type": "text"
      },
      domProps: {
        "value": item.SerialNumber
      },
      on: {
        "input": function ($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "SerialNumber", $event.target.value);
        }
      }
    })]), _c('td', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.BarcodeNumber,
        expression: "item.BarcodeNumber"
      }],
      staticClass: "form-control",
      attrs: {
        "type": "text"
      },
      domProps: {
        "value": item.BarcodeNumber
      },
      on: {
        "input": function ($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "BarcodeNumber", $event.target.value);
        }
      }
    })])], 1);
  }), 0)]), _vm.Xdata.length == '0' ? _c('div', {
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
      "title": "",
      "data-toggle-tooltip": "tooltip",
      "data-original-title": "Import from excel file"
    },
    on: {
      "click": function ($event) {
        return _vm.SubmitData();
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-save pr-2"
  }), _vm._v("Submit")]), _vm._v("   "), _vm._m(0)])])])])])], 1);
};
var ImportProductvue_type_template_id_741fe449_scoped_true_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    staticClass: "btn btn-danger formbtn my-2",
    attrs: {
      "title": "",
      "href": "/AssetCatalog/Index",
      "data-toggle-tooltip": "tooltip",
      "data-original-title": "Cancel"
    }
  }, [_c('i', {
    staticClass: "fa fa-close mr-2"
  }), _vm._v("Cancel")]);
}];

// CONCATENATED MODULE: ./src/components/Modal/ImportProduct.vue?vue&type=template&id=741fe449&scoped=true&

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// EXTERNAL MODULE: ./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.cjs.js
var vue_treeselect_cjs = __webpack_require__("ca17");
var vue_treeselect_cjs_default = /*#__PURE__*/__webpack_require__.n(vue_treeselect_cjs);

// EXTERNAL MODULE: ./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.css
var vue_treeselect = __webpack_require__("542c");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/ImportProduct.vue?vue&type=script&lang=js&




/* harmony default export */ var ImportProductvue_type_script_lang_js_ = ({
  components: {
    'tree-view': vue_treeselect_cjs_default.a
  },
  props: {
    filepath: {
      type: String
    }
  },
  data() {
    return {
      Xdata: [],
      AssetType: [],
      StatusListData: [],
      BarcodeType: [],
      AuditData: [],
      ImageCaptureData: [],
      AssetFrequencyList: [],
      CalibrationData: [],
      LocationValue: null,
      options: [],
      dData: [],
      UserId: '',
      ExcelListData: [],
      ProductType: [],
      StatusData: [],
      BarcodeData: [],
      AuditRecord: [],
      ImageCaptureRecord: [],
      CalibrationRecord: [],
      DepreciationRecord: [],
      LocationData: []
    };
  },
  async created() {
    this.UserId = this.GetUserInfo.ID;
    await this.GetAssetTypeCustom();
    await this.ImportProduct();
    await this.GetBarcodeType();
    await this.GetStatusList();
    await this.GetAssetFrequency();
    await this.GetLocationByCompanyId();
    await this.GetDepreciationRule();
    await this.GetLocationByCompanyId1();
  },
  methods: {
    SubmitData() {
      //debugger
      var vm = this;
      if (vm.Xdata.length != 0) {
        vm.$refs.Productimport.validate().then(result => {
          if (result) {
            vm.Xdata.forEach((item, index) => {
              vm.ProductType = vm.AssetType.find(x => x.ASSETID === item.ItemTypeID);
              vm.StatusData = vm.StatusListData.find(x => x.value === item.StatusID);
              vm.BarcodeData = vm.BarcodeType.find(x => x.BARCODE_TYPE === item.Barcode_Type);
              vm.AuditRecord = vm.AuditData.find(x => x.value === item.AuditValue);
              vm.ImageCaptureRecord = vm.ImageCaptureData.find(x => x.value === item.ImageCaptureValue);
              vm.CalibrationRecord = vm.CalibrationData.find(x => x.value === item.CalibrationValue);
              vm.DepreciationRecord = vm.dData.find(x => x.value === item.DepreciationRule);
              // vm.options.forEach((itm, indx) => {
              //     if(LocationRecord==undefined || LocationRecord.length==0)
              //     {
              //         if (itm.children.length > 0) {
              //         LocationRecord =  vm.options[indx].children.find(x => x.id === item.LocationID);
              //     }
              //     else {
              //         LocationRecord =  vm.options.find(x => x.id === item.LocationID);
              //     }
              //     }

              // })
              //debugger
              vm.LocationRecord = vm.LocationData.find(x => x.value == item.LocationID);
              //debugger
              const obj = {
                ItemTypeName: vm.ProductType.ASSETTYPE,
                Item_type_id: parseInt(vm.ProductType.ASSETID),
                Item_type: parseInt(vm.ProductType.ASSETID),
                Item_Name: item.Item_Name,
                Status: vm.StatusData.name,
                ItemCode: item.ItemCode,
                Description: item.Description,
                Scanning_Media_Type: vm.BarcodeData.BARCODE_TYPE_ID,
                ScanningMediaTypeID: parseInt(item.ScanningMediaTypeID),
                standard: item.standard,
                StandardID: parseInt(item.StandardID),
                Audit: typeof vm.AuditRecord == 'undefined' ? "" : vm.AuditRecord.name,
                AuditValue: typeof vm.AuditRecord == 'undefined' ? 0 : vm.AuditRecord.value,
                ImageCapture: typeof vm.ImageCaptureRecord == 'undefined' ? "" : vm.ImageCaptureRecord.name,
                ImageCaptureValue: typeof vm.ImageCaptureRecord == 'undefined' ? 0 : vm.ImageCaptureRecord.value,
                Calibration: typeof vm.CalibrationRecord == 'undefined' ? "" : vm.CalibrationRecord.name,
                CalibrationValue: typeof vm.CalibrationRecord == 'undefined' ? 0 : vm.CalibrationRecord.value,
                IsUnique: item.IsUnique,
                LocationName: vm.LocationRecord.name == undefined ? '' : vm.LocationRecord.name,
                LocationID: vm.LocationRecord.name == undefined ? 0 : parseInt(vm.LocationRecord.value),
                Quantity: parseInt(item.Quantity),
                Model: item.Model,
                Manufacturer: item.Manufacturer,
                Vendor: item.Vendor,
                PurchaseOrder: item.PurchaseOrder,
                PurchaseDate: item.PurchaseDate,
                WarrantyDuration: item.WarrantyDuration,
                SalvageCost: parseInt(item.SalvageCost),
                CompanyID: parseInt(item.CompanyID),
                UserID: vm.UserId,
                batchid: item.batchid,
                StatusID: parseInt(vm.StatusData.value),
                AssetCost: parseInt(item.AssetCost),
                InvoiceNumber: item.InvoiceNumber,
                InvoiceDate: item.InvoiceDate,
                insurer_name: item.InsurerName,
                InsuranceTo: item.InsuranceTo,
                DepreciationRule: vm.DepreciationRecord == undefined ? '' : vm.DepreciationRecord.name,
                SerialNumber: item.SerialNumber,
                BarcodeNumber: item.BarcodeNumber
              };
              vm.ExcelListData.push(obj);
            });
            // debugger;
            var JsonObj = JSON.stringify(vm.ExcelListData);
            DataService["a" /* default */].BulkUploadPost(JsonObj).then(response => {
              // debugger
              var RetMeg = response.data.msg;
              vm.ShowAlert(RetMeg, "success", true, vm.$t("Alert"));
              vm.isLoading = false;
              vm.$router.push({
                path: "/AssetCatalog/Index"
              });
            });
          } else {
            vm.ShowAlert(vm.$t('ValidationHighlights'), "failure", vm.$t('Alert'));
            vm.isLoading = false;
          }
        });
      } else {
        vm.ShowAlert(vm.$t('ValidationHighlights'), "failure", vm.$t('Alert'));
        vm.isLoading = false;
      }
    },
    async GetDepreciationRule() {
      var vm = this;
      vm.isLoading = true;
      var obj = {};
      await DataService["a" /* default */].GetDepreciationRuleList().then(response => {
        vm.DepreciationData = JSON.parse(response.data);
        vm.DepreciationData.forEach((item, index) => {
          obj = {
            name: item.DEPRECIATION_RULE_NAME,
            value: item.DEPRECIATION_RULE_ID
          };
          vm.dData.push(obj);
        });
      });
      vm.isLoading = false;
    },
    GetLocationByCompanyId1: async function () {
      debugger;
      var vm = this;
      var params = `reqForm=Asset`;
      await DataService["a" /* default */].GetLocationByCompanyId(params).then(function (response) {
        var json = response.data;
        let obj = {};
        JSON.parse(response.data).data.forEach(element => {
          obj = {
            name: element.LOCATION_NAME,
            value: element.COMPANY_LOCATION_ID
          };
          vm.LocationData.push(obj);
        });
      });

      //     // await DataService.GetLocationByuserId(url).then(response => {
      //     //     vm.FindalLocationArray = [];
      //     //     response.data.data.forEach((value) => {
      //     //         var CheckIfExist = vm.FindalLocationArray.filter(function (el) {
      //     //             return el.COMPANY_LOCATION_ID == value.COMPANY_LOCATION_ID;
      //     //         });
      //     //         if (CheckIfExist.length == 0) {
      //     //             if (value.PARENT_LOCATION_ID == null) {
      //     //                 let locationId = value.COMPANY_LOCATION_ID
      //     //                 let rslt = vm.getChildLocation(locationId, value, response.data.data)
      //     //                 vm.FindalLocationArray.push(rslt)
      //     //             }
      //     //         }
      //     //     });
      //     //     vm.options = vm.FindalLocationArray;
      //     // });
    },

    GetLocationByCompanyId: async function () {
      var vm = this;
      var url = `reqForm=assetassignment`;
      await DataService["a" /* default */].GetLocationByuserId(url).then(response => {
        vm.FindalLocationArray = [];
        response.data.data.forEach(value => {
          var CheckIfExist = vm.FindalLocationArray.filter(function (el) {
            return el.COMPANY_LOCATION_ID == value.COMPANY_LOCATION_ID;
          });
          if (CheckIfExist.length == 0) {
            if (value.PARENT_LOCATION_ID == null) {
              let locationId = value.COMPANY_LOCATION_ID;
              let rslt = vm.getChildLocation(locationId, value, response.data.data);
              vm.FindalLocationArray.push(rslt);
            }
          }
        });
        vm.options = vm.FindalLocationArray;
      });
    },
    getChildLocation: function (locationId, currentItem, data) {
      let ths = this;
      let treeArray = {};
      treeArray = {
        id: currentItem.COMPANY_LOCATION_ID,
        label: currentItem.LOCATION_NAME
      };
      let retrunArray = treeArray;
      var childArray = data.filter(function (el) {
        return el.PARENT_LOCATION_ID == locationId;
      });
      let finalChildArray = [];
      childArray.forEach(value => {
        let ChildfolderId = value.COMPANY_LOCATION_ID;
        var CheckIfExist1 = finalChildArray.filter(function (el) {
          return el.COMPANY_LOCATION_ID == value.COMPANY_LOCATION_ID;
        });
        if (CheckIfExist1.length == 0) {
          var CheckIfExist = data.filter(function (el) {
            return el.PARENT_LOCATION_ID == ChildfolderId;
          });
          if (CheckIfExist != null && CheckIfExist.length > 0) {
            let rslt = ths.getChildLocation(ChildfolderId, value, data);
            finalChildArray.push(rslt);
          } else {
            treeArray = {
              id: `${value.COMPANY_LOCATION_ID}`,
              label: `${value.LOCATION_NAME}`
            };
            finalChildArray.push(treeArray);
          }
        }
      });
      retrunArray.children = finalChildArray;
      return retrunArray;
    },
    onCancel: function () {
      this.$router.push({
        name: 'ProductListing'
      });
    },
    ImportProduct: function () {
      debugger;
      var vm = this;
      vm.isLoading = true;
      var count = 0;
      var countType = 0;
      var url = `filepath=${vm.filepath}&typeName='Product'`;
      DataService["a" /* default */].BulkUpload(url).then(response => {
        debugger;
        if (response.data != null) {
          vm.Xdata = response.data;
          vm.Xdata.forEach((item, indx) => {
            if (item.LocationID == 0 || item.ItemTypeID == 0) {
              vm.count = +1;
              item.LocationID = null;
              // item.LocationName="";
              item.ItemTypeID = "";
              vm.ShowAlert(vm.$t("LocationNotExistMsg"), "failure", vm.$t('Alert'));
            }
          });
          vm.isLoading = false;
        } else {
          vm.ShowAlert(vm.$t('InValidFileUpload'), "warning", vm.$t('Alert'));
          vm.isLoading = false;
        }
      });
    },
    async GetAssetFrequency() {
      var vm = this;
      let obj1 = [{
        name: 'Annually',
        value: 'annual'
      }, {
        name: 'Half yearly',
        value: 'halfyear'
      }, {
        name: 'Quarterly',
        value: 'quarterly'
      }, {
        name: 'Monthly',
        value: 'month'
      }, {
        name: 'Bi-Weekly',
        value: 'Bi-Weekly'
      }, {
        name: 'Weekly',
        value: 'week'
      }, {
        name: 'Daily',
        value: 'daily'
      }];
      vm.AssetFrequencyList.push(obj1);
      await vm.AssetFrequencyList[0].forEach((item, index) => {
        vm.AuditData.push({
          name: item.name,
          value: item.value
        });
        vm.ImageCaptureData.push({
          name: item.name,
          value: item.value
        });
        vm.CalibrationData.push({
          name: item.name,
          value: item.value
        });
      });
    },
    GetBarcodeType() {
      var vm = this;
      vm.isLoading = true;
      var url = `BarcodeTypeId=`;
      DataService["a" /* default */].GetBarcodetype(url).then(response => {
        vm.BarcodeType = JSON.parse(response.data.result);
        vm.isLoading = false;
      });
    },
    GetStatusList() {
      var vm = this;
      vm.isLoading = true;
      var url = `langCode=en&statusType=AssetManagement&hasglobal=true`;
      DataService["a" /* default */].GetStatusList(url).then(response => {
        var StatusLists = JSON.parse(response.data);
        StatusLists.forEach((item, index) => {
          var objStatus = {
            value: item.STATUS_ID,
            name: item.STATUS
          };
          vm.StatusListData.push(objStatus);
        });
        vm.isLoading = false;
      });
    },
    GetAssetTypeCustom: function () {
      debugger;
      var vm = this;
      vm.isLoading = true;
      var url = `type=ITEMCODE&issueTo=&locationId=`;
      DataService["a" /* default */].GetAssetTypeCustom(url).then(response => {
        vm.AssetType = JSON.parse(response.data);
        vm.isLoading = false;
      });
    },
    handleClick() {
      if (this.$refs.theCheckbox[0].checked) {
        this.IsChecked = true;
      } else {
        this.IsChecked = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/ImportProduct.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_ImportProductvue_type_script_lang_js_ = (ImportProductvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Modal/ImportProduct.vue?vue&type=style&index=0&id=741fe449&prod&scoped=true&lang=css&
var ImportProductvue_type_style_index_0_id_741fe449_prod_scoped_true_lang_css_ = __webpack_require__("6023");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Modal/ImportProduct.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Modal_ImportProductvue_type_script_lang_js_,
  ImportProductvue_type_template_id_741fe449_scoped_true_render,
  ImportProductvue_type_template_id_741fe449_scoped_true_staticRenderFns,
  false,
  null,
  "741fe449",
  null
  
)

/* harmony default export */ var ImportProduct = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetCatalog/ImportAssetItem.vue?vue&type=script&lang=js&



/* harmony default export */ var ImportAssetItemvue_type_script_lang_js_ = ({
  components: {
    ImportProduct: ImportProduct
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
      ShowImportProduct: false
    };
  },
  methods: {
    BackTolist: function () {
      this.$router.push({
        name: 'ProductListing'
      });
    },
    onCancel: function () {
      this.$router.push({
        name: 'ProductListing'
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
      var vm = this;
      vm.$emit('ImportProduct');
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
              debugger;
              vm.isLoading = false;
              var data = response.data;
              if (data.Status == 0) {
                vm.filepath = data.Msg;
                vm.ShowImportProduct = vm.filepath != '' ? true : false;
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
  }
});
// CONCATENATED MODULE: ./src/views/AssetCatalog/ImportAssetItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var AssetCatalog_ImportAssetItemvue_type_script_lang_js_ = (ImportAssetItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/AssetCatalog/ImportAssetItem.vue





/* normalize component */

var ImportAssetItem_component = Object(componentNormalizer["a" /* default */])(
  AssetCatalog_ImportAssetItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ImportAssetItem = __webpack_exports__["default"] = (ImportAssetItem_component.exports);

/***/ }),

/***/ "6023":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportProduct_vue_vue_type_style_index_0_id_741fe449_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("96a2");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportProduct_vue_vue_type_style_index_0_id_741fe449_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportProduct_vue_vue_type_style_index_0_id_741fe449_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "6c52":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".listing .table td.p-location[data-v-741fe449]:not(.overflow-visible):not(.mobile-action):not(.details-control){overflow:visible!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "96a2":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("6c52");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("a2741968", content, true, {"sourceMap":false,"shadowMode":false});

/***/ })

}]);
//# sourceMappingURL=chunk-a41644bc.js.map