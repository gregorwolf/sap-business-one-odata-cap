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
exports.BatchNumberDetails = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BatchNumberDetailsRequestBuilder_1 = require("./BatchNumberDetailsRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "BatchNumberDetails" of service "SAPB1".
 */
var BatchNumberDetails = /** @class */ (function (_super) {
    __extends(BatchNumberDetails, _super);
    function BatchNumberDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `BatchNumberDetails`.
     * @returns A builder that constructs instances of entity type `BatchNumberDetails`.
     */
    BatchNumberDetails.builder = function () {
        return v4_1.Entity.entityBuilder(BatchNumberDetails);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BatchNumberDetails` entity type.
     * @returns A `BatchNumberDetails` request builder.
     */
    BatchNumberDetails.requestBuilder = function () {
        return new BatchNumberDetailsRequestBuilder_1.BatchNumberDetailsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BatchNumberDetails`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BatchNumberDetails`.
     */
    BatchNumberDetails.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, BatchNumberDetails);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BatchNumberDetails.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BatchNumberDetails.
     */
    BatchNumberDetails._entityName = 'BatchNumberDetails';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BatchNumberDetails.
     */
    BatchNumberDetails._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    BatchNumberDetails._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return BatchNumberDetails;
}(v4_1.Entity));
exports.BatchNumberDetails = BatchNumberDetails;
var Items_1 = require("./Items");
(function (BatchNumberDetails) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BatchNumberDetails.DOC_ENTRY = new v4_1.NumberField('DocEntry', BatchNumberDetails, 'Edm.Int32');
    /**
     * Static representation of the [[itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BatchNumberDetails.ITEM_CODE = new v4_1.StringField('ItemCode', BatchNumberDetails, 'Edm.String');
    /**
     * Static representation of the [[itemDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BatchNumberDetails.ITEM_DESCRIPTION = new v4_1.StringField('ItemDescription', BatchNumberDetails, 'Edm.String');
    /**
     * Static representation of the [[batch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BatchNumberDetails.BATCH = new v4_1.StringField('Batch', BatchNumberDetails, 'Edm.String');
    /**
     * Static representation of the [[batchAttribute1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BatchNumberDetails.BATCH_ATTRIBUTE_1 = new v4_1.StringField('BatchAttribute1', BatchNumberDetails, 'Edm.String');
    /**
     * Static representation of the [[batchAttribute2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BatchNumberDetails.BATCH_ATTRIBUTE_2 = new v4_1.StringField('BatchAttribute2', BatchNumberDetails, 'Edm.String');
    /**
     * Static representation of the [[admissionDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BatchNumberDetails.ADMISSION_DATE = new v4_1.DateField('AdmissionDate', BatchNumberDetails, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[manufacturingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BatchNumberDetails.MANUFACTURING_DATE = new v4_1.DateField('ManufacturingDate', BatchNumberDetails, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[expirationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BatchNumberDetails.EXPIRATION_DATE = new v4_1.DateField('ExpirationDate', BatchNumberDetails, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[details]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BatchNumberDetails.DETAILS = new v4_1.StringField('Details', BatchNumberDetails, 'Edm.String');
    /**
     * Static representation of the [[systemNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BatchNumberDetails.SYSTEM_NUMBER = new v4_1.NumberField('SystemNumber', BatchNumberDetails, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[item]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BatchNumberDetails.ITEM = new v4_1.OneToOneLink('Item', BatchNumberDetails, Items_1.Items);
    /**
     * All fields of the BatchNumberDetails entity.
     */
    BatchNumberDetails._allFields = [
        BatchNumberDetails.DOC_ENTRY,
        BatchNumberDetails.ITEM_CODE,
        BatchNumberDetails.ITEM_DESCRIPTION,
        BatchNumberDetails.BATCH,
        BatchNumberDetails.BATCH_ATTRIBUTE_1,
        BatchNumberDetails.BATCH_ATTRIBUTE_2,
        BatchNumberDetails.ADMISSION_DATE,
        BatchNumberDetails.MANUFACTURING_DATE,
        BatchNumberDetails.EXPIRATION_DATE,
        BatchNumberDetails.DETAILS,
        BatchNumberDetails.SYSTEM_NUMBER,
        BatchNumberDetails.ITEM
    ];
    /**
     * All fields selector.
     */
    BatchNumberDetails.ALL_FIELDS = new v4_1.AllFields('*', BatchNumberDetails);
    /**
     * All key fields of the BatchNumberDetails entity.
     */
    BatchNumberDetails._keyFields = [BatchNumberDetails.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property BatchNumberDetails.
     */
    BatchNumberDetails._keys = BatchNumberDetails._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BatchNumberDetails = exports.BatchNumberDetails || (exports.BatchNumberDetails = {}));
exports.BatchNumberDetails = BatchNumberDetails;
//# sourceMappingURL=BatchNumberDetails.js.map