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
exports.PeriodCategory = exports.PeriodCategoryField = exports.createPeriodCategory = void 0;
var WipMapping_1 = require("./WipMapping");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[PeriodCategory.build]] instead.
 */
function createPeriodCategory(json) {
    return PeriodCategory.build(json);
}
exports.createPeriodCategory = createPeriodCategory;
/**
 * PeriodCategoryField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PeriodCategoryField = /** @class */ (function (_super) {
    __extends(PeriodCategoryField, _super);
    /**
     * Creates an instance of PeriodCategoryField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function PeriodCategoryField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, PeriodCategory) || this;
        /**
         * Representation of the [[PeriodCategory.absoluteEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absoluteEntry = new core_1.ComplexTypeNumberPropertyField('AbsoluteEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[PeriodCategory.beginningofFinancialYear]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.beginningofFinancialYear = new core_1.ComplexTypeDatePropertyField('BeginningofFinancialYear', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PeriodCategory.periodCategory]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.periodCategory = new core_1.ComplexTypeStringPropertyField('PeriodCategory', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.subPeriodType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.subPeriodType = new core_1.ComplexTypeEnumPropertyField('SubPeriodType', _this);
        /**
         * Representation of the [[PeriodCategory.numberOfPeriods]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.numberOfPeriods = new core_1.ComplexTypeNumberPropertyField('NumberOfPeriods', _this, 'Edm.Int32');
        /**
         * Representation of the [[PeriodCategory.periodName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.periodName = new core_1.ComplexTypeStringPropertyField('PeriodName', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.debitorsFollowUpAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.debitorsFollowUpAccount = new core_1.ComplexTypeStringPropertyField('DebitorsFollowUpAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.accountforOutgoingChecks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountforOutgoingChecks = new core_1.ComplexTypeStringPropertyField('AccountforOutgoingChecks', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.accountforCashReceipt]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountforCashReceipt = new core_1.ComplexTypeStringPropertyField('AccountforCashReceipt', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.customersDeductionatSource]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customersDeductionatSource = new core_1.ComplexTypeStringPropertyField('CustomersDeductionatSource', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.commissionAccountDefault]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.commissionAccountDefault = new core_1.ComplexTypeStringPropertyField('CommissionAccountDefault', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.purchaseTax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.purchaseTax = new core_1.ComplexTypeStringPropertyField('PurchaseTax', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.foreignAccountsReceivables]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.foreignAccountsReceivables = new core_1.ComplexTypeStringPropertyField('ForeignAccountsReceivables', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.creditorsFollowUpAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditorsFollowUpAccount = new core_1.ComplexTypeStringPropertyField('CreditorsFollowUpAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.outgoingChecksAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.outgoingChecksAccount = new core_1.ComplexTypeStringPropertyField('OutgoingChecksAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.outgoingCashAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.outgoingCashAccount = new core_1.ComplexTypeStringPropertyField('OutgoingCashAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.accountforCreditMemoPayme]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountforCreditMemoPayme = new core_1.ComplexTypeStringPropertyField('AccountforCreditMemoPayme', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.inputTaxAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inputTaxAccount = new core_1.ComplexTypeStringPropertyField('InputTaxAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.taxDefinition]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxDefinition = new core_1.ComplexTypeStringPropertyField('TaxDefinition', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.withholodingTax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.withholodingTax = new core_1.ComplexTypeStringPropertyField('WithholodingTax', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.openingBalancesAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.openingBalancesAccount = new core_1.ComplexTypeStringPropertyField('OpeningBalancesAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.defaultSaleAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultSaleAccount = new core_1.ComplexTypeStringPropertyField('DefaultSaleAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.taxExemptRevenuesDefault]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxExemptRevenuesDefault = new core_1.ComplexTypeStringPropertyField('TaxExemptRevenuesDefault', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.expenseAccountDefault]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expenseAccountDefault = new core_1.ComplexTypeStringPropertyField('ExpenseAccountDefault', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.revenuesAccountForeign]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.revenuesAccountForeign = new core_1.ComplexTypeStringPropertyField('RevenuesAccountForeign', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.salesRevenueEu]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.salesRevenueEu = new core_1.ComplexTypeStringPropertyField('SalesRevenueEU', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.expensesAccountForeign]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expensesAccountForeign = new core_1.ComplexTypeStringPropertyField('ExpensesAccountForeign', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.rateDifferencesDefaultAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rateDifferencesDefaultAcc = new core_1.ComplexTypeStringPropertyField('RateDifferencesDefaultAcc', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.decreaseGlAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.decreaseGlAcc = new core_1.ComplexTypeStringPropertyField('DecreaseGLAcc', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.reconciliationDifference]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reconciliationDifference = new core_1.ComplexTypeStringPropertyField('ReconciliationDifference', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.acountforOpeningWhBalance]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.acountforOpeningWhBalance = new core_1.ComplexTypeStringPropertyField('AcountforOpeningWHBalance', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.apCashDiscountAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.apCashDiscountAccount = new core_1.ComplexTypeStringPropertyField('APCashDiscountAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.apLossCashDiscountAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.apLossCashDiscountAccount = new core_1.ComplexTypeStringPropertyField('APLossCashDiscountAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.apLossRealizedExchangeDif]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.apLossRealizedExchangeDif = new core_1.ComplexTypeStringPropertyField('APLossRealizedExchangeDif', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.arCashDiscountAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.arCashDiscountAccount = new core_1.ComplexTypeStringPropertyField('ARCashDiscountAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.arLossRealizedExchangeDi]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.arLossRealizedExchangeDi = new core_1.ComplexTypeStringPropertyField('ARLossRealizedExchangeDi', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.roundingAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.roundingAccount = new core_1.ComplexTypeStringPropertyField('RoundingAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.apGainRealizedExchngeDif]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.apGainRealizedExchngeDif = new core_1.ComplexTypeStringPropertyField('APGainRealizedExchngeDif', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.arGainRealizedExchngeDif]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.arGainRealizedExchngeDif = new core_1.ComplexTypeStringPropertyField('ARGainRealizedExchngeDif', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.increaseGlAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.increaseGlAccount = new core_1.ComplexTypeStringPropertyField('IncreaseGLAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.salesReturns]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.salesReturns = new core_1.ComplexTypeStringPropertyField('SalesReturns', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.costOfGoodsSold]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costOfGoodsSold = new core_1.ComplexTypeStringPropertyField('CostOfGoodsSold', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.allocationAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.allocationAcc = new core_1.ComplexTypeStringPropertyField('AllocationAcc', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.varianceAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.varianceAcc = new core_1.ComplexTypeStringPropertyField('VarianceAcc', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.priceDifferenceAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priceDifferenceAccount = new core_1.ComplexTypeStringPropertyField('PriceDifferenceAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.customerDownPaymentsAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customerDownPaymentsAccount = new core_1.ComplexTypeStringPropertyField('CustomerDownPaymentsAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.vendorDownPaymentsAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vendorDownPaymentsAccount = new core_1.ComplexTypeStringPropertyField('VendorDownPaymentsAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.billofExchangeAccountsRece]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billofExchangeAccountsRece = new core_1.ComplexTypeStringPropertyField('BillofExchangeAccountsRece', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.custBillofExchangeonC]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.custBillofExchangeonC = new core_1.ComplexTypeStringPropertyField('CustBillofExchangeonC', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.customerBillofExchangePres]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customerBillofExchangePres = new core_1.ComplexTypeStringPropertyField('CustomerBillofExchangePres', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.customerBillofExchngeDisc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customerBillofExchngeDisc = new core_1.ComplexTypeStringPropertyField('CustomerBillofExchngeDisc', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.customerUnpaidBoE]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customerUnpaidBoE = new core_1.ComplexTypeStringPropertyField('CustomerUnpaidBoE', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.boEAccountsPayable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.boEAccountsPayable = new core_1.ComplexTypeStringPropertyField('BoEAccountsPayable', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.boEAccountsPayable2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.boEAccountsPayable2 = new core_1.ComplexTypeStringPropertyField('BoEAccountsPayable2', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.customerDoubtfulDebtsAcct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customerDoubtfulDebtsAcct = new core_1.ComplexTypeStringPropertyField('CustomerDoubtfulDebtsAcct', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.vendorDoubtfulDebtsAcct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vendorDoubtfulDebtsAcct = new core_1.ComplexTypeStringPropertyField('VendorDoubtfulDebtsAcct', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.purchaseAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.purchaseAccount = new core_1.ComplexTypeStringPropertyField('PurchaseAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.purchaseReturnAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.purchaseReturnAccount = new core_1.ComplexTypeStringPropertyField('PurchaseReturnAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.purchaseOffsetAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.purchaseOffsetAccount = new core_1.ComplexTypeStringPropertyField('PurchaseOffsetAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.eoyControlAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.eoyControlAccount = new core_1.ComplexTypeStringPropertyField('EOYControlAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.exchangeRateDifferencesAcct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exchangeRateDifferencesAcct = new core_1.ComplexTypeStringPropertyField('ExchangeRateDifferencesAcct', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.goodsClearingAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.goodsClearingAcc = new core_1.ComplexTypeStringPropertyField('GoodsClearingAcc', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.expenseClearingAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expenseClearingAccount = new core_1.ComplexTypeStringPropertyField('ExpenseClearingAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.expenseOffsetAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expenseOffsetAccount = new core_1.ComplexTypeStringPropertyField('ExpenseOffsetAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.costofSaleRevaluationAcct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costofSaleRevaluationAcct = new core_1.ComplexTypeStringPropertyField('CostofSaleRevaluationAcct', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.repomoAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.repomoAccount = new core_1.ComplexTypeStringPropertyField('RepomoAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.wipMaterialVarianceAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wipMaterialVarianceAccount = new core_1.ComplexTypeStringPropertyField('WIPMaterialVarianceAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.downPaymentVatAcctSale]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.downPaymentVatAcctSale = new core_1.ComplexTypeStringPropertyField('DownPaymentVATAcctSale', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.downPaymentVatAcctPurch]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.downPaymentVatAcctPurch = new core_1.ComplexTypeStringPropertyField('DownPaymentVATAcctPurch', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.downPaymentSClearingAcct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.downPaymentSClearingAcct = new core_1.ComplexTypeStringPropertyField('DownPaymentSClearingAcct', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.downPaymentPClearingAcct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.downPaymentPClearingAcct = new core_1.ComplexTypeStringPropertyField('DownPaymentPClearingAcct', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.expenseVarianceAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expenseVarianceAccount = new core_1.ComplexTypeStringPropertyField('ExpenseVarianceAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.costofSaleRevOffsetAcct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costofSaleRevOffsetAcct = new core_1.ComplexTypeStringPropertyField('CostofSaleRevOffsetAcct', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.euExpenseAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.euExpenseAccount = new core_1.ComplexTypeStringPropertyField('EUExpenseAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.stockAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stockAccount = new core_1.ComplexTypeStringPropertyField('StockAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.inventoryOffsetIncrease]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryOffsetIncrease = new core_1.ComplexTypeStringPropertyField('InventoryOffsetIncrease', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.inventoryOffsetDecrease]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryOffsetDecrease = new core_1.ComplexTypeStringPropertyField('InventoryOffsetDecrease', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.vendorAssetsAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vendorAssetsAccount = new core_1.ComplexTypeStringPropertyField('VendorAssetsAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.stockRevaluationAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stockRevaluationAccount = new core_1.ComplexTypeStringPropertyField('StockRevaluationAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.stockRevaluationOffsetAcct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stockRevaluationOffsetAcct = new core_1.ComplexTypeStringPropertyField('StockRevaluationOffsetAcct', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.wipMaterialAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wipMaterialAccount = new core_1.ComplexTypeStringPropertyField('WIPMaterialAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.invoicePaymentBp]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.invoicePaymentBp = new core_1.ComplexTypeStringPropertyField('InvoicePaymentBP', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.glRevaluationOffsetAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.glRevaluationOffsetAccount = new core_1.ComplexTypeStringPropertyField('GLRevaluationOffsetAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.overpaymentsApAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.overpaymentsApAccount = new core_1.ComplexTypeStringPropertyField('OverpaymentsAPAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.underpaymentsApAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.underpaymentsApAccount = new core_1.ComplexTypeStringPropertyField('UnderpaymentsAPAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.overpaymentsArAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.overpaymentsArAccount = new core_1.ComplexTypeStringPropertyField('OverpaymentsARAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.underpaymentsArAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.underpaymentsArAccount = new core_1.ComplexTypeStringPropertyField('UnderpaymentsARAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.purchaseCreditAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.purchaseCreditAcc = new core_1.ComplexTypeStringPropertyField('PurchaseCreditAcc', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.euPurchaseCreditAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.euPurchaseCreditAcc = new core_1.ComplexTypeStringPropertyField('EUPurchaseCreditAcc', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.foreignPurchaseCreditAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.foreignPurchaseCreditAcc = new core_1.ComplexTypeStringPropertyField('ForeignPurchaseCreditAcc', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.salesCreditAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.salesCreditAcc = new core_1.ComplexTypeStringPropertyField('SalesCreditAcc', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.salesCreditEuAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.salesCreditEuAcc = new core_1.ComplexTypeStringPropertyField('SalesCreditEUAcc', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.exemptedCredits]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exemptedCredits = new core_1.ComplexTypeStringPropertyField('ExemptedCredits', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.salesCreditForeignAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.salesCreditForeignAcc = new core_1.ComplexTypeStringPropertyField('SalesCreditForeignAcc', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.fromPostingDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fromPostingDate = new core_1.ComplexTypeDatePropertyField('FromPostingDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PeriodCategory.toPostingDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.toPostingDate = new core_1.ComplexTypeDatePropertyField('ToPostingDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PeriodCategory.fromDueDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fromDueDate = new core_1.ComplexTypeDatePropertyField('FromDueDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PeriodCategory.toDueDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.toDueDate = new core_1.ComplexTypeDatePropertyField('ToDueDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PeriodCategory.fromDocumentDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fromDocumentDate = new core_1.ComplexTypeDatePropertyField('FromDocumentDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PeriodCategory.toDocumentDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.toDocumentDate = new core_1.ComplexTypeDatePropertyField('ToDocumentDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PeriodCategory.outgoingTaxAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.outgoingTaxAccount = new core_1.ComplexTypeStringPropertyField('OutgoingTaxAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.negativeInventoryAdjustmentAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.negativeInventoryAdjustmentAccount = new core_1.ComplexTypeStringPropertyField('NegativeInventoryAdjustmentAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.financialYear]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.financialYear = new core_1.ComplexTypeNumberPropertyField('FinancialYear', _this, 'Edm.Int32');
        /**
         * Representation of the [[PeriodCategory.selfInvoiceRevenueAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.selfInvoiceRevenueAccount = new core_1.ComplexTypeStringPropertyField('SelfInvoiceRevenueAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.selfInvoiceExpenseAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.selfInvoiceExpenseAccount = new core_1.ComplexTypeStringPropertyField('SelfInvoiceExpenseAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.stockInTransitAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stockInTransitAccount = new core_1.ComplexTypeStringPropertyField('StockInTransitAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.salesDownPaymentInterimAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.salesDownPaymentInterimAccount = new core_1.ComplexTypeStringPropertyField('SalesDownPaymentInterimAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.purchaseDownPaymentInterimAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.purchaseDownPaymentInterimAccount = new core_1.ComplexTypeStringPropertyField('PurchaseDownPaymentInterimAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.euAccountsReceivable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.euAccountsReceivable = new core_1.ComplexTypeStringPropertyField('EUAccountsReceivable', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.euAccountsPayable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.euAccountsPayable = new core_1.ComplexTypeStringPropertyField('EUAccountsPayable', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.wipOffsetProfitAndLossAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wipOffsetProfitAndLossAccount = new core_1.ComplexTypeStringPropertyField('WipOffsetProfitAndLossAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.inventoryOffsetProfitAndLossAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryOffsetProfitAndLossAccount = new core_1.ComplexTypeStringPropertyField('InventoryOffsetProfitAndLossAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.dunningInterestAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dunningInterestAccount = new core_1.ComplexTypeStringPropertyField('DunningInterestAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.dunningFeeAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dunningFeeAccount = new core_1.ComplexTypeStringPropertyField('DunningFeeAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.arGainRealizedConversionDiff]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.arGainRealizedConversionDiff = new core_1.ComplexTypeStringPropertyField('ARGainRealizedConversionDiff', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.arLossRealizedConversionDiff]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.arLossRealizedConversionDiff = new core_1.ComplexTypeStringPropertyField('ARLossRealizedConversionDiff', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.apGainRealizedConversionDiff]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.apGainRealizedConversionDiff = new core_1.ComplexTypeStringPropertyField('APGainRealizedConversionDiff', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.apLossRealizedConversionDiff]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.apLossRealizedConversionDiff = new core_1.ComplexTypeStringPropertyField('APLossRealizedConversionDiff', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.glGainRealizedConversionDiff]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.glGainRealizedConversionDiff = new core_1.ComplexTypeStringPropertyField('GLGainRealizedConversionDiff', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.glLossRealizedConversionDiff]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.glLossRealizedConversionDiff = new core_1.ComplexTypeStringPropertyField('GLLossRealizedConversionDiff', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.arExRateInterim]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.arExRateInterim = new core_1.ComplexTypeStringPropertyField('ARExRateInterim', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.apExRateInterim]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.apExRateInterim = new core_1.ComplexTypeStringPropertyField('APExRateInterim', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.arCashDiscountInterim]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.arCashDiscountInterim = new core_1.ComplexTypeStringPropertyField('ARCashDiscountInterim', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.apCashDiscountInterim]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.apCashDiscountInterim = new core_1.ComplexTypeStringPropertyField('APCashDiscountInterim', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.wipMappingCollection]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wipMappingCollection = new core_1.CollectionField('WIPMappingCollection', _this, WipMapping_1.WipMapping);
        return _this;
    }
    return PeriodCategoryField;
}(core_1.ComplexTypeField));
exports.PeriodCategoryField = PeriodCategoryField;
var PeriodCategory;
(function (PeriodCategory) {
    /**
     * Metadata information on all properties of the `PeriodCategory` complex type.
     */
    PeriodCategory._propertyMetadata = [{
            originalName: 'AbsoluteEntry',
            name: 'absoluteEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BeginningofFinancialYear',
            name: 'beginningofFinancialYear',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'PeriodCategory',
            name: 'periodCategory',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SubPeriodType',
            name: 'subPeriodType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'NumberOfPeriods',
            name: 'numberOfPeriods',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'PeriodName',
            name: 'periodName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DebitorsFollowUpAccount',
            name: 'debitorsFollowUpAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AccountforOutgoingChecks',
            name: 'accountforOutgoingChecks',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AccountforCashReceipt',
            name: 'accountforCashReceipt',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CustomersDeductionatSource',
            name: 'customersDeductionatSource',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CommissionAccountDefault',
            name: 'commissionAccountDefault',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PurchaseTax',
            name: 'purchaseTax',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ForeignAccountsReceivables',
            name: 'foreignAccountsReceivables',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CreditorsFollowUpAccount',
            name: 'creditorsFollowUpAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'OutgoingChecksAccount',
            name: 'outgoingChecksAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'OutgoingCashAccount',
            name: 'outgoingCashAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AccountforCreditMemoPayme',
            name: 'accountforCreditMemoPayme',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'InputTaxAccount',
            name: 'inputTaxAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxDefinition',
            name: 'taxDefinition',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'WithholodingTax',
            name: 'withholodingTax',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'OpeningBalancesAccount',
            name: 'openingBalancesAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DefaultSaleAccount',
            name: 'defaultSaleAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxExemptRevenuesDefault',
            name: 'taxExemptRevenuesDefault',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ExpenseAccountDefault',
            name: 'expenseAccountDefault',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'RevenuesAccountForeign',
            name: 'revenuesAccountForeign',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SalesRevenueEU',
            name: 'salesRevenueEu',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ExpensesAccountForeign',
            name: 'expensesAccountForeign',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'RateDifferencesDefaultAcc',
            name: 'rateDifferencesDefaultAcc',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DecreaseGLAcc',
            name: 'decreaseGlAcc',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ReconciliationDifference',
            name: 'reconciliationDifference',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AcountforOpeningWHBalance',
            name: 'acountforOpeningWhBalance',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'APCashDiscountAccount',
            name: 'apCashDiscountAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'APLossCashDiscountAccount',
            name: 'apLossCashDiscountAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'APLossRealizedExchangeDif',
            name: 'apLossRealizedExchangeDif',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ARCashDiscountAccount',
            name: 'arCashDiscountAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ARLossRealizedExchangeDi',
            name: 'arLossRealizedExchangeDi',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'RoundingAccount',
            name: 'roundingAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'APGainRealizedExchngeDif',
            name: 'apGainRealizedExchngeDif',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ARGainRealizedExchngeDif',
            name: 'arGainRealizedExchngeDif',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'IncreaseGLAccount',
            name: 'increaseGlAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SalesReturns',
            name: 'salesReturns',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CostOfGoodsSold',
            name: 'costOfGoodsSold',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AllocationAcc',
            name: 'allocationAcc',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'VarianceAcc',
            name: 'varianceAcc',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PriceDifferenceAccount',
            name: 'priceDifferenceAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CustomerDownPaymentsAccount',
            name: 'customerDownPaymentsAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'VendorDownPaymentsAccount',
            name: 'vendorDownPaymentsAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BillofExchangeAccountsRece',
            name: 'billofExchangeAccountsRece',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CustBillofExchangeonC',
            name: 'custBillofExchangeonC',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CustomerBillofExchangePres',
            name: 'customerBillofExchangePres',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CustomerBillofExchngeDisc',
            name: 'customerBillofExchngeDisc',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CustomerUnpaidBoE',
            name: 'customerUnpaidBoE',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BoEAccountsPayable',
            name: 'boEAccountsPayable',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BoEAccountsPayable2',
            name: 'boEAccountsPayable2',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CustomerDoubtfulDebtsAcct',
            name: 'customerDoubtfulDebtsAcct',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'VendorDoubtfulDebtsAcct',
            name: 'vendorDoubtfulDebtsAcct',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PurchaseAccount',
            name: 'purchaseAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PurchaseReturnAccount',
            name: 'purchaseReturnAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PurchaseOffsetAccount',
            name: 'purchaseOffsetAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'EOYControlAccount',
            name: 'eoyControlAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ExchangeRateDifferencesAcct',
            name: 'exchangeRateDifferencesAcct',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'GoodsClearingAcc',
            name: 'goodsClearingAcc',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ExpenseClearingAccount',
            name: 'expenseClearingAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ExpenseOffsetAccount',
            name: 'expenseOffsetAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CostofSaleRevaluationAcct',
            name: 'costofSaleRevaluationAcct',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'RepomoAccount',
            name: 'repomoAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'WIPMaterialVarianceAccount',
            name: 'wipMaterialVarianceAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DownPaymentVATAcctSale',
            name: 'downPaymentVatAcctSale',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DownPaymentVATAcctPurch',
            name: 'downPaymentVatAcctPurch',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DownPaymentSClearingAcct',
            name: 'downPaymentSClearingAcct',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DownPaymentPClearingAcct',
            name: 'downPaymentPClearingAcct',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ExpenseVarianceAccount',
            name: 'expenseVarianceAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CostofSaleRevOffsetAcct',
            name: 'costofSaleRevOffsetAcct',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'EUExpenseAccount',
            name: 'euExpenseAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'StockAccount',
            name: 'stockAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'InventoryOffsetIncrease',
            name: 'inventoryOffsetIncrease',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'InventoryOffsetDecrease',
            name: 'inventoryOffsetDecrease',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'VendorAssetsAccount',
            name: 'vendorAssetsAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'StockRevaluationAccount',
            name: 'stockRevaluationAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'StockRevaluationOffsetAcct',
            name: 'stockRevaluationOffsetAcct',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'WIPMaterialAccount',
            name: 'wipMaterialAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'InvoicePaymentBP',
            name: 'invoicePaymentBp',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'GLRevaluationOffsetAccount',
            name: 'glRevaluationOffsetAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'OverpaymentsAPAccount',
            name: 'overpaymentsApAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'UnderpaymentsAPAccount',
            name: 'underpaymentsApAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'OverpaymentsARAccount',
            name: 'overpaymentsArAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'UnderpaymentsARAccount',
            name: 'underpaymentsArAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PurchaseCreditAcc',
            name: 'purchaseCreditAcc',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'EUPurchaseCreditAcc',
            name: 'euPurchaseCreditAcc',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ForeignPurchaseCreditAcc',
            name: 'foreignPurchaseCreditAcc',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SalesCreditAcc',
            name: 'salesCreditAcc',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SalesCreditEUAcc',
            name: 'salesCreditEuAcc',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ExemptedCredits',
            name: 'exemptedCredits',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SalesCreditForeignAcc',
            name: 'salesCreditForeignAcc',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'FromPostingDate',
            name: 'fromPostingDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'ToPostingDate',
            name: 'toPostingDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'FromDueDate',
            name: 'fromDueDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'ToDueDate',
            name: 'toDueDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'FromDocumentDate',
            name: 'fromDocumentDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'ToDocumentDate',
            name: 'toDocumentDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'OutgoingTaxAccount',
            name: 'outgoingTaxAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'NegativeInventoryAdjustmentAccount',
            name: 'negativeInventoryAdjustmentAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'FinancialYear',
            name: 'financialYear',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'SelfInvoiceRevenueAccount',
            name: 'selfInvoiceRevenueAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SelfInvoiceExpenseAccount',
            name: 'selfInvoiceExpenseAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'StockInTransitAccount',
            name: 'stockInTransitAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SalesDownPaymentInterimAccount',
            name: 'salesDownPaymentInterimAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PurchaseDownPaymentInterimAccount',
            name: 'purchaseDownPaymentInterimAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'EUAccountsReceivable',
            name: 'euAccountsReceivable',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'EUAccountsPayable',
            name: 'euAccountsPayable',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'WipOffsetProfitAndLossAccount',
            name: 'wipOffsetProfitAndLossAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'InventoryOffsetProfitAndLossAccount',
            name: 'inventoryOffsetProfitAndLossAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DunningInterestAccount',
            name: 'dunningInterestAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DunningFeeAccount',
            name: 'dunningFeeAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ARGainRealizedConversionDiff',
            name: 'arGainRealizedConversionDiff',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ARLossRealizedConversionDiff',
            name: 'arLossRealizedConversionDiff',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'APGainRealizedConversionDiff',
            name: 'apGainRealizedConversionDiff',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'APLossRealizedConversionDiff',
            name: 'apLossRealizedConversionDiff',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'GLGainRealizedConversionDiff',
            name: 'glGainRealizedConversionDiff',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'GLLossRealizedConversionDiff',
            name: 'glLossRealizedConversionDiff',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ARExRateInterim',
            name: 'arExRateInterim',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'APExRateInterim',
            name: 'apExRateInterim',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ARCashDiscountInterim',
            name: 'arCashDiscountInterim',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'APCashDiscountInterim',
            name: 'apCashDiscountInterim',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'WIPMappingCollection',
            name: 'wipMappingCollection',
            type: WipMapping_1.WipMapping,
            isCollection: true
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, PeriodCategory);
    }
    PeriodCategory.build = build;
})(PeriodCategory = exports.PeriodCategory || (exports.PeriodCategory = {}));
//# sourceMappingURL=PeriodCategory.js.map