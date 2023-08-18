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
import type { WebClientRecentActivitiesApi } from './WebClientRecentActivitiesApi';

/**
 * This class represents the entity "WebClientRecentActivities" of service "SAPB1".
 */
export class WebClientRecentActivities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WebClientRecentActivitiesType<T>
{
  /**
   * Technical entity name for WebClientRecentActivities.
   */
  static _entityName = 'WebClientRecentActivities';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the WebClientRecentActivities entity
   */
  static _keys = ['Guid'];
  /**
   * Guid.
   */
  guid!: DeserializedType<T, 'Edm.String'>;
  /**
   * App Id.
   * @nullable
   */
  appId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * App Type.
   * @nullable
   */
  appType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Count.
   * @nullable
   */
  count?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Timestamp.
   * @nullable
   */
  timestamp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Title.
   * @nullable
   */
  title?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Url.
   * @nullable
   */
  url?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Usage Array.
   * @nullable
   */
  usageArray?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Id.
   * @nullable
   */
  userId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Recent Day.
   * @nullable
   */
  recentDay?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: WebClientRecentActivitiesApi<T>) {
    super(_entityApi);
  }
}

export interface WebClientRecentActivitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  guid: DeserializedType<T, 'Edm.String'>;
  appId?: DeserializedType<T, 'Edm.String'> | null;
  appType?: DeserializedType<T, 'Edm.String'> | null;
  count?: DeserializedType<T, 'Edm.Int32'> | null;
  timestamp?: DeserializedType<T, 'Edm.String'> | null;
  title?: DeserializedType<T, 'Edm.String'> | null;
  url?: DeserializedType<T, 'Edm.String'> | null;
  usageArray?: DeserializedType<T, 'Edm.String'> | null;
  userId?: DeserializedType<T, 'Edm.Int32'> | null;
  recentDay?: DeserializedType<T, 'Edm.String'> | null;
}
