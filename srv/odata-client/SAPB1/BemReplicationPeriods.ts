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
import type { BemReplicationPeriodsApi } from './BemReplicationPeriodsApi';
import { BemPeriodicTypeEnum } from './BemPeriodicTypeEnum';
import { BemReplicationStatusEnum } from './BemReplicationStatusEnum';

/**
 * This class represents the entity "BEMReplicationPeriods" of service "SAPB1".
 */
export class BemReplicationPeriods<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BemReplicationPeriodsType<T>
{
  /**
   * Technical entity name for BemReplicationPeriods.
   */
  static _entityName = 'BEMReplicationPeriods';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the BemReplicationPeriods entity
   */
  static _keys = ['AbsEntry'];
  /**
   * Abs Entry.
   */
  absEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Scope Key.
   * @nullable
   */
  scopeKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Scope Name.
   * @nullable
   */
  scopeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Periodic.
   * @nullable
   */
  periodic?: BemPeriodicTypeEnum | null;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Status.
   * @nullable
   */
  status?: BemReplicationStatusEnum | null;
  /**
   * Update Date.
   * @nullable
   */
  updateDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Last Rep Id.
   * @nullable
   */
  lastRepId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rep Message.
   * @nullable
   */
  repMessage?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: BemReplicationPeriodsApi<T>) {
    super(_entityApi);
  }
}

export interface BemReplicationPeriodsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  absEntry: DeserializedType<T, 'Edm.Int32'>;
  scopeKey?: DeserializedType<T, 'Edm.String'> | null;
  scopeName?: DeserializedType<T, 'Edm.String'> | null;
  periodic?: BemPeriodicTypeEnum | null;
  startDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  status?: BemReplicationStatusEnum | null;
  updateDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastRepId?: DeserializedType<T, 'Edm.String'> | null;
  repMessage?: DeserializedType<T, 'Edm.String'> | null;
}
