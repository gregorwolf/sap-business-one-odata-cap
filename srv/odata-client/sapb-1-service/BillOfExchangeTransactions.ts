/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BillOfExchangeTransactionsRequestBuilder } from './BillOfExchangeTransactionsRequestBuilder';
import { Moment } from 'moment';
import { BillOfExchangeTransactionLine } from './BillOfExchangeTransactionLine';
import { BillOfExchangeTransDeposit } from './BillOfExchangeTransDeposit';
import { BillOfExchangeTransBankPage } from './BillOfExchangeTransBankPage';
import { BoBotFromStatus } from './BoBotFromStatus';
import { BoBotToStatus } from './BoBotToStatus';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, Time, TimeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "BillOfExchangeTransactions" of service "SAPB1".
 */
export class BillOfExchangeTransactions extends EntityV4 implements BillOfExchangeTransactionsType {
  /**
   * Technical entity name for BillOfExchangeTransactions.
   */
  static _entityName = 'BillOfExchangeTransactions';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Status From.
   * @nullable
   */
  statusFrom?: BoBotFromStatus;
  /**
   * Status To.
   * @nullable
   */
  statusTo?: BoBotToStatus;
  /**
   * Transaction Date.
   * @nullable
   */
  transactionDate?: Moment;
  /**
   * Transaction Time.
   * @nullable
   */
  transactionTime?: Time;
  /**
   * Is Boe Reconciled.
   * @nullable
   */
  isBoeReconciled?: BoYesNoEnum;
  /**
   * Transaction Number.
   * @nullable
   */
  transactionNumber?: number;
  /**
   * Posting Date.
   * @nullable
   */
  postingDate?: Moment;
  /**
   * Tax Date.
   * @nullable
   */
  taxDate?: Moment;
  /**
   * Boe Transactionkey.
   * @nullable
   */
  boeTransactionkey?: number;
  /**
   * Bill Of Exchange Transaction Lines.
   * @nullable
   */
  billOfExchangeTransactionLines?: BillOfExchangeTransactionLine[];
  /**
   * Bill Of Exchange Trans Deposits.
   * @nullable
   */
  billOfExchangeTransDeposits?: BillOfExchangeTransDeposit[];
  /**
   * Bill Of Exchange Trans Bank Pages.
   * @nullable
   */
  billOfExchangeTransBankPages?: BillOfExchangeTransBankPage[];
  /**
   * One-to-one navigation property to the [[JournalEntries]] entity.
   */
  journalEntry!: JournalEntries;

  /**
   * Returns an entity builder to construct instances of `BillOfExchangeTransactions`.
   * @returns A builder that constructs instances of entity type `BillOfExchangeTransactions`.
   */
  static builder(): EntityBuilderType<BillOfExchangeTransactions, BillOfExchangeTransactionsType> {
    return EntityV4.entityBuilder(BillOfExchangeTransactions);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BillOfExchangeTransactions` entity type.
   * @returns A `BillOfExchangeTransactions` request builder.
   */
  static requestBuilder(): BillOfExchangeTransactionsRequestBuilder {
    return new BillOfExchangeTransactionsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BillOfExchangeTransactions`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BillOfExchangeTransactions`.
   */
  static customField(fieldName: string): CustomFieldV4<BillOfExchangeTransactions> {
    return EntityV4.customFieldSelector(fieldName, BillOfExchangeTransactions);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { JournalEntries, JournalEntriesType } from './JournalEntries';

export interface BillOfExchangeTransactionsType {
  statusFrom?: BoBotFromStatus | null;
  statusTo?: BoBotToStatus | null;
  transactionDate?: Moment | null;
  transactionTime?: Time | null;
  isBoeReconciled?: BoYesNoEnum | null;
  transactionNumber?: number | null;
  postingDate?: Moment | null;
  taxDate?: Moment | null;
  boeTransactionkey?: number | null;
  billOfExchangeTransactionLines?: BillOfExchangeTransactionLine[] | null;
  billOfExchangeTransDeposits?: BillOfExchangeTransDeposit[] | null;
  billOfExchangeTransBankPages?: BillOfExchangeTransBankPage[] | null;
  journalEntry: JournalEntriesType;
}

export namespace BillOfExchangeTransactions {
  /**
   * Static representation of the [[statusFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_FROM: EnumField<BillOfExchangeTransactions> = new EnumField('StatusFrom', BillOfExchangeTransactions);
  /**
   * Static representation of the [[statusTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_TO: EnumField<BillOfExchangeTransactions> = new EnumField('StatusTo', BillOfExchangeTransactions);
  /**
   * Static representation of the [[transactionDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSACTION_DATE: DateField<BillOfExchangeTransactions> = new DateField('TransactionDate', BillOfExchangeTransactions, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[transactionTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSACTION_TIME: TimeField<BillOfExchangeTransactions> = new TimeField('TransactionTime', BillOfExchangeTransactions, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[isBoeReconciled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_BOE_RECONCILED: EnumField<BillOfExchangeTransactions> = new EnumField('IsBoeReconciled', BillOfExchangeTransactions);
  /**
   * Static representation of the [[transactionNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSACTION_NUMBER: NumberField<BillOfExchangeTransactions> = new NumberField('TransactionNumber', BillOfExchangeTransactions, 'Edm.Int32');
  /**
   * Static representation of the [[postingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSTING_DATE: DateField<BillOfExchangeTransactions> = new DateField('PostingDate', BillOfExchangeTransactions, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[taxDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_DATE: DateField<BillOfExchangeTransactions> = new DateField('TaxDate', BillOfExchangeTransactions, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[boeTransactionkey]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOE_TRANSACTIONKEY: NumberField<BillOfExchangeTransactions> = new NumberField('BOETransactionkey', BillOfExchangeTransactions, 'Edm.Int32');
  /**
   * Static representation of the [[billOfExchangeTransactionLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILL_OF_EXCHANGE_TRANSACTION_LINES: CollectionField<BillOfExchangeTransactions, BillOfExchangeTransactionLine> = new CollectionField('BillOfExchangeTransactionLines', BillOfExchangeTransactions, BillOfExchangeTransactionLine);
  /**
   * Static representation of the [[billOfExchangeTransDeposits]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILL_OF_EXCHANGE_TRANS_DEPOSITS: CollectionField<BillOfExchangeTransactions, BillOfExchangeTransDeposit> = new CollectionField('BillOfExchangeTransDeposits', BillOfExchangeTransactions, BillOfExchangeTransDeposit);
  /**
   * Static representation of the [[billOfExchangeTransBankPages]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILL_OF_EXCHANGE_TRANS_BANK_PAGES: CollectionField<BillOfExchangeTransactions, BillOfExchangeTransBankPage> = new CollectionField('BillOfExchangeTransBankPages', BillOfExchangeTransactions, BillOfExchangeTransBankPage);
  /**
   * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_ENTRY: OneToOneLink<BillOfExchangeTransactions, JournalEntries> = new OneToOneLink('JournalEntry', BillOfExchangeTransactions, JournalEntries);
  /**
   * All fields of the BillOfExchangeTransactions entity.
   */
  export const _allFields: Array<EnumField<BillOfExchangeTransactions> | DateField<BillOfExchangeTransactions> | TimeField<BillOfExchangeTransactions> | NumberField<BillOfExchangeTransactions> | CollectionField<BillOfExchangeTransactions, BillOfExchangeTransactionLine> | CollectionField<BillOfExchangeTransactions, BillOfExchangeTransDeposit> | CollectionField<BillOfExchangeTransactions, BillOfExchangeTransBankPage> | OneToOneLink<BillOfExchangeTransactions, JournalEntries>> = [
    BillOfExchangeTransactions.STATUS_FROM,
    BillOfExchangeTransactions.STATUS_TO,
    BillOfExchangeTransactions.TRANSACTION_DATE,
    BillOfExchangeTransactions.TRANSACTION_TIME,
    BillOfExchangeTransactions.IS_BOE_RECONCILED,
    BillOfExchangeTransactions.TRANSACTION_NUMBER,
    BillOfExchangeTransactions.POSTING_DATE,
    BillOfExchangeTransactions.TAX_DATE,
    BillOfExchangeTransactions.BOE_TRANSACTIONKEY,
    BillOfExchangeTransactions.BILL_OF_EXCHANGE_TRANSACTION_LINES,
    BillOfExchangeTransactions.BILL_OF_EXCHANGE_TRANS_DEPOSITS,
    BillOfExchangeTransactions.BILL_OF_EXCHANGE_TRANS_BANK_PAGES,
    BillOfExchangeTransactions.JOURNAL_ENTRY
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BillOfExchangeTransactions> = new AllFields('*', BillOfExchangeTransactions);
  /**
   * All key fields of the BillOfExchangeTransactions entity.
   */
  export const _keyFields: Array<Field<BillOfExchangeTransactions>> = [BillOfExchangeTransactions.BOE_TRANSACTIONKEY];
  /**
   * Mapping of all key field names to the respective static field property BillOfExchangeTransactions.
   */
  export const _keys: { [keys: string]: Field<BillOfExchangeTransactions> } = BillOfExchangeTransactions._keyFields.reduce((acc: { [keys: string]: Field<BillOfExchangeTransactions> }, field: Field<BillOfExchangeTransactions>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
