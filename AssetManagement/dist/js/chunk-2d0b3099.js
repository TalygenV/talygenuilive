(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0b3099"],{

/***/ "2753":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Asset/ReturnItems.vue?vue&type=template&id=32ffac9f&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "main-content no-left-bar",
    attrs: {
      "id": "divMainAssetGroupListingData"
    }
  }, [_c('div', {
    staticClass: "right-content"
  }, [_c('div', {
    staticClass: "col-md-12 p-0"
  }, [_c('div', {
    staticClass: "theme-primary partition tablehead p-actions-expand"
  }, [_c('span', {
    staticClass: "p-name text-white"
  }, [_vm._v(_vm._s(_vm.$t('ReturnList')))]), _vm._m(0)])]), _c('div', {
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
      value: _vm.search,
      expression: "search"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Search by EPC Tag or Name or Unique Name",
      "autocomplete": "off",
      "name": "search"
    },
    domProps: {
      "value": _vm.search
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.search = $event.target.value;
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
  })]), _vm._v("   "), _c('a', {
    staticClass: "btn btn-info",
    attrs: {
      "id": "Search_rfid",
      "href": "javascript:;",
      "title": _vm.$t('RFIDCheckinItems'),
      "data-toggle-tooltip": "tooltip",
      "data-original-title": "RFID Checkin Items"
    },
    on: {
      "click": function ($event) {
        return _vm.ReturnList();
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-barcode text-white float-left mt-1"
  }), _c('span', {
    staticClass: "text-white mx-2"
  }, [_vm._v(_vm._s(_vm.$t('RFIDCheckinItems')))])])])])])])])])]), _c('div', {
    staticStyle: {
      "clear": "both"
    }
  }), _c('tg-list', {
    attrs: {
      "IsShowAction": false,
      "SearchPosition": "none",
      "listType": ['List'],
      "ModuleName": "Asset",
      "SubModuleCode": "Asset",
      "IdentityColumn": "EPC_TAG",
      "PageSize": _vm.PageSize,
      "HeaderText": "Return List",
      "ListData": _vm.returnProductData,
      "HeaderData": _vm.Headers,
      "LegendArray": _vm.LegendArray,
      "widgets": _vm.widgets,
      "SearchFields": _vm.leftSearchFields,
      "RenderRowActionMethod": _vm.renderActions,
      "TotalRecords": _vm.TotalRecords,
      "ListDataCallBackFunction": _vm.GetReturnList,
      "NorecordfoundText": _vm.$t('NorecordfoundText')
    },
    on: {
      "PagerButtonClick": _vm.pagerMethod,
      "SortdataButtonClick": _vm.sortdata
    },
    scopedSlots: _vm._u([{
      key: "slotdata",
      fn: function ({
        data
      }) {
        return [data.column.COLUMN_NAME == 'Return' ? [data.row.number_of_items_assigned > 0 ? _c('td', {
          staticClass: "text-center single-action"
        }, [_c('span', {
          staticClass: "text-dark"
        }, [_c('em', {
          staticClass: "table-head-btn iconenable",
          on: {
            "click": function ($event) {
              return _vm.AssetMutipleReturn(data.row);
            }
          }
        }, [_c('i', {
          staticClass: "fa fa-undo"
        }), _c('span', [_vm._v(_vm._s(_vm.$("Return")))])])])]) : _c('td', {
          staticClass: "text-center single-action"
        }, [_c('span', {
          staticClass: "active-disabled"
        }, [_c('span', {
          staticClass: "text-center"
        }, [_vm._v(_vm._s(_vm.$t('WaitingforAcceptance')))])])])] : _vm._e()];
      }
    }])
  })], 1);
};
var staticRenderFns = [function () {
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
}];

// CONCATENATED MODULE: ./src/views/Asset/ReturnItems.vue?vue&type=template&id=32ffac9f&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Asset/ReturnItems.vue?vue&type=script&lang=js&


/* harmony default export */ var ReturnItemsvue_type_script_lang_js_ = ({
  data() {
    return {
      search: "",
      leftSearchFields: [],
      widgets: [],
      listheaderbuttons: [],
      LegendArray: [],
      chekedInId: "",
      sortBy: "",
      sortExp: "",
      returnProductData: [],
      noRecord: false,
      TotalRecords: 0,
      pagenumber: 100,
      pageSize: 0,
      CurrentPage: 1,
      isLoading: false,
      isListVisible: false,
      Headers: [{
        "COLUMN_NAME": "EPC_TAG",
        "DATA_TYPE": "number",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('EPCTag'),
        "DISPLAY_ORDER": 1
      }, {
        "COLUMN_NAME": "name",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Name'),
        "DISPLAY_ORDER": 2
      }, {
        "COLUMN_NAME": "UNIQUE_NAME",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('UniqueName'),
        "DISPLAY_ORDER": 3
      }, {
        "COLUMN_NAME": "AssignedUser",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('AssignedTo'),
        "DISPLAY_ORDER": 4
      }, {
        "COLUMN_NAME": "number_of_items_assigned",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Quantity'),
        "DISPLAY_ORDER": 5
      }, {
        "COLUMN_NAME": "Return",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Return'),
        "DISPLAY_ORDER": 6,
        settings: {
          isInSlot: true
        }
      }]
    };
  },
  created: async function () {
    await this.GetPageSize();
    this.GetReturnList();
  },
  updated: function () {
    $('.expand-list').addClass("hide");
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
    async GetReturnList(ths) {
      if (ths != null) {
        this.chekedInId = 1;
      } else {
        this.chekedInId = "";
      }
      const url = `chekedInId=1&search=${this.search}&pagenumber=${this.pagenumber}&pageSize=${this.pageSize}&sortBy=${this.sortBy}&sortExp=${this.sortExp}`;
      var vueObj = this;
      await DataService["a" /* default */].GetRFIDItemsToReturn(url).then(response => {
        var res = JSON.parse(response.data);
        if (res.data != null) {
          if (res.data.length > 0) {
            vueObj.returnProductData = res.data;
            vueObj.TotalRecords = res.data[0].TOTAL;
            vueObj.TotalPages = Math.ceil(vueObj.TotalRecords / vueObj.pageSize);
            vueObj.CurrentPage = vueObj.pageNum;
            vueObj.noRecord = false;
          } else {
            vueObj.returnProductData = [];
            vueObj.noRecord = true;
            vueObj.TotalRecords = 0;
          }
        } else {
          vueObj.noRecord = true;
          vueObj.returnProductData = [];
          vueObj.TotalRecords = 0;
        }
      });
    },
    SearchData: function () {
      this.GetReturnList("1");
    },
    ResetData: function () {
      this.search = "";
      this.GetReturnList("1");
    },
    pagerMethod: function (value) {
      this.pageSize = value.pageSize;
      this.pageNum = value.pageNum;
      this.GetReturnList();
    },
    sortData: function (value) {
      this.sortBy = value;
      this.sortExp = this.sortExp == 'DESC' ? 'ASC' : 'DESC';
      this.GetReturnList("1");
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
      $("#" + s + '  span:first-child').attr("class", SortDir);
    },
    ReturnList: function () {
      this.search = "";
      this.GetReturnList("1");
    },
    commonHeaderButtonClick: function () {},
    renderActions(row) {
      var self = this;
      let rtnActionArray = [];
      self.listActions.forEach(actionItem => {
        let action = {
          ...actionItem
        };
        // switch (action.title) {
        //     case 'Edit':
        //         action.isVisible = true;
        //         break;
        // }
        rtnActionArray.push(action);
      });
      return rtnActionArray;
    }
  }
});
// CONCATENATED MODULE: ./src/views/Asset/ReturnItems.vue?vue&type=script&lang=js&
 /* harmony default export */ var Asset_ReturnItemsvue_type_script_lang_js_ = (ReturnItemsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/Asset/ReturnItems.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Asset_ReturnItemsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ReturnItems = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d0b3099.js.map