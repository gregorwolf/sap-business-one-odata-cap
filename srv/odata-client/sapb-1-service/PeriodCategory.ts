/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { WipMapping, WipMappingField } from './WipMapping';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export function createPeriodCategory(json: any): PeriodCategory {
  return PeriodCategory.build(json);
}

/**
 * PeriodCategoryField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PeriodCategoryField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[PeriodCategory.absoluteEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absoluteEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsoluteEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[PeriodCategory.beginningofFinancialYear]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  beginningofFinancialYear: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('BeginningofFinancialYear', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[PeriodCategory.periodCategory]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  periodCategory: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PeriodCategory', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.numberOfPeriods]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  numberOfPeriods: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('NumberOfPeriods', this, 'Edm.Int32');
  /**
   * Representation of the [[PeriodCategory.periodName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  periodName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PeriodName', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.debitorsFollowUpAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  debitorsFollowUpAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DebitorsFollowUpAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.accountforOutgoingChecks]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountforOutgoingChecks: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AccountforOutgoingChecks', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.accountforCashReceipt]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountforCashReceipt: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AccountforCashReceipt', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.customersDeductionatSource]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customersDeductionatSource: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CustomersDeductionatSource', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.commissionAccountDefault]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  commissionAccountDefault: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CommissionAccountDefault', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.purchaseTax]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  purchaseTax: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PurchaseTax', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.foreignAccountsReceivables]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  foreignAccountsReceivables: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ForeignAccountsReceivables', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.creditorsFollowUpAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditorsFollowUpAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CreditorsFollowUpAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.outgoingChecksAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  outgoingChecksAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('OutgoingChecksAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.outgoingCashAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  outgoingCashAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('OutgoingCashAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.accountforCreditMemoPayme]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountforCreditMemoPayme: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AccountforCreditMemoPayme', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.inputTaxAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inputTaxAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('InputTaxAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.taxDefinition]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxDefinition: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxDefinition', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.withholodingTax]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  withholodingTax: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WithholodingTax', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.openingBalancesAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  openingBalancesAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('OpeningBalancesAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.defaultSaleAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultSaleAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DefaultSaleAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.taxExemptRevenuesDefault]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxExemptRevenuesDefault: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxExemptRevenuesDefault', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.expenseAccountDefault]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expenseAccountDefault: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ExpenseAccountDefault', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.revenuesAccountForeign]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  revenuesAccountForeign: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('RevenuesAccountForeign', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.salesRevenueEu]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  salesRevenueEu: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SalesRevenueEU', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.expensesAccountForeign]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expensesAccountForeign: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ExpensesAccountForeign', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.rateDifferencesDefaultAcc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rateDifferencesDefaultAcc: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('RateDifferencesDefaultAcc', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.decreaseGlAcc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  decreaseGlAcc: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DecreaseGLAcc', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.reconciliationDifference]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reconciliationDifference: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ReconciliationDifference', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.acountforOpeningWhBalance]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  acountforOpeningWhBalance: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AcountforOpeningWHBalance', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.apCashDiscountAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  apCashDiscountAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('APCashDiscountAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.apLossCashDiscountAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  apLossCashDiscountAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('APLossCashDiscountAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.apLossRealizedExchangeDif]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  apLossRealizedExchangeDif: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('APLossRealizedExchangeDif', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.arCashDiscountAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  arCashDiscountAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ARCashDiscountAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.arLossRealizedExchangeDi]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  arLossRealizedExchangeDi: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ARLossRealizedExchangeDi', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.roundingAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  roundingAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('RoundingAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.apGainRealizedExchngeDif]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  apGainRealizedExchngeDif: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('APGainRealizedExchngeDif', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.arGainRealizedExchngeDif]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  arGainRealizedExchngeDif: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ARGainRealizedExchngeDif', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.increaseGlAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  increaseGlAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('IncreaseGLAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.salesReturns]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  salesReturns: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SalesReturns', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.costOfGoodsSold]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costOfGoodsSold: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CostOfGoodsSold', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.allocationAcc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  allocationAcc: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AllocationAcc', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.varianceAcc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  varianceAcc: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('VarianceAcc', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.priceDifferenceAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priceDifferenceAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PriceDifferenceAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.customerDownPaymentsAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customerDownPaymentsAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CustomerDownPaymentsAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.vendorDownPaymentsAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vendorDownPaymentsAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('VendorDownPaymentsAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.billofExchangeAccountsRece]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billofExchangeAccountsRece: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BillofExchangeAccountsRece', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.custBillofExchangeonC]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  custBillofExchangeonC: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CustBillofExchangeonC', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.customerBillofExchangePres]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customerBillofExchangePres: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CustomerBillofExchangePres', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.customerBillofExchngeDisc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customerBillofExchngeDisc: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CustomerBillofExchngeDisc', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.customerUnpaidBoE]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customerUnpaidBoE: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CustomerUnpaidBoE', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.boEAccountsPayable]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  boEAccountsPayable: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BoEAccountsPayable', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.boEAccountsPayable2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  boEAccountsPayable2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BoEAccountsPayable2', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.customerDoubtfulDebtsAcct]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customerDoubtfulDebtsAcct: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CustomerDoubtfulDebtsAcct', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.vendorDoubtfulDebtsAcct]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vendorDoubtfulDebtsAcct: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('VendorDoubtfulDebtsAcct', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.purchaseAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  purchaseAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PurchaseAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.purchaseReturnAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  purchaseReturnAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PurchaseReturnAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.purchaseOffsetAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  purchaseOffsetAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PurchaseOffsetAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.eoyControlAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  eoyControlAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('EOYControlAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.exchangeRateDifferencesAcct]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exchangeRateDifferencesAcct: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ExchangeRateDifferencesAcct', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.goodsClearingAcc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  goodsClearingAcc: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('GoodsClearingAcc', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.expenseClearingAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expenseClearingAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ExpenseClearingAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.expenseOffsetAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expenseOffsetAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ExpenseOffsetAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.costofSaleRevaluationAcct]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costofSaleRevaluationAcct: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CostofSaleRevaluationAcct', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.repomoAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  repomoAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('RepomoAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.wipMaterialVarianceAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wipMaterialVarianceAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WIPMaterialVarianceAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.downPaymentVatAcctSale]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  downPaymentVatAcctSale: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DownPaymentVATAcctSale', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.downPaymentVatAcctPurch]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  downPaymentVatAcctPurch: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DownPaymentVATAcctPurch', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.downPaymentSClearingAcct]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  downPaymentSClearingAcct: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DownPaymentSClearingAcct', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.downPaymentPClearingAcct]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  downPaymentPClearingAcct: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DownPaymentPClearingAcct', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.expenseVarianceAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expenseVarianceAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ExpenseVarianceAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.costofSaleRevOffsetAcct]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costofSaleRevOffsetAcct: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CostofSaleRevOffsetAcct', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.euExpenseAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  euExpenseAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('EUExpenseAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.stockAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stockAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('StockAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.inventoryOffsetIncrease]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryOffsetIncrease: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('InventoryOffsetIncrease', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.inventoryOffsetDecrease]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryOffsetDecrease: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('InventoryOffsetDecrease', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.vendorAssetsAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vendorAssetsAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('VendorAssetsAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.stockRevaluationAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stockRevaluationAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('StockRevaluationAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.stockRevaluationOffsetAcct]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stockRevaluationOffsetAcct: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('StockRevaluationOffsetAcct', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.wipMaterialAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wipMaterialAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WIPMaterialAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.invoicePaymentBp]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  invoicePaymentBp: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('InvoicePaymentBP', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.glRevaluationOffsetAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  glRevaluationOffsetAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('GLRevaluationOffsetAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.overpaymentsApAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  overpaymentsApAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('OverpaymentsAPAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.underpaymentsApAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  underpaymentsApAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UnderpaymentsAPAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.overpaymentsArAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  overpaymentsArAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('OverpaymentsARAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.underpaymentsArAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  underpaymentsArAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UnderpaymentsARAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.purchaseCreditAcc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  purchaseCreditAcc: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PurchaseCreditAcc', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.euPurchaseCreditAcc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  euPurchaseCreditAcc: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('EUPurchaseCreditAcc', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.foreignPurchaseCreditAcc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  foreignPurchaseCreditAcc: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ForeignPurchaseCreditAcc', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.salesCreditAcc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  salesCreditAcc: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SalesCreditAcc', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.salesCreditEuAcc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  salesCreditEuAcc: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SalesCreditEUAcc', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.exemptedCredits]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exemptedCredits: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ExemptedCredits', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.salesCreditForeignAcc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  salesCreditForeignAcc: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SalesCreditForeignAcc', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.fromPostingDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fromPostingDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('FromPostingDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[PeriodCategory.toPostingDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  toPostingDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ToPostingDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[PeriodCategory.fromDueDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fromDueDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('FromDueDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[PeriodCategory.toDueDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  toDueDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ToDueDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[PeriodCategory.fromDocumentDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fromDocumentDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('FromDocumentDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[PeriodCategory.toDocumentDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  toDocumentDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ToDocumentDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[PeriodCategory.outgoingTaxAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  outgoingTaxAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('OutgoingTaxAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.negativeInventoryAdjustmentAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  negativeInventoryAdjustmentAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('NegativeInventoryAdjustmentAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.financialYear]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  financialYear: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FinancialYear', this, 'Edm.Int32');
  /**
   * Representation of the [[PeriodCategory.selfInvoiceRevenueAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  selfInvoiceRevenueAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SelfInvoiceRevenueAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.selfInvoiceExpenseAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  selfInvoiceExpenseAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SelfInvoiceExpenseAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.stockInTransitAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stockInTransitAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('StockInTransitAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.salesDownPaymentInterimAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  salesDownPaymentInterimAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SalesDownPaymentInterimAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.purchaseDownPaymentInterimAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  purchaseDownPaymentInterimAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PurchaseDownPaymentInterimAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.euAccountsReceivable]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  euAccountsReceivable: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('EUAccountsReceivable', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.euAccountsPayable]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  euAccountsPayable: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('EUAccountsPayable', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.wipOffsetProfitAndLossAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wipOffsetProfitAndLossAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WipOffsetProfitAndLossAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.inventoryOffsetProfitAndLossAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryOffsetProfitAndLossAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('InventoryOffsetProfitAndLossAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.dunningInterestAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dunningInterestAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DunningInterestAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.dunningFeeAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dunningFeeAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DunningFeeAccount', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.arGainRealizedConversionDiff]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  arGainRealizedConversionDiff: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ARGainRealizedConversionDiff', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.arLossRealizedConversionDiff]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  arLossRealizedConversionDiff: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ARLossRealizedConversionDiff', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.apGainRealizedConversionDiff]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  apGainRealizedConversionDiff: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('APGainRealizedConversionDiff', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.apLossRealizedConversionDiff]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  apLossRealizedConversionDiff: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('APLossRealizedConversionDiff', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.glGainRealizedConversionDiff]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  glGainRealizedConversionDiff: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('GLGainRealizedConversionDiff', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.glLossRealizedConversionDiff]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  glLossRealizedConversionDiff: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('GLLossRealizedConversionDiff', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.arExRateInterim]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  arExRateInterim: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ARExRateInterim', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.apExRateInterim]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  apExRateInterim: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('APExRateInterim', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.arCashDiscountInterim]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  arCashDiscountInterim: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ARCashDiscountInterim', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.apCashDiscountInterim]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  apCashDiscountInterim: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('APCashDiscountInterim', this, 'Edm.String');
  /**
   * Representation of the [[PeriodCategory.wipMappingCollection]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wipMappingCollection: WipMappingField<EntityT> = new WipMappingField('WIPMappingCollection', this);
}

export namespace PeriodCategory {
  export function build(json: { [keys: string]: FieldType | WipMapping }): PeriodCategory {
    return createComplexType(json, {
      AbsoluteEntry: (absoluteEntry: number) => ({ absoluteEntry: edmToTs(absoluteEntry, 'Edm.Int32') }),
      BeginningofFinancialYear: (beginningofFinancialYear: Moment) => ({ beginningofFinancialYear: edmToTs(beginningofFinancialYear, 'Edm.DateTimeOffset') }),
      PeriodCategory: (periodCategory: string) => ({ periodCategory: edmToTs(periodCategory, 'Edm.String') }),
      NumberOfPeriods: (numberOfPeriods: number) => ({ numberOfPeriods: edmToTs(numberOfPeriods, 'Edm.Int32') }),
      PeriodName: (periodName: string) => ({ periodName: edmToTs(periodName, 'Edm.String') }),
      DebitorsFollowUpAccount: (debitorsFollowUpAccount: string) => ({ debitorsFollowUpAccount: edmToTs(debitorsFollowUpAccount, 'Edm.String') }),
      AccountforOutgoingChecks: (accountforOutgoingChecks: string) => ({ accountforOutgoingChecks: edmToTs(accountforOutgoingChecks, 'Edm.String') }),
      AccountforCashReceipt: (accountforCashReceipt: string) => ({ accountforCashReceipt: edmToTs(accountforCashReceipt, 'Edm.String') }),
      CustomersDeductionatSource: (customersDeductionatSource: string) => ({ customersDeductionatSource: edmToTs(customersDeductionatSource, 'Edm.String') }),
      CommissionAccountDefault: (commissionAccountDefault: string) => ({ commissionAccountDefault: edmToTs(commissionAccountDefault, 'Edm.String') }),
      PurchaseTax: (purchaseTax: string) => ({ purchaseTax: edmToTs(purchaseTax, 'Edm.String') }),
      ForeignAccountsReceivables: (foreignAccountsReceivables: string) => ({ foreignAccountsReceivables: edmToTs(foreignAccountsReceivables, 'Edm.String') }),
      CreditorsFollowUpAccount: (creditorsFollowUpAccount: string) => ({ creditorsFollowUpAccount: edmToTs(creditorsFollowUpAccount, 'Edm.String') }),
      OutgoingChecksAccount: (outgoingChecksAccount: string) => ({ outgoingChecksAccount: edmToTs(outgoingChecksAccount, 'Edm.String') }),
      OutgoingCashAccount: (outgoingCashAccount: string) => ({ outgoingCashAccount: edmToTs(outgoingCashAccount, 'Edm.String') }),
      AccountforCreditMemoPayme: (accountforCreditMemoPayme: string) => ({ accountforCreditMemoPayme: edmToTs(accountforCreditMemoPayme, 'Edm.String') }),
      InputTaxAccount: (inputTaxAccount: string) => ({ inputTaxAccount: edmToTs(inputTaxAccount, 'Edm.String') }),
      TaxDefinition: (taxDefinition: string) => ({ taxDefinition: edmToTs(taxDefinition, 'Edm.String') }),
      WithholodingTax: (withholodingTax: string) => ({ withholodingTax: edmToTs(withholodingTax, 'Edm.String') }),
      OpeningBalancesAccount: (openingBalancesAccount: string) => ({ openingBalancesAccount: edmToTs(openingBalancesAccount, 'Edm.String') }),
      DefaultSaleAccount: (defaultSaleAccount: string) => ({ defaultSaleAccount: edmToTs(defaultSaleAccount, 'Edm.String') }),
      TaxExemptRevenuesDefault: (taxExemptRevenuesDefault: string) => ({ taxExemptRevenuesDefault: edmToTs(taxExemptRevenuesDefault, 'Edm.String') }),
      ExpenseAccountDefault: (expenseAccountDefault: string) => ({ expenseAccountDefault: edmToTs(expenseAccountDefault, 'Edm.String') }),
      RevenuesAccountForeign: (revenuesAccountForeign: string) => ({ revenuesAccountForeign: edmToTs(revenuesAccountForeign, 'Edm.String') }),
      SalesRevenueEU: (salesRevenueEu: string) => ({ salesRevenueEu: edmToTs(salesRevenueEu, 'Edm.String') }),
      ExpensesAccountForeign: (expensesAccountForeign: string) => ({ expensesAccountForeign: edmToTs(expensesAccountForeign, 'Edm.String') }),
      RateDifferencesDefaultAcc: (rateDifferencesDefaultAcc: string) => ({ rateDifferencesDefaultAcc: edmToTs(rateDifferencesDefaultAcc, 'Edm.String') }),
      DecreaseGLAcc: (decreaseGlAcc: string) => ({ decreaseGlAcc: edmToTs(decreaseGlAcc, 'Edm.String') }),
      ReconciliationDifference: (reconciliationDifference: string) => ({ reconciliationDifference: edmToTs(reconciliationDifference, 'Edm.String') }),
      AcountforOpeningWHBalance: (acountforOpeningWhBalance: string) => ({ acountforOpeningWhBalance: edmToTs(acountforOpeningWhBalance, 'Edm.String') }),
      APCashDiscountAccount: (apCashDiscountAccount: string) => ({ apCashDiscountAccount: edmToTs(apCashDiscountAccount, 'Edm.String') }),
      APLossCashDiscountAccount: (apLossCashDiscountAccount: string) => ({ apLossCashDiscountAccount: edmToTs(apLossCashDiscountAccount, 'Edm.String') }),
      APLossRealizedExchangeDif: (apLossRealizedExchangeDif: string) => ({ apLossRealizedExchangeDif: edmToTs(apLossRealizedExchangeDif, 'Edm.String') }),
      ARCashDiscountAccount: (arCashDiscountAccount: string) => ({ arCashDiscountAccount: edmToTs(arCashDiscountAccount, 'Edm.String') }),
      ARLossRealizedExchangeDi: (arLossRealizedExchangeDi: string) => ({ arLossRealizedExchangeDi: edmToTs(arLossRealizedExchangeDi, 'Edm.String') }),
      RoundingAccount: (roundingAccount: string) => ({ roundingAccount: edmToTs(roundingAccount, 'Edm.String') }),
      APGainRealizedExchngeDif: (apGainRealizedExchngeDif: string) => ({ apGainRealizedExchngeDif: edmToTs(apGainRealizedExchngeDif, 'Edm.String') }),
      ARGainRealizedExchngeDif: (arGainRealizedExchngeDif: string) => ({ arGainRealizedExchngeDif: edmToTs(arGainRealizedExchngeDif, 'Edm.String') }),
      IncreaseGLAccount: (increaseGlAccount: string) => ({ increaseGlAccount: edmToTs(increaseGlAccount, 'Edm.String') }),
      SalesReturns: (salesReturns: string) => ({ salesReturns: edmToTs(salesReturns, 'Edm.String') }),
      CostOfGoodsSold: (costOfGoodsSold: string) => ({ costOfGoodsSold: edmToTs(costOfGoodsSold, 'Edm.String') }),
      AllocationAcc: (allocationAcc: string) => ({ allocationAcc: edmToTs(allocationAcc, 'Edm.String') }),
      VarianceAcc: (varianceAcc: string) => ({ varianceAcc: edmToTs(varianceAcc, 'Edm.String') }),
      PriceDifferenceAccount: (priceDifferenceAccount: string) => ({ priceDifferenceAccount: edmToTs(priceDifferenceAccount, 'Edm.String') }),
      CustomerDownPaymentsAccount: (customerDownPaymentsAccount: string) => ({ customerDownPaymentsAccount: edmToTs(customerDownPaymentsAccount, 'Edm.String') }),
      VendorDownPaymentsAccount: (vendorDownPaymentsAccount: string) => ({ vendorDownPaymentsAccount: edmToTs(vendorDownPaymentsAccount, 'Edm.String') }),
      BillofExchangeAccountsRece: (billofExchangeAccountsRece: string) => ({ billofExchangeAccountsRece: edmToTs(billofExchangeAccountsRece, 'Edm.String') }),
      CustBillofExchangeonC: (custBillofExchangeonC: string) => ({ custBillofExchangeonC: edmToTs(custBillofExchangeonC, 'Edm.String') }),
      CustomerBillofExchangePres: (customerBillofExchangePres: string) => ({ customerBillofExchangePres: edmToTs(customerBillofExchangePres, 'Edm.String') }),
      CustomerBillofExchngeDisc: (customerBillofExchngeDisc: string) => ({ customerBillofExchngeDisc: edmToTs(customerBillofExchngeDisc, 'Edm.String') }),
      CustomerUnpaidBoE: (customerUnpaidBoE: string) => ({ customerUnpaidBoE: edmToTs(customerUnpaidBoE, 'Edm.String') }),
      BoEAccountsPayable: (boEAccountsPayable: string) => ({ boEAccountsPayable: edmToTs(boEAccountsPayable, 'Edm.String') }),
      BoEAccountsPayable2: (boEAccountsPayable2: string) => ({ boEAccountsPayable2: edmToTs(boEAccountsPayable2, 'Edm.String') }),
      CustomerDoubtfulDebtsAcct: (customerDoubtfulDebtsAcct: string) => ({ customerDoubtfulDebtsAcct: edmToTs(customerDoubtfulDebtsAcct, 'Edm.String') }),
      VendorDoubtfulDebtsAcct: (vendorDoubtfulDebtsAcct: string) => ({ vendorDoubtfulDebtsAcct: edmToTs(vendorDoubtfulDebtsAcct, 'Edm.String') }),
      PurchaseAccount: (purchaseAccount: string) => ({ purchaseAccount: edmToTs(purchaseAccount, 'Edm.String') }),
      PurchaseReturnAccount: (purchaseReturnAccount: string) => ({ purchaseReturnAccount: edmToTs(purchaseReturnAccount, 'Edm.String') }),
      PurchaseOffsetAccount: (purchaseOffsetAccount: string) => ({ purchaseOffsetAccount: edmToTs(purchaseOffsetAccount, 'Edm.String') }),
      EOYControlAccount: (eoyControlAccount: string) => ({ eoyControlAccount: edmToTs(eoyControlAccount, 'Edm.String') }),
      ExchangeRateDifferencesAcct: (exchangeRateDifferencesAcct: string) => ({ exchangeRateDifferencesAcct: edmToTs(exchangeRateDifferencesAcct, 'Edm.String') }),
      GoodsClearingAcc: (goodsClearingAcc: string) => ({ goodsClearingAcc: edmToTs(goodsClearingAcc, 'Edm.String') }),
      ExpenseClearingAccount: (expenseClearingAccount: string) => ({ expenseClearingAccount: edmToTs(expenseClearingAccount, 'Edm.String') }),
      ExpenseOffsetAccount: (expenseOffsetAccount: string) => ({ expenseOffsetAccount: edmToTs(expenseOffsetAccount, 'Edm.String') }),
      CostofSaleRevaluationAcct: (costofSaleRevaluationAcct: string) => ({ costofSaleRevaluationAcct: edmToTs(costofSaleRevaluationAcct, 'Edm.String') }),
      RepomoAccount: (repomoAccount: string) => ({ repomoAccount: edmToTs(repomoAccount, 'Edm.String') }),
      WIPMaterialVarianceAccount: (wipMaterialVarianceAccount: string) => ({ wipMaterialVarianceAccount: edmToTs(wipMaterialVarianceAccount, 'Edm.String') }),
      DownPaymentVATAcctSale: (downPaymentVatAcctSale: string) => ({ downPaymentVatAcctSale: edmToTs(downPaymentVatAcctSale, 'Edm.String') }),
      DownPaymentVATAcctPurch: (downPaymentVatAcctPurch: string) => ({ downPaymentVatAcctPurch: edmToTs(downPaymentVatAcctPurch, 'Edm.String') }),
      DownPaymentSClearingAcct: (downPaymentSClearingAcct: string) => ({ downPaymentSClearingAcct: edmToTs(downPaymentSClearingAcct, 'Edm.String') }),
      DownPaymentPClearingAcct: (downPaymentPClearingAcct: string) => ({ downPaymentPClearingAcct: edmToTs(downPaymentPClearingAcct, 'Edm.String') }),
      ExpenseVarianceAccount: (expenseVarianceAccount: string) => ({ expenseVarianceAccount: edmToTs(expenseVarianceAccount, 'Edm.String') }),
      CostofSaleRevOffsetAcct: (costofSaleRevOffsetAcct: string) => ({ costofSaleRevOffsetAcct: edmToTs(costofSaleRevOffsetAcct, 'Edm.String') }),
      EUExpenseAccount: (euExpenseAccount: string) => ({ euExpenseAccount: edmToTs(euExpenseAccount, 'Edm.String') }),
      StockAccount: (stockAccount: string) => ({ stockAccount: edmToTs(stockAccount, 'Edm.String') }),
      InventoryOffsetIncrease: (inventoryOffsetIncrease: string) => ({ inventoryOffsetIncrease: edmToTs(inventoryOffsetIncrease, 'Edm.String') }),
      InventoryOffsetDecrease: (inventoryOffsetDecrease: string) => ({ inventoryOffsetDecrease: edmToTs(inventoryOffsetDecrease, 'Edm.String') }),
      VendorAssetsAccount: (vendorAssetsAccount: string) => ({ vendorAssetsAccount: edmToTs(vendorAssetsAccount, 'Edm.String') }),
      StockRevaluationAccount: (stockRevaluationAccount: string) => ({ stockRevaluationAccount: edmToTs(stockRevaluationAccount, 'Edm.String') }),
      StockRevaluationOffsetAcct: (stockRevaluationOffsetAcct: string) => ({ stockRevaluationOffsetAcct: edmToTs(stockRevaluationOffsetAcct, 'Edm.String') }),
      WIPMaterialAccount: (wipMaterialAccount: string) => ({ wipMaterialAccount: edmToTs(wipMaterialAccount, 'Edm.String') }),
      InvoicePaymentBP: (invoicePaymentBp: string) => ({ invoicePaymentBp: edmToTs(invoicePaymentBp, 'Edm.String') }),
      GLRevaluationOffsetAccount: (glRevaluationOffsetAccount: string) => ({ glRevaluationOffsetAccount: edmToTs(glRevaluationOffsetAccount, 'Edm.String') }),
      OverpaymentsAPAccount: (overpaymentsApAccount: string) => ({ overpaymentsApAccount: edmToTs(overpaymentsApAccount, 'Edm.String') }),
      UnderpaymentsAPAccount: (underpaymentsApAccount: string) => ({ underpaymentsApAccount: edmToTs(underpaymentsApAccount, 'Edm.String') }),
      OverpaymentsARAccount: (overpaymentsArAccount: string) => ({ overpaymentsArAccount: edmToTs(overpaymentsArAccount, 'Edm.String') }),
      UnderpaymentsARAccount: (underpaymentsArAccount: string) => ({ underpaymentsArAccount: edmToTs(underpaymentsArAccount, 'Edm.String') }),
      PurchaseCreditAcc: (purchaseCreditAcc: string) => ({ purchaseCreditAcc: edmToTs(purchaseCreditAcc, 'Edm.String') }),
      EUPurchaseCreditAcc: (euPurchaseCreditAcc: string) => ({ euPurchaseCreditAcc: edmToTs(euPurchaseCreditAcc, 'Edm.String') }),
      ForeignPurchaseCreditAcc: (foreignPurchaseCreditAcc: string) => ({ foreignPurchaseCreditAcc: edmToTs(foreignPurchaseCreditAcc, 'Edm.String') }),
      SalesCreditAcc: (salesCreditAcc: string) => ({ salesCreditAcc: edmToTs(salesCreditAcc, 'Edm.String') }),
      SalesCreditEUAcc: (salesCreditEuAcc: string) => ({ salesCreditEuAcc: edmToTs(salesCreditEuAcc, 'Edm.String') }),
      ExemptedCredits: (exemptedCredits: string) => ({ exemptedCredits: edmToTs(exemptedCredits, 'Edm.String') }),
      SalesCreditForeignAcc: (salesCreditForeignAcc: string) => ({ salesCreditForeignAcc: edmToTs(salesCreditForeignAcc, 'Edm.String') }),
      FromPostingDate: (fromPostingDate: Moment) => ({ fromPostingDate: edmToTs(fromPostingDate, 'Edm.DateTimeOffset') }),
      ToPostingDate: (toPostingDate: Moment) => ({ toPostingDate: edmToTs(toPostingDate, 'Edm.DateTimeOffset') }),
      FromDueDate: (fromDueDate: Moment) => ({ fromDueDate: edmToTs(fromDueDate, 'Edm.DateTimeOffset') }),
      ToDueDate: (toDueDate: Moment) => ({ toDueDate: edmToTs(toDueDate, 'Edm.DateTimeOffset') }),
      FromDocumentDate: (fromDocumentDate: Moment) => ({ fromDocumentDate: edmToTs(fromDocumentDate, 'Edm.DateTimeOffset') }),
      ToDocumentDate: (toDocumentDate: Moment) => ({ toDocumentDate: edmToTs(toDocumentDate, 'Edm.DateTimeOffset') }),
      OutgoingTaxAccount: (outgoingTaxAccount: string) => ({ outgoingTaxAccount: edmToTs(outgoingTaxAccount, 'Edm.String') }),
      NegativeInventoryAdjustmentAccount: (negativeInventoryAdjustmentAccount: string) => ({ negativeInventoryAdjustmentAccount: edmToTs(negativeInventoryAdjustmentAccount, 'Edm.String') }),
      FinancialYear: (financialYear: number) => ({ financialYear: edmToTs(financialYear, 'Edm.Int32') }),
      SelfInvoiceRevenueAccount: (selfInvoiceRevenueAccount: string) => ({ selfInvoiceRevenueAccount: edmToTs(selfInvoiceRevenueAccount, 'Edm.String') }),
      SelfInvoiceExpenseAccount: (selfInvoiceExpenseAccount: string) => ({ selfInvoiceExpenseAccount: edmToTs(selfInvoiceExpenseAccount, 'Edm.String') }),
      StockInTransitAccount: (stockInTransitAccount: string) => ({ stockInTransitAccount: edmToTs(stockInTransitAccount, 'Edm.String') }),
      SalesDownPaymentInterimAccount: (salesDownPaymentInterimAccount: string) => ({ salesDownPaymentInterimAccount: edmToTs(salesDownPaymentInterimAccount, 'Edm.String') }),
      PurchaseDownPaymentInterimAccount: (purchaseDownPaymentInterimAccount: string) => ({ purchaseDownPaymentInterimAccount: edmToTs(purchaseDownPaymentInterimAccount, 'Edm.String') }),
      EUAccountsReceivable: (euAccountsReceivable: string) => ({ euAccountsReceivable: edmToTs(euAccountsReceivable, 'Edm.String') }),
      EUAccountsPayable: (euAccountsPayable: string) => ({ euAccountsPayable: edmToTs(euAccountsPayable, 'Edm.String') }),
      WipOffsetProfitAndLossAccount: (wipOffsetProfitAndLossAccount: string) => ({ wipOffsetProfitAndLossAccount: edmToTs(wipOffsetProfitAndLossAccount, 'Edm.String') }),
      InventoryOffsetProfitAndLossAccount: (inventoryOffsetProfitAndLossAccount: string) => ({ inventoryOffsetProfitAndLossAccount: edmToTs(inventoryOffsetProfitAndLossAccount, 'Edm.String') }),
      DunningInterestAccount: (dunningInterestAccount: string) => ({ dunningInterestAccount: edmToTs(dunningInterestAccount, 'Edm.String') }),
      DunningFeeAccount: (dunningFeeAccount: string) => ({ dunningFeeAccount: edmToTs(dunningFeeAccount, 'Edm.String') }),
      ARGainRealizedConversionDiff: (arGainRealizedConversionDiff: string) => ({ arGainRealizedConversionDiff: edmToTs(arGainRealizedConversionDiff, 'Edm.String') }),
      ARLossRealizedConversionDiff: (arLossRealizedConversionDiff: string) => ({ arLossRealizedConversionDiff: edmToTs(arLossRealizedConversionDiff, 'Edm.String') }),
      APGainRealizedConversionDiff: (apGainRealizedConversionDiff: string) => ({ apGainRealizedConversionDiff: edmToTs(apGainRealizedConversionDiff, 'Edm.String') }),
      APLossRealizedConversionDiff: (apLossRealizedConversionDiff: string) => ({ apLossRealizedConversionDiff: edmToTs(apLossRealizedConversionDiff, 'Edm.String') }),
      GLGainRealizedConversionDiff: (glGainRealizedConversionDiff: string) => ({ glGainRealizedConversionDiff: edmToTs(glGainRealizedConversionDiff, 'Edm.String') }),
      GLLossRealizedConversionDiff: (glLossRealizedConversionDiff: string) => ({ glLossRealizedConversionDiff: edmToTs(glLossRealizedConversionDiff, 'Edm.String') }),
      ARExRateInterim: (arExRateInterim: string) => ({ arExRateInterim: edmToTs(arExRateInterim, 'Edm.String') }),
      APExRateInterim: (apExRateInterim: string) => ({ apExRateInterim: edmToTs(apExRateInterim, 'Edm.String') }),
      ARCashDiscountInterim: (arCashDiscountInterim: string) => ({ arCashDiscountInterim: edmToTs(arCashDiscountInterim, 'Edm.String') }),
      APCashDiscountInterim: (apCashDiscountInterim: string) => ({ apCashDiscountInterim: edmToTs(apCashDiscountInterim, 'Edm.String') }),
      WIPMappingCollection: (wipMappingCollection: WipMapping) => ({ wipMappingCollection: WipMapping.build(wipMappingCollection) })
    });
  }
}
