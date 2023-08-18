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
import type { LengthMeasuresApi } from './LengthMeasuresApi';

/**
 * This class represents the entity "LengthMeasures" of service "SAPB1".
 */
export class LengthMeasures<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LengthMeasuresType<T>
{
  /**
   * Technical entity name for LengthMeasures.
   */
  static _entityName = 'LengthMeasures';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the LengthMeasures entity
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
   * Unit Codefor Quantity Display.
   * @nullable
   */
  unitCodeforQuantityDisplay?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Lengthinmm.
   * @nullable
   */
  unitLengthinmm?: DeserializedType<T, 'Edm.Double'> | null;

  constructor(readonly _entityApi: LengthMeasuresApi<T>) {
    super(_entityApi);
  }
}

export interface LengthMeasuresType<
  T extends DeSerializers = DefaultDeSerializers
> {
  unitCode: DeserializedType<T, 'Edm.Int32'>;
  unitDisplay?: DeserializedType<T, 'Edm.String'> | null;
  unitName?: DeserializedType<T, 'Edm.String'> | null;
  unitCodeforQuantityDisplay?: DeserializedType<T, 'Edm.String'> | null;
  unitLengthinmm?: DeserializedType<T, 'Edm.Double'> | null;
}
