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
exports.Deposits = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var DepositsRequestBuilder_1 = require("./DepositsRequestBuilder");
var CheckLine_1 = require("./CheckLine");
var CreditLine_1 = require("./CreditLine");
var BoeLine_1 = require("./BoeLine");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "Deposits" of service "SAPB1".
 */
var Deposits = /** @class */ (function (_super) {
    __extends(Deposits, _super);
    function Deposits() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Deposits`.
     * @returns A builder that constructs instances of entity type `Deposits`.
     */
    Deposits.builder = function () {
        return v4_1.Entity.entityBuilder(Deposits);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Deposits` entity type.
     * @returns A `Deposits` request builder.
     */
    Deposits.requestBuilder = function () {
        return new DepositsRequestBuilder_1.DepositsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Deposits`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Deposits`.
     */
    Deposits.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, Deposits);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Deposits.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Deposits.
     */
    Deposits._entityName = 'Deposits';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Deposits.
     */
    Deposits._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    Deposits._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Deposits;
}(v4_1.Entity));
exports.Deposits = Deposits;
var VatGroups_1 = require("./VatGroups");
var Projects_1 = require("./Projects");
var DistributionRules_1 = require("./DistributionRules");
var BusinessPlaces_1 = require("./BusinessPlaces");
(function (Deposits) {
    /**
     * Static representation of the [[depositNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.DEPOSIT_NUMBER = new v4_1.NumberField('DepositNumber', Deposits, 'Edm.Int32');
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.ABS_ENTRY = new v4_1.NumberField('AbsEntry', Deposits, 'Edm.Int32');
    /**
     * Static representation of the [[depositDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.DEPOSIT_DATE = new v4_1.DateField('DepositDate', Deposits, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[depositCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.DEPOSIT_CURRENCY = new v4_1.StringField('DepositCurrency', Deposits, 'Edm.String');
    /**
     * Static representation of the [[depositAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.DEPOSIT_ACCOUNT = new v4_1.StringField('DepositAccount', Deposits, 'Edm.String');
    /**
     * Static representation of the [[depositorName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.DEPOSITOR_NAME = new v4_1.StringField('DepositorName', Deposits, 'Edm.String');
    /**
     * Static representation of the [[bank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.BANK = new v4_1.StringField('Bank', Deposits, 'Edm.String');
    /**
     * Static representation of the [[bankAccountNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.BANK_ACCOUNT_NUM = new v4_1.StringField('BankAccountNum', Deposits, 'Edm.String');
    /**
     * Static representation of the [[bankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.BANK_BRANCH = new v4_1.StringField('BankBranch', Deposits, 'Edm.String');
    /**
     * Static representation of the [[bankReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.BANK_REFERENCE = new v4_1.StringField('BankReference', Deposits, 'Edm.String');
    /**
     * Static representation of the [[journalRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.JOURNAL_REMARKS = new v4_1.StringField('JournalRemarks', Deposits, 'Edm.String');
    /**
     * Static representation of the [[totalLc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.TOTAL_LC = new v4_1.NumberField('TotalLC', Deposits, 'Edm.Double');
    /**
     * Static representation of the [[totalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.TOTAL_FC = new v4_1.NumberField('TotalFC', Deposits, 'Edm.Double');
    /**
     * Static representation of the [[totalSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.TOTAL_SC = new v4_1.NumberField('TotalSC', Deposits, 'Edm.Double');
    /**
     * Static representation of the [[allocationAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.ALLOCATION_ACCOUNT = new v4_1.StringField('AllocationAccount', Deposits, 'Edm.String');
    /**
     * Static representation of the [[docRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.DOC_RATE = new v4_1.NumberField('DocRate', Deposits, 'Edm.Double');
    /**
     * Static representation of the [[taxAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.TAX_ACCOUNT = new v4_1.StringField('TaxAccount', Deposits, 'Edm.String');
    /**
     * Static representation of the [[taxAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.TAX_AMOUNT = new v4_1.NumberField('TaxAmount', Deposits, 'Edm.Double');
    /**
     * Static representation of the [[commissionAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.COMMISSION_ACCOUNT = new v4_1.StringField('CommissionAccount', Deposits, 'Edm.String');
    /**
     * Static representation of the [[commission]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.COMMISSION = new v4_1.NumberField('Commission', Deposits, 'Edm.Double');
    /**
     * Static representation of the [[commissionDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.COMMISSION_DATE = new v4_1.DateField('CommissionDate', Deposits, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[taxCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.TAX_CODE = new v4_1.StringField('TaxCode', Deposits, 'Edm.String');
    /**
     * Static representation of the [[voucherAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.VOUCHER_ACCOUNT = new v4_1.StringField('VoucherAccount', Deposits, 'Edm.String');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.SERIES = new v4_1.NumberField('Series', Deposits, 'Edm.Int32');
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.PROJECT = new v4_1.StringField('Project', Deposits, 'Edm.String');
    /**
     * Static representation of the [[distributionRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.DISTRIBUTION_RULE = new v4_1.StringField('DistributionRule', Deposits, 'Edm.String');
    /**
     * Static representation of the [[distributionRule2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.DISTRIBUTION_RULE_2 = new v4_1.StringField('DistributionRule2', Deposits, 'Edm.String');
    /**
     * Static representation of the [[distributionRule3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.DISTRIBUTION_RULE_3 = new v4_1.StringField('DistributionRule3', Deposits, 'Edm.String');
    /**
     * Static representation of the [[distributionRule4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.DISTRIBUTION_RULE_4 = new v4_1.StringField('DistributionRule4', Deposits, 'Edm.String');
    /**
     * Static representation of the [[distributionRule5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.DISTRIBUTION_RULE_5 = new v4_1.StringField('DistributionRule5', Deposits, 'Edm.String');
    /**
     * Static representation of the [[commissionCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.COMMISSION_CURRENCY = new v4_1.StringField('CommissionCurrency', Deposits, 'Edm.String');
    /**
     * Static representation of the [[commissionSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.COMMISSION_SC = new v4_1.NumberField('CommissionSC', Deposits, 'Edm.Double');
    /**
     * Static representation of the [[commissionFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.COMMISSION_FC = new v4_1.NumberField('CommissionFC', Deposits, 'Edm.Double');
    /**
     * Static representation of the [[taxAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.TAX_AMOUNT_SC = new v4_1.NumberField('TaxAmountSC', Deposits, 'Edm.Double');
    /**
     * Static representation of the [[taxAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.TAX_AMOUNT_FC = new v4_1.NumberField('TaxAmountFC', Deposits, 'Edm.Double');
    /**
     * Static representation of the [[bplid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.BPLID = new v4_1.NumberField('BPLID', Deposits, 'Edm.Int32');
    /**
     * Static representation of the [[checkLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.CHECK_LINES = new v4_1.CollectionField('CheckLines', Deposits, new CheckLine_1.CheckLineField('', Deposits));
    /**
     * Static representation of the [[creditLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.CREDIT_LINES = new v4_1.CollectionField('CreditLines', Deposits, new CreditLine_1.CreditLineField('', Deposits));
    /**
     * Static representation of the [[boeLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.BOE_LINES = new v4_1.CollectionField('BOELines', Deposits, new BoeLine_1.BoeLineField('', Deposits));
    /**
     * Static representation of the one-to-one navigation property [[vatGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.VAT_GROUP = new v4_1.OneToOneLink('VatGroup', Deposits, VatGroups_1.VatGroups);
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.PROJECT_2 = new v4_1.OneToOneLink('Project2', Deposits, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[distributionRule6]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.DISTRIBUTION_RULE_6 = new v4_1.OneToOneLink('DistributionRule6', Deposits, DistributionRules_1.DistributionRules);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Deposits.BUSINESS_PLACE = new v4_1.OneToOneLink('BusinessPlace', Deposits, BusinessPlaces_1.BusinessPlaces);
    /**
     * All fields of the Deposits entity.
     */
    Deposits._allFields = [
        Deposits.DEPOSIT_NUMBER,
        Deposits.ABS_ENTRY,
        Deposits.DEPOSIT_DATE,
        Deposits.DEPOSIT_CURRENCY,
        Deposits.DEPOSIT_ACCOUNT,
        Deposits.DEPOSITOR_NAME,
        Deposits.BANK,
        Deposits.BANK_ACCOUNT_NUM,
        Deposits.BANK_BRANCH,
        Deposits.BANK_REFERENCE,
        Deposits.JOURNAL_REMARKS,
        Deposits.TOTAL_LC,
        Deposits.TOTAL_FC,
        Deposits.TOTAL_SC,
        Deposits.ALLOCATION_ACCOUNT,
        Deposits.DOC_RATE,
        Deposits.TAX_ACCOUNT,
        Deposits.TAX_AMOUNT,
        Deposits.COMMISSION_ACCOUNT,
        Deposits.COMMISSION,
        Deposits.COMMISSION_DATE,
        Deposits.TAX_CODE,
        Deposits.VOUCHER_ACCOUNT,
        Deposits.SERIES,
        Deposits.PROJECT,
        Deposits.DISTRIBUTION_RULE,
        Deposits.DISTRIBUTION_RULE_2,
        Deposits.DISTRIBUTION_RULE_3,
        Deposits.DISTRIBUTION_RULE_4,
        Deposits.DISTRIBUTION_RULE_5,
        Deposits.COMMISSION_CURRENCY,
        Deposits.COMMISSION_SC,
        Deposits.COMMISSION_FC,
        Deposits.TAX_AMOUNT_SC,
        Deposits.TAX_AMOUNT_FC,
        Deposits.BPLID,
        Deposits.CHECK_LINES,
        Deposits.CREDIT_LINES,
        Deposits.BOE_LINES,
        Deposits.VAT_GROUP,
        Deposits.PROJECT_2,
        Deposits.DISTRIBUTION_RULE_6,
        Deposits.BUSINESS_PLACE
    ];
    /**
     * All fields selector.
     */
    Deposits.ALL_FIELDS = new v4_1.AllFields('*', Deposits);
    /**
     * All key fields of the Deposits entity.
     */
    Deposits._keyFields = [Deposits.ABS_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property Deposits.
     */
    Deposits._keys = Deposits._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Deposits = exports.Deposits || (exports.Deposits = {}));
exports.Deposits = Deposits;
//# sourceMappingURL=Deposits.js.map