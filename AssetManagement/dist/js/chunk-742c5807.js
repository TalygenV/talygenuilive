(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-742c5807"],{

/***/ "1470":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetCatalog/TransferedItemList.vue?vue&type=template&id=3c0d568d&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_c('tg-list', {
    attrs: {
      "IsShowAction": false,
      "showCheckBox": false,
      "listType": ['List'],
      "ModuleName": "Asset",
      "SubModuleCode": "Asset",
      "IdentityColumn": "ASSET_CATALOGUE_ID",
      "HeaderText": "Transferred List",
      "PageSize": _vm.PageSize,
      "ListData": _vm.TransfredList,
      "HeaderData": _vm.Headers,
      "widgets": _vm.widgets,
      "callbackfunction": _vm.FetchData,
      "HeaderButtons": _vm.listheaderbuttons,
      "TotalRecords": _vm.TotalRecords,
      "SearchFields": _vm.leftSearchFields,
      "RenderRowActionMethod": _vm.renderActions,
      "ListDataCallBackFunction": _vm.FetchData,
      "LegendArray": _vm.LegendArray,
      "SortExp": _vm.SortExp,
      "SortBy": _vm.SortBy
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
        return [data.column.COLUMN_NAME == 'transfeR_QUANTITY' ? [_c('span', {
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
        }, [_vm._v(_vm._s(data.row[data.column.COLUMN_NAME]))])])] : _vm._e(), data.column.COLUMN_NAME == 'description' ? [_c('span', {
          staticClass: "text-dark",
          attrs: {
            "title": data.row.NUMBER_OF_ITEM
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
        })])])] : _vm._e()];
      }
    }])
  }), _vm.Commentpopup ? _c('DescriptionPopUp', {
    attrs: {
      "assetTransferdetailId": _vm.assetTransferdetailId,
      "assetTransferBatchId": _vm.assetTransferBatchId,
      "description": _vm.description,
      "relatedInfoId": _vm.relatedInfoId
    },
    on: {
      "ClosePopup": _vm.ClosePopup
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/AssetCatalog/TransferedItemList.vue?vue&type=template&id=3c0d568d&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./src/views/AssetCatalog/TransferedItemListSchema.js


let buttons = [{
  title: 'In-Transit Products',
  iconClass: 'fa fa-recycle',
  callbackfunction: 'ViewInTransitItems',
  additionalClass: '',
  isdisabled: false,
  isvisible: true,
  checkPrivilege: false
}, {
  title: 'Back to list',
  iconClass: 'fa fa-angle-double-left pr-2',
  callbackfunction: 'BackTolist',
  additionalClass: '',
  isdisabled: false,
  isvisible: true,
  checkPrivilege: false
}];
let leftsearchSchema = [{
  fieldName: "Location From",
  fieldType: "ddl-multilevel",
  fieldIcon: "fa fa-map-marker",
  paramName: "LocationIdFrom",
  fieldSearchConditionName: [''],
  isSearch: false,
  value: null,
  listOptions: []
}, {
  fieldName: "Location TO",
  fieldType: "ddl-multilevel",
  fieldIcon: "fa fa-map-marker",
  paramName: "LocationId",
  fieldSearchConditionName: [''],
  isSearch: false,
  value: null,
  listOptions: []
}, {
  fieldName: 'Product Name',
  fieldType: "text",
  fieldIcon: "fa fa-suitcase",
  paramName: "search",
  fieldSearchConditionName: [''],
  isSearch: false,
  value: "",
  listOptions: []
}];
let listActions = [{
  title: 'View attached file(s)',
  callbackfunction: '',
  href: 'javascript:void(0)',
  icon: 'fa fa-download text-secondary action-icon',
  additionalSpan: '',
  isVisible: true
}];
async function bindleftCommonSearchdropdown(instance, modulename, filtername) {
  var vm = instance;
  var LocationData = [];
  var TagData = [];
  if (filtername == "Location From") {
    var params = `reqForm=transfer`;
    await DataService["a" /* default */].GetLocationByCompanyId(params).then(function (response) {
      var json = JSON.parse(response.data).data;
      debugger;
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
      vm.leftSearchFields[0].listOptions = LocationData;
    });
  }
  if (filtername == "Location To") {
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
      vm.leftSearchFields[1].listOptions = LocationData;
    });
  }
  if (filtername == "Tag") {
    var params = `modulename=${modulename}`;
    await DataService["a" /* default */].GetTagsByModuleId(params).then(function (response) {
      if (filtername == "Tag") {
        let obj1 = {};
        JSON.parse(response.data).data.forEach(item => {
          obj1 = {
            name: item.TAG_NAME,
            value: item.TAG_ID
          };
          TagData.push(obj1);
        });
        vm.leftSearchFields[3].listOptions = TagData;
      }
    });
  }
  if (filtername == "Status") {
    var params = `langCode=en&statusType=AssetManagement&hasglobal=true`;
    await DataService["a" /* default */].GetStatusList(params).then(function (response) {
      if (filtername == "Status") {
        let obj2 = {};
        JSON.parse(response.data).data.forEach(item => {
          if (item.STATUS_ID != 1003) {
            obj2 = {
              name: item.STATUS,
              value: item.STATUS_ID
            };
            TagData.push(obj2);
          }
        });
        vm.leftSearchFields[2].listOptions = TagData;
      }
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
/* harmony default export */ var TransferedItemListSchema = ({
  buttons,
  leftsearchSchema,
  listActions,
  bindleftCommonSearchdropdown
});
// EXTERNAL MODULE: ./src/components/Modal/DescriptionPopUp.vue + 4 modules
var DescriptionPopUp = __webpack_require__("5f25");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetCatalog/TransferedItemList.vue?vue&type=script&lang=js&




/* harmony default export */ var TransferedItemListvue_type_script_lang_js_ = ({
  components: {
    DescriptionPopUp: DescriptionPopUp["a" /* default */]
  },
  data() {
    return {
      View_List: [],
      listheaderbuttons: TransferedItemListSchema.buttons,
      leftSearchFields: TransferedItemListSchema.leftsearchSchema,
      listActions: TransferedItemListSchema.listActions,
      LegendArray: [],
      TransfredList: [],
      PageSize: 10,
      PageNumber: 1,
      PageSizeOption: null,
      StatusListForListing: [],
      Headers: [{
        "COLUMN_NAME": 'name',
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": "Product Name",
        "DISPLAY_ORDER": 1
      }, {
        "COLUMN_NAME": 'iteM_CODE',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Product Code",
        "DISPLAY_ORDER": 2
      }, {
        "COLUMN_NAME": 'sourcE_LOCATION_NAME',
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": "Location From",
        "DISPLAY_ORDER": 3
      }, {
        "COLUMN_NAME": 'destinatioN_LOCATION_NAME',
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": "Location To",
        "DISPLAY_ORDER": 4
      }, {
        "COLUMN_NAME": 'transfeR_QUANTITY',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Shipped Quantity",
        "DISPLAY_ORDER": 3,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": 'accepteD_QUANTITY',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Accepted",
        "DISPLAY_ORDER": 6
      }, {
        "COLUMN_NAME": 'rejecteD_QUANTITY',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Rejected",
        "DISPLAY_ORDER": 7
      }, {
        "COLUMN_NAME": 'disputeD_QUANTITY',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Disputed",
        "DISPLAY_ORDER": 8
      }, {
        "COLUMN_NAME": 'shippeD_BY',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Shipped By",
        "DISPLAY_ORDER": 8
      }, {
        "COLUMN_NAME": 'description',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Comments",
        "DISPLAY_ORDER": 8,
        settings: {
          isInSlot: true
        }
      }],
      noRecord: true,
      TotalRecords: 0,
      CurrentPage: 1,
      TotalPages: 0,
      SortBy: '',
      SortExp: '',
      catalogId: '',
      legendProgress: [{
        class: '',
        backgroundColor: '#17a2b8',
        name: 'Draft'
      }, {
        class: 'legend-Progress',
        backgroundColor: '',
        name: 'Approved'
      }, {
        class: 'legend-pending',
        backgroundColor: '',
        name: 'Pending'
      }, {
        class: '',
        backgroundColor: '#fe6847',
        name: 'SendForCorrection'
      }, {
        class: '',
        backgroundColor: '#ee1313',
        name: 'Rejected'
      }],
      IsShowRelation: false,
      ShowClonePopup: false,
      ShowCheckAvailablity: false,
      ShowAddProduct: false,
      StatusIds: '',
      disputedVal: '',
      dateFormat: '',
      Commentpopup: false,
      assetTransferdetailId: '',
      assetTransferBatchId: '',
      itemName: '',
      OperationCode: '',
      relatedInfoId: '',
      description: ''
    };
  },
  created: async function () {
    var vueObj = this;
    await vueObj.GetPageSize();
    await vueObj.FetchData();
    TransferedItemListSchema.bindleftCommonSearchdropdown(vueObj, "Asset", "Location From");
    TransferedItemListSchema.bindleftCommonSearchdropdown(vueObj, "Asset", "Location To");
    TransferedItemListSchema.bindleftCommonSearchdropdown(vueObj, "Asset", "Tag");
    TransferedItemListSchema.bindleftCommonSearchdropdown(vueObj, "Asset", "Status");
    vueObj.LegendArray = [{
      class: 'legend-Progress colorboxsquare',
      text: "Uniquely named products"
    }];
  },
  methods: {
    columnDataFormatter: function (row, column) {
      return row[column.COLUMN_NAME];
    },
    async GetPageSize() {
      var vm = this;
      var params = 'key=DefaultPageSize';
      await DataService["a" /* default */].GetConfigurationValueForCompanyByKey(params).then(response => {
        if (response.data != null) {
          vm.PageSize = parseInt(response.data);
        }
      });
    },
    async FetchData() {
      var vm = this;
      var params = `dateFormat=${vm.dateFormat}&pageSize=${vm.PageSize}&pageNum=${vm.PageNumber}&sortBy=${vm.SortBy}&sortExp=${vm.SortExp}&statusIds=${vm.StatusIds}&disputedVal=${vm.disputedVal}&${vm.searchCondition}`;
      await DataService["a" /* default */].GetTransferedItemsList(params).then(response => {
        if (response.data != null) {
          console.log('res', response.data);
          if (response.data.length > 0) {
            vm.TransfredList = response.data;
            vm.TransfredList.forEach(row => {
              row.additionalClass = '';
              if (row.disputeD_QUANTITY > 0) {
                // row.additionalClass="warning-bar";
              } else if (row.haS_UNIUQE_NAMES == true) {
                row.additionalClass = "low-bar odd";
              }
              if (row.IsSampleData == true) {
                className = "sample-bar";
              }
            });
            vm.TotalRecords = response.data[0].total;
            vm.TotalPages = Math.ceil(vm.TotalRecords / vm.PageSize);
            vm.CurrentPage = vm.PageNumber;
            vm.noRecord = false;
          } else {
            vm.noRecord = true;
            vm.ProductData = [];
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
        case "BackTolist":
          this.BackTolist();
          break;
        case "ViewInTransitItems":
          this.MoveToViewInTransitItems();
          break;
      }
    },
    OpenCommentpopup(ths) {
      var vm = this;
      vm.relatedInfoId = ths.relateD_INFO_ID, vm.assetTransferdetailId = ths.asseT_TRANSFER_DETAILS_ID;
      vm.assetTransferBatchId = ths.asseT_TRANSFER_BATCH_ID;
      vm.description = ths.name;
      vm.Commentpopup = true;
    },
    ClosePopup: function () {
      var vm = this;
      vm.Commentpopup = false;
    },
    BackTolist() {
      this.$router.push({
        name: 'ProductListing'
      });
    },
    MoveToViewInTransitItems() {
      this.$router.push({
        name: 'ViewInTransitItems'
      });
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
      this.FetchData();
      $("#" + s + '  span:first-child').attr("class", SortDir);
    },
    renderActions(row) {
      var self = this;
      let rtnActionArray = [];
      self.listActions.forEach(actionItem => {
        let action = {
          ...actionItem
        };
        switch (action.title) {
          case 'Edit':
            action.isVisible = true;
            break;
          case 'Clone':
            action.isVisible = true;
            break;
          case 'Detail Products History':
            action.isVisible = true;
            break;
          case 'View attached file(s)':
            action.isVisible = true;
            break;
          default:
            action.isVisible = true;
            break;
        }
        rtnActionArray.push(action);
      });
      return rtnActionArray;
    }
  }
});
// CONCATENATED MODULE: ./src/views/AssetCatalog/TransferedItemList.vue?vue&type=script&lang=js&
 /* harmony default export */ var AssetCatalog_TransferedItemListvue_type_script_lang_js_ = (TransferedItemListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/AssetCatalog/TransferedItemList.vue?vue&type=style&index=0&id=3c0d568d&prod&lang=css&
var TransferedItemListvue_type_style_index_0_id_3c0d568d_prod_lang_css_ = __webpack_require__("5114");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/AssetCatalog/TransferedItemList.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  AssetCatalog_TransferedItemListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TransferedItemList = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "1a43":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("28be");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("417d8710", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "28be":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vue-treeselect--searchable .vue-treeselect__input-container{padding:0!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "5114":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransferedItemList_vue_vue_type_style_index_0_id_3c0d568d_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1a43");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransferedItemList_vue_vue_type_style_index_0_id_3c0d568d_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransferedItemList_vue_vue_type_style_index_0_id_3c0d568d_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


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

/***/ })

}]);
//# sourceMappingURL=chunk-742c5807.js.map