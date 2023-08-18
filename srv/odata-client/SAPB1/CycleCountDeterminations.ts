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
import { CycleCountDeterminationSetup } from './CycleCountDeterminationSetup';
import type { CycleCountDeterminationsApi } from './CycleCountDeterminationsApi';
import { CycleCountDeterminationCycleByEnum } from './CycleCountDeterminationCycleByEnum';

/**
 * This class represents the entity "CycleCountDeterminations" of service "SAPB1".
 */
export class CycleCountDeterminations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CycleCountDeterminationsType<T>
{
  /**
   * Technical entity name for CycleCountDeterminations.
   */
  static _entityName = 'CycleCountDeterminations';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the CycleCountDeterminations entity
   */
  static _keys = ['WarehouseCode'];
  /**
   * Warehouse Code.
   */
  warehouseCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Cycle By.
   * @nullable
   */
  cycleBy?: CycleCountDeterminationCycleByEnum | null;
  /**
   * Cycle Count Determination Setup Collection.
   * @nullable
   */
  cycleCountDeterminationSetupCollection?:
    | CycleCountDeterminationSetup<T>[]
    | null;

  constructor(readonly _entityApi: CycleCountDeterminationsApi<T>) {
    super(_entityApi);
  }
}

export interface CycleCountDeterminationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  warehouseCode: DeserializedType<T, 'Edm.String'>;
  cycleBy?: CycleCountDeterminationCycleByEnum | null;
  cycleCountDeterminationSetupCollection?:
    | CycleCountDeterminationSetup<T>[]
    | null;
}
