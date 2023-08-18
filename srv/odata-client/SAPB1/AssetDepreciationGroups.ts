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
import type { AssetDepreciationGroupsApi } from './AssetDepreciationGroupsApi';
import { Items, ItemsType } from './Items';

/**
 * This class represents the entity "AssetDepreciationGroups" of service "SAPB1".
 */
export class AssetDepreciationGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetDepreciationGroupsType<T>
{
  /**
   * Technical entity name for AssetDepreciationGroups.
   */
  static _entityName = 'AssetDepreciationGroups';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the AssetDepreciationGroups entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Group.
   * @nullable
   */
  group?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link Items} entity.
   */
  items!: Items<T>[];

  constructor(readonly _entityApi: AssetDepreciationGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetDepreciationGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  group?: DeserializedType<T, 'Edm.String'> | null;
  items: ItemsType<T>[];
}
