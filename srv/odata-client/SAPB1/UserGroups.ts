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
import type { UserGroupsApi } from './UserGroupsApi';
import { UserGroupCategoryEnum } from './UserGroupCategoryEnum';

/**
 * This class represents the entity "UserGroups" of service "SAPB1".
 */
export class UserGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements UserGroupsType<T>
{
  /**
   * Technical entity name for UserGroups.
   */
  static _entityName = 'UserGroups';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the UserGroups entity
   */
  static _keys = ['UserGroupId'];
  /**
   * User Group Id.
   */
  userGroupId!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * User Group Name.
   * @nullable
   */
  userGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Group Dec.
   * @nullable
   */
  userGroupDec?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tpl Id.
   * @nullable
   */
  tplId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Due Date.
   * @nullable
   */
  dueDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * User Group Type.
   * @nullable
   */
  userGroupType?: UserGroupCategoryEnum | null;

  constructor(readonly _entityApi: UserGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface UserGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  userGroupId: DeserializedType<T, 'Edm.Int32'>;
  userGroupName?: DeserializedType<T, 'Edm.String'> | null;
  userGroupDec?: DeserializedType<T, 'Edm.String'> | null;
  tplId?: DeserializedType<T, 'Edm.Int32'> | null;
  startDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  dueDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  userGroupType?: UserGroupCategoryEnum | null;
}
