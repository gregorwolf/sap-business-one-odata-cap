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
exports.LegalData = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var LegalDataRequestBuilder_1 = require("./LegalDataRequestBuilder");
var LegalDataDetail_1 = require("./LegalDataDetail");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "LegalData" of service "SAPB1".
 */
var LegalData = /** @class */ (function (_super) {
    __extends(LegalData, _super);
    function LegalData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `LegalData`.
     * @returns A builder that constructs instances of entity type `LegalData`.
     */
    LegalData.builder = function () {
        return core_1.EntityV4.entityBuilder(LegalData);
    };
    /**
     * Returns a request builder to construct requests for operations on the `LegalData` entity type.
     * @returns A `LegalData` request builder.
     */
    LegalData.requestBuilder = function () {
        return new LegalDataRequestBuilder_1.LegalDataRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `LegalData`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `LegalData`.
     */
    LegalData.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, LegalData);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    LegalData.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for LegalData.
     */
    LegalData._entityName = 'LegalData';
    /**
     * Default url path for the according service.
     */
    LegalData._defaultServicePath = '/b1s/v2/';
    return LegalData;
}(core_1.EntityV4));
exports.LegalData = LegalData;
var Users_1 = require("./Users");
(function (LegalData) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalData.DOC_ENTRY = new core_1.NumberField('DocEntry', LegalData, 'Edm.Int32');
    /**
     * Static representation of the [[sourceObjectType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalData.SOURCE_OBJECT_TYPE = new core_1.EnumField('SourceObjectType', LegalData);
    /**
     * Static representation of the [[sourceObjectEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalData.SOURCE_OBJECT_ENTRY = new core_1.NumberField('SourceObjectEntry', LegalData, 'Edm.Int32');
    /**
     * Static representation of the [[dateOfPrinting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalData.DATE_OF_PRINTING = new core_1.DateField('DateOfPrinting', LegalData, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[timeOfPrinting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalData.TIME_OF_PRINTING = new core_1.TimeField('TimeOfPrinting', LegalData, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[printerBrand]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalData.PRINTER_BRAND = new core_1.StringField('PrinterBrand', LegalData, 'Edm.String');
    /**
     * Static representation of the [[printerType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalData.PRINTER_TYPE = new core_1.StringField('PrinterType', LegalData, 'Edm.String');
    /**
     * Static representation of the [[printerModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalData.PRINTER_MODEL = new core_1.StringField('PrinterModel', LegalData, 'Edm.String');
    /**
     * Static representation of the [[printerFirmwareVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalData.PRINTER_FIRMWARE_VERSION = new core_1.StringField('PrinterFirmwareVersion', LegalData, 'Edm.String');
    /**
     * Static representation of the [[printerDllVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalData.PRINTER_DLL_VERSION = new core_1.StringField('PrinterDllVersion', LegalData, 'Edm.String');
    /**
     * Static representation of the [[fiscalSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalData.FISCAL_SERIES = new core_1.StringField('FiscalSeries', LegalData, 'Edm.String');
    /**
     * Static representation of the [[fiscalNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalData.FISCAL_NUMBER = new core_1.StringField('FiscalNumber', LegalData, 'Edm.String');
    /**
     * Static representation of the [[documentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalData.DOCUMENT_NUMBER = new core_1.StringField('DocumentNumber', LegalData, 'Edm.String');
    /**
     * Static representation of the [[fiscalUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalData.FISCAL_USER_ID = new core_1.NumberField('FiscalUserID', LegalData, 'Edm.Int32');
    /**
     * Static representation of the [[legalDataDetailCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalData.LEGAL_DATA_DETAIL_COLLECTION = new core_1.CollectionField('LegalDataDetailCollection', LegalData, LegalDataDetail_1.LegalDataDetail);
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LegalData.USER = new core_1.OneToOneLink('User', LegalData, Users_1.Users);
    /**
     * All fields of the LegalData entity.
     */
    LegalData._allFields = [
        LegalData.DOC_ENTRY,
        LegalData.SOURCE_OBJECT_TYPE,
        LegalData.SOURCE_OBJECT_ENTRY,
        LegalData.DATE_OF_PRINTING,
        LegalData.TIME_OF_PRINTING,
        LegalData.PRINTER_BRAND,
        LegalData.PRINTER_TYPE,
        LegalData.PRINTER_MODEL,
        LegalData.PRINTER_FIRMWARE_VERSION,
        LegalData.PRINTER_DLL_VERSION,
        LegalData.FISCAL_SERIES,
        LegalData.FISCAL_NUMBER,
        LegalData.DOCUMENT_NUMBER,
        LegalData.FISCAL_USER_ID,
        LegalData.LEGAL_DATA_DETAIL_COLLECTION,
        LegalData.USER
    ];
    /**
     * All fields selector.
     */
    LegalData.ALL_FIELDS = new core_1.AllFields('*', LegalData);
    /**
     * All key fields of the LegalData entity.
     */
    LegalData._keyFields = [LegalData.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property LegalData.
     */
    LegalData._keys = LegalData._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(LegalData = exports.LegalData || (exports.LegalData = {}));
exports.LegalData = LegalData;
//# sourceMappingURL=LegalData.js.map