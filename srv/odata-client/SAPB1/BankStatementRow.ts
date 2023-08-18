/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MultiplePayment } from './MultiplePayment';
import { BoBpsDocTypes } from './BoBpsDocTypes';
import { CreateMethodEnum } from './CreateMethodEnum';
import { BankStatementDocTypeEnum } from './BankStatementDocTypeEnum';
import { PostingMethodEnum } from './PostingMethodEnum';
import { BankStatementRowSourceEnum } from './BankStatementRowSourceEnum';
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
 * BankStatementRow
 */
export interface BankStatementRow<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * External Bank Statement No.
   * @nullable
   */
  externalBankStatementNo?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Account Number.
   * @nullable
   */
  accountNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Sequence No.
   * @nullable
   */
  sequenceNo?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Account Name.
   * @nullable
   */
  accountName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Reference.
   * @nullable
   */
  reference?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Due Date.
   * @nullable
   */
  dueDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Details.
   * @nullable
   */
  details?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Debit Amount Fc.
   * @nullable
   */
  debitAmountFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Credit Amount Fc.
   * @nullable
   */
  creditAmountFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Credit Currency.
   * @nullable
   */
  creditCurrency?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Balance.
   * @nullable
   */
  balance?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Reconciliation No.
   * @nullable
   */
  reconciliationNo?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * External Code.
   * @nullable
   */
  externalCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bp Name.
   * @nullable
   */
  bpName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Statement Number.
   * @nullable
   */
  statementNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Row Status.
   * @nullable
   */
  rowStatus?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Visual Order.
   * @nullable
   */
  visualOrder?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Doc Num Type.
   * @nullable
   */
  docNumType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Details 2.
   * @nullable
   */
  details2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Payment Reference No.
   * @nullable
   */
  paymentReferenceNo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Create Method.
   * @nullable
   */
  createMethod?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Bank Stmt Line Date.
   * @nullable
   */
  bankStmtLineDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Bank Stmt Due Date.
   * @nullable
   */
  bankStmtDueDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Internal Bank Op Code.
   * @nullable
   */
  internalBankOpCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Bp Bank Account.
   * @nullable
   */
  bpBankAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Debit Amount Lc.
   * @nullable
   */
  debitAmountLc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Credit Amount Lc.
   * @nullable
   */
  creditAmountLc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Exchange Rate.
   * @nullable
   */
  exchangeRate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Iba Nof Bp Bank Account.
   * @nullable
   */
  ibaNofBpBankAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Fee On The Line.
   * @nullable
   */
  feeOnTheLine?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Vat Amount Lc.
   * @nullable
   */
  vatAmountLc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Vat Amount Fc.
   * @nullable
   */
  vatAmountFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Journal Entry Id.
   * @nullable
   */
  journalEntryId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Payment Id.
   * @nullable
   */
  paymentId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Document Type.
   * @nullable
   */
  documentType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Posting Method.
   * @nullable
   */
  postingMethod?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Gl Accountfor Fee.
   * @nullable
   */
  glAccountforFee?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Fee Profit Center.
   * @nullable
   */
  feeProfitCenter?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Fee Project.
   * @nullable
   */
  feeProject?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bp Bank Code.
   * @nullable
   */
  bpBankCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Fee Distribution Rule.
   * @nullable
   */
  feeDistributionRule?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Fee Distribution Rule 2.
   * @nullable
   */
  feeDistributionRule2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Fee Distribution Rule 3.
   * @nullable
   */
  feeDistributionRule3?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Fee Distribution Rule 4.
   * @nullable
   */
  feeDistributionRule4?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Fee Distribution Rule 5.
   * @nullable
   */
  feeDistributionRule5?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bpbic Swift Code.
   * @nullable
   */
  bpbicSwiftCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Source.
   * @nullable
   */
  source?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Folio Prefix String.
   * @nullable
   */
  folioPrefixString?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Folio Number.
   * @nullable
   */
  folioNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * U Bp Doc Nr.
   * @nullable
   */
  uBpDocNr?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * U Bp P Date.
   * @nullable
   */
  uBpPDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * U Bp T Date.
   * @nullable
   */
  uBpTDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * U Bp C Bala.
   * @nullable
   */
  uBpCBala?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * U Bp N Bala.
   * @nullable
   */
  uBpNBala?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * U Bp G Lacc.
   * @nullable
   */
  uBpGLacc?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bp Statu.
   * @nullable
   */
  uBpStatu?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bp Ex Doc.
   * @nullable
   */
  uBpExDoc?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * U Bp Pay Do.
   * @nullable
   */
  uBpPayDo?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * U Bp Vat.
   * @nullable
   */
  uBpVat?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bp Vat A.
   * @nullable
   */
  uBpVatA?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * U Bp Pc.
   * @nullable
   */
  uBpPc?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bp Prj.
   * @nullable
   */
  uBpPrj?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bp Dmcm.
   * @nullable
   */
  uBpDmcm?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bp F Out.
   * @nullable
   */
  uBpFOut?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * U Bp F In.
   * @nullable
   */
  uBpFIn?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * U Bp F Curr.
   * @nullable
   */
  uBpFCurr?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bp F Rate.
   * @nullable
   */
  uBpFRate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * U Bp Fvat.
   * @nullable
   */
  uBpFvat?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Multiple Payments.
   * @nullable
   */
  multiplePayments?: DeserializedType<DeSerializersT, 'SAPB1.MultiplePayment'>;
}

/**
 * BankStatementRowField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class BankStatementRowField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  BankStatementRow,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link BankStatementRow.externalBankStatementNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  externalBankStatementNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExternalBankStatementNo',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link BankStatementRow.accountNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AccountNumber', 'Edm.String', true);
  /**
   * Representation of the {@link BankStatementRow.sequenceNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sequenceNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SequenceNo', 'Edm.Int32', true);
  /**
   * Representation of the {@link BankStatementRow.accountName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AccountName', 'Edm.String', true);
  /**
   * Representation of the {@link BankStatementRow.reference} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reference: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Reference', 'Edm.String', true);
  /**
   * Representation of the {@link BankStatementRow.dueDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dueDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DueDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link BankStatementRow.details} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  details: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Details', 'Edm.String', true);
  /**
   * Representation of the {@link BankStatementRow.debitAmountFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  debitAmountFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DebitAmountFC', 'Edm.Double', true);
  /**
   * Representation of the {@link BankStatementRow.creditAmountFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditAmountFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CreditAmountFC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BankStatementRow.creditCurrency} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditCurrency: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CreditCurrency',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link BankStatementRow.balance} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  balance: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Balance', 'Edm.Double', true);
  /**
   * Representation of the {@link BankStatementRow.reconciliationNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reconciliationNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ReconciliationNo',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link BankStatementRow.externalCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  externalCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ExternalCode', 'Edm.String', true);
  /**
   * Representation of the {@link BankStatementRow.bpCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BPCode', 'Edm.String', true);
  /**
   * Representation of the {@link BankStatementRow.bpName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BPName', 'Edm.String', true);
  /**
   * Representation of the {@link BankStatementRow.statementNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  statementNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'StatementNumber',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link BankStatementRow.rowStatus} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowStatus: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RowStatus', 'Edm.String', true);
  /**
   * Representation of the {@link BankStatementRow.visualOrder} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  visualOrder: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VisualOrder', 'Edm.Int32', true);
  /**
   * Representation of the {@link BankStatementRow.docNumType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docNumType: EnumField<EntityT, DeSerializersT, BoBpsDocTypes, true, false> =
    this._fieldBuilder.buildEnumField('DocNumType', BoBpsDocTypes, true);
  /**
   * Representation of the {@link BankStatementRow.details2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  details2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Details2', 'Edm.String', true);
  /**
   * Representation of the {@link BankStatementRow.paymentReferenceNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentReferenceNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PaymentReferenceNo',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link BankStatementRow.createMethod} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  createMethod: EnumField<
    EntityT,
    DeSerializersT,
    CreateMethodEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('CreateMethod', CreateMethodEnum, true);
  /**
   * Representation of the {@link BankStatementRow.bankStmtLineDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bankStmtLineDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BankStmtLineDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link BankStatementRow.bankStmtDueDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bankStmtDueDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BankStmtDueDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link BankStatementRow.internalBankOpCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  internalBankOpCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'InternalBankOpCode',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link BankStatementRow.bpBankAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpBankAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BPBankAccount', 'Edm.String', true);
  /**
   * Representation of the {@link BankStatementRow.debitAmountLc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  debitAmountLc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DebitAmountLC', 'Edm.Double', true);
  /**
   * Representation of the {@link BankStatementRow.creditAmountLc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditAmountLc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CreditAmountLC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BankStatementRow.exchangeRate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exchangeRate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ExchangeRate', 'Edm.Double', true);
  /**
   * Representation of the {@link BankStatementRow.ibaNofBpBankAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ibaNofBpBankAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'IBANofBPBankAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link BankStatementRow.feeOnTheLine} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  feeOnTheLine: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FeeOnTheLine', 'Edm.Double', true);
  /**
   * Representation of the {@link BankStatementRow.vatAmountLc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatAmountLc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VATAmountLC', 'Edm.Double', true);
  /**
   * Representation of the {@link BankStatementRow.vatAmountFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatAmountFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VATAmountFC', 'Edm.Double', true);
  /**
   * Representation of the {@link BankStatementRow.journalEntryId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  journalEntryId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('JournalEntryID', 'Edm.Int32', true);
  /**
   * Representation of the {@link BankStatementRow.paymentId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PaymentID', 'Edm.Int32', true);
  /**
   * Representation of the {@link BankStatementRow.documentType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentType: EnumField<
    EntityT,
    DeSerializersT,
    BankStatementDocTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'DocumentType',
    BankStatementDocTypeEnum,
    true
  );
  /**
   * Representation of the {@link BankStatementRow.postingMethod} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  postingMethod: EnumField<
    EntityT,
    DeSerializersT,
    PostingMethodEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'PostingMethod',
    PostingMethodEnum,
    true
  );
  /**
   * Representation of the {@link BankStatementRow.glAccountforFee} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  glAccountforFee: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GLAccountforFee',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link BankStatementRow.feeProfitCenter} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  feeProfitCenter: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FeeProfitCenter',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link BankStatementRow.feeProject} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  feeProject: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FeeProject', 'Edm.String', true);
  /**
   * Representation of the {@link BankStatementRow.bpBankCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpBankCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BPBankCode', 'Edm.String', true);
  /**
   * Representation of the {@link BankStatementRow.feeDistributionRule} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  feeDistributionRule: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FeeDistributionRule',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link BankStatementRow.feeDistributionRule2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  feeDistributionRule2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FeeDistributionRule2',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link BankStatementRow.feeDistributionRule3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  feeDistributionRule3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FeeDistributionRule3',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link BankStatementRow.feeDistributionRule4} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  feeDistributionRule4: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FeeDistributionRule4',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link BankStatementRow.feeDistributionRule5} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  feeDistributionRule5: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FeeDistributionRule5',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link BankStatementRow.bpbicSwiftCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpbicSwiftCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BPBICSwiftCode',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link BankStatementRow.source} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  source: EnumField<
    EntityT,
    DeSerializersT,
    BankStatementRowSourceEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'Source',
    BankStatementRowSourceEnum,
    true
  );
  /**
   * Representation of the {@link BankStatementRow.folioPrefixString} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  folioPrefixString: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FolioPrefixString',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link BankStatementRow.folioNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  folioNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FolioNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link BankStatementRow.uBpDocNr} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBpDocNr: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BP_DocNr', 'Edm.Int32', true);
  /**
   * Representation of the {@link BankStatementRow.uBpPDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBpPDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'U_BP_PDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link BankStatementRow.uBpTDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBpTDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'U_BP_TDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link BankStatementRow.uBpCBala} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBpCBala: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BP_CBala', 'Edm.Double', true);
  /**
   * Representation of the {@link BankStatementRow.uBpNBala} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBpNBala: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BP_NBala', 'Edm.Double', true);
  /**
   * Representation of the {@link BankStatementRow.uBpGLacc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBpGLacc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BP_GLacc', 'Edm.String', true);
  /**
   * Representation of the {@link BankStatementRow.uBpStatu} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBpStatu: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BP_Statu', 'Edm.String', true);
  /**
   * Representation of the {@link BankStatementRow.uBpExDoc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBpExDoc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BP_ExDoc', 'Edm.Int32', true);
  /**
   * Representation of the {@link BankStatementRow.uBpPayDo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBpPayDo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BP_PayDo', 'Edm.Int32', true);
  /**
   * Representation of the {@link BankStatementRow.uBpVat} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBpVat: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BP_VAT', 'Edm.String', true);
  /**
   * Representation of the {@link BankStatementRow.uBpVatA} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBpVatA: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BP_VAT_A', 'Edm.Double', true);
  /**
   * Representation of the {@link BankStatementRow.uBpPc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBpPc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BP_PC', 'Edm.String', true);
  /**
   * Representation of the {@link BankStatementRow.uBpPrj} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBpPrj: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BP_Prj', 'Edm.String', true);
  /**
   * Representation of the {@link BankStatementRow.uBpDmcm} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBpDmcm: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BP_DMCM', 'Edm.String', true);
  /**
   * Representation of the {@link BankStatementRow.uBpFOut} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBpFOut: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BP_FOut', 'Edm.Double', true);
  /**
   * Representation of the {@link BankStatementRow.uBpFIn} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBpFIn: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BP_FIn', 'Edm.Double', true);
  /**
   * Representation of the {@link BankStatementRow.uBpFCurr} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBpFCurr: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BP_FCurr', 'Edm.String', true);
  /**
   * Representation of the {@link BankStatementRow.uBpFRate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBpFRate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BP_FRate', 'Edm.Double', true);
  /**
   * Representation of the {@link BankStatementRow.uBpFvat} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBpFvat: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BP_FVAT', 'Edm.Double', true);
  /**
   * Representation of the {@link BankStatementRow.multiplePayments} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  multiplePayments: CollectionField<
    EntityT,
    DeSerializersT,
    MultiplePayment,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'MultiplePayments',
    MultiplePayment,
    true
  );

  /**
   * Creates an instance of BankStatementRowField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, BankStatementRow, fieldOptions);
  }
}

export namespace BankStatementRow {
  /**
   * Metadata information on all properties of the `BankStatementRow` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BankStatementRow>[] = [
    {
      originalName: 'ExternalBankStatementNo',
      name: 'externalBankStatementNo',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'AccountNumber',
      name: 'accountNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SequenceNo',
      name: 'sequenceNo',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'AccountName',
      name: 'accountName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Reference',
      name: 'reference',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DueDate',
      name: 'dueDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'Details',
      name: 'details',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DebitAmountFC',
      name: 'debitAmountFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'CreditAmountFC',
      name: 'creditAmountFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'CreditCurrency',
      name: 'creditCurrency',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Balance',
      name: 'balance',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ReconciliationNo',
      name: 'reconciliationNo',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ExternalCode',
      name: 'externalCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BPCode',
      name: 'bpCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BPName',
      name: 'bpName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'StatementNumber',
      name: 'statementNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'RowStatus',
      name: 'rowStatus',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'VisualOrder',
      name: 'visualOrder',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DocNumType',
      name: 'docNumType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Details2',
      name: 'details2',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PaymentReferenceNo',
      name: 'paymentReferenceNo',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CreateMethod',
      name: 'createMethod',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'BankStmtLineDate',
      name: 'bankStmtLineDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'BankStmtDueDate',
      name: 'bankStmtDueDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'InternalBankOpCode',
      name: 'internalBankOpCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BPBankAccount',
      name: 'bpBankAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DebitAmountLC',
      name: 'debitAmountLc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'CreditAmountLC',
      name: 'creditAmountLc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ExchangeRate',
      name: 'exchangeRate',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'IBANofBPBankAccount',
      name: 'ibaNofBpBankAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FeeOnTheLine',
      name: 'feeOnTheLine',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'VATAmountLC',
      name: 'vatAmountLc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'VATAmountFC',
      name: 'vatAmountFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'JournalEntryID',
      name: 'journalEntryId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'PaymentID',
      name: 'paymentId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DocumentType',
      name: 'documentType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'PostingMethod',
      name: 'postingMethod',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'GLAccountforFee',
      name: 'glAccountforFee',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FeeProfitCenter',
      name: 'feeProfitCenter',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FeeProject',
      name: 'feeProject',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BPBankCode',
      name: 'bpBankCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FeeDistributionRule',
      name: 'feeDistributionRule',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FeeDistributionRule2',
      name: 'feeDistributionRule2',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FeeDistributionRule3',
      name: 'feeDistributionRule3',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FeeDistributionRule4',
      name: 'feeDistributionRule4',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FeeDistributionRule5',
      name: 'feeDistributionRule5',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BPBICSwiftCode',
      name: 'bpbicSwiftCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Source',
      name: 'source',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'FolioPrefixString',
      name: 'folioPrefixString',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FolioNumber',
      name: 'folioNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'U_BP_DocNr',
      name: 'uBpDocNr',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'U_BP_PDate',
      name: 'uBpPDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'U_BP_TDate',
      name: 'uBpTDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'U_BP_CBala',
      name: 'uBpCBala',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'U_BP_NBala',
      name: 'uBpNBala',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'U_BP_GLacc',
      name: 'uBpGLacc',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_BP_Statu',
      name: 'uBpStatu',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_BP_ExDoc',
      name: 'uBpExDoc',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'U_BP_PayDo',
      name: 'uBpPayDo',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'U_BP_VAT',
      name: 'uBpVat',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_BP_VAT_A',
      name: 'uBpVatA',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'U_BP_PC',
      name: 'uBpPc',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_BP_Prj',
      name: 'uBpPrj',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_BP_DMCM',
      name: 'uBpDmcm',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_BP_FOut',
      name: 'uBpFOut',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'U_BP_FIn',
      name: 'uBpFIn',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'U_BP_FCurr',
      name: 'uBpFCurr',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_BP_FRate',
      name: 'uBpFRate',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'U_BP_FVAT',
      name: 'uBpFvat',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'MultiplePayments',
      name: 'multiplePayments',
      type: MultiplePayment,
      isCollection: true
    }
  ];
}
