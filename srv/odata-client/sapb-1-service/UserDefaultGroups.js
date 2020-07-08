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
exports.UserDefaultGroups = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var UserDefaultGroupsRequestBuilder_1 = require("./UserDefaultGroupsRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "UserDefaultGroups" of service "SAPB1".
 */
var UserDefaultGroups = /** @class */ (function (_super) {
    __extends(UserDefaultGroups, _super);
    function UserDefaultGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `UserDefaultGroups`.
     * @returns A builder that constructs instances of entity type `UserDefaultGroups`.
     */
    UserDefaultGroups.builder = function () {
        return v4_1.Entity.entityBuilder(UserDefaultGroups);
    };
    /**
     * Returns a request builder to construct requests for operations on the `UserDefaultGroups` entity type.
     * @returns A `UserDefaultGroups` request builder.
     */
    UserDefaultGroups.requestBuilder = function () {
        return new UserDefaultGroupsRequestBuilder_1.UserDefaultGroupsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `UserDefaultGroups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `UserDefaultGroups`.
     */
    UserDefaultGroups.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, UserDefaultGroups);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    UserDefaultGroups.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for UserDefaultGroups.
     */
    UserDefaultGroups._entityName = 'UserDefaultGroups';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for UserDefaultGroups.
     */
    UserDefaultGroups._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    UserDefaultGroups._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return UserDefaultGroups;
}(v4_1.Entity));
exports.UserDefaultGroups = UserDefaultGroups;
var Warehouses_1 = require("./Warehouses");
var SalesPersons_1 = require("./SalesPersons");
var BusinessPartners_1 = require("./BusinessPartners");
var Countries_1 = require("./Countries");
var SalesTaxCodes_1 = require("./SalesTaxCodes");
var Users_1 = require("./Users");
var BusinessPlaces_1 = require("./BusinessPlaces");
(function (UserDefaultGroups) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserDefaultGroups.CODE = new v4_1.StringField('Code', UserDefaultGroups, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserDefaultGroups.NAME = new v4_1.StringField('Name', UserDefaultGroups, 'Edm.String');
    /**
     * Static representation of the [[warehouse]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserDefaultGroups.WAREHOUSE = new v4_1.StringField('Warehouse', UserDefaultGroups, 'Edm.String');
    /**
     * Static representation of the [[salesEmployee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserDefaultGroups.SALES_EMPLOYEE = new v4_1.NumberField('SalesEmployee', UserDefaultGroups, 'Edm.Int32');
    /**
     * Static representation of the [[bPforInvoicePayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserDefaultGroups.B_PFOR_INVOICE_PAYMENT = new v4_1.StringField('BPforInvoicePayment', UserDefaultGroups, 'Edm.String');
    /**
     * Static representation of the [[cashAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserDefaultGroups.CASH_ACCOUNT = new v4_1.StringField('CashAccount', UserDefaultGroups, 'Edm.String');
    /**
     * Static representation of the [[checkingAcct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserDefaultGroups.CHECKING_ACCT = new v4_1.StringField('CheckingAcct', UserDefaultGroups, 'Edm.String');
    /**
     * Static representation of the [[windowsColor]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserDefaultGroups.WINDOWS_COLOR = new v4_1.NumberField('WindowsColor', UserDefaultGroups, 'Edm.Int32');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserDefaultGroups.ADDRESS = new v4_1.StringField('Address', UserDefaultGroups, 'Edm.String');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserDefaultGroups.COUNTRY = new v4_1.StringField('Country', UserDefaultGroups, 'Edm.String');
    /**
     * Static representation of the [[printingHeader]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserDefaultGroups.PRINTING_HEADER = new v4_1.StringField('PrintingHeader', UserDefaultGroups, 'Edm.String');
    /**
     * Static representation of the [[phoneNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserDefaultGroups.PHONE_NUMBER_1 = new v4_1.StringField('PhoneNumber1', UserDefaultGroups, 'Edm.String');
    /**
     * Static representation of the [[phoneNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserDefaultGroups.PHONE_NUMBER_2 = new v4_1.StringField('PhoneNumber2', UserDefaultGroups, 'Edm.String');
    /**
     * Static representation of the [[faxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserDefaultGroups.FAX_NUMBER = new v4_1.StringField('FaxNumber', UserDefaultGroups, 'Edm.String');
    /**
     * Static representation of the [[eMail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserDefaultGroups.E_MAIL = new v4_1.StringField('eMail', UserDefaultGroups, 'Edm.String');
    /**
     * Static representation of the [[addressinForeignLanguage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserDefaultGroups.ADDRESSIN_FOREIGN_LANGUAGE = new v4_1.StringField('AddressinForeignLanguage', UserDefaultGroups, 'Edm.String');
    /**
     * Static representation of the [[printingHeaderInForeignLangu]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserDefaultGroups.PRINTING_HEADER_IN_FOREIGN_LANGU = new v4_1.StringField('PrintingHeaderInForeignLangu', UserDefaultGroups, 'Edm.String');
    /**
     * Static representation of the [[phoneNumber1ForeignLang]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserDefaultGroups.PHONE_NUMBER_1_FOREIGN_LANG = new v4_1.StringField('PhoneNumber1ForeignLang', UserDefaultGroups, 'Edm.String');
    /**
     * Static representation of the [[phoneNumber2ForeignLang]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserDefaultGroups.PHONE_NUMBER_2_FOREIGN_LANG = new v4_1.StringField('PhoneNumber2ForeignLang', UserDefaultGroups, 'Edm.String');
    /**
     * Static representation of the [[faxNumberForeignLang]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserDefaultGroups.FAX_NUMBER_FOREIGN_LANG = new v4_1.StringField('FaxNumberForeignLang', UserDefaultGroups, 'Edm.String');
    /**
     * Static representation of the [[defaultTaxCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserDefaultGroups.DEFAULT_TAX_CODE = new v4_1.StringField('DefaultTaxCode', UserDefaultGroups, 'Edm.String');
    /**
     * Static representation of the [[additionalIdNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserDefaultGroups.ADDITIONAL_ID_NUMBER = new v4_1.StringField('AdditionalIdNumber', UserDefaultGroups, 'Edm.String');
    /**
     * Static representation of the [[userSignature]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserDefaultGroups.USER_SIGNATURE = new v4_1.NumberField('UserSignature', UserDefaultGroups, 'Edm.Int32');
    /**
     * Static representation of the [[bplid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserDefaultGroups.BPLID = new v4_1.NumberField('BPLID', UserDefaultGroups, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[warehouse2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserDefaultGroups.WAREHOUSE_2 = new v4_1.OneToOneLink('Warehouse2', UserDefaultGroups, Warehouses_1.Warehouses);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserDefaultGroups.SALES_PERSON = new v4_1.OneToOneLink('SalesPerson', UserDefaultGroups, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserDefaultGroups.BUSINESS_PARTNER = new v4_1.OneToOneLink('BusinessPartner', UserDefaultGroups, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[country2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserDefaultGroups.COUNTRY_2 = new v4_1.OneToOneLink('Country2', UserDefaultGroups, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[salesTaxCode]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserDefaultGroups.SALES_TAX_CODE = new v4_1.OneToOneLink('SalesTaxCode', UserDefaultGroups, SalesTaxCodes_1.SalesTaxCodes);
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserDefaultGroups.USER = new v4_1.OneToOneLink('User', UserDefaultGroups, Users_1.Users);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserDefaultGroups.BUSINESS_PLACE = new v4_1.OneToOneLink('BusinessPlace', UserDefaultGroups, BusinessPlaces_1.BusinessPlaces);
    /**
     * All fields of the UserDefaultGroups entity.
     */
    UserDefaultGroups._allFields = [
        UserDefaultGroups.CODE,
        UserDefaultGroups.NAME,
        UserDefaultGroups.WAREHOUSE,
        UserDefaultGroups.SALES_EMPLOYEE,
        UserDefaultGroups.B_PFOR_INVOICE_PAYMENT,
        UserDefaultGroups.CASH_ACCOUNT,
        UserDefaultGroups.CHECKING_ACCT,
        UserDefaultGroups.WINDOWS_COLOR,
        UserDefaultGroups.ADDRESS,
        UserDefaultGroups.COUNTRY,
        UserDefaultGroups.PRINTING_HEADER,
        UserDefaultGroups.PHONE_NUMBER_1,
        UserDefaultGroups.PHONE_NUMBER_2,
        UserDefaultGroups.FAX_NUMBER,
        UserDefaultGroups.E_MAIL,
        UserDefaultGroups.ADDRESSIN_FOREIGN_LANGUAGE,
        UserDefaultGroups.PRINTING_HEADER_IN_FOREIGN_LANGU,
        UserDefaultGroups.PHONE_NUMBER_1_FOREIGN_LANG,
        UserDefaultGroups.PHONE_NUMBER_2_FOREIGN_LANG,
        UserDefaultGroups.FAX_NUMBER_FOREIGN_LANG,
        UserDefaultGroups.DEFAULT_TAX_CODE,
        UserDefaultGroups.ADDITIONAL_ID_NUMBER,
        UserDefaultGroups.USER_SIGNATURE,
        UserDefaultGroups.BPLID,
        UserDefaultGroups.WAREHOUSE_2,
        UserDefaultGroups.SALES_PERSON,
        UserDefaultGroups.BUSINESS_PARTNER,
        UserDefaultGroups.COUNTRY_2,
        UserDefaultGroups.SALES_TAX_CODE,
        UserDefaultGroups.USER,
        UserDefaultGroups.BUSINESS_PLACE
    ];
    /**
     * All fields selector.
     */
    UserDefaultGroups.ALL_FIELDS = new v4_1.AllFields('*', UserDefaultGroups);
    /**
     * All key fields of the UserDefaultGroups entity.
     */
    UserDefaultGroups._keyFields = [UserDefaultGroups.CODE];
    /**
     * Mapping of all key field names to the respective static field property UserDefaultGroups.
     */
    UserDefaultGroups._keys = UserDefaultGroups._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(UserDefaultGroups = exports.UserDefaultGroups || (exports.UserDefaultGroups = {}));
exports.UserDefaultGroups = UserDefaultGroups;
//# sourceMappingURL=UserDefaultGroups.js.map