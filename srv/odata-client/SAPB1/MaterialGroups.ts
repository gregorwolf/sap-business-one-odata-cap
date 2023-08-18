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
import type { MaterialGroupsApi } from './MaterialGroupsApi';
import { Items, ItemsType } from './Items';

/**
 * This class represents the entity "MaterialGroups" of service "SAPB1".
 */
export class MaterialGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements MaterialGroupsType<T>
{
  /**
   * Technical entity name for MaterialGroups.
   */
  static _entityName = 'MaterialGroups';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the MaterialGroups entity
   */
  static _keys = ['AbsEntry'];
  /**
   * Abs Entry.
   */
  absEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Material Group Code.
   * @nullable
   */
  materialGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link Items} entity.
   */
  items!: Items<T>[];

  constructor(readonly _entityApi: MaterialGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface MaterialGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  absEntry: DeserializedType<T, 'Edm.Int32'>;
  materialGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  items: ItemsType<T>[];
}
