/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { WipMapping } from './WipMapping';
import { BoSubPeriodTypeEnum } from './BoSubPeriodTypeEnum';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
   * Sub Period Type.
   * @nullable
   */
  subPeriodType?: BoSubPeriodTypeEnum;
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
  wipMappingCollection?: WipMapping[];
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
export class PeriodCategoryField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PeriodCategory> {
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
   * Representation of the [[PeriodCategory.subPeriodType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subPeriodType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('SubPeriodType', this);
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
  wipMappingCollection: CollectionField<EntityT, WipMapping> = new CollectionField('WIPMappingCollection', this, WipMapping);

  /**
   * Creates an instance of PeriodCategoryField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, PeriodCategory);
  }
}

export namespace PeriodCategory {
  /**
   * Metadata information on all properties of the `PeriodCategory` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PeriodCategory>[] = [{
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
    type: WipMapping,
    isCollection: true
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType | WipMapping }): PeriodCategory {
    return deserializeComplexTypeV4(json, PeriodCategory);
  }
}
