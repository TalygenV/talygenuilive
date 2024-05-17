(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-24784a8e"],{

/***/ "4555":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Common/Pager.vue?vue&type=template&id=39f52799&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.TotalPages > 0 ? _c('div', {
    staticClass: "nu-paging"
  }, [_c('nav', {
    attrs: {
      "aria-label": "Page navigation example col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left"
    }
  }, [_c('ul', {
    staticClass: "pagination row"
  }, [_c('li', {
    staticClass: "col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left choose-page"
  }, [_c('span', {
    staticClass: "mr-2"
  }, [_vm._v("Show")]), _c('span', {
    staticClass: "select"
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.PageSize,
      expression: "PageSize"
    }],
    staticClass: "form-control form-control-sm",
    attrs: {
      "id": "pageSize",
      "name": "pageSize"
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.PageSize = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.SetPageSize]
    }
  }, _vm._l(_vm.PageSizeOption, function (item, itemIndex) {
    return _c('option', {
      key: itemIndex,
      domProps: {
        "value": item
      }
    }, [_vm._v(_vm._s(item) + " ")]);
  }), 0)]), _c('span', {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.$t('PagingText', [(_vm.CurrentPage - 1) * _vm.PageSize + 1, _vm.PageSize * _vm.CurrentPage > _vm.TotalRecords ? _vm.TotalRecords : _vm.PageSize * _vm.CurrentPage, _vm.TotalRecords])))])]), _c('li', {
    staticClass: "col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"
  }, [_vm.TotalPages > 1 ? _c('ul', {
    staticClass: "paging-count"
  }, [_c('li', {
    staticClass: "page-item"
  }, [_vm.CurrentPage != 1 ? _c('a', {
    staticClass: "page-link first",
    attrs: {
      "title": _vm.firstText,
      "href": "javascript:;",
      "val": "1"
    },
    on: {
      "click": function ($event) {
        return _vm.SetCurrentPage(1);
      }
    }
  }, [_vm._v(_vm._s(_vm.firstText))]) : _vm._e(), _vm.CurrentPage == 1 ? _c('a', {
    staticClass: "page-link first disabled",
    attrs: {
      "title": _vm.firstText,
      "val": "1"
    }
  }, [_vm._v(_vm._s(_vm.firstText))]) : _vm._e()]), _c('li', {
    staticClass: "page-item"
  }, [_vm.CurrentPage != 1 ? _c('a', {
    staticClass: "page-link previous",
    attrs: {
      "title": _vm.prevText,
      "href": "javascript:;"
    },
    on: {
      "click": function ($event) {
        return _vm.SetCurrentPage(_vm.CurrentPage - 1);
      }
    }
  }, [_vm._v(_vm._s(_vm.prevText))]) : _vm._e(), _vm.CurrentPage == 1 ? _c('a', {
    staticClass: "page-link previous disabled",
    attrs: {
      "title": _vm.prevText
    }
  }, [_vm._v(_vm._s(_vm.prevText))]) : _vm._e()]), _vm._l(_vm.TotalPages, function (data, index) {
    return [data >= _vm.GroupStart && data <= _vm.GroupEnd ? _c('li', {
      key: index,
      staticClass: "page-item"
    }, [index + 1 == _vm.CurrentPage ? _c('a', {
      staticClass: "page-link active",
      attrs: {
        "href": "javascript:;"
      }
    }, [_vm._v(_vm._s(index + 1))]) : _vm._e(), index + 1 != _vm.CurrentPage ? _c('a', {
      staticClass: "page-link",
      attrs: {
        "href": "javascript:;",
        "val": index
      },
      on: {
        "click": function ($event) {
          return _vm.SetCurrentPage(index + 1);
        }
      }
    }, [_vm._v(_vm._s(index + 1))]) : _vm._e()]) : _vm._e()];
  }), _c('li', {
    staticClass: "page-item"
  }, [_vm.CurrentPage < _vm.TotalPages ? _c('a', {
    staticClass: "page-link next",
    attrs: {
      "title": _vm.nextText,
      "href": "javascript:;"
    },
    on: {
      "click": function ($event) {
        return _vm.SetCurrentPage(_vm.CurrentPage + 1);
      }
    }
  }, [_vm._v(_vm._s(_vm.nextText))]) : _vm._e(), _vm.CurrentPage >= _vm.TotalPages ? _c('a', {
    staticClass: "page-link disabled next",
    attrs: {
      "title": _vm.nextText
    }
  }, [_vm._v(_vm._s(_vm.nextText))]) : _vm._e()]), _c('li', {
    staticClass: "page-item"
  }, [_vm.CurrentPage != _vm.TotalPages ? _c('a', {
    staticClass: "page-link next",
    attrs: {
      "title": _vm.lastText,
      "href": "javascript:;",
      "val": _vm.TotalPages
    },
    on: {
      "click": function ($event) {
        return _vm.SetCurrentPage(_vm.TotalPages);
      }
    }
  }, [_vm._v(_vm._s(_vm.lastText))]) : _vm._e(), _vm.CurrentPage == _vm.TotalPages ? _c('a', {
    staticClass: "page-link next disabled",
    attrs: {
      "title": _vm.lastText,
      "val": _vm.TotalPages
    }
  }, [_vm._v(_vm._s(_vm.lastText))]) : _vm._e()])], 2) : _vm._e()])])])]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Common/Pager.vue?vue&type=template&id=39f52799&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Common/Pager.vue?vue&type=script&lang=js&

/* harmony default export */ var Pagervue_type_script_lang_js_ = ({
  props: {
    numberofrecords: {
      type: Number,
      required: true
    },
    prevText: {
      type: String,
      required: true
    },
    nextText: {
      type: String,
      required: true
    },
    firstText: {
      type: String,
      required: true
    },
    lastText: {
      type: String,
      required: true
    },
    callbackfunction: {
      type: Function
    },
    CurrentPageNumber: {
      type: Number
    }
  },
  data: function () {
    return {
      TotalRecords: 0,
      PageNumber: 1,
      PageSize: 10,
      PageSizeOption: null,
      CurrentPage: 1,
      TotalPages: 10,
      GroupStart: 1,
      GroupEnd: 3,
      LastPage: false
    };
  },
  watch: {
    numberofrecords: function (value) {
      if (this.CurrentPage > this.PageNumber) {
        this.CurrentPage = this.PageNumber;
      }
      this.TotalRecords = value;
      this.TotalPages = Math.ceil(this.TotalRecords / this.PageSize);
      if (this.TotalPages == this.PageNumber && this.PageNumber > 3) {
        this.GroupStart = this.PageNumber - 2;
        this.GroupEnd = this.PageNumber;
      } else if (this.TotalPages > this.PageNumber && this.PageNumber >= 3) {
        this.GroupStart = this.PageNumber - 1;
        this.GroupEnd = this.PageNumber + 1;
      } else {
        this.GroupStart = 1;
        this.GroupEnd = 3;
      }
    },
    CurrentPageNumber: function (value) {
      var vm = this;
      vm.CurrentPage = value;
      if (value == 1) {
        vm.SetCurrentPage(value);
      }
    }
  },
  created: function () {
    this.TotalRecords = this.numberofrecords;
    this.TotalPages = Math.ceil(this.TotalRecords / this.PageSize);
    this.GetPageSizeOption();
  },
  methods: {
    GetData: function () {
      this.$emit('SetCurrentPage', {
        'PageNumber': this.PageNumber,
        "PageSize": this.PageSize
      });
      if (typeof this.callbackfunction != 'undefined' && this.callbackfunction != null) {
        this.callbackfunction();
      }
    },
    SetPageSize: function (event) {
      this.PageSize = event.target.value;
      this.PageNumber = 1;
      this.CurrentPage = this.PageNumber;
      this.GroupStart = this.PageNumber;
      this.GroupEnd = this.PageNumber + 2;
      this.TotalPages = Math.ceil(this.TotalRecords / this.PageSize);
      this.GetData();
    },
    SetCurrentPage: function (pageNumber) {
      this.PageNumber = pageNumber;
      this.CurrentPage = pageNumber;
      if (this.TotalPages == this.PageNumber && this.PageNumber > 3) {
        this.GroupStart = this.PageNumber - 2;
        this.GroupEnd = this.PageNumber;
      } else if (this.TotalPages > this.PageNumber && this.PageNumber >= 3) {
        this.GroupStart = this.PageNumber - 1;
        this.GroupEnd = this.PageNumber + 1;
      } else {
        this.GroupStart = 1;
        this.GroupEnd = 3;
      }
      this.GetData();
    },
    GetPageSizeOption: function () {
      var list = [];
      var defaultPageSize = 10;
      for (var i = defaultPageSize; i < defaultPageSize + 95; i += 5) {
        list.push(i);
      }
      this.PageSizeOption = list;
    }
  }
});
// CONCATENATED MODULE: ./src/components/Common/Pager.vue?vue&type=script&lang=js&
 /* harmony default export */ var Common_Pagervue_type_script_lang_js_ = (Pagervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Common/Pager.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Common_Pagervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Pager = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "66c2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchAssetWithLocation_vue_vue_type_style_index_0_id_6c181838_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dca8");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchAssetWithLocation_vue_vue_type_style_index_0_id_6c181838_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchAssetWithLocation_vue_vue_type_style_index_0_id_6c181838_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "6fdc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransferSearchList_vue_vue_type_style_index_0_id_2f4fe29b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("76f3");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransferSearchList_vue_vue_type_style_index_0_id_2f4fe29b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransferSearchList_vue_vue_type_style_index_0_id_2f4fe29b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "76f3":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("96f1");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("41d5b564", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "8510":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("df75f");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("04de5109", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "96f1":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".listing[data-v-2f4fe29b]{float:none;width:100%;position:relative}input[type=number][data-v-2f4fe29b]::-webkit-inner-spin-button,input[type=number][data-v-2f4fe29b]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number][data-v-2f4fe29b]{-moz-appearance:textfield}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "a5f8":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vue-treeselect__control[data-v-6c181838]{border:none;height:24px;padding:0}.vue-treeselect--searchable .vue-treeselect__input-container[data-v-6c181838]{padding:0!important}.vue-treeselect__placeholder[data-v-6c181838]{color:#303030!important}.vue-treeselect__control-arrow[data-v-6c181838]{color:#000}.vue-treeselect__placeholder[data-v-6c181838],.vue-treeselect__single-value[data-v-6c181838]{line-height:24px}.vue-treeselect__placeholder.vue-treeselect-helper-zoom-effect-off[data-v-6c181838]{padding:0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "d802":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductMoveToList_vue_vue_type_style_index_0_id_36689dfc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8510");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductMoveToList_vue_vue_type_style_index_0_id_36689dfc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductMoveToList_vue_vue_type_style_index_0_id_36689dfc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "dca8":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("a5f8");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("cff03834", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "df75f":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vue-treeselect__control[data-v-36689dfc]{border:none;height:24px;padding:0}.vue-treeselect--searchable .vue-treeselect__input-container[data-v-36689dfc]{padding:0!important}.vue-treeselect__placeholder[data-v-36689dfc]{color:#303030!important}.vue-treeselect__control-arrow[data-v-36689dfc]{color:#000}.vue-treeselect__placeholder[data-v-36689dfc]{line-height:24px}input[type=number][data-v-36689dfc]::-webkit-inner-spin-button,input[type=number][data-v-36689dfc]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number][data-v-36689dfc]{-moz-appearance:textfield}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "f3dd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetCatalog/TransferItem.vue?vue&type=template&id=79cf9b87&
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
  }, [_vm._v("Product Transfer")]), _c('span', {
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
  }), _c('br'), _c('span', [_vm._v(_vm._s(_vm.$t('BacktoList')))])])])])])])]), _c('Form', {
    ref: "ProductAssignmentForm"
  }, [_c('div', {
    staticClass: "col-md-12 p-0"
  }, [_c('SearchTransferAssetList', {
    attrs: {
      "GetParentDetails": _vm.GetParentDetails
    }
  })], 1)])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/AssetCatalog/TransferItem.vue?vue&type=template&id=79cf9b87&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/SearchAssetWithLocation.vue?vue&type=template&id=6c181838&scoped=true&
var SearchAssetWithLocationvue_type_template_id_6c181838_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_c('loader', {
    attrs: {
      "is-visible": _vm.isLoading
    }
  }), _c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 mt-3 Search-panel px-1",
    attrs: {
      "id": "divassestsearch"
    },
    on: {
      "click": _vm.clickHendlerAllWindow
    }
  }, [_c('div', {
    staticClass: "heading-border"
  }, [_c('h5', {
    staticClass: "h5"
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('Search')))])])]), _c('div', {
    staticClass: "search-content mt-2"
  }, [_c('div', {
    staticClass: "col-lg-12 float-left px-0 show",
    attrs: {
      "id": "search-content"
    }
  }, [_c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left p-0"
  }, [_c('div', {
    staticClass: "table-heading-wb leave-details bg-grey border"
  }, [_c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left py-1"
  }, [_c('Form', {
    ref: "addBarCodeForm",
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        valid,
        errors
      }) {
        return [_c('div', {
          staticClass: "row"
        }, [_c('div', {
          staticClass: "col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 float-left"
        }, [_c('div', {
          staticClass: "form-group pt-3"
        }, [_c('Field', {
          staticClass: "w-100",
          attrs: {
            "name": "BarCode",
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
                  value: _vm.txtBarCode,
                  expression: "txtBarCode"
                }],
                class: {
                  'form-control': true,
                  'is-invalid': errors[0]
                },
                attrs: {
                  "name": "BarCode",
                  "placeholder": "Enter Barcode",
                  "type": "text"
                },
                domProps: {
                  "value": _vm.txtBarCode
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.txtBarCode = $event.target.value;
                  }
                }
              }), errors[0] ? _c('span', {
                staticClass: "invalid-feedback d-block",
                attrs: {
                  "name": "BarCode"
                }
              }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
            }
          }], null, true)
        })], 1)]), _c('div', {
          staticClass: "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"
        }, [_c('div', {
          staticClass: "search-btm-btn background-0 text-left py-3"
        }, [_c('a', {
          staticClass: "btn btn-success float-left",
          attrs: {
            "href": "javascript:;",
            "title": "Click Here To Search"
          },
          on: {
            "click": function ($event) {
              return _vm.SearchByProductBarCode(valid, errors);
            }
          }
        }, [_c('i', {
          staticClass: "fa fa-search"
        })]), _c('a', {
          staticClass: "btn btn-danger float-left mx-1",
          attrs: {
            "href": "javascript:;",
            "title": "Clear"
          },
          on: {
            "click": function ($event) {
              return _vm.ClearBarcode();
            }
          }
        }, [_c('i', {
          staticClass: "fa fa-refresh"
        })]), _vm.RFIDSetupButton ? _c('a', {
          staticClass: "pullleft mx-1 green btn btn-info",
          attrs: {
            "title": "Click Here To Search"
          }
        }, [_c('i', {
          staticClass: "fa fa-barcode text-white float-left mt-1 mr-2"
        }), _c('span', {
          staticClass: "text-white"
        }, [_vm._v(_vm._s(_vm.$t('RFIDScanned')))])]) : _vm._e()])])])];
      }
    }])
  })], 1)])]), _c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left p-0"
  }, [_c('Form', {
    ref: "MoveListSearch",
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        valid,
        errors
      }) {
        return [_c('div', {
          staticClass: "row mt-2"
        }, [_c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-4 col-xl-3 float-left"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v(_vm._s(_vm.$t('Location'))), _c('span', {
          staticClass: "text-danger"
        }, [_vm._v("*")])]), _c('Field', {
          staticClass: "w-100",
          attrs: {
            "name": "Location",
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
                  'is-invalid': errors[0]
                },
                attrs: {
                  "options": _vm.options,
                  "placeholder": "Select Location",
                  "show-count": true
                },
                on: {
                  "input": function ($event) {
                    return _vm.BindItemTypeByUserId(_vm.TreeValue);
                  }
                },
                model: {
                  value: _vm.TreeValue,
                  callback: function ($$v) {
                    _vm.TreeValue = $$v;
                  },
                  expression: "TreeValue"
                }
              }), errors[0] ? _c('span', {
                staticClass: "invalid-feedback d-block",
                attrs: {
                  "name": "Location"
                }
              }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
            }
          }], null, true)
        })], 1)]), _c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-4 col-xl-3 float-left mt-3 mt-sm-3 mt-md-0 mt-lg-0 mt-xl-0"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v(_vm._s(_vm.$t('ProductType'))), _c('span', {
          staticClass: "text-danger"
        }, [_vm._v("*")])]), _c('Field', {
          staticClass: "w-100",
          attrs: {
            "name": "Product Type",
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
                  value: _vm.txtAssetType,
                  expression: "txtAssetType"
                }],
                class: {
                  'form-control w-100': true,
                  'is-invalid': errors[0]
                },
                attrs: {
                  "name": "Product Type"
                },
                on: {
                  "change": [function ($event) {
                    var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                      return o.selected;
                    }).map(function (o) {
                      var val = "_value" in o ? o._value : o.value;
                      return val;
                    });
                    _vm.txtAssetType = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
                  }, function ($event) {
                    return _vm.GetCompanyAssestCatalogs(_vm.txtAssetType);
                  }]
                }
              }, [_c('option', {
                attrs: {
                  "value": ""
                }
              }, [_vm._v("Select")]), _vm._l(_vm.AssetTypeData, function (item, itemIndex) {
                return _c('option', {
                  key: itemIndex,
                  domProps: {
                    "value": item.ASSETID
                  }
                }, [_vm._v(_vm._s(item.ASSETTYPE))]);
              })], 2), errors[0] ? _c('span', {
                staticClass: "invalid-feedback d-block",
                attrs: {
                  "name": "Product Type"
                }
              }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
            }
          }], null, true)
        })], 1)]), _c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-4 col-xl-3 float-left"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v(_vm._s(_vm.$t('ProductName'))), _c('span', {
          staticClass: "text-danger"
        }, [_vm._v("*")])]), _c('Field', {
          staticClass: "w-100",
          attrs: {
            "name": "Product Name",
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
                  value: _vm.txtProduct,
                  expression: "txtProduct"
                }],
                class: {
                  'form-control w-100': true,
                  'is-invalid': errors[0]
                },
                attrs: {
                  "name": "Product Name"
                },
                on: {
                  "change": [function ($event) {
                    var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                      return o.selected;
                    }).map(function (o) {
                      var val = "_value" in o ? o._value : o.value;
                      return val;
                    });
                    _vm.txtProduct = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
                  }, function ($event) {
                    return _vm.ProductNameChange(_vm.txtProduct);
                  }]
                }
              }, [_c('option', {
                attrs: {
                  "value": ""
                }
              }, [_vm._v("Select")]), _vm._l(_vm.ProducttData, function (item, itemIndex) {
                return _c('option', {
                  key: itemIndex,
                  domProps: {
                    "value": item.ASSET_CATALOGUE_ID
                  }
                }, [_vm._v(_vm._s(item.NAME))]);
              })], 2), errors[0] ? _c('span', {
                staticClass: "invalid-feedback d-block",
                attrs: {
                  "name": "Product Name"
                }
              }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
            }
          }], null, true)
        })], 1)]), _c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-4 col-xl-3 float-left"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v(" " + _vm._s(_vm.$t('Products')))]), _c('div', {
          staticClass: "d-flex",
          staticStyle: {
            "align-items": "flex-start"
          }
        }, [_c('Field', {
          staticStyle: {
            "width": "85%"
          },
          attrs: {
            "name": "Products",
            "label": "ItemName"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              errors
            }) {
              return [_c('div', {
                staticClass: "input-group mb-3",
                staticStyle: {
                  "position": "relative"
                }
              }, [_c('input', {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.itemname,
                  expression: "itemname"
                }],
                class: {
                  'form-control': true,
                  'is-invalid': errors[0]
                },
                attrs: {
                  "name": "Products",
                  "id": "Products",
                  "type": "text",
                  "value": "iselectVal"
                },
                domProps: {
                  "value": _vm.itemname
                },
                on: {
                  "keyup": _vm.ItemListOnclick,
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.itemname = $event.target.value;
                  }
                }
              }), _c('div', {
                staticClass: "unique_dynamicdatalist"
              }, _vm._l(_vm.ProductsArray, function (item, index) {
                return _vm.isshowuniquename ? _c('ul', {
                  key: index,
                  staticStyle: {
                    "z-index": "auto"
                  },
                  on: {
                    "click": function ($event) {
                      return _vm.setProductsName(item);
                    }
                  }
                }, [_vm.showProductDropdown ? _c('li', {
                  staticStyle: {
                    "text-transform": "capitalize"
                  },
                  attrs: {
                    "value": item.Value
                  }
                }, [_vm._v(_vm._s(item.Name))]) : _vm._e()]) : _vm._e();
              }), 0)])];
            }
          }], null, true)
        }), _c('div', {
          staticClass: "input-group mb-3 w-auto",
          staticStyle: {
            "position": "relative"
          }
        }, [_c('div', {
          staticClass: "input-group-append"
        }, [_c('span', {
          staticClass: "input-group-text border-0 bg-transparent p-0 pl-2"
        }, [_c('a', {
          staticClass: "btn btn-outline-success float-left",
          attrs: {
            "id": "Searchassest",
            "href": "javascript:;",
            "title": "",
            "data-toggle-tooltip": "tooltip",
            "data-original-title": "Click here to search"
          },
          on: {
            "click": function ($event) {
              return _vm.ShowsearchData();
            }
          }
        }, [_c('i', {
          staticClass: "fa fa-search"
        })])])])])], 1)])])])];
      }
    }])
  }), _vm.IsAssetOfList ? _c('TransferSearchList', {
    attrs: {
      "TotalRecord": _vm.TotalRecord,
      "CurrentPage": _vm.CurrentPage,
      "searchData": _vm.searchData
    },
    on: {
      "ProductMoveToList": _vm.ProductMoveToList
    }
  }) : _vm._e(), _c('ProductMoveToList', {
    attrs: {
      "selectItemData": _vm.selectItemData,
      "options": _vm.options,
      "Location": _vm.TreeValue
    }
  })], 1)])])])], 1);
};
var SearchAssetWithLocationvue_type_template_id_6c181838_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/SearchAssetWithLocation.vue?vue&type=template&id=6c181838&scoped=true&

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/TransferSearchList.vue?vue&type=template&id=2f4fe29b&scoped=true&
var TransferSearchListvue_type_template_id_2f4fe29b_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_c('loader', {
    attrs: {
      "is-visible": _vm.isLoading
    }
  }), _vm.isVisible == true ? [_c('div', {
    staticClass: "listing"
  }, [_c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-bordered"
  }, [_c('thead', {
    staticClass: "thead-bg"
  }, [_c('tr', [_c('th', {
    staticClass: "text-center"
  }, [_c('div', {
    staticClass: "custom-control custom-checkbox",
    on: {
      "click": function ($event) {
        return _vm.checkAllSearchRecord();
      }
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectAll,
      expression: "selectAll"
    }],
    staticClass: "chkItems custom-control-input",
    attrs: {
      "type": "checkbox",
      "id": "chkAll",
      "name": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.selectAll) ? _vm._i(_vm.selectAll, null) > -1 : _vm.selectAll
    },
    on: {
      "change": function ($event) {
        var $$a = _vm.selectAll,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.selectAll = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.selectAll = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.selectAll = $$c;
        }
      }
    }
  }), _c('label', {
    staticClass: "custom-control-label universal-custom-control-label pt-1"
  })])]), _c('th', {
    staticClass: "text-center",
    attrs: {
      "scope": "col"
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('ItemCode')))])]), _c('th', {
    staticClass: "text-center",
    attrs: {
      "scope": "col"
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('PRODUCT_NAME')))])]), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('UniqueName')))])]), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_c('span', [_vm._v(" " + _vm._s(_vm.$t('Location')) + " ")])]), _c('th', {
    staticClass: "text-center",
    attrs: {
      "scope": "col"
    }
  }, [_c('span', [_vm._v(" " + _vm._s(_vm.$t('NUMBER_OF_ITEM')))])]), _c('th', {
    staticClass: "text-center",
    attrs: {
      "scope": "col"
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('AvailableItems')))])]), _c('th', {
    staticClass: "text-center",
    attrs: {
      "scope": "col"
    }
  }, [_c('span', [_vm._v(" " + _vm._s(_vm.$t('TransferQuantity')) + " ")])])])]), _c('tbody', [_c('tr', [_c('td'), _c('td', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.searchItemCode,
      expression: "searchItemCode"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Item Code"
    },
    domProps: {
      "value": _vm.searchItemCode
    },
    on: {
      "keyup": function ($event) {
        return _vm.searchByColumnName();
      },
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.searchItemCode = $event.target.value;
      }
    }
  })]), _c('td', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.searchItemName,
      expression: "searchItemName"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Item Name"
    },
    domProps: {
      "value": _vm.searchItemName
    },
    on: {
      "keyup": function ($event) {
        return _vm.searchByColumnName();
      },
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.searchItemName = $event.target.value;
      }
    }
  })]), _c('td', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.searchUniqueName,
      expression: "searchUniqueName"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Unique Name"
    },
    domProps: {
      "value": _vm.searchUniqueName
    },
    on: {
      "keyup": function ($event) {
        return _vm.searchByColumnName();
      },
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.searchUniqueName = $event.target.value;
      }
    }
  })]), _c('td', [_c('a', {
    staticClass: "btn btn-danger clearsearchtext clearAll",
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": function ($event) {
        return _vm.resetSearchField();
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-refresh text-white"
  })])])]), _vm._l(_vm.searchData, function (item, index) {
    return _c('tr', {
      key: index
    }, [_c('td', {
      staticClass: "text-center"
    }, [_c('div', {
      staticClass: "custom-control custom-checkbox",
      on: {
        "click": function ($event) {
          return _vm.singleCheckRecord(item);
        }
      }
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.isSelected,
        expression: "item.isSelected"
      }],
      staticClass: "chkItems custom-control-input",
      staticStyle: {
        "display": "none"
      },
      attrs: {
        "type": "checkbox",
        "name": "checkbox"
      },
      domProps: {
        "checked": Array.isArray(item.isSelected) ? _vm._i(item.isSelected, null) > -1 : item.isSelected
      },
      on: {
        "change": function ($event) {
          var $$a = item.isSelected,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(item, "isSelected", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(item, "isSelected", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(item, "isSelected", $$c);
          }
        }
      }
    }), _c('label', {
      staticClass: "custom-control-label universal-custom-control-label pt-1"
    })])]), _c('td', [_vm._v(_vm._s(item.ItemCode))]), _c('td', [_vm._v(_vm._s(item.AssetCatalogName))]), _c('td', [_vm._v(_vm._s(item.AssetUniqueName))]), _c('td', [_vm._v(_vm._s(item.LocationName))]), _c('td', {
      staticClass: "text-center single-action"
    }, [_c('span', {
      staticClass: "text-dark"
    }, [_c('i', {
      staticClass: "fa fa-list",
      attrs: {
        "aria-hidden": "true"
      }
    }), _c('span', {
      staticClass: "noti-circle noti-blue"
    }, [_vm._v(_vm._s(item.TotalQuantity))])])]), _c('td', {
      staticClass: "text-center single-action"
    }, [_c('span', {
      staticClass: "text-dark"
    }, [_c('i', {
      staticClass: "fa fa-list-ul",
      attrs: {
        "aria-hidden": "true"
      }
    }), _c('span', {
      staticClass: "noti-circle noti-green"
    }, [_vm._v(_vm._s(item.AvailableItems))])])]), _c('td', [item.CreateUniqueNameListing ? _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.TransferQuantity,
        expression: "item.TransferQuantity"
      }],
      staticClass: "form-control",
      attrs: {
        "type": "number",
        "disabled": "disabled"
      },
      domProps: {
        "value": item.TransferQuantity
      },
      on: {
        "input": function ($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "TransferQuantity", $event.target.value);
        }
      }
    }) : _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.TransferQuantity,
        expression: "item.TransferQuantity"
      }],
      class: {
        'form-control': true,
        'is-invalid': item.TransferQuantity == 0 ? true : false
      },
      attrs: {
        "type": "number",
        "min": "1"
      },
      domProps: {
        "value": item.TransferQuantity
      },
      on: {
        "keyup": function ($event) {
          return _vm.checkQuantity(item);
        },
        "input": function ($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "TransferQuantity", $event.target.value);
        }
      }
    })])]);
  })], 2)])]), _c('Pager', {
    attrs: {
      "numberofrecords": _vm.TotalRecord,
      "CurrentPageNumber": _vm.CurrentPage,
      "prev-text": "Prev",
      "first-text": "First",
      "last-text": "Last",
      "next-text": "Next"
    },
    on: {
      "SetCurrentPage": _vm.pagerMethod
    }
  })], 1)] : [_c('div', {
    staticClass: "listing"
  }, [_c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-bordered"
  }, [_c('thead', {
    staticClass: "thead-bg"
  }, [_c('tr', [_c('th', {
    staticClass: "text-center"
  }, [_c('div', {
    staticClass: "custom-control custom-checkbox",
    on: {
      "click": function ($event) {
        return _vm.checkAllSearchRecord();
      }
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectAll,
      expression: "selectAll"
    }],
    staticClass: "chkItems custom-control-input",
    attrs: {
      "type": "checkbox",
      "id": "chkAll",
      "name": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.selectAll) ? _vm._i(_vm.selectAll, null) > -1 : _vm.selectAll
    },
    on: {
      "change": function ($event) {
        var $$a = _vm.selectAll,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.selectAll = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.selectAll = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.selectAll = $$c;
        }
      }
    }
  }), _c('label', {
    staticClass: "custom-control-label universal-custom-control-label pt-1"
  })])]), _c('th', {
    staticClass: "text-center",
    attrs: {
      "scope": "col"
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('ItemCode')))])]), _c('th', {
    staticClass: "text-center",
    attrs: {
      "scope": "col"
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('PRODUCT_NAME')))])]), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('UniqueName')))])]), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_c('span', [_vm._v(" " + _vm._s(_vm.$t('Location')) + " ")])]), _c('th', {
    staticClass: "text-center",
    attrs: {
      "scope": "col"
    }
  }, [_c('span', [_vm._v(" " + _vm._s(_vm.$t('NUMBER_OF_ITEM')))])]), _c('th', {
    staticClass: "text-center",
    attrs: {
      "scope": "col"
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('AvailableItems')))])]), _c('th', {
    staticClass: "text-center",
    attrs: {
      "scope": "col"
    }
  }, [_c('span', [_vm._v(" " + _vm._s(_vm.$t('TransferQuantity')) + " ")])])])]), _vm.filterRecodes.length > 0 ? _c('tbody', [_c('tr', [_c('td'), _c('td', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.searchItemCode,
      expression: "searchItemCode"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Item Code"
    },
    domProps: {
      "value": _vm.searchItemCode
    },
    on: {
      "keyup": function ($event) {
        return _vm.searchByColumnName();
      },
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.searchItemCode = $event.target.value;
      }
    }
  })]), _c('td', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.searchItemName,
      expression: "searchItemName"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Item Name"
    },
    domProps: {
      "value": _vm.searchItemName
    },
    on: {
      "keyup": function ($event) {
        return _vm.searchByColumnName();
      },
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.searchItemName = $event.target.value;
      }
    }
  })]), _c('td', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.searchUniqueName,
      expression: "searchUniqueName"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Unique Name"
    },
    domProps: {
      "value": _vm.searchUniqueName
    },
    on: {
      "keyup": function ($event) {
        return _vm.searchByColumnName();
      },
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.searchUniqueName = $event.target.value;
      }
    }
  })]), _c('td', [_c('a', {
    staticClass: "btn btn-danger clearsearchtext clearAll",
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": function ($event) {
        return _vm.resetSearchField();
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-refresh text-white"
  })])])]), _vm._l(_vm.filterRecodes, function (item, index) {
    return _c('tr', {
      key: index
    }, [_c('td', {
      staticClass: "text-center"
    }, [_c('div', {
      staticClass: "custom-control custom-checkbox",
      on: {
        "click": function ($event) {
          return _vm.singleCheckRecord(item);
        }
      }
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.isSelected,
        expression: "item.isSelected"
      }],
      staticClass: "chkItems custom-control-input",
      staticStyle: {
        "display": "none"
      },
      attrs: {
        "type": "checkbox",
        "name": "checkbox"
      },
      domProps: {
        "checked": Array.isArray(item.isSelected) ? _vm._i(item.isSelected, null) > -1 : item.isSelected
      },
      on: {
        "change": function ($event) {
          var $$a = item.isSelected,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(item, "isSelected", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(item, "isSelected", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(item, "isSelected", $$c);
          }
        }
      }
    }), _c('label', {
      staticClass: "custom-control-label universal-custom-control-label pt-1"
    })])]), _c('td', [_vm._v(_vm._s(item.ItemCode))]), _c('td', [_vm._v(_vm._s(item.AssetCatalogName))]), _c('td', [_vm._v(_vm._s(item.AssetUniqueName))]), _c('td', [_vm._v(_vm._s(item.LocationName))]), _c('td', {
      staticClass: "text-center single-action"
    }, [_c('span', {
      staticClass: "text-dark"
    }, [_c('i', {
      staticClass: "fa fa-list",
      attrs: {
        "aria-hidden": "true"
      }
    }), _c('span', {
      staticClass: "noti-circle noti-blue"
    }, [_vm._v(_vm._s(item.TotalQuantity))])])]), _c('td', {
      staticClass: "text-center single-action"
    }, [_c('span', {
      staticClass: "text-dark"
    }, [_c('i', {
      staticClass: "fa fa-list-ul",
      attrs: {
        "aria-hidden": "true"
      }
    }), _c('span', {
      staticClass: "noti-circle noti-green"
    }, [_vm._v(_vm._s(item.AvailableItems))])])]), _c('td', [item.CreateUniqueNameListing ? _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.TransferQuantity,
        expression: "item.TransferQuantity"
      }],
      staticClass: "form-control",
      attrs: {
        "type": "number",
        "disabled": "disabled"
      },
      domProps: {
        "value": item.TransferQuantity
      },
      on: {
        "input": function ($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "TransferQuantity", $event.target.value);
        }
      }
    }) : _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.TransferQuantity,
        expression: "item.TransferQuantity"
      }],
      class: {
        'form-control': true,
        'is-invalid': item.TransferQuantity == 0 ? true : false
      },
      attrs: {
        "type": "number",
        "min": "1"
      },
      domProps: {
        "value": item.TransferQuantity
      },
      on: {
        "keyup": function ($event) {
          return _vm.checkQuantity(item);
        },
        "input": function ($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "TransferQuantity", $event.target.value);
        }
      }
    })])]);
  })], 2) : _c('tbody', [_c('tr', [_c('td'), _c('td', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.searchItemCode,
      expression: "searchItemCode"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Item Code"
    },
    domProps: {
      "value": _vm.searchItemCode
    },
    on: {
      "keyup": function ($event) {
        return _vm.searchByColumnName();
      },
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.searchItemCode = $event.target.value;
      }
    }
  })]), _c('td', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.searchItemName,
      expression: "searchItemName"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Item Name"
    },
    domProps: {
      "value": _vm.searchItemName
    },
    on: {
      "keyup": function ($event) {
        return _vm.searchByColumnName();
      },
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.searchItemName = $event.target.value;
      }
    }
  })]), _c('td', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.searchUniqueName,
      expression: "searchUniqueName"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Unique Name"
    },
    domProps: {
      "value": _vm.searchUniqueName
    },
    on: {
      "keyup": function ($event) {
        return _vm.searchByColumnName();
      },
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.searchUniqueName = $event.target.value;
      }
    }
  })]), _c('td', [_c('a', {
    staticClass: "btn btn-danger clearsearchtext clearAll",
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": function ($event) {
        return _vm.resetSearchField();
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-refresh text-white"
  })])])]), _c('td', {
    staticClass: "text-danger text-center no-record",
    attrs: {
      "colspan": "12"
    }
  }, [_vm._v("No Record Found")])])])]), _c('Pager', {
    attrs: {
      "numberofrecords": _vm.TotalRecords,
      "CurrentPageNumber": _vm.CurrentPage,
      "prev-text": "Prev",
      "first-text": "First",
      "last-text": "Last",
      "next-text": "Next"
    },
    on: {
      "SetCurrentPage": _vm.pagerMethod
    }
  })], 1)], _c('br'), _c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('button', {
    staticClass: "btn btn-info float-right",
    attrs: {
      "type": "submit"
    },
    on: {
      "click": _vm.AddProductMoveToList
    }
  }, [_c('i', {
    staticClass: "fa fa-plus mr-2"
  }), _vm._v(_vm._s(_vm.$t('AddToList')))])])]), _c('br')], 2);
};
var TransferSearchListvue_type_template_id_2f4fe29b_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/TransferSearchList.vue?vue&type=template&id=2f4fe29b&scoped=true&

// EXTERNAL MODULE: ./src/components/Common/Pager.vue + 4 modules
var Pager = __webpack_require__("4555");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/TransferSearchList.vue?vue&type=script&lang=js&


/* harmony default export */ var TransferSearchListvue_type_script_lang_js_ = ({
  components: {
    Pager: Pager["a" /* default */]
  },
  props: {
    searchData: {
      type: Array,
      required: true
    },
    TotalRecord: {
      type: Number,
      required: true
    },
    CurrentPage: {
      type: Number,
      required: true
    }
  },
  watch: {
    searchData: {
      handler(newValue, oldValue) {
        if (newValue) {
          this.selectAll = false;
        }
      },
      deep: true
    }
  },
  created: function () {
    this.isVisible = true;
  },
  data() {
    return {
      searchUniqueName: '',
      searchItemName: '',
      searchItemCode: '',
      TotalRecords: 0,
      CurrentPage: 1,
      PageSize: 10,
      PageNumber: 1,
      filterRecodes: {},
      isVisible: false,
      selectedCheckItem: [],
      selectAll: false,
      singleChecked: false,
      isSingleChecked: false,
      checkAssetCatalogueId: 0,
      isValidation: false,
      MoveSelectedList: [],
      NoRecordFound: false,
      isLoading: false
    };
  },
  methods: {
    pagerMethod: function (value) {
      this.PageSize = value.PageSize;
      this.PageNumber = value.PageNumber;
      this.$parent.ShowsearchData(value);
    },
    checkAllSearchRecord: function () {
      var vm = this;
      vm.selectAll = !vm.selectAll;
      if (vm.selectAll) {
        vm.searchData.forEach(element => {
          element.isSelected = true;
        });
      } else {
        vm.searchData.forEach(element => {
          element.isSelected = false;
        });
      }
    },
    searchByColumnName: function () {
      let vm = this;
      vm.filterRecodes = null;
      if (vm.searchItemCode != "") {
        vm.filterRecodes = vm.searchData.filter(x => x.ItemCode.includes(vm.searchItemCode));
        return vm.isVisible = false;
      } else if (vm.searchItemName != "") {
        const str2 = vm.searchItemName.charAt(0).toLocaleLowerCase() + vm.searchItemName.slice(1);
        vm.filterRecodes = vm.searchData.filter(x => x.AssetCatalogName.toLocaleLowerCase().includes(vm.searchItemName.toLocaleLowerCase()));
        return vm.isVisible = false;
      } else if (vm.searchUniqueName != "") {
        const str2 = vm.searchUniqueName.charAt(0).toLocaleLowerCase() + vm.searchUniqueName.slice(1);
        vm.filterRecodes = vm.searchData.filter(x => x.AssetUniqueName.toLocaleLowerCase().includes(vm.searchUniqueName.toLocaleLowerCase()));
        return vm.isVisible = false;
      } else if (vm.searchItemCode == "" || vm.searchItemName == "" || vm.searchUniqueName == "") {
        return vm.isVisible = true;
      }
    },
    checkSelectedRecord: function () {
      var vm = this;
      vm.isSingleChecked = false;
      vm.checkAssetCatalogueId = 0;
      vm.selectedCheckItem = [];
      if (vm.selectAll == false) {
        vm.searchData.forEach(function (element) {
          vm.selectedCheckItem.push(element);
          vm.singleChecked = true;
        });
        vm.selectAll = true;
      } else {
        vm.searchData.forEach(function (element) {
          vm.selectedCheckItem = element;
          vm.singleChecked = false;
        });
        vm.selectAll = false;
        vm.selectedCheckItem = [];
      }
    },
    singleCheckRecord: function (item) {
      var vm = this;
      vm.selectAll = true;
      item.isSelected = !item.isSelected;
      if (item.isSelected) {
        vm.searchData.forEach(element => {
          if (!element.isSelected) {
            vm.selectAll = false;
          }
        });
      } else {
        vm.selectAll = false;
      }
    },
    checkQuantity: function (item) {
      var vm = this;
      let TotalQuantity = item.AvailableItems;
      let currentValue = item.TransferQuantity.replace(/[^0-9]/g, "");
      if (parseInt(currentValue) > TotalQuantity) {
        const getRecode = this.searchData.find(x => x.AssetCatalogueId === item.AssetCatalogueId);
        getRecode.TransferQuantity = '';
        return vm.ShowAlert(vm.$t("Transfer quantity should not be greater than the available quantity."), "warning", vm.$t("Alert"));
      } else {
        const getRecode = this.searchData.find(x => x.AssetCatalogueId === item.AssetCatalogueId);
        getRecode.TransferQuantity = currentValue.replace(/[^0-9]/g, "");
        return vm.isValidation = false;
      }
    },
    resetSearchField: function () {
      let vm = this;
      vm.searchItemCode = "";
      vm.searchItemName = "";
      vm.searchUniqueName = "";
      vm.isVisible = true;
    },
    AddProductMoveToList: function () {
      var vm = this;
      vm.isLoading = true;
      var isChecked = false;
      var isCorrectHighlightedError = false;
      var isAlreadyExists = false;
      vm.searchData.forEach(ele => {
        if (ele.isSelected) {
          isChecked = true;
          if (ele.TransferQuantity == 0) {
            isCorrectHighlightedError = true;
          }
          if (vm.MoveSelectedList.length > 0) {
            if (vm.MoveSelectedList.find(x => x.RelatedInfoId == ele.RelatedInfoId)) {
              vm.isLoading = false;
              return vm.ShowAlert(vm.$t("AlreadyExists").replace('{0}', ele.AssetUniqueName), "warning", vm.$t("Alert"));
            }
          }
          vm.MoveSelectedList.push(ele);
        }
      });
      if (!isChecked) {
        vm.MoveSelectedList = [];
        vm.isLoading = false;
        return vm.ShowAlert(vm.$t("AtleastSelectOneItem"), "warning", vm.$t("Alert"));
      }
      if (isCorrectHighlightedError) {
        vm.MoveSelectedList = [];
        vm.isLoading = false;
        return vm.ShowAlert(vm.$t("CorrectHighlightedErrors"), "warning", vm.$t("Alert"));
      }
      vm.MoveSelectedList.forEach(element => {
        element.isSelectProduct = false;
        element.TransferQuantityNew = element.TransferQuantity;
        const indexToRemove = vm.searchData.findIndex(item => item.RelatedInfoId === element.RelatedInfoId);
        if (indexToRemove !== -1) {
          vm.searchData.splice(indexToRemove, 1);
        }
      });
      vm.selectAll = false;
      vm.isLoading = false;
      vm.$emit('ProductMoveToList', vm.MoveSelectedList);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/TransferSearchList.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_TransferSearchListvue_type_script_lang_js_ = (TransferSearchListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Modal/TransferSearchList.vue?vue&type=style&index=0&id=2f4fe29b&prod&scoped=true&lang=css&
var TransferSearchListvue_type_style_index_0_id_2f4fe29b_prod_scoped_true_lang_css_ = __webpack_require__("6fdc");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Modal/TransferSearchList.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Modal_TransferSearchListvue_type_script_lang_js_,
  TransferSearchListvue_type_template_id_2f4fe29b_scoped_true_render,
  TransferSearchListvue_type_template_id_2f4fe29b_scoped_true_staticRenderFns,
  false,
  null,
  "2f4fe29b",
  null
  
)

/* harmony default export */ var TransferSearchList = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetCatalog/ProductMoveToList.vue?vue&type=template&id=36689dfc&scoped=true&
var ProductMoveToListvue_type_template_id_36689dfc_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 mt-3 Search-panel px-1"
  }, [_c('div', {
    staticClass: "heading-border"
  }, [_c('h5', {
    staticClass: "h5"
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('ProductMoveToList')))])])]), _c('div', {
    staticClass: "search-content"
  }, [_c('div', {
    staticClass: "w-100 mt-2 d-inline-block",
    attrs: {
      "id": "search-content"
    }
  }, [_c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left p-0 mb-2"
  }, [_c('Form', {
    ref: "addProdcutMoveList",
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        valid,
        errors
      }) {
        return [_c('div', {
          staticClass: "row mt-2"
        }, [_c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-4 col-xl-3 float-left"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v(_vm._s(_vm.$t('Location'))), _c('span', {
          staticClass: "text-danger"
        }, [_vm._v("*")])]), _c('Field', {
          staticClass: "w-100",
          attrs: {
            "name": "Location",
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
                  'is-invalid': errors[0]
                },
                attrs: {
                  "options": _vm.options,
                  "placeholder": "Select Location",
                  "show-count": true
                },
                model: {
                  value: _vm.TreeValue,
                  callback: function ($$v) {
                    _vm.TreeValue = $$v;
                  },
                  expression: "TreeValue"
                }
              }), errors[0] ? _c('span', {
                staticClass: "invalid-feedback d-block",
                attrs: {
                  "name": "Location"
                }
              }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
            }
          }], null, true)
        })], 1)])]), _c('div', {
          staticClass: "row mt-8"
        }, [_c('div', {
          staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left"
        }, [_c('label', {
          attrs: {
            "for": "Subject"
          }
        }, [_vm._v(_vm._s(_vm.$t('Description'))), _c('span', {
          staticClass: "text-danger"
        }, [_vm._v("*")])]), _c('Field', {
          staticClass: "w-100",
          attrs: {
            "name": "description",
            "rules": {
              'required': true
            }
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              errors
            }) {
              return [_c('textarea', {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.txtDescription,
                  expression: "txtDescription"
                }],
                staticClass: "form-control",
                class: {
                  'form-control': true,
                  'is-invalid': errors[0]
                },
                attrs: {
                  "name": "description",
                  "type": "text",
                  "placeholder": "Description",
                  "maxlength": "500"
                },
                domProps: {
                  "value": _vm.txtDescription
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.txtDescription = $event.target.value;
                  }
                }
              }), errors[0] ? _c('span', {
                staticClass: "invalid-feedback d-block",
                attrs: {
                  "name": "description"
                }
              }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
            }
          }], null, true)
        })], 1)]), _c('div', {
          staticClass: "listing mt-2"
        }, [_c('div', {
          staticClass: "row"
        }, [_c('div', {
          staticClass: "col-12 mb-2"
        }, [_c('div', {
          staticClass: "mr-2 d-inline-block"
        }, [_c('span', {
          staticClass: "legend-ovrdue"
        }), _vm._v(_vm._s(_vm.$t('LocationNotSame')) + " ")])])]), _c('div', {
          staticClass: "table-responsive"
        }, [_c('table', {
          staticClass: "table table-bordered mt-0"
        }, [_c('thead', {
          staticClass: "thead-bg"
        }, [_c('tr', [_c('th', {
          staticClass: "text-center"
        }, [_c('div', {
          staticClass: "custom-control custom-checkbox",
          on: {
            "click": function ($event) {
              return _vm.checkSelectedRecord(_vm.item);
            }
          }
        }, [_c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.selectAll,
            expression: "selectAll"
          }],
          staticClass: "chkItems custom-control-input",
          attrs: {
            "type": "checkbox",
            "id": "chkAll",
            "name": "checkbox"
          },
          domProps: {
            "checked": Array.isArray(_vm.selectAll) ? _vm._i(_vm.selectAll, null) > -1 : _vm.selectAll
          },
          on: {
            "change": function ($event) {
              var $$a = _vm.selectAll,
                $$el = $event.target,
                $$c = $$el.checked ? true : false;
              if (Array.isArray($$a)) {
                var $$v = null,
                  $$i = _vm._i($$a, $$v);
                if ($$el.checked) {
                  $$i < 0 && (_vm.selectAll = $$a.concat([$$v]));
                } else {
                  $$i > -1 && (_vm.selectAll = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
                }
              } else {
                _vm.selectAll = $$c;
              }
            }
          }
        }), _c('label', {
          staticClass: "custom-control-label universal-custom-control-label pt-1"
        })])]), _c('th', {
          staticClass: "text-center",
          attrs: {
            "scope": "col"
          }
        }, [_c('span', [_vm._v(_vm._s(_vm.$t('ItemCode')))])]), _c('th', {
          staticClass: "text-center",
          attrs: {
            "scope": "col"
          }
        }, [_c('span', [_vm._v(_vm._s(_vm.$t('PRODUCT_NAME')))])]), _c('th', {
          attrs: {
            "scope": "col"
          }
        }, [_c('span', [_vm._v(_vm._s(_vm.$t('UniqueName')))])]), _c('th', {
          attrs: {
            "scope": "col"
          }
        }, [_c('span', [_vm._v(" " + _vm._s(_vm.$t('Location')) + " ")])]), _c('th', {
          staticClass: "text-center",
          attrs: {
            "scope": "col"
          }
        }, [_c('span', [_vm._v(" " + _vm._s(_vm.$t('NUMBER_OF_ITEM')))])]), _c('th', {
          staticClass: "text-center",
          attrs: {
            "scope": "col"
          }
        }, [_c('span', [_vm._v(_vm._s(_vm.$t('AvailableItems')))])]), _c('th', {
          staticClass: "text-center",
          attrs: {
            "scope": "col"
          }
        }, [_c('span', [_vm._v(" " + _vm._s(_vm.$t('TransferQuantity')) + " ")])]), _c('th', {
          staticClass: "text-center",
          attrs: {
            "scope": "col"
          }
        }, [_vm._v(" " + _vm._s(_vm.$t('Action')))])])]), (_vm.selectItemData.length > 0 ? _vm.watchvalue = true : _vm.watchvalue = false) ? _c('tbody', _vm._l(_vm.selectItemData, function (item, index) {
          return _c('tr', {
            key: index
          }, [_c('td', {
            staticClass: "text-center"
          }, [_c('div', {
            staticClass: "custom-control custom-checkbox",
            on: {
              "click": function ($event) {
                return _vm.singleCheckRecord(item);
              }
            }
          }, [_c('input', {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: item.isSelectProduct,
              expression: "item.isSelectProduct"
            }],
            staticClass: "chkItems custom-control-input",
            staticStyle: {
              "display": "none"
            },
            attrs: {
              "type": "checkbox",
              "name": "checkbox"
            },
            domProps: {
              "checked": Array.isArray(item.isSelectProduct) ? _vm._i(item.isSelectProduct, null) > -1 : item.isSelectProduct
            },
            on: {
              "change": function ($event) {
                var $$a = item.isSelectProduct,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false;
                if (Array.isArray($$a)) {
                  var $$v = null,
                    $$i = _vm._i($$a, $$v);
                  if ($$el.checked) {
                    $$i < 0 && _vm.$set(item, "isSelectProduct", $$a.concat([$$v]));
                  } else {
                    $$i > -1 && _vm.$set(item, "isSelectProduct", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
                  }
                } else {
                  _vm.$set(item, "isSelectProduct", $$c);
                }
              }
            }
          }), _c('label', {
            staticClass: "custom-control-label universal-custom-control-label pt-1"
          })])]), _c('td', [_vm._v(_vm._s(item.ItemCode))]), _c('td', [_vm._v(_vm._s(item.AssetCatalogName))]), _c('td', [_vm._v(_vm._s(item.AssetUniqueName))]), _c('td', [_vm._v(_vm._s(item.LocationName))]), _c('td', {
            staticClass: "text-center single-action"
          }, [_c('span', {
            staticClass: "text-dark"
          }, [_c('i', {
            staticClass: "fa fa-list",
            attrs: {
              "aria-hidden": "true"
            }
          }), _c('span', {
            staticClass: "noti-circle noti-blue"
          }, [_vm._v(_vm._s(item.TotalQuantity))])])]), _c('td', {
            staticClass: "text-center single-action"
          }, [_c('span', {
            staticClass: "text-dark"
          }, [_c('i', {
            staticClass: "fa fa-list-ul",
            attrs: {
              "aria-hidden": "true"
            }
          }), _c('span', {
            staticClass: "noti-circle noti-green"
          }, [_vm._v(_vm._s(item.AvailableItems))])])]), _c('td', [item.CreateUniqueNameListing ? _c('input', {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: item.TransferQuantityNew,
              expression: "item.TransferQuantityNew"
            }],
            staticClass: "form-control",
            attrs: {
              "type": "number",
              "disabled": "disabled"
            },
            domProps: {
              "value": item.TransferQuantityNew
            },
            on: {
              "input": function ($event) {
                if ($event.target.composing) return;
                _vm.$set(item, "TransferQuantityNew", $event.target.value);
              }
            }
          }) : _c('input', {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: item.TransferQuantityNew,
              expression: "item.TransferQuantityNew"
            }],
            class: {
              'form-control': true,
              'is-invalid': item.TransferQuantityNew == 0 ? true : false
            },
            attrs: {
              "type": "number",
              "min": "1"
            },
            domProps: {
              "value": item.TransferQuantityNew
            },
            on: {
              "keyup": function ($event) {
                return _vm.checkQuantity(item);
              },
              "input": function ($event) {
                if ($event.target.composing) return;
                _vm.$set(item, "TransferQuantityNew", $event.target.value);
              }
            }
          })]), _c('td', {
            staticClass: "text-center"
          }, [_c('a', {
            attrs: {
              "href": "javascript:;",
              "title": "Delete"
            },
            on: {
              "click": function ($event) {
                return _vm.deleteItem(item.AssetCatalogueId);
              }
            }
          }, [_c('i', {
            staticClass: "fa fa-trash text-danger"
          })])])]);
        }), 0) : _c('tbody', {
          staticClass: "NoRecordsFound"
        }, [_c('tr', [_c('td', {
          staticClass: "text-center text-middle text-danger no-record",
          attrs: {
            "colspan": "15"
          }
        }, [_vm._v(_vm._s(_vm.$t('NoRecordfound')))])])])])])]), _c('div', {
          staticClass: "row mt-8",
          attrs: {
            "id": "ProductMove"
          }
        }, [_c('div', {
          staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left locationtransfer"
        }, [_c('label', {
          attrs: {
            "for": "Subject"
          }
        }, [_vm._v(_vm._s(_vm.$t('Comment'))), _c('span', {
          staticClass: "text-danger"
        })]), _c('textarea', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.txtComment,
            expression: "txtComment"
          }],
          staticClass: "form-control",
          attrs: {
            "cols": "30",
            "rows": "4",
            "maxlength": "2000"
          },
          domProps: {
            "value": _vm.txtComment
          },
          on: {
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.txtComment = $event.target.value;
            }
          }
        })])]), _vm._v(" "), _c('br'), _c('div', {
          staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left p-0"
        }, [_c('div', {
          staticClass: "row flex-row-reverse"
        }, [_c('div', {
          staticClass: "col-lg-6 text-right"
        }, [_c('a', {
          staticClass: "btn btn-success formbtn text-white mr-1",
          attrs: {
            "href": "javascript:;",
            "disabled": _vm.isButtonDisabled,
            "title": _vm.$t('Save')
          },
          on: {
            "click": _vm.handleClick
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
        }, [_vm._v(_vm._s(_vm.$t('MandatoryString')))])])])])])];
      }
    }])
  })], 1)])])]);
};
var ProductMoveToListvue_type_template_id_36689dfc_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/AssetCatalog/ProductMoveToList.vue?vue&type=template&id=36689dfc&scoped=true&

// EXTERNAL MODULE: ./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.cjs.js
var vue_treeselect_cjs = __webpack_require__("ca17");
var vue_treeselect_cjs_default = /*#__PURE__*/__webpack_require__.n(vue_treeselect_cjs);

// EXTERNAL MODULE: ./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.css
var vue_treeselect = __webpack_require__("542c");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetCatalog/ProductMoveToList.vue?vue&type=script&lang=js&




/* harmony default export */ var ProductMoveToListvue_type_script_lang_js_ = ({
  name: "ProductMoveToList",
  components: {
    'tree-view': vue_treeselect_cjs_default.a
  },
  props: {
    selectItemData: {
      type: Array,
      required: true
    },
    Location: {
      type: Number
    }
  },
  data() {
    return {
      TreeValue: null,
      txtComment: '',
      txtDescription: '',
      singleChecked: false,
      isSingleChecked: false,
      selectedItems: [],
      selectAll: false,
      watchvalue: false,
      selectedCheckItem: [],
      isValidation: false,
      list: [],
      options: [],
      isButtonDisabled: false
    };
  },
  created() {
    this.GetLocationByuserId();
    this.isButtonDisabled = false;
  },
  watch: {
    watchvalue(newval) {
      if (newval) {
        var vm = this;
        vm.isSingleChecked = true;
      }
    }
  },
  methods: {
    GetLocationByuserId: async function () {
      var vm = this;
      var url = `reqForm=transfer_to_ddl`;
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
    singleCheckRecord: function (item) {
      var vm = this;
      vm.selectAll = true;
      item.isSelectProduct = !item.isSelectProduct;
      if (item.isSelectProduct) {
        vm.selectItemData.forEach(element => {
          if (!element.isSelectProduct) {
            vm.selectAll = false;
          }
        });
      } else {
        vm.selectAll = false;
      }
    },
    checkSelectedRecord: function () {
      var vm = this;
      vm.selectAll = !vm.selectAll;
      if (vm.selectAll) {
        vm.selectItemData.forEach(element => {
          element.isSelectProduct = true;
        });
      } else {
        vm.selectItemData.forEach(element => {
          element.isSelectProduct = false;
        });
      }
    },
    checkQuantity: function (item) {
      var vm = this;
      let TotalQuantity = item.AvailableItems;
      let currentValue = item.TransferQuantityNew.replace(/[^0-9]/g, "");
      if (parseInt(currentValue) > TotalQuantity) {
        const getRecode = this.selectItemData.find(x => x.AssetCatalogueId === item.AssetCatalogueId);
        getRecode.TransferQuantityNew = '';
        return vm.ShowAlert(vm.$t("Transfer quantity should not be greater than the available quantity."), "warning", vm.$t("Alert"));
      } else {
        const getRecode = this.selectItemData.find(x => x.AssetCatalogueId === item.AssetCatalogueId);
        getRecode.TransferQuantityNew = currentValue.replace(/[^0-9]/g, "");
        ;
        return vm.isValidation = false;
      }
    },
    handleClick() {
      if (!this.isButtonDisabled) {
        this.isButtonDisabled = true;
        this.SubmitData();
      }
    },
    SubmitData: function () {
      var vm = this;
      vm.$refs.addProdcutMoveList.validate().then(result => {
        let MoveToInfo = "";
        let totalSelectedQuantity = 0;
        var rid = 0; // required RelatedInfoId
        var qty = 0; //dyanmic;
        var description = vm.txtDescription;
        var comment = vm.txtComment;
        vm.isValidation = false;
        if (vm.selectAll == false && vm.isSingleChecked == false) {
          this.isButtonDisabled = false;
          return vm.ShowAlert(vm.$t("Minimum One Product should be selected."), "warning", vm.$t("Alert"));
        }
        if (vm.TreeValue == '' || vm.txtDescription == '') {
          this.isButtonDisabled = false;
          return;
        }
        if (vm.TreeValue == this.Location) {
          this.isButtonDisabled = false;
          return vm.ShowAlert(vm.$t("LocationNotSame"), "warning", vm.$t("Alert"));
        }
        var isChecked = false;
        var isCorrectHighlightedError = false;
        let AssetCatalogueId = this.selectItemData[0].AssetCatalogueId;
        let CreateUniqueNameListing = this.selectItemData[0].CreateUniqueNameListing;
        vm.selectItemData.forEach(ele => {
          if (ele.isSelectProduct) {
            isChecked = true;
            if (ele.TransferQuantityNew == 0) {
              isCorrectHighlightedError = true;
            }
            rid = ele.RelatedInfoId;
            qty = ele.TransferQuantityNew;
            MoveToInfo += rid + '*' + qty + '*' + description + '*' + comment + '|';
            totalSelectedQuantity += qty;
          }
        });
        if (!isChecked) {
          this.isButtonDisabled = false;
          return vm.ShowAlert(vm.$t("AtleastSelectOneItem"), "warning", vm.$t("Alert"));
        }
        if (isCorrectHighlightedError) {
          this.isButtonDisabled = false;
          return vm.ShowAlert(vm.$t("CorrectHighlightedErrors"), "warning", vm.$t("Alert"));
        }
        var formData = new FormData();
        let obj = {
          AssetCatalogueId: AssetCatalogueId,
          ItemName: '',
          ItemGroupName: '',
          ItemType: '',
          Quantity: '',
          RelatedInfoId: '',
          LocationId: vm.TreeValue,
          LocationName: '',
          NumberOfItems: '',
          UniqueName: '',
          Description: '',
          AvailableItems: '',
          CreateUniqueNameListing: CreateUniqueNameListing,
          ItemCode: '',
          MoveToInfo: MoveToInfo,
          ParentLocationId: ''
        };
        var postString = {
          "postString": obj
        };
        formData.append("postString", JSON.stringify(postString));
        DataService["a" /* default */].UpdateQuantityOnLocation(formData).then(response => {
          if (response.data != null) {
            var result = response.data;
            if (result.result == "success") {
              vm.ShowAlert(vm.$t("Product has been successfully Transferred"), `${result.result}`, vm.$t("Alert"));
              vm.isButtonDisabled = false;
              return this.$router.push({
                name: "ProductListing"
              });
            } else {
              vm.isButtonDisabled = false;
              vm.ShowAlert(vm.$t(`${result.msg}`), `${result.result}`, vm.$t("Alert"));
            }
          } else {
            vm.isButtonDisabled = false;
          }
        });
      });
    },
    onCancel: function () {
      this.$router.push({
        name: "ProductListing"
      });
    },
    deleteItem(value) {
      var vm = this;
      vm.confirmR(vm.$t('Are you sure you want to delete these record(s)?'), true, false, function (result) {
        const index = vm.selectItemData.findIndex(x => x.AssetCatalogueId === value);
        if (index !== -1) {
          vm.selectItemData.splice(index, 1);
        }
        vm.selectAll = false;
        return vm.ShowAlert(vm.$t("Product has been deleted Successfully "), "success", vm.$t("Alert"));
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/AssetCatalog/ProductMoveToList.vue?vue&type=script&lang=js&
 /* harmony default export */ var AssetCatalog_ProductMoveToListvue_type_script_lang_js_ = (ProductMoveToListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/AssetCatalog/ProductMoveToList.vue?vue&type=style&index=0&id=36689dfc&prod&scoped=true&lang=css&
var ProductMoveToListvue_type_style_index_0_id_36689dfc_prod_scoped_true_lang_css_ = __webpack_require__("d802");

// CONCATENATED MODULE: ./src/views/AssetCatalog/ProductMoveToList.vue






/* normalize component */

var ProductMoveToList_component = Object(componentNormalizer["a" /* default */])(
  AssetCatalog_ProductMoveToListvue_type_script_lang_js_,
  ProductMoveToListvue_type_template_id_36689dfc_scoped_true_render,
  ProductMoveToListvue_type_template_id_36689dfc_scoped_true_staticRenderFns,
  false,
  null,
  "36689dfc",
  null
  
)

/* harmony default export */ var ProductMoveToList = (ProductMoveToList_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/SearchAssetWithLocation.vue?vue&type=script&lang=js&






/* harmony default export */ var SearchAssetWithLocationvue_type_script_lang_js_ = ({
  components: {
    TransferSearchList: TransferSearchList,
    ProductMoveToList: ProductMoveToList,
    'tree-view': vue_treeselect_cjs_default.a
  },
  data() {
    return {
      TreeValue: null,
      ProducttData: [],
      Groupname: '',
      LocationData: [],
      AssetTypeData: [],
      isshowuniquename: false,
      popover: {
        visibility: 'click'
      },
      txtAssetType: '',
      UserId: null,
      txtProduct: '',
      txtItemName: '',
      itemname: '',
      ProductsArray: [],
      showProductDropdown: false,
      iselectVal: '',
      ShowProducttbl: false,
      GetParentDetails: null,
      containerCls: '',
      IsAssetOfList: false,
      issueTo: null,
      txtBarCode: '',
      FirstfolderShareOption: '',
      Isbarcodediv: false,
      IsEnableAssetManagement: false,
      searchData: [],
      barcodeData: [],
      dropSearchBaseData: [],
      selectItemData: [],
      options: [],
      IsEnableDisableButton: false,
      RFIDSetupButton: true,
      isLoading: false,
      CurrentPage: 1,
      TotalRecord: 0
    };
  },
  created: function () {
    this.UserId = this.GetUserInfo.ID;
    this.EnableAssetManagement();
    this.EnableDisableButton();
  },
  methods: {
    async EnableAssetManagement() {
      let url = `moduleName=Asset&configkey=CanSeeAssetManagement`;
      await DataService["a" /* default */].EnableAssetManagement(url).then(response => {
        this.IsEnableAssetManagement = response.data;
        if (this.IsEnableAssetManagement) {
          this.GetLocationByuserId();
        }
      });
    },
    GetLocationByuserId: async function () {
      var vm = this;
      var url = `reqForm=transfer`;
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
    async BindItemTypeByUserId() {
      var vm = this;
      vm.isLoading = true;
      if (vm.TreeValue == null) {
        vm.isLoading = false;
        return;
      } else {
        vm.itemname = null;
        vm.txtProduct = null;
        vm.txtAssetType = null;
        let url = `type=ITEMCODE&issueTo=0&locationId=${vm.TreeValue}&requestType=ASSIGN&requestFrom=transfer`;
        await DataService["a" /* default */].AssignGetAssetType(url).then(response => {
          this.AssetTypeData = response.data;
          vm.isLoading = false;
        });
        vm.isLoading = false;
      }
    },
    async GetCompanyAssestCatalogs(ths) {
      var vm = this;
      vm.isLoading = true;
      let url = `id=${ths}&issueTo=0&locationId=${this.TreeValue}&requestFrom=`;
      await DataService["a" /* default */].GetCompanyAssestCatalogs(url).then(response => {
        this.ProducttData = response.data;
        vm.isLoading = false;
      });
      vm.isLoading = false;
    },
    setProductsName: function (event) {
      var vm = this;
      vm.iselectVal = event.Value;
      vm.itemname = event.Name;
      vm.showProductDropdown = false;
    },
    async ItemListOnclick() {
      var url = `assetCatalogId=${this.txtProduct}&issueTo=&locationId=${this.TreeValue}&requestFrom=transfer&name=${this.itemname}&assetType=`;
      //debugger
      this.ProductsArray = [];
      await DataService["a" /* default */].GetUniqueAssetItems(url).then(response => {
        debugger;
        this.ProductsArray = response.data;
        this.showProductDropdown = true;
        this.isshowuniquename = true;
      });
    },
    clickHendlerAllWindow() {
      this.isshowuniquename = false;
      this.ProductsArray = [];
    },
    ProductNameChange: function () {
      this.ProductsArray = [];
      this.itemname = '';
    },
    searchfilter: function () {},
    OpenAssetOfList: function () {
      this.IsAssetOfList = true;
      this.ShowProducttbl = false;
    },
    SearchByProductBarCode() {
      // debugger;
      var vm = this;
      this.$refs.addBarCodeForm.validate().then(result => {
        if (this.txtBarCode == null || this.txtBarCode == "") {
          return;
        } else {
          const url = `id=&isView=1&barcode=${this.txtBarCode}&assetType=&assetUniqueId=&selfCheckout=&reqFrom=transfer&isFor=search&isuniqueSearch=&issueTo=&assignedFrom=&assignedTill=&locationId=&RFID=0&pageSize=&pageNum=1&assignedFromDateTime=&assignedTillDateTime=&startTime=&endTime=&uniqueIds=&catalogueIds=`;
          DataService["a" /* default */].GetCompanyAssestCatalogsDetalis(url).then(response => {
            this.barcodeData = [];
            if (response.data[0] == null) {
              this.txtBarCode = null;
              this.ShowAlert(this.$t("Please enter a valid Barcode "), "warning", this.$t("Alert"));
              return;
            }
            this.barcodeData = response.data[0];
            var url1 = `assetCatalogId=${response.data[0].AssetCatalogueId}`;
            DataService["a" /* default */].IsProductTransferable(url1).then(response => {
              if (response.data == 'False') {
                this.ShowAlert(this.$t("Item Not Transferable"), "warning", this.$t("Alert"));
                return;
              } else {
                this.IsAssetOfList = true;
                var temp = [];
                temp.push(this.barcodeData);
                temp.forEach(ele => {
                  const GetAlreadyExist = this.searchData.findIndex(x => x.AssetCatalogueId === ele.AssetCatalogueId);
                  if (GetAlreadyExist != -1) {
                    this.searchData.splice(GetAlreadyExist, 1);
                  }
                });
                this.searchData.push(this.barcodeData);
                temp.forEach(ele => {
                  const GetValueofTransferQuantity = this.searchData.find(x => x.AssetCatalogueId === ele.AssetCatalogueId);
                  GetValueofTransferQuantity.TransferQuantity = '' && false;
                  var availableItems = ele.AvailableItems;
                  ele.isSelected = false;
                  if (availableItems == "1") {
                    ele.TransferQuantity = availableItems;
                  } else {
                    ele.TransferQuantity = '';
                  }
                });
              }
            });
          });
        }
      });
    },
    async ShowsearchData(event) {
      let vm = this;
      let url = '';
      vm.isLoading = true;
      vm.$refs.MoveListSearch.validate().then(async result => {
        if (result) {
          if (event == null) {
            url = `id=${vm.txtProduct}&isView=1&barcode=&assetType=${vm.txtAssetType}&assetUniqueId=${vm.iselectVal}&selfCheckout=&reqFrom=transfer&isFor=search&isuniqueSearch=&issueTo=&assignedFrom=&assignedTill=&&startTime=&endTime=&locationId=${vm.TreeValue}&RFID=0&pageSize=&pageNum=&assignedFromDateTime=&assignedTillDateTime=&uniqueIds=&catalogueIds=`;
          } else {
            url = `id=${vm.txtProduct}&isView=1&barcode=&assetType=${vm.txtAssetType}&assetUniqueId=${vm.iselectVal}&selfCheckout=&reqFrom=transfer&isFor=search&isuniqueSearch=&issueTo=&assignedFrom=&assignedTill=&&startTime=&endTime=&locationId=${vm.TreeValue}&RFID=0&pageSize=${event.PageSize}&pageNum=${event.PageNumber}&assignedFromDateTime=&assignedTillDateTime=&uniqueIds=&catalogueIds=`;
          }
          await DataService["a" /* default */].GetCompanyAssestCatalogsDetalis(url).then(response => {
            vm.searchData = [];
            if (response.data[0] == null) {
              if (response.data.Message != "") {
                this.ShowAlert(response.data.Message), "warning", this.$t("Alert");
                vm.TotalRecord = 0;
              }
              vm.isLoading = false;
              return;
            }
            if (response.data.length > 1) {
              vm.searchData = response.data;
              vm.isLoading = false;
              vm.IsAssetOfList = true;
              vm.searchData.forEach(ele => {
                var availableItems = ele.AvailableItems;
                ele.isSelected = false;
                if (availableItems == "1") {
                  ele.TransferQuantity = availableItems;
                } else {
                  ele.TransferQuantity = '';
                }
              });
              vm.TotalRecord = vm.searchData[0].TOTALRECORDS;
              //vm.$children[7].pagerMethods();
              vm.TotalPages = Math.ceil(vm.TotalRecord / vm.$children[7].PageSize);
              vm.CurrentPage = vm.$children[7].PageNumber;
              return;
            }
            vm.isLoading = false;
            vm.IsAssetOfList = true;
            vm.dropSearchBaseData = response.data[0];
            var temp = [];
            temp.push(vm.dropSearchBaseData);
            temp.forEach(ele => {
              const GetAlreadyExist = this.searchData.findIndex(x => x.AssetCatalogueId === ele.AssetCatalogueId);
              if (GetAlreadyExist != -1) {
                this.searchData.splice(GetAlreadyExist, 1);
              }
            });
            vm.searchData.push(this.dropSearchBaseData);
            temp.forEach(ele => {
              const GetValueofTransferQuantity = this.searchData.find(x => x.AssetCatalogueId === ele.AssetCatalogueId);
              GetValueofTransferQuantity.TransferQuantity = '' && false;
              var availableItems = ele.AvailableItems;
              ele.isSelected = false;
              if (availableItems == "1") {
                ele.TransferQuantity = availableItems;
              } else {
                ele.TransferQuantity = '';
              }
            });
            vm.TotalRecord = vm.searchData[0].TOTALRECORDS;
            // vm.$children[7].pagerMethods();
            vm.TotalPages = Math.ceil(vm.TotalRecord / vm.$children[7].PageSize);
            vm.CurrentPage = vm.$children[7].PageNumber;
          });
        }
      });
      vm.isLoading = false;
    },
    ClearBarcode: function () {
      return this.txtBarCode = " ";
    },
    ProductMoveToList: function (ProductMoveToList) {
      var vm = this;
      vm.selectItemData = ProductMoveToList;
      console.log(vm.selectItemData);
    },
    EnableDisableButton() {
      var vueObj = this;
      vueObj.isLoading = true;
      DataService["a" /* default */].GetEnableDisableGroupCode().then(response => {
        vueObj.isLoading = false;
        if (response.data.length > 0) {
          if (response.data[0].IS_ENABLE == 0) {
            this.RFIDSetupButton = false;
          } else {
            this.RFIDSetupButton = true;
          }
        } else {
          this.RFIDSetupButton = true;
        }
      });
      vueObj.isLoading = false;
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/SearchAssetWithLocation.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_SearchAssetWithLocationvue_type_script_lang_js_ = (SearchAssetWithLocationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Modal/SearchAssetWithLocation.vue?vue&type=style&index=0&id=6c181838&prod&scoped=true&lang=css&
var SearchAssetWithLocationvue_type_style_index_0_id_6c181838_prod_scoped_true_lang_css_ = __webpack_require__("66c2");

// CONCATENATED MODULE: ./src/components/Modal/SearchAssetWithLocation.vue






/* normalize component */

var SearchAssetWithLocation_component = Object(componentNormalizer["a" /* default */])(
  Modal_SearchAssetWithLocationvue_type_script_lang_js_,
  SearchAssetWithLocationvue_type_template_id_6c181838_scoped_true_render,
  SearchAssetWithLocationvue_type_template_id_6c181838_scoped_true_staticRenderFns,
  false,
  null,
  "6c181838",
  null
  
)

/* harmony default export */ var SearchAssetWithLocation = (SearchAssetWithLocation_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetCatalog/TransferItem.vue?vue&type=script&lang=js&


/* harmony default export */ var TransferItemvue_type_script_lang_js_ = ({
  components: {
    SearchTransferAssetList: SearchAssetWithLocation
  },
  data() {
    return {
      isLoading: false,
      GetParentDetails: null
    };
  },
  created: function () {},
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
    }
  }
});
// CONCATENATED MODULE: ./src/views/AssetCatalog/TransferItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var AssetCatalog_TransferItemvue_type_script_lang_js_ = (TransferItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/AssetCatalog/TransferItem.vue





/* normalize component */

var TransferItem_component = Object(componentNormalizer["a" /* default */])(
  AssetCatalog_TransferItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TransferItem = __webpack_exports__["default"] = (TransferItem_component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-24784a8e.js.map