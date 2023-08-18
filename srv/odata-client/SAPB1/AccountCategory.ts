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
import type { AccountCategoryApi } from './AccountCategoryApi';
import { AccountCategorySourceEnum } from './AccountCategorySourceEnum';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';

/**
 * This class represents the entity "AccountCategory" of service "SAPB1".
 */
export class AccountCategory<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AccountCategoryType<T>
{
  /**
   * Technical entity name for AccountCategory.
   */
  static _entityName = 'AccountCategory';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the AccountCategory entity
   */
  static _keys = ['CategoryCode'];
  /**
   * Category Code.
   */
  categoryCode!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Category Name.
   * @nullable
   */
  categoryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category Source.
   * @nullable
   */
  categorySource?: AccountCategorySourceEnum | null;
  /**
   * One-to-many navigation property to the {@link ChartOfAccounts} entity.
   */
  chartOfAccounts!: ChartOfAccounts<T>[];

  constructor(readonly _entityApi: AccountCategoryApi<T>) {
    super(_entityApi);
  }
}

export interface AccountCategoryType<
  T extends DeSerializers = DefaultDeSerializers
> {
  categoryCode: DeserializedType<T, 'Edm.Int32'>;
  categoryName?: DeserializedType<T, 'Edm.String'> | null;
  categorySource?: AccountCategorySourceEnum | null;
  chartOfAccounts: ChartOfAccountsType<T>[];
}
