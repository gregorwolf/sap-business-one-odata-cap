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
import type { WebClientVariantGroupsApi } from './WebClientVariantGroupsApi';

/**
 * This class represents the entity "WebClientVariantGroups" of service "SAPB1".
 */
export class WebClientVariantGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WebClientVariantGroupsType<T>
{
  /**
   * Technical entity name for WebClientVariantGroups.
   */
  static _entityName = 'WebClientVariantGroups';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the WebClientVariantGroups entity
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
   * View Type.
   * @nullable
   */
  viewType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * View Id.
   * @nullable
   */
  viewId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Object Name.
   * @nullable
   */
  objectName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Variant.
   * @nullable
   */
  defaultVariant?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: WebClientVariantGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface WebClientVariantGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  guid: DeserializedType<T, 'Edm.String'>;
  userId?: DeserializedType<T, 'Edm.Int32'> | null;
  viewType?: DeserializedType<T, 'Edm.String'> | null;
  viewId?: DeserializedType<T, 'Edm.String'> | null;
  objectName?: DeserializedType<T, 'Edm.String'> | null;
  defaultVariant?: DeserializedType<T, 'Edm.String'> | null;
}
