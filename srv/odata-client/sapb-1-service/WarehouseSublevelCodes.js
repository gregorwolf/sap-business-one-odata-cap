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
exports.WarehouseSublevelCodes = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var WarehouseSublevelCodesRequestBuilder_1 = require("./WarehouseSublevelCodesRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "WarehouseSublevelCodes" of service "SAPB1".
 */
var WarehouseSublevelCodes = /** @class */ (function (_super) {
    __extends(WarehouseSublevelCodes, _super);
    function WarehouseSublevelCodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `WarehouseSublevelCodes`.
     * @returns A builder that constructs instances of entity type `WarehouseSublevelCodes`.
     */
    WarehouseSublevelCodes.builder = function () {
        return v4_1.Entity.entityBuilder(WarehouseSublevelCodes);
    };
    /**
     * Returns a request builder to construct requests for operations on the `WarehouseSublevelCodes` entity type.
     * @returns A `WarehouseSublevelCodes` request builder.
     */
    WarehouseSublevelCodes.requestBuilder = function () {
        return new WarehouseSublevelCodesRequestBuilder_1.WarehouseSublevelCodesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WarehouseSublevelCodes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WarehouseSublevelCodes`.
     */
    WarehouseSublevelCodes.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, WarehouseSublevelCodes);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    WarehouseSublevelCodes.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for WarehouseSublevelCodes.
     */
    WarehouseSublevelCodes._entityName = 'WarehouseSublevelCodes';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for WarehouseSublevelCodes.
     */
    WarehouseSublevelCodes._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    WarehouseSublevelCodes._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return WarehouseSublevelCodes;
}(v4_1.Entity));
exports.WarehouseSublevelCodes = WarehouseSublevelCodes;
var BinLocationFields_1 = require("./BinLocationFields");
(function (WarehouseSublevelCodes) {
    /**
     * Static representation of the [[warehouseSublevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseSublevelCodes.WAREHOUSE_SUBLEVEL = new v4_1.NumberField('WarehouseSublevel', WarehouseSublevelCodes, 'Edm.Int32');
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseSublevelCodes.CODE = new v4_1.StringField('Code', WarehouseSublevelCodes, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseSublevelCodes.DESCRIPTION = new v4_1.StringField('Description', WarehouseSublevelCodes, 'Edm.String');
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseSublevelCodes.ABS_ENTRY = new v4_1.NumberField('AbsEntry', WarehouseSublevelCodes, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[binLocationField]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseSublevelCodes.BIN_LOCATION_FIELD = new v4_1.OneToOneLink('BinLocationField', WarehouseSublevelCodes, BinLocationFields_1.BinLocationFields);
    /**
     * All fields of the WarehouseSublevelCodes entity.
     */
    WarehouseSublevelCodes._allFields = [
        WarehouseSublevelCodes.WAREHOUSE_SUBLEVEL,
        WarehouseSublevelCodes.CODE,
        WarehouseSublevelCodes.DESCRIPTION,
        WarehouseSublevelCodes.ABS_ENTRY,
        WarehouseSublevelCodes.BIN_LOCATION_FIELD
    ];
    /**
     * All fields selector.
     */
    WarehouseSublevelCodes.ALL_FIELDS = new v4_1.AllFields('*', WarehouseSublevelCodes);
    /**
     * All key fields of the WarehouseSublevelCodes entity.
     */
    WarehouseSublevelCodes._keyFields = [WarehouseSublevelCodes.ABS_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property WarehouseSublevelCodes.
     */
    WarehouseSublevelCodes._keys = WarehouseSublevelCodes._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(WarehouseSublevelCodes = exports.WarehouseSublevelCodes || (exports.WarehouseSublevelCodes = {}));
exports.WarehouseSublevelCodes = WarehouseSublevelCodes;
//# sourceMappingURL=WarehouseSublevelCodes.js.map