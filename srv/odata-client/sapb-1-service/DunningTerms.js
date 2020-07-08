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
exports.DunningTerms = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var DunningTermsRequestBuilder_1 = require("./DunningTermsRequestBuilder");
var DunningTermLine_1 = require("./DunningTermLine");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "DunningTerms" of service "SAPB1".
 */
var DunningTerms = /** @class */ (function (_super) {
    __extends(DunningTerms, _super);
    function DunningTerms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `DunningTerms`.
     * @returns A builder that constructs instances of entity type `DunningTerms`.
     */
    DunningTerms.builder = function () {
        return v4_1.Entity.entityBuilder(DunningTerms);
    };
    /**
     * Returns a request builder to construct requests for operations on the `DunningTerms` entity type.
     * @returns A `DunningTerms` request builder.
     */
    DunningTerms.requestBuilder = function () {
        return new DunningTermsRequestBuilder_1.DunningTermsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DunningTerms`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DunningTerms`.
     */
    DunningTerms.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, DunningTerms);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    DunningTerms.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for DunningTerms.
     */
    DunningTerms._entityName = 'DunningTerms';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DunningTerms.
     */
    DunningTerms._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    DunningTerms._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return DunningTerms;
}(v4_1.Entity));
exports.DunningTerms = DunningTerms;
var BusinessPartners_1 = require("./BusinessPartners");
var ChartOfAccounts_1 = require("./ChartOfAccounts");
(function (DunningTerms) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DunningTerms.CODE = new v4_1.StringField('Code', DunningTerms, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DunningTerms.NAME = new v4_1.StringField('Name', DunningTerms, 'Edm.String');
    /**
     * Static representation of the [[daysInYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DunningTerms.DAYS_IN_YEAR = new v4_1.NumberField('DaysInYear', DunningTerms, 'Edm.Int32');
    /**
     * Static representation of the [[daysInMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DunningTerms.DAYS_IN_MONTH = new v4_1.NumberField('DaysInMonth', DunningTerms, 'Edm.Int32');
    /**
     * Static representation of the [[yearlyInterestRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DunningTerms.YEARLY_INTEREST_RATE = new v4_1.NumberField('YearlyInterestRate', DunningTerms, 'Edm.Double');
    /**
     * Static representation of the [[letterFee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DunningTerms.LETTER_FEE = new v4_1.NumberField('LetterFee', DunningTerms, 'Edm.Double');
    /**
     * Static representation of the [[letterFeeCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DunningTerms.LETTER_FEE_CURRENCY = new v4_1.StringField('LetterFeeCurrency', DunningTerms, 'Edm.String');
    /**
     * Static representation of the [[minimumBalance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DunningTerms.MINIMUM_BALANCE = new v4_1.NumberField('MinimumBalance', DunningTerms, 'Edm.Double');
    /**
     * Static representation of the [[minimumBalanceCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DunningTerms.MINIMUM_BALANCE_CURRENCY = new v4_1.StringField('MinimumBalanceCurrency', DunningTerms, 'Edm.String');
    /**
     * Static representation of the [[interestAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DunningTerms.INTEREST_ACCOUNT = new v4_1.StringField('InterestAccount', DunningTerms, 'Edm.String');
    /**
     * Static representation of the [[feeAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DunningTerms.FEE_ACCOUNT = new v4_1.StringField('FeeAccount', DunningTerms, 'Edm.String');
    /**
     * Static representation of the [[dunningTermLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DunningTerms.DUNNING_TERM_LINES = new v4_1.CollectionField('DunningTermLines', DunningTerms, new DunningTermLine_1.DunningTermLineField('', DunningTerms));
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DunningTerms.BUSINESS_PARTNERS = new v4_1.OneToManyLink('BusinessPartners', DunningTerms, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DunningTerms.CHART_OF_ACCOUNT = new v4_1.OneToOneLink('ChartOfAccount', DunningTerms, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * All fields of the DunningTerms entity.
     */
    DunningTerms._allFields = [
        DunningTerms.CODE,
        DunningTerms.NAME,
        DunningTerms.DAYS_IN_YEAR,
        DunningTerms.DAYS_IN_MONTH,
        DunningTerms.YEARLY_INTEREST_RATE,
        DunningTerms.LETTER_FEE,
        DunningTerms.LETTER_FEE_CURRENCY,
        DunningTerms.MINIMUM_BALANCE,
        DunningTerms.MINIMUM_BALANCE_CURRENCY,
        DunningTerms.INTEREST_ACCOUNT,
        DunningTerms.FEE_ACCOUNT,
        DunningTerms.DUNNING_TERM_LINES,
        DunningTerms.BUSINESS_PARTNERS,
        DunningTerms.CHART_OF_ACCOUNT
    ];
    /**
     * All fields selector.
     */
    DunningTerms.ALL_FIELDS = new v4_1.AllFields('*', DunningTerms);
    /**
     * All key fields of the DunningTerms entity.
     */
    DunningTerms._keyFields = [DunningTerms.CODE];
    /**
     * Mapping of all key field names to the respective static field property DunningTerms.
     */
    DunningTerms._keys = DunningTerms._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(DunningTerms = exports.DunningTerms || (exports.DunningTerms = {}));
exports.DunningTerms = DunningTerms;
//# sourceMappingURL=DunningTerms.js.map