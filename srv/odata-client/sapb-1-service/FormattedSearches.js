"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
exports.FormattedSearches = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var FormattedSearchesRequestBuilder_1 = require("./FormattedSearchesRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "FormattedSearches" of service "SAPB1".
 */
var FormattedSearches = /** @class */ (function (_super) {
    __extends(FormattedSearches, _super);
    function FormattedSearches() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormattedSearches`.
     * @returns A builder that constructs instances of entity type `FormattedSearches`.
     */
    FormattedSearches.builder = function () {
        return v4_1.Entity.entityBuilder(FormattedSearches);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormattedSearches` entity type.
     * @returns A `FormattedSearches` request builder.
     */
    FormattedSearches.requestBuilder = function () {
        return new FormattedSearchesRequestBuilder_1.FormattedSearchesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormattedSearches`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormattedSearches`.
     */
    FormattedSearches.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, FormattedSearches);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormattedSearches.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormattedSearches.
     */
    FormattedSearches._entityName = 'FormattedSearches';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormattedSearches.
     */
    FormattedSearches._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    FormattedSearches._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormattedSearches;
}(v4_1.Entity));
exports.FormattedSearches = FormattedSearches;
(function (FormattedSearches) {
    /**
     * Static representation of the [[formId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormattedSearches.FORM_ID = new v4_1.StringField('FormID', FormattedSearches, 'Edm.String');
    /**
     * Static representation of the [[itemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormattedSearches.ITEM_ID = new v4_1.StringField('ItemID', FormattedSearches, 'Edm.String');
    /**
     * Static representation of the [[columnId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormattedSearches.COLUMN_ID = new v4_1.StringField('ColumnID', FormattedSearches, 'Edm.String');
    /**
     * Static representation of the [[queryId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormattedSearches.QUERY_ID = new v4_1.NumberField('QueryID', FormattedSearches, 'Edm.Int32');
    /**
     * Static representation of the [[index]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormattedSearches.INDEX = new v4_1.NumberField('Index', FormattedSearches, 'Edm.Int32');
    /**
     * Static representation of the [[fieldId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormattedSearches.FIELD_ID = new v4_1.StringField('FieldID', FormattedSearches, 'Edm.String');
    /**
     * All fields of the FormattedSearches entity.
     */
    FormattedSearches._allFields = [
        FormattedSearches.FORM_ID,
        FormattedSearches.ITEM_ID,
        FormattedSearches.COLUMN_ID,
        FormattedSearches.QUERY_ID,
        FormattedSearches.INDEX,
        FormattedSearches.FIELD_ID
    ];
    /**
     * All fields selector.
     */
    FormattedSearches.ALL_FIELDS = new v4_1.AllFields('*', FormattedSearches);
    /**
     * All key fields of the FormattedSearches entity.
     */
    FormattedSearches._keyFields = [FormattedSearches.INDEX];
    /**
     * Mapping of all key field names to the respective static field property FormattedSearches.
     */
    FormattedSearches._keys = FormattedSearches._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormattedSearches = exports.FormattedSearches || (exports.FormattedSearches = {}));
exports.FormattedSearches = FormattedSearches;
//# sourceMappingURL=FormattedSearches.js.map