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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentAdditionalExpense = exports.DocumentAdditionalExpenseField = exports.createDocumentAdditionalExpense = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var DocExpenseTaxJurisdiction_1 = require("./DocExpenseTaxJurisdiction");
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of DocumentAdditionalExpenseField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function DocumentAdditionalExpenseField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, DocumentAdditionalExpense) || this;
        /**
         * Representation of the [[DocumentAdditionalExpense.expenseCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expenseCode = new core_1.ComplexTypeNumberPropertyField('ExpenseCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentAdditionalExpense.lineTotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineTotal = new core_1.ComplexTypeNumberPropertyField('LineTotal', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.lineTotalFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineTotalFc = new core_1.ComplexTypeNumberPropertyField('LineTotalFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.lineTotalSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineTotalSys = new core_1.ComplexTypeNumberPropertyField('LineTotalSys', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.paidToDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paidToDate = new core_1.ComplexTypeNumberPropertyField('PaidToDate', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.paidToDateFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paidToDateFc = new core_1.ComplexTypeNumberPropertyField('PaidToDateFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.paidToDateSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paidToDateSys = new core_1.ComplexTypeNumberPropertyField('PaidToDateSys', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.remarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks = new core_1.ComplexTypeStringPropertyField('Remarks', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentAdditionalExpense.distributionMethod]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionMethod = new core_1.ComplexTypeEnumPropertyField('DistributionMethod', _this);
        /**
         * Representation of the [[DocumentAdditionalExpense.taxLiable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxLiable = new core_1.ComplexTypeEnumPropertyField('TaxLiable', _this);
        /**
         * Representation of the [[DocumentAdditionalExpense.vatGroup]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vatGroup = new core_1.ComplexTypeStringPropertyField('VatGroup', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentAdditionalExpense.taxPercent]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxPercent = new core_1.ComplexTypeNumberPropertyField('TaxPercent', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.taxSum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxSum = new core_1.ComplexTypeNumberPropertyField('TaxSum', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.taxSumFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxSumFc = new core_1.ComplexTypeNumberPropertyField('TaxSumFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.taxSumSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxSumSys = new core_1.ComplexTypeNumberPropertyField('TaxSumSys', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.deductibleTaxSum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.deductibleTaxSum = new core_1.ComplexTypeNumberPropertyField('DeductibleTaxSum', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.deductibleTaxSumFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.deductibleTaxSumFc = new core_1.ComplexTypeNumberPropertyField('DeductibleTaxSumFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.deductibleTaxSumSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.deductibleTaxSumSys = new core_1.ComplexTypeNumberPropertyField('DeductibleTaxSumSys', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.aquisitionTax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.aquisitionTax = new core_1.ComplexTypeEnumPropertyField('AquisitionTax', _this);
        /**
         * Representation of the [[DocumentAdditionalExpense.taxCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxCode = new core_1.ComplexTypeStringPropertyField('TaxCode', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentAdditionalExpense.taxType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxType = new core_1.ComplexTypeEnumPropertyField('TaxType', _this);
        /**
         * Representation of the [[DocumentAdditionalExpense.taxPaid]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxPaid = new core_1.ComplexTypeNumberPropertyField('TaxPaid', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.taxPaidFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxPaidFc = new core_1.ComplexTypeNumberPropertyField('TaxPaidFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.taxPaidSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxPaidSys = new core_1.ComplexTypeNumberPropertyField('TaxPaidSys', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.equalizationTaxPercent]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.equalizationTaxPercent = new core_1.ComplexTypeNumberPropertyField('EqualizationTaxPercent', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.equalizationTaxSum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.equalizationTaxSum = new core_1.ComplexTypeNumberPropertyField('EqualizationTaxSum', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.equalizationTaxFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.equalizationTaxFc = new core_1.ComplexTypeNumberPropertyField('EqualizationTaxFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.equalizationTaxSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.equalizationTaxSys = new core_1.ComplexTypeNumberPropertyField('EqualizationTaxSys', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.taxTotalSum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxTotalSum = new core_1.ComplexTypeNumberPropertyField('TaxTotalSum', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.taxTotalSumFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxTotalSumFc = new core_1.ComplexTypeNumberPropertyField('TaxTotalSumFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.taxTotalSumSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxTotalSumSys = new core_1.ComplexTypeNumberPropertyField('TaxTotalSumSys', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.baseDocEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseDocEntry = new core_1.ComplexTypeNumberPropertyField('BaseDocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentAdditionalExpense.baseDocLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseDocLine = new core_1.ComplexTypeNumberPropertyField('BaseDocLine', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentAdditionalExpense.baseDocType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseDocType = new core_1.ComplexTypeNumberPropertyField('BaseDocType', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentAdditionalExpense.baseDocumentReference]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseDocumentReference = new core_1.ComplexTypeNumberPropertyField('BaseDocumentReference', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentAdditionalExpense.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new core_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentAdditionalExpense.lastPurchasePrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lastPurchasePrice = new core_1.ComplexTypeEnumPropertyField('LastPurchasePrice', _this);
        /**
         * Representation of the [[DocumentAdditionalExpense.status]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.status = new core_1.ComplexTypeEnumPropertyField('Status', _this);
        /**
         * Representation of the [[DocumentAdditionalExpense.stock]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stock = new core_1.ComplexTypeEnumPropertyField('Stock', _this);
        /**
         * Representation of the [[DocumentAdditionalExpense.targetAbsEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.targetAbsEntry = new core_1.ComplexTypeNumberPropertyField('TargetAbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentAdditionalExpense.targetType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.targetType = new core_1.ComplexTypeNumberPropertyField('TargetType', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentAdditionalExpense.wtLiable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wtLiable = new core_1.ComplexTypeEnumPropertyField('WTLiable', _this);
        /**
         * Representation of the [[DocumentAdditionalExpense.distributionRule]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule = new core_1.ComplexTypeStringPropertyField('DistributionRule', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentAdditionalExpense.project]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.project = new core_1.ComplexTypeStringPropertyField('Project', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentAdditionalExpense.distributionRule2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule2 = new core_1.ComplexTypeStringPropertyField('DistributionRule2', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentAdditionalExpense.distributionRule3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule3 = new core_1.ComplexTypeStringPropertyField('DistributionRule3', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentAdditionalExpense.distributionRule4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule4 = new core_1.ComplexTypeStringPropertyField('DistributionRule4', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentAdditionalExpense.distributionRule5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule5 = new core_1.ComplexTypeStringPropertyField('DistributionRule5', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentAdditionalExpense.lineGross]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineGross = new core_1.ComplexTypeNumberPropertyField('LineGross', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.lineGrossSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineGrossSys = new core_1.ComplexTypeNumberPropertyField('LineGrossSys', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.lineGrossFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineGrossFc = new core_1.ComplexTypeNumberPropertyField('LineGrossFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentAdditionalExpense.docExpenseTaxJurisdictions]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docExpenseTaxJurisdictions = new core_1.CollectionField('DocExpenseTaxJurisdictions', _this, DocExpenseTaxJurisdiction_1.DocExpenseTaxJurisdiction);
        return _this;
    }
    return DocumentAdditionalExpenseField;
}(core_1.ComplexTypeField));
exports.DocumentAdditionalExpenseField = DocumentAdditionalExpenseField;
var DocumentAdditionalExpense;
(function (DocumentAdditionalExpense) {
    /**
     * Metadata information on all properties of the `DocumentAdditionalExpense` complex type.
     */
    DocumentAdditionalExpense._propertyMetadata = [{
            originalName: 'ExpenseCode',
            name: 'expenseCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'LineTotal',
            name: 'lineTotal',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'LineTotalFC',
            name: 'lineTotalFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'LineTotalSys',
            name: 'lineTotalSys',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'PaidToDate',
            name: 'paidToDate',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'PaidToDateFC',
            name: 'paidToDateFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'PaidToDateSys',
            name: 'paidToDateSys',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Remarks',
            name: 'remarks',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DistributionMethod',
            name: 'distributionMethod',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'TaxLiable',
            name: 'taxLiable',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'VatGroup',
            name: 'vatGroup',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxPercent',
            name: 'taxPercent',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TaxSum',
            name: 'taxSum',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TaxSumFC',
            name: 'taxSumFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TaxSumSys',
            name: 'taxSumSys',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'DeductibleTaxSum',
            name: 'deductibleTaxSum',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'DeductibleTaxSumFC',
            name: 'deductibleTaxSumFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'DeductibleTaxSumSys',
            name: 'deductibleTaxSumSys',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AquisitionTax',
            name: 'aquisitionTax',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'TaxCode',
            name: 'taxCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxType',
            name: 'taxType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'TaxPaid',
            name: 'taxPaid',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TaxPaidFC',
            name: 'taxPaidFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TaxPaidSys',
            name: 'taxPaidSys',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'EqualizationTaxPercent',
            name: 'equalizationTaxPercent',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'EqualizationTaxSum',
            name: 'equalizationTaxSum',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'EqualizationTaxFC',
            name: 'equalizationTaxFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'EqualizationTaxSys',
            name: 'equalizationTaxSys',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TaxTotalSum',
            name: 'taxTotalSum',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TaxTotalSumFC',
            name: 'taxTotalSumFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TaxTotalSumSys',
            name: 'taxTotalSumSys',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'BaseDocEntry',
            name: 'baseDocEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BaseDocLine',
            name: 'baseDocLine',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BaseDocType',
            name: 'baseDocType',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BaseDocumentReference',
            name: 'baseDocumentReference',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'LineNum',
            name: 'lineNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'LastPurchasePrice',
            name: 'lastPurchasePrice',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Status',
            name: 'status',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Stock',
            name: 'stock',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'TargetAbsEntry',
            name: 'targetAbsEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'TargetType',
            name: 'targetType',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'WTLiable',
            name: 'wtLiable',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'DistributionRule',
            name: 'distributionRule',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Project',
            name: 'project',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DistributionRule2',
            name: 'distributionRule2',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DistributionRule3',
            name: 'distributionRule3',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DistributionRule4',
            name: 'distributionRule4',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DistributionRule5',
            name: 'distributionRule5',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'LineGross',
            name: 'lineGross',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'LineGrossSys',
            name: 'lineGrossSys',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'LineGrossFC',
            name: 'lineGrossFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'DocExpenseTaxJurisdictions',
            name: 'docExpenseTaxJurisdictions',
            type: DocExpenseTaxJurisdiction_1.DocExpenseTaxJurisdiction,
            isCollection: true
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, DocumentAdditionalExpense);
    }
    DocumentAdditionalExpense.build = build;
})(DocumentAdditionalExpense = exports.DocumentAdditionalExpense || (exports.DocumentAdditionalExpense = {}));
//# sourceMappingURL=DocumentAdditionalExpense.js.map