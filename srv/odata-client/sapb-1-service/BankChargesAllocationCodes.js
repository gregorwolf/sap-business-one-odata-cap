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
exports.BankChargesAllocationCodes = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BankChargesAllocationCodesRequestBuilder_1 = require("./BankChargesAllocationCodesRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "BankChargesAllocationCodes" of service "SAPB1".
 */
var BankChargesAllocationCodes = /** @class */ (function (_super) {
    __extends(BankChargesAllocationCodes, _super);
    function BankChargesAllocationCodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `BankChargesAllocationCodes`.
     * @returns A builder that constructs instances of entity type `BankChargesAllocationCodes`.
     */
    BankChargesAllocationCodes.builder = function () {
        return core_1.EntityV4.entityBuilder(BankChargesAllocationCodes);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BankChargesAllocationCodes` entity type.
     * @returns A `BankChargesAllocationCodes` request builder.
     */
    BankChargesAllocationCodes.requestBuilder = function () {
        return new BankChargesAllocationCodesRequestBuilder_1.BankChargesAllocationCodesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BankChargesAllocationCodes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BankChargesAllocationCodes`.
     */
    BankChargesAllocationCodes.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, BankChargesAllocationCodes);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BankChargesAllocationCodes.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BankChargesAllocationCodes.
     */
    BankChargesAllocationCodes._entityName = 'BankChargesAllocationCodes';
    /**
     * Default url path for the according service.
     */
    BankChargesAllocationCodes._defaultServicePath = '/b1s/v2/';
    return BankChargesAllocationCodes;
}(core_1.EntityV4));
exports.BankChargesAllocationCodes = BankChargesAllocationCodes;
var BusinessPartners_1 = require("./BusinessPartners");
var PaymentRunExport_1 = require("./PaymentRunExport");
(function (BankChargesAllocationCodes) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankChargesAllocationCodes.CODE = new core_1.StringField('Code', BankChargesAllocationCodes, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankChargesAllocationCodes.DESCRIPTION = new core_1.StringField('Description', BankChargesAllocationCodes, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankChargesAllocationCodes.BUSINESS_PARTNERS = new core_1.OneToManyLink('BusinessPartners', BankChargesAllocationCodes, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-many navigation property [[paymentRunExport]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankChargesAllocationCodes.PAYMENT_RUN_EXPORT = new core_1.OneToManyLink('PaymentRunExport', BankChargesAllocationCodes, PaymentRunExport_1.PaymentRunExport);
    /**
     * All fields of the BankChargesAllocationCodes entity.
     */
    BankChargesAllocationCodes._allFields = [
        BankChargesAllocationCodes.CODE,
        BankChargesAllocationCodes.DESCRIPTION,
        BankChargesAllocationCodes.BUSINESS_PARTNERS,
        BankChargesAllocationCodes.PAYMENT_RUN_EXPORT
    ];
    /**
     * All fields selector.
     */
    BankChargesAllocationCodes.ALL_FIELDS = new core_1.AllFields('*', BankChargesAllocationCodes);
    /**
     * All key fields of the BankChargesAllocationCodes entity.
     */
    BankChargesAllocationCodes._keyFields = [BankChargesAllocationCodes.CODE];
    /**
     * Mapping of all key field names to the respective static field property BankChargesAllocationCodes.
     */
    BankChargesAllocationCodes._keys = BankChargesAllocationCodes._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BankChargesAllocationCodes = exports.BankChargesAllocationCodes || (exports.BankChargesAllocationCodes = {}));
exports.BankChargesAllocationCodes = BankChargesAllocationCodes;
//# sourceMappingURL=BankChargesAllocationCodes.js.map