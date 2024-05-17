(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-dde5ecf6"],{

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

/***/ "75fe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Asset/Scanneditems.vue?vue&type=template&id=97caf67e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_c('div', {
    staticClass: "form--group mt-1"
  }, [_c('div', {
    staticClass: "custom-control p-0 custom-radio mr-4 custom-control-inline"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.Case,
      expression: "Case"
    }],
    staticClass: "mr-2",
    staticStyle: {
      "width": "18px"
    },
    attrs: {
      "type": "radio",
      "name": "IsDocs",
      "value": "0"
    },
    domProps: {
      "value": 0,
      "checked": _vm._q(_vm.Case, 0)
    },
    on: {
      "change": [function ($event) {
        _vm.Case = 0;
      }, function ($event) {
        return _vm.ScannedRadiotype('RFID');
      }]
    }
  }), _vm._v("Rfid Tags ")]), _c('div', {
    staticClass: "custom-contol p-0 custom-radio mr-4 custom-control-inline"
  }, [_c('input', {
    staticClass: "mr-2",
    staticStyle: {
      "width": "18px"
    },
    attrs: {
      "type": "radio",
      "name": "IsDocs",
      "value": "1"
    },
    on: {
      "change": function ($event) {
        return _vm.ScannedRadiotype('Type');
      }
    }
  }), _vm._v("Beacon ")])]), _c('loader', {
    attrs: {
      "is-visible": _vm.isLoading
    }
  }), _c('tg-list', {
    attrs: {
      "showCheckBox": true,
      "IsShowAction": false,
      "listType": ['List'],
      "ModuleName": "Asset",
      "SubModuleCode": "Asset",
      "PageSize": _vm.PageSize,
      "IdentityColumn": "Id",
      "HeaderText": "Scanned Items",
      "ListData": _vm.GroupData,
      "HeaderData": _vm.Headers,
      "widgets": _vm.widgets,
      "callbackfunction": _vm.GetScannedList,
      "HeaderButtons": _vm.listheaderbuttons,
      "TotalRecords": _vm.TotalRecords,
      "SearchFields": _vm.leftSearchFields,
      "RenderRowActionMethod": _vm.renderActions,
      "ListDataCallBackFunction": _vm.GetScannedList,
      "LegendArray": _vm.LegendArray,
      "SortExp": _vm.SortExp,
      "SortBy": _vm.SortBy,
      "NorecordfoundText": _vm.$t('NoRecordfound')
    },
    on: {
      "LeftsearchButtonClick": _vm.leftCommonSearch,
      "PagerButtonClick": _vm.pagerMethod,
      "HeaderButtonClick": _vm.commonHeaderButtonClick,
      "ActionButtonClick": _vm.actionButtonClick,
      "SortdataButtonClick": _vm.sortdata
    },
    scopedSlots: _vm._u([{
      key: "slotdata",
      fn: function ({
        data
      }) {
        return [data.column.COLUMN_NAME == 'EPC_TAG' ? [data.row.EPC_TAG ? _c('span', {
          staticClass: "text-dark"
        }, [_c('a', {
          staticClass: "relatedproduct",
          attrs: {
            "href": "javascript:void(0);",
            "id": data.row.ASSET_TYPE,
            "title": "Click here to edit Product type"
          },
          on: {
            "click": function ($event) {
              return _vm.GetItems(data.row);
            }
          }
        }, [_c('em', {
          staticClass: "text-primary",
          attrs: {
            "aria-hidden": "true"
          }
        }, [_vm._v(_vm._s(data.row.EPC_TAG))])])]) : _vm._e()] : _vm._e()];
      }
    }])
  }), _vm.IsAssignGroup ? _c('ScannedItemPopup', {
    attrs: {
      "checkboxarray": _vm.checkboxarray,
      "assDetailIDs": _vm.assDetailIDs
    },
    on: {
      "CloseScannedItem": _vm.CloseScannedItem
    }
  }) : _vm._e(), _vm.IsItems ? _c('ScannedItem', {
    attrs: {
      "itemData": _vm.itemData
    },
    on: {
      "CloseGetItems": _vm.CloseGetItems
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/Asset/Scanneditems.vue?vue&type=template&id=97caf67e&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./src/views/Asset/ScanneditemsSchema.js

let buttons = [{
  title: 'Page Tour',
  iconClass: 'fa fa-road',
  callbackfunction: 'setTourGuideSteps',
  additionalClass: '',
  isdisabled: false,
  isvisible: true,
  checkPrivilege: false
}, {
  title: 'Assign Group',
  iconClass: 'fa fa-user-plus',
  callbackfunction: 'Assigngroup',
  additionalClass: '',
  isdisabled: false,
  isvisible: true,
  checkPrivilege: false
}, {
  title: 'UnAssign Group',
  iconClass: 'fa fa-user-plus',
  callbackfunction: 'UnAssigngroup',
  additionalClass: '',
  isdisabled: false,
  isvisible: true,
  checkPrivilege: false
}, {
  title: 'Delete',
  id: 'DeleteMultiple',
  iconClass: 'fa fa-trash',
  callbackfunction: 'DeleteRFID',
  additionalClass: '',
  isdisabled: true,
  isvisible: true,
  checkPrivilege: false,
  isEnabledOnSelectedRow: true
}];
let leftsearchSchema = [{
  fieldName: "EPC Tag",
  fieldType: "text",
  fieldIcon: "fa-file",
  paramName: "search",
  fieldSearchConditionName: [''],
  isSearch: false,
  value: "",
  listOptions: []
}];
let listActions = [];
/* harmony default export */ var ScanneditemsSchema = ({
  buttons,
  leftsearchSchema,
  listActions
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/ScannedItemPopup.vue?vue&type=template&id=6d9342ea&
var ScannedItemPopupvue_type_template_id_6d9342ea_render = function render() {
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
  }, [_vm._v(" " + _vm._s(_vm.$t('Assign Group')) + " ")]), _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-original-title": "Close"
    },
    on: {
      "click": _vm.CloseAssigngroup
    }
  }, [_c('em', {
    staticClass: "fa fa-times"
  })])]), _vm._m(0), _c('div', {
    staticClass: "modal-body"
  }, [_c('div', {
    staticClass: "row ml-2"
  }, [_c('div', {
    staticClass: "col-sm-12 col-md-6 col-lg-4 col-xl-3 float-left"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Group Name:")]), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")]), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.TxtGroupName,
      expression: "TxtGroupName"
    }],
    class: {
      'form-control w-100': true
    },
    attrs: {
      "name": "GroupName"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.TxtGroupName = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Select")]), _vm._l(_vm.GroupData, function (item, itemIndex) {
    return _c('option', {
      key: itemIndex,
      domProps: {
        "value": item.group_id
      }
    }, [_vm._v(_vm._s(item.group_name))]);
  })], 2)])])])]), _c('div', {
    staticClass: "modal-footer"
  }, [_vm._m(1), _c('button', {
    staticClass: "btn btn-success",
    on: {
      "click": function ($event) {
        return _vm.Savegroup();
      }
    }
  }, [_vm._v(" Save")])])])])])]);
};
var ScannedItemPopupvue_type_template_id_6d9342ea_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "d-flex flex-wrap ml-4"
  }, [_c('div', {
    staticClass: "col-md-12 p-0 mt-4"
  }, [_c('div', {
    staticClass: "heading-border"
  }, [_c('h5', {
    staticClass: "h5"
  }, [_c('span', [_vm._v("Assign Group To RFID TAG")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-lg-12"
  }, [_c('small', {
    staticClass: "text-danger"
  }, [_vm._v("Fields marked with an asterisk (*) are mandatory.")])]);
}];

// CONCATENATED MODULE: ./src/components/Modal/ScannedItemPopup.vue?vue&type=template&id=6d9342ea&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/ScannedItemPopup.vue?vue&type=script&lang=js&

/* harmony default export */ var ScannedItemPopupvue_type_script_lang_js_ = ({
  props: {
    assDetailIDs: Number,
    checkboxarray: Array
  },
  data() {
    return {
      IsShowAddNamePopup: false,
      GroupData: [],
      TxtGroupName: '',
      group_name: '',
      selectedRFIDS: '',
      is_unassigned: '0'
    };
  },
  created: function () {
    //debugger;       
    this.GetGroupName();
    // this.GetScannedList();
  },

  methods: {
    CloseAssigngroup: function () {
      this.$emit('CloseScannedItem');
    },
    GetGroupName: async function () {
      var vueObj = this;
      await DataService["a" /* default */].GetScannedGroupName().then(response => {
        if (response.data != null) {
          if (response.data.DATA.length > 0) {
            vueObj.GroupData = response.data.DATA;
            // this.$emit("GetScannedList");
          }
        }
      });
    },

    Savegroup: async function () {
      //debugger;      
      var vm = this;
      var obj = `groupNames=${vm.TxtGroupName}&selectedRFIDS=${vm.assDetailIDs}&is_unassigned=${vm.is_unassigned}`;
      await DataService["a" /* default */].AddSaveAssignGroup(obj).then(response => {
        if (response.data == 'True') {
          vm.ShowAlert("Group Assgin successfully.", "success", true, vm.$t("Alert"));
        }
        this.$emit('CloseScannedItem');
        this.$emit('checkboxarray', '');
        this.$parent.GetScannedList();
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/ScannedItemPopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_ScannedItemPopupvue_type_script_lang_js_ = (ScannedItemPopupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Modal/ScannedItemPopup.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Modal_ScannedItemPopupvue_type_script_lang_js_,
  ScannedItemPopupvue_type_template_id_6d9342ea_render,
  ScannedItemPopupvue_type_template_id_6d9342ea_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ScannedItemPopup = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/ScannedItem.vue?vue&type=template&id=64fa75e6&
var ScannedItemvue_type_template_id_64fa75e6_render = function render() {
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
  }, [_vm._v(" Name- " + _vm._s(_vm.itemData.EPC_TAG) + " ")]), _c('button', {
    staticClass: "close",
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": _vm.CloseItems
    }
  }, [_c('i', {
    staticClass: "fa fa-times",
    attrs: {
      "aria-hidden": "true"
    }
  })])]), _vm._m(0), _c('div', {
    staticClass: "border p-3"
  }, [_c('dynamic-form', {
    ref: "GetItem",
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
  }, [_vm._v(" " + _vm._s(_vm.$t('Required')))])], 1)])])])], 1);
};
var ScannedItemvue_type_template_id_64fa75e6_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "d-flex flex-wrap ml-4"
  }, [_c('div', {
    staticClass: "col-md-12 p-0 mt-4"
  }, [_c('div', {
    staticClass: "heading-border"
  }, [_c('h5', {
    staticClass: "h5"
  }, [_c('span', [_vm._v("Pair Unique Items")])])])])]);
}];

// CONCATENATED MODULE: ./src/components/Modal/ScannedItem.vue?vue&type=template&id=64fa75e6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/ScannedItem.vue?vue&type=script&lang=js&


/* harmony default export */ var ScannedItemvue_type_script_lang_js_ = ({
  props: {
    itemData: Array
  },
  data() {
    return {
      isLoading: false,
      CompanyId: '',
      UserId: '',
      UniqueData: [],
      FormSchema: [{
        layoutType: "double",
        Data: [{
          astype: "SelectField",
          label: this.$t('ItemName'),
          name: "ItemName",
          value: "",
          placeholder: "",
          //disabled: true,
          validationRules: {
            "required": true
          },
          config: {
            options: [],
            onChange: this.onChangeDropdown
          }
        }, {
          astype: "SelectField",
          label: this.$t('Name'),
          name: "Name",
          value: "",
          placeholder: "",
          //disabled: true,
          validationRules: {
            "required": true
          },
          config: {
            options: []
            //onChange: this.onChangeDropdown
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
        onClick: this.CloseItems
      }]
    };
  },
  created: function () {
    //Debugger;
    var vm = this;
    vm.UserId = vm.GetUserInfo.ID, vm.CompanyId = vm.GetUserInfo.CompanyId, this.FetchData();
    // this.GetScannedList();
  },

  methods: {
    CloseItems: function () {
      var vm = this;
      this.$emit('CloseGetItems');
    },
    FetchData() {
      //Debugger;
      var vm = this;
      var url = `?UserId=${vm.UserId}&companyId=${vm.CompanyId}`;
      DataService["a" /* default */].GetItems(url).then(response => {
        //Debugger;                                  
        if (response.data.length > 0) {
          //Debugger;
          response.data.forEach((item, index) => {
            vm.FormSchema[0].Data[0].config.options.push({
              name: item.NAME,
              value: `${item.ASSET_CATALOGUE_ID}`
            });
          });
          vm.UpdateKeyVale();
        }
      });
    },
    onChangeDropdown(evt) {
      //Debugger
      var vm = this;
      vm.isLoading = true;
      var url = `?UserId=${vm.UserId}&companyId=${vm.CompanyId}&id=${evt.target.value}`;
      DataService["a" /* default */].GetUniqueNamesForRFID(url).then(function (response) {
        //Debugger;                                             
        if (response.data.length > 0) {
          //Debugger;
          vm.FormSchema[0].Data[1].config.options = [];
          response.data.forEach((item, index) => {
            vm.FormSchema[0].Data[1].config.options.push({
              name: item.UNIQUE_NAME,
              value: `${item.RELATED_INFO_ID}`
            });
          });
          vm.UpdateKeyVale();
          vm.isLoading = false;
        }
      });
    },
    UpdateKeyVale() {
      debugger;
      this.$refs.GetItem.UpdateKeyValue();
    },
    async onSubmit(formfields) {
      let vm = this;
      const obj = {
        companyId: vm.CompanyId,
        loggedinUserId: vm.UserId,
        id: vm.itemData.Id,
        itemUniqueID: formfields.Name
      };
      //Debugger;
      let jsonObject = JSON.stringify(obj);
      await DataService["a" /* default */].UpdateItemsForRFIDTag(obj).then(response => {
        response.data.Status;
        if (response.data != null) {
          if (response.data.Status == "-1") {
            vm.ShowAlert(response.data.AssignedToName, "Failure", vm.$t("Alert"));
            vm.$parent.GetScannedList();
          } else if (response.data.Status == "2") {
            vm.ShowAlert(response.data.AssignedToName, "Warning", vm.$t("Alert"));
            vm.$parent.GetScannedList();
            //vm.ShowAlert("This item is already assigned to " + data.asignedto + ", please wait for return.");
          } else {
            vm.ShowAlert("Item attached successfully.", "success", true, vm.$t("Alert"));
            vm.$parent.GetScannedList();
            vm.CloseItems();
          }
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/ScannedItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_ScannedItemvue_type_script_lang_js_ = (ScannedItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Modal/ScannedItem.vue





/* normalize component */

var ScannedItem_component = Object(componentNormalizer["a" /* default */])(
  Modal_ScannedItemvue_type_script_lang_js_,
  ScannedItemvue_type_template_id_64fa75e6_render,
  ScannedItemvue_type_template_id_64fa75e6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ScannedItem = (ScannedItem_component.exports);
// EXTERNAL MODULE: ./src/components/Common/Pager.vue + 4 modules
var Pager = __webpack_require__("4555");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Asset/Scanneditems.vue?vue&type=script&lang=js&






/* harmony default export */ var Scanneditemsvue_type_script_lang_js_ = ({
  components: {
    Pager: Pager["a" /* default */],
    ScannedItemPopup: ScannedItemPopup,
    ScannedItem: ScannedItem
  },
  data() {
    return {
      txtsearch: null,
      Case: 0,
      ListType1: true,
      BeaconType: true,
      EPC_TAG: '',
      Popup: false,
      ListType2: false,
      sortBy: '',
      sortExp: '',
      Name: '',
      Type: null,
      GroupData: [],
      itemData: [],
      noRecord: false,
      TotalRecords: 0,
      pageNum: 1,
      PageSize: 10,
      CurrentPage: 1,
      TotalPages: 0,
      isLoading: false,
      selectAll: false,
      selectedItems: 0,
      IsAssignGroup: false,
      IsItems: false,
      assDetailIDs: '',
      id: '',
      widgets: [],
      listheaderbuttons: ScanneditemsSchema.buttons,
      leftSearchFields: ScanneditemsSchema.leftsearchSchema,
      listActions: ScanneditemsSchema.listActions,
      checkboxarray: [],
      UnAssigned: false,
      is_unassigned: 1,
      Headers: [{
        "COLUMN_NAME": 'EPC_TAG',
        "DATA_TYPE": "image",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Name'),
        "DISPLAY_ORDER": 1,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": 'Name',
        "DATA_TYPE": "image",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('UserName'),
        "DISPLAY_ORDER": 2
      }, {
        "COLUMN_NAME": 'email_id',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Email'),
        "DISPLAY_ORDER": 3
      }, {
        "COLUMN_NAME": 'group_name',
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Group Name'),
        "DISPLAY_ORDER": 4
      }, {
        "COLUMN_NAME": 'ReadTime',
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Reading Time'),
        "DISPLAY_ORDER": 5
      }, {
        "COLUMN_NAME": 'unique_name',
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Attached Items'),
        "DISPLAY_ORDER": 6
      }]
      //isLoading:false
    };
  },

  created: async function () {
    await this.GetPageSize();
    this.GetScannedList();
  },
  methods: {
    async GetPageSize() {
      var vm = this;
      var params = 'key=DefaultPageSize';
      await DataService["a" /* default */].GetConfigurationValueForCompanyByKey(params).then(response => {
        if (response.data != null) {
          vm.PageSize = parseInt(response.data);
        }
      });
    },
    GetItems(item) {
      var vm = this;
      vm.IsItems = true;
      vm.itemData = item;
      //debugger;
    },

    CloseGetItems: function () {
      this.IsItems = false;
    },
    AddToArray($event) {
      console.log('even', $event);
      if ($event.currentTarget.checked) {
        this.checkboxarray.push($event.currentTarget.value);
      } else {
        this.checkboxarray.pop();
      }
    },
    actionButtonClick: function (callbackfunction, item) {
      var vm = this;
      switch (callbackfunction) {
        case "Consume":
          vm.Consume(item);
          break;
        case "RequestQuantity":
          vm.RequestQuantity(item);
          break;
      }
    },
    renderActions(row) {
      //  //debugger
      var self = this;
    },
    ScannedRadiotype(IsActive) {
      if (IsActive == 'RFID') {
        // this.ListType1 = false;
        //  this.ListType2 = true;
        this.Type = 'RFID';
        this.GetScannedList();
      } else {
        //  this.ListType2 = false;
        //  this.ListType1 = true;
        this.Type = 'Beacon';
        this.GetScannedList();
      }
    },
    GetScannedList: async function () {
      //debugger;
      var vueObj = this;
      this.isLoading = true;
      var parms = `pageSize=${vueObj.PageSize}&pageNum=${vueObj.pageNum}&sortBy=${this.sortBy}&sortExp=${this.sortExp}&Type=${this.Type}&${vueObj.searchCondition}`;
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
      await DataService["a" /* default */].GetScannedItemsList(parms).then(response => {
        if (response.data != null) {
          if (response.data.length > 0) {
            vueObj.GroupData = response.data;
            vueObj.TotalRecords = response.data[0].TOTAL;
            vueObj.TotalPages = Math.ceil(vueObj.TotalRecords / vueObj.PageSize);
            vueObj.CurrentPage = vueObj.pageNum;
            vueObj.noRecord = false;
          } else {
            vueObj.GroupData = [];
            vueObj.noRecord = true;
            vueObj.TotalRecords = 0;
          }
        } else {
          vueObj.noRecord = true;
          vueObj.GroupData = [];
          vueObj.TotalRecords = 0;
          vueObj.isLoading = false;
        }
        setTimeout(function () {
          vueObj.CheckBoxBootstrap();
        }, 100);
        setTimeout(function () {
          vueObj.ResponsiveDataTable('tablelistingdata');
        }, 500);
      });
    },
    leftCommonSearch: function (value) {
      this.PageNumber = value.PageNumber;
      this.isPaged = 1;
      if (typeof value.searchCondition != 'undefined') {
        this.searchCondition = value.searchConditionJson;
      } else {
        this.searchCondition = "";
      }
      this.GetScannedList();
    },
    SearchData: function () {
      // this.pageNum=1;         
      this.GetScannedList();
    },
    commonHeaderButtonClick(event) {
      switch (event.callbackfunction) {
        case "Assigngroup":
          this.Asign();
          break;
        case "setTourGuideSteps":
          this.setTourGuideSteps(0);
          break;
        case "UnAssigngroup":
          this.IsAssignedgroup();
          break;
        case "DeleteRFID":
          this.DeleteRFIDs();
          break;
      }
    },
    ResetData: function () {
      this.EPC_TAG = '';
      this.GetScannedList();
    },
    pagerMethod: function (value) {
      this.PageSize = value.PageSize;
      this.pageNum = value.PageNumber;
      // this.TotalRecords=value.TotalRecords;
      this.GetScannedList();
    },
    sortdata: function (s) {
      //debugger
      var SortDir = "sort tb_headerSortDown";
      this.sortBy = s;
      if (s === this.sortBy) {
        if (this.sortExp == "") {
          this.sortExp = "ASC";
          SortDir = "sort tb_headerSortDown";
        } else if (this.sortExp == "ASC") {
          this.sortExp = "DESC";
          SortDir = "sort tb_headerSortUp";
        } else {
          this.sortExp = "ASC";
          SortDir = "sort tb_headerSortDown";
        }
      }
      this.GetScannedList();
      $("#" + s + "  span:first-child").attr("class", SortDir);
    },
    AssigngroupPopup: function () {
      this.IsAssignGroup = true;
    },
    CloseScannedItem: function () {
      this.IsAssignGroup = false;
    },
    UnAssigngroupPopup: function () {
      this.UNIsAssignGroup = true;
    },
    Asign: function () {
      //debugger
      var vm = this;
      var val = "";
      var temp = [];
      $('.chkItems:checkbox:checked').not("[id^='chkAll']").each(function () {
        //debugger
        for (let i = 0; i < vm.GroupData.length; i++) {
          if (vm.GroupData[i].Id == $(this).val()) {
            //debugger
            temp.push(vm.GroupData[i]);
            console.log('new', vm.assDetailIDs);
          }
        }
        if (val.length > 0) val += ',';
        val += $(this).val();
      });
      if (val == "") {
        vm.confirmR(vm.$t('Minimum One EPC Tag should be selected.'), true, this.$t('GetScannedList'), function (result) {
          return false;
        });
        return false;
      }
      vm.assDetailIDs = val;
      vm.IsAssignGroup = true;
    },
    IsAssignedgroup: function () {
      //debugger
      var vm = this;
      var val = "";
      var temp = [];
      $('.chkItems:checkbox:checked').not("[id^='chkAll']").each(function () {
        //debugger
        for (let i = 0; i < vm.GroupData.length; i++) {
          if (vm.GroupData[i].Id == $(this).val()) {
            //debugger
            temp.push(vm.GroupData[i]);
            console.log('new', vm.assDetailIDs);
          }
        }
        if (val.length > 0) val += ',';
        val += $(this).val();
      });
      if (val == "") {
        vm.confirmR(vm.$t('Minimum One EPC Tag should be selected.'), true, this.$t('GetScannedList'), function (result) {
          return false;
        });
      } else {
        vm.confirmR(vm.$t('Are you sure you want to unassign selected Tag(s)?'), true, this.$t('GetScannedList'), function (result) {
          // let josobj = {
          //     groupNames: '',
          //     selectedRFIDS: vm.assDetailIDs,
          //     is_unassigned: nullgroupNames, string selectedRFIDS,  int is_unassigned
          // }
          var url = `groupNames=&selectedRFIDS=${val}&is_unassigned=1`;
          var obj = JSON.stringify(url);
          DataService["a" /* default */].AddSaveAssignGroup(url).then(response => {
            if (response.data == 'True') {
              vm.ShowAlert("Group UnAssgin successfully.", "success", true, vm.$t("Alert"));
              vm.GetScannedList();
            }
          });
        });
        return false;
      }
      vm.assDetailIDs = val;
      vm.UNIsAssignGroup = true;
    },
    DeleteRFIDs: function () {
      //debugger;
      var vm = this;
      var val = "";
      $('.chkItems:checkbox:checked').not("[id^='chkAll']").each(function () {
        if (val.length > 0) val += ',';
        val += $(this).val();
      });
      if (val.length > 0) {
        vm.confirmR(vm.$t("ConfirmDelete"), true, vm.$t("Delete") + "  " + vm.$t("Id"), function () {
          var postJSON = {
            ids: val
          };
          var poststing = JSON.stringify(postJSON);
          DataService["a" /* default */].deleteRFID(poststing).then(response => {
            if (response.data == 'DeleteSuccess') {
              $("[id^='chkAll']").prop("checked", false).removeAttr('checked');
              $('.chkItems:checkbox:checked').prop("checked", false).removeAttr('checked');
              vm.listheaderbuttons[2].isdisabled = true;
              vm.ShowAlert(vm.$t('DeletedSuccess', [vm.$t('EPC_TAG ')]), "Success", true, vm.$t('Alert'));
              vm.GetGroupList();
            } else {
              vm.ShowAlert(vm.$t('DeletedError', [vm.$t('Id')]), "failure", true, vm.$t('Alert'));
            }
            //window.location.reload();
          });
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./src/views/Asset/Scanneditems.vue?vue&type=script&lang=js&
 /* harmony default export */ var Asset_Scanneditemsvue_type_script_lang_js_ = (Scanneditemsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/Asset/Scanneditems.vue





/* normalize component */

var Scanneditems_component = Object(componentNormalizer["a" /* default */])(
  Asset_Scanneditemsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Scanneditems = __webpack_exports__["default"] = (Scanneditems_component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-dde5ecf6.js.map