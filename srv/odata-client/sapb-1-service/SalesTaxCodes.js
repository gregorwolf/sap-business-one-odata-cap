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
exports.SalesTaxCodes = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var SalesTaxCodesRequestBuilder_1 = require("./SalesTaxCodesRequestBuilder");
var SalesTaxCodesLine_1 = require("./SalesTaxCodesLine");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "SalesTaxCodes" of service "SAPB1".
 */
var SalesTaxCodes = /** @class */ (function (_super) {
    __extends(SalesTaxCodes, _super);
    function SalesTaxCodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SalesTaxCodes`.
     * @returns A builder that constructs instances of entity type `SalesTaxCodes`.
     */
    SalesTaxCodes.builder = function () {
        return v4_1.Entity.entityBuilder(SalesTaxCodes);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SalesTaxCodes` entity type.
     * @returns A `SalesTaxCodes` request builder.
     */
    SalesTaxCodes.requestBuilder = function () {
        return new SalesTaxCodesRequestBuilder_1.SalesTaxCodesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesTaxCodes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SalesTaxCodes`.
     */
    SalesTaxCodes.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, SalesTaxCodes);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SalesTaxCodes.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SalesTaxCodes.
     */
    SalesTaxCodes._entityName = 'SalesTaxCodes';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SalesTaxCodes.
     */
    SalesTaxCodes._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    SalesTaxCodes._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return SalesTaxCodes;
}(v4_1.Entity));
exports.SalesTaxCodes = SalesTaxCodes;
var UserDefaultGroups_1 = require("./UserDefaultGroups");
var Warehouses_1 = require("./Warehouses");
var Items_1 = require("./Items");
var BusinessPartners_1 = require("./BusinessPartners");
var Users_1 = require("./Users");
var ExpenseTypes_1 = require("./ExpenseTypes");
(function (SalesTaxCodes) {
    /**
     * Static representation of the [[userSignature]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxCodes.USER_SIGNATURE = new v4_1.NumberField('UserSignature', SalesTaxCodes, 'Edm.Int32');
    /**
     * Static representation of the [[rate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxCodes.RATE = new v4_1.NumberField('Rate', SalesTaxCodes, 'Edm.Double');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxCodes.NAME = new v4_1.StringField('Name', SalesTaxCodes, 'Edm.String');
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxCodes.CODE = new v4_1.StringField('Code', SalesTaxCodes, 'Edm.String');
    /**
     * Static representation of the [[salesTaxCodesLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxCodes.SALES_TAX_CODES_LINES = new v4_1.CollectionField('SalesTaxCodes_Lines', SalesTaxCodes, new SalesTaxCodesLine_1.SalesTaxCodesLineField('', SalesTaxCodes));
    /**
     * Static representation of the one-to-many navigation property [[userDefaultGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxCodes.USER_DEFAULT_GROUPS = new v4_1.OneToManyLink('UserDefaultGroups', SalesTaxCodes, UserDefaultGroups_1.UserDefaultGroups);
    /**
     * Static representation of the one-to-many navigation property [[warehouses]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxCodes.WAREHOUSES = new v4_1.OneToManyLink('Warehouses', SalesTaxCodes, Warehouses_1.Warehouses);
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxCodes.ITEMS = new v4_1.OneToManyLink('Items', SalesTaxCodes, Items_1.Items);
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxCodes.BUSINESS_PARTNERS = new v4_1.OneToManyLink('BusinessPartners', SalesTaxCodes, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxCodes.USER = new v4_1.OneToOneLink('User', SalesTaxCodes, Users_1.Users);
    /**
     * Static representation of the one-to-many navigation property [[expenseTypes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxCodes.EXPENSE_TYPES = new v4_1.OneToManyLink('ExpenseTypes', SalesTaxCodes, ExpenseTypes_1.ExpenseTypes);
    /**
     * All fields of the SalesTaxCodes entity.
     */
    SalesTaxCodes._allFields = [
        SalesTaxCodes.USER_SIGNATURE,
        SalesTaxCodes.RATE,
        SalesTaxCodes.NAME,
        SalesTaxCodes.CODE,
        SalesTaxCodes.SALES_TAX_CODES_LINES,
        SalesTaxCodes.USER_DEFAULT_GROUPS,
        SalesTaxCodes.WAREHOUSES,
        SalesTaxCodes.ITEMS,
        SalesTaxCodes.BUSINESS_PARTNERS,
        SalesTaxCodes.USER,
        SalesTaxCodes.EXPENSE_TYPES
    ];
    /**
     * All fields selector.
     */
    SalesTaxCodes.ALL_FIELDS = new v4_1.AllFields('*', SalesTaxCodes);
    /**
     * All key fields of the SalesTaxCodes entity.
     */
    SalesTaxCodes._keyFields = [SalesTaxCodes.CODE];
    /**
     * Mapping of all key field names to the respective static field property SalesTaxCodes.
     */
    SalesTaxCodes._keys = SalesTaxCodes._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SalesTaxCodes = exports.SalesTaxCodes || (exports.SalesTaxCodes = {}));
exports.SalesTaxCodes = SalesTaxCodes;
//# sourceMappingURL=SalesTaxCodes.js.map