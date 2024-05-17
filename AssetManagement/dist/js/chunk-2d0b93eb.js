(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0b93eb"],{

/***/ "31b9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Asset/AssetGroupingList.vue?vue&type=template&id=67ef1a0e&
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
      "IdentityColumn": "ParentRelatedInfoId",
      "PageSize": _vm.PageSize,
      "HeaderText": _vm.$t('AssetsGroup'),
      "ListData": _vm.AssetGroupingList,
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
      "SortExp": _vm.sortExp,
      "SortBy": _vm.sortBy,
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
        return [data.column.COLUMN_NAME == 'Status' ? [_c('td', {
          staticClass: "text-center single-action"
        }, [_c('div', {
          staticClass: "cstm-drop-btn"
        }, [_c('select', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: data.row.StatusId,
            expression: "data.row.StatusId"
          }],
          class: data.row.StatusId == 1001 ? 'ddlupdatestatus w-80 btn-success' : 'ddlupdatestatus w-80 btn-danger',
          on: {
            "change": [function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.$set(data.row, "StatusId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
            }, function ($event) {
              return _vm.DrpdownUpdataStatus(data.row.StatusId, data.row.ParentRelatedInfoId);
            }]
          }
        }, [_c('option', {
          attrs: {
            "value": "1001",
            "selected": "selected"
          }
        }, [_vm._v("Active")]), _c('option', {
          attrs: {
            "value": "1002"
          }
        }, [_vm._v("Inactive")])])])])] : _vm._e(), data.column.COLUMN_NAME == 'CreatedAt' ? [_c('span', {
          staticClass: "text-dark",
          attrs: {
            "title": data.row.Action
          }
        }, [_c('label', [_vm._v(_vm._s(_vm.$options.filters.formatDateTimeMMDDYYY(data.row.CreatedAt)))])])] : _vm._e()];
      }
    }])
  })], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/Asset/AssetGroupingList.vue?vue&type=template&id=67ef1a0e&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./src/views/Asset/AssetGroupingListSchema.js


let buttons = [{
  title: 'Add',
  iconClass: 'fa fa-plus',
  callbackfunction: 'AddGroup',
  additionalClass: '',
  isdisabled: false,
  isvisible: true,
  checkPrivilege: false
}, {
  title: 'Active',
  iconClass: 'fa fa-check',
  callbackfunction: 'UpdateActiveAddGroup',
  additionalClass: '',
  isdisabled: true,
  isvisible: true,
  checkPrivilege: false,
  isEnabledOnSelectedRow: true
}, {
  title: 'Inactive',
  iconClass: 'fa fa-close',
  callbackfunction: 'UpdateInActiveAddGroup',
  additionalClass: '',
  isdisabled: true,
  isvisible: true,
  checkPrivilege: false,
  isEnabledOnSelectedRow: true
}, {
  title: 'Delete',
  id: 'DeleteMultiple',
  iconClass: 'fa fa-trash',
  callbackfunction: 'DeleteContainer',
  additionalClass: '',
  isdisabled: true,
  isvisible: true,
  id: 'DeleteMultiple',
  checkPrivilege: false,
  isEnabledOnSelectedRow: true
}];
let leftsearchSchema = [{
  fieldName: "Products Container List",
  fieldType: "text",
  fieldIcon: "fa fa-list",
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
      var json = vm.MakeNormalArray(response.data);
      json = json.data;
      $.each(json, $.proxy(function (index, item) {
        var groupId = item.PARENT_LOCATION_ID;
        var chkGroup = $.grep(LocationData, function (element, index) {
          return element.id == groupId;
        });
        if (chkGroup.length == 0) {
          var returnedData = $.grep(json, function (element, index) {
            return element.PARENT_LOCATION_ID == groupId;
          });
          if (returnedData.length > 0 && returnedData[0].LOCATION_NAME) {
            var objGroup = {
              id: groupId,
              label: returnedData[0].LOCATION_NAME,
              icon: 'fa fa-map-marker',
              children: returnedData.map(item => {
                return {
                  id: item.COMPANY_LOCATION_ID,
                  label: item.LOCATION_NAME,
                  icon: 'fa fa-map-marker'
                };
              })
            };
            LocationData.push(objGroup);
          }
        }
      }));
      console.log(LocationData);
      vm.leftSearchFields[0].listOptions = LocationData;
    });
  }
}
/* harmony default export */ var AssetGroupingListSchema = ({
  buttons,
  leftsearchSchema,
  bindleftCommonSearchdropdown
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Asset/AssetGroupingList.vue?vue&type=script&lang=js&



/* harmony default export */ var AssetGroupingListvue_type_script_lang_js_ = ({
  data() {
    return {
      listheaderbuttons: AssetGroupingListSchema.buttons,
      leftSearchFields: AssetGroupingListSchema.leftsearchSchema,
      listActions: AssetGroupingListSchema.listActions,
      LegendArray: [],
      widgets: [],
      AssetGroupingList: [],
      pageNum: 1,
      search: "",
      PageSize: 10,
      PageNumber: 1,
      isPaged: 1,
      PageSizeOption: null,
      StatusListForListing: [],
      DetalisData: [],
      Headers: [{
        "COLUMN_NAME": "UniqueName",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Container'),
        "DISPLAY_ORDER": 1
      }, {
        "COLUMN_NAME": "ItemCode",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('ItemCode'),
        "DISPLAY_ORDER": 2
      }, {
        "COLUMN_NAME": "GroupAssets",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Items'),
        "DISPLAY_ORDER": 3
      }, {
        "COLUMN_NAME": "LocationName",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Location'),
        "DISPLAY_ORDER": 4
      }, {
        "COLUMN_NAME": "CreatedBy",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('CreatedBy'),
        "DISPLAY_ORDER": 4
      }, {
        "COLUMN_NAME": "CreatedAt",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('CreatedAt'),
        "DISPLAY_ORDER": 4,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "Status",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Status'),
        "DISPLAY_ORDER": 4,
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
      pageNum: 1,
      locationId: '',
      locationfrom: '',
      searchcondition: '',
      CreateAt: '',
      isLoading: false
    };
  },
  async created() {
    var ths = this;
    await ths.GetPageSize();
    AssetGroupingListSchema.bindleftCommonSearchdropdown(ths, "Asset", "Location");
    AssetGroupingListSchema.bindleftCommonSearchdropdown(ths, "Asset", "Locationto");
    await ths.FetchData();
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
      //  vm.isLoading = true;

      var Params = `&pageSize=${vm.PageSize}&pageNum=${vm.PageNumber}&sortBy=${vm.sortBy}&sortExp=${vm.sortExp}&${vm.searchCondition}`;
      await DataService["a" /* default */].GetAssetGrouping(Params).then(response => {
        if (response.data != null) {
          // vm.isLoading = false;
          console.log('resp', response.data);
          if (response.data.length > 0) {
            vm.AssetGroupingList = response.data;
            vm.TotalRecords = response.data[0].TotalRecord;
            vm.TotalPages = Math.ceil(vm.TotalRecords / vm.PageSize);
            vm.CurrentPage = vm.PageNumber;
            vm.noRecord = false;
            vm.listheaderbuttons[1].isdisabled = true;
            vm.listheaderbuttons[2].isdisabled = true;
            vm.listheaderbuttons[3].isdisabled = true;

            // $("[id^='chkAll']").prop("checked", false).removeAttr('checked');
            // $('.chkItems:checkbox:checked').prop("checked", false).removeAttr('checked');
          } else {
            vm.noRecord = true;
            vm.isLoading = false;
            vm.AssetGroupingList = [];
            vm.TotalRecords = 0;
          }
        }
        // setTimeout(function () {
        //     vm.ResponsiveDataTable('tablelistingdata')
        // }, 500);
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
        case "AddGroup":
          this.AddAssetGroup();
          break;
        case "UpdateActiveAddGroup":
          this.UpdateActiveAddGroup();
          break;
        case "UpdateInActiveAddGroup":
          this.UpdateInActiveAddGroup();
          break;
        case "DeleteContainer":
          this.DeleteContainer();
          break;
      }
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
    },
    DrpdownUpdataStatus(StatusID, ID) {
      var vm = this;
      var StatusId = StatusID;
      var Id = ID;
      vm.confirmR(vm.$t('Are you sure to update this record?'), true, false, function (result) {
        var url = `id=${Id}&statusId=${StatusId}`;
        DataService["a" /* default */].UpdateContainerStatus(url).then(response => {
          if (response.data.status == 'success') {
            vm.ShowAlert(vm.$t('StatusUpdated', "Success", true, vm.$t('Alert')));
            vm.FetchData();
          }
        });
      });
      vm.FetchData();
    },
    AddAssetGroup: function () {
      this.$router.push({
        name: 'AddProductContainer'
      });
    },
    UpdateActiveAddGroup: function () {
      var vm = this;
      var val = "";
      $('.chkItems:checkbox:checked').not("[id^='chkAll']").each(function () {
        if (val.length > 0) val += ',';
        val += $(this).val();
      });
      if (val.length > 0) {
        vm.confirmR(vm.$t('Are you sure, you want to mark the selected status from Inactive to Active?'), true, false, function (result) {
          var url = `id=${val}&statusId=1001`;
          DataService["a" /* default */].UpdateActiveInactiveAddGroup(url).then(response => {
            if (response.data) {
              // $('.chkItems:checkbox:checked').prop("checked", false).removeAttr('checked');
              vm.ShowAlert(vm.$t('StatusUpdated', "Success", true, vm.$t('Alert')));
              vm.FetchData();
            } else {
              vm.ShowAlert(vm.$t('DeletedError', [vm.$t('Group_Container')]), "failure", true, vm.$t('Alert'));
            }
          });
        });
      }
    },
    UpdateInActiveAddGroup: function () {
      var vm = this;
      var val = "";
      $('.chkItems:checkbox:checked').not("[id^='chkAll']").each(function () {
        if (val.length > 0) val += ',';
        val += $(this).val();
      });
      if (val.length > 0) {
        vm.confirmR(vm.$t('Are you sure, you want to mark the selected status from Inactive to Active?'), true, false, function (result) {
          var url = `id=${val}&statusId=1002`;
          DataService["a" /* default */].UpdateActiveInactiveAddGroup(url).then(response => {
            if (response.data) {
              // $('.chkItems:checkbox:checked').prop("checked", false).removeAttr('checked');
              vm.ShowAlert(vm.$t('StatusUpdated', "Success", true, vm.$t('Alert')));
              vm.FetchData();
            } else {
              vm.ShowAlert(vm.$t('DeletedError', [vm.$t('Group_Container')]), "failure", true, vm.$t('Alert'));
            }
          });
        });
      }
    },
    actionButtonClick() {},
    DeleteContainer: function () {
      var vm = this;
      var val = "";
      $('.chkItems:checkbox:checked').not("[id^='chkAll']").each(function () {
        if (val.length > 0) val += ',';
        val += $(this).val();
      });
      if (val.length > 0) {
        vm.confirmR(vm.$t("ConfirmDelete"), true, vm.$t("Delete") + "  " + vm.$t("Group_Container"), function () {
          var postJSON = {
            ids: val,
            tblname: "TALYGEN_ASSET_GROUP",
            primarycolname: "parent_asset_related_info_id"
          };
          vm.isLoading = true;
          var poststing = JSON.stringify(postJSON);
          DataService["a" /* default */].DeleteItemsGroup(poststing).then(response => {
            vm.isLoading = false;
            if (response.data) {
              vm.AssetGroupingList = [];
              vm.FetchData();
              // $("[id^='chkAll']").prop("checked", false).removeAttr('checked');
              // $('.chkItems:checkbox:checked').prop("checked", false).removeAttr('checked');
              //vm.listheaderbuttons[3].isdisabled = true;
              vm.ShowAlert(vm.$t('DeletedSuccess', [vm.$t('Group_Container')]), "Success", true, vm.$t('Alert'));
            } else {
              vm.ShowAlert(vm.$t('DeletedError', [vm.$t('Group_Container')]), "failure", true, vm.$t('Alert'));
            }
          });
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./src/views/Asset/AssetGroupingList.vue?vue&type=script&lang=js&
 /* harmony default export */ var Asset_AssetGroupingListvue_type_script_lang_js_ = (AssetGroupingListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/Asset/AssetGroupingList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Asset_AssetGroupingListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AssetGroupingList = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d0b93eb.js.map