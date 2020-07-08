import { Moment } from 'moment';
import { WipMapping, WipMappingField } from './WipMapping';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * PeriodCategory
 */
export interface PeriodCategory {
    /**
     * Absolute Entry.
     * @nullable
     */
    absoluteEntry?: number;
    /**
     * Beginningof Financial Year.
     * @nullable
     */
    beginningofFinancialYear?: Moment;
    /**
     * Period Category.
     * @nullable
     */
    periodCategory?: string;
    /**
     * Number Of Periods.
     * @nullable
     */
    numberOfPeriods?: number;
    /**
     * Period Name.
     * @nullable
     */
    periodName?: string;
    /**
     * Debitors Follow Up Account.
     * @nullable
     */
    debitorsFollowUpAccount?: string;
    /**
     * Accountfor Outgoing Checks.
     * @nullable
     */
    accountforOutgoingChecks?: string;
    /**
     * Accountfor Cash Receipt.
     * @nullable
     */
    accountforCashReceipt?: string;
    /**
     * Customers Deductionat Source.
     * @nullable
     */
    customersDeductionatSource?: string;
    /**
     * Commission Account Default.
     * @nullable
     */
    commissionAccountDefault?: string;
    /**
     * Purchase Tax.
     * @nullable
     */
    purchaseTax?: string;
    /**
     * Foreign Accounts Receivables.
     * @nullable
     */
    foreignAccountsReceivables?: string;
    /**
     * Creditors Follow Up Account.
     * @nullable
     */
    creditorsFollowUpAccount?: string;
    /**
     * Outgoing Checks Account.
     * @nullable
     */
    outgoingChecksAccount?: string;
    /**
     * Outgoing Cash Account.
     * @nullable
     */
    outgoingCashAccount?: string;
    /**
     * Accountfor Credit Memo Payme.
     * @nullable
     */
    accountforCreditMemoPayme?: string;
    /**
     * Input Tax Account.
     * @nullable
     */
    inputTaxAccount?: string;
    /**
     * Tax Definition.
     * @nullable
     */
    taxDefinition?: string;
    /**
     * Withholoding Tax.
     * @nullable
     */
    withholodingTax?: string;
    /**
     * Opening Balances Account.
     * @nullable
     */
    openingBalancesAccount?: string;
    /**
     * Default Sale Account.
     * @nullable
     */
    defaultSaleAccount?: string;
    /**
     * Tax Exempt Revenues Default.
     * @nullable
     */
    taxExemptRevenuesDefault?: string;
    /**
     * Expense Account Default.
     * @nullable
     */
    expenseAccountDefault?: string;
    /**
     * Revenues Account Foreign.
     * @nullable
     */
    revenuesAccountForeign?: string;
    /**
     * Sales Revenue Eu.
     * @nullable
     */
    salesRevenueEu?: string;
    /**
     * Expenses Account Foreign.
     * @nullable
     */
    expensesAccountForeign?: string;
    /**
     * Rate Differences Default Acc.
     * @nullable
     */
    rateDifferencesDefaultAcc?: string;
    /**
     * Decrease Gl Acc.
     * @nullable
     */
    decreaseGlAcc?: string;
    /**
     * Reconciliation Difference.
     * @nullable
     */
    reconciliationDifference?: string;
    /**
     * Acountfor Opening Wh Balance.
     * @nullable
     */
    acountforOpeningWhBalance?: string;
    /**
     * Ap Cash Discount Account.
     * @nullable
     */
    apCashDiscountAccount?: string;
    /**
     * Ap Loss Cash Discount Account.
     * @nullable
     */
    apLossCashDiscountAccount?: string;
    /**
     * Ap Loss Realized Exchange Dif.
     * @nullable
     */
    apLossRealizedExchangeDif?: string;
    /**
     * Ar Cash Discount Account.
     * @nullable
     */
    arCashDiscountAccount?: string;
    /**
     * Ar Loss Realized Exchange Di.
     * @nullable
     */
    arLossRealizedExchangeDi?: string;
    /**
     * Rounding Account.
     * @nullable
     */
    roundingAccount?: string;
    /**
     * Ap Gain Realized Exchnge Dif.
     * @nullable
     */
    apGainRealizedExchngeDif?: string;
    /**
     * Ar Gain Realized Exchnge Dif.
     * @nullable
     */
    arGainRealizedExchngeDif?: string;
    /**
     * Increase Gl Account.
     * @nullable
     */
    increaseGlAccount?: string;
    /**
     * Sales Returns.
     * @nullable
     */
    salesReturns?: string;
    /**
     * Cost Of Goods Sold.
     * @nullable
     */
    costOfGoodsSold?: string;
    /**
     * Allocation Acc.
     * @nullable
     */
    allocationAcc?: string;
    /**
     * Variance Acc.
     * @nullable
     */
    varianceAcc?: string;
    /**
     * Price Difference Account.
     * @nullable
     */
    priceDifferenceAccount?: string;
    /**
     * Customer Down Payments Account.
     * @nullable
     */
    customerDownPaymentsAccount?: string;
    /**
     * Vendor Down Payments Account.
     * @nullable
     */
    vendorDownPaymentsAccount?: string;
    /**
     * Billof Exchange Accounts Rece.
     * @nullable
     */
    billofExchangeAccountsRece?: string;
    /**
     * Cust Billof Exchangeon C.
     * @nullable
     */
    custBillofExchangeonC?: string;
    /**
     * Customer Billof Exchange Pres.
     * @nullable
     */
    customerBillofExchangePres?: string;
    /**
     * Customer Billof Exchnge Disc.
     * @nullable
     */
    customerBillofExchngeDisc?: string;
    /**
     * Customer Unpaid Bo E.
     * @nullable
     */
    customerUnpaidBoE?: string;
    /**
     * Bo E Accounts Payable.
     * @nullable
     */
    boEAccountsPayable?: string;
    /**
     * Bo E Accounts Payable 2.
     * @nullable
     */
    boEAccountsPayable2?: string;
    /**
     * Customer Doubtful Debts Acct.
     * @nullable
     */
    customerDoubtfulDebtsAcct?: string;
    /**
     * Vendor Doubtful Debts Acct.
     * @nullable
     */
    vendorDoubtfulDebtsAcct?: string;
    /**
     * Purchase Account.
     * @nullable
     */
    purchaseAccount?: string;
    /**
     * Purchase Return Account.
     * @nullable
     */
    purchaseReturnAccount?: string;
    /**
     * Purchase Offset Account.
     * @nullable
     */
    purchaseOffsetAccount?: string;
    /**
     * Eoy Control Account.
     * @nullable
     */
    eoyControlAccount?: string;
    /**
     * Exchange Rate Differences Acct.
     * @nullable
     */
    exchangeRateDifferencesAcct?: string;
    /**
     * Goods Clearing Acc.
     * @nullable
     */
    goodsClearingAcc?: string;
    /**
     * Expense Clearing Account.
     * @nullable
     */
    expenseClearingAccount?: string;
    /**
     * Expense Offset Account.
     * @nullable
     */
    expenseOffsetAccount?: string;
    /**
     * Costof Sale Revaluation Acct.
     * @nullable
     */
    costofSaleRevaluationAcct?: string;
    /**
     * Repomo Account.
     * @nullable
     */
    repomoAccount?: string;
    /**
     * Wip Material Variance Account.
     * @nullable
     */
    wipMaterialVarianceAccount?: string;
    /**
     * Down Payment Vat Acct Sale.
     * @nullable
     */
    downPaymentVatAcctSale?: string;
    /**
     * Down Payment Vat Acct Purch.
     * @nullable
     */
    downPaymentVatAcctPurch?: string;
    /**
     * Down Payment S Clearing Acct.
     * @nullable
     */
    downPaymentSClearingAcct?: string;
    /**
     * Down Payment P Clearing Acct.
     * @nullable
     */
    downPaymentPClearingAcct?: string;
    /**
     * Expense Variance Account.
     * @nullable
     */
    expenseVarianceAccount?: string;
    /**
     * Costof Sale Rev Offset Acct.
     * @nullable
     */
    costofSaleRevOffsetAcct?: string;
    /**
     * Eu Expense Account.
     * @nullable
     */
    euExpenseAccount?: string;
    /**
     * Stock Account.
     * @nullable
     */
    stockAccount?: string;
    /**
     * Inventory Offset Increase.
     * @nullable
     */
    inventoryOffsetIncrease?: string;
    /**
     * Inventory Offset Decrease.
     * @nullable
     */
    inventoryOffsetDecrease?: string;
    /**
     * Vendor Assets Account.
     * @nullable
     */
    vendorAssetsAccount?: string;
    /**
     * Stock Revaluation Account.
     * @nullable
     */
    stockRevaluationAccount?: string;
    /**
     * Stock Revaluation Offset Acct.
     * @nullable
     */
    stockRevaluationOffsetAcct?: string;
    /**
     * Wip Material Account.
     * @nullable
     */
    wipMaterialAccount?: string;
    /**
     * Invoice Payment Bp.
     * @nullable
     */
    invoicePaymentBp?: string;
    /**
     * Gl Revaluation Offset Account.
     * @nullable
     */
    glRevaluationOffsetAccount?: string;
    /**
     * Overpayments Ap Account.
     * @nullable
     */
    overpaymentsApAccount?: string;
    /**
     * Underpayments Ap Account.
     * @nullable
     */
    underpaymentsApAccount?: string;
    /**
     * Overpayments Ar Account.
     * @nullable
     */
    overpaymentsArAccount?: string;
    /**
     * Underpayments Ar Account.
     * @nullable
     */
    underpaymentsArAccount?: string;
    /**
     * Purchase Credit Acc.
     * @nullable
     */
    purchaseCreditAcc?: string;
    /**
     * Eu Purchase Credit Acc.
     * @nullable
     */
    euPurchaseCreditAcc?: string;
    /**
     * Foreign Purchase Credit Acc.
     * @nullable
     */
    foreignPurchaseCreditAcc?: string;
    /**
     * Sales Credit Acc.
     * @nullable
     */
    salesCreditAcc?: string;
    /**
     * Sales Credit Eu Acc.
     * @nullable
     */
    salesCreditEuAcc?: string;
    /**
     * Exempted Credits.
     * @nullable
     */
    exemptedCredits?: string;
    /**
     * Sales Credit Foreign Acc.
     * @nullable
     */
    salesCreditForeignAcc?: string;
    /**
     * From Posting Date.
     * @nullable
     */
    fromPostingDate?: Moment;
    /**
     * To Posting Date.
     * @nullable
     */
    toPostingDate?: Moment;
    /**
     * From Due Date.
     * @nullable
     */
    fromDueDate?: Moment;
    /**
     * To Due Date.
     * @nullable
     */
    toDueDate?: Moment;
    /**
     * From Document Date.
     * @nullable
     */
    fromDocumentDate?: Moment;
    /**
     * To Document Date.
     * @nullable
     */
    toDocumentDate?: Moment;
    /**
     * Outgoing Tax Account.
     * @nullable
     */
    outgoingTaxAccount?: string;
    /**
     * Negative Inventory Adjustment Account.
     * @nullable
     */
    negativeInventoryAdjustmentAccount?: string;
    /**
     * Financial Year.
     * @nullable
     */
    financialYear?: number;
    /**
     * Self Invoice Revenue Account.
     * @nullable
     */
    selfInvoiceRevenueAccount?: string;
    /**
     * Self Invoice Expense Account.
     * @nullable
     */
    selfInvoiceExpenseAccount?: string;
    /**
     * Stock In Transit Account.
     * @nullable
     */
    stockInTransitAccount?: string;
    /**
     * Sales Down Payment Interim Account.
     * @nullable
     */
    salesDownPaymentInterimAccount?: string;
    /**
     * Purchase Down Payment Interim Account.
     * @nullable
     */
    purchaseDownPaymentInterimAccount?: string;
    /**
     * Eu Accounts Receivable.
     * @nullable
     */
    euAccountsReceivable?: string;
    /**
     * Eu Accounts Payable.
     * @nullable
     */
    euAccountsPayable?: string;
    /**
     * Wip Offset Profit And Loss Account.
     * @nullable
     */
    wipOffsetProfitAndLossAccount?: string;
    /**
     * Inventory Offset Profit And Loss Account.
     * @nullable
     */
    inventoryOffsetProfitAndLossAccount?: string;
    /**
     * Dunning Interest Account.
     * @nullable
     */
    dunningInterestAccount?: string;
    /**
     * Dunning Fee Account.
     * @nullable
     */
    dunningFeeAccount?: string;
    /**
     * Ar Gain Realized Conversion Diff.
     * @nullable
     */
    arGainRealizedConversionDiff?: string;
    /**
     * Ar Loss Realized Conversion Diff.
     * @nullable
     */
    arLossRealizedConversionDiff?: string;
    /**
     * Ap Gain Realized Conversion Diff.
     * @nullable
     */
    apGainRealizedConversionDiff?: string;
    /**
     * Ap Loss Realized Conversion Diff.
     * @nullable
     */
    apLossRealizedConversionDiff?: string;
    /**
     * Gl Gain Realized Conversion Diff.
     * @nullable
     */
    glGainRealizedConversionDiff?: string;
    /**
     * Gl Loss Realized Conversion Diff.
     * @nullable
     */
    glLossRealizedConversionDiff?: string;
    /**
     * Ar Ex Rate Interim.
     * @nullable
     */
    arExRateInterim?: string;
    /**
     * Ap Ex Rate Interim.
     * @nullable
     */
    apExRateInterim?: string;
    /**
     * Ar Cash Discount Interim.
     * @nullable
     */
    arCashDiscountInterim?: string;
    /**
     * Ap Cash Discount Interim.
     * @nullable
     */
    apCashDiscountInterim?: string;
    /**
     * Wip Mapping Collection.
     * @nullable
     */
    wipMappingCollection?: WipMapping;
}
/**
 * @deprecated Since v1.6.0. Use [[PeriodCategory.build]] instead.
 */
export declare function createPeriodCategory(json: any): PeriodCategory;
/**
 * PeriodCategoryField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PeriodCategoryField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[PeriodCategory.absoluteEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absoluteEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.beginningofFinancialYear]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    beginningofFinancialYear: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.periodCategory]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    periodCategory: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.numberOfPeriods]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    numberOfPeriods: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.periodName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    periodName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.debitorsFollowUpAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    debitorsFollowUpAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.accountforOutgoingChecks]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accountforOutgoingChecks: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.accountforCashReceipt]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accountforCashReceipt: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.customersDeductionatSource]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    customersDeductionatSource: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.commissionAccountDefault]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    commissionAccountDefault: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.purchaseTax]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    purchaseTax: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.foreignAccountsReceivables]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    foreignAccountsReceivables: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.creditorsFollowUpAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    creditorsFollowUpAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.outgoingChecksAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    outgoingChecksAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.outgoingCashAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    outgoingCashAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.accountforCreditMemoPayme]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accountforCreditMemoPayme: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.inputTaxAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    inputTaxAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.taxDefinition]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxDefinition: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.withholodingTax]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    withholodingTax: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.openingBalancesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    openingBalancesAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.defaultSaleAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    defaultSaleAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.taxExemptRevenuesDefault]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxExemptRevenuesDefault: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.expenseAccountDefault]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    expenseAccountDefault: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.revenuesAccountForeign]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    revenuesAccountForeign: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.salesRevenueEu]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    salesRevenueEu: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.expensesAccountForeign]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    expensesAccountForeign: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.rateDifferencesDefaultAcc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rateDifferencesDefaultAcc: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.decreaseGlAcc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    decreaseGlAcc: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.reconciliationDifference]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reconciliationDifference: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.acountforOpeningWhBalance]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    acountforOpeningWhBalance: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.apCashDiscountAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    apCashDiscountAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.apLossCashDiscountAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    apLossCashDiscountAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.apLossRealizedExchangeDif]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    apLossRealizedExchangeDif: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.arCashDiscountAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    arCashDiscountAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.arLossRealizedExchangeDi]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    arLossRealizedExchangeDi: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.roundingAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    roundingAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.apGainRealizedExchngeDif]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    apGainRealizedExchngeDif: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.arGainRealizedExchngeDif]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    arGainRealizedExchngeDif: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.increaseGlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    increaseGlAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.salesReturns]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    salesReturns: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.costOfGoodsSold]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    costOfGoodsSold: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.allocationAcc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    allocationAcc: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.varianceAcc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    varianceAcc: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.priceDifferenceAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    priceDifferenceAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.customerDownPaymentsAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    customerDownPaymentsAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.vendorDownPaymentsAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    vendorDownPaymentsAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.billofExchangeAccountsRece]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    billofExchangeAccountsRece: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.custBillofExchangeonC]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    custBillofExchangeonC: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.customerBillofExchangePres]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    customerBillofExchangePres: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.customerBillofExchngeDisc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    customerBillofExchngeDisc: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.customerUnpaidBoE]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    customerUnpaidBoE: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.boEAccountsPayable]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    boEAccountsPayable: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.boEAccountsPayable2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    boEAccountsPayable2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.customerDoubtfulDebtsAcct]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    customerDoubtfulDebtsAcct: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.vendorDoubtfulDebtsAcct]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    vendorDoubtfulDebtsAcct: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.purchaseAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    purchaseAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.purchaseReturnAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    purchaseReturnAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.purchaseOffsetAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    purchaseOffsetAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.eoyControlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    eoyControlAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.exchangeRateDifferencesAcct]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    exchangeRateDifferencesAcct: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.goodsClearingAcc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    goodsClearingAcc: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.expenseClearingAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    expenseClearingAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.expenseOffsetAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    expenseOffsetAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.costofSaleRevaluationAcct]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    costofSaleRevaluationAcct: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.repomoAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    repomoAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.wipMaterialVarianceAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wipMaterialVarianceAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.downPaymentVatAcctSale]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    downPaymentVatAcctSale: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.downPaymentVatAcctPurch]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    downPaymentVatAcctPurch: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.downPaymentSClearingAcct]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    downPaymentSClearingAcct: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.downPaymentPClearingAcct]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    downPaymentPClearingAcct: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.expenseVarianceAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    expenseVarianceAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.costofSaleRevOffsetAcct]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    costofSaleRevOffsetAcct: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.euExpenseAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    euExpenseAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.stockAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stockAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.inventoryOffsetIncrease]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    inventoryOffsetIncrease: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.inventoryOffsetDecrease]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    inventoryOffsetDecrease: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.vendorAssetsAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    vendorAssetsAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.stockRevaluationAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stockRevaluationAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.stockRevaluationOffsetAcct]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stockRevaluationOffsetAcct: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.wipMaterialAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wipMaterialAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.invoicePaymentBp]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    invoicePaymentBp: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.glRevaluationOffsetAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    glRevaluationOffsetAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.overpaymentsApAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    overpaymentsApAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.underpaymentsApAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    underpaymentsApAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.overpaymentsArAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    overpaymentsArAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.underpaymentsArAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    underpaymentsArAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.purchaseCreditAcc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    purchaseCreditAcc: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.euPurchaseCreditAcc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    euPurchaseCreditAcc: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.foreignPurchaseCreditAcc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    foreignPurchaseCreditAcc: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.salesCreditAcc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    salesCreditAcc: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.salesCreditEuAcc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    salesCreditEuAcc: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.exemptedCredits]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    exemptedCredits: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.salesCreditForeignAcc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    salesCreditForeignAcc: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.fromPostingDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fromPostingDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.toPostingDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    toPostingDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.fromDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fromDueDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.toDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    toDueDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.fromDocumentDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fromDocumentDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.toDocumentDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    toDocumentDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.outgoingTaxAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    outgoingTaxAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.negativeInventoryAdjustmentAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    negativeInventoryAdjustmentAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.financialYear]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    financialYear: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.selfInvoiceRevenueAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    selfInvoiceRevenueAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.selfInvoiceExpenseAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    selfInvoiceExpenseAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.stockInTransitAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stockInTransitAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.salesDownPaymentInterimAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    salesDownPaymentInterimAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.purchaseDownPaymentInterimAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    purchaseDownPaymentInterimAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.euAccountsReceivable]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    euAccountsReceivable: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.euAccountsPayable]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    euAccountsPayable: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.wipOffsetProfitAndLossAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wipOffsetProfitAndLossAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.inventoryOffsetProfitAndLossAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    inventoryOffsetProfitAndLossAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.dunningInterestAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dunningInterestAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.dunningFeeAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dunningFeeAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.arGainRealizedConversionDiff]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    arGainRealizedConversionDiff: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.arLossRealizedConversionDiff]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    arLossRealizedConversionDiff: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.apGainRealizedConversionDiff]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    apGainRealizedConversionDiff: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.apLossRealizedConversionDiff]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    apLossRealizedConversionDiff: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.glGainRealizedConversionDiff]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    glGainRealizedConversionDiff: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.glLossRealizedConversionDiff]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    glLossRealizedConversionDiff: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.arExRateInterim]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    arExRateInterim: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.apExRateInterim]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    apExRateInterim: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.arCashDiscountInterim]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    arCashDiscountInterim: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.apCashDiscountInterim]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    apCashDiscountInterim: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PeriodCategory.wipMappingCollection]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wipMappingCollection: WipMappingField<EntityT>;
}
export declare namespace PeriodCategory {
    function build(json: {
        [keys: string]: FieldType | WipMapping;
    }): PeriodCategory;
}
//# sourceMappingURL=PeriodCategory.d.ts.map