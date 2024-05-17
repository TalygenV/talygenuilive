(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-3bfe3f65"],{

/***/ "1700":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "39ab":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("1700");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("4ad1e5a2", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "5eb6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetCatalog/LoadAssetCalender.vue?vue&type=template&id=37b8cf34&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-lg-12 border p-2 float-left",
    attrs: {
      "id": "app"
    }
  }, [_c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left px-0"
  }, [_c('div', {
    staticClass: "row cal_iconsbase",
    attrs: {
      "id": "divHeader"
    }
  }, [_c('div', {
    staticClass: "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left"
  }, [_c('div', {
    staticClass: "row label_group"
  }, [_c('div', {
    staticClass: "col-lg-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('b', {
    staticStyle: {
      "font-weight": "600 !important"
    }
  }, [_vm._v(_vm._s(_vm.$t('CALocation')) + " : ")]), _c('span', {
    staticClass: "lighttext"
  }, [_vm._v(_vm._s(_vm.myObject.locationName))])])]), _c('div', {
    staticClass: "col-lg-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('b', {
    staticStyle: {
      "font-weight": "600 !important"
    }
  }, [_vm._v(_vm._s(_vm.$t('CRM_PRODUCTS')) + " : ")]), _c('span', {
    staticClass: "lighttext"
  }, [_vm._v(_vm._s(_vm.myObject.name))])])]), _c('div', {
    staticClass: "col-lg-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('b', {
    staticStyle: {
      "font-weight": "600 !important"
    }
  }, [_vm._v(_vm._s(_vm.$t('Total')) + " : ")]), _c('span', {
    staticClass: "lighttext"
  }, [_vm._v(_vm._s(_vm.myObject.quantity))])])]), _c('div', {
    staticClass: "col-lg-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('b', {
    staticStyle: {
      "font-weight": "600 !important"
    }
  }, [_vm._v(_vm._s(_vm.$t('UniqueName')) + " : ")]), _c('span', {
    staticClass: "lighttext"
  }, [_vm._v(" " + _vm._s(_vm.myObject.uniqueName))])])])])])])]), _c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left px-0 border-top"
  }, [_c('div', {
    ref: "calendarContainer"
  }, [_c('Calendar', {
    on: {
      "calenderDetails": _vm.calenderDetails
    }
  })], 1)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/AssetCatalog/LoadAssetCalender.vue?vue&type=template&id=37b8cf34&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetCatalog/Calender.vue?vue&type=template&id=02220354&
var Calendervue_type_template_id_02220354_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    ref: "calendar"
  });
};
var Calendervue_type_template_id_02220354_staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/AssetCatalog/Calender.vue?vue&type=template&id=02220354&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./node_modules/@fullcalendar/vue/dist/main.js + 11 modules
var main = __webpack_require__("f5ff");

// EXTERNAL MODULE: ./node_modules/@fullcalendar/daygrid/main.js + 1 modules
var daygrid_main = __webpack_require__("3cdd");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetCatalog/Calender.vue?vue&type=script&lang=js&




/* harmony default export */ var Calendervue_type_script_lang_js_ = ({
  name: 'Calendar',
  components: {
    Calendar: main["a" /* Calendar */]
  },
  props: {
    eventData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      calendar: null,
      initialized: false,
      events: [] // Define events array in data
    };
  },

  mounted() {
    this.renderCalendar();
  },
  methods: {
    renderCalendar() {
      const calendarEl = this.$refs.calendar;
      this.calendar = new main["a" /* Calendar */](calendarEl, {
        plugins: [daygrid_main["a" /* default */]],
        initialView: 'dayGridMonth',
        events: this.eventData,
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,dayGridDay'
        },
        datesSet: this.handleDatesSet
      });
      this.calendar.render();
    },
    handleDatesSet(info) {
      var vm = this;
      if (this.initialized) {
        //info.startStr, info.endStr
        //var startDate =info.
        debugger;
        var startDt = vm.$options.filters.formatDate(info.startStr);
        var endDt = vm.$options.filters.formatDate(info.endStr);
        var url = `userId=0&&locationId=${this.$route.params.lid}&assetCatId=${this.$route.params.aid}&rid=${this.$route.params.rid}&start=${startDt}&end=${endDt}&requestedEventType=`;
        this.LoadAssetCalendar(url);
      } else {
        this.initialized = true;
        var url = `userId=0&&locationId=${this.$route.params.lid}&assetCatId=${this.$route.params.aid}&rid=${this.$route.params.rid}&start=&end=&requestedEventType=`;
        this.LoadAssetCalendar(url);
      }
    },
    LoadAssetCalendar(url) {
      DataService["a" /* default */].LoadAssetCalendar(url).then(response => {
        this.events = []; // Clear existing events
        let myObject = {
          locationName: response.data[0].locatioN_NAME,
          name: response.data[0].name,
          quantity: response.data[0].quantity,
          uniqueName: response.data[0].uniquE_NAME
        };
        this.$emit('calenderDetails', myObject);
        const AssetCalendarData = response.data;
        AssetCalendarData.forEach(item => {
          // Add events to the events array
          this.events.push({
            title: item.title + '(' + item.quantity + ')',
            start: item.start,
            end: item.end,
            classNames: this.getEventBackgroudCssClass(item.title)
          });
        });
        // Refresh the calendar events
        this.calendar.removeAllEvents();
        this.calendar.addEventSource(this.events);
      });
    },
    getEventBackgroudCssClass(title) {
      // Define your logic to determine CSS class based on event title
      // Example logic:
      if (title === 'AVAILABLE') {
        return ['r-calendar-available'];
      } else if (title === 'RESERVED') {
        return ['r-calendar-reserved'];
      } else if (title === 'ASSIGNED') {
        return ['r-calendar-assigned'];
      } else if (title === 'IN-TRANSIT') {
        return ['r-calendar-intransit'];
      } else if (title === 'AUDIT (annual )' || title === 'CALIBRATION (quarterly )') {
        return ['r-calendar-audit'];
      } else {
        return ['r-calendar-light-purple'];
      }
    },
    getEventTextCssClass(title) {
      // Define your logic to determine CSS class based on event title
      // Example logic:
      if (title === 'AVAILABLE') {
        return ['white'];
      } else if (title === 'RESERVED') {
        return ['black'];
      } else if (title === 'ASSIGNED') {
        return ['white'];
      } else if (title === 'IN-TRANSIT') {
        return ['white'];
      } else if (title === 'AUDIT (annual )' || title === 'CALIBRATION (quarterly )') {
        return ['white'];
      } else {
        return ['white'];
      }
    }
  }
});
// CONCATENATED MODULE: ./src/views/AssetCatalog/Calender.vue?vue&type=script&lang=js&
 /* harmony default export */ var AssetCatalog_Calendervue_type_script_lang_js_ = (Calendervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/AssetCatalog/Calender.vue?vue&type=style&index=0&id=02220354&prod&lang=css&
var Calendervue_type_style_index_0_id_02220354_prod_lang_css_ = __webpack_require__("71bb");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/AssetCatalog/Calender.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  AssetCatalog_Calendervue_type_script_lang_js_,
  Calendervue_type_template_id_02220354_render,
  Calendervue_type_template_id_02220354_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Calender = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetCatalog/LoadAssetCalender.vue?vue&type=script&lang=js&

//import DataService from '../../service/DataService';

/* harmony default export */ var LoadAssetCalendervue_type_script_lang_js_ = ({
  components: {
    Calendar: Calender
  },
  mounted() {
    // Adjust the position of the FullCalendar container to be under the div
    const calendarContainer = this.$refs.calendarContainer;
    const divHeaderHeight = document.getElementById('divHeader').clientHeight;
    calendarContainer.style.marginTop = `${divHeaderHeight}px`;
  },
  data() {
    return {
      myObject: {}
    };
  },
  created: function () {
    // this.LoadData();
  },
  methods: {
    calenderDetails(data) {
      this.myObject = data;
    }

    // i don't understand  why we need a service here, can't we just pass the data?
    //   LoadData(url) {
    //     DataService.LoadAssetCalendar(url).then(response => {
    //       var url = `userId=0&&locationId=${this.$route.params.lid}&assetCatId=${this.$route.params.aid}&rid=${this.$route.params.rid}&start=&end=&requestedEventType=`;
    //  debugger
    //       DataService.LoadAssetCalendar(url).then(response => {
    //         if(response.data){
    //           this.locationName=response.data[0].locatioN_NAME
    //           this.name=response.data[0].name
    //           this.quantity=response.data[0].quantity
    //           this.uniqueName=response.data[0].uniquE_NAME
    //       }
    //     });

    //     });
    //   },
  }
});
// CONCATENATED MODULE: ./src/views/AssetCatalog/LoadAssetCalender.vue?vue&type=script&lang=js&
 /* harmony default export */ var AssetCatalog_LoadAssetCalendervue_type_script_lang_js_ = (LoadAssetCalendervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/AssetCatalog/LoadAssetCalender.vue?vue&type=style&index=0&id=37b8cf34&prod&lang=css&
var LoadAssetCalendervue_type_style_index_0_id_37b8cf34_prod_lang_css_ = __webpack_require__("64fb");

// CONCATENATED MODULE: ./src/views/AssetCatalog/LoadAssetCalender.vue






/* normalize component */

var LoadAssetCalender_component = Object(componentNormalizer["a" /* default */])(
  AssetCatalog_LoadAssetCalendervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var LoadAssetCalender = __webpack_exports__["default"] = (LoadAssetCalender_component.exports);

/***/ }),

/***/ "64fb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadAssetCalender_vue_vue_type_style_index_0_id_37b8cf34_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("39ab");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadAssetCalender_vue_vue_type_style_index_0_id_37b8cf34_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadAssetCalender_vue_vue_type_style_index_0_id_37b8cf34_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "71bb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calender_vue_vue_type_style_index_0_id_02220354_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("88a3");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calender_vue_vue_type_style_index_0_id_02220354_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calender_vue_vue_type_style_index_0_id_02220354_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "88a3":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("e368");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("10d0307a", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "e368":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".r-calendar-available{background-color:#a6cdb2!important}.r-calendar-available,.r-calendar-reserved{color:#fff!important;padding:2px!important;text-transform:capitalize}.r-calendar-reserved{background-color:#7bb3ca!important}.r-calendar-intransit{background-color:#e5c77e!important}.r-calendar-audit,.r-calendar-intransit{color:#fff!important;padding:2px!important;text-transform:capitalize}.r-calendar-audit{background-color:#a5c63b!important}.r-calendar-assigned{background-color:#e5c77e!important}.r-calendar-assigned,.r-calendar-grey{color:#fff!important;padding:2px!important;text-transform:capitalize}.r-calendar-grey{background-color:#737373!important}.r-calendar-brown{background-color:#6d3b24!important}.r-calendar-brown,.r-calendar-light-purple{color:#fff!important;padding:2px!important;text-transform:capitalize}.r-calendar-light-purple{background-color:#d4d1f0!important}", ""]);
// Exports
module.exports = exports;


/***/ })

}]);
//# sourceMappingURL=chunk-3bfe3f65.js.map