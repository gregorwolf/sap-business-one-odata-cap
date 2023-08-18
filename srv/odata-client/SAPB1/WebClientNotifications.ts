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
import type { WebClientNotificationsApi } from './WebClientNotificationsApi';

/**
 * This class represents the entity "WebClientNotifications" of service "SAPB1".
 */
export class WebClientNotifications<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WebClientNotificationsType<T>
{
  /**
   * Technical entity name for WebClientNotifications.
   */
  static _entityName = 'WebClientNotifications';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the WebClientNotifications entity
   */
  static _keys = ['Guid'];
  /**
   * Guid.
   */
  guid!: DeserializedType<T, 'Edm.String'>;
  /**
   * User Id.
   * @nullable
   */
  userId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Activity Date.
   * @nullable
   */
  activityDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Read Status.
   * @nullable
   */
  readStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Dismissed.
   * @nullable
   */
  isDismissed?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Noti Type.
   * @nullable
   */
  notiType?: DeserializedType<T, 'Edm.Int32'> | null;

  constructor(readonly _entityApi: WebClientNotificationsApi<T>) {
    super(_entityApi);
  }
}

export interface WebClientNotificationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  guid: DeserializedType<T, 'Edm.String'>;
  userId?: DeserializedType<T, 'Edm.Int32'> | null;
  activityDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  readStatus?: DeserializedType<T, 'Edm.String'> | null;
  isDismissed?: DeserializedType<T, 'Edm.String'> | null;
  notiType?: DeserializedType<T, 'Edm.Int32'> | null;
}
