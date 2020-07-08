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
exports.ExpenseTypes = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ExpenseTypesRequestBuilder_1 = require("./ExpenseTypesRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "ExpenseTypes" of service "SAPB1".
 */
var ExpenseTypes = /** @class */ (function (_super) {
    __extends(ExpenseTypes, _super);
    function ExpenseTypes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ExpenseTypes`.
     * @returns A builder that constructs instances of entity type `ExpenseTypes`.
     */
    ExpenseTypes.builder = function () {
        return v4_1.Entity.entityBuilder(ExpenseTypes);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ExpenseTypes` entity type.
     * @returns A `ExpenseTypes` request builder.
     */
    ExpenseTypes.requestBuilder = function () {
        return new ExpenseTypesRequestBuilder_1.ExpenseTypesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExpenseTypes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ExpenseTypes`.
     */
    ExpenseTypes.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, ExpenseTypes);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ExpenseTypes.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ExpenseTypes.
     */
    ExpenseTypes._entityName = 'ExpenseTypes';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ExpenseTypes.
     */
    ExpenseTypes._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    ExpenseTypes._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return ExpenseTypes;
}(v4_1.Entity));
exports.ExpenseTypes = ExpenseTypes;
var ChartOfAccounts_1 = require("./ChartOfAccounts");
var SalesTaxCodes_1 = require("./SalesTaxCodes");
(function (ExpenseTypes) {
    /**
     * Static representation of the [[expenseType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExpenseTypes.EXPENSE_TYPE = new v4_1.StringField('ExpenseType', ExpenseTypes, 'Edm.String');
    /**
     * Static representation of the [[expenseName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExpenseTypes.EXPENSE_NAME = new v4_1.StringField('ExpenseName', ExpenseTypes, 'Edm.String');
    /**
     * Static representation of the [[expenseAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExpenseTypes.EXPENSE_ACCOUNT = new v4_1.StringField('ExpenseAccount', ExpenseTypes, 'Edm.String');
    /**
     * Static representation of the [[vatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExpenseTypes.VAT_GROUP = new v4_1.StringField('VatGroup', ExpenseTypes, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExpenseTypes.CHART_OF_ACCOUNT = new v4_1.OneToOneLink('ChartOfAccount', ExpenseTypes, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[salesTaxCode]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExpenseTypes.SALES_TAX_CODE = new v4_1.OneToOneLink('SalesTaxCode', ExpenseTypes, SalesTaxCodes_1.SalesTaxCodes);
    /**
     * All fields of the ExpenseTypes entity.
     */
    ExpenseTypes._allFields = [
        ExpenseTypes.EXPENSE_TYPE,
        ExpenseTypes.EXPENSE_NAME,
        ExpenseTypes.EXPENSE_ACCOUNT,
        ExpenseTypes.VAT_GROUP,
        ExpenseTypes.CHART_OF_ACCOUNT,
        ExpenseTypes.SALES_TAX_CODE
    ];
    /**
     * All fields selector.
     */
    ExpenseTypes.ALL_FIELDS = new v4_1.AllFields('*', ExpenseTypes);
    /**
     * All key fields of the ExpenseTypes entity.
     */
    ExpenseTypes._keyFields = [ExpenseTypes.EXPENSE_TYPE];
    /**
     * Mapping of all key field names to the respective static field property ExpenseTypes.
     */
    ExpenseTypes._keys = ExpenseTypes._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ExpenseTypes = exports.ExpenseTypes || (exports.ExpenseTypes = {}));
exports.ExpenseTypes = ExpenseTypes;
//# sourceMappingURL=ExpenseTypes.js.map