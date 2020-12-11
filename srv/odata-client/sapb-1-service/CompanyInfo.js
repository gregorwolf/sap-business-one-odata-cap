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
exports.CompanyInfo = exports.CompanyInfoField = exports.createCompanyInfo = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[CompanyInfo.build]] instead.
 */
function createCompanyInfo(json) {
    return CompanyInfo.build(json);
}
exports.createCompanyInfo = createCompanyInfo;
/**
 * CompanyInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var CompanyInfoField = /** @class */ (function (_super) {
    __extends(CompanyInfoField, _super);
    /**
     * Creates an instance of CompanyInfoField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function CompanyInfoField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, CompanyInfo) || this;
        /**
         * Representation of the [[CompanyInfo.version]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.version = new core_1.ComplexTypeNumberPropertyField('Version', _this, 'Edm.Int32');
        /**
         * Representation of the [[CompanyInfo.enableExpensesManagement]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.enableExpensesManagement = new core_1.ComplexTypeEnumPropertyField('EnableExpensesManagement', _this);
        /**
         * Representation of the [[CompanyInfo.enableAccountSegmentation]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.enableAccountSegmentation = new core_1.ComplexTypeEnumPropertyField('EnableAccountSegmentation', _this);
        /**
         * Representation of the [[CompanyInfo.enableBillOfExchange]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.enableBillOfExchange = new core_1.ComplexTypeEnumPropertyField('EnableBillOfExchange', _this);
        /**
         * Representation of the [[CompanyInfo.baseDateForExchangeRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseDateForExchangeRate = new core_1.ComplexTypeEnumPropertyField('BaseDateForExchangeRate', _this);
        /**
         * Representation of the [[CompanyInfo.bisrBankActKey]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bisrBankActKey = new core_1.ComplexTypeNumberPropertyField('BISRBankActKey', _this, 'Edm.Int32');
        /**
         * Representation of the [[CompanyInfo.bisrBankCountry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bisrBankCountry = new core_1.ComplexTypeStringPropertyField('BISRBankCountry', _this, 'Edm.String');
        /**
         * Representation of the [[CompanyInfo.bisrBankNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bisrBankNo = new core_1.ComplexTypeStringPropertyField('BISRBankNo', _this, 'Edm.String');
        /**
         * Representation of the [[CompanyInfo.bisrBankAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bisrBankAccount = new core_1.ComplexTypeStringPropertyField('BISRBankAccount', _this, 'Edm.String');
        /**
         * Representation of the [[CompanyInfo.bisrBranch]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bisrBranch = new core_1.ComplexTypeStringPropertyField('BISRBranch', _this, 'Edm.String');
        /**
         * Representation of the [[CompanyInfo.maxRecordsInChooseFromList]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.maxRecordsInChooseFromList = new core_1.ComplexTypeNumberPropertyField('MaxRecordsInChooseFromList', _this, 'Edm.Int32');
        /**
         * Representation of the [[CompanyInfo.enableCheckQuantityInRdr]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.enableCheckQuantityInRdr = new core_1.ComplexTypeEnumPropertyField('EnableCheckQuantityInRDR', _this);
        /**
         * Representation of the [[CompanyInfo.sriManagementSystem]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sriManagementSystem = new core_1.ComplexTypeEnumPropertyField('SRIManagementSystem', _this);
        /**
         * Representation of the [[CompanyInfo.autoSriCreationOnReceipt]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.autoSriCreationOnReceipt = new core_1.ComplexTypeEnumPropertyField('AutoSRICreationOnReceipt', _this);
        /**
         * Representation of the [[CompanyInfo.iepsPayer]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.iepsPayer = new core_1.ComplexTypeEnumPropertyField('IEPSPayer', _this);
        /**
         * Representation of the [[CompanyInfo.defaultDaysForOrdCanc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultDaysForOrdCanc = new core_1.ComplexTypeNumberPropertyField('DefaultDaysForOrdCanc', _this, 'Edm.Int32');
        /**
         * Representation of the [[CompanyInfo.percentOfTotalAcquisition]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.percentOfTotalAcquisition = new core_1.ComplexTypeNumberPropertyField('PercentOfTotalAcquisition', _this, 'Edm.Double');
        /**
         * Representation of the [[CompanyInfo.minimumBaseAmountPerDoc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.minimumBaseAmountPerDoc = new core_1.ComplexTypeNumberPropertyField('MinimumBaseAmountPerDoc', _this, 'Edm.Double');
        /**
         * Representation of the [[CompanyInfo.enableSharingSeries]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.enableSharingSeries = new core_1.ComplexTypeEnumPropertyField('EnableSharingSeries', _this);
        /**
         * Representation of the [[CompanyInfo.dataOwnershipIndication]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dataOwnershipIndication = new core_1.ComplexTypeEnumPropertyField('DataOwnershipIndication', _this);
        /**
         * Representation of the [[CompanyInfo.minimumAmountForAppndixOp]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.minimumAmountForAppndixOp = new core_1.ComplexTypeNumberPropertyField('MinimumAmountForAppndixOP', _this, 'Edm.Double');
        /**
         * Representation of the [[CompanyInfo.displayTransactionsByDflt]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.displayTransactionsByDflt = new core_1.ComplexTypeEnumPropertyField('DisplayTransactionsByDflt', _this);
        /**
         * Representation of the [[CompanyInfo.defaultStampTax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultStampTax = new core_1.ComplexTypeStringPropertyField('DefaultStampTax', _this, 'Edm.String');
        /**
         * Representation of the [[CompanyInfo.minimumAmountForAnnualList]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.minimumAmountForAnnualList = new core_1.ComplexTypeNumberPropertyField('MinimumAmountForAnnualList', _this, 'Edm.Double');
        /**
         * Representation of the [[CompanyInfo.blockStockNegativeQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.blockStockNegativeQuantity = new core_1.ComplexTypeEnumPropertyField('BlockStockNegativeQuantity', _this);
        /**
         * Representation of the [[CompanyInfo.autoCreateCustomerEqCard]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.autoCreateCustomerEqCard = new core_1.ComplexTypeEnumPropertyField('AutoCreateCustomerEqCard', _this);
        /**
         * Representation of the [[CompanyInfo.maxNumberOfDocumentsInPmt]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.maxNumberOfDocumentsInPmt = new core_1.ComplexTypeNumberPropertyField('MaxNumberOfDocumentsInPmt', _this, 'Edm.Int32');
        /**
         * Representation of the [[CompanyInfo.enableStockRelNoCostPrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.enableStockRelNoCostPrice = new core_1.ComplexTypeEnumPropertyField('EnableStockRelNoCostPrice', _this);
        /**
         * Representation of the [[CompanyInfo.companyName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.companyName = new core_1.ComplexTypeStringPropertyField('CompanyName', _this, 'Edm.String');
        /**
         * Representation of the [[CompanyInfo.groupLinesInVatCalculation]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.groupLinesInVatCalculation = new core_1.ComplexTypeEnumPropertyField('GroupLinesInVATCalculation', _this);
        /**
         * Representation of the [[CompanyInfo.taxCalculationSystem]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxCalculationSystem = new core_1.ComplexTypeEnumPropertyField('TaxCalculationSystem', _this);
        /**
         * Representation of the [[CompanyInfo.enableTransactionNotification]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.enableTransactionNotification = new core_1.ComplexTypeEnumPropertyField('EnableTransactionNotification', _this);
        /**
         * Representation of the [[CompanyInfo.enableConversionDifferentAcct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.enableConversionDifferentAcct = new core_1.ComplexTypeEnumPropertyField('EnableConversionDifferentAcct', _this);
        /**
         * Representation of the [[CompanyInfo.b1ITimeOut]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.b1ITimeOut = new core_1.ComplexTypeNumberPropertyField('B1iTimeOut', _this, 'Edm.Int32');
        return _this;
    }
    return CompanyInfoField;
}(core_1.ComplexTypeField));
exports.CompanyInfoField = CompanyInfoField;
var CompanyInfo;
(function (CompanyInfo) {
    /**
     * Metadata information on all properties of the `CompanyInfo` complex type.
     */
    CompanyInfo._propertyMetadata = [{
            originalName: 'Version',
            name: 'version',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'EnableExpensesManagement',
            name: 'enableExpensesManagement',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'EnableAccountSegmentation',
            name: 'enableAccountSegmentation',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'EnableBillOfExchange',
            name: 'enableBillOfExchange',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'BaseDateForExchangeRate',
            name: 'baseDateForExchangeRate',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'BISRBankActKey',
            name: 'bisrBankActKey',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BISRBankCountry',
            name: 'bisrBankCountry',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BISRBankNo',
            name: 'bisrBankNo',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BISRBankAccount',
            name: 'bisrBankAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BISRBranch',
            name: 'bisrBranch',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'MaxRecordsInChooseFromList',
            name: 'maxRecordsInChooseFromList',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'EnableCheckQuantityInRDR',
            name: 'enableCheckQuantityInRdr',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'SRIManagementSystem',
            name: 'sriManagementSystem',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'AutoSRICreationOnReceipt',
            name: 'autoSriCreationOnReceipt',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'IEPSPayer',
            name: 'iepsPayer',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'DefaultDaysForOrdCanc',
            name: 'defaultDaysForOrdCanc',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'PercentOfTotalAcquisition',
            name: 'percentOfTotalAcquisition',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'MinimumBaseAmountPerDoc',
            name: 'minimumBaseAmountPerDoc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'EnableSharingSeries',
            name: 'enableSharingSeries',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'DataOwnershipIndication',
            name: 'dataOwnershipIndication',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'MinimumAmountForAppndixOP',
            name: 'minimumAmountForAppndixOp',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'DisplayTransactionsByDflt',
            name: 'displayTransactionsByDflt',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'DefaultStampTax',
            name: 'defaultStampTax',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'MinimumAmountForAnnualList',
            name: 'minimumAmountForAnnualList',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'BlockStockNegativeQuantity',
            name: 'blockStockNegativeQuantity',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'AutoCreateCustomerEqCard',
            name: 'autoCreateCustomerEqCard',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'MaxNumberOfDocumentsInPmt',
            name: 'maxNumberOfDocumentsInPmt',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'EnableStockRelNoCostPrice',
            name: 'enableStockRelNoCostPrice',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'CompanyName',
            name: 'companyName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'GroupLinesInVATCalculation',
            name: 'groupLinesInVatCalculation',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'TaxCalculationSystem',
            name: 'taxCalculationSystem',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'EnableTransactionNotification',
            name: 'enableTransactionNotification',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'EnableConversionDifferentAcct',
            name: 'enableConversionDifferentAcct',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'B1iTimeOut',
            name: 'b1ITimeOut',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, CompanyInfo);
    }
    CompanyInfo.build = build;
})(CompanyInfo = exports.CompanyInfo || (exports.CompanyInfo = {}));
//# sourceMappingURL=CompanyInfo.js.map