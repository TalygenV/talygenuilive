(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-4e6c1350"],{

/***/ "666c":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vue-treeselect--searchable .vue-treeselect__input-container[data-v-1a29c525]{padding:0!important}.vue-treeselect__placeholder[data-v-1a29c525]{color:#303030!important}.vue-treeselect__control-arrow[data-v-1a29c525]{color:#000}.vue-treeselect__placeholder[data-v-1a29c525]{line-height:24px}#dynmicForm .vue-treeselect__control[data-v-1a29c525]{border:none;height:36px;padding:0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "7964":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddAssetGrouping_vue_vue_type_style_index_0_id_1a29c525_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ae74");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddAssetGrouping_vue_vue_type_style_index_0_id_1a29c525_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddAssetGrouping_vue_vue_type_style_index_0_id_1a29c525_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8fc4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Asset/AddAssetGrouping.vue?vue&type=template&id=1a29c525&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "main-content"
  }, [_c('loader', {
    attrs: {
      "is-visible": _vm.isLoading
    }
  }), _c('div', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12 padding-t_8"
  }, [_c('div', {
    staticClass: "theme-primary partition-full"
  }, [_c('span', {
    staticClass: "p-name text-white"
  }, [_vm._v(_vm._s(_vm.$t('AddProductContainerList')))]), _c('span', {
    staticClass: "p-actions float-right"
  }, [_c('RouterLink', {
    staticClass: "p-action-btn text-white float-right px-2 w-100",
    attrs: {
      "to": '/Asset/AssetGrouping'
    }
  }, [_c('em', {
    staticClass: "fa fa-angle-double-left"
  }), _c('br'), _vm._v(_vm._s(_vm.$t('BacktoList')) + " ")])], 1)])])])]), _c('div', {
    staticClass: "border p-3"
  }, [_c('div', {
    staticClass: "col-md-12 p-0",
    attrs: {
      "id": "dynmicForm"
    }
  }, [_c('Form', {
    ref: "AssetAddGroupform",
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        values,
        meta
      }) {
        return [_c('div', {
          staticClass: "row"
        }, [_c('div', {
          staticClass: "col-lg-4"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v(_vm._s(_vm.$t('ConsumableItemType'))), _c('span', {
          staticClass: "text-danger"
        }, [_vm._v("*")])]), _c('Field', {
          attrs: {
            "name": _vm.$t('ConsumableItemType'),
            "rules": {
              'required': true
            },
            "label": "Select Product Type"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              errors
            }) {
              return [_c('select', {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.AssetTypeId,
                  expression: "AssetTypeId"
                }],
                class: {
                  'form-control': true,
                  'is-invalid': errors[0]
                },
                on: {
                  "change": [function ($event) {
                    var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                      return o.selected;
                    }).map(function (o) {
                      var val = "_value" in o ? o._value : o.value;
                      return val;
                    });
                    _vm.AssetTypeId = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
                  }, function ($event) {
                    return _vm.GetCompanyAssestCatalogs();
                  }]
                }
              }, [_c('option', {
                attrs: {
                  "value": "null"
                }
              }, [_vm._v(_vm._s(_vm.$t('Select')))]), _vm._l(_vm.ProductTypelist, function (item) {
                return _c('option', {
                  key: item.ASSETTYPE,
                  domProps: {
                    "value": item.Value
                  }
                }, [_vm._v(" " + _vm._s(item.Text))]);
              })], 2), errors[0] ? _c('span', {
                staticClass: "invalid-feedback d-block",
                attrs: {
                  "name": _vm.$t('ConsumableItemType')
                }
              }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
            }
          }], null, true)
        })], 1)]), _c('div', {
          staticClass: "col-lg-4"
        }, [_c('label', [_vm._v(_vm._s(_vm.$t('Location'))), _c('span', {
          staticClass: "text-danger"
        }, [_vm._v("*")])]), _c('Field', {
          attrs: {
            "name": _vm.$t('Location'),
            "rules": {
              'required': true
            }
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              errors
            }) {
              return [_c('tree-view', {
                class: {
                  'is-invalid': errors[0]
                },
                attrs: {
                  "options": _vm.options,
                  "placeholder": "Select Location",
                  "show-count": true
                },
                on: {
                  "input": function ($event) {
                    return _vm.GetCompanyAssestCatalogs(_vm.TreeValue, _vm.AssetTypeId);
                  }
                },
                model: {
                  value: _vm.TreeValue,
                  callback: function ($$v) {
                    _vm.TreeValue = $$v;
                  },
                  expression: "TreeValue"
                }
              }), errors[0] ? _c('span', {
                staticClass: "invalid-feedback d-block",
                attrs: {
                  "name": _vm.$t('Location')
                }
              }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
            }
          }], null, true)
        })], 1), _c('div', {
          staticClass: "col-lg-4"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', {}, [_vm._v(_vm._s(_vm.$t('SelectContainer')))]), _vm._v(":"), _c('span', {
          staticClass: "mandatory"
        }, [_vm._v("*")]), _c('Field', {
          attrs: {
            "name": _vm.$t('SelectContainer'),
            "rules": {
              'required': true
            },
            "label": "Select Container"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              errors
            }) {
              return [_c('select', {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.ContainerId,
                  expression: "ContainerId"
                }],
                class: {
                  'form-control': true,
                  'is-invalid': errors[0]
                },
                on: {
                  "change": [function ($event) {
                    var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                      return o.selected;
                    }).map(function (o) {
                      var val = "_value" in o ? o._value : o.value;
                      return val;
                    });
                    _vm.ContainerId = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
                  }, function ($event) {
                    return _vm.setProductName(_vm.ContainerId);
                  }]
                }
              }, [_c('option', {
                attrs: {
                  "value": "null"
                }
              }, [_vm._v(_vm._s(_vm.$t('Select')))]), _vm._l(_vm.ContainerData, function (item) {
                return _c('option', {
                  key: item.Value,
                  domProps: {
                    "value": item.Value
                  }
                }, [_vm._v(" " + _vm._s(item.name))]);
              })], 2), errors[0] ? _c('span', {
                staticClass: "invalid-feedback d-block",
                attrs: {
                  "name": _vm.$t('SelectContainer')
                }
              }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
            }
          }], null, true)
        })], 1)]), _c('div', {
          staticClass: "listing px-3"
        }, [_c('div', {
          staticClass: "table-responsive catalog_Row_MainBox",
          staticStyle: {
            "min-height": "auto"
          }
        }, [_c('table', {
          staticClass: "table table-bordered dt-responsive nowrap mt-0",
          staticStyle: {
            "width": "100%"
          },
          attrs: {
            "id": "tbContainer"
          }
        }, [_c('thead', {
          staticClass: "thead-bg"
        }, [_c('tr', [_c('th', {
          staticClass: "ui-resizable",
          staticStyle: {
            "width": "168px",
            "min-width": "168px",
            "max-width": "168px"
          },
          attrs: {
            "id": "th-PRODUCTNAME"
          }
        }, [_c('span', {
          staticStyle: {
            "min-width": "150px"
          },
          attrs: {
            "href": "javascript:;"
          }
        }, [_vm._v(" " + _vm._s(_vm.$t('AssetId')) + ":"), _c('span', {
          staticClass: "mandatory d-inline-block"
        }, [_vm._v("*")])])]), _c('th', {
          staticClass: "ui-resizable",
          staticStyle: {
            "width": "156px",
            "min-width": "156px",
            "max-width": "156px"
          },
          attrs: {
            "id": "th-COMPARTMENT"
          }
        }, [_c('span', {
          staticStyle: {
            "min-width": "138px"
          },
          attrs: {
            "href": "javascript:;"
          }
        }, [_vm._v(_vm._s(_vm.$t('Compartment')) + ":"), _c('span', {
          staticClass: "mandatory d-inline-block"
        }, [_vm._v("*")])]), _c('div', {
          staticClass: "sizer",
          attrs: {
            "id": "th-COMPARTMENT-sizer"
          }
        }), _c('div', {
          staticClass: "ui-resizable-handle ui-resizable-e",
          staticStyle: {
            "z-index": "90"
          }
        })])])]), _c('tbody', _vm._l(_vm.NewDynamicField, function (item, index) {
          return _c('tr', {
            key: index
          }, [_c('td', {
            staticClass: "overflow-visible"
          }, [_c('Field', {
            attrs: {
              "name": 'ProductName' + index,
              "rules": {
                'required': true
              }
            },
            scopedSlots: _vm._u([{
              key: "default",
              fn: function ({
                errors
              }) {
                return [_c('select', {
                  directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: item.ProductName,
                    expression: "item.ProductName"
                  }],
                  staticClass: "form-control level",
                  class: {
                    'form-control': true,
                    'is-invalid': errors[0]
                  },
                  attrs: {
                    "name": item.name
                  },
                  on: {
                    "change": [function ($event) {
                      var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                        return o.selected;
                      }).map(function (o) {
                        var val = "_value" in o ? o._value : o.value;
                        return val;
                      });
                      _vm.$set(item, "ProductName", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
                    }, function ($event) {
                      return _vm.AlreadyExist($event, index, item, 'ProductName');
                    }]
                  }
                }, [_c('option', {
                  attrs: {
                    "value": "null"
                  }
                }, [_vm._v(_vm._s(_vm.$t('Select')))]), _vm._l(_vm.ItemNamelist, function (item, index1) {
                  return _c('option', {
                    key: index1,
                    domProps: {
                      "value": item.ASSET_CATALOGUE_ID
                    }
                  }, [_vm._v(" " + _vm._s(item.NAME))]);
                })], 2), errors[0] ? _c('span', {
                  staticClass: "invalid-feedback d-block",
                  attrs: {
                    "name": 'ProductName' + index
                  }
                }, [_vm._v(_vm._s('The Product Name field is required'))]) : _vm._e()];
              }
            }], null, true)
          })], 1), _c('td', {
            staticClass: "overflow-visible"
          }, [_c('Field', {
            attrs: {
              "name": 'Compartment' + (index + 1),
              "rules": {
                'required': true
              }
            },
            scopedSlots: _vm._u([{
              key: "default",
              fn: function ({
                errors
              }) {
                return [_c('div', {
                  staticClass: "input-group"
                }, [_c('select', {
                  directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: item.Compartment,
                    expression: "item.Compartment"
                  }],
                  class: {
                    'form-control tdcm ddlCompartmentId': true,
                    'is-invalid': errors[0]
                  },
                  attrs: {
                    "name": 'Compartment' + (index + 1)
                  },
                  on: {
                    "change": function ($event) {
                      var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                        return o.selected;
                      }).map(function (o) {
                        var val = "_value" in o ? o._value : o.value;
                        return val;
                      });
                      _vm.$set(item, "Compartment", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
                    }
                  }
                }, [_c('option', {
                  attrs: {
                    "value": "null"
                  }
                }, [_vm._v(_vm._s(_vm.$t('Select')))]), _vm._l(_vm.CompartmentData, function (item, index) {
                  return _c('option', {
                    key: index,
                    domProps: {
                      "value": item.Value
                    }
                  }, [_vm._v(" " + _vm._s(item.Text))]);
                })], 2), _c('span', {
                  staticClass: "input-group-text border-0 bg-transparent p-0 pl-2"
                }, [0 == parseInt(index) ? _c('a', {
                  staticClass: "plupload_button plupload_add add_asset_group_item_box round-icon-small btn-success-light",
                  attrs: {
                    "href": "javascript:;",
                    "title": "",
                    "data-original-title": "Add New Row"
                  },
                  on: {
                    "click": _vm.addRow
                  }
                }, [_c('i', {
                  staticClass: "fa fa-plus pt-7 font-18"
                })]) : _vm._e(), 0 != parseInt(index) ? _c('a', {
                  staticClass: "round-icon-small btn-danger-light delete_asset_group_item_box float-left",
                  attrs: {
                    "href": "javascript:;",
                    "title": "",
                    "checkprivilege": "yes",
                    "data-groupid": "0",
                    "data-toggle-tooltip": "tooltip",
                    "data-original-title": "Delete"
                  },
                  on: {
                    "click": function ($event) {
                      return _vm.deleteRow(item);
                    }
                  }
                }, [_c('i', {
                  staticClass: "fa fa-trash"
                })]) : _vm._e()]), errors[0] ? _c('span', {
                  staticClass: "invalid-feedback d-block",
                  attrs: {
                    "name": 'Compartment' + (index + 1)
                  }
                }, [_vm._v(_vm._s('The Compartment field is required'))]) : _vm._e()])];
              }
            }], null, true)
          })], 1)]);
        }), 0)]), _c('div')])])]), _c('div', {
          staticClass: "row flex-row-reverse my-3"
        }, [_c('div', {
          staticClass: "col-lg-6 text-right"
        }, [_vm.IsVisibleSave ? _c('button', {
          staticClass: "btn btn-success text-white mr-2",
          on: {
            "click": function ($event) {
              return _vm.Save(values, meta);
            }
          }
        }, [_c('em', {
          staticClass: "fa fa-save pr-2"
        }), _vm._v(_vm._s(_vm.$t('Save')))]) : _vm._e(), _c('a', {
          staticClass: "btn btn-danger",
          attrs: {
            "href": "javascript:;",
            "title": "",
            "data-toggle-tooltip": "tooltip",
            "data-original-title": "Cancel"
          },
          on: {
            "click": _vm.CancelButton
          }
        }, [_c('em', {
          staticClass: "fa fa-close pr-2"
        }), _vm._v(_vm._s(_vm.$t('Cancel')))])]), _c('div', {
          staticClass: "col-lg-6"
        }, [_c('div', {
          staticClass: "py-2"
        }, [_c('span', {
          staticClass: "mandatory"
        }, [_vm._v(_vm._s(_vm.$t('MandatoryString')))])])])])];
      }
    }])
  })], 1)])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/Asset/AddAssetGrouping.vue?vue&type=template&id=1a29c525&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// EXTERNAL MODULE: ./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.cjs.js
var vue_treeselect_cjs = __webpack_require__("ca17");
var vue_treeselect_cjs_default = /*#__PURE__*/__webpack_require__.n(vue_treeselect_cjs);

// EXTERNAL MODULE: ./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.css
var vue_treeselect = __webpack_require__("542c");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Asset/AddAssetGrouping.vue?vue&type=script&lang=js&




/* harmony default export */ var AddAssetGroupingvue_type_script_lang_js_ = ({
  components: {
    'tree-view': vue_treeselect_cjs_default.a
  },
  data() {
    return {
      AssetTypeId: null,
      ContainerName: '',
      ContainerId: null,
      AssetGroupId: 0,
      ChildRelatedInfoId: null,
      AssetCatalogQuantity: null,
      CompartmentId: 0,
      AssetCategoryId: 0,
      AssetCategoryName: null,
      ProductTypelist: [],
      ItemNamelist: [],
      LocationData: [],
      ContainerData: [],
      CompartmentData: [],
      NewDynamicField: [{
        Compartment: null,
        ProductName: null,
        count: 0
      }],
      AssetsGroupItemsList: [],
      options: [],
      containerName: '',
      IsVisibleSave: true,
      isLoading: false,
      TreeValue: null
    };
  },
  async created() {
    await this.GetProductTypeDropdown();
    await this.GetLocationByCompanyId();
  },
  methods: {
    async GetProductTypeDropdown() {
      var vm = this;
      await DataService["a" /* default */].GetAssetContainer().then(response => {
        vm.ProductTypelist = response.data.Result;
      });
      // var url = `type=ITEMCODE&issueTo=&locationId=`;
      // DataService.GetAssetTypeCustom(url).then(response => {
      //     vm.ProductTypelist = JSON.parse(response.data);
      // })
    },

    async GetLocationByCompanyId() {
      var vm = this;
      var url = `reqForm=`;
      await DataService["a" /* default */].GetLocationByCompanyId(url).then(function (response) {
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
        vm.options = vm.FindalLocationArray;
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
    async GetCompanyAssestCatalogs(locationId, assetId) {
      var vm = this;
      vm.isLoading = true;
      if (assetId == null) {
        vm.isLoading = false;
        return;
      }
      if (locationId == undefined) {
        vm.isLoading = false;
        return;
      } else {
        var url = `assetTypeId=${vm.AssetTypeId}&mode=&location_id=${locationId}`;
        await DataService["a" /* default */].GetItemNameDropdown(url).then(function (response) {
          vm.ContainerData = [];
          response.data.Result.forEach((item, index) => {
            var obj = {
              name: item.Text,
              Value: item.Value
            };
            vm.ContainerData.push(obj);
          });
        });
      }
      await vm.GetItemNamesLocationwise(locationId);
      await vm.GetCompartmentName(vm.AssetTypeId);
      vm.isLoading = false;
    },
    async GetItemNamesLocationwise(LocationId) {
      var vm = this;
      vm.isLoading = true;
      vm.ItemNamelist = [];
      let url = `location_id=${LocationId}`;
      await DataService["a" /* default */].BindItemLocationWise(url).then(response => {
        response.data.forEach((item, index) => {
          var obj = {
            NAME: item.NAME,
            ASSET_CATALOGUE_ID: item.ASSET_CATALOGUE_ID
          };
          vm.ItemNamelist.push(obj);
        });
        vm.isLoading = false;
      });
    },
    async GetCompartmentName(asset_type_id) {
      var vm = this;
      vm.isLoading = true;
      var url = `asset_type_id=${asset_type_id}`;
      await DataService["a" /* default */].GetCompartmentName(url).then(response => {
        vm.CompartmentData = response.data.Result;
      });
      vm.isLoading = false;
    },
    setProductName(item) {
      var vm = this;
      vm.containerName = '';
      vm.containerName = this.ContainerData.find(x => x.Value == item).name;
    },
    Save(values, meta) {
      var vm = this;
      vm.isLoading = true;
      var filterName = '';
      var ContainerList = [];
      vm.$refs.AssetAddGroupform.validate().then(result => {
        if (result) {
          filterName = vm.ContainerData.find(x => x.Value == vm.ContainerId);
          vm.ContainerName = filterName.name;
          vm.NewDynamicField.forEach(item => {
            ContainerList.push({
              AssetGroupId: 0,
              ChildRelatedInfoId: item.ProductName,
              AssetCatalogQuantity: 0,
              CompartmentId: item.Compartment,
              AssetCategoryId: item.ProductName,
              AssetCategoryName: null
            });
          });
          var obj = {
            AssetTypeId: vm.AssetTypeId,
            LocationId: vm.TreeValue,
            ParentRelatedInfoId: vm.ContainerId,
            AssetContainerName: vm.ContainerName,
            StatusId: 0,
            CreatedAt: null,
            ModifiedAt: null,
            CreatedBy: 0,
            ModifiedBy: 0,
            CompartmentId: 0,
            IsUsed: null,
            ContainerList: null,
            ItemList: null,
            AssetsGroupItemsList: ContainerList
          };
          DataService["a" /* default */].AddAssetGrouping(obj).then(response => {
            if (response.data.status == 0) {
              vm.ShowAlert(vm.$t('AddedSuccess', [vm.$t('Product_Container')]), "success", true, vm.$t("Alert"));
              vm.CancelButton();
            } else {
              vm.IsVisibleSave = false;
            }
            vm.isLoading = false;
          });
        }
        vm.isLoading = false;
      });
    },
    addRow: function (e) {
      var vm = this;
      vm.$refs.AssetAddGroupform.validate().then(result => {
        if (result) {
          vm.NewDynamicField.push({
            ProductName: null,
            Compartment: null,
            count: vm.NewDynamicField.length + 1
          });
        }
      });
    },
    deleteRow(index) {
      var vm = this;
      vm.confirmR(vm.$t('Please verify that you want to delete this record?'), true, false, function (result) {
        vm.NewDynamicField.splice(index, 1);
        return true;
      });
    },
    CancelButton() {
      this.$router.push({
        name: 'AssetGrouping'
      });
    },
    AlreadyExist: function (e, i, item, lbl) {
      var vm = this;
      var productName = vm.ItemNamelist.find(x => x.ASSET_CATALOGUE_ID == parseInt(item.ProductName)).NAME;
      if (vm.NewDynamicField.length == 1) {
        if (this.containerName.includes(productName) == true) {
          vm.NewDynamicField.forEach(ele => {
            if (vm.NewDynamicField.length == 1) {
              ele.ProductName = '';
            } else {
              //
            }
          });
          vm.ShowAlert('Product name cannot contain container name (' + productName + '), please select some other value', "failure", vm.$t('Alert'));
        } else {
          //
        }
      } else {
        ///
      }
    }
  }
});
// CONCATENATED MODULE: ./src/views/Asset/AddAssetGrouping.vue?vue&type=script&lang=js&
 /* harmony default export */ var Asset_AddAssetGroupingvue_type_script_lang_js_ = (AddAssetGroupingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/Asset/AddAssetGrouping.vue?vue&type=style&index=0&id=1a29c525&prod&scoped=true&lang=css&
var AddAssetGroupingvue_type_style_index_0_id_1a29c525_prod_scoped_true_lang_css_ = __webpack_require__("7964");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/Asset/AddAssetGrouping.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Asset_AddAssetGroupingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "1a29c525",
  null
  
)

/* harmony default export */ var AddAssetGrouping = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "ae74":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("666c");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("351d9cb9", content, true, {"sourceMap":false,"shadowMode":false});

/***/ })

}]);
//# sourceMappingURL=chunk-4e6c1350.js.map