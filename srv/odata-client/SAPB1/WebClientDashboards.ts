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
import { WebClientDashboardCard } from './WebClientDashboardCard';
import type { WebClientDashboardsApi } from './WebClientDashboardsApi';
import { BoYesNoEnum } from './BoYesNoEnum';

/**
 * This class represents the entity "WebClientDashboards" of service "SAPB1".
 */
export class WebClientDashboards<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WebClientDashboardsType<T>
{
  /**
   * Technical entity name for WebClientDashboards.
   */
  static _entityName = 'WebClientDashboards';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the WebClientDashboards entity
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
   * Content.
   * @nullable
   */
  content?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys.
   * @nullable
   */
  sys?: BoYesNoEnum | null;
  /**
   * Web Client Dashboard Cards.
   * @nullable
   */
  webClientDashboardCards?: WebClientDashboardCard<T>[] | null;

  constructor(readonly _entityApi: WebClientDashboardsApi<T>) {
    super(_entityApi);
  }
}

export interface WebClientDashboardsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  guid: DeserializedType<T, 'Edm.String'>;
  userId?: DeserializedType<T, 'Edm.Int32'> | null;
  content?: DeserializedType<T, 'Edm.String'> | null;
  sys?: BoYesNoEnum | null;
  webClientDashboardCards?: WebClientDashboardCard<T>[] | null;
}
