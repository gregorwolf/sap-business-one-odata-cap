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
import { ChecksforPaymentLine } from './ChecksforPaymentLine';
import { ChecksforPaymentPrintStatus } from './ChecksforPaymentPrintStatus';
import { ChecksforPaymentDocumentReference } from './ChecksforPaymentDocumentReference';
import type { ChecksforPaymentApi } from './ChecksforPaymentApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoCpCardAcct } from './BoCpCardAcct';
import { JournalEntries, JournalEntriesType } from './JournalEntries';
import { Countries, CountriesType } from './Countries';
import { Attachments2, Attachments2Type } from './Attachments2';

/**
 * This class represents the entity "ChecksforPayment" of service "SAPB1".
 */
export class ChecksforPayment<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ChecksforPaymentType<T>
{
  /**
   * Technical entity name for ChecksforPayment.
   */
  static _entityName = 'ChecksforPayment';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ChecksforPayment entity
   */
  static _keys = ['CheckKey'];
  /**
   * Check Key.
   */
  checkKey!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Check Number.
   * @nullable
   */
  checkNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Bank Code.
   * @nullable
   */
  bankCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Branch.
   * @nullable
   */
  branch?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Name.
   * @nullable
   */
  bankName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Check Date.
   * @nullable
   */
  checkDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Account Number.
   * @nullable
   */
  accountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Details.
   * @nullable
   */
  details?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Entry Reference.
   * @nullable
   */
  journalEntryReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Date.
   * @nullable
   */
  paymentDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Payment No.
   * @nullable
   */
  paymentNo?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Check Amount.
   * @nullable
   */
  checkAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Transferable.
   * @nullable
   */
  transferable?: BoYesNoEnum | null;
  /**
   * Vendor Code.
   * @nullable
   */
  vendorCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Check Currency.
   * @nullable
   */
  checkCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Canceled.
   * @nullable
   */
  canceled?: BoYesNoEnum | null;
  /**
   * Card Or Account.
   * @nullable
   */
  cardOrAccount?: BoCpCardAcct | null;
  /**
   * Printed.
   * @nullable
   */
  printed?: BoYesNoEnum | null;
  /**
   * Vendor Name.
   * @nullable
   */
  vendorName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Signature.
   * @nullable
   */
  signature?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Account Code.
   * @nullable
   */
  customerAccountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Number.
   * @nullable
   */
  transactionNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Address.
   * @nullable
   */
  address?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Create Journal Entry.
   * @nullable
   */
  createJournalEntry?: BoYesNoEnum | null;
  /**
   * Update Date.
   * @nullable
   */
  updateDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Creation Date.
   * @nullable
   */
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Tax Total.
   * @nullable
   */
  taxTotal?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Tax Date.
   * @nullable
   */
  taxDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Deduction Refund Amount.
   * @nullable
   */
  deductionRefundAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Printed By.
   * @nullable
   */
  printedBy?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Country Code.
   * @nullable
   */
  countryCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Totalin Words.
   * @nullable
   */
  totalinWords?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Name.
   * @nullable
   */
  addressName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Manual Check.
   * @nullable
   */
  manualCheck?: BoYesNoEnum | null;
  /**
   * Attachment Entry.
   * @nullable
   */
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * E Check.
   * @nullable
   */
  eCheck?: BoYesNoEnum | null;
  /**
   * Print Confirm.
   * @nullable
   */
  printConfirm?: BoYesNoEnum | null;
  /**
   * Checksfor Payment Lines.
   * @nullable
   */
  checksforPaymentLines?: ChecksforPaymentLine<T>[] | null;
  /**
   * Checksfor Payment Print Status.
   * @nullable
   */
  checksforPaymentPrintStatus?: ChecksforPaymentPrintStatus<T>[] | null;
  /**
   * Checksfor Payment Document References.
   * @nullable
   */
  checksforPaymentDocumentReferences?:
    | ChecksforPaymentDocumentReference<T>[]
    | null;
  /**
   * One-to-one navigation property to the {@link JournalEntries} entity.
   */
  journalEntry?: JournalEntries<T> | null;
  /**
   * One-to-one navigation property to the {@link Countries} entity.
   */
  country?: Countries<T> | null;
  /**
   * One-to-one navigation property to the {@link Attachments2} entity.
   */
  attachments2?: Attachments2<T> | null;

  constructor(readonly _entityApi: ChecksforPaymentApi<T>) {
    super(_entityApi);
  }
}

export interface ChecksforPaymentType<
  T extends DeSerializers = DefaultDeSerializers
> {
  checkKey: DeserializedType<T, 'Edm.Int32'>;
  checkNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  bankCode?: DeserializedType<T, 'Edm.String'> | null;
  branch?: DeserializedType<T, 'Edm.String'> | null;
  bankName?: DeserializedType<T, 'Edm.String'> | null;
  checkDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  accountNumber?: DeserializedType<T, 'Edm.String'> | null;
  details?: DeserializedType<T, 'Edm.String'> | null;
  journalEntryReference?: DeserializedType<T, 'Edm.String'> | null;
  paymentDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  paymentNo?: DeserializedType<T, 'Edm.Int32'> | null;
  checkAmount?: DeserializedType<T, 'Edm.Double'> | null;
  transferable?: BoYesNoEnum | null;
  vendorCode?: DeserializedType<T, 'Edm.String'> | null;
  checkCurrency?: DeserializedType<T, 'Edm.String'> | null;
  canceled?: BoYesNoEnum | null;
  cardOrAccount?: BoCpCardAcct | null;
  printed?: BoYesNoEnum | null;
  vendorName?: DeserializedType<T, 'Edm.String'> | null;
  signature?: DeserializedType<T, 'Edm.String'> | null;
  customerAccountCode?: DeserializedType<T, 'Edm.String'> | null;
  transactionNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  address?: DeserializedType<T, 'Edm.String'> | null;
  createJournalEntry?: BoYesNoEnum | null;
  updateDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  taxTotal?: DeserializedType<T, 'Edm.Double'> | null;
  taxDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  deductionRefundAmount?: DeserializedType<T, 'Edm.Double'> | null;
  printedBy?: DeserializedType<T, 'Edm.Int32'> | null;
  countryCode?: DeserializedType<T, 'Edm.String'> | null;
  totalinWords?: DeserializedType<T, 'Edm.String'> | null;
  addressName?: DeserializedType<T, 'Edm.String'> | null;
  manualCheck?: BoYesNoEnum | null;
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  eCheck?: BoYesNoEnum | null;
  printConfirm?: BoYesNoEnum | null;
  checksforPaymentLines?: ChecksforPaymentLine<T>[] | null;
  checksforPaymentPrintStatus?: ChecksforPaymentPrintStatus<T>[] | null;
  checksforPaymentDocumentReferences?:
    | ChecksforPaymentDocumentReference<T>[]
    | null;
  journalEntry?: JournalEntriesType<T> | null;
  country?: CountriesType<T> | null;
  attachments2?: Attachments2Type<T> | null;
}
