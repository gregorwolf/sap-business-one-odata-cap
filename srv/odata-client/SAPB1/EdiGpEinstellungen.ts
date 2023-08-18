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
import type { EdiGpEinstellungenApi } from './EdiGpEinstellungenApi';

/**
 * This class represents the entity "EdiGpEinstellungen" of service "SAPB1".
 */
export class EdiGpEinstellungen<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EdiGpEinstellungenType<T>
{
  /**
   * Technical entity name for EdiGpEinstellungen.
   */
  static _entityName = 'EdiGpEinstellungen';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the EdiGpEinstellungen entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Canceled.
   * @nullable
   */
  canceled?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Object.
   * @nullable
   */
  object?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Log Inst.
   * @nullable
   */
  logInst?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * User Sign.
   * @nullable
   */
  userSign?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Transfered.
   * @nullable
   */
  transfered?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Create Date.
   * @nullable
   */
  createDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Create Time.
   * @nullable
   */
  createTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Update Date.
   * @nullable
   */
  updateDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Update Time.
   * @nullable
   */
  updateTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Data Source.
   * @nullable
   */
  dataSource?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Card Code.
   * @nullable
   */
  uCardCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Sales Quotation Ugl Export.
   */
  uSalesQuotationUglExport!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * U Sales Quotation Gaeb 33 Export.
   */
  uSalesQuotationGaeb33Export!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * U Sales Invoice Xrg Export.
   */
  uSalesInvoiceXrgExport!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * U Sales Invoice Zf 2 Export.
   */
  uSalesInvoiceZf2Export!: DeserializedType<T, 'Edm.Int32'>;

  constructor(readonly _entityApi: EdiGpEinstellungenApi<T>) {
    super(_entityApi);
  }
}

export interface EdiGpEinstellungenType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  docEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  canceled?: DeserializedType<T, 'Edm.String'> | null;
  object?: DeserializedType<T, 'Edm.String'> | null;
  logInst?: DeserializedType<T, 'Edm.Int32'> | null;
  userSign?: DeserializedType<T, 'Edm.Int32'> | null;
  transfered?: DeserializedType<T, 'Edm.String'> | null;
  createDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  createTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  updateDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  updateTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  dataSource?: DeserializedType<T, 'Edm.String'> | null;
  uCardCode?: DeserializedType<T, 'Edm.String'> | null;
  uSalesQuotationUglExport: DeserializedType<T, 'Edm.Int32'>;
  uSalesQuotationGaeb33Export: DeserializedType<T, 'Edm.Int32'>;
  uSalesInvoiceXrgExport: DeserializedType<T, 'Edm.Int32'>;
  uSalesInvoiceZf2Export: DeserializedType<T, 'Edm.Int32'>;
}
