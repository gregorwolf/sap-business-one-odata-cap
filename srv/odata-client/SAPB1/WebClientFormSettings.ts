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
import { WebClientFormSettingItem } from './WebClientFormSettingItem';
import type { WebClientFormSettingsApi } from './WebClientFormSettingsApi';

/**
 * This class represents the entity "WebClientFormSettings" of service "SAPB1".
 */
export class WebClientFormSettings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WebClientFormSettingsType<T>
{
  /**
   * Technical entity name for WebClientFormSettings.
   */
  static _entityName = 'WebClientFormSettings';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the WebClientFormSettings entity
   */
  static _keys = ['Guid'];
  /**
   * Guid.
   */
  guid!: DeserializedType<T, 'Edm.String'>;
  /**
   * Form Id.
   * @nullable
   */
  formId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Id.
   * @nullable
   */
  userId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Doc Object Code.
   * @nullable
   */
  docObjectCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Web Client Form Setting Items.
   * @nullable
   */
  webClientFormSettingItems?: WebClientFormSettingItem<T>[] | null;

  constructor(readonly _entityApi: WebClientFormSettingsApi<T>) {
    super(_entityApi);
  }
}

export interface WebClientFormSettingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  guid: DeserializedType<T, 'Edm.String'>;
  formId?: DeserializedType<T, 'Edm.String'> | null;
  userId?: DeserializedType<T, 'Edm.Int32'> | null;
  docObjectCode?: DeserializedType<T, 'Edm.String'> | null;
  webClientFormSettingItems?: WebClientFormSettingItem<T>[] | null;
}
