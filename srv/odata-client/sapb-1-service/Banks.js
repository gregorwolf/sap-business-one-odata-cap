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
exports.Banks = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BanksRequestBuilder_1 = require("./BanksRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Banks" of service "SAPB1".
 */
var Banks = /** @class */ (function (_super) {
    __extends(Banks, _super);
    function Banks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `Banks`.
     * @returns A builder that constructs instances of entity type `Banks`.
     */
    Banks.builder = function () {
        return core_1.EntityV4.entityBuilder(Banks);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Banks` entity type.
     * @returns A `Banks` request builder.
     */
    Banks.requestBuilder = function () {
        return new BanksRequestBuilder_1.BanksRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Banks`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Banks`.
     */
    Banks.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, Banks);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Banks.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Banks.
     */
    Banks._entityName = 'Banks';
    /**
     * Default url path for the according service.
     */
    Banks._defaultServicePath = '/b1s/v2/';
    return Banks;
}(core_1.EntityV4));
exports.Banks = Banks;
var EmployeesInfo_1 = require("./EmployeesInfo");
var Countries_1 = require("./Countries");
var HouseBankAccounts_1 = require("./HouseBankAccounts");
(function (Banks) {
    /**
     * Static representation of the [[bankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Banks.BANK_CODE = new core_1.StringField('BankCode', Banks, 'Edm.String');
    /**
     * Static representation of the [[bankName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Banks.BANK_NAME = new core_1.StringField('BankName', Banks, 'Edm.String');
    /**
     * Static representation of the [[accountforOutgoingChecks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Banks.ACCOUNTFOR_OUTGOING_CHECKS = new core_1.StringField('AccountforOutgoingChecks', Banks, 'Edm.String');
    /**
     * Static representation of the [[branchforOutgoingChecks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Banks.BRANCHFOR_OUTGOING_CHECKS = new core_1.StringField('BranchforOutgoingChecks', Banks, 'Edm.String');
    /**
     * Static representation of the [[nextCheckNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Banks.NEXT_CHECK_NUMBER = new core_1.NumberField('NextCheckNumber', Banks, 'Edm.Int32');
    /**
     * Static representation of the [[swiftNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Banks.SWIFT_NO = new core_1.StringField('SwiftNo', Banks, 'Edm.String');
    /**
     * Static representation of the [[iban]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Banks.IBAN = new core_1.StringField('IBAN', Banks, 'Edm.String');
    /**
     * Static representation of the [[countryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Banks.COUNTRY_CODE = new core_1.StringField('CountryCode', Banks, 'Edm.String');
    /**
     * Static representation of the [[postOffice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Banks.POST_OFFICE = new core_1.EnumField('PostOffice', Banks);
    /**
     * Static representation of the [[absoluteEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Banks.ABSOLUTE_ENTRY = new core_1.NumberField('AbsoluteEntry', Banks, 'Edm.Int32');
    /**
     * Static representation of the [[defaultBankAccountKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Banks.DEFAULT_BANK_ACCOUNT_KEY = new core_1.NumberField('DefaultBankAccountKey', Banks, 'Edm.Int32');
    /**
     * Static representation of the one-to-many navigation property [[employeesInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Banks.EMPLOYEES_INFO = new core_1.OneToManyLink('EmployeesInfo', Banks, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Banks.COUNTRY = new core_1.OneToOneLink('Country', Banks, Countries_1.Countries);
    /**
     * Static representation of the one-to-many navigation property [[houseBankAccounts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Banks.HOUSE_BANK_ACCOUNTS = new core_1.OneToManyLink('HouseBankAccounts', Banks, HouseBankAccounts_1.HouseBankAccounts);
    /**
     * All fields of the Banks entity.
     */
    Banks._allFields = [
        Banks.BANK_CODE,
        Banks.BANK_NAME,
        Banks.ACCOUNTFOR_OUTGOING_CHECKS,
        Banks.BRANCHFOR_OUTGOING_CHECKS,
        Banks.NEXT_CHECK_NUMBER,
        Banks.SWIFT_NO,
        Banks.IBAN,
        Banks.COUNTRY_CODE,
        Banks.POST_OFFICE,
        Banks.ABSOLUTE_ENTRY,
        Banks.DEFAULT_BANK_ACCOUNT_KEY,
        Banks.EMPLOYEES_INFO,
        Banks.COUNTRY,
        Banks.HOUSE_BANK_ACCOUNTS
    ];
    /**
     * All fields selector.
     */
    Banks.ALL_FIELDS = new core_1.AllFields('*', Banks);
    /**
     * All key fields of the Banks entity.
     */
    Banks._keyFields = [Banks.ABSOLUTE_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property Banks.
     */
    Banks._keys = Banks._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Banks = exports.Banks || (exports.Banks = {}));
exports.Banks = Banks;
//# sourceMappingURL=Banks.js.map