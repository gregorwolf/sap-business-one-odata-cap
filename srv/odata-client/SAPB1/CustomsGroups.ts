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
import type { CustomsGroupsApi } from './CustomsGroupsApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { Items, ItemsType } from './Items';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';

/**
 * This class represents the entity "CustomsGroups" of service "SAPB1".
 */
export class CustomsGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CustomsGroupsType<T>
{
  /**
   * Technical entity name for CustomsGroups.
   */
  static _entityName = 'CustomsGroups';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the CustomsGroups entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number.
   * @nullable
   */
  number?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customs.
   * @nullable
   */
  customs?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Purchase.
   * @nullable
   */
  purchase?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Other.
   * @nullable
   */
  other?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Total.
   * @nullable
   */
  total?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Locked.
   * @nullable
   */
  locked?: BoYesNoEnum | null;
  /**
   * Customs Allocation Account.
   * @nullable
   */
  customsAllocationAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customs Expense Account.
   * @nullable
   */
  customsExpenseAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Port Address.
   * @nullable
   */
  portAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Port State.
   * @nullable
   */
  portState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link Items} entity.
   */
  items!: Items<T>[];
  /**
   * One-to-one navigation property to the {@link ChartOfAccounts} entity.
   */
  chartOfAccount?: ChartOfAccounts<T> | null;

  constructor(readonly _entityApi: CustomsGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface CustomsGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  number?: DeserializedType<T, 'Edm.String'> | null;
  customs?: DeserializedType<T, 'Edm.Double'> | null;
  purchase?: DeserializedType<T, 'Edm.Double'> | null;
  other?: DeserializedType<T, 'Edm.Double'> | null;
  total?: DeserializedType<T, 'Edm.Double'> | null;
  locked?: BoYesNoEnum | null;
  customsAllocationAccount?: DeserializedType<T, 'Edm.String'> | null;
  customsExpenseAccount?: DeserializedType<T, 'Edm.String'> | null;
  portAddress?: DeserializedType<T, 'Edm.String'> | null;
  portState?: DeserializedType<T, 'Edm.String'> | null;
  items: ItemsType<T>[];
  chartOfAccount?: ChartOfAccountsType<T> | null;
}
