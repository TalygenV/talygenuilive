(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-589cf00a"],{

/***/ "098b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetCatalog/ScheduleUpdate.vue?vue&type=template&id=252106b9&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "main-content"
  }, [_c('loader', {
    attrs: {
      "is-visible": _vm.isLoading
    }
  }), _c('div', {
    staticClass: "padding-t_10",
    attrs: {
      "id": "reportstabsdata"
    }
  }, [_c('div', {
    staticClass: "left-menu-tab",
    attrs: {
      "id": "sidebarScheduleUpdate"
    }
  }, [_c('div', {
    staticClass: "col-md-12 p-0"
  }, [_c('div', {
    staticClass: "theme-primary partition"
  }, [_c('span', {
    staticClass: "p-name text-white"
  }, [_vm._v(_vm._s(_vm.navheading))])])]), _c('ul', {
    staticClass: "nav nav-pills flex-column left-tab mt-2 responivecustomtab nav-tabs"
  }, _vm._l(_vm.tabs, function (tab) {
    return _c('li', {
      key: tab.id,
      class: {
        'nav-item': true,
        'active': _vm.activeTab === tab.id
      },
      on: {
        "click": function ($event) {
          _vm.activeTab = tab.id, _vm.changeTab(tab.id);
        }
      }
    }, [_c('span', {
      class: {
        'nav-link left-menu': true,
        'active': _vm.activeTab === tab.id
      }
    }, [_vm._v(_vm._s(tab.title))])]);
  }), 0)]), _c('div', {
    staticClass: "right-content"
  }, [_c('div', {
    staticClass: "theme-primary partition p-actions-expand",
    attrs: {
      "id": "ReturnRequestHeading"
    }
  }, [_c('span', {
    staticClass: "p-name text-white"
  }, [_vm._v(_vm._s(_vm.Headerstext))]), _c('span', {
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
  }), _vm._v(" "), _c('br'), _c('span', [_vm._v("Page Tour")])])])]), _vm._l(_vm.tabs, function (tab) {
    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.activeTab === tab.id,
        expression: "activeTab === tab.id"
      }],
      key: tab.id,
      staticClass: "col-md-12 p-0"
    }, [_c('div', {
      staticClass: "col-lg-12 border float-left py-3"
    }, [_c('div', {}, [_vm.DataLoaded ? _c('dynamic-form', {
      attrs: {
        "lang": "en",
        "buttons": _vm.button,
        "schema": _vm.FormSchema
      }
    }) : _vm._e()], 1), _vm._m(1, true)]), _c('div', {
      staticClass: "tab-content mb-2"
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
        "PageSize": _vm.PageSize,
        "HeaderText": "Asset Management",
        "widgets": _vm.widgets,
        "ListData": _vm.CalibrationData,
        "HeaderData": _vm.Header,
        "callbackfunction": _vm.FetchData,
        "LegendArray": _vm.LegendArray,
        "SearchFields": _vm.leftSearchFields,
        "SortExp": _vm.SortExp,
        "SortBy": _vm.SortBy,
        "NorecordfoundText": _vm.$t('NorecordfoundText'),
        "TotalRecords": _vm.TotalRecord,
        "RenderRowActionMethod": _vm.renderActions,
        "ListDataCallBackFunction": _vm.FetchData
      },
      on: {
        "PagerButtonClick": _vm.pagerMethod,
        "HeaderButtonClick": _vm.commonHeaderButtonClick,
        "SortdataButtonClick": _vm.sortdata
      },
      scopedSlots: _vm._u([{
        key: "slotdata",
        fn: function ({
          data
        }) {
          return [data.column.COLUMN_NAME == 'Edit' ? [_c('em', {
            staticClass: "fa fa-pencil text-success action-icon viewcomment",
            attrs: {
              "id": "EditSchduleUpdate",
              "title": data.column.COLUMN_NAME
            },
            on: {
              "click": function ($event) {
                return _vm.Edit(data.row);
              }
            }
          })] : _vm._e(), data.column.COLUMN_NAME == 'CALIBRATION_DATE' ? [_c('span', [_vm._v(_vm._s(_vm.$options.filters.formatDate(data.row.CALIBRATION_DATE)))])] : _vm._e()];
        }
      }], null, true)
    })], 1)])]);
  })], 2), _c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 text-right px-0 float-left"
  }, [_c('em', {
    staticClass: "btn btn-success text-white mr-2",
    attrs: {
      "disabled": _vm.activeTab === 1,
      "value": "Previous",
      "title": "Previous",
      "name": "Previous"
    },
    on: {
      "click": _vm.previousTab
    }
  }, [_c('i', {
    staticClass: "fa fa-angle-double-left pr-2"
  }), _c('span', [_vm._v("Previous")])]), _c('em', {
    staticClass: "btn btn-primary text-white",
    attrs: {
      "disabled": _vm.activeTab === _vm.tabs.length,
      "value": "Next",
      "title": "Next",
      "name": "btnNext"
    },
    on: {
      "click": _vm.nextTab
    }
  }, [_c('span', [_vm._v("Next")]), _c('i', {
    staticClass: "fa fa-angle-double-right pl-2"
  })])]), _vm.isEditModel ? _c('EditModel', {
    attrs: {
      "HistoryItems": _vm.EditItems,
      "TabName": _vm.tabName
    }
  }) : _vm._e()], 1)], 1);
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
  return _c('div', {
    staticClass: "col-12 mb-2 px-0"
  }, [_c('div', {
    staticClass: "mr-2 d-inline-block"
  }, [_c('span', {
    staticClass: "colorboxsquare legends_profile"
  }), _vm._v("ExpiredCheckout ")])]);
}];

// CONCATENATED MODULE: ./src/views/AssetCatalog/ScheduleUpdate.vue?vue&type=template&id=252106b9&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// EXTERNAL MODULE: ./node_modules/tg-controls_cli/dist/myLib.common.js
var myLib_common = __webpack_require__("240d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/AuditHistory.vue?vue&type=template&id=2f9772c4&
var AuditHistoryvue_type_template_id_2f9772c4_render = function render() {
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
  }, [_vm.TabName != 'ImageCapturing' ? _c('h5', {
    staticClass: "modal-title"
  }, [_vm._v(" " + _vm._s(_vm.TabName) + " : " + _vm._s(_vm.HistoryItems.UNIQUE_NAME) + " ")]) : _c('h5', {
    staticClass: "modal-title"
  }, [_vm._v(" " + _vm._s('Image Capturing') + " : " + _vm._s(_vm.HistoryItems.UNIQUE_NAME) + " ")]), _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-original-title": "Close"
    },
    on: {
      "click": function ($event) {
        return _vm.ClosePopup();
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-times"
  })])]), _c('div', {
    staticClass: "border p-3"
  }, [_c('div', {
    staticClass: "heading-border"
  }, [_c('h5', {
    staticClass: "h5"
  }, [_c('span', [_vm._v("Communication")]), _c('small', {
    staticClass: "float-right icon_add add cursorpointer",
    attrs: {
      "id": "ancAddEmail",
      "title": "AddCommunicationService",
      "checkprivilege": "yes"
    }
  }, [_c('i', {
    staticClass: "fa fa-plus pr-2"
  }), _vm._v(" " + _vm._s(_vm.$t("AddNew")) + " ")])])]), _c('div', {
    staticClass: "mt-4"
  }, [_c('dynamic-form', {
    ref: "Audithistory",
    attrs: {
      "lang": "en",
      "buttons": _vm.buttons,
      "schema": _vm.FormSchema
    },
    on: {
      "OnSubmit": _vm.onSubmit
    }
  })], 1), _c('tg-list', {
    attrs: {
      "showCheckBox": false,
      "IsShowAction": false,
      "listType": ['List'],
      "ModuleName": "Asset",
      "SubModuleCode": "Asset",
      "IdentityColumn": "RelatedinfoID",
      "HeaderText": _vm.$t('AssetManagement'),
      "widgets": _vm.widgets,
      "ListData": _vm.viewHistroyData,
      "HeaderData": _vm.Header,
      "callbackfunction": _vm.FetchData,
      "LegendArray": _vm.LegendArray,
      "SearchFields": _vm.leftSearchFields,
      "SortExp": _vm.SortExp,
      "SortBy": _vm.SortBy,
      "NorecordfoundText": _vm.$t('NorecordfoundText'),
      "TotalRecords": _vm.TotalRecord,
      "RenderRowActionMethod": _vm.renderActions,
      "ListDataCallBackFunction": _vm.FetchData
    },
    on: {
      "PagerButtonClick": _vm.pagerMethod,
      "HeaderButtonClick": _vm.commonHeaderButtonClick,
      "SortdataButtonClick": _vm.sortdata
    },
    scopedSlots: _vm._u([{
      key: "slotdata",
      fn: function ({
        data
      }) {
        return [data.column.COLUMN_NAME == 'audit_date' ? [_c('span', {
          staticClass: "text-dark text-center",
          attrs: {
            "title": data.column.COLUMN_NAME
          }
        }, [_vm._v(" " + _vm._s(_vm.$options.filters.formatDate(data.row.audit_date)) + " ")])] : _vm._e(), data.column.COLUMN_NAME == 'StatusId' ? [data.row.StatusId == 1 ? _c('em', {
          staticClass: "active-disabled"
        }, [_c('span', {
          staticClass: "btn d-inline-block w-80 text-center text-truncate"
        }, [_vm._v(_vm._s(_vm.$t('Pass')))])]) : _vm._e(), data.row.StatusId == 0 ? _c('em', {
          staticClass: "active-disabled"
        }, [_c('span', {
          staticClass: "btn d-inline-block w-80 text-center text-truncate"
        }, [_vm._v(_vm._s(_vm.$t('Fail')))])]) : _vm._e()] : _vm._e()];
      }
    }])
  })], 1)])])])]);
};
var AuditHistoryvue_type_template_id_2f9772c4_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/AuditHistory.vue?vue&type=template&id=2f9772c4&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/AuditHistory.vue?vue&type=script&lang=js&

/* harmony default export */ var AuditHistoryvue_type_script_lang_js_ = ({
  props: {
    HistoryItems: {
      type: Array,
      required: true
    },
    TabName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      widgets: [],
      viewHistroyData: [],
      listheaderbuttons: [],
      LegendArray: [],
      SortBy: '',
      SortExp: '',
      TotalRecord: 0,
      PageNumber: 1,
      PageSize: 10,
      Header: [{
        "COLUMN_NAME": "Audit_Name",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("AuditorName"),
        "DISPLAY_ORDER": 1
      }, {
        "COLUMN_NAME": "audit_date",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("AuditDate"),
        "DISPLAY_ORDER": 2,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "comment",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("Comment"),
        "DISPLAY_ORDER": 3
      }, {
        "COLUMN_NAME": "StatusId",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Status",
        "DISPLAY_ORDER": 4,
        settings: {
          isInSlot: true
        }
      }],
      FormSchema: [{
        layoutType: "double",
        Data: [{
          astype: "DateField",
          label: "Image Capturing  Date (M/D/YYYY)",
          name: "AuditDate",
          value: '',
          placeholder: "10/12/2022 12:AM",
          validationRules: {
            "required": true
          },
          config: {
            format: "MM/DD/YYYY",
            maxDate: new Date()
          }
        }, {
          astype: "DateField",
          label: "Next Image Capturing Date (M/D/YYYY)",
          name: "NextAuditDate",
          value: '',
          placeholder: "10/12/2022 12:AM",
          validationRules: {
            "required": true
          },
          config: {
            format: "MM/DD/YYYY",
            minDate: new Date()
          }
        }]
      }, {
        layoutType: "single",
        Data: [{
          astype: "RadioField",
          label: "Status",
          name: "Status",
          value: '1',
          placeholder: "",
          validationRules: {
            "required": false
          },
          config: {
            options: [{
              value: "1",
              name: "Pass"
            }, {
              value: "0",
              name: "Fail"
            }],
            onChange: this.OnChangeStatus
          }
        }, {
          astype: "TextAreaField",
          label: this.$t('Comment'),
          name: "Comment",
          value: "",
          validationRules: {
            "required": true,
            max: 1000
          },
          placeholder: ""
        }]
      }],
      buttons: [{
        type: "submit",
        class: "btn btn-success",
        text: "<i class='fa fa-save pr-2'></i>Save"
      }, {
        type: "button",
        class: "btn btn-danger",
        text: "<i class='fa fa-close pr-2'></i>Cancel",
        onClick: this.ClosePopup
      }]
    };
  },
  created: function () {
    //debugger;
    var vm = this;
    vm.FetchData();
    vm.$parent.FetchData();
  },
  methods: {
    OnChangeStatus(event, field) {
      field.value = event.target.getAttribute('data-value');
    },
    onSubmit(formfields, val) {
      var vm = this;
      let myObj = {
        AuditDate: formfields.AuditDate,
        NextAuditDate: formfields.NextAuditDate,
        Status: formfields.Status,
        Comment: formfields.Comment,
        Historytype: vm.TabName,
        RelatedInfoID: vm.HistoryItems.RELATED_INFO_ID
      };
      DataService["a" /* default */].UpdateAuditHistory(myObj).then(response => {
        if (response.data != null) {
          //debugger;
          if (response.data.length > 0) {
            vm.FormSchema[0].Data[0].value = '';
            vm.FormSchema[0].Data[1].value = '';
            vm.FormSchema[1].Data[1].value = '';
            vm.$refs.Audithistory.validateForm.reset();
            if (this.TabName == 'ImageCapturing') {
              vm.TabName = 'Image Capturing';
            }
            vm.ShowAlert(vm.$t(vm.TabName + ' Date successfully added.'), "success", vm.$t('Alert'));
            if (this.TabName == 'Image Capturing') {
              vm.TabName = 'ImageCapturing';
            }
            vm.FetchData();
            vm.$parent.FetchData();
          } else {
            vm.ShowAlert(vm.$t("Unknown Error Occur"), "failure", true, vm.$t('Alert'));
            vm.$parent.CloseAuditpopup();
          }
        }
        setTimeout(function () {
          vm.CheckBoxBootstrap();
        }, 100);
      });
    },
    FetchData() {
      var vm = this;
      // var params=`RelatedInfoId=${vm.HistoryItems.RELATED_INFO_ID}&HistoryType=${vm.TabName}`;
      var params = `RelatedInfoId=${vm.HistoryItems.RELATED_INFO_ID}&HistoryType=${vm.TabName}`;
      DataService["a" /* default */].GetAuditHistory(params).then(response => {
        if (response.data != null) {
          if (response.data.data.length > 0) {
            console.log(response.data.data);
            vm.viewHistroyData = response.data.data;
            vm.TotalRecord = response.data.data[0].TOTAL;
            vm.TotalPage = Math.ceil(vm.TotalRecord / vm.PageSize);
            vm.CurrentPage = vm.PageNumber;
            vm.noRecord = false;
            vm.isLoading = false;
          } else {
            vm.noRecord = true;
            vm.viewHistroyData = [];
            vm.TotalRecord = 0;
            vm.isLoading = false;
          }
        }
      });
    },
    ClosePopup() {
      var vm = this;
      vm.TabName = '';
      vm.HistoryItems = [];
      this.$parent.ClosePopup();
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
    pagerMethod: function (value) {
      this.PageSize = value.PageSize;
      this.PageNum = value.PageNumber;
      this.FetchData();
    },
    commonHeaderButtonClick: function () {},
    renderActions() {},
    renderRowActionMethod() {}
  }
});
// CONCATENATED MODULE: ./src/components/Modal/AuditHistory.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_AuditHistoryvue_type_script_lang_js_ = (AuditHistoryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Modal/AuditHistory.vue?vue&type=style&index=0&id=2f9772c4&prod&lang=css&
var AuditHistoryvue_type_style_index_0_id_2f9772c4_prod_lang_css_ = __webpack_require__("ba16");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Modal/AuditHistory.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Modal_AuditHistoryvue_type_script_lang_js_,
  AuditHistoryvue_type_template_id_2f9772c4_render,
  AuditHistoryvue_type_template_id_2f9772c4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AuditHistory = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetCatalog/ScheduleUpdate.vue?vue&type=script&lang=js&




/* harmony default export */ var ScheduleUpdatevue_type_script_lang_js_ = ({
  components: {
    'tree-view': myLib_common["TreeSelectField"],
    EditModel: AuditHistory
  },
  data() {
    return {
      listheaderbuttons: [],
      LegendArray: [],
      CalibrationData: [],
      EditItems: [],
      Header: [{
        "COLUMN_NAME": "LOCATION_NAME",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("LocationName"),
        "DISPLAY_ORDER": 1
      }, {
        "COLUMN_NAME": "ITEM_CODE",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("ProductCode"),
        "DISPLAY_ORDER": 2
      }, {
        "COLUMN_NAME": "NAME",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("ProductName"),
        "DISPLAY_ORDER": 3
      }, {
        "COLUMN_NAME": "UNIQUE_NAME",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("UniqueName"),
        "DISPLAY_ORDER": 4
      }, {
        "COLUMN_NAME": "FREQUENCY",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("Frequency"),
        "DISPLAY_ORDER": 5
      }, {
        "COLUMN_NAME": "CALIBRATION_DATE",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("DueDate"),
        "DISPLAY_ORDER": 6
      }, {
        "COLUMN_NAME": "Edit",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("Edit"),
        "DISPLAY_ORDER": 7,
        settings: {
          isInSlot: true
        }
      }],
      widgets: [],
      noRecord: true,
      TotalRecord: 0,
      CurrentPage: 1,
      TotalPage: 0,
      itemName: '',
      tabName: 'Calibration',
      itemUniqueName: '',
      locationId: '',
      dueDate: '',
      frequency: '',
      SortBy: '',
      SortExp: '',
      PageNumber: 1,
      PageSize: 10,
      activeTab: 1,
      tabs: [{
        id: 1,
        title: 'Calibration'
      }, {
        id: 2,
        title: 'Audit'
      }, {
        id: 3,
        title: 'Image Capturing'
      }],
      navheading: 'Maintenance Schedule',
      isLoading: false,
      isEditModel: false,
      DataLoaded: 0,
      Headerstext: 'Calibration',
      FormSchema: [{
        layoutType: "four",
        Data: [{
          astype: "TreeSelectField",
          label: this.$t('Location'),
          name: "Location",
          value: null,
          placeholder: "Select",
          config: {
            options: []
          }
        }, {
          astype: "SelectField",
          label: this.$t('Frequency'),
          name: "Frequency",
          value: "",
          placeholder: "",
          validationRules: {
            "required": false
          },
          config: {
            options: [{
              name: "Annually",
              value: "annual"
            }, {
              name: "Half yearly",
              value: "halfyear"
            }, {
              name: "Quarterly",
              value: "quarterly"
            }, {
              name: "Monthly",
              value: "month"
            }, {
              name: "Bi-Weekly",
              value: "biweek"
            }, {
              name: "Weekly",
              value: "week"
            }, {
              name: "Daily",
              value: "daily"
            }]
          }
        }, {
          astype: "TextField",
          label: this.$t('Product'),
          name: "Product",
          value: "",
          placeholder: "",
          validationRules: {
            "required": false,
            max: 250
          },
          placeholder: ""
        }, {
          astype: "TextField",
          label: this.$t('UniqueName'),
          name: "UniqueName",
          value: "",
          placeholder: "",
          validationRules: {
            "required": false,
            max: 250
          },
          placeholder: ""
        }, {
          astype: "DateField",
          label: this.$t('DueDate'),
          name: "DueDate",
          value: '',
          placeholder: "10/12/2022 12:AM",
          config: {
            format: "M/D/YYYY"
          }
        }]
      }],
      button: [{
        type: "submit",
        class: "btn btn-success",
        text: "<i class='fa fa-search pr-2'></i>" + this.$t('Search'),
        onClick: this.Search
      }, {
        type: "button",
        class: "btn btn-danger",
        text: "<i class='fa fa-refresh pr-2'></i>" + this.$t('ClearAll'),
        onClick: this.Clear
      }],
      PageNum: 1
    };
  },
  created: async function () {
    var vm = this;
    await vm.GetPageSize();
    await vm.FetchData();
    await vm.GetLocationByuserId();
    vm.DataLoaded = 1;
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
    async GetLocationByuserId() {
      var vm = this;
      var params = `reqForm=`;
      await DataService["a" /* default */].GetLocationByCompanyId(params).then(function (response) {
        vm.FindalLocationArray = [];
        vm.LocationDataTree = JSON.parse(response.data).data;
        vm.LocationDataTree.forEach(value => {
          var CheckIfExist = vm.FindalLocationArray.filter(function (el) {
            return el.COMPANY_LOCATION_ID == value.COMPANY_LOCATION_ID;
          });
          if (CheckIfExist.length == 0) {
            if (value.PARENT_LOCATION_ID == null) {
              let locationId = value.COMPANY_LOCATION_ID;
              let rslt = vm.getChildLocation(locationId, value, JSON.parse(response.data).data);
              vm.FindalLocationArray.push(rslt);
            }
          }
        });
        vm.FormSchema[0].Data[0].config.options = vm.FindalLocationArray;
      });
    },
    getChildLocation: function (locationId, currentItem, data) {
      let ths = this;
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
            let rslt = ths.getChildLocation(ChildfolderId, value, data);
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
    },
    changeTab(tab) {
      var vm = this;
      if (tab == 1) {
        vm.SortBy = '';
        vm.SortExp = '';
        vm.Headerstext = 'Calibration';
        vm.tabName = 'Calibration';
        vm.FetchData();
      } else if (tab == 2) {
        vm.SortBy = '';
        vm.SortExp = '';
        vm.Headerstext = 'Audit';
        vm.tabName = 'Audit';
        vm.FetchData();
      } else {
        vm.SortBy = '';
        vm.SortExp = '';
        vm.Headerstext = 'Image Capturing';
        vm.tabName = 'ImageCapturing';
        vm.FetchData();
      }
    },
    previousTab() {
      if (this.activeTab > 1) {
        this.activeTab--;
        if (this.activeTab == 1) {
          this.tabName = 'Calibration';
          this.FetchData();
        } else if (this.activeTab == 2) {
          this.tabName = 'Audit';
          this.FetchData();
        } else {
          this.tabName = 'ImageCapturing';
          this.FetchData();
        }
      }
    },
    nextTab() {
      if (this.activeTab <= this.tabs.length - 1) {
        this.activeTab++;
        if (this.activeTab == 1) {
          this.tabName = 'Calibration';
          this.FetchData();
        } else if (this.activeTab == 2) {
          this.tabName = 'Audit';
          this.FetchData();
        } else {
          this.tabName = 'ImageCapturing';
          this.FetchData();
        }
      }
    },
    FetchData() {
      var vm = this;
      if (typeof vm.locationId == 'undefined') {
        vm.locationId = '';
      }
      vm.isLoading = true;
      var params = `tabName=${vm.tabName}&itemUniqueName=${vm.itemUniqueName}&locationid=${vm.locationId}&frequency=${vm.frequency}&dueDate=${vm.dueDate}&sortBy=${vm.SortBy}&sortExp=${vm.SortExp}&pageSize=${vm.PageSize}&pageNum=${vm.PageNum}`;
      DataService["a" /* default */].GetListScheduleUpdate(params).then(response => {
        if (response.data != null) {
          if (JSON.parse(response.data).length > 0) {
            vm.CalibrationData = JSON.parse(response.data);
            vm.TotalRecord = vm.CalibrationData[0].TOTALRECORDS;
            vm.TotalPage = Math.ceil(vm.TotalRecord / vm.PageSize);
            vm.CurrentPage = vm.PageNumber;
            vm.noRecord = false;
            vm.isLoading = false;
          } else {
            vm.noRecord = true;
            vm.CalibrationData = [];
            vm.TotalRecord = 0;
            vm.isLoading = false;
          }
        }
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
    Search: function () {
      var vm = this;
      vm.locationId = vm.FormSchema[0].Data[0].value;
      vm.frequency = vm.FormSchema[0].Data[1].value;
      vm.itemName = vm.FormSchema[0].Data[2].value;
      vm.itemUniqueName = vm.FormSchema[0].Data[3].value;
      vm.dueDate = vm.FormSchema[0].Data[4].value;
      vm.FetchData();
    },
    Clear: function () {
      var vm = this;
      vm.FormSchema[0].Data[0].value = null;
      vm.FormSchema[0].Data[1].value = "";
      vm.FormSchema[0].Data[2].value = "";
      vm.FormSchema[0].Data[3].value = "";
      vm.FormSchema[0].Data[4].value = "";
      vm.locationId = '';
      vm.changeTab(this.activeTab);
    },
    pagerMethod: function (value) {
      this.PageSize = value.PageSize;
      this.PageNum = value.PageNumber;
      this.FetchData();
    },
    Edit: function (items) {
      var vm = this;
      vm.EditItems = items;
      vm.isEditModel = true;
    },
    ClosePopup() {
      var vm = this;
      vm.isEditModel = false;
    },
    commonHeaderButtonClick: function () {},
    renderActions() {},
    renderRowActionMethod() {}
  }
});
// CONCATENATED MODULE: ./src/views/AssetCatalog/ScheduleUpdate.vue?vue&type=script&lang=js&
 /* harmony default export */ var AssetCatalog_ScheduleUpdatevue_type_script_lang_js_ = (ScheduleUpdatevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/AssetCatalog/ScheduleUpdate.vue?vue&type=style&index=0&id=252106b9&prod&lang=css&
var ScheduleUpdatevue_type_style_index_0_id_252106b9_prod_lang_css_ = __webpack_require__("796c");

// CONCATENATED MODULE: ./src/views/AssetCatalog/ScheduleUpdate.vue






/* normalize component */

var ScheduleUpdate_component = Object(componentNormalizer["a" /* default */])(
  AssetCatalog_ScheduleUpdatevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ScheduleUpdate = __webpack_exports__["default"] = (ScheduleUpdate_component.exports);

/***/ }),

/***/ "77f2":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".my-popups .modal-content .expand-list{z-index:-86!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "796c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleUpdate_vue_vue_type_style_index_0_id_252106b9_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a6e8");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleUpdate_vue_vue_type_style_index_0_id_252106b9_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleUpdate_vue_vue_type_style_index_0_id_252106b9_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "a6e8":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("eb2f");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("2b1f3cf4", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "ab16":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("77f2");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("4bfb1cc6", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "ba16":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditHistory_vue_vue_type_style_index_0_id_2f9772c4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ab16");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditHistory_vue_vue_type_style_index_0_id_2f9772c4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditHistory_vue_vue_type_style_index_0_id_2f9772c4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "eb2f":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "tr.high-profile-bar td:first-child:after{background:#de0303}.center-icon{display:flex;justify-content:center;align-items:center}.vc-popover-content-wrapper{z-index:9999!important}", ""]);
// Exports
module.exports = exports;


/***/ })

}]);
//# sourceMappingURL=chunk-589cf00a.js.map