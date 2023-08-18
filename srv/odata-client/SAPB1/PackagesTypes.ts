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
import type { PackagesTypesApi } from './PackagesTypesApi';

/**
 * This class represents the entity "PackagesTypes" of service "SAPB1".
 */
export class PackagesTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PackagesTypesType<T>
{
  /**
   * Technical entity name for PackagesTypes.
   */
  static _entityName = 'PackagesTypes';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the PackagesTypes entity
   */
  static _keys = ['Code'];
  /**
   * Type.
   * @nullable
   */
  type?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Length 1.
   * @nullable
   */
  length1?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Length 1 Unit.
   * @nullable
   */
  length1Unit?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Length 2.
   * @nullable
   */
  length2?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Length 2 Unit.
   * @nullable
   */
  length2Unit?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Width 1.
   * @nullable
   */
  width1?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Width 1 Unit.
   * @nullable
   */
  width1Unit?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Width 2.
   * @nullable
   */
  width2?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Width 2 Unit.
   * @nullable
   */
  width2Unit?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Height 1.
   * @nullable
   */
  height1?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Height 1 Unit.
   * @nullable
   */
  height1Unit?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Height 2.
   * @nullable
   */
  height2?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Height 2 Unit.
   * @nullable
   */
  height2Unit?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Volume.
   * @nullable
   */
  volume?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Volume Unit.
   * @nullable
   */
  volumeUnit?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Weight 1.
   * @nullable
   */
  weight1?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Weight 1 Unit.
   * @nullable
   */
  weight1Unit?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Weight 2.
   * @nullable
   */
  weight2?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Weight 2 Unit.
   * @nullable
   */
  weight2Unit?: DeserializedType<T, 'Edm.Int32'> | null;

  constructor(readonly _entityApi: PackagesTypesApi<T>) {
    super(_entityApi);
  }
}

export interface PackagesTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  type?: DeserializedType<T, 'Edm.String'> | null;
  code: DeserializedType<T, 'Edm.Int32'>;
  length1?: DeserializedType<T, 'Edm.Double'> | null;
  length1Unit?: DeserializedType<T, 'Edm.Int32'> | null;
  length2?: DeserializedType<T, 'Edm.Double'> | null;
  length2Unit?: DeserializedType<T, 'Edm.Int32'> | null;
  width1?: DeserializedType<T, 'Edm.Double'> | null;
  width1Unit?: DeserializedType<T, 'Edm.Int32'> | null;
  width2?: DeserializedType<T, 'Edm.Double'> | null;
  width2Unit?: DeserializedType<T, 'Edm.Int32'> | null;
  height1?: DeserializedType<T, 'Edm.Double'> | null;
  height1Unit?: DeserializedType<T, 'Edm.Int32'> | null;
  height2?: DeserializedType<T, 'Edm.Double'> | null;
  height2Unit?: DeserializedType<T, 'Edm.Int32'> | null;
  volume?: DeserializedType<T, 'Edm.Double'> | null;
  volumeUnit?: DeserializedType<T, 'Edm.Int32'> | null;
  weight1?: DeserializedType<T, 'Edm.Double'> | null;
  weight1Unit?: DeserializedType<T, 'Edm.Int32'> | null;
  weight2?: DeserializedType<T, 'Edm.Double'> | null;
  weight2Unit?: DeserializedType<T, 'Edm.Int32'> | null;
}
