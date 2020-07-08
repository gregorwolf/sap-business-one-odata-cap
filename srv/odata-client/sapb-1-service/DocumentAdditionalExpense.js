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
exports.DocumentAdditionalExpense = exports.DocumentAdditionalExpenseField = exports.createDocumentAdditionalExpense = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var DocExpenseTaxJurisdiction_1 = require("./DocExpenseTaxJurisdiction");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[DocumentAdditionalExpense.build]] instead.
 */
function createDocumentAdditionalExpense(json) {
    return DocumentAdditionalExpense.build(json);
}
exports.createDocumentAdditionalExpense = createDocumentAdditionalExpense;
/**
 * DocumentAdditionalExpenseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DocumentAdditionalExpenseField = /** @class */ (function (_super) {
    __extends(DocumentAdditionalExpenseField, _super);
    function DocumentAdditionalExpenseField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[DocumentAdditionalExpense.expenseCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expenseCode = new v4_1.ComplexTypeNumberPropertyField('ExpenseCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentAdditionalExpense.lineTotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineTotal = new v4_1.ComplexTypeNumberPropertyField('LineTotal', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.lineTotalFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineTotalFc = new v4_1.ComplexTypeNumberPropertyField('LineTotalFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.lineTotalSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineTotalSys = new v4_1.ComplexTypeNumberPropertyField('LineTotalSys', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.paidToDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paidToDate = new v4_1.ComplexTypeNumberPropertyField('PaidToDate', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.paidToDateFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paidToDateFc = new v4_1.ComplexTypeNumberPropertyField('PaidToDateFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.paidToDateSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paidToDateSys = new v4_1.ComplexTypeNumberPropertyField('PaidToDateSys', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.remarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks = new v4_1.ComplexTypeStringPropertyField('Remarks', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentAdditionalExpense.vatGroup]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vatGroup = new v4_1.ComplexTypeStringPropertyField('VatGroup', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentAdditionalExpense.taxPercent]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxPercent = new v4_1.ComplexTypeNumberPropertyField('TaxPercent', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.taxSum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxSum = new v4_1.ComplexTypeNumberPropertyField('TaxSum', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.taxSumFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxSumFc = new v4_1.ComplexTypeNumberPropertyField('TaxSumFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.taxSumSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxSumSys = new v4_1.ComplexTypeNumberPropertyField('TaxSumSys', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.deductibleTaxSum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.deductibleTaxSum = new v4_1.ComplexTypeNumberPropertyField('DeductibleTaxSum', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.deductibleTaxSumFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.deductibleTaxSumFc = new v4_1.ComplexTypeNumberPropertyField('DeductibleTaxSumFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.deductibleTaxSumSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.deductibleTaxSumSys = new v4_1.ComplexTypeNumberPropertyField('DeductibleTaxSumSys', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.taxCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxCode = new v4_1.ComplexTypeStringPropertyField('TaxCode', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentAdditionalExpense.taxPaid]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxPaid = new v4_1.ComplexTypeNumberPropertyField('TaxPaid', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.taxPaidFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxPaidFc = new v4_1.ComplexTypeNumberPropertyField('TaxPaidFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.taxPaidSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxPaidSys = new v4_1.ComplexTypeNumberPropertyField('TaxPaidSys', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.equalizationTaxPercent]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.equalizationTaxPercent = new v4_1.ComplexTypeNumberPropertyField('EqualizationTaxPercent', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.equalizationTaxSum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.equalizationTaxSum = new v4_1.ComplexTypeNumberPropertyField('EqualizationTaxSum', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.equalizationTaxFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.equalizationTaxFc = new v4_1.ComplexTypeNumberPropertyField('EqualizationTaxFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.equalizationTaxSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.equalizationTaxSys = new v4_1.ComplexTypeNumberPropertyField('EqualizationTaxSys', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.taxTotalSum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxTotalSum = new v4_1.ComplexTypeNumberPropertyField('TaxTotalSum', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.taxTotalSumFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxTotalSumFc = new v4_1.ComplexTypeNumberPropertyField('TaxTotalSumFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.taxTotalSumSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxTotalSumSys = new v4_1.ComplexTypeNumberPropertyField('TaxTotalSumSys', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.baseDocEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseDocEntry = new v4_1.ComplexTypeNumberPropertyField('BaseDocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentAdditionalExpense.baseDocLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseDocLine = new v4_1.ComplexTypeNumberPropertyField('BaseDocLine', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentAdditionalExpense.baseDocType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseDocType = new v4_1.ComplexTypeNumberPropertyField('BaseDocType', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentAdditionalExpense.baseDocumentReference]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseDocumentReference = new v4_1.ComplexTypeNumberPropertyField('BaseDocumentReference', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentAdditionalExpense.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new v4_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentAdditionalExpense.targetAbsEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.targetAbsEntry = new v4_1.ComplexTypeNumberPropertyField('TargetAbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentAdditionalExpense.targetType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.targetType = new v4_1.ComplexTypeNumberPropertyField('TargetType', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentAdditionalExpense.distributionRule]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule = new v4_1.ComplexTypeStringPropertyField('DistributionRule', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentAdditionalExpense.project]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.project = new v4_1.ComplexTypeStringPropertyField('Project', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentAdditionalExpense.distributionRule2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule2 = new v4_1.ComplexTypeStringPropertyField('DistributionRule2', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentAdditionalExpense.distributionRule3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule3 = new v4_1.ComplexTypeStringPropertyField('DistributionRule3', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentAdditionalExpense.distributionRule4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule4 = new v4_1.ComplexTypeStringPropertyField('DistributionRule4', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentAdditionalExpense.distributionRule5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule5 = new v4_1.ComplexTypeStringPropertyField('DistributionRule5', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentAdditionalExpense.lineGross]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineGross = new v4_1.ComplexTypeNumberPropertyField('LineGross', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.lineGrossSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineGrossSys = new v4_1.ComplexTypeNumberPropertyField('LineGrossSys', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.lineGrossFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineGrossFc = new v4_1.ComplexTypeNumberPropertyField('LineGrossFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.docExpenseTaxJurisdictions]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docExpenseTaxJurisdictions = new DocExpenseTaxJurisdiction_1.DocExpenseTaxJurisdictionField('DocExpenseTaxJurisdictions', _this);
        return _this;
    }
    return DocumentAdditionalExpenseField;
}(v4_1.ComplexTypeField));
exports.DocumentAdditionalExpenseField = DocumentAdditionalExpenseField;
var DocumentAdditionalExpense;
(function (DocumentAdditionalExpense) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ExpenseCode: function (expenseCode) { return ({ expenseCode: v4_1.edmToTs(expenseCode, 'Edm.Int32') }); },
            LineTotal: function (lineTotal) { return ({ lineTotal: v4_1.edmToTs(lineTotal, 'Edm.Double') }); },
            LineTotalFC: function (lineTotalFc) { return ({ lineTotalFc: v4_1.edmToTs(lineTotalFc, 'Edm.Double') }); },
            LineTotalSys: function (lineTotalSys) { return ({ lineTotalSys: v4_1.edmToTs(lineTotalSys, 'Edm.Double') }); },
            PaidToDate: function (paidToDate) { return ({ paidToDate: v4_1.edmToTs(paidToDate, 'Edm.Double') }); },
            PaidToDateFC: function (paidToDateFc) { return ({ paidToDateFc: v4_1.edmToTs(paidToDateFc, 'Edm.Double') }); },
            PaidToDateSys: function (paidToDateSys) { return ({ paidToDateSys: v4_1.edmToTs(paidToDateSys, 'Edm.Double') }); },
            Remarks: function (remarks) { return ({ remarks: v4_1.edmToTs(remarks, 'Edm.String') }); },
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
            BaseDocEntry: function (baseDocEntry) { return ({ baseDocEntry: v4_1.edmToTs(baseDocEntry, 'Edm.Int32') }); },
            BaseDocLine: function (baseDocLine) { return ({ baseDocLine: v4_1.edmToTs(baseDocLine, 'Edm.Int32') }); },
            BaseDocType: function (baseDocType) { return ({ baseDocType: v4_1.edmToTs(baseDocType, 'Edm.Int32') }); },
            BaseDocumentReference: function (baseDocumentReference) { return ({ baseDocumentReference: v4_1.edmToTs(baseDocumentReference, 'Edm.Int32') }); },
            LineNum: function (lineNum) { return ({ lineNum: v4_1.edmToTs(lineNum, 'Edm.Int32') }); },
            TargetAbsEntry: function (targetAbsEntry) { return ({ targetAbsEntry: v4_1.edmToTs(targetAbsEntry, 'Edm.Int32') }); },
            TargetType: function (targetType) { return ({ targetType: v4_1.edmToTs(targetType, 'Edm.Int32') }); },
            DistributionRule: function (distributionRule) { return ({ distributionRule: v4_1.edmToTs(distributionRule, 'Edm.String') }); },
            Project: function (project) { return ({ project: v4_1.edmToTs(project, 'Edm.String') }); },
            DistributionRule2: function (distributionRule2) { return ({ distributionRule2: v4_1.edmToTs(distributionRule2, 'Edm.String') }); },
            DistributionRule3: function (distributionRule3) { return ({ distributionRule3: v4_1.edmToTs(distributionRule3, 'Edm.String') }); },
            DistributionRule4: function (distributionRule4) { return ({ distributionRule4: v4_1.edmToTs(distributionRule4, 'Edm.String') }); },
            DistributionRule5: function (distributionRule5) { return ({ distributionRule5: v4_1.edmToTs(distributionRule5, 'Edm.String') }); },
            LineGross: function (lineGross) { return ({ lineGross: v4_1.edmToTs(lineGross, 'Edm.Double') }); },
            LineGrossSys: function (lineGrossSys) { return ({ lineGrossSys: v4_1.edmToTs(lineGrossSys, 'Edm.Double') }); },
            LineGrossFC: function (lineGrossFc) { return ({ lineGrossFc: v4_1.edmToTs(lineGrossFc, 'Edm.Double') }); },
            DocExpenseTaxJurisdictions: function (docExpenseTaxJurisdictions) { return ({ docExpenseTaxJurisdictions: DocExpenseTaxJurisdiction_1.DocExpenseTaxJurisdiction.build(docExpenseTaxJurisdictions) }); }
        });
    }
    DocumentAdditionalExpense.build = build;
})(DocumentAdditionalExpense = exports.DocumentAdditionalExpense || (exports.DocumentAdditionalExpense = {}));
//# sourceMappingURL=DocumentAdditionalExpense.js.map