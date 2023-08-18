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
import type { WebClientBookmarkTilesApi } from './WebClientBookmarkTilesApi';

/**
 * This class represents the entity "WebClientBookmarkTiles" of service "SAPB1".
 */
export class WebClientBookmarkTiles<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WebClientBookmarkTilesType<T>
{
  /**
   * Technical entity name for WebClientBookmarkTiles.
   */
  static _entityName = 'WebClientBookmarkTiles';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the WebClientBookmarkTiles entity
   */
  static _keys = ['Guid'];
  /**
   * Guid.
   */
  guid!: DeserializedType<T, 'Edm.String'>;
  /**
   * Title.
   * @nullable
   */
  title?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Title.
   * @nullable
   */
  subTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Info.
   * @nullable
   */
  info?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bind Type.
   * @nullable
   */
  bindType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Url Target.
   * @nullable
   */
  urlTarget?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: WebClientBookmarkTilesApi<T>) {
    super(_entityApi);
  }
}

export interface WebClientBookmarkTilesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  guid: DeserializedType<T, 'Edm.String'>;
  title?: DeserializedType<T, 'Edm.String'> | null;
  subTitle?: DeserializedType<T, 'Edm.String'> | null;
  info?: DeserializedType<T, 'Edm.String'> | null;
  bindType?: DeserializedType<T, 'Edm.String'> | null;
  urlTarget?: DeserializedType<T, 'Edm.String'> | null;
}
