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
import type { BrazilMultiIndexersApi } from './BrazilMultiIndexersApi';
import { BrazilMultiIndexerTypes } from './BrazilMultiIndexerTypes';

/**
 * This class represents the entity "BrazilMultiIndexers" of service "SAPB1".
 */
export class BrazilMultiIndexers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BrazilMultiIndexersType<T>
{
  /**
   * Technical entity name for BrazilMultiIndexers.
   */
  static _entityName = 'BrazilMultiIndexers';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the BrazilMultiIndexers entity
   */
  static _keys = ['ID'];
  /**
   * Id.
   */
  id!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Indexer Type.
   * @nullable
   */
  indexerType?: BrazilMultiIndexerTypes | null;
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * First Ref Indexer Code.
   * @nullable
   */
  firstRefIndexerCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Second Ref Indexer Code.
   * @nullable
   */
  secondRefIndexerCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Third Ref Indexer Code.
   * @nullable
   */
  thirdRefIndexerCode?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: BrazilMultiIndexersApi<T>) {
    super(_entityApi);
  }
}

export interface BrazilMultiIndexersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Int32'>;
  indexerType?: BrazilMultiIndexerTypes | null;
  code?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  firstRefIndexerCode?: DeserializedType<T, 'Edm.String'> | null;
  secondRefIndexerCode?: DeserializedType<T, 'Edm.String'> | null;
  thirdRefIndexerCode?: DeserializedType<T, 'Edm.String'> | null;
}
