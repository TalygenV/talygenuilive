(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d20fe7c"],{

/***/ "b62d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ItemGroupList/List.vue?vue&type=template&id=fd6b4dee&
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
      "showCheckBox": true,
      "listType": [_vm.DetailListType],
      "ModuleName": "Asset",
      "PageSize": _vm.PageSize,
      "SubModuleCode": "Timer",
      "IdentityColumn": "group_id",
      "HeaderText": _vm.$t('ProductGroupList'),
      "ListData": _vm.GroupData,
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
      "ActionButtonClick": _vm.actionButtonClick,
      "SortdataButtonClick": _vm.sortdata
    },
    scopedSlots: _vm._u([{
      key: "slotdata",
      fn: function ({
        data
      }) {
        return [data.column.COLUMN_NAME == 'STATUS_ID' ? [_c('td', {
          staticClass: "text-center single-action",
          attrs: {
            "title": data.row.STATUS_ID == 1001 ? 'Active' : 'Inactive'
          }
        }, [_c('div', {
          staticClass: "cstm-drop-btn"
        }, [_c('select', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: data.row.STATUS_ID,
            expression: "data.row.STATUS_ID"
          }],
          class: data.row.STATUS_ID == 1001 ? 'ddlupdatestatus w-80 btn-success' : 'ddlupdatestatus w-80 btn-danger',
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
              return _vm.DrpdownUpdateStatus(data.row.STATUS_ID, data.row.group_id);
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
        }, [_vm._v("Inactive")])])])])] : _vm._e(), data.column.COLUMN_NAME == 'TotalItemsCount' ? [_c('span', {
          staticClass: "text-dark",
          attrs: {
            "title": data.row.TotalItemsCount
          }
        }, [_c('i', {
          staticClass: "fa fa-briefcase",
          attrs: {
            "aria-hidden": "true"
          }
        }), _c('span', {
          staticClass: "noti-circle noti-blue"
        }, [_vm._v(_vm._s(data.row.TotalItemsCount))])])] : _vm._e(), data.column.COLUMN_NAME == 'group_name' ? [data.row.group_name ? _c('span', {
          staticClass: "text-dark"
        }, [_c('a', {
          attrs: {
            "href": "javascript:;",
            "id": data.row.group_id,
            "title": data.row.group_name
          },
          on: {
            "click": function ($event) {
              return _vm.EditGroup(data.row.group_id);
            }
          }
        }, [_c('em', {
          staticClass: "text-primary",
          attrs: {
            "aria-hidden": "true"
          }
        }, [_vm._v(_vm._s(data.row.group_name))])])]) : _vm._e()] : _vm._e()];
      }
    }])
  })], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/ItemGroupList/List.vue?vue&type=template&id=fd6b4dee&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./src/views/ItemGroupList/ListSchema.js
let buttons = [{
  title: 'Add New',
  iconClass: 'fa fa-plus',
  callbackfunction: 'AddNewGroup',
  additionalClass: '',
  isdisabled: false,
  isvisible: true,
  checkPrivilege: false
}, {
  title: 'Delete',
  iconClass: 'fa fa-trash',
  callbackfunction: 'DeleteData',
  additionalClass: '',
  isdisabled: true,
  isvisible: true,
  id: 'DeleteMultiple',
  checkPrivilege: false,
  isEnabledOnSelectedRow: true
}];
let leftsearchSchema = [{
  fieldName: 'Group Name',
  fieldType: "text",
  fieldIcon: "fa-user",
  paramName: "search",
  fieldSearchConditionName: [''],
  isSearch: false,
  value: "",
  listOptions: []
}];
/* harmony default export */ var ListSchema = ({
  buttons,
  leftsearchSchema
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ItemGroupList/List.vue?vue&type=script&lang=js&



/* harmony default export */ var Listvue_type_script_lang_js_ = ({
  data() {
    return {
      CategorytList: [],
      isLoading: false,
      LegendArray: [],
      leftSearchFields: ListSchema.leftsearchSchema,
      listActions: ListSchema.listActions,
      Headers: [{
        "COLUMN_NAME": 'group_name',
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('GroupName'),
        "DISPLAY_ORDER": 1,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": 'group_details',
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Detail'),
        "DISPLAY_ORDER": 2
      }, {
        "COLUMN_NAME": 'device_name',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('DeviceName'),
        "DISPLAY_ORDER": 3
      }, {
        "COLUMN_NAME": 'item_description',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('AssignedReader'),
        "DISPLAY_ORDER": 4
      }, {
        "COLUMN_NAME": 'TotalItemsCount',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('TotalItems'),
        "DISPLAY_ORDER": 5,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": 'STATUS_ID',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Status'),
        "DISPLAY_ORDER": 6,
        settings: {
          isInSlot: true
        }
      }],
      noRecord: true,
      statusIds: '',
      LocationId: '',
      SortBy: '',
      SortExp: '',
      IsDefault: '',
      GroupData: [],
      TotalRecords: 0,
      PageNumber: 1,
      PageSize: 10,
      CurrentPage: 1,
      TotalPages: 0,
      StatusData: [],
      listheaderbuttons: ListSchema.buttons,
      DetailListType: 'List'
    };
  },
  async created() {
    await this.GetPageSize();
    this.FetchData();
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
    async FetchData() {
      var vueObj = this;
      var url = `${this.searchCondition}&statusIds=${this.statusIds}&pageSize=${this.PageSize}&pageNum=${this.PageNumber}&sortBy=${this.SortBy}&sortExp=${this.SortExp}&IsDefault=${this.IsDefault}`;
      DataService["a" /* default */].GetItemGroupList(url).then(response => {
        if (response.data != null) {
          if (response.data.data.length > 0) {
            vueObj.GroupData = response.data.data;
            vueObj.TotalRecords = response.data.data[0].TOTALRECORDS;
            vueObj.TotalPages = Math.ceil(vueObj.TotalRecords / vueObj.PageSize);
            vueObj.CurrentPage = vueObj.PageNumber;
            vueObj.noRecord = false;
            $("[id^='chkAll']").prop("checked", false).removeAttr('checked');
            $('.chkItems:checkbox:checked').prop("checked", false).removeAttr('checked');
            vueObj.listheaderbuttons[1].isdisabled = true;
          } else {
            vueObj.GroupData = [];
            vueObj.noRecord = true;
            vueObj.TotalRecords = 0;
          }
        } else {
          vueObj.noRecord = true;
          vueObj.GroupData = [];
          vueObj.TotalRecords = 0;
        }
        setTimeout(function () {
          vueObj.CheckBoxBootstrap();
        }, 100);
      });
      vueObj.isLoading = false;
    },
    DrpdownUpdateStatus(statusId, groupid) {
      var vm = this;
      vm.isLoading = true;
      const Object = {
        ID: groupid,
        StatusId: statusId,
        IsFor: 'TALYGEN_IOT_ITEMS_GROUP'
      };
      var PostString = JSON.stringify(Object);
      vm.confirmR(vm.$t('Are you sure to update this record?'), true, false, function (result) {
        DataService["a" /* default */].CommonUpdateStatus(PostString).then(response => {
          var status = '';
          // if (statusId == '1001') {
          //     status = 'Active';
          //     vm.isLoading = false;
          // } else {
          //     vm.isLoading = false;
          //     status = 'Inactive';
          // }
          vm.ShowAlert(vm.$t('UpdateStatus'), "success", 'Alert');
          vm.FetchData();
          vm.isLoading = false;
        });
      });
      vm.FetchData();
      vm.isLoading = false;
    },
    Delete() {
      var vm = this;
      var val = "";
      $('.chkItems:checkbox:checked').not("[id^='chkAll']").each(function () {
        if (val.length > 0) val += ',';
        val += $(this).val();
      });
      if (val.length > 0) {
        vm.confirmR(vm.$t("ConfirmDelete"), true, vm.$t("Delete") + "  " + vm.$t("Group_Item"), function () {
          var postJSON = {
            ids: val,
            tblname: "Talygen_IoT_Items_Group",
            primarycolname: "group_id"
          };
          vm.isLoading = true;
          var poststing = JSON.stringify(postJSON);
          DataService["a" /* default */].DeleteGroupList(poststing).then(response => {
            if (response.data) {
              $("[id^='chkAll']").prop("checked", false).removeAttr('checked');
              $('.chkItems:checkbox:checked').prop("checked", false).removeAttr('checked');
              vm.listheaderbuttons[1].isdisabled = true;
              vm.ShowAlert(vm.$t('DeletedSuccess', [vm.$t('Group_Item')]), "Success", true, vm.$t('Alert'));
              vm.FetchData();
            } else {
              vm.ShowAlert(vm.$t('DeletedError', [vm.$t('Group_Item')]), "failure", true, vm.$t('Alert'));
            }
            vm.isLoading = false;
          });
        });
      }
    },
    actionButtonClick(callbackfunction, item) {},
    renderActions(row) {},
    pagerMethod: function (value) {
      this.PageSize = value.PageSize;
      this.PageNumber = value.PageNumber;
      this.FetchData();
    },
    commonHeaderButtonClick(event) {
      switch (event.callbackfunction) {
        case "DeleteData":
          this.Delete();
          break;
        case "AddNewGroup":
          this.AddNewGroup();
          break;
      }
    },
    AddNewGroup: function () {
      this.$router.push({
        name: 'ManageGroup',
        params: {
          id: 0
        }
      });
    },
    EditGroup: function (Groupid) {
      this.$router.push({
        name: 'ManageGroup',
        params: {
          id: Groupid
        }
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
    }
  }
});
// CONCATENATED MODULE: ./src/views/ItemGroupList/List.vue?vue&type=script&lang=js&
 /* harmony default export */ var ItemGroupList_Listvue_type_script_lang_js_ = (Listvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/ItemGroupList/List.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ItemGroupList_Listvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var List = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d20fe7c.js.map