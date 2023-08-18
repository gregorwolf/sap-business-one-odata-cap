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
import type { ServiceGroupsApi } from './ServiceGroupsApi';
import { Items, ItemsType } from './Items';

/**
 * This class represents the entity "ServiceGroups" of service "SAPB1".
 */
export class ServiceGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ServiceGroupsType<T>
{
  /**
   * Technical entity name for ServiceGroups.
   */
  static _entityName = 'ServiceGroups';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ServiceGroups entity
   */
  static _keys = ['AbsEntry'];
  /**
   * Abs Entry.
   */
  absEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Service Group Code.
   * @nullable
   */
  serviceGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link Items} entity.
   */
  items!: Items<T>[];

  constructor(readonly _entityApi: ServiceGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface ServiceGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  absEntry: DeserializedType<T, 'Edm.Int32'>;
  serviceGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  items: ItemsType<T>[];
}
