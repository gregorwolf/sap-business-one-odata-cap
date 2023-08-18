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
import type { BatchNumberDetailsApi } from './BatchNumberDetailsApi';
import { BatchDetailServiceStatusEnum } from './BatchDetailServiceStatusEnum';
import { Items, ItemsType } from './Items';

/**
 * This class represents the entity "BatchNumberDetails" of service "SAPB1".
 */
export class BatchNumberDetails<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BatchNumberDetailsType<T>
{
  /**
   * Technical entity name for BatchNumberDetails.
   */
  static _entityName = 'BatchNumberDetails';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the BatchNumberDetails entity
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
   * Status.
   * @nullable
   */
  status?: BatchDetailServiceStatusEnum | null;
  /**
   * Batch.
   * @nullable
   */
  batch?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Batch Attribute 1.
   * @nullable
   */
  batchAttribute1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Batch Attribute 2.
   * @nullable
   */
  batchAttribute2?: DeserializedType<T, 'Edm.String'> | null;
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
   * Details.
   * @nullable
   */
  details?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * System Number.
   * @nullable
   */
  systemNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * One-to-one navigation property to the {@link Items} entity.
   */
  item?: Items<T> | null;

  constructor(readonly _entityApi: BatchNumberDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface BatchNumberDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  docEntry: DeserializedType<T, 'Edm.Int32'>;
  itemCode?: DeserializedType<T, 'Edm.String'> | null;
  itemDescription?: DeserializedType<T, 'Edm.String'> | null;
  status?: BatchDetailServiceStatusEnum | null;
  batch?: DeserializedType<T, 'Edm.String'> | null;
  batchAttribute1?: DeserializedType<T, 'Edm.String'> | null;
  batchAttribute2?: DeserializedType<T, 'Edm.String'> | null;
  admissionDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  manufacturingDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  expirationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  details?: DeserializedType<T, 'Edm.String'> | null;
  systemNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  item?: ItemsType<T> | null;
}
