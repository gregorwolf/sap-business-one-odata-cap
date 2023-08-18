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
import { UserPermissionForm } from './UserPermissionForm';
import type { UserPermissionTreeApi } from './UserPermissionTreeApi';
import { BoUptOptions } from './BoUptOptions';
import { BoYesNoEnum } from './BoYesNoEnum';
import { Users, UsersType } from './Users';

/**
 * This class represents the entity "UserPermissionTree" of service "SAPB1".
 */
export class UserPermissionTree<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements UserPermissionTreeType<T>
{
  /**
   * Technical entity name for UserPermissionTree.
   */
  static _entityName = 'UserPermissionTree';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the UserPermissionTree entity
   */
  static _keys = ['PermissionID'];
  /**
   * User Signature.
   * @nullable
   */
  userSignature?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Display Order.
   * @nullable
   */
  displayOrder?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Permission Id.
   */
  permissionId!: DeserializedType<T, 'Edm.String'>;
  /**
   * Options.
   * @nullable
   */
  options?: BoUptOptions | null;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Levels.
   * @nullable
   */
  levels?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Is Item.
   * @nullable
   */
  isItem?: BoYesNoEnum | null;
  /**
   * Parent Id.
   * @nullable
   */
  parentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Permission Forms.
   * @nullable
   */
  userPermissionForms?: UserPermissionForm<T>[] | null;
  /**
   * One-to-one navigation property to the {@link Users} entity.
   */
  user?: Users<T> | null;

  constructor(readonly _entityApi: UserPermissionTreeApi<T>) {
    super(_entityApi);
  }
}

export interface UserPermissionTreeType<
  T extends DeSerializers = DefaultDeSerializers
> {
  userSignature?: DeserializedType<T, 'Edm.Int32'> | null;
  displayOrder?: DeserializedType<T, 'Edm.Int32'> | null;
  permissionId: DeserializedType<T, 'Edm.String'>;
  options?: BoUptOptions | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  levels?: DeserializedType<T, 'Edm.Int32'> | null;
  isItem?: BoYesNoEnum | null;
  parentId?: DeserializedType<T, 'Edm.String'> | null;
  userPermissionForms?: UserPermissionForm<T>[] | null;
  user?: UsersType<T> | null;
}
