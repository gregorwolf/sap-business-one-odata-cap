/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { MultiplePayment, MultiplePaymentField } from './MultiplePayment';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
  multiplePayments?: MultiplePayment;
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
export class BankStatementRowField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
  multiplePayments: MultiplePaymentField<EntityT> = new MultiplePaymentField('MultiplePayments', this);
}

export namespace BankStatementRow {
  export function build(json: { [keys: string]: FieldType | MultiplePayment }): BankStatementRow {
    return createComplexType(json, {
      ExternalBankStatementNo: (externalBankStatementNo: number) => ({ externalBankStatementNo: edmToTs(externalBankStatementNo, 'Edm.Int32') }),
      AccountNumber: (accountNumber: string) => ({ accountNumber: edmToTs(accountNumber, 'Edm.String') }),
      SequenceNo: (sequenceNo: number) => ({ sequenceNo: edmToTs(sequenceNo, 'Edm.Int32') }),
      AccountName: (accountName: string) => ({ accountName: edmToTs(accountName, 'Edm.String') }),
      Reference: (reference: string) => ({ reference: edmToTs(reference, 'Edm.String') }),
      DueDate: (dueDate: Moment) => ({ dueDate: edmToTs(dueDate, 'Edm.DateTimeOffset') }),
      Details: (details: string) => ({ details: edmToTs(details, 'Edm.String') }),
      DebitAmountFC: (debitAmountFc: number) => ({ debitAmountFc: edmToTs(debitAmountFc, 'Edm.Double') }),
      CreditAmountFC: (creditAmountFc: number) => ({ creditAmountFc: edmToTs(creditAmountFc, 'Edm.Double') }),
      CreditCurrency: (creditCurrency: string) => ({ creditCurrency: edmToTs(creditCurrency, 'Edm.String') }),
      Balance: (balance: number) => ({ balance: edmToTs(balance, 'Edm.Double') }),
      ReconciliationNo: (reconciliationNo: number) => ({ reconciliationNo: edmToTs(reconciliationNo, 'Edm.Int32') }),
      ExternalCode: (externalCode: string) => ({ externalCode: edmToTs(externalCode, 'Edm.String') }),
      BPCode: (bpCode: string) => ({ bpCode: edmToTs(bpCode, 'Edm.String') }),
      BPName: (bpName: string) => ({ bpName: edmToTs(bpName, 'Edm.String') }),
      StatementNumber: (statementNumber: number) => ({ statementNumber: edmToTs(statementNumber, 'Edm.Int32') }),
      RowStatus: (rowStatus: string) => ({ rowStatus: edmToTs(rowStatus, 'Edm.String') }),
      VisualOrder: (visualOrder: number) => ({ visualOrder: edmToTs(visualOrder, 'Edm.Int32') }),
      Details2: (details2: string) => ({ details2: edmToTs(details2, 'Edm.String') }),
      PaymentReferenceNo: (paymentReferenceNo: string) => ({ paymentReferenceNo: edmToTs(paymentReferenceNo, 'Edm.String') }),
      BankStmtLineDate: (bankStmtLineDate: Moment) => ({ bankStmtLineDate: edmToTs(bankStmtLineDate, 'Edm.DateTimeOffset') }),
      BankStmtDueDate: (bankStmtDueDate: Moment) => ({ bankStmtDueDate: edmToTs(bankStmtDueDate, 'Edm.DateTimeOffset') }),
      InternalBankOpCode: (internalBankOpCode: number) => ({ internalBankOpCode: edmToTs(internalBankOpCode, 'Edm.Int32') }),
      BPBankAccount: (bpBankAccount: string) => ({ bpBankAccount: edmToTs(bpBankAccount, 'Edm.String') }),
      DebitAmountLC: (debitAmountLc: number) => ({ debitAmountLc: edmToTs(debitAmountLc, 'Edm.Double') }),
      CreditAmountLC: (creditAmountLc: number) => ({ creditAmountLc: edmToTs(creditAmountLc, 'Edm.Double') }),
      ExchangeRate: (exchangeRate: number) => ({ exchangeRate: edmToTs(exchangeRate, 'Edm.Double') }),
      IBANofBPBankAccount: (ibaNofBpBankAccount: string) => ({ ibaNofBpBankAccount: edmToTs(ibaNofBpBankAccount, 'Edm.String') }),
      FeeOnTheLine: (feeOnTheLine: number) => ({ feeOnTheLine: edmToTs(feeOnTheLine, 'Edm.Double') }),
      VATAmountLC: (vatAmountLc: number) => ({ vatAmountLc: edmToTs(vatAmountLc, 'Edm.Double') }),
      VATAmountFC: (vatAmountFc: number) => ({ vatAmountFc: edmToTs(vatAmountFc, 'Edm.Double') }),
      JournalEntryID: (journalEntryId: number) => ({ journalEntryId: edmToTs(journalEntryId, 'Edm.Int32') }),
      PaymentID: (paymentId: number) => ({ paymentId: edmToTs(paymentId, 'Edm.Int32') }),
      GLAccountforFee: (glAccountforFee: string) => ({ glAccountforFee: edmToTs(glAccountforFee, 'Edm.String') }),
      FeeProfitCenter: (feeProfitCenter: string) => ({ feeProfitCenter: edmToTs(feeProfitCenter, 'Edm.String') }),
      FeeProject: (feeProject: string) => ({ feeProject: edmToTs(feeProject, 'Edm.String') }),
      BPBankCode: (bpBankCode: string) => ({ bpBankCode: edmToTs(bpBankCode, 'Edm.String') }),
      FeeDistributionRule: (feeDistributionRule: string) => ({ feeDistributionRule: edmToTs(feeDistributionRule, 'Edm.String') }),
      FeeDistributionRule2: (feeDistributionRule2: string) => ({ feeDistributionRule2: edmToTs(feeDistributionRule2, 'Edm.String') }),
      FeeDistributionRule3: (feeDistributionRule3: string) => ({ feeDistributionRule3: edmToTs(feeDistributionRule3, 'Edm.String') }),
      FeeDistributionRule4: (feeDistributionRule4: string) => ({ feeDistributionRule4: edmToTs(feeDistributionRule4, 'Edm.String') }),
      FeeDistributionRule5: (feeDistributionRule5: string) => ({ feeDistributionRule5: edmToTs(feeDistributionRule5, 'Edm.String') }),
      BPBICSwiftCode: (bpbicSwiftCode: string) => ({ bpbicSwiftCode: edmToTs(bpbicSwiftCode, 'Edm.String') }),
      FolioPrefixString: (folioPrefixString: string) => ({ folioPrefixString: edmToTs(folioPrefixString, 'Edm.String') }),
      FolioNumber: (folioNumber: number) => ({ folioNumber: edmToTs(folioNumber, 'Edm.Int32') }),
      MultiplePayments: (multiplePayments: MultiplePayment) => ({ multiplePayments: MultiplePayment.build(multiplePayments) })
    });
  }
}
