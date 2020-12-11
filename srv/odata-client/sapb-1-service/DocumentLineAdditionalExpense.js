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
exports.DocumentLineAdditionalExpense = exports.DocumentLineAdditionalExpenseField = exports.createDocumentLineAdditionalExpense = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var LineExpenseTaxJurisdiction_1 = require("./LineExpenseTaxJurisdiction");
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of DocumentLineAdditionalExpenseField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function DocumentLineAdditionalExpenseField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, DocumentLineAdditionalExpense) || this;
        /**
         * Representation of the [[DocumentLineAdditionalExpense.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new core_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.groupCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.groupCode = new core_1.ComplexTypeNumberPropertyField('GroupCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.expenseCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expenseCode = new core_1.ComplexTypeNumberPropertyField('ExpenseCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.lineTotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineTotal = new core_1.ComplexTypeNumberPropertyField('LineTotal', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.lineTotalFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineTotalFc = new core_1.ComplexTypeNumberPropertyField('LineTotalFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.lineTotalSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineTotalSys = new core_1.ComplexTypeNumberPropertyField('LineTotalSys', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.paidToDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paidToDate = new core_1.ComplexTypeNumberPropertyField('PaidToDate', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.paidToDateFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paidToDateFc = new core_1.ComplexTypeNumberPropertyField('PaidToDateFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.paidToDateSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paidToDateSys = new core_1.ComplexTypeNumberPropertyField('PaidToDateSys', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.taxLiable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxLiable = new core_1.ComplexTypeEnumPropertyField('TaxLiable', _this);
        /**
         * Representation of the [[DocumentLineAdditionalExpense.vatGroup]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vatGroup = new core_1.ComplexTypeStringPropertyField('VatGroup', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.taxPercent]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxPercent = new core_1.ComplexTypeNumberPropertyField('TaxPercent', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.taxSum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxSum = new core_1.ComplexTypeNumberPropertyField('TaxSum', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.taxSumFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxSumFc = new core_1.ComplexTypeNumberPropertyField('TaxSumFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.taxSumSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxSumSys = new core_1.ComplexTypeNumberPropertyField('TaxSumSys', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.deductibleTaxSum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.deductibleTaxSum = new core_1.ComplexTypeNumberPropertyField('DeductibleTaxSum', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.deductibleTaxSumFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.deductibleTaxSumFc = new core_1.ComplexTypeNumberPropertyField('DeductibleTaxSumFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.deductibleTaxSumSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.deductibleTaxSumSys = new core_1.ComplexTypeNumberPropertyField('DeductibleTaxSumSys', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.aquisitionTax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.aquisitionTax = new core_1.ComplexTypeEnumPropertyField('AquisitionTax', _this);
        /**
         * Representation of the [[DocumentLineAdditionalExpense.taxCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxCode = new core_1.ComplexTypeStringPropertyField('TaxCode', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.taxType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxType = new core_1.ComplexTypeEnumPropertyField('TaxType', _this);
        /**
         * Representation of the [[DocumentLineAdditionalExpense.taxPaid]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxPaid = new core_1.ComplexTypeNumberPropertyField('TaxPaid', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.taxPaidFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxPaidFc = new core_1.ComplexTypeNumberPropertyField('TaxPaidFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.taxPaidSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxPaidSys = new core_1.ComplexTypeNumberPropertyField('TaxPaidSys', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.equalizationTaxPercent]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.equalizationTaxPercent = new core_1.ComplexTypeNumberPropertyField('EqualizationTaxPercent', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.equalizationTaxSum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.equalizationTaxSum = new core_1.ComplexTypeNumberPropertyField('EqualizationTaxSum', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.equalizationTaxFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.equalizationTaxFc = new core_1.ComplexTypeNumberPropertyField('EqualizationTaxFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.equalizationTaxSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.equalizationTaxSys = new core_1.ComplexTypeNumberPropertyField('EqualizationTaxSys', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.taxTotalSum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxTotalSum = new core_1.ComplexTypeNumberPropertyField('TaxTotalSum', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.taxTotalSumFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxTotalSumFc = new core_1.ComplexTypeNumberPropertyField('TaxTotalSumFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.taxTotalSumSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxTotalSumSys = new core_1.ComplexTypeNumberPropertyField('TaxTotalSumSys', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.wtLiable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wtLiable = new core_1.ComplexTypeEnumPropertyField('WTLiable', _this);
        /**
         * Representation of the [[DocumentLineAdditionalExpense.baseGroup]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseGroup = new core_1.ComplexTypeNumberPropertyField('BaseGroup', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.distributionRule]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule = new core_1.ComplexTypeStringPropertyField('DistributionRule', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.project]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.project = new core_1.ComplexTypeStringPropertyField('Project', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.distributionRule2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule2 = new core_1.ComplexTypeStringPropertyField('DistributionRule2', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.distributionRule3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule3 = new core_1.ComplexTypeStringPropertyField('DistributionRule3', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.distributionRule4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule4 = new core_1.ComplexTypeStringPropertyField('DistributionRule4', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.distributionRule5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule5 = new core_1.ComplexTypeStringPropertyField('DistributionRule5', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLineAdditionalExpense.lineExpenseTaxJurisdictions]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineExpenseTaxJurisdictions = new core_1.CollectionField('LineExpenseTaxJurisdictions', _this, LineExpenseTaxJurisdiction_1.LineExpenseTaxJurisdiction);
        return _this;
    }
    return DocumentLineAdditionalExpenseField;
}(core_1.ComplexTypeField));
exports.DocumentLineAdditionalExpenseField = DocumentLineAdditionalExpenseField;
var DocumentLineAdditionalExpense;
(function (DocumentLineAdditionalExpense) {
    /**
     * Metadata information on all properties of the `DocumentLineAdditionalExpense` complex type.
     */
    DocumentLineAdditionalExpense._propertyMetadata = [{
            originalName: 'LineNumber',
            name: 'lineNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'GroupCode',
            name: 'groupCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
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
            originalName: 'WTLiable',
            name: 'wtLiable',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'BaseGroup',
            name: 'baseGroup',
            type: 'Edm.Int32',
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
            originalName: 'LineExpenseTaxJurisdictions',
            name: 'lineExpenseTaxJurisdictions',
            type: LineExpenseTaxJurisdiction_1.LineExpenseTaxJurisdiction,
            isCollection: true
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, DocumentLineAdditionalExpense);
    }
    DocumentLineAdditionalExpense.build = build;
})(DocumentLineAdditionalExpense = exports.DocumentLineAdditionalExpense || (exports.DocumentLineAdditionalExpense = {}));
//# sourceMappingURL=DocumentLineAdditionalExpense.js.map