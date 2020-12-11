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
exports.FiscalPrinter = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var FiscalPrinterRequestBuilder_1 = require("./FiscalPrinterRequestBuilder");
var FiscalPrinterParams_1 = require("./FiscalPrinterParams");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FiscalPrinter" of service "SAPB1".
 */
var FiscalPrinter = /** @class */ (function (_super) {
    __extends(FiscalPrinter, _super);
    function FiscalPrinter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `FiscalPrinter`.
     * @returns A builder that constructs instances of entity type `FiscalPrinter`.
     */
    FiscalPrinter.builder = function () {
        return core_1.EntityV4.entityBuilder(FiscalPrinter);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FiscalPrinter` entity type.
     * @returns A `FiscalPrinter` request builder.
     */
    FiscalPrinter.requestBuilder = function () {
        return new FiscalPrinterRequestBuilder_1.FiscalPrinterRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FiscalPrinter`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FiscalPrinter`.
     */
    FiscalPrinter.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, FiscalPrinter);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FiscalPrinter.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FiscalPrinter.
     */
    FiscalPrinter._entityName = 'FiscalPrinter';
    /**
     * Default url path for the according service.
     */
    FiscalPrinter._defaultServicePath = '/b1s/v2/';
    return FiscalPrinter;
}(core_1.EntityV4));
exports.FiscalPrinter = FiscalPrinter;
var NfModels_1 = require("./NfModels");
var PosDailySummary_1 = require("./PosDailySummary");
(function (FiscalPrinter) {
    /**
     * Static representation of the [[equipmentNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FiscalPrinter.EQUIPMENT_NO = new core_1.StringField('EquipmentNo', FiscalPrinter, 'Edm.String');
    /**
     * Static representation of the [[model]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FiscalPrinter.MODEL = new core_1.StringField('Model', FiscalPrinter, 'Edm.String');
    /**
     * Static representation of the [[manufacturerSerialN]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FiscalPrinter.MANUFACTURER_SERIAL_N = new core_1.StringField('ManufacturerSerialN', FiscalPrinter, 'Edm.String');
    /**
     * Static representation of the [[registerNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FiscalPrinter.REGISTER_NO = new core_1.NumberField('RegisterNo', FiscalPrinter, 'Edm.Int32');
    /**
     * Static representation of the [[fiscalDocumentModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FiscalPrinter.FISCAL_DOCUMENT_MODEL = new core_1.StringField('FiscalDocumentModel', FiscalPrinter, 'Edm.String');
    /**
     * Static representation of the [[fiscalPrintersParams]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FiscalPrinter.FISCAL_PRINTERS_PARAMS = new core_1.CollectionField('FiscalPrintersParams', FiscalPrinter, FiscalPrinterParams_1.FiscalPrinterParams);
    /**
     * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FiscalPrinter.NF_MODEL = new core_1.OneToOneLink('NFModel', FiscalPrinter, NfModels_1.NfModels);
    /**
     * Static representation of the one-to-many navigation property [[posDailySummary]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FiscalPrinter.POS_DAILY_SUMMARY = new core_1.OneToManyLink('POSDailySummary', FiscalPrinter, PosDailySummary_1.PosDailySummary);
    /**
     * All fields of the FiscalPrinter entity.
     */
    FiscalPrinter._allFields = [
        FiscalPrinter.EQUIPMENT_NO,
        FiscalPrinter.MODEL,
        FiscalPrinter.MANUFACTURER_SERIAL_N,
        FiscalPrinter.REGISTER_NO,
        FiscalPrinter.FISCAL_DOCUMENT_MODEL,
        FiscalPrinter.FISCAL_PRINTERS_PARAMS,
        FiscalPrinter.NF_MODEL,
        FiscalPrinter.POS_DAILY_SUMMARY
    ];
    /**
     * All fields selector.
     */
    FiscalPrinter.ALL_FIELDS = new core_1.AllFields('*', FiscalPrinter);
    /**
     * All key fields of the FiscalPrinter entity.
     */
    FiscalPrinter._keyFields = [FiscalPrinter.EQUIPMENT_NO];
    /**
     * Mapping of all key field names to the respective static field property FiscalPrinter.
     */
    FiscalPrinter._keys = FiscalPrinter._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FiscalPrinter = exports.FiscalPrinter || (exports.FiscalPrinter = {}));
exports.FiscalPrinter = FiscalPrinter;
//# sourceMappingURL=FiscalPrinter.js.map