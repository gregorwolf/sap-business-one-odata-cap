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
import type { WeightMeasuresApi } from './WeightMeasuresApi';
import { BinLocations, BinLocationsType } from './BinLocations';

/**
 * This class represents the entity "WeightMeasures" of service "SAPB1".
 */
export class WeightMeasures<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WeightMeasuresType<T>
{
  /**
   * Technical entity name for WeightMeasures.
   */
  static _entityName = 'WeightMeasures';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the WeightMeasures entity
   */
  static _keys = ['UnitCode'];
  /**
   * Unit Code.
   */
  unitCode!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Unit Display.
   * @nullable
   */
  unitDisplay?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Name.
   * @nullable
   */
  unitName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Weightinmg.
   * @nullable
   */
  unitWeightinmg?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * One-to-many navigation property to the {@link BinLocations} entity.
   */
  binLocations!: BinLocations<T>[];

  constructor(readonly _entityApi: WeightMeasuresApi<T>) {
    super(_entityApi);
  }
}

export interface WeightMeasuresType<
  T extends DeSerializers = DefaultDeSerializers
> {
  unitCode: DeserializedType<T, 'Edm.Int32'>;
  unitDisplay?: DeserializedType<T, 'Edm.String'> | null;
  unitName?: DeserializedType<T, 'Edm.String'> | null;
  unitWeightinmg?: DeserializedType<T, 'Edm.Double'> | null;
  binLocations: BinLocationsType<T>[];
}
