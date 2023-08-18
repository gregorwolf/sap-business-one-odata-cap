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
import type { CostElementsApi } from './CostElementsApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';

/**
 * This class represents the entity "CostElements" of service "SAPB1".
 */
export class CostElements<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CostElementsType<T>
{
  /**
   * Technical entity name for CostElements.
   */
  static _entityName = 'CostElements';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the CostElements entity
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
   * Is Active.
   * @nullable
   */
  isActive?: BoYesNoEnum | null;
  /**
   * One-to-many navigation property to the {@link ChartOfAccounts} entity.
   */
  chartOfAccounts!: ChartOfAccounts<T>[];

  constructor(readonly _entityApi: CostElementsApi<T>) {
    super(_entityApi);
  }
}

export interface CostElementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  isActive?: BoYesNoEnum | null;
  chartOfAccounts: ChartOfAccountsType<T>[];
}
