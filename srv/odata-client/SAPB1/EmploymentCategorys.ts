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
import type { EmploymentCategorysApi } from './EmploymentCategorysApi';

/**
 * This class represents the entity "EmploymentCategorys" of service "SAPB1".
 */
export class EmploymentCategorys<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EmploymentCategorysType<T>
{
  /**
   * Technical entity name for EmploymentCategorys.
   */
  static _entityName = 'EmploymentCategorys';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the EmploymentCategorys entity
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

  constructor(readonly _entityApi: EmploymentCategorysApi<T>) {
    super(_entityApi);
  }
}

export interface EmploymentCategorysType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
