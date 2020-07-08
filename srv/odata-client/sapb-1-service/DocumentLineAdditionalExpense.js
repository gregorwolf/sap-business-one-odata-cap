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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentLineAdditionalExpense = exports.DocumentLineAdditionalExpenseField = exports.createDocumentLineAdditionalExpense = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var LineExpenseTaxJurisdiction_1 = require("./LineExpenseTaxJurisdiction");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[DocumentLineAdditionalExpense.build]] instead.
 */
function createDocumentLineAdditionalExpense(json) {
    return DocumentLineAdditionalExpense.build(json);
}
exports.createDocumentLineAdditionalExpense = createDocumentLineAdditionalExpense;
/**
 * DocumentLineAdditionalExpenseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DocumentLineAdditionalExpenseField = /** @class */ (function (_super) {
    __extends(DocumentLineAdditionalExpenseField, _super);
    function DocumentLineAdditionalExpenseField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[DocumentLineAdditionalExpense.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new v4_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.groupCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.groupCode = new v4_1.ComplexTypeNumberPropertyField('GroupCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.expenseCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expenseCode = new v4_1.ComplexTypeNumberPropertyField('ExpenseCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.lineTotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineTotal = new v4_1.ComplexTypeNumberPropertyField('LineTotal', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.lineTotalFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineTotalFc = new v4_1.ComplexTypeNumberPropertyField('LineTotalFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.lineTotalSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineTotalSys = new v4_1.ComplexTypeNumberPropertyField('LineTotalSys', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.paidToDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paidToDate = new v4_1.ComplexTypeNumberPropertyField('PaidToDate', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.paidToDateFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paidToDateFc = new v4_1.ComplexTypeNumberPropertyField('PaidToDateFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.paidToDateSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paidToDateSys = new v4_1.ComplexTypeNumberPropertyField('PaidToDateSys', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.vatGroup]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vatGroup = new v4_1.ComplexTypeStringPropertyField('VatGroup', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.taxPercent]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxPercent = new v4_1.ComplexTypeNumberPropertyField('TaxPercent', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.taxSum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxSum = new v4_1.ComplexTypeNumberPropertyField('TaxSum', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.taxSumFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxSumFc = new v4_1.ComplexTypeNumberPropertyField('TaxSumFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.taxSumSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxSumSys = new v4_1.ComplexTypeNumberPropertyField('TaxSumSys', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.deductibleTaxSum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.deductibleTaxSum = new v4_1.ComplexTypeNumberPropertyField('DeductibleTaxSum', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.deductibleTaxSumFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.deductibleTaxSumFc = new v4_1.ComplexTypeNumberPropertyField('DeductibleTaxSumFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.deductibleTaxSumSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.deductibleTaxSumSys = new v4_1.ComplexTypeNumberPropertyField('DeductibleTaxSumSys', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.taxCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxCode = new v4_1.ComplexTypeStringPropertyField('TaxCode', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.taxPaid]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxPaid = new v4_1.ComplexTypeNumberPropertyField('TaxPaid', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.taxPaidFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxPaidFc = new v4_1.ComplexTypeNumberPropertyField('TaxPaidFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.taxPaidSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxPaidSys = new v4_1.ComplexTypeNumberPropertyField('TaxPaidSys', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.equalizationTaxPercent]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.equalizationTaxPercent = new v4_1.ComplexTypeNumberPropertyField('EqualizationTaxPercent', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.equalizationTaxSum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.equalizationTaxSum = new v4_1.ComplexTypeNumberPropertyField('EqualizationTaxSum', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.equalizationTaxFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.equalizationTaxFc = new v4_1.ComplexTypeNumberPropertyField('EqualizationTaxFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.equalizationTaxSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.equalizationTaxSys = new v4_1.ComplexTypeNumberPropertyField('EqualizationTaxSys', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.taxTotalSum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxTotalSum = new v4_1.ComplexTypeNumberPropertyField('TaxTotalSum', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.taxTotalSumFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxTotalSumFc = new v4_1.ComplexTypeNumberPropertyField('TaxTotalSumFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.taxTotalSumSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxTotalSumSys = new v4_1.ComplexTypeNumberPropertyField('TaxTotalSumSys', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.baseGroup]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseGroup = new v4_1.ComplexTypeNumberPropertyField('BaseGroup', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.distributionRule]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule = new v4_1.ComplexTypeStringPropertyField('DistributionRule', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.project]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.project = new v4_1.ComplexTypeStringPropertyField('Project', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.distributionRule2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule2 = new v4_1.ComplexTypeStringPropertyField('DistributionRule2', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.distributionRule3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule3 = new v4_1.ComplexTypeStringPropertyField('DistributionRule3', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.distributionRule4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule4 = new v4_1.ComplexTypeStringPropertyField('DistributionRule4', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.distributionRule5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule5 = new v4_1.ComplexTypeStringPropertyField('DistributionRule5', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.lineExpenseTaxJurisdictions]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineExpenseTaxJurisdictions = new LineExpenseTaxJurisdiction_1.LineExpenseTaxJurisdictionField('LineExpenseTaxJurisdictions', _this);
        return _this;
    }
    return DocumentLineAdditionalExpenseField;
}(v4_1.ComplexTypeField));
exports.DocumentLineAdditionalExpenseField = DocumentLineAdditionalExpenseField;
var DocumentLineAdditionalExpense;
(function (DocumentLineAdditionalExpense) {
    function build(json) {
        return v4_1.createComplexType(json, {
            LineNumber: function (lineNumber) { return ({ lineNumber: v4_1.edmToTs(lineNumber, 'Edm.Int32') }); },
            GroupCode: function (groupCode) { return ({ groupCode: v4_1.edmToTs(groupCode, 'Edm.Int32') }); },
            ExpenseCode: function (expenseCode) { return ({ expenseCode: v4_1.edmToTs(expenseCode, 'Edm.Int32') }); },
            LineTotal: function (lineTotal) { return ({ lineTotal: v4_1.edmToTs(lineTotal, 'Edm.Double') }); },
            LineTotalFC: function (lineTotalFc) { return ({ lineTotalFc: v4_1.edmToTs(lineTotalFc, 'Edm.Double') }); },
            LineTotalSys: function (lineTotalSys) { return ({ lineTotalSys: v4_1.edmToTs(lineTotalSys, 'Edm.Double') }); },
            PaidToDate: function (paidToDate) { return ({ paidToDate: v4_1.edmToTs(paidToDate, 'Edm.Double') }); },
            PaidToDateFC: function (paidToDateFc) { return ({ paidToDateFc: v4_1.edmToTs(paidToDateFc, 'Edm.Double') }); },
            PaidToDateSys: function (paidToDateSys) { return ({ paidToDateSys: v4_1.edmToTs(paidToDateSys, 'Edm.Double') }); },
            VatGroup: function (vatGroup) { return ({ vatGroup: v4_1.edmToTs(vatGroup, 'Edm.String') }); },
            TaxPercent: function (taxPercent) { return ({ taxPercent: v4_1.edmToTs(taxPercent, 'Edm.Double') }); },
            TaxSum: function (taxSum) { return ({ taxSum: v4_1.edmToTs(taxSum, 'Edm.Double') }); },
            TaxSumFC: function (taxSumFc) { return ({ taxSumFc: v4_1.edmToTs(taxSumFc, 'Edm.Double') }); },
            TaxSumSys: function (taxSumSys) { return ({ taxSumSys: v4_1.edmToTs(taxSumSys, 'Edm.Double') }); },
            DeductibleTaxSum: function (deductibleTaxSum) { return ({ deductibleTaxSum: v4_1.edmToTs(deductibleTaxSum, 'Edm.Double') }); },
            DeductibleTaxSumFC: function (deductibleTaxSumFc) { return ({ deductibleTaxSumFc: v4_1.edmToTs(deductibleTaxSumFc, 'Edm.Double') }); },
            DeductibleTaxSumSys: function (deductibleTaxSumSys) { return ({ deductibleTaxSumSys: v4_1.edmToTs(deductibleTaxSumSys, 'Edm.Double') }); },
            TaxCode: function (taxCode) { return ({ taxCode: v4_1.edmToTs(taxCode, 'Edm.String') }); },
            TaxPaid: function (taxPaid) { return ({ taxPaid: v4_1.edmToTs(taxPaid, 'Edm.Double') }); },
            TaxPaidFC: function (taxPaidFc) { return ({ taxPaidFc: v4_1.edmToTs(taxPaidFc, 'Edm.Double') }); },
            TaxPaidSys: function (taxPaidSys) { return ({ taxPaidSys: v4_1.edmToTs(taxPaidSys, 'Edm.Double') }); },
            EqualizationTaxPercent: function (equalizationTaxPercent) { return ({ equalizationTaxPercent: v4_1.edmToTs(equalizationTaxPercent, 'Edm.Double') }); },
            EqualizationTaxSum: function (equalizationTaxSum) { return ({ equalizationTaxSum: v4_1.edmToTs(equalizationTaxSum, 'Edm.Double') }); },
            EqualizationTaxFC: function (equalizationTaxFc) { return ({ equalizationTaxFc: v4_1.edmToTs(equalizationTaxFc, 'Edm.Double') }); },
            EqualizationTaxSys: function (equalizationTaxSys) { return ({ equalizationTaxSys: v4_1.edmToTs(equalizationTaxSys, 'Edm.Double') }); },
            TaxTotalSum: function (taxTotalSum) { return ({ taxTotalSum: v4_1.edmToTs(taxTotalSum, 'Edm.Double') }); },
            TaxTotalSumFC: function (taxTotalSumFc) { return ({ taxTotalSumFc: v4_1.edmToTs(taxTotalSumFc, 'Edm.Double') }); },
            TaxTotalSumSys: function (taxTotalSumSys) { return ({ taxTotalSumSys: v4_1.edmToTs(taxTotalSumSys, 'Edm.Double') }); },
            BaseGroup: function (baseGroup) { return ({ baseGroup: v4_1.edmToTs(baseGroup, 'Edm.Int32') }); },
            DistributionRule: function (distributionRule) { return ({ distributionRule: v4_1.edmToTs(distributionRule, 'Edm.String') }); },
            Project: function (project) { return ({ project: v4_1.edmToTs(project, 'Edm.String') }); },
            DistributionRule2: function (distributionRule2) { return ({ distributionRule2: v4_1.edmToTs(distributionRule2, 'Edm.String') }); },
            DistributionRule3: function (distributionRule3) { return ({ distributionRule3: v4_1.edmToTs(distributionRule3, 'Edm.String') }); },
            DistributionRule4: function (distributionRule4) { return ({ distributionRule4: v4_1.edmToTs(distributionRule4, 'Edm.String') }); },
            DistributionRule5: function (distributionRule5) { return ({ distributionRule5: v4_1.edmToTs(distributionRule5, 'Edm.String') }); },
            LineExpenseTaxJurisdictions: function (lineExpenseTaxJurisdictions) { return ({ lineExpenseTaxJurisdictions: LineExpenseTaxJurisdiction_1.LineExpenseTaxJurisdiction.build(lineExpenseTaxJurisdictions) }); }
        });
    }
    DocumentLineAdditionalExpense.build = build;
})(DocumentLineAdditionalExpense = exports.DocumentLineAdditionalExpense || (exports.DocumentLineAdditionalExpense = {}));
//# sourceMappingURL=DocumentLineAdditionalExpense.js.map