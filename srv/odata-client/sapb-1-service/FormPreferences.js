"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormPreferences = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var FormPreferencesRequestBuilder_1 = require("./FormPreferencesRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormPreferences" of service "SAPB1".
 */
var FormPreferences = /** @class */ (function (_super) {
    __extends(FormPreferences, _super);
    function FormPreferences() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `FormPreferences`.
     * @returns A builder that constructs instances of entity type `FormPreferences`.
     */
    FormPreferences.builder = function () {
        return core_1.EntityV4.entityBuilder(FormPreferences);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormPreferences` entity type.
     * @returns A `FormPreferences` request builder.
     */
    FormPreferences.requestBuilder = function () {
        return new FormPreferencesRequestBuilder_1.FormPreferencesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormPreferences`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormPreferences`.
     */
    FormPreferences.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, FormPreferences);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormPreferences.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormPreferences.
     */
    FormPreferences._entityName = 'FormPreferences';
    /**
     * Default url path for the according service.
     */
    FormPreferences._defaultServicePath = '/b1s/v2/';
    return FormPreferences;
}(core_1.EntityV4));
exports.FormPreferences = FormPreferences;
var Users_1 = require("./Users");
(function (FormPreferences) {
    /**
     * Static representation of the [[user]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormPreferences.USER = new core_1.NumberField('User', FormPreferences, 'Edm.Int32');
    /**
     * Static representation of the [[formId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormPreferences.FORM_ID = new core_1.StringField('FormID', FormPreferences, 'Edm.String');
    /**
     * Static representation of the [[itemNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormPreferences.ITEM_NUMBER = new core_1.StringField('ItemNumber', FormPreferences, 'Edm.String');
    /**
     * Static representation of the [[column]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormPreferences.COLUMN = new core_1.StringField('Column', FormPreferences, 'Edm.String');
    /**
     * Static representation of the [[width]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormPreferences.WIDTH = new core_1.NumberField('Width', FormPreferences, 'Edm.Int32');
    /**
     * Static representation of the [[visibleInForm]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormPreferences.VISIBLE_IN_FORM = new core_1.EnumField('VisibleInForm', FormPreferences);
    /**
     * Static representation of the [[tabsLayout]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormPreferences.TABS_LAYOUT = new core_1.NumberField('TabsLayout', FormPreferences, 'Edm.Int32');
    /**
     * Static representation of the [[editableInForm]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormPreferences.EDITABLE_IN_FORM = new core_1.EnumField('EditableInForm', FormPreferences);
    /**
     * Static representation of the [[visibleInExpanded]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormPreferences.VISIBLE_IN_EXPANDED = new core_1.EnumField('VisibleInExpanded', FormPreferences);
    /**
     * Static representation of the [[expandedIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormPreferences.EXPANDED_INDEX = new core_1.NumberField('ExpandedIndex', FormPreferences, 'Edm.Int32');
    /**
     * Static representation of the [[editableInExpanded]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormPreferences.EDITABLE_IN_EXPANDED = new core_1.EnumField('EditableInExpanded', FormPreferences);
    /**
     * Static representation of the one-to-one navigation property [[user2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormPreferences.USER_2 = new core_1.OneToOneLink('User2', FormPreferences, Users_1.Users);
    /**
     * All fields of the FormPreferences entity.
     */
    FormPreferences._allFields = [
        FormPreferences.USER,
        FormPreferences.FORM_ID,
        FormPreferences.ITEM_NUMBER,
        FormPreferences.COLUMN,
        FormPreferences.WIDTH,
        FormPreferences.VISIBLE_IN_FORM,
        FormPreferences.TABS_LAYOUT,
        FormPreferences.EDITABLE_IN_FORM,
        FormPreferences.VISIBLE_IN_EXPANDED,
        FormPreferences.EXPANDED_INDEX,
        FormPreferences.EDITABLE_IN_EXPANDED,
        FormPreferences.USER_2
    ];
    /**
     * All fields selector.
     */
    FormPreferences.ALL_FIELDS = new core_1.AllFields('*', FormPreferences);
    /**
     * All key fields of the FormPreferences entity.
     */
    FormPreferences._keyFields = [FormPreferences.USER, FormPreferences.FORM_ID, FormPreferences.ITEM_NUMBER, FormPreferences.COLUMN];
    /**
     * Mapping of all key field names to the respective static field property FormPreferences.
     */
    FormPreferences._keys = FormPreferences._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormPreferences = exports.FormPreferences || (exports.FormPreferences = {}));
exports.FormPreferences = FormPreferences;
//# sourceMappingURL=FormPreferences.js.map