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
import type { DefaultElementsforCrApi } from './DefaultElementsforCrApi';

/**
 * This class represents the entity "DefaultElementsforCR" of service "SAPB1".
 */
export class DefaultElementsforCr<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DefaultElementsforCrType<T>
{
  /**
   * Technical entity name for DefaultElementsforCr.
   */
  static _entityName = 'DefaultElementsforCR';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the DefaultElementsforCr entity
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

  constructor(readonly _entityApi: DefaultElementsforCrApi<T>) {
    super(_entityApi);
  }
}

export interface DefaultElementsforCrType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
