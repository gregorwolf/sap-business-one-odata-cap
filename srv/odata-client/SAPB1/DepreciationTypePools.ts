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
import type { DepreciationTypePoolsApi } from './DepreciationTypePoolsApi';
import { DepreciationTypes, DepreciationTypesType } from './DepreciationTypes';

/**
 * This class represents the entity "DepreciationTypePools" of service "SAPB1".
 */
export class DepreciationTypePools<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DepreciationTypePoolsType<T>
{
  /**
   * Technical entity name for DepreciationTypePools.
   */
  static _entityName = 'DepreciationTypePools';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the DepreciationTypePools entity
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
   * One-to-many navigation property to the {@link DepreciationTypes} entity.
   */
  depreciationTypes!: DepreciationTypes<T>[];

  constructor(readonly _entityApi: DepreciationTypePoolsApi<T>) {
    super(_entityApi);
  }
}

export interface DepreciationTypePoolsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  depreciationTypes: DepreciationTypesType<T>[];
}
