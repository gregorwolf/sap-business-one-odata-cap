/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import { BillOfExchangeTransactionLine } from './BillOfExchangeTransactionLine';
import { BillOfExchangeTransDeposit } from './BillOfExchangeTransDeposit';
import { BillOfExchangeTransBankPage } from './BillOfExchangeTransBankPage';
import type { BillOfExchangeTransactionsApi } from './BillOfExchangeTransactionsApi';
import { BoBotFromStatus } from './BoBotFromStatus';
import { BoBotToStatus } from './BoBotToStatus';
import { BoYesNoEnum } from './BoYesNoEnum';
import { JournalEntries, JournalEntriesType } from './JournalEntries';

/**
 * This class represents the entity "BillOfExchangeTransactions" of service "SAPB1".
 */
export class BillOfExchangeTransactions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BillOfExchangeTransactionsType<T>
{
  /**
   * Technical entity name for BillOfExchangeTransactions.
   */
  static _entityName = 'BillOfExchangeTransactions';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the BillOfExchangeTransactions entity
   */
  static _keys = ['BOETransactionkey'];
  /**
   * Status From.
   * @nullable
   */
  statusFrom?: BoBotFromStatus | null;
  /**
   * Status To.
   * @nullable
   */
  statusTo?: BoBotToStatus | null;
  /**
   * Transaction Date.
   * @nullable
   */
  transactionDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Transaction Time.
   * @nullable
   */
  transactionTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Is Boe Reconciled.
   * @nullable
   */
  isBoeReconciled?: BoYesNoEnum | null;
  /**
   * Transaction Number.
   * @nullable
   */
  transactionNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Posting Date.
   * @nullable
   */
  postingDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Tax Date.
   * @nullable
   */
  taxDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Boe Transactionkey.
   */
  boeTransactionkey!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Bill Of Exchange Transaction Lines.
   * @nullable
   */
  billOfExchangeTransactionLines?: BillOfExchangeTransactionLine<T>[] | null;
  /**
   * Bill Of Exchange Trans Deposits.
   * @nullable
   */
  billOfExchangeTransDeposits?: BillOfExchangeTransDeposit<T>[] | null;
  /**
   * Bill Of Exchange Trans Bank Pages.
   * @nullable
   */
  billOfExchangeTransBankPages?: BillOfExchangeTransBankPage<T>[] | null;
  /**
   * One-to-one navigation property to the {@link JournalEntries} entity.
   */
  journalEntry?: JournalEntries<T> | null;

  constructor(readonly _entityApi: BillOfExchangeTransactionsApi<T>) {
    super(_entityApi);
  }
}

export interface BillOfExchangeTransactionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  statusFrom?: BoBotFromStatus | null;
  statusTo?: BoBotToStatus | null;
  transactionDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  transactionTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  isBoeReconciled?: BoYesNoEnum | null;
  transactionNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  postingDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  taxDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  boeTransactionkey: DeserializedType<T, 'Edm.Int32'>;
  billOfExchangeTransactionLines?: BillOfExchangeTransactionLine<T>[] | null;
  billOfExchangeTransDeposits?: BillOfExchangeTransDeposit<T>[] | null;
  billOfExchangeTransBankPages?: BillOfExchangeTransBankPage<T>[] | null;
  journalEntry?: JournalEntriesType<T> | null;
}
