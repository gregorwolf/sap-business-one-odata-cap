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
exports.AdminInfo = exports.AdminInfoField = exports.createAdminInfo = void 0;
var ExtendedAdminInfo_1 = require("./ExtendedAdminInfo");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[AdminInfo.build]] instead.
 */
function createAdminInfo(json) {
    return AdminInfo.build(json);
}
exports.createAdminInfo = createAdminInfo;
/**
 * AdminInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var AdminInfoField = /** @class */ (function (_super) {
    __extends(AdminInfoField, _super);
    /**
     * Creates an instance of AdminInfoField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function AdminInfoField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, AdminInfo) || this;
        /**
         * Representation of the [[AdminInfo.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new core_1.ComplexTypeNumberPropertyField('Code', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.companyName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.companyName = new core_1.ComplexTypeStringPropertyField('CompanyName', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.address]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.address = new core_1.ComplexTypeStringPropertyField('Address', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.country]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.country = new core_1.ComplexTypeStringPropertyField('Country', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.printingHeader]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.printingHeader = new core_1.ComplexTypeStringPropertyField('PrintingHeader', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.phoneNumber1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.phoneNumber1 = new core_1.ComplexTypeStringPropertyField('PhoneNumber1', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.phoneNumber2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.phoneNumber2 = new core_1.ComplexTypeStringPropertyField('PhoneNumber2', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.faxNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.faxNumber = new core_1.ComplexTypeStringPropertyField('FaxNumber', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.eMail]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.eMail = new core_1.ComplexTypeStringPropertyField('eMail', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.managingDirector]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.managingDirector = new core_1.ComplexTypeStringPropertyField('ManagingDirector', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.chartofAccountsTemplate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.chartofAccountsTemplate = new core_1.ComplexTypeStringPropertyField('ChartofAccountsTemplate', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.localCurrency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.localCurrency = new core_1.ComplexTypeStringPropertyField('LocalCurrency', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.systemCurrency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.systemCurrency = new core_1.ComplexTypeStringPropertyField('SystemCurrency', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.creditBalancewithMinusSign]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditBalancewithMinusSign = new core_1.ComplexTypeEnumPropertyField('CreditBalancewithMinusSign', _this);
        /**
         * Representation of the [[AdminInfo.standardUnitofLength]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.standardUnitofLength = new core_1.ComplexTypeNumberPropertyField('StandardUnitofLength', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.weightUnitDefault]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.weightUnitDefault = new core_1.ComplexTypeNumberPropertyField('WeightUnitDefault', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.directIndirectRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.directIndirectRate = new core_1.ComplexTypeEnumPropertyField('DirectIndirectRate', _this);
        /**
         * Representation of the [[AdminInfo.minimumAmountfor347Report]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.minimumAmountfor347Report = new core_1.ComplexTypeNumberPropertyField('MinimumAmountfor347Report', _this, 'Edm.Double');
        /**
         * Representation of the [[AdminInfo.setItemsWarehouses]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.setItemsWarehouses = new core_1.ComplexTypeEnumPropertyField('SetItemsWarehouses', _this);
        /**
         * Representation of the [[AdminInfo.bankCountry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bankCountry = new core_1.ComplexTypeStringPropertyField('BankCountry', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.federalTaxId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.federalTaxId = new core_1.ComplexTypeStringPropertyField('FederalTaxID', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.taxOffice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxOffice = new core_1.ComplexTypeStringPropertyField('TaxOffice', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.deductionFileNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.deductionFileNo = new core_1.ComplexTypeStringPropertyField('DeductionFileNo', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.taxCollection]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxCollection = new core_1.ComplexTypeEnumPropertyField('TaxCollection', _this);
        /**
         * Representation of the [[AdminInfo.taxDefinition]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxDefinition = new core_1.ComplexTypeEnumPropertyField('TaxDefinition', _this);
        /**
         * Representation of the [[AdminInfo.taxPercentage]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxPercentage = new core_1.ComplexTypeNumberPropertyField('TaxPercentage', _this, 'Edm.Double');
        /**
         * Representation of the [[AdminInfo.advancesonCorpIncomeTax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.advancesonCorpIncomeTax = new core_1.ComplexTypeNumberPropertyField('AdvancesonCorpIncomeTax', _this, 'Edm.Double');
        /**
         * Representation of the [[AdminInfo.withTax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.withTax = new core_1.ComplexTypeNumberPropertyField('WithTax', _this, 'Edm.Double');
        /**
         * Representation of the [[AdminInfo.withholdingTaxVendorDdct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.withholdingTaxVendorDdct = new core_1.ComplexTypeEnumPropertyField('WithholdingTaxVendorDdct', _this);
        /**
         * Representation of the [[AdminInfo.customersDeductionatSource]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customersDeductionatSource = new core_1.ComplexTypeEnumPropertyField('CustomersDeductionatSource', _this);
        /**
         * Representation of the [[AdminInfo.withholdingTaxTdctPercnt]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.withholdingTaxTdctPercnt = new core_1.ComplexTypeNumberPropertyField('WithholdingTaxTdctPercnt', _this, 'Edm.Double');
        /**
         * Representation of the [[AdminInfo.withholdingTaxDdctExpired]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.withholdingTaxDdctExpired = new core_1.ComplexTypeDatePropertyField('WithholdingTaxDdctExpired', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[AdminInfo.withholdingTaxDdctOffice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.withholdingTaxDdctOffice = new core_1.ComplexTypeStringPropertyField('WithholdingTaxDdctOffice', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.commitmentRestriction]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.commitmentRestriction = new core_1.ComplexTypeEnumPropertyField('CommitmentRestriction', _this);
        /**
         * Representation of the [[AdminInfo.creditRestriction]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditRestriction = new core_1.ComplexTypeEnumPropertyField('CreditRestriction', _this);
        /**
         * Representation of the [[AdminInfo.restrictSales]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.restrictSales = new core_1.ComplexTypeEnumPropertyField('RestrictSales', _this);
        /**
         * Representation of the [[AdminInfo.restrictDelNotesPo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.restrictDelNotesPo = new core_1.ComplexTypeEnumPropertyField('RestrictDelNotesPO', _this);
        /**
         * Representation of the [[AdminInfo.restrictOrders]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.restrictOrders = new core_1.ComplexTypeEnumPropertyField('RestrictOrders', _this);
        /**
         * Representation of the [[AdminInfo.considerDelNotesinSalesR]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.considerDelNotesinSalesR = new core_1.ComplexTypeEnumPropertyField('ConsiderDelNotesinSalesR', _this);
        /**
         * Representation of the [[AdminInfo.creditDepositType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditDepositType = new core_1.ComplexTypeEnumPropertyField('CreditDepositType', _this);
        /**
         * Representation of the [[AdminInfo.useTax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.useTax = new core_1.ComplexTypeEnumPropertyField('UseTax', _this);
        /**
         * Representation of the [[AdminInfo.splitPo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.splitPo = new core_1.ComplexTypeEnumPropertyField('SplitPO', _this);
        /**
         * Representation of the [[AdminInfo.altNameForApInvoice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.altNameForApInvoice = new core_1.ComplexTypeStringPropertyField('AltNameForApInvoice', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.altNameforCreditMemo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.altNameforCreditMemo = new core_1.ComplexTypeStringPropertyField('AltNameforCreditMemo', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.altNameForGoodsReceipt]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.altNameForGoodsReceipt = new core_1.ComplexTypeStringPropertyField('AltNameForGoodsReceipt', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.altNameForGoodsReturn]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.altNameForGoodsReturn = new core_1.ComplexTypeStringPropertyField('AltNameForGoodsReturn', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.altNameForPurchase]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.altNameForPurchase = new core_1.ComplexTypeStringPropertyField('AltNameForPurchase', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.alertTypeforWhStock]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.alertTypeforWhStock = new core_1.ComplexTypeEnumPropertyField('AlertTypeforWHStock', _this);
        /**
         * Representation of the [[AdminInfo.setCommissionbyCustomer]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.setCommissionbyCustomer = new core_1.ComplexTypeEnumPropertyField('SetCommissionbyCustomer', _this);
        /**
         * Representation of the [[AdminInfo.setCommissionbyItem]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.setCommissionbyItem = new core_1.ComplexTypeEnumPropertyField('SetCommissionbyItem', _this);
        /**
         * Representation of the [[AdminInfo.setCommissionbySe]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.setCommissionbySe = new core_1.ComplexTypeEnumPropertyField('SetCommissionbySE', _this);
        /**
         * Representation of the [[AdminInfo.defaultCustomerPaymentTerms]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultCustomerPaymentTerms = new core_1.ComplexTypeNumberPropertyField('DefaultCustomerPaymentTerms', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.defaultVendorPaymentTerms]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultVendorPaymentTerms = new core_1.ComplexTypeNumberPropertyField('DefaultVendorPaymentTerms', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.calculateGrossProfitperTra]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.calculateGrossProfitperTra = new core_1.ComplexTypeEnumPropertyField('CalculateGrossProfitperTra', _this);
        /**
         * Representation of the [[AdminInfo.priceListforCostPrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priceListforCostPrice = new core_1.ComplexTypeNumberPropertyField('PriceListforCostPrice', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.grossProfitAfterSale]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossProfitAfterSale = new core_1.ComplexTypeEnumPropertyField('GrossProfitAfterSale', _this);
        /**
         * Representation of the [[AdminInfo.displayPriceforPriceOnly]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.displayPriceforPriceOnly = new core_1.ComplexTypeEnumPropertyField('DisplayPriceforPriceOnly', _this);
        /**
         * Representation of the [[AdminInfo.calculateTaxinSalesQuotati]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.calculateTaxinSalesQuotati = new core_1.ComplexTypeEnumPropertyField('CalculateTaxinSalesQuotati', _this);
        /**
         * Representation of the [[AdminInfo.baseField]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseField = new core_1.ComplexTypeEnumPropertyField('BaseField', _this);
        /**
         * Representation of the [[AdminInfo.allowClosedSalesQuotations]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.allowClosedSalesQuotations = new core_1.ComplexTypeEnumPropertyField('AllowClosedSalesQuotations', _this);
        /**
         * Representation of the [[AdminInfo.userConversionCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userConversionCode = new core_1.ComplexTypeEnumPropertyField('UserConversionCode', _this);
        /**
         * Representation of the [[AdminInfo.companyColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.companyColor = new core_1.ComplexTypeNumberPropertyField('CompanyColor', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.totalsAccuracy]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalsAccuracy = new core_1.ComplexTypeNumberPropertyField('TotalsAccuracy', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.accuracyofQuantities]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accuracyofQuantities = new core_1.ComplexTypeNumberPropertyField('AccuracyofQuantities', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.priceAccuracy]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priceAccuracy = new core_1.ComplexTypeNumberPropertyField('PriceAccuracy', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.rateAccuracy]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rateAccuracy = new core_1.ComplexTypeNumberPropertyField('RateAccuracy', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.percentageAccuracy]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.percentageAccuracy = new core_1.ComplexTypeNumberPropertyField('PercentageAccuracy', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.measuringAccuracy]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.measuringAccuracy = new core_1.ComplexTypeNumberPropertyField('MeasuringAccuracy', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.queryAccuracy]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.queryAccuracy = new core_1.ComplexTypeNumberPropertyField('QueryAccuracy', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.addressinForeignLanguage]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.addressinForeignLanguage = new core_1.ComplexTypeStringPropertyField('AddressinForeignLanguage', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.defaultTaxCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultTaxCode = new core_1.ComplexTypeStringPropertyField('DefaultTaxCode', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.letterHeaderinForeignLangu]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.letterHeaderinForeignLangu = new core_1.ComplexTypeStringPropertyField('LetterHeaderinForeignLangu', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.phoneNumber1ForeignLang]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.phoneNumber1ForeignLang = new core_1.ComplexTypeStringPropertyField('PhoneNumber1ForeignLang', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.phoneNumber2ForeignLang]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.phoneNumber2ForeignLang = new core_1.ComplexTypeStringPropertyField('PhoneNumber2ForeignLang', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.faxNumberForeignLang]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.faxNumberForeignLang = new core_1.ComplexTypeStringPropertyField('FaxNumberForeignLang', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.managingDirectorForeignLan]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.managingDirectorForeignLan = new core_1.ComplexTypeStringPropertyField('ManagingDirectorForeignLan', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.timeTemplate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.timeTemplate = new core_1.ComplexTypeEnumPropertyField('TimeTemplate', _this);
        /**
         * Representation of the [[AdminInfo.dateTemplate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dateTemplate = new core_1.ComplexTypeEnumPropertyField('DateTemplate', _this);
        /**
         * Representation of the [[AdminInfo.dateSeparator]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dateSeparator = new core_1.ComplexTypeStringPropertyField('DateSeparator', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.fcCheckAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fcCheckAccount = new core_1.ComplexTypeEnumPropertyField('FCCheckAccount', _this);
        /**
         * Representation of the [[AdminInfo.changedExistingOrders]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.changedExistingOrders = new core_1.ComplexTypeEnumPropertyField('ChangedExistingOrders', _this);
        /**
         * Representation of the [[AdminInfo.multiCurrencyCheck]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.multiCurrencyCheck = new core_1.ComplexTypeEnumPropertyField('MultiCurrencyCheck', _this);
        /**
         * Representation of the [[AdminInfo.isrType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.isrType = new core_1.ComplexTypeNumberPropertyField('ISRType', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.displayRoundingRemark]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.displayRoundingRemark = new core_1.ComplexTypeEnumPropertyField('DisplayRoundingRemark', _this);
        /**
         * Representation of the [[AdminInfo.isrBillerId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.isrBillerId = new core_1.ComplexTypeStringPropertyField('ISRBillerID', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.blockSystemCurrencyEditing]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.blockSystemCurrencyEditing = new core_1.ComplexTypeEnumPropertyField('BlockSystemCurrencyEditing', _this);
        /**
         * Representation of the [[AdminInfo.blockPostingDateEditing]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.blockPostingDateEditing = new core_1.ComplexTypeEnumPropertyField('BlockPostingDateEditing', _this);
        /**
         * Representation of the [[AdminInfo.defaultWarehouse]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultWarehouse = new core_1.ComplexTypeStringPropertyField('DefaultWarehouse', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.blockTaxDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.blockTaxDate = new core_1.ComplexTypeEnumPropertyField('BlockTaxDate', _this);
        /**
         * Representation of the [[AdminInfo.taxDefinitionforVatitem]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxDefinitionforVatitem = new core_1.ComplexTypeStringPropertyField('TaxDefinitionforVatitem', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.taxDefinitionforVatservice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxDefinitionforVatservice = new core_1.ComplexTypeStringPropertyField('TaxDefinitionforVatservice', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.taxGroupforPurchaseItem]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxGroupforPurchaseItem = new core_1.ComplexTypeStringPropertyField('TaxGroupforPurchaseItem', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.taxGroupforServicePurchase]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxGroupforServicePurchase = new core_1.ComplexTypeStringPropertyField('TaxGroupforServicePurchase', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.calculateBudget]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.calculateBudget = new core_1.ComplexTypeEnumPropertyField('CalculateBudget', _this);
        /**
         * Representation of the [[AdminInfo.customerIdNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customerIdNumber = new core_1.ComplexTypeStringPropertyField('CustomerIdNumber', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.blockBudget]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.blockBudget = new core_1.ComplexTypeEnumPropertyField('BlockBudget', _this);
        /**
         * Representation of the [[AdminInfo.budgetAlert]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.budgetAlert = new core_1.ComplexTypeEnumPropertyField('BudgetAlert', _this);
        /**
         * Representation of the [[AdminInfo.blockPurchaseOrders]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.blockPurchaseOrders = new core_1.ComplexTypeEnumPropertyField('BlockPurchaseOrders', _this);
        /**
         * Representation of the [[AdminInfo.blockBookkeeping]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.blockBookkeeping = new core_1.ComplexTypeEnumPropertyField('BlockBookkeeping', _this);
        /**
         * Representation of the [[AdminInfo.defaultBudgetCostAssessMt]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultBudgetCostAssessMt = new core_1.ComplexTypeNumberPropertyField('DefaultBudgetCostAssessMt', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.continuousStockManagement]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.continuousStockManagement = new core_1.ComplexTypeEnumPropertyField('ContinuousStockManagement', _this);
        /**
         * Representation of the [[AdminInfo.continuousStockSystem]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.continuousStockSystem = new core_1.ComplexTypeEnumPropertyField('ContinuousStockSystem', _this);
        /**
         * Representation of the [[AdminInfo.roundTaxAmounts]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.roundTaxAmounts = new core_1.ComplexTypeEnumPropertyField('RoundTaxAmounts', _this);
        /**
         * Representation of the [[AdminInfo.blockDelNotesforPurchase]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.blockDelNotesforPurchase = new core_1.ComplexTypeEnumPropertyField('BlockDelNotesforPurchase', _this);
        /**
         * Representation of the [[AdminInfo.fileNumberinIncomeTax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fileNumberinIncomeTax = new core_1.ComplexTypeStringPropertyField('FileNumberinIncomeTax', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.deferredTax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.deferredTax = new core_1.ComplexTypeEnumPropertyField('DeferredTax', _this);
        /**
         * Representation of the [[AdminInfo.defaultBankNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultBankNo = new core_1.ComplexTypeStringPropertyField('DefaultBankNo', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.defaultBankAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultBankAccount = new core_1.ComplexTypeStringPropertyField('DefaultBankAccount', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.defaultBranch]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultBranch = new core_1.ComplexTypeStringPropertyField('DefaultBranch', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.usePaSystem]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.usePaSystem = new core_1.ComplexTypeEnumPropertyField('UsePASystem', _this);
        /**
         * Representation of the [[AdminInfo.serviceCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.serviceCode = new core_1.ComplexTypeStringPropertyField('ServiceCode', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.servicePassword]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.servicePassword = new core_1.ComplexTypeStringPropertyField('ServicePassword', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.paramFolderPath]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paramFolderPath = new core_1.ComplexTypeStringPropertyField('ParamFolderPath', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.excelFolderPath]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.excelFolderPath = new core_1.ComplexTypeStringPropertyField('ExcelFolderPath', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.federalTaxId2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.federalTaxId2 = new core_1.ComplexTypeStringPropertyField('FederalTaxID2', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.federalTaxId3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.federalTaxId3 = new core_1.ComplexTypeStringPropertyField('FederalTaxID3', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.decimalSeparator]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.decimalSeparator = new core_1.ComplexTypeStringPropertyField('DecimalSeparator', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.thousandsSeparator]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.thousandsSeparator = new core_1.ComplexTypeStringPropertyField('ThousandsSeparator', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.displayCurrencyontheRight]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.displayCurrencyontheRight = new core_1.ComplexTypeEnumPropertyField('DisplayCurrencyontheRight', _this);
        /**
         * Representation of the [[AdminInfo.alertbyWarehouse]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.alertbyWarehouse = new core_1.ComplexTypeEnumPropertyField('AlertbyWarehouse', _this);
        /**
         * Representation of the [[AdminInfo.priceSystem]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priceSystem = new core_1.ComplexTypeEnumPropertyField('PriceSystem', _this);
        /**
         * Representation of the [[AdminInfo.wholdingTaxDedHierarchy]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wholdingTaxDedHierarchy = new core_1.ComplexTypeEnumPropertyField('WholdingTaxDedHierarchy', _this);
        /**
         * Representation of the [[AdminInfo.docConfirmation]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docConfirmation = new core_1.ComplexTypeEnumPropertyField('DocConfirmation', _this);
        /**
         * Representation of the [[AdminInfo.defaultforBatchStatus]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultforBatchStatus = new core_1.ComplexTypeEnumPropertyField('DefaultforBatchStatus', _this);
        /**
         * Representation of the [[AdminInfo.glMethod]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.glMethod = new core_1.ComplexTypeEnumPropertyField('GLMethod', _this);
        /**
         * Representation of the [[AdminInfo.uniqueSerialNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uniqueSerialNo = new core_1.ComplexTypeEnumPropertyField('UniqueSerialNo', _this);
        /**
         * Representation of the [[AdminInfo.maxHistory]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.maxHistory = new core_1.ComplexTypeNumberPropertyField('MaxHistory', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.changeDefReconApAccounts]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.changeDefReconApAccounts = new core_1.ComplexTypeEnumPropertyField('ChangeDefReconAPAccounts', _this);
        /**
         * Representation of the [[AdminInfo.changeDefReconArAccounts]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.changeDefReconArAccounts = new core_1.ComplexTypeEnumPropertyField('ChangeDefReconARAccounts', _this);
        /**
         * Representation of the [[AdminInfo.bpTypeCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpTypeCode = new core_1.ComplexTypeStringPropertyField('BPTypeCode', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.pbsNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.pbsNumber = new core_1.ComplexTypeStringPropertyField('PBSNumber', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.pbsGroupNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.pbsGroupNumber = new core_1.ComplexTypeStringPropertyField('PBSGroupNumber', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.organizationNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.organizationNumber = new core_1.ComplexTypeStringPropertyField('OrganizationNumber', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.accountSegmentsSeparator]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountSegmentsSeparator = new core_1.ComplexTypeStringPropertyField('AccountSegmentsSeparator', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.displayBookkeepingWindow]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.displayBookkeepingWindow = new core_1.ComplexTypeEnumPropertyField('DisplayBookkeepingWindow', _this);
        /**
         * Representation of the [[AdminInfo.sHandleWt]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sHandleWt = new core_1.ComplexTypeEnumPropertyField('SHandleWT', _this);
        /**
         * Representation of the [[AdminInfo.sDefaultWtCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sDefaultWtCode = new core_1.ComplexTypeStringPropertyField('SDefaultWTCode', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.withholdingTaxPHandle]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.withholdingTaxPHandle = new core_1.ComplexTypeStringPropertyField('WithholdingTaxPHandle', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.pDefaultWtCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.pDefaultWtCode = new core_1.ComplexTypeStringPropertyField('PDefaultWTCode', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.wtLiableExpense]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wtLiableExpense = new core_1.ComplexTypeEnumPropertyField('WTLiableExpense', _this);
        /**
         * Representation of the [[AdminInfo.useNegativeAmounts]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.useNegativeAmounts = new core_1.ComplexTypeEnumPropertyField('UseNegativeAmounts', _this);
        /**
         * Representation of the [[AdminInfo.holidaysName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.holidaysName = new core_1.ComplexTypeStringPropertyField('HolidaysName', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.orderBlock]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.orderBlock = new core_1.ComplexTypeStringPropertyField('OrderBlock', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.roundingMethod]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.roundingMethod = new core_1.ComplexTypeEnumPropertyField('RoundingMethod', _this);
        /**
         * Representation of the [[AdminInfo.adressFromWh]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.adressFromWh = new core_1.ComplexTypeEnumPropertyField('AdressFromWH', _this);
        /**
         * Representation of the [[AdminInfo.orderingParty]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.orderingParty = new core_1.ComplexTypeStringPropertyField('OrderingParty', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.certificateNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.certificateNo = new core_1.ComplexTypeStringPropertyField('CertificateNo', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.expirationDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expirationDate = new core_1.ComplexTypeDatePropertyField('ExpirationDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[AdminInfo.nationalInsuranceNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.nationalInsuranceNo = new core_1.ComplexTypeStringPropertyField('NationalInsuranceNo', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.salesOrderConfirmed]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.salesOrderConfirmed = new core_1.ComplexTypeEnumPropertyField('SalesOrderConfirmed', _this);
        /**
         * Representation of the [[AdminInfo.purchaseOrderConfirmed]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.purchaseOrderConfirmed = new core_1.ComplexTypeEnumPropertyField('PurchaseOrderConfirmed', _this);
        /**
         * Representation of the [[AdminInfo.sDfltItwt]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sDfltItwt = new core_1.ComplexTypeStringPropertyField('SDfltITWT', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.pDfltItwt]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.pDfltItwt = new core_1.ComplexTypeStringPropertyField('PDfltITWT', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.defaultAccountCurrency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultAccountCurrency = new core_1.ComplexTypeEnumPropertyField('DefaultAccountCurrency', _this);
        /**
         * Representation of the [[AdminInfo.deferredTaxforVendors]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.deferredTaxforVendors = new core_1.ComplexTypeEnumPropertyField('DeferredTaxforVendors', _this);
        /**
         * Representation of the [[AdminInfo.createAutoVatLineinJdt]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.createAutoVatLineinJdt = new core_1.ComplexTypeEnumPropertyField('CreateAutoVATLineinJDT', _this);
        /**
         * Representation of the [[AdminInfo.consumeForecast]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.consumeForecast = new core_1.ComplexTypeEnumPropertyField('ConsumeForecast', _this);
        /**
         * Representation of the [[AdminInfo.consumptionMethod]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.consumptionMethod = new core_1.ComplexTypeEnumPropertyField('ConsumptionMethod', _this);
        /**
         * Representation of the [[AdminInfo.daysBackward]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.daysBackward = new core_1.ComplexTypeNumberPropertyField('DaysBackward', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.daysForward]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.daysForward = new core_1.ComplexTypeNumberPropertyField('DaysForward', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.defaultDunningTerm]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultDunningTerm = new core_1.ComplexTypeStringPropertyField('DefaultDunningTerm', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.defaultBankAccountKey]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultBankAccountKey = new core_1.ComplexTypeNumberPropertyField('DefaultBankAccountKey', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.multiLanguageSupportEnable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.multiLanguageSupportEnable = new core_1.ComplexTypeEnumPropertyField('MultiLanguageSupportEnable', _this);
        /**
         * Representation of the [[AdminInfo.allowFuturePostingDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.allowFuturePostingDate = new core_1.ComplexTypeEnumPropertyField('AllowFuturePostingDate', _this);
        /**
         * Representation of the [[AdminInfo.additionalIdNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.additionalIdNumber = new core_1.ComplexTypeStringPropertyField('AdditionalIdNumber', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.state]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.state = new core_1.ComplexTypeStringPropertyField('State', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.calculateRowDiscount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.calculateRowDiscount = new core_1.ComplexTypeEnumPropertyField('CalculateRowDiscount', _this);
        /**
         * Representation of the [[AdminInfo.bankStatementInstalled]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bankStatementInstalled = new core_1.ComplexTypeEnumPropertyField('BankStatementInstalled', _this);
        /**
         * Representation of the [[AdminInfo.uniqueTaxPayerReference]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uniqueTaxPayerReference = new core_1.ComplexTypeStringPropertyField('UniqueTaxPayerReference', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.employerReference]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.employerReference = new core_1.ComplexTypeStringPropertyField('EmployerReference', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.periodStatusAutoChange]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.periodStatusAutoChange = new core_1.ComplexTypeEnumPropertyField('PeriodStatusAutoChange', _this);
        /**
         * Representation of the [[AdminInfo.periodStatusChangeDelay]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.periodStatusChangeDelay = new core_1.ComplexTypeNumberPropertyField('PeriodStatusChangeDelay', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.grossProfitPercentForServiceDocuments]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossProfitPercentForServiceDocuments = new core_1.ComplexTypeNumberPropertyField('GrossProfitPercentForServiceDocuments', _this, 'Edm.Double');
        /**
         * Representation of the [[AdminInfo.xmlFileFolderPath]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.xmlFileFolderPath = new core_1.ComplexTypeStringPropertyField('XMLFileFolderPath', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.pickList]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.pickList = new core_1.ComplexTypeEnumPropertyField('PickList', _this);
        /**
         * Representation of the [[AdminInfo.generalManager]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.generalManager = new core_1.ComplexTypeStringPropertyField('GeneralManager', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.generalManagerForeignLanguage]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.generalManagerForeignLanguage = new core_1.ComplexTypeStringPropertyField('GeneralManagerForeignLanguage', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.useProductionProfitAndLossAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.useProductionProfitAndLossAccount = new core_1.ComplexTypeEnumPropertyField('UseProductionProfitAndLossAccount', _this);
        /**
         * Representation of the [[AdminInfo.wtAccumAmountAp]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wtAccumAmountAp = new core_1.ComplexTypeNumberPropertyField('WTAccumAmountAP', _this, 'Edm.Double');
        /**
         * Representation of the [[AdminInfo.wtAccumAmountAr]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wtAccumAmountAr = new core_1.ComplexTypeNumberPropertyField('WTAccumAmountAR', _this, 'Edm.Double');
        /**
         * Representation of the [[AdminInfo.copyExchangeRateInCopyTo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.copyExchangeRateInCopyTo = new core_1.ComplexTypeEnumPropertyField('CopyExchangeRateInCopyTo', _this);
        /**
         * Representation of the [[AdminInfo.gtsOutboundFolder]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.gtsOutboundFolder = new core_1.ComplexTypeStringPropertyField('GTSOutboundFolder', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.gtsInboundFolder]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.gtsInboundFolder = new core_1.ComplexTypeStringPropertyField('GTSInboundFolder', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.gtsSeparateCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.gtsSeparateCode = new core_1.ComplexTypeStringPropertyField('GTSSeparateCode', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.gtsDefaultChecker]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.gtsDefaultChecker = new core_1.ComplexTypeNumberPropertyField('GTSDefaultChecker', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.gtsDefaultPayee]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.gtsDefaultPayee = new core_1.ComplexTypeNumberPropertyField('GTSDefaultPayee', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.gtsMaxAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.gtsMaxAmount = new core_1.ComplexTypeNumberPropertyField('GTSMaxAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[AdminInfo.gtsResponseToExceeding]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.gtsResponseToExceeding = new core_1.ComplexTypeEnumPropertyField('GTSResponseToExceeding', _this);
        /**
         * Representation of the [[AdminInfo.applicationOfIfrs]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.applicationOfIfrs = new core_1.ComplexTypeEnumPropertyField('ApplicationOfIFRS', _this);
        /**
         * Representation of the [[AdminInfo.startingInFiscalYear]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.startingInFiscalYear = new core_1.ComplexTypeNumberPropertyField('StartingInFiscalYear', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.reportAccordingTo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reportAccordingTo = new core_1.ComplexTypeNumberPropertyField('ReportAccordingTo', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.copyOpenRowsToDelivery]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.copyOpenRowsToDelivery = new core_1.ComplexTypeEnumPropertyField('CopyOpenRowsToDelivery', _this);
        /**
         * Representation of the [[AdminInfo.enableApprovalProcedureInDi]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.enableApprovalProcedureInDi = new core_1.ComplexTypeEnumPropertyField('EnableApprovalProcedureInDI', _this);
        /**
         * Representation of the [[AdminInfo.enableUpdateDocAfterApproval]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.enableUpdateDocAfterApproval = new core_1.ComplexTypeEnumPropertyField('EnableUpdateDocAfterApproval', _this);
        /**
         * Representation of the [[AdminInfo.enableUpdateDraftDuringApproval]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.enableUpdateDraftDuringApproval = new core_1.ComplexTypeEnumPropertyField('EnableUpdateDraftDuringApproval', _this);
        /**
         * Representation of the [[AdminInfo.issuePrimarilyBy]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.issuePrimarilyBy = new core_1.ComplexTypeEnumPropertyField('IssuePrimarilyBy', _this);
        /**
         * Representation of the [[AdminInfo.isRemoveUnpricedValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.isRemoveUnpricedValue = new core_1.ComplexTypeEnumPropertyField('IsRemoveUnpricedValue', _this);
        /**
         * Representation of the [[AdminInfo.enableAdvancedGlAccountDetermination]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.enableAdvancedGlAccountDetermination = new core_1.ComplexTypeEnumPropertyField('EnableAdvancedGLAccountDetermination', _this);
        /**
         * Representation of the [[AdminInfo.createOnlineQuotation]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.createOnlineQuotation = new core_1.ComplexTypeEnumPropertyField('CreateOnlineQuotation', _this);
        /**
         * Representation of the [[AdminInfo.isPrinterConnected]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.isPrinterConnected = new core_1.ComplexTypeEnumPropertyField('IsPrinterConnected', _this);
        /**
         * Representation of the [[AdminInfo.enableBranches]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.enableBranches = new core_1.ComplexTypeEnumPropertyField('EnableBranches', _this);
        /**
         * Representation of the [[AdminInfo.ieMandatoryValidation]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ieMandatoryValidation = new core_1.ComplexTypeEnumPropertyField('IEMandatoryValidation', _this);
        /**
         * Representation of the [[AdminInfo.enablePaymentDueDates]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.enablePaymentDueDates = new core_1.ComplexTypeEnumPropertyField('EnablePaymentDueDates', _this);
        /**
         * Representation of the [[AdminInfo.maximumNumberOfDaysForDueDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.maximumNumberOfDaysForDueDate = new core_1.ComplexTypeNumberPropertyField('MaximumNumberOfDaysForDueDate', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.aliasName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.aliasName = new core_1.ComplexTypeStringPropertyField('AliasName', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.enableCentralizedIncomingPayments]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.enableCentralizedIncomingPayments = new core_1.ComplexTypeEnumPropertyField('EnableCentralizedIncomingPayments', _this);
        /**
         * Representation of the [[AdminInfo.enableCentralizedOutgoingPayments]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.enableCentralizedOutgoingPayments = new core_1.ComplexTypeEnumPropertyField('EnableCentralizedOutgoingPayments', _this);
        /**
         * Representation of the [[AdminInfo.taxRateDetermination]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxRateDetermination = new core_1.ComplexTypeEnumPropertyField('TaxRateDetermination', _this);
        /**
         * Representation of the [[AdminInfo.boletoFolderPath]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.boletoFolderPath = new core_1.ComplexTypeStringPropertyField('BoletoFolderPath', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.allowMultipleBaOnSamePeriod]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.allowMultipleBaOnSamePeriod = new core_1.ComplexTypeEnumPropertyField('AllowMultipleBAOnSamePeriod', _this);
        /**
         * Representation of the [[AdminInfo.blockMultipleBaOnSameApDocument]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.blockMultipleBaOnSameApDocument = new core_1.ComplexTypeEnumPropertyField('BlockMultipleBAOnSameAPDocument', _this);
        /**
         * Representation of the [[AdminInfo.blockMultipleBaOnSameArDocument]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.blockMultipleBaOnSameArDocument = new core_1.ComplexTypeEnumPropertyField('BlockMultipleBAOnSameARDocument', _this);
        /**
         * Representation of the [[AdminInfo.displayCancelDocInReport]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.displayCancelDocInReport = new core_1.ComplexTypeEnumPropertyField('DisplayCancelDocInReport', _this);
        /**
         * Representation of the [[AdminInfo.maxDaysForCancel]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.maxDaysForCancel = new core_1.ComplexTypeNumberPropertyField('MaxDaysForCancel', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.reuseDocumentNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reuseDocumentNum = new core_1.ComplexTypeEnumPropertyField('ReuseDocumentNum', _this);
        /**
         * Representation of the [[AdminInfo.reuseNotaFiscalNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reuseNotaFiscalNum = new core_1.ComplexTypeEnumPropertyField('ReuseNotaFiscalNum', _this);
        /**
         * Representation of the [[AdminInfo.autoAddUoM]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.autoAddUoM = new core_1.ComplexTypeEnumPropertyField('AutoAddUoM', _this);
        /**
         * Representation of the [[AdminInfo.autoAddPackage]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.autoAddPackage = new core_1.ComplexTypeEnumPropertyField('AutoAddPackage', _this);
        /**
         * Representation of the [[AdminInfo.displayInactivePriceListInReports]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.displayInactivePriceListInReports = new core_1.ComplexTypeEnumPropertyField('DisplayInactivePriceListInReports', _this);
        /**
         * Representation of the [[AdminInfo.displayInactivePriceListInDocuments]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.displayInactivePriceListInDocuments = new core_1.ComplexTypeEnumPropertyField('DisplayInactivePriceListInDocuments', _this);
        /**
         * Representation of the [[AdminInfo.displayInactivePriceListInSettings]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.displayInactivePriceListInSettings = new core_1.ComplexTypeEnumPropertyField('DisplayInactivePriceListInSettings', _this);
        /**
         * Representation of the [[AdminInfo.applyBaseInactiveStatusToSpecialPrices]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.applyBaseInactiveStatusToSpecialPrices = new core_1.ComplexTypeEnumPropertyField('ApplyBaseInactiveStatusToSpecialPrices', _this);
        /**
         * Representation of the [[AdminInfo.applyBaseInactiveStatusToPeriodVolumeDiscounts]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.applyBaseInactiveStatusToPeriodVolumeDiscounts = new core_1.ComplexTypeEnumPropertyField('ApplyBaseInactiveStatusToPeriodVolumeDiscounts', _this);
        /**
         * Representation of the [[AdminInfo.applyBaseInactiveStatusToPriceLists]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.applyBaseInactiveStatusToPriceLists = new core_1.ComplexTypeEnumPropertyField('ApplyBaseInactiveStatusToPriceLists', _this);
        /**
         * Representation of the [[AdminInfo.priceProceedMethod]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priceProceedMethod = new core_1.ComplexTypeEnumPropertyField('PriceProceedMethod', _this);
        /**
         * Representation of the [[AdminInfo.removeUpdatePricesBasedOnNonStandardPriceLists]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.removeUpdatePricesBasedOnNonStandardPriceLists = new core_1.ComplexTypeEnumPropertyField('RemoveUpdatePricesBasedOnNonStandardPriceLists', _this);
        /**
         * Representation of the [[AdminInfo.sirenNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sirenNo = new core_1.ComplexTypeStringPropertyField('SirenNo', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.institutionCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.institutionCode = new core_1.ComplexTypeStringPropertyField('InstitutionCode', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.setResourcesWarehouses]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.setResourcesWarehouses = new core_1.ComplexTypeEnumPropertyField('SetResourcesWarehouses', _this);
        /**
         * Representation of the [[AdminInfo.blockStockNegativeQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.blockStockNegativeQuantity = new core_1.ComplexTypeEnumPropertyField('BlockStockNegativeQuantity', _this);
        /**
         * Representation of the [[AdminInfo.useParentWipInComponents]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.useParentWipInComponents = new core_1.ComplexTypeEnumPropertyField('UseParentWIPInComponents', _this);
        /**
         * Representation of the [[AdminInfo.enableUpdateBaPriceAndPlannedAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.enableUpdateBaPriceAndPlannedAmount = new core_1.ComplexTypeEnumPropertyField('EnableUpdateBAPriceAndPlannedAmount', _this);
        /**
         * Representation of the [[AdminInfo.autoAssignOnlyValidApba]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.autoAssignOnlyValidApba = new core_1.ComplexTypeEnumPropertyField('AutoAssignOnlyValidAPBA', _this);
        /**
         * Representation of the [[AdminInfo.autoAssignOnlyValidArba]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.autoAssignOnlyValidArba = new core_1.ComplexTypeEnumPropertyField('AutoAssignOnlyValidARBA', _this);
        /**
         * Representation of the [[AdminInfo.actionWhenDeviateFromBaForPo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actionWhenDeviateFromBaForPo = new core_1.ComplexTypeEnumPropertyField('ActionWhenDeviateFromBAForPO', _this);
        /**
         * Representation of the [[AdminInfo.actionWhenDeviateFromBaForGrpo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actionWhenDeviateFromBaForGrpo = new core_1.ComplexTypeEnumPropertyField('ActionWhenDeviateFromBAForGRPO', _this);
        /**
         * Representation of the [[AdminInfo.actionWhenDeviateFromBaForAccounting]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actionWhenDeviateFromBaForAccounting = new core_1.ComplexTypeEnumPropertyField('ActionWhenDeviateFromBAForAccounting', _this);
        /**
         * Representation of the [[AdminInfo.series]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.series = new core_1.ComplexTypeNumberPropertyField('Series', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.account]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.account = new core_1.ComplexTypeStringPropertyField('Account', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.enableMultipleSchedulings]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.enableMultipleSchedulings = new core_1.ComplexTypeStringPropertyField('EnableMultipleSchedulings', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.displayBatchQtyUoMBy]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.displayBatchQtyUoMBy = new core_1.ComplexTypeEnumPropertyField('DisplayBatchQtyUoMBy', _this);
        /**
         * Representation of the [[AdminInfo.allowInBoundPostingWithZeroPrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.allowInBoundPostingWithZeroPrice = new core_1.ComplexTypeEnumPropertyField('AllowInBoundPostingWithZeroPrice', _this);
        /**
         * Representation of the [[AdminInfo.inventoryPostingHighlightVariance]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryPostingHighlightVariance = new core_1.ComplexTypeNumberPropertyField('InventoryPostingHighlightVariance', _this, 'Edm.Double');
        /**
         * Representation of the [[AdminInfo.inventoryPostingReleaseOnlySerialAndBatch]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryPostingReleaseOnlySerialAndBatch = new core_1.ComplexTypeEnumPropertyField('InventoryPostingReleaseOnlySerialAndBatch', _this);
        /**
         * Representation of the [[AdminInfo.inventoryCountingHighlightVariance]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryCountingHighlightVariance = new core_1.ComplexTypeNumberPropertyField('InventoryCountingHighlightVariance', _this, 'Edm.Double');
        /**
         * Representation of the [[AdminInfo.inventoryCountingHighlightMaxVariance]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryCountingHighlightMaxVariance = new core_1.ComplexTypeNumberPropertyField('InventoryCountingHighlightMaxVariance', _this, 'Edm.Double');
        /**
         * Representation of the [[AdminInfo.inventoryCountingHighlightCountersDifference]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryCountingHighlightCountersDifference = new core_1.ComplexTypeNumberPropertyField('InventoryCountingHighlightCountersDifference', _this, 'Edm.Double');
        /**
         * Representation of the [[AdminInfo.copySingleCounterToIndividualCounter]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.copySingleCounterToIndividualCounter = new core_1.ComplexTypeEnumPropertyField('CopySingleCounterToIndividualCounter', _this);
        /**
         * Representation of the [[AdminInfo.closeCountedRowsWithZeroDifference]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.closeCountedRowsWithZeroDifference = new core_1.ComplexTypeEnumPropertyField('CloseCountedRowsWithZeroDifference', _this);
        /**
         * Representation of the [[AdminInfo.closeCountedRowsWithoutConfirmation]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.closeCountedRowsWithoutConfirmation = new core_1.ComplexTypeEnumPropertyField('CloseCountedRowsWithoutConfirmation', _this);
        /**
         * Representation of the [[AdminInfo.calculateInWhseQtyBasedOnPostingDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.calculateInWhseQtyBasedOnPostingDate = new core_1.ComplexTypeEnumPropertyField('CalculateInWhseQtyBasedOnPostingDate', _this);
        /**
         * Representation of the [[AdminInfo.refreshInWhseQtyInDi]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.refreshInWhseQtyInDi = new core_1.ComplexTypeEnumPropertyField('RefreshInWhseQtyInDI', _this);
        /**
         * Representation of the [[AdminInfo.sepaCreditorId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sepaCreditorId = new core_1.ComplexTypeStringPropertyField('SEPACreditorID', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.dataOwnershipManageBy]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dataOwnershipManageBy = new core_1.ComplexTypeEnumPropertyField('DataOwnershipManageBy', _this);
        /**
         * Representation of the [[AdminInfo.allowBpWithNoOwner]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.allowBpWithNoOwner = new core_1.ComplexTypeEnumPropertyField('AllowBPWithNoOwner', _this);
        /**
         * Representation of the [[AdminInfo.enableSeparatePriceMode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.enableSeparatePriceMode = new core_1.ComplexTypeEnumPropertyField('EnableSeparatePriceMode', _this);
        /**
         * Representation of the [[AdminInfo.extendedAdminInfo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.extendedAdminInfo = new ExtendedAdminInfo_1.ExtendedAdminInfoField('ExtendedAdminInfo', _this);
        return _this;
    }
    return AdminInfoField;
}(core_1.ComplexTypeField));
exports.AdminInfoField = AdminInfoField;
var AdminInfo;
(function (AdminInfo) {
    /**
     * Metadata information on all properties of the `AdminInfo` complex type.
     */
    AdminInfo._propertyMetadata = [{
            originalName: 'Code',
            name: 'code',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'CompanyName',
            name: 'companyName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Address',
            name: 'address',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Country',
            name: 'country',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PrintingHeader',
            name: 'printingHeader',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PhoneNumber1',
            name: 'phoneNumber1',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PhoneNumber2',
            name: 'phoneNumber2',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'FaxNumber',
            name: 'faxNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'eMail',
            name: 'eMail',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ManagingDirector',
            name: 'managingDirector',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ChartofAccountsTemplate',
            name: 'chartofAccountsTemplate',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'LocalCurrency',
            name: 'localCurrency',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SystemCurrency',
            name: 'systemCurrency',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CreditBalancewithMinusSign',
            name: 'creditBalancewithMinusSign',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'StandardUnitofLength',
            name: 'standardUnitofLength',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'WeightUnitDefault',
            name: 'weightUnitDefault',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DirectIndirectRate',
            name: 'directIndirectRate',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'MinimumAmountfor347Report',
            name: 'minimumAmountfor347Report',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'SetItemsWarehouses',
            name: 'setItemsWarehouses',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'BankCountry',
            name: 'bankCountry',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'FederalTaxID',
            name: 'federalTaxId',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxOffice',
            name: 'taxOffice',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DeductionFileNo',
            name: 'deductionFileNo',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxCollection',
            name: 'taxCollection',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'TaxDefinition',
            name: 'taxDefinition',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'TaxPercentage',
            name: 'taxPercentage',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AdvancesonCorpIncomeTax',
            name: 'advancesonCorpIncomeTax',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'WithTax',
            name: 'withTax',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'WithholdingTaxVendorDdct',
            name: 'withholdingTaxVendorDdct',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'CustomersDeductionatSource',
            name: 'customersDeductionatSource',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'WithholdingTaxTdctPercnt',
            name: 'withholdingTaxTdctPercnt',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'WithholdingTaxDdctExpired',
            name: 'withholdingTaxDdctExpired',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'WithholdingTaxDdctOffice',
            name: 'withholdingTaxDdctOffice',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CommitmentRestriction',
            name: 'commitmentRestriction',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'CreditRestriction',
            name: 'creditRestriction',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'RestrictSales',
            name: 'restrictSales',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'RestrictDelNotesPO',
            name: 'restrictDelNotesPo',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'RestrictOrders',
            name: 'restrictOrders',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ConsiderDelNotesinSalesR',
            name: 'considerDelNotesinSalesR',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'CreditDepositType',
            name: 'creditDepositType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'UseTax',
            name: 'useTax',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'SplitPO',
            name: 'splitPo',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'AltNameForApInvoice',
            name: 'altNameForApInvoice',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AltNameforCreditMemo',
            name: 'altNameforCreditMemo',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AltNameForGoodsReceipt',
            name: 'altNameForGoodsReceipt',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AltNameForGoodsReturn',
            name: 'altNameForGoodsReturn',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AltNameForPurchase',
            name: 'altNameForPurchase',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AlertTypeforWHStock',
            name: 'alertTypeforWhStock',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'SetCommissionbyCustomer',
            name: 'setCommissionbyCustomer',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'SetCommissionbyItem',
            name: 'setCommissionbyItem',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'SetCommissionbySE',
            name: 'setCommissionbySe',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'DefaultCustomerPaymentTerms',
            name: 'defaultCustomerPaymentTerms',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DefaultVendorPaymentTerms',
            name: 'defaultVendorPaymentTerms',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'CalculateGrossProfitperTra',
            name: 'calculateGrossProfitperTra',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'PriceListforCostPrice',
            name: 'priceListforCostPrice',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'GrossProfitAfterSale',
            name: 'grossProfitAfterSale',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'DisplayPriceforPriceOnly',
            name: 'displayPriceforPriceOnly',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'CalculateTaxinSalesQuotati',
            name: 'calculateTaxinSalesQuotati',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'BaseField',
            name: 'baseField',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'AllowClosedSalesQuotations',
            name: 'allowClosedSalesQuotations',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'UserConversionCode',
            name: 'userConversionCode',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'CompanyColor',
            name: 'companyColor',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'TotalsAccuracy',
            name: 'totalsAccuracy',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'AccuracyofQuantities',
            name: 'accuracyofQuantities',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'PriceAccuracy',
            name: 'priceAccuracy',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'RateAccuracy',
            name: 'rateAccuracy',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'PercentageAccuracy',
            name: 'percentageAccuracy',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'MeasuringAccuracy',
            name: 'measuringAccuracy',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'QueryAccuracy',
            name: 'queryAccuracy',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'AddressinForeignLanguage',
            name: 'addressinForeignLanguage',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DefaultTaxCode',
            name: 'defaultTaxCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'LetterHeaderinForeignLangu',
            name: 'letterHeaderinForeignLangu',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PhoneNumber1ForeignLang',
            name: 'phoneNumber1ForeignLang',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PhoneNumber2ForeignLang',
            name: 'phoneNumber2ForeignLang',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'FaxNumberForeignLang',
            name: 'faxNumberForeignLang',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ManagingDirectorForeignLan',
            name: 'managingDirectorForeignLan',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TimeTemplate',
            name: 'timeTemplate',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'DateTemplate',
            name: 'dateTemplate',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'DateSeparator',
            name: 'dateSeparator',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'FCCheckAccount',
            name: 'fcCheckAccount',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ChangedExistingOrders',
            name: 'changedExistingOrders',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'MultiCurrencyCheck',
            name: 'multiCurrencyCheck',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ISRType',
            name: 'isrType',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DisplayRoundingRemark',
            name: 'displayRoundingRemark',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ISRBillerID',
            name: 'isrBillerId',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BlockSystemCurrencyEditing',
            name: 'blockSystemCurrencyEditing',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'BlockPostingDateEditing',
            name: 'blockPostingDateEditing',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'DefaultWarehouse',
            name: 'defaultWarehouse',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BlockTaxDate',
            name: 'blockTaxDate',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'TaxDefinitionforVatitem',
            name: 'taxDefinitionforVatitem',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxDefinitionforVatservice',
            name: 'taxDefinitionforVatservice',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxGroupforPurchaseItem',
            name: 'taxGroupforPurchaseItem',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxGroupforServicePurchase',
            name: 'taxGroupforServicePurchase',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CalculateBudget',
            name: 'calculateBudget',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'CustomerIdNumber',
            name: 'customerIdNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BlockBudget',
            name: 'blockBudget',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'BudgetAlert',
            name: 'budgetAlert',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'BlockPurchaseOrders',
            name: 'blockPurchaseOrders',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'BlockBookkeeping',
            name: 'blockBookkeeping',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'DefaultBudgetCostAssessMt',
            name: 'defaultBudgetCostAssessMt',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ContinuousStockManagement',
            name: 'continuousStockManagement',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ContinuousStockSystem',
            name: 'continuousStockSystem',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'RoundTaxAmounts',
            name: 'roundTaxAmounts',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'BlockDelNotesforPurchase',
            name: 'blockDelNotesforPurchase',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'FileNumberinIncomeTax',
            name: 'fileNumberinIncomeTax',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DeferredTax',
            name: 'deferredTax',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'DefaultBankNo',
            name: 'defaultBankNo',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DefaultBankAccount',
            name: 'defaultBankAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DefaultBranch',
            name: 'defaultBranch',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'UsePASystem',
            name: 'usePaSystem',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ServiceCode',
            name: 'serviceCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ServicePassword',
            name: 'servicePassword',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ParamFolderPath',
            name: 'paramFolderPath',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ExcelFolderPath',
            name: 'excelFolderPath',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'FederalTaxID2',
            name: 'federalTaxId2',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'FederalTaxID3',
            name: 'federalTaxId3',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DecimalSeparator',
            name: 'decimalSeparator',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ThousandsSeparator',
            name: 'thousandsSeparator',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DisplayCurrencyontheRight',
            name: 'displayCurrencyontheRight',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'AlertbyWarehouse',
            name: 'alertbyWarehouse',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'PriceSystem',
            name: 'priceSystem',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'WholdingTaxDedHierarchy',
            name: 'wholdingTaxDedHierarchy',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'DocConfirmation',
            name: 'docConfirmation',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'DefaultforBatchStatus',
            name: 'defaultforBatchStatus',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'GLMethod',
            name: 'glMethod',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'UniqueSerialNo',
            name: 'uniqueSerialNo',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'MaxHistory',
            name: 'maxHistory',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ChangeDefReconAPAccounts',
            name: 'changeDefReconApAccounts',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ChangeDefReconARAccounts',
            name: 'changeDefReconArAccounts',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'BPTypeCode',
            name: 'bpTypeCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PBSNumber',
            name: 'pbsNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PBSGroupNumber',
            name: 'pbsGroupNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'OrganizationNumber',
            name: 'organizationNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AccountSegmentsSeparator',
            name: 'accountSegmentsSeparator',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DisplayBookkeepingWindow',
            name: 'displayBookkeepingWindow',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'SHandleWT',
            name: 'sHandleWt',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'SDefaultWTCode',
            name: 'sDefaultWtCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'WithholdingTaxPHandle',
            name: 'withholdingTaxPHandle',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PDefaultWTCode',
            name: 'pDefaultWtCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'WTLiableExpense',
            name: 'wtLiableExpense',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'UseNegativeAmounts',
            name: 'useNegativeAmounts',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'HolidaysName',
            name: 'holidaysName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'OrderBlock',
            name: 'orderBlock',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'RoundingMethod',
            name: 'roundingMethod',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'AdressFromWH',
            name: 'adressFromWh',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'OrderingParty',
            name: 'orderingParty',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CertificateNo',
            name: 'certificateNo',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ExpirationDate',
            name: 'expirationDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'NationalInsuranceNo',
            name: 'nationalInsuranceNo',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SalesOrderConfirmed',
            name: 'salesOrderConfirmed',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'PurchaseOrderConfirmed',
            name: 'purchaseOrderConfirmed',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'SDfltITWT',
            name: 'sDfltItwt',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PDfltITWT',
            name: 'pDfltItwt',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DefaultAccountCurrency',
            name: 'defaultAccountCurrency',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'DeferredTaxforVendors',
            name: 'deferredTaxforVendors',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'CreateAutoVATLineinJDT',
            name: 'createAutoVatLineinJdt',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ConsumeForecast',
            name: 'consumeForecast',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ConsumptionMethod',
            name: 'consumptionMethod',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'DaysBackward',
            name: 'daysBackward',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DaysForward',
            name: 'daysForward',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DefaultDunningTerm',
            name: 'defaultDunningTerm',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DefaultBankAccountKey',
            name: 'defaultBankAccountKey',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'MultiLanguageSupportEnable',
            name: 'multiLanguageSupportEnable',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'AllowFuturePostingDate',
            name: 'allowFuturePostingDate',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'AdditionalIdNumber',
            name: 'additionalIdNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'State',
            name: 'state',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CalculateRowDiscount',
            name: 'calculateRowDiscount',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'BankStatementInstalled',
            name: 'bankStatementInstalled',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'UniqueTaxPayerReference',
            name: 'uniqueTaxPayerReference',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'EmployerReference',
            name: 'employerReference',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PeriodStatusAutoChange',
            name: 'periodStatusAutoChange',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'PeriodStatusChangeDelay',
            name: 'periodStatusChangeDelay',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'GrossProfitPercentForServiceDocuments',
            name: 'grossProfitPercentForServiceDocuments',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'XMLFileFolderPath',
            name: 'xmlFileFolderPath',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PickList',
            name: 'pickList',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'GeneralManager',
            name: 'generalManager',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'GeneralManagerForeignLanguage',
            name: 'generalManagerForeignLanguage',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'UseProductionProfitAndLossAccount',
            name: 'useProductionProfitAndLossAccount',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'WTAccumAmountAP',
            name: 'wtAccumAmountAp',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'WTAccumAmountAR',
            name: 'wtAccumAmountAr',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'CopyExchangeRateInCopyTo',
            name: 'copyExchangeRateInCopyTo',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'GTSOutboundFolder',
            name: 'gtsOutboundFolder',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'GTSInboundFolder',
            name: 'gtsInboundFolder',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'GTSSeparateCode',
            name: 'gtsSeparateCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'GTSDefaultChecker',
            name: 'gtsDefaultChecker',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'GTSDefaultPayee',
            name: 'gtsDefaultPayee',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'GTSMaxAmount',
            name: 'gtsMaxAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'GTSResponseToExceeding',
            name: 'gtsResponseToExceeding',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ApplicationOfIFRS',
            name: 'applicationOfIfrs',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'StartingInFiscalYear',
            name: 'startingInFiscalYear',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ReportAccordingTo',
            name: 'reportAccordingTo',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'CopyOpenRowsToDelivery',
            name: 'copyOpenRowsToDelivery',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'EnableApprovalProcedureInDI',
            name: 'enableApprovalProcedureInDi',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'EnableUpdateDocAfterApproval',
            name: 'enableUpdateDocAfterApproval',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'EnableUpdateDraftDuringApproval',
            name: 'enableUpdateDraftDuringApproval',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'IssuePrimarilyBy',
            name: 'issuePrimarilyBy',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'IsRemoveUnpricedValue',
            name: 'isRemoveUnpricedValue',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'EnableAdvancedGLAccountDetermination',
            name: 'enableAdvancedGlAccountDetermination',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'CreateOnlineQuotation',
            name: 'createOnlineQuotation',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'IsPrinterConnected',
            name: 'isPrinterConnected',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'EnableBranches',
            name: 'enableBranches',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'IEMandatoryValidation',
            name: 'ieMandatoryValidation',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'EnablePaymentDueDates',
            name: 'enablePaymentDueDates',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'MaximumNumberOfDaysForDueDate',
            name: 'maximumNumberOfDaysForDueDate',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'AliasName',
            name: 'aliasName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'EnableCentralizedIncomingPayments',
            name: 'enableCentralizedIncomingPayments',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'EnableCentralizedOutgoingPayments',
            name: 'enableCentralizedOutgoingPayments',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'TaxRateDetermination',
            name: 'taxRateDetermination',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'BoletoFolderPath',
            name: 'boletoFolderPath',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AllowMultipleBAOnSamePeriod',
            name: 'allowMultipleBaOnSamePeriod',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'BlockMultipleBAOnSameAPDocument',
            name: 'blockMultipleBaOnSameApDocument',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'BlockMultipleBAOnSameARDocument',
            name: 'blockMultipleBaOnSameArDocument',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'DisplayCancelDocInReport',
            name: 'displayCancelDocInReport',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'MaxDaysForCancel',
            name: 'maxDaysForCancel',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ReuseDocumentNum',
            name: 'reuseDocumentNum',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ReuseNotaFiscalNum',
            name: 'reuseNotaFiscalNum',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'AutoAddUoM',
            name: 'autoAddUoM',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'AutoAddPackage',
            name: 'autoAddPackage',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'DisplayInactivePriceListInReports',
            name: 'displayInactivePriceListInReports',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'DisplayInactivePriceListInDocuments',
            name: 'displayInactivePriceListInDocuments',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'DisplayInactivePriceListInSettings',
            name: 'displayInactivePriceListInSettings',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ApplyBaseInactiveStatusToSpecialPrices',
            name: 'applyBaseInactiveStatusToSpecialPrices',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ApplyBaseInactiveStatusToPeriodVolumeDiscounts',
            name: 'applyBaseInactiveStatusToPeriodVolumeDiscounts',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ApplyBaseInactiveStatusToPriceLists',
            name: 'applyBaseInactiveStatusToPriceLists',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'PriceProceedMethod',
            name: 'priceProceedMethod',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'RemoveUpdatePricesBasedOnNonStandardPriceLists',
            name: 'removeUpdatePricesBasedOnNonStandardPriceLists',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'SirenNo',
            name: 'sirenNo',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'InstitutionCode',
            name: 'institutionCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SetResourcesWarehouses',
            name: 'setResourcesWarehouses',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'BlockStockNegativeQuantity',
            name: 'blockStockNegativeQuantity',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'UseParentWIPInComponents',
            name: 'useParentWipInComponents',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'EnableUpdateBAPriceAndPlannedAmount',
            name: 'enableUpdateBaPriceAndPlannedAmount',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'AutoAssignOnlyValidAPBA',
            name: 'autoAssignOnlyValidApba',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'AutoAssignOnlyValidARBA',
            name: 'autoAssignOnlyValidArba',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ActionWhenDeviateFromBAForPO',
            name: 'actionWhenDeviateFromBaForPo',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ActionWhenDeviateFromBAForGRPO',
            name: 'actionWhenDeviateFromBaForGrpo',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ActionWhenDeviateFromBAForAccounting',
            name: 'actionWhenDeviateFromBaForAccounting',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Series',
            name: 'series',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Account',
            name: 'account',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'EnableMultipleSchedulings',
            name: 'enableMultipleSchedulings',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DisplayBatchQtyUoMBy',
            name: 'displayBatchQtyUoMBy',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'AllowInBoundPostingWithZeroPrice',
            name: 'allowInBoundPostingWithZeroPrice',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'InventoryPostingHighlightVariance',
            name: 'inventoryPostingHighlightVariance',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'InventoryPostingReleaseOnlySerialAndBatch',
            name: 'inventoryPostingReleaseOnlySerialAndBatch',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'InventoryCountingHighlightVariance',
            name: 'inventoryCountingHighlightVariance',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'InventoryCountingHighlightMaxVariance',
            name: 'inventoryCountingHighlightMaxVariance',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'InventoryCountingHighlightCountersDifference',
            name: 'inventoryCountingHighlightCountersDifference',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'CopySingleCounterToIndividualCounter',
            name: 'copySingleCounterToIndividualCounter',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'CloseCountedRowsWithZeroDifference',
            name: 'closeCountedRowsWithZeroDifference',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'CloseCountedRowsWithoutConfirmation',
            name: 'closeCountedRowsWithoutConfirmation',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'CalculateInWhseQtyBasedOnPostingDate',
            name: 'calculateInWhseQtyBasedOnPostingDate',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'RefreshInWhseQtyInDI',
            name: 'refreshInWhseQtyInDi',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'SEPACreditorID',
            name: 'sepaCreditorId',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DataOwnershipManageBy',
            name: 'dataOwnershipManageBy',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'AllowBPWithNoOwner',
            name: 'allowBpWithNoOwner',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'EnableSeparatePriceMode',
            name: 'enableSeparatePriceMode',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ExtendedAdminInfo',
            name: 'extendedAdminInfo',
            type: ExtendedAdminInfo_1.ExtendedAdminInfo,
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, AdminInfo);
    }
    AdminInfo.build = build;
})(AdminInfo = exports.AdminInfo || (exports.AdminInfo = {}));
//# sourceMappingURL=AdminInfo.js.map