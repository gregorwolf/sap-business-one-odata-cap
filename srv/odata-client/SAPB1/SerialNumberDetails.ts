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
import type { SerialNumberDetailsApi } from './SerialNumberDetailsApi';
import { Items, ItemsType } from './Items';

/**
 * This class represents the entity "SerialNumberDetails" of service "SAPB1".
 */
export class SerialNumberDetails<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SerialNumberDetailsType<T>
{
  /**
   * Technical entity name for SerialNumberDetails.
   */
  static _entityName = 'SerialNumberDetails';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the SerialNumberDetails entity
   */
  static _keys = ['DocEntry'];
  /**
   * Doc Entry.
   */
  docEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Description.
   * @nullable
   */
  itemDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mfr Serial No.
   * @nullable
   */
  mfrSerialNo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Serial Number.
   * @nullable
   */
  serialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lot Number.
   * @nullable
   */
  lotNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * System Number.
   * @nullable
   */
  systemNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Admission Date.
   * @nullable
   */
  admissionDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Manufacturing Date.
   * @nullable
   */
  manufacturingDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Expiration Date.
   * @nullable
   */
  expirationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Mfr Warranty Start.
   * @nullable
   */
  mfrWarrantyStart?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * M Fr Warranty End.
   * @nullable
   */
  mFrWarrantyEnd?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Location.
   * @nullable
   */
  location?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Details.
   * @nullable
   */
  details?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Items} entity.
   */
  item?: Items<T> | null;

  constructor(readonly _entityApi: SerialNumberDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface SerialNumberDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  docEntry: DeserializedType<T, 'Edm.Int32'>;
  itemCode?: DeserializedType<T, 'Edm.String'> | null;
  itemDescription?: DeserializedType<T, 'Edm.String'> | null;
  mfrSerialNo?: DeserializedType<T, 'Edm.String'> | null;
  serialNumber?: DeserializedType<T, 'Edm.String'> | null;
  lotNumber?: DeserializedType<T, 'Edm.String'> | null;
  systemNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  admissionDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  manufacturingDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  expirationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  mfrWarrantyStart?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  mFrWarrantyEnd?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  location?: DeserializedType<T, 'Edm.String'> | null;
  details?: DeserializedType<T, 'Edm.String'> | null;
  item?: ItemsType<T> | null;
}
