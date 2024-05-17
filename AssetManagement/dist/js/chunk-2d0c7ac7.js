(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0c7ac7"],{

/***/ "522f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetRequisition/MyRequisitionsList.vue?vue&type=template&id=2b318e3a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_c('loader', {
    attrs: {
      "is-visible": _vm.isLoading
    }
  }), _c('tg-list', {
    attrs: {
      "IsShowAction": false,
      "listType": ['List'],
      "ModuleName": "Asset",
      "SubModuleCode": "Asset",
      "PageSize": _vm.PageSize,
      "IdentityColumn": "ASSET_CATALOGUE_ID",
      "HeaderText": "Check-Out List",
      "ListData": _vm.ProductData,
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
      "SortBy": _vm.SortBy,
      "NorecordfoundText": _vm.$t('NoRecordfound')
    },
    on: {
      "LeftsearchButtonClick": _vm.leftCommonSearch,
      "PagerButtonClick": _vm.pagerMethod,
      "HeaderButtonClick": _vm.commonHeaderButtonClick,
      "SortdataButtonClick": _vm.sortdata
    },
    scopedSlots: _vm._u([{
      key: "slotdata",
      fn: function ({
        data
      }) {
        return [data.column.COLUMN_NAME == 'Status' ? [data.row.StatusName == 'Active' ? _c('span', {
          staticClass: "px-2 bg-info text-center text-white d-block"
        }, [_vm._v(" Active ")]) : data.row.StatusName == 'Inactive' ? _c('span', {
          staticClass: "px-2 bg-danger text-center text-white d-block"
        }, [_vm._v(" Inactive ")]) : data.row.StatusName == 'RequisitionCompleted' ? _c('span', {
          staticClass: "px-2 bg-success text-center text-white d-block"
        }, [_vm._v(" Assigned ")]) : data.row.StatusName == 'Asset Requisition Cancelled By Assigner' || 'Asset Requisition Cancelled By User' ? _c('span', {
          staticClass: "px-2 bg-danger text-center text-white d-block"
        }, [_vm._v(" Rejected ")]) : _vm._e()] : _vm._e(), data.column.COLUMN_NAME == 'Reject' ? [data.row.StatusName == 'Asset Requisition Cancelled By Assigner' ? _c('span') : _c('span', {
          staticClass: "text-center single-action"
        }, [_c('a', {
          staticClass: "Cancel",
          attrs: {
            "href": "javascript:;",
            "title": "",
            "data-toggle-tooltip": "tooltip",
            "data-original-title": "Cancel"
          },
          on: {
            "click": function ($event) {
              return _vm.rejectReason(data.row);
            }
          }
        }, [_c('em', {
          staticClass: "fa fa-times-circle action-icon text-danger",
          attrs: {
            "title": "Cancel"
          }
        })])])] : _vm._e(), data.column.COLUMN_NAME == 'CreatedAt' ? [_c('span', {
          attrs: {
            "title": _vm.$options.filters.utcTimezoneToUserTimeZone(data.row.CreatedAt, _vm.Timezone)
          }
        }, [_vm._v(_vm._s(_vm.$options.filters.utcTimezoneToUserTimeZone(data.row.CreatedAt, _vm.Timezone)))])] : _vm._e(), data.column.COLUMN_NAME == 'FromTime' ? [_c('span', {
          attrs: {
            "title": _vm.$options.filters.formatDateTimeMMDDYY(data.row.FromTime)
          }
        }, [_vm._v(_vm._s(_vm.$options.filters.formatDateTimeMMDDYY(data.row.FromTime)))])] : _vm._e(), data.column.COLUMN_NAME == 'ToTime' ? [_c('span', {
          attrs: {
            "title": _vm.$options.filters.formatDateTimeMMDDYY(data.row.ToTime)
          }
        }, [_vm._v(_vm._s(_vm.$options.filters.formatDateTimeMMDDYY(data.row.ToTime)))])] : _vm._e(), data.column.COLUMN_NAME == 'ModifiedAt' ? [_c('span', {
          attrs: {
            ":title": _vm.$options.filters.utcTimezoneToUserTimeZone(data.row.ModifiedAt, _vm.Timezone)
          }
        }, [_vm._v(_vm._s(_vm.$options.filters.utcTimezoneToUserTimeZone(data.row.ModifiedAt, _vm.Timezone)))])] : _vm._e(), data.column.COLUMN_NAME == 'Assigned' ? [data.row.IsAssigned ? _c('span', [_vm._v("Yes")]) : data.row.StatusName == 'Asset Requisition Cancelled By Assigner' ? _c('span', [_vm._v("Unassigned ")]) : _c('span', [_vm._v("Pending")])] : _vm._e()];
      }
    }])
  }), _vm.isRejectPopup ? _c('Reject', {
    attrs: {
      "specificDetails": _vm.specificDetails
    },
    on: {
      "closeRejectPopUp": _vm.closeRejectPopUp
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/AssetRequisition/MyRequisitionsList.vue?vue&type=template&id=2b318e3a&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./src/views/AssetRequisition/MyRequisitionsListSchema.js


let buttons = [{
  title: "Add Check Out Request",
  iconClass: "fa fa-plus",
  callbackfunction: "AddCheckOut",
  additionalClass: "",
  isdisabled: false,
  isvisible: true,
  checkPrivilege: false
}];
let leftsearchSchema = [{
  fieldName: "Product Name",
  fieldType: "radio",
  fieldIcon: "fa-user",
  paramName: "catalogId",
  fieldSearchConditionName: [""],
  isSearch: false,
  value: "",
  listOptions: []
}, {
  fieldName: "Unique Name",
  fieldType: "ddl-check",
  fieldIcon: "fa-server",
  paramName: "UniqueNames",
  fieldSearchConditionName: [""],
  isSearch: false,
  value: "",
  listOptions: []
}];
let listActions = [{
  title: "Reject",
  href: "",
  icon: "fa fa-times-circle action-icon text-danger",
  additionalSpan: ""
}];
function bindleftCommonSearchdropdown(instance, modulename, filtername, id) {
  var vm = instance;
  if (filtername == "Product Name") {
    DataService["a" /* default */].GetAssetData().then(response => {
      vm.json = response.data.data;
      if (vm.json != null) {
        vm.json.forEach(item => {
          let obj = {
            name: item.NAME,
            value: item.ASSETID
          };
          vm.leftSearchFields[0].listOptions.push(obj);
        });
        return;
      }
    });
  }
  if (filtername == "Unique Name") {
    vm.leftSearchFields[1].listOptions = [];
    var url = `assetCatalogId=${id}&name=&issueTo=&locationId=&requestFrom=ALL_BY_ASSET_CATALOGUE_ID&assetType=`;
    DataService["a" /* default */].GetUniqueAssetItems(url).then(response => {
      response.data.forEach(element => {
        let obj = {
          name: element.Name,
          value: element.Value
        };
        vm.leftSearchFields[1].listOptions.push(obj);
      });
      // vm.json = response.data;
      // if (vm.json != null) {
      //   vm.json.forEach((item) => {
      //     let obj = {
      //       name: item.ASSETTYPE,
      //       value: item.ASSETID,
      //     };
      //     vm.leftSearchFields[1].listOptions.push(obj);
      //   });
      //   return;
      // }
    });
  }
}

/* harmony default export */ var MyRequisitionsListSchema = ({
  buttons,
  leftsearchSchema,
  listActions,
  bindleftCommonSearchdropdown
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/RejectReason.vue?vue&type=template&id=53c9ab13&
var RejectReasonvue_type_template_id_53c9ab13_render = function render() {
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
  }, [_vm._v(" " + _vm._s(_vm.$t('Reject')) + " ")]), _c('button', {
    staticClass: "close",
    on: {
      "click": _vm.closeRejectPopUp
    }
  }, [_c('i', {
    staticClass: "fa fa-times",
    attrs: {
      "aria-hidden": "true"
    }
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
var RejectReasonvue_type_template_id_53c9ab13_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/RejectReason.vue?vue&type=template&id=53c9ab13&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/RejectReason.vue?vue&type=script&lang=js&

/* harmony default export */ var RejectReasonvue_type_script_lang_js_ = ({
  props: {
    specificDetails: {
      type: Object
    }
  },
  data() {
    return {
      details: {},
      FormSchema: [{
        layoutType: "single",
        Data: [{
          astype: "TextAreaField",
          label: this.$t('Reject'),
          name: "Reject",
          value: "",
          placeholder: "",
          validationRules: {
            "required": true,
            max: 250
          }
        }]
      }],
      buttons: [{
        type: "submit",
        class: "btn btn-success",
        text: "<i class='fa fa-save pr-2'></i>" + this.$t('Save')
      }, {
        type: "button",
        class: "btn btn-danger text-white",
        text: "&nbsp;<i class='fa fa-close pr-2'></i>" + this.$t('Cancel'),
        onClick: this.closeRejectPopUp
      }]
    };
  },
  created: function () {
    var vm = this;
    vm.details = vm.specificDetails;
    console.log("details", vm.details);
  },
  methods: {
    closeRejectPopUp: function () {
      this.$emit('closeRejectPopUp');
    },
    onSubmit: function (values) {
      var vm = this;
      var url = `batchId=${vm.details.RequisitionBatchId}&requisitionCancelledBy=assigner&comment=${values.Reject}`;
      DataService["a" /* default */].UpdateRequisitionStatusCheckout(url).then(response => {
        if (response.data == true) {
          vm.closeRejectPopUp();
          vm.ShowAlert(this.$t(" Status Update Successfully "), "success", this.$t('Alert'));
        } else {
          vm.ShowAlert(this.$t(" Something Went Wrong "), "failure", this.$t('Alert'));
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/RejectReason.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_RejectReasonvue_type_script_lang_js_ = (RejectReasonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Modal/RejectReason.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Modal_RejectReasonvue_type_script_lang_js_,
  RejectReasonvue_type_template_id_53c9ab13_render,
  RejectReasonvue_type_template_id_53c9ab13_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RejectReason = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetRequisition/MyRequisitionsList.vue?vue&type=script&lang=js&




/* harmony default export */ var MyRequisitionsListvue_type_script_lang_js_ = ({
  components: {
    Reject: RejectReason
  },
  data() {
    return {
      isRejectPopup: false,
      isLoading: false,
      listheaderbuttons: MyRequisitionsListSchema.buttons,
      leftSearchFields: MyRequisitionsListSchema.leftsearchSchema,
      LegendArray: [],
      ProductData: [],
      widgets: [],
      Headers: [{
        "COLUMN_NAME": "AssetGroup",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": "Products",
        "DISPLAY_ORDER": 1
      }, {
        "COLUMN_NAME": "Assigned",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Assigned",
        "DISPLAY_ORDER": 2,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "UserName",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Created By",
        "DISPLAY_ORDER": 3
      }, {
        "COLUMN_NAME": "CreatedAt",
        "DATA_TYPE": "Date",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Created At",
        "DISPLAY_ORDER": 4,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "FromTime",
        "DATA_TYPE": "Date",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "From",
        "DISPLAY_ORDER": 5,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "ToTime",
        "DATA_TYPE": "Date",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "To",
        "DISPLAY_ORDER": 6,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "ModifyUserName",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Approve/Rejected By",
        "DISPLAY_ORDER": 7
      }, {
        "COLUMN_NAME": "ModifiedAt",
        "DATA_TYPE": "Date",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Approve/Rejected at",
        "DISPLAY_ORDER": 8,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "Comment",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Reason",
        "DISPLAY_ORDER": 9
      }, {
        "COLUMN_NAME": "Status",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Status",
        "DISPLAY_ORDER": 10,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "Reject",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Reject",
        "DISPLAY_ORDER": 10,
        settings: {
          isInSlot: true
        }
      }],
      specificDetails: {},
      noRecord: true,
      TotalRecords: 0,
      CurrentPage: 1,
      TotalPages: 0,
      SortBy: '',
      SortExp: '',
      PageSize: 10,
      PageNumber: 1,
      searchCondition: '',
      catalogId: null,
      uniqueNames: null,
      IsAddCheckOutRequestList: false
    };
  },
  async created() {
    var vm = this;
    vm.Timezone = vm.GetUserInfo.TimeZone;
    console.log("user", vm.Timezone);
    vm.leftSearchFields[0].onChange = vm.getClickEvent;
    await vm.GetPageSize();
    MyRequisitionsListSchema.bindleftCommonSearchdropdown(vm, 'AssetRequisition', 'Product Name');
    vm.FetchData();
    vm.LegendArray = [{
      class: 'legends_profile colorboxsquare',
      text: 'Expired Check-Out'
    }];
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
    getClickEvent: function () {
      //  this.leftSearchFields[1].listOptions = [];
      var assetCatId = this.leftSearchFields[0].value;
      MyRequisitionsListSchema.bindleftCommonSearchdropdown(this, 'AssetRequisition', 'Unique Name', assetCatId);
    },
    FetchData: function () {
      var vueObj = this;
      vueObj.isLoading = true;
      var params = `LocationId=&pageSize=${vueObj.PageSize}&pageNumber=${vueObj.PageNumber}&sortBy=${vueObj.SortBy}&sortExp=${vueObj.SortExp}&${vueObj.searchCondition}`;
      DataService["a" /* default */].GetMyRequisitions(params).then(response => {
        vueObj.isLoading = false;
        vueObj.leftSearchFields[1].listOptions = [];
        if (response.data != null) {
          if (response.data.length > 0) {
            vueObj.ProductData = response.data;
            vueObj.ProductData.forEach(row => {
              row.additionalClass = '';
              if (row.IsExpired == true) {
                row.additionalClass = "danger-bar";
              }
            });
            vueObj.TotalRecords = response.data[0].TotalRecord;
            vueObj.TotalPages = Math.ceil(vueObj.TotalRecords / vueObj.PageSize);
            vueObj.CurrentPage = vueObj.PageNumber;
            vueObj.noRecord = false;
          } else {
            vueObj.noRecord = true;
            vueObj.ProductData = [];
            vueObj.TotalRecords = 0;
            vueObj.isLoading = false;
          }
        } else {
          vueObj.noRecord = true;
          vueObj.ProductData = [];
          vueObj.TotalRecords = 0;
          vueObj.isLoading = false;
        }
      });
    },
    rejectReason: function (item) {
      var vm = this;
      vm.confirmR(vm.$t('Are you sure you want to reject the requisition?'), true, false, function (result) {
        vm.specificDetails = item;
        vm.isRejectPopup = true;
      });
    },
    closeRejectPopUp: function () {
      var vm = this;
      vm.specificDetails = {};
      vm.isRejectPopup = false;
      vm.FetchData();
    },
    commonHeaderButtonClick(event) {
      switch (event.callbackfunction) {
        case "AddCheckOut":
          this.AddCheckOutRequest();
          break;
      }
    },
    AddCheckOutRequest: function () {
      this.$router.push({
        name: "AssetAssignmentCheckOut"
      });
    },
    pagerMethod: function (value) {
      this.PageSize = value.PageSize;
      this.PageNumber = value.PageNumber;
      this.FetchData();
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
    sortdata: function (s) {
      debugger;
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
    renderActions() {},
    GetUniqueNamesWithId(CatalogId) {
      var vm = this;
      vm.Schema.leftSearchFields[0].listOptions = [];
      var url = `assetCatalogId=${CatalogId}&name=&issueTo=&locationId=&requestFrom=ALL&assetType=`;
      DataService["a" /* default */].GetUniqueAssetItems(url).then(response => {
        response.data.forEach(element => {
          let obj = {
            name: element.Name,
            value: element.Value
          };
          vm.Schema.leftSearchFields[0].listOptions.push(obj);
        });
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/AssetRequisition/MyRequisitionsList.vue?vue&type=script&lang=js&
 /* harmony default export */ var AssetRequisition_MyRequisitionsListvue_type_script_lang_js_ = (MyRequisitionsListvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/AssetRequisition/MyRequisitionsList.vue





/* normalize component */

var MyRequisitionsList_component = Object(componentNormalizer["a" /* default */])(
  AssetRequisition_MyRequisitionsListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MyRequisitionsList = __webpack_exports__["default"] = (MyRequisitionsList_component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d0c7ac7.js.map