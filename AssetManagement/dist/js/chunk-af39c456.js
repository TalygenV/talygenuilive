(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-af39c456"],{

/***/ "23af":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductType_vue_vue_type_style_index_0_id_44e0b512_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e56e");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductType_vue_vue_type_style_index_0_id_44e0b512_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductType_vue_vue_type_style_index_0_id_44e0b512_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "953c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Asset/ProductType.vue?vue&type=template&id=44e0b512&
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
      "showCheckBox": true,
      "IsShowAction": false,
      "listType": ['List'],
      "ModuleName": "Asset",
      "SubModuleCode": "Asset",
      "PageSize": _vm.PageSize,
      "IdentityColumn": "ASSET_TYPE_ID",
      "HeaderText": "PRODUCT TYPE",
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
        return [data.column.COLUMN_NAME == 'Image' ? [data.row.ATTACHMENT_PATH != null ? _c('div', {
          staticClass: "form-control p-0 border-0 text-center",
          attrs: {
            "alt": "",
            "title": ""
          }
        }, [_c('img', {
          staticStyle: {
            "max-height": "80px"
          },
          attrs: {
            "src": data.row.ATTACHMENT_PATH,
            "title": ""
          }
        })]) : _vm._e(), data.row.ATTACHMENT_PATH == null ? _c('div', {
          staticClass: "form-control p-0 border-0 text-center"
        }, [_c('img', {
          staticStyle: {
            "max-height": "60px"
          },
          attrs: {
            "src": "/Content/images/imagenotavailable.jpg",
            "alt": "No Image Available",
            "title": ""
          }
        })]) : _vm._e()] : _vm._e(), data.column.COLUMN_NAME == 'ASSET_TYPE' ? [data.row.ASSET_TYPE ? _c('span', {
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
              return _vm.AssetTypeEdit(data.row.ASSET_TYPE_ID);
            }
          }
        }, [_c('em', {
          staticClass: "text-primary",
          attrs: {
            "aria-hidden": "true"
          }
        }, [_vm._v(_vm._s(data.row.ASSET_TYPE))])])]) : _vm._e()] : _vm._e(), data.column.COLUMN_NAME == 'DESCRIPTION' ? [_c('span', {
          staticClass: "text-dark center-icon",
          attrs: {
            "title": data.column.COLUMN_NAME
          }
        }, [data.row.DESCRIPTION != '' ? _c('em', {
          staticClass: "text-dark center-icon"
        }, [_vm._v(_vm._s(data.row.DESCRIPTION))]) : _c('em', {
          staticClass: "text-dark center-icon"
        }, [_vm._v("--")])])] : _vm._e(), data.column.COLUMN_NAME == 'IsContainer' ? [_c('span', {
          staticClass: "text-dark center-icon",
          attrs: {
            "title": data.column.COLUMN_NAME
          }
        }, [data.row.IS_CONTAINER == 1 ? _c('em', {
          staticClass: "text-dark center-icon"
        }, [_vm._v("Yes")]) : _c('em', {
          staticClass: "text-dark center-icon"
        }, [_vm._v("No")])])] : _vm._e(), data.column.COLUMN_NAME == 'STATUS_NAME' ? [_c('td', {
          staticClass: "text-center single-action"
        }, [_c('span', {
          staticClass: "cstm-drop-btn"
        }, [_c('select', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: data.row.STATUS_ID,
            expression: "data.row.STATUS_ID"
          }],
          class: {
            'ddlupdatestatus w-80 btn-success': data.row.STATUS_ID == 1001,
            'ddlupdatestatus w-80 btn-danger': data.row.STATUS_ID == 1002
          },
          attrs: {
            "name": "Reader",
            "disabled": data.row.STATUS_ID === 1003 ? true : false
          },
          on: {
            "change": [function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.$set(data.row, "STATUS_ID", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
            }, function ($event) {
              return _vm.changeStatus(data.row.ASSET_TYPE_ID, data.row.STATUS_ID);
            }]
          }
        }, _vm._l(_vm.StatusListData, function (item, itemIndex) {
          return _c('option', {
            key: itemIndex,
            attrs: {
              "disabled": item.STATUS_ID === 1003 ? true : false
            },
            domProps: {
              "value": item.STATUS_ID
            }
          }, [_vm._v(_vm._s(item.STATUS))]);
        }), 0)])])] : _vm._e()];
      }
    }])
  }), _vm.Addtype ? _c('div', {
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
  }, [_vm._v(" " + _vm._s(_vm.$t('ProductType')) + " ")]), _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-original-title": "Close"
    },
    on: {
      "click": function ($event) {
        return _vm.ClosePopupProductType();
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-times"
  })])]), _c('AddProductType', {
    attrs: {
      "FromPage": _vm.FromPage,
      "AseetTypeIde": _vm.AseetTypeId
    }
  })], 1)])])]) : _vm._e()], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/Asset/ProductType.vue?vue&type=template&id=44e0b512&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./src/views/Asset/ProductTypeSchema.js

let buttons = [{
  title: 'Add',
  iconClass: 'fa fa-plus',
  callbackfunction: 'addProductType',
  additionalClass: '',
  isdisabled: false,
  isvisible: true,
  checkPrivilege: true
}, {
  title: 'Import Product Type',
  iconClass: 'fa fa-download',
  callbackfunction: 'ImportProductType',
  additionalClass: '',
  isdisabled: false,
  isvisible: true,
  checkPrivilege: true
}, {
  title: 'Active',
  id: 'Active',
  iconClass: 'fa fa-check',
  callbackfunction: 'Active',
  additionalClass: '',
  isdisabled: true,
  isvisible: true,
  checkPrivilege: true,
  isEnabledOnSelectedRow: true
}, {
  title: 'Inactive',
  id: 'Inactive',
  iconClass: 'fa fa-close',
  callbackfunction: 'Inactive',
  additionalClass: '',
  isdisabled: true,
  isvisible: true,
  checkPrivilege: true,
  isEnabledOnSelectedRow: true
}, {
  title: 'Delete',
  id: 'DeleteMultiple',
  iconClass: 'fa fa-trash',
  callbackfunction: 'DeletData',
  additionalClass: '',
  isdisabled: true,
  isvisible: true,
  checkPrivilege: true,
  isEnabledOnSelectedRow: true
}];
let leftsearchSchema = [{
  fieldName: 'Product Type Name',
  fieldType: "text",
  fieldIcon: "fab fa-product-hunt",
  paramName: "search",
  fieldSearchConditionName: [''],
  isSearch: false,
  value: "",
  listOptions: []
}];
async function bindleftCommonSearchdropdown(instance, modulename) {
  var vm = instance;
  var LocationData = [];
  var TagData = [];
}
/* harmony default export */ var ProductTypeSchema = ({
  buttons,
  leftsearchSchema,
  bindleftCommonSearchdropdown
});
// EXTERNAL MODULE: ./src/components/Modal/AddProductType.vue + 4 modules
var AddProductType = __webpack_require__("f6fa");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Asset/ProductType.vue?vue&type=script&lang=js&




/* harmony default export */ var ProductTypevue_type_script_lang_js_ = ({
  components: {
    AddProductType: AddProductType["default"]
  },
  data() {
    return {
      listheaderbuttons: ProductTypeSchema.buttons,
      leftSearchFields: ProductTypeSchema.leftsearchSchema,
      LegendArray: [{
        class: 'legends_medium colorboxsquare',
        text: `It can't be deleted, Product Type has been used.`
      }, {
        class: 'legend-pending colorboxsquare',
        text: `Sample Data`
      }],
      RfidData: [],
      LeadStatusList: [],
      StatusListForListing: [],
      Headers: [{
        "COLUMN_NAME": "Image",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Image",
        "DISPLAY_ORDER": 1,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "TYPE_CODE",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Product Type Code",
        "DISPLAY_ORDER": 2
      }, {
        "COLUMN_NAME": "ASSET_TYPE",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": "Product Type Name",
        "DISPLAY_ORDER": 3,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "DESCRIPTION",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Description",
        "DISPLAY_ORDER": 4,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "IsContainer",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Container",
        "DISPLAY_ORDER": 5,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "STATUS_NAME",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": "Status",
        "DISPLAY_ORDER": 6,
        settings: {
          isInSlot: true
        }
      }],
      widgets: [],
      noRecord: true,
      TotalRecord: 0,
      CurrentPage: 1,
      TotalPage: 0,
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
      privilegeParams: null,
      StatusListData: [],
      Addtype: false,
      AseetTypeId: 0,
      FromPage: ''
    };
  },
  mounted() {
    document.addEventListener('click', this.handleDocumentClick);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleDocumentClick);
  },
  async created() {
    var vm = this;
    await vm.GetPageSize();
    vm.privilegeParams = `controller=Asset&action=`;
    vm.GetStatusList();
    vm.userId = vm.GetUserInfo.ID;
    vm.companyId = vm.GetUserInfo.Name;
    setTimeout(() => {
      vm.FetchData();
    }, 500);
    // vm.leftSearchFields = '';
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
      var vm = this;
      vm.isLoading = true;
      var params = `pageSize=${vm.PageSize}&pageNum=${vm.PageNumber}&sortBy=${vm.SortBy}&sortExp=${this.SortExp}&${vm.searchCondition}`;
      DataService["a" /* default */].Index(params).then(response => {
        if (response.data != null) {
          if (response.data.length > 0) {
            vm.RfidData = response.data;
            vm.RfidData.forEach(row => {
              row.isCheckBoxDisabled = false;
              row.additionalClass = '';
              if (row.IS_USED == "1") {
                row.additionalClass = "medium-bar";
              }
              if (row.IS_SAMPLE_DATA == true) {
                row.additionalClass = "sample-bar warning-bar";
              }

              // else{
              //     row.additionalClass = "sample-bar";
              // }
              if (row.IS_USED == '1' || row.STATUS_ID == 1003) {
                row.isCheckBoxDisabled = true;
              }
            });
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
        } else {
          vm.isLoading = false;
        }
        setTimeout(function () {
          vm.CheckBoxBootstrap();
        }, 100);
        setTimeout(function () {
          vm.ResponsiveDataTable('tablelistingdata');
        }, 500);
        setTimeout(function () {
          vm.listheaderbuttons[2].isdisabled = true;
          vm.listheaderbuttons[3].isdisabled = true;
          vm.listheaderbuttons[4].isdisabled = true;
        }, 700);
      });
    },
    GetStatusList() {
      var vm = this;
      vm.isLoading = true;
      var url = `langCode=en&statusType=AssetManagement&hasglobal=true`;
      DataService["a" /* default */].GetStatusList(url).then(response => {
        const data = JSON.parse(response.data);
        vm.StatusListData = data.filter(item => item.STATUS_ID === 1001 || item.STATUS_ID === 1002);
        vm.isLoading = false;
      });
    },
    changeStatus(ids, statusId) {
      var vm = this;
      vm.confirmR(vm.$t("Are you sure you want to change the status?"), true, vm.$t("Update") + "  " + vm.$t("Group_Item"), function () {
        var idsString = typeof ids === 'string' ? ids : String(ids);
        var idArray = idsString.includes(',') ? idsString.split(',').map(id => id.trim()) : [idsString.trim()];
        idArray.forEach(id => {
          var url = `TableName=${'Talygen_asset_type'}&ColumnName=${'asset_type_id'}&Id=${id}&statusId=${statusId}`;
          DataService["a" /* default */].UpdateStatus(url).then(response => {
            if (response.data === true) {
              vm.ShowAlert(vm.$t('Product Type has been successfully updated.'), "success", true, vm.$t("Alert"));
              vm.listheaderbuttons[2].isdisabled = true;
              vm.listheaderbuttons[3].isdisabled = true;
              vm.listheaderbuttons[4].isdisabled = true;
              vm.RfidData = [];
              vm.FetchData();
            } else {
              vm.ShowAlert(vm.$t('An error has occurred while updating Product Type. Please retry.'), "error", true, vm.$t("Alert"));
            }
            vm.isLoading = false;
          });
        });
      }, function () {
        vm.cancelAction();
      });
    },
    cancelAction() {
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
    pagerMethod: function (value) {
      this.PageSize = value.PageSize;
      this.PageNumber = value.PageNumber;
      $("[id^='chkAll']:checkbox:checked").prop("checked", false);
      this.FetchData();
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
    },
    commonHeaderButtonClick(event) {
      switch (event.callbackfunction) {
        case "addProductType":
          this.AddProductType();
          break;
        case "ImportProductType":
          this.ImportProductType();
          break;
        case "Active":
          this.Active();
          break;
        case "Inactive":
          this.Inactive();
          break;
        case "DeletData":
          this.Delete();
          break;
      }
    },
    AddProductType: function () {
      var vm = this;
      vm.FromPage = 'EditProduct';
      vm.AseetTypeId = 0;
      vm.Addtype = true;
    },
    ClosePopupProductType: function () {
      var vm = this;
      vm.Addtype = false;
      vm.FromPage = '';
    },
    AssetTypeEdit: function (item) {
      var vm = this;
      vm.FromPage = 'EditProduct';
      vm.AseetTypeId = item;
      vm.Addtype = true;
    },
    ImportProductType: function () {
      var vm = this;
      // DataService.CheckPrivilege(vm.privilegeParams + 'ImportAssetItem').then((response)=>{
      // if (response.data) {
      vm.$router.push({
        path: "/Asset/ImportItemType"
      });
      // }else{
      //     vm.ShowAlert(vm.$t('NotAuthorizedSection'), "failure",true, "Alert");
      // }
      // });
    },

    Active: function () {
      var vm = this;
      var val = "";
      $('.chkItems:checkbox:checked').not("[id^='chkAll']").each(function () {
        if (val.length > 0) val += ',';
        val += $(this).val();
      });
      vm.changeStatus(val, 1001);
    },
    Inactive: function () {
      var vm = this;
      var val = "";
      $('.chkItems:checkbox:checked').not("[id^='chkAll']").each(function () {
        if (val.length > 0) val += ',';
        val += $(this).val();
      });
      vm.changeStatus(val, 1002);
    },
    Delete: function () {
      var vm = this;
      var val = "";
      DataService["a" /* default */].CheckPrivilege(vm.privilegeParams + 'Delete').then(response => {
        if (response.data) {
          $('.chkItems:checkbox:checked').not("[id^='chkAll']").each(function () {
            if (val.length > 0) val += ',';
            val += $(this).val();
          });
          if (val.length > 0) {
            vm.confirmR(vm.$t("ConfirmDelete"), true, vm.$t("Delete") + "  " + vm.$t("ASSET_CATALOGUE_ID"), function () {
              let url = `ids=${val}&TableName=${'Talygen_asset_type'}&ColumnName=${'asset_type_id'}`;
              DataService["a" /* default */].DeleteProductType(url).then(response => {
                if (response.data) {
                  $("[id^='chkAll']").prop("checked", false).removeAttr('checked');
                  $('.chkItems:checkbox:checked').prop("checked", false).removeAttr('checked');
                  vm.listheaderbuttons[4].isdisabled = true;
                  // $("[id^='DeleteMultiple']").removeClass('enable').addClass('disabled');
                  vm.ShowAlert(vm.$t('DeletedSuccess', [vm.$t('Product Type')]), "Success", true, vm.$t('Alert'));
                  vm.FetchData();
                } else {
                  vm.ShowAlert(vm.$t('DeletedError', [vm.$t('val')]), "failure", true, vm.$t('Alert'));
                }
              });
            });
          }
        } else {
          vm.ShowAlert(vm.$t('NotAuthorizedSection'), "failure", true, "Alert");
        }
      });
    },
    handleDocumentClick(event) {
      var vm = this;
      if (event.target.classList.contains('chkItems')) {
        var val = '';
        $('.chkItems:checkbox:checked').not("[id^='chkAll']").each(function () {
          if (val.length > 0) val += ',';
          val += $(this).val();
        });
        if (val.length > 0) {
          setTimeout(function () {
            vm.listheaderbuttons[2].isdisabled = false;
            vm.listheaderbuttons[3].isdisabled = false;
            vm.listheaderbuttons[4].isdisabled = false;
          }, 500);
        } else {
          setTimeout(function () {
            vm.listheaderbuttons[2].isdisabled = true;
            vm.listheaderbuttons[3].isdisabled = true;
            vm.listheaderbuttons[4].isdisabled = true;
          }, 500);
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./src/views/Asset/ProductType.vue?vue&type=script&lang=js&
 /* harmony default export */ var Asset_ProductTypevue_type_script_lang_js_ = (ProductTypevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/Asset/ProductType.vue?vue&type=style&index=0&id=44e0b512&prod&lang=css&
var ProductTypevue_type_style_index_0_id_44e0b512_prod_lang_css_ = __webpack_require__("23af");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/Asset/ProductType.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Asset_ProductTypevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ProductType = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "a57b":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".center-icon{display:flex;justify-content:center;align-items:center}.listing .table td.single-action:before{display:none!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "e56e":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("a57b");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("7ae8c866", content, true, {"sourceMap":false,"shadowMode":false});

/***/ })

}]);
//# sourceMappingURL=chunk-af39c456.js.map