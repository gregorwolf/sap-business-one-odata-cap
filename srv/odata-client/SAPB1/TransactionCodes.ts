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
import type { TransactionCodesApi } from './TransactionCodesApi';
import { JournalEntries, JournalEntriesType } from './JournalEntries';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { PaymentDrafts, PaymentDraftsType } from './PaymentDrafts';
import { IncomingPayments, IncomingPaymentsType } from './IncomingPayments';
import { VendorPayments, VendorPaymentsType } from './VendorPayments';

/**
 * This class represents the entity "TransactionCodes" of service "SAPB1".
 */
export class TransactionCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TransactionCodesType<T>
{
  /**
   * Technical entity name for TransactionCodes.
   */
  static _entityName = 'TransactionCodes';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the TransactionCodes entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link JournalEntries} entity.
   */
  journalEntries!: JournalEntries<T>[];
  /**
   * One-to-many navigation property to the {@link ChartOfAccounts} entity.
   */
  chartOfAccounts!: ChartOfAccounts<T>[];
  /**
   * One-to-many navigation property to the {@link PaymentDrafts} entity.
   */
  paymentDrafts!: PaymentDrafts<T>[];
  /**
   * One-to-many navigation property to the {@link IncomingPayments} entity.
   */
  incomingPayments!: IncomingPayments<T>[];
  /**
   * One-to-many navigation property to the {@link VendorPayments} entity.
   */
  vendorPayments!: VendorPayments<T>[];

  constructor(readonly _entityApi: TransactionCodesApi<T>) {
    super(_entityApi);
  }
}

export interface TransactionCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  journalEntries: JournalEntriesType<T>[];
  chartOfAccounts: ChartOfAccountsType<T>[];
  paymentDrafts: PaymentDraftsType<T>[];
  incomingPayments: IncomingPaymentsType<T>[];
  vendorPayments: VendorPaymentsType<T>[];
}
