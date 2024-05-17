(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2ff4a0ac"],{

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

/***/ "df17":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Common/ListingStatus.vue?vue&type=template&id=24bdefb2&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "cstm-drop-btn"
  }, [_vm.isShowLoader ? _c('button', {
    staticClass: "btn btn-dark w-100",
    staticStyle: {
      "padding": "2px 10px 2px 2px"
    },
    attrs: {
      "type": "button",
      "disabled": ""
    }
  }, [_c('span', {
    staticClass: "spinner-border spinner-border-sm",
    attrs: {
      "role": "status",
      "aria-hidden": "true"
    }
  }), _vm._v(" Loading...")]) : _vm._e(), !_vm.isShowLoader ? _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.StatusId,
      expression: "StatusId"
    }],
    staticClass: "w-100",
    class: {
      'ddlchangestatus': _vm.IsReponsive
    },
    style: {
      backgroundColor: _vm.StatusBgColor,
      color: _vm.StatusColor
    },
    attrs: {
      "id": "crmlistingStatus_span",
      "disabled": _vm.StatusCode == _vm.StatusId,
      "oldstatus": _vm.PrevStatus,
      "checkPrivilege": "yes",
      "data-id": _vm.IsReponsive ? _vm.dataid : null,
      "data-status": _vm.IsReponsive ? _vm.StatusId : null
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.StatusId = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, function ($event) {
        return _vm.ChangeStatus(_vm.dataid, $event);
      }]
    }
  }, _vm._l(_vm.StatusList, function (s, index) {
    return _c('option', {
      key: index,
      domProps: {
        "value": s.STATUS_ID
      }
    }, [_vm._v(" " + _vm._s(s.STATUS) + " ")]);
  }), 0) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Common/ListingStatus.vue?vue&type=template&id=24bdefb2&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Common/ListingStatus.vue?vue&type=script&lang=js&


/* harmony default export */ var ListingStatusvue_type_script_lang_js_ = ({
  name: 'listing-status',
  props: {
    dataid: {
      type: Number,
      required: true
    },
    dataselected: {
      type: String,
      required: true
    },
    dataController: {
      type: String,
      required: true
    },
    dataAction: {
      type: String,
      required: true
    },
    isfor: {
      type: String,
      required: true
    },
    callbackfunction: {
      type: Function
    },
    statuslist: {
      type: Array,
      required: true
    },
    isselectedvaluestring: {
      type: Boolean
    },
    parentid: {
      type: Number
    },
    haschild: {
      type: Boolean
    },
    hasglobal: {
      type: Boolean,
      required: false
    }
  },
  data: function () {
    return {
      StatusId: this.dataselected,
      StatusCode: "",
      PrevStatus: this.dataselected,
      IsReponsive: false,
      StatusList: this.statuslist,
      item: this.item,
      StatusColor: '#ffffff',
      StatusBgColor: '#525f65',
      isShowLoader: true
    };
  },
  created: function () {
    var vueCom = this;
    if (vueCom.hasglobal == true || vueCom.hasglobal == "true") {
      vueCom.StatusList = this.GetStatusList();
    }
    $.each(vueCom.statuslist, function (filedIndex, fieldItem) {
      if (vueCom.statuslist[filedIndex].STATUS == "Closed") {
        vueCom.StatusCode = vueCom.statuslist[filedIndex].STATUS_ID;
      }
    });
    try {
      this.isShowLoader = !(this.statuslist.length > 0);
    } catch (ex) {
      this.isShowLoader = false;
    }
    var ths = this;
    if (this.isselectedvaluestring == true) {
      var itm = this.StatusList.filter(function (entry) {
        return entry.STATUS == ths.dataselected;
      });
      if (itm.length > 0) {
        this.StatusId = itm[0].STATUS_ID;
        this.PrevStatus = itm[0].STATUS_ID;
        this.GetColor();
      } else {
        this.StatusId = "";
        this.PrevStatus = "";
      }
    } else {
      this.StatusId = this.dataselected;
      this.PrevStatus = this.dataselected;
      this.GetColor();
    }
    this.GetColor();
  },
  mounted: function () {
    var vm = this;
    $("body").on("change", ".ddlchangestatus", function (event) {
      event.stopImmediatePropagation();
      vm.ChangeStatus($(this).attr("data-id"), event, event.target.value);
    });
  },
  watch: {
    dataselected: function (value) {
      if (this.isselectedvaluestring == true) {
        var itm = this.StatusList.filter(function (entry) {
          return entry.STATUS == value;
        });
        if (itm.length > 0) {
          this.StatusId = itm[0].STATUS_ID;
          this.PrevStatus = itm[0].STATUS_ID;
          this.GetColor();
        } else {
          this.StatusId = "";
          this.PrevStatus = "";
        }
      } else {
        this.StatusId = value;
        this.PrevStatus = value;
        this.GetColor();
      }
      this.GetColor();
    },
    statuslist: function (value) {
      this.isShowLoader = false;
      this.StatusList = value;
      var ths = this;
      if (ths.isselectedvaluestring == true) {
        var itm = ths.StatusList.filter(function (entry) {
          return entry.STATUS == ths.dataselected;
        });
        if (itm.length > 0) {
          ths.StatusId = itm[0].STATUS_ID;
          ths.PrevStatus = itm[0].STATUS_ID;
          ths.GetColor();
        } else {
          ths.StatusId = "";
          ths.PrevStatus = "";
          this.GetColor();
        }
      } else {
        this.StatusId = value;
        ths.PrevStatus = value;
        this.GetColor();
      }
    }
  },
  methods: {
    GetColor: function () {
      var vm = this;
      //vm.$forceUpdate();
      if (vm.StatusList != null && vm.StatusList.length > 0) {
        var returnedData = $.grep(vm.StatusList, function (element, index) {
          return element.STATUS_ID == vm.StatusId;
        });
        if (returnedData != null && returnedData.length > 0) {
          vm.StatusColor = returnedData[0].STATUS_COLOR;
          vm.StatusBgColor = returnedData[0].STATUS_BG_COLOR;
          if (vm.StatusColor == null || vm.StatusColor == '') {
            vm.StatusColor = '#ffffff';
            vm.StatusBgColor = '#525f65';
          } else {
            vm.StatusId = returnedData[0].STATUS_ID;
          }
        }
        //else {
        //    var itm = vm.StatusList.filter(function (entry) { return entry.STATUS == vm.dataselected; });
        //    ths.StatusId = itm[0].STATUS_ID;
        //}
      }
    },

    GetStatusList: function () {
      var list = [];
      var obj = {
        STATUS_ID: 1001,
        STATUS: Globalize.localize("Active"),
        STATUS_COLOR: '#ffffff',
        STATUS_BG_COLOR: '#28a745'
      };
      list.push(obj);
      obj = {
        STATUS_ID: 1002,
        STATUS: Globalize.localize("Inactive"),
        STATUS_COLOR: '#ffffff',
        STATUS_BG_COLOR: '#d72435'
      };
      list.push(obj);
      return list;
    },
    ChangeStatus: function (id, event, statusId) {
      var StatusName = event.target.selectedOptions[0].text;
      var vm = this;
      if (true) {
        var urlval = "";
        if (StatusName == "Closed" && vm.dataController + '/' + vm.isfor == "Crm/CRM_LEADS") {
          urlval = '/' + vm.dataController + '/CloseLeads';
        } else {
          urlval = '/' + vm.dataController + '/' + vm.dataAction;
        }
        if (vm.PrevStatus != $(event.target).attr("oldstatus")) {
          vm.PrevStatus = $(event.target).attr("oldstatus");
        }
        var msg = this.$t("ConfirmUpdateStatusRecord");
        var isFor = vm.isfor;
        if (vm.isfor == "TASKLISTING") {
          msg = vm.$t("ConfirmUpdateTaskStatus");
          if (vm.haschild == true) {
            msg = this.$t("ConfirmUpdateTaskStatus");
          } else if (vm.haschild == false && Number(vm.parentid) > 0) {
            msg = this.$t("ConfirmUpdateChildTaskStatus");
          } else {
            msg = this.$t("ConfirmUpdateStatusRecord");
          }
        }
        var isStatusChange = false;
        var inprogressStatusId = 0;
        var pendingStatusId = 0;
        $.each(vm.statuslist, function (filedIndex, fieldItem) {
          if (fieldItem.STATUS_CODE == "REFPEN") {
            pendingStatusId = fieldItem.STATUS_ID;
          } else if (fieldItem.STATUS_CODE == "PNPGRS") {
            InprogressStatusId = fieldItem.STATUS_ID;
          }
        });
        if (Number(vm.parentid) > 0 && vm.PrevStatus == "1002" && vm.StatusId == "1001") {
          isStatusChange = true;
        } else if (Number(vm.parentid) > 0 && vm.PrevStatus != "1002" && vm.StatusId == 1001) {
          isStatusChange = true;
        } else if (Number(vm.parentid) > 0 && vm.StatusId == Number(pendingStatusId)) {
          isStatusChange = true;
        } else if (Number(vm.parentid) > 0 && vm.StatusId == Number(InprogressStatusId)) {
          isStatusChange = true;
        }
        if (isStatusChange) {
          //msg = Globalize.localize("ConfirmUpdateChildTaskStatus");
          isFor = "TASKCHILDLISTING";
        }
        if (vm.isfor == "TASKLISTING") {
          if (isStatusChange) {
            msg = this.$t("ConfirmUpdateChildTaskStatus");
          } else {
            msg = this.$t("ConfirmUpdateTaskStatus");
          }
        }
        if ( /*GetPrivilege('/Project/UpdateProjectStatus', true, false)*/true) {
          vm.confirmR(msg, true, this.$t('UpdateCommonStatus'), function (result) {
            if (statusId) {
              vm.StatusId = statusId;
            }
            var VarObject = {
              ID: id,
              StatusId: vm.StatusId,
              IsFor: isFor
            };
            var objectPostString = JSON.stringify(VarObject);
            DataService["a" /* default */].CommonUpdateStatus(objectPostString).then(function (response) {
              if (response.data != null) {
                if (response.data.status === 'Success') {
                  vm.ShowAlert(vm.$t("RecordUpdatedSuccessfully"), "success", vm.$t('Alert'));
                  vm.PrevStatus = vm.StatusId;
                  if (typeof vm.callbackfunction != 'undefined' && vm.callbackfunction != null) {
                    vm.callbackfunction();
                  }
                } else {
                  vm.ShowAlert(vm.$t("UnknownErrorOccur"), "failure", true, vm.$t('Alert'));
                }
              } else {
                vm.ShowAlert(vm.$t("UnknownErrorOccur"), "failure", true, vm.$t('Alert'));
              }
            }, function (response) {});
          }, function (result) {
            vm.StatusId = vm.PrevStatus;
          });
        } else {}
        // }
        // else {
        //     vm.StatusId = vm.PrevStatus;
        // }
      } else {}
      //}
    }
  }
});
// CONCATENATED MODULE: ./src/components/Common/ListingStatus.vue?vue&type=script&lang=js&
 /* harmony default export */ var Common_ListingStatusvue_type_script_lang_js_ = (ListingStatusvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Common/ListingStatus.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Common_ListingStatusvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ListingStatus = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "f599":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Asset/ItemsScanSummary.vue?vue&type=template&id=19d9e32d&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "main-content no-left-bar",
    attrs: {
      "id": "divMainAssetGroupListingData"
    }
  }, [_c('loader', {
    attrs: {
      "is-visible": _vm.isLoading
    }
  }), _c('div', {
    staticClass: "right-content"
  }, [_c('div', {
    staticClass: "col-md-12 p-0"
  }, [_c('div', {
    staticClass: "theme-primary partition tablehead p-actions-expand"
  }, [_c('span', {
    staticClass: "p-name text-white"
  }, [_vm._v(_vm._s(_vm.$t('ProductsScanSummary')))]), _c('span', {
    staticClass: "p-actions float-right"
  }, [_vm._m(0), _c('a', {
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
  }), _vm._v(" "), _c('br'), _c('span', [_vm._v("Page Tour")])])]), _vm._m(1)])]), _c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 searchpanel tablehead search float-left p-0"
  }, [_c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 Search-panel float-left pt-2 p-0"
  }, [_c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-6 col-xl-6 float-left"
  }, [_c('div', {
    staticClass: "row mt-0"
  }, [_c('div', {
    staticClass: "col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 float-left pr-1 pl-0"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.Scan_Items,
      expression: "Scan_Items"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Search by Group Name",
      "autocomplete": "off",
      "name": "search"
    },
    domProps: {
      "value": _vm.Scan_Items
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.Scan_Items = $event.target.value;
      }
    }
  })])]), _c('div', {
    staticClass: "col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 float-left pl-0"
  }, [_c('div', {
    staticClass: "search-btm-btn background-0 text-left form-check-inline m-0"
  }, [_c('a', {
    staticClass: "btn btn-success mr-1 px-4",
    attrs: {
      "href": "javascript:;",
      "title": "Search"
    },
    on: {
      "click": _vm.SearchData
    }
  }, [_c('em', {
    staticClass: "fa fa-search text-white"
  })]), _c('a', {
    staticClass: "btn btn-danger clearsearchtext px-4",
    attrs: {
      "title": "Clear",
      "href": "javascript:;"
    },
    on: {
      "click": _vm.ResetData
    }
  }, [_c('em', {
    staticClass: "fa fa-refresh"
  })])])])])])])]), _c('div', {
    staticClass: "listing mt-2"
  }, [_c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-bordered mt-0",
    attrs: {
      "id": "itmgrplisting"
    }
  }, [_c('thead', {
    staticClass: "thead-bg"
  }, [_c('tr', [_c('th', [_c('span', {
    staticClass: "sort",
    attrs: {
      "href": "javascript:;",
      "id": "Group_name"
    },
    on: {
      "click": function ($event) {
        return _vm.sortdata('NAME');
      }
    }
  }, [_vm._v("Group Name")])]), _vm._m(2), _vm._m(3), _vm._m(4), _vm._m(5), _vm._m(6)])]), _c('tbody', [_vm._l(_vm.GroupData, function (item, index) {
    return _c('tr', {
      key: index
    }, [_c('td', [_c('span', {
      staticClass: "text-overflow-dynamic-container"
    }, [_vm._v(_vm._s(item.Group_name))])]), _c('td', {
      staticClass: "text-center single-action"
    }, [_c('span', {
      staticClass: "text-dark"
    }, [_c('i', {
      staticClass: "fa fa-list",
      attrs: {
        "aria-hidden": "true"
      }
    }), _c('RouterLink', {
      attrs: {
        "to": "/Asset/ScannedItems"
      }
    }, [_c('span', {
      staticClass: "noti-circle noti-blue"
    }, [_vm._v(_vm._s(item.Total_Items) + " ")])])], 1)]), _c('td', {
      staticClass: "text-center single-action"
    }, [_c('span', {
      staticClass: "text-dark"
    }, [_c('i', {
      staticClass: "fa fa-list",
      attrs: {
        "aria-hidden": "true"
      }
    }), _c('RouterLink', {
      attrs: {
        "to": "/Asset/RFIDMyDeviceList"
      }
    }, [_c('span', {
      staticClass: "noti-circle noti-green"
    }, [_vm._v(_vm._s(item.Scanned_Items))])])], 1)]), _c('td', {
      staticClass: "text-center single-action"
    }, [_c('span', {
      staticClass: "text-dark"
    }, [_c('i', {
      staticClass: "fa fa-list",
      attrs: {
        "aria-hidden": "true"
      }
    }), _c('RouterLink', {
      attrs: {
        "to": "/Asset/MissingItems"
      }
    }, [_c('span', {
      staticClass: "noti-circle noti-orange"
    }, [_vm._v(_vm._s(item.Missing_Items))])])], 1)]), _c('td', [_c('span', {
      staticClass: "text-overflow-dynamic-container"
    }, [_vm._v(_vm._s(_vm.$options.filters.formatDateTime(item.ScanTime)))])]), _c('td', [_c('span', {
      staticClass: "text-overflow-dynamic-container"
    }, [_vm._v(_vm._s(item.Notification_Status))])])]);
  }), _vm.noRecord ? _c('tr', [_c('td', {
    staticClass: "text-center text-danger no-record",
    attrs: {
      "colspan": "8"
    }
  }, [_vm._v(_vm._s(_vm.$t('NoRecordfound')))])]) : _vm._e()], 2)])]), _c('Pager', {
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
  })], 1)])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    staticClass: "p-action-btn text-white d-none",
    attrs: {
      "id": "ancChangeView",
      "data-isshow": "0"
    }
  }, [_c('i', {
    staticClass: "fa fa-pencil",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('br'), _vm._v("Change View")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', {
    staticClass: "collapse-head-btns"
  }, [_c('a', {
    staticClass: "collapse-btns",
    attrs: {
      "href": "javascript:;"
    }
  }, [_c('i', {
    staticClass: "fa fa-angle-up text-white"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('th', [_c('span', {
    attrs: {
      "href": "javascript:;",
      "id": "Total_Items"
    }
  }, [_vm._v("Total Items ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('th', [_c('span', {
    attrs: {
      "href": "javascript:;",
      "id": "Scanned_Items"
    }
  }, [_vm._v("Scanned Items")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('th', [_c('span', [_vm._v(" Missing Items ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('th', [_c('span', {
    attrs: {
      "id": "ScanTime"
    }
  }, [_vm._v(" Scan Time")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('th', [_c('span', {
    attrs: {
      "id": "Notification_Status"
    }
  }, [_vm._v(" Notification Status")])]);
}];

// CONCATENATED MODULE: ./src/views/Asset/ItemsScanSummary.vue?vue&type=template&id=19d9e32d&

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// EXTERNAL MODULE: ./src/components/Common/Pager.vue + 4 modules
var Pager = __webpack_require__("4555");

// EXTERNAL MODULE: ./src/components/Common/ListingStatus.vue + 4 modules
var ListingStatus = __webpack_require__("df17");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Asset/ItemsScanSummary.vue?vue&type=script&lang=js&



/* harmony default export */ var ItemsScanSummaryvue_type_script_lang_js_ = ({
  components: {
    Pager: Pager["a" /* default */],
    StatusList: ListingStatus["a" /* default */]
  },
  data() {
    return {
      txtsearch: null,
      Case: 0,
      ListType: true,
      Scan_Items: '',
      sortBy: '',
      sortExp: '',
      Name: '',
      GroupData: [],
      noRecord: false,
      TotalRecords: 0,
      pageNum: 1,
      PageSize: 10,
      CurrentPage: 1,
      TotalPages: 0,
      isLoading: false
    };
  },
  created: function () {
    this.GetItemsScanSummary();
  },
  methods: {
    GetItemsScanSummary: function () {
      var vueObj = this;
      // this.isLoading=true;      
      // var url =`search=${this.Scan_Items}&pageSize=${vueObj.PageSize}&pageNum=${vueObj.pageNum}&sortBy=&sortExp=&Type=${this.Type}`;
      var url = `search=${this.Scan_Items}&pageSize=${vueObj.PageSize}&pageNum=${vueObj.pageNum}&sortBy=${this.sortBy}&sortExp=${this.sortExp}`;
      DataService["a" /* default */].GetRFIDGroupItemList(url).then(response => {
        if (response.data != null) {
          if (response.data.length > 0) {
            vueObj.GroupData = response.data;
            vueObj.TotalRecords = response.data[0].Total_Items;
            vueObj.TotalPages = Math.ceil(vueObj.TotalRecords / vueObj.PageSize);
            vueObj.CurrentPage = vueObj.pageNum;
            vueObj.noRecord = false;
            vueObj.isLoading = false;
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
      });
    },
    SearchData: function () {
      this.pageNum = 1;
      this.GetItemsScanSummary();
    },
    ResetData: function () {
      this.Scan_Items = '';
      this.GetItemsScanSummary();
    },
    pagerMethod: function (value) {
      this.PageSize = value.PageSize;
      this.pageNum = value.PageNumber;
      this.GetItemsScanSummary();
    },
    sortdata: function (val) {
      this.sortBy = val;
      this.sortExp = this.sortExp == 'DESC' ? 'ASC' : 'DESC';
      this.GetItemsScanSummary();
    }
  }
});
// CONCATENATED MODULE: ./src/views/Asset/ItemsScanSummary.vue?vue&type=script&lang=js&
 /* harmony default export */ var Asset_ItemsScanSummaryvue_type_script_lang_js_ = (ItemsScanSummaryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/Asset/ItemsScanSummary.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Asset_ItemsScanSummaryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ItemsScanSummary = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2ff4a0ac.js.map