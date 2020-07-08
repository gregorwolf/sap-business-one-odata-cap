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
exports.SerialNumberDetails = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var SerialNumberDetailsRequestBuilder_1 = require("./SerialNumberDetailsRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "SerialNumberDetails" of service "SAPB1".
 */
var SerialNumberDetails = /** @class */ (function (_super) {
    __extends(SerialNumberDetails, _super);
    function SerialNumberDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SerialNumberDetails`.
     * @returns A builder that constructs instances of entity type `SerialNumberDetails`.
     */
    SerialNumberDetails.builder = function () {
        return v4_1.Entity.entityBuilder(SerialNumberDetails);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SerialNumberDetails` entity type.
     * @returns A `SerialNumberDetails` request builder.
     */
    SerialNumberDetails.requestBuilder = function () {
        return new SerialNumberDetailsRequestBuilder_1.SerialNumberDetailsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SerialNumberDetails`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SerialNumberDetails`.
     */
    SerialNumberDetails.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, SerialNumberDetails);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SerialNumberDetails.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SerialNumberDetails.
     */
    SerialNumberDetails._entityName = 'SerialNumberDetails';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SerialNumberDetails.
     */
    SerialNumberDetails._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    SerialNumberDetails._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return SerialNumberDetails;
}(v4_1.Entity));
exports.SerialNumberDetails = SerialNumberDetails;
var Items_1 = require("./Items");
(function (SerialNumberDetails) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SerialNumberDetails.DOC_ENTRY = new v4_1.NumberField('DocEntry', SerialNumberDetails, 'Edm.Int32');
    /**
     * Static representation of the [[itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SerialNumberDetails.ITEM_CODE = new v4_1.StringField('ItemCode', SerialNumberDetails, 'Edm.String');
    /**
     * Static representation of the [[itemDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SerialNumberDetails.ITEM_DESCRIPTION = new v4_1.StringField('ItemDescription', SerialNumberDetails, 'Edm.String');
    /**
     * Static representation of the [[mfrSerialNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SerialNumberDetails.MFR_SERIAL_NO = new v4_1.StringField('MfrSerialNo', SerialNumberDetails, 'Edm.String');
    /**
     * Static representation of the [[serialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SerialNumberDetails.SERIAL_NUMBER = new v4_1.StringField('SerialNumber', SerialNumberDetails, 'Edm.String');
    /**
     * Static representation of the [[lotNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SerialNumberDetails.LOT_NUMBER = new v4_1.StringField('LotNumber', SerialNumberDetails, 'Edm.String');
    /**
     * Static representation of the [[systemNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SerialNumberDetails.SYSTEM_NUMBER = new v4_1.NumberField('SystemNumber', SerialNumberDetails, 'Edm.Int32');
    /**
     * Static representation of the [[admissionDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SerialNumberDetails.ADMISSION_DATE = new v4_1.DateField('AdmissionDate', SerialNumberDetails, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[manufacturingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SerialNumberDetails.MANUFACTURING_DATE = new v4_1.DateField('ManufacturingDate', SerialNumberDetails, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[expirationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SerialNumberDetails.EXPIRATION_DATE = new v4_1.DateField('ExpirationDate', SerialNumberDetails, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mfrWarrantyStart]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SerialNumberDetails.MFR_WARRANTY_START = new v4_1.DateField('MfrWarrantyStart', SerialNumberDetails, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mFrWarrantyEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SerialNumberDetails.M_FR_WARRANTY_END = new v4_1.DateField('MFrWarrantyEnd', SerialNumberDetails, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SerialNumberDetails.LOCATION = new v4_1.StringField('Location', SerialNumberDetails, 'Edm.String');
    /**
     * Static representation of the [[details]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SerialNumberDetails.DETAILS = new v4_1.StringField('Details', SerialNumberDetails, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[item]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SerialNumberDetails.ITEM = new v4_1.OneToOneLink('Item', SerialNumberDetails, Items_1.Items);
    /**
     * All fields of the SerialNumberDetails entity.
     */
    SerialNumberDetails._allFields = [
        SerialNumberDetails.DOC_ENTRY,
        SerialNumberDetails.ITEM_CODE,
        SerialNumberDetails.ITEM_DESCRIPTION,
        SerialNumberDetails.MFR_SERIAL_NO,
        SerialNumberDetails.SERIAL_NUMBER,
        SerialNumberDetails.LOT_NUMBER,
        SerialNumberDetails.SYSTEM_NUMBER,
        SerialNumberDetails.ADMISSION_DATE,
        SerialNumberDetails.MANUFACTURING_DATE,
        SerialNumberDetails.EXPIRATION_DATE,
        SerialNumberDetails.MFR_WARRANTY_START,
        SerialNumberDetails.M_FR_WARRANTY_END,
        SerialNumberDetails.LOCATION,
        SerialNumberDetails.DETAILS,
        SerialNumberDetails.ITEM
    ];
    /**
     * All fields selector.
     */
    SerialNumberDetails.ALL_FIELDS = new v4_1.AllFields('*', SerialNumberDetails);
    /**
     * All key fields of the SerialNumberDetails entity.
     */
    SerialNumberDetails._keyFields = [SerialNumberDetails.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property SerialNumberDetails.
     */
    SerialNumberDetails._keys = SerialNumberDetails._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SerialNumberDetails = exports.SerialNumberDetails || (exports.SerialNumberDetails = {}));
exports.SerialNumberDetails = SerialNumberDetails;
//# sourceMappingURL=SerialNumberDetails.js.map