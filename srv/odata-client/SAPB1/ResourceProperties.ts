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
import type { ResourcePropertiesApi } from './ResourcePropertiesApi';

/**
 * This class represents the entity "ResourceProperties" of service "SAPB1".
 */
export class ResourceProperties<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ResourcePropertiesType<T>
{
  /**
   * Technical entity name for ResourceProperties.
   */
  static _entityName = 'ResourceProperties';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ResourceProperties entity
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

  constructor(readonly _entityApi: ResourcePropertiesApi<T>) {
    super(_entityApi);
  }
}

export interface ResourcePropertiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
