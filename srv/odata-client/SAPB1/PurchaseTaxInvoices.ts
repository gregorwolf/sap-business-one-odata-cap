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
import { PurchaseTaxInvoiceLine } from './PurchaseTaxInvoiceLine';
import { PurchaseTaxInvoiceOperationCode } from './PurchaseTaxInvoiceOperationCode';
import { PurchaseTaxInvoiceDocumentReference } from './PurchaseTaxInvoiceDocumentReference';
import { PurchaseTaxInvoiceLinkedDownPayment } from './PurchaseTaxInvoiceLinkedDownPayment';
import type { PurchaseTaxInvoicesApi } from './PurchaseTaxInvoicesApi';
import { BoTaxInvoiceTypes } from './BoTaxInvoiceTypes';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoCurrencySources } from './BoCurrencySources';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';

/**
 * This class represents the entity "PurchaseTaxInvoices" of service "SAPB1".
 */
export class PurchaseTaxInvoices<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PurchaseTaxInvoicesType<T>
{
  /**
   * Technical entity name for PurchaseTaxInvoices.
   */
  static _entityName = 'PurchaseTaxInvoices';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the PurchaseTaxInvoices entity
   */
  static _keys = ['DocEntry'];
  /**
   * Doc Entry.
   */
  docEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Doc Num.
   * @nullable
   */
  docNum?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Doc Type.
   * @nullable
   */
  docType?: BoTaxInvoiceTypes | null;
  /**
   * Printed.
   * @nullable
   */
  printed?: BoYesNoEnum | null;
  /**
   * Doc Date.
   * @nullable
   */
  docDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Card Code.
   * @nullable
   */
  cardCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Creation Date.
   * @nullable
   */
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Update Date.
   * @nullable
   */
  updateDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Doc Due Date.
   * @nullable
   */
  docDueDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Series.
   * @nullable
   */
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Segment.
   * @nullable
   */
  segment?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Contact Person Code.
   * @nullable
   */
  contactPersonCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Tax Date.
   * @nullable
   */
  taxDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Comments.
   * @nullable
   */
  comments?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship To Code.
   * @nullable
   */
  shipToCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address.
   * @nullable
   */
  address?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address 2.
   * @nullable
   */
  address2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Source.
   * @nullable
   */
  currencySource?: BoCurrencySources | null;
  /**
   * Doc Currency.
   * @nullable
   */
  docCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Or Vendor Ref No.
   * @nullable
   */
  customerOrVendorRefNo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Or Vendor Name.
   * @nullable
   */
  customerOrVendorName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cancel Date.
   * @nullable
   */
  cancelDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Document Total.
   * @nullable
   */
  documentTotal?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Tax Total.
   * @nullable
   */
  taxTotal?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Payment Ref No.
   * @nullable
   */
  paymentRefNo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Ref Date.
   * @nullable
   */
  paymentRefDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Alteration Revision.
   * @nullable
   */
  alterationRevision?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Purchase Tax Invoice Lines.
   * @nullable
   */
  purchaseTaxInvoiceLines?: PurchaseTaxInvoiceLine<T>[] | null;
  /**
   * Purchase Tax Invoice Operation Codes.
   * @nullable
   */
  purchaseTaxInvoiceOperationCodes?:
    | PurchaseTaxInvoiceOperationCode<T>[]
    | null;
  /**
   * Purchase Tax Invoice Document References.
   * @nullable
   */
  purchaseTaxInvoiceDocumentReferences?:
    | PurchaseTaxInvoiceDocumentReference<T>[]
    | null;
  /**
   * Purchase Tax Invoice Linked Down Payments.
   * @nullable
   */
  purchaseTaxInvoiceLinkedDownPayments?:
    | PurchaseTaxInvoiceLinkedDownPayment<T>[]
    | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartners} entity.
   */
  businessPartner?: BusinessPartners<T> | null;

  constructor(readonly _entityApi: PurchaseTaxInvoicesApi<T>) {
    super(_entityApi);
  }
}

export interface PurchaseTaxInvoicesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  docEntry: DeserializedType<T, 'Edm.Int32'>;
  docNum?: DeserializedType<T, 'Edm.Int32'> | null;
  docType?: BoTaxInvoiceTypes | null;
  printed?: BoYesNoEnum | null;
  docDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  cardCode?: DeserializedType<T, 'Edm.String'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  updateDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  docDueDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  segment?: DeserializedType<T, 'Edm.Int32'> | null;
  contactPersonCode?: DeserializedType<T, 'Edm.Int32'> | null;
  taxDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  comments?: DeserializedType<T, 'Edm.String'> | null;
  shipToCode?: DeserializedType<T, 'Edm.String'> | null;
  address?: DeserializedType<T, 'Edm.String'> | null;
  address2?: DeserializedType<T, 'Edm.String'> | null;
  currencySource?: BoCurrencySources | null;
  docCurrency?: DeserializedType<T, 'Edm.String'> | null;
  customerOrVendorRefNo?: DeserializedType<T, 'Edm.String'> | null;
  customerOrVendorName?: DeserializedType<T, 'Edm.String'> | null;
  cancelDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  documentTotal?: DeserializedType<T, 'Edm.Double'> | null;
  taxTotal?: DeserializedType<T, 'Edm.Double'> | null;
  paymentRefNo?: DeserializedType<T, 'Edm.String'> | null;
  paymentRefDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  alterationRevision?: DeserializedType<T, 'Edm.Int32'> | null;
  purchaseTaxInvoiceLines?: PurchaseTaxInvoiceLine<T>[] | null;
  purchaseTaxInvoiceOperationCodes?:
    | PurchaseTaxInvoiceOperationCode<T>[]
    | null;
  purchaseTaxInvoiceDocumentReferences?:
    | PurchaseTaxInvoiceDocumentReference<T>[]
    | null;
  purchaseTaxInvoiceLinkedDownPayments?:
    | PurchaseTaxInvoiceLinkedDownPayment<T>[]
    | null;
  businessPartner?: BusinessPartnersType<T> | null;
}
