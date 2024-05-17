(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0d7694"],{

/***/ "7764":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"40274a44-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ItemGroupList/Manage.vue?vue&type=template&id=331c7554&lang=en&
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
  }, [_vm._v(_vm._s(_vm.$t('AddGroup')))])])])])]), _c('div', {
    staticClass: "border p-3"
  }, [_vm.DataLoaded ? _c('dynamic-form', {
    attrs: {
      "lang": "en",
      "buttons": _vm.buttons,
      "schema": _vm.FormSchema
    },
    on: {
      "OnSubmit": _vm.onSubmit
    }
  }) : _vm._e(), _c('div', {
    staticClass: "col-lg-6"
  }, [_c('small', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.$t('MandatoryString')))])])], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/ItemGroupList/Manage.vue?vue&type=template&id=331c7554&lang=en&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ItemGroupList/Manage.vue?vue&type=script&lang=js&


/* harmony default export */ var Managevue_type_script_lang_js_ = ({
  data() {
    return {
      group_id: 0,
      TagsSelectedArray: [],
      isLoading: false,
      Groupname: '',
      ReaderData: [],
      UsersData: [],
      UserList: [],
      Status: '',
      GroupDetail: '',
      Reader: '',
      Users: '',
      DataLoaded: 0,
      FormSchema: [{
        layoutType: "double",
        Data: [{
          astype: "TextField",
          label: this.$t('GroupName'),
          name: "GroupName",
          value: "",
          placeholder: "",
          validationRules: {
            "required": true
          }
        }, {
          astype: "SelectField",
          label: this.$t('Reader'),
          name: "Reader",
          value: "",
          placeholder: "",
          validationRules: {
            "required": true
          },
          config: {
            // option_request_url:process.env.VUE_APP_API_URL+'/GetDeviceList',
            // token:this.GetUserInfo.Token,
            options: []
          }
        }, {
          astype: "MultiSelectField",
          label: this.$t('Users'),
          name: "Users",
          value: "",
          mode: "tag",
          placeholder: "",
          validationRules: {
            "required": true
          },
          config: {
            options: []
          }
        }, {
          astype: "SelectField",
          label: this.$t('Status'),
          name: "Status",
          value: "",
          placeholder: "",
          validationRules: {
            "required": true
          },
          config: {
            options: [{
              value: "1001",
              name: 'Active'
            }, {
              value: "1002",
              name: 'InActive'
            }]
          }
        }]
      }, {
        Data: [{
          astype: "TextAreaField",
          label: this.$t('GroupDetails'),
          name: "GroupDescription",
          value: "",
          placeholder: "",
          validationRules: "",
          config: {
            rows: 5
          }
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
        onClick: this.onCancel
      }]
    };
  },
  created: async function () {
    await this.GetDeviceList();
    if (this.$route.params.id != null) {
      await this.GetNotficationUsers();
      await this.ManageItemsGroup();
    }
    this.DataLoaded = 1;
  },
  methods: {
    GetDeviceList: async function () {
      await DataService["a" /* default */].GetDeviceList().then(response => {
        response.data.data.forEach(item => {
          this.FormSchema[0].Data[1].config.options.push({
            name: `${item.name}`,
            value: `${item.value}`
          });
        });
      });
    },
    GetNotficationUsers: async function () {
      var url = `moduleName=ASSETASSIGNMENT`;
      await DataService["a" /* default */].GetNotficationUsers(url).then(response => {
        response.data.data.forEach(item => {
          this.FormSchema[0].Data[2].config.options.push({
            name: `${item.NAME}(${item.DEPARTMENT_NAME})`,
            value: `${item.USER_ID}`
          });
        });
        console.log(this.FormSchema[0].Data[2].config.options);
      });
    },
    onSubmit: function (formfields) {
      debugger;
      var vm = this;
      var jsonobj = {
        GroupId: vm.group_id,
        GroupName: formfields.GroupName,
        LocationId: 0,
        ReaderId: formfields.Reader,
        UserIds: Array.prototype.map.call(formfields.Users, function (item) {
          return item.value;
        }).join(","),
        GroupDetails: formfields.GroupDescription,
        StatusId: formfields.Status
      };
      var poststring = JSON.stringify(jsonobj);
      DataService["a" /* default */].AddGroup(poststring).then(response => {
        debugger;
        if (response.data == 'insert') {
          vm.ShowAlert(vm.$t('AddedSuccess', [vm.$t('Group_Item')]), "success", true, vm.$t("Alert"));
          vm.onCancel();
        } else if (response.data == 'update') {
          vm.ShowAlert(vm.$t('UpdatedSuccess', [vm.$t('Group_Item')]), "success", true, vm.$t("Alert"));
          vm.onCancel();
        } else if (response.data == 'duplicate') {
          vm.ShowAlert(vm.$t("Duplicate Group name"), "warning", true, vm.$t('Alert'));
        } else {
          vm.ShowAlert(vm.$t("Something went Wrong"), "failure", true, vm.$t('Alert'));
        }
      });
    },
    onCancel: function () {
      this.$router.push({
        name: 'GroupList'
      });
    },
    ManageItemsGroup: async function () {
      var vm = this;
      var url = `id=${this.$route.params.id}`;
      await DataService["a" /* default */].GetItemsGroupById(url).then(response => {
        if (response.data.length > 0) {
          this.FormSchema[0].Data[0].value = response.data[0].group_name;
          this.FormSchema[0].Data[1].value = response.data[0].reader_id;
          vm.group_id = response.data[0].group_id;
          vm.UserList = response.data[0].user_ids.split(",");
          vm.UserList.forEach(item => {
            var obj = this.FormSchema[0].Data[2].config.options.find(x => x.value == item);
            vm.TagsSelectedArray.push({
              label: obj.name,
              value: obj.value
            });
          });
          this.FormSchema[0].Data[2].value = vm.TagsSelectedArray;
          this.FormSchema[0].Data[3].value = response.data[0].status_id;
          this.FormSchema[1].Data[0].value = response.data[0].group_details;
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/ItemGroupList/Manage.vue?vue&type=script&lang=js&
 /* harmony default export */ var ItemGroupList_Managevue_type_script_lang_js_ = (Managevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/ItemGroupList/Manage.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ItemGroupList_Managevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Manage = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d0d7694.js.map