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
import { WebClientLaunchpadGroup } from './WebClientLaunchpadGroup';
import type { WebClientLaunchpadsApi } from './WebClientLaunchpadsApi';
import { BoYesNoEnum } from './BoYesNoEnum';

/**
 * This class represents the entity "WebClientLaunchpads" of service "SAPB1".
 */
export class WebClientLaunchpads<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WebClientLaunchpadsType<T>
{
  /**
   * Technical entity name for WebClientLaunchpads.
   */
  static _entityName = 'WebClientLaunchpads';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the WebClientLaunchpads entity
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
   * Theme Id.
   * @nullable
   */
  themeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Display Quick View.
   * @nullable
   */
  displayQuickView?: BoYesNoEnum | null;
  /**
   * Notification Show Days.
   * @nullable
   */
  notificationShowDays?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Web Client Launchpad Groups.
   * @nullable
   */
  webClientLaunchpadGroups?: WebClientLaunchpadGroup<T>[] | null;

  constructor(readonly _entityApi: WebClientLaunchpadsApi<T>) {
    super(_entityApi);
  }
}

export interface WebClientLaunchpadsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  guid: DeserializedType<T, 'Edm.String'>;
  userId?: DeserializedType<T, 'Edm.Int32'> | null;
  themeId?: DeserializedType<T, 'Edm.String'> | null;
  displayQuickView?: BoYesNoEnum | null;
  notificationShowDays?: DeserializedType<T, 'Edm.Int32'> | null;
  webClientLaunchpadGroups?: WebClientLaunchpadGroup<T>[] | null;
}
