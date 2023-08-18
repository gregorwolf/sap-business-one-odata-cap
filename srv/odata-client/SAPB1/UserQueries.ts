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
import type { UserQueriesApi } from './UserQueriesApi';
import { UserQueryTypeEnum } from './UserQueryTypeEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { QueryCategories, QueryCategoriesType } from './QueryCategories';

/**
 * This class represents the entity "UserQueries" of service "SAPB1".
 */
export class UserQueries<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements UserQueriesType<T>
{
  /**
   * Technical entity name for UserQueries.
   */
  static _entityName = 'UserQueries';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the UserQueries entity
   */
  static _keys = ['InternalKey', 'QueryCategory'];
  /**
   * Internal Key.
   */
  internalKey!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Query Category.
   */
  queryCategory!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Query Description.
   * @nullable
   */
  queryDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Query.
   * @nullable
   */
  query?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Procedure Alias.
   * @nullable
   */
  procedureAlias?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Procedure Name.
   * @nullable
   */
  procedureName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Query Type.
   * @nullable
   */
  queryType?: UserQueryTypeEnum | null;
  /**
   * Menu Caption.
   * @nullable
   */
  menuCaption?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parent Menu Id.
   * @nullable
   */
  parentMenuId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Menu Position.
   * @nullable
   */
  menuPosition?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Menu Unique Id.
   * @nullable
   */
  menuUniqueId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Enable Menu Entry.
   * @nullable
   */
  enableMenuEntry?: BoYesNoEnum | null;
  /**
   * One-to-one navigation property to the {@link QueryCategories} entity.
   */
  queryCategory2?: QueryCategories<T> | null;

  constructor(readonly _entityApi: UserQueriesApi<T>) {
    super(_entityApi);
  }
}

export interface UserQueriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  internalKey: DeserializedType<T, 'Edm.Int32'>;
  queryCategory: DeserializedType<T, 'Edm.Int32'>;
  queryDescription?: DeserializedType<T, 'Edm.String'> | null;
  query?: DeserializedType<T, 'Edm.String'> | null;
  procedureAlias?: DeserializedType<T, 'Edm.String'> | null;
  procedureName?: DeserializedType<T, 'Edm.String'> | null;
  queryType?: UserQueryTypeEnum | null;
  menuCaption?: DeserializedType<T, 'Edm.String'> | null;
  parentMenuId?: DeserializedType<T, 'Edm.Int32'> | null;
  menuPosition?: DeserializedType<T, 'Edm.Int32'> | null;
  menuUniqueId?: DeserializedType<T, 'Edm.String'> | null;
  enableMenuEntry?: BoYesNoEnum | null;
  queryCategory2?: QueryCategoriesType<T> | null;
}
