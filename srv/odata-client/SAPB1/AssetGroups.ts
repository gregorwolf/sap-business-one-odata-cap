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
import type { AssetGroupsApi } from './AssetGroupsApi';
import { Items, ItemsType } from './Items';

/**
 * This class represents the entity "AssetGroups" of service "SAPB1".
 */
export class AssetGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AssetGroupsType<T>
{
  /**
   * Technical entity name for AssetGroups.
   */
  static _entityName = 'AssetGroups';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the AssetGroups entity
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
   * One-to-many navigation property to the {@link Items} entity.
   */
  items!: Items<T>[];

  constructor(readonly _entityApi: AssetGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  items: ItemsType<T>[];
}
