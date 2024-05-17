(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0e6256"],{

/***/ "9801":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Asset/RFIDMyDeviceList.vue?vue&type=template&id=46ad6d2c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "main-content"
  }, [_c('div', {
    staticClass: "padding-t_10"
  }, [_vm._m(0), _vm._m(1), _vm.GroupName.length != 0 ? _c('div', {
    staticClass: "listing mt-2",
    attrs: {
      "id": "detailTable"
    }
  }, _vm._l(_vm.GroupName, function (ParentItem, ParentIndex) {
    return _c('div', {
      key: ParentIndex
    }, [_c('div', {
      staticClass: "accordion custom-accr"
    }, [_c('div', {
      staticClass: "card"
    }, [_c('div', {
      staticClass: "card-header",
      attrs: {
        "role": "tab",
        "id": "headingTwo2"
      }
    }, [_c('a', {
      staticClass: "collapsed font-dark",
      attrs: {
        "data-toggle": "collapse",
        "data-parent": "#accordionEx"
      }
    }, [_c('em', {
      staticClass: "fa fa-angle-down rotate-icon",
      attrs: {
        "aria-hidden": "true"
      }
    }), _vm._v(_vm._s(ParentItem.groupData[0].device_name) + "( " + _vm._s(ParentItem.groupKey) + ") ")])]), _c('div', {
      staticClass: "collapse show",
      attrs: {
        "role": "tabpanel",
        "data-parent": "#accordionEx"
      }
    }, [_c('div', {
      staticClass: "card-body py-0 pb-3 px-0"
    }, [_c('div', {
      staticClass: "table-responsive border-0"
    }, [_c('div', {
      staticClass: "dataTables_wrapper no-footer",
      attrs: {
        "id": "example_wrapper"
      }
    }, [_c('table', {
      staticClass: "table table-bordered dt-responsive nowrap mt-0 dataTable no-footer dtr-inline",
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "id": "example",
        "role": "grid",
        "aria-describedby": "example_info"
      }
    }, [_vm._m(2, true), _c('tbody', [_vm.GroupName.length == 0 ? _c('tr', {
      staticClass: "text-center text-danger no-record",
      attrs: {
        "colspan": "20"
      }
    }, [_vm._v(" " + _vm._s(_vm.$t('NoRecordfound')) + " ")]) : _vm._e(), _vm._l(ParentItem.groupData, function (ChildItem, ChildIndex) {
      return _c('tr', {
        key: ChildIndex
      }, [_c('td', [_vm._v(_vm._s(ChildItem.LOCATION_NAME))]), _c('td', [_vm._v(_vm._s(ChildItem.ASSET_TYPE))]), _c('td', [_vm._v(_vm._s(ChildItem.unique_name))]), _c('td', [_vm._v(_vm._s(ChildItem.ITEM_CODE))]), _c('td', [_vm._v(_vm._s(ChildItem.sub_location))]), _c('td', [_vm._v(_vm._s(ChildItem.serial_number))]), _c('td', [_vm._v(_vm._s(ChildItem.EPC_TAG))]), _c('td', [_vm._v(_vm._s(ChildItem.ip_address) + "(" + _vm._s(ChildItem.device_name) + ")")]), _c('td', [_vm._v(_vm._s(ChildItem.STATUS_NAME))]), _vm._m(3, true)]);
    })], 2)])])])])])])])]);
  }), 0) : _vm._e(), _vm.GroupName.length == 0 ? _c('div', {
    staticClass: "listing mt-2",
    attrs: {
      "id": "detailTable"
    }
  }, [_c('div', {
    staticClass: "accordion custom-accr"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "collapse show",
    attrs: {
      "role": "tabpanel",
      "data-parent": "#accordionEx"
    }
  }, [_c('div', {
    staticClass: "card-body py-0 pb-3 px-0"
  }, [_c('div', {
    staticClass: "table-responsive border-0"
  }, [_c('div', {
    staticClass: "dataTables_wrapper no-footer",
    attrs: {
      "id": "example_wrapper"
    }
  }, [_c('table', {
    staticClass: "table table-bordered dt-responsive nowrap mt-0 dataTable no-footer dtr-inline",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "id": "example",
      "role": "grid",
      "aria-describedby": "example_info"
    }
  }, [_vm._m(4), _c('tbody', [_vm.GroupName.length == 0 ? _c('tr', [_c('td', {
    staticClass: "text-center text-danger no-record",
    attrs: {
      "colspan": "20"
    }
  }, [_vm._v(" " + _vm._s(_vm.$t('NoRecordfound')) + " ")])]) : _vm._e()])])])])])])])])]) : _vm._e()])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-md-12 p-0"
  }, [_c('div', {
    staticClass: "theme-primary"
  }, [_c('span', {
    staticClass: "p-name text-white textelipsis"
  }, [_vm._v(" Scanned Items Status ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12 mt-2"
  }, [_c('div', {
    staticClass: "mr-2 d-inline-block"
  }, [_c('span', {
    staticClass: "legends_profile colorboxsquare"
  }), _vm._v(" Missing Products ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('thead', {
    staticClass: "thead-bg"
  }, [_c('tr', {
    attrs: {
      "role": "row"
    }
  }, [_c('th', [_c('span', [_vm._v("Location")])]), _c('th', [_c('span', [_vm._v("Product Type")])]), _c('th', [_c('span', [_vm._v("Product Name")])]), _c('th', [_c('span', [_vm._v("Unique Code")])]), _c('th', [_c('span', [_vm._v("Sub Location")])]), _c('th', [_c('span', [_vm._v("Serial Number")])]), _c('th', [_c('span', [_vm._v("EPC Tags")])]), _c('th', [_c('span', [_vm._v("IP Address")])]), _c('th', [_c('span', [_vm._v("Status")])]), _c('th', {
    staticClass: "text-center"
  }, [_c('span', [_vm._v("Actions")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('td', {
    staticClass: "text-center"
  }, [_c('a', {
    staticStyle: {
      "cursor": "pointer"
    },
    attrs: {
      "href": "",
      "title": "Edit",
      "id": "Edit"
    }
  }, [_c('em', {
    staticClass: "fa fa-pencil text-success mx-1 action-icon enable"
  })]), _c('a', {
    staticClass: "d-none",
    attrs: {
      "href": "",
      "id": "",
      "title": "Assign"
    }
  }, [_c('em', {
    staticClass: "fa fa-user pr-2 text-primary action-icon mx-1"
  })]), _c('a', {
    attrs: {
      "href": "javascript:;",
      "title": "Location",
      "data-locationId": "@item1.LocationId"
    }
  }, [_c('em', {
    staticClass: "fa fa-map-marker mx-1 text-warning action-icon"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('thead', {
    staticClass: "thead-bg"
  }, [_c('tr', {
    attrs: {
      "role": "row"
    }
  }, [_c('th', [_c('span', [_vm._v("Location")])]), _c('th', [_c('span', [_vm._v("Product Type")])]), _c('th', [_c('span', [_vm._v("Product Name")])]), _c('th', [_c('span', [_vm._v("Unique Code")])]), _c('th', [_c('span', [_vm._v("Sub Location")])]), _c('th', [_c('span', [_vm._v("Serial Number")])]), _c('th', [_c('span', [_vm._v("EPC Tags")])]), _c('th', [_c('span', [_vm._v("IP Address")])]), _c('th', [_c('span', [_vm._v("Status")])]), _c('th', {
    staticClass: "text-center"
  }, [_c('span', [_vm._v("Actions")])])])]);
}];

// CONCATENATED MODULE: ./src/views/Asset/RFIDMyDeviceList.vue?vue&type=template&id=46ad6d2c&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Asset/RFIDMyDeviceList.vue?vue&type=script&lang=js&


/* harmony default export */ var RFIDMyDeviceListvue_type_script_lang_js_ = ({
  data() {
    return {
      isLoading: false,
      Scanneditemsdata: [],
      searchdata: '',
      locationId: '',
      pageSize: 100,
      pageNum: 1,
      sortBy: '',
      sortExp: '',
      ePC_TAG: '',
      GroupName: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      var vueObj = this;
      var params = `search=${vueObj.searchdata}&locationId=${vueObj.locationId}&pageSize=${vueObj.pageSize}&pageNum=${vueObj.pageNum}&sortBy=${vueObj.sortBy}&sortExp=${vueObj.sortExp}&ePC_TAG=${vueObj.ePC_TAG}`;
      DataService["a" /* default */].GetScanneditemsData(params).then(response => {
        debugger;
        if (response.data != '' && response.data != null) {
          vueObj.Scanneditemsdata = response.data;
          vueObj.GroupName = [];
          var gruopBy = "";
          $.each(vueObj.Scanneditemsdata, $.proxy(function (index, item) {
            gruopBy = item.ip_address;
            var chkGroup = $.grep(vueObj.GroupName, function (element, index) {
              return element.groupKey == gruopBy;
            });
            if (chkGroup.length == 0) {
              var returnedData = $.grep(vueObj.Scanneditemsdata, function (element, index) {
                return element.ip_address == gruopBy;
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
          console.log('dsfgfdsg', vueObj.GroupName);
        }
      }).catch(err => {
        console.log(err);
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/Asset/RFIDMyDeviceList.vue?vue&type=script&lang=js&
 /* harmony default export */ var Asset_RFIDMyDeviceListvue_type_script_lang_js_ = (RFIDMyDeviceListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/Asset/RFIDMyDeviceList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Asset_RFIDMyDeviceListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RFIDMyDeviceList = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d0e6256.js.map