(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-1a26956e"],{

/***/ "13d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $reduce = __webpack_require__("d58f").left;
var arrayMethodIsStrict = __webpack_require__("a640");
var CHROME_VERSION = __webpack_require__("2d00");
var IS_NODE = __webpack_require__("605d");

// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
var FORCED = CHROME_BUG || !arrayMethodIsStrict('reduce');

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: FORCED }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "5f25":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/DescriptionPopUp.vue?vue&type=template&id=93548e1e&
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
  }, [_vm._v(" Description : " + _vm._s(_vm.description) + " ")]), _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-original-title": "Close"
    },
    on: {
      "click": function ($event) {
        return _vm.ClosePopup($event);
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-times"
  })])]), _c('div', {
    staticClass: "modal-body"
  }, [!_vm.isCommentAvailable ? _c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 px-2"
  }, [_c('div', {
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
  }), _vm.isFormSubmitted ? _c('span', {
    staticClass: "mandatory"
  }, [_vm._v(_vm._s(_vm.$t('MandatoryString')))]) : _vm._e()], 1)]) : _vm._e(), _vm.isCommentAvailable ? _c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {}, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12 text-center text-danger no_records"
  }, [_vm._v(" " + _vm._s(_vm.$t('NoRecordfound')) + " ")])])])]) : _vm._e(), !_vm.isCommentAvailable ? _c('div', {
    staticClass: "listing",
    staticStyle: {
      "max-height": "465px",
      "overflow-y": "auto"
    },
    attrs: {
      "id": "CommentsData"
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "w-100 activity-tab",
    attrs: {
      "id": "accordion"
    }
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "conversation-main"
  }, _vm._l(_vm.viewTransistData, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "d-flex w-100 me-3"
    }, [item.comment != '' ? [_c('div', {
      staticClass: "conversation-time"
    }, [_c('span', [_vm._v(_vm._s(_vm.$options.filters.formatTimeFromDateTime(item.standardtUsertm)))])]), _c('div', {
      staticClass: "conversation-box-con"
    }, [_c('div', {
      staticClass: "conversation-box"
    }, [_vm._m(0, true), _c('div', {
      staticClass: "conversation-header addednote-ticket"
    }, [_c('span', {
      staticClass: "sender-department",
      staticStyle: {
        "margin-left": "10px"
      }
    }, [_c('span', {
      staticClass: "sender-name"
    }), _c('p', [item.comment.length > 1 ? _c('span', {
      attrs: {
        "id": "more-49"
      }
    }, [_vm._v(" " + _vm._s(item.comment) + " "), _c('br')]) : item.comment.length < 49 ? _c('span', {
      staticStyle: {
        "display": "none"
      },
      attrs: {
        "id": "less-49"
      }
    }, [_c('br'), _c('a', {
      staticClass: "font12 readLessLink comments editbtn pullleft",
      attrs: {
        "value": "49",
        "href": "javascript:;",
        "title": "less"
      }
    }, [_vm._v(" less ")])]) : _vm._e()])])]), item.catalogueName != null ? _c('div', {
      staticClass: "conversation-content"
    }, [_c('div', {
      staticClass: "col-12 p-0 notesdata"
    }, [_c('h6', {
      staticClass: "text-muted time"
    }, [_c('i', [_c('b', [_vm._v(" " + _vm._s(_vm.$t('PRODUCT_NAME')) + ":")]), _vm._v(" "), _c('span', {
      staticClass: "text-danger"
    }, [_vm._v(_vm._s(item.catalogueName))])])])])]) : _vm._e(), item.disputed_category != null ? _c('div', {
      staticClass: "conversation-content"
    }, [_c('div', {
      staticClass: "col-12 p-0 notesdata"
    }, [_c('h6', {
      staticClass: "text-muted time"
    }, [_c('i', [_c('b', [_vm._v(" " + _vm._s(_vm.$t('category_name')) + ":")]), _vm._v(" "), _c('span', {
      staticClass: "text-danger"
    }, [_vm._v(_vm._s(item.disputed_category))])])])])]) : _vm._e(), _c('div', {
      staticClass: "conversation-content"
    }, [_c('div', {
      staticClass: "col-12 p-0 notesdata"
    }, [_c('h6', {
      staticClass: "text-muted time"
    }, [_c('i', [_c('b', [_vm._v(" " + _vm._s(_vm.$t('Status')) + ":")]), _vm._v(" "), _c('span', {
      staticClass: "text-danger"
    }, [_vm._v(_vm._s(item.operation_code))])])])])]), _c('div', {
      staticClass: "conversation-content"
    }, [_c('div', {
      staticClass: "col-12 p-0 notesdata"
    }, [_c('h6', {
      staticClass: "text-muted time"
    }, [_c('i', [_c('b', [_vm._v(_vm._s(item.created_by))]), _vm._v(", " + _vm._s(_vm.$t('PostedOn')) + ": "), _c('span', {
      staticClass: "text-danger",
      attrs: {
        "title": ""
      }
    }, [_vm._v(_vm._s(_vm.$options.filters.formatDate(item.created_at)) + " " + _vm._s(item.postedTime))])])])])]), item.disputed_category != null ? _c('div', {
      staticClass: "conversation-content"
    }, [_c('div', {
      staticClass: "col-12 p-0 notesdata"
    }, [_c('h6', {
      staticClass: "text-muted time"
    }, [_c('em', [_c('b', [_vm._v(_vm._s(_vm.$t('DisputeDate')))]), _vm._v(" "), _c('span', {
      staticClass: "text-danger"
    }, [_vm._v(_vm._s(_vm.$options.filters.formatDate(item.disputed_date)))])])])])]) : _vm._e()])])] : _vm._e()], 2);
  }), 0)])])])])])]) : _vm._e()])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "name-circle"
  }, [_c('img', {
    staticClass: "img-circle w-100 avatar",
    attrs: {
      "src": "/Content/images/DefaultImages/avatar-icon.jpg",
      "alt": "Image"
    }
  })]);
}];

// CONCATENATED MODULE: ./src/components/Modal/DescriptionPopUp.vue?vue&type=template&id=93548e1e&

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/DescriptionPopUp.vue?vue&type=script&lang=js&

/* harmony default export */ var DescriptionPopUpvue_type_script_lang_js_ = ({
  props: {
    assetTransferdetailId: Number,
    assetTransferBatchId: Number,
    itemName: String,
    description: String
    // relatedInfoId:Number
  },

  data() {
    return {
      viewTransistData: [],
      disputeFields: true,
      InputTypeStatus: false,
      relatedInfoId: 0,
      locationId: 0,
      isCommentAvailable: false,
      isFormSubmitted: true,
      FormSchema: [{
        layoutType: "single",
        Data: [{
          astype: "SelectField",
          label: this.$t('Category'),
          name: "Category",
          value: "",
          placeholder: "",
          visibility: true,
          validationRules: {
            "required": true
          },
          config: {
            options: [{
              value: "RESOLVED",
              name: "Resolved"
            }, {
              value: "PENDING",
              name: "Pending"
            }, {
              value: "OTHER",
              name: "Other"
            }],
            onChange: this.changeField
          }
        }]
      }, {
        layoutType: "single",
        Data: [{
          astype: "SelectField",
          label: this.$t('Status'),
          name: "Status",
          value: "",
          visibility: false,
          validationRules: {
            "required": true
          },
          placeholder: "",
          config: {
            options: [{
              value: "Lost",
              name: "Lost/Stolen"
            }, {
              value: "Damaged",
              name: "Damaged"
            }, {
              value: "Receivedatdestination",
              name: "Received at destination"
            }, {
              value: "Returntosource",
              name: "Return to source"
            }]
          }
        }]
      }, {
        layoutType: "single",
        Data: [{
          astype: "TextAreaField",
          label: this.$t('Comment'),
          name: "Comment",
          value: "",
          placeholder: "",
          validationRules: {
            "required": true
          }
        }]
      }],
      buttons: [{
        type: "submit",
        class: "btn btn-success",
        text: "<i class='fa fa-save pr-2'></i>Save",
        visibility: true
      }, {
        type: "button",
        class: "btn btn-danger",
        text: "<i class='fa fa-close pr-2'></i>Clear All",
        onClick: this.onCancel,
        visibility: true
      }, {
        type: "button",
        class: "btn btn-primary",
        visibility: false,
        value: "1",
        text: "<i class='fa fa-close pr-2'></i>ReOpen All",
        onClick: this.ReopenButton
      }]
    };
  },
  created() {
    this.GetTransistData();
  },
  methods: {
    changeField(evt) {
      debugger;
      var vm = this;
      if (vm.FormSchema[0].Data[0].value == "RESOLVED") {
        vm.FormSchema[1].Data[0].visibility = true;
      } else {
        vm.FormSchema[1].Data[0].visibility = false;
      }
    },
    ReopenButtonClick: function () {
      debugger;
      vm = this;
      vm.disputeFields = false;
    },
    ReopenButton: function (ev) {
      debugger;
      var vm = this;
      if (vm.viewTransistData[0].operation_code == "RESOLVED") {
        vm.buttons[2].visibility = true;
        vm.FormSchema[0].Data[0].visibility = true;
        vm.FormSchema[2].Data[0].visibility = true;
        vm.buttons[1].visibility = true;
        vm.buttons[0].visibility = true;
        vm.buttons[0].class = "btn btn-success ";
        vm.buttons[1].class = "btn btn-danger";
        vm.buttons[2].class = "btn btn-primary d-none";
      } else {
        vm.buttons[2].class = "btn btn-primary";
        vm.buttons[0].class = "btn btn-success  d-none";
        vm.buttons[1].class = "btn btn-danger d-none";
      }
    },
    HideShowButtons() {
      debugger;
      var vm = this;
      if (vm.viewTransistData[0].operation_code == "RESOLVED") {
        vm.FormSchema[0].Data[0].visibility = false;
        vm.FormSchema[2].Data[0].visibility = false;
        //    vm.buttons[0].visibility=false;
        //    vm.buttons[1].visibility=false;
        vm.buttons[0].class = "btn btn-success d-none";
        vm.buttons[1].class = "btn btn-danger d-none";
        vm.buttons[2].class = "btn btn-primary";
        vm.isFormSubmitted = false;
      } else {
        // vm.buttons[2].visibility=false;
        vm.FormSchema[0].Data[0].visibility = true;
        vm.FormSchema[2].Data[0].visibility = true;
        //    vm.buttons[1].visibility=true;
        //    vm.buttons[0].visibility=true; 
        vm.buttons[2].class = "btn btn-primary d-none";
        vm.buttons[0].class = "btn btn-success";
        vm.buttons[1].class = "btn btn-danger";
        vm.isFormSubmitted = true;
      }
    },
    GetTransistData() {
      debugger;
      var vm = this;
      var url = `relatedInfoId=${vm.relatedInfoId}&locationId=${vm.locationId}&itemName=${vm.itemName}&assetTransferDetailId=${vm.assetTransferdetailId}&assetTransferBatchId=${vm.assetTransferBatchId}`;
      debugger;
      DataService["a" /* default */].GetViewCommentData(url).then(response => {
        if (response.data) {
          debugger;
          //console.log('res', response.data)
          vm.viewTransistData = response.data;
          vm.checkCommentEmpty();
          //isCommentAvailable=
          this.HideShowButtons();
        }
      });
    },
    checkCommentEmpty: function () {
      var vm = this;
      let i = 0;
      let count = 0;
      vm.viewTransistData.forEach(obj => {
        i = ++i;
        if (obj.comment == '') {
          count = ++count;
        }
      });
      if (i == count) {
        vm.isCommentAvailable = true;
      } else {
        vm.isCommentAvailable = false;
      }
    },
    ClosePopup: function (item) {
      debugger;
      this.$emit('ClosePopup', item);
    },
    onCancel: function () {
      debugger;
      var vm = this;
      vm.FormSchema[0].Data[0].value = '';
      vm.FormSchema[1].Data[0].value = '';
      vm.FormSchema[2].Data[0].value = '';
      vm.FormSchema[3].Data[0].value = '';
    },
    onSubmit: function (formfields) {
      debugger;
      var vm = this;
      vm.isLoading = true;
      const obj = {
        RelatedInfoId: vm.relatedInfoId,
        OperationCode: formfields.Category,
        Comment: formfields.Comment,
        Status: formfields.Status,
        ASSET_TRANSFER_BATCH_ID: vm.assetTransferBatchId,
        ASSET_TRANSFER_DETAILS_ID: vm.assetTransferdetailId
      };
      var JsonObj = JSON.stringify(obj);
      DataService["a" /* default */].ResolveDisputeProduct(obj).then(response => {
        debugger;
        if (response.data == true) {
          vm.ShowAlert(vm.$t("Resolve Disputed Product successfully"), "success", vm.$t('Alert'));
          vm.ClosePopup();
          vm.isLoading = false;
          // vm.$parent.FetchData();
        } else {
          vm.isLoading = false;
          vm.ShowAlert(vm.$t("Error while returning item."), "warning", vm.$t('Alert'));
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/DescriptionPopUp.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_DescriptionPopUpvue_type_script_lang_js_ = (DescriptionPopUpvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Modal/DescriptionPopUp.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Modal_DescriptionPopUpvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DescriptionPopUp = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "605d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
var classof = __webpack_require__("c6b6");

module.exports = typeof process != 'undefined' && classof(process) == 'process';

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "8809":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".custom-checkbox .custom-control-input:checked~.custom-control-label:after,.custom-radio .custom-control-input:checked~.custom-control-label:after{display:block}.my-popups .modal-dialog{max-width:1400px}input:checked+.slider{text-indent:-5px!important}input:checked+.slider span.slider-yes,input[type=checkbox]+.slider span.slider-no{text-align:center}@media (max-width:1600px){.my-popups .modal-dialog{max-width:1200px}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ "bcb1":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("8809");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("77d9d768", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "d58f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__("59ed");
var toObject = __webpack_require__("7b0b");
var IndexedObject = __webpack_require__("44ad");
var lengthOfArrayLike = __webpack_require__("07fa");

var $TypeError = TypeError;

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aCallable(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(O);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw $TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "d71c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetCatalog/ViewInTransitItems.vue?vue&type=template&id=d20fed88&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_c('tg-list', {
    attrs: {
      "IsShowAction": false,
      "listType": ['List'],
      "ModuleName": "Asset",
      "SubModuleCode": "Asset",
      "PageSize": _vm.PageSize,
      "IdentityColumn": "btach_Id",
      "HeaderText": "In-Transit List",
      "ListData": _vm.IntransitListData,
      "HeaderData": _vm.Headers,
      "widgets": _vm.widgets,
      "showCheckBox": true,
      "callbackfunction": _vm.FetchData,
      "HeaderButtons": _vm.listheaderbuttons,
      "TotalRecords": _vm.TotalRecords,
      "SearchFields": _vm.leftSearchFields,
      "RenderRowActionMethod": _vm.renderActions,
      "ListDataCallBackFunction": _vm.FetchData,
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
        return [data.column.COLUMN_NAME == 'shippedquantity' ? [_c('td', {
          staticClass: "text-center single-action"
        }, [_c('span', {
          staticClass: "text-dark",
          attrs: {
            "title": data.row.NUMBER_OF_ITEM
          }
        }, [_c('i', {
          staticClass: "fa fa-list",
          attrs: {
            "aria-hidden": "true"
          }
        }), _c('span', {
          staticClass: "noti-circle noti-blue"
        }, [_vm._v(_vm._s(data.row[data.column.COLUMN_NAME]))])])])] : _vm._e(), data.column.COLUMN_NAME == 'status' ? [data.row.status == 'In-Transit' ? _c('td', {
          staticClass: "text-center single-action"
        }, [_c('span', {
          staticClass: "active-disabled"
        }, [_c('span', {
          staticClass: "btn d-inline-block text-center text-truncate btn-info"
        }, [_vm._v(_vm._s(data.row[data.column.COLUMN_NAME]))])])]) : _vm._e(), data.row.status == 'Dispute Raised' ? _c('td', {
          staticClass: "active-disabled"
        }, [_c('span', {
          staticClass: "active-disabled"
        }, [_c('span', {
          staticClass: "btn d-inline-block text-center text-truncate legend-pending"
        }, [_vm._v(" " + _vm._s(data.row[data.column.COLUMN_NAME]))])])]) : _vm._e()] : _vm._e(), data.column.COLUMN_NAME == 'description' ? [_c('td', {
          staticClass: "text-center single-action"
        }, [_c('span', {
          staticClass: "text-dark",
          attrs: {
            "title": "Comments"
          }
        }, [_c('a', {
          attrs: {
            "href": "javascript:;",
            "data-original-title": "Comments"
          },
          on: {
            "click": function ($event) {
              return _vm.OpenCommentpopup(data.row);
            }
          }
        }, [_c('em', {
          staticClass: "fa fa-eye text-info"
        })])])])] : _vm._e()];
      }
    }])
  }), _vm.IsShowPopup ? _c('IProductAcceptReject', {
    attrs: {
      "DetalisData": _vm.DetalisData
    },
    on: {
      "CloseAddAcceptRejectPopup": _vm.CloseAddAcceptRejectPopup
    }
  }) : _vm._e(), _vm.Commentpopup ? _c('DescriptionPopUp', {
    attrs: {
      "assetTransferdetailId": _vm.assetTransferdetailId,
      "description": _vm.description,
      "assetTransferBatchId": _vm.assetTransferBatchId,
      "itemName": _vm.itemName,
      "relatedInfoId": _vm.relatedInfoId
    },
    on: {
      "ClosePopup": _vm.ClosePopup
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/AssetCatalog/ViewInTransitItems.vue?vue&type=template&id=d20fed88&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("13d5");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./src/views/AssetCatalog/ViewInTransitItemsSchema.js


let buttons = [{
  title: 'Accept/Reject',
  iconClass: 'fa fa-check-circle',
  callbackfunction: 'acceptrejectpopup',
  additionalClass: '',
  isdisabled: false,
  isvisible: true,
  checkPrivilege: false
}, {
  title: 'Transferred List',
  iconClass: '<fa fa fa-exchange',
  callbackfunction: 'TransferredList',
  additionalClass: '',
  isdisabled: false,
  isvisible: true,
  checkPrivilege: false
}, {
  title: 'Back to List',
  iconClass: 'fa fa-angle-double-left pr-2',
  callbackfunction: 'BacktoList',
  additionalClass: '',
  isdisabled: false,
  isvisible: true,
  checkPrivilege: false
}];
let leftsearchSchema = [{
  fieldName: "LOCATION FROM",
  fieldType: "ddl-multilevel",
  fieldIcon: "fa fa-map-marker",
  paramName: "LocationIdFrom",
  fieldSearchConditionName: [''],
  isSearch: false,
  value: null,
  listOptions: []
}, {
  fieldName: "LOCATION TO",
  fieldType: "ddl-multilevel",
  fieldIcon: "fa fa-map-marker",
  paramName: "LocationId",
  fieldSearchConditionName: [''],
  isSearch: false,
  value: null,
  listOptions: []
}, {
  fieldName: 'DISPUTE',
  fieldType: "radio",
  fieldIcon: "fa fa-hand-pointer-o",
  paramName: "disputedVal",
  fieldSearchConditionName: [''],
  isSearch: false,
  value: "",
  listOptions: [{
    value: '',
    name: 'All'
  }, {
    value: 'ASSET_TRANSIT',
    name: 'No'
  }, {
    value: 'DISPUTE_RAISED',
    name: 'Yes'
  }]
}, {
  fieldName: 'DESCRIPTION',
  fieldType: "text",
  fieldIcon: "fa fa-suitcase",
  paramName: "search",
  fieldSearchConditionName: [''],
  isSearch: false,
  value: "",
  listOptions: []
}];
async function bindleftCommonSearchdropdown(instance, modulename, filtername) {
  // debugger
  var vm = instance;
  var LocationData = [];
  if (filtername == "Location" || filtername == "Locationto") {
    // debugger;
    var params = `reqForm=`;
    await DataService["a" /* default */].GetLocationByCompanyId(params).then(function (response) {
      var json = JSON.parse(response.data).data;
      json.forEach(value => {
        var CheckIfExist = LocationData.filter(function (el) {
          return el.COMPANY_LOCATION_ID == value.COMPANY_LOCATION_ID;
        });
        if (CheckIfExist.length == 0) {
          if (value.PARENT_LOCATION_ID == null) {
            let locationId = value.COMPANY_LOCATION_ID;
            let rslt = getChildLocation(locationId, value, JSON.parse(response.data).data);
            LocationData.push(rslt);
          }
        }
      });
      console.log(LocationData);
      vm.leftSearchFields[0].listOptions = LocationData;
      vm.leftSearchFields[1].listOptions = LocationData;
    });
  }
}
function getChildLocation(locationId, currentItem, data) {
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
        let rslt = getChildLocation(ChildfolderId, value, data);
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
}
/* harmony default export */ var ViewInTransitItemsSchema = ({
  buttons,
  leftsearchSchema,
  bindleftCommonSearchdropdown
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/InTransistProductAcceptReject.vue?vue&type=template&id=2172eca6&
var InTransistProductAcceptRejectvue_type_template_id_2172eca6_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_c('div', {
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
  }, [_vm._v(" " + _vm._s(_vm.$t('InTransitItems')) + " ")]), _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-original-title": "Close"
    },
    on: {
      "click": function ($event) {
        return _vm.CloseAddAcceptRejectPopup();
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-times"
  })])]), _c('div', {
    staticClass: "modal-body"
  }, [_c('tg-list', {
    attrs: {
      "showCheckBox": true,
      "IsShowAction": false,
      "listType": ['List'],
      "ModuleName": "Asset",
      "SubModuleCode": "Asset",
      "IdentityColumn": "asseT_TRANSFER_DETAILS_ID",
      "HeaderText": _vm.$t('AssetManagement'),
      "widgets": _vm.widgets,
      "ListData": _vm.InTransitData,
      "HeaderData": _vm.Headers,
      "callbackfunction": _vm.FetchData,
      "LegendArray": _vm.LegendArray,
      "SortExp": _vm.SortExp,
      "SortBy": _vm.SortBy,
      "NorecordfoundText": _vm.$t('NorecordfoundText'),
      "TotalRecords": _vm.TotalRecords,
      "RenderRowActionMethod": _vm.renderActions,
      "ListDataCallBackFunction": _vm.FetchData
    },
    on: {
      "PagerButtonClick": _vm.pagerMethod,
      "HeaderButtonClick": _vm.commonHeaderButtonClick
    },
    scopedSlots: _vm._u([{
      key: "slotdata",
      fn: function ({
        data
      }) {
        return [data.column.COLUMN_NAME == 'quantityShipped' ? [data.row.creatE_UNIQUE_NAME_LIST ? _c('span', {
          staticClass: "text-dark",
          attrs: {
            "title": _vm.ShippedQuantity
          }
        }, [_c('i', {
          staticClass: "fa fa-list-ul",
          attrs: {
            "aria-hidden": "true"
          }
        }), _c('span', {
          staticClass: "noti-circle noti-blue"
        }, [_vm._v(_vm._s(data.row.quantityShipped))])]) : _c('span', {
          staticClass: "text-dark",
          attrs: {
            "title": _vm.Quantity
          }
        }, [_c('i', {
          staticClass: "fa fa-list-ul",
          attrs: {
            "aria-hidden": "true"
          }
        }), _c('span', {
          staticClass: "noti-circle noti-blue"
        }, [_vm._v(_vm._s(data.row.quantityShipped))])])] : _vm._e(), data.column.COLUMN_NAME == 'currentQuantity' ? [_c('Form', {
          ref: "currentQuantity"
        }, [_c('Field', {
          attrs: {
            "name": "Requested Quantity",
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
                  value: data.row.currentQuantity,
                  expression: "data.row.currentQuantity"
                }],
                class: {
                  'txtitems form-control ': true,
                  'is-invalid': errors[0] || data.row.currentQuantity == 0 ? true : false
                },
                attrs: {
                  "inputmode": "numeric",
                  "id": "",
                  "min": "1",
                  "value": "1",
                  "maxlength": "8"
                },
                domProps: {
                  "value": data.row.currentQuantity
                },
                on: {
                  "keyup": function ($event) {
                    return _vm.checkQuantity(data.row);
                  },
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.$set(data.row, "currentQuantity", $event.target.value);
                  }
                }
              }), errors[0] ? _c('span', {
                staticClass: "invalid-feedback d-block",
                attrs: {
                  "name": "Location"
                }
              }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
            }
          }], null, true)
        })], 1)] : _vm._e(), data.column.COLUMN_NAME == 'isAcceptReject' ? [_c('label', {
          staticClass: "switch medium"
        }, [_c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: data.row.isAcceptReject,
            expression: "data.row.isAcceptReject"
          }],
          staticClass: "form-check-input rdoticketfor custom-control-input dynamic custom-switch inTransit_Accept",
          attrs: {
            "type": "checkbox"
          },
          domProps: {
            "checked": data.row.isAcceptReject,
            "checked": Array.isArray(data.row.isAcceptReject) ? _vm._i(data.row.isAcceptReject, null) > -1 : data.row.isAcceptReject
          },
          on: {
            "change": function ($event) {
              var $$a = data.row.isAcceptReject,
                $$el = $event.target,
                $$c = $$el.checked ? true : false;
              if (Array.isArray($$a)) {
                var $$v = null,
                  $$i = _vm._i($$a, $$v);
                if ($$el.checked) {
                  $$i < 0 && _vm.$set(data.row, "isAcceptReject", $$a.concat([$$v]));
                } else {
                  $$i > -1 && _vm.$set(data.row, "isAcceptReject", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
                }
              } else {
                _vm.$set(data.row, "isAcceptReject", $$c);
              }
            }
          }
        }), _c('span', {
          staticClass: "slider round"
        }, [_c('span', {
          staticClass: "slider-yes"
        }, [_vm._v("Accept")]), _c('span', {
          staticClass: "slider-no"
        }, [_vm._v("Reject")])])])] : _vm._e(), data.column.COLUMN_NAME == 'acceptRejectComment' ? [_c('textarea', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: data.row.acceptRejectComment,
            expression: "data.row.acceptRejectComment"
          }],
          attrs: {
            "name": "comments",
            "onkeypress": "return",
            "maxlength": "2000",
            "rows": "3",
            "cols": "40"
          },
          domProps: {
            "value": data.row.acceptRejectComment
          },
          on: {
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.$set(data.row, "acceptRejectComment", $event.target.value);
            }
          }
        })] : _vm._e(), data.column.COLUMN_NAME == 'RaiseDispute' ? [_c('a', {
          attrs: {
            "href": "javascript:void(0);",
            "data-toggle-tooltip": "tooltip",
            "data-original-title": "Raise Dispute"
          },
          on: {
            "click": function ($event) {
              return _vm.RaiseDisputePopUp(data.row);
            }
          }
        }, [_c('i', {
          staticClass: "fa fa-hand-pointer-o fa-2x"
        })])] : _vm._e()];
      }
    }])
  })], 1), _c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left px-0"
  }, [_c('div', {
    staticClass: "row flex-row-reverse"
  }, [_c('div', {
    staticClass: "col-lg-4 text-right"
  }, [_c('span', [_vm.isAcceptAll ? _c('a', {
    staticClass: "btn btn-info formbtn text-white m-1",
    attrs: {
      "data-toggle-tooltip": "tooltip",
      "data-original-title": "AcceptAll"
    },
    on: {
      "click": function ($event) {
        return _vm.ChangeStatus($event);
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-check pr-2"
  }), _vm._v(_vm._s(_vm.$t('AcceptAll')))]) : _vm._e()]), _c('span', [!_vm.isAcceptAll ? _c('a', {
    staticClass: "btn btn-danger formbtn text-white m-1",
    attrs: {
      "title": "",
      "data-toggle-tooltip": "tooltip",
      "data-original-title": "Reject All"
    },
    on: {
      "click": function ($event) {
        return _vm.ChangeStatus($event);
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-close pr-2"
  }), _vm._v(" " + _vm._s(_vm.$t('RejectAll')))]) : _vm._e()]), _c('a', {
    staticClass: "btn btn-success formbtn text-white m-1",
    attrs: {
      "href": "javascript:;",
      "title": _vm.$t('Save')
    },
    on: {
      "click": function ($event) {
        return _vm.SubmitData();
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-save pr-2"
  }), _c('span', [_vm._v(_vm._s(_vm.$t('Save')))])]), _c('a', {
    staticClass: "btn btn-danger formbtn text-white m-2",
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
  }), _c('span', [_vm._v(_vm._s(_vm.$t('Cancel')))])])])])])])])])]), _vm.Raisepopup ? _c('RaiseDisputePopUp', {
    attrs: {
      "Raisedata": _vm.Raisedata
    },
    on: {
      "CloseRaiseDisputePopUp": _vm.CloseRaiseDisputePopUp
    }
  }) : _vm._e()], 1);
};
var InTransistProductAcceptRejectvue_type_template_id_2172eca6_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/InTransistProductAcceptReject.vue?vue&type=template&id=2172eca6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/RaiseDisputePopup.vue?vue&type=template&id=b91ecb34&
var RaiseDisputePopupvue_type_template_id_b91ecb34_render = function render() {
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
  }, [_vm._v(" Raise Dispute ")]), _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-original-title": "Close"
    },
    on: {
      "click": function ($event) {
        return _vm.CloseRaiseDisputePopUp($event);
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-times"
  })])]), _c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 px-2"
  }, [_c('div', {
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
  }), _c('span', {
    staticClass: "mandatory"
  }, [_vm._v("Fields marked with an asterisk (*) are mandatory.")])], 1)])])])])]);
};
var RaiseDisputePopupvue_type_template_id_b91ecb34_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/RaiseDisputePopup.vue?vue&type=template&id=b91ecb34&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/RaiseDisputePopup.vue?vue&type=script&lang=js&

/* harmony default export */ var RaiseDisputePopupvue_type_script_lang_js_ = ({
  props: {
    Raisedata: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      viewTransistData: [],
      InputTypeStatus: false,
      relatedInfoId: 0,
      locationId: 0,
      FormSchema: [{
        layoutType: "double",
        Data: [{
          astype: "TextField",
          label: this.$t('DisputeDate'),
          name: "DisputeDate",
          value: "",
          disabled: true,
          validationRules: {
            "required": true
          },
          placeholder: ""
        }, {
          astype: "SelectField",
          label: this.$t('Category'),
          name: "Category",
          value: "",
          placeholder: "",
          validationRules: {
            "required": true
          },
          config: {
            options: [{
              value: "Missing",
              name: "Missing"
            }, {
              value: "Damage",
              name: "Damage"
            }, {
              value: "Other",
              name: "Other"
            }]
          }
        }]
      }, {
        layoutType: "single",
        Data: [{
          astype: "TextAreaField",
          label: this.$t('Description'),
          name: "Description",
          value: "",
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
        text: "<i class='fa fa-close pr-2'></i>" + this.$t('Cancel'),
        onClick: this.CloseRaiseDisputePopUp
      }],
      Today: new Date()
    };
  },
  created() {
    var vm = this;
    console.log('res', vm.Raisedata);
    vm.FormSchema[0].Data[0].value = vm.$options.filters.formatDateTimeMMDDYY(vm.Today);
  },
  methods: {
    CloseRaiseDisputePopUp: function () {
      this.$emit('CloseRaiseDisputePopUp');
    },
    onCancel: function () {
      var vm = this;
      vm.FormSchema[0].Data[0].value = '';
      vm.FormSchema[1].Data[0].value = '';
      vm.FormSchema[2].Data[0].value = '';
      vm.FormSchema[3].Data[0].value = '';
    },
    onSubmit: async function (formfields) {
      var vm = this;
      vm.isLoading = true;
      const RaiseData = {
        AssetTransferDetailsId: vm.Raisedata.asseT_TRANSFER_DETAILS_ID,
        RelatedInfoId: vm.Raisedata.relateD_INFO_ID,
        DisputeQty: vm.Raisedata.quantity,
        DisputeCategory: formfields.Category,
        DisputeComment: formfields.Description,
        ActionType: "DISPUTE_RAISED",
        ActionType2: "ALL",
        DisputedDate: formfields.DisputeDate
      };
      var JsonObj = JSON.stringify(RaiseData);
      await DataService["a" /* default */].DisputedProductSave(RaiseData).then(response => {
        if (response.data == true) {
          vm.ShowAlert(vm.$t("Raise Dispute successfully"), "success", vm.$t('Alert'));
          vm.CloseRaiseDisputePopUp();

          // vm.$parent.$parent.AddAcceptRejectPopup();
          vm.$parent.$parent.FetchData();
          vm.$parent.CloseAddAcceptRejectPopup();
          // $('#acceptrejectbtn').click();
          vm.isLoading = false;
        } else {
          vm.isLoading = false;
          vm.ShowAlert(vm.$t("Error while returning item."), "warning", vm.$t('Alert'));
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/RaiseDisputePopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_RaiseDisputePopupvue_type_script_lang_js_ = (RaiseDisputePopupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Modal/RaiseDisputePopup.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Modal_RaiseDisputePopupvue_type_script_lang_js_,
  RaiseDisputePopupvue_type_template_id_b91ecb34_render,
  RaiseDisputePopupvue_type_template_id_b91ecb34_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RaiseDisputePopup = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/InTransistProductAcceptReject.vue?vue&type=script&lang=js&



/* harmony default export */ var InTransistProductAcceptRejectvue_type_script_lang_js_ = ({
  components: {
    RaiseDisputePopUp: RaiseDisputePopup
  },
  props: {
    DetalisData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      InTransitData: [],
      TransitRecords: '',
      IsShowPopup: false,
      assetCatelogueId: '',
      locationId: '',
      assetTransferDetailsId: '',
      assetTransferBatchId: '',
      IsAcceptReject: 1,
      isSlider: false,
      data: [],
      checkedArray: [],
      Raisepopup: false,
      Raisedata: [],
      AcceeptBtn: false,
      RejectBtn: true,
      selectAll: false,
      isAcceptAll: true,
      Headers: [{
        "COLUMN_NAME": "name",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("ItemName"),
        "DISPLAY_ORDER": 1
      }, {
        "COLUMN_NAME": "uniqueName",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("UniqueName"),
        "DISPLAY_ORDER": 2
      }, {
        "COLUMN_NAME": "locationName",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("FromLocation"),
        "DISPLAY_ORDER": 3
      }, {
        "COLUMN_NAME": "itemCode",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("ItemCode"),
        "DISPLAY_ORDER": 4
      }, {
        "COLUMN_NAME": "quantityShipped",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("ShippedQuantity"),
        "DISPLAY_ORDER": 5,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "currentQuantity",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("ReceivedQuantity"),
        "DISPLAY_ORDER": 6,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "isAcceptReject",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("AcceptRejectTicket"),
        "DISPLAY_ORDER": 7,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "acceptRejectComment",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("Comments"),
        "DISPLAY_ORDER": 8,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "RaiseDispute",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("Action"),
        "DISPLAY_ORDER": 9,
        settings: {
          isInSlot: true
        }
      }],
      listheaderbuttons: [],
      LegendArray: [],
      widgets: [],
      noRecord: true,
      TotalRecords: 0,
      CurrentPage: 1,
      TotalPages: 0,
      SortBy: '',
      SortExp: '',
      PageNumber: 1,
      isPaged: 1,
      PageSize: 10,
      isSubmit: false
    };
  },
  async created() {
    var ths = this;
    await ths.FetchData();
  },
  methods: {
    columnDataFormatter: function (row, column) {
      return row[column.COLUMN_NAME];
    },
    CloseAddAcceptRejectPopup: function () {
      this.$emit('CloseAddAcceptRejectPopup');
    },
    onCancel: function () {
      this.CloseAddAcceptRejectPopup();
    },
    FetchData: async function () {
      var vm = this;
      vm.data = [];
      vm.DetalisData.forEach(element => {
        var obj = {
          AssetCatalogueId: element.assetCatalogueId,
          LocationId: element.locationto,
          AssetTransferDetailId: element.asset_transfer_deatails_Id,
          AssetTransferBatchId: element.btach_Id,
          CreatedAt: element.createdAt
        };
        vm.data.push(obj);
      });

      //This Get is Item not Save
      await DataService["a" /* default */].SaveMultipleInTransitItems(vm.data).then(response => {
        vm.InTransitData = [];
        if (response.data != null) {
          if (response.data.result.length > 0) {
            vm.InTransitData = response.data.result;
            vm.InTransitData.forEach(element => {
              element.isSelected = false;
              element.ischecked = false;
              element.isAcceptReject = true;
              element.quantityShipped = element.quantity;
              element.currentQuantity = element.quantity;
              if (element.quantity == 1) {
                element.isDisabled = true;
              }
              vm.isAcceptAll = false;
            });
            vm.noRecord = false;
          } else {
            vm.noRecord = true;
          }
          setTimeout(function () {
            vm.CheckBoxBootstrap();
          }, 100);
          setTimeout(function () {
            vm.ResponsiveDataTable('tablelistingdata');
          }, 500);
        }
      });
    },
    async SubmitData() {
      var vm = this;
      var ids = "",
        valids = "";
      var valid = [];
      vm.$refs.currentQuantity.validate().then(result => {
        if (result) {} else {
          return false;
        }
      });
      $('.modal-body .chkItems:checkbox:checked').not("[id^='chkAll']").each(function () {
        if (valids.length > 0) valids += ',';
        valids += $(this).val();
        valid.push($(this).val());
      });
      if (valids.length > 0) {
        valid.forEach(ides => {
          vm.InTransitData.forEach(ele => {
            if (ele.asseT_TRANSFER_DETAILS_ID == ides) {
              vm.atid = ele.asseT_TRANSFER_DETAILS_ID;
              vm.rid = ele.relateD_INFO_ID;
              //vm.qty = ele.quantity;
              vm.qty = ele.currentQuantity;
              vm.rdo = ele.isAcceptReject == true ? 1 : 0;
              // vm.rqty = ele.receviedQuantity;
              //vm.rqty = ele.currentQuantity;
              vm.rqty = ele.quantityShipped;
              vm.rcom = ele.acceptRejectComment == undefined ? '' : ele.acceptRejectComment;
              ids += vm.atid + '*' + vm.rid + '*' + vm.qty + '*' + vm.rdo + '*' + vm.rqty + '*' + vm.rcom + '|';
            }
          });
        });
        var Objdata = `MoveToInTransitInfo=${ids}&assetTransferBatchId=${vm.DetalisData[0].btach_Id}`;
        await DataService["a" /* default */].UpdateInTransitItems(Objdata).then(response => {
          if (response.data.result == 'success') {
            vm.ShowAlert(response.data.msg, "success", vm.$t('Alert'));
            vm.$parent.FetchData();
            vm.CloseAddAcceptRejectPopup();
            vm.isLoading = false;
          } else {
            vm.isLoading = false;
            vm.ShowAlert(response.data.msg, "faliure", vm.$t('Alert'));
          }
        });
      } else {
        vm.ShowAlert(vm.$t("Please select at least one record."), "warning", vm.$t("Alert"));
      }
    },
    ChangeStatus: function () {
      var vm = this;
      //vm.isAcceptAll!=vm.isAcceptAll;            
      var TransitData = vm.InTransitData;
      vm.InTransitData = [];
      if (vm.isAcceptAll) {
        TransitData.forEach(element => {
          var obj = element;
          obj.isAcceptReject = true;
          vm.InTransitData.push(obj);
        });
        vm.isAcceptAll = false;
      } else {
        TransitData.forEach(element => {
          var obj = element;
          obj.isAcceptReject = false;
          vm.InTransitData.push(obj);
        });
        vm.isAcceptAll = true;
      }
    },
    RaiseDisputePopUp(ev) {
      var vm = this;
      vm.Raisedata = ev;
      vm.Raisepopup = true;
    },
    CloseRaiseDisputePopUp: function () {
      var vm = this;
      vm.Raisepopup = false;
    },
    onCancel: function () {
      this.$emit('CloseAddAcceptRejectPopup');
    },
    pagerMethod: function (value) {
      this.pageSize = value.pageSize;
      this.PageNumber = value.PageNumber;
      this.FetchData();
    },
    commonHeaderButtonClick: function () {},
    renderActions() {
      //
    },
    checkQuantity(item) {
      var vm = this;
      let TotalQuantity = item.quantityShipped;
      let currentValue = item.currentQuantity.replace(/[^0-9]/g, "");
      if (parseInt(currentValue) > TotalQuantity) {
        const getRecode = vm.InTransitData.find(x => x.assetcatalougeid === item.assetcatalougeid);
        getRecode.currentQuantity = '';
        return vm.ShowAlert(vm.$t("Received quantity can not be greater than Shipped quantity."), "warning", vm.$t("Alert"));
      } else if (parseInt(currentValue) == 0) {
        const getRecode = vm.InTransitData.find(x => x.assetcatalougeid === item.assetcatalougeid);
        getRecode.currentQuantity = '';
        return item.currentQuantity = '';
      } else {
        const getRecode = vm.InTransitData.find(x => x.assetcatalougeid === item.assetcatalougeid);
        getRecode.currentQuantity = currentValue.replace(/[^0-9]/g, "");
        vm.isSubmit = true;
        return;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/InTransistProductAcceptReject.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_InTransistProductAcceptRejectvue_type_script_lang_js_ = (InTransistProductAcceptRejectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Modal/InTransistProductAcceptReject.vue?vue&type=style&index=0&id=2172eca6&prod&lang=css&
var InTransistProductAcceptRejectvue_type_style_index_0_id_2172eca6_prod_lang_css_ = __webpack_require__("ddfc");

// CONCATENATED MODULE: ./src/components/Modal/InTransistProductAcceptReject.vue






/* normalize component */

var InTransistProductAcceptReject_component = Object(componentNormalizer["a" /* default */])(
  Modal_InTransistProductAcceptRejectvue_type_script_lang_js_,
  InTransistProductAcceptRejectvue_type_template_id_2172eca6_render,
  InTransistProductAcceptRejectvue_type_template_id_2172eca6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var InTransistProductAcceptReject = (InTransistProductAcceptReject_component.exports);
// EXTERNAL MODULE: ./src/components/Modal/DescriptionPopUp.vue + 4 modules
var DescriptionPopUp = __webpack_require__("5f25");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetCatalog/ViewInTransitItems.vue?vue&type=script&lang=js&






/* harmony default export */ var ViewInTransitItemsvue_type_script_lang_js_ = ({
  components: {
    IProductAcceptReject: InTransistProductAcceptReject,
    DescriptionPopUp: DescriptionPopUp["a" /* default */]
  },
  data() {
    return {
      listheaderbuttons: ViewInTransitItemsSchema.buttons,
      leftSearchFields: ViewInTransitItemsSchema.leftsearchSchema,
      listActions: ViewInTransitItemsSchema.listActions,
      LegendArray: [],
      IntransitListData: [],
      pageNum: 1,
      search: "",
      PageSize: 10,
      PageNumber: 1,
      isPaged: 1,
      PageSizeOption: null,
      StatusListForListing: [],
      DetalisData: [],
      Headers: [{
        "COLUMN_NAME": "description",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Description'),
        "DISPLAY_ORDER": 1
      }, {
        "COLUMN_NAME": "sourceLocation",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Location From'),
        "DISPLAY_ORDER": 2
      }, {
        "COLUMN_NAME": "destinationLocation",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('LocationTo'),
        "DISPLAY_ORDER": 3
      }, {
        "COLUMN_NAME": "shippedquantity",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('ShippedQuantity'),
        "DISPLAY_ORDER": 4,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "status",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Status'),
        "DISPLAY_ORDER": 5,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "shippedby",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Shipped By'),
        "DISPLAY_ORDER": 6
      }, {
        "COLUMN_NAME": "description",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Comments'),
        "DISPLAY_ORDER": 7,
        settings: {
          isInSlot: true
        }
      }],
      noRecord: true,
      TotalRecords: 0,
      CurrentPage: 1,
      TotalPages: 0,
      sortBy: "",
      sortExp: "",
      IsShowPopup: false,
      PageSize: 10,
      pageNum: 1,
      locationId: '',
      locationfrom: '',
      searchcondition: '',
      datefromate: '',
      disputeval: '',
      statusId: '',
      Commentpopup: false,
      assetTransferdetailId: '',
      assetTransferBatchId: '',
      itemName: '',
      OperationCode: '',
      relatedInfoId: '',
      description: "",
      privilegeParams: null
    };
  },
  async created() {
    var ths = this;
    await ths.GetPageSize();
    ths.privilegeParams = `controller=Assetcatalog&action=`;
    ths.Userid = this.GetUserInfo.ID;
    ViewInTransitItemsSchema.bindleftCommonSearchdropdown(ths, "Asset", "Location");
    ViewInTransitItemsSchema.bindleftCommonSearchdropdown(ths, "Asset", "Locationto");
    ths.LegendArray = [{
      class: 'legend-pending colorboxsquare',
      text: "Disputed Products"
    }];
    ths.FetchData();
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
    columnDataFormatter: function (row, column) {
      return row[column.COLUMN_NAME];
    },
    async FetchData() {
      var vm = this;
      var Params = `StatusIds=${vm.statusId}&dateFormat=${vm.datefromate}&pageSize=${vm.PageSize}&pageNum=${vm.PageNumber}&sortBy=${vm.sortBy}&sortExp=${vm.sortExp}&${vm.searchCondition}`;
      await DataService["a" /* default */].GetTransitItemsList(Params).then(response => {
        if (response.data != null) {
          console.log('resp', response.data);
          if (response.data.length > 0) {
            vm.IntransitListData = response.data;
            vm.IntransitListData.forEach(row => {
              row.isCheckBoxDisabled = false;
              row.additionalClass = '';
              if (row.CreateUniqueNameListing) {
                row.additionalClass == 'low-bar odd';
              }
              if (row.status_code == "DISPUTE_RAISED") {
                row.additionalClass = 'warning-bar';
              }
              if (row.status == 'Dispute Raised') {
                row.isCheckBoxDisabled = true;
              }
            });
            vm.TotalRecords = response.data[0].total;
            vm.TotalPages = Math.ceil(vm.TotalRecords / vm.PageSize);
            vm.CurrentPage = vm.PageNumber;
            vm.noRecord = false;
            $('.chkItems:checkbox:checked,#chkAll_0').prop("checked", false).removeAttr('checked');
            $('.chkItems:checkbox:checked').prop("checked", false).removeAttr('checked');
          } else {
            vm.noRecord = true;
            vm.IntransitListData = [];
            vm.TotalRecords = 0;
          }
        }
        setTimeout(function () {
          vm.ResponsiveDataTable('tablelistingdata');
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
      this.FetchData();
    },
    currentPageMethod: function (value) {
      this.PageSize = value.PageSize;
      this.PageNumber = value.PageNumber;
      this.FetchData();
    },
    GetPageSizeOption: function () {
      var list = [];
      var defaultPageSize = 10;
      for (var i = defaultPageSize; i < defaultPageSize + 95; i += 5) {
        list.push(i);
      }
      this.PageSizeOption = list;
    },
    pagerMethod: function (value) {
      this.PageSize = value.PageSize;
      this.PageNumber = value.PageNumber;
      this.FetchData();
    },
    commonHeaderButtonClick(event) {
      switch (event.callbackfunction) {
        case "acceptrejectpopup":
          DataService["a" /* default */].CheckPrivilege(this.privilegeParams + 'SaveInTransitItems').then(response => {
            debugger;
            if (response.data) {
              this.AddAcceptRejectPopup();
            } else {
              this.ShowAlert(this.$t('NotAuthorizedSection'), "failure", true, "Alert");
            }
          });
          break;
        case "TransferredList":
          this.OpenTransferredList();
          break;
        case "BacktoList":
          this.OpenBacktoList();
          break;
      }
    },
    ClosePopup: function () {
      var vm = this;
      vm.Commentpopup = false;
    },
    OpenTransferredList() {
      var vm = this;
      vm.$router.push({
        path: 'ViewTransferedItem'
      });
    },
    OpenBacktoList() {
      var vm = this;
      vm.$router.push({
        path: 'Index'
      });
    },
    AddAcceptRejectPopup: function () {
      var vm = this;
      var val = "";
      var temp = [];
      $('.chkItems:checkbox:checked').not("[id^='chkAll']").each(function () {
        for (let i = 0; i < vm.IntransitListData.length; i++) {
          if (vm.IntransitListData[i].btach_Id == $(this).val()) {
            temp.push(vm.IntransitListData[i]);
            console.log('new', vm.DetalisData);
          }
        }
        if (val.length > 0) val += ',';
        val += $(this).val();
      });
      temp = temp.reduce((acc, current) => {
        const x = acc.find(item => item.batchId === current.batchId);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);
      if (val == "") {
        vm.ShowAlert(vm.$t("Please select at least one record."), "warning", vm.$t("Alert"));
        return false;
      } else {
        vm.DetalisData = temp;
        vm.IsShowPopup = true;
      }
    },
    OpenCommentpopup(ths) {
      var vm = this;
      vm.relatedInfoId = ths.relateD_INFO_ID, vm.assetTransferdetailId = ths.asset_transfer_deatails_Id;
      vm.assetTransferBatchId = ths.btach_Id;
      vm.description = ths.description;
      vm.itemName = ths.name;
      vm.Commentpopup = true;
    },
    CloseAddAcceptRejectPopup() {
      var vm = this;
      vm.IsShowPopup = false;
    },
    sortdata: function (s) {
      var SortDir = "sort tb_headerSortDown";
      this.sortBy = s;
      if (s === this.sortBy) {
        if (this.sortBy == "") {
          this.sortBy = "ASC";
          SortDir = "sort tb_headerSortDown";
        } else if (this.sortExp == "ASC") {
          this.sortExp = "DESC";
          SortDir = "sort tb_headerSortUp";
        } else {
          this.sortExp = "ASC";
          SortDir = "sort tb_headerSortDown";
        }
      }
      this.FetchData();
      $("#" + s + '  span:first-child').attr("class", SortDir);
    }
  }
});
// CONCATENATED MODULE: ./src/views/AssetCatalog/ViewInTransitItems.vue?vue&type=script&lang=js&
 /* harmony default export */ var AssetCatalog_ViewInTransitItemsvue_type_script_lang_js_ = (ViewInTransitItemsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/AssetCatalog/ViewInTransitItems.vue





/* normalize component */

var ViewInTransitItems_component = Object(componentNormalizer["a" /* default */])(
  AssetCatalog_ViewInTransitItemsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ViewInTransitItems = __webpack_exports__["default"] = (ViewInTransitItems_component.exports);

/***/ }),

/***/ "ddfc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InTransistProductAcceptReject_vue_vue_type_style_index_0_id_2172eca6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bcb1");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InTransistProductAcceptReject_vue_vue_type_style_index_0_id_2172eca6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InTransistProductAcceptReject_vue_vue_type_style_index_0_id_2172eca6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);
//# sourceMappingURL=chunk-1a26956e.js.map