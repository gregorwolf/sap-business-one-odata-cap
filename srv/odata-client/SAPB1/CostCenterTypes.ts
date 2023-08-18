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
import type { CostCenterTypesApi } from './CostCenterTypesApi';
import { ProfitCenters, ProfitCentersType } from './ProfitCenters';

/**
 * This class represents the entity "CostCenterTypes" of service "SAPB1".
 */
export class CostCenterTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CostCenterTypesType<T>
{
  /**
   * Technical entity name for CostCenterTypes.
   */
  static _entityName = 'CostCenterTypes';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the CostCenterTypes entity
   */
  static _keys = ['CostCenterTypeCode'];
  /**
   * Cost Center Type Code.
   */
  costCenterTypeCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Cost Center Type Name.
   * @nullable
   */
  costCenterTypeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ProfitCenters} entity.
   */
  profitCenters!: ProfitCenters<T>[];

  constructor(readonly _entityApi: CostCenterTypesApi<T>) {
    super(_entityApi);
  }
}

export interface CostCenterTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  costCenterTypeCode: DeserializedType<T, 'Edm.String'>;
  costCenterTypeName?: DeserializedType<T, 'Edm.String'> | null;
  profitCenters: ProfitCentersType<T>[];
}
