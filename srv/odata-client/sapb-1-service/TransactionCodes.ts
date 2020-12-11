/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TransactionCodesRequestBuilder } from './TransactionCodesRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, OneToManyLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "TransactionCodes" of service "SAPB1".
 */
export class TransactionCodes extends EntityV4 implements TransactionCodesType {
  /**
   * Technical entity name for TransactionCodes.
   */
  static _entityName = 'TransactionCodes';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * One-to-many navigation property to the [[VendorPayments]] entity.
   */
  vendorPayments!: VendorPayments[];
  /**
   * One-to-many navigation property to the [[JournalEntries]] entity.
   */
  journalEntries!: JournalEntries[];
  /**
   * One-to-many navigation property to the [[ChartOfAccounts]] entity.
   */
  chartOfAccounts!: ChartOfAccounts[];
  /**
   * One-to-many navigation property to the [[PaymentDrafts]] entity.
   */
  paymentDrafts!: PaymentDrafts[];
  /**
   * One-to-many navigation property to the [[IncomingPayments]] entity.
   */
  incomingPayments!: IncomingPayments[];

  /**
   * Returns an entity builder to construct instances of `TransactionCodes`.
   * @returns A builder that constructs instances of entity type `TransactionCodes`.
   */
  static builder(): EntityBuilderType<TransactionCodes, TransactionCodesType> {
    return EntityV4.entityBuilder(TransactionCodes);
  }

  /**
   * Returns a request builder to construct requests for operations on the `TransactionCodes` entity type.
   * @returns A `TransactionCodes` request builder.
   */
  static requestBuilder(): TransactionCodesRequestBuilder {
    return new TransactionCodesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `TransactionCodes`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `TransactionCodes`.
   */
  static customField(fieldName: string): CustomFieldV4<TransactionCodes> {
    return EntityV4.customFieldSelector(fieldName, TransactionCodes);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { VendorPayments, VendorPaymentsType } from './VendorPayments';
import { JournalEntries, JournalEntriesType } from './JournalEntries';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { PaymentDrafts, PaymentDraftsType } from './PaymentDrafts';
import { IncomingPayments, IncomingPaymentsType } from './IncomingPayments';

export interface TransactionCodesType {
  code?: string | null;
  description?: string | null;
  vendorPayments: VendorPaymentsType[];
  journalEntries: JournalEntriesType[];
  chartOfAccounts: ChartOfAccountsType[];
  paymentDrafts: PaymentDraftsType[];
  incomingPayments: IncomingPaymentsType[];
}

export namespace TransactionCodes {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<TransactionCodes> = new StringField('Code', TransactionCodes, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<TransactionCodes> = new StringField('Description', TransactionCodes, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[vendorPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VENDOR_PAYMENTS: OneToManyLink<TransactionCodes, VendorPayments> = new OneToManyLink('VendorPayments', TransactionCodes, VendorPayments);
  /**
   * Static representation of the one-to-many navigation property [[journalEntries]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_ENTRIES: OneToManyLink<TransactionCodes, JournalEntries> = new OneToManyLink('JournalEntries', TransactionCodes, JournalEntries);
  /**
   * Static representation of the one-to-many navigation property [[chartOfAccounts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHART_OF_ACCOUNTS: OneToManyLink<TransactionCodes, ChartOfAccounts> = new OneToManyLink('ChartOfAccounts', TransactionCodes, ChartOfAccounts);
  /**
   * Static representation of the one-to-many navigation property [[paymentDrafts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_DRAFTS: OneToManyLink<TransactionCodes, PaymentDrafts> = new OneToManyLink('PaymentDrafts', TransactionCodes, PaymentDrafts);
  /**
   * Static representation of the one-to-many navigation property [[incomingPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCOMING_PAYMENTS: OneToManyLink<TransactionCodes, IncomingPayments> = new OneToManyLink('IncomingPayments', TransactionCodes, IncomingPayments);
  /**
   * All fields of the TransactionCodes entity.
   */
  export const _allFields: Array<StringField<TransactionCodes> | OneToManyLink<TransactionCodes, VendorPayments> | OneToManyLink<TransactionCodes, JournalEntries> | OneToManyLink<TransactionCodes, ChartOfAccounts> | OneToManyLink<TransactionCodes, PaymentDrafts> | OneToManyLink<TransactionCodes, IncomingPayments>> = [
    TransactionCodes.CODE,
    TransactionCodes.DESCRIPTION,
    TransactionCodes.VENDOR_PAYMENTS,
    TransactionCodes.JOURNAL_ENTRIES,
    TransactionCodes.CHART_OF_ACCOUNTS,
    TransactionCodes.PAYMENT_DRAFTS,
    TransactionCodes.INCOMING_PAYMENTS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<TransactionCodes> = new AllFields('*', TransactionCodes);
  /**
   * All key fields of the TransactionCodes entity.
   */
  export const _keyFields: Array<Field<TransactionCodes>> = [TransactionCodes.CODE];
  /**
   * Mapping of all key field names to the respective static field property TransactionCodes.
   */
  export const _keys: { [keys: string]: Field<TransactionCodes> } = TransactionCodes._keyFields.reduce((acc: { [keys: string]: Field<TransactionCodes> }, field: Field<TransactionCodes>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
