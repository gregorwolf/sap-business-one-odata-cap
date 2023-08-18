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
import type { DimensionsApi } from './DimensionsApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { DistributionRules, DistributionRulesType } from './DistributionRules';
import { ProfitCenters, ProfitCentersType } from './ProfitCenters';

/**
 * This class represents the entity "Dimensions" of service "SAPB1".
 */
export class Dimensions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DimensionsType<T>
{
  /**
   * Technical entity name for Dimensions.
   */
  static _entityName = 'Dimensions';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the Dimensions entity
   */
  static _keys = ['DimensionCode'];
  /**
   * Dimension Code.
   */
  dimensionCode!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Dimension Name.
   * @nullable
   */
  dimensionName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Active.
   * @nullable
   */
  isActive?: BoYesNoEnum | null;
  /**
   * Dimension Description.
   * @nullable
   */
  dimensionDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link DistributionRules} entity.
   */
  distributionRules!: DistributionRules<T>[];
  /**
   * One-to-many navigation property to the {@link ProfitCenters} entity.
   */
  profitCenters!: ProfitCenters<T>[];

  constructor(readonly _entityApi: DimensionsApi<T>) {
    super(_entityApi);
  }
}

export interface DimensionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dimensionCode: DeserializedType<T, 'Edm.Int32'>;
  dimensionName?: DeserializedType<T, 'Edm.String'> | null;
  isActive?: BoYesNoEnum | null;
  dimensionDescription?: DeserializedType<T, 'Edm.String'> | null;
  distributionRules: DistributionRulesType<T>[];
  profitCenters: ProfitCentersType<T>[];
}
