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
import type { LandedCostsCodesApi } from './LandedCostsCodesApi';
import { BoAllocationByEnum } from './BoAllocationByEnum';

/**
 * This class represents the entity "LandedCostsCodes" of service "SAPB1".
 */
export class LandedCostsCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LandedCostsCodesType<T>
{
  /**
   * Technical entity name for LandedCostsCodes.
   */
  static _entityName = 'LandedCostsCodes';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the LandedCostsCodes entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allocation By.
   * @nullable
   */
  allocationBy?: BoAllocationByEnum | null;
  /**
   * Landed Costs Allocation Account.
   * @nullable
   */
  landedCostsAllocationAccount?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: LandedCostsCodesApi<T>) {
    super(_entityApi);
  }
}

export interface LandedCostsCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  allocationBy?: BoAllocationByEnum | null;
  landedCostsAllocationAccount?: DeserializedType<T, 'Edm.String'> | null;
}
