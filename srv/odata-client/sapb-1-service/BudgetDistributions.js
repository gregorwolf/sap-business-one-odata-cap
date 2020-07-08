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
exports.BudgetDistributions = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BudgetDistributionsRequestBuilder_1 = require("./BudgetDistributionsRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "BudgetDistributions" of service "SAPB1".
 */
var BudgetDistributions = /** @class */ (function (_super) {
    __extends(BudgetDistributions, _super);
    function BudgetDistributions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `BudgetDistributions`.
     * @returns A builder that constructs instances of entity type `BudgetDistributions`.
     */
    BudgetDistributions.builder = function () {
        return v4_1.Entity.entityBuilder(BudgetDistributions);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BudgetDistributions` entity type.
     * @returns A `BudgetDistributions` request builder.
     */
    BudgetDistributions.requestBuilder = function () {
        return new BudgetDistributionsRequestBuilder_1.BudgetDistributionsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BudgetDistributions`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BudgetDistributions`.
     */
    BudgetDistributions.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, BudgetDistributions);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BudgetDistributions.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BudgetDistributions.
     */
    BudgetDistributions._entityName = 'BudgetDistributions';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BudgetDistributions.
     */
    BudgetDistributions._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    BudgetDistributions._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return BudgetDistributions;
}(v4_1.Entity));
exports.BudgetDistributions = BudgetDistributions;
var Budgets_1 = require("./Budgets");
(function (BudgetDistributions) {
    /**
     * Static representation of the [[september]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetDistributions.SEPTEMBER = new v4_1.NumberField('September', BudgetDistributions, 'Edm.Double');
    /**
     * Static representation of the [[august]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetDistributions.AUGUST = new v4_1.NumberField('August', BudgetDistributions, 'Edm.Double');
    /**
     * Static representation of the [[july]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetDistributions.JULY = new v4_1.NumberField('July', BudgetDistributions, 'Edm.Double');
    /**
     * Static representation of the [[june]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetDistributions.JUNE = new v4_1.NumberField('June', BudgetDistributions, 'Edm.Double');
    /**
     * Static representation of the [[may]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetDistributions.MAY = new v4_1.NumberField('May', BudgetDistributions, 'Edm.Double');
    /**
     * Static representation of the [[april]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetDistributions.APRIL = new v4_1.NumberField('April', BudgetDistributions, 'Edm.Double');
    /**
     * Static representation of the [[march]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetDistributions.MARCH = new v4_1.NumberField('March', BudgetDistributions, 'Edm.Double');
    /**
     * Static representation of the [[february]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetDistributions.FEBRUARY = new v4_1.NumberField('February', BudgetDistributions, 'Edm.Double');
    /**
     * Static representation of the [[december]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetDistributions.DECEMBER = new v4_1.NumberField('December', BudgetDistributions, 'Edm.Double');
    /**
     * Static representation of the [[november]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetDistributions.NOVEMBER = new v4_1.NumberField('November', BudgetDistributions, 'Edm.Double');
    /**
     * Static representation of the [[october]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetDistributions.OCTOBER = new v4_1.NumberField('October', BudgetDistributions, 'Edm.Double');
    /**
     * Static representation of the [[january]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetDistributions.JANUARY = new v4_1.NumberField('January', BudgetDistributions, 'Edm.Double');
    /**
     * Static representation of the [[budgetAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetDistributions.BUDGET_AMOUNT = new v4_1.NumberField('BudgetAmount', BudgetDistributions, 'Edm.Double');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetDistributions.DESCRIPTION = new v4_1.StringField('Description', BudgetDistributions, 'Edm.String');
    /**
     * Static representation of the [[divisionCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetDistributions.DIVISION_CODE = new v4_1.NumberField('DivisionCode', BudgetDistributions, 'Edm.Int32');
    /**
     * Static representation of the one-to-many navigation property [[budgets]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetDistributions.BUDGETS = new v4_1.OneToManyLink('Budgets', BudgetDistributions, Budgets_1.Budgets);
    /**
     * All fields of the BudgetDistributions entity.
     */
    BudgetDistributions._allFields = [
        BudgetDistributions.SEPTEMBER,
        BudgetDistributions.AUGUST,
        BudgetDistributions.JULY,
        BudgetDistributions.JUNE,
        BudgetDistributions.MAY,
        BudgetDistributions.APRIL,
        BudgetDistributions.MARCH,
        BudgetDistributions.FEBRUARY,
        BudgetDistributions.DECEMBER,
        BudgetDistributions.NOVEMBER,
        BudgetDistributions.OCTOBER,
        BudgetDistributions.JANUARY,
        BudgetDistributions.BUDGET_AMOUNT,
        BudgetDistributions.DESCRIPTION,
        BudgetDistributions.DIVISION_CODE,
        BudgetDistributions.BUDGETS
    ];
    /**
     * All fields selector.
     */
    BudgetDistributions.ALL_FIELDS = new v4_1.AllFields('*', BudgetDistributions);
    /**
     * All key fields of the BudgetDistributions entity.
     */
    BudgetDistributions._keyFields = [BudgetDistributions.DIVISION_CODE];
    /**
     * Mapping of all key field names to the respective static field property BudgetDistributions.
     */
    BudgetDistributions._keys = BudgetDistributions._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BudgetDistributions = exports.BudgetDistributions || (exports.BudgetDistributions = {}));
exports.BudgetDistributions = BudgetDistributions;
//# sourceMappingURL=BudgetDistributions.js.map