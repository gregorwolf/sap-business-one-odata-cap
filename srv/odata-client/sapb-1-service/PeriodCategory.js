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
exports.PeriodCategory = exports.PeriodCategoryField = exports.createPeriodCategory = void 0;
var WipMapping_1 = require("./WipMapping");
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function PeriodCategoryField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[PeriodCategory.absoluteEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absoluteEntry = new v4_1.ComplexTypeNumberPropertyField('AbsoluteEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[PeriodCategory.beginningofFinancialYear]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.beginningofFinancialYear = new v4_1.ComplexTypeDatePropertyField('BeginningofFinancialYear', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PeriodCategory.periodCategory]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.periodCategory = new v4_1.ComplexTypeStringPropertyField('PeriodCategory', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.numberOfPeriods]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.numberOfPeriods = new v4_1.ComplexTypeNumberPropertyField('NumberOfPeriods', _this, 'Edm.Int32');
        /**
         * Representation of the [[PeriodCategory.periodName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.periodName = new v4_1.ComplexTypeStringPropertyField('PeriodName', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.debitorsFollowUpAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.debitorsFollowUpAccount = new v4_1.ComplexTypeStringPropertyField('DebitorsFollowUpAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.accountforOutgoingChecks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountforOutgoingChecks = new v4_1.ComplexTypeStringPropertyField('AccountforOutgoingChecks', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.accountforCashReceipt]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountforCashReceipt = new v4_1.ComplexTypeStringPropertyField('AccountforCashReceipt', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.customersDeductionatSource]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customersDeductionatSource = new v4_1.ComplexTypeStringPropertyField('CustomersDeductionatSource', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.commissionAccountDefault]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.commissionAccountDefault = new v4_1.ComplexTypeStringPropertyField('CommissionAccountDefault', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.purchaseTax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.purchaseTax = new v4_1.ComplexTypeStringPropertyField('PurchaseTax', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.foreignAccountsReceivables]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.foreignAccountsReceivables = new v4_1.ComplexTypeStringPropertyField('ForeignAccountsReceivables', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.creditorsFollowUpAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditorsFollowUpAccount = new v4_1.ComplexTypeStringPropertyField('CreditorsFollowUpAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.outgoingChecksAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.outgoingChecksAccount = new v4_1.ComplexTypeStringPropertyField('OutgoingChecksAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.outgoingCashAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.outgoingCashAccount = new v4_1.ComplexTypeStringPropertyField('OutgoingCashAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.accountforCreditMemoPayme]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountforCreditMemoPayme = new v4_1.ComplexTypeStringPropertyField('AccountforCreditMemoPayme', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.inputTaxAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inputTaxAccount = new v4_1.ComplexTypeStringPropertyField('InputTaxAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.taxDefinition]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxDefinition = new v4_1.ComplexTypeStringPropertyField('TaxDefinition', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.withholodingTax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.withholodingTax = new v4_1.ComplexTypeStringPropertyField('WithholodingTax', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.openingBalancesAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.openingBalancesAccount = new v4_1.ComplexTypeStringPropertyField('OpeningBalancesAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.defaultSaleAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultSaleAccount = new v4_1.ComplexTypeStringPropertyField('DefaultSaleAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.taxExemptRevenuesDefault]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxExemptRevenuesDefault = new v4_1.ComplexTypeStringPropertyField('TaxExemptRevenuesDefault', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.expenseAccountDefault]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expenseAccountDefault = new v4_1.ComplexTypeStringPropertyField('ExpenseAccountDefault', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.revenuesAccountForeign]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.revenuesAccountForeign = new v4_1.ComplexTypeStringPropertyField('RevenuesAccountForeign', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.salesRevenueEu]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.salesRevenueEu = new v4_1.ComplexTypeStringPropertyField('SalesRevenueEU', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.expensesAccountForeign]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expensesAccountForeign = new v4_1.ComplexTypeStringPropertyField('ExpensesAccountForeign', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.rateDifferencesDefaultAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rateDifferencesDefaultAcc = new v4_1.ComplexTypeStringPropertyField('RateDifferencesDefaultAcc', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.decreaseGlAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.decreaseGlAcc = new v4_1.ComplexTypeStringPropertyField('DecreaseGLAcc', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.reconciliationDifference]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reconciliationDifference = new v4_1.ComplexTypeStringPropertyField('ReconciliationDifference', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.acountforOpeningWhBalance]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.acountforOpeningWhBalance = new v4_1.ComplexTypeStringPropertyField('AcountforOpeningWHBalance', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.apCashDiscountAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.apCashDiscountAccount = new v4_1.ComplexTypeStringPropertyField('APCashDiscountAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.apLossCashDiscountAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.apLossCashDiscountAccount = new v4_1.ComplexTypeStringPropertyField('APLossCashDiscountAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.apLossRealizedExchangeDif]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.apLossRealizedExchangeDif = new v4_1.ComplexTypeStringPropertyField('APLossRealizedExchangeDif', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.arCashDiscountAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.arCashDiscountAccount = new v4_1.ComplexTypeStringPropertyField('ARCashDiscountAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.arLossRealizedExchangeDi]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.arLossRealizedExchangeDi = new v4_1.ComplexTypeStringPropertyField('ARLossRealizedExchangeDi', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.roundingAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.roundingAccount = new v4_1.ComplexTypeStringPropertyField('RoundingAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.apGainRealizedExchngeDif]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.apGainRealizedExchngeDif = new v4_1.ComplexTypeStringPropertyField('APGainRealizedExchngeDif', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.arGainRealizedExchngeDif]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.arGainRealizedExchngeDif = new v4_1.ComplexTypeStringPropertyField('ARGainRealizedExchngeDif', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.increaseGlAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.increaseGlAccount = new v4_1.ComplexTypeStringPropertyField('IncreaseGLAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.salesReturns]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.salesReturns = new v4_1.ComplexTypeStringPropertyField('SalesReturns', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.costOfGoodsSold]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costOfGoodsSold = new v4_1.ComplexTypeStringPropertyField('CostOfGoodsSold', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.allocationAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.allocationAcc = new v4_1.ComplexTypeStringPropertyField('AllocationAcc', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.varianceAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.varianceAcc = new v4_1.ComplexTypeStringPropertyField('VarianceAcc', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.priceDifferenceAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priceDifferenceAccount = new v4_1.ComplexTypeStringPropertyField('PriceDifferenceAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.customerDownPaymentsAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customerDownPaymentsAccount = new v4_1.ComplexTypeStringPropertyField('CustomerDownPaymentsAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.vendorDownPaymentsAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vendorDownPaymentsAccount = new v4_1.ComplexTypeStringPropertyField('VendorDownPaymentsAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.billofExchangeAccountsRece]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billofExchangeAccountsRece = new v4_1.ComplexTypeStringPropertyField('BillofExchangeAccountsRece', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.custBillofExchangeonC]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.custBillofExchangeonC = new v4_1.ComplexTypeStringPropertyField('CustBillofExchangeonC', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.customerBillofExchangePres]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customerBillofExchangePres = new v4_1.ComplexTypeStringPropertyField('CustomerBillofExchangePres', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.customerBillofExchngeDisc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customerBillofExchngeDisc = new v4_1.ComplexTypeStringPropertyField('CustomerBillofExchngeDisc', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.customerUnpaidBoE]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customerUnpaidBoE = new v4_1.ComplexTypeStringPropertyField('CustomerUnpaidBoE', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.boEAccountsPayable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.boEAccountsPayable = new v4_1.ComplexTypeStringPropertyField('BoEAccountsPayable', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.boEAccountsPayable2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.boEAccountsPayable2 = new v4_1.ComplexTypeStringPropertyField('BoEAccountsPayable2', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.customerDoubtfulDebtsAcct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customerDoubtfulDebtsAcct = new v4_1.ComplexTypeStringPropertyField('CustomerDoubtfulDebtsAcct', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.vendorDoubtfulDebtsAcct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vendorDoubtfulDebtsAcct = new v4_1.ComplexTypeStringPropertyField('VendorDoubtfulDebtsAcct', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.purchaseAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.purchaseAccount = new v4_1.ComplexTypeStringPropertyField('PurchaseAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.purchaseReturnAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.purchaseReturnAccount = new v4_1.ComplexTypeStringPropertyField('PurchaseReturnAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.purchaseOffsetAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.purchaseOffsetAccount = new v4_1.ComplexTypeStringPropertyField('PurchaseOffsetAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.eoyControlAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.eoyControlAccount = new v4_1.ComplexTypeStringPropertyField('EOYControlAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.exchangeRateDifferencesAcct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exchangeRateDifferencesAcct = new v4_1.ComplexTypeStringPropertyField('ExchangeRateDifferencesAcct', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.goodsClearingAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.goodsClearingAcc = new v4_1.ComplexTypeStringPropertyField('GoodsClearingAcc', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.expenseClearingAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expenseClearingAccount = new v4_1.ComplexTypeStringPropertyField('ExpenseClearingAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.expenseOffsetAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expenseOffsetAccount = new v4_1.ComplexTypeStringPropertyField('ExpenseOffsetAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.costofSaleRevaluationAcct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costofSaleRevaluationAcct = new v4_1.ComplexTypeStringPropertyField('CostofSaleRevaluationAcct', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.repomoAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.repomoAccount = new v4_1.ComplexTypeStringPropertyField('RepomoAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.wipMaterialVarianceAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wipMaterialVarianceAccount = new v4_1.ComplexTypeStringPropertyField('WIPMaterialVarianceAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.downPaymentVatAcctSale]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.downPaymentVatAcctSale = new v4_1.ComplexTypeStringPropertyField('DownPaymentVATAcctSale', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.downPaymentVatAcctPurch]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.downPaymentVatAcctPurch = new v4_1.ComplexTypeStringPropertyField('DownPaymentVATAcctPurch', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.downPaymentSClearingAcct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.downPaymentSClearingAcct = new v4_1.ComplexTypeStringPropertyField('DownPaymentSClearingAcct', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.downPaymentPClearingAcct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.downPaymentPClearingAcct = new v4_1.ComplexTypeStringPropertyField('DownPaymentPClearingAcct', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.expenseVarianceAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expenseVarianceAccount = new v4_1.ComplexTypeStringPropertyField('ExpenseVarianceAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.costofSaleRevOffsetAcct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costofSaleRevOffsetAcct = new v4_1.ComplexTypeStringPropertyField('CostofSaleRevOffsetAcct', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.euExpenseAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.euExpenseAccount = new v4_1.ComplexTypeStringPropertyField('EUExpenseAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.stockAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stockAccount = new v4_1.ComplexTypeStringPropertyField('StockAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.inventoryOffsetIncrease]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryOffsetIncrease = new v4_1.ComplexTypeStringPropertyField('InventoryOffsetIncrease', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.inventoryOffsetDecrease]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryOffsetDecrease = new v4_1.ComplexTypeStringPropertyField('InventoryOffsetDecrease', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.vendorAssetsAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vendorAssetsAccount = new v4_1.ComplexTypeStringPropertyField('VendorAssetsAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.stockRevaluationAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stockRevaluationAccount = new v4_1.ComplexTypeStringPropertyField('StockRevaluationAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.stockRevaluationOffsetAcct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stockRevaluationOffsetAcct = new v4_1.ComplexTypeStringPropertyField('StockRevaluationOffsetAcct', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.wipMaterialAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wipMaterialAccount = new v4_1.ComplexTypeStringPropertyField('WIPMaterialAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.invoicePaymentBp]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.invoicePaymentBp = new v4_1.ComplexTypeStringPropertyField('InvoicePaymentBP', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.glRevaluationOffsetAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.glRevaluationOffsetAccount = new v4_1.ComplexTypeStringPropertyField('GLRevaluationOffsetAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.overpaymentsApAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.overpaymentsApAccount = new v4_1.ComplexTypeStringPropertyField('OverpaymentsAPAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.underpaymentsApAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.underpaymentsApAccount = new v4_1.ComplexTypeStringPropertyField('UnderpaymentsAPAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.overpaymentsArAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.overpaymentsArAccount = new v4_1.ComplexTypeStringPropertyField('OverpaymentsARAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.underpaymentsArAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.underpaymentsArAccount = new v4_1.ComplexTypeStringPropertyField('UnderpaymentsARAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.purchaseCreditAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.purchaseCreditAcc = new v4_1.ComplexTypeStringPropertyField('PurchaseCreditAcc', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.euPurchaseCreditAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.euPurchaseCreditAcc = new v4_1.ComplexTypeStringPropertyField('EUPurchaseCreditAcc', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.foreignPurchaseCreditAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.foreignPurchaseCreditAcc = new v4_1.ComplexTypeStringPropertyField('ForeignPurchaseCreditAcc', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.salesCreditAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.salesCreditAcc = new v4_1.ComplexTypeStringPropertyField('SalesCreditAcc', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.salesCreditEuAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.salesCreditEuAcc = new v4_1.ComplexTypeStringPropertyField('SalesCreditEUAcc', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.exemptedCredits]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exemptedCredits = new v4_1.ComplexTypeStringPropertyField('ExemptedCredits', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.salesCreditForeignAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.salesCreditForeignAcc = new v4_1.ComplexTypeStringPropertyField('SalesCreditForeignAcc', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.fromPostingDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fromPostingDate = new v4_1.ComplexTypeDatePropertyField('FromPostingDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PeriodCategory.toPostingDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.toPostingDate = new v4_1.ComplexTypeDatePropertyField('ToPostingDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PeriodCategory.fromDueDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fromDueDate = new v4_1.ComplexTypeDatePropertyField('FromDueDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PeriodCategory.toDueDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.toDueDate = new v4_1.ComplexTypeDatePropertyField('ToDueDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PeriodCategory.fromDocumentDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fromDocumentDate = new v4_1.ComplexTypeDatePropertyField('FromDocumentDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PeriodCategory.toDocumentDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.toDocumentDate = new v4_1.ComplexTypeDatePropertyField('ToDocumentDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PeriodCategory.outgoingTaxAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.outgoingTaxAccount = new v4_1.ComplexTypeStringPropertyField('OutgoingTaxAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.negativeInventoryAdjustmentAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.negativeInventoryAdjustmentAccount = new v4_1.ComplexTypeStringPropertyField('NegativeInventoryAdjustmentAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.financialYear]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.financialYear = new v4_1.ComplexTypeNumberPropertyField('FinancialYear', _this, 'Edm.Int32');
        /**
         * Representation of the [[PeriodCategory.selfInvoiceRevenueAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.selfInvoiceRevenueAccount = new v4_1.ComplexTypeStringPropertyField('SelfInvoiceRevenueAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.selfInvoiceExpenseAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.selfInvoiceExpenseAccount = new v4_1.ComplexTypeStringPropertyField('SelfInvoiceExpenseAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.stockInTransitAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stockInTransitAccount = new v4_1.ComplexTypeStringPropertyField('StockInTransitAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.salesDownPaymentInterimAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.salesDownPaymentInterimAccount = new v4_1.ComplexTypeStringPropertyField('SalesDownPaymentInterimAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.purchaseDownPaymentInterimAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.purchaseDownPaymentInterimAccount = new v4_1.ComplexTypeStringPropertyField('PurchaseDownPaymentInterimAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.euAccountsReceivable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.euAccountsReceivable = new v4_1.ComplexTypeStringPropertyField('EUAccountsReceivable', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.euAccountsPayable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.euAccountsPayable = new v4_1.ComplexTypeStringPropertyField('EUAccountsPayable', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.wipOffsetProfitAndLossAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wipOffsetProfitAndLossAccount = new v4_1.ComplexTypeStringPropertyField('WipOffsetProfitAndLossAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.inventoryOffsetProfitAndLossAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryOffsetProfitAndLossAccount = new v4_1.ComplexTypeStringPropertyField('InventoryOffsetProfitAndLossAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.dunningInterestAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dunningInterestAccount = new v4_1.ComplexTypeStringPropertyField('DunningInterestAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.dunningFeeAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dunningFeeAccount = new v4_1.ComplexTypeStringPropertyField('DunningFeeAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.arGainRealizedConversionDiff]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.arGainRealizedConversionDiff = new v4_1.ComplexTypeStringPropertyField('ARGainRealizedConversionDiff', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.arLossRealizedConversionDiff]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.arLossRealizedConversionDiff = new v4_1.ComplexTypeStringPropertyField('ARLossRealizedConversionDiff', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.apGainRealizedConversionDiff]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.apGainRealizedConversionDiff = new v4_1.ComplexTypeStringPropertyField('APGainRealizedConversionDiff', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.apLossRealizedConversionDiff]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.apLossRealizedConversionDiff = new v4_1.ComplexTypeStringPropertyField('APLossRealizedConversionDiff', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.glGainRealizedConversionDiff]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.glGainRealizedConversionDiff = new v4_1.ComplexTypeStringPropertyField('GLGainRealizedConversionDiff', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.glLossRealizedConversionDiff]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.glLossRealizedConversionDiff = new v4_1.ComplexTypeStringPropertyField('GLLossRealizedConversionDiff', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.arExRateInterim]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.arExRateInterim = new v4_1.ComplexTypeStringPropertyField('ARExRateInterim', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.apExRateInterim]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.apExRateInterim = new v4_1.ComplexTypeStringPropertyField('APExRateInterim', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.arCashDiscountInterim]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.arCashDiscountInterim = new v4_1.ComplexTypeStringPropertyField('ARCashDiscountInterim', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.apCashDiscountInterim]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.apCashDiscountInterim = new v4_1.ComplexTypeStringPropertyField('APCashDiscountInterim', _this, 'Edm.String');
        /**
         * Representation of the [[PeriodCategory.wipMappingCollection]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wipMappingCollection = new WipMapping_1.WipMappingField('WIPMappingCollection', _this);
        return _this;
    }
    return PeriodCategoryField;
}(v4_1.ComplexTypeField));
exports.PeriodCategoryField = PeriodCategoryField;
var PeriodCategory;
(function (PeriodCategory) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AbsoluteEntry: function (absoluteEntry) { return ({ absoluteEntry: v4_1.edmToTs(absoluteEntry, 'Edm.Int32') }); },
            BeginningofFinancialYear: function (beginningofFinancialYear) { return ({ beginningofFinancialYear: v4_1.edmToTs(beginningofFinancialYear, 'Edm.DateTimeOffset') }); },
            PeriodCategory: function (periodCategory) { return ({ periodCategory: v4_1.edmToTs(periodCategory, 'Edm.String') }); },
            NumberOfPeriods: function (numberOfPeriods) { return ({ numberOfPeriods: v4_1.edmToTs(numberOfPeriods, 'Edm.Int32') }); },
            PeriodName: function (periodName) { return ({ periodName: v4_1.edmToTs(periodName, 'Edm.String') }); },
            DebitorsFollowUpAccount: function (debitorsFollowUpAccount) { return ({ debitorsFollowUpAccount: v4_1.edmToTs(debitorsFollowUpAccount, 'Edm.String') }); },
            AccountforOutgoingChecks: function (accountforOutgoingChecks) { return ({ accountforOutgoingChecks: v4_1.edmToTs(accountforOutgoingChecks, 'Edm.String') }); },
            AccountforCashReceipt: function (accountforCashReceipt) { return ({ accountforCashReceipt: v4_1.edmToTs(accountforCashReceipt, 'Edm.String') }); },
            CustomersDeductionatSource: function (customersDeductionatSource) { return ({ customersDeductionatSource: v4_1.edmToTs(customersDeductionatSource, 'Edm.String') }); },
            CommissionAccountDefault: function (commissionAccountDefault) { return ({ commissionAccountDefault: v4_1.edmToTs(commissionAccountDefault, 'Edm.String') }); },
            PurchaseTax: function (purchaseTax) { return ({ purchaseTax: v4_1.edmToTs(purchaseTax, 'Edm.String') }); },
            ForeignAccountsReceivables: function (foreignAccountsReceivables) { return ({ foreignAccountsReceivables: v4_1.edmToTs(foreignAccountsReceivables, 'Edm.String') }); },
            CreditorsFollowUpAccount: function (creditorsFollowUpAccount) { return ({ creditorsFollowUpAccount: v4_1.edmToTs(creditorsFollowUpAccount, 'Edm.String') }); },
            OutgoingChecksAccount: function (outgoingChecksAccount) { return ({ outgoingChecksAccount: v4_1.edmToTs(outgoingChecksAccount, 'Edm.String') }); },
            OutgoingCashAccount: function (outgoingCashAccount) { return ({ outgoingCashAccount: v4_1.edmToTs(outgoingCashAccount, 'Edm.String') }); },
            AccountforCreditMemoPayme: function (accountforCreditMemoPayme) { return ({ accountforCreditMemoPayme: v4_1.edmToTs(accountforCreditMemoPayme, 'Edm.String') }); },
            InputTaxAccount: function (inputTaxAccount) { return ({ inputTaxAccount: v4_1.edmToTs(inputTaxAccount, 'Edm.String') }); },
            TaxDefinition: function (taxDefinition) { return ({ taxDefinition: v4_1.edmToTs(taxDefinition, 'Edm.String') }); },
            WithholodingTax: function (withholodingTax) { return ({ withholodingTax: v4_1.edmToTs(withholodingTax, 'Edm.String') }); },
            OpeningBalancesAccount: function (openingBalancesAccount) { return ({ openingBalancesAccount: v4_1.edmToTs(openingBalancesAccount, 'Edm.String') }); },
            DefaultSaleAccount: function (defaultSaleAccount) { return ({ defaultSaleAccount: v4_1.edmToTs(defaultSaleAccount, 'Edm.String') }); },
            TaxExemptRevenuesDefault: function (taxExemptRevenuesDefault) { return ({ taxExemptRevenuesDefault: v4_1.edmToTs(taxExemptRevenuesDefault, 'Edm.String') }); },
            ExpenseAccountDefault: function (expenseAccountDefault) { return ({ expenseAccountDefault: v4_1.edmToTs(expenseAccountDefault, 'Edm.String') }); },
            RevenuesAccountForeign: function (revenuesAccountForeign) { return ({ revenuesAccountForeign: v4_1.edmToTs(revenuesAccountForeign, 'Edm.String') }); },
            SalesRevenueEU: function (salesRevenueEu) { return ({ salesRevenueEu: v4_1.edmToTs(salesRevenueEu, 'Edm.String') }); },
            ExpensesAccountForeign: function (expensesAccountForeign) { return ({ expensesAccountForeign: v4_1.edmToTs(expensesAccountForeign, 'Edm.String') }); },
            RateDifferencesDefaultAcc: function (rateDifferencesDefaultAcc) { return ({ rateDifferencesDefaultAcc: v4_1.edmToTs(rateDifferencesDefaultAcc, 'Edm.String') }); },
            DecreaseGLAcc: function (decreaseGlAcc) { return ({ decreaseGlAcc: v4_1.edmToTs(decreaseGlAcc, 'Edm.String') }); },
            ReconciliationDifference: function (reconciliationDifference) { return ({ reconciliationDifference: v4_1.edmToTs(reconciliationDifference, 'Edm.String') }); },
            AcountforOpeningWHBalance: function (acountforOpeningWhBalance) { return ({ acountforOpeningWhBalance: v4_1.edmToTs(acountforOpeningWhBalance, 'Edm.String') }); },
            APCashDiscountAccount: function (apCashDiscountAccount) { return ({ apCashDiscountAccount: v4_1.edmToTs(apCashDiscountAccount, 'Edm.String') }); },
            APLossCashDiscountAccount: function (apLossCashDiscountAccount) { return ({ apLossCashDiscountAccount: v4_1.edmToTs(apLossCashDiscountAccount, 'Edm.String') }); },
            APLossRealizedExchangeDif: function (apLossRealizedExchangeDif) { return ({ apLossRealizedExchangeDif: v4_1.edmToTs(apLossRealizedExchangeDif, 'Edm.String') }); },
            ARCashDiscountAccount: function (arCashDiscountAccount) { return ({ arCashDiscountAccount: v4_1.edmToTs(arCashDiscountAccount, 'Edm.String') }); },
            ARLossRealizedExchangeDi: function (arLossRealizedExchangeDi) { return ({ arLossRealizedExchangeDi: v4_1.edmToTs(arLossRealizedExchangeDi, 'Edm.String') }); },
            RoundingAccount: function (roundingAccount) { return ({ roundingAccount: v4_1.edmToTs(roundingAccount, 'Edm.String') }); },
            APGainRealizedExchngeDif: function (apGainRealizedExchngeDif) { return ({ apGainRealizedExchngeDif: v4_1.edmToTs(apGainRealizedExchngeDif, 'Edm.String') }); },
            ARGainRealizedExchngeDif: function (arGainRealizedExchngeDif) { return ({ arGainRealizedExchngeDif: v4_1.edmToTs(arGainRealizedExchngeDif, 'Edm.String') }); },
            IncreaseGLAccount: function (increaseGlAccount) { return ({ increaseGlAccount: v4_1.edmToTs(increaseGlAccount, 'Edm.String') }); },
            SalesReturns: function (salesReturns) { return ({ salesReturns: v4_1.edmToTs(salesReturns, 'Edm.String') }); },
            CostOfGoodsSold: function (costOfGoodsSold) { return ({ costOfGoodsSold: v4_1.edmToTs(costOfGoodsSold, 'Edm.String') }); },
            AllocationAcc: function (allocationAcc) { return ({ allocationAcc: v4_1.edmToTs(allocationAcc, 'Edm.String') }); },
            VarianceAcc: function (varianceAcc) { return ({ varianceAcc: v4_1.edmToTs(varianceAcc, 'Edm.String') }); },
            PriceDifferenceAccount: function (priceDifferenceAccount) { return ({ priceDifferenceAccount: v4_1.edmToTs(priceDifferenceAccount, 'Edm.String') }); },
            CustomerDownPaymentsAccount: function (customerDownPaymentsAccount) { return ({ customerDownPaymentsAccount: v4_1.edmToTs(customerDownPaymentsAccount, 'Edm.String') }); },
            VendorDownPaymentsAccount: function (vendorDownPaymentsAccount) { return ({ vendorDownPaymentsAccount: v4_1.edmToTs(vendorDownPaymentsAccount, 'Edm.String') }); },
            BillofExchangeAccountsRece: function (billofExchangeAccountsRece) { return ({ billofExchangeAccountsRece: v4_1.edmToTs(billofExchangeAccountsRece, 'Edm.String') }); },
            CustBillofExchangeonC: function (custBillofExchangeonC) { return ({ custBillofExchangeonC: v4_1.edmToTs(custBillofExchangeonC, 'Edm.String') }); },
            CustomerBillofExchangePres: function (customerBillofExchangePres) { return ({ customerBillofExchangePres: v4_1.edmToTs(customerBillofExchangePres, 'Edm.String') }); },
            CustomerBillofExchngeDisc: function (customerBillofExchngeDisc) { return ({ customerBillofExchngeDisc: v4_1.edmToTs(customerBillofExchngeDisc, 'Edm.String') }); },
            CustomerUnpaidBoE: function (customerUnpaidBoE) { return ({ customerUnpaidBoE: v4_1.edmToTs(customerUnpaidBoE, 'Edm.String') }); },
            BoEAccountsPayable: function (boEAccountsPayable) { return ({ boEAccountsPayable: v4_1.edmToTs(boEAccountsPayable, 'Edm.String') }); },
            BoEAccountsPayable2: function (boEAccountsPayable2) { return ({ boEAccountsPayable2: v4_1.edmToTs(boEAccountsPayable2, 'Edm.String') }); },
            CustomerDoubtfulDebtsAcct: function (customerDoubtfulDebtsAcct) { return ({ customerDoubtfulDebtsAcct: v4_1.edmToTs(customerDoubtfulDebtsAcct, 'Edm.String') }); },
            VendorDoubtfulDebtsAcct: function (vendorDoubtfulDebtsAcct) { return ({ vendorDoubtfulDebtsAcct: v4_1.edmToTs(vendorDoubtfulDebtsAcct, 'Edm.String') }); },
            PurchaseAccount: function (purchaseAccount) { return ({ purchaseAccount: v4_1.edmToTs(purchaseAccount, 'Edm.String') }); },
            PurchaseReturnAccount: function (purchaseReturnAccount) { return ({ purchaseReturnAccount: v4_1.edmToTs(purchaseReturnAccount, 'Edm.String') }); },
            PurchaseOffsetAccount: function (purchaseOffsetAccount) { return ({ purchaseOffsetAccount: v4_1.edmToTs(purchaseOffsetAccount, 'Edm.String') }); },
            EOYControlAccount: function (eoyControlAccount) { return ({ eoyControlAccount: v4_1.edmToTs(eoyControlAccount, 'Edm.String') }); },
            ExchangeRateDifferencesAcct: function (exchangeRateDifferencesAcct) { return ({ exchangeRateDifferencesAcct: v4_1.edmToTs(exchangeRateDifferencesAcct, 'Edm.String') }); },
            GoodsClearingAcc: function (goodsClearingAcc) { return ({ goodsClearingAcc: v4_1.edmToTs(goodsClearingAcc, 'Edm.String') }); },
            ExpenseClearingAccount: function (expenseClearingAccount) { return ({ expenseClearingAccount: v4_1.edmToTs(expenseClearingAccount, 'Edm.String') }); },
            ExpenseOffsetAccount: function (expenseOffsetAccount) { return ({ expenseOffsetAccount: v4_1.edmToTs(expenseOffsetAccount, 'Edm.String') }); },
            CostofSaleRevaluationAcct: function (costofSaleRevaluationAcct) { return ({ costofSaleRevaluationAcct: v4_1.edmToTs(costofSaleRevaluationAcct, 'Edm.String') }); },
            RepomoAccount: function (repomoAccount) { return ({ repomoAccount: v4_1.edmToTs(repomoAccount, 'Edm.String') }); },
            WIPMaterialVarianceAccount: function (wipMaterialVarianceAccount) { return ({ wipMaterialVarianceAccount: v4_1.edmToTs(wipMaterialVarianceAccount, 'Edm.String') }); },
            DownPaymentVATAcctSale: function (downPaymentVatAcctSale) { return ({ downPaymentVatAcctSale: v4_1.edmToTs(downPaymentVatAcctSale, 'Edm.String') }); },
            DownPaymentVATAcctPurch: function (downPaymentVatAcctPurch) { return ({ downPaymentVatAcctPurch: v4_1.edmToTs(downPaymentVatAcctPurch, 'Edm.String') }); },
            DownPaymentSClearingAcct: function (downPaymentSClearingAcct) { return ({ downPaymentSClearingAcct: v4_1.edmToTs(downPaymentSClearingAcct, 'Edm.String') }); },
            DownPaymentPClearingAcct: function (downPaymentPClearingAcct) { return ({ downPaymentPClearingAcct: v4_1.edmToTs(downPaymentPClearingAcct, 'Edm.String') }); },
            ExpenseVarianceAccount: function (expenseVarianceAccount) { return ({ expenseVarianceAccount: v4_1.edmToTs(expenseVarianceAccount, 'Edm.String') }); },
            CostofSaleRevOffsetAcct: function (costofSaleRevOffsetAcct) { return ({ costofSaleRevOffsetAcct: v4_1.edmToTs(costofSaleRevOffsetAcct, 'Edm.String') }); },
            EUExpenseAccount: function (euExpenseAccount) { return ({ euExpenseAccount: v4_1.edmToTs(euExpenseAccount, 'Edm.String') }); },
            StockAccount: function (stockAccount) { return ({ stockAccount: v4_1.edmToTs(stockAccount, 'Edm.String') }); },
            InventoryOffsetIncrease: function (inventoryOffsetIncrease) { return ({ inventoryOffsetIncrease: v4_1.edmToTs(inventoryOffsetIncrease, 'Edm.String') }); },
            InventoryOffsetDecrease: function (inventoryOffsetDecrease) { return ({ inventoryOffsetDecrease: v4_1.edmToTs(inventoryOffsetDecrease, 'Edm.String') }); },
            VendorAssetsAccount: function (vendorAssetsAccount) { return ({ vendorAssetsAccount: v4_1.edmToTs(vendorAssetsAccount, 'Edm.String') }); },
            StockRevaluationAccount: function (stockRevaluationAccount) { return ({ stockRevaluationAccount: v4_1.edmToTs(stockRevaluationAccount, 'Edm.String') }); },
            StockRevaluationOffsetAcct: function (stockRevaluationOffsetAcct) { return ({ stockRevaluationOffsetAcct: v4_1.edmToTs(stockRevaluationOffsetAcct, 'Edm.String') }); },
            WIPMaterialAccount: function (wipMaterialAccount) { return ({ wipMaterialAccount: v4_1.edmToTs(wipMaterialAccount, 'Edm.String') }); },
            InvoicePaymentBP: function (invoicePaymentBp) { return ({ invoicePaymentBp: v4_1.edmToTs(invoicePaymentBp, 'Edm.String') }); },
            GLRevaluationOffsetAccount: function (glRevaluationOffsetAccount) { return ({ glRevaluationOffsetAccount: v4_1.edmToTs(glRevaluationOffsetAccount, 'Edm.String') }); },
            OverpaymentsAPAccount: function (overpaymentsApAccount) { return ({ overpaymentsApAccount: v4_1.edmToTs(overpaymentsApAccount, 'Edm.String') }); },
            UnderpaymentsAPAccount: function (underpaymentsApAccount) { return ({ underpaymentsApAccount: v4_1.edmToTs(underpaymentsApAccount, 'Edm.String') }); },
            OverpaymentsARAccount: function (overpaymentsArAccount) { return ({ overpaymentsArAccount: v4_1.edmToTs(overpaymentsArAccount, 'Edm.String') }); },
            UnderpaymentsARAccount: function (underpaymentsArAccount) { return ({ underpaymentsArAccount: v4_1.edmToTs(underpaymentsArAccount, 'Edm.String') }); },
            PurchaseCreditAcc: function (purchaseCreditAcc) { return ({ purchaseCreditAcc: v4_1.edmToTs(purchaseCreditAcc, 'Edm.String') }); },
            EUPurchaseCreditAcc: function (euPurchaseCreditAcc) { return ({ euPurchaseCreditAcc: v4_1.edmToTs(euPurchaseCreditAcc, 'Edm.String') }); },
            ForeignPurchaseCreditAcc: function (foreignPurchaseCreditAcc) { return ({ foreignPurchaseCreditAcc: v4_1.edmToTs(foreignPurchaseCreditAcc, 'Edm.String') }); },
            SalesCreditAcc: function (salesCreditAcc) { return ({ salesCreditAcc: v4_1.edmToTs(salesCreditAcc, 'Edm.String') }); },
            SalesCreditEUAcc: function (salesCreditEuAcc) { return ({ salesCreditEuAcc: v4_1.edmToTs(salesCreditEuAcc, 'Edm.String') }); },
            ExemptedCredits: function (exemptedCredits) { return ({ exemptedCredits: v4_1.edmToTs(exemptedCredits, 'Edm.String') }); },
            SalesCreditForeignAcc: function (salesCreditForeignAcc) { return ({ salesCreditForeignAcc: v4_1.edmToTs(salesCreditForeignAcc, 'Edm.String') }); },
            FromPostingDate: function (fromPostingDate) { return ({ fromPostingDate: v4_1.edmToTs(fromPostingDate, 'Edm.DateTimeOffset') }); },
            ToPostingDate: function (toPostingDate) { return ({ toPostingDate: v4_1.edmToTs(toPostingDate, 'Edm.DateTimeOffset') }); },
            FromDueDate: function (fromDueDate) { return ({ fromDueDate: v4_1.edmToTs(fromDueDate, 'Edm.DateTimeOffset') }); },
            ToDueDate: function (toDueDate) { return ({ toDueDate: v4_1.edmToTs(toDueDate, 'Edm.DateTimeOffset') }); },
            FromDocumentDate: function (fromDocumentDate) { return ({ fromDocumentDate: v4_1.edmToTs(fromDocumentDate, 'Edm.DateTimeOffset') }); },
            ToDocumentDate: function (toDocumentDate) { return ({ toDocumentDate: v4_1.edmToTs(toDocumentDate, 'Edm.DateTimeOffset') }); },
            OutgoingTaxAccount: function (outgoingTaxAccount) { return ({ outgoingTaxAccount: v4_1.edmToTs(outgoingTaxAccount, 'Edm.String') }); },
            NegativeInventoryAdjustmentAccount: function (negativeInventoryAdjustmentAccount) { return ({ negativeInventoryAdjustmentAccount: v4_1.edmToTs(negativeInventoryAdjustmentAccount, 'Edm.String') }); },
            FinancialYear: function (financialYear) { return ({ financialYear: v4_1.edmToTs(financialYear, 'Edm.Int32') }); },
            SelfInvoiceRevenueAccount: function (selfInvoiceRevenueAccount) { return ({ selfInvoiceRevenueAccount: v4_1.edmToTs(selfInvoiceRevenueAccount, 'Edm.String') }); },
            SelfInvoiceExpenseAccount: function (selfInvoiceExpenseAccount) { return ({ selfInvoiceExpenseAccount: v4_1.edmToTs(selfInvoiceExpenseAccount, 'Edm.String') }); },
            StockInTransitAccount: function (stockInTransitAccount) { return ({ stockInTransitAccount: v4_1.edmToTs(stockInTransitAccount, 'Edm.String') }); },
            SalesDownPaymentInterimAccount: function (salesDownPaymentInterimAccount) { return ({ salesDownPaymentInterimAccount: v4_1.edmToTs(salesDownPaymentInterimAccount, 'Edm.String') }); },
            PurchaseDownPaymentInterimAccount: function (purchaseDownPaymentInterimAccount) { return ({ purchaseDownPaymentInterimAccount: v4_1.edmToTs(purchaseDownPaymentInterimAccount, 'Edm.String') }); },
            EUAccountsReceivable: function (euAccountsReceivable) { return ({ euAccountsReceivable: v4_1.edmToTs(euAccountsReceivable, 'Edm.String') }); },
            EUAccountsPayable: function (euAccountsPayable) { return ({ euAccountsPayable: v4_1.edmToTs(euAccountsPayable, 'Edm.String') }); },
            WipOffsetProfitAndLossAccount: function (wipOffsetProfitAndLossAccount) { return ({ wipOffsetProfitAndLossAccount: v4_1.edmToTs(wipOffsetProfitAndLossAccount, 'Edm.String') }); },
            InventoryOffsetProfitAndLossAccount: function (inventoryOffsetProfitAndLossAccount) { return ({ inventoryOffsetProfitAndLossAccount: v4_1.edmToTs(inventoryOffsetProfitAndLossAccount, 'Edm.String') }); },
            DunningInterestAccount: function (dunningInterestAccount) { return ({ dunningInterestAccount: v4_1.edmToTs(dunningInterestAccount, 'Edm.String') }); },
            DunningFeeAccount: function (dunningFeeAccount) { return ({ dunningFeeAccount: v4_1.edmToTs(dunningFeeAccount, 'Edm.String') }); },
            ARGainRealizedConversionDiff: function (arGainRealizedConversionDiff) { return ({ arGainRealizedConversionDiff: v4_1.edmToTs(arGainRealizedConversionDiff, 'Edm.String') }); },
            ARLossRealizedConversionDiff: function (arLossRealizedConversionDiff) { return ({ arLossRealizedConversionDiff: v4_1.edmToTs(arLossRealizedConversionDiff, 'Edm.String') }); },
            APGainRealizedConversionDiff: function (apGainRealizedConversionDiff) { return ({ apGainRealizedConversionDiff: v4_1.edmToTs(apGainRealizedConversionDiff, 'Edm.String') }); },
            APLossRealizedConversionDiff: function (apLossRealizedConversionDiff) { return ({ apLossRealizedConversionDiff: v4_1.edmToTs(apLossRealizedConversionDiff, 'Edm.String') }); },
            GLGainRealizedConversionDiff: function (glGainRealizedConversionDiff) { return ({ glGainRealizedConversionDiff: v4_1.edmToTs(glGainRealizedConversionDiff, 'Edm.String') }); },
            GLLossRealizedConversionDiff: function (glLossRealizedConversionDiff) { return ({ glLossRealizedConversionDiff: v4_1.edmToTs(glLossRealizedConversionDiff, 'Edm.String') }); },
            ARExRateInterim: function (arExRateInterim) { return ({ arExRateInterim: v4_1.edmToTs(arExRateInterim, 'Edm.String') }); },
            APExRateInterim: function (apExRateInterim) { return ({ apExRateInterim: v4_1.edmToTs(apExRateInterim, 'Edm.String') }); },
            ARCashDiscountInterim: function (arCashDiscountInterim) { return ({ arCashDiscountInterim: v4_1.edmToTs(arCashDiscountInterim, 'Edm.String') }); },
            APCashDiscountInterim: function (apCashDiscountInterim) { return ({ apCashDiscountInterim: v4_1.edmToTs(apCashDiscountInterim, 'Edm.String') }); },
            WIPMappingCollection: function (wipMappingCollection) { return ({ wipMappingCollection: WipMapping_1.WipMapping.build(wipMappingCollection) }); }
        });
    }
    PeriodCategory.build = build;
})(PeriodCategory = exports.PeriodCategory || (exports.PeriodCategory = {}));
//# sourceMappingURL=PeriodCategory.js.map