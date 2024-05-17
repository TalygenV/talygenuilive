(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-74672f84"],{

/***/ "0c80":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_filter_vue_vue_type_style_index_0_id_599d869a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b1fb");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_filter_vue_vue_type_style_index_0_id_599d869a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_filter_vue_vue_type_style_index_0_id_599d869a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "69d3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Common/search-filter.vue?vue&type=template&id=599d869a&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('transition', {
    attrs: {
      "name": "modal"
    }
  }, [_c('div', {
    staticClass: "my-popups"
  }, [_c('div', {
    staticClass: "modal d-block"
  }, [_c('div', {
    staticClass: "modal-dialog modal-dialog-centered"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('div', {
    staticClass: "modal-header"
  }, [_c('h4', {
    staticClass: "modal-title",
    attrs: {
      "name": "header"
    }
  }, [_vm._v(_vm._s(_vm.$t("Search")))]), _c('button', {
    staticClass: "close",
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close');
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-times",
    attrs: {
      "aria-hidden": "true"
    }
  })])]), _c('div', {
    staticClass: "modal-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left"
  }, [_c('div', {
    staticClass: "form-content"
  }, [_vm.showListData ? _c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 float-left",
    attrs: {
      "id": "divshowSearchCriteriaList"
    }
  }, [_vm.filterData.length >= 10 ? _c('div', {
    staticClass: "form-group is-invalid"
  }, [_c('div', {
    staticClass: "invalid-feedback alert alert-danger",
    staticStyle: {
      "display": "block"
    },
    attrs: {
      "role": "alert"
    }
  }, [_vm._v(" " + _vm._s(_vm.$t("NotAddMoreThanTen")) + " "), _c('a', {
    attrs: {
      "href": "javascript:;"
    }
  }, [_c('em', {
    staticClass: "fa fa-close float-right text-danger"
  })])])]) : _vm._e(), _c('div', {
    staticClass: "heading-border"
  }, [_c('h5', {
    staticClass: "h5"
  }, [_c('span', [_vm._v(" " + _vm._s(_vm.$t("Filter")))]), _vm.filterData.length < 10 ? _c('small', {
    staticClass: "float-right"
  }, [_c('a', {
    attrs: {
      "href": "javascript:;",
      "title": _vm.$t('Add')
    },
    on: {
      "click": function ($event) {
        _vm.showListData = false;
        _vm.showAddData = true;
        _vm.filterName = '';
        _vm.filterId = 0;
        _vm.conditionText = '';
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-plus pr-2"
  }), _vm._v(" " + _vm._s(_vm.$t("Add")) + " ")])]) : _vm._e()])]), _c('div', {
    staticClass: "listing mt-2"
  }, [_c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-bordered dt-responsive nowrap mt-0 dataTable no-footer dtr-inline",
    attrs: {
      "aria-describedby": "serachfilter"
    }
  }, [_c('thead', {
    staticClass: "thead-bg"
  }, [_c('tr', [_c('th', {
    staticStyle: {
      "min-width": "480px"
    },
    attrs: {
      "scope": "col"
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('Name')))])]), _c('th', {
    staticClass: "text-center",
    staticStyle: {
      "min-width": "70px"
    },
    attrs: {
      "scope": "col"
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('Edit')))])]), _c('th', {
    staticClass: "text-center",
    staticStyle: {
      "min-width": "70px"
    },
    attrs: {
      "scope": "col"
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('Apply')))])]), _c('th', {
    staticClass: "text-center",
    staticStyle: {
      "min-width": "70px"
    },
    attrs: {
      "scope": "col"
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('Delete')))])])])]), _c('tbody', [_vm._l(_vm.$parent.appliedFilter, function (item, itemindex) {
    return _c('tr', {
      key: itemindex
    }, [_c('td', [_vm._v(_vm._s(item.field_name))]), _c('td', {
      staticClass: "text-center single-action"
    }, [_c('a', {
      staticClass: "pr-2",
      attrs: {
        "href": "javascript:;",
        "title": _vm.$t('Edit')
      },
      on: {
        "click": function ($event) {
          return _vm.EditFilter(item, 'NotSaved');
        }
      }
    }, [_c('em', {
      staticClass: "fa fa-pencil text-success action-icon",
      attrs: {
        "aria-hidden": "true"
      }
    })])]), _c('td', {
      staticClass: "text-center single-action"
    }, [_c('a', {
      staticClass: "pr-2",
      attrs: {
        "href": "javascript:;",
        "title": _vm.$t('Apply')
      },
      on: {
        "click": function ($event) {
          return _vm.ApplyFilter(item.searchCondition);
        }
      }
    }, [_c('em', {
      class: {
        'fa fa-check action-icon': true,
        'text-success': _vm.$parent.searchCondition == item.searchCondition,
        'text-primary': _vm.$parent.searchCondition != item.searchCondition
      },
      attrs: {
        "aria-hidden": "true"
      }
    })])]), _c('td', {
      staticClass: "text-center single-action"
    }, [_c('a', {
      attrs: {
        "href": "javascript:;",
        "title": _vm.$t('Delete')
      },
      on: {
        "click": function ($event) {
          return _vm.ClearFilter();
        }
      }
    }, [_c('em', {
      staticClass: "fa fa-trash text-danger action-icon",
      attrs: {
        "aria-hidden": "true"
      }
    })])])]);
  }), _vm._l(_vm.filterData, function (item, index1) {
    return _c('tr', {
      key: index1
    }, [_c('td', [_vm._v(_vm._s(item.FILTER_NAME))]), _c('td', {
      staticClass: "text-center single-action"
    }, [_c('a', {
      staticClass: "pr-2",
      attrs: {
        "href": "javascript:;",
        "title": _vm.$t('Edit')
      },
      on: {
        "click": function ($event) {
          return _vm.EditFilter(item, '');
        }
      }
    }, [_c('em', {
      staticClass: "fa fa-pencil text-success action-icon",
      attrs: {
        "aria-hidden": "true"
      }
    })])]), _c('td', {
      staticClass: "text-center single-action"
    }, [_vm.$parent.searchCondition == item.DATABASE_CONDITION ? _c('a', {
      staticClass: "pr-2",
      attrs: {
        "href": "javascript:;",
        "title": "Applied"
      }
    }, [_c('em', {
      class: {
        'fa fa-check action-icon': true,
        'text-success disabled': _vm.$parent.searchCondition == item.DATABASE_CONDITION,
        'text-primary': _vm.$parent.searchCondition != item.DATABASE_CONDITION
      },
      attrs: {
        "aria-hidden": "true"
      }
    })]) : _c('a', {
      staticClass: "pr-2",
      attrs: {
        "href": "javascript:;",
        "title": "Apply"
      },
      on: {
        "click": function ($event) {
          return _vm.ApplyFilter(item.DATABASE_CONDITION);
        }
      }
    }, [_c('em', {
      class: {
        'fa fa-check action-icon': true,
        'text-success': _vm.$parent.searchCondition == item.DATABASE_CONDITION,
        'text-primary': _vm.$parent.searchCondition != item.DATABASE_CONDITION
      },
      attrs: {
        "aria-hidden": "true"
      }
    })])]), _c('td', {
      staticClass: "text-center single-action"
    }, [_c('a', {
      attrs: {
        "href": "javascript:;",
        "title": _vm.$t('Delete')
      },
      on: {
        "click": function ($event) {
          return _vm.deleteFilter(item);
        }
      }
    }, [_c('em', {
      staticClass: "fa fa-trash text-danger action-icon",
      attrs: {
        "aria-hidden": "true"
      }
    })])])]);
  }), (_vm.filterData == null || _vm.filterData.length == 0) && (_vm.$parent.appliedFilter == undefined || _vm.$parent.appliedFilter == null || _vm.$parent.appliedFilter != undefined && _vm.$parent.appliedFilter.length == 0) ? _c('tr', [_c('td', {
    staticClass: "text-center text-danger py-3",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.$t('NoRecordfound')))])]) : _vm._e()], 2)])])])]) : _vm._e(), _vm.showAddData ? _c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 float-left",
    attrs: {
      "id": "divManageSearchCriteria"
    }
  }, [_c('Form', {
    ref: "form",
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        values,
        meta
      }) {
        return [_c('div', {
          staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 float-left"
        }, [_c('div', {
          staticClass: "col-md-12"
        }, [_c('div', {
          staticClass: "row"
        }, [_c('div', {
          staticClass: "col-md-4 px-0"
        }, [_c('div', {
          staticClass: "form-group mb-0"
        }, [_c('label', [_vm._v(" " + _vm._s(_vm.$t('Name')) + ": "), _c('span', {
          staticClass: "text-danger"
        }, [_vm._v("*")])]), _c('Field', {
          attrs: {
            "name": "name",
            "rules": {
              'required': true
            }
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              errors
            }) {
              return [_c('input', {
                directives: [{
                  name: "model",
                  rawName: "v-model.trim",
                  value: _vm.filterName,
                  expression: "filterName",
                  modifiers: {
                    "trim": true
                  }
                }],
                class: {
                  'form-control': true,
                  'is-invalid': errors[0]
                },
                attrs: {
                  "name": "name",
                  "maxlength": "100",
                  "type": "text"
                },
                domProps: {
                  "value": _vm.filterName
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.filterName = $event.target.value.trim();
                  },
                  "blur": function ($event) {
                    return _vm.$forceUpdate();
                  }
                }
              }), errors[0] ? _c('span', {
                staticClass: "invalid-feedback",
                attrs: {
                  "name": "name"
                }
              }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
            }
          }], null, true)
        })], 1)]), _c('div', {
          staticClass: "listing mt-2 below768 p-0"
        }, [_c('div', {
          staticClass: "table-responsive overflow-visible"
        }, [_c('table', {
          staticClass: "table table-bordered dt-responsive nowrap mt-0 dataTable no-footer dtr-inline",
          attrs: {
            "aria-describedby": "search-filter-table"
          }
        }, [_c('thead', {
          staticClass: "thead-bg"
        }, [_c('tr', [_c('th', {
          staticStyle: {
            "min-width": "110px",
            "max-width": "110px"
          },
          attrs: {
            "scope": "col"
          }
        }, [_c('span', [_vm._v(_vm._s(_vm.$t('fieldName')))])]), _c('th', {
          staticStyle: {
            "min-width": "160px",
            "max-width": "110px"
          },
          attrs: {
            "scope": "col"
          }
        }, [_c('span', [_vm._v(_vm._s(_vm.$t('ConditionalOperator')))])]), _c('th', {
          staticStyle: {
            "min-width": "350px"
          },
          attrs: {
            "scope": "col"
          }
        }, [_c('span', [_vm._v(_vm._s(_vm.$t('Value')))])]), _c('th', {
          staticClass: "text-center",
          attrs: {
            "scope": "col"
          }
        }, [_c('a', {
          staticClass: "text-success",
          attrs: {
            "href": "javascript:void(0)"
          },
          on: {
            "click": _vm.AddSearchData
          }
        }, [_c('em', {
          staticClass: "fa fa-plus pr-2"
        }), _vm._v(" " + _vm._s(_vm.$t('Add')) + " ")])])])]), _c('tbody', _vm._l(_vm.filterItemData, function (item, index) {
          return _c('tr', {
            key: index
          }, [_c('td', [_c('Field', {
            attrs: {
              "name": 'field_name' + (index + 1),
              "rules": {
                'required': true
              },
              "label": "Field Name"
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
                    value: item.field_name,
                    expression: "item.field_name"
                  }],
                  class: {
                    'form-control disableAria': true,
                    'is-invalid': errors[0]
                  },
                  attrs: {
                    "name": 'field_name' + (index + 1)
                  },
                  on: {
                    "change": [function ($event) {
                      var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                        return o.selected;
                      }).map(function (o) {
                        var val = "_value" in o ? o._value : o.value;
                        return val;
                      });
                      _vm.$set(item, "field_name", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
                    }, function ($event) {
                      return _vm.GetOperatorData($event, item, index);
                    }]
                  }
                }, [_c('option', {
                  attrs: {
                    "value": ""
                  }
                }, [_vm._v(_vm._s(_vm.$t("Select")))]), _vm._l(_vm.fieldNameData, function (option, index3) {
                  return _c('option', {
                    key: index3,
                    domProps: {
                      "value": String(option.custom_field_id)
                    }
                  }, [_vm._v(" " + _vm._s(_vm.GetFieldDisplayName(option.label, option.display_name)))]);
                })], 2)];
              }
            }], null, true)
          })], 1), _c('td', [_c('Field', {
            attrs: {
              "name": 'operator' + (index + 1),
              "rules": {
                'required': true
              },
              "label": "operator"
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
                    value: item.operator,
                    expression: "item.operator"
                  }],
                  class: {
                    'form-control': true,
                    'disableAria': true,
                    'is-invalid': errors[0]
                  },
                  attrs: {
                    "name": 'operator' + (index + 1)
                  },
                  on: {
                    "change": [function ($event) {
                      var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                        return o.selected;
                      }).map(function (o) {
                        var val = "_value" in o ? o._value : o.value;
                        return val;
                      });
                      _vm.$set(item, "operator", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
                    }, function ($event) {
                      return _vm.ShowFieldValue($event, item, index);
                    }]
                  }
                }, [_c('option', {
                  attrs: {
                    "value": ""
                  }
                }, [_vm._v(_vm._s(_vm.$t("Select")))]), _vm._l(item.operator_list, function (option, index2) {
                  return _c('option', {
                    key: index2,
                    domProps: {
                      "value": String(option.OPERATOR_ID)
                    }
                  }, [_vm._v(" " + _vm._s(option.OPERATOR_DISPLAY_NAME))]);
                })], 2)];
              }
            }], null, true)
          })], 1), _c('td', {
            staticClass: "overflow-visible"
          }, [item.dt_code == 'date' || item.dt_code == 'datetime' ? _c('div', {
            class: {
              'col-5 p-0 float-left pr-1': item.operator_expression == 'between'
            }
          }, [_c('Field', {
            attrs: {
              "name": 'date' + item.label + index,
              "rules": {
                'required': item.is_required
              },
              "label": item.label + index
            },
            scopedSlots: _vm._u([{
              key: "default",
              fn: function ({
                errors
              }) {
                return [item.dt_code == 'date' || item.dt_code == 'datetime' ? _c('v-date-picker', {
                  staticClass: "input-group",
                  class: {
                    'disableAria': true,
                    'is-invalid': (item.dt_code == 'date' || item.dt_code == 'datetime') && errors[0]
                  },
                  attrs: {
                    "popover": _vm.popover,
                    "minute-increment": 5,
                    "masks": _vm.masks,
                    "name": 'date' + item.label + index,
                    "value": _vm.$options.filters.formatDate(item.value)
                  },
                  on: {
                    "dayclick": function ($event) {
                      return _vm.SetValues($event, item);
                    }
                  },
                  scopedSlots: _vm._u([{
                    key: "default",
                    fn: function ({
                      inputValue,
                      inputEvents,
                      togglePopover
                    }) {
                      return [_c('input', _vm._g({
                        staticClass: "form-control",
                        domProps: {
                          "value": inputValue
                        }
                      }, inputEvents)), _c('div', {
                        staticClass: "input-group-append",
                        on: {
                          "click": function ($event) {
                            return togglePopover();
                          }
                        }
                      }, [_c('span', {
                        staticClass: "input-group-text"
                      }, [_c('em', {
                        staticClass: "fa fa-calendar"
                      })])])];
                    }
                  }], null, true),
                  model: {
                    value: item.value,
                    callback: function ($$v) {
                      _vm.$set(item, "value", $$v);
                    },
                    expression: "item.value"
                  }
                }) : _vm._e()];
              }
            }], null, true)
          })], 1) : _vm._e(), (item.dt_code == 'date' || item.dt_code == 'datetime') && item.operator_expression == 'between' ? _c('div', {
            staticClass: "col-2 float-left",
            staticStyle: {
              "margin-top": "6px"
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('And', 'And')))]) : _vm._e(), (item.dt_code == 'date' || item.dt_code == 'datetime') && item.operator_expression == 'between' ? _c('div', {
            class: {
              'input-group': true,
              'col-5 p-0 float-left': item.operator_expression == 'between'
            }
          }, [_c('Field', {
            attrs: {
              "name": 'second' + item.label + index,
              "rules": {
                'required': item.is_required
              },
              "label": item.label + index
            },
            scopedSlots: _vm._u([{
              key: "default",
              fn: function ({
                errors
              }) {
                return [item.dt_code == 'date' || item.dt_code == 'datetime' ? _c('v-date-picker', {
                  ref: "SecondDatePicker",
                  refInFor: true,
                  staticClass: "input-group",
                  class: {
                    'disableAria': true,
                    'is-invalid': (item.dt_code == 'date' || item.dt_code == 'datetime') && errors[0]
                  },
                  attrs: {
                    "popover": _vm.popover,
                    "minute-increment": 5,
                    "min-date": _vm.getMinDate(item.value),
                    "masks": _vm.masks,
                    "name": 'second' + item.label + index
                  },
                  on: {
                    "dayclick": function ($event) {
                      return _vm.SetValues($event, item, 'second');
                    }
                  },
                  scopedSlots: _vm._u([{
                    key: "default",
                    fn: function ({
                      inputValue,
                      inputEvents,
                      togglePopover
                    }) {
                      return [_c('input', _vm._g({
                        staticClass: "form-control",
                        domProps: {
                          "value": inputValue
                        }
                      }, inputEvents)), _c('div', {
                        staticClass: "input-group-append",
                        on: {
                          "click": function ($event) {
                            return togglePopover();
                          }
                        }
                      }, [_c('span', {
                        staticClass: "input-group-text"
                      }, [_c('em', {
                        staticClass: "fa fa-calendar"
                      })])])];
                    }
                  }], null, true),
                  model: {
                    value: item.second_value,
                    callback: function ($$v) {
                      _vm.$set(item, "second_value", $$v);
                    },
                    expression: "item.second_value"
                  }
                }) : _vm._e()];
              }
            }], null, true)
          })], 1) : _vm._e(), item.picklist_options != 'Lookup' && item.dt_code != 'date' && item.dt_code != 'datetime' && item.dt_code != 'radio' && item.dt_code != 'select' && item.dt_code != 'textarea' && item.dt_code != 'checkbox' ? _c('Field', {
            attrs: {
              "name": item.label + index,
              "rules": {
                'required': item.is_required
              },
              "label": "Value"
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
                    value: item.value,
                    expression: "item.value"
                  }],
                  class: {
                    'form-control disableAria': true,
                    'is-invalid': errors[0],
                    'col-5 float-left': item.operator_expression == 'between'
                  },
                  attrs: {
                    "id": item.label + index,
                    "name": item.label + index,
                    "type": "text"
                  },
                  domProps: {
                    "value": item.value
                  },
                  on: {
                    "input": [function ($event) {
                      if ($event.target.composing) return;
                      _vm.$set(item, "value", $event.target.value);
                    }, function ($event) {
                      return _vm.SetValues($event, item);
                    }]
                  }
                })];
              }
            }], null, true)
          }) : _vm._e(), item.picklist_options != 'Lookup' && item.dt_code != 'date' && item.dt_code != 'datetime' && item.dt_code != 'radio' && item.dt_code != 'select' && item.dt_code != 'textarea' && item.dt_code != 'checkbox' && item.operator_expression == 'between' ? _c('div', {
            staticClass: "col-2 float-left",
            staticStyle: {
              "margin-top": "6px"
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('And', 'And')) + " ")]) : _vm._e(), item.picklist_options != 'Lookup' && item.dt_code != 'date' && item.dt_code != 'datetime' && item.dt_code != 'radio' && item.dt_code != 'select' && item.dt_code != 'textarea' && item.dt_code != 'checkbox' && item.operator_expression == 'between' ? _c('Field', {
            attrs: {
              "name": 'second' + item.label + index,
              "rules": {
                'required': item.is_required
              },
              "label": 'second' + item.label + index
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
                    value: item.second_value,
                    expression: "item.second_value"
                  }],
                  class: {
                    'form-control disableAria': true,
                    'is-invalid': errors[0],
                    'col-5 float-left': item.operator_expression == 'between'
                  },
                  attrs: {
                    "type": "text",
                    "id": item.label,
                    "name": 'second' + item.label + index
                  },
                  domProps: {
                    "value": item.second_value
                  },
                  on: {
                    "input": [function ($event) {
                      if ($event.target.composing) return;
                      _vm.$set(item, "second_value", $event.target.value);
                    }, function ($event) {
                      return _vm.SetValues($event, item, 'second');
                    }]
                  }
                })];
              }
            }], null, true)
          }) : _vm._e(), item.dt_code == 'textarea' ? _c('Field', {
            attrs: {
              "name": 'textarea' + item.label + index,
              "rules": {
                'required': item.is_required
              },
              "label": item.label + index
            },
            scopedSlots: _vm._u([{
              key: "default",
              fn: function ({
                errors
              }) {
                return [_c('textarea', {
                  directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: item.value,
                    expression: "item.value"
                  }],
                  class: {
                    'form-control': true,
                    'is-invalid': item.dt_code == 'textarea' && errors[0]
                  },
                  attrs: {
                    "id": item.label
                  },
                  domProps: {
                    "value": item.value
                  },
                  on: {
                    "change": function ($event) {
                      return _vm.SetValues($event, item);
                    },
                    "input": function ($event) {
                      if ($event.target.composing) return;
                      _vm.$set(item, "value", $event.target.value);
                    }
                  }
                })];
              }
            }], null, true)
          }) : _vm._e(), item.dt_code == 'radio' ? _c('div', {
            staticClass: "form-control pl-4 border-0 bg-transparent"
          }, [_c('div', {
            staticClass: "form-check form-check-inline customcheckinput"
          }, _vm._l(_vm.MakeArray(item.picklist_options, item.dt_code), function (option, optionIndex) {
            return _c('div', {
              key: optionIndex,
              staticClass: "form-check form-check-inline custom-control mx-4 pl-2 custom-radio",
              attrs: {
                "key": option.name
              }
            }, [_c('Field', {
              attrs: {
                "name": 'rdo_' + item.custom_field_id + option.value,
                "rules": {
                  'required': item.is_required
                },
                "label": item.label
              }
            }, [_c('input', {
              directives: [{
                name: "model",
                rawName: "v-model",
                value: item.value,
                expression: "item.value"
              }],
              staticClass: "dynamic form-check-input custom-control-input",
              attrs: {
                "id": 'rdo_' + item.custom_field_id + option.value,
                "name": 'rdo_' + item.custom_field_id + option.value,
                "data-resource": option.name,
                "type": "radio"
              },
              domProps: {
                "value": option.value,
                "checked": option.value == item.value,
                "checked": _vm._q(item.value, option.value)
              },
              on: {
                "change": [function ($event) {
                  return _vm.$set(item, "value", option.value);
                }, function ($event) {
                  return _vm.SetValues($event, item);
                }]
              }
            })]), _c('label', {
              staticClass: "custom-control-label universalradio-custom-control-label pl-0 pt-0 dynamic",
              attrs: {
                "for": 'rdo_' + item.custom_field_id + option.value
              }
            }, [_vm._v(_vm._s(option.name))])], 1);
          }), 0)]) : _vm._e(), item.dt_code == 'checkbox' ? _c('div', {
            staticClass: "form-control pl-0 border-0 bg-transparent"
          }, [_c('div', {
            staticClass: "form-check form-check-inline"
          }, _vm._l(_vm.MakeArray(item.picklist_options, item.dt_code), function (option, optionIndex1) {
            return _c('div', {
              key: optionIndex1,
              staticClass: "custom-control custom-checkbox"
            }, [_c('Field', {
              attrs: {
                "name": 'chk_' + item.custom_field_id + option.value,
                "rules": {
                  'required': item.is_required
                },
                "label": item.label
              }
            }, [_c('input', {
              directives: [{
                name: "model",
                rawName: "v-model",
                value: item.select_value,
                expression: "item.select_value"
              }],
              staticClass: "dynamic custom-control-input",
              attrs: {
                "id": 'chk_' + item.custom_field_id + option.value,
                "name": 'chk_' + item.custom_field_id + option.value,
                "data-resource-id": option.name,
                "type": "checkbox"
              },
              domProps: {
                "value": option.value,
                "checked": Array.isArray(item.select_value) ? _vm._i(item.select_value, option.value) > -1 : item.select_value
              },
              on: {
                "change": [function ($event) {
                  var $$a = item.select_value,
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false;
                  if (Array.isArray($$a)) {
                    var $$v = option.value,
                      $$i = _vm._i($$a, $$v);
                    if ($$el.checked) {
                      $$i < 0 && _vm.$set(item, "select_value", $$a.concat([$$v]));
                    } else {
                      $$i > -1 && _vm.$set(item, "select_value", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
                    }
                  } else {
                    _vm.$set(item, "select_value", $$c);
                  }
                }, function ($event) {
                  return _vm.SetValues($event, item);
                }]
              }
            })]), _c('label', {
              staticClass: "custom-control-label universal-custom-control-label pl-2 pr-1 dynamic",
              attrs: {
                "for": 'chk_' + item.custom_field_id + option.value
              }
            }, [_vm._v(_vm._s(option.name))])], 1);
          }), 0)]) : _vm._e(), item.picklist_options == 'Lookup' && item.dt_code == 'select' && (item.dropdown_type == 'custom' || item.dropdown_type == 'normal' && (item.operator_expression == 'IN' || item.operator_expression == 'NOT IN')) ? _c('Field', {
            attrs: {
              "name": 'Multiselect' + item.label + index,
              "rules": {
                'required': item.is_required
              },
              "label": item.label + index
            },
            scopedSlots: _vm._u([{
              key: "default",
              fn: function ({
                errors
              }) {
                return [_c('Multiselect', {
                  class: {
                    'disableAria': true,
                    'is-invalid': item.picklist_options == 'Lookup' && item.dt_code == 'select' && item.dropdown_type == 'custom' && errors[0]
                  },
                  attrs: {
                    "multiple": item.operator_expression == 'IN' || item.operator_expression == 'NOT IN' ? true : false,
                    "name": 'Multiselect' + item.label + index,
                    "placeholder": "Search a value",
                    "value": item.value,
                    "filter-results": false,
                    "searchable": true,
                    "track-by": "value",
                    "show-no-results": false,
                    "internal-search": false,
                    "clear-on-select": false,
                    "close-on-select": true,
                    "options": item.dropdown_type == 'normal' ? _vm.MakeNormalArray(item.select_options) : item.select_options,
                    "object": true,
                    "label": "name",
                    "showNoOptions": true
                  },
                  on: {
                    "search-change": function ($event) {
                      return _vm.onSearch($event, item);
                    },
                    "select": function ($event) {
                      return _vm.setSelectedValue(item, $event);
                    }
                  },
                  model: {
                    value: item.select_value,
                    callback: function ($$v) {
                      _vm.$set(item, "select_value", $$v);
                    },
                    expression: "item.select_value"
                  }
                }, [_c('span', {
                  attrs: {
                    "slot": "noOptions"
                  },
                  slot: "noOptions"
                }, [_vm._v(" Type to search " + _vm._s(_vm.$t(item.label, item.display_name)) + " ")])])];
              }
            }], null, true)
          }) : _vm._e(), item.picklist_options == 'Lookup' && item.dt_code == 'select' && item.dropdown_type == 'normal' && item.operator_expression != 'IN' && item.operator_expression != 'NOT IN' ? _c('Field', {
            attrs: {
              "name": 'select' + item.label + index,
              "rules": {
                'required': item.is_required
              }
            },
            scopedSlots: _vm._u([{
              key: "default",
              fn: function ({
                errors
              }) {
                return [_c('select', {
                  class: {
                    'form-control disableAria': true,
                    'is-invalid': errors[0]
                  },
                  attrs: {
                    "name": 'select' + item.label + index
                  },
                  on: {
                    "change": function ($event) {
                      return _vm.SetValues($event, item, index);
                    }
                  }
                }, [_c('option', {
                  attrs: {
                    "value": ""
                  }
                }, [_vm._v(_vm._s(_vm.$t("Select")))]), _vm._l(_vm.MakeNormalArray(item.select_options), function (option, optionKey) {
                  return _c('option', {
                    key: optionKey,
                    domProps: {
                      "value": option.value
                    }
                  }, [_vm._v(_vm._s(option.name))]);
                })], 2)];
              }
            }], null, true),
            model: {
              value: item.value,
              callback: function ($$v) {
                _vm.$set(item, "value", $$v);
              },
              expression: "item.value"
            }
          }) : _vm._e(), item.picklist_options != 'Lookup' && item.dt_code == 'select' && item.operator_expression != 'IN' && item.operator_expression != 'NOT IN' ? _c('Field', {
            attrs: {
              "name": 'select2' + item.label + index,
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
                  class: {
                    'form-control disableAria': true,
                    'is-invalid': errors[0]
                  },
                  attrs: {
                    "name": 'select2' + item.label + index
                  },
                  on: {
                    "change": function ($event) {
                      return _vm.SetValues($event, item, index);
                    }
                  }
                }, [_c('option', {
                  attrs: {
                    "value": ""
                  }
                }, [_vm._v(_vm._s(_vm.$t("Select")))]), _vm._l(_vm.MakeArray(item.picklist_options, item.dt_code), function (option) {
                  return item.picklist_options != null ? _c('option', {
                    domProps: {
                      "selected": item.value == option.value,
                      "value": option.value
                    }
                  }, [_vm._v(" " + _vm._s(option.name) + " ")]) : _vm._e();
                })], 2)];
              }
            }], null, true),
            model: {
              value: item.value,
              callback: function ($$v) {
                _vm.$set(item, "value", $$v);
              },
              expression: "item.value"
            }
          }) : _vm._e(), item.picklist_options != 'Lookup' && item.picklist_options != null && item.dt_code == 'select' && (item.operator_expression == 'IN' || item.operator_expression == 'NOT IN') ? _c('Field', {
            attrs: {
              "name": 'Multiselect2' + item.label + index,
              "rules": {
                'required': item.is_required
              },
              "label": "name"
            },
            scopedSlots: _vm._u([{
              key: "default",
              fn: function ({
                errors
              }) {
                return [_c('Multiselect', {
                  class: {
                    'disableAria': true,
                    'is-invalid': item.picklist_options == 'Lookup' && item.dt_code == 'select' && item.dropdown_type == 'custom' && errors[0]
                  },
                  attrs: {
                    "multiple": item.operator_expression == 'IN' || item.operator_expression == 'NOT IN' ? true : false,
                    "taggable": item.operator_expression == 'IN' || item.operator_expression == 'NOT IN' ? true : false,
                    "placeholder": "Search a value",
                    "showNoOptions": true,
                    "filter-results": false,
                    "searchable": true,
                    "track-by": "value",
                    "show-no-results": false,
                    "internal-search": false,
                    "clear-on-select": false,
                    "close-on-select": true,
                    "options": _vm.MakeArray(item.picklist_options, item.dt_code),
                    "object": true,
                    "label": "name"
                  },
                  on: {
                    "search-change": function ($event) {
                      return _vm.onSearch($event, item);
                    },
                    "select": function ($event) {
                      return _vm.setSelectedValue(item, $event);
                    }
                  },
                  model: {
                    value: item.select_value,
                    callback: function ($$v) {
                      _vm.$set(item, "select_value", $$v);
                    },
                    expression: "item.select_value"
                  }
                }, [_c('span', {
                  attrs: {
                    "slot": "noOptions"
                  },
                  slot: "noOptions"
                }, [_vm._v(" Type to search " + _vm._s(_vm.$t(item.label, item.display_name)) + " ")])])];
              }
            }], null, true)
          }) : _vm._e()], 1), _c('td', {
            staticClass: "text-center single-action"
          }, [index != 0 ? _c('a', {
            attrs: {
              "href": "javascript:;"
            },
            on: {
              "click": function ($event) {
                return _vm.DeleteSearchItem(item, index);
              }
            }
          }, [_c('em', {
            staticClass: "fa fa-trash action-icon text-danger"
          })]) : _vm._e()])]);
        }), 0)])])]), !_vm.isBlank(_vm.condition) ? _c('div', {
          staticClass: "col-12 float-left p-0 mt-2"
        }, [_c('div', {
          staticClass: "alert alert-secondary py-2"
        }, [_c('label', {
          staticClass: "font-weight-bold mb-0"
        }, [_vm._v(_vm._s(_vm.$t("Condition")) + " :")]), _c('label', {
          staticClass: "mb-0 ml-1"
        }, [_vm._v(_vm._s(_vm.condition))])])]) : _vm._e(), _c('div', {
          staticClass: "col-12 float-left p-0 mt-2 d-none"
        }, [_c('div', {
          staticClass: "alert alert-secondary py-2"
        }, [_c('label', {
          staticClass: "font-weight-bold mb-0"
        }, [_vm._v(" Database Condition: ")]), _c('label', {
          staticClass: "mb-0 ml-1"
        }, [_vm._v(" " + _vm._s(_vm.databaseCondition) + " ")])])])])])]), _c('div', {
          staticClass: "modal-footer text-right pr-0 pb-0"
        }, [_c('div', {
          staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0"
        }, [_c('a', {
          class: {
            'btn btn-success mr-2': true
          },
          attrs: {
            "href": "javascript:;",
            "title": _vm.$t('SaveAndSearch')
          },
          on: {
            "click": function ($event) {
              return _vm.SubmitData('save', values, meta);
            }
          }
        }, [_c('em', {
          staticClass: "fa fa-floppy-o pr-2",
          attrs: {
            "aria-hidden": "true"
          }
        }), _vm._v(" " + _vm._s(_vm.$t("SaveAndSearch")) + " ")]), _c('a', {
          staticClass: "btn btn-success mr-2",
          attrs: {
            "href": "javascript:;",
            "title": _vm.$t('Search')
          },
          on: {
            "click": function ($event) {
              return _vm.SubmitData('search', values, meta);
            }
          }
        }, [_c('em', {
          staticClass: "fa fa-search pr-2",
          attrs: {
            "aria-hidden": "true"
          }
        }), _vm._v(" " + _vm._s(_vm.$t("Search")) + " ")]), _c('a', {
          staticClass: "btn btn-primary delete-btn",
          attrs: {
            "href": "javascript:;",
            "title": _vm.$t('Cancel')
          },
          on: {
            "click": function ($event) {
              _vm.showListData = true;
              _vm.showAddData = false;
              _vm.filterItemData = [];
              _vm.GetSearchFilterItemData();
            }
          }
        }, [_c('em', {
          staticClass: "fa fa-times pr-2",
          attrs: {
            "aria-hidden": "true"
          }
        }), _vm._v(" " + _vm._s(_vm.$t("Cancel")) + " ")])])])];
      }
    }], null, false, 61462825)
  })], 1) : _vm._e()])])])])])])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Common/search-filter.vue?vue&type=template&id=599d869a&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Common/search-filter.vue?vue&type=script&lang=js&


/* harmony default export */ var search_filtervue_type_script_lang_js_ = ({
  props: {
    submodulecode: {
      type: String,
      required: true
    },
    modulename: {
      type: String,
      required: true
    },
    callbackfunction: {
      type: Function
    }
  },
  data: function () {
    return {
      filterData: [],
      showListData: true,
      showAddData: false,
      filterItemData: [],
      fieldNameData: [],
      options: null,
      submited: false,
      databaseCondition: "",
      condition: "",
      filterName: "",
      validationForName: "",
      filterId: 0,
      isDefault: false,
      FormatForSecond: "",
      isFirstTime: false,
      exitstingFilterNameArray: [],
      ApiURL: "",
      BaseUrl: "",
      ImageVal: "Image",
      popover: {
        visibility: 'click'
      },
      masks: {
        input: 'MM-DD-YYYY',
        CompanyType: ''
      }
    };
  },
  created: async function () {
    // debugger 
    //await this.IsExtraMapFeature();      
    await this.GetSearchFilterData();
    await this.GetSearchFilterItemData();
    await this.GetFieldNameData();
  },
  methods: {
    IsExtraMapFeature: function () {
      var vueObj = this;
      DataService["a" /* default */].IsExtraMapFeature().then(function (response) {
        vueObj.CompanyType = "";
        if (response.data != null && response.data != "") {
          vueObj.CompanyType = response.data;
        } else {
          vueObj.CompanyType = 'normal';
        }
      });
    },
    getMinDate(date) {
      // Assuming date is in "MM/DD/YYYY" format
      const parts = date.split('/');
      return `${parts[2]}-${parts[0]}-${parts[1]}`;
    },
    MakeArray: function (value, type) {
      var array = [];
      var arr = String(value).split(',');
      if (type == "radio" || type == "checkbox") {
        if (arr.length > 0) {
          for (var item of arr) {
            if (item.split("|").length > 1) {
              var person = {
                name: item.split("|")[0],
                value: item.split("|")[1]
              };
              array.push(person);
            } else {
              var person = {
                name: item,
                value: item
              };
              array.push(person);
            }
          }
        }
      } else {
        if (arr.length > 0) {
          for (var item of arr) {
            var person = {
              name: item,
              value: item.trim()
            };
            array.push(person);
          }
        }
      }
      return array;
    },
    GetLocalizedValue: function (fieldName, displayName) {
      try {
        if (this.isBlank(displayName)) {
          var chk = this.$t(String(fieldName));
          if (chk != String(fieldName)) {
            return chk;
          }
          chk = this.$t(String(fieldName));
          if (chk || /^\s*$/.test(chk)) {
            return chk;
          }
          return fieldName;
        } else {
          var chk = this.$t(String(displayName));
          if (chk != String(displayName)) {
            return chk;
          }
          chk = this.$t(String(displayName));
          if (chk || /^\s*$/.test(chk)) {
            return chk;
          }
          return displayName;
        }
      } catch (ex) {
        console.log(ex);
      }
    },
    MakeNormalArray: function (value) {
      if (value) {
        try {
          return JSON.parse(value);
        } catch (ex) {
          return value;
        }
      } else {
        value = [];
      }
    },
    isBlank: function (str) {
      return !str || /^\s*$/.test(str);
    },
    returnDateObject: function (date) {
      var checkDate = null;
      date = date == undefined ? "" : date;
      if (date != "") {
        checkDate = new Date(Date.parse(date));
      }
      return {
        format: String(Globalize.culture().calendar.patterns.d).toUpperCase(),
        useStrict: true,
        useCurrent: false,
        showClear: true,
        showClose: true,
        allowInputToggle: true,
        minDate: checkDate,
        widgetPositioning: {
          horizontal: "right",
          vertical: "bottom"
        }
      };
    },
    GetValidationF: function (object) {
      var vm = this;
      if (vm.filterName != null && vm.filterName != "" && !vm.submited) {
        this.$validator.reset();
        return object;
      }
      var obj = {};
      if (object.is_required) {
        obj["required"] = true;
      }
      if (object.length > 0) {
        if (object.dt_code == "textarea") {
          obj["max"] = 200;
        } else {
          obj["max"] = object.length;
        }
      }
      if (object.validation_type == "email") {
        obj["email"] = true;
      }
      if (object.dt_code == "date" || object.dt_code == "datetime") {
        obj["date_format"] = String(Globalize.culture().calendar.patterns.d).toUpperCase();
      }
      if (object.dt_code == "decimal") {
        obj["decimal"] = 2;
      }
      if (object.dt_code == "int" || object.dt_code == "bigint") {
        obj["numeric"] = true;
      }
      if (object.dt_code == "url") {
        obj["url"] = "require_protocol";
      }
      if (object.regular_expression != null && object.regular_expression != "") {
        obj["regex"] = object.regular_expression;
      }
      vm.submited = false;
      return obj;
    },
    onSearch: function onSearch(search, objItem) {
      this.searchSelectData(search, this, objItem);
    },
    searchSelectData: function (search, vm, objItem) {
      this.ShowSearchData(search, vm, objItem);
    },
    ShowSearchData: function (search, vm, objItem, selctedValue) {
      if (typeof selctedValue == 'undefined') {
        selctedValue = 0;
      }
      var url = "id=&moduleName=" + vm.modulename + "&type=" + objItem.field_code;
      if (objItem.dependent_type == 'fill') {
        url += "&refId=" + selctedValue;
      }
      DataService["a" /* default */].getDDLData(url + "&search=" + escape(search)).then(response => {
        var json = [];
        if (response.data == '') {}
        if (response.data != '') {
          json = response.data;
        }
        return objItem.select_options = json.DATA;
      });
    },
    setSelectedValue: function (item, val) {
      var vm = this;
      try {
        setTimeout(() => {
          item.value = item.select_value;
          ;
          vm.SetCondition();
        }, 100);
      } catch (ex) {}
    },
    AddSearchData: function () {
      this.GetSearchFilterItemData();
    },
    DeleteSearchItem: function (item, index) {
      var vm = this;
      var msg = vm.$t("ConfirmDelete");
      vm.confirmR(msg, true, null, function () {
        vm.filterItemData.splice(index, 1);
        vm.SetCondition();
      });
    },
    GetSearchFilterData: async function () {
      debugger;
      var vm = this;
      var param = `companyId=${vm.GetUserInfo.CompanyId}&userId=${vm.GetUserInfo.ID}&moduleName=${vm.modulename}&subModuleCode=${vm.submodulecode}`;
      this.filterData = [];
      await DataService["a" /* default */].SearchCriteriaListing(param).then(function (response) {
        var json = response.data;
        if (json != null) {
          vm.filterData = json.DATA;
        }
      });
    },
    GetFieldNameData: async function () {
      var vm = this;
      var param = "moduleName=" + vm.modulename + "&subModuleCode=" + vm.submodulecode;
      this.fieldNameData = [];
      await DataService["a" /* default */].GetFieldName(param).then(function (response) {
        debugger;
        var json = response.data;
        if (json != null) {
          if (vm.CompanyType == 'nonlocating') {
            json.DATA.forEach((item, index) => {
              // debugger
              if (item.label == 'parent_sub_status_id' || item.label == 'sub_status_id') {
                json.DATA.splice(index, 1);
                return vm.fieldNameData = json.DATA;
              }
            });
          } else {
            return vm.fieldNameData = json.DATA.length > 0 ? json.DATA : undefined;
          }
        }
      });
    },
    GetOperatorData: async function ($event, item, index) {
      var vm = this;
      var fieldId = $event.target.value;
      // this.$refs.form.setFieldTouched('field_name'+(index+1), false);
      var chkData = $.grep(this.fieldNameData, function (element, index) {
        return element.custom_field_id == fieldId;
      });
      var datatype = "";
      item.dt_code = "";
      item.picklist_options = [];
      item.label = "";
      item.dropdown_type = "";
      item.select_options = "";
      item.select_value = "";
      item.length = 0;
      item.operator = "";
      item.field_code = "";
      item.second_value = "";
      item.display_name = "";
      item.is_required = true;
      if (chkData.length > 0) {
        datatype = chkData[0].sql_type;
        item.dt_code = chkData[0].dt_code;
        item.picklist_options = chkData[0].picklist_options;
        item.label = chkData[0].label;
        item.dropdown_type = chkData[0].dropdown_type;
        if (chkData[0].dropdown_type == "normal" && chkData[0].picklist_options == "Lookup" && chkData[0].name == "EVENT.event_reminder_id") {
          var reminder_option = vm.MakeNormalArray(chkData[0].select_options);
          $.each(reminder_option, function (ind, dropItem) {
            reminder_option[ind].name = vm.$t(dropItem.name);
          });
          item.select_options = reminder_option;
        } else {
          item.select_options = chkData[0].select_options;
        }
        item.length = chkData[0].length;
        item.display_name = chkData[0].display_name;
        item.field_code = chkData[0].field_code;
        item.is_required = chkData[0].is_required;
        item.validation_type = chkData[0].validation_type;
      }
      var url = "dataType=" + datatype + "&customField=" + fieldId;
      item.operator_list = [];
      await DataService["a" /* default */].GetOperator(url).then(function (response) {
        var json = response.data;
        if (json != null) {
          return item.operator_list = json.DATA;
        }
      });
      item.field_name = fieldId;
      item.value = "";
      this.SetCondition();
    },
    SetValues: function ($event, item, type) {
      debugger;
      if (item.dt_code == "date" || item.dt_code == "datetime" || item.dt_code == "decimal") {
        var regex = /^(\+|-)?(\d*\.?\d*)$/;
        if (!regex.test(item.value) && item.dt_code == "decimal") {
          item.value = "";
        }
        if (!regex.test(item.second_value) && item.dt_code == "decimal") {
          item.second_value = "";
        }
        if (type == "second") {
          var value = item.second_value ? this.$options.filters.formatDate(item.second_value) : item.second_value;
          item.second_value = value;
        } else {
          if (item.dt_code == "decimal") {
            var value = item.value;
            item.value = value;
            item.second_value = value;
          } else {
            debugger;
            if (this.submodulecode != 'FSM_WORKORDER' && (item.label == 'SA_Scheduled_StartTime' || item.label == 'SA_Scheduled_EndTime' || item.label == 'SA_Actual_StartTime' || item.label == 'SA_Actual_EndTime' || item.label == 'ArrivalWindowStartTime' || item.label == 'ArrivalWindowEndTime')) {
              var value = item.value ? this.$options.filters.formatDatee(item.value) : item.value;
              item.value = value;
              item.second_value = value;
            } else {
              debugger;
              var value = item.value ? this.$options.filters.formatDate(item.value) : item.value;
              item.value = value;
              item.second_value = value;
            }
          }
        }
      } else {
        if (type == "second") {
          item.second_value = $event.target.value;
        } else {
          if ($event.target.value) item.value = $event.target.value;
        }
      }
      this.SetCondition();
    },
    SetCondition: function () {
      var vm = this;
      var conditionText = "";
      var databaseCondition = "";
      var operatorExpression = "";
      $.each(vm.filterItemData, function (index, item) {
        if (index > 0) {
          conditionText += " And ";
          databaseCondition += " and ";
        }
        var fieldId = item.field_name;
        var chkData = $.grep(vm.fieldNameData, function (element, index) {
          return element.custom_field_id == fieldId;
        });
        if (typeof chkData != "undefined" && chkData.length > 0) {
          conditionText += vm.GetLocalizedValue(chkData[0].label, chkData[0].display_name);
          debugger;
          if (chkData[0].dt_code == "date" || chkData[0].dt_code == "datetime") {
            if (chkData[0].actual_data_type == "datetimeoffset") {
              var t = "'+00:00'";
              databaseCondition += `convert(date, replace(${chkData[0].name}, ${t}, ''), 23)`;
            } else {
              databaseCondition += "convert(date, " + chkData[0].name + ", 23)";
            }
          } else {
            databaseCondition += "" + chkData[0].name.trimEnd() + "";
          }
        }
        var operatorId = item.operator;
        chkData = $.grep(item.operator_list, function (element, index) {
          return element.OPERATOR_ID == operatorId;
        });
        if (typeof chkData != "undefined" && chkData.length > 0) {
          conditionText = conditionText + " " + chkData[0].OPERATOR_DISPLAY_NAME;
          operatorExpression = chkData[0].OPERATOR_EXPRESSION;
          databaseCondition += " " + operatorExpression;
        }
        if (!vm.isBlank(item.value)) {
          var text = item.value;
          var value = item.value;
          if (item.dt_code == "select" && item.dropdown_type == "normal" && operatorExpression != "IN" && operatorExpression != "NOT IN") {
            var array = vm.MakeNormalArray(item.select_options);
            chkData = $.grep(array, function (element, index) {
              return element.value == item.value;
            });
            if (typeof chkData != "undefined" && chkData.length > 0) {
              text = chkData[0].name;
            }
          } else if (item.dt_code == "select" && item.dropdown_type == "custom" || item.dt_code == "select" && item.dropdown_type == "normal" && (operatorExpression == "IN" || operatorExpression == "NOT IN")) {
            if (Array.isArray(item.value)) {
              value = vm.createString(item.value, "value");
              text = vm.createString(item.value, "name");
            } else {
              value = item.value.value ? item.value.value : item.value;
              text = item.value.name;
            }
            if (operatorExpression == "IN" || operatorExpression == "NOT IN") {
              value = "(" + value + ")";
            }
          } else if (item.dt_code == "select" && item.dropdown_type != "custom" && item.dropdown_type != "normal") {
            if (operatorExpression == "IN" || operatorExpression == "NOT IN") {
              if (Array.isArray(item.value)) {
                value = vm.createString(item.value, "value");
                text = vm.createString(item.value, "name");
              } else {
                value = item.value.value;
                text = item.value.name;
              }
              value = "(" + value + ")";
            } else {
              var array = vm.MakeArray(item.picklist_options, item.dt_code);
              chkData = $.grep(array, function (element, index) {
                return element.value == item.value;
              });
              if (typeof chkData != "undefined" && chkData.length > 0) {
                text = chkData[0].name;
              }
              value = " '" + value + "'";
            }
          } else if (item.dt_code == "date") {
            if (operatorExpression == "between") {
              text = item.value + " And " + item.second_value;
              value = "'" + item.value + "'" + " and " + "'" + item.second_value + "'";
            } else {
              text = item.value;
              value = "'" + item.value + "'";
            }
          } else if (item.dt_code == "radio") {
            var array = vm.MakeArray(item.picklist_options, item.dt_code);
            chkData = $.grep(array, function (element, index) {
              return element.value == item.value;
            });
            if (typeof chkData != "undefined" && chkData.length > 0) {
              text = chkData[0].name;
              value = "'" + chkData[0].value + "'";
            }
          } else {
            if (operatorExpression == "Like" || operatorExpression == "Not Like") {
              value = "'%" + item.value + "%'";
            } else if (operatorExpression == "Starts With") {
              value = "'" + item.value + "%'";
              databaseCondition = databaseCondition.replcae("Starts With", "like");
            } else if (operatorExpression == "Ends With") {
              value = "'%" + item.value + "'";
              databaseCondition = databaseCondition.replcae("Ends With", "like");
            } else if (operatorExpression == "between") {
              text = item.value + " And " + item.second_value;
              value = "'" + item.value + "'" + " and " + "'" + item.second_value + "'";
            } else if (operatorExpression == "IN" || operatorExpression == "NOT IN") {
              var values = String(item.value).split(",");
              var str = "";
              for (var i = 0; i < values.length; i++) {
                if (i > 0) {
                  str += " , ";
                }
                str += "'" + values[i] + "'";
              }
              value = "(" + str + ")";
            } else {
              value = "'" + value + "'";
            }
          }
          if (item.dt_code == "select" && item.dropdown_type == "normal" && item.label == "event_location") {
            databaseCondition += " '" + value + "'";
          } else if (item.dt_code == "select" && item.dropdown_type == "normal" && item.label == "forecast_category_name") {
            databaseCondition += operatorExpression.indexOf("IN") > -1 ? " (" + text + ")" : " '" + text + "'";
          } else if (item.dt_code == "select" && item.dropdown_type == "normal" && item.label == "display_icon") {
            databaseCondition += operatorExpression.indexOf("IN") > -1 ? " " + value + "" : " '" + value + "'";
          } else if (item.dt_code == "select" && item.dropdown_type == "normal" && item.label == "contract_currency") {
            databaseCondition += operatorExpression.indexOf("IN") > -1 ? " " + value + "" : " '" + value + "'";
          } else {
            databaseCondition += " " + value;
          }
          conditionText = conditionText + " " + text;
        }
      });
      this.condition = conditionText;
      this.databaseCondition = databaseCondition;
    },
    ShowFieldValue: function ($event, item, index) {
      debugger;
      var id = $event.target.value;
      var chkData = $.grep(item.operator_list, function (element, index) {
        return element.OPERATOR_ID == id;
      });
      var expression = "";
      if (chkData.length > 0) {
        expression = chkData[0].OPERATOR_EXPRESSION;
      }
      if (expression == "between") {
        item.showSecondValue = true;
      } else {
        item.showSecondValue = false;
      }
      item.operator = id;
      item.value = "";
      item.select_value = [];
      item.operator_expression = expression;
      this.SetCondition();
    },
    GetSearchFilterItemData: async function () {
      this.condition = '';
      this.databaseCondition = '';
      var obj = {
        field_name: "",
        dt_code: "",
        operator: "",
        operator_expression: "",
        operator_list: [],
        first_value: "",
        second_value: "",
        showSecondValue: false,
        picklist_options: [],
        label: "",
        display_name: "",
        dropdown_type: "",
        select_options: "",
        length: 0,
        field_code: "",
        select_value: "",
        is_required: true
      };
      this.filterItemData.push(obj);
    },
    ApplyFilter: function (databaseCondition) {
      this.databaseCondition = databaseCondition;
      this.$parent.searchCondition = this.databaseCondition;
      if (typeof this.callbackfunction != "undefined" && this.callbackfunction != null) {
        this.$emit('FilterData', 1, 10, '', '', this.databaseCondition, this.filterItemData);
        this.$parent.appliedFilter = [];
        this.callbackfunction();
      } else {
        this.$parent.PageSize = 10;
        this.$parent.fetchRecords();
      }
      this.$emit("close");
    },
    EditFilter: function (item, type) {
      debugger;
      this.showListData = false;
      this.showAddData = true;
      if (type != "NotSaved") {
        this.filterId = item.FILTER_ID;
        this.EditSearchFilterData(this.filterId);
      } else {
        this.filterName = this.$parent.appliedFilter[0].field_name.split("(")[0];
        this.filterItemData = this.$parent.appliedFilter[0];
        this.SetCondition();
      }
    },
    deleteFilter: function (item) {
      debugger;
      this.filterId = item.FILTER_ID;
      var vm = this;
      vm.confirmR(vm.$t("ConfirmDeleteFilter"), true, null, function () {
        var url = "id=" + item.FILTER_ID + "&moduleName=" + vm.modulename + "&subModuleCode=" + vm.submodulecode + "&isDelete=1";
        DataService["a" /* default */].SearchCriteriaById(url).then(function (response) {
          var json = response.data;
          var box = "";
          if (json != null && json.MSG == "SUCCESS") {
            vm.GetSearchFilterData();
            if (item.DATABASE_CONDITION == vm.$parent.searchCondition) {
              vm.$parent.searchCondition = "";
              if (typeof vm.callbackfunction != "undefined" && vm.callbackfunction != null) {
                vm.callbackfunction();
              } else {
                vm.$parent.fetchRecords();
              }
            }
            vm.ShowAlert(vm.$t('DeletedSuccess', [vm.$t('Filter')]), 'success', true, vm.$t('Alert'));
          }
        });
      });
    },
    checkEncodeURI(str) {
      return /\%/i.test(str);
    },
    EditSearchFilterData: function (id) {
      var vm = this;
      var url = "id=" + id + "&moduleName=" + this.modulename + "&subModuleCode=" + this.submodulecode;
      vm.filterItemData = [];
      DataService["a" /* default */].SearchCriteriaById(url).then(function (response) {
        var json = response.data;
        if (json != null) {
          var fullJson = json.DATA;
          var chkData = $.grep(fullJson, function (element, index) {
            return element.FILTER_ID == id;
          });
          var isdbConditionEncoded = vm.checkEncodeURI(chkData[0].DATABASE_CONDITION);
          if (isdbConditionEncoded) {
            // vm.databaseCondition = decodeURIComponent(chkData[0].DATABASE_CONDITION);
          } else {
            vm.databaseCondition = chkData[0].DATABASE_CONDITION;
          }
          vm.filterName = chkData[0].FILTER_NAME;
          vm.condition = chkData[0].FILTER_CONDITION;
          vm.isDefault = chkData[0].IS_DEFAULT;
          $.each(fullJson, function (index, item) {
            var firstValue = item.FIRST_VALUE;
            var secondValue = item.SECOND_VALUE;
            if (item.DT_CODE == "date") {
              //firstValue = vm.formatDate(firstValue);
              if (item.OPERATOR_EXPRESSION == "between") {
                //secondValue = vm.formatDate(secondValue);
              }
            }
            var SelectedOptionsArray = [];
            if (item.DT_CODE == "select" && (item.DROPDOWN_TYPE == "normal" || item.DROPDOWN_TYPE == null && item.PICKLIST_OPTIONS != "Lookup") && (item.OPERATOR_EXPRESSION == "IN" || item.OPERATOR_EXPRESSION == " NOT IN")) {
              var valueArray = vm.MakeArray(firstValue.replcae(/'/g, ""), item.dt_code);
              $.each(valueArray, function (index, selectedValue) {
                if (item.SELECT_OPTIONS.indexOf("[{") == -1 && item.SELECT_OPTIONS.length > 0) {
                  var SplitDat = item.SELECT_OPTIONS.split(",");
                  var newArray = [];
                  var selectedItm = [];
                  $.each(SplitDat, function (indx, dat) {
                    var nwdata = {
                      name: dat,
                      value: dat
                    };
                    newArray.push(nwdata);
                  });
                  selectedItm = newArray.filter(function (chck) {
                    return chck.value == selectedValue.value;
                  });
                } else {
                  selectedItm = vm.MakeNormalArray(item.SELECT_OPTIONS).filter(function (chck) {
                    return chck.value == selectedValue.value;
                  });
                }
                if (selectedItm.length > 0) {
                  SelectedOptionsArray.push(selectedItm[0]);
                }
              });
            } else if (item.PICKLIST_OPTIONS != "Lookup" && (item.OPERATOR_EXPRESSION == "IN" || item.OPERATOR_EXPRESSION == " NOT IN")) {
              SelectedOptionsArray = vm.MakeArray(firstValue.replcae(/'/g, ""), item.dt_code);
            } else {
              SelectedOptionsArray = vm.MakeNormalArray(item.SELECT_OPTIONS);
            }
            var obj = {
              field_name: item.FIELD_ID,
              dt_code: item.DT_CODE,
              operator: item.OPERATOR_ID,
              operator_expression: item.OPERATOR_EXPRESSION,
              operator_list: vm.MakeNormalArray(item.OPERATOR_LIST),
              value: firstValue,
              second_value: secondValue,
              showSecondValue: vm.isBlank(item.SECOND_VALUE) ? false : true,
              picklist_options: item.PICKLIST_OPTIONS,
              label: item.LABEL,
              dropdown_type: item.DROPDOWN_TYPE,
              select_options: item.PICKLIST_OPTIONS != "Lookup" && (item.OPERATOR_EXPRESSION == "IN" || item.OPERATOR_EXPRESSION == " NOT IN") ? item.SELECT_OPTIONS : vm.MakeNormalArray(item.SELECT_OPTIONS),
              length: item.LENGTH,
              field_code: item.FIELD_CODE,
              select_value: SelectedOptionsArray,
              is_required: item.IS_REQUIRED
            };
            vm.filterItemData.push(obj);
          });
        }
      });
    },
    ClearFilter: function () {
      if (this.$parent.appliedFilter[0].searchCondition == this.$parent.searchCondition) {
        this.$parent.searchCondition = "";
        if (typeof this.callbackfunction != "undefined" && this.callbackfunction != null) {
          this.callbackfunction();
        } else {
          this.$parent.fetchRecords();
        }
      }
      this.$parent.appliedFilter = [];
    },
    SubmitData: function (type, values, meta) {
      debugger;
      var vm = this;
      vm.submited = true;
      vm.$refs.form.validate().then(result => {
        console.log(this.$refs.form.errors);
        for (var err in result.errors) {
          var node = document.getElementsByName(err);
          if (values[err] || node.length == 0) {
            delete result.errors[err];
          } else if (!values.hasOwnProperty(err)) {
            delete result.errors[err];
          }
        }
        if (result) {
          if (type == "search") {
            debugger;
            vm.$parent.searchcondition = vm.databaseCondition;
            if (vm.filterName == "") {
              vm.filterItemData.field_name = "New Created Filter(Not Saved)";
            } else {
              vm.filterItemData.field_name = vm.filterName + "(Not Saved)";
            }
            vm.filterItemData.searchCondition = vm.databaseCondition;
            vm.$parent.appliedFilter = [];
            vm.$parent.PageNumber = 1;
            vm.$parent.PageSize = 10;
            vm.$parent.SortBy = "";
            vm.$parent.SortExp = "";
            if (typeof vm.callbackfunction != "undefined" && vm.callbackfunction != null) {
              vm.$emit('FilterData', 1, 10, '', '', vm.databaseCondition, vm.filterItemData);
            } else {
              vm.$parent.fetchRecords();
            }
            vm.$emit("close");
          } else {
            var checkDuplicacy = [];
            if (vm.filterId == 0) {
              checkDuplicacy = $.grep(vm.filterData, function (n, i) {
                return n.FILTER_NAME == $.trim(vm.filterName);
              });
            }
            if (checkDuplicacy.length == 0) {
              vm.$parent.appliedFilter = [];
              var fullJson = vm.filterItemData;
              var data = [];
              $.each(fullJson, function (Key, item) {
                var value = item.value;
                var secondValue = item.second_value;
                if (item.dt_code == "select" && item.dropdown_type == "custom" || item.dt_code == "select" && item.picklist_options != "Lookup" && (item.operator_expression == "IN" || item.operator_expression == "NOT IN") || item.dt_code == "select" && item.dropdown_type == "normal" && (item.operator_expression == "IN" || item.operator_expression == "NOT IN")) {
                  if (Array.isArray(item.value)) {
                    value = vm.createString(item.value, "value");
                  } else {
                    value = item.value.value ? item.value.value : item.value;
                  }
                }
                if (item.dt_code == "date") {
                  if (!vm.isBlank(secondValue) && item.operator_expression == "between") {
                    //secondValue = vm.$options.filters.formatDate(secondValue);
                  }
                  //value = vm.$options.filters.formatDate(item.value);
                }

                var obj = {
                  fieldId: item.field_name,
                  operatorId: item.operator,
                  firstValue: value,
                  secondValue: secondValue
                };
                data.push(obj);
              });
              debugger;
              var postJSON = {
                filterId: vm.filterId,
                filterName: vm.filterName,
                condition: vm.condition,
                databaseCondition: vm.databaseCondition,
                isDefault: vm.isDefault,
                moduleName: vm.modulename,
                subModuleCode: vm.submodulecode,
                userId: vm.GetUserInfo.ID,
                companyId: vm.GetUserInfo.CompanyId,
                data: data
              };
              var objectPostString = JSON.stringify(postJSON);
              debugger;
              DataService["a" /* default */].SaveFilter(objectPostString).then(function (response) {
                debugger;
                vm.$parent.PageNumber = 1;
                vm.$parent.PageSize = 10;
                vm.$parent.SortBy = "";
                vm.$parent.SortExp = "";
                vm.$parent.searchCondition = vm.databaseCondition;
                if (typeof vm.callbackfunction != "undefined" && vm.callbackfunction != null) {
                  vm.$emit('FilterData', 1, 10, '', '', vm.databaseCondition, null);
                  vm.$parent.appliedFilter = [];
                } else {
                  vm.$parent.fetchRecords();
                }
                vm.$emit("close");
              });
            } else {
              this.ShowAlert(this.$t("FilterNameAlreadyExist"));
            }
          }
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/Common/search-filter.vue?vue&type=script&lang=js&
 /* harmony default export */ var Common_search_filtervue_type_script_lang_js_ = (search_filtervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Common/search-filter.vue?vue&type=style&index=0&id=599d869a&prod&scoped=true&lang=css&
var search_filtervue_type_style_index_0_id_599d869a_prod_scoped_true_lang_css_ = __webpack_require__("0c80");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Common/search-filter.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Common_search_filtervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "599d869a",
  null
  
)

/* harmony default export */ var search_filter = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "87de":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Common/view-layout.vue?vue&type=template&id=82442d5a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "modal my-popups right fade",
    attrs: {
      "id": "modalManageView",
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
      "click": function ($event) {
        return _vm.close();
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
  }, [_vm._v(_vm._s(_vm.$t("ManageView")))]), _c('span', {
    staticClass: "user-guide"
  }, [!_vm.ShowLisiting ? _c('a', {
    staticClass: "ancuserguide",
    attrs: {
      "data-toggle": "collapse",
      "href": "javascript:void(0)",
      "role": "button",
      "aria-expanded": "false",
      "aria-controls": "collapseExample"
    },
    on: {
      "click": function ($event) {
        return _vm.ShowUserGuide();
      }
    }
  }, [_vm._v("User Guide")]) : _vm._e(), _c('div', {
    class: 'divancuserguide collapse' + _vm.toggleUserGuide,
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
      "innerHTML": _vm._s(_vm.$t('MangeViewUG1'))
    }
  })])])])]), _c('div', {
    staticClass: "modal-body"
  }, [_c('loader', {
    attrs: {
      "is-visible": _vm.isLoading
    }
  }), _vm.ShowLisiting ? _c('div', {
    staticClass: "w-100 float-left"
  }, [_c('div', {
    staticClass: "heading-border"
  }, [_c('h5', {
    staticClass: "h5"
  }, [_c('span', [_vm._v(_vm._s(_vm.$t("ManageView")))]), _c('small', {
    staticClass: "float-right"
  }, [_c('a', {
    attrs: {
      "href": "javascript:;",
      "title": _vm.$t('AddNew')
    },
    on: {
      "click": function ($event) {
        return _vm.AddNewView();
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-plus pr-1"
  }), _vm._v(" " + _vm._s(_vm.$t("AddNew")) + " ")]), _c('a', {
    class: {
      'disabled': _vm.isClearViewDisabled
    },
    attrs: {
      "href": "javascript:;",
      "title": _vm.$t('Clear')
    },
    on: {
      "click": function ($event) {
        return _vm.ClearView();
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-refresh pr-1 ml-3"
  }), _vm._v(" " + _vm._s(_vm.$t("Clear")) + " ")])])])]), _c('div', {
    staticClass: "listing mt-3"
  }, [_c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-bordered dt-responsive nowrap mt-0",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "id": "example",
      "aria-describedby": "viewlayout"
    }
  }, [_c('thead', {
    staticClass: "thead-bg"
  }, [_c('tr', [_c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v(_vm._s(_vm.$t("Name")))]), _c('th', {
    staticClass: "text-center",
    attrs: {
      "scope": "col",
      "width": "100"
    }
  }, [_vm._v(_vm._s(_vm.$t("Apply")))]), _c('th', {
    staticClass: "text-center",
    attrs: {
      "scope": "col",
      "width": "100"
    }
  }, [_vm._v(_vm._s(_vm.$t("Edit")))]), _c('th', {
    staticClass: "text-center",
    attrs: {
      "scope": "col",
      "width": "100"
    }
  }, [_vm._v(_vm._s(_vm.$t("Delete")))])])]), _c('tbody', [_vm._l(_vm.ListingData, function (item, index1) {
    return _c('tr', {
      key: index1
    }, [_c('td', [_vm._v(_vm._s(item.VIEW_NAME))]), _c('td', {
      staticClass: "text-center single-action"
    }, [item.IS_SLECTED_USER_ID == 0 ? _c('a', {
      attrs: {
        "href": "javascript:;",
        "title": _vm.$t('Apply')
      },
      on: {
        "click": function ($event) {
          return _vm.ApplyView(item.VIEW_ID, item.VIEW_NAME);
        }
      }
    }, [_c('em', {
      staticClass: "fa fa-check text-info"
    })]) : _vm._e(), item.IS_SLECTED_USER_ID > 0 ? _c('a', {
      attrs: {
        "title": _vm.$t('Applied')
      }
    }, [_c('em', {
      staticClass: "fa fa-check text-success"
    })]) : _vm._e()]), _c('td', {
      staticClass: "text-center single-action"
    }, [item.CAN_EDIT ? _c('a', {
      attrs: {
        "href": "javascript:;",
        "title": _vm.$t('Edit')
      },
      on: {
        "click": function ($event) {
          return _vm.EditManageView(item.VIEW_ID);
        }
      }
    }, [_c('em', {
      staticClass: "fa fa-pencil text-success"
    })]) : _vm._e(), !item.CAN_EDIT ? _c('a', {
      staticClass: "disabled",
      staticStyle: {
        "cursor": "no-drop !important"
      },
      attrs: {
        "href": "javascript:;",
        "title": " $t('Edit') "
      }
    }, [_c('em', {
      staticClass: "fa fa-pencil text-success disabled"
    })]) : _vm._e()]), _c('td', {
      staticClass: "text-center single-action"
    }, [item.CAN_EDIT ? _c('a', {
      attrs: {
        "href": "javascript:;",
        "title": _vm.$t('Delete')
      },
      on: {
        "click": function ($event) {
          return _vm.deleteView(item.VIEW_ID);
        }
      }
    }, [_c('em', {
      staticClass: "fa fa-trash text-danger"
    })]) : _vm._e(), !item.CAN_EDIT ? _c('a', {
      class: {
        'disabled': !item.CAN_EDIT
      },
      attrs: {
        "href": "javascript:;",
        "title": _vm.$t('Delete')
      },
      on: {
        "click": function ($event) {
          return _vm.deleteView(item.VIEW_ID);
        }
      }
    }, [_c('em', {
      staticClass: "fa fa-trash text-danger disabled"
    })]) : _vm._e()])]);
  }), _vm.noRecord ? _c('tr', {
    staticStyle: {
      "cursor": "initial"
    }
  }, [_c('td', {
    attrs: {
      "colspan": "4"
    }
  }, [_c('div', {
    staticClass: "text-center text-danger d-flex align-items-center justify-content-center norecs"
  }, [_vm._v(" " + _vm._s(_vm.$t("NoRecordfound")))])])]) : _vm._e()], 2)])])])]) : _vm._e(), !_vm.ShowLisiting ? _c('section', {
    staticClass: "tab mt-2"
  }, [_c('div', {
    staticClass: "tab-style"
  }, [_c('div', {
    staticClass: "tab_container"
  }, [_c('div', {
    staticClass: "responsive-tabs-container view_tab"
  }, [_c('ul', {
    staticClass: "nav nav-tabs all-tabs responsive-tabs cust"
  }, [_c('li', {
    staticClass: "nav-item general"
  }, [_c('a', {
    staticClass: "nav-link active",
    attrs: {
      "data-toggle": "tab",
      "href": "javascript:void(0)"
    },
    on: {
      "click": function ($event) {
        return _vm.ShowTabData(1);
      }
    }
  }, [_c('span', {
    staticClass: "numb"
  }, [_vm._v("1")]), _vm._v(" " + _vm._s(_vm.$t("General")) + " ")])]), _c('li', {
    staticClass: "nav-item selectcolumn"
  }, [_c('a', {
    class: {
      'nav-link': true,
      'disabled': _vm.ViewData.Name == '' || _vm.ViewData.ApplyTo == 2 && _vm.ListSelectedUsers.length == 0
    },
    attrs: {
      "data-toggle": "tab",
      "href": "javascript:void(0)"
    },
    on: {
      "click": function ($event) {
        return _vm.ShowTabData(2);
      }
    }
  }, [_c('span', {
    staticClass: "numb"
  }, [_vm._v("2")]), _vm._v(" " + _vm._s(_vm.$t("Select Column")) + " ")])]), _c('li', {
    staticClass: "nav-item filter"
  }, [_c('a', {
    class: {
      'nav-link': true,
      'disabled': _vm.ViewData.Name == '' || _vm.ViewData.ApplyTo == 2 && _vm.ListSelectedUsers.length == 0 || _vm.SelectedItems.length == 0
    },
    attrs: {
      "data-toggle": "tab",
      "href": "javascript:void(0)"
    },
    on: {
      "click": function ($event) {
        return _vm.ShowTabData(3);
      }
    }
  }, [_c('span', {
    staticClass: "numb"
  }, [_vm._v("3")]), _vm._v(" " + _vm._s(_vm.$t("Filter")) + " ")])])]), _c('Form', {
    ref: "ManageViewLayoutData"
  }, [_c('div', {
    staticClass: "tab-content"
  }, [_c('div', {
    staticClass: "tab-pane active",
    attrs: {
      "id": "step1"
    }
  }, [_c('div', {
    staticClass: "container-fluid p-0",
    staticStyle: {
      "min-height": "416px"
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(" " + _vm._s(_vm.$t("ViewName")) + ": "), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: _vm.ViewData.Name,
      expression: "ViewData.Name",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "form-control",
    domProps: {
      "value": _vm.ViewData.Name
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.ViewData, "Name", $event.target.value.trim());
      },
      "blur": function ($event) {
        return _vm.$forceUpdate();
      }
    }
  })])]), _c('div', {
    staticClass: "col-lg-6 float-left"
  }, [_c('div', {
    staticClass: "col-12 float-left p-0"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(" " + _vm._s(_vm.$t("ApplyTo")) + ": "), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "custom-control custom-radio custom-control-inline"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.ViewData.ApplyTo,
      expression: "ViewData.ApplyTo"
    }],
    staticClass: "custom-control-input dynamic",
    attrs: {
      "type": "radio",
      "id": "customRadio",
      "name": "viewapplyto",
      "value": "1"
    },
    domProps: {
      "checked": _vm._q(_vm.ViewData.ApplyTo, "1")
    },
    on: {
      "change": function ($event) {
        return _vm.$set(_vm.ViewData, "ApplyTo", "1");
      }
    }
  }), _c('label', {
    staticClass: "custom-control-label",
    attrs: {
      "for": "customRadio"
    }
  }, [_vm._v("Only For Me")])]), _vm.usertype == 'CA' ? _c('div', {
    staticClass: "custom-control custom-radio custom-control-inline"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.ViewData.ApplyTo,
      expression: "ViewData.ApplyTo"
    }],
    staticClass: "custom-control-input dynamic",
    attrs: {
      "type": "radio",
      "id": "customRadio2",
      "name": "viewapplyto",
      "value": "2"
    },
    domProps: {
      "checked": _vm._q(_vm.ViewData.ApplyTo, "2")
    },
    on: {
      "change": function ($event) {
        return _vm.$set(_vm.ViewData, "ApplyTo", "2");
      }
    }
  }), _c('label', {
    staticClass: "custom-control-label",
    attrs: {
      "for": "customRadio2"
    }
  }, [_vm._v(_vm._s(_vm.$t("Others")))])]) : _vm._e(), _vm.usertype == 'CA' ? _c('div', {
    staticClass: "custom-control custom-radio custom-control-inline"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.ViewData.ApplyTo,
      expression: "ViewData.ApplyTo"
    }],
    staticClass: "custom-control-input dynamic",
    attrs: {
      "type": "radio",
      "id": "customRadio3",
      "name": "viewapplyto",
      "value": "3"
    },
    domProps: {
      "checked": _vm._q(_vm.ViewData.ApplyTo, "3")
    },
    on: {
      "change": function ($event) {
        return _vm.$set(_vm.ViewData, "ApplyTo", "3");
      }
    }
  }), _c('label', {
    staticClass: "custom-control-label",
    attrs: {
      "for": "customRadio3"
    }
  }, [_vm._v(_vm._s(_vm.$t("ALL")))])]) : _vm._e()])])])]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.ViewData.ApplyTo == 2,
      expression: "ViewData.ApplyTo == 2"
    }],
    staticClass: "w-100 float-left mb-2 mt-2"
  }, [_vm.ListUnselectedUsers.length > 0 ? _c('moveuser', {
    attrs: {
      "leftItems": _vm.ListUnselectedUsers,
      "right-items": _vm.ListSelectedUsers,
      "title-left": _vm.$t('Available'),
      "title-right": _vm.$t('Selectedusers'),
      "moved-item-location": "bottom",
      "target-id": "ListViewUsers"
    }
  }) : _vm._e()], 1), _c('div', {
    staticClass: "col-lg-12 text-right mt-3"
  }, [_c('a', {
    staticClass: "btn btn-secondary mr-1",
    attrs: {
      "href": "javascript:;",
      "title": _vm.$t('BacktoList')
    },
    on: {
      "click": function ($event) {
        return _vm.BackToList();
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-angle-double-left pr-2"
  }), _vm._v(" " + _vm._s(_vm.$t("BacktoList")) + " ")]), _c('a', {
    staticClass: "btn btn-success mr-1",
    attrs: {
      "href": "javascript:;",
      "title": _vm.$t('Next')
    },
    on: {
      "click": function ($event) {
        return _vm.ShowNextTab(2);
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-angle-double-right pr-2"
  }), _vm._v(" " + _vm._s(_vm.$t("Next")) + " ")])])])])]), _c('div', {
    staticClass: "tab-pane",
    attrs: {
      "id": "step2"
    }
  }, [_c('div', {
    staticClass: "container-fluid p-0",
    staticStyle: {
      "min-height": "416px"
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_vm.UnselectedItems && _vm.UnselectedItems.length > 0 ? _c('mover', {
    attrs: {
      "left-items": _vm.UnselectedItems,
      "right-items": _vm.SelectedItems,
      "title-left": _vm.$t('AvailableFields'),
      "title-right": _vm.$t('SelectedFields'),
      "moved-item-location": "bottom",
      "max-item": "25"
    }
  }) : _vm._e()], 1), _c('div', {
    staticClass: "col-12 text-right mt-3"
  }, [_c('a', {
    staticClass: "btn btn-success",
    attrs: {
      "href": "javascript:;",
      "title": _vm.$t('Next')
    },
    on: {
      "click": function ($event) {
        return _vm.ShowNextTab(3);
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-angle-double-right pr-2"
  }), _vm._v(" " + _vm._s(_vm.$t("Next")) + " ")])])])])]), _c('div', {
    staticClass: "tab-pane",
    attrs: {
      "id": "step3"
    }
  }, [_c('div', {
    staticClass: "container-fluid p-0",
    staticStyle: {
      "min-height": "416px"
    }
  }, [_c('div', {
    staticClass: "container-fluid p-0",
    staticStyle: {
      "min-height": "416px"
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('searchfilter', {
    attrs: {
      "submodulecode": _vm.SubmoduleCode,
      "modulename": _vm.ModuleName,
      "viewId": _vm.ViewData.ViewId,
      "filter-type": "VIEW"
    }
  }, [_c('h5', {
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_vm._v(_vm._s(_vm.$t("Search")))])])], 1), _c('div', {
    staticClass: "col-12 text-right mt-3"
  }, [_c('a', {
    staticClass: "btn btn-success mr-1",
    attrs: {
      "href": "javascript:;",
      "title": _vm.$t('Save')
    },
    on: {
      "~click": function ($event) {
        return _vm.SaveViewData();
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-save pr-2"
  }), _vm._v(" " + _vm._s(_vm.$t("Save")) + " ")])])])])])])])])], 1)])])]) : _vm._e()], 1)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Common/view-layout.vue?vue&type=template&id=82442d5a&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Common/mover.vue?vue&type=template&id=06dedc2b&
var movervue_type_template_id_06dedc2b_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "listing mover-panel",
    attrs: {
      "id": _vm.targetId
    }
  }, [_c('div', {
    staticClass: "border-0 p-0 d-flex flex-wrap"
  }, [_c('div', {
    staticClass: "mover-panel-box leftpanel",
    attrs: {
      "id": "MoverLeft"
    }
  }, [_c('div', {
    staticClass: "heading-border"
  }, [_c('h5', {
    staticClass: "h5"
  }, [_c('span', [_vm._v(_vm._s(_vm.titleLeft))])])]), _c('div', {
    staticClass: "col-12 pl-0 mt-2 px-small-0"
  }, [_c('div', {
    staticClass: "col-sm-12 col-md-8 col-lg-8 float-left pr-1 pl-0 px-small-0"
  }, [_c('div', {
    staticClass: "form-group mb-1"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.Search,
      expression: "Search"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "search",
      "maxlength": "50",
      "type": "text",
      "placeholder": "Search by Name",
      "autocomplete": "off"
    },
    domProps: {
      "value": _vm.Search
    },
    on: {
      "keyup": function ($event) {
        return _vm.SearchData();
      },
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.Search = $event.target.value;
      }
    }
  })])]), _c('div', {
    staticClass: "col-sm-12 col-md-4 col-lg-4 float-left pl-0 px-small-0"
  }, [_c('div', {
    staticClass: "search-btm-btn background-0 text-left form-check-inline"
  }, [_c('a', {
    staticClass: "btn btn-success mr-1 px-4",
    attrs: {
      "title": _vm.$t('Search'),
      "href": "javascript:;"
    },
    on: {
      "click": function ($event) {
        return _vm.SearchData();
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-search"
  })]), _c('a', {
    staticClass: "btn btn-danger clearsearchtext px-4",
    attrs: {
      "href": "javascript:;",
      "title": _vm.$t('Clear')
    },
    on: {
      "click": function ($event) {
        return _vm.ClearData();
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-refresh"
  })])])])]), _c('div', {
    staticClass: "listing mt-2"
  }, [_c('vue-scroll', [_c('div', {
    staticClass: "table-responsive scrollmoverdiv",
    staticStyle: {
      "max-height": "500px"
    }
  }, [_c('table', {
    staticClass: "table table-bordered",
    attrs: {
      "aria-describedby": "fildname"
    }
  }, [_c('thead', {
    staticClass: "thead-bg"
  }, [_c('tr', {
    attrs: {
      "role": "row"
    }
  }, [_c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v(_vm._s(_vm.$t("fieldName")))])])]), _c('tbody', {
    attrs: {
      "id": _vm.targetId + 'LeftItems'
    }
  }, [_vm._l(_vm.unselectedItems, function (item, index) {
    return _c('tr', {
      class: {
        'low-bar': item.isSelected,
        'even': index % 2 == 2,
        'odd': index % 2 > 0
      },
      attrs: {
        "Key": item,
        "data-id": item.value,
        "data-side": "left",
        "data-index": index
      },
      on: {
        "click": function ($event) {
          return _vm.selectItem(item, _vm.unselectedItems);
        }
      }
    }, [_c('td', {
      staticClass: "sorting_1"
    }, [_vm._v(_vm._s(item.displayValue))])]);
  }), _vm.unselectedItems == null || _vm.unselectedItems.length == 0 ? _c('tr', {
    staticStyle: {
      "cursor": "initial"
    }
  }, [_c('td', {
    staticClass: "text-center text-danger"
  }, [_vm._v(" " + _vm._s(_vm.$t("NoRecordfound")))])]) : _vm._e()], 2)])])])], 1)]), _c('div', {
    staticClass: "mover-controls"
  }, [_vm.moveAll != 'false' ? _c('button', {
    attrs: {
      "type": "button",
      "data-toggle-tooltip": "tooltip",
      "title": _vm.$t('MoveAllRight')
    },
    on: {
      "click": function ($event) {
        return _vm.moveAllRight();
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-angle-double-down fa-2x d-md-none d-none",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('em', {
    staticClass: "fa fa-angle-double-right fa-2x d-none d-md-block d-block",
    attrs: {
      "aria-hidden": "true"
    }
  })]) : _vm._e(), _c('button', {
    attrs: {
      "type": "button",
      "data-toggle-tooltip": "tooltip",
      "title": _vm.$t('MoveRight')
    },
    on: {
      "click": function ($event) {
        return _vm.moveRight();
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-angle-down fa-2x d-md-none d-none",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('em', {
    staticClass: "fa fa-angle-right fa-2x d-none d-md-block d-block",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _c('button', {
    attrs: {
      "type": "button",
      "data-toggle-tooltip": "tooltip",
      "title": _vm.$t('MoveLeft')
    },
    on: {
      "click": function ($event) {
        return _vm.moveLeft();
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-angle-up fa-2x d-md-none d-none",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('em', {
    staticClass: "fa fa-angle-left fa-2x d-none d-md-block d-block",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm.moveAll != 'false' ? _c('button', {
    attrs: {
      "type": "button",
      "data-toggle-tooltip": "tooltip",
      "title": _vm.$t('MoveAllLeft')
    },
    on: {
      "click": function ($event) {
        return _vm.moveAllLeft();
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-angle-double-up fa-2x d-md-none d-none",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('em', {
    staticClass: "fa fa fa-angle-double-left fa-2x d-none d-md-block d-block",
    attrs: {
      "aria-hidden": "true"
    }
  })]) : _vm._e()]), _c('div', {
    staticClass: "mover-panel-box rightpanel",
    attrs: {
      "id": "MoverRight"
    }
  }, [_c('div', {
    staticClass: "heading-border"
  }, [_c('h5', {
    staticClass: "h5"
  }, [_c('span', [_vm._v(_vm._s(_vm.titleRight))])])]), _vm._m(0), _c('div', {
    staticClass: "listing mt-2"
  }, [_c('vue-scroll', [_c('div', {
    staticClass: "table-responsive scrollmoverdiv",
    staticStyle: {
      "max-height": "500px"
    }
  }, [_c('table', {
    staticClass: "table table-bordered",
    attrs: {
      "id": "example",
      "aria-describedby": "mover"
    }
  }, [_c('thead', {
    staticClass: "thead-bg"
  }, [_c('tr', [_c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_c('span', [_vm._v(" " + _vm._s(_vm.$t("fieldName")) + " ")])]), _c('th', {
    staticClass: "text-center",
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "scope": "col"
    }
  }, [_vm._v(" " + _vm._s(_vm.$t("Sortable")))])])]), _c('tbody', {
    attrs: {
      "id": _vm.targetId + 'RightItems'
    }
  }, [_vm._l(_vm.selectedItems, function (item, index) {
    return _c('tr', {
      class: {
        'even': index % 2 == 2,
        'odd': index % 2 > 0,
        'low-bar': item.isSelected
      },
      attrs: {
        "data-id": item.value,
        "data-side": "right",
        "data-index": index,
        "Key": item
      },
      on: {
        "click": function ($event) {
          return _vm.selectItem(item, _vm.selectedItems);
        }
      }
    }, [_c('td', [_c('span', {
      staticClass: "my-handle"
    }, [_vm._v(_vm._s(item.displayValue))])]), _c('td', {
      staticClass: "text-center"
    }, [_c('div', {
      staticClass: "custom-control custom-checkbox"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.isSortable,
        expression: "item.isSortable"
      }],
      staticClass: "form-check-input float-right custom-control-input multilevel",
      staticStyle: {
        "display": "none"
      },
      attrs: {
        "disabled": item.isSortableEnabled == 0,
        "id": item.value,
        "name": item.value,
        "type": "checkbox"
      },
      domProps: {
        "value": item.isSortable,
        "checked": Array.isArray(item.isSortable) ? _vm._i(item.isSortable, item.isSortable) > -1 : item.isSortable
      },
      on: {
        "change": function ($event) {
          var $$a = item.isSortable,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = item.isSortable,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(item, "isSortable", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(item, "isSortable", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(item, "isSortable", $$c);
          }
        }
      }
    }), _c('label', {
      staticClass: "custom-control-label universal-custom-control-label pt-1",
      attrs: {
        "for": item.value
      }
    })])])]);
  }), _vm.selectedItems == null || _vm.selectedItems.length == 0 ? _c('tr', {
    staticStyle: {
      "cursor": "initial"
    }
  }, [_c('td', {
    staticClass: "text-center text-danger",
    attrs: {
      "colspan": "2"
    }
  }, [_vm._v(" " + _vm._s(_vm.$t("NoFieldSelected")))])]) : _vm._e()], 2)])])])], 1)])])]);
};
var movervue_type_template_id_06dedc2b_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-12 pl-0 mt-2 d-none"
  }, [_c('div', {
    staticClass: "col-4 float-left pr-1 pl-0"
  }, [_c('div', {
    staticClass: "form-group mb-0"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "id": "search",
      "maxlength": "50",
      "type": "text",
      "placeholder": "Search By Title",
      "autocomplete": "off"
    }
  })])]), _c('div', {
    staticClass: "col-4 float-left pr-1 pl-0"
  }, [_c('div', {
    staticClass: "form-group mb-0"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "id": "search",
      "maxlength": "50",
      "type": "text",
      "placeholder": "Search By Title",
      "autocomplete": "off"
    }
  })])]), _c('div', {
    staticClass: "col-4 float-left pl-0"
  }, [_c('div', {
    staticClass: "search-btm-btn background-0 text-left form-check-inline"
  }, [_c('a', {
    staticClass: "btn btn-success mr-1 px-4",
    attrs: {
      "title": "",
      "id": "Go",
      "href": "javascript:;",
      "data-toggle-tooltip": "tooltip",
      "data-original-title": "Search"
    }
  }, [_c('em', {
    staticClass: "fa fa-search"
  })]), _c('a', {
    staticClass: "btn btn-danger clearsearchtext px-4",
    attrs: {
      "href": "javascript:;",
      "title": "",
      "data-toggle-tooltip": "tooltip",
      "data-original-title": "Clear"
    }
  }, [_c('em', {
    staticClass: "fa fa-refresh"
  })])])])]);
}];

// CONCATENATED MODULE: ./src/components/Common/mover.vue?vue&type=template&id=06dedc2b&

// EXTERNAL MODULE: ./node_modules/sortablejs/modular/sortable.esm.js
var sortable_esm = __webpack_require__("aa47");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Common/mover.vue?vue&type=script&lang=js&


/* harmony default export */ var movervue_type_script_lang_js_ = ({
  props: {
    titleLeft: {
      type: String,
      default: 'Available'
    },
    titleRight: {
      type: String,
      default: 'Selected'
    },
    movedItemLocation: {
      type: String,
      default: "top"
    },
    leftItems: Array,
    rightItems: Array,
    targetId: {
      type: String,
      default: "Mover"
    },
    normalizeLists: {
      type: Boolean,
      default: true
    },
    fontAwesome: {
      type: Boolean,
      default: true
    },
    moveAll: {
      type: Boolean,
      default: true
    },
    maxItem: {
      type: String,
      default: null
    }
  },
  methods: {
    raiseItemMoved: function _raiseItemMoved(item, targetList, listType) {
      this.lastMovedItem = {
        item: item,
        targetList: targetList,
        listType: listType
      };
      this.$emit('item-moved', this.lastMovedItem);
    }
  },
  data: function () {
    var vm = {
      selectedSortable: null,
      unselectedSortable: null,
      selectedItem: {},
      selectedList: null,
      selectedItems: this.rightItems,
      unselectedItems: [],
      AllItems: [],
      lastMovedItem: null,
      Search: '',
      initialize: function (vue) {
        var options1 = {
          group: "_mvgp_" + new Date().getTime(),
          ghostClass: "mover-ghost",
          chosenClass: "mover-selected",
          onAdd: vm.onListDrop,
          onUpdate: vm.onSorted,
          sort: false,
          disabled: true
        };
        var options2 = {
          group: "_mvgp_" + new Date().getTime(),
          ghostClass: "mover-ghost",
          chosenClass: "mover-selected",
          onAdd: vm.onListDrop,
          onUpdate: vm.onSorted,
          handle: ".my-handle",
          nodeName: 'tr'
        };
        var targetId = vue.targetId;
        var el = document.getElementById(targetId + 'LeftItems');
        vm.unselectedSortable = sortable_esm["a" /* default */].create(el, options1);
        var el2 = document.getElementById(targetId + 'RightItems');
        vm.selectedSortable = sortable_esm["a" /* default */].create(el2, options2);
        if (vue.normalizeLists) vm.normalizeListValues();
      },
      selectItem: function (item, items) {
        var vm = this;
        if (item.hasOwnProperty('length')) {
          if (items.length > 0) item = items[0];
          if (!item) return;
        } else {
          item.isSelected = !item.isSelected;
          vm.selectedItem = item;
          vm.selectedList = items;
        }
      },
      moveRight: function (item, index) {
        var vm = this;
        if (!item) {
          var item = $.grep(vm.unselectedItems, function (itm, index) {
            return itm.isSelected;
          });
        }
        if (!item) return;
        if (vm.selectedItems.length > vm.maxItem - 1 && vm.maxItem > 0) {
          vm.ShowAlert(vm.$t('SelectFieldMessage', [vm.maxItem]), 'warning', true, vm.$t('Alert'));
          return;
        }
        if (item.length + vm.selectedItems.length > vm.maxItem && vm.maxItem > 0) {
          vm.ShowAlert(vm.$t('SelectFieldMessage', [vm.maxItem]), 'warning', true, vm.$t('Alert'));
          return;
        }
        $.each(item, function (index, itm) {
          itm.isSelected = false;
          var idx = vm.unselectedItems.indexOf(itm);
          vm.unselectedItems.splice(idx, 1);
          if (typeof index === "number") vm.selectedItems.splice(index, 0, itm);else {
            if (vm.movedItemLocation == "top") vm.selectedItems.unshift(itm);else {
              vm.selectedItems.push(itm);
              var container = vm.$el.querySelector(".mover-right>.mover-panel");
              setTimeout(function () {
                container.scrollTop = container.scrollHeight;
              });
            }
          }
        });
        setTimeout(function () {
          vm.selectItem(item, vm.selectedItems);
          vm.raiseItemMoved(item, vm.selectedItems, "right");
        }, 1);
        vm.SetCheckbox("right", vm);
      },
      moveLeft: function () {
        var vm = this;
        var item = $.grep(vm.selectedItems, function (itm, index) {
          return itm.isSelected;
        });
        if (!item) return;
        $.each(item, function (index, itm) {
          itm.isSelected = false;
          var idx = vm.selectedItems.indexOf(itm);
          vm.selectedItems.splice(idx, 1);
          if (typeof index === "number") vm.unselectedItems.splice(index, 0, itm);else {
            if (vm.movedItemLocation == "top") vm.unselectedItems.unshift(itm);else {
              vm.unselectedItems.push(itm);
              var container = vm.$el.querySelector(".mover-left>.mover-panel");
              setTimeout(function () {
                container.scrollTop = container.scrollHeight;
              });
            }
          }
        });
        setTimeout(function () {
          vm.selectItem(item, vm.unselectedItems);
          vm.raiseItemMoved(item, vm.unselectedItems, "left");
        }, 10);
        vm.SetCheckbox("left", vm);
      },
      SetCheckbox: function (type, vm) {
        setTimeout(function () {
          vm.CheckBoxBootstrap();
          //$(".mover-panel :checkbox").prop("checked", false);
          $(".mover-panel :checkbox").prop("checked", true);
        }, 100);
      },
      moveAllRight: function () {
        var vm = this;
        for (var i = vm.unselectedItems.length - 1; i >= 0; i--) {
          var item = vm.unselectedItems[i];
          vm.unselectedItems.splice(i, 1);
          vm.selectedItems.push(item);
        }
      },
      moveAllLeft: function () {
        var vm = this;
        for (var i = vm.selectedItems.length - 1; i >= 0; i--) {
          var item = vm.selectedItems[i];
          vm.selectedItems.splice(i, 1);
          vm.unselectedItems.push(item);
        }
      },
      refreshListDisplay: function () {
        setTimeout(function () {
          var list = vm.selectedItems;
          vm.selectedItems = [];
          vm.selectedItems = list;
          list = vm.unselectedItems;
          vm.unselectedItems = [];
          vm.unselectedItems = list;
        }, 10);
      },
      SearchData: function () {
        var vm = this;
        var search = vm.Search;
        search = search.toLowerCase();
        vm.unselectedItems = vm.AllItems.filter(function (val) {
          return vm.selectedItems.filter(function (x) {
            return x.value == val.value;
          }).length == 0;
        });
        vm.unselectedItems = $.grep(vm.unselectedItems, function (ele) {
          return ele.displayValue.toLowerCase().indexOf(search) != -1;
        });
      },
      ClearData: function () {
        var vm = this;
        vm.Search = '';
        vm.unselectedItems = vm.AllItems.filter(function (val) {
          return vm.selectedItems.filter(function (x) {
            return x.value == val.value;
          }).length == 0;
        });
      },
      onSorted: function (e) {
        var key = e.item.dataset["id"];
        var side = e.item.dataset["side"];
        var ItemIndex = e.item.dataset["index"];
        if (side == "left") {
          var list = vm.SortItemOfList(vm.unselectedItems, key, ItemIndex, e.newIndex);
          vm.unselectedItems = [];
          setTimeout(function () {
            vm.unselectedItems = list;
          }, 1);
        } else {
          list = vm.SortItemOfList(vm.selectedItems, key, ItemIndex, e.newIndex);
          vm.selectedItems = [];
          setTimeout(function () {
            vm.selectedItems = list;
          }, 1);
        }
      },
      SortItemOfList: function (list, key, ItemIndex, newIndex) {
        var item = list.find(function (itm) {
          return itm.value == key;
        });
        if (!item) return list;
        list.splice(ItemIndex, 1);
        list.splice(newIndex, 0, item);
        list.forEach(function (itm) {
          itm.isSelected = false;
        });
        vm.selectItem(item, list);
        return list;
      },
      onListDrop: function (e) {
        return false;
      },
      normalizeListValues: function () {
        if (!vm.selectedItems || vm.selectedItems.length == 0 || !vm.unselectedItems || vm.unselectedItems.length == 0) return;
        for (var item of vm.selectedItems) {
          var selected = item;
          var idx = vm.unselectedItems.findIndex(function (itm) {
            return itm.value == selected.value;
          });
          if (idx > -1) vm.unselectedItems.splice(idx, 1);
        }
      }
    };
    var vue = this;
    setTimeout(function () {
      vm.initialize(vue);
    }, 100);
    return vm;
  },
  created: function () {
    var obj = this;
    setTimeout(function () {
      //obj.AllItems = JSON.parse(JSON.stringify(obj.leftItems));
      var leftObj = JSON.parse(JSON.stringify(obj.leftItems));
      $.each(leftObj, function (index, item) {
        let checkItem = obj.AllItems.filter(function (x) {
          return x.value == item.value;
        });
        if (checkItem.length == 0) {
          obj.AllItems.push(item);
        }
      });
      obj.unselectedItems = JSON.parse(JSON.stringify(obj.leftItems));
      var rightObj = JSON.parse(JSON.stringify(obj.rightItems));
      $.each(rightObj, function (index, item) {
        let checkItem = obj.AllItems.filter(function (x) {
          return x.value == item.value;
        });
        if (checkItem.length == 0) {
          obj.AllItems.push(item);
        }
      });
      //obj.SetScrolbar('dark-thick', null, 'scrollmoverdiv');
    }, 1000);
    setTimeout(function () {
      obj.SetBootstraptoolTip();
    }, 200);
    setTimeout(function () {
      obj.CheckBoxBootstrap();
    }, 100);
  }
});
// CONCATENATED MODULE: ./src/components/Common/mover.vue?vue&type=script&lang=js&
 /* harmony default export */ var Common_movervue_type_script_lang_js_ = (movervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Common/mover.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Common_movervue_type_script_lang_js_,
  movervue_type_template_id_06dedc2b_render,
  movervue_type_template_id_06dedc2b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var mover = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Common/moveruser.vue?vue&type=template&id=61ccb472&
var moveruservue_type_template_id_61ccb472_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-fluid mover-panel"
  }, [_c('div', {
    staticClass: "border-0 p-0 d-flex flex-wrap"
  }, [_c('div', {
    staticClass: "mover-panel-box leftpanel"
  }, [_c('div', {
    staticClass: "heading-border"
  }, [_c('h5', {
    staticClass: "h5"
  }, [_c('span', [_vm._v(_vm._s(_vm.titleLeft))])])]), _c('div', {
    staticClass: "col-12 pl-0 mt-2 px-small-0"
  }, [_c('div', {
    staticClass: "col-sm-12 col-md-4 col-lg-4 float-left pr-1 pl-0 px-small-0"
  }, [_c('div', {
    staticClass: "form-group mb-1"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.UserName,
      expression: "UserName"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "search",
      "maxlength": "50",
      "type": "text",
      "placeholder": _vm.GetPlaceHoder(),
      "autocomplete": "off"
    },
    domProps: {
      "value": _vm.UserName
    },
    on: {
      "keyup": function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.SearchData();
      },
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.UserName = $event.target.value;
      }
    }
  })])]), _c('div', {
    staticClass: "col-sm-12 col-md-5 col-lg-5 float-left pr-1 pl-0 px-small-0"
  }, [_c('div', {
    staticClass: "form-group mb-1"
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.DepartmentName,
      expression: "DepartmentName"
    }],
    staticClass: "form-control",
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.DepartmentName = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v(_vm._s(_vm.$t("SelectDepartment")))]), _vm._l(_vm.GetDistinctArray(_vm.leftItems), function (item, itemIndex) {
    return _c('option', {
      key: itemIndex,
      domProps: {
        "value": item
      }
    }, [_vm._v(_vm._s(item))]);
  })], 2)])]), _c('div', {
    staticClass: "col-sm-12 col-md-3 col-lg-3 float-left pl-0 px-small-0"
  }, [_c('div', {
    staticClass: "search-btm-btn background-0 text-left form-check-inline d-flex"
  }, [_c('a', {
    staticClass: "btn btn-success mr-1 px-4",
    attrs: {
      "title": _vm.$t('Search'),
      "href": "javascript:;"
    },
    on: {
      "click": function ($event) {
        return _vm.SearchData();
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-search"
  })]), _c('a', {
    staticClass: "btn btn-danger clearsearchtext px-4",
    attrs: {
      "href": "javascript:;",
      "title": _vm.$t('Clear')
    },
    on: {
      "click": function ($event) {
        return _vm.ClearData();
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-refresh"
  })])])])]), _c('div', {
    staticClass: "listing mt-2"
  }, [_c('vue-scroll', [_c('div', {
    staticClass: "table-responsive scrollmoverdiv",
    staticStyle: {
      "max-height": "500px"
    }
  }, [_c('table', {
    staticClass: "table table-bordered",
    attrs: {
      "aria-describedby": "moveruser"
    }
  }, [_c('thead', {
    staticClass: "thead-bg"
  }, [_c('tr', {
    attrs: {
      "role": "row"
    }
  }, [_c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v(_vm._s(_vm.$t("UserName")))]), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v(_vm._s(_vm.$t("Department")))])])]), _c('tbody', {
    attrs: {
      "id": _vm.targetId + 'LeftItems'
    }
  }, [_vm._l(_vm.unselectedItems, function (item, index) {
    return _c('tr', {
      key: index,
      class: {
        'low-bar': item.isSelected,
        'even': index % 2 == 2,
        'odd': index % 2 > 0
      },
      attrs: {
        "data-id": item.value,
        "data-side": "left",
        "data-index": index
      },
      on: {
        "click": function ($event) {
          return _vm.selectItem(item, _vm.unselectedItems);
        }
      }
    }, [_c('td', {
      staticClass: "sorting_1"
    }, [_vm._v(_vm._s(item.displayValue))]), _c('td', {
      staticClass: "sorting_1"
    }, [_vm._v(_vm._s(item.departmentName))])]);
  }), _vm.unselectedItems == null || _vm.unselectedItems.length == 0 ? _c('tr', {
    staticStyle: {
      "cursor": "initial"
    }
  }, [_c('td', {
    staticClass: "text-center text-danger",
    attrs: {
      "colspan": "2"
    }
  }, [_vm._v(_vm._s(_vm.$t("NoUserFound")))])]) : _vm._e()], 2)])])])], 1)]), _c('div', {
    staticClass: "mover-controls"
  }, [_vm.moveAll != 'false' ? _c('button', {
    attrs: {
      "type": "button",
      "data-toggle-tooltip": "tooltip",
      "title": _vm.$t('MoveAllRight')
    },
    on: {
      "click": function ($event) {
        return _vm.moveAllRight();
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-angle-double-down fa-2x d-md-none d-none",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('em', {
    staticClass: "fa fa-angle-double-right fa-2x d-block d-md-block",
    attrs: {
      "aria-hidden": "true"
    }
  })]) : _vm._e(), _c('button', {
    attrs: {
      "type": "button",
      "data-toggle-tooltip": "tooltip",
      "title": _vm.$t('MoveRight')
    },
    on: {
      "click": function ($event) {
        return _vm.moveRight();
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-angle-down fa-2x d-md-none d-none",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('em', {
    staticClass: "fa fa-angle-right fa-2x d-block d-md-block",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _c('button', {
    attrs: {
      "type": "button",
      "data-toggle-tooltip": "tooltip",
      "title": _vm.$t('MoveLeft')
    },
    on: {
      "click": function ($event) {
        return _vm.moveLeft();
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-angle-up fa-2x d-md-none d-none",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('em', {
    staticClass: "fa fa-angle-left fa-2x d-block d-md-block",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm.moveAll != 'false' ? _c('button', {
    attrs: {
      "type": "button",
      "data-toggle-tooltip": "tooltip",
      "title": _vm.$t('MoveAllLeft')
    },
    on: {
      "click": function ($event) {
        return _vm.moveAllLeft();
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-angle-double-up fa-2x d-md-none d-none",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('em', {
    staticClass: "fa fa fa-angle-double-left fa-2x d-block d-md-block",
    attrs: {
      "aria-hidden": "true"
    }
  })]) : _vm._e()]), _c('div', {
    staticClass: "mover-panel-box rightpanel"
  }, [_c('div', {
    staticClass: "heading-border"
  }, [_c('h5', {
    staticClass: "h5"
  }, [_c('span', [_vm._v(_vm._s(_vm.titleRight))])])]), _vm._m(0), _c('div', {
    staticClass: "listing mt-2"
  }, [_c('vue-scroll', [_c('div', {
    staticClass: "table-responsive scrollmoverdiv",
    staticStyle: {
      "max-height": "500px"
    }
  }, [_c('table', {
    staticClass: "table table-bordered",
    attrs: {
      "id": "example",
      "aria-describedby": "mover"
    }
  }, [_c('thead', {
    staticClass: "thead-bg"
  }, [_c('tr', [_c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v(_vm._s(_vm.$t("UserName")))]), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v(_vm._s(_vm.$t("Department")))])])]), _c('tbody', {
    attrs: {
      "id": _vm.targetId + 'RightItems'
    }
  }, [_vm._l(_vm.selectedItems, function (item, indexItem) {
    return _c('tr', {
      key: indexItem,
      class: {
        'even': indexItem % 2 == 2,
        'odd': indexItem % 2 > 0,
        'low-bar': item.isSelected
      },
      attrs: {
        "data-id": item.value,
        "data-side": "right"
      },
      on: {
        "click": function ($event) {
          return _vm.selectItem(item, _vm.selectedItems);
        }
      }
    }, [_c('td', [_c('span', {
      staticClass: "my-handle"
    }, [_vm._v(_vm._s(item.displayValue))])]), _c('td', [_vm._v(_vm._s(item.departmentName))])]);
  }), _vm.selectedItems == null || _vm.selectedItems.length == 0 ? _c('tr', {
    staticStyle: {
      "cursor": "initial"
    }
  }, [_c('td', {
    staticClass: "text-center text-danger",
    attrs: {
      "colspan": "2"
    }
  }, [_vm._v(_vm._s(_vm.$t("UserNotSelect")))])]) : _vm._e()], 2)])])])], 1)])])]);
};
var moveruservue_type_template_id_61ccb472_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-12 pl-0 mt-2 d-none"
  }, [_c('div', {
    staticClass: "col-4 float-left pr-1 pl-0"
  }, [_c('div', {
    staticClass: "form-group mb-0"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "id": "search",
      "maxlength": "50",
      "type": "text",
      "placeholder": "Search By Title",
      "autocomplete": "off"
    }
  })])]), _c('div', {
    staticClass: "col-4 float-left pr-1 pl-0"
  }, [_c('div', {
    staticClass: "form-group mb-0"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "id": "search",
      "maxlength": "50",
      "type": "text",
      "placeholder": "Search By Title",
      "autocomplete": "off"
    }
  })])]), _c('div', {
    staticClass: "col-4 float-left pl-0"
  }, [_c('div', {
    staticClass: "search-btm-btn background-0 text-left form-check-inline d-flex"
  }, [_c('a', {
    staticClass: "btn btn-success mr-1 px-4",
    attrs: {
      "title": "",
      "id": "Go",
      "href": "javascript:;",
      "data-toggle-tooltip": "tooltip",
      "data-original-title": "Search"
    }
  }, [_c('em', {
    staticClass: "fa fa-search"
  })]), _c('a', {
    staticClass: "btn btn-danger clearsearchtext px-4",
    attrs: {
      "href": "javascript:;",
      "title": "",
      "data-toggle-tooltip": "tooltip",
      "data-original-title": "Clear"
    }
  }, [_c('em', {
    staticClass: "fa fa-refresh"
  })])])])]);
}];

// CONCATENATED MODULE: ./src/components/Common/moveruser.vue?vue&type=template&id=61ccb472&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Common/moveruser.vue?vue&type=script&lang=js&


/* harmony default export */ var moveruservue_type_script_lang_js_ = ({
  props: {
    titleLeft: {
      type: String,
      default: 'Available'
    },
    titleRight: {
      type: String,
      default: 'Selected'
    },
    movedItemLocation: {
      type: String,
      default: "top"
    },
    leftItems: Array,
    rightItems: Array,
    targetId: {
      type: String,
      default: "Mover"
    },
    normalizeLists: {
      type: Boolean,
      default: true
    },
    fontAwesome: {
      type: Boolean,
      default: true
    },
    moveAll: {
      type: Boolean,
      default: true
    },
    maxItem: {
      type: Number,
      default: 0
    }
  },
  methods: {
    raiseItemMoved: function _raiseItemMoved(item, targetList, listType) {
      this.lastMovedItem = {
        item: item,
        targetList: targetList,
        listType: listType
      };
      this.$emit('item-moved', this.lastMovedItem);
    },
    GetDistinctArray: function (array) {
      return array.map(function (item) {
        return item.departmentName;
      }).filter(function (value, index, self) {
        return self.indexOf(value) === index;
      });
    },
    GetPlaceHoder: function () {
      return this.$t("SearchbyFieldName"), this.$t("Name");
    }
  },
  data: function () {
    var vm = {
      selectedSortable: null,
      unselectedSortable: null,
      selectedItem: {},
      selectedList: null,
      selectedItems: this.rightItems,
      AllItems: [],
      unselectedItems: [],
      lastMovedItem: null,
      DepartmentArray: this.department,
      UserName: '',
      DepartmentName: '',
      initialize: function (vue) {
        var options1 = {
          group: "_mvgp_" + new Date().getTime(),
          ghostClass: "mover-ghost",
          chosenClass: "mover-selected",
          onAdd: vm.onListDrop,
          onUpdate: vm.onSorted,
          sort: false,
          disabled: true
        };
        var options2 = {
          group: "_mvgp_" + new Date().getTime(),
          ghostClass: "mover-ghost",
          chosenClass: "mover-selected",
          onAdd: vm.onListDrop,
          onUpdate: vm.onSorted,
          handle: ".my-handle"
        };
        var targetId = vue.targetId;
        var el = document.getElementById(targetId + 'LeftItems');
        vm.unselectedSortable = sortable_esm["a" /* default */].create(el, options1);
        var el2 = document.getElementById(targetId + 'RightItems');
        vm.selectedSortable = sortable_esm["a" /* default */].create(el2, options2);
        if (vue.normalizeLists) vm.normalizeListValues();
      },
      selectItem: function (item, items) {
        var vm = this;
        if (!item) {
          if (items.length > 0) item = items[0];
          if (!item) return;
        }
        item.isSelected = !item.isSelected;
        vm.selectedItem = item;
        vm.selectedList = items;
      },
      SetCheckbox: function (type) {
        setTimeout(function () {
          $(".mover-panel :checkbox").prop("checked", false);
        }, 100);
      },
      moveRight: function (item, index) {
        var vm = this;
        if (!item) {
          var item = $.grep(vm.unselectedItems, function (itm, index) {
            return itm.isSelected;
          });
        }
        if (!item) return;
        if (vm.selectedItems.length > vm.maxItem - 1 && vm.maxItem > 0) {
          alertR(this.$t("SelectFieldMessage") + vm.maxItem, true, this.$t("Alert"));
          return;
        }
        $.each(item, function (index, itm) {
          itm.isSelected = false;
          var idx = vm.unselectedItems.indexOf(itm);
          vm.unselectedItems.splice(idx, 1);
          console.log(vm.selectedItems);
          if (typeof index === "number") {
            index = vm.selectedItems.hasOwnProperty('length') ? vm.selectedItems.length : 0;
            vm.selectedItems.splice(index, 0, itm);
          } else {
            if (vm.movedItemLocation == "top") vm.selectedItems.unshift(itm);else {
              vm.selectedItems.push(itm);
              var container = vm.$el.querySelector(".mover-right>.mover-panel");
              setTimeout(function () {
                container.scrollTop = container.scrollHeight;
              });
            }
          }
          console.log(vm.selectedItems);
        });
        setTimeout(function () {
          vm.selectItem(item, vm.selectedItems);
          vm.raiseItemMoved(item, vm.selectedItems, "right");
        }, 10);
        vm.SetCheckbox("right");
      },
      moveLeft: function (item, index) {
        var vm = this;
        var item = $.grep(vm.selectedItems, function (itm, index) {
          return itm.isSelected;
        });
        if (!item) return;
        $.each(item, function (index, itm) {
          itm.isSelected = false;
          var idx = vm.selectedItems.indexOf(itm);
          vm.selectedItems.splice(idx, 1);
          if (typeof index === "number") vm.unselectedItems.splice(index, 0, itm);else {
            if (vm.movedItemLocation == "top") vm.unselectedItems.unshift(itm);else {
              vm.unselectedItems.push(itm);
              var container = vm.$el.querySelector(".mover-left>.mover-panel");
              setTimeout(function () {
                container.scrollTop = container.scrollHeight;
              });
            }
          }
        });
        setTimeout(function () {
          vm.selectItem(item, vm.unselectedItems);
          vm.raiseItemMoved(item, vm.unselectedItems, "left");
        }, 10);
        vm.SetCheckbox("left");
      },
      moveAllRight: function () {
        var vm = this;
        for (var i = vm.unselectedItems.length - 1; i >= 0; i--) {
          var item = vm.unselectedItems[i];
          vm.unselectedItems.splice(i, 1);
          vm.selectedItems.push(item);
        }
        vm.SetCheckbox();
      },
      moveAllLeft: function () {
        var vm = this;
        for (var i = vm.selectedItems.length - 1; i >= 0; i--) {
          var item = vm.selectedItems[i];
          vm.selectedItems.splice(i, 1);
          vm.unselectedItems.push(item);
        }
        vm.SetCheckbox();
      },
      refreshListDisplay: function () {
        var vm = this;
        setTimeout(function () {
          var list = vm.selectedItems;
          vm.selectedItems = [];
          vm.selectedItems = list;
          list = vm.unselectedItems;
          vm.unselectedItems = [];
          vm.unselectedItems = list;
        }, 10);
      },
      SearchData: function () {
        var vm = this;
        var userName = vm.UserName;
        var departmentName = vm.DepartmentName;
        vm.unselectedItems = vm.AllItems.filter(function (val) {
          return vm.selectedItems.filter(function (x) {
            return x.value == val.value;
          }).length == 0;
        });
        if ($.trim(userName) != "" && $.trim(departmentName) == "") {
          userName = userName.toLowerCase();
          vm.unselectedItems = $.grep(vm.unselectedItems, function (ele) {
            return ele.displayValue.toLowerCase().indexOf(userName) != -1;
          });
        } else if ($.trim(userName) == "" && $.trim(departmentName) != "") {
          vm.unselectedItems = $.grep(vm.unselectedItems, function (ele) {
            return ele.departmentName == departmentName;
          });
        } else if ($.trim(userName) != "" && $.trim(departmentName) != "") {
          userName = userName.toLowerCase();
          vm.unselectedItems = $.grep(vm.unselectedItems, function (ele) {
            return ele.displayValue.toLowerCase().indexOf(userName) != -1 && ele.departmentName == departmentName;
          });
        }
      },
      ClearData: function () {
        var vm = this;
        vm.UserName = '';
        vm.DepartmentName = '';
        vm.unselectedItems = vm.AllItems.filter(function (val) {
          return vm.selectedItems.filter(function (x) {
            return x.value == val.value;
          }).length == 0;
        });
        //vm.unselectedItems = array1;
      },

      onSorted: function (e) {
        var key = e.item.dataset["id"];
        var side = e.item.dataset["side"];
        var ItemIndex = e.item.dataset["index"];
        if (side == "left") {
          var list = vm.SortItemOfList(vm.unselectedItems, key, ItemIndex, e.newIndex);
          vm.unselectedItems = [];
          setTimeout(function () {
            vm.unselectedItems = list;
          }, 1);
        } else {
          list = vm.SortItemOfList(vm.selectedItems, key, ItemIndex, e.newIndex);
          vm.selectedItems = [];
          setTimeout(function () {
            vm.selectedItems = list;
          }, 1);
        }
      },
      SortItemOfList: function (list, key, ItemIndex, newIndex) {
        var vm = this;
        var item = list.find(function (itm) {
          return itm.value == key;
        });
        if (!item) return list;
        list.splice(ItemIndex, 1);
        list.splice(newIndex, 0, item);
        list.forEach(function (itm) {
          itm.isSelected = false;
        });
        vm.selectItem(item, list);
        return list;
      },
      onListDrop: function (e) {
        var vm = this;
        var key = e.item.dataset["id"];
        var side = e.item.dataset["side"];
        var insertAt = e.newIndex;
        if (side == "left") {
          var item = vm.unselectedItems.find(function (itm) {
            return itm.value == key;
          });
          vm.moveRight(item, insertAt);
          item.isSelected = true;
          var list = vm.unselectedItems;
          vm.unselectedItems = [];
          setTimeout(function () {
            vm.unselectedItems = list;
          });
        } else {
          var item = vm.selectedItems.find(function (itm) {
            return itm.value == key;
          });
          item.isSelected = true;
          vm.moveLeft(item, insertAt);
          var list = vm.selectedItems;
          vm.selectedItems = [];
          setTimeout(function () {
            vm.selectedItems = list;
          });
        }
      },
      normalizeListValues: function () {
        var vm = this;
        if (!vm.selectedItems || vm.selectedItems.length == 0 || !vm.unselectedItems || vm.unselectedItems.length == 0) return;
        for (var item of vm.selectedItems) {
          var selected = item;
          var idx = vm.unselectedItems.findIndex(function (itm) {
            return itm.value == selected.value;
          });
          if (idx > -1) vm.unselectedItems.splice(idx, 1);
        }
      }
    };
    var vue = this;
    setTimeout(function () {
      vm.initialize(vue);
    }, 100);
    return vm;
  },
  created: function () {
    var obj = this;
    setTimeout(function () {
      var leftObj = JSON.parse(JSON.stringify(obj.leftItems));
      $.each(leftObj, function (index, item) {
        let checkItem = obj.AllItems.filter(function (x) {
          return x.value == item.value;
        });
        if (checkItem.length == 0) {
          obj.AllItems.push(item);
        }
      });
      obj.unselectedItems = JSON.parse(JSON.stringify(obj.leftItems));
      var rightObj = JSON.parse(JSON.stringify(obj.rightItems));
      $.each(rightObj, function (index, item) {
        if (obj.AllItems.filter(function (x) {
          return x.value == item.value;
        }).length == 0) {
          obj.AllItems.push(item);
        }
      });

      //obj.SetScrolbar('dark-thick', null, 'scrollmoverdiv');
    }, 1000);
    setTimeout(function () {
      obj.SetBootstraptoolTip();
    }, 200);
  }
});
// CONCATENATED MODULE: ./src/components/Common/moveruser.vue?vue&type=script&lang=js&
 /* harmony default export */ var Common_moveruservue_type_script_lang_js_ = (moveruservue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Common/moveruser.vue





/* normalize component */

var moveruser_component = Object(componentNormalizer["a" /* default */])(
  Common_moveruservue_type_script_lang_js_,
  moveruservue_type_template_id_61ccb472_render,
  moveruservue_type_template_id_61ccb472_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var moveruser = (moveruser_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Common/layout-filter-control.vue?vue&type=template&id=7e2d5576&
var layout_filter_controlvue_type_template_id_7e2d5576_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "w-100 float-left px-3 listing"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 float-left"
  }, [_c('div', {
    staticClass: "form-content border-0"
  }, [_vm.showAddData ? _c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 float-left",
    attrs: {
      "id": "divManageSearchCriteria"
    }
  }, [_c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 float-left"
  }, [_c('Form', {
    ref: "form",
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        values,
        meta
      }) {
        return [_c('div', {
          staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 float-left"
        }, [_c('div', {
          staticClass: "table-responsive overflow-visible"
        }, [_c('table', {
          staticClass: "table table-bordered nowrap mt-0 mb-0",
          attrs: {
            "aria-describedby": "layoutfilter"
          }
        }, [_c('thead', {
          staticClass: "thead-bg"
        }, [_c('tr', [_c('th', {
          attrs: {
            "scope": "col"
          }
        }, [_c('span', [_vm._v(_vm._s(_vm.$t("fieldName")))])]), _c('th', {
          attrs: {
            "scope": "col"
          }
        }, [_c('span', [_vm._v(" " + _vm._s(_vm.$t("ConditionalOperator")))])]), _c('th', {
          attrs: {
            "scope": "col"
          }
        }, [_c('span', [_vm._v(" " + _vm._s(_vm.$t("Value")))])]), _c('th', {
          staticClass: "text-center",
          attrs: {
            "scope": "col"
          }
        })])]), _c('tbody', _vm._l(_vm.filterItemData, function (item, index) {
          return _c('tr', {
            key: index
          }, [_c('td', [_c('Field', {
            attrs: {
              "name": 'field_name' + (index + 1),
              "data-vv-name": 'SearchFilter.fieldName' + (index + 1),
              "rules": {
                'required': item.is_required
              },
              "label": "Field Name"
            },
            scopedSlots: _vm._u([{
              key: "default",
              fn: function ({
                errors,
                changed
              }) {
                return [_c('select', {
                  directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: item.field_name,
                    expression: "item.field_name"
                  }],
                  class: {
                    'form-control disableAria': true,
                    'is-invalid': errors[0]
                  },
                  attrs: {
                    "name": 'field_name' + (index + 1)
                  },
                  on: {
                    "change": [function ($event) {
                      var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                        return o.selected;
                      }).map(function (o) {
                        var val = "_value" in o ? o._value : o.value;
                        return val;
                      });
                      _vm.$set(item, "field_name", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
                    }, function ($event) {
                      return _vm.GetOperatorData($event, item, index);
                    }],
                    "update:modelValue": changed
                  }
                }, [_c('option', {
                  attrs: {
                    "data-index": index,
                    "value": ""
                  }
                }, [_vm._v(_vm._s(_vm.$t("Select")) + " ")]), _vm._l(_vm.fieldNameData, function (option, optionIndex) {
                  return _c('option', {
                    key: optionIndex,
                    domProps: {
                      "value": String(option.custom_field_id)
                    }
                  }, [_vm._v(" " + _vm._s(_vm.$t(option.display_name)))]);
                })], 2)];
              }
            }], null, true)
          })], 1), _c('td', [_c('Field', {
            attrs: {
              "name": 'operator' + (index + 1),
              "rules": {
                'required': item.is_required
              },
              "label": "operator"
            },
            scopedSlots: _vm._u([{
              key: "default",
              fn: function ({
                errors,
                changed
              }) {
                return [_c('select', {
                  directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: item.operator,
                    expression: "item.operator"
                  }],
                  class: {
                    'form-control': true,
                    'disableAria': true,
                    'is-invalid': errors[0]
                  },
                  attrs: {
                    "name": 'operator' + (index + 1)
                  },
                  on: {
                    "update:modelValue": changed,
                    "change": [function ($event) {
                      var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                        return o.selected;
                      }).map(function (o) {
                        var val = "_value" in o ? o._value : o.value;
                        return val;
                      });
                      _vm.$set(item, "operator", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
                    }, function ($event) {
                      return _vm.ShowFieldValue($event, item, index);
                    }]
                  }
                }, [_c('option', {
                  attrs: {
                    "value": ""
                  }
                }, [_vm._v(_vm._s(_vm.$t("Select")))]), _vm._l(item.operator_list, function (option, optionIndex1) {
                  return _c('option', {
                    key: optionIndex1,
                    domProps: {
                      "value": String(option.OPERATOR_ID)
                    }
                  }, [_vm._v(" " + _vm._s(option.OPERATOR_DISPLAY_NAME))]);
                })], 2)];
              }
            }], null, true)
          })], 1), _c('td', {
            staticClass: "overflow-visible"
          }, [item.dt_code == 'date' || item.dt_code == 'datetime' ? _c('div', {
            class: {
              'col-5 p-0 float-left pr-1': item.operator_expression == 'between'
            }
          }, [_c('Field', {
            attrs: {
              "name": 'date' + item.label + index,
              "rules": {
                'required': item.is_required
              },
              "label": item.label + index
            },
            scopedSlots: _vm._u([{
              key: "default",
              fn: function ({
                errors,
                changed
              }) {
                return [_c('v-date-picker', {
                  staticClass: "input-group",
                  class: {
                    'disableAria': true,
                    'is-invalid': (item.dt_code == 'date' || item.dt_code == 'datetime') && errors[0]
                  },
                  attrs: {
                    "popover": _vm.popover,
                    "minute-increment": 5,
                    "name": 'date' + item.label + index
                  },
                  on: {
                    "dp-hide": function ($event) {
                      item.second_value = '';
                      _vm.SetValues($event, item);
                    },
                    "update:modelValue": changed,
                    "input": function ($event) {
                      return _vm.SetValues($event, item);
                    }
                  },
                  scopedSlots: _vm._u([{
                    key: "default",
                    fn: function ({
                      inputValue,
                      inputEvents,
                      togglePopover
                    }) {
                      return [_c('input', _vm._g({
                        staticClass: "form-control",
                        domProps: {
                          "value": inputValue
                        }
                      }, inputEvents)), _c('div', {
                        staticClass: "input-group-append",
                        on: {
                          "click": function ($event) {
                            return togglePopover();
                          }
                        }
                      }, [_c('span', {
                        staticClass: "input-group-text"
                      }, [_c('em', {
                        staticClass: "fa fa-calendar"
                      })])])];
                    }
                  }], null, true),
                  model: {
                    value: item.value,
                    callback: function ($$v) {
                      _vm.$set(item, "value", $$v);
                    },
                    expression: "item.value"
                  }
                })];
              }
            }], null, true)
          })], 1) : _vm._e(), (item.dt_code == 'date' || item.dt_code == 'datetime') && item.operator_expression == 'between' ? _c('div', {
            staticClass: "col-2 float-left",
            staticStyle: {
              "margin-top": "6px"
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('And', 'And')))]) : _vm._e(), (item.dt_code == 'date' || item.dt_code == 'datetime') && item.operator_expression == 'between' ? _c('div', {
            class: {
              'input-group': true,
              'col-5 p-0 float-left': item.operator_expression == 'between'
            }
          }, [_c('Field', {
            attrs: {
              "name": 'second' + item.label + index,
              "rules": {
                'required': item.is_required
              },
              "label": item.label + index
            },
            scopedSlots: _vm._u([{
              key: "default",
              fn: function ({
                errors,
                changed
              }) {
                return [_c('v-date-picker', {
                  ref: "SecondDatePicker",
                  refInFor: true,
                  staticClass: "input-group",
                  class: {
                    'disableAria': true,
                    'is-invalid': (item.dt_code == 'date' || item.dt_code == 'datetime') && errors[0]
                  },
                  attrs: {
                    "popover": _vm.popover,
                    "minute-increment": 5,
                    "name": 'second' + item.label + index
                  },
                  on: {
                    "dp-hide": function ($event) {
                      item.second_value = '';
                      _vm.SetValues($event, item);
                    },
                    "update:modelValue": changed,
                    "input": function ($event) {
                      return _vm.SetValues($event, item);
                    }
                  },
                  scopedSlots: _vm._u([{
                    key: "default",
                    fn: function ({
                      inputValue,
                      inputEvents,
                      togglePopover
                    }) {
                      return [_c('input', _vm._g({
                        staticClass: "form-control",
                        domProps: {
                          "value": inputValue
                        }
                      }, inputEvents)), _c('div', {
                        staticClass: "input-group-append",
                        on: {
                          "click": function ($event) {
                            return togglePopover();
                          }
                        }
                      }, [_c('span', {
                        staticClass: "input-group-text"
                      }, [_c('em', {
                        staticClass: "fa fa-calendar"
                      })])])];
                    }
                  }], null, true),
                  model: {
                    value: item.second_value,
                    callback: function ($$v) {
                      _vm.$set(item, "second_value", $$v);
                    },
                    expression: "item.second_value"
                  }
                })];
              }
            }], null, true)
          })], 1) : _vm._e(), item.picklist_options != 'Lookup' && item.dt_code != 'date' && item.dt_code != 'datetime' && item.dt_code != 'radio' && item.dt_code != 'select' && item.dt_code != 'textarea' && item.dt_code != 'checkbox' && item.operator_expression != 'Is Null' && item.operator_expression != 'Is Not Null' ? _c('Field', {
            attrs: {
              "name": item.label + index,
              "rules": {
                'required': item.is_required
              },
              "label": "Value"
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
                    value: item.value,
                    expression: "item.value"
                  }],
                  class: {
                    'form-control disableAria': true,
                    'is-invalid': errors[0],
                    'col-5 float-left': item.operator_expression == 'between'
                  },
                  attrs: {
                    "id": item.label + index,
                    "name": item.label + index,
                    "type": "text"
                  },
                  domProps: {
                    "value": item.value
                  },
                  on: {
                    "input": [function ($event) {
                      if ($event.target.composing) return;
                      _vm.$set(item, "value", $event.target.value);
                    }, function ($event) {
                      return _vm.SetValues($event, item);
                    }]
                  }
                })];
              }
            }], null, true)
          }) : _vm._e(), item.picklist_options != 'Lookup' && item.dt_code != 'date' && item.dt_code != 'datetime' && item.dt_code != 'radio' && item.dt_code != 'select' && item.dt_code != 'textarea' && item.dt_code != 'checkbox' && item.operator_expression == 'between' ? _c('div', {
            staticClass: "col-2 float-left",
            staticStyle: {
              "margin-top": "6px"
            }
          }, [_vm._v(" " + _vm._s(_vm.$t('And', 'And')) + " ")]) : _vm._e(), item.picklist_options != 'Lookup' && item.dt_code != 'date' && item.dt_code != 'datetime' && item.dt_code != 'radio' && item.dt_code != 'select' && item.dt_code != 'textarea' && item.dt_code != 'checkbox' && item.operator_expression == 'between' ? _c('Field', {
            attrs: {
              "name": 'second' + item.label + index,
              "rules": {
                'required': item.is_required
              },
              "label": 'second' + item.label + index
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
                    value: item.second_value,
                    expression: "item.second_value"
                  }],
                  class: {
                    'form-control disableAria': true,
                    'is-invalid': errors[0],
                    'col-5 float-left': item.operator_expression == 'between'
                  },
                  attrs: {
                    "type": "text",
                    "id": item.label,
                    "name": 'second' + item.label + index
                  },
                  domProps: {
                    "value": item.second_value
                  },
                  on: {
                    "input": [function ($event) {
                      if ($event.target.composing) return;
                      _vm.$set(item, "second_value", $event.target.value);
                    }, function ($event) {
                      return _vm.SetValues($event, item, 'second');
                    }]
                  }
                })];
              }
            }], null, true)
          }) : _vm._e(), item.dt_code == 'textarea' ? _c('Field', {
            attrs: {
              "name": 'textarea' + item.label + index,
              "rules": {
                'required': item.is_required
              },
              "label": item.label + index
            },
            scopedSlots: _vm._u([{
              key: "default",
              fn: function ({
                errors
              }) {
                return [_c('textarea', {
                  directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: item.value,
                    expression: "item.value"
                  }],
                  class: {
                    'form-control': true,
                    'is-invalid': item.dt_code == 'textarea' && errors[0]
                  },
                  attrs: {
                    "id": item.label
                  },
                  domProps: {
                    "value": item.value
                  },
                  on: {
                    "change": function ($event) {
                      return _vm.SetValues($event, item);
                    },
                    "input": function ($event) {
                      if ($event.target.composing) return;
                      _vm.$set(item, "value", $event.target.value);
                    }
                  }
                })];
              }
            }], null, true)
          }) : _vm._e(), item.dt_code == 'radio' ? _c('div', {
            staticClass: "form-control pl-4 border-0 bg-transparent"
          }, [_c('div', {
            staticClass: "form-check form-check-inline"
          }, _vm._l(_vm.MakeArray(item.picklist_options, item.dt_code), function (option, optionIndex2) {
            return _c('div', {
              key: optionIndex2,
              staticClass: "form-check form-check-inline custom-control mx-4 pl-2 custom-radio",
              attrs: {
                "key": option.name
              }
            }, [_c('Field', {
              attrs: {
                "name": 'rdo_' + item.custom_field_id + option.value,
                "rules": {
                  'required': item.is_required
                },
                "label": item.label
              }
            }, [_c('label', {
              staticClass: "form-check form-check-inline"
            }, [_c('div', {
              staticClass: "custom-control custom-radio custom-control-inline"
            }, [_c('input', {
              directives: [{
                name: "model",
                rawName: "v-model",
                value: item.value,
                expression: "item.value"
              }],
              staticClass: "custom-control-input",
              attrs: {
                "name": 'rdo_' + item.custom_field_id + option.value,
                "id": 'rdo_' + item.custom_field_id + option.value,
                "type": "radio",
                "data-resource": option.name
              },
              domProps: {
                "checked": option.value == item.value,
                "value": option.value,
                "checked": _vm._q(item.value, option.value)
              },
              on: {
                "change": [function ($event) {
                  return _vm.$set(item, "value", option.value);
                }, function ($event) {
                  return _vm.SetValues($event, item);
                }]
              }
            }), _c('label', {
              staticClass: "custom-control-label",
              attrs: {
                "for": 'rdo_' + item.custom_field_id + option.value
              }
            }, [_vm._v(_vm._s(option.name))])])])])], 1);
          }), 0)]) : _vm._e(), item.dt_code == 'checkbox' ? _c('div', {
            staticClass: "form-control pl-0 border-0 bg-transparent"
          }, [_c('div', {
            staticClass: "form-check form-check-inline"
          }, _vm._l(_vm.MakeArray(item.picklist_options, item.dt_code), function (option, optionIndex3) {
            return _c('div', {
              key: optionIndex3,
              staticClass: "custom-control custom-checkbox"
            }, [_c('Field', {
              attrs: {
                "name": 'chk_' + item.custom_field_id + option.value,
                "rules": {
                  'required': item.is_required
                },
                "label": item.label
              }
            }, [_c('input', {
              directives: [{
                name: "model",
                rawName: "v-model",
                value: item.select_value,
                expression: "item.select_value"
              }],
              staticClass: "dynamic custom-control-input",
              attrs: {
                "id": 'chk_' + item.custom_field_id + option.value,
                "name": 'chk_' + item.custom_field_id + option.value,
                "data-resource-id": option.name,
                "type": "checkbox"
              },
              domProps: {
                "value": option.value,
                "checked": Array.isArray(item.select_value) ? _vm._i(item.select_value, option.value) > -1 : item.select_value
              },
              on: {
                "change": [function ($event) {
                  var $$a = item.select_value,
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false;
                  if (Array.isArray($$a)) {
                    var $$v = option.value,
                      $$i = _vm._i($$a, $$v);
                    if ($$el.checked) {
                      $$i < 0 && _vm.$set(item, "select_value", $$a.concat([$$v]));
                    } else {
                      $$i > -1 && _vm.$set(item, "select_value", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
                    }
                  } else {
                    _vm.$set(item, "select_value", $$c);
                  }
                }, function ($event) {
                  return _vm.SetValues($event, item);
                }]
              }
            })]), _c('label', {
              staticClass: "custom-control-label universal-custom-control-label pl-2 pr-1 dynamic",
              attrs: {
                "for": 'chk_' + item.custom_field_id + option.value
              }
            }, [_vm._v(_vm._s(option.name))])], 1);
          }), 0)]) : _vm._e(), item.picklist_options == 'Lookup' && item.dt_code == 'select' && (item.dropdown_type == 'custom' || item.dropdown_type == 'normal' && (item.operator_expression == 'IN' || item.operator_expression == 'NOT IN')) ? _c('Field', {
            attrs: {
              "name": 'Multiselect' + item.label + index,
              "rules": {
                'required': item.is_required
              },
              "label": item.label + index
            },
            scopedSlots: _vm._u([{
              key: "default",
              fn: function ({
                errors,
                changed
              }) {
                return [_c('Multiselect', {
                  class: {
                    'disableAria': true,
                    'is-invalid': item.picklist_options == 'Lookup' && item.dt_code == 'select' && item.dropdown_type == 'custom' && errors[0]
                  },
                  attrs: {
                    "multiple": item.operator_expression == 'IN' || item.operator_expression == 'NOT IN' ? true : false,
                    "name": 'Multiselect' + item.label + index,
                    "placeholder": "Search a value",
                    "filter-results": false,
                    "searchable": true,
                    "track-by": "value",
                    "show-no-results": false,
                    "internal-search": false,
                    "clear-on-select": false,
                    "close-on-select": true,
                    "options": item.dropdown_type == 'normal' ? _vm.MakeNormalArray(item.select_options) : item.select_options,
                    "object": true,
                    "label": "name"
                  },
                  on: {
                    "search-change": function ($event) {
                      return _vm.onSearch($event, item);
                    },
                    "select": _vm.setSelectedValue,
                    "update:modelValue": changed
                  },
                  model: {
                    value: item.value,
                    callback: function ($$v) {
                      _vm.$set(item, "value", $$v);
                    },
                    expression: "item.value"
                  }
                })];
              }
            }], null, true)
          }) : _vm._e(), item.picklist_options == 'Lookup' && item.dt_code == 'select' && item.dropdown_type == 'normal' && item.operator_expression != 'IN' && item.operator_expression != 'NOT IN' && item.operator_expression != 'Is Null' && item.operator_expression != 'Is Not Null' ? _c('Field', {
            attrs: {
              "name": 'select' + item.label + index,
              "rules": {
                'required': true
              },
              "label": item.operator
            },
            scopedSlots: _vm._u([{
              key: "default",
              fn: function ({
                errors,
                changed
              }) {
                return [_c('select', {
                  class: {
                    'form-control disableAria': true,
                    'is-invalid': errors[0]
                  },
                  attrs: {
                    "name": 'select' + item.label + index
                  },
                  on: {
                    "update:modelValue": changed,
                    "change": function ($event) {
                      return _vm.SetValues($event, item, index);
                    }
                  }
                }, [_c('option', {
                  attrs: {
                    "value": ""
                  }
                }, [_vm._v(_vm._s(_vm.$t("Select")))]), _vm._l(_vm.MakeNormalArray(item.select_options), function (option, optionIndex4) {
                  return _c('option', {
                    key: optionIndex4,
                    domProps: {
                      "selected": item.value == option.value,
                      "value": option.value
                    }
                  }, [_vm._v(_vm._s(option.name) + " ")]);
                })], 2)];
              }
            }], null, true)
          }) : _vm._e(), item.picklist_options != 'Lookup' && item.dt_code == 'select' && item.operator_expression != 'IN' && item.operator_expression != 'NOT IN' ? _c('Field', {
            attrs: {
              "name": 'select2' + item.label + index,
              "rules": {
                'required': true
              },
              "label": item.operator
            },
            scopedSlots: _vm._u([{
              key: "default",
              fn: function ({
                errors,
                changed
              }) {
                return [_c('select', {
                  class: {
                    'form-control disableAria': true,
                    'is-invalid': errors[0]
                  },
                  attrs: {
                    "name": 'select2' + item.label + index
                  },
                  on: {
                    "update:modelValue": changed,
                    "change": function ($event) {
                      return _vm.SetValues($event, item, index);
                    }
                  }
                }, [_c('option', {
                  attrs: {
                    "value": ""
                  }
                }, [_vm._v(_vm._s(_vm.$t("Select")))]), _vm._l(_vm.MakeArray(item.picklist_options, item.dt_code), function (option, optionIndex5) {
                  return item.picklist_options != null ? _c('option', {
                    key: optionIndex5,
                    domProps: {
                      "selected": item.value == option.value,
                      "value": option.value
                    }
                  }, [_vm._v(_vm._s(option.name) + " ")]) : _vm._e();
                })], 2)];
              }
            }], null, true)
          }) : _vm._e(), item.picklist_options != 'Lookup' && item.picklist_options != null && item.dt_code == 'select' && (item.dropdown_type == 'custom' || item.dropdown_type == 'normal' && (item.operator_expression == 'IN' || item.operator_expression == 'NOT IN')) ? _c('Field', {
            attrs: {
              "name": 'Multiselect2' + item.label + index,
              "rules": {
                'required': item.is_required
              },
              "label": "name"
            },
            scopedSlots: _vm._u([{
              key: "default",
              fn: function ({
                errors,
                changed
              }) {
                return [_c('Multiselect', {
                  class: {
                    'disableAria': true,
                    'is-invalid': item.picklist_options == 'Lookup' && item.dt_code == 'select' && item.dropdown_type == 'custom' && errors[0]
                  },
                  attrs: {
                    "placeholder": "Search a value",
                    "filter-results": false,
                    "searchable": true,
                    "track-by": "value",
                    "show-no-results": false,
                    "internal-search": false,
                    "clear-on-select": false,
                    "close-on-select": true,
                    "options": item.select_options,
                    "object": true,
                    "label": "name"
                  },
                  on: {
                    "search-change": function ($event) {
                      return _vm.onSearch($event, item);
                    },
                    "select": function ($event) {
                      return _vm.setSelectedValue(item, $event);
                    },
                    "update:modelValue": changed
                  },
                  model: {
                    value: item.value,
                    callback: function ($$v) {
                      _vm.$set(item, "value", $$v);
                    },
                    expression: "item.value"
                  }
                })];
              }
            }], null, true)
          }) : _vm._e()], 1), _c('td', {
            staticClass: "text-center single-action"
          }, [_c('a', {
            attrs: {
              "href": "javascript:void(0);"
            },
            on: {
              "click": function ($event) {
                return _vm.DeleteSearchItem(item, index);
              }
            }
          }, [_c('em', {
            staticClass: "fa fa-trash action-icon text-danger"
          })])])]);
        }), 0)]), _c('div', {
          staticClass: "col-lg-12 text-right py-3"
        }, [_c('a', {
          staticClass: "btn btn-success",
          attrs: {
            "href": "javascript:;",
            "title": _vm.$t('Add')
          },
          on: {
            "click": _vm.AddSearchData
          }
        }, [_c('em', {
          staticClass: "fa fa-plus pr-2",
          attrs: {
            "aria-hidden": "true"
          }
        }), _vm._v(_vm._s(_vm.$t("Add")))])])])]), !_vm.isBlank(_vm.condition) ? _c('div', {
          staticClass: "col-12 float-left p-0 mt-2"
        }, [_c('div', {
          staticClass: "alert alert-secondary py-2"
        }, [_c('label', {
          staticClass: "font-weight-bold mb-0"
        }, [_vm._v(" " + _vm._s(_vm.$t("Condition")) + " :")]), _c('label', {
          staticClass: "mb-0 ml-1"
        }, [_vm._v(_vm._s(_vm.condition))])])]) : _vm._e(), _c('div', {
          staticClass: "col-12 float-left p-0 mt-2 d-none"
        }, [_c('div', {
          staticClass: "alert alert-secondary py-2"
        }, [_c('label', {
          staticClass: "font-weight-bold mb-0"
        }, [_vm._v("Database Condition:")]), _c('label', {
          staticClass: "mb-0"
        }, [_vm._v(_vm._s(_vm.databaseCondition))])])]), _c('div', {
          staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left py-3 d-none"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('div', {
          staticClass: "search-btm-btn"
        }, [_c('a', {
          staticClass: "btn btn-success formbtn widthhalf",
          attrs: {
            "href": "javascript:;",
            "title": _vm.$t('SaveAndSearch')
          },
          on: {
            "click": function ($event) {
              return _vm.SubmitData('save');
            }
          }
        }, [_c('em', {
          staticClass: "fa fa-save pr-2"
        }), _vm._v(" " + _vm._s(_vm.$t("SaveAndSearch")) + " ")]), _c('a', {
          staticClass: "btn btn-success formbtn widthhalf",
          attrs: {
            "href": "javascript:;",
            "title": _vm.$t('Search')
          },
          on: {
            "click": function ($event) {
              return _vm.SubmitData('search');
            }
          }
        }, [_c('em', {
          staticClass: "fa fa-search pr-2"
        }), _vm._v(_vm._s(_vm.$t("Search")))]), _c('a', {
          staticClass: "btn btn-danger formbtn widthhalf",
          attrs: {
            "href": "javascript:;",
            "title": _vm.$t('Cancel')
          },
          on: {
            "click": function ($event) {
              _vm.showListData = true;
              _vm.showAddData = false;
              _vm.filterItemData = [];
              _vm.GetSearchFilterItemData();
            }
          }
        }, [_c('em', {
          staticClass: "fa fa-close pr-2"
        }), _vm._v(_vm._s(_vm.$t("Cancel")))])])])])];
      }
    }], null, false, 1439735755)
  })], 1)]) : _vm._e()])])])]);
};
var layout_filter_controlvue_type_template_id_7e2d5576_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Common/layout-filter-control.vue?vue&type=template&id=7e2d5576&

// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__("1157");
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Common/layout-filter-control.vue?vue&type=script&lang=js&



/* harmony default export */ var layout_filter_controlvue_type_script_lang_js_ = ({
  props: {
    submodulecode: {
      type: String,
      required: true
    },
    modulename: {
      type: String,
      required: true
    },
    callbackfunction: {
      type: Function
    },
    control: {
      type: Object
    },
    viewId: {
      type: Number
    },
    filterType: {
      type: String
    },
    tabId: {
      type: Number
    }
  },
  data: function () {
    return {
      filterData: [],
      showListData: false,
      showAddData: true,
      filterItemData: [],
      fieldNameData: [],
      options: "",
      submited: false,
      databaseCondition: '',
      condition: '',
      filterName: '',
      validationForName: '',
      filterId: 0,
      isDefault: false,
      FormatForSecond: '',
      isFirstTime: false,
      exitstingFilterNameArray: [],
      ApiURL: '',
      CurrentObject: null,
      ViewId: 0,
      FilterType: '',
      TabId: 0,
      popover: {
        visibility: 'click'
      },
      CompanyType: '',
      isEmpty: false
    };
  },
  created: function () {
    this.ViewId = this.viewId;
    this.FilterType = this.filterType;
    this.CurrentObject = this.control;
    this.TabId = this.tabId;
    // this.IsExtraMapFeature();
    this.GetSearchFilterItemData();
    this.GetFieldNameData();
    if (this.ViewId > 0) {
      this.EditSearchFilterData(this.ViewId);
    }
    setTimeout(function () {
      jquery_default()('.modal-dialog').draggable({
        handle: ".modal-header"
      });
    }, 1000);
  },
  methods: {
    IsExtraMapFeature: function () {
      var vueObj = this;
      DataService["a" /* default */].IsExtraMapFeature().then(function (response) {
        vueObj.CompanyType = "";
        if (response.data != null && response.data != "") {
          vueObj.CompanyType = response.data;
        } else {
          vueObj.CompanyType = 'locating';
        }
      });
    },
    MakeArray: function (value, type) {
      var array = [];
      var arr = String(value).split(',');
      if (type == "radio" || type == "checkbox") {
        if (arr.length > 0) {
          for (var item of arr) {
            if (item.split("|").length > 1) {
              var person = {
                name: item.split("|")[0],
                value: item.split("|")[1]
              };
              array.push(person);
            } else {
              var person = {
                name: item,
                value: item
              };
              array.push(person);
            }
          }
        }
      } else {
        if (arr.length > 0) {
          for (var item of arr) {
            var person = {
              name: item,
              value: item
            };
            array.push(person);
          }
        }
      }
      return array;
    },
    GetLocalizedValue: function (fieldName, displayName) {
      try {
        if (this.isBlank(displayName)) {
          var chk = this.$t(String(fieldName).toUpperCase());
          if (chk != String(fieldName).toUpperCase()) {
            return chk;
          }
          chk = this.$t(String(fieldName));
          if (chk || /^\s*$/.test(chk)) {
            return chk;
          }
          return fieldName;
        } else {
          var chk = this.$t(String(displayName).toUpperCase());
          if (chk != String(displayName).toUpperCase()) {
            return chk;
          }
          chk = this.$t(String(displayName));
          if (chk || /^\s*$/.test(chk)) {
            return chk;
          }
          return displayName;
        }
      } catch (ex) {
        console.log(ex);
      }
    },
    MakeNormalArray: function (value) {
      if (value) {
        try {
          return JSON.parse(value);
        } catch (ex) {
          return value;
        }
      } else {
        value = [];
      }
    },
    isBlank: function (str) {
      return !str || /^\s*$/.test(str);
    },
    returnDateObject: function (date) {
      var checkDate = null;
      date = date == undefined ? '' : date;
      if (date != '') {
        checkDate = new Date(Date.parse(date));
      }
      return {
        format: 'MM-dd-yyyy',
        useStrict: true,
        useCurrent: false,
        showClear: true,
        showClose: true,
        allowInputToggle: true,
        minDate: checkDate,
        widgetPositioning: {
          horizontal: 'right',
          vertical: 'bottom'
        }
      };
    },
    GetValidationF: function (object) {
      var obj = {};
      if (object.is_required) {
        obj['required'] = true;
      }
      if (object.length > 0) {
        obj['max'] = object.length;
      }
      if (object.validation_type == "email") {
        obj['email'] = true;
      }
      if (object.dt_code == "date" || object.dt_code == "datetime") {
        obj['date_format'] = String(Globalize.culture().calendar.patterns.d).toUpperCase();
      }
      if (object.dt_code == "decimal") {
        obj['decimal'] = 2;
      }
      if ((object.name == "mobile_phone" || object.name == "business_phone" || object.name == "fax" || object.name == "zipcode") && this.submodulecode == 'CRM_CONTACTS') {
        obj['numeric'] = true;
        obj['max'] = 15;
      }
      if (object.dt_code == "int" || object.dt_code == "bigint") {
        obj['numeric'] = true;
      }
      if (object.dt_code == "url") {
        obj['url'] = 'require_protocol';
      }
      if (object.regular_expression != null && object.regular_expression != "") {
        obj['regex'] = object.regular_expression;
      }
      return obj;
    },
    onSearch: async function onSearch(search, objItem) {
      var vm = this;
      var selctedValue = objItem.value;
      if (typeof selctedValue == "undefined") {
        selctedValue = 0;
      }
      var param = "id=&moduleName=" + this.modulename + "&type=" + objItem.field_code + "&search=" + escape(search);
      if (objItem.dependent_type == "fill") {
        param += "&refId=" + selctedValue;
      }
      await DataService["a" /* default */].getDDLData(param).then(function (response) {
        var json = [];
        if (response.data == '') {}
        if (response.data != '') {
          json = response.data;
        }
        return objItem.select_options = json.DATA;
      });
    },
    setSelectedValue: function (item, val) {
      debugger;
      try {
        // item.value = val;
        setTimeout(() => {
          this.SetCondition();
          this.validateFilterData();
        }, 100);
      } catch (ex) {}
    },
    AddSearchData: function () {
      // debugger
      this.GetSearchFilterItemData();
    },
    DeleteSearchItem: function (item, index) {
      //  debugger
      var vm = this;
      var msg = vm.$t("ConfirmDelete");
      vm.confirmR(msg, true, null, function () {
        vm.filterItemData.splice(index, 1);
        vm.SetCondition();
      });
    },
    GetSearchFilterData: function () {
      var vm = this;
      var param = "moduleName=" + vm.modulename + "&subModuleCode=" + vm.submodulecode;
      this.filterData = [];
      DataService["a" /* default */].SearchCriteriaListing(param).then(function (response) {
        var json = response.data;
        if (json != null) {
          this.filterData = json.DATA;
          return this.filterData;
        }
      });
    },
    GetFieldNameData: function () {
      var vm = this;
      var param = "moduleName=" + vm.modulename + "&subModuleCode=" + vm.submodulecode;
      if (this.FilterType == "VIEW") {
        param = param + "&reqFrom=MANAGEVIEW";
      }
      this.fieldNameData = [];
      DataService["a" /* default */].GetFieldName(param).then(function (response) {
        debugger;
        var json = response.data;
        if (json != null) {
          vm.fieldNameData = json.DATA;
          if (vm.CompanyType == 'nonlocating') {
            vm.fieldNameData.forEach((item, index) => {
              if (item.label == 'parent_sub_status_id' || item.label == 'sub_status_id') {
                return vm.fieldNameData.splice(index, 1);
              }
            });
          } else {
            return vm.fieldNameData;
          }
        }
      });
    },
    GetOperatorData: function ($event, item) {
      var fieldId = $event.target.value;
      var chkData = jquery_default.a.grep(this.fieldNameData, function (element, index) {
        return element.custom_field_id == fieldId;
      });
      var datatype = '';
      item.dt_code = '';
      item.picklist_options = [];
      item.label = '';
      item.dropdown_type = '';
      item.select_options = '';
      item.select_value = '';
      item.length = 0;
      item.operator = '';
      item.field_code = '';
      item.second_value = '';
      item.display_name = '';
      item.is_required = false;
      if (chkData.length > 0) {
        if (chkData[0].display_name == 'ModifiedBy' || chkData[0].display_name == 'Modified By') {
          datatype = 'nvarchar';
        } else {
          datatype = chkData[0].sql_type;
        }
        item.dt_code = chkData[0].dt_code;
        item.picklist_options = chkData[0].picklist_options;
        item.label = chkData[0].label;
        item.dropdown_type = chkData[0].dropdown_type;
        item.select_options = chkData[0].select_options;
        item.length = chkData[0].length;
        item.display_name = chkData[0].display_name;
        item.field_code = chkData[0].field_code;
        item.is_required = chkData[0].is_required;
        item.validation_type = chkData[0].validation_type;
      }
      var url = "dataType=" + datatype + "&customField=" + fieldId;
      item.operator_list = [];
      DataService["a" /* default */].GetOperator(url).then(function (response) {
        var json = response.data;
        if (json != null) {
          item.operator_list = json.DATA;
          return item.operator_list;
        }
      });
      item.field_name = fieldId;
      item.value = '';
      setTimeout(() => {
        this.SetCondition();
        this.validateFilterData();
      }, 1000);
    },
    SetValues: function ($event, item, type) {
      debugger;
      if (item.dt_code == "datetime" || item.dt_code == "decimal" || item.dt_code == "date") {
        if (type == "second") {
          var value = item.second_value;
          item.second_value = value;
        } else {
          var value = item.value;
          item.value = value;
        }
        this.isEmpty = true;
      } else {
        if (type == "second") {
          item.second_value = $event.target.value;
        } else {
          item.value = $event.target.value;
        }
        this.isEmpty = true;
      }
      this.SetCondition();
      this.validateFilterData();
    },
    SetCondition: function () {
      debugger;
      var conditionText = "";
      var databaseCondition = "";
      var vm = this;
      var operatorExpression = "";
      jquery_default.a.each(vm.filterItemData, function (index, item) {
        if (index > 0) {
          conditionText += " And ";
          databaseCondition += " and ";
        }
        var fieldId = item.field_name;
        var chkData = jquery_default.a.grep(vm.fieldNameData, function (element) {
          return element.custom_field_id == fieldId;
        });
        if (typeof chkData != 'undefined' && chkData.length > 0) {
          debugger;
          conditionText += vm.GetLocalizedValue(chkData[0].label, chkData[0].display_name);
          if (chkData[0].dt_code == "date" || chkData[0].dt_code == "datetime") {
            // debugger
            databaseCondition += "convert(date, " + chkData[0].name + ", 23)";
          } else {
            if (chkData[0].name == 'CL.client') {
              chkData[0].name = 'CL.UserNames';
            } else if (chkData[0].name == 'PMU.pm') {
              chkData[0].name = 'PMU.UserNames';
            } else {
              databaseCondition += chkData[0].name.trimEnd();
            }
          }
        }
        var operatorId = item.operator;
        chkData = jquery_default.a.grep(item.operator_list, function (element, index) {
          return element.OPERATOR_ID == operatorId;
        });
        if (typeof chkData != 'undefined' && chkData.length > 0) {
          debugger;
          conditionText = conditionText + " " + chkData[0].OPERATOR_DISPLAY_NAME;
          operatorExpression = chkData[0].OPERATOR_EXPRESSION;
          databaseCondition += " " + operatorExpression;
        }
        if (!vm.isBlank(item.value)) {
          debugger;
          var text = item.value;
          var value = item.value;
          if (item.dt_code == "select" && item.dropdown_type == "normal" && operatorExpression != "IN" && operatorExpression != "NOT IN" && operatorExpression != 'Is Null' && operatorExpression != 'Is Not Null') {
            var array = vm.MakeNormalArray(item.select_options);
            chkData = jquery_default.a.grep(array, function (element, index) {
              return element.value == item.value;
            });
            if (typeof chkData != 'undefined' && chkData.length > 0) {
              text = chkData[0].name;
            }
          } else if (item.dt_code == "select" && item.dropdown_type == "custom" || item.dt_code == "select" && item.dropdown_type == "normal" && (operatorExpression == "IN" || operatorExpression == "NOT IN")) {
            if (Array.isArray(item.value)) {
              value = vm.createString(item.value, 'value');
              text = vm.createString(item.value, 'name');
            } else {
              value = item.value.value;
              text = item.value.name;
            }
            if (operatorExpression == "IN" || operatorExpression == "NOT IN") {
              var array = vm.MakeNormalArray(item.select_options);
              chkData = jquery_default.a.grep(array, function (element, index) {
                return element.value == item.value;
              });
              if (typeof chkData != 'undefined' && chkData.length > 0) {
                text = chkData[0].name;
              }
              value = "(" + value + ")";
            }
          } else if (item.dt_code == "select" && item.dropdown_type == "normal" && (operatorExpression == 'Is Null' || operatorExpression == 'Is Not Null')) {
            debugger;
            if (item.operator_expression == 'Is Null') {
              value = '';
              text = '';
            }
            if (item.operator_expression == 'Is Not Null') {
              value = '';
              text = '';
            }
          } else if (item.dt_code == "select" && item.dropdown_type != "custom" && item.dropdown_type != "normal") {
            debugger;
            if (operatorExpression == "IN" || operatorExpression == "NOT IN") {
              if (Array.isArray(item.value)) {
                value = vm.createString(item.value, 'value');
                text = vm.createString(item.value, 'name');
              } else {
                value = item.value.value;
                text = item.value.name;
              }
              value = "(" + value + ")";
            } else {
              debugger;
              var array = vm.MakeArray(item.picklist_options, item.dt_code);
              chkData = jquery_default.a.grep(array, function (element, index) {
                return element.value == item.value;
              });
              if (typeof chkData != 'undefined' && chkData.length > 0) {
                text = chkData[0].name;
              }
              value = " '" + value + "'";
            }
          } else if (item.dt_code == "date" || item.dt_code == "datetime") {
            debugger;
            if (operatorExpression == "between") {
              text = item.value + " And " + item.second_value;
              value = "'" + vm.$options.filters.formatDatee(item.value) + "'" + " and " + "'" + vm.$options.filters.formatDatee(item.second_value) + "'";
            } else {
              text = item.value;
              value = "'" + vm.$options.filters.formatDatee(item.value) + "'";
            }
          } else if (item.dt_code == "radio") {
            var array = vm.MakeArray(item.picklist_options, item.dt_code);
            chkData = jquery_default.a.grep(array, function (element, index) {
              return element.value == item.value;
            });
            if (typeof chkData != 'undefined' && chkData.length > 0) {
              text = chkData[0].name;
              value = "'" + chkData[0].value + "'";
            }
          } else {
            debugger;
            if (operatorExpression == "Like" || operatorExpression == "Not Like") {
              value = "'%" + item.value + "%'";
            } else if (operatorExpression == "Starts With") {
              value = "'" + item.value + "%'";
              databaseCondition = databaseCondition.replace("Starts With", "like");
            } else if (operatorExpression == "Ends With") {
              value = "'%" + item.value + "'";
              databaseCondition = databaseCondition.replace("Ends With", "like");
            } else if (operatorExpression == "between") {
              text = item.value + " And " + item.second_value;
              value = "'" + item.value + "'" + " and " + "'" + item.second_value + "'";
            } else if (operatorExpression == "IN" || operatorExpression == "NOT IN") {
              var values = String(item.value).split(",");
              var str = "";
              for (var i = 0; i < values.length; i++) {
                if (i > 0) {
                  str += " , ";
                }
                str += "'" + values[i] + "'";
              }
              value = "(" + str + ")";
            } else {
              value = "'" + value + "'";
            }
          }
          debugger;
          if (item.dt_code == "select" && item.dropdown_type == "normal" && item.label == 'frequency') {
            databaseCondition += " '" + value + "'";
          } else if (item.dt_code == "select" && item.dropdown_type == "normal" && item.label == 'forecast_category_name') {
            databaseCondition += " '" + text + "'";
          } else if (item.dt_code == "select" && item.dropdown_type == "normal" && item.label == 'display_icon') {
            databaseCondition += " '" + value + "'";
          } else {
            databaseCondition += " " + value;
          }
          conditionText = conditionText + " " + text;
        }
      });
      debugger;
      vm.condition = conditionText;
      vm.databaseCondition = encodeURIComponent(databaseCondition).replace(/'/g, "%27");
      if (typeof vm.CurrentObject != 'undefined' && vm.CurrentObject != null) {
        vm.CurrentObject.TabCondition = vm.condition;
        vm.CurrentObject.TabDatabaseCondition = vm.databaseCondition;
      } else {
        vm.$parent.$parent.ViewData.Condition = vm.condition;
        vm.$parent.$parent.ViewData.DatabaseCondition = vm.databaseCondition;
      }
      vm.SubmitData();
    },
    ShowFieldValue: function ($event, item) {
      debugger;
      var id = $event.target.value;
      var chkData = jquery_default.a.grep(item.operator_list, function (element, index) {
        return element.OPERATOR_ID == id;
      });
      var expression = '';
      if (chkData.length > 0) {
        expression = chkData[0].OPERATOR_EXPRESSION;
      }
      if (expression == 'between') {
        item.showSecondValue = true;
      } else {
        item.showSecondValue = false;
      }
      item.operator = id;
      item.operator_expression = expression;
      // debugger
      if (item.operator_expression == 'Is Null' || item.operator_expression == 'Is Not Null') {
        this.isEmpty = true;
        item.is_required = false;
        this.SetCondition();
      } else {
        console.log("UnCheck");
        this.SetCondition();
        this.validateFilterData();
      }
    },
    GetSearchFilterItemData: function () {
      var obj = {
        field_name: '',
        dt_code: '',
        operator: '',
        operator_expression: '',
        operator_list: [],
        first_value: '',
        second_value: '',
        showSecondValue: false,
        picklist_options: [],
        label: '',
        display_name: '',
        dropdown_type: '',
        select_options: '',
        length: 0,
        field_code: '',
        select_value: '',
        is_required: false
      };
      this.filterItemData.push(obj);
    },
    ApplyFilter: function (databaseCondition) {
      this.databaseCondition = databaseCondition;
      checkVue.searchCondition = this.databaseCondition;
      if (typeof this.callbackfunction != 'undefined' && this.callbackfunction != null) {
        this.callbackfunction();
      } else {
        this.$parent.PageSize = 10;
        this.$parent.FetchData();
      }
      this.$emit('close');
    },
    EditFilter: function (item, type) {
      //  debugger
      this.showListData = false;
      this.showAddData = true;
      if (type != 'NotSaved') {
        this.filterId = item.FILTER_ID;
        this.EditSearchFilterData(this.filterId);
      } else {
        this.filterName = this.$parent.appliedFilter[0].field_name.split('(')[0];
        this.filterItemData = this.$parent.appliedFilter[0];
      }
    },
    deleteFilter: function (item) {
      this.filterId = item.FILTER_ID;
      var vm = this;
      var alertTitle = vm.$t("Delete");
      var msg = vm.$t("ConfirmDeleteFilter") + vm.$t("Remove");
      vm.confirmR(msg, true, alertTitle, function () {
        var url = "id=" + item.FILTER_ID + "&moduleName=" + vm.modulename + "&subModuleCode=" + vm.submodulecode + "&isDelete=1";
        DataService["a" /* default */].SearchCriteriaById(url).then(function (response) {
          var json = response.data;
          var box = "";
          if (json != null && json.MSG == "SUCCESS") {
            vm.GetSearchFilterData();
            if (item.DATABASE_CONDITION == vm.$parent.searchCondition) {
              vm.$parent.searchCondition = "";
              if (typeof vm.callbackfunction != "undefined" && vm.callbackfunction != null) {
                vm.callbackfunction();
              } else {
                vm.$parent.FetchData();
              }
            }
            box = vm.ShowAlert(vm.$t("DeletedSuccess", [vm.$t("Filter")]), "success", true, vm.$t("Filter"));
          }
        });
      });
    },
    EditSearchFilterData: function (id) {
      debugger;
      var vm = this;
      var tabId = 0;
      if (vm.TabId > 0) {
        tabId = vm.TabId;
      }
      var url = "id=" + id + "&type=" + vm.FilterType + "&tabId=" + tabId + "&moduleName=" + vm.modulename + "&subModuleCode=" + vm.submodulecode;
      vm.filterItemData = [];
      DataService["a" /* default */].SearchCriteriaByIdView(url).then(function (response) {
        var json = response.data;
        if (json != null) {
          var fullJson = json.DATA;
          var chkData = jquery_default.a.grep(fullJson, function (element, index) {
            return element.VIEW_ID == id;
          });
          if (chkData != null && chkData.length > 0) {
            vm.condition = chkData[0].CONDITION;
            vm.databaseCondition = chkData[0].DATABASE_CONDITION;
          }
          if (fullJson.length == 0) {
            var objab = {
              field_name: '',
              dt_code: '',
              operator: '',
              operator_expression: '',
              operator_list: '',
              value: '',
              second_value: '',
              showSecondValue: false,
              picklist_options: '',
              label: '',
              dropdown_type: '',
              select_options: '',
              length: '',
              field_code: '',
              select_value: '',
              is_required: false
            };
            vm.filterItemData.push(objab);
          }
          jquery_default.a.each(fullJson, function (index, item) {
            var firstValue = item.FIRST_VALUE;
            var secondValue = item.SECOND_VALUE;
            if (item.DT_CODE == 'date') {
              firstValue = vm.formatDate(firstValue);
              if (item.OPERATOR_EXPRESSION == 'between') {
                secondValue = vm.formatDate(secondValue);
              }
            }
            var obj = {
              field_name: item.FIELD_ID,
              dt_code: item.DT_CODE,
              operator: item.OPERATOR_ID,
              operator_expression: item.OPERATOR_EXPRESSION,
              operator_list: vm.MakeNormalArray(item.OPERATOR_LIST),
              value: vm.MakeNormalArray(firstValue),
              second_value: secondValue,
              showSecondValue: vm.isBlank(item.SECOND_VALUE) ? false : true,
              picklist_options: item.PICKLIST_OPTIONS,
              label: item.LABEL,
              dropdown_type: item.DROPDOWN_TYPE,
              select_options: vm.MakeNormalArray(item.SELECT_OPTIONS),
              length: item.LENGTH,
              field_code: item.FIELD_CODE,
              select_value: vm.MakeNormalArray(item.SELECT_OPTIONS),
              is_required: item.IS_REQUIRED
            };
            debugger;
            vm.filterItemData.push(obj);
          });
          vm.SubmitData();
        }
      });
    },
    ClearFilter: function () {
      if (this.$parent.appliedFilter[0].searchCondition == this.$parent.searchCondition) {
        this.$parent.searchCondition = '';
        if (typeof this.callbackfunction != 'undefined' && this.callbackfunction != null) {
          this.callbackfunction();
        } else {
          this.$parent.FetchData();
        }
      }
      this.$parent.appliedFilter = [];
    },
    SubmitData: function (type) {
      debugger;
      var vm = this;
      vm.$refs.form.validate().then(result => {
        debugger;
        if (vm.isEmpty) {
          result = true;
        } else {
          result = false;
        }
        if (result) {
          vm.$parent.appliedFilter = [];
          var fullJson = vm.filterItemData;
          var data = [];
          debugger;
          jquery_default.a.each(fullJson, function (Key, item) {
            var value = item.value;
            var secondValue = item.second_value;
            if (item.dt_code == "select" && item.dropdown_type == "custom") {
              if (Array.isArray(item.value)) {
                value = vm.createString(item.value, 'value');
              } else {
                value = item.value.value;
              }
            }
            if (item.dt_code == "date") {
              if (!vm.isBlank(secondValue) && item.operator_expression == "between") {
                secondValue = vm.$options.filters.formatDate(secondValue);
              }
              value = vm.$options.filters.formatDate(item.value);
            }
            var obj = {
              fieldId: item.field_name,
              operatorId: item.operator,
              firstValue: value,
              secondValue: secondValue
            };
            data.push(obj);
          });
          if (typeof vm.CurrentObject != 'undefined' && vm.CurrentObject != null) {
            vm.CurrentObject.TabData = data;
          } else {
            vm.$parent.$parent.ViewData.FilterData = data;
          }
        }
      });
    },
    validateFilterData: function () {
      var vm = this;
      if (vm.filterItemData.length > 0 && vm.filterItemData[0].field_name != "" && vm.filterItemData[0].field_name != null) {
        //debugger
        if (vm.$parent.$parent.isFilterDataValidationError != undefined) {
          //debugger
          vm.$refs.form.validate().then(valid => {
            vm.$parent.$parent.isFilterDataValidationError = !valid;
          });
        }
      } else {
        //debugger
        vm.$parent.$parent.isFilterDataValidationError = false;
      }
    },
    inputEvents() {
      //  debugger
    },
    inputValue() {
      //  debugger
    }
  }
});
// CONCATENATED MODULE: ./src/components/Common/layout-filter-control.vue?vue&type=script&lang=js&
 /* harmony default export */ var Common_layout_filter_controlvue_type_script_lang_js_ = (layout_filter_controlvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Common/layout-filter-control.vue





/* normalize component */

var layout_filter_control_component = Object(componentNormalizer["a" /* default */])(
  Common_layout_filter_controlvue_type_script_lang_js_,
  layout_filter_controlvue_type_template_id_7e2d5576_render,
  layout_filter_controlvue_type_template_id_7e2d5576_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var layout_filter_control = (layout_filter_control_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Common/view-layout.vue?vue&type=script&lang=js&





/* harmony default export */ var view_layoutvue_type_script_lang_js_ = ({
  components: {
    mover: mover,
    moveuser: moveruser,
    searchfilter: layout_filter_control
  },
  props: {
    submodulecode: {
      type: String,
      required: true
    },
    modulename: {
      type: String,
      required: true
    },
    callbackfunction: {
      type: Function
    },
    show: {
      type: Boolean
    },
    usertype: {
      type: String
    }
  },
  data: function () {
    return {
      isLoading: false,
      StatusId: this.dataselected,
      ViewData: {
        ViewId: 0,
        Name: "",
        Description: "",
        ApplyTo: 1,
        ApplicableUser: "",
        SelectedUser: "",
        Selectoptions: "",
        ViewTabData: [],
        Condition: "",
        FilterData: [],
        DatabaseCondition: ""
      },
      ListUnselectedUsers: [],
      ListSelectedUsers: [],
      ListDepartment: [],
      UnselectedItems: [],
      SelectedItems: [],
      SubmoduleCode: this.submodulecode,
      ModuleName: this.modulename,
      ShowLisiting: true,
      ListingData: [],
      TotalRecords: 0,
      PageNumber: 1,
      PageSize: 10,
      SortBy: "",
      SortExp: "",
      PageSizeOption: null,
      CurrentPage: 1,
      TotalPages: 0,
      GroupStart: 1,
      GroupEnd: 3,
      noRecord: true,
      isClearViewDisabled: true,
      isFilterDataValidationError: false,
      toggleUserGuide: 'd-none'
    };
  },
  created: function () {
    var vm = this;
    vm.GetViewList();
  },
  watch: {
    dataselected: function (value) {
      this.StatusId = value;
    }
  },
  methods: {
    close: function () {
      this.$parent.ShowManageView = false;
      $("#modalManageView").modal("hide");
      $("body").removeClass("modal-open");
      $(".modal-backdrop").remove();
    },
    AddNewView: function () {
      this.ShowLisiting = false;
      this.ViewData.ViewId = 0;
      this.ViewData.Name = "";
      this.FetchData();
    },
    BackToList: function () {
      this.ShowLisiting = true;
    },
    ClearView: function () {
      var vm = this;
      var obj = {
        ModuleName: vm.ModuleName,
        SubmoduleCode: vm.submodulecode
      };
      var msg = vm.$t("Leave_Confirm_Part1") + " " + vm.$t("Clear") + " " + vm.$t("View") + "?";
      vm.confirmR(msg, true, vm.$t("Confirm"), function () {
        var objectPostString = JSON.stringify(obj);
        DataService["a" /* default */].ClearView(objectPostString).then(function (response) {
          if (response.data != null) {
            if (response.data.code == "1" || response.body.Code == "1") {
              vm.ShowAlert(vm.$t('ClearedSuccess', [vm.$t('View')]), "Success", true, vm.$t('Alert'));
              vm.close();
              setTimeout(function () {
                vm.callbackfunction();
              }, 3000);
            } else {
              vm.ShowAlert(vm.$t("ErrorWhileProcessingRequest"), 'failure', true, vm.$t('Alert'));
            }
          } else {
            vm.ShowAlert(vm.$t("ErrorWhileProcessingRequest"), 'failure', true, vm.$t('Alert'));
          }
        });
      });
    },
    DefaultView: function () {
      debugger;
      var vm = this;
      var obj = {
        ModuleName: vm.ModuleName,
        SubmoduleCode: vm.submodulecode
      };
      var objectPostString = JSON.stringify(obj);
      DataService["a" /* default */].ClearView(objectPostString).then(function (response) {
        if (response.data != null) {
          if (response.data.code == "1" || response.data.Code == "1") {
            vm.ShowAlert(vm.$t("ApplySuccess", [vm.$t("Default View")]), 'success', true, vm.$t('Alert'));
            vm.close();
            setTimeout(function () {
              vm.callbackfunction();
            }, 3000);
            vm.GetViewList();
          } else {
            vm.ShowAlert(vm.$t("ErrorWhileProcessingRequest"), 'failure', true, vm.$t('Alert'));
          }
        } else {
          vm.ShowAlert(vm.$t("ErrorWhileProcessingRequest"), 'failure', true, vm.$t('Alert'));
        }
      });
      //});
    },

    OnChangeToggle: function (event) {
      debugger;
      var vm = this;
      if (event.target.checked) {
        vm.ViewData.ApplyTo = 1;
      } else {
        vm.ViewData.ApplyTo = 0;
      }
    },
    isBlank: function (str) {
      return !str || /^\s*$/.test(str);
    },
    GetLocalizedValue: function (fieldName, displayName) {
      if (this.isBlank(displayName)) {
        var chk = this.$t(String(fieldName).toUpperCase());
        if (chk || /^\s*$/.test(chk)) {
          return chk;
        }
        chk = $t(String(fieldName));
        if (chk || /^\s*$/.test(chk)) {
          return chk;
        }
        return fieldName;
      } else {
        var chk = this.$t(String(displayName).toUpperCase());
        if (chk || /^\s*$/.test(chk)) {
          return chk;
        }
        chk = this.$t(String(displayName));
        if (chk || /^\s*$/.test(chk)) {
          return chk;
        }
        return displayName;
      }
    },
    CreateString: function (arr, key, type) {
      return arr.map(function (obj) {
        if (type == "int") {
          return obj[key];
        } else {
          return "'" + obj[key] + "'";
        }
      }).join(",");
    },
    GetViewList: function () {
      var vm = this;
      var ListApiURL = "moduleName=" + vm.modulename + "&subModuleCode=" + vm.submodulecode + "&viewId=" + vm.ViewData.ViewId + "&pageSize=" + this.PageSize + "&pageNum=" + this.PageNumber + "&sortBy=" + this.SortBy + "&sortExp=" + this.SortExp;
      //  debugger
      DataService["a" /* default */].GetViewList(ListApiURL).then(function (response) {
        if (response.data != null && response.data != "") {
          vm.ListingData = response.data.DATA;
          vm.TotalRecords = vm.ListingData[0].TOTAL_RECORDS;
          vm.TotalPages = Math.ceil(vm.TotalRecords / vm.PageSize);
          vm.CurrentPage = vm.PageNumber;
          vm.noRecord = false;
          var chkVACTIVE = 0;
          vm.ListingData.forEach(function (item) {
            if (item.IS_SLECTED_USER_ID > 0) {
              chkVACTIVE = chkVACTIVE + 1;
            }
          });
          var indx = 0;
          if (chkVACTIVE > 0) {
            vm.ListingData.splice(indx, 0, {
              SUB_MODULE_NAME: "",
              SUB_MODULE_CODE: "",
              VIEW_NAME: "Default View",
              VIEW_ID: 0,
              IS_APPLICABLE_TO_ALL: 1,
              MODULE_NAME: "",
              CREATED_AT: "",
              IS_SLECTED_USER_ID: 0,
              CAN_EDIT: 0,
              ROWNUMBER: parseInt(vm.TotalRecords + 1),
              VIEW_TYPE: "",
              USER_LIST: ""
            });
          } else {
            vm.ListingData.splice(indx, 0, {
              SUB_MODULE_NAME: "",
              SUB_MODULE_CODE: "",
              VIEW_NAME: "Default View",
              VIEW_ID: 0,
              IS_APPLICABLE_TO_ALL: 1,
              MODULE_NAME: "",
              CREATED_AT: "",
              IS_SLECTED_USER_ID: 1,
              CAN_EDIT: 0,
              ROWNUMBER: parseInt(vm.TotalRecords + 1),
              VIEW_TYPE: "",
              USER_LIST: ""
            });
          }
        } else {
          vm.noRecord = false;
          vm.TotalRecords = 1;
          vm.ListingData.push({
            SUB_MODULE_NAME: "",
            SUB_MODULE_CODE: "",
            VIEW_NAME: "Default View",
            VIEW_ID: 0,
            IS_APPLICABLE_TO_ALL: 1,
            MODULE_NAME: "",
            CREATED_AT: "",
            IS_SLECTED_USER_ID: 0,
            CAN_EDIT: 0,
            ROWNUMBER: vm.TotalRecords,
            VIEW_TYPE: "",
            USER_LIST: ""
          });
        }
        setTimeout(function () {
          vm.SetBootstraptoolTip();
        }, 200);
        vm.checkIfClearViewDisabled();
      });
    },
    deleteView: function (val) {
      var vm = this;
      vm.confirmR(vm.$t("ConfirmDelete"), true, vm.$t('Remove'), function () {
        var postJSON = {
          ids: val,
          moduleName: "",
          subModuleCode: "",
          refCode: 'DELETE_HOME_MANAGE_VIEW'
        };
        vm.isLoading = true;
        var objectPostString = JSON.stringify(postJSON);
        DataService["a" /* default */].CommonCommonDelete(objectPostString).then(function (response) {
          vm.isLoading = false;
          var box = "";
          if (response.data[0].Status == "Success") {
            box = vm.ShowAlert(vm.$t('DeletedSuccess', [vm.$t('View')]), 'success', true, vm.$t('Alert'));
            setTimeout(function () {
              vm.callbackfunction();
            }, 3000);
            $("#modalManageView").modal('hide');
            window.location.reload();
          } else {
            box = vm.ShowAlert(vm.$t('DeletedError', [vm.$t('View')]), "warning", true, vm.$t("Alert"));
          }
        });
      });
    },
    EditManageView: function (id) {
      debugger;
      var vm = this;
      vm.ViewData.ViewId = id;
      var url = "moduleName=" + vm.modulename + "&subModuleCode=" + vm.submodulecode + "&id=" + vm.ViewData.ViewId;
      DataService["a" /* default */].GetViewById(url).then(function (response) {
        if (response.data != null) {
          var data = response.data.DATA;
          if (data.length > 0) {
            data = data[0];
            vm.ViewData.Name = data.VIEW_NAME;
            vm.ViewData.Description = data.DESCRIPTION;
            vm.ViewData.ApplyTo = data.IS_APPLICABLE_TO_ALL;
            vm.ViewData.Condition = data.CONDITION;
            vm.ViewData.DatabaseCondition = encodeURIComponent(data.DATABASE_CONDITION);
          }
          vm.ShowLisiting = false;
          vm.FetchData();
        }
      });
    },
    ApplyView: function (id, name) {
      debugger;
      var vm = this;
      if (id == 0) {
        vm.DefaultView();
      } else {
        var obj = {
          ViewId: id,
          ModuleName: vm.ModuleName,
          SubmoduleCode: vm.submodulecode
        };
        var objectPostString = JSON.stringify(obj);
        DataService["a" /* default */].ApplyView(objectPostString).then(function (response) {
          if (response.data != null) {
            if (response.data.code == "1" || response.data.Code == "1") {
              vm.ShowAlert(vm.$t("ApplySuccess", [vm.$t(name)]), 'success', true, vm.$t('Alert'));
              vm.$emit("refreshViewDropdown");
              setTimeout(function () {
                vm.callbackfunction();
              }, 3000);
              vm.close();
              // vm.GetViewList();
            } else {
              vm.ShowAlert(vm.$t("AddedError", [vm.$t("View")]), 'failure', true, vm.$t('Alert'));
            }
          } else {
            vm.ShowAlert(vm.$t("AddedError", [vm.$t("View")]), 'failure', true, vm.$t('Alert'));
          }
        });
      }
    },
    SaveViewData: function () {
      debugger;
      var vm = this;
      var msg = "";
      $("#spnlistfieldssmessage").hide();
      $("#spnusersmessage").hide();
      $("#spncardfieldssmessage").hide();
      $("#spncardtabsmessage").hide();
      if (vm.SelectedItems == null || vm.SelectedItems.length == 0) {
        $("#spnlistfieldssmessage").show();
        msg += "no";
      }
      if (vm.ViewData.IsApplicableToAll == "0" && (vm.ListSelectedUsers == null || vm.ListSelectedUsers.length == 0)) {
        $("#spnusersmessage").show();
        msg += "no";
      }
      vm.$refs.ManageViewLayoutData.validate().then(valid => {
        if (valid) {
          var listItems = [];
          $.each(vm.SelectedItems, function (index, item) {
            var obj = {
              id: item.value,
              order: index + 1,
              isSortable: item.isSortable
            };
            listItems.push(obj);
          });
          vm.ViewData.DatabaseCondition = decodeURIComponent(vm.ViewData.DatabaseCondition);
          var obj = {
            ViewData: vm.ViewData,
            ListFields: listItems,
            FilterData: vm.ViewData.FilterData,
            ShareUsers: vm.CreateString(vm.ListSelectedUsers, "value", "int"),
            ModuleName: vm.ModuleName,
            SubmoduleCode: vm.submodulecode
          };
          // debugger 
          var objectPostString = JSON.stringify(obj);
          DataService["a" /* default */].SaveView(objectPostString).then(function (response) {
            //debugger
            if (response.data != null) {
              if (response.data.code == "1" || response.data.Code == "1") {
                if (vm.ViewData.ViewId > 0) {
                  vm.ShowAlert(vm.$t("UpdatedSuccess", [vm.$t("View")]), "success", true, vm.$t("Alert"));
                  vm.$emit("refreshViewDropdown");
                  setTimeout(function () {
                    vm.callbackfunction();
                  }, 3000);
                  vm.callbackfunction();
                } else {
                  vm.ShowAlert(vm.$t("AddedSuccess", [vm.$t("View")]), "success", true, vm.$t("Alert"));
                  vm.$emit("refreshViewDropdown");
                  setTimeout(function () {
                    vm.callbackfunction();
                  }, 3000);
                }
                vm.GetViewList();
                vm.ShowLisiting = true;
                vm.close();
              } else {
                vm.ShowAlert(vm.$t("AddedError", [vm.$t("View")]), "failure", true, vm.$t("Alert"));
              }
            } else {
              vm.ShowAlert(vm.$t("AddedError", [vm.$t("View")]), "failure", true, vm.$t("Alert"));
            }
          });
        } else {
          console.log(this.$refs.ManageViewLayoutData.errors);
        }
      });
    },
    FetchData: function () {
      debugger;
      var vm = this;
      vm.isLoading = true;
      var ListApiURL = "moduleName=" + vm.modulename + "&subModuleCode=" + vm.submodulecode + "&viewId=" + vm.ViewData.ViewId;
      vm.UnselectedItems = [];
      vm.SelectedItems = [];
      DataService["a" /* default */].ViewListFields(ListApiURL).then(function (response) {
        debugger;
        if (response.data.AVAILABLE_FIELDS.length !== response.data.SELECTED_FIELDS.length) {
          //debugger
          for (var i = response.data.AVAILABLE_FIELDS.length - 1; i >= 0; i--) {
            for (var j = 0; j < response.data.SELECTED_FIELDS.length; j++) {
              if (response.data.AVAILABLE_FIELDS[i] && response.data.AVAILABLE_FIELDS[i].NAME === response.data.SELECTED_FIELDS[j].NAME) {
                response.data.AVAILABLE_FIELDS.splice(i, 1);
              }
            }
          }
        }
        if (response.data.AVAILABLE_FIELDS.length > 0) {
          $.each(response.data.AVAILABLE_FIELDS, function (key, item) {
            var obj = {
              value: item.CUSTOM_FIELD_ID,
              displayValue: item.DISPLAY_NAME,
              isSortable: item.IS_SORTABLE,
              displayOrder: item.DISPLAY_ORDER,
              isSelected: false,
              isSystemGenerated: item.IS_SYSTEM_GENERATED,
              isSortableEnabled: item.IS_SORTABLE_ENABLE
            };
            vm.UnselectedItems.push(obj);
          });
        }
        $.each(response.data.SELECTED_FIELDS, function (key, item) {
          var obj = {
            value: item.CUSTOM_FIELD_ID,
            displayValue: item.DISPLAY_NAME,
            isSortable: item.IS_SORTABLE,
            displayOrder: item.DISPLAY_ORDER,
            isSelected: false,
            isSystemGenerated: item.IS_SYSTEM_GENERATED,
            isSortableEnabled: item.IS_SORTABLE_ENABLE
          };
          vm.SelectedItems.push(obj);
        });
        debugger;
        vm.isLoading = false;
        vm.FetchUserData();
      });
    },
    FetchUserData: function () {
      debugger;
      var vm = this;
      vm.isLoading = true;
      vm.ListUnselectedUsers = [];
      vm.ListSelectedUsers = [];
      var ListApiURLUser = "moduleName=" + vm.modulename + "&subModuleCode=" + vm.submodulecode + "&viewId=" + vm.ViewData.ViewId;
      DataService["a" /* default */].ViewListUsers(ListApiURLUser).then(function (response) {
        vm.isLoading = false;
        var newList = [];
        $.each(response.data.AVAILABLE_FIELDS, function (key, item) {
          var obj = {
            value: item.USER_ID,
            displayValue: item.USER_NAME,
            departmentName: item.DEPARTMENT_NAME,
            isSelected: false
          };
          vm.ListUnselectedUsers.push(obj);
        });

        // vm.ListUnselectedUsers = newList;
        newList = [];
        $.each(response.data.SELECTED_FIELDS, function (key, item) {
          var obj = {
            value: item.USER_ID,
            displayValue: item.USER_NAME,
            departmentName: item.DEPARTMENT_NAME,
            isSelected: false
          };
          vm.ListSelectedUsers.push(obj);
        });
      });
    },
    ShowNextTab: function (type) {
      var vm = this;
      if (type == 2) {
        $("#scrollbarreplyuserguideMangeView .con").html(vm.$t("MangeViewUG2"));
        if ($.trim(vm.ViewData.Name) == "") {
          vm.ShowAlert(vm.$t('Required', [vm.$t('ViewName')]), 'warning', true, vm.$t('Alert'));
        } else if (vm.ViewData.ApplyTo == 2 && vm.ListSelectedUsers.length == 0) {
          vm.ShowAlert(vm.$t('PleaseSelectAtleastOneUser'), 'warning', true, vm.$t('Alert'));
        } else {
          $(".view_tab a").removeClass('active show');
          $('li.selectcolumn').find('a').addClass('active');
          $(".view_tab .tab-pane").removeClass('active show');
          $(".view_tab a[href='#step2']").addClass('active show');
          $(".view_tab #step2").addClass('active show');
        }
      } else if (type == 3) {
        $("#scrollbarreplyuserguideMangeView .con").html(vm.$t("MangeViewUG3"));
        var maxlength = 25;
        if ($.trim(vm.ViewData.Name) == "") {
          vm.ShowAlert(vm.$t('Required', [vm.$t('ViewName')]), true, 'warning', vm.$t('Alert'));
        } else if (vm.ViewData.ApplyTo == 2 && vm.ListSelectedUsers.length == 0) {
          vm.ShowAlert(vm.$t('PleaseSelectAtleastOneUser'));
        } else if (vm.SelectedItems.length == 0) {
          vm.ShowAlert(vm.$t('Pleaseselectatleastonecolumn'), 'warning', true, vm.$t('Alert'));
        } else if (vm.SelectedItems.length > maxlength) {
          vm.ShowAlert(vm.$t('SelectFieldMessage', [maxlength]), 'warning', true, vm.$t('Alert'));
        } else {
          $(".view_tab a").removeClass('active show');
          $('li.filter').find('a').addClass('active');
          $(".view_tab .tab-pane").removeClass('active show');
          $(".view_tab a[href='#step3']").addClass('active show');
          $(".view_tab #step3").addClass('active show');
        }
      }
    },
    checkIfClearViewDisabled: function () {
      var vm = this;
      if (vm.ListingData != null && vm.ListingData.length > 0) {
        var checkIfAnyViewApplied = vm.ListingData.filter(function (x) {
          return x.IS_SLECTED_USER_ID > 0;
        });
        if (checkIfAnyViewApplied.length > 0) {
          vm.isClearViewDisabled = false;
        } else {
          vm.isClearViewDisabled = true;
        }
      } else {
        vm.isClearViewDisabled = true;
      }
    },
    ShowTabData: function (type) {
      if (type == '1') {
        $("#scrollbarreplyuserguideMangeView .con").html(this.$t("MangeViewUG1"));
        $('li.general').find('a').addClass('active');
        $('li.selectcolumn').find('a').removeClass('active');
        $('li.filter').find('a').removeClass('active');
        $('div#step1').addClass('active show');
        $('div#step2').removeClass('active show');
        $('div#step3').removeClass('active show');
      } else if (type == '2') {
        $("#scrollbarreplyuserguideMangeView .con").html(this.$t("MangeViewUG2"));
        $('li.general').find('a').removeClass('active');
        $('li.selectcolumn').find('a').addClass('active');
        $('li.filter').find('a').removeClass('active');
        $('div#step1').removeClass('active show');
        $('div#step2').addClass('active show');
        $('div#step3').removeClass('active show');
      } else if (type == '3') {
        $("#scrollbarreplyuserguideMangeView .con").html(this.$t("MangeViewUG3"));
        $('li.general').find('a').removeClass('active');
        $('li.selectcolumn').find('a').removeClass('active');
        $('li.filter').find('a').addClass('active');
        $('div#step1').removeClass('active show');
        $('div#step2').removeClass('active show');
        $('div#step3').addClass('active show');
      }
      this.$forceUpdate();
    },
    ShowUserGuide() {
      var vm = this;
      if (vm.toggleUserGuide == 'd-none') {
        vm.toggleUserGuide = 'd-block';
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Common/view-layout.vue?vue&type=script&lang=js&
 /* harmony default export */ var Common_view_layoutvue_type_script_lang_js_ = (view_layoutvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Common/view-layout.vue





/* normalize component */

var view_layout_component = Object(componentNormalizer["a" /* default */])(
  Common_view_layoutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var view_layout = __webpack_exports__["a"] = (view_layout_component.exports);

/***/ }),

/***/ "b1fb":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("d978");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("648f1f29", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "d978":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".customcheckinput span .form-check-input[data-v-599d869a]{position:relative!important;opacity:1!important}.customcheckinput label.custom-control-label[data-v-599d869a]:after,.customcheckinput label.custom-control-label[data-v-599d869a]:before{opacity:0}", ""]);
// Exports
module.exports = exports;


/***/ })

}]);
//# sourceMappingURL=chunk-74672f84.js.map