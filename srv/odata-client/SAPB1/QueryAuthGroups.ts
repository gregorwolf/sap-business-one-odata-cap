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
import { CategoryGroup } from './CategoryGroup';
import type { QueryAuthGroupsApi } from './QueryAuthGroupsApi';

/**
 * This class represents the entity "QueryAuthGroups" of service "SAPB1".
 */
export class QueryAuthGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements QueryAuthGroupsType<T>
{
  /**
   * Technical entity name for QueryAuthGroups.
   */
  static _entityName = 'QueryAuthGroups';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the QueryAuthGroups entity
   */
  static _keys = ['AuthGroupId'];
  /**
   * Auth Group Code.
   * @nullable
   */
  authGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Auth Group Des.
   * @nullable
   */
  authGroupDes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Auth Group Id.
   */
  authGroupId!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Category Group Collection.
   * @nullable
   */
  categoryGroupCollection?: CategoryGroup<T>[] | null;

  constructor(readonly _entityApi: QueryAuthGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface QueryAuthGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  authGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  authGroupDes?: DeserializedType<T, 'Edm.String'> | null;
  authGroupId: DeserializedType<T, 'Edm.Int32'>;
  categoryGroupCollection?: CategoryGroup<T>[] | null;
}
