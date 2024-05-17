(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-60d2c7bf"],{

/***/ "0626":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#modelAddProduct .modal-dialog{max-width:1200px!important}#Location .vue-treeselect__control .vue-treeselect__x-container{display:none}#Location .vue-treeselect{position:relative;text-align:left;border:1px solid #abb5bf}#Location .vue-treeselect--single .vue-treeselect__input{width:100%;height:100%;box-sizing:border-box;border:none}#modelAddProduct .custom-checkbox.custom-checkbox .custom-control-label:before,.custom-checkbox .custom-control-input:checked~.custom-control-label:after{display:none}.vue-treeselect.form-control .vue-treeselect__control{border:none!important;height:auto}.vue-treeselect.form-control .vue-treeselect__control .vue-treeselect__single-value{line-height:20px;padding-left:0}.no-spinner::-webkit-inner-spin-button,.no-spinner::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.no-spinner{-moz-appearance:textfield}.custlocation>span{width:91%}.custlocation .vue-treeselect__placeholder.vue-treeselect-helper-zoom-effect-off{line-height:22px}.modal-backdrop{visibility:hidden}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "191f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/AddProduct.vue?vue&type=template&id=3e2bb417&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_c('loader', {
    attrs: {
      "is-visible": _vm.isLoading
    }
  }), _c('div', {
    class: {
      ' my-popups right': true,
      'modal fade': _vm.FromPage != 'AdvanceSettings'
    },
    attrs: {
      "id": "modelAddProduct",
      "role": "dialog"
    }
  }, [_c('div', {
    class: {
      'modal-dialog': _vm.FromPage != 'AdvanceSettings'
    },
    attrs: {
      "role": "document"
    }
  }, [_c('div', {
    class: {
      'modal-content': _vm.FromPage != 'AdvanceSettings'
    }
  }, [_vm.FromPage != 'AdvanceSettings' ? _c('div', {
    staticClass: "modal-header mheader-user"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function ($event) {
        return _vm.closeAddProduct();
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-times",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _c('h4', {
    staticClass: "modal-title",
    attrs: {
      "id": "myModalLabel"
    }
  }, [_vm._v(_vm._s(_vm.$t("AddItem")))]), _c('span', {
    staticClass: "user-guide"
  }, [_c('a', {
    staticClass: "ancuserguide",
    attrs: {
      "data-toggle": "collapse",
      "href": "#collapseReplyUG",
      "role": "button",
      "aria-expanded": "false",
      "aria-controls": "collapseExample"
    }
  }, [_vm._v(" User Guide")]), _c('div', {
    staticClass: "divancuserguide collapse overflow-auto",
    attrs: {
      "id": "collapseReplyUG"
    }
  }, [_c('div', {
    staticClass: "custom-scrollbar-js",
    attrs: {
      "id": "scrollbarreplyuserguideMangeView"
    }
  }, [_c('div', {
    staticClass: "con",
    domProps: {
      "innerHTML": _vm._s(_vm.$t('UserGuideAddProduct'))
    }
  })])])])]) : _vm._e(), _c('div', {
    class: {
      'modal-body bg-white': _vm.FromPage != 'AdvanceSettings'
    }
  }, [_c('Form', {
    ref: "AddProduct"
  }, [_c('dynamic-form', {
    ref: "AddProductForm",
    attrs: {
      "buttons": _vm.buttons,
      "schema": _vm.FormSchema
    },
    scopedSlots: _vm._u([{
      key: "tgslot-unit_price",
      fn: function ({
        data
      }) {
        return [_c('Field', {
          staticClass: "w-100",
          attrs: {
            "rules": {
              'required': false,
              'max': 5
            },
            "name": "Unit Price"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              errors
            }) {
              return [_c('div', {
                staticClass: "input-group"
              }, [_c('span', {
                staticClass: "input-group-append"
              }, [_c('span', {
                staticClass: "input-group-text",
                attrs: {
                  "id": "spnOutOF"
                }
              }, [_vm._v(_vm._s(_vm.Currency))])]), _c('input', {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: data.fieldInfo.value,
                  expression: "data.fieldInfo.value"
                }],
                staticClass: "form-control no-spinner",
                attrs: {
                  "type": "number",
                  "name": "unitprice",
                  "min": "0",
                  "maxlength": 5,
                  "step": "any",
                  "pattern": "\\d+\\.?\\d?(?!\\d)"
                },
                domProps: {
                  "value": data.fieldInfo.value
                },
                on: {
                  "input": [function ($event) {
                    if ($event.target.composing) return;
                    _vm.$set(data.fieldInfo, "value", $event.target.value);
                  }, _vm.limitLength],
                  "keyup": function ($event) {
                    return _vm.GetAssetCost($event, data.fieldInfo.value);
                  }
                }
              })]), errors[0] ? _c('span', {
                staticClass: "invalid-feedback d-block",
                attrs: {
                  "name": "unitprice"
                }
              }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
            }
          }], null, true)
        })];
      }
    }, {
      key: "tgslot-asset_cost",
      fn: function ({
        data
      }) {
        return [_c('div', {
          staticClass: "input-group"
        }, [_c('span', {
          staticClass: "input-group-append"
        }, [_c('span', {
          staticClass: "input-group-text",
          attrs: {
            "id": "spnOutOF"
          }
        }, [_vm._v(_vm._s(_vm.Currency))])]), _c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: data.fieldInfo.value,
            expression: "data.fieldInfo.value"
          }],
          staticClass: "form-control no-spinner",
          attrs: {
            "type": "number",
            "min": 0
          },
          domProps: {
            "value": data.fieldInfo.value
          },
          on: {
            "keyup": function ($event) {
              return _vm.GetUnitPrice(data.fieldInfo.value);
            },
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.$set(data.fieldInfo, "value", $event.target.value);
            }
          }
        })])];
      }
    }, {
      key: "tgslot-location_id",
      fn: function ({
        data
      }) {
        return [_c('div', {
          staticClass: "input-group custlocation"
        }, [_c('Field', {
          attrs: {
            "name": "Location",
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
                  'form-control': true,
                  'is-invalid': errors[0]
                },
                attrs: {
                  "options": _vm.options,
                  "placeholder": "Select Location",
                  "show-count": true
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
                  "name": "Location"
                }
              }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
            }
          }], null, true)
        }), data.fieldInfo.config.showAddIcon ? _c('div', {
          staticClass: "ml-2 mt-1"
        }, [_c('a', {
          staticClass: "round-icon-small btn-dark theme-primary",
          on: {
            "click": _vm.AddLocation
          }
        }, [_c('i', {
          staticClass: "fa fa-plus text-white pt-7 font-18",
          attrs: {
            "alt": "+"
          }
        })])]) : _vm._e()], 1)];
      }
    }])
  })], 1), _vm.FromPage != 'AdvanceSettings' ? _c('div', {
    staticClass: "right-content row flex-row-reverse mt-3"
  }, [_c('div', {
    staticClass: "col-lg-12 text-left"
  }, [_c('div', {
    staticClass: "py-2 mandatory"
  }, [_vm._v(" " + _vm._s(_vm.$t('MandatoryString')) + " ")])])]) : _vm._e()], 1)])])]), _vm.ShowAddLocation ? _c('div', {
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
  }, [_vm._v(" " + _vm._s(_vm.$t('Location')) + " ")]), _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-original-title": "Close"
    },
    on: {
      "click": function ($event) {
        return _vm.CloseLocationPopup();
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-times"
  })])]), _c('AddLocationPopup')], 1)])])]) : _vm._e(), _vm.IsTagNamePopup ? _c('TagNamePopup', {
    attrs: {
      "FromAddProduct": _vm.FromAddProduct
    }
  }) : _vm._e(), _vm.ShowAddProductType ? _c('div', {
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
      "FromPage": _vm.FromPage
    }
  })], 1)])])]) : _vm._e()], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/AddProduct.vue?vue&type=template&id=3e2bb417&

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-exception.stack.js
var web_dom_exception_stack = __webpack_require__("b7ef");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// EXTERNAL MODULE: ./src/components/Modal/TagNamePopup.vue + 4 modules
var TagNamePopup = __webpack_require__("56f6");

// EXTERNAL MODULE: ./src/components/Modal/AddLocation.vue + 4 modules
var AddLocation = __webpack_require__("7437");

// EXTERNAL MODULE: ./src/components/Modal/AddProductType.vue + 4 modules
var AddProductType = __webpack_require__("f6fa");

// EXTERNAL MODULE: ./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.cjs.js
var vue_treeselect_cjs = __webpack_require__("ca17");
var vue_treeselect_cjs_default = /*#__PURE__*/__webpack_require__.n(vue_treeselect_cjs);

// EXTERNAL MODULE: ./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.css
var vue_treeselect = __webpack_require__("542c");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/AddProduct.vue?vue&type=script&lang=js&








/* harmony default export */ var AddProductvue_type_script_lang_js_ = ({
  props: {
    FromPage: {
      type: String,
      required: false
    }
  },
  components: {
    TagNamePopup: TagNamePopup["a" /* default */],
    AddLocationPopup: AddLocation["a" /* default */],
    AddProductType: AddProductType["default"],
    'tree-view': vue_treeselect_cjs_default.a
  },
  data() {
    return {
      options: [],
      TreeValue: null,
      isLoading: false,
      AssetType: [],
      BarcodeType: [],
      userLoggedIn2: false,
      IsDeployment: false,
      IsTagNamePopup: false,
      LocationData: [],
      ShowAddLocation: false,
      ShowAddProductType: false,
      FromAddProduct: false,
      DeploymentType: '',
      IsEnableAssetManagement: false,
      fileUploaded: '',
      tagData: [],
      isCheckDeployItem: '',
      DeployProductValue: false,
      StaticObj: [{
        layoutType: "single",
        Data: [{
          astype: "TreeSelectField",
          label: this.$t('Location'),
          name: "Location",
          value: null,
          placeholder: "Select Location",
          config: {
            options: [],
            showAddIcon: true,
            onAddButtonClick: this.AddLocation
          },
          validationRules: {
            "required": true
          }
        }]
      }],
      FormSchema: [],
      buttons: [{
        type: "submit",
        class: "btn btn-secondary",
        text: "<i class='fa fa-angle-double-left pr-2'></i>Back",
        onClick: this.BackButton,
        isVisible: false
      }, {
        type: "submit",
        class: "btn btn-success",
        text: "<i class='fa fa-save pr-2'></i>Save And Close",
        name: "SaveAndClose",
        onClick: this.onSubmit
      }, {
        type: "submit",
        class: "btn btn-success",
        text: "<i class='fa fa-save pr-2'></i>Save And New",
        name: "SaveAndNew",
        onClick: this.onSubmit
      }, {
        type: "button",
        class: "btn btn-danger",
        text: "<i class='fa fa-close pr-2'></i>Cancel",
        onClick: this.close,
        isVisible: true
      }, {
        type: "button",
        class: "btn btn-success",
        text: "<i class='fa fa-check' aria-hidden='true'></i> Finish",
        isVisible: false
      }],
      DataLoaded: 0,
      TagsArray: [],
      tags: [],
      file: [],
      CurrentTab: 1,
      step: 3,
      SetupProgress: 0,
      count: 0,
      PageSize: 10,
      PageNumber: 1,
      SortBy: '',
      SortExp: '',
      IsClientStoragesCopmleted: false,
      UserType: '',
      fileMulitpleData: [],
      AllowedFileType: [],
      currency: '',
      SaveTags: []
    };
  },
  watch: {
    CurrentTab: {
      handler(newValue, oldValue) {
        if (newValue == 3) {
          this.getForm();
        }
      }
    }
  },
  async created() {
    debugger;
    var vm = this;
    if (vm.FromPage == '' || vm.FromPage == null) {
      vm.FromPage = 'AddProduct';
    }
    await vm.EnableAssetManagement();
    vm.Currency = this.GetUserInfo.Currency;
    await vm.getForm();
    await vm.AssetCatalogueListing();
    await vm.GetProgress();
    await vm.GetLocationByCompanyId();
    vm.DataLoaded = 1;
  },
  mounted() {
    $('#modelAddProduct').modal({
      backdrop: 'static',
      keyboard: false
    });
  },
  methods: {
    getForm: async function (id) {
      //debugger
      var vm = this;
      vm.isLoading = true;
      var url = `recordId=0&moduleName=Asset&subModuleCode=MANAGE_PRODUCT&usefor=Add`;
      await DataService["a" /* default */].GetDynamicForm(url).then(function (response) {
        // debugger
        if (response != null && response.data != null) {
          // debugger;
          //ths.isMapFeature = response.data.isFsmLocating;
          if (typeof response.data.configdata != 'undefined' && response.data.configdata.length > 0) {
            var configResult = response.data.configdata;
            configResult.forEach(function (row) {
              if (row.CORE_CONFIG_KEY == "TicketDisallowedFileTypes") {
                vm.AllowedFileType = row.CONFIG_DATA_VALUE;
              }
            });
          }
          var assetData = response.data.data;
          vm.FormSchema = vm.$refs.AddProductForm.ConvertCustomFieldIntoDynamicFormObj(response.data.data);

          ////debugger;
          assetData.forEach(item => {
            vm.FormSchema.forEach((group, gi) => {
              group.Data.forEach((field, fi) => {
                //           debugger;

                // if (group.group_name == "DEPLOY PRODUCT" || group.group_name == "DEPLOY PRODUCT DETAILS") {
                //     group.visibility = false;
                //     if (field.name == "deployement_type" || field.name == "location_id" || field.name == "quantity" || field.name == "unit_price" || field.name == "asset_cost" || field.name == "status_id") {
                //         field.visibility = false;
                //     }
                // }

                if (field.name == "deployement_type" || field.name == "location_id" || field.name == "quantity" || field.name == "unit_price" || field.name == "asset_cost" || field.name == "status_id") {
                  field.visibility = false;
                  group.visibility = false;
                }
                if (field.name == "quantity") {
                  if (item.name == 'quantity') {
                    field.is_required = true;
                    field.validationRules = {
                      'required': item.is_required,
                      max: item.length
                    };
                  }
                }
                if (field.name == "unit_price") {
                  field.astype = 'SlotField';
                  field.is_required = false;
                  if (item.name == 'unit_price') {
                    field.validationRules = {
                      'required': item.is_required,
                      max: item.length
                    };
                  }
                }
                if (field.name == "asset_cost") {
                  field.astype = 'SlotField';
                  //field.validationRules= {'required':item.is_required, max: item.length}         

                  //field.validationRules= "max:5"
                }

                if (field.name == "location_id") {
                  field.config.showAddIcon = true;
                  field.config.onAddButtonClick = vm.AddLocation;
                  field.astype = 'SlotField';
                  field.is_required = false;
                }
                if (field.name == "deployement_type") {
                  ////debugger;
                  field.value = "1";
                  //field.display_order = 2;
                }

                if (field.name == "type") {
                  ////debugger;
                  field.value = false;
                  //field.display_order = 1
                }

                if (field.name == "create_unique_name_list") {
                  field.value = "0";
                  //field.required
                }

                if (field.name == "asset_type_id") {
                  if (vm.FromPage != 'AdvanceSettings') {
                    field.config.showAddIcon = true;
                    field.config.onAddButtonClick = vm.OpenAddProductTypePopup;
                  }
                }
                if (field.name == "tag_id") {
                  field.mode = "tag";
                  field.is_required = false;
                  field.config.showAddIcon = true;
                  field.config.onAddButtonClick = vm.OpenAddTagPopup;
                }
                if (field.name == "type") {
                  field.value = '0';
                  field.is_required = true;
                }
                if (field.name == "status_id") {
                  field.value = '1001';
                  field.visibility = false;
                } else if (field.name == "attachment_path") {
                  field.showLabel = false;
                  let fileTypeList = vm.AttachmentDisallowedFileType(vm.AllowedFileType);
                  if (fileTypeList != null) {
                    //debugger;
                    field.config = {
                      maxSize: 5,
                      //accept: fileTypeList,
                      //onChange: ths.GetBase64String,
                      onDeleteSelectedFiles: vm.onDeleteSelectedFiles,
                      accept: [{
                        fileType: 'jpg',
                        // Image types
                        iconClass: 'fa-file-image-o' // Icon class for images
                      }, {
                        fileType: 'jpeg',
                        // Image types
                        iconClass: 'fa-file-image-o' // Icon class for images
                      }, {
                        fileType: 'png',
                        // Image types
                        iconClass: 'fa-file-image-o' // Icon class for images
                      }
                      // Add more image, document, text, and video types as needed
                      ],

                      showAddIcon: false,
                      onAddButtonClick: '',
                      multiple: true
                    };
                  }
                }
                // if (field.name == "attachment_path") {
                //     field.showLabel = false;
                //     field.config = {
                //         maxSize: 5,
                //         accept: [{
                //                 fileType: 'jpg', // Image types
                //                 iconClass: 'fa-file-image-o' // Icon class for images
                //             },
                //             {
                //                 fileType: 'jpeg', // Image types
                //                 iconClass: 'fa-file-image-o' // Icon class for images
                //             },
                //             {
                //                 fileType: 'png', // Image types
                //                 iconClass: 'fa-file-image-o' // Icon class for images
                //             },
                //             // Add more image, document, text, and video types as needed
                //         ],
                //         //onChange: ths.GetBase64String,
                //         showAddIcon: false,
                //         onAddButtonClick: '',
                //         multiple: false
                //     }
                // }
                field.config.onChange = vm.onChangeEventForFields;
              });
            });
          });
          // ths.FormSchema.push({
          //     layoutType: "single",
          //     group_name: 'Address',
          //     visibility: false,
          //     Data: [{
          //         astype: "SlotField",
          //         name: "addresFields",
          //         value: "",
          //         visibility: false,
          //         showLabel: false
          //     }]
          // });

          vm.isLoading = false;
        }
      });
    },
    onChangeEventForFields: function (x, y, z) {
      ////debugger
      let vm = this;
      if (y.name == "type") {
        vm.FormSchema.forEach((group, gi) => {
          ////debugger;
          group.Data.forEach((field, fi) => {
            ////debugger;
            if (y.value) {
              // if (group.group_name == "DEPLOY PRODUCT" || group.group_name == "DEPLOY PRODUCT DETAILS") {
              //     group.visibility = true;
              //     if (field.name == "deployement_type" || field.name == "location_id" || field.name == "quantity" || field.name == "unit_price" || field.name == "asset_cost") {
              //         field.visibility = true;
              //     }
              // }
              if (field.name == "deployement_type" || field.name == "location_id" || field.name == "quantity" || field.name == "unit_price" || field.name == "asset_cost") {
                field.visibility = true;
                group.visibility = true;
              }
            } else {
              // if (group.group_name == "DEPLOY PRODUCT" || group.group_name == "DEPLOY PRODUCT DETAILS") {
              //     if (group.group_name == "DEPLOY PRODUCT DETAILS") {
              //         group.visibility = false;
              //     }
              //     if (field.name == "deployement_type" || field.name == "location_id" || field.name == "quantity" || field.name == "unit_price" || field.name == "asset_cost") {
              //         field.visibility = false;
              //     }
              // }
              if (field.name == "deployement_type" || field.name == "location_id" || field.name == "quantity" || field.name == "unit_price" || field.name == "asset_cost") {
                field.visibility = false;
                group.visibility = false;
              }
            }
          });
        });
      }
      if (y.name == "attachment_path") {
        // debugger;
        vm.GetBase64String(y.value);
      }
      var Quantity = parseFloat(vm.FormSchema[2].Data[1].value == "" ? 0 : vm.FormSchema[2].Data[1].value);
      var unitPrice = parseFloat(vm.FormSchema[2].Data[2].value == "" ? 0 : vm.FormSchema[2].Data[2].value);
      //var assetCost= vm.FormSchema[2].Data[3].value;
      if (y.name == "quantity") {
        ////debugger;
        if (parseFloat(y.value) > 0 && unitPrice > 0) {
          var assetCost = parseFloat(y.value) * parseFloat(unitPrice);
          vm.FormSchema[2].Data[3].value = assetCost.toFixed(3);
        } else {
          vm.FormSchema[2].Data[3].value = "0.000";
        }
      }
      // if (y.name == "unit_price") {
      //     ////debugger;
      //     if (parseFloat(y.value) > 0 && Quantity>0 ) {
      //         ////debugger;
      //         var assetCost = parseFloat(y.value) * parseFloat(Quantity);
      //         vm.FormSchema[2].Data[3].value = assetCost.toFixed(3);
      //     } else {
      //         vm.FormSchema[2].Data[3].value = "0.000";
      //     }
      // } 
      // if (y.name == "asset_cost" ) {
      //     ////debugger;
      //     if (parseFloat(y.value) > 0 &&  Quantity>0 && unitPrice > 0) {
      //         var assetCost = parseFloat(unitPrice) * parseFloat(Quantity);
      //         vm.FormSchema[2].Data[3].value = assetCost.toFixed(3);
      //     } else {
      //         vm.FormSchema[2].Data[3].value = "0.000";
      //     }
      // } 
    },

    GetBase64String: function (evt) {
      try {
        // debugger;
        var vm = this;
        var f = evt[0]; // FileList object
        // var f = evt.target.files[0]; // FileList object
        var reader = new FileReader();
        let fileObj = {};
        // Closure to capture the file information.
        reader.onload = function (theFile) {
          return function (e) {
            var binaryData = e.target.result;
            //Converting Binary Data to base 64
            var base64StringEncoded = window.btoa(binaryData);
            //showing file converted to base64
            var fileName = f.name;
            vm.fileName = fileName;
            var n = fileName.lastIndexOf(".");
            var extensionName = fileName.substring(n + 1, fileName.length);
            vm.fileExt += "." + extensionName;
            var attachemnetMime = '{"ContentType":"' + f.type + '","Size":"' + f.size + '","Extension":"' + extensionName + '"}';
            var fileSize = f.size;
            vm.fileSize = fileSize;
            fileObj.attachement_mime = attachemnetMime, fileObj.fileName = fileName, fileObj.base64String = base64StringEncoded, fileObj.fileSize = f.size, fileObj.contentType = f.type, fileObj.ModuleName = 'Asset', fileObj.SubModuleCode = 'Manage_Products';
            vm.fileMulitpleData.push(fileObj);
          };
        }(f);
        // Read in the image file as a data URL.
        reader.readAsBinaryString(f);
      } catch (ex) {}
    },
    onDeleteSelectedFiles: function () {
      //debugger
      this.$delete(this.FormSchema[4].Data[0].config, 'showSelectedFiles');
    },
    OnDeplymentType(event, field) {
      field.value = event.target.getAttribute('data-value');
      console.log(event.target.getAttribute('data-value'));
    },
    async AssetCatalogueListing() {
      var vm = this;
      vm.isLoading = true;
      var prams = `pageSize=${vm.PageSize}&pageNum=${vm.PageNumber}&sortBy=${vm.SortBy}&sortExp=${vm.SortExp}&${vm.searchCondition}`;
      await DataService["a" /* default */].AssetCatalogueListing(prams).then(response => {
        if (response.data.length > 0) {
          vm.count = vm.count + 1;
          vm.SetupProgresText = 'Completed';
        } else {
          vm.SetupProgress = 0;
        }
        vm.isLoading = false;
      });
    },
    GetProgress() {
      var vm = this;
      if (vm.count == 1) {
        vm.SetupProgress = 33.33;
      } else if (vm.count == 2) {
        vm.SetupProgress = 66.66;
      } else if (vm.count == 3) {
        vm.SetupProgress = 100;
      }
    },
    BackButton() {
      var vm = this;
      vm.SkipTab(2);
    },
    SkipTab: function (s) {
      var vm = this;
      vm.step = s;
      vm.CurrentTab = s;
    },
    AdvancedSetupFields() {
      debugger;
      var vm = this;
      if (vm.popupCondition == 'setup') {
        vm.FormSchema[0].Data[5].visibility = false;
        vm.FormSchema[2].Data[0].visibility = false;
        vm.step = 1;
        vm.buttons[1].isVisible = false;
        vm.buttons[0].isVisible = true;
        vm.buttons[3].isVisible = false;
        vm.buttons[4].isVisible = true;
      }
    },
    async GetTagsByModuleI() {
      var vm = this;
      await DataService["a" /* default */].GetTagsByModuleId('moduleName=Asset').then(function (response) {
        vm.TagsArray = JSON.parse(response.data).data;
        vm.TagsArray.forEach((itm, index) => {
          vm.FormSchema[0].Data[5].config.options.push({
            name: itm.TAG_NAME,
            value: itm.TAG_ID
          });
        });
      });
    },
    HideShowDeployProductFields(ev) {
      debugger;
      var vm = this;
      if (ev == true) {
        if (vm.popupCondition == 'setup') {
          vm.FormSchema[2].Data[0].visibility = false;
          vm.FormSchema[3].Data[0].visibility = true;
        } else {
          vm.FormSchema[2].Data[0].visibility = true;
          vm.FormSchema[3].Data[0].visibility = false;
        }
        vm.FormSchema[4].Data[0].visibility = true;
        vm.FormSchema[4].Data[1].visibility = true;
        vm.FormSchema[4].Data[2].visibility = true;
        vm.FormSchema[4].Data[3].visibility = true;
      } else {
        if (vm.popupCondition == 'setup') {
          vm.FormSchema[2].Data[0].visibility = false;
          vm.FormSchema[3].Data[0].visibility = false;
        } else {
          vm.FormSchema[2].Data[0].visibility = false;
          vm.FormSchema[3].Data[0].visibility = false;
        }
        vm.FormSchema[4].Data[0].visibility = false;
        vm.FormSchema[4].Data[1].visibility = false;
        vm.FormSchema[4].Data[2].visibility = false;
        vm.FormSchema[4].Data[3].visibility = false;
      }
    },
    onSubmit: function (btnType) {
      var vm = this;
      vm.$refs.AddProduct.validate().then(result => {
        if (result) {
          vm.isLoading = true;
          var CustomFieldArray = vm.$refs.AddProductForm.ConvertDynamicFormObjToCustomFieldObj(vm.FormSchema);
          CustomFieldArray.forEach((item, index) => {
            if (item.field_name == 'type') {
              if (item.field_value == true) {
                item.field_value = 1;
              } else {
                item.field_value = 2;
              }
            }
            if (item.field_name == 'create_unique_name_list') {
              if (item.field_value == true) {
                item.field_value = 1;
              } else {
                item.field_value = 0;
              }
            }
            if (item.field_name == 'location_id') {
              item.field_value = vm.TreeValue;
            }
            if (item.field_name == 'unit_price') {
              if (vm.FormSchema[2].Data[2].value > 0) {
                item.field_value = vm.FormSchema[2].Data[2].value;
              } else {
                item.field_value = 0;
              }
            }
            if (item.field_name == 'asset_cost') {
              item.field_value = vm.FormSchema[2].Data[3].value;
            }
            if (item.field_name === 'tag_id') {
              const tagIdArray = item.field_value;
              tagIdArray.forEach(tagObject => {
                tagObject.tagId = tagObject.value; // Assuming 'value' holds the ID
              });

              const tagIdString = tagIdArray.map(tagObject => tagObject.tagId).join(',');
              item.field_value = tagIdString;
            }
          });
          var obj = {
            data: CustomFieldArray,
            moduleCode: "Asset",
            subModuleCode: "Manage_Product",
            attachmentData: vm.fileMulitpleData.length > 0 ? vm.fileMulitpleData : null
          };
          //debugger;
          DataService["a" /* default */].IsDuplicateAssetCatalog(JSON.stringify(obj)).then(function (response) {
            //debugger;
            if (response.data.isSave) {
              let newItem = {
                field_name: 'item_code',
                field_value: response.data.itemCode
              };
              obj.data.push(newItem);
              DataService["a" /* default */].SaveDynamicForm(JSON.stringify(obj)).then(function (response) {
                //debugger;                       
                if (response != null && response.data != null && response.data[0].Status == "Success") {
                  vm.ShowAlert(vm.$t("Product has been Saved Successfully"), "success", vm.$t('Alert'));
                  // vm.ShowAlert(vm.$t("ProductSave", [vm.$t("Product")]), "success", true, vm.$t("Alert"));                            
                  vm.close();
                  if (btnType.name == 'SaveAndNew') {
                    vm.close();
                    setTimeout(() => {
                      if (vm.popupCondition == '') {
                        vm.$parent.OpenModelAddProduct();
                      } else {
                        vm.$parent.showadvancesettingpopup(vm.popupCondition);
                      }
                    }, 400);
                    vm.isLoading = false;
                  }
                } else {
                  vm.ShowAlert(vm.$t("ErrorWhileSaving", [vm.$t("Product")]), "danger", true, vm.$t("Alert"));
                  if (vm.popupCondition == 'setup') {
                    vm.$parent.ShowAddProduct = false;
                  } else {
                    vm.$parent.FetchData();
                    //vm.getForm();
                  }

                  vm.isLoading = false;
                }
              });
            } else {
              vm.ShowAlert(vm.$t("AlreadyExistRec"), "danger", true, vm.$t("Alert"));
              vm.isLoading = false;
            }
          });
        }
      });
    },
    setFile: function (e) {
      var vm = this;
      for (let index = 0; index < e.target.files.length; index++) {
        const element = e.target.files[index];
        vm.file.push(element);
      }
    },
    isDeployProduct() {
      var vm = this;
      vm.FormSchema[3].Data[0].isVisible = true;
    },
    GetAssetCost(event, value) {
      var vm = this;
      var Quantity = parseFloat(vm.FormSchema[2].Data[1].value == "" ? 0 : vm.FormSchema[2].Data[1].value);
      var unitPrice = parseFloat(value);
      if (value.length > 5) {
        vm.FormSchema[2].Data[2].value = value.slice(0, 5);
        vm.ShowAlert(vm.$t("The Unit Price field may not be greater than 5 characters"), "failure", vm.$t('Alert'));
      }
      if (unitPrice > 0 && Quantity > 0) {
        var assetCost = parseFloat(unitPrice) * parseFloat(Quantity);
        vm.FormSchema[2].Data[3].value = assetCost.toFixed(3);
      } else {
        vm.FormSchema[2].Data[3].value = "0.000";
      }
    },
    GetUnitPrice(val) {
      var vm = this;
      var Quantity = parseFloat(vm.FormSchema[2].Data[1].value == "" ? 0 : vm.FormSchema[2].Data[1].value);
      var unitPrice = parseFloat(vm.FormSchema[2].Data[2].value == "" ? 0 : vm.FormSchema[2].Data[2].value);
      if (Quantity > 0 && unitPrice > 0) {
        var assetCost = parseFloat(unitPrice) * parseFloat(Quantity);
        vm.FormSchema[2].Data[3].value = assetCost.toFixed(3);
      } else {
        vm.FormSchema[2].Data[3].value = "0.000";
      }
    },
    UploadFile(event) {
      var vm = this;
      vm.fileUploaded = event.target.files[0];
    },
    removeTag: function (tagId) {
      var vm = this;
      vm.confirmR(vm.$t('ConfirmRemoveTag'), true, vm.$t("Delete"), function () {
        var tagIndex = vm.tagData.findIndex(x => x.TAG_ID === tagId);
        if (tagIndex > -1) {
          vm.tagData.splice(tagIndex, 1);
        }
      });
    },
    AddLocation() {
      var vm = this;
      vm.IsDeployment = true;
      vm.ShowAddLocation = true;
    },
    // async GetLocationByCompanyId() {
    //     ////debugger
    //     var vm = this;
    //     vm.isLoading = true;
    //     vm.LocationData = [];
    //     var params = `reqForm=`
    //     await DataService.GetLocationByCompanyId(params)
    //         .then(function (response) {
    //             ////debugger
    //             vm.FindalLocationArray = [];
    //             vm.LocationData = JSON.parse(response.data).data;
    //             //var json =vm.MakeNormalArray(response.data).data;
    //             vm.LocationData.forEach((value) => {
    //                 var CheckIfExist = vm.FindalLocationArray.filter(function (el) {
    //                     return el.COMPANY_LOCATION_ID == value.COMPANY_LOCATION_ID;
    //                 });
    //                 if (CheckIfExist.length == 0) {
    //                     if (value.PARENT_LOCATION_ID == null) {
    //                         let locationId = value.COMPANY_LOCATION_ID
    //                         let rslt = vm.getChildLocation(locationId, value, JSON.parse(response.data).data)
    //                         vm.FindalLocationArray.push(rslt)
    //                     }
    //                 }
    //             });
    //             // (vm.FormSchema)[4].Data[0].config.options = vm.FindalLocationArray;
    //             vm.options = vm.FindalLocationArray;
    //         });

    //     if (vm.LocationData.length > 0) {
    //         vm.count = vm.count + 1;
    //         vm.SetupProgresText = 'Completed';
    //     } else {
    //         vm.SetupProgress = 0;
    //     }
    //     vm.isLoading = false;
    // },
    GetLocationByCompanyId: async function () {
      var vm = this;
      var url = `reqForm=assetassignment`;
      await DataService["a" /* default */].GetLocationByuserId(url).then(response => {
        vm.FindalLocationArray = [];
        if (typeof vm.$route.params.reqForm != 'undefined' && (vm.$route.params.reqForm != 'pendingRequest' || vm.GetParentDetails == '' || vm.GetParentDetails == null)) {
          vm.TreeValue = response.data.data[0].COMPANY_LOCATION_ID;
        } else {
          vm.TreeValue = null;
        }
        response.data.data.forEach(value => {
          var CheckIfExist = vm.FindalLocationArray.filter(function (el) {
            return el.COMPANY_LOCATION_ID == value.COMPANY_LOCATION_ID;
          });
          if (CheckIfExist.length == 0) {
            if (value.PARENT_LOCATION_ID == null) {
              let locationId = value.COMPANY_LOCATION_ID;
              let rslt = vm.getChildLocation(locationId, value, response.data.data);
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
    // getChildLocation: function (locationId, currentItem, data) {
    //     let ths = this;
    //     let treeArray = {};
    //     treeArray = {
    //         id: currentItem.COMPANY_LOCATION_ID,
    //         label: currentItem.LOCATION_NAME
    //     }
    //     let retrunArray = treeArray;
    //     var childArray = data.filter(function (el) {
    //         return el.PARENT_LOCATION_ID == locationId;
    //     });
    //     let finalChildArray = [];
    //     childArray.forEach((value) => {
    //         let ChildfolderId = value.COMPANY_LOCATION_ID
    //         var CheckIfExist1 = finalChildArray.filter(function (el) {
    //             return el.COMPANY_LOCATION_ID == value.COMPANY_LOCATION_ID;
    //         });
    //         if (CheckIfExist1.length == 0) {
    //             var CheckIfExist = data.filter(function (el) {
    //                 return el.PARENT_LOCATION_ID == ChildfolderId;
    //             });
    //             if (CheckIfExist != null && CheckIfExist.length > 0) {
    //                 let rslt = ths.getChildLocation(ChildfolderId, value, data);
    //                 finalChildArray.push(rslt);
    //             } else {
    //                 treeArray = {
    //                     id: `${value.COMPANY_LOCATION_ID}`,
    //                     label: `${value.LOCATION_NAME}`
    //                 }
    //                 finalChildArray.push(treeArray);
    //             }
    //         }
    //     });
    //     retrunArray.children = finalChildArray;
    //     return retrunArray;
    // },
    OpenAddTagPopup() {
      var vm = this;
      vm.ShowAddProduct = true;
      $("#modelAddProduct").modal('show');
      setTimeout(function () {
        $("#modelAddProduct").modal('show');
        setTimeout(function () {
          vm.SetBootstraptoolTip();
        }, 200);
      }, 1000);
      vm.FromAddProduct = true;
      vm.IsTagNamePopup = true;
    },
    // async GetBarcodeType() {
    //     var vm = this;
    //     vm.isLoading = true;
    //     var url = `BarcodeTypeId=`
    //     await DataService.GetBarcodetype(url).then(response => {
    //         vm.BarcodeType = JSON.parse(response.data.result);
    //         vm.BarcodeType.forEach((itm, index) => {
    //             (vm.FormSchema)[0].Data[2].config.options.push({
    //                 name: itm.BARCODE_TYPE,
    //                 value: itm.BARCODE_TYPE_ID
    //             })
    //         })
    //         vm.isLoading = false;
    //     })
    // },
    // async GetAssetType() {
    //     ////debugger;
    //     var vm = this;
    //     (vm.FormSchema)[0].Data[0].config.options = [];
    //     vm.isLoading = true;
    //     var url = `type=ITEMCODE&issueTo=&locationId=`;
    //     await DataService.GetAssetTypeCustom(url).then(response => {
    //         vm.AssetType = JSON.parse(response.data);
    //         vm.AssetType.forEach((itm, index) => {
    //             (vm.FormSchema)[0].Data[0].config.options.push({
    //                 name: itm.ASSETTYPE,
    //                 value: itm.ASSETID
    //             })
    //         })
    //         vm.isLoading = false;
    //     })
    //     if (vm.AssetType.length > 0) {
    //         vm.count = vm.count + 1;
    //         vm.SetupProgresText = 'Completed';
    //     } else {
    //         vm.SetupProgress = 0;
    //     }
    // },
    close() {
      //debugger;  
      var vm = this;
      if (vm.FromPage != 'AdvanceSettings') {
        if (vm.popupCondition == 'setup') {
          vm.$parent.showpopup = false;
        } else {
          $("#modelAddProduct").modal("hide");
          $("body").removeClass("modal-open");
          $(".modal-backdrop").remove();
          vm.$parent.FetchData();
          vm.$parent.ShowAddProduct = false;
        }
      }
    },
    closeAddProduct() {
      //debugger
      var vm = this;
      if (vm.popupCondition == 'setup') {
        vm.$parent.showpopup = false;
      } else {
        vm.$parent.ShowAddProduct = false;
      }
    },
    CloseTagPopup() {
      var vm = this;
      vm.getForm();
      //vm.$refs.AddProductForm.UpdateKeyValue();
      vm.IsTagNamePopup = false;
    },
    async CloseLocationPopup() {
      var vm = this;
      vm.LocationData = [];
      vm.FindalLocationArray = [];
      // (vm.FormSchema)[4].Data[0].config.options = [];
      await vm.GetLocationByCompanyId();
      setTimeout(function () {
        vm.HideShowDeployProductFields(true);
      }, 500);
      vm.isLoading = false;
      vm.ShowAddLocation = false;
    },
    async EnableAssetManagement() {
      ////debugger;
      let url = `moduleName=Asset&configkey=CanSeeAssetManagement`;
      await DataService["a" /* default */].EnableAssetManagement(url).then(response => {
        this.IsEnableAssetManagement = response.data;
      });
    },
    OpenAddProductTypePopup() {
      var vm = this;
      vm.FromPage = 'AddProduct';
      vm.ShowAddProductType = true;
    },
    ClosePopupProductType() {
      var vm = this;
      vm.ShowAddProductType = false;
      vm.getForm();
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/AddProduct.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_AddProductvue_type_script_lang_js_ = (AddProductvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Modal/AddProduct.vue?vue&type=style&index=0&id=3e2bb417&prod&lang=css&
var AddProductvue_type_style_index_0_id_3e2bb417_prod_lang_css_ = __webpack_require__("8e1a");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Modal/AddProduct.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Modal_AddProductvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AddProduct = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "218e":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ccc5");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("82a5f370", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "3041":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MoadalAdvanceSetup_vue_vue_type_style_index_0_id_686b1e71_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a9da");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MoadalAdvanceSetup_vue_vue_type_style_index_0_id_686b1e71_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MoadalAdvanceSetup_vue_vue_type_style_index_0_id_686b1e71_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "59aa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdvancedSetting_vue_vue_type_style_index_0_id_11b73625_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b34b");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdvancedSetting_vue_vue_type_style_index_0_id_11b73625_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdvancedSetting_vue_vue_type_style_index_0_id_11b73625_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "651d":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".c100.green .bar,.c100.green .fill{border-color:#8bc34a!important}.clr-1{color:#da9c49}.box-inner1{width:50px;height:45px;background:#da9c49}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "65b2":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".EnableSections .green{color:green;margin-right:5px}.conversation-date .slider.round{border-radius:34px;border:none!important}.conversation-date .slider.round span{border:none}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "6708":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".newtab_des .nav-link.left-menu.active{background:#e0f2ff!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "7437":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/AddLocation.vue?vue&type=template&id=5d638a0c&lang=en&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "border p-3"
  }, [_vm.DataLoaded ? _c('dynamic-form', {
    ref: "AddlocationRef",
    attrs: {
      "lang": "en",
      "buttons": _vm.buttons,
      "schema": _vm.FormSchema
    },
    on: {
      "OnSubmit": _vm.onSubmit
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/AddLocation.vue?vue&type=template&id=5d638a0c&lang=en&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// EXTERNAL MODULE: ./node_modules/tg-controls_cli/dist/myLib.common.js
var myLib_common = __webpack_require__("240d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/AddLocation.vue?vue&type=script&lang=js&



/* harmony default export */ var AddLocationvue_type_script_lang_js_ = ({
  props: {
    popupCondition: {
      type: Boolean,
      required: true
    }
  },
  components: {
    'tree-view': myLib_common["TreeSelectField"]
  },
  data() {
    return {
      FormSchema: [{
        layoutType: "triple",
        Data: [{
          astype: "TreeSelectField",
          label: this.$t('ParentLocation'),
          name: "Location",
          value: null,
          placeholder: "Select Location",
          config: {
            options: []
          },
          validationRules: {
            "required": false
          }
        }, {
          astype: "TextField",
          label: this.$t('LocationName'),
          name: "LocationName",
          value: "",
          placeholder: "",
          validationRules: {
            "required": true,
            max: 250
          }
        }, {
          astype: "SelectField",
          label: this.$t('Status'),
          name: "Status",
          value: "",
          placeholder: "",
          validationRules: {
            "required": true,
            max: 250
          },
          config: {
            options: [],
            onChange: () => {}
          }
        }, {
          astype: "TextField",
          label: this.$t('AddressLine1'),
          name: "AddressLine1",
          value: "",
          placeholder: "",
          validationRules: {
            "required": true,
            max: 250
          }
        }, {
          astype: "TextField",
          label: this.$t('City'),
          name: "City",
          value: "",
          placeholder: "",
          validationRules: {
            "required": true,
            max: 250
          }
        }, {
          astype: "SelectField",
          label: this.$t('Country'),
          name: "Country",
          value: "",
          placeholder: "",
          validationRules: {
            "required": true,
            max: 250
          },
          config: {
            // option_request_url: process.env.VUE_APP_COMMON_API + '/Common/GetDDLData?moduleName=CRM&type=COUNTRIES',
            // token: this.GetUserInfo.Token,
            options: [],
            onChange: this.onChangeDropdown
          }
        }, {
          astype: "SelectField",
          label: this.$t('State'),
          name: "State",
          value: "",
          placeholder: "",
          config: {
            options: []
          }
        }, {
          astype: "TextField",
          label: this.$t('PostalCode'),
          name: "PostalCode",
          value: "",
          placeholder: ""
        }, {
          astype: "TextField",
          label: this.$t('Email'),
          name: "Email",
          value: "",
          placeholder: ""
        }, {
          astype: "TextField",
          label: this.$t('Phone1'),
          name: "Phone1",
          value: "",
          placeholder: ""
        }, {
          astype: "TextField",
          label: this.$t('Phone2'),
          name: "Phone2",
          value: "",
          placeholder: ""
        }, {
          astype: "TextField",
          label: this.$t('LocationCode'),
          name: "LocationCode",
          value: "",
          placeholder: ""
        }, {
          astype: "SelectField",
          label: this.$t('Tag'),
          name: "Tag",
          value: "",
          placeholder: "",
          config: {
            options: []
          }
        }]
      }],
      buttons: [{
        type: "button",
        class: "btn btn-secondary",
        text: "Skip",
        onClick: this.Skip,
        isVisible: false
      }, {
        type: "submit",
        class: "btn btn-success",
        text: "<i class='fa fa-save pr-2'></i>Save & New",
        name: "SaveAndNew",
        isVisible: false
      }, {
        type: "submit",
        class: "btn btn-success",
        text: "<i class='fa fa-save pr-2'></i>Save & Next",
        name: "SaveAndNext",
        isVisible: false
      }, {
        type: "submit",
        class: "btn btn-success",
        text: "<i class='fa fa-save pr-2'></i>Save",
        name: 'Save'
      }, {
        type: "button",
        class: "btn btn-danger",
        text: "<i class='fa fa-close pr-2'></i>Cancel",
        onClick: this.ClosePopup
      }],
      myObj: [],
      LocationData: [],
      CountryData: [],
      StatusData: [{
        name: 'Active',
        value: 1001
      }, {
        name: 'Inactive',
        value: 1002
      }],
      StateData: [],
      TagData: [],
      CreatedAt: "",
      CreatedBy: "",
      ModifiedAt: "",
      ModifiedBy: "",
      DataLoaded: 0,
      UserId: '',
      SetupProgresText: ''
    };
  },
  created: async function () {
    var vm = this;
    await vm.GetLocationByCompanyId();
    vm.GetStatusDDL();
    vm.GetCountryDDL();
    await vm.GetTagsByModuleId();
    await vm.AdvancedSetupFields();
    vm.UserId = vm.GetUserInfo.ID;
    // setTimeout(() => {
    //     vm.$refs.AddlocationRef.UpdateKeyValue();
    // }, 200);       
    vm.DataLoaded = 1;
  },
  methods: {
    Skip: function () {
      var vm = this;
      vm.$parent.SkipTab(2);
    },
    async AdvancedSetupFields() {
      var vm = this;
      if (vm.popupCondition == 'setup') {
        vm.FormSchema[0].Data[6].visibility = false;
        vm.FormSchema[0].Data[7].visibility = false;
        vm.FormSchema[0].Data[8].visibility = false;
        vm.FormSchema[0].Data[9].visibility = false;
        vm.FormSchema[0].Data[10].visibility = false;
        vm.FormSchema[0].Data[11].visibility = false;
        vm.FormSchema[0].Data[12].visibility = false;
        vm.buttons[0].isVisible = true;
        vm.buttons[1].isVisible = true;
        vm.buttons[2].isVisible = true;
        vm.buttons[3].isVisible = false;
        vm.buttons[4].isVisible = false;
      }
    },
    GetCountryDDL: function () {
      var url = `moduleName=CRM&type=COUNTRIES`;
      DataService["a" /* default */].GetCountryDDL(url).then(result => {
        result.data.DATA.forEach(item => {
          this.FormSchema[0].Data[5].config.options.push({
            name: `${item.name}`,
            value: `${item.value}`
          });
          this.$refs.AddlocationRef.UpdateKeyValue();
        });
      });
    },
    async GetTagsByModuleId() {
      var vm = this;
      var params = `modulename=Asset`;
      await DataService["a" /* default */].GetTagsByModuleId(params).then(function (response) {
        vm.TagData = JSON.parse(response.data);
        vm.TagData.data.forEach((itm, index) => {
          vm.FormSchema[0].Data[12].config.options.push({
            name: itm.TAG_NAME,
            value: itm.TAG_ID
          });
        });
        console.log(' GetTagsByModuleId  call end');
      });
    },
    onChangeDropdown(evt) {
      var vm = this;
      var params = `countryId=${evt.target.value}`;
      DataService["a" /* default */].GetStateListwithIDByCountryId(params).then(function (response) {
        vm.StateData = JSON.parse(response.data).data;
        vm.StateData = vm.StateData.map(item => {
          return {
            name: item.name,
            value: item.state_id
          };
        });
        $.each(vm.FormSchema, function (index, item) {
          $.each(item.Data, function (index, element) {
            if (element.name == 'State') {
              element.value = '';
              element.config.options = vm.StateData;
            }
          });
        });
        vm.$refs.AddlocationRef.UpdateKeyValue();
      });
    },
    async GetLocationByCompanyId() {
      var vm = this;
      vm.isLoading = true;
      var params = `reqForm=`;
      await DataService["a" /* default */].GetLocationByCompanyId(params).then(function (response) {
        vm.FindalLocationArray = [];
        vm.LocationData = JSON.parse(response.data).data;
        //var json =vm.MakeNormalArray(response.data).data;
        vm.LocationData.forEach(value => {
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
      if (vm.LocationData.length > 0) {
        vm.count = vm.count + 1;
        vm.SetupProgresText = 'Completed';
      } else {
        vm.SetupProgress = 0;
      }
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
    GetStatusDDL() {
      var vm = this;
      vm.StatusData.forEach((item, index) => {
        vm.FormSchema[0].Data[2].config.options.push({
          name: item.name,
          value: item.value
        });
      });
    },
    ClosePopup() {
      var vm = this;
      vm.$parent.CloseLocationPopup();
    },
    onSubmit(e, val) {
      var vm = this;
      var propValues = e;
      var url = `LocationName=${e.LocationName}&LocationId=0`;
      DataService["a" /* default */].LocationExist(url).then(function (response) {
        vm.LocationId = response.data.result;
        if (response.data.result > 0) {
          vm.ShowAlert(vm.$t('Location already exist', [vm.$t('Location')]), "warning", true, vm.$t("Alert"));
        } else {
          let myObj = {
            LocationId: vm.LocationId,
            LocationName: e.LocationName,
            Country: parseInt(e.Country),
            State: e.State,
            Address1: e.AddressLine1,
            Address2: "",
            City: e.City,
            PinCode: e.PostalCode,
            Email: e.Email,
            Phone1: e.Phone1,
            Phone2: e.Phone2,
            CreatedAt: null,
            CreatedBy: vm.UserId,
            ModifiedAt: null,
            ModifiedBy: vm.UserId,
            StatusId: e.Status,
            State_id: e.State == "" ? null : e.State,
            LocationCode: e.LocationCode,
            ParentLocationId: e.Location == "" ? null : e.Location,
            TagId: e.Tag.length <= 0 ? null : Array.prototype.map.call(e.Tag, function (item) {
              return item.value;
            }).join(","),
            CampusId: "",
            ClientId: 1
          };
          debugger;
          var jsonObj = JSON.stringify(myObj);
          DataService["a" /* default */].SaveUpdateLocation(myObj).then(function (response) {
            if (val == 'SaveAndNew') {
              if (response.data == '1' || response.data == null) {
                vm.ShowAlert(vm.$t('Location has been added successfully ', [vm.$t('Location')]), "success", true, vm.$t("Alert"));
                vm.resetForm();
              }
            } else if (val == 'SaveAndNext') {
              if (response.data == '1' || response.data == null) {
                vm.ShowAlert(vm.$t('Location has been added successfully ', [vm.$t('Location')]), "success", true, vm.$t("Alert"));
                vm.$parent.SkipTab(2);
              }
            } else if (val == 'Save') {
              if (response.data == '1' || response.data == null) {
                vm.ShowAlert(vm.$t('Location has been added successfully ', [vm.$t('Location')]), "success", true, vm.$t("Alert"));
              }
            } else if (response.data == '2') {
              vm.ShowAlert(vm.$t('Location has been updated successfully', [vm.$t('Location')]), "success", true, vm.$t("Alert"));
            } else if (response.data == '0') {
              vm.ShowAlert(vm.$t('unknown error', [vm.$t('Location')]), "success", true, vm.$t("Alert"));
            }

            // confuse in data resposne but saved location  
            else if (response.data == null) {
              vm.ShowAlert(vm.$t('Location has been added successfully', [vm.$t('Location')]), "success", true, vm.$t("Alert"));
            }
            vm.$parent.CloseLocationPopup();
          });
        }
      });
    },
    resetForm() {
      this.FormSchema[0].Data.forEach(field => {
        if (field.astype == 'TreeSelectField') {
          field.value = null;
        } else {
          field.value = "";
          field.validationRules.required = true;
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/AddLocation.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_AddLocationvue_type_script_lang_js_ = (AddLocationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Modal/AddLocation.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Modal_AddLocationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AddLocation = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "8ada":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("0626");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("5679746b", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "8c76":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AdvancedSetup/AdvancedSetting.vue?vue&type=template&id=11b73625&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "page-action"
  }, [_c('div', {
    staticClass: "container-fluid mb-4 p-0"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12 padding-t_8"
  }, [_c('div', {
    staticClass: "theme-primary partition p-actions-expand tablehead"
  }, [_c('span', {
    staticClass: "p-name text-white"
  }, [_vm._v(_vm._s(_vm.$t('AdvanceSetup')))]), _c('span', {
    staticClass: "p-actions float-right"
  }, [_c('RouterLink', {
    staticClass: "p-action-btn text-white float-right",
    attrs: {
      "to": '/AssetCatalog/Index',
      "title": "",
      "id": "backtolist",
      "data-original-title": _vm.$t('BacktoList')
    }
  }, [_c('em', {
    staticClass: "fa fa-angle-double-left pr-2"
  }), _c('br'), _vm._v(_vm._s(_vm.$t('BacktoList')) + " ")])], 1)])])])]), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12 col-md-10 mx-auto"
  }, [_c('div', {
    staticClass: "row flex-row"
  }, _vm._l(_vm.SectionData, function (itm, index) {
    return _c('div', {
      key: index,
      staticClass: "col-md-12 col-lg-6"
    }, [_c('a', {
      staticClass: "doc-setup short-menu-item bg-white px-0 py-4 my-2 position-relative",
      class: `${itm.divclass}`,
      attrs: {
        "onmousedown": "return false;",
        "href": "javascript:void(0)",
        "data-toggle-tooltip": "tooltip",
        "data-original-title": "Setup CRM"
      },
      on: {
        "click": function ($event) {
          return _vm.showadvancesettingpopup(itm.name);
        }
      }
    }, [_c('div', {
      staticClass: "col-md-9 col-lg-8 col-xl-9 col-sm-9 col-9"
    }, [itm.name == 'Configuration' ? _c('div', {
      staticClass: "col-md-1 col-lg-2 col-xl-1 col-sm-1 col-2"
    }, [_c('span', {
      staticClass: "px-2"
    }, [_c('i', {
      class: `${itm.iClass}`,
      attrs: {
        "aria-hidden": "true"
      }
    })])]) : _vm._e(), _c('div', {
      staticClass: "col-md-9 col-lg-8 col-xl-9 col-sm-9 col-9",
      attrs: {
        "id": "Userlist"
      }
    }, [_c('h5', {
      staticClass: "card-title font-16 mb-0"
    }, [_vm._v(_vm._s(_vm.$t(itm.htext)))]), _c('p', {
      staticClass: "card-text font-12 pr-5"
    }, [_vm._v(_vm._s(_vm.$t(itm.ptext)))])]), itm.iSetupProgress ? _c('div', {
      staticClass: "progress smaller mr-5 my-2 ml-3"
    }, [_c('div', {
      staticClass: "progress-bar progress-bar-primary progress-bar px-0 text-center memoryused",
      class: `${itm.progressColor}`,
      staticStyle: {
        "font-weight": "500",
        "font-size": "14px"
      },
      style: {
        width: itm.SetupProgress == '' ? 6 : itm.SetupProgress + '%'
      },
      attrs: {
        "id": "divConsumendStorage",
        "title": itm.SetupProgress
      }
    }, [_vm._v(_vm._s(itm.SetupProgress == '' ? 0 : itm.SetupProgress) + "%")])]) : _vm._e()]), itm.ibarprogress ? _c('div', {
      staticClass: "col-md-2"
    }, [_c('span', {
      staticClass: "barprogress"
    }, [_c('div', {
      staticClass: "Task"
    }, [_c('div', {
      staticClass: "c100 small",
      class: [itm.progressColor, 'p' + itm.SetupProgress]
    }, [_c('span', [_vm._v(_vm._s(itm.SetupProgress) + "%")]), _vm._m(0, true)])])])]) : _vm._e(), _vm._m(1, true)])]);
  }), 0), _c('div', {
    staticClass: "col-md-12 col-lg-6 d-none",
    on: {
      "click": function ($event) {
        return _vm.openenablesectionpopup('EnableSections');
      }
    }
  }, [_c('a', {
    staticClass: "doc-setup short-menu-item bg-white px-0 py-4 my-2 position-relative",
    attrs: {
      "onmousedown": "return false;",
      "href": "javascript:void(0)"
    },
    on: {
      "click": function ($event) {
        return _vm.showadvancesettingpopup('EnableDisableSection');
      }
    }
  }, [_vm._m(2), _c('div', {
    staticClass: "col-md-9 col-lg-8 col-xl-9 col-sm-9 col-9"
  }, [_c('h5', {
    staticClass: "card-title font-16 mb-0"
  }, [_vm._v(_vm._s(_vm.$t('EnableDisableSections')))]), _c('p', {
    staticClass: "card-text font-12 pr-5"
  }, [_vm._v(_vm._s(_vm.$t('EnableSections.')))])]), _vm._m(3)])])])]), _vm._m(4), _c('div', {
    staticClass: "col-12 col-md-10 m-auto"
  }, [_c('div', {
    staticClass: "listing"
  }, [_vm._m(5), _c('div', {
    staticClass: "row card-view bg-border custom-box-width"
  }, [_c('div', {
    staticClass: "col-sm-12 col-lg-3 col-xl-2 col-md-12 div-cardView",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('div', {
    staticClass: "box docattachment py-5 my-3 border",
    attrs: {
      "role": "button",
      "data-v-3630b19d": ""
    }
  }, [_c('i', {
    staticClass: "nxt-page-icon fa fa-share-square-o",
    attrs: {
      "aria-hidden": "true"
    },
    on: {
      "click": function ($event) {
        return _vm.RedirectToLinks('ManageTags');
      }
    }
  }), _c('div', {
    staticClass: "box-inner4 d-flex align-items-center m-auto",
    attrs: {
      "data-v-3630b19d": ""
    },
    on: {
      "click": function ($event) {
        return _vm.RedirectToLinks('ManageTags');
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-tags font-20 m-auto text-white",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _c('div', {
    staticClass: "col-md-12 font-14 mt-2 text-center",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('a', {
    attrs: {
      "href": "javascritp:void(0)"
    },
    on: {
      "click": function ($event) {
        return _vm.RedirectToLinks('ManageTags');
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('ManageTags')))])])])]), _c('div', {
    staticClass: "col-sm-12 col-lg-3 col-xl-2 col-md-12 div-cardView",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('div', {
    staticClass: "box docattachment py-5 my-3 border",
    attrs: {
      "role": "button",
      "data-v-3630b19d": ""
    }
  }, [_c('i', {
    staticClass: "nxt-page-icon fa fa-share-square-o",
    attrs: {
      "aria-hidden": "true"
    },
    on: {
      "click": function ($event) {
        return _vm.RedirectToLinks('EmailTemplate');
      }
    }
  }), _c('div', {
    staticClass: "box-inner4 d-flex align-items-center m-auto",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('i', {
    staticClass: "fa fa-envelope font-20 m-auto text-white",
    attrs: {
      "aria-hidden": "true"
    },
    on: {
      "click": function ($event) {
        return _vm.RedirectToLinks('EmailTemplate');
      }
    }
  })]), _c('div', {
    staticClass: "col-md-12 font-14 mt-2 text-center",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('a', {
    attrs: {
      "href": "javascritp:void(0)"
    },
    on: {
      "click": function ($event) {
        return _vm.RedirectToLinks('EmailTemplate');
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('EmailTemplate')))])])])]), _c('div', {
    staticClass: "col-sm-12 col-lg-3 col-xl-2 col-md-12 div-cardView",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('div', {
    staticClass: "box docattachment py-5 my-3 border",
    attrs: {
      "role": "button",
      "data-v-3630b19d": ""
    }
  }, [_c('i', {
    staticClass: "nxt-page-icon fa fa-share-square-o",
    attrs: {
      "aria-hidden": "true"
    },
    on: {
      "click": function ($event) {
        return _vm.RedirectToLinks('Location');
      }
    }
  }), _c('div', {
    staticClass: "box-inner4 d-flex align-items-center m-auto",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('i', {
    staticClass: "fa fa-map-marker font-20 m-auto text-white",
    attrs: {
      "aria-hidden": "true"
    },
    on: {
      "click": function ($event) {
        return _vm.RedirectToLinks('Location');
      }
    }
  })]), _c('div', {
    staticClass: "col-md-12 font-14 mt-2 text-center",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('a', {
    attrs: {
      "href": "javascritp:void(0)"
    },
    on: {
      "click": function ($event) {
        return _vm.RedirectToLinks('Location');
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('Location')))])])])]), _c('div', {
    staticClass: "col-sm-12 col-lg-3 col-xl-2 col-md-12 div-cardView",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('div', {
    staticClass: "box docattachment py-5 my-3 border",
    attrs: {
      "role": "button",
      "data-v-3630b19d": ""
    }
  }, [_c('i', {
    staticClass: "nxt-page-icon fa fa-share-square-o",
    attrs: {
      "aria-hidden": "true"
    },
    on: {
      "click": function ($event) {
        return _vm.RedirectToLinks('ProductContainer');
      }
    }
  }), _c('div', {
    staticClass: "box-inner4 d-flex align-items-center m-auto",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('i', {
    staticClass: "fa fa-tags font-20 m-auto text-white",
    attrs: {
      "aria-hidden": "true"
    },
    on: {
      "click": function ($event) {
        return _vm.RedirectToLinks('ProductContainer');
      }
    }
  })]), _c('div', {
    staticClass: "row mx-0 align-items-end",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('div', {
    staticClass: "col-md-12 font-14 mt-2 text-center",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('a', {
    attrs: {
      "href": "javascritp:void(0)"
    },
    on: {
      "click": function ($event) {
        return _vm.RedirectToLinks('ProductContainerList');
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('ProductContainerList')))])])])])]), _c('div', {
    staticClass: "col-sm-12 col-lg-3 col-xl-2 col-md-12 div-cardView",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('div', {
    staticClass: "box docattachment py-5 my-3 border",
    attrs: {
      "role": "button",
      "data-v-3630b19d": ""
    }
  }, [_c('i', {
    staticClass: "nxt-page-icon fa fa-share-square-o",
    attrs: {
      "aria-hidden": "true"
    },
    on: {
      "click": function ($event) {
        return _vm.RedirectToLinks('ProductType');
      }
    }
  }), _c('div', {
    staticClass: "box-inner4 d-flex align-items-center m-auto",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('i', {
    staticClass: "fa fa-tags font-20 m-auto text-white",
    attrs: {
      "aria-hidden": "true"
    },
    on: {
      "click": function ($event) {
        return _vm.RedirectToLinks('ProductType');
      }
    }
  })]), _c('div', {
    staticClass: "col-md-12 font-14 mt-2 text-center",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('a', {
    attrs: {
      "href": "javascritp:void(0)"
    },
    on: {
      "click": function ($event) {
        return _vm.RedirectToLinks('ProductType');
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('ProductType')))])])])]), _c('div', {
    staticClass: "col-sm-12 col-lg-3 col-xl-2 col-md-12 div-cardView",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('div', {
    staticClass: "box docattachment py-5 my-3 border",
    attrs: {
      "role": "button",
      "data-v-3630b19d": ""
    }
  }, [_c('i', {
    staticClass: "nxt-page-icon fa fa-share-square-o",
    attrs: {
      "aria-hidden": "true"
    },
    on: {
      "click": function ($event) {
        return _vm.RedirectToLinks('Status');
      }
    }
  }), _c('div', {
    staticClass: "box-inner4 d-flex align-items-center m-auto",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('i', {
    staticClass: "fa fa-tags font-20 m-auto text-white",
    attrs: {
      "aria-hidden": "true"
    },
    on: {
      "click": function ($event) {
        return _vm.RedirectToLinks('Status');
      }
    }
  })]), _c('div', {
    staticClass: "col-md-12 font-14 mt-2 text-center",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('a', {
    attrs: {
      "href": "javascritp:void(0)"
    },
    on: {
      "click": function ($event) {
        return _vm.RedirectToLinks('Status');
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('Status')))])])])])])])]), _vm.IsshowConfiguration == true ? _c('AdvanceSettingModal', {
    attrs: {
      "popupCondition": _vm.popupConfiguration,
      "IsVisible": _vm.IsshowConfiguration
    }
  }) : _vm._e(), _vm.showpopup == true ? _c('addProduct', {
    attrs: {
      "popupCondition": _vm.popupCondition,
      "IsVisible": _vm.showpopup
    }
  }) : _vm._e(), _vm.EnableSectionspop ? _c('EnableSections', {
    on: {
      "closeenablesectionpopup": _vm.closeenablesectionpopup
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "slice"
  }, [_c('div', {
    staticClass: "bar"
  }), _c('div', {
    staticClass: "fill"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', {
    staticClass: "tickarrowposition d-flex align-items-center"
  }, [_c('i', {
    staticClass: "fa fa-angle-right m-auto text-dark font-20",
    attrs: {
      "aria-hidden": "true"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-md-1 col-lg-2 col-xl-1 col-sm-1 col-2"
  }, [_c('span', {
    staticClass: "px-2"
  }, [_c('i', {
    staticClass: "fa fa-puzzle-piece font-28",
    attrs: {
      "aria-hidden": "true"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', {
    staticClass: "tickarrowposition d-flex align-items-center"
  }, [_c('i', {
    staticClass: "fa fa-angle-right m-auto text-dark font-20",
    attrs: {
      "aria-hidden": "true"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-12 text-center float-left"
  }, [_c('h5', {
    staticClass: "my-4"
  }, [_vm._v("More Settings")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "row"
  }, [_c('h6', {
    staticClass: "ml-3 mb-0"
  }, [_vm._v("Asset Management Setting")])]);
}];

// CONCATENATED MODULE: ./src/views/AdvancedSetup/AdvancedSetting.vue?vue&type=template&id=11b73625&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/AdvancedSettings.vue?vue&type=template&id=2e26b7ed&
var AdvancedSettingsvue_type_template_id_2e26b7ed_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_c('loader', {
    attrs: {
      "is-visible": _vm.isLoading
    }
  }), _c('div', {
    staticClass: "modal my-popups right fade",
    attrs: {
      "id": "modelAddProduct",
      "role": "dialog"
    }
  }, [_c('div', {
    staticClass: "modal-dialog",
    attrs: {
      "role": "document"
    }
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('div', {
    staticClass: "modal-header mheader-user"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function ($event) {
        return _vm.closeAddProduct();
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-times",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _c('h4', {
    staticClass: "modal-title",
    attrs: {
      "id": "myModalLabel"
    }
  }, [_vm._v(_vm._s(_vm.$t("AddItem")))]), _vm.step == 3 ? _c('span', {
    staticClass: "user-guide"
  }, [_c('a', {
    staticClass: "ancuserguide",
    attrs: {
      "data-toggle": "collapse",
      "href": "#collapseReplyUG",
      "role": "button",
      "aria-expanded": "false",
      "aria-controls": "collapseExample"
    }
  }, [_vm._v(" User Guide")]), _c('div', {
    staticClass: "divancuserguide collapse overflow-auto",
    attrs: {
      "id": "collapseReplyUG"
    }
  }, [_c('div', {
    staticClass: "custom-scrollbar-js",
    attrs: {
      "id": "scrollbarreplyuserguideMangeView"
    }
  }, [_c('div', {
    staticClass: "con",
    domProps: {
      "innerHTML": _vm._s(_vm.$t('UserGuideAddProduct'))
    }
  })])])]) : _vm._e()]), _c('div', {
    staticClass: "modal-body bg-white"
  }, [_vm.popupCondition == 'setup' ? _c('div', {
    staticClass: "left-menu-tab new_tab"
  }, [_c('div', {
    staticClass: "col-md-12 pb-0"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 float-left"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-8 pr-0 font-weight-medium"
  }, [_vm._v(_vm._s(_vm.$t('CompleteYourProfile')))]), _c('div', {
    staticClass: "col-4 pl-0 text-right"
  }, [_c('small', [_c('i', {
    staticClass: "fa fa-check-circle pr-1",
    class: {
      'text-success': _vm.SetupProgresText == 'Completed',
      'text-muted': _vm.SetupProgresText !== 'Completed'
    }
  }), _vm._v(" " + _vm._s(_vm.SetupProgresText) + " ")])])]), _c('div', {
    staticClass: "progress smaller my-2"
  }, [_c('div', {
    staticClass: "progress-bar progress-bar-primary progress-bar px-0 text-center memoryused",
    class: `${_vm.progressBarColor}`,
    style: `width: ${_vm.SetupProgress}%; font-weight:500; font-size:14px`,
    attrs: {
      "id": "divConsumendStorage",
      "title": _vm.SetupProgress
    }
  }, [_vm._v(_vm._s(_vm.SetupProgress) + "% ")])]), _c('div', {
    staticClass: "level_info my-2 d-block float-left w-100",
    staticStyle: {
      "height": "auto"
    }
  }, [_c('ul', [_c('li', [_c('b', {
    attrs: {
      "id": "divConsumendStorage"
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('Progress')) + " " + _vm._s(_vm.step) + " of 3")])])])])])])])]), _c('div', {
    staticClass: "mt-0",
    staticStyle: {
      "max-height": "calc(100vh - 2px)"
    },
    attrs: {
      "id": "divscrollsetuptabs"
    }
  }, [_c('ul', {
    staticClass: "nav nav-pills flex-column left-tab responivecustomtab lefttabiconfix newtab_des"
  }, [_c('li', {
    staticClass: "nav-item FourthScreen",
    on: {
      "click": function ($event) {
        return _vm.SkipTab(1);
      }
    }
  }, [_c('a', {
    staticClass: "nav-link left-menu",
    class: {
      'active': _vm.step == 1
    },
    staticStyle: {
      "cursor": "pointer"
    }
  }, [_c('i', {
    staticClass: "fa fa-random pr-2 text-muted",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "font-14"
  }, [_vm._v(_vm._s(_vm.$t('SetUpLocation')))])])]), _c('li', {
    staticClass: "nav-item SecondScreen",
    on: {
      "click": function ($event) {
        return _vm.SkipTab(2);
      }
    }
  }, [_c('a', {
    staticClass: "nav-link left-menu",
    class: {
      'active': _vm.step == 2
    },
    staticStyle: {
      "cursor": "pointer"
    }
  }, [_c('i', {
    staticClass: "fa fa fa-cog pr-2 text-muted",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "font-14"
  }, [_vm._v(_vm._s(_vm.$t('SetUpProductType')))])])]), _c('li', {
    staticClass: "nav-item ThirdScreen",
    on: {
      "click": function ($event) {
        return _vm.SkipTab(3);
      }
    }
  }, [_c('a', {
    staticClass: "nav-link left-menu",
    class: {
      'active': _vm.step == 3
    },
    staticStyle: {
      "cursor": "pointer"
    }
  }, [_c('i', {
    staticClass: "fa fa-plus pr-2 text-muted",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm.IsClientStoragesCopmleted ? _c('i', {
    staticClass: "fa fa-check-circle font-18 pr-2 text-success",
    attrs: {
      "aria-hidden": "true"
    }
  }) : _vm._e(), _c('span', {
    staticClass: "font-14"
  }, [_vm._v(_vm._s(_vm.$t('AddDeployeItem')))])])])])])]) : _vm._e(), _c('div', {
    staticClass: "right-content"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.popupCondition == 'setup',
      expression: "popupCondition == 'setup'"
    }],
    staticClass: "col-md-12 p-0"
  }, [_vm.step == 1 ? _c('div', {
    staticClass: "col-md-12 p-0"
  }, [_c('div', {
    staticClass: "tab-content"
  }, [_c('div', {
    staticClass: "tab-pane active show",
    attrs: {
      "id": "step1"
    }
  }, [_c('section', {
    staticClass: "page-action w-100"
  }, [_c('div', {
    staticClass: "container-fluid p-0"
  }, [_c('div', {
    staticClass: "col-md-12 p-0s addpopuplocation"
  }, [_c('AddLocationPopup', {
    attrs: {
      "popupCondition": _vm.popupCondition
    }
  })], 1)])])])])]) : _vm._e(), _vm.step == 2 ? _c('div', {
    staticClass: "col-md-12 p-0"
  }, [_c('div', {
    staticClass: "tab-content"
  }, [_c('div', {
    staticClass: "tab-pane active show",
    attrs: {
      "id": "step2"
    }
  }, [_c('section', {
    staticClass: "page-action w-100"
  }, [_c('div', {
    staticClass: "container-fluid p-0"
  }, [_c('div', {
    staticClass: "col-md-12 p-0"
  }, [_c('AddProductType', {
    attrs: {
      "popupCondition": _vm.popupCondition
    }
  })], 1)])])])])]) : _vm._e(), _vm.step == 3 ? _c('div', {
    staticClass: "col-md-12 p-0"
  }, [_c('div', {
    staticClass: "tab-content"
  }, [_c('div', {
    staticClass: "tab-pane active show",
    attrs: {
      "id": "step3"
    }
  }, [_c('section', {
    staticClass: "page-action w-100"
  }, [_c('div', {
    staticClass: "container-fluid p-0"
  }, [_c('div', {
    staticClass: "col-md-12 p-0"
  }, [_vm.ShowAddProduct ? _c('AddProduct', {
    attrs: {
      "popupCondition": _vm.popupCondition,
      "FromPage": _vm.FromPage
    }
  }) : _vm._e()], 1)])])])])]) : _vm._e(), _vm.step == 3 ? _c('div', {
    staticClass: "right-content row flex-row-reverse mt-3"
  }, [_c('div', {
    staticClass: "col-lg-12 text-left"
  }, [_c('div', {
    staticClass: "py-2 mandatory"
  }, [_vm._v(" " + _vm._s(_vm.$t('MandatoryString')) + " ")])])]) : _vm._e()])])])])])]), _vm.ShowAddLocation ? _c('div', {
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
  }, [_vm._v(" " + _vm._s(_vm.$t('Location')) + " ")]), _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-original-title": "Close"
    },
    on: {
      "click": function ($event) {
        return _vm.CloseLocationPopup();
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-times"
  })])]), _c('AddLocationPopup')], 1)])])]) : _vm._e(), _vm.IsTagNamePopup ? _c('TagNamePopup', {
    attrs: {
      "FromAddProduct": _vm.FromAddProduct
    }
  }) : _vm._e(), _vm.ShowAddProductType ? _c('div', {
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
      "FromPage": _vm.FromPage
    }
  })], 1)])])]) : _vm._e()], 1);
};
var AdvancedSettingsvue_type_template_id_2e26b7ed_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/AdvancedSettings.vue?vue&type=template&id=2e26b7ed&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// EXTERNAL MODULE: ./src/components/Modal/TagNamePopup.vue + 4 modules
var TagNamePopup = __webpack_require__("56f6");

// EXTERNAL MODULE: ./src/components/Modal/AddLocation.vue + 4 modules
var AddLocation = __webpack_require__("7437");

// EXTERNAL MODULE: ./src/components/Modal/AddProductType.vue + 4 modules
var AddProductType = __webpack_require__("f6fa");

// EXTERNAL MODULE: ./src/components/Modal/AddProduct.vue + 4 modules
var AddProduct = __webpack_require__("191f");

// EXTERNAL MODULE: ./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.cjs.js
var vue_treeselect_cjs = __webpack_require__("ca17");
var vue_treeselect_cjs_default = /*#__PURE__*/__webpack_require__.n(vue_treeselect_cjs);

// EXTERNAL MODULE: ./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.css
var vue_treeselect = __webpack_require__("542c");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/AdvancedSettings.vue?vue&type=script&lang=js&








/* harmony default export */ var AdvancedSettingsvue_type_script_lang_js_ = ({
  props: {
    popupCondition: {
      type: String,
      required: false
    },
    FromPage: {
      type: String,
      required: false
    }
  },
  components: {
    TagNamePopup: TagNamePopup["a" /* default */],
    AddLocationPopup: AddLocation["a" /* default */],
    AddProductType: AddProductType["default"],
    AddProduct: AddProduct["a" /* default */],
    'tree-view': vue_treeselect_cjs_default.a
  },
  data() {
    return {
      options: [],
      TreeValue: null,
      isLoading: false,
      AssetType: [],
      BarcodeType: [],
      userLoggedIn2: false,
      IsDeployment: false,
      IsTagNamePopup: false,
      LocationData: [],
      ShowAddLocation: false,
      ShowAddProductType: false,
      FromAddProduct: false,
      DeploymentType: '',
      IsEnableAssetManagement: false,
      fileUploaded: '',
      tagData: [],
      isCheckDeployItem: '',
      DeployProductValue: false,
      StaticObj: [{
        layoutType: "single",
        Data: [{
          astype: "TreeSelectField",
          label: this.$t('Location'),
          name: "Location",
          value: null,
          placeholder: "Select Location",
          config: {
            options: [],
            showAddIcon: true,
            onAddButtonClick: this.AddLocation
          },
          validationRules: {
            "required": true
          }
        }]
      }],
      FormSchema: [],
      buttons: [{
        type: "submit",
        class: "btn btn-secondary",
        text: "<i class='fa fa-angle-double-left pr-2'></i>Back",
        onClick: this.BackButton,
        isVisible: false
      }, {
        type: "submit",
        class: "btn btn-success",
        text: "<i class='fa fa-save pr-2'></i>Save And Close",
        name: "SaveAndClose",
        onClick: this.onSubmit
      }, {
        type: "submit",
        class: "btn btn-success",
        text: "<i class='fa fa-save pr-2'></i>Save And New",
        name: "SaveAndNew",
        onClick: this.onSubmit
      }, {
        type: "button",
        class: "btn btn-danger",
        text: "<i class='fa fa-close pr-2'></i>Cancel",
        onClick: this.close,
        isVisible: true
      }, {
        type: "button",
        class: "btn btn-success",
        text: "<i class='fa fa-check' aria-hidden='true'></i> Finish",
        isVisible: false
      }],
      DataLoaded: 0,
      TagsArray: [],
      tags: [],
      file: [],
      CurrentTab: 1,
      step: 3,
      SetupProgress: 0,
      count: 0,
      PageSize: 10,
      PageNumber: 1,
      SortBy: '',
      SortExp: '',
      IsClientStoragesCopmleted: false,
      UserType: '',
      FromPage: 'AdvanceSettings',
      fileMulitpleData: [],
      AllowedFileType: [],
      currency: '',
      SaveTags: [],
      ShowAddProduct: false
    };
  },
  watch: {
    CurrentTab: {
      handler(newValue, oldValue) {
        if (newValue == 3) {
          this.FromPage = 'AdvanceSettings';
          this.popupCondition = "setup";
          this.ShowAddProduct = true;
        }
      }
    }
  },
  async created() {
    debugger;
    var vm = this;
    vm.step = 1;
    await vm.EnableAssetManagement();
    vm.Currency = this.GetUserInfo.Currency;
    // await vm.getForm(); 
    // await vm.AssetCatalogueListing();
    // await  vm.GetProgress();      
    await vm.GetLocationByCompanyId();
    vm.DataLoaded = 1;
  },
  // mounted() {
  //     $('#modelAddProduct').modal({
  //         backdrop: 'static',
  //         keyboard: false
  //     })
  // },    
  methods: {
    // getForm: async function (id) {
    //     ////debugger
    //     var vm = this;
    //     vm.isLoading = true;
    //     var url = `recordId=0&moduleName=Asset&subModuleCode=MANAGE_PRODUCT&usefor=Add`;
    //     await DataService.GetDynamicForm(url).then(function (response) {
    //         ////debugger
    //         if (response != null && response.data != null) {
    //             ////debugger;
    //             //ths.isMapFeature = response.data.isFsmLocating;
    //             if (typeof(response.data.configdata)!='undefined' && response.data.configdata.length >0) {
    //                 var configResult = response.data.configdata;
    //                 configResult.forEach(function (row) {
    //                     if (row.CORE_CONFIG_KEY == "TicketDisallowedFileTypes") {
    //                         vm.AllowedFileType = row.CONFIG_DATA_VALUE;

    //                     }
    //                 });
    //             }
    //             var assetData  =response.data.data;
    //             vm.FormSchema = vm.$refs.AddProductForm.ConvertCustomFieldIntoDynamicFormObj(response.data.data);

    //             ////debugger;
    //             assetData.forEach(item=>{
    //             vm.FormSchema.forEach((group, gi) => {

    //                 group.Data.forEach((field, fi) => {
    //                                      //           debugger;

    //                     // if (group.group_name == "DEPLOY PRODUCT" || group.group_name == "DEPLOY PRODUCT DETAILS") {
    //                     //     group.visibility = false;
    //                     //     if (field.name == "deployement_type" || field.name == "location_id" || field.name == "quantity" || field.name == "unit_price" || field.name == "asset_cost" || field.name == "status_id") {
    //                     //         field.visibility = false;
    //                     //     }
    //                     // }

    //                     if (field.name == "deployement_type" || field.name == "location_id" || field.name == "quantity" || field.name == "unit_price" || field.name == "asset_cost" || field.name == "status_id") {
    //                         field.visibility = false;
    //                         group.visibility = false;
    //                     }
    //                     if (field.name == "quantity")
    //                     { 
    //                         if(item.name=='quantity'){
    //                             field.is_required = true; 
    //                             field.validationRules= {'required':item.is_required, max: item.length}
    //                         }
    //                     }
    //                     if(field.name == "unit_price") {
    //                         field.astype = 'SlotField';
    //                         field.is_required = false; 
    //                         if(item.name=='unit_price'){
    //                             field.validationRules= {'required':item.is_required, max: item.length}
    //                         }
    //                     }                          
    //                     if(field.name == "asset_cost") {
    //                         field.astype = 'SlotField';                                
    //                         //field.validationRules= {'required':item.is_required, max: item.length}         

    //                         //field.validationRules= "max:5"
    //                     }
    //                     if (field.name == "location_id") { 
    //                         field.config.showAddIcon = true;
    //                         field.config.onAddButtonClick = vm.AddLocation;                              
    //                         field.astype = 'SlotField';
    //                         field.is_required = false;

    //                     }

    //                     if (field.name == "deployement_type") {
    //                         ////debugger;
    //                         field.value = "1";
    //                         //field.display_order = 2;
    //                     }
    //                     if (field.name == "type") {
    //                         ////debugger;
    //                         field.value = false;
    //                         //field.display_order = 1
    //                     }

    //                     if (field.name == "create_unique_name_list") {
    //                         field.value = "0";
    //                         //field.required
    //                     }
    //                     if (field.name == "asset_type_id") {
    //                         field.config.showAddIcon = true;
    //                         field.config.onAddButtonClick = vm.OpenAddProductTypePopup;
    //                     }
    //                     if (field.name == "tag_id") {
    //                         field.mode = "tag"
    //                         field.is_required = false;
    //                         field.config.showAddIcon = true;
    //                         field.config.onAddButtonClick = vm.OpenAddTagPopup;
    //                     }
    //                     if (field.name == "type") {
    //                         field.value = '0'
    //                         field.is_required = true;
    //                     }
    //                     if (field.name == "status_id") {
    //                         field.value = '1001'
    //                         field.visibility = false;
    //                     }

    //                     else if (field.name == "attachment_path") {
    //                         field.showLabel = false;
    //                         let fileTypeList = vm.AttachmentDisallowedFileType(vm.AllowedFileType);
    //                         if (fileTypeList != null) {
    //                             debugger;
    //                             field.config =
    //                             {
    //                                 maxSize: 5,
    //                                 //accept: fileTypeList,
    //                                 //onChange: ths.GetBase64String,
    //                                 onDeleteSelectedFiles: vm.onDeleteSelectedFiles,
    //                                 accept: [{
    //                                     fileType: 'jpg', // Image types
    //                                     iconClass: 'fa-file-image-o' // Icon class for images
    //                                 },
    //                                 {
    //                                     fileType: 'jpeg', // Image types
    //                                     iconClass: 'fa-file-image-o' // Icon class for images
    //                                 },
    //                                 {
    //                                     fileType: 'png', // Image types
    //                                     iconClass: 'fa-file-image-o' // Icon class for images
    //                                 },
    //                                 // Add more image, document, text, and video types as needed
    //                             ],
    //                                 showAddIcon: false,
    //                                 onAddButtonClick: '',
    //                                 multiple: true
    //                             }
    //                        }

    //                     }                           
    //                     // if (field.name == "attachment_path") {
    //                     //     field.showLabel = false;
    //                     //     field.config = {
    //                     //         maxSize: 5,
    //                     //         accept: [{
    //                     //                 fileType: 'jpg', // Image types
    //                     //                 iconClass: 'fa-file-image-o' // Icon class for images
    //                     //             },
    //                     //             {
    //                     //                 fileType: 'jpeg', // Image types
    //                     //                 iconClass: 'fa-file-image-o' // Icon class for images
    //                     //             },
    //                     //             {
    //                     //                 fileType: 'png', // Image types
    //                     //                 iconClass: 'fa-file-image-o' // Icon class for images
    //                     //             },
    //                     //             // Add more image, document, text, and video types as needed
    //                     //         ],
    //                     //         //onChange: ths.GetBase64String,
    //                     //         showAddIcon: false,
    //                     //         onAddButtonClick: '',
    //                     //         multiple: false
    //                     //     }
    //                     // }
    //                     field.config.onChange = vm.onChangeEventForFields;
    //                 });
    //             });
    //         })
    //             // ths.FormSchema.push({
    //             //     layoutType: "single",
    //             //     group_name: 'Address',
    //             //     visibility: false,
    //             //     Data: [{
    //             //         astype: "SlotField",
    //             //         name: "addresFields",
    //             //         value: "",
    //             //         visibility: false,
    //             //         showLabel: false
    //             //     }]
    //             // });

    //             vm.isLoading = false;
    //         }
    //     });
    // },
    // onChangeEventForFields: function (x, y, z) {
    //     ////debugger
    //     let vm = this;
    //     if (y.name == "type") {
    //         vm.FormSchema.forEach((group, gi) => {
    //             ////debugger;
    //             group.Data.forEach((field, fi) => {
    //                 ////debugger;
    //                 if (y.value) {
    //                     // if (group.group_name == "DEPLOY PRODUCT" || group.group_name == "DEPLOY PRODUCT DETAILS") {
    //                     //     group.visibility = true;
    //                     //     if (field.name == "deployement_type" || field.name == "location_id" || field.name == "quantity" || field.name == "unit_price" || field.name == "asset_cost") {
    //                     //         field.visibility = true;
    //                     //     }
    //                     // }
    //                         if (field.name == "deployement_type" || field.name == "location_id" || field.name == "quantity" || field.name == "unit_price" || field.name == "asset_cost") {
    //                             field.visibility = true;
    //                             group.visibility = true;
    //                         }
    //                 } else {
    //                     // if (group.group_name == "DEPLOY PRODUCT" || group.group_name == "DEPLOY PRODUCT DETAILS") {
    //                     //     if (group.group_name == "DEPLOY PRODUCT DETAILS") {
    //                     //         group.visibility = false;
    //                     //     }
    //                     //     if (field.name == "deployement_type" || field.name == "location_id" || field.name == "quantity" || field.name == "unit_price" || field.name == "asset_cost") {
    //                     //         field.visibility = false;
    //                     //     }
    //                     // }
    //                         if (field.name == "deployement_type" || field.name == "location_id" || field.name == "quantity" || field.name == "unit_price" || field.name == "asset_cost") {
    //                             field.visibility = false;
    //                             group.visibility = false;
    //                         }
    //                 }
    //             });
    //         });
    //     }
    //     if (y.name == "attachment_path") {
    //        // debugger;
    //             vm.GetBase64String(y.value);
    //     } 
    //     var Quantity= parseFloat(vm.FormSchema[2].Data[1].value =="" ? 0:vm.FormSchema[2].Data[1].value);
    //     var unitPrice= parseFloat(vm.FormSchema[2].Data[2].value=="" ? 0:vm.FormSchema[2].Data[2].value);
    //     //var assetCost= vm.FormSchema[2].Data[3].value;
    //     if (y.name == "quantity" ) {
    //         ////debugger;
    //         if (parseFloat(y.value) > 0 && unitPrice >0) {
    //             var assetCost = parseFloat(y.value) * parseFloat(unitPrice);
    //             vm.FormSchema[2].Data[3].value = assetCost.toFixed(3);
    //         } else {
    //             vm.FormSchema[2].Data[3].value = "0.000";
    //         }
    //     }
    //     // if (y.name == "unit_price") {
    //     //     ////debugger;
    //     //     if (parseFloat(y.value) > 0 && Quantity>0 ) {
    //     //         ////debugger;
    //     //         var assetCost = parseFloat(y.value) * parseFloat(Quantity);
    //     //         vm.FormSchema[2].Data[3].value = assetCost.toFixed(3);
    //     //     } else {
    //     //         vm.FormSchema[2].Data[3].value = "0.000";
    //     //     }
    //     // } 
    //     // if (y.name == "asset_cost" ) {
    //     //     ////debugger;
    //     //     if (parseFloat(y.value) > 0 &&  Quantity>0 && unitPrice > 0) {
    //     //         var assetCost = parseFloat(unitPrice) * parseFloat(Quantity);
    //     //         vm.FormSchema[2].Data[3].value = assetCost.toFixed(3);
    //     //     } else {
    //     //         vm.FormSchema[2].Data[3].value = "0.000";
    //     //     }
    //     // } 

    // },
    // GetBase64String: function (evt) {
    //     try {
    //        // debugger;
    //         var vm = this;
    //         var f = evt[0]; // FileList object
    //         // var f = evt.target.files[0]; // FileList object
    //         var reader = new FileReader();
    //         let fileObj = {};
    //         // Closure to capture the file information.
    //         reader.onload = (function (theFile) {
    //             return function (e) {
    //                 var binaryData = e.target.result;
    //                 //Converting Binary Data to base 64
    //                 var base64StringEncoded = window.btoa(binaryData);
    //                 //showing file converted to base64
    //                 var fileName = f.name;
    //                 vm.fileName = fileName;
    //                 var n = fileName.lastIndexOf(".");
    //                 var extensionName = fileName.substring(n + 1, fileName.length);
    //                 vm.fileExt += "." + extensionName;
    //                 var attachemnetMime = '{"ContentType":"' + f.type + '","Size":"' + f.size + '","Extension":"' + extensionName + '"}';
    //                 var fileSize = f.size;
    //                 vm.fileSize = fileSize;

    //                     fileObj.attachement_mime = attachemnetMime,
    //                     fileObj.fileName = fileName,
    //                     fileObj.base64String = base64StringEncoded,
    //                     fileObj.fileSize = f.size,
    //                     fileObj.contentType = f.type,
    //                     fileObj.ModuleName = 'Asset',
    //                     fileObj.SubModuleCode = 'Manage_Products'
    //                     vm.fileMulitpleData.push(fileObj);
    //             };
    //         })(f);
    //         // Read in the image file as a data URL.
    //         reader.readAsBinaryString(f);

    //     }
    //     catch (ex) {
    //     }
    // },
    // onDeleteSelectedFiles: function () {
    //     //debugger
    //     this.$delete(this.FormSchema[4].Data[0].config, 'showSelectedFiles');
    // },
    OnDeplymentType(event, field) {
      field.value = event.target.getAttribute('data-value');
      console.log(event.target.getAttribute('data-value'));
    },
    async AssetCatalogueListing() {
      var vm = this;
      vm.isLoading = true;
      var prams = `pageSize=${vm.PageSize}&pageNum=${vm.PageNumber}&sortBy=${vm.SortBy}&sortExp=${vm.SortExp}&${vm.searchCondition}`;
      await DataService["a" /* default */].AssetCatalogueListing(prams).then(response => {
        if (response.data.length > 0) {
          vm.count = vm.count + 1;
          vm.SetupProgresText = 'Completed';
        } else {
          vm.SetupProgress = 0;
        }
        vm.isLoading = false;
      });
    },
    GetProgress() {
      var vm = this;
      if (vm.count == 1) {
        vm.SetupProgress = 33.33;
      } else if (vm.count == 2) {
        vm.SetupProgress = 66.66;
      } else if (vm.count == 3) {
        vm.SetupProgress = 100;
      }
    },
    BackButton() {
      var vm = this;
      vm.SkipTab(2);
    },
    SkipTab: function (s) {
      var vm = this;
      vm.step = s;
      vm.CurrentTab = s;
    },
    AdvancedSetupFields() {
      debugger;
      var vm = this;
      if (vm.popupCondition == 'setup') {
        vm.FormSchema[0].Data[5].visibility = false;
        vm.FormSchema[2].Data[0].visibility = false;
        vm.step = 1;
        vm.buttons[1].isVisible = false;
        vm.buttons[0].isVisible = true;
        vm.buttons[3].isVisible = false;
        vm.buttons[4].isVisible = true;
      }
    },
    async GetTagsByModuleI() {
      var vm = this;
      await DataService["a" /* default */].GetTagsByModuleId('moduleName=Asset').then(function (response) {
        vm.TagsArray = JSON.parse(response.data).data;
        vm.TagsArray.forEach((itm, index) => {
          vm.FormSchema[0].Data[5].config.options.push({
            name: itm.TAG_NAME,
            value: itm.TAG_ID
          });
        });
      });
    },
    HideShowDeployProductFields(ev) {
      debugger;
      var vm = this;
      if (ev == true) {
        if (vm.popupCondition == 'setup') {
          vm.FormSchema[2].Data[0].visibility = false;
          vm.FormSchema[3].Data[0].visibility = true;
        } else {
          vm.FormSchema[2].Data[0].visibility = true;
          vm.FormSchema[3].Data[0].visibility = false;
        }
        vm.FormSchema[4].Data[0].visibility = true;
        vm.FormSchema[4].Data[1].visibility = true;
        vm.FormSchema[4].Data[2].visibility = true;
        vm.FormSchema[4].Data[3].visibility = true;
      } else {
        if (vm.popupCondition == 'setup') {
          vm.FormSchema[2].Data[0].visibility = false;
          vm.FormSchema[3].Data[0].visibility = false;
        } else {
          vm.FormSchema[2].Data[0].visibility = false;
          vm.FormSchema[3].Data[0].visibility = false;
        }
        vm.FormSchema[4].Data[0].visibility = false;
        vm.FormSchema[4].Data[1].visibility = false;
        vm.FormSchema[4].Data[2].visibility = false;
        vm.FormSchema[4].Data[3].visibility = false;
      }
    },
    // onSubmit: function (btnType) {            
    //     var vm = this;           
    //     vm.$refs.AddProduct.validate().then(result => {
    //         if (result) {
    //             vm.isLoading = true;
    //             var CustomFieldArray = vm.$refs.AddProductForm.ConvertDynamicFormObjToCustomFieldObj(vm.FormSchema);
    //             CustomFieldArray.forEach((item, index) => {
    //                 if (item.field_name == 'type') {
    //                     if (item.field_value == true) {
    //                         item.field_value = 1;
    //                     } else {
    //                         item.field_value = 2;
    //                     }
    //                 }
    //                 if (item.field_name == 'create_unique_name_list') {
    //                     if (item.field_value == true) {
    //                         item.field_value = 1;
    //                     } else {
    //                         item.field_value = 0;
    //                     }
    //                 }
    //                 if (item.field_name == 'location_id') {
    //                     item.field_value = vm.TreeValue;
    //                 }
    //                 if (item.field_name == 'unit_price') {
    //                     if(vm.FormSchema[2].Data[2].value > 0){
    //                         item.field_value = vm.FormSchema[2].Data[2].value;
    //                     }else{
    //                         item.field_value = 0;
    //                     }                            
    //                 }
    //                 if (item.field_name == 'asset_cost') {
    //                     item.field_value = vm.FormSchema[2].Data[3].value;
    //                 }                        
    //                 if (item.field_name === 'tag_id') {
    //                     const tagIdArray = item.field_value;                            
    //                     tagIdArray.forEach(tagObject => {                                
    //                         tagObject.tagId = tagObject.value; // Assuming 'value' holds the ID
    //                     });                            
    //                     const tagIdString = tagIdArray.map(tagObject => tagObject.tagId).join(',');                          
    //                     item.field_value = tagIdString;
    //                 }
    //             })

    //             var obj = {
    //                 data: CustomFieldArray,
    //                 moduleCode: "Asset",
    //                 subModuleCode: "Manage_Product",
    //                 attachmentData: vm.fileMulitpleData.length > 0 ? vm.fileMulitpleData : null
    //             }
    //             //debugger;
    //             DataService.IsDuplicateAssetCatalog(JSON.stringify(obj)).then(function (response) {
    //                 //debugger;
    //                 if(response.data.isSave){
    //                     let newItem = {
    //                         field_name: 'item_code',
    //                         field_value: response.data.itemCode
    //                     };
    //                     obj.data.push(newItem)
    //                     DataService.SaveDynamicForm(JSON.stringify(obj)).then(function (response) {
    //                         //debugger;                       
    //                         if (response != null && response.data != null && response.data[0].Status == "Success") {
    //                             vm.ShowAlert(vm.$t("Product has been Saved Successfully"), "success", vm.$t('Alert'));
    //                         // vm.ShowAlert(vm.$t("ProductSave", [vm.$t("Product")]), "success", true, vm.$t("Alert"));                            
    //                             vm.close();
    //                                 if(btnType.name=='SaveAndNew'){
    //                                 vm.close();
    //                                 setTimeout(() => {
    //                                     if (vm.popupCondition == '') {
    //                                         vm.$parent.OpenModelAddProduct();
    //                                     } else {
    //                                         vm.$parent.showadvancesettingpopup(vm.popupCondition);
    //                                     }                                    
    //                                 }, 400); 
    //                                 vm.isLoading=false;                      
    //                             }
    //                         } else {
    //                             vm.ShowAlert(vm.$t("ErrorWhileSaving", [vm.$t("Product")]), "danger", true, vm.$t("Alert"));
    //                             if (vm.popupCondition == 'setup') {
    //                                 vm.$parent.ShowAddProduct = false;
    //                             } else {
    //                                 vm.$parent.FetchData();
    //                                 //vm.getForm();
    //                             }
    //                             vm.isLoading=false;
    //                         }                
    //                     })
    //                 }
    //                 else{
    //                     vm.ShowAlert((vm.$t("AlreadyExistRec")), "danger", true, vm.$t("Alert"));
    //                     vm.isLoading=false;
    //                 }
    //             });  
    //         }
    //     });         

    // },

    setFile: function (e) {
      var vm = this;
      for (let index = 0; index < e.target.files.length; index++) {
        const element = e.target.files[index];
        vm.file.push(element);
      }
    },
    isDeployProduct() {
      var vm = this;
      vm.FormSchema[3].Data[0].isVisible = true;
    },
    GetAssetCost(event, value) {
      var vm = this;
      var Quantity = parseFloat(vm.FormSchema[2].Data[1].value == "" ? 0 : vm.FormSchema[2].Data[1].value);
      var unitPrice = parseFloat(value);
      if (value.length > 5) {
        vm.FormSchema[2].Data[2].value = value.slice(0, 5);
        vm.ShowAlert(vm.$t("The Unit Price field may not be greater than 5 characters"), "failure", vm.$t('Alert'));
      }
      if (unitPrice > 0 && Quantity > 0) {
        var assetCost = parseFloat(unitPrice) * parseFloat(Quantity);
        vm.FormSchema[2].Data[3].value = assetCost.toFixed(3);
      } else {
        vm.FormSchema[2].Data[3].value = "0.000";
      }
    },
    GetUnitPrice(val) {
      var vm = this;
      var Quantity = parseFloat(vm.FormSchema[2].Data[1].value == "" ? 0 : vm.FormSchema[2].Data[1].value);
      var unitPrice = parseFloat(vm.FormSchema[2].Data[2].value == "" ? 0 : vm.FormSchema[2].Data[2].value);
      if (Quantity > 0 && unitPrice > 0) {
        var assetCost = parseFloat(unitPrice) * parseFloat(Quantity);
        vm.FormSchema[2].Data[3].value = assetCost.toFixed(3);
      } else {
        vm.FormSchema[2].Data[3].value = "0.000";
      }
    },
    UploadFile(event) {
      var vm = this;
      vm.fileUploaded = event.target.files[0];
    },
    removeTag: function (tagId) {
      var vm = this;
      vm.confirmR(vm.$t('ConfirmRemoveTag'), true, vm.$t("Delete"), function () {
        var tagIndex = vm.tagData.findIndex(x => x.TAG_ID === tagId);
        if (tagIndex > -1) {
          vm.tagData.splice(tagIndex, 1);
        }
      });
    },
    AddLocation() {
      var vm = this;
      vm.IsDeployment = true;
      vm.ShowAddLocation = true;
    },
    // async GetLocationByCompanyId() {
    //     ////debugger
    //     var vm = this;
    //     vm.isLoading = true;
    //     vm.LocationData = [];
    //     var params = `reqForm=`
    //     await DataService.GetLocationByCompanyId(params)
    //         .then(function (response) {
    //             ////debugger
    //             vm.FindalLocationArray = [];
    //             vm.LocationData = JSON.parse(response.data).data;
    //             //var json =vm.MakeNormalArray(response.data).data;
    //             vm.LocationData.forEach((value) => {
    //                 var CheckIfExist = vm.FindalLocationArray.filter(function (el) {
    //                     return el.COMPANY_LOCATION_ID == value.COMPANY_LOCATION_ID;
    //                 });
    //                 if (CheckIfExist.length == 0) {
    //                     if (value.PARENT_LOCATION_ID == null) {
    //                         let locationId = value.COMPANY_LOCATION_ID
    //                         let rslt = vm.getChildLocation(locationId, value, JSON.parse(response.data).data)
    //                         vm.FindalLocationArray.push(rslt)
    //                     }
    //                 }
    //             });
    //             // (vm.FormSchema)[4].Data[0].config.options = vm.FindalLocationArray;
    //             vm.options = vm.FindalLocationArray;
    //         });

    //     if (vm.LocationData.length > 0) {
    //         vm.count = vm.count + 1;
    //         vm.SetupProgresText = 'Completed';
    //     } else {
    //         vm.SetupProgress = 0;
    //     }
    //     vm.isLoading = false;
    // },
    GetLocationByCompanyId: async function () {
      var vm = this;
      var url = `reqForm=assetassignment`;
      await DataService["a" /* default */].GetLocationByuserId(url).then(response => {
        vm.FindalLocationArray = [];
        if (typeof vm.$route.params.reqForm != 'undefined' && (vm.$route.params.reqForm != 'pendingRequest' || vm.GetParentDetails == '' || vm.GetParentDetails == null)) {
          vm.TreeValue = response.data.data[0].COMPANY_LOCATION_ID;
        } else {
          vm.TreeValue = null;
        }
        response.data.data.forEach(value => {
          var CheckIfExist = vm.FindalLocationArray.filter(function (el) {
            return el.COMPANY_LOCATION_ID == value.COMPANY_LOCATION_ID;
          });
          if (CheckIfExist.length == 0) {
            if (value.PARENT_LOCATION_ID == null) {
              let locationId = value.COMPANY_LOCATION_ID;
              let rslt = vm.getChildLocation(locationId, value, response.data.data);
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
    // getChildLocation: function (locationId, currentItem, data) {
    //     let ths = this;
    //     let treeArray = {};
    //     treeArray = {
    //         id: currentItem.COMPANY_LOCATION_ID,
    //         label: currentItem.LOCATION_NAME
    //     }
    //     let retrunArray = treeArray;
    //     var childArray = data.filter(function (el) {
    //         return el.PARENT_LOCATION_ID == locationId;
    //     });
    //     let finalChildArray = [];
    //     childArray.forEach((value) => {
    //         let ChildfolderId = value.COMPANY_LOCATION_ID
    //         var CheckIfExist1 = finalChildArray.filter(function (el) {
    //             return el.COMPANY_LOCATION_ID == value.COMPANY_LOCATION_ID;
    //         });
    //         if (CheckIfExist1.length == 0) {
    //             var CheckIfExist = data.filter(function (el) {
    //                 return el.PARENT_LOCATION_ID == ChildfolderId;
    //             });
    //             if (CheckIfExist != null && CheckIfExist.length > 0) {
    //                 let rslt = ths.getChildLocation(ChildfolderId, value, data);
    //                 finalChildArray.push(rslt);
    //             } else {
    //                 treeArray = {
    //                     id: `${value.COMPANY_LOCATION_ID}`,
    //                     label: `${value.LOCATION_NAME}`
    //                 }
    //                 finalChildArray.push(treeArray);
    //             }
    //         }
    //     });
    //     retrunArray.children = finalChildArray;
    //     return retrunArray;
    // },
    // OpenAddTagPopup() {
    //     var vm = this;
    //     vm.ShowAddProduct = true;
    //     $("#modelAddProduct").modal('show');
    //     setTimeout(function () {
    //         $("#modelAddProduct").modal('show');
    //         setTimeout(function () {
    //             vm.SetBootstraptoolTip();
    //         }, 200);
    //     }, 1000);
    //     vm.FromAddProduct = true
    //     vm.IsTagNamePopup = true;
    // },
    // async GetBarcodeType() {
    //     var vm = this;
    //     vm.isLoading = true;
    //     var url = `BarcodeTypeId=`
    //     await DataService.GetBarcodetype(url).then(response => {
    //         vm.BarcodeType = JSON.parse(response.data.result);
    //         vm.BarcodeType.forEach((itm, index) => {
    //             (vm.FormSchema)[0].Data[2].config.options.push({
    //                 name: itm.BARCODE_TYPE,
    //                 value: itm.BARCODE_TYPE_ID
    //             })
    //         })
    //         vm.isLoading = false;
    //     })
    // },
    // async GetAssetType() {
    //     ////debugger;
    //     var vm = this;
    //     (vm.FormSchema)[0].Data[0].config.options = [];
    //     vm.isLoading = true;
    //     var url = `type=ITEMCODE&issueTo=&locationId=`;
    //     await DataService.GetAssetTypeCustom(url).then(response => {
    //         vm.AssetType = JSON.parse(response.data);
    //         vm.AssetType.forEach((itm, index) => {
    //             (vm.FormSchema)[0].Data[0].config.options.push({
    //                 name: itm.ASSETTYPE,
    //                 value: itm.ASSETID
    //             })
    //         })
    //         vm.isLoading = false;
    //     })
    //     if (vm.AssetType.length > 0) {
    //         vm.count = vm.count + 1;
    //         vm.SetupProgresText = 'Completed';
    //     } else {
    //         vm.SetupProgress = 0;
    //     }
    // },
    close() {
      debugger;
      var vm = this;
      if (vm.popupCondition == 'setup') {
        vm.$parent.showpopup = false;
      } else {
        $("#modelAddProduct").modal("hide");
        $("body").removeClass("modal-open");
        $(".modal-backdrop").remove();
        vm.$parent.FetchData();
        vm.$parent.ShowAddProduct = false;
      }
    },
    closeAddProduct() {
      debugger;
      var vm = this;
      if (vm.popupCondition == 'setup') {
        vm.$parent.showpopup = false;
      } else {
        vm.$parent.ShowAddProduct = false;
      }
    },
    CloseTagPopup() {
      var vm = this;
      vm.getForm();
      //vm.$refs.AddProductForm.UpdateKeyValue();
      vm.IsTagNamePopup = false;
    },
    async CloseLocationPopup() {
      var vm = this;
      vm.LocationData = [];
      vm.FindalLocationArray = [];
      // (vm.FormSchema)[4].Data[0].config.options = [];
      await vm.GetLocationByCompanyId();
      setTimeout(function () {
        vm.HideShowDeployProductFields(true);
      }, 500);
      vm.isLoading = false;
      vm.ShowAddLocation = false;
    },
    async EnableAssetManagement() {
      ////debugger;
      let url = `moduleName=Asset&configkey=CanSeeAssetManagement`;
      await DataService["a" /* default */].EnableAssetManagement(url).then(response => {
        this.IsEnableAssetManagement = response.data;
      });
    },
    OpenAddProductTypePopup() {
      var vm = this;
      vm.FromPage = 'AddProduct';
      vm.ShowAddProductType = true;
    },
    ClosePopupProductType() {
      var vm = this;
      vm.ShowAddProductType = false;
      vm.getForm();
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/AdvancedSettings.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_AdvancedSettingsvue_type_script_lang_js_ = (AdvancedSettingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Modal/AdvancedSettings.vue?vue&type=style&index=0&id=2e26b7ed&prod&lang=css&
var AdvancedSettingsvue_type_style_index_0_id_2e26b7ed_prod_lang_css_ = __webpack_require__("b392");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Modal/AdvancedSettings.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Modal_AdvancedSettingsvue_type_script_lang_js_,
  AdvancedSettingsvue_type_template_id_2e26b7ed_render,
  AdvancedSettingsvue_type_template_id_2e26b7ed_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AdvancedSettings = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AdvancedSetup/MoadalAdvanceSetup.vue?vue&type=template&id=686b1e71&
var MoadalAdvanceSetupvue_type_template_id_686b1e71_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "my-popups modal right fade show",
    staticStyle: {
      "display": "block"
    },
    attrs: {
      "role": "dialog"
    }
  }, [_c('div', {
    staticClass: "modal d-block",
    attrs: {
      "tabindex": "-1",
      "role": "dialog"
    }
  }, [_c('div', {
    staticClass: "modal-dialog doc-setup-slide"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('div', {
    staticClass: "modal-header mheader-user py-0"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function ($event) {
        return _vm.close();
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-times",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _c('h4', {
    staticClass: "modal-title py-3"
  }, [_vm._v(_vm._s(_vm.$t('Configuration')))])]), _c('div', {
    staticClass: "modal-body bg-white"
  }, [_c('section', {
    staticClass: "container-fluid p-0"
  }, [_c('div', {
    staticClass: "left-menu-tab new_tab"
  }, [_c('div', {
    staticClass: "mt-0",
    staticStyle: {
      "max-height": "calc(100vh - 2px)"
    },
    attrs: {
      "id": "divscrollsetuptabs"
    }
  }, [_vm.popupCondition == 'Configuration' ? _c('ul', {
    staticClass: "nav nav-pills flex-column left-tab responivecustomtab lefttabiconfix newtab_des"
  }, [_c('li', {
    staticClass: "nav-item FourthScreen",
    on: {
      "click": function ($event) {
        return _vm.SkipTab(1);
      }
    }
  }, [_c('a', {
    staticClass: "nav-link left-menu",
    class: {
      'active': _vm.step == 1
    },
    staticStyle: {
      "cursor": "pointer"
    }
  }, [_c('i', {
    staticClass: "fa fa-user pr-2 text-muted",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "font-14"
  }, [_vm._v(_vm._s(_vm.$t('General')))])])]), _c('li', {
    staticClass: "nav-item SecondScreen",
    on: {
      "click": function ($event) {
        return _vm.SkipTab(2);
      }
    }
  }, [_c('a', {
    staticClass: "nav-link left-menu",
    class: {
      'active': _vm.step == 2
    },
    staticStyle: {
      "cursor": "pointer"
    }
  }, [_c('i', {
    staticClass: "fa fa-check pr-2 text-muted",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "font-14"
  }, [_vm._v(_vm._s(_vm.$t('Approval')))])])]), _c('li', {
    staticClass: "nav-item ThirdScreen",
    on: {
      "click": function ($event) {
        return _vm.SkipTab(3);
      }
    }
  }, [_c('a', {
    staticClass: "nav-link left-menu",
    class: {
      'active': _vm.step == 3
    },
    staticStyle: {
      "cursor": "pointer"
    }
  }, [_c('i', {
    staticClass: "fa fa-plus pr-2 text-muted",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm.IsClientStoragesCopmleted == true ? _c('i', {
    staticClass: "fa fa-check-circle font-18 pr-2 text-success",
    attrs: {
      "aria-hidden": "true"
    }
  }) : _vm._e(), _c('span', {
    staticClass: "font-14"
  }, [_vm._v(_vm._s(_vm.$t('ProductManagement')))])])])]) : _vm._e()])]), _c('div', {
    staticClass: "right-content"
  }, [_vm.popupCondition == 'Configuration' ? _c('div', {
    staticClass: "col-md-12 p-0"
  }, [_vm.popupCondition == 'Configuration' ? _c('Configuration', {
    attrs: {
      "CurrentTab": _vm.CurrentTab
    }
  }) : _vm._e()], 1) : _vm._e()])])])])])])]);
};
var MoadalAdvanceSetupvue_type_template_id_686b1e71_staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/AdvancedSetup/MoadalAdvanceSetup.vue?vue&type=template&id=686b1e71&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AdvancedSetup/Configuration.vue?vue&type=template&id=7dd577d3&
var Configurationvue_type_template_id_7dd577d3_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-md-12 p-0"
  }, [_c('div', {
    staticClass: "tab-content"
  }, [_vm.CurrentTab == 1 ? _c('div', {
    staticClass: "tab-pane call-detail fade p-0 border pb-3 active show",
    attrs: {
      "id": "step1"
    }
  }, [_c('section', {
    staticClass: "page-action w-100"
  }, [_c('div', {
    staticClass: "container-fluid p-0"
  }, [_c('div', {
    staticClass: "col-md-12 p-0 mt-3"
  }, [_c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 prof_control float-left",
    attrs: {
      "id": "ulKeysContainer"
    }
  }, [_c('div', {
    staticClass: "container-fluid p-0"
  }, [_c('div', {
    staticClass: "col-md-12 p-0"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('Form', {
    ref: "form",
    staticClass: "col-12 p-0",
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        values,
        errors
      }) {
        return [_vm._l(_vm.allConfigData, function (item, allConfigDataIndex) {
          return _c('div', {
            key: 'configdata-1' + allConfigDataIndex,
            staticClass: "col-sm-12 col-md-12 float-left col-lg-6 col-xl-6"
          }, [item.CORE_CONFIG_TYPE == 'dropdown' && item.CORE_CONFIG_KEY != 'TimeZone' && item.CORE_CONFIG_KEY != 'Currency' ? _c('div', {
            staticClass: "form-group projectConfig"
          }, [_c('label', [_c('span', [_vm._v(" " + _vm._s(item.CORE_CONFIG_DESC) + " ")]), _c('span', {
            staticClass: "text-danger"
          }, [_vm._v("*")]), _c('a', {
            attrs: {
              "href": "javascript:;",
              "data-toggle": "popoveruserguide",
              "data-content": item.CORE_CONFIG_DESC
            }
          }, [_c('i', {
            staticClass: "fa fa-question-circle-o text-popover",
            attrs: {
              "title": item.CORE_CONFIG_DESC
            }
          })])]), _c('Field', {
            attrs: {
              "rules": {
                'required': true
              },
              "name": "item.CORE_CONFIG_DESC"
            },
            scopedSlots: _vm._u([{
              key: "default",
              fn: function ({
                errors
              }) {
                return [item.CORE_CONFIG_KEY != 'Currency' ? _c('select', {
                  directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: item.CORE_CONFIG_VALUE,
                    expression: "item.CORE_CONFIG_VALUE"
                  }],
                  staticClass: "select form-control",
                  attrs: {
                    "keys": item.CORE_CONFIG_ID,
                    "name": "EnableLocationTrackingModule"
                  },
                  on: {
                    "change": function ($event) {
                      var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                        return o.selected;
                      }).map(function (o) {
                        var val = "_value" in o ? o._value : o.value;
                        return val;
                      });
                      _vm.$set(item, "CORE_CONFIG_VALUE", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
                    }
                  }
                }, _vm._l(_vm.Getoption(item.CORE_CONFIG_OPTIONS), function (items, GetoptionIndex) {
                  return _c('option', {
                    key: GetoptionIndex,
                    domProps: {
                      "value": items
                    }
                  }, [_vm._v(" " + _vm._s(items) + " ")]);
                }), 0) : _vm._e(), _c('span', {
                  staticClass: "invalid-feedback d-block",
                  attrs: {
                    "name": "EnableLocationTrackingModule",
                    "id": "EnableLocationTrackingModule"
                  }
                }, [_vm._v(_vm._s(errors[0]))])];
              }
            }], null, true)
          })], 1) : _vm._e()]);
        }), _vm._l(_vm.allConfigData, function (item, allConfigIndex) {
          return _c('div', {
            key: 'configdata-2' + allConfigIndex,
            staticClass: "col-sm-12 col-md-12 float-left col-lg-6 col-xl-6"
          }, [item.CORE_CONFIG_TYPE == 'text' ? _c('div', {
            staticClass: "form-group projectConfig"
          }, [_c('label', [_c('span', [_vm._v(" " + _vm._s(item.CORE_CONFIG_DESC) + " ")]), _c('span', {
            staticClass: "text-danger"
          }, [_vm._v("*")]), _c('a', {
            attrs: {
              "href": "javascript:;",
              "data-content": item.CORE_CONFIG_DESC,
              "data-toggle": "popoveruserguide"
            }
          }, [_c('i', {
            staticClass: "fa fa-question-circle-o text-popover",
            staticStyle: {
              "font-size": "14px"
            },
            attrs: {
              "title": item.CORE_CONFIG_DESC
            }
          })])]), _c('input', {
            staticClass: "textfield form-control",
            attrs: {
              "keys": item.CORE_CONFIG_ID,
              "type": "text",
              "name": item.CORE_CONFIG_DESC
            },
            domProps: {
              "value": item.CORE_CONFIG_VALUE
            }
          }), _c('span', {
            staticClass: "invalid-feedback d-block",
            attrs: {
              "name": "LocationTracking",
              "id": "LocationTracking"
            }
          })]) : _vm._e()]);
        }), _c('div', {
          staticClass: "col-sm-12 col-md-12 float-left col-lg-6 col-xl-6"
        }, [_c('div', {
          staticClass: "form-group projectConfig"
        }, [_c('label', [_c('span', [_vm._v("Company Time Zone:")]), _c('span', {
          staticClass: "text-danger"
        }, [_vm._v("*")]), _c('a', {
          attrs: {
            "href": "javascript:;",
            "data-toggle": "popoveruserguide",
            "data-content": "Company Time Zone"
          }
        }, [_c('i', {
          staticClass: "fa fa-question-circle-o text-popover",
          attrs: {
            "title": "Company Time Zone"
          }
        })])]), _c('Field', {
          attrs: {
            "name": "TimeZone",
            "rules": {
              'required': true
            },
            "label": "TimeZone"
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
                  value: _vm.getTimeZone,
                  expression: "getTimeZone"
                }],
                staticClass: "select form-control",
                attrs: {
                  "name": "TimeZones",
                  "keys": _vm.timeZoneKeys
                },
                on: {
                  "change": function ($event) {
                    var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                      return o.selected;
                    }).map(function (o) {
                      var val = "_value" in o ? o._value : o.value;
                      return val;
                    });
                    _vm.getTimeZone = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
                  }
                }
              }, _vm._l(_vm.timeZone, function (item, timeZoneIndex) {
                return _c('option', {
                  key: timeZoneIndex,
                  domProps: {
                    "value": item.code
                  }
                }, [_vm._v(" " + _vm._s(item.value) + " ")]);
              }), 0), _c('span', {
                staticClass: "invalid-feedback d-block",
                attrs: {
                  "name": "TimeZone",
                  "id": "TimeZone"
                }
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _c('div', {
          staticClass: "clearfix"
        }), _c('div', {
          staticClass: "col-sm-12 col-md-12 float-left col-lg-6 col-xl-6"
        }, [_c('div', {
          staticClass: "form-group projectConfig"
        }, [_c('label', [_c('span', [_vm._v("Company Logo:")]), _c('span', {
          staticClass: "text-danger"
        }, [_vm._v("*")]), _c('a', {
          attrs: {
            "href": "javascript:;",
            "data-toggle": "popoveruserguide",
            "data-content": "Company Logo"
          }
        }, [_c('i', {
          staticClass: "fa fa-question-circle-o text-popover",
          staticStyle: {
            "font-size": "14px"
          },
          attrs: {
            "title": "Company Logo"
          }
        })])]), _c('div', {
          staticClass: "row"
        }, [_c('div', {
          staticClass: "col-lg-12 col-md-12 mb-1 mt-0 custom-file uploadimg",
          attrs: {
            "id": "divFiles"
          }
        }, [_c('input', {
          staticClass: "form-control",
          staticStyle: {
            "position": "absolute",
            "clip": "rect(0px, 0px, 0px, 0px)"
          },
          attrs: {
            "type": "file",
            "name": "attach",
            "id": "flFile",
            "tabindex": "-1"
          },
          on: {
            "change": function ($event) {
              return _vm.setFile(values, _vm.meta, $event);
            }
          }
        }), _c('div', {
          staticClass: "bootstrap-filestyle input-group"
        }, [_c('Field', {
          attrs: {
            "rules": {
              required: true
            },
            "name": "Company Logo"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              errors
            }) {
              return [_c('input', {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.attachmentDiv,
                  expression: "attachmentDiv"
                }],
                staticClass: "form-control disabled",
                attrs: {
                  "type": "text",
                  "id": "CompanyLogoCoreConfigId",
                  "disabled": ""
                },
                domProps: {
                  "value": _vm.attachmentDiv
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.attachmentDiv = $event.target.value;
                  }
                }
              }), errors[0] ? _c('span', {
                staticClass: "invalid-feedback",
                attrs: {
                  "name": "CompanyLogo",
                  "id": "CompanyLogoId"
                }
              }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
            }
          }], null, true)
        }), _c('div', {
          staticClass: "input-group-append",
          staticStyle: {
            "cursor": "pointer"
          }
        }, [_c('span', {
          staticClass: "group-span-filestyle input-group-btn input-group-text bg-white",
          attrs: {
            "tabindex": "0"
          }
        }, [_c('label', {
          staticClass: "mb-0 font-weight-normal",
          attrs: {
            "title": "Click here to select a file.",
            "for": "flFile"
          }
        }, [_vm._v("Choose File")])]), _c('span', {
          staticClass: "input-group-text border-0 bg-transparent p-0 pl-2"
        }, [_c('a', {
          staticClass: "round-icon-small btn-danger-light clsattclear",
          attrs: {
            "href": "javascript:;",
            "title": "Clear"
          },
          on: {
            "click": _vm.Clearimagevalue
          }
        }, [_c('i', {
          staticClass: "fa fa-undo"
        })]), _c('a', {
          staticClass: "round-icon-small btn-danger-light clsattremove d-none",
          attrs: {
            "href": "javascript:;",
            "title": "Remove"
          }
        }, [_c('i', {
          staticClass: "fa fa-times"
        })])])])], 1), _c('span', {
          staticClass: "field-validation-valid",
          attrs: {
            "id": "spnFile",
            "data-valmsg-for": "FileSrc"
          }
        })]), _c('div', {
          staticClass: "col-lg-5 col-md-12 mt-0 position-relative displayimg",
          staticStyle: {
            "max-width": "300px",
            "min-width": "300px"
          }
        }, [_c('div', {
          staticClass: "float-left",
          staticStyle: {
            "border": "1px solid #f2f2f2",
            "padding": "2px 14px"
          }
        }, [_c('img', {
          key: "29",
          staticStyle: {
            "max-height": "70px"
          },
          attrs: {
            "id": "CompanyLogo",
            "src": _vm.blobUrl,
            "width": "200",
            "alt": "Image"
          }
        })]), _c('div', {
          staticClass: "float-left"
        }, [_c('a', {
          staticClass: "remove round-icon-small btn-dark",
          attrs: {
            "href": "javascript:;"
          },
          on: {
            "click": function ($event) {
              return _vm.ClearImage(_vm.blobUrl);
            }
          }
        }, [_c('i', {
          staticClass: "fa fa-times",
          attrs: {
            "title": "Remove",
            "alt": "Remove"
          }
        })])])])])])]), _c('div', {
          staticClass: "col-sm-12 col-md-12 float-left col-lg-6 col-xl-6"
        }, [_c('div', {
          staticClass: "form-group projectConfig"
        }, [_c('label', [_c('span', [_vm._v("Currency:")]), _c('span', {
          staticClass: "text-danger"
        }, [_vm._v("*")]), _c('a', {
          attrs: {
            "href": "javascript:;",
            "data-toggle": "popoveruserguide",
            "data-content": "Currency"
          }
        }, [_c('i', {
          staticClass: "fa fa-question-circle-o text-popover",
          attrs: {
            "title": "Currency"
          }
        })])]), _c('Field', {
          attrs: {
            "rules": {
              'required': true
            },
            "name": "Currency Value"
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
                  value: _vm.getCurrencyValue,
                  expression: "getCurrencyValue"
                }],
                staticClass: "select form-control",
                attrs: {
                  "keys": _vm.getCurrencyValueCoreConfigId
                },
                domProps: {
                  "value": _vm.getCurrencyValue
                },
                on: {
                  "change": function ($event) {
                    var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                      return o.selected;
                    }).map(function (o) {
                      var val = "_value" in o ? o._value : o.value;
                      return val;
                    });
                    _vm.getCurrencyValue = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
                  }
                }
              }, _vm._l(_vm.currency, function (item, currencyIndex) {
                return _c('option', {
                  key: currencyIndex,
                  domProps: {
                    "value": item.CurrencyId
                  }
                }, [_vm._v(" " + _vm._s(item.Currency) + " ")]);
              }), 0), _c('span', {
                staticClass: "invalid-feedback d-block",
                attrs: {
                  "name": "Currency",
                  "id": "Currency"
                }
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _c('div', {
          staticClass: "clearfix"
        }), _vm._l(_vm.allConfigData, function (item, index) {
          return _c('div', {
            staticClass: "col-sm-12 col-md-12 float-left col-lg-6 col-xl-6",
            attrs: {
              "id": "radios",
              "type": "radiobutton"
            }
          }, [item.CORE_CONFIG_TYPE == 'radiobutton' ? _c('label', [_c('span', [_vm._v(" " + _vm._s(item.CORE_CONFIG_DESC) + " ")]), _c('span', {
            staticClass: "text-danger"
          }, [_vm._v("*")]), _c('a', {
            attrs: {
              "href": "javascript:;",
              "data-toggle": "popoveruserguide",
              "data-content": item.CORE_CONFIG_DESC,
              "data-original-title": "",
              "title": ""
            }
          }, [_c('i', {
            staticClass: "fa fa-question-circle-o text-popover",
            staticStyle: {
              "font-size": "14px"
            },
            attrs: {
              "title": item.CORE_CONFIG_DESC
            }
          })])]) : _vm._e(), item.CORE_CONFIG_TYPE == 'radiobutton' ? _c('div', {
            staticClass: "rad_value mb-3",
            attrs: {
              "type": "radiobutton",
              "keys": item.CORE_CONFIG_ID
            }
          }, _vm._l(_vm.Getoption(item.CORE_CONFIG_OPTIONS), function (items) {
            return _c('label', {
              staticClass: "cogfiglbl form-check form-check-inline"
            }, [_c('div', {
              staticClass: "custom-control custom-radio custom-control-inline"
            }, [_c('input', {
              directives: [{
                name: "model",
                rawName: "v-model",
                value: item.CORE_CONFIG_VALUE,
                expression: "item.CORE_CONFIG_VALUE"
              }],
              staticClass: "custom-control-input",
              attrs: {
                "type": "radio",
                "name": item.CORE_CONFIG_DESC
              },
              domProps: {
                "value": items,
                "checked": _vm._q(item.CORE_CONFIG_VALUE, items)
              },
              on: {
                "change": function ($event) {
                  return _vm.$set(item, "CORE_CONFIG_VALUE", items);
                }
              }
            }), _c('label', {
              staticClass: "custom-control-label",
              attrs: {
                "for": 'rdo_' + index
              }
            })]), _vm._v(_vm._s(items == 'no' ? 'No' : 'Yes') + " ")]);
          }), 0) : _vm._e()]);
        }), _c('div', {
          staticClass: "col-sm-12 col-md-12 float-left col-lg-12 col-xl-12"
        }, [_c('div', {
          staticClass: "row flex-row-reverse"
        }, [_c('div', {
          staticClass: "col-lg-6 text-right"
        }, [_c('a', {
          staticClass: "btn btn-secondary formbtn",
          attrs: {
            "id": "hlkCancel",
            "href": "javascript:;",
            "title": "Cancel"
          },
          on: {
            "click": function ($event) {
              return _vm.closePopup();
            }
          }
        }, [_c('i', {
          staticClass: "fa fa-save pr-2"
        }), _vm._v("Cancel")]), _vm._v("   "), _c('a', {
          staticClass: "btn btn-success formbtn",
          attrs: {
            "id": "hlkSave",
            "issecurityprompt": "IsSecurityPrompt",
            "href": "javascript:;",
            "title": "Save"
          },
          on: {
            "click": function ($event) {
              return _vm.SaveConfiguration(values, errors);
            }
          }
        }, [_c('i', {
          staticClass: "fa fa-save pr-2"
        }), _vm._v("Save")])])])])];
      }
    }], null, false, 118507580)
  })], 1)])])]), _vm._m(0)])])])]) : _vm._e(), _vm.CurrentTab == 2 ? _c('div', {
    staticClass: "tab-pane call-detail fade border pb-3 active show",
    attrs: {
      "id": "step2"
    }
  }, [_c('section', {
    staticClass: "page-action w-100"
  }, [_c('div', {
    staticClass: "container-fluid"
  }, [_c('div', {
    staticClass: "col-md-12 p-0"
  }, [_c('div', {
    staticClass: "col-12 float-left p-0"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "form-group projectConfig"
  }, [_vm._m(1), _c('div', {
    staticClass: "rad_value",
    attrs: {
      "type": "radiobutton"
    }
  }, [_c('label', {
    staticClass: "cogfiglbl form-check form-check-inline"
  }, [_c('div', {
    staticClass: "custom-control custom-radio custom-control-inline"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.IsClientAutoActivated,
      expression: "IsClientAutoActivated"
    }],
    staticClass: "custom-control-input",
    attrs: {
      "type": "radio",
      "name": "SendNotificationsToClient",
      "value": "Yes",
      "id": "rdo_0"
    },
    domProps: {
      "checked": _vm._q(_vm.IsClientAutoActivated, "Yes")
    },
    on: {
      "change": function ($event) {
        _vm.IsClientAutoActivated = "Yes";
      }
    }
  }), _c('label', {
    staticClass: "custom-control-label",
    attrs: {
      "for": "rdo_0"
    }
  })]), _vm._v("Yes ")]), _c('label', {
    staticClass: "cogfiglbl form-check form-check-inline"
  }, [_c('div', {
    staticClass: "custom-control custom-radio custom-control-inline"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.IsClientAutoActivated,
      expression: "IsClientAutoActivated"
    }],
    staticClass: "custom-control-input",
    attrs: {
      "type": "radio",
      "name": "SendNotificationsToClient",
      "value": "No",
      "id": "rdo_1"
    },
    domProps: {
      "checked": _vm._q(_vm.IsClientAutoActivated, "No")
    },
    on: {
      "change": function ($event) {
        _vm.IsClientAutoActivated = "No";
      }
    }
  }), _c('label', {
    staticClass: "custom-control-label",
    attrs: {
      "for": "rdo_1"
    }
  })]), _vm._v("No ")])])])]), _c('div', {
    staticClass: "col-12 mt-3 p-0"
  }, [_c('div', {
    staticClass: "col-lg-6 text-right float-right"
  }, [_c('a', {
    staticClass: "btn btn-secondary formbtn",
    attrs: {
      "id": "hlkCancel",
      "href": "javascript:;",
      "title": "Cancel"
    },
    on: {
      "click": function ($event) {
        return _vm.closePopup();
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-save pr-2"
  }), _vm._v("Cancel")]), _vm._v("   "), _c('a', {
    staticClass: "btn btn-success formbtn",
    attrs: {
      "href": "javascript:;",
      "title": "Save"
    },
    on: {
      "click": function ($event) {
        return _vm.saveClientConfiguration();
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-save pr-2"
  }), _vm._v("Save")])]), _vm._m(2)])])])])])])]) : _vm._e(), _vm.CurrentTab == 3 ? _c('div', {
    staticClass: "tab-pane call-detail fade p-0 border pb-3 active show",
    attrs: {
      "id": "step1"
    }
  }, [_c('section', {
    staticClass: "page-action w-100"
  }, [_c('div', {
    staticClass: "container-fluid p-0"
  }, [_c('div', {
    staticClass: "col-md-12 p-0 mt-3"
  }, [_c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 prof_control float-left",
    attrs: {
      "id": "ulKeysContainer"
    }
  }, [_c('div', {
    staticClass: "container-fluid p-0"
  }, [_c('div', {
    staticClass: "col-md-12 p-0"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('Form', {
    ref: "form",
    staticClass: "col-12 p-0",
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        values,
        errors
      }) {
        return [_vm._l(_vm.allProductConfigData, function (item, allConfigDataIndex) {
          return _c('div', {
            key: 'configdata-1' + allConfigDataIndex,
            staticClass: "col-sm-12 col-md-12 float-left col-lg-6 col-xl-6"
          }, [item.CORE_CONFIG_TYPE == 'dropdown' && item.CORE_CONFIG_KEY != 'TimeZone' && item.CORE_CONFIG_KEY != 'Currency' ? _c('div', {
            staticClass: "form-group projectConfig"
          }, [_c('label', [_c('span', [_vm._v(" " + _vm._s(item.CORE_CONFIG_DESC) + " ")]), _c('span', {
            staticClass: "text-danger"
          }, [_vm._v("*")]), _c('a', {
            attrs: {
              "href": "javascript:;",
              "data-toggle": "popoveruserguide",
              "data-content": item.CORE_CONFIG_DESC
            }
          }, [_c('i', {
            staticClass: "fa fa-question-circle-o text-popover"
          })])]), _c('Field', {
            attrs: {
              "rules": {
                'required': true
              },
              "name": "item.CORE_CONFIG_DESC"
            },
            scopedSlots: _vm._u([{
              key: "default",
              fn: function ({
                errors
              }) {
                return [item.CORE_CONFIG_KEY != 'Currency' ? _c('select', {
                  directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: item.CORE_CONFIG_VALUE,
                    expression: "item.CORE_CONFIG_VALUE"
                  }],
                  staticClass: "select form-control",
                  attrs: {
                    "keys": item.CORE_CONFIG_ID,
                    "name": "EnableLocationTrackingModule"
                  },
                  on: {
                    "change": function ($event) {
                      var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                        return o.selected;
                      }).map(function (o) {
                        var val = "_value" in o ? o._value : o.value;
                        return val;
                      });
                      _vm.$set(item, "CORE_CONFIG_VALUE", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
                    }
                  }
                }, _vm._l(_vm.Getoption(item.CORE_CONFIG_OPTIONS), function (items, GetoptionIndex) {
                  return _c('option', {
                    key: GetoptionIndex,
                    domProps: {
                      "value": items
                    }
                  }, [_vm._v(" " + _vm._s(items) + " ")]);
                }), 0) : _vm._e(), _c('span', {
                  staticClass: "invalid-feedback d-block",
                  attrs: {
                    "name": "EnableLocationTrackingModule",
                    "id": "EnableLocationTrackingModule"
                  }
                }, [_vm._v(_vm._s(errors[0]))])];
              }
            }], null, true)
          })], 1) : _vm._e()]);
        }), _vm._l(_vm.allProductConfigData, function (item, allConfigIndex) {
          return _c('div', {
            key: 'configdata-2' + allConfigIndex,
            staticClass: "col-sm-12 col-md-12 float-left col-lg-6 col-xl-6"
          }, [item.CORE_CONFIG_TYPE == 'text' ? _c('div', {
            staticClass: "form-group projectConfig"
          }, [_c('label', [_vm._v(" " + _vm._s(item.CORE_CONFIG_TYPE) + " "), _c('span', [_vm._v(" " + _vm._s(item.CORE_CONFIG_DESC) + " ")]), _c('span', {
            staticClass: "text-danger"
          }, [_vm._v("*")]), _c('a', {
            attrs: {
              "href": "javascript:;",
              "data-content": item.CORE_CONFIG_DESC,
              "data-toggle": "popoveruserguide"
            }
          }, [_c('i', {
            staticClass: "fa fa-question-circle-o text-popover",
            staticStyle: {
              "font-size": "14px"
            }
          })])]), _c('input', {
            staticClass: "textfield form-control",
            attrs: {
              "keys": item.CORE_CONFIG_ID,
              "type": "text",
              "name": item.CORE_CONFIG_DESC
            },
            domProps: {
              "value": item.CORE_CONFIG_VALUE
            }
          }), _c('span', {
            staticClass: "invalid-feedback d-block",
            attrs: {
              "name": "LocationTracking",
              "id": "LocationTracking"
            }
          })]) : _vm._e()]);
        }), _vm._l(_vm.allProductConfigData, function (item, index) {
          return _c('div', {
            staticClass: "col-sm-12 col-md-12 float-left col-lg-6 col-xl-6",
            attrs: {
              "id": "radios",
              "type": "radiobutton"
            }
          }, [item.CORE_CONFIG_TYPE == 'radiobutton' ? _c('label', [_c('span', [_vm._v(" " + _vm._s(item.CORE_CONFIG_DESC) + " ")]), _c('span', {
            staticClass: "text-danger"
          }, [_vm._v("*")]), _c('a', {
            attrs: {
              "href": "javascript:;",
              "data-toggle": "popoveruserguide",
              "data-content": item.CORE_CONFIG_DESC,
              "data-original-title": "",
              "title": ""
            }
          }, [_c('i', {
            staticClass: "fa fa-question-circle-o text-popover",
            staticStyle: {
              "font-size": "14px"
            }
          })])]) : _vm._e(), item.CORE_CONFIG_TYPE == 'radiobutton' ? _c('div', {
            staticClass: "rad_value",
            attrs: {
              "type": "radiobutton",
              "keys": item.CORE_CONFIG_ID
            }
          }, _vm._l(_vm.Getoption(item.CORE_CONFIG_OPTIONS), function (items) {
            return _c('label', {
              staticClass: "cogfiglbl form-check form-check-inline"
            }, [_c('div', {
              staticClass: "custom-control custom-radio custom-control-inline"
            }, [_c('input', {
              directives: [{
                name: "model",
                rawName: "v-model",
                value: item.CORE_CONFIG_VALUE,
                expression: "item.CORE_CONFIG_VALUE"
              }],
              staticClass: "custom-control-input",
              attrs: {
                "type": "radio",
                "name": item.CORE_CONFIG_DESC
              },
              domProps: {
                "value": items,
                "checked": _vm._q(item.CORE_CONFIG_VALUE, items)
              },
              on: {
                "change": function ($event) {
                  return _vm.$set(item, "CORE_CONFIG_VALUE", items);
                }
              }
            }), _c('label', {
              staticClass: "custom-control-label",
              attrs: {
                "for": 'rdo_' + index
              }
            })]), _vm._v(_vm._s(items == 'no' ? 'No' : 'Yes') + " ")]);
          }), 0) : _vm._e()]);
        }), _c('div', {
          staticClass: "col-sm-12 col-md-12 float-left col-lg-12 col-xl-12"
        }, [_c('div', {
          staticClass: "row flex-row-reverse"
        }, [_c('div', {
          staticClass: "col-lg-6 text-right"
        }, [_c('a', {
          staticClass: "btn btn-secondary formbtn",
          attrs: {
            "id": "hlkSave",
            "href": "javascript:;",
            "title": "Cancel"
          },
          on: {
            "click": function ($event) {
              return _vm.closePopup();
            }
          }
        }, [_c('i', {
          staticClass: "fa fa-save pr-2"
        }), _vm._v("Cancel")]), _vm._v("   "), _c('a', {
          staticClass: "btn btn-success formbtn",
          attrs: {
            "id": "hlkSave",
            "issecurityprompt": "IsSecurityPrompt",
            "href": "javascript:;",
            "title": "Save"
          },
          on: {
            "click": function ($event) {
              return _vm.SaveConfiguration(values, errors);
            }
          }
        }, [_c('i', {
          staticClass: "fa fa-save pr-2"
        }), _vm._v("Save")])])])])];
      }
    }], null, false, 4000512832)
  })], 1)])])]), _vm._m(3)])])])]) : _vm._e()])]);
};
var Configurationvue_type_template_id_7dd577d3_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-12 mt-4 float-left"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12 mt-3"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('label', [_c('span', [_vm._v(" Approver Receipt Notification ")]), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")]), _c('a', {
    attrs: {
      "href": "javascript:;",
      "data-toggle": "popoveruserguide",
      "data-content": " Auto-Activate the client at the time of Creation.",
      "data-original-title": "",
      "title": ""
    }
  }, [_c('i', {
    staticClass: "fa fa-question-circle-o text-popover",
    staticStyle: {
      "font-size": "14px"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-lg-6"
  }, [_c('div', {
    staticClass: "py-2"
  }, [_c('span', {
    staticClass: "mandatory"
  }, [_vm._v("Fields marked with an asterisk (*) are mandatory.")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-12 mt-4 float-left"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12 mt-3"
  })])]);
}];

// CONCATENATED MODULE: ./src/views/AdvancedSetup/Configuration.vue?vue&type=template&id=7dd577d3&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AdvancedSetup/Configuration.vue?vue&type=script&lang=js&


/* harmony default export */ var Configurationvue_type_script_lang_js_ = ({
  props: {
    popupConditions: {
      type: String,
      required: false
    },
    // view: {
    //   type: String,
    //   required: true,
    // },
    CurrentTab: {
      type: Number,
      required: false
    }
  },
  data() {
    return {
      SizeDocStorage: null,
      RetentionValue: null,
      FileTypeVaule: "",
      SizeConfigDataId: null,
      RetentionConfigDataId: null,
      FileCongfigDataId: null,
      userStrogaeConfigId: null,
      clientStorageConfigId: null,
      SelectedValue: [],
      FileTypeValues: "",
      Options: [],
      FileTypeData: [],
      IsClientAutoActivated: '',
      ClientAutoActivationConfigId: null,
      lockRecord: [],
      roundingOff: [],
      timeFormat: [],
      defaultPageSize: [],
      EnablelocationTracking: [],
      locationTracking: null,
      timeZone: [],
      currency: [],
      getTimeZone: 0,
      getLocationTrackInterval: 0,
      paymentLink: '',
      getCurrencyValue: 0,
      getTimeFormatValue: 0,
      getTalygenTips: '',
      getPastRecordValue: 0,
      newlyAddUserValue: '',
      locationTrackingCoreConfigId: 0,
      defaultPageSizeValue: 0,
      newlyAddUserValueoption: [],
      talygenTipsOption: [],
      attachmentDiv: '',
      blobUrl: '',
      imgPath: '',
      containerName: '',
      arrayGetFileDetails: [],
      UserType: 'CA',
      fileName: '',
      allConfigData: [],
      objData: [],
      timeZoneKeys: 0,
      allConfigObject: [],
      isLoading: false,
      defaultCompanyLogo: null,
      StorageAllocatedPerUser: null,
      StorageAllocatedPerClient: null,
      jsonObj: [],
      getCurrencyValueCoreConfigId: null,
      SelectValue: [],
      allProductConfigData: []
    };
  },
  created: function () {
    var vm = this;
    vm.containerName = vm.GetUserInfo.ContainerName;
    vm.GetConfigurationData();
    vm.GetTimeZone();
    vm.GetCurrency();
    vm.GetProductConfigData();
    vm.getClientConfigValue();
  },
  methods: {
    closePopup() {
      var vm = this;
      vm.$parent.close();
    },
    saveStorageConfiguration: function () {
      var vm = this;
      if (vm.SelectedValue.length == 0) {
        vm.FileTypeValues = "'" + vm.FileTypeData.map(x => x.value).join("','") + "'";
      } else {
        vm.SelectedValue.forEach((item, index) => {
          vm.SelectValue.push(item.value);
        });
        vm.FileTypeValues = vm.SelectValue.join(',');
      }
      let objStorageConfigData = [{
        configData: [{
          DataId: vm.SizeConfigDataId,
          DataValue: vm.SizeDocStorage
        }, {
          DataId: vm.RetentionConfigDataId,
          DataValue: vm.RetentionValue
        }, {
          DataId: vm.FileCongfigDataId,
          DataValue: vm.FileTypeValues
        }, {
          DataId: vm.userStrogaeConfigId,
          DataValue: vm.StorageAllocatedPerUser
        }, {
          DataId: vm.clientStorageConfigId,
          DataValue: vm.StorageAllocatedPerClient
        }]
      }, {
        conditionData: {
          refCode: 'AssetSetting',
          moduleName: 'AssetManagement'
        }
      }];
      var ParentData = JSON.stringify(objStorageConfigData);
      if (parseInt(vm.SizeDocStorage) > parseInt(vm.StorageAllocatedPerUser) || parseInt(vm.SizeDocStorage) > parseInt(vm.StorageAllocatedPerClient)) {
        $('#SizeDocStorage').addClass('is-invalid');
        vm.ShowAlert(vm.$t("Size of per file cannot be more than " + vm.StorageAllocatedPerUser), "failure", true);
      } else {
        $('#SizeDocStorage').removeClass('is-invalid');
        vm.$refs.Storageform.validate().then(result => {
          if (result) {
            DataService["a" /* default */].ManageAssetSettingData(JSON.stringify(ParentData)).then(response => {
              if (response.data == 0) {
                vm.ShowAlert("Storage Configuration Data Updated Successfully");
                vm.getfileTypes();
              } else {
                vm.ShowAlert(vm.$t("UnknownErrorOccur"), "failure", true, vm.$t("Alert"));
              }
            });
          }
        });
      }
    },
    removeSpecialCharacters(charactersString) {
      if (charactersString == 0) {
        this.SizeDocStorage = parseInt(charactersString.replace(0, 1));
      }
    },
    BindFileTypeDDL: function () {
      var vm = this;
      vm.Options = [];
      var params = `moduleName=DocStorage`;
      DataService["a" /* default */].GetFileType(params).then(response => {
        vm.FileTypeData = response.data;
        vm.FileTypeData.forEach((item, index) => {
          vm.Options.push({
            value: item.MimeTypes,
            label: item.FileType
          });
        });
      });
    },
    getfileTypes: function () {
      var vm = this;
      var params = `moduleName=DocStorage&keyValue=SizePerDoc,RetentionDays,DocStorageAllowedFileTypes,DefaultUserSpaceAllocation,DefaultClientSpaceAllocation`;
      DataService["a" /* default */].GetConfigDataValue(params).then(response => {
        vm.isLoading = true;
        var ConfigList = JSON.parse(response.data.ConfigValue);
        vm.SizeDocStorage = ConfigList.filter(v => v.CONFIG_DATA_KEY === 'SizePerDoc')[0].CONFIG_DATA_VALUE;
        vm.SizeConfigDataId = ConfigList.filter(v => v.CONFIG_DATA_KEY === 'SizePerDoc')[0].core_config_id;
        vm.RetentionValue = ConfigList.filter(v => v.CONFIG_DATA_KEY === 'RetentionDays')[0].CONFIG_DATA_VALUE;
        vm.RetentionConfigDataId = ConfigList.filter(v => v.CONFIG_DATA_KEY === 'RetentionDays')[0].core_config_id;
        vm.FileTypeVaule = ConfigList.filter(v => v.CONFIG_DATA_KEY === 'DocStorageAllowedFileTypes')[0].CONFIG_DATA_VALUE;
        vm.FileCongfigDataId = ConfigList.filter(v => v.CONFIG_DATA_KEY === 'DocStorageAllowedFileTypes')[0].core_config_id;
        vm.StorageAllocatedPerUser = ConfigList.filter(v => v.CONFIG_DATA_KEY === 'DefaultUserSpaceAllocation')[0].CONFIG_DATA_VALUE;
        vm.userStrogaeConfigId = ConfigList.filter(v => v.CONFIG_DATA_KEY === 'DefaultUserSpaceAllocation')[0].core_config_id;
        vm.StorageAllocatedPerClient = ConfigList.filter(v => v.CONFIG_DATA_KEY === 'DefaultClientSpaceAllocation')[0].CONFIG_DATA_VALUE;
        vm.clientStorageConfigId = ConfigList.filter(v => v.CONFIG_DATA_KEY === 'DefaultClientSpaceAllocation')[0].core_config_id;
        // vm.SelectedValue = vm.FileTypeVaule.replace(/\'/g, "").split(',');
        var SelectedValue = vm.FileTypeVaule.replace(/\'/g, "").split(',');
        if (SelectedValue != null) {
          var selectedValues = vm.Options.filter(x => {
            return SelectedValue.some(y => {
              return x.value.indexOf(y) != -1;
            });
          });
          vm.SelectedValue = selectedValues.map(x => x);
        } else {
          vm.SelectedValue = vm.Options.map(x => x.value);
        }
        vm.isLoading = false;
      });
    },
    redirectLink: function (params) {
      var envLink = Object({"NODE_ENV":"production","VUE_APP_API_URL":"https://apponeapi.talygen.com/api/asset","VUE_APP_COMMON_API":"https://apponeapi.talygen.com/api","VUE_APP_CURRENT_SITE_ROOT_URL":"https://appone.talygen.com","VUE_APP_DEFAULT_APP_URL":"http://app.talygen.com","VUE_APP_FULL_MENU_APP_REDIRECTION":"true","VUE_APP_NODE_ENV":"live","VUE_APP_REPORT_SERVER_URL":"http://172.22.23.106/ReportServer","BASE_URL":"/"});
      if (params == "General") {
        window.open(envLink.VITE_General);
        return false;
      } else if (params == "Storage") {
        window.open(envLink.VITE_Storage);
        return false;
      } else if (params == "Clients") {
        window.open(envLink.VITE_Clients);
        return false;
      }
    },
    getClientConfigValue: function () {
      var vm = this;
      var params = `moduleName=Client&keyValue=SendNotificationsToClient`;
      DataService["a" /* default */].GetConfigDataValue(params).then(response => {
        vm.isLoading = true;
        vm.IsClientAutoActivated = JSON.parse(response.data.ConfigValue)[0].CONFIG_DATA_VALUE;
        vm.ClientAutoActivationConfigId = JSON.parse(response.data.ConfigValue)[0].core_config_id;
        vm.isLoading = false;
      });
    },
    saveClientConfiguration: function () {
      var vm = this;
      let objStorageConfigData = [{
        configData: [{
          DataId: vm.ClientAutoActivationConfigId,
          DataValue: vm.IsClientAutoActivated == 'Yes' ? 'Yes' : 'No'
        }]
      }, {
        conditionData: {
          refCode: 'DocSetting',
          moduleName: 'DocStorage'
        }
      }];
      var jsonStorageConfigObj = JSON.stringify(objStorageConfigData);
      //var params = `jsonData=${jsonStorageConfigObj}&refCode=DocSetting&moduleName=DocStorage`;
      DataService["a" /* default */].ManageDocUserStorageSettingData(jsonStorageConfigObj).then(response => {
        if (response.data == 0) {
          this.ShowAlert("Client Configuration Data Updated Successfully");
          this.getClientConfigValue();
        } else {
          vm.ShowAlert(vm.$t("UnknownErrorOccur"), "failure", true, vm.$t("Alert"));
        }
      });
    },
    GetConfigurationData: function () {
      var vm = this;
      var myObj = `moduleId=1`;
      DataService["a" /* default */].GetConfigurationData(myObj).then(function (response) {
        vm.allConfigData = response.data.StorageKeys;
        vm.EnablelocationTracking = response.data.StorageKeys[0].CORE_CONFIG_OPTIONS.split("^");
        vm.locationTrackingCoreConfigId = response.data.StorageKeys[1].CORE_CONFIG_ID;
        vm.getTimeZone = response.data.StorageKeys[2].CORE_CONFIG_VALUE;
        vm.getTimeZoneCoreConfigId = response.data.StorageKeys[2].CORE_CONFIG_ID;
        vm.defaultPageSize = response.data.StorageKeys[3].CORE_CONFIG_OPTIONS.split("^");
        vm.getTalygenTipsCoreConfigId = response.data.StorageKeys[9].CORE_CONFIG_ID;
        vm.lockRecord = response.data.StorageKeys[10].CORE_CONFIG_OPTIONS.split("^");
        vm.lockRecordCoreConfigId = response.data.StorageKeys[10].CORE_CONFIG_ID;
        vm.getPastRecordValue = response.data.StorageKeys[10].CORE_CONFIG_VALUE;
        vm.newlyAddUserValueoption = response.data.StorageKeys[11].CORE_CONFIG_OPTIONS.split("^");
        vm.newlyAddUserValue = response.data.StorageKeys[11].CORE_CONFIG_VALUE;
        vm.newlyAddUserValueCoreConfigId = response.data.StorageKeys[11].CORE_CONFIG_ID;
        vm.talygenTipsOption = response.data.StorageKeys[9].CORE_CONFIG_OPTIONS.split("^");
        vm.imgPath = response.data.StorageKeys[5].CORE_CONFIG_VALUE;
        vm.CompanyLogoCoreConfigId = response.data.StorageKeys[5].CORE_CONFIG_ID;
        vm.timeZoneKeys = response.data.StorageKeys[2].CORE_CONFIG_ID;
        response.data.StorageKeys.forEach((item, index) => {
          if (item.CORE_CONFIG_KEY == 'Currency') {
            vm.getCurrencyValue = response.data.StorageKeys[index].CORE_CONFIG_VALUE;
            vm.getCurrencyValueCoreConfigId = response.data.StorageKeys[index].CORE_CONFIG_ID;
          }
        });
        vm.GetBlobUrl();
      });
    },
    GetProductConfigData: function () {
      var vm = this;
      var myObj = `moduleId=4118`;
      DataService["a" /* default */].GetConfigurationData(myObj).then(function (response) {
        vm.allProductConfigData = response.data.StorageKeys;
      });
    },
    GetTimeZone: function () {
      var vm = this;
      DataService["a" /* default */].GetTimeZone().then(function (response) {
        vm.timeZone = response.data;
      });
    },
    GetCurrency: function () {
      var vm = this;
      DataService["a" /* default */].GetCurrency().then(function (response) {
        vm.currency = response.data;
      });
    },
    SaveConfiguration: async function (values, error) {
      debugger;
      var vm = this;
      vm.objData = [];
      let imgObj = {};
      var textValues = $('div#ulKeysContainer input:text,div#ulKeysContainer select,div#ulKeysContainer textarea,div#ulKeysContainer input:password'); //get all textboxes,textarea and drop down list from config list
      var checkBoxValues = $('div#radios').find("input[type='radio']"); //get all div contains checkboxes from config list
      var checkBoxValues = $('div#ulKeysContainer div[type="checkbox"], div#ulKeysContainer div[type="radiobutton"]');
      var imageControl = $('#flFile').val();
      if (imageControl != undefined) {
        var splitimage = imageControl.split('\\')[2];
      }
      if (splitimage != undefined && (vm.defaultCompanyLogo == null || vm.defaultCompanyLogo == 'COMPANY-LOGO.JPG')) {
        imgObj = {
          DataId: vm.CompanyLogoCoreConfigId,
          DataValue: splitimage == undefined ? this.imgPath : splitimage
        };
        vm.objData.push(imgObj);
      } else if (vm.defaultCompanyLogo != null) {
        imgObj = {
          DataId: vm.CompanyLogoCoreConfigId,
          DataValue: 'COMPANY-LOGO.JPG'
        };
        vm.objData.push(imgObj);
      }
      for (var i = 0; i < textValues.length; i++) {
        if ($(textValues[i]).attr('keys') != undefined && $(textValues[i]).val() != '') {
          var textValue = $(textValues[i]).val().trim();
          if ($(textValues[i]).val().trim() == '') {
            if ($(textValues[i]).attr("class").indexOf("notrequired") == -1) {
              $(textValues[i]).addClass('is-invalid');
              $(textValues[i] + 'span#LocationTracking').html('Required');
            }
          } else {
            $(textValues[i]).removeClass('is-invalid');
          }
          let objStorageConfigData = {
            DataId: $(textValues[i]).attr('keys'),
            DataValue: textValue
          };
          vm.objData.push(objStorageConfigData);
        }
      }
      for (var i = 0; i < checkBoxValues.length; i++) {
        var getSelectedvalues = '';
        if ($(checkBoxValues[i]).attr('keys') != undefined && $(checkBoxValues[i]).attr('keys') != 'undefined') {
          if ($(checkBoxValues[i]).attr('type') == 'radiobutton') {
            var combinedName = "config" + i;
            //getSelectedvalues = $("input[name='"+combinedName+"']:checked").val();
            getSelectedvalues = $(checkBoxValues[i]).find('input:radio:checked').val();
          }
          let radioConfigDatas = {
            DataId: $(checkBoxValues[i]).attr('keys'),
            DataValue: getSelectedvalues
          };
          vm.objData.push(radioConfigDatas);
          let jsonObject = vm.objData.map(JSON.stringify);
          let uniqueSet = new Set(jsonObject);
        }
      }
      vm.allConfigObject = JSON.stringify(vm.objData);
      var error = $('.is-invalid');
      const formdata = new FormData();
      formdata.append("files", vm.arrayGetFileDetails);
      if (splitimage !== undefined) {
        await DataService["a" /* default */].UploadFile2(formdata).then(response => {
          // Handle response from server if needed
        });
      }
      let userset = [{
        refCode: 'AssetSetting',
        moduleName: 'Asset'
      }];
      var configData = "configData";
      var conditionData = "conditionData";
      var params = "[{" + JSON.stringify(configData) + ":" + vm.allConfigObject + ", " + JSON.stringify(conditionData) + ":" + JSON.stringify(userset) + "}]";
      var jsonStorageConfigObj = JSON.stringify(vm.allConfigObject);
      //var params = `jsonData=${jsonStorageConfigObj}&refCode=DocSetting&moduleName=DocStorage`;
      if ($(error).length <= 0) {
        await DataService["a" /* default */].ManageAssetSettingData(params).then(response => {
          vm.isLoading = true;
          if (response.data == 1) {
            vm.ShowAlert("Record(s) has been successfully saved.");
            vm.GetProductConfigData();
            vm.isLoading = false;
            vm.GetConfigurationData();
          } else {
            vm.ShowAlert(vm.$t("UnknownErrorOccur"), "failure", true, vm.$t("Alert"));
            vm.isLoading = false;
          }
        });
      } else {
        vm.ShowAlert(vm.$t("PleaseCorrectHighlightedErrors"), "failure", true);
      }
    },
    setFile: function (values, meta, e) {
      this.attachmentDiv = e.target.files[0].name;
      this.fileName = e.target.files[0];
      this.arrayGetFileDetails = e.target.files[0];
    },
    GetBlobUrl: function () {
      var vm = this;
      DataService["a" /* default */].GetBlobUrl().then(response => {
        var url = response.data[0].CONFIG_DATA_VALUE;
        var usertype = this.UserType;
        debugger;
        if (typeof vm.imgPath == 'undefined' || vm.imgPath == '' || vm.imgPath.toUpperCase() == "COMPANY-LOGO.JPG") {
          vm.blobUrl = "https://appone.talygen.com" + '/Content/images/DefaultImages/company-logo.jpg';
        }
        if (usertype == "CA" && this.imgPath.toUpperCase() != "COMPANY-LOGO.JPG" && typeof vm.imgPath != 'undefined' && vm.imgPath != '') {
          vm.blobUrl = url + '/' + this.containerName + '/' + 'Upload' + '/' + 'CompanyLogo' + '/' + vm.imgPath;
        }
      });
    },
    Getoption: function (params) {
      params = params == null ? '' : params;
      var options = [];
      $.each(params.split('^'), function (i, v) {
        options.push(v);
      });
      return options;
    },
    ClearImage: function (event) {
      this.blobUrl = "https://appone.talygen.com" + '/Content/images/DefaultImages/company-logo.jpg';
      this.defaultCompanyLogo = 'COMPANY-LOGO.JPG';
      if (event != this.blobUrl) {
        this.attachmentDiv = [];
        this.fileName = '';
        this.arrayGetFileDetails = [];
        return;
      } else {
        this.ShowAlert('this image will not be deleted, please upload new image: ', "warning", true, "Alert");
      }
      // ShowAlert("This image will not be deleted. Please upload a new image: " + this.defaultCompanyLogo, "warning", true, "Alert");
    },

    Clearimagevalue: function () {
      var vm = this;
      vm.attachmentDiv = '';
    }
  }
});
// CONCATENATED MODULE: ./src/views/AdvancedSetup/Configuration.vue?vue&type=script&lang=js&
 /* harmony default export */ var AdvancedSetup_Configurationvue_type_script_lang_js_ = (Configurationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/AdvancedSetup/Configuration.vue





/* normalize component */

var Configuration_component = Object(componentNormalizer["a" /* default */])(
  AdvancedSetup_Configurationvue_type_script_lang_js_,
  Configurationvue_type_template_id_7dd577d3_render,
  Configurationvue_type_template_id_7dd577d3_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Configuration = (Configuration_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AdvancedSetup/MoadalAdvanceSetup.vue?vue&type=script&lang=js&

/* harmony default export */ var MoadalAdvanceSetupvue_type_script_lang_js_ = ({
  components: {
    Configuration: Configuration
  },
  data() {
    return {
      step: 1,
      click: 'SetupAsset',
      CurrentTab: 1,
      IsClientStoragesCopmleted: false
    };
  },
  mounted: function () {
    var vm = this;
    $('#modalManageView').on('blur', function () {
      this.IsVisible = false;
    });
  },
  props: {
    IsVisible: {
      type: Boolean,
      required: true
    },
    popupCondition: {
      type: String,
      required: false
    }
  },
  watch: {
    IsVisible: {
      handler(val, older) {
        if (val) {
          this.IsVisible = val;
        }
      }
    }
  },
  methods: {
    close: function () {
      this.$parent.IsshowConfiguration = false;
    },
    SkipTab: function (s) {
      debugger;
      var vm = this;
      vm.step = s;
      vm.CurrentTab = s;
    },
    BackToStep: function (s) {
      var vm = this;
      vm.step = s;
    }
  }
});
// CONCATENATED MODULE: ./src/views/AdvancedSetup/MoadalAdvanceSetup.vue?vue&type=script&lang=js&
 /* harmony default export */ var AdvancedSetup_MoadalAdvanceSetupvue_type_script_lang_js_ = (MoadalAdvanceSetupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/AdvancedSetup/MoadalAdvanceSetup.vue?vue&type=style&index=0&id=686b1e71&prod&lang=css&
var MoadalAdvanceSetupvue_type_style_index_0_id_686b1e71_prod_lang_css_ = __webpack_require__("3041");

// CONCATENATED MODULE: ./src/views/AdvancedSetup/MoadalAdvanceSetup.vue






/* normalize component */

var MoadalAdvanceSetup_component = Object(componentNormalizer["a" /* default */])(
  AdvancedSetup_MoadalAdvanceSetupvue_type_script_lang_js_,
  MoadalAdvanceSetupvue_type_template_id_686b1e71_render,
  MoadalAdvanceSetupvue_type_template_id_686b1e71_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MoadalAdvanceSetup = (MoadalAdvanceSetup_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AdvancedSetup/EnableSections.vue?vue&type=template&id=26df1f0a&lang=en&
var EnableSectionsvue_type_template_id_26df1f0a_lang_en_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('Section', [_c('div', {
    staticClass: "modal my-popups right fade show",
    staticStyle: {
      "display": "block"
    },
    attrs: {
      "role": "dialog"
    }
  }, [_c('div', {
    staticClass: "modal-dialog mw-1100",
    attrs: {
      "role": "document"
    }
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('div', {
    staticClass: "modal-header mheader-user"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.OpenPopup
    }
  }, [_c('i', {
    staticClass: "fa fa-times",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _c('h4', {
    staticClass: "modal-title",
    attrs: {
      "id": "myModalLabel"
    }
  }, [_vm._v(_vm._s(_vm.$t('EnableSections')))])]), _c('div', {
    staticClass: "modal-body"
  }, [_c('h5', [_vm._v("Select what you want to use:")]), _c('div', {
    staticClass: "row mt-3 EnableSections",
    staticStyle: {
      "min-height": "300px"
    }
  }, _vm._l(_vm.GroupName, function (ParentItem, ParentIndex) {
    return _c('div', {
      key: ParentIndex,
      staticClass: "col-md-6 mb-4",
      attrs: {
        "value": ParentItem.enable_disable_sections_id
      }
    }, [_c('div', {
      staticClass: "conversation-date heading-border d-flex justify-content-between"
    }, [_c('span', [_c('em', {
      staticClass: "pr-1",
      attrs: {
        "aria-hidden": "true"
      }
    }), _vm._v(_vm._s(ParentItem.groupKey))]), _c('div', {
      attrs: {
        "isChecked": "true"
      }
    }, [_c('label', {
      staticClass: "switch"
    }, [_c('input', {
      staticClass: "form-check-input rdoticketfor custom-control-input dynamic",
      attrs: {
        "id": "isCheck_" + ParentItem.groupData[0].enable_disable_sections_id,
        "type": "checkbox"
      },
      domProps: {
        "checked": ParentItem.groupData[0].is_enable == 1
      },
      on: {
        "change": function ($event) {
          return _vm.SaveSliderButton(ParentItem.groupData[0].enable_disable_sections_id);
        }
      }
    }), _c('span', {
      staticClass: "slider round"
    }, [_c('span', {
      staticClass: "slider-yes",
      attrs: {
        "value": "1"
      }
    }, [_vm._v("Yes")]), _c('span', {
      staticClass: "slider-no",
      attrs: {
        "value": "0"
      }
    }, [_vm._v("No")])])])])]), _vm._l(ParentItem.groupData, function (ChildItem, ChildIndex) {
      return _c('div', {
        key: ChildIndex,
        staticClass: "col-12 p-0"
      }, [_c('span', {
        staticClass: "mb-2"
      }, [_c('i', {
        staticClass: "green fa fa-check-circle"
      }), _vm._v(" " + _vm._s(ChildItem.enable_disable_sections_name))])]);
    })], 2);
  }), 0), _c('div', {
    staticClass: "text-right"
  }, [_c('a', {
    staticClass: "btn btn-success formbtn",
    attrs: {
      "id": "hlkSave",
      "href": "javascript:;",
      "title": "Save"
    },
    on: {
      "click": function ($event) {
        return _vm.SaveEnableDisable();
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-save pr-2"
  }), _vm._v("Save")]), _vm._v("   "), _c('a', {
    staticClass: "btn btn-danger",
    attrs: {
      "id": "hlkCancel",
      "href": "javascript:;",
      "title": "Cancel"
    },
    on: {
      "click": function ($event) {
        return _vm.closepopup();
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-close pr-2"
  }), _vm._v("Cancel")])])])])])]), _c('EnableSections', {
    on: {
      "closepopup": _vm.closepopup
    }
  })], 1);
};
var EnableSectionsvue_type_template_id_26df1f0a_lang_en_staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/AdvancedSetup/EnableSections.vue?vue&type=template&id=26df1f0a&lang=en&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AdvancedSetup/EnableSections.vue?vue&type=script&lang=js&


/* harmony default export */ var EnableSectionsvue_type_script_lang_js_ = ({
  data() {
    return {
      ModuleEnableDisableList: [],
      sortBy: '',
      sortExp: '',
      TotalRecords: 0,
      pageNumber: 1,
      pageSize: 100,
      CurrentPage: 1,
      enable: null,
      jsonData: [],
      GroupName: []
    };
  },
  async created() {
    await this.FetchData();
    this.EnableDisableButton();
  },
  methods: {
    OpenPopup() {
      var vm = this;
      vm.$parent.closeenablesectionpopup();
    },
    closepopup() {
      var vm = this;
      vm.$parent.closeenablesectionpopup();
    },
    async FetchData() {
      var vueObj = this;
      vueObj.isLoading = true;
      var url = `moduleName=Asset&feature_id=&sortBy=${vueObj.sortBy}&sortExp=${vueObj.sortExp}&pageSize=${vueObj.pageSize}&pageNumber=${vueObj.pageNumber}`;
      await DataService["a" /* default */].GetEnableDisableFeature(url).then(response => {
        vueObj.isLoading = false;
        if (response.data != null && response.data != 0) {
          if (response.data.length > 0) {
            vueObj.GroupName = [];
            vueObj.ModuleEnableDisableList = response.data;
            var gruopBy = "";
            $.each(vueObj.ModuleEnableDisableList, $.proxy(function (index, item) {
              gruopBy = item.group_name;
              var chkGroup = $.grep(vueObj.GroupName, function (element, index) {
                return element.groupKey == gruopBy;
              });
              if (chkGroup.length == 0) {
                var returnedData = $.grep(vueObj.ModuleEnableDisableList, function (element, index) {
                  return element.group_name == gruopBy;
                });
                if (returnedData.length > 0) {
                  var objGroup = {
                    groupKey: gruopBy,
                    groupData: returnedData
                  };
                  vueObj.GroupName.push(objGroup);
                }
              }
            }, this));
            vueObj.TotalRecords = response.data[0].TOTAL;
            vueObj.TotalPages = Math.ceil(vueObj.TotalRecords / vueObj.pageSize);
            vueObj.CurrentPage = vueObj.pageNumber;
            vueObj.noRecord = false;
          } else {
            vueObj.noRecord = true;
            vueObj.ModuleEnableDisableList = [];
            vueObj.TotalRecords = 0;
          }
        }
      });
    },
    SaveEnableDisable() {
      var vm = this;
      var params = JSON.stringify(vm.jsonData);
      DataService["a" /* default */].SaveEnableDisableFeature(params).then(response => {
        if (response.data == 1) {
          vm.ShowAlert("Record Saved Successfully"), "success", 'Alert';
          vm.closepopup();
        } else {
          vm.ShowAlert("No Record Saved"), "success", 'Alert';
          vm.closepopup();
        }
      });
    },
    SaveSliderButton: function (ss) {
      var vm = this;
      var isChecked = $("#isCheck_" + ss).is(":checked");
      const Index = vm.ModuleEnableDisableList.find(x => x.enable_disable_sections_id === ss);
      Index.is_enable = isChecked;
      var postjSON = {
        enable_disable_sections_id: ss,
        is_enable: Index.is_enable == true ? 1 : 0
      };
      vm.jsonData.push(postjSON);
    }
  }
});
// CONCATENATED MODULE: ./src/views/AdvancedSetup/EnableSections.vue?vue&type=script&lang=js&
 /* harmony default export */ var AdvancedSetup_EnableSectionsvue_type_script_lang_js_ = (EnableSectionsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/AdvancedSetup/EnableSections.vue?vue&type=style&index=0&id=26df1f0a&prod&lang=css&
var EnableSectionsvue_type_style_index_0_id_26df1f0a_prod_lang_css_ = __webpack_require__("aaf8");

// CONCATENATED MODULE: ./src/views/AdvancedSetup/EnableSections.vue






/* normalize component */

var EnableSections_component = Object(componentNormalizer["a" /* default */])(
  AdvancedSetup_EnableSectionsvue_type_script_lang_js_,
  EnableSectionsvue_type_template_id_26df1f0a_lang_en_render,
  EnableSectionsvue_type_template_id_26df1f0a_lang_en_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var EnableSections = (EnableSections_component.exports);
// CONCATENATED MODULE: ./src/views/AdvancedSetup/SearchSchema.js

let leftSearchFields = [{
  name: 'Clients',
  iClass: 'fa fa-group',
  bClass: 'box-inner1'
}, {
  name: 'ManageTax',
  iClass: 'fa fa-dollar',
  bClass: 'box-inner2'
}, {
  name: 'CustomFields',
  iClass: 'fa fa-sliders',
  bClass: 'box-inner3'
}, {
  name: 'ManageLayout',
  iClass: 'fa fa-sliders',
  bClass: 'box-inner4'
}, {
  name: 'Category',
  iClass: 'fa fa-usb',
  bClass: 'box-inner5'
}, {
  name: 'Channel',
  iClass: 'fa fa-tags',
  bClass: 'box-inner4'
}, {
  name: 'ContactType',
  iClass: 'fa-file-text-o',
  bClass: 'box-inner5'
}, {
  name: 'CRMRoleType',
  iClass: 'fa fa-user-o',
  bClass: 'box-inner4'
}, {
  name: 'EmailTemplate',
  iClass: 'fa fa-envelope',
  bClass: 'box-inner3'
}, {
  name: 'Feedback',
  iClass: 'fa fa-comments-o',
  bClass: 'box-inner2'
}, {
  name: 'IndustryType',
  iClass: 'fa fa-industry',
  bClass: 'box-inner1'
}, {
  name: 'ProductType',
  iClass: 'fa fa-cube',
  bClass: 'box-inner4'
}, {
  name: 'Status',
  iClass: 'fa fa-star-half-o',
  bClass: 'box-inner5'
}, {
  name: 'CurrencyManagement',
  iClass: 'fa fa-dollar',
  bClass: 'box-inner3'
}];
let ClickSection = [{
  name: 'setup',
  iSetupProgress: true,
  ibarprogress: true,
  iClass: 'clr-4',
  divclass: 'box-padding',
  SetupProgress: '',
  progressColor: '',
  htext: 'SetupAssetManagement',
  ptext: 'SetTheModuleSimpleStep'
}, {
  name: 'Configuration',
  iSetupProgress: false,
  ibarprogress: false,
  divclass: 'doc-setup short-menu-item bg-white px-0 py-4 my-2 position-relative',
  SetupProgress: '',
  progressColor: '',
  iClass: 'fa fa fa-cog clr-1 font-30',
  htext: 'Configuration',
  ptext: 'Configure the module as per the requirements.'
}
// {
//     name: 'GeneralSetting',
//     iSetupProgress: false,
//     ibarprogress: false,
//     SetupProgress: '',
//     progressColor: '',
//     iClass: 'clr-1',
//     htext: 'GeneralSetting',
//     ptext: 'GeneralSettingTheModuleRequirements'
// },
// {
//     name: 'EnableDisbleSection',
//     iSetupProgress: false,
//     ibarprogress: false,
//     SetupProgress: '',
//     progressColor: '',
//     iClass: 'clr-1',
//     htext: 'EnableDisbleSection',
//     ptext: 'EnableDisbletext'
// }
];

async function GetProgresSetupStatusDetail(instance, modulename) {
  debugger;
  var vm = instance;
  let SetupProgress = 0;
  let params = {};
  params["moduleName"] = modulename;
  if (modulename == 'Lead') {
    await DataService["a" /* default */].GetProgresSetupStatusDetail(params).then(function (response) {
      if (response.data.result.length > 0) {
        response.data.result.forEach(element => {
          if (element.PROGRESS != null) {
            SetupProgress = SetupProgress + element.PROGRESS;
          }
        });
        ClickSection[0].SetupProgress = SetupProgress;
        if (SetupProgress == 50) {
          ClickSection[0].progressColor = 'progress-bar progress-bar-striped bg-warning';
        } else if (SetupProgress == 100) {
          ClickSection[0].progressColor = 'progress-bar progress-bar-striped bg-success';
        } else if (SetupProgress == 0) {
          ClickSection[0].progressColor = 'progress-bar progress-bar-striped';
        }
      }
    });
  }
}
/* harmony default export */ var SearchSchema = ({
  leftSearchFields,
  ClickSection,
  GetProgresSetupStatusDetail
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AdvancedSetup/AdvancedSetting.vue?vue&type=script&lang=js&




//import AdvanceSettingModal from "../../views/AdvancedSetup/MoadalAdvanceSetup.vue"
/* harmony default export */ var AdvancedSettingvue_type_script_lang_js_ = ({
  components: {
    AdvanceSettingModal: MoadalAdvanceSetup,
    addProduct: AdvancedSettings,
    EnableSections: EnableSections
  },
  data() {
    return {
      showSetUpCrmModalPopup: false,
      popupCondition: '',
      CompanyType: '',
      SetupProgress: 0,
      searchValue: '',
      moduleId: 0,
      progressColor: '',
      ModuleData: SearchSchema.leftSearchFields,
      SectionData: SearchSchema.ClickSection,
      IsEnableDisable: false,
      showpopup: false,
      popupCondition: "",
      IsshowConfiguration: false,
      popupConfiguration: "",
      EnableSectionspop: false
    };
  },
  created: async function () {
    debugger;
    await SearchSchema.GetProgresSetupStatusDetail(this, "Lead");
  },
  methods: {
    RedirectToLinks: function (redirectType) {
      var envLink = Object({"NODE_ENV":"production","VUE_APP_API_URL":"https://apponeapi.talygen.com/api/asset","VUE_APP_COMMON_API":"https://apponeapi.talygen.com/api","VUE_APP_CURRENT_SITE_ROOT_URL":"https://appone.talygen.com","VUE_APP_DEFAULT_APP_URL":"http://app.talygen.com","VUE_APP_FULL_MENU_APP_REDIRECTION":"true","VUE_APP_NODE_ENV":"live","VUE_APP_REPORT_SERVER_URL":"http://172.22.23.106/ReportServer","BASE_URL":"/"});
      if (redirectType == "Status") {
        var link = envLink.VUE_APP_DEFAULT_APP_URL + '/Status/Index';
        window.open(link);
        return false;
      } else if (redirectType == "ProductType") {
        var link = envLink.VUE_APP_CURRENT_SITE_ROOT_URL + '/Asset/Index';
        window.open(link);
        return false;
      } else if (redirectType == "ProductContainer") {
        var link = envLink.VUE_APP_CURRENT_SITE_ROOT_URL + '/Asset/AssetGrouping';
        window.open(link);
        return false;
      } else if (redirectType == "Location") {
        var link = envLink.VUE_APP_DEFAULT_APP_URL + '/Location/Index';
        window.open(link);
        return false;
      } else if (redirectType == "EmailTemplate") {
        var link = envLink.VUE_APP_DEFAULT_APP_URL + '/emailtemplate/Index';
        window.open(link);
        return false;
      }
      // else if(redirectType=="Tags"){            
      //     var link=envLink.VUE_APP_CURRENT_SITE_ROOT_URL+'/Custom/fields'
      //     window.open(link);
      //     return false
      // }
      else if (redirectType == "ManageTags") {
        var link = envLink.VUE_APP_DEFAULT_APP_URL + '/Tag/Index';
        window.open(link);
        return false;
      }
    },
    showadvancesettingpopup: function (param) {
      var vm = this;
      if (param == 'Configuration') {
        vm.popupConfiguration = param;
        vm.IsshowConfiguration = true;
        $("#modalManageView").modal('show');
        setTimeout(function () {
          $("#modalManageView").modal('show');
          setTimeout(function () {}, 200);
        }, 1000);
      } else if (param == 'setup') {
        vm.popupCondition = param;
        vm.showpopup = true;
        $("#modelAddProduct").modal('show');
        setTimeout(function () {
          $("#modelAddProduct").modal('show');
          setTimeout(function () {}, 200);
        }, 1000);
      }
    },
    openenablesectionpopup: function () {
      var vm = this;
      vm.EnableSectionspop = true;
    },
    closeenablesectionpopup: function () {
      var vm = this;
      vm.EnableSectionspop = false;
    },
    clearResult: function () {
      this.searchValue = '';
      this.ModuleData = SearchSchema.leftSearchFields;
    }
  }
});
// CONCATENATED MODULE: ./src/views/AdvancedSetup/AdvancedSetting.vue?vue&type=script&lang=js&
 /* harmony default export */ var AdvancedSetup_AdvancedSettingvue_type_script_lang_js_ = (AdvancedSettingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/AdvancedSetup/AdvancedSetting.vue?vue&type=style&index=0&id=11b73625&prod&lang=css&
var AdvancedSettingvue_type_style_index_0_id_11b73625_prod_lang_css_ = __webpack_require__("59aa");

// CONCATENATED MODULE: ./src/views/AdvancedSetup/AdvancedSetting.vue






/* normalize component */

var AdvancedSetting_component = Object(componentNormalizer["a" /* default */])(
  AdvancedSetup_AdvancedSettingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AdvancedSetting = __webpack_exports__["default"] = (AdvancedSetting_component.exports);

/***/ }),

/***/ "8e1a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProduct_vue_vue_type_style_index_0_id_3e2bb417_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8ada");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProduct_vue_vue_type_style_index_0_id_3e2bb417_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProduct_vue_vue_type_style_index_0_id_3e2bb417_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "a9da":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("6708");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("21a30fb3", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "aaf8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EnableSections_vue_vue_type_style_index_0_id_26df1f0a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c9b1");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EnableSections_vue_vue_type_style_index_0_id_26df1f0a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EnableSections_vue_vue_type_style_index_0_id_26df1f0a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "b34b":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("651d");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("77f27226", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "b392":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdvancedSettings_vue_vue_type_style_index_0_id_2e26b7ed_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("218e");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdvancedSettings_vue_vue_type_style_index_0_id_2e26b7ed_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdvancedSettings_vue_vue_type_style_index_0_id_2e26b7ed_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c9b1":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("65b2");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("3f00eca3", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "ccc5":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#modelAddProduct .modal-dialog{max-width:1200px!important}#Location .vue-treeselect__control .vue-treeselect__x-container{display:none}#Location .vue-treeselect{position:relative;text-align:left;border:1px solid #abb5bf}#Location .vue-treeselect--single .vue-treeselect__input{width:100%;height:100%;box-sizing:border-box;border:none}#modelAddProduct .custom-checkbox.custom-checkbox .custom-control-label:before,.custom-checkbox .custom-control-input:checked~.custom-control-label:after{display:none}.vue-treeselect.form-control .vue-treeselect__control{border:none!important;height:auto}.vue-treeselect.form-control .vue-treeselect__control .vue-treeselect__single-value{line-height:20px;padding-left:0}.no-spinner::-webkit-inner-spin-button,.no-spinner::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.no-spinner{-moz-appearance:textfield}.custlocation>span{width:91%}.custlocation .vue-treeselect__placeholder.vue-treeselect-helper-zoom-effect-off{line-height:22px}.modal-backdrop{visibility:hidden}", ""]);
// Exports
module.exports = exports;


/***/ })

}]);
//# sourceMappingURL=chunk-60d2c7bf.js.map