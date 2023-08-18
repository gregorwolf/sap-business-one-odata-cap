/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WipMapping } from './WipMapping';
import { BoSubPeriodTypeEnum } from './BoSubPeriodTypeEnum';
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * PeriodCategory
 */
export interface PeriodCategory<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Absolute Entry.
   * @nullable
   */
  absoluteEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Beginningof Financial Year.
   * @nullable
   */
  beginningofFinancialYear?: DeserializedType<
    DeSerializersT,
    'Edm.DateTimeOffset'
  >;
  /**
   * Period Category Property.
   * @nullable
   */
  periodCategoryProperty?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Sub Period Type.
   * @nullable
   */
  subPeriodType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Number Of Periods.
   * @nullable
   */
  numberOfPeriods?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Period Name.
   * @nullable
   */
  periodName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Debitors Follow Up Account.
   * @nullable
   */
  debitorsFollowUpAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Accountfor Outgoing Checks.
   * @nullable
   */
  accountforOutgoingChecks?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Accountfor Cash Receipt.
   * @nullable
   */
  accountforCashReceipt?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Customers Deductionat Source.
   * @nullable
   */
  customersDeductionatSource?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Commission Account Default.
   * @nullable
   */
  commissionAccountDefault?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Purchase Tax.
   * @nullable
   */
  purchaseTax?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Foreign Accounts Receivables.
   * @nullable
   */
  foreignAccountsReceivables?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Creditors Follow Up Account.
   * @nullable
   */
  creditorsFollowUpAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Outgoing Checks Account.
   * @nullable
   */
  outgoingChecksAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Outgoing Cash Account.
   * @nullable
   */
  outgoingCashAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Accountfor Credit Memo Payme.
   * @nullable
   */
  accountforCreditMemoPayme?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Input Tax Account.
   * @nullable
   */
  inputTaxAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Definition.
   * @nullable
   */
  taxDefinition?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Withholoding Tax.
   * @nullable
   */
  withholodingTax?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Opening Balances Account.
   * @nullable
   */
  openingBalancesAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Default Sale Account.
   * @nullable
   */
  defaultSaleAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Exempt Revenues Default.
   * @nullable
   */
  taxExemptRevenuesDefault?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Expense Account Default.
   * @nullable
   */
  expenseAccountDefault?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Revenues Account Foreign.
   * @nullable
   */
  revenuesAccountForeign?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Sales Revenue Eu.
   * @nullable
   */
  salesRevenueEu?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Expenses Account Foreign.
   * @nullable
   */
  expensesAccountForeign?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Rate Differences Default Acc.
   * @nullable
   */
  rateDifferencesDefaultAcc?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Decrease Gl Acc.
   * @nullable
   */
  decreaseGlAcc?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Reconciliation Difference.
   * @nullable
   */
  reconciliationDifference?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Acountfor Opening Wh Balance.
   * @nullable
   */
  acountforOpeningWhBalance?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ap Cash Discount Account.
   * @nullable
   */
  apCashDiscountAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ap Loss Cash Discount Account.
   * @nullable
   */
  apLossCashDiscountAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ap Loss Realized Exchange Dif.
   * @nullable
   */
  apLossRealizedExchangeDif?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ar Cash Discount Account.
   * @nullable
   */
  arCashDiscountAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ar Loss Realized Exchange Di.
   * @nullable
   */
  arLossRealizedExchangeDi?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Rounding Account.
   * @nullable
   */
  roundingAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ap Gain Realized Exchnge Dif.
   * @nullable
   */
  apGainRealizedExchngeDif?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ar Gain Realized Exchnge Dif.
   * @nullable
   */
  arGainRealizedExchngeDif?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Increase Gl Account.
   * @nullable
   */
  increaseGlAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Sales Returns.
   * @nullable
   */
  salesReturns?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Cost Of Goods Sold.
   * @nullable
   */
  costOfGoodsSold?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Allocation Acc.
   * @nullable
   */
  allocationAcc?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Variance Acc.
   * @nullable
   */
  varianceAcc?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Price Difference Account.
   * @nullable
   */
  priceDifferenceAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Customer Down Payments Account.
   * @nullable
   */
  customerDownPaymentsAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Vendor Down Payments Account.
   * @nullable
   */
  vendorDownPaymentsAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Billof Exchange Accounts Rece.
   * @nullable
   */
  billofExchangeAccountsRece?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Cust Billof Exchangeon C.
   * @nullable
   */
  custBillofExchangeonC?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Customer Billof Exchange Pres.
   * @nullable
   */
  customerBillofExchangePres?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Customer Billof Exchnge Disc.
   * @nullable
   */
  customerBillofExchngeDisc?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Customer Unpaid Bo E.
   * @nullable
   */
  customerUnpaidBoE?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bo E Accounts Payable.
   * @nullable
   */
  boEAccountsPayable?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bo E Accounts Payable 2.
   * @nullable
   */
  boEAccountsPayable2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Customer Doubtful Debts Acct.
   * @nullable
   */
  customerDoubtfulDebtsAcct?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Vendor Doubtful Debts Acct.
   * @nullable
   */
  vendorDoubtfulDebtsAcct?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Purchase Account.
   * @nullable
   */
  purchaseAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Purchase Return Account.
   * @nullable
   */
  purchaseReturnAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Purchase Offset Account.
   * @nullable
   */
  purchaseOffsetAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Eoy Control Account.
   * @nullable
   */
  eoyControlAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Exchange Rate Differences Acct.
   * @nullable
   */
  exchangeRateDifferencesAcct?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Goods Clearing Acc.
   * @nullable
   */
  goodsClearingAcc?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Expense Clearing Account.
   * @nullable
   */
  expenseClearingAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Expense Offset Account.
   * @nullable
   */
  expenseOffsetAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Costof Sale Revaluation Acct.
   * @nullable
   */
  costofSaleRevaluationAcct?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Repomo Account.
   * @nullable
   */
  repomoAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Wip Material Variance Account.
   * @nullable
   */
  wipMaterialVarianceAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Down Payment Vat Acct Sale.
   * @nullable
   */
  downPaymentVatAcctSale?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Down Payment Vat Acct Purch.
   * @nullable
   */
  downPaymentVatAcctPurch?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Down Payment S Clearing Acct.
   * @nullable
   */
  downPaymentSClearingAcct?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Down Payment P Clearing Acct.
   * @nullable
   */
  downPaymentPClearingAcct?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Expense Variance Account.
   * @nullable
   */
  expenseVarianceAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Costof Sale Rev Offset Acct.
   * @nullable
   */
  costofSaleRevOffsetAcct?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Eu Expense Account.
   * @nullable
   */
  euExpenseAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Stock Account.
   * @nullable
   */
  stockAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Inventory Offset Increase.
   * @nullable
   */
  inventoryOffsetIncrease?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Inventory Offset Decrease.
   * @nullable
   */
  inventoryOffsetDecrease?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Vendor Assets Account.
   * @nullable
   */
  vendorAssetsAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Stock Revaluation Account.
   * @nullable
   */
  stockRevaluationAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Stock Revaluation Offset Acct.
   * @nullable
   */
  stockRevaluationOffsetAcct?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Wip Material Account.
   * @nullable
   */
  wipMaterialAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Invoice Payment Bp.
   * @nullable
   */
  invoicePaymentBp?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Gl Revaluation Offset Account.
   * @nullable
   */
  glRevaluationOffsetAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Overpayments Ap Account.
   * @nullable
   */
  overpaymentsApAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Underpayments Ap Account.
   * @nullable
   */
  underpaymentsApAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Overpayments Ar Account.
   * @nullable
   */
  overpaymentsArAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Underpayments Ar Account.
   * @nullable
   */
  underpaymentsArAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Purchase Credit Acc.
   * @nullable
   */
  purchaseCreditAcc?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Eu Purchase Credit Acc.
   * @nullable
   */
  euPurchaseCreditAcc?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Foreign Purchase Credit Acc.
   * @nullable
   */
  foreignPurchaseCreditAcc?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Sales Credit Acc.
   * @nullable
   */
  salesCreditAcc?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Sales Credit Eu Acc.
   * @nullable
   */
  salesCreditEuAcc?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Exempted Credits.
   * @nullable
   */
  exemptedCredits?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Sales Credit Foreign Acc.
   * @nullable
   */
  salesCreditForeignAcc?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * From Posting Date.
   * @nullable
   */
  fromPostingDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * To Posting Date.
   * @nullable
   */
  toPostingDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * From Due Date.
   * @nullable
   */
  fromDueDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * To Due Date.
   * @nullable
   */
  toDueDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * From Document Date.
   * @nullable
   */
  fromDocumentDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * To Document Date.
   * @nullable
   */
  toDocumentDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Outgoing Tax Account.
   * @nullable
   */
  outgoingTaxAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Negative Inventory Adjustment Account.
   * @nullable
   */
  negativeInventoryAdjustmentAccount?: DeserializedType<
    DeSerializersT,
    'Edm.String'
  >;
  /**
   * Financial Year.
   * @nullable
   */
  financialYear?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Self Invoice Revenue Account.
   * @nullable
   */
  selfInvoiceRevenueAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Self Invoice Expense Account.
   * @nullable
   */
  selfInvoiceExpenseAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Stock In Transit Account.
   * @nullable
   */
  stockInTransitAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Sales Down Payment Interim Account.
   * @nullable
   */
  salesDownPaymentInterimAccount?: DeserializedType<
    DeSerializersT,
    'Edm.String'
  >;
  /**
   * Purchase Down Payment Interim Account.
   * @nullable
   */
  purchaseDownPaymentInterimAccount?: DeserializedType<
    DeSerializersT,
    'Edm.String'
  >;
  /**
   * Eu Accounts Receivable.
   * @nullable
   */
  euAccountsReceivable?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Eu Accounts Payable.
   * @nullable
   */
  euAccountsPayable?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Wip Offset Profit And Loss Account.
   * @nullable
   */
  wipOffsetProfitAndLossAccount?: DeserializedType<
    DeSerializersT,
    'Edm.String'
  >;
  /**
   * Inventory Offset Profit And Loss Account.
   * @nullable
   */
  inventoryOffsetProfitAndLossAccount?: DeserializedType<
    DeSerializersT,
    'Edm.String'
  >;
  /**
   * Dunning Interest Account.
   * @nullable
   */
  dunningInterestAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Dunning Fee Account.
   * @nullable
   */
  dunningFeeAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ar Gain Realized Conversion Diff.
   * @nullable
   */
  arGainRealizedConversionDiff?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ar Loss Realized Conversion Diff.
   * @nullable
   */
  arLossRealizedConversionDiff?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ap Gain Realized Conversion Diff.
   * @nullable
   */
  apGainRealizedConversionDiff?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ap Loss Realized Conversion Diff.
   * @nullable
   */
  apLossRealizedConversionDiff?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Gl Gain Realized Conversion Diff.
   * @nullable
   */
  glGainRealizedConversionDiff?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Gl Loss Realized Conversion Diff.
   * @nullable
   */
  glLossRealizedConversionDiff?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ar Ex Rate Interim.
   * @nullable
   */
  arExRateInterim?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ap Ex Rate Interim.
   * @nullable
   */
  apExRateInterim?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ar Cash Discount Interim.
   * @nullable
   */
  arCashDiscountInterim?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ap Cash Discount Interim.
   * @nullable
   */
  apCashDiscountInterim?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Sales Interim Acct Ln W Tax.
   * @nullable
   */
  salesInterimAcctLnWTax?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Purchase Interim Acct Ln W Tax.
   * @nullable
   */
  purchaseInterimAcctLnWTax?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Exh Rates Diff Acct Ln W Tax.
   * @nullable
   */
  exhRatesDiffAcctLnWTax?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Wip Mapping Collection.
   * @nullable
   */
  wipMappingCollection?: DeserializedType<DeSerializersT, 'SAPB1.WIPMapping'>;
}

/**
 * PeriodCategoryField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class PeriodCategoryField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  PeriodCategory,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link PeriodCategory.absoluteEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absoluteEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AbsoluteEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link PeriodCategory.beginningofFinancialYear} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  beginningofFinancialYear: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BeginningofFinancialYear',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.periodCategoryProperty} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  periodCategoryProperty: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PeriodCategoryProperty',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.subPeriodType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subPeriodType: EnumField<
    EntityT,
    DeSerializersT,
    BoSubPeriodTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'SubPeriodType',
    BoSubPeriodTypeEnum,
    true
  );
  /**
   * Representation of the {@link PeriodCategory.numberOfPeriods} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  numberOfPeriods: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'NumberOfPeriods',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.periodName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  periodName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PeriodName', 'Edm.String', true);
  /**
   * Representation of the {@link PeriodCategory.debitorsFollowUpAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  debitorsFollowUpAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DebitorsFollowUpAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.accountforOutgoingChecks} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountforOutgoingChecks: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AccountforOutgoingChecks',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.accountforCashReceipt} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountforCashReceipt: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AccountforCashReceipt',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.customersDeductionatSource} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customersDeductionatSource: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CustomersDeductionatSource',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.commissionAccountDefault} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  commissionAccountDefault: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CommissionAccountDefault',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.purchaseTax} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  purchaseTax: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PurchaseTax', 'Edm.String', true);
  /**
   * Representation of the {@link PeriodCategory.foreignAccountsReceivables} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  foreignAccountsReceivables: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ForeignAccountsReceivables',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.creditorsFollowUpAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditorsFollowUpAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CreditorsFollowUpAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.outgoingChecksAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  outgoingChecksAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'OutgoingChecksAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.outgoingCashAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  outgoingCashAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'OutgoingCashAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.accountforCreditMemoPayme} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountforCreditMemoPayme: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AccountforCreditMemoPayme',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.inputTaxAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inputTaxAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'InputTaxAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.taxDefinition} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxDefinition: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxDefinition', 'Edm.String', true);
  /**
   * Representation of the {@link PeriodCategory.withholodingTax} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  withholodingTax: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'WithholodingTax',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.openingBalancesAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  openingBalancesAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'OpeningBalancesAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.defaultSaleAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultSaleAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DefaultSaleAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.taxExemptRevenuesDefault} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxExemptRevenuesDefault: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TaxExemptRevenuesDefault',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.expenseAccountDefault} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expenseAccountDefault: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExpenseAccountDefault',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.revenuesAccountForeign} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  revenuesAccountForeign: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'RevenuesAccountForeign',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.salesRevenueEu} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  salesRevenueEu: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SalesRevenueEU',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.expensesAccountForeign} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expensesAccountForeign: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExpensesAccountForeign',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.rateDifferencesDefaultAcc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rateDifferencesDefaultAcc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'RateDifferencesDefaultAcc',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.decreaseGlAcc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  decreaseGlAcc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DecreaseGLAcc', 'Edm.String', true);
  /**
   * Representation of the {@link PeriodCategory.reconciliationDifference} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reconciliationDifference: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ReconciliationDifference',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.acountforOpeningWhBalance} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  acountforOpeningWhBalance: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AcountforOpeningWHBalance',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.apCashDiscountAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  apCashDiscountAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'APCashDiscountAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.apLossCashDiscountAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  apLossCashDiscountAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'APLossCashDiscountAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.apLossRealizedExchangeDif} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  apLossRealizedExchangeDif: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'APLossRealizedExchangeDif',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.arCashDiscountAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  arCashDiscountAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ARCashDiscountAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.arLossRealizedExchangeDi} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  arLossRealizedExchangeDi: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ARLossRealizedExchangeDi',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.roundingAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  roundingAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'RoundingAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.apGainRealizedExchngeDif} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  apGainRealizedExchngeDif: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'APGainRealizedExchngeDif',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.arGainRealizedExchngeDif} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  arGainRealizedExchngeDif: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ARGainRealizedExchngeDif',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.increaseGlAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  increaseGlAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'IncreaseGLAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.salesReturns} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  salesReturns: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SalesReturns', 'Edm.String', true);
  /**
   * Representation of the {@link PeriodCategory.costOfGoodsSold} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costOfGoodsSold: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CostOfGoodsSold',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.allocationAcc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  allocationAcc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AllocationAcc', 'Edm.String', true);
  /**
   * Representation of the {@link PeriodCategory.varianceAcc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  varianceAcc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VarianceAcc', 'Edm.String', true);
  /**
   * Representation of the {@link PeriodCategory.priceDifferenceAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priceDifferenceAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PriceDifferenceAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.customerDownPaymentsAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customerDownPaymentsAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CustomerDownPaymentsAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.vendorDownPaymentsAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vendorDownPaymentsAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'VendorDownPaymentsAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.billofExchangeAccountsRece} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billofExchangeAccountsRece: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BillofExchangeAccountsRece',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.custBillofExchangeonC} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  custBillofExchangeonC: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CustBillofExchangeonC',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.customerBillofExchangePres} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customerBillofExchangePres: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CustomerBillofExchangePres',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.customerBillofExchngeDisc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customerBillofExchngeDisc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CustomerBillofExchngeDisc',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.customerUnpaidBoE} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customerUnpaidBoE: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CustomerUnpaidBoE',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.boEAccountsPayable} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  boEAccountsPayable: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BoEAccountsPayable',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.boEAccountsPayable2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  boEAccountsPayable2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BoEAccountsPayable2',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.customerDoubtfulDebtsAcct} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customerDoubtfulDebtsAcct: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CustomerDoubtfulDebtsAcct',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.vendorDoubtfulDebtsAcct} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vendorDoubtfulDebtsAcct: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'VendorDoubtfulDebtsAcct',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.purchaseAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  purchaseAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PurchaseAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.purchaseReturnAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  purchaseReturnAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PurchaseReturnAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.purchaseOffsetAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  purchaseOffsetAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PurchaseOffsetAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.eoyControlAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  eoyControlAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EOYControlAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.exchangeRateDifferencesAcct} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exchangeRateDifferencesAcct: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExchangeRateDifferencesAcct',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.goodsClearingAcc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  goodsClearingAcc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GoodsClearingAcc',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.expenseClearingAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expenseClearingAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExpenseClearingAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.expenseOffsetAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expenseOffsetAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExpenseOffsetAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.costofSaleRevaluationAcct} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costofSaleRevaluationAcct: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CostofSaleRevaluationAcct',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.repomoAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  repomoAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RepomoAccount', 'Edm.String', true);
  /**
   * Representation of the {@link PeriodCategory.wipMaterialVarianceAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wipMaterialVarianceAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'WIPMaterialVarianceAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.downPaymentVatAcctSale} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  downPaymentVatAcctSale: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DownPaymentVATAcctSale',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.downPaymentVatAcctPurch} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  downPaymentVatAcctPurch: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DownPaymentVATAcctPurch',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.downPaymentSClearingAcct} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  downPaymentSClearingAcct: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DownPaymentSClearingAcct',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.downPaymentPClearingAcct} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  downPaymentPClearingAcct: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DownPaymentPClearingAcct',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.expenseVarianceAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expenseVarianceAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExpenseVarianceAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.costofSaleRevOffsetAcct} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costofSaleRevOffsetAcct: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CostofSaleRevOffsetAcct',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.euExpenseAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  euExpenseAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EUExpenseAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.stockAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stockAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('StockAccount', 'Edm.String', true);
  /**
   * Representation of the {@link PeriodCategory.inventoryOffsetIncrease} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryOffsetIncrease: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'InventoryOffsetIncrease',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.inventoryOffsetDecrease} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryOffsetDecrease: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'InventoryOffsetDecrease',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.vendorAssetsAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vendorAssetsAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'VendorAssetsAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.stockRevaluationAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stockRevaluationAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'StockRevaluationAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.stockRevaluationOffsetAcct} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stockRevaluationOffsetAcct: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'StockRevaluationOffsetAcct',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.wipMaterialAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wipMaterialAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'WIPMaterialAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.invoicePaymentBp} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  invoicePaymentBp: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'InvoicePaymentBP',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.glRevaluationOffsetAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  glRevaluationOffsetAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GLRevaluationOffsetAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.overpaymentsApAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  overpaymentsApAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'OverpaymentsAPAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.underpaymentsApAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  underpaymentsApAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'UnderpaymentsAPAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.overpaymentsArAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  overpaymentsArAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'OverpaymentsARAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.underpaymentsArAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  underpaymentsArAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'UnderpaymentsARAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.purchaseCreditAcc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  purchaseCreditAcc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PurchaseCreditAcc',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.euPurchaseCreditAcc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  euPurchaseCreditAcc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EUPurchaseCreditAcc',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.foreignPurchaseCreditAcc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  foreignPurchaseCreditAcc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ForeignPurchaseCreditAcc',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.salesCreditAcc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  salesCreditAcc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SalesCreditAcc',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.salesCreditEuAcc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  salesCreditEuAcc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SalesCreditEUAcc',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.exemptedCredits} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exemptedCredits: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExemptedCredits',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.salesCreditForeignAcc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  salesCreditForeignAcc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SalesCreditForeignAcc',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.fromPostingDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fromPostingDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FromPostingDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.toPostingDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  toPostingDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ToPostingDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.fromDueDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fromDueDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FromDueDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.toDueDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  toDueDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ToDueDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.fromDocumentDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fromDocumentDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FromDocumentDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.toDocumentDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  toDocumentDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ToDocumentDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.outgoingTaxAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  outgoingTaxAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'OutgoingTaxAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.negativeInventoryAdjustmentAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  negativeInventoryAdjustmentAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'NegativeInventoryAdjustmentAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.financialYear} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  financialYear: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FinancialYear', 'Edm.Int32', true);
  /**
   * Representation of the {@link PeriodCategory.selfInvoiceRevenueAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  selfInvoiceRevenueAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SelfInvoiceRevenueAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.selfInvoiceExpenseAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  selfInvoiceExpenseAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SelfInvoiceExpenseAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.stockInTransitAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stockInTransitAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'StockInTransitAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.salesDownPaymentInterimAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  salesDownPaymentInterimAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SalesDownPaymentInterimAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.purchaseDownPaymentInterimAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  purchaseDownPaymentInterimAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PurchaseDownPaymentInterimAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.euAccountsReceivable} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  euAccountsReceivable: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EUAccountsReceivable',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.euAccountsPayable} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  euAccountsPayable: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EUAccountsPayable',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.wipOffsetProfitAndLossAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wipOffsetProfitAndLossAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'WipOffsetProfitAndLossAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.inventoryOffsetProfitAndLossAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryOffsetProfitAndLossAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'InventoryOffsetProfitAndLossAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.dunningInterestAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dunningInterestAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DunningInterestAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.dunningFeeAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dunningFeeAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DunningFeeAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.arGainRealizedConversionDiff} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  arGainRealizedConversionDiff: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ARGainRealizedConversionDiff',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.arLossRealizedConversionDiff} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  arLossRealizedConversionDiff: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ARLossRealizedConversionDiff',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.apGainRealizedConversionDiff} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  apGainRealizedConversionDiff: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'APGainRealizedConversionDiff',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.apLossRealizedConversionDiff} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  apLossRealizedConversionDiff: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'APLossRealizedConversionDiff',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.glGainRealizedConversionDiff} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  glGainRealizedConversionDiff: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GLGainRealizedConversionDiff',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.glLossRealizedConversionDiff} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  glLossRealizedConversionDiff: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GLLossRealizedConversionDiff',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.arExRateInterim} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  arExRateInterim: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ARExRateInterim',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.apExRateInterim} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  apExRateInterim: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'APExRateInterim',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.arCashDiscountInterim} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  arCashDiscountInterim: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ARCashDiscountInterim',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.apCashDiscountInterim} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  apCashDiscountInterim: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'APCashDiscountInterim',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.salesInterimAcctLnWTax} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  salesInterimAcctLnWTax: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SalesInterimAcctLnWTax',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.purchaseInterimAcctLnWTax} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  purchaseInterimAcctLnWTax: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PurchaseInterimAcctLnWTax',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.exhRatesDiffAcctLnWTax} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exhRatesDiffAcctLnWTax: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExhRatesDiffAcctLnWTax',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link PeriodCategory.wipMappingCollection} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wipMappingCollection: CollectionField<
    EntityT,
    DeSerializersT,
    WipMapping,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'WIPMappingCollection',
    WipMapping,
    true
  );

  /**
   * Creates an instance of PeriodCategoryField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, PeriodCategory, fieldOptions);
  }
}

export namespace PeriodCategory {
  /**
   * Metadata information on all properties of the `PeriodCategory` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PeriodCategory>[] = [
    {
      originalName: 'AbsoluteEntry',
      name: 'absoluteEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BeginningofFinancialYear',
      name: 'beginningofFinancialYear',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'PeriodCategoryProperty',
      name: 'periodCategoryProperty',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SubPeriodType',
      name: 'subPeriodType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'NumberOfPeriods',
      name: 'numberOfPeriods',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'PeriodName',
      name: 'periodName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DebitorsFollowUpAccount',
      name: 'debitorsFollowUpAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AccountforOutgoingChecks',
      name: 'accountforOutgoingChecks',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AccountforCashReceipt',
      name: 'accountforCashReceipt',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CustomersDeductionatSource',
      name: 'customersDeductionatSource',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CommissionAccountDefault',
      name: 'commissionAccountDefault',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PurchaseTax',
      name: 'purchaseTax',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ForeignAccountsReceivables',
      name: 'foreignAccountsReceivables',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CreditorsFollowUpAccount',
      name: 'creditorsFollowUpAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'OutgoingChecksAccount',
      name: 'outgoingChecksAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'OutgoingCashAccount',
      name: 'outgoingCashAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AccountforCreditMemoPayme',
      name: 'accountforCreditMemoPayme',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'InputTaxAccount',
      name: 'inputTaxAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxDefinition',
      name: 'taxDefinition',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'WithholodingTax',
      name: 'withholodingTax',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'OpeningBalancesAccount',
      name: 'openingBalancesAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DefaultSaleAccount',
      name: 'defaultSaleAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxExemptRevenuesDefault',
      name: 'taxExemptRevenuesDefault',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ExpenseAccountDefault',
      name: 'expenseAccountDefault',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'RevenuesAccountForeign',
      name: 'revenuesAccountForeign',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SalesRevenueEU',
      name: 'salesRevenueEu',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ExpensesAccountForeign',
      name: 'expensesAccountForeign',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'RateDifferencesDefaultAcc',
      name: 'rateDifferencesDefaultAcc',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DecreaseGLAcc',
      name: 'decreaseGlAcc',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ReconciliationDifference',
      name: 'reconciliationDifference',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AcountforOpeningWHBalance',
      name: 'acountforOpeningWhBalance',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'APCashDiscountAccount',
      name: 'apCashDiscountAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'APLossCashDiscountAccount',
      name: 'apLossCashDiscountAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'APLossRealizedExchangeDif',
      name: 'apLossRealizedExchangeDif',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ARCashDiscountAccount',
      name: 'arCashDiscountAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ARLossRealizedExchangeDi',
      name: 'arLossRealizedExchangeDi',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'RoundingAccount',
      name: 'roundingAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'APGainRealizedExchngeDif',
      name: 'apGainRealizedExchngeDif',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ARGainRealizedExchngeDif',
      name: 'arGainRealizedExchngeDif',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'IncreaseGLAccount',
      name: 'increaseGlAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SalesReturns',
      name: 'salesReturns',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CostOfGoodsSold',
      name: 'costOfGoodsSold',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AllocationAcc',
      name: 'allocationAcc',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'VarianceAcc',
      name: 'varianceAcc',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PriceDifferenceAccount',
      name: 'priceDifferenceAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CustomerDownPaymentsAccount',
      name: 'customerDownPaymentsAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'VendorDownPaymentsAccount',
      name: 'vendorDownPaymentsAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BillofExchangeAccountsRece',
      name: 'billofExchangeAccountsRece',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CustBillofExchangeonC',
      name: 'custBillofExchangeonC',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CustomerBillofExchangePres',
      name: 'customerBillofExchangePres',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CustomerBillofExchngeDisc',
      name: 'customerBillofExchngeDisc',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CustomerUnpaidBoE',
      name: 'customerUnpaidBoE',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BoEAccountsPayable',
      name: 'boEAccountsPayable',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BoEAccountsPayable2',
      name: 'boEAccountsPayable2',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CustomerDoubtfulDebtsAcct',
      name: 'customerDoubtfulDebtsAcct',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'VendorDoubtfulDebtsAcct',
      name: 'vendorDoubtfulDebtsAcct',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PurchaseAccount',
      name: 'purchaseAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PurchaseReturnAccount',
      name: 'purchaseReturnAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PurchaseOffsetAccount',
      name: 'purchaseOffsetAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'EOYControlAccount',
      name: 'eoyControlAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ExchangeRateDifferencesAcct',
      name: 'exchangeRateDifferencesAcct',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'GoodsClearingAcc',
      name: 'goodsClearingAcc',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ExpenseClearingAccount',
      name: 'expenseClearingAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ExpenseOffsetAccount',
      name: 'expenseOffsetAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CostofSaleRevaluationAcct',
      name: 'costofSaleRevaluationAcct',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'RepomoAccount',
      name: 'repomoAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'WIPMaterialVarianceAccount',
      name: 'wipMaterialVarianceAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DownPaymentVATAcctSale',
      name: 'downPaymentVatAcctSale',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DownPaymentVATAcctPurch',
      name: 'downPaymentVatAcctPurch',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DownPaymentSClearingAcct',
      name: 'downPaymentSClearingAcct',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DownPaymentPClearingAcct',
      name: 'downPaymentPClearingAcct',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ExpenseVarianceAccount',
      name: 'expenseVarianceAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CostofSaleRevOffsetAcct',
      name: 'costofSaleRevOffsetAcct',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'EUExpenseAccount',
      name: 'euExpenseAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'StockAccount',
      name: 'stockAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'InventoryOffsetIncrease',
      name: 'inventoryOffsetIncrease',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'InventoryOffsetDecrease',
      name: 'inventoryOffsetDecrease',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'VendorAssetsAccount',
      name: 'vendorAssetsAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'StockRevaluationAccount',
      name: 'stockRevaluationAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'StockRevaluationOffsetAcct',
      name: 'stockRevaluationOffsetAcct',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'WIPMaterialAccount',
      name: 'wipMaterialAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'InvoicePaymentBP',
      name: 'invoicePaymentBp',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'GLRevaluationOffsetAccount',
      name: 'glRevaluationOffsetAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'OverpaymentsAPAccount',
      name: 'overpaymentsApAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'UnderpaymentsAPAccount',
      name: 'underpaymentsApAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'OverpaymentsARAccount',
      name: 'overpaymentsArAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'UnderpaymentsARAccount',
      name: 'underpaymentsArAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PurchaseCreditAcc',
      name: 'purchaseCreditAcc',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'EUPurchaseCreditAcc',
      name: 'euPurchaseCreditAcc',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ForeignPurchaseCreditAcc',
      name: 'foreignPurchaseCreditAcc',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SalesCreditAcc',
      name: 'salesCreditAcc',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SalesCreditEUAcc',
      name: 'salesCreditEuAcc',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ExemptedCredits',
      name: 'exemptedCredits',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SalesCreditForeignAcc',
      name: 'salesCreditForeignAcc',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FromPostingDate',
      name: 'fromPostingDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'ToPostingDate',
      name: 'toPostingDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'FromDueDate',
      name: 'fromDueDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'ToDueDate',
      name: 'toDueDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'FromDocumentDate',
      name: 'fromDocumentDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'ToDocumentDate',
      name: 'toDocumentDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'OutgoingTaxAccount',
      name: 'outgoingTaxAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'NegativeInventoryAdjustmentAccount',
      name: 'negativeInventoryAdjustmentAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FinancialYear',
      name: 'financialYear',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'SelfInvoiceRevenueAccount',
      name: 'selfInvoiceRevenueAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SelfInvoiceExpenseAccount',
      name: 'selfInvoiceExpenseAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'StockInTransitAccount',
      name: 'stockInTransitAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SalesDownPaymentInterimAccount',
      name: 'salesDownPaymentInterimAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PurchaseDownPaymentInterimAccount',
      name: 'purchaseDownPaymentInterimAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'EUAccountsReceivable',
      name: 'euAccountsReceivable',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'EUAccountsPayable',
      name: 'euAccountsPayable',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'WipOffsetProfitAndLossAccount',
      name: 'wipOffsetProfitAndLossAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'InventoryOffsetProfitAndLossAccount',
      name: 'inventoryOffsetProfitAndLossAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DunningInterestAccount',
      name: 'dunningInterestAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DunningFeeAccount',
      name: 'dunningFeeAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ARGainRealizedConversionDiff',
      name: 'arGainRealizedConversionDiff',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ARLossRealizedConversionDiff',
      name: 'arLossRealizedConversionDiff',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'APGainRealizedConversionDiff',
      name: 'apGainRealizedConversionDiff',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'APLossRealizedConversionDiff',
      name: 'apLossRealizedConversionDiff',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'GLGainRealizedConversionDiff',
      name: 'glGainRealizedConversionDiff',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'GLLossRealizedConversionDiff',
      name: 'glLossRealizedConversionDiff',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ARExRateInterim',
      name: 'arExRateInterim',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'APExRateInterim',
      name: 'apExRateInterim',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ARCashDiscountInterim',
      name: 'arCashDiscountInterim',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'APCashDiscountInterim',
      name: 'apCashDiscountInterim',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SalesInterimAcctLnWTax',
      name: 'salesInterimAcctLnWTax',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PurchaseInterimAcctLnWTax',
      name: 'purchaseInterimAcctLnWTax',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ExhRatesDiffAcctLnWTax',
      name: 'exhRatesDiffAcctLnWTax',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'WIPMappingCollection',
      name: 'wipMappingCollection',
      type: WipMapping,
      isCollection: true
    }
  ];
}
