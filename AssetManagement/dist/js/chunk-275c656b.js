(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-275c656b"],{

/***/ "4910":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RFIDAssetListing_vue_vue_type_style_index_0_id_1a4a57a8_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e7be");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RFIDAssetListing_vue_vue_type_style_index_0_id_1a4a57a8_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RFIDAssetListing_vue_vue_type_style_index_0_id_1a4a57a8_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "91ac":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/imagenotavailable.jpg";

/***/ }),

/***/ "c365":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Asset/RFIDAssetListing.vue?vue&type=template&id=1a4a57a8&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "main-content",
    attrs: {
      "id": "tabs"
    }
  }, [_c('tg-list', {
    attrs: {
      "IsShowAction": false,
      "listType": ['List'],
      "ModuleName": "Asset",
      "SubModuleCode": "Asset",
      "PageSize": _vm.PageSize,
      "IdentityColumn": "ASSET_CATALOGUE_ID",
      "HeaderText": "RFID Asset Listing",
      "ListData": _vm.RfidData,
      "HeaderData": _vm.Headers,
      "widgets": _vm.widgets,
      "callbackfunction": _vm.FetchData,
      "HeaderButtons": _vm.listheaderbuttons,
      "TotalRecords": _vm.TotalRecord,
      "SearchFields": _vm.leftSearchFields,
      "RenderRowActionMethod": _vm.renderActions,
      "ListDataCallBackFunction": _vm.FetchData,
      "LegendArray": _vm.LegendArray,
      "SortExp": _vm.SortExp,
      "SortBy": _vm.SortBy,
      "NorecordfoundText": _vm.$t('NorecordfoundText')
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
        return [data.column.COLUMN_NAME == 'Image' ? [_c('span', {
          staticClass: "text-dark center-icon",
          attrs: {
            "title": data.column.COLUMN_NAME
          }
        }, [_c('img', {
          staticClass: "fa fa-file text-warning action-icon",
          staticStyle: {
            "width": "50px"
          },
          attrs: {
            "src": __webpack_require__("91ac")
          }
        })])] : _vm._e(), data.column.COLUMN_NAME == 'EPC_TAG' ? [_c('span', {
          staticClass: "text-dark center-icon",
          attrs: {
            "title": data.column.COLUMN_NAME
          }
        }, [_c('em', {
          staticClass: "fa fa-file text-warning action-icon",
          on: {
            "click": function ($event) {
              return _vm.ItemHistory(data.row.EPC_TAG);
            }
          }
        })])] : _vm._e()];
      }
    }])
  }), _vm.IsProductHistory ? _c('ProductHistoryModel', {
    attrs: {
      "ItemData": _vm.ItemData
    },
    on: {
      "ClosePOPuP": _vm.ClosePOPuP
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/Asset/RFIDAssetListing.vue?vue&type=template&id=1a4a57a8&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./src/views/Asset/RFIDAssetListingSchema.js


let buttons = [{
  title: 'Page Tour',
  iconClass: 'fa fa-road',
  callbackfunction: 'setTourGuideSteps',
  additionalClass: '',
  isdisabled: false,
  isvisible: true,
  checkPrivilege: false
}];
let leftsearchSchema = [{
  fieldName: "Select Location",
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
  fieldIcon: "fa fa-cube",
  paramName: "search",
  fieldSearchConditionName: [''],
  isSearch: false,
  value: ""
}, {
  fieldName: 'Status',
  fieldType: "radio",
  fieldIcon: "fa fa-file-text-o",
  paramName: "statusIds",
  fieldSearchConditionName: [''],
  isSearch: false,
  value: "",
  listOptions: []
}, {
  fieldName: 'RFID Tag',
  fieldType: "ddl-check",
  fieldIcon: "fa fa-barcode",
  paramName: "EPCTags",
  fieldSearchConditionName: [''],
  isSearch: false,
  value: "",
  listOptions: []
}];
async function bindleftCommonSearchdropdown(instance, modulename, filtername) {
  var vm = instance;
  var LocationData = [];
  var TagData = [];
  if (filtername == "Location") {
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
      vm.leftSearchFields[0].listOptions = LocationData;
    });
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
  if (filtername == "Tag") {
    var params = `modulename=${modulename}`;
    DataService["a" /* default */].GetTagsByModuleId(params).then(function (response) {
      if (filtername == "Tag") {
        let obj1 = {};
        JSON.parse(response.data).data.forEach(item => {
          obj1 = {
            name: item.TAG_NAME,
            value: `${item.TAG_ID}`
          };
          TagData.push(obj1);
        });
        vm.leftSearchFields[3].listOptions = TagData;
      }
    });
  }
  if (filtername == "Status") {
    var params = `langCode=en&statusType=AssetManagement&hasglobal=true`;
    DataService["a" /* default */].GetStatusList(params).then(function (response) {
      if (filtername == "Status") {
        let obj2 = {};
        JSON.parse(response.data).forEach(item => {
          if (item.STATUS_ID != 1003) {
            obj2 = {
              name: item.STATUS,
              value: `${item.STATUS_ID}`
            };
            TagData.push(obj2);
          }
        });
        vm.leftSearchFields[2].listOptions = TagData;
      }
    });
  }
}
/* harmony default export */ var RFIDAssetListingSchema = ({
  buttons,
  leftsearchSchema,
  bindleftCommonSearchdropdown
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/ProductHistoryDetail.vue?vue&type=template&id=457748d6&
var ProductHistoryDetailvue_type_template_id_457748d6_render = function render() {
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
  }, [_vm._v(" Product Detail History ")]), _c('button', {
    staticClass: "close",
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": function ($event) {
        return _vm.ClosePOPuP($event);
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-times",
    attrs: {
      "aria-hidden": "true"
    }
  })])]), _c('div', {
    staticClass: "modal-body"
  }, [_c('div', {
    staticClass: "listing"
  }, [_c('tg-list', {
    attrs: {
      "showCheckBox": false,
      "IsShowAction": false,
      "listType": ['List'],
      "ModuleName": "Asset",
      "SubModuleCode": "Asset",
      "IdentityColumn": "ASSET_CATALOGUE_ID",
      "HeaderText": _vm.$t('AssetManagement'),
      "widgets": _vm.widgets,
      "ListData": _vm.ProductHistoryData,
      "HeaderData": _vm.Headers,
      "callbackfunction": _vm.GetItemHistory,
      "LegendArray": _vm.LegendArray,
      "SortExp": _vm.SortExp,
      "SortBy": _vm.SortBy,
      "NorecordfoundText": _vm.$t('NorecordfoundText'),
      "TotalRecords": _vm.TotalRecords,
      "RenderRowActionMethod": _vm.renderActions,
      "ListDataCallBackFunction": _vm.GetItemHistory
    },
    on: {
      "PagerButtonClick": _vm.pagerMethod,
      "HeaderButtonClick": _vm.commonHeaderButtonClick
    }
  })], 1)])])])])], 1);
};
var ProductHistoryDetailvue_type_template_id_457748d6_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/ProductHistoryDetail.vue?vue&type=template&id=457748d6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/ProductHistoryDetail.vue?vue&type=script&lang=js&

/* harmony default export */ var ProductHistoryDetailvue_type_script_lang_js_ = ({
  props: {
    ItemData: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      noRecord: false,
      isLoading: false,
      ProductHistoryData: [],
      Headers: [{
        "COLUMN_NAME": "EPCTag",
        "DATA_TYPE": "image",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("EPCTag"),
        "DISPLAY_ORDER": 1
      }, {
        "COLUMN_NAME": "LogDate",
        "DATA_TYPE": "image",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("LogDate"),
        "DISPLAY_ORDER": 1
      }, {
        "COLUMN_NAME": "TagStatus",
        "DATA_TYPE": "image",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("TagStatus"),
        "DISPLAY_ORDER": 1
      }, {
        "COLUMN_NAME": "Status",
        "DATA_TYPE": "image",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("Status"),
        "DISPLAY_ORDER": 1
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
      PageSize: 10
    };
  },
  created: function () {
    this.GetItemHistory();
  },
  methods: {
    GetItemHistory: function () {
      this.isLoading = true;
      ;
      var url = `ePC_TAG=${this.ItemData}`;
      ;
      DataService["a" /* default */].GetItemHistory(url).then(response => {
        ;
        if (response.data != null) {
          if (response.data.length > 0) {
            console.log(response.data);
            debugger;
            this.ProductHistoryData = response.data;
            this.noRecord = false;
            this.isLoading = false;
          } else {
            this.noRecord = true;
            this.ProductHistoryData = [];
            this.isLoading = false;
          }
        } else {
          vm.ShowAlert(vm.$t("Unknown Error Occur"), "failure", true, vm.$t('Alert'));
          this.isLoading = false;
          vm.$parent.ClosePOPuP();
        }
      });
    },
    Cancel: function (item) {
      this.$emit('ClosePOP', item);
    },
    ClosePOPuP: function (item) {
      this.$emit('ClosePOPuP', item);
    },
    pagerMethod: function (value) {
      this.pageSize = value.pageSize;
      this.PageNumber = value.PageNumber;
      this.GetItemHistory();
    },
    commonHeaderButtonClick: function () {},
    renderActions() {}
  }
});
// CONCATENATED MODULE: ./src/components/Modal/ProductHistoryDetail.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_ProductHistoryDetailvue_type_script_lang_js_ = (ProductHistoryDetailvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Modal/ProductHistoryDetail.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Modal_ProductHistoryDetailvue_type_script_lang_js_,
  ProductHistoryDetailvue_type_template_id_457748d6_render,
  ProductHistoryDetailvue_type_template_id_457748d6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ProductHistoryDetail = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Asset/RFIDAssetListing.vue?vue&type=script&lang=js&




/* harmony default export */ var RFIDAssetListingvue_type_script_lang_js_ = ({
  components: {
    ProductHistoryModel: ProductHistoryDetail
  },
  data() {
    return {
      leftSearchFields: RFIDAssetListingSchema.leftsearchSchema,
      listheaderbuttons: RFIDAssetListingSchema.buttons,
      LegendArray: [],
      RfidData: [],
      LeadStatusList: [],
      StatusListForListing: [],
      Headers: [{
        "COLUMN_NAME": "LOCATION_NAME",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Location",
        "DISPLAY_ORDER": 1
      }, {
        "COLUMN_NAME": "sub_location",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Sub Location",
        "DISPLAY_ORDER": 2
      }, {
        "COLUMN_NAME": "Image",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Image",
        "DISPLAY_ORDER": 10,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "unique_name",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": "Product Name",
        "DISPLAY_ORDER": 3
      }, {
        "COLUMN_NAME": "ITEM_CODE",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Product Code",
        "DISPLAY_ORDER": 4
      }, {
        "COLUMN_NAME": "STATUS_NAME",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": "Status",
        "DISPLAY_ORDER": 5
      }, {
        "COLUMN_NAME": "ISSUED_TO_NAME",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": "Assign To",
        "DISPLAY_ORDER": 6
      }, {
        "COLUMN_NAME": "EPC_TAG",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": "RFID Tags",
        "DISPLAY_ORDER": 7
      }, {
        "COLUMN_NAME": "ip_address",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "IP Address",
        "DISPLAY_ORDER": 8
      }, {
        "COLUMN_NAME": "EPC_TAG",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Scanned Tags History",
        "DISPLAY_ORDER": 9,
        settings: {
          isInSlot: true
        }
      }],
      widgets: [],
      noRecord: true,
      TotalRecord: 0,
      CurrentPage: 1,
      TotalPages: 0,
      txtsearch: '',
      statusIds: '',
      LocationId: '',
      SortBy: '',
      SortExp: '',
      PageNumber: 1,
      isPaged: 1,
      PageSize: 10,
      ePC_TAG: '',
      searchCondition: "",
      IsProductHistory: false,
      ItemData: '',
      userId: null,
      companyId: null,
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
      }]
    };
  },
  async created() {
    var vm = this;
    await vm.GetPageSize();
    vm.userId = vm.GetUserInfo.ID;
    vm.companyId = vm.GetUserInfo.Name;
    setTimeout(() => {
      vm.FetchData();
    }, 1000);
    RFIDAssetListingSchema.bindleftCommonSearchdropdown(vm, "Asset", "Location");
    RFIDAssetListingSchema.bindleftCommonSearchdropdown(vm, "Asset", "Tag");
    RFIDAssetListingSchema.bindleftCommonSearchdropdown(vm, "Asset", "Status");
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
    FetchData() {
      debugger;
      var vm = this;
      vm.isLoading = true;
      var params = `pageSize=${vm.PageSize}&pageNumber=${vm.PageNumber}&sortBy=${vm.SortBy}&sortExp=${this.SortExp}&${vm.searchCondition}`;
      DataService["a" /* default */].GetRFIDListing(params).then(response => {
        if (response.data != null) {
          debugger;
          if (response.data.length > 0) {
            vm.RfidData = response.data;
            vm.TotalRecord = response.data[0].TOTAL;
            vm.TotalPage = Math.ceil(vm.TotalRecord / vm.PageSize);
            vm.CurrentPage = vm.PageNumber;
            vm.noRecord = false;
            vm.isLoading = false;
          } else {
            vm.noRecord = true;
            vm.RfidData = [];
            vm.TotalRecord = 0;
            vm.isLoading = false;
          }
        }
      });
    },
    commonHeaderButtonClick(event) {
      debugger;
      switch (event.callbackfunction) {
        case "setTourGuideSteps":
          this.setTourGuideSteps(0);
          break;
      }
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
    pagerMethod: function (value) {
      debugger;
      this.PageSize = value.PageSize;
      this.PageNumber = value.PageNumber;
      this.FetchData();
    },
    ItemHistory: function (item) {
      var vm = this;
      vm.IsProductHistory = true;
      vm.ItemData = item;
    },
    ClosePOPuP: function () {
      var vm = this;
      vm.IsProductHistory = false;
    },
    actionButtonClick() {},
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
// CONCATENATED MODULE: ./src/views/Asset/RFIDAssetListing.vue?vue&type=script&lang=js&
 /* harmony default export */ var Asset_RFIDAssetListingvue_type_script_lang_js_ = (RFIDAssetListingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/Asset/RFIDAssetListing.vue?vue&type=style&index=0&id=1a4a57a8&prod&lang=css&
var RFIDAssetListingvue_type_style_index_0_id_1a4a57a8_prod_lang_css_ = __webpack_require__("4910");

// CONCATENATED MODULE: ./src/views/Asset/RFIDAssetListing.vue






/* normalize component */

var RFIDAssetListing_component = Object(componentNormalizer["a" /* default */])(
  Asset_RFIDAssetListingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RFIDAssetListing = __webpack_exports__["default"] = (RFIDAssetListing_component.exports);

/***/ }),

/***/ "d85f":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".center-icon{display:flex;justify-content:center;align-items:center}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "e7be":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("d85f");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("159c9d98", content, true, {"sourceMap":false,"shadowMode":false});

/***/ })

}]);
//# sourceMappingURL=chunk-275c656b.js.map