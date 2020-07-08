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
exports.BinLocationFields = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BinLocationFieldsRequestBuilder_1 = require("./BinLocationFieldsRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "BinLocationFields" of service "SAPB1".
 */
var BinLocationFields = /** @class */ (function (_super) {
    __extends(BinLocationFields, _super);
    function BinLocationFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `BinLocationFields`.
     * @returns A builder that constructs instances of entity type `BinLocationFields`.
     */
    BinLocationFields.builder = function () {
        return v4_1.Entity.entityBuilder(BinLocationFields);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BinLocationFields` entity type.
     * @returns A `BinLocationFields` request builder.
     */
    BinLocationFields.requestBuilder = function () {
        return new BinLocationFieldsRequestBuilder_1.BinLocationFieldsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BinLocationFields`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BinLocationFields`.
     */
    BinLocationFields.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, BinLocationFields);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BinLocationFields.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BinLocationFields.
     */
    BinLocationFields._entityName = 'BinLocationFields';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BinLocationFields.
     */
    BinLocationFields._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    BinLocationFields._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return BinLocationFields;
}(v4_1.Entity));
exports.BinLocationFields = BinLocationFields;
var BinLocationAttributes_1 = require("./BinLocationAttributes");
var WarehouseSublevelCodes_1 = require("./WarehouseSublevelCodes");
(function (BinLocationFields) {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocationFields.ABS_ENTRY = new v4_1.NumberField('AbsEntry', BinLocationFields, 'Edm.Int32');
    /**
     * Static representation of the [[fieldNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocationFields.FIELD_NUMBER = new v4_1.NumberField('FieldNumber', BinLocationFields, 'Edm.Int32');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocationFields.NAME = new v4_1.StringField('Name', BinLocationFields, 'Edm.String');
    /**
     * Static representation of the [[defaultFieldName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocationFields.DEFAULT_FIELD_NAME = new v4_1.StringField('DefaultFieldName', BinLocationFields, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[binLocationAttributes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocationFields.BIN_LOCATION_ATTRIBUTES = new v4_1.OneToManyLink('BinLocationAttributes', BinLocationFields, BinLocationAttributes_1.BinLocationAttributes);
    /**
     * Static representation of the one-to-many navigation property [[warehouseSublevelCodes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocationFields.WAREHOUSE_SUBLEVEL_CODES = new v4_1.OneToManyLink('WarehouseSublevelCodes', BinLocationFields, WarehouseSublevelCodes_1.WarehouseSublevelCodes);
    /**
     * All fields of the BinLocationFields entity.
     */
    BinLocationFields._allFields = [
        BinLocationFields.ABS_ENTRY,
        BinLocationFields.FIELD_NUMBER,
        BinLocationFields.NAME,
        BinLocationFields.DEFAULT_FIELD_NAME,
        BinLocationFields.BIN_LOCATION_ATTRIBUTES,
        BinLocationFields.WAREHOUSE_SUBLEVEL_CODES
    ];
    /**
     * All fields selector.
     */
    BinLocationFields.ALL_FIELDS = new v4_1.AllFields('*', BinLocationFields);
    /**
     * All key fields of the BinLocationFields entity.
     */
    BinLocationFields._keyFields = [BinLocationFields.ABS_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property BinLocationFields.
     */
    BinLocationFields._keys = BinLocationFields._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BinLocationFields = exports.BinLocationFields || (exports.BinLocationFields = {}));
exports.BinLocationFields = BinLocationFields;
//# sourceMappingURL=BinLocationFields.js.map