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
import { EBooksLine } from './EBooksLine';
import type { EBooksApi } from './EBooksApi';
import { BoYesNoEnum } from './BoYesNoEnum';

/**
 * This class represents the entity "EBooks" of service "SAPB1".
 */
export class EBooks<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EBooksType<T>
{
  /**
   * Technical entity name for EBooks.
   */
  static _entityName = 'EBooks';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the EBooks entity
   */
  static _keys = ['AbsEntry'];
  /**
   * Abs Entry.
   */
  absEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Mark.
   * @nullable
   */
  mark?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cancel Mark.
   * @nullable
   */
  cancelMark?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Uid.
   * @nullable
   */
  uid?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Issuer Vatid.
   * @nullable
   */
  issuerVatid?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cpvatid.
   * @nullable
   */
  cpvatid?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Series.
   * @nullable
   */
  series?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Aa.
   * @nullable
   */
  aa?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Issue Date.
   * @nullable
   */
  issueDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Invoice Type.
   * @nullable
   */
  invoiceType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * @nullable
   */
  currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Net Value.
   * @nullable
   */
  totalNetValue?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Total Vat Amount.
   * @nullable
   */
  totalVatAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Total Withheld Amount.
   * @nullable
   */
  totalWithheldAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Total Gross Value.
   * @nullable
   */
  totalGrossValue?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Linked Doc Type.
   * @nullable
   */
  linkedDocType?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Linked Doc Entry.
   * @nullable
   */
  linkedDocEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Is Negative Mark.
   * @nullable
   */
  isNegativeMark?: BoYesNoEnum | null;
  /**
   * E Books Lines.
   * @nullable
   */
  eBooksLines?: EBooksLine<T>[] | null;

  constructor(readonly _entityApi: EBooksApi<T>) {
    super(_entityApi);
  }
}

export interface EBooksType<T extends DeSerializers = DefaultDeSerializers> {
  absEntry: DeserializedType<T, 'Edm.Int32'>;
  mark?: DeserializedType<T, 'Edm.String'> | null;
  cancelMark?: DeserializedType<T, 'Edm.String'> | null;
  uid?: DeserializedType<T, 'Edm.String'> | null;
  issuerVatid?: DeserializedType<T, 'Edm.String'> | null;
  cpvatid?: DeserializedType<T, 'Edm.String'> | null;
  series?: DeserializedType<T, 'Edm.String'> | null;
  aa?: DeserializedType<T, 'Edm.String'> | null;
  issueDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  invoiceType?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  totalNetValue?: DeserializedType<T, 'Edm.Double'> | null;
  totalVatAmount?: DeserializedType<T, 'Edm.Double'> | null;
  totalWithheldAmount?: DeserializedType<T, 'Edm.Double'> | null;
  totalGrossValue?: DeserializedType<T, 'Edm.Double'> | null;
  linkedDocType?: DeserializedType<T, 'Edm.Int32'> | null;
  linkedDocEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  isNegativeMark?: BoYesNoEnum | null;
  eBooksLines?: EBooksLine<T>[] | null;
}
