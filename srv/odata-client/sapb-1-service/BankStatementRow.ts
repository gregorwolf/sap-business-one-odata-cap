/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { MultiplePayment } from './MultiplePayment';
import { BoBpsDocTypes } from './BoBpsDocTypes';
import { CreateMethodEnum } from './CreateMethodEnum';
import { BankStatementDocTypeEnum } from './BankStatementDocTypeEnum';
import { PostingMethodEnum } from './PostingMethodEnum';
import { BankStatementRowSourceEnum } from './BankStatementRowSourceEnum';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * BankStatementRow
 */
export interface BankStatementRow {
  /**
   * External Bank Statement No.
   * @nullable
   */
  externalBankStatementNo?: number;
  /**
   * Account Number.
   * @nullable
   */
  accountNumber?: string;
  /**
   * Sequence No.
   * @nullable
   */
  sequenceNo?: number;
  /**
   * Account Name.
   * @nullable
   */
  accountName?: string;
  /**
   * Reference.
   * @nullable
   */
  reference?: string;
  /**
   * Due Date.
   * @nullable
   */
  dueDate?: Moment;
  /**
   * Details.
   * @nullable
   */
  details?: string;
  /**
   * Debit Amount Fc.
   * @nullable
   */
  debitAmountFc?: number;
  /**
   * Credit Amount Fc.
   * @nullable
   */
  creditAmountFc?: number;
  /**
   * Credit Currency.
   * @nullable
   */
  creditCurrency?: string;
  /**
   * Balance.
   * @nullable
   */
  balance?: number;
  /**
   * Reconciliation No.
   * @nullable
   */
  reconciliationNo?: number;
  /**
   * External Code.
   * @nullable
   */
  externalCode?: string;
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: string;
  /**
   * Bp Name.
   * @nullable
   */
  bpName?: string;
  /**
   * Statement Number.
   * @nullable
   */
  statementNumber?: number;
  /**
   * Row Status.
   * @nullable
   */
  rowStatus?: string;
  /**
   * Visual Order.
   * @nullable
   */
  visualOrder?: number;
  /**
   * Doc Num Type.
   * @nullable
   */
  docNumType?: BoBpsDocTypes;
  /**
   * Details 2.
   * @nullable
   */
  details2?: string;
  /**
   * Payment Reference No.
   * @nullable
   */
  paymentReferenceNo?: string;
  /**
   * Create Method.
   * @nullable
   */
  createMethod?: CreateMethodEnum;
  /**
   * Bank Stmt Line Date.
   * @nullable
   */
  bankStmtLineDate?: Moment;
  /**
   * Bank Stmt Due Date.
   * @nullable
   */
  bankStmtDueDate?: Moment;
  /**
   * Internal Bank Op Code.
   * @nullable
   */
  internalBankOpCode?: number;
  /**
   * Bp Bank Account.
   * @nullable
   */
  bpBankAccount?: string;
  /**
   * Debit Amount Lc.
   * @nullable
   */
  debitAmountLc?: number;
  /**
   * Credit Amount Lc.
   * @nullable
   */
  creditAmountLc?: number;
  /**
   * Exchange Rate.
   * @nullable
   */
  exchangeRate?: number;
  /**
   * Iba Nof Bp Bank Account.
   * @nullable
   */
  ibaNofBpBankAccount?: string;
  /**
   * Fee On The Line.
   * @nullable
   */
  feeOnTheLine?: number;
  /**
   * Vat Amount Lc.
   * @nullable
   */
  vatAmountLc?: number;
  /**
   * Vat Amount Fc.
   * @nullable
   */
  vatAmountFc?: number;
  /**
   * Journal Entry Id.
   * @nullable
   */
  journalEntryId?: number;
  /**
   * Payment Id.
   * @nullable
   */
  paymentId?: number;
  /**
   * Document Type.
   * @nullable
   */
  documentType?: BankStatementDocTypeEnum;
  /**
   * Posting Method.
   * @nullable
   */
  postingMethod?: PostingMethodEnum;
  /**
   * Gl Accountfor Fee.
   * @nullable
   */
  glAccountforFee?: string;
  /**
   * Fee Profit Center.
   * @nullable
   */
  feeProfitCenter?: string;
  /**
   * Fee Project.
   * @nullable
   */
  feeProject?: string;
  /**
   * Bp Bank Code.
   * @nullable
   */
  bpBankCode?: string;
  /**
   * Fee Distribution Rule.
   * @nullable
   */
  feeDistributionRule?: string;
  /**
   * Fee Distribution Rule 2.
   * @nullable
   */
  feeDistributionRule2?: string;
  /**
   * Fee Distribution Rule 3.
   * @nullable
   */
  feeDistributionRule3?: string;
  /**
   * Fee Distribution Rule 4.
   * @nullable
   */
  feeDistributionRule4?: string;
  /**
   * Fee Distribution Rule 5.
   * @nullable
   */
  feeDistributionRule5?: string;
  /**
   * Bpbic Swift Code.
   * @nullable
   */
  bpbicSwiftCode?: string;
  /**
   * Source.
   * @nullable
   */
  source?: BankStatementRowSourceEnum;
  /**
   * Folio Prefix String.
   * @nullable
   */
  folioPrefixString?: string;
  /**
   * Folio Number.
   * @nullable
   */
  folioNumber?: number;
  /**
   * Multiple Payments.
   * @nullable
   */
  multiplePayments?: MultiplePayment[];
}

/**
 * @deprecated Since v1.6.0. Use [[BankStatementRow.build]] instead.
 */
export function createBankStatementRow(json: any): BankStatementRow {
  return BankStatementRow.build(json);
}

/**
 * BankStatementRowField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BankStatementRowField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BankStatementRow> {
  /**
   * Representation of the [[BankStatementRow.externalBankStatementNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  externalBankStatementNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ExternalBankStatementNo', this, 'Edm.Int32');
  /**
   * Representation of the [[BankStatementRow.accountNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AccountNumber', this, 'Edm.String');
  /**
   * Representation of the [[BankStatementRow.sequenceNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sequenceNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SequenceNo', this, 'Edm.Int32');
  /**
   * Representation of the [[BankStatementRow.accountName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AccountName', this, 'Edm.String');
  /**
   * Representation of the [[BankStatementRow.reference]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reference: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Reference', this, 'Edm.String');
  /**
   * Representation of the [[BankStatementRow.dueDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dueDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DueDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[BankStatementRow.details]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  details: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Details', this, 'Edm.String');
  /**
   * Representation of the [[BankStatementRow.debitAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  debitAmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DebitAmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[BankStatementRow.creditAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditAmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CreditAmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[BankStatementRow.creditCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditCurrency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CreditCurrency', this, 'Edm.String');
  /**
   * Representation of the [[BankStatementRow.balance]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  balance: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Balance', this, 'Edm.Double');
  /**
   * Representation of the [[BankStatementRow.reconciliationNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reconciliationNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ReconciliationNo', this, 'Edm.Int32');
  /**
   * Representation of the [[BankStatementRow.externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  externalCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ExternalCode', this, 'Edm.String');
  /**
   * Representation of the [[BankStatementRow.bpCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPCode', this, 'Edm.String');
  /**
   * Representation of the [[BankStatementRow.bpName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPName', this, 'Edm.String');
  /**
   * Representation of the [[BankStatementRow.statementNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  statementNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StatementNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[BankStatementRow.rowStatus]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowStatus: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('RowStatus', this, 'Edm.String');
  /**
   * Representation of the [[BankStatementRow.visualOrder]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  visualOrder: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('VisualOrder', this, 'Edm.Int32');
  /**
   * Representation of the [[BankStatementRow.docNumType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docNumType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('DocNumType', this);
  /**
   * Representation of the [[BankStatementRow.details2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  details2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Details2', this, 'Edm.String');
  /**
   * Representation of the [[BankStatementRow.paymentReferenceNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentReferenceNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PaymentReferenceNo', this, 'Edm.String');
  /**
   * Representation of the [[BankStatementRow.createMethod]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  createMethod: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('CreateMethod', this);
  /**
   * Representation of the [[BankStatementRow.bankStmtLineDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bankStmtLineDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('BankStmtLineDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[BankStatementRow.bankStmtDueDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bankStmtDueDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('BankStmtDueDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[BankStatementRow.internalBankOpCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  internalBankOpCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('InternalBankOpCode', this, 'Edm.Int32');
  /**
   * Representation of the [[BankStatementRow.bpBankAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpBankAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPBankAccount', this, 'Edm.String');
  /**
   * Representation of the [[BankStatementRow.debitAmountLc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  debitAmountLc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DebitAmountLC', this, 'Edm.Double');
  /**
   * Representation of the [[BankStatementRow.creditAmountLc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditAmountLc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CreditAmountLC', this, 'Edm.Double');
  /**
   * Representation of the [[BankStatementRow.exchangeRate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exchangeRate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ExchangeRate', this, 'Edm.Double');
  /**
   * Representation of the [[BankStatementRow.ibaNofBpBankAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ibaNofBpBankAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('IBANofBPBankAccount', this, 'Edm.String');
  /**
   * Representation of the [[BankStatementRow.feeOnTheLine]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  feeOnTheLine: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FeeOnTheLine', this, 'Edm.Double');
  /**
   * Representation of the [[BankStatementRow.vatAmountLc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatAmountLc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('VATAmountLC', this, 'Edm.Double');
  /**
   * Representation of the [[BankStatementRow.vatAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatAmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('VATAmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[BankStatementRow.journalEntryId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  journalEntryId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('JournalEntryID', this, 'Edm.Int32');
  /**
   * Representation of the [[BankStatementRow.paymentId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PaymentID', this, 'Edm.Int32');
  /**
   * Representation of the [[BankStatementRow.documentType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('DocumentType', this);
  /**
   * Representation of the [[BankStatementRow.postingMethod]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  postingMethod: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('PostingMethod', this);
  /**
   * Representation of the [[BankStatementRow.glAccountforFee]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  glAccountforFee: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('GLAccountforFee', this, 'Edm.String');
  /**
   * Representation of the [[BankStatementRow.feeProfitCenter]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  feeProfitCenter: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FeeProfitCenter', this, 'Edm.String');
  /**
   * Representation of the [[BankStatementRow.feeProject]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  feeProject: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FeeProject', this, 'Edm.String');
  /**
   * Representation of the [[BankStatementRow.bpBankCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpBankCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPBankCode', this, 'Edm.String');
  /**
   * Representation of the [[BankStatementRow.feeDistributionRule]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  feeDistributionRule: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FeeDistributionRule', this, 'Edm.String');
  /**
   * Representation of the [[BankStatementRow.feeDistributionRule2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  feeDistributionRule2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FeeDistributionRule2', this, 'Edm.String');
  /**
   * Representation of the [[BankStatementRow.feeDistributionRule3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  feeDistributionRule3: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FeeDistributionRule3', this, 'Edm.String');
  /**
   * Representation of the [[BankStatementRow.feeDistributionRule4]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  feeDistributionRule4: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FeeDistributionRule4', this, 'Edm.String');
  /**
   * Representation of the [[BankStatementRow.feeDistributionRule5]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  feeDistributionRule5: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FeeDistributionRule5', this, 'Edm.String');
  /**
   * Representation of the [[BankStatementRow.bpbicSwiftCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpbicSwiftCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPBICSwiftCode', this, 'Edm.String');
  /**
   * Representation of the [[BankStatementRow.source]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  source: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Source', this);
  /**
   * Representation of the [[BankStatementRow.folioPrefixString]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  folioPrefixString: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FolioPrefixString', this, 'Edm.String');
  /**
   * Representation of the [[BankStatementRow.folioNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  folioNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FolioNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[BankStatementRow.multiplePayments]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  multiplePayments: CollectionField<EntityT, MultiplePayment> = new CollectionField('MultiplePayments', this, MultiplePayment);

  /**
   * Creates an instance of BankStatementRowField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BankStatementRow);
  }
}

export namespace BankStatementRow {
  /**
   * Metadata information on all properties of the `BankStatementRow` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BankStatementRow>[] = [{
    originalName: 'ExternalBankStatementNo',
    name: 'externalBankStatementNo',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'AccountNumber',
    name: 'accountNumber',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'SequenceNo',
    name: 'sequenceNo',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'AccountName',
    name: 'accountName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Reference',
    name: 'reference',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DueDate',
    name: 'dueDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Details',
    name: 'details',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DebitAmountFC',
    name: 'debitAmountFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'CreditAmountFC',
    name: 'creditAmountFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'CreditCurrency',
    name: 'creditCurrency',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Balance',
    name: 'balance',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ReconciliationNo',
    name: 'reconciliationNo',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ExternalCode',
    name: 'externalCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BPCode',
    name: 'bpCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BPName',
    name: 'bpName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'StatementNumber',
    name: 'statementNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'RowStatus',
    name: 'rowStatus',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'VisualOrder',
    name: 'visualOrder',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DocNumType',
    name: 'docNumType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Details2',
    name: 'details2',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'PaymentReferenceNo',
    name: 'paymentReferenceNo',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CreateMethod',
    name: 'createMethod',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'BankStmtLineDate',
    name: 'bankStmtLineDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'BankStmtDueDate',
    name: 'bankStmtDueDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'InternalBankOpCode',
    name: 'internalBankOpCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BPBankAccount',
    name: 'bpBankAccount',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DebitAmountLC',
    name: 'debitAmountLc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'CreditAmountLC',
    name: 'creditAmountLc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ExchangeRate',
    name: 'exchangeRate',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'IBANofBPBankAccount',
    name: 'ibaNofBpBankAccount',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'FeeOnTheLine',
    name: 'feeOnTheLine',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'VATAmountLC',
    name: 'vatAmountLc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'VATAmountFC',
    name: 'vatAmountFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'JournalEntryID',
    name: 'journalEntryId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'PaymentID',
    name: 'paymentId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DocumentType',
    name: 'documentType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'PostingMethod',
    name: 'postingMethod',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'GLAccountforFee',
    name: 'glAccountforFee',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'FeeProfitCenter',
    name: 'feeProfitCenter',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'FeeProject',
    name: 'feeProject',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BPBankCode',
    name: 'bpBankCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'FeeDistributionRule',
    name: 'feeDistributionRule',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'FeeDistributionRule2',
    name: 'feeDistributionRule2',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'FeeDistributionRule3',
    name: 'feeDistributionRule3',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'FeeDistributionRule4',
    name: 'feeDistributionRule4',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'FeeDistributionRule5',
    name: 'feeDistributionRule5',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BPBICSwiftCode',
    name: 'bpbicSwiftCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Source',
    name: 'source',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'FolioPrefixString',
    name: 'folioPrefixString',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'FolioNumber',
    name: 'folioNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'MultiplePayments',
    name: 'multiplePayments',
    type: MultiplePayment,
    isCollection: true
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType | MultiplePayment }): BankStatementRow {
    return deserializeComplexTypeV4(json, BankStatementRow);
  }
}
