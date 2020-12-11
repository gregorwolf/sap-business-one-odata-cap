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
exports.BarCodes = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BarCodesRequestBuilder_1 = require("./BarCodesRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "BarCodes" of service "SAPB1".
 */
var BarCodes = /** @class */ (function (_super) {
    __extends(BarCodes, _super);
    function BarCodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `BarCodes`.
     * @returns A builder that constructs instances of entity type `BarCodes`.
     */
    BarCodes.builder = function () {
        return core_1.EntityV4.entityBuilder(BarCodes);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BarCodes` entity type.
     * @returns A `BarCodes` request builder.
     */
    BarCodes.requestBuilder = function () {
        return new BarCodesRequestBuilder_1.BarCodesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BarCodes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BarCodes`.
     */
    BarCodes.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, BarCodes);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BarCodes.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BarCodes.
     */
    BarCodes._entityName = 'BarCodes';
    /**
     * Default url path for the according service.
     */
    BarCodes._defaultServicePath = '/b1s/v2/';
    return BarCodes;
}(core_1.EntityV4));
exports.BarCodes = BarCodes;
var Items_1 = require("./Items");
var UnitOfMeasurements_1 = require("./UnitOfMeasurements");
(function (BarCodes) {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BarCodes.ABS_ENTRY = new core_1.NumberField('AbsEntry', BarCodes, 'Edm.Int32');
    /**
     * Static representation of the [[itemNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BarCodes.ITEM_NO = new core_1.StringField('ItemNo', BarCodes, 'Edm.String');
    /**
     * Static representation of the [[uoMEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BarCodes.UO_M_ENTRY = new core_1.NumberField('UoMEntry', BarCodes, 'Edm.Int32');
    /**
     * Static representation of the [[barcode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BarCodes.BARCODE = new core_1.StringField('Barcode', BarCodes, 'Edm.String');
    /**
     * Static representation of the [[freeText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BarCodes.FREE_TEXT = new core_1.StringField('FreeText', BarCodes, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[item]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BarCodes.ITEM = new core_1.OneToOneLink('Item', BarCodes, Items_1.Items);
    /**
     * Static representation of the one-to-one navigation property [[unitOfMeasurement]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BarCodes.UNIT_OF_MEASUREMENT = new core_1.OneToOneLink('UnitOfMeasurement', BarCodes, UnitOfMeasurements_1.UnitOfMeasurements);
    /**
     * All fields of the BarCodes entity.
     */
    BarCodes._allFields = [
        BarCodes.ABS_ENTRY,
        BarCodes.ITEM_NO,
        BarCodes.UO_M_ENTRY,
        BarCodes.BARCODE,
        BarCodes.FREE_TEXT,
        BarCodes.ITEM,
        BarCodes.UNIT_OF_MEASUREMENT
    ];
    /**
     * All fields selector.
     */
    BarCodes.ALL_FIELDS = new core_1.AllFields('*', BarCodes);
    /**
     * All key fields of the BarCodes entity.
     */
    BarCodes._keyFields = [BarCodes.ABS_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property BarCodes.
     */
    BarCodes._keys = BarCodes._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BarCodes = exports.BarCodes || (exports.BarCodes = {}));
exports.BarCodes = BarCodes;
//# sourceMappingURL=BarCodes.js.map