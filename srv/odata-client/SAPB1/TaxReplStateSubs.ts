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
import type { TaxReplStateSubsApi } from './TaxReplStateSubsApi';

/**
 * This class represents the entity "TaxReplStateSubs" of service "SAPB1".
 */
export class TaxReplStateSubs<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TaxReplStateSubsType<T>
{
  /**
   * Technical entity name for TaxReplStateSubs.
   */
  static _entityName = 'TaxReplStateSubs';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the TaxReplStateSubs entity
   */
  static _keys = ['State'];
  /**
   * State.
   */
  state!: DeserializedType<T, 'Edm.String'>;
  /**
   * Iest.
   * @nullable
   */
  iest?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: TaxReplStateSubsApi<T>) {
    super(_entityApi);
  }
}

export interface TaxReplStateSubsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  state: DeserializedType<T, 'Edm.String'>;
  iest?: DeserializedType<T, 'Edm.String'> | null;
}
